// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./GovindaToken.sol";
import "./Treasury.sol";

contract GovindaDAO {
    GovindaToken public token;
    Treasury public treasury;

    struct Proposal {
        uint256 id;
        address payable to;
        uint256 amount;
        string description;
        uint256 votes;
        bool executed;
        mapping(address => bool) hasVoted;
    }

    uint256 public nextProposalId;
    mapping(uint256 => Proposal) public proposals;

    constructor(address tokenAddress, address payable treasuryAddress) {
        token = GovindaToken(tokenAddress);
        treasury = Treasury(treasuryAddress);
    }

    function createProposal(
        address payable to,
        uint256 amount,
        string memory description
    ) public {
        Proposal storage proposal = proposals[nextProposalId];
        proposal.id = nextProposalId;
        proposal.to = to;
        proposal.amount = amount;
        proposal.description = description;
        proposal.votes = 0;
        proposal.executed = false;
        nextProposalId++;
    }

    function vote(uint256 proposalId) public {
        Proposal storage proposal = proposals[proposalId];
        require(!proposal.hasVoted[msg.sender], "Already voted");
        uint256 balance = token.balanceOf(msg.sender);
        require(balance > 0, "No voting power");

        proposal.hasVoted[msg.sender] = true;
        proposal.votes += balance;
    }

    function executeProposal(uint256 proposalId) public {
        Proposal storage proposal = proposals[proposalId];
        require(!proposal.executed, "Already executed");
        require(
            proposal.votes > token.totalSupply() / 2,
            "Not enough votes"
        );

        proposal.executed = true;
        treasury.withdraw(proposal.to, proposal.amount);
    }
}
