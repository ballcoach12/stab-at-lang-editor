import { editor } from 'monaco-editor';
import { InitializeServiceConfig, MonacoLanguageClient } from 'monaco-languageclient';
import { EditorAppVscodeApi, EditorAppConfigVscodeApi } from './editorAppVscodeApi.js';
import { EditorAppClassic, EditorAppConfigClassic } from './editorAppClassic.js';
import { VscodeUserConfiguration } from './editorAppBase.js';
import { LanguageClientConfig } from './languageClientWrapper.js';
import { LoggerConfig } from './logger.js';
export type WrapperConfig = {
    serviceConfig?: InitializeServiceConfig;
    editorAppConfig: EditorAppConfigVscodeApi | EditorAppConfigClassic;
};
export type UserConfig = {
    id?: string;
    htmlElement: HTMLElement;
    loggerConfig?: LoggerConfig;
    wrapperConfig: WrapperConfig;
    languageClientConfig?: LanguageClientConfig;
};
export type ModelUpdate = {
    languageId?: string;
    code?: string;
    uri?: string;
    codeOriginal?: string;
    codeOriginalUri?: string;
};
/**
 * This class is responsible for the overall ochestration.
 * It inits, start and disposes the editor apps and the language client (if configured) and provides
 * access to all required components.
 */
export declare class MonacoEditorLanguageClientWrapper {
    private id;
    private htmlElement;
    private editorApp;
    private languageClientWrapper;
    private serviceConfig;
    private logger;
    private init;
    start(userConfig: UserConfig): Promise<void>;
    isStarted(): boolean;
    getMonacoEditorApp(): EditorAppVscodeApi | EditorAppClassic | undefined;
    getEditor(): editor.IStandaloneCodeEditor | undefined;
    getDiffEditor(): editor.IStandaloneDiffEditor | undefined;
    getLanguageClient(): MonacoLanguageClient | undefined;
    getModel(original?: boolean): editor.ITextModel | undefined;
    getWorker(): Worker | undefined;
    updateModel(modelUpdate: ModelUpdate): Promise<void>;
    updateDiffModel(modelUpdate: ModelUpdate): Promise<void>;
    updateEditorOptions(options: editor.IEditorOptions & editor.IGlobalEditorOptions | VscodeUserConfiguration): Promise<void>;
    reportStatus(): string[];
    dispose(): Promise<void>;
    updateLayout(): void;
}
//# sourceMappingURL=wrapper.d.ts.map