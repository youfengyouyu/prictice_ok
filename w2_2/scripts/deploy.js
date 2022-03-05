const { artifacts,network } = require('hardhat');
const { writeAbiAddr } = require('./artifact_save.js')

async function main() {
  const [deployer] = await ethers.getSigners();

    const Score = await ethers.getContractFactory("Score");
    const score = await Score.deploy();

    const Teacher = await ethers.getContractFactory("Teacher");
    await score.deployed();

    const teacher = await Teacher.deploy(score.address);
    await teacher.deployed();
    console.log("学生合约地址：", score.address);
    console.log("老师合约地址：", teacher.address);
    let artifactScore = await artifacts.readArtifact("Score");
    await writeAbiAddr(artifactScore, score.address, "Score", network.name);
    let artifactTeacher = await artifacts.readArtifact("Teacher");
    await writeAbiAddr(artifactTeacher, teacher.address, "Teacher", network.name);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
