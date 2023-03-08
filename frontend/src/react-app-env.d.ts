interface Window {
  ethereum?: {
    isMetaMask?: true;
    request?: (...args: any[]) => Promise<void>;
  };
  tronLink?: {
    isTronLink?: true;
    request?: (...args: any[]) => Promise<boolean>;
  };
  tronWeb?: {
    trx?: {
      getBalance?: (...args: any[]) => Promise<number>;
      sign?: (...args: any[]) => Promise<RawTransaction>;
      sendRawTransaction?: (...args: any[]) => Promise<any>;
      getUnconfirmedTransactionInfo?: (...args: any[]) => Promise<any>;
    };
    defaultAddress?: {
      base58: string;
    };
    isInstalled?: () => boolean;
    fullNode?: {
      host: string;
    };
    solidityNode?: {
      host: string;
    };
    eventServer?: {
      host: string;
    };
    isConnected?: () => boolean;
    isTronLink?: boolean;
    isSunNetwork?: boolean;
    isShasta?: boolean;
    isMainnet?: boolean;
    isNile?: boolean;
    isCustom?: boolean;
    isFullNode?: boolean;
    isSolidityNode?: boolean;
    isEventServer?: boolean;
    isInjected?: boolean;
    isInstalled?: boolean;
    isLogin?: boolean;
    networkVersion?: string;
    network?: {
      id: string;
    };
    version?: {
      tronWeb: string;
    };
    contract?: (...args: any[]) => any;
    transactionBuilder?: {
      triggerSmartContract: (...args: any[]) => any;
    };
    fullNode?: {
      request: (...args: any[]) => any;
    };
    solidityNode?: {
      request: (...args: any[]) => any;
    };
    eventServer?: {
      request: (...args: any[]) => any;
    };
    currentProvider?: {
      host: string;
    };
    ready?: (...args: any[]) => any;
    injectPromise?: (...args: any[]) => any;
    connect?: (...args: any[]) => any;
    on?: (...args: any[]) => any;
    injectedProvider?: {
      host: string;
      enable: (...args: any[]) => any;
    };
    event?: {
      trigger: (...args: any[]) => any;
      injectPromise?: (...args: any[]) => any;
    };
  };
}

type SerializedBigNumber = string;
