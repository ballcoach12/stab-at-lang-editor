import { EditorAppBase, EditorAppBaseConfig, EditorAppType, VscodeUserConfiguration } from './editorAppBase.js';
import { IExtensionManifest } from 'vscode/extensions';
import 'vscode/default-extensions/theme-defaults';
import { UserConfig } from './wrapper.js';
import { Logger } from './logger.js';
export type EditorAppConfigVscodeApi = EditorAppBaseConfig & {
    $type: 'vscodeApi';
    extension?: IExtensionManifest | object;
    extensionFilesOrContents?: Map<string, string | URL>;
    userConfiguration?: VscodeUserConfiguration;
};
/**
 * The vscode-apo monaco-editor app uses vscode user and extension configuration for monaco-editor.
 */
export declare class EditorAppVscodeApi extends EditorAppBase {
    private config;
    private extensionResult;
    private logger;
    constructor(id: string, userConfig: UserConfig, logger?: Logger);
    getAppType(): EditorAppType;
    getConfig(): EditorAppConfigVscodeApi;
    createEditors(container: HTMLElement): Promise<void>;
    init(): Promise<void>;
    updateEditorOptions(config: VscodeUserConfiguration): Promise<void>;
    disposeApp(): void;
}
//# sourceMappingURL=editorAppVscodeApi.d.ts.map