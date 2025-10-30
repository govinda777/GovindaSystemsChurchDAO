const { expect } = require("chai");
const hre = require("hardhat");

describe("MembershipNFT", function () {
  let membershipNFT;
  let owner;

  beforeEach(async function () {
    [owner] = await hre.ethers.getSigners();
    const MembershipNFT = await hre.ethers.getContractFactory("MembershipNFT");
    membershipNFT = await MembershipNFT.deploy();
  });

  it("should mint a new NFT and assign the correct voting power", async function () {
    await membershipNFT.mint(owner.address, 0); // Visitor
    expect(await membershipNFT.ownerOf(0)).to.equal(owner.address);
    const memberInfo = await membershipNFT.memberInfo(0);
    expect(memberInfo.level).to.equal(0); // Visitor
    expect(memberInfo.votingPower).to.equal(1);
  });
});
