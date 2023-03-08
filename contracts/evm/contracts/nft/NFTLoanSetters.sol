// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "./NFTLoanState.sol";
import "./NFTLoanStructs.sol";
import "../interfaces/IWETH.sol";

/**
 * @title NFTLoanSetters
 */
contract NFTLoanSetters is NFTLoanState, AccessControl {
    using SafeERC20 for IERC20;
    using SafeERC20 for IWETH;

    using SafeMath for uint256;
    
    function _setWormholeContractAddress(address payable _wormholeContractAddress) internal {
        state.wormhole = _wormholeContractAddress;
    }

    function setMessageConsumed(bytes32 _messageId) internal {
        state.consumedMessages[_messageId] = true;
    }
    function setInitialized(address implementation) internal {
        state.initializedImplementations[implementation] = true;
    }

    function setChainId(uint16 chainId) internal {
        state.provider.chainId = chainId;
    }

    function setBridgeImplementation(uint16 chainId, bytes32 bridgeContract) internal {
        state.bridgeImplementations[chainId] = bridgeContract;
    }

    function setLoan(uint256 loanId, NFTLoanStructs.Loan memory loan) internal {
        state.loans[loanId] = loan;
    }

    function setTokenImplementation(address impl) internal {
        require(impl != address(0), "invalid implementation address");
        state.tokenImplementation = impl;
    }

    function setFinality(uint8 finality) internal {
        state.provider.finality = finality;
    }

    function incrementNextLoanId() internal {
        state.nextOrderId += 1;
    }

} // end of class