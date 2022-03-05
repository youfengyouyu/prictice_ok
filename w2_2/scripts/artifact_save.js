const fs = require('fs')
const path = require('path')
const util = require('util')

const writeFile = util.promisify(fs.writeFile)

async function writeAbiAddr(artifacts, addr, name, network) {
    const deployments = {}
    deployments['address'] = addr
    deployments['contractName'] = artifacts.contractName
    await writeLog(deployments, name, network)

    const abis = {}
    abis['contractName'] = artifacts.contractName
    abis['abi'] = artifacts.abi

    const deploymentPath = path.resolve(__dirname, `../deployments/abi/${abis['contractName']}.json`)
    await writeFile(deploymentPath, JSON.stringify(abis, null, 2))
}

async function writeAbis(artifacts, name, network) {
    const deployments = {}
    deployments['address'] = artifacts.address
    deployments['contractName'] = artifacts.contractName
    await writeLog(deployments, name, network)

    const abis = {}
    abis['contractName'] = artifacts.contractName
    abis['abi'] = artifacts.abi

    const deploymentPath = path.resolve(__dirname, `../deployments/abi/${abis["contractName"]}.json`);
    await writeFile(deploymentPath, JSON.stringify(abis, null, 2));
}

async function writeLog(deployments, name, network){
    const deploymentPath = path.resolve(__dirname, `../deployments/${network}/${name}.json`);
    await writeFile(deploymentPath, JSON.stringify(deployments, null, 2));
    console.log(`Exported deployments into ${deploymentPath}`);
}

module.exports = {
    writeLog,
    writeAbis,
    writeAbiAddr,
}