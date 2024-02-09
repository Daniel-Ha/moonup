declare class IframeController {
    private container;
    private url;
    private iframe;
    constructor(container: HTMLElement, url: string);
    setUrl(url: string): void;
    destroy(): void;
    sendMessage(message: string): void;
}

export { IframeController };
