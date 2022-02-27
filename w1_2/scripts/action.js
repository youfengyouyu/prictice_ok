const { ethers, network } = require('hardhat')

const Addr = require(`../deployments/${network.name}/Counter.json`)

async function main() {
    let [owner] = await ethers.getSigners()

    let counter = await ethers.getContractAt('Counter', 
    Addr.address, owner)

    await counter.add(11)

    let newValue = await counter.counter()

    console.log(newValue)
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});