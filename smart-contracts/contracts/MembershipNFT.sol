// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MembershipNFT is ERC721Enumerable, Ownable {
    enum MembershipLevel { Visitor, Member, Deacon, Presbyter }

    struct MemberInfo {
        MembershipLevel level;
        uint256 votingPower;
    }

    mapping(uint256 => MemberInfo) public memberInfo;

    constructor() ERC721("Govinda Membership", "GMC") Ownable(msg.sender) {}

    function mint(address to, MembershipLevel level) public onlyOwner {
        uint256 tokenId = totalSupply();
        _safeMint(to, tokenId);
        uint256 votingPower = _getVotingPower(level);
        memberInfo[tokenId] = MemberInfo(level, votingPower);
    }

    function _getVotingPower(MembershipLevel level) internal pure returns (uint256) {
        if (level == MembershipLevel.Visitor) return 1;
        if (level == MembershipLevel.Member) return 2;
        if (level == MembershipLevel.Deacon) return 3;
        if (level == MembershipLevel.Presbyter) return 4;
        return 0;
    }
}
