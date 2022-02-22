pragma solidity >=0.7.0 <0.9.0;

contract HelloWord {

    uint counter; 

    constructor() {
        counter = 1;
    }

    function getCounter() public view returns (uint myCounter){
        myCounter = counter;
    }

    function setCounter(uint outerCounter) public {
        counter = outerCounter;
    }
}