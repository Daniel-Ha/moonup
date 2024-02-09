export interface Chain {
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
export declare const MOON_SUPPORTED_NETWORKS: Chain[];
export declare enum Storage {
    LOCAL = "local",
    SESSION = "session"
}
export declare const MOON_SESSION_KEY = "MoonSessionKey";
export interface MoonStorage {
    type: Storage;
    key: string;
    setItem(account: MoonAccount): void;
    getItem(): MoonAccount | null;
    removeItem(): void;
}
export interface MoonAccount {
    token: string;
    refreshToken: string;
    email: string;
    expiry: number;
    wallet: string;
    network: Chain;
}
export declare enum AUTH {
    OAUTH2 = "oauth2",
    JWT = "bearer",
    X_API_KEY = "x-api-key"
}
export interface MoonToken {
    type: AUTH;
    MoonAccount: MoonAccount;
    securityWorker: (securityData: any) => Promise<any> | any;
    CLIENT_ID?: string;
    CLIENT_SECRET?: string;
    REDIRECT_URI?: string;
}
export interface MoonSDKConfig {
    Auth: MoonToken;
    Storage: MoonStorage;
    Networks: Chain[];
}
