import { ModelUpdate, MonacoEditorLanguageClientWrapper, UserConfig } from 'monaco-editor-wrapper';
export declare const wrapper: MonacoEditorLanguageClientWrapper;
export declare const startEditor: (userConfig: UserConfig, code: string, codeOriginal?: string) => Promise<void>;
export declare const updateModel: (modelUpdate: ModelUpdate) => Promise<void>;
export declare const swapEditors: (userConfig: UserConfig, code: string, codeOriginal?: string) => Promise<void>;
export declare const disposeEditor: (useDiffEditor: boolean) => Promise<string>;
export declare const getTextContent: (url: URL) => Promise<string>;
//# sourceMappingURL=common.d.ts.map