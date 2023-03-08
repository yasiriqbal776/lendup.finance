// SPDX-License-Identifier: Apache 2

pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol";
import "./NFTLoanSetters.sol";

contract NFTLoanSetup is NFTLoanSetters, ERC1967Upgrade {
    function setup(
        address implementation,
        address payable wormholeBridgeAddress,
        uint16 chainId
    ) public {

        _setWormholeContractAddress(wormholeBridgeAddress);
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _upgradeTo(implementation);
        setChainId(chainId);
    }
}
