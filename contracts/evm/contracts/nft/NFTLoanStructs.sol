// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

/**
 * @title NFTLoanStructs
 */
contract NFTLoanStructs {
    
    enum LoanStatusType {
        ACTIVE,
        LIQUIDATED,
        REPAID
    }

    struct Loan {
        uint256 loanId;
        uint256 nftCollateralId;
        bytes32 nftCollateralContract;
        uint16 nftChainId;
        uint256 loanPrincipalAmount; // amount of loan unlock on target chain
        uint256 loanRepaymentAmount; // fixed repayment amount.
        bytes32 loanERC20Contract;
        uint256 loanStartTime; // timestamp of when the loan was started
        uint32 loanDuration; // duration of the loan in seconds
        uint16 loanChainId;

        uint16 loanAdminFeeInBasisPoints;
        
        bytes32 lender; // address of the borrower on the target chain
        bytes32 borrower; // address of the borrower on the source chain
        LoanStatusType status;
    }

    struct Offer {
        uint256 loanPrincipalAmount;
        uint256 loanRepaymentAmount;
        uint8 nftChainId;
        uint256 nftCollateralId;
        bytes32 nftCollateralContract;
        uint32 loanDuration;
        uint16 loanAdminFeeInBasisPoints;
        bytes32 loanERC20Contract;
        uint8 offerChainId;
        bytes32 lender;
    }

   struct Signature {
        uint256 nonce;
        uint256 expiry;
        address signer;
        bytes signature;
    }
} // end of class 