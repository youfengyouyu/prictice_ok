pragma solidity >=0.4.22 <0.9.0;

contract Counter {
    uint counter;

    constructor()  public {
        counter = 0;
    }

    function count() public{
        counter = counter + 1;
    }
}