import { MoonSDK } from '@moonup/moon-sdk';
import { RequestArguments } from 'eip1193-provider';
import { providers } from 'ethers';
import { MoonSigner } from './signer.mjs';
import { MoonProviderOptions } from './types.mjs';
import '@ethersproject/abstract-provider';
import '@ethersproject/abstract-signer';
import '@ethersproject/bytes';
import '@ethersproject/providers';
import '@moonup/moon-api';

declare class JsonRpcProvider {
    chainId: number;
    http: providers.JsonRpcProvider;
    sdk: MoonSDK;
    signer: MoonSigner;
    config: MoonProviderOptions;
    constructor(options: MoonProviderOptions);
    request(request: RequestArguments): Promise<any>;
    updateConfig(options: MoonProviderOptions): void;
}

export { JsonRpcProvider };
