pragma solidity >=0.4.22 <0.9.0;

contract Counter {
    uint public counter;

    constructor(uint value)  public {
        counter = value;
    }

    function count() public{
        counter = counter + 1;

        
    }

    function add(uint value) public {
        counter = counter + value;
    }
}