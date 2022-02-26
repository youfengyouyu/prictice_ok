const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Counter", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(5);
    await counter.deployed();

    expect(await counter.counter()).to.equal(5);

    await counter.count();

    // wait until the transaction is mined
    let value = await counter.counter();

    console.log(value)

    expect(value).to.equal(6);
  });
});
