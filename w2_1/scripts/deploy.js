const { artifacts,network } = require('hardhat');
const { writeAbiAddr } = require('./artifact_save.js')

async function main() {
  const Bank = await ethers.getContractFactory("Bank");
  const bank = await Bank.deploy();

  await bank.deployed();

  console.log("bank deployed to:", bank.address);

  let Artifact = await artifacts.readArtifact("Bank");
  await writeAbiAddr(Artifact, bank.address, "Bank", network.name);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
