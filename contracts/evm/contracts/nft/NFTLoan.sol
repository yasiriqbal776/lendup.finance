// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "./NFTLoanStructs.sol";
import "../libraries/external/BytesLib.sol";
import "../interfaces/IWETH.sol";
import "./NFTLoanGovernance.sol";
import "./NFTLoanHelper.sol";
/**
 * @title NFTLoan
 */
contract NFTLoan is NFTLoanGovernance {

    using BytesLib for bytes;

    using SafeERC20 for IERC20;
    using SafeERC20 for IWETH;

    using SafeMath for uint256;
    receive() external payable {}

    /**
    * acceptOffer on same chain.
    */
    function acceptOffer(NFTLoanStructs.Offer memory offer, uint32 nonce ) external {
        { // stack too deep
            require(offer.nftChainId == chainId(), "Invalid target chain");
            address collateralNFT = _truncateAddress(offer.nftCollateralContract);
            require(collateralNFT != address(0), "Invalid collateral NFT");
            require(IERC721(collateralNFT).ownerOf(offer.nftCollateralId) == msg.sender, "Invalid NFT owner");
            require(offer.loanDuration > 0, "Invalid loan duration");
        }
        
        require(offer.loanPrincipalAmount > 0, "Invalid loan amount");
        require(offer.loanRepaymentAmount >= offer.loanPrincipalAmount, "Invalid repayment amount");

        //:TODO signature verifications should be done before any transfer or holding of nft.
        

        // here now we will start for loan
        _createLoan(offer, nonce);
    } // end of loan.


    function repayLoan(uint256 loanId, uint32 nonce) external {
        _repayLoan(loanId, nonce);
    }

    function liquidateLoan(uint256 loanId, uint32 nonce) external {
        _liquidateLoan(loanId, nonce);
    }
} // end of class