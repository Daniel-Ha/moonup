import { TypedDataDomain, TypedDataField } from '@ethersproject/abstract-signer';

interface TypedData {
    domain: TypedDataDomain;
    types: Record<string, Array<TypedDataField>>;
    value: Record<string, string>;
}
declare const getMessage: (params: string[]) => Uint8Array;
declare const getSignTypedDataParamsData: (params: string[]) => TypedData;

export { type TypedData, getMessage, getSignTypedDataParamsData };
