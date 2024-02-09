import { Provider, TransactionRequest as TransactionRequest$1 } from '@ethersproject/abstract-provider';
import { TypedDataDomain, TypedDataField, Signer, TypedDataSigner } from '@ethersproject/abstract-signer';
import { BytesLike } from '@ethersproject/bytes';
import { TransactionResponse } from '@ethersproject/providers';
import { InputBody, Transaction } from '@moonup/moon-api';
import { MoonSDK } from '@moonup/moon-sdk';

interface Tx {
    /** @format double */
    type?: number;
    /** @format double */
    chain_id?: number;
    data?: string;
    gas?: string;
    gas_price?: string;
    gas_tip_cap?: string | null;
    gas_fee_cap?: string | null;
    value?: string;
    /** @format double */
    nonce?: number;
    from?: string;
    to?: string | null;
    blob_gas?: string | null;
    blob_gas_fee_cap?: string | null;
    blob_hashes?: string[] | null;
    v?: string;
    r?: string;
    s?: string;
}
interface TransactionRequest {
    nonce?: string;
    data?: string;
    value?: string;
    to?: string;
    from?: string;
    maxFeePerGas?: string;
    maxPriorityFeePerGas?: string;
}
interface TransactionData {
    moon_scan_url?: string;
    transaction_hash: string;
    signed_transaction: string;
    signed_message?: string;
    raw_transaction?: string;
    signature?: string;
    transaction?: Tx;
    userOps?: TransactionRequest[];
    userop_transaction?: string;
}

interface Typed {
    domain: TypedDataDomain;
    types: Record<string, Array<TypedDataField>>;
    message: Record<string, string>;
}
interface MoonSignerConfig {
    SDK: MoonSDK;
    address: string;
    chainId: string;
}
declare class MoonSigner extends Signer implements TypedDataSigner {
    MoonSignerConfig: MoonSignerConfig;
    SDK: MoonSDK;
    constructor(config: MoonSignerConfig, provider?: Provider);
    _signTypedData(domain: TypedDataDomain, types: Record<string, TypedDataField[]>, value: Record<string, any>): Promise<string>;
    updateConfig(config: MoonSignerConfig): void;
    connect(provider: Provider): Signer;
    /**
     * Signs a typed data object.
     *
     * @param domain - The domain of the typed data object.
     * @param types - The type definitions of the typed data object.
     * @param value - The value of the typed data object.
     * @returns The signature of the typed data object.
     */
    signTypedData(domain: TypedDataDomain, types: Record<string, TypedDataField[]>, value: Record<string, string>): Promise<string>;
    /**
     * @summary Get address
     * @returns {string} successful operation
     */
    getAddress(): Promise<string>;
    signMessage(message: BytesLike): Promise<string>;
    broadcastTransaction(signedTransaction: string): Promise<string>;
    sendTransaction(transaction: TransactionRequest$1): Promise<TransactionResponse>;
    transactionRequestToInputBody(tx: TransactionRequest$1): InputBody;
    moonTransactionResponseToTransactions(tx: Transaction): TransactionData[];
    signTransaction(transaction: TransactionRequest$1): Promise<string>;
    getTypedDataDomain(name: string, version: string, chainId: number, verifyingContract: string): Promise<TypedDataDomain>;
    getTypedData(domain: TypedDataDomain, types: Record<string, Array<TypedDataField>>, message: Record<string, string>): Promise<Typed>;
}

export { MoonSigner, type MoonSignerConfig, type Typed };
