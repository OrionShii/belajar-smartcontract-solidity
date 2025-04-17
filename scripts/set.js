const hre = require("hardhat");

async function main() {
  const CobaFactory = await hre.ethers.getContractFactory("Coba");
  const cb = await CobaFactory.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

  const textRaw = await cb.setText ("Okky TW");
  console.log(`text = ${textRaw}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
