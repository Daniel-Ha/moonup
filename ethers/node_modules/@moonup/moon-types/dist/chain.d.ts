interface Chain {
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls: string[];
    blockExplorerUrls: string[];
}
declare const MOON_SUPPORTED_NETWORKS: Chain[];
declare const getRpcUrls: (chainId: string | number) => string[];
declare const getChain: (chainId: string | number) => Chain | undefined;

export { type Chain, MOON_SUPPORTED_NETWORKS, getChain, getRpcUrls };
