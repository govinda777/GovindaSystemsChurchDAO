// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Treasury is Ownable {
    constructor() Ownable(msg.sender) {}

    receive() external payable {}

    function withdraw(address to, uint256 amount) public onlyOwner {
        payable(to).transfer(amount);
    }
}
