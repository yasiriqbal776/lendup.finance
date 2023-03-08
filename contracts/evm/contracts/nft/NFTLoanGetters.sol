// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "./NFTLoanState.sol";
import "./NFTLoanStructs.sol";
import "../libraries/external/BytesLib.sol";
import "../interfaces/IWormhole.sol";

/**
 * @title NFTLoanGetters
 */
contract NFTLoanGetters is NFTLoanState {
    using BytesLib for bytes;

    uint16 public constant HUNDRED_PERCENT = 10000;

    function normalizeAmount(uint256 amount, uint8 decimals) internal pure returns(uint256){
        if (decimals > 8) {
            amount /= 10 ** (decimals - 8);
        }
        return amount;
    }

    function deNormalizeAmount(uint256 amount, uint8 decimals) internal pure returns(uint256){
        if (decimals > 8) {
            amount *= 10 ** (decimals - 8);
        }
        return amount;
    }

    function getNextLoanId() public view returns (uint256) {
        return state.nextOrderId;
        // return uint256(keccak256(abi.encode(state.nextOrderId, block.timestamp)));
    }

    function isMessageConsumed(bytes32 _messageId) public view returns (bool) {
        return state.consumedMessages[_messageId];
    }

    function wormhole() public view returns (IWormhole) {
        return IWormhole(state.wormhole);
    }

    function isInitialized(address impl) public view returns (bool) {
        return state.initializedImplementations[impl];
    }

    function chainId() public view returns (uint16){
        return state.provider.chainId;
    }


    function tokenImplementation() public view returns (address){
        return state.tokenImplementation;
    }

    function finality() public view returns (uint8) {
        return state.provider.finality;
    }

    function bridgeContracts(uint16 chainId_) public view returns (bytes32){
        return state.bridgeImplementations[chainId_];
    }

    /*
     * @dev Truncate a 32 byte array to a 20 byte address.
     *      Reverts if the array contains non-0 bytes in the first 12 bytes.
     *
     * @param bytes32 bytes The 32 byte array to be converted.
     */
    function _truncateAddress(bytes32 b) internal pure returns (address) {
        require(bytes12(b) == 0, "invalid EVM address");
        return address(uint160(uint256(b)));
    }

    /**
     * @notice A convenience function computing the adminFee taken from a specified quantity of interest.
     *
     * @param _interestDue - The amount of interest due, measured in the smallest quantity of the ERC20 currency being
     * used to pay the interest.
     * @param _adminFeeInBasisPoints - The percent (measured in basis points) of the interest earned that will be taken
     * as a fee by the contract admins when the loan is repaid. The fee is stored in the loan struct to prevent an
     * attack where the contract admins could adjust the fee right before a loan is repaid, and take all of the interest
     * earned.
     *
     * @return The quantity of ERC20 currency (measured in smalled units of that ERC20 currency) that is due as an admin
     * fee.
     */
    function computeAdminFee(uint256 _interestDue, uint256 _adminFeeInBasisPoints) external pure returns (uint256) {
        return (_interestDue * _adminFeeInBasisPoints) / HUNDRED_PERCENT;
    }


    function getLoan(uint256 loanId) public view returns (NFTLoanStructs.Loan memory) {
        return state.loans[loanId];
    }
} // end of class