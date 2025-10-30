const { expect } = require("chai");
const hre = require("hardhat");

describe("GovindaDAO", function () {
  let govindaDAO, membershipNFT, treasury;
  let owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await hre.ethers.getSigners();
    const MembershipNFT = await hre.ethers.getContractFactory("MembershipNFT");
    membershipNFT = await MembershipNFT.deploy();

    const Treasury = await hre.ethers.getContractFactory("Treasury");
    treasury = await Treasury.deploy();

    const GovindaDAO = await hre.ethers.getContractFactory("GovindaDAO");
    govindaDAO = await GovindaDAO.deploy(membershipNFT.target, treasury.target);
  });

  it("should allow a member to create a proposal", async function () {
    await membershipNFT.mint(owner.address, 1); // Member
    const target = addr1.address;
    const data = "0x";
    await govindaDAO.createProposal(target, data);
    const proposal = await govindaDAO.proposals(1);
    expect(proposal.proposer).to.equal(owner.address);
  });

  it("should allow a member to vote on a proposal", async function () {
    await membershipNFT.mint(owner.address, 1); // Member
    const target = addr1.address;
    const data = "0x";
    await govindaDAO.createProposal(target, data);
    await govindaDAO.vote(1, true);
    const proposal = await govindaDAO.proposals(1);
    expect(proposal.forVotes).to.equal(2);
  });
});
