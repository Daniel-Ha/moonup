import { MoonSDK } from '@moonup/moon-sdk';

interface MoonProviderOptions {
    chainId: number;
    SDK: MoonSDK;
    address: string;
}
interface ProviderRpcError extends Error {
    code: number;
    data?: unknown;
}

export type { MoonProviderOptions, ProviderRpcError };
