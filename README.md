# Lendup Finance

We are building a cross-chain NFT loaning platform that enables NFT holders to unlock the value of their assets without selling them. We aim to provide borrowers with access to liquidity across multiple blockchain networks, including Ethereum, Fantom, Binance Smart Chain, Solana, Near and more. To ensure transparency and security, we use smart contracts, and for cross-chain compatibility, we leverage the wormhole bridge technology, which enables seamless asset transfer between different blockchain networks.

![](https://postimg.cc/Q95dyHgt)

Here is Figma link
![](https://www.figma.com/file/k8WvzrrWXqvXCOzOJSzghk/Lendup.-Finance?node-id=100-6892&t=PU1qW1HwNf41ffTB-0)

## Flow

![](https://i.postimg.cc/X7mpyF48/Screenshot-2023-03-09-at-2-50-21-AM.png)
![](https://i.postimg.cc/5040MSSx/Screenshot-2023-03-09-at-2-50-28-AM.png)


## Why?

Our approach to NFT lending fills a critical gap in the market, providing NFT holders with access to liquidity and lenders with new opportunities for earning returns. By leveraging the power of cross chain, we're creating a platform that has the potential to revolutionize the NFT and DeFi space. It will also helps in following points

- Liquidity: By allowing NFTs to be borrowed and lent across multiple blockchain networks, a cross-chain NFT loaning system can increase liquidity and trading volume for NFTs

- Diversification: A cross-chain NFT loaning system can allow users to diversify their NFT holdings across different blockchain networks, reducing their exposure to any one particular blockchain.

- Accessibility: A cross-chain NFT loaning system can provide greater accessibility for NFT owners and borrowers, as it allows them to participate in lending and borrowing activities regardless of the blockchain network they are using.

## How?

ChainCross will be completely decentralized and will use wormhole messaging as communication between multiple blockchains. We will Our Smart Contracts On Each chain. Flow will be following for cross chain borrowing.

1. Borrower will List NFT on platform. 
2. Lender will review and make offers.
3. Borrower will accept the offer. NFT will be escrowed to our contract and fund will be transfer from lender to borrower.
4. If it is cross chain offer. then NFT will be escrowed to our contract and cross chain message will be relayed to wormhole.
5. Vaa will be generated from wormhole guardians.
6. Submit VAA on target chain contract and target chain will release loan amount from lender to borrower designated address.
7. To Repay User will submit fund along with interest on target chain. and it will generate message to wormhole after validation of repay.
8. VAA will be generated from wormhole guardians.
9. Submit VAA on source chain and collateral will be released for user.


## Future Plan

As good as this is, there are still some things that need to be done to achieve many things

1. Complete frontend integration for same chain and cross chain.
2. Implement Vault System for instant loan.
3. Voting system to integrate new NFTs as collateral.
4. Audits
5. Mainnet launch
