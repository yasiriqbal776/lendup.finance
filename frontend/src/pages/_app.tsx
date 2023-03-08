import { persistor, useStore } from '@/state';
import GlobalStyle from '@/style/Global';
import type { AppProps } from 'next/app';
import Providers from '@/Providers';
import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react';
import { NextPage } from 'next';
import { Fragment } from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

function MyApp(props: AppProps<{ initialReduxState: any }>) {
  const { pageProps } = props;
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover" />
        <meta name="description" content="LendUP | DeFi Cross-chain Lending And Borrow using Wormhole" />
        <meta name="theme-color" content="#1FC7D4" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:description" content="LendUP | DeFi Cross-chain Lending And Borrow using Wormhole" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LendUP | DeFi Cross-chain Lending And Borrow using Wormhole" />
      </Head>

      <Providers store={store}>
        <GlobalStyle />
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <App {...props} />
          <Footer />
        </PersistGate>
      </Providers>
    </>
  );
}

type NextPageWithLayout = NextPage & {
  Layout?: React.FC<React.PropsWithChildren<unknown>>;
  /** render component without all layouts */
  pure?: true;
  isShowScrollToTopButton?: true;
  /**
   * Meta component for page, hacky solution for static build page to avoid `PersistGate` which blocks the page from rendering
   */
  Meta?: React.FC<React.PropsWithChildren<unknown>>;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

//:TODO enable after sentry integration
// const ProductionErrorBoundary = process.env.NODE_ENV === 'production' ? SentryErrorBoundary : Fragment
const ProductionErrorBoundary = Fragment;
const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  if (Component.pure) {
    return <Component {...pageProps} />;
  }

  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || Fragment;

  return (
    <ProductionErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductionErrorBoundary>
  );
};

export default MyApp;
