import { AUTH } from './auth.js';
import { Chain } from './chain.js';
import { S as Storage, M as MoonStorage } from './account-7sEGjAe_.js';
import 'events';

interface MoonAuthConfig {
    AuthType: AUTH;
    CLIENT_SECRET?: string;
    CLIENT_ID?: string;
    REDIRECT_URI?: string;
    X_API_KEY?: string;
}
interface MoonStorageConfig {
    type: Storage;
    key: string;
}
interface MoonConfig {
    Storage: MoonStorageConfig;
    Auth: MoonAuthConfig;
    Networks?: Chain[];
}
interface MoonToken {
    type: AUTH;
    securityWorker?: (securityData: any) => Promise<any>;
    CLIENT_ID?: string;
    CLIENT_SECRET?: string;
    REDIRECT_URI?: string;
}
interface MoonSDKConfig {
    Auth: MoonToken;
    Storage: MoonStorage;
    Networks: Chain[];
}

export type { MoonAuthConfig, MoonConfig, MoonSDKConfig, MoonStorageConfig, MoonToken };
