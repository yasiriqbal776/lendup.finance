import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { LedgerWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter, ExodusWalletAdapter } from '@solana/wallet-adapter-wallets';
import { Commitment } from '@solana/web3.js';
export const SolanaWalletProvider: FC<{ children: any }> = props => {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = 'https://api.testnet.solana.com';

  const config = {
    commitment: 'processed' as Commitment,
  };
  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter({ network }),
      new SlopeWalletAdapter({ network }),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new ExodusWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint} config={config}>
      <WalletProvider wallets={wallets}>{props.children}</WalletProvider>
    </ConnectionProvider>
  );
};

export const useSolanaWallet = useWallet;
