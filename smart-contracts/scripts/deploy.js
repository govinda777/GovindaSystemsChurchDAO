const hre = require("hardhat");

async function main() {
  const MembershipNFT = await hre.ethers.getContractFactory("MembershipNFT");
  const membershipNFT = await MembershipNFT.deploy();

  await membershipNFT.deployed();

  console.log("MembershipNFT deployed to:", membershipNFT.address);

  const Treasury = await hre.ethers.getContractFactory("Treasury");
  const treasury = await Treasury.deploy();

  await treasury.deployed();

  console.log("Treasury deployed to:", treasury.address);

  const GovindaDAO = await hre.ethers.getContractFactory("GovindaDAO");
  const govindaDAO = await GovindaDAO.deploy(membershipNFT.address, treasury.address);

  await govindaDAO.deployed();

  console.log("GovindaDAO deployed to:", govindaDAO.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
