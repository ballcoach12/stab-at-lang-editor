import { MonacoLanguageClient } from 'monaco-languageclient';
import { $ConfigurationOptions } from 'vscode-languageclient/lib/common/configuration.js';
import { Logger } from './logger.js';
export type WebSocketCallOptions = {
    /** Adds handle on languageClient */
    onCall: (languageClient?: MonacoLanguageClient) => void;
    /** Reports Status Of Language Client */
    reportStatus?: boolean;
};
export type LanguageClientConfigBase = {
    name?: string;
};
export type LanguageClientConfigType = 'WebSocket' | 'WebSocketUrl' | 'WorkerConfig' | 'Worker';
export type WebSocketUrl = LanguageClientConfigBase & {
    secured: boolean;
    host: string;
    port?: number;
    path?: string;
};
export type WebSocketConfigOptions = LanguageClientConfigBase & {
    $type: 'WebSocket';
    secured: boolean;
    host: string;
    port?: number;
    path?: string;
    extraParams?: Record<string, string | number | Array<string | number>>;
    startOptions?: WebSocketCallOptions;
    stopOptions?: WebSocketCallOptions;
};
export type WebSocketConfigOptionsUrl = LanguageClientConfigBase & {
    $type: 'WebSocketUrl';
    url: string;
    startOptions?: WebSocketCallOptions;
    stopOptions?: WebSocketCallOptions;
};
export type WorkerConfigOptions = LanguageClientConfigBase & {
    $type: 'WorkerConfig';
    url: URL;
    type: 'classic' | 'module';
};
export type WorkerConfigDirect = LanguageClientConfigBase & {
    $type: 'WorkerDirect';
    worker: Worker;
};
export type LanguageClientConfig = {
    options: WebSocketConfigOptions | WebSocketConfigOptionsUrl | WorkerConfigOptions | WorkerConfigDirect;
    initializationOptions?: any;
    configurationOptions?: $ConfigurationOptions;
};
export type LanguageClientError = {
    message: string;
    error: Error | string;
};
export declare class LanguageClientWrapper {
    private languageClient;
    private languageClientConfig?;
    private worker;
    private languageId;
    private name;
    private logger;
    constructor(languageClientConfig?: LanguageClientConfig, logger?: Logger);
    haveLanguageClient(): boolean;
    haveLanguageClientConfig(): boolean;
    getLanguageClient(): MonacoLanguageClient | undefined;
    getWorker(): Worker | undefined;
    isStarted(): boolean;
    init(languageId: string): void;
    start(): Promise<void>;
    /**
     * Restart the languageclient with options to control worker handling
     *
     * @param updatedWorker Set a new worker here that should be used. keepWorker has no effect then, as we want to dispose of the prior workers
     * @param keepWorker Set to true if worker should not be disposed
     */
    restartLanguageClient(updatedWorker?: Worker, keepWorker?: boolean): Promise<void>;
    private startLanguageClientConnection;
    private handleLanguageClientStart;
    private createLanguageClient;
    private disposeWorker;
    disposeLanguageClient(keepWorker?: boolean): Promise<void>;
    reportStatus(): string[];
}
//# sourceMappingURL=languageClientWrapper.d.ts.map