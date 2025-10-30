const { expect } = require("chai");
const hre = require("hardhat");

describe("Treasury", function () {
  let treasury;
  let owner;

  beforeEach(async function () {
    [owner] = await hre.ethers.getSigners();
    const Treasury = await hre.ethers.getContractFactory("Treasury");
    treasury = await Treasury.deploy();
  });

  it("should receive ether and update the balance", async function () {
    const amount = hre.ethers.parseEther("1.0");
    await owner.sendTransaction({ to: treasury.target, value: amount });
    expect(await treasury.getBalance()).to.equal(amount);
  });

  it("should allow the owner to withdraw funds", async function () {
    const amount = hre.ethers.parseEther("1.0");
    await owner.sendTransaction({ to: treasury.target, value: amount });
    await treasury.withdraw(owner.address, amount);
    expect(await treasury.getBalance()).to.equal(0);
  });
});
