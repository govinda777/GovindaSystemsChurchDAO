import { expect } from "chai";
import { ethers } from "hardhat";

describe("GovindaToken", function () {
  it("Should have the correct name and symbol", async function () {
    const GovindaToken = await ethers.getContractFactory("GovindaToken");
    const govindaToken = await GovindaToken.deploy();
    await govindaToken.waitForDeployment();

    expect(await govindaToken.name()).to.equal("Govinda Token");
    expect(await govindaToken.symbol()).to.equal("GOV");
  });
});
