// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "./NFTLoanSetters.sol";
import "./NFTLoanStructs.sol";
import "../libraries/external/BytesLib.sol";
import "./NFTLoanGetters.sol";

/**
 * @title NFTLoanHelper
 */
contract NFTLoanHelper is NFTLoanGetters, NFTLoanSetters {

    event LoanCreated(uint256 loanId);
    event LoanRepayed(uint256 loanId);
    event LoanLiquidated(uint256 loanId);

     /* @dev Transfers several types of NFTs using a wrapper that knows how to handle each case.
     *
     * @param offer - Struct containing all the offer's parameters
     * @param _sender - Current owner of the NFT
     * @param _recipient - Recipient of the transfer
     */
    function _transferNFT(
        bytes32 nftCollateralContract,
        uint256 nftCollateralId,
        address _from,
        address _recipient
    ) internal {

        address nftContract = _truncateAddress(nftCollateralContract);
        IERC721(nftContract).transferFrom(
                _from,
                _recipient,
                nftCollateralId
        );
    }
    function _createLoan(NFTLoanStructs.Offer memory offer, uint32 nonce ) internal returns (uint256) {
        
        NFTLoanStructs.Loan memory loan = initializeLoan(offer);
        // first transfer nft to contract.
        _transferNFT(offer.nftCollateralContract, offer.nftCollateralId,  msg.sender, address(this));
        address tokenContract = _truncateAddress(offer.loanERC20Contract);
        address lender = _truncateAddress(offer.lender);
        // Transfer principal from lender to borrower.
        IERC20(tokenContract).transferFrom(lender, msg.sender, loan.loanPrincipalAmount);
        setLoan(loan.loanId, loan);
        
        if (offer.offerChainId == chainId()) {
            // it means offer is on same chain.
            emit LoanCreated(loan.loanId);
        } else{ 
            // it means offer is made on cros chain so send to wormhole.
            return wormhole().publishMessage{value: 0}(
                nonce,
                encodeLoan(loan),
                finality()
            );

        }
        incrementNextLoanId();
        return 0;
    } // end of create loan


    // for repay loan
    function _repayLoan(uint256 loainId, uint32 nonce) internal returns (uint256) {
        NFTLoanStructs.Loan memory loan = getLoan(loainId);
        require(loan.loanChainId == chainId(), "Invalid chain");
        require(loan.status == NFTLoanStructs.LoanStatusType.ACTIVE, "Loan is not active");
        require(block.timestamp < loan.loanStartTime + loan.loanDuration, "Loan is expired");
        address tokenContract = _truncateAddress(loan.loanERC20Contract);
        address lender = _truncateAddress(loan.lender);
        IERC20(tokenContract).transferFrom(msg.sender, lender, loan.loanRepaymentAmount);
        loan.status = NFTLoanStructs.LoanStatusType.REPAID;
        setLoan(loainId, loan);

        if (loan.nftChainId == chainId()) {
            // it means offer is on same chain.
            _transferNFT(loan.nftCollateralContract, loan.nftCollateralId, address(this), _truncateAddress(loan.borrower));
            emit LoanRepayed(loan.loanId);
        } else {
            // it means offer is made on cros chain so send to wormhole.
            return wormhole().publishMessage{value: 0}(
                nonce,
                encodeLoan(loan),
                finality()
            );
        }

        return 0;

    }

    function _liquidateLoan(uint256 loanId, uint32 nonce) internal returns (uint256) {
        NFTLoanStructs.Loan memory loan = getLoan(loanId);
        require(loan.loanChainId == chainId(), "Invalid chain");
        require(loan.status == NFTLoanStructs.LoanStatusType.ACTIVE, "Loan is not active");
        require(block.timestamp > loan.loanStartTime + loan.loanDuration, "Loan is not expired");

        loan.status = NFTLoanStructs.LoanStatusType.LIQUIDATED;
        setLoan(loanId, loan);

        if (loan.nftChainId == chainId()) {
            // it means offer is on same chain.
            _transferNFT(loan.nftCollateralContract, loan.nftCollateralId, address(this), _truncateAddress(loan.lender));
            emit LoanLiquidated(loan.loanId);
        } else {
            // it means offer is made on cros chain so send to wormhole.
            return wormhole().publishMessage{value: 0}(
                nonce,
                encodeLoan(loan),
                finality()
            );
        }

        return 0;
    }

    function initializeLoan(NFTLoanStructs.Offer memory offer) internal view returns (NFTLoanStructs.Loan memory loan) {
        loan = NFTLoanStructs.Loan({
            loanId: getNextLoanId(),
            nftCollateralId: offer.nftCollateralId,
            nftCollateralContract: offer.nftCollateralContract,
            nftChainId: offer.nftChainId,
            loanPrincipalAmount: offer.loanPrincipalAmount, 
            loanRepaymentAmount: offer.loanRepaymentAmount,
            loanERC20Contract: offer.loanERC20Contract,
            loanStartTime: block.timestamp,
            loanDuration: offer.loanDuration,
            loanChainId: offer.offerChainId,
            loanAdminFeeInBasisPoints: offer.loanAdminFeeInBasisPoints, //loanAdminFeeInBasisPoints
            lender: offer.lender,
            borrower: bytes32(uint256(uint160(msg.sender))),
            status: NFTLoanStructs.LoanStatusType.ACTIVE
        });
    }

    function encodeLoan(NFTLoanStructs.Loan memory loan) public pure returns (bytes memory encoded) {
        encoded = abi.encodePacked(
            loan.loanId, //currentLoanId,
            loan.nftCollateralContract,
            loan.nftCollateralId,
            loan.nftChainId,
            loan.loanPrincipalAmount, 
            loan.loanRepaymentAmount,
            loan.loanERC20Contract,
            loan.loanStartTime,
            loan.loanDuration,
            loan.loanChainId,
            loan.loanAdminFeeInBasisPoints,
            loan.lender,
            loan.borrower,
            loan.status
        );
    }
}