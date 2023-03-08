// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract TestERC20 is ERC20 {

  constructor(
    string memory name, 
    string memory symbol
  ) ERC20(name, symbol) {
    _mint(_msgSender(), 7 * 10**14 * 10**18);
  }
}