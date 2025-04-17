const hre = require("hardhat");

async function main() {
  const CobaFactory = await hre.ethers.getContractFactory("Coba");
  const cb = await CobaFactory.deploy();

  console.log("cb deployed to:", cb.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
