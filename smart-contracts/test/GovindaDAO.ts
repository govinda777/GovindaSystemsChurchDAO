import { expect } from "chai";
import { ethers } from "hardhat";

describe("GovindaDAO", function () {
  async function deployContracts() {
    const [owner, otherAccount] = await ethers.getSigners();

    const GovindaToken = await ethers.getContractFactory("GovindaToken");
    const govindaToken = await GovindaToken.deploy();

    const Treasury = await ethers.getContractFactory("Treasury");
    const treasury = await Treasury.deploy();

    const GovindaDAO = await ethers.getContractFactory("GovindaDAO");
    const govindaDAO = await GovindaDAO.deploy(
      await govindaToken.getAddress(),
      await treasury.getAddress()
    );

    return { govindaToken, treasury, govindaDAO, owner, otherAccount };
  }

  it("Should not allow non-owner to withdraw from treasury", async function () {
    const { treasury, govindaDAO, otherAccount } = await deployContracts();
    await expect(
      treasury.connect(otherAccount).withdraw(otherAccount.address, 100)
    ).to.be.revertedWithCustomError(treasury, "OwnableUnauthorizedAccount");
  });

  it("Should allow DAO to withdraw from treasury after ownership transfer", async function () {
    const { treasury, govindaDAO, owner } = await deployContracts();
    await treasury.transferOwnership(await govindaDAO.getAddress());

    // This will fail because the DAO contract is not executing the call.
    // We will create a proposal to test this properly.
    await expect(
      treasury.connect(owner).withdraw(owner.address, 100)
    ).to.be.revertedWithCustomError(treasury, "OwnableUnauthorizedAccount");
  });

  it("Should execute a proposal and withdraw funds from the treasury", async function () {
    const { govindaToken, treasury, govindaDAO, owner, otherAccount } =
      await deployContracts();

    // Mint some tokens to the owner to vote
    await govindaToken.mint(owner.address, ethers.parseEther("10"));

    // Transfer treasury ownership to the DAO
    await treasury.transferOwnership(await govindaDAO.getAddress());

    // Fund the treasury
    await owner.sendTransaction({
      to: await treasury.getAddress(),
      value: ethers.parseEther("1"),
    });

    // Create a proposal
    await govindaDAO.createProposal(
      otherAccount.address,
      ethers.parseEther("0.5"),
      "Test Proposal"
    );

    // Vote on the proposal
    await govindaDAO.vote(0);

    // Execute the proposal
    const balanceBefore = await ethers.provider.getBalance(otherAccount.address);
    await govindaDAO.executeProposal(0);
    const balanceAfter = await ethers.provider.getBalance(otherAccount.address);
    expect(balanceAfter - balanceBefore).to.equal(ethers.parseEther("0.5"));
  });
});
