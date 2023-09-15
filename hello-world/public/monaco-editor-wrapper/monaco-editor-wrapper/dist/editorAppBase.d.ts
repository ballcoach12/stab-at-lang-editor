import { editor, Uri } from 'monaco-editor';
import { ModelUpdate, UserConfig, WrapperConfig } from './wrapper.js';
import { EditorAppConfigClassic } from './editorAppClassic.js';
import { EditorAppConfigVscodeApi } from './editorAppVscodeApi.js';
export type VscodeUserConfiguration = {
    json?: string;
};
export type EditorAppBaseConfig = {
    languageId: string;
    code: string;
    codeUri?: string;
    useDiffEditor: boolean;
    codeOriginal?: string;
    codeOriginalUri?: string;
    domReadOnly?: boolean;
    readOnly?: boolean;
};
export type EditorAppType = 'vscodeApi' | 'classic';
/**
 * This is the base class for both Monaco Ediotor Apps:
 * - EditorAppClassic
 * - EditorAppVscodeApi
 *
 * It provides the generic functionality for both implementations.
 */
export declare abstract class EditorAppBase {
    private id;
    private editor;
    private diffEditor;
    private modelRef;
    private modelOriginalRef;
    constructor(id: string);
    protected buildConfig(userConfig: UserConfig): {
        languageId: string;
        code: string;
        codeOriginal: string;
        useDiffEditor: boolean;
        codeUri: string | undefined;
        codeOriginalUri: string | undefined;
        readOnly: boolean;
        domReadOnly: boolean;
    };
    haveEditor(): boolean;
    getEditor(): editor.IStandaloneCodeEditor | undefined;
    getDiffEditor(): editor.IStandaloneDiffEditor | undefined;
    protected createEditor(container: HTMLElement, editorOptions?: editor.IStandaloneEditorConstructionOptions): Promise<void>;
    protected createDiffEditor(container: HTMLElement, diffEditorOptions?: editor.IStandaloneDiffEditorConstructionOptions): Promise<void>;
    protected disposeEditor(): void;
    protected disposeDiffEditor(): void;
    getModel(original?: boolean): editor.ITextModel | undefined;
    updateModel(modelUpdate: ModelUpdate): Promise<void>;
    private updateEditorModel;
    updateDiffModel(modelUpdate: ModelUpdate): Promise<void>;
    private updateDiffEditorModel;
    private updateAppConfig;
    getEditorUri(uriType: 'code' | 'codeOriginal'): Uri;
    updateLayout(): void;
    updateMonacoEditorOptions(options: editor.IEditorOptions & editor.IGlobalEditorOptions): void;
    abstract getAppType(): string;
    abstract init(): Promise<void>;
    abstract createEditors(container: HTMLElement): Promise<void>;
    abstract updateEditorOptions(options: editor.IEditorOptions & editor.IGlobalEditorOptions | VscodeUserConfiguration): void;
    abstract getConfig(): EditorAppConfigClassic | EditorAppConfigVscodeApi;
    abstract disposeApp(): void;
}
export declare const isVscodeApiEditorApp: (wrapperConfig: WrapperConfig) => boolean;
//# sourceMappingURL=editorAppBase.d.ts.map