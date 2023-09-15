import { EditorAppBase, EditorAppBaseConfig, EditorAppType } from './editorAppBase.js';
import { editor, languages } from 'monaco-editor';
import { UserConfig } from './wrapper.js';
import { Logger } from './logger.js';
/**
 * This is derived from:
 * https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.ILanguageExtensionPoint.html
 */
export type MonacoLanguageExtensionConfig = {
    id: string;
    extensions?: string[];
    filenames?: string[];
    filenamePatterns?: string[];
    firstLine?: string;
    aliases?: string[];
    mimetypes?: string[];
};
export type EditorAppConfigClassic = EditorAppBaseConfig & {
    $type: 'classic';
    automaticLayout?: boolean;
    theme?: editor.BuiltinTheme | string;
    editorOptions?: editor.IStandaloneEditorConstructionOptions;
    diffEditorOptions?: editor.IStandaloneDiffEditorConstructionOptions;
    languageExtensionConfig?: MonacoLanguageExtensionConfig;
    languageDef?: languages.IMonarchLanguage;
    themeData?: editor.IStandaloneThemeData;
};
/**
 * The classic monaco-editor app uses the classic monaco-editor configuration.
 */
export declare class EditorAppClassic extends EditorAppBase {
    private editorOptions;
    private diffEditorOptions;
    private config;
    private logger;
    constructor(id: string, userConfig: UserConfig, logger?: Logger);
    getAppType(): EditorAppType;
    getConfig(): EditorAppConfigClassic;
    createEditors(container: HTMLElement): Promise<void>;
    init(): Promise<void>;
    updateEditorOptions(options: editor.IEditorOptions & editor.IGlobalEditorOptions): Promise<void>;
    disposeApp(): void;
}
//# sourceMappingURL=editorAppClassic.d.ts.map