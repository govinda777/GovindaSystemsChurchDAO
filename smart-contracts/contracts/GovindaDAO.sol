// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./MembershipNFT.sol";
import "./Treasury.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GovindaDAO is Ownable {
    MembershipNFT public membershipNFT;
    Treasury public treasury;

    enum ProposalState { Pending, Active, Succeeded, Defeated, Executed }

    struct Proposal {
        uint256 id;
        address proposer;
        address target;
        bytes data;
        uint256 voteStart;
        uint256 voteEnd;
        uint256 forVotes;
        uint256 againstVotes;
        bool executed;
        mapping(address => bool) hasVoted;
    }

    uint256 public proposalCount;
    mapping(uint256 => Proposal) public proposals;

    event ProposalCreated(uint256 id, address proposer, address target, bytes data, uint256 voteStart, uint256 voteEnd);
    event Voted(uint256 proposalId, address voter, bool inFavor, uint256 votingPower);

    constructor(address _membershipNFT, address _treasury) Ownable(msg.sender) {
        membershipNFT = MembershipNFT(_membershipNFT);
        treasury = Treasury(payable(_treasury));
    }

    function createProposal(address target, bytes memory data) public {
        uint256 proposerVotingPower = membershipNFT.balanceOf(msg.sender);
        require(proposerVotingPower > 0, "DAO: proposer must have voting power");

        proposalCount++;
        Proposal storage newProposal = proposals[proposalCount];
        newProposal.id = proposalCount;
        newProposal.proposer = msg.sender;
        newProposal.target = target;
        newProposal.data = data;
        newProposal.voteStart = block.timestamp;
        newProposal.voteEnd = block.timestamp + 1 weeks; // 1 week voting period
        newProposal.executed = false;

        emit ProposalCreated(proposalCount, msg.sender, target, data, newProposal.voteStart, newProposal.voteEnd);
    }

    function vote(uint256 proposalId, bool inFavor) public {
        Proposal storage proposal = proposals[proposalId];
        require(block.timestamp >= proposal.voteStart && block.timestamp < proposal.voteEnd, "DAO: voting is not active");
        require(!proposal.hasVoted[msg.sender], "DAO: already voted");

        uint256 votingPower = 0;
        uint256 balance = membershipNFT.balanceOf(msg.sender);
        for(uint i = 0; i < balance; i++){
            uint256 tokenId = membershipNFT.tokenOfOwnerByIndex(msg.sender, i);
            (, uint256 vp) = membershipNFT.memberInfo(tokenId);
            votingPower += vp;
        }

        require(votingPower > 0, "DAO: no voting power");

        proposal.hasVoted[msg.sender] = true;
        if (inFavor) {
            proposal.forVotes += votingPower;
        } else {
            proposal.againstVotes += votingPower;
        }

        emit Voted(proposalId, msg.sender, inFavor, votingPower);
    }

    function executeProposal(uint256 proposalId) public onlyOwner {
        Proposal storage proposal = proposals[proposalId];
        require(block.timestamp >= proposal.voteEnd, "DAO: voting has not ended");
        require(!proposal.executed, "DAO: proposal already executed");
        require(proposal.forVotes > proposal.againstVotes, "DAO: proposal did not pass");

        proposal.executed = true;
        (bool success, ) = proposal.target.call(proposal.data);
        require(success, "DAO: proposal execution failed");
    }
}
