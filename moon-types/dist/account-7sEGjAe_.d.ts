import { EventEmitter } from 'events';
import { Chain } from './chain.js';

declare enum Storage {
    LOCAL = "local",
    SESSION = "session"
}
declare const MOON_SESSION_KEY = "MoonSessionKey";
declare class MoonStorage {
    type: Storage;
    key: string;
    constructor(type: Storage, key: string);
    setItem(account: MoonAccountInterface): void;
    getItem(): MoonAccountInterface | null;
    removeItem(): void;
}

interface MoonAccountInterface {
    token: string;
    refreshToken: string;
    email: string;
    expiry: number;
    wallet: string;
    network: Chain;
}
declare class MoonAccount {
    token: string;
    refreshToken: string;
    email: string;
    expiry: number;
    wallet: string;
    network: Chain;
    storage: MoonStorage;
    isAuth: boolean;
    Events: EventEmitter;
    constructor(storage: MoonStorage);
    getStorage(): MoonStorage;
    setStorage(storage: MoonStorage): void;
    getIsAuth(): boolean;
    setIsAuth(isAuth: boolean): void;
    emit(type: string, data: string): void;
    login(): void;
    logout(): void;
    LoadFromJson(json: MoonAccountInterface): void;
    saveToStorage(): void;
    ToJson(): MoonAccountInterface;
    setToken(token: string): void;
    getToken(): string;
    setRefreshToken(refreshToken: string): void;
    getRefreshToken(): string;
    setEmail(email: string): void;
    getEmail(): string;
    setExpiry(expiry: number): void;
    getExpiry(): number;
    setWallet(wallet: string): void;
    getWallet(): string;
    setNetwork(network: Chain): void;
    getNetwork(): Chain;
}

export { MoonStorage as M, Storage as S, type MoonAccountInterface as a, MoonAccount as b, MOON_SESSION_KEY as c };
