import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { HistoryManagerProvider } from '@/contexts/HistoryContext';
import { SolanaWalletProvider } from './contexts/Wallets/SolanaWalletContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider("https://rpc.ankr.com/fantom"),
})
const Providers: React.FC<React.PropsWithChildren<{ store: Store; children: React.ReactNode }>> = ({ children, store }) => {
  return (
    <Provider store={store}>
      <WagmiConfig client={client}>

        <SolanaWalletProvider>
          <ThemeContextProvider>
            <HistoryManagerProvider>{children}</HistoryManagerProvider>
          </ThemeContextProvider>
        </SolanaWalletProvider>
      </WagmiConfig>

    </Provider>
  );
};

export default Providers;
