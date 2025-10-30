// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Treasury is Ownable {
    event Deposit(address indexed from, uint256 amount);
    event Withdrawal(address indexed to, uint256 amount);

    constructor() Ownable(msg.sender) {}

    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(address payable to, uint256 amount) public onlyOwner {
        require(address(this).balance >= amount, "Treasury: insufficient funds");
        emit Withdrawal(to, amount);
        to.transfer(amount);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
