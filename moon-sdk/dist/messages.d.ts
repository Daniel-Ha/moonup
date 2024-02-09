import { EventEmitter } from 'events';

interface MoonMessage {
    type: string;
    data: string;
}
interface MoonMessageResponse {
    type: string;
    data: string;
}
declare enum MoonMessageType {
    login = "MOON_LOGIN",
    logout = "MOON_LOGOUT"
}
declare class MoonMessageHandler {
    EventEmitter: EventEmitter;
    constructor();
    emit(type: string, data: string): void;
    handle(message: MoonMessage): Promise<MoonMessageResponse>;
}

export { type MoonMessage, MoonMessageHandler, type MoonMessageResponse, MoonMessageType };
