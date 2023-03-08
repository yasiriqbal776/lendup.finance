// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "./NFTLoanStructs.sol";

contract NFTLoanStorage {
    struct Provider {
        uint16 chainId;
        uint16 governanceChainId;
        // Required number of block confirmations to assume finality
        uint8 finality;
        bytes32 governanceContract;
        address WETH;
    }
    struct State {
        address payable wormhole;
        address tokenImplementation;

        uint256 nextOrderId;

        Provider provider;

        // Mapping of consumed governance actions
        mapping(bytes32 => bool) consumedGovernanceActions;

        // Mapping of loans
        mapping(uint256 => NFTLoanStructs.Loan) loans;

        // Mapping of initialized implementations
        mapping(address => bool) initializedImplementations;

        // Mapping of bridge contracts on other chains
        mapping(uint16 => bytes32) bridgeImplementations;

        mapping(bytes32 => bool) consumedMessages; // for cross chain when message is consumed it will be true
    }
}
 
/**
 * @title NFTLoanState
 */
contract NFTLoanState {
    NFTLoanStorage.State state;
} // end of class