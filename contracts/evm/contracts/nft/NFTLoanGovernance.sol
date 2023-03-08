// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

import "./NFTLoanSetters.sol";
import "./NFTLoanGetters.sol";
import "./NFTLoanHelper.sol";

contract NFTLoanGovernance is  ERC1967Upgrade, NFTLoanHelper  {
    event ContractUpgraded(address indexed oldContract, address indexed newContract);

    /// @dev upgrade serves to upgrade contract implementations
    function upgrade(address newImplementation) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "Caller is not a admin");

        address currentImplementation = _getImplementation();

        _upgradeTo(newImplementation);

        /// @dev call initialize function of the new implementation
        (bool success, bytes memory reason) = newImplementation.delegatecall(abi.encodeWithSignature("initialize()"));

        require(success, string(reason));

        emit ContractUpgraded(currentImplementation, newImplementation);
    }
}