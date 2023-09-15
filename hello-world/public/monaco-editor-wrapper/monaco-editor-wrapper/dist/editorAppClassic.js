import { EditorAppBase } from './editorAppBase.js';
import { editor, languages } from 'monaco-editor';
/**
 * The classic monaco-editor app uses the classic monaco-editor configuration.
 */
export class EditorAppClassic extends EditorAppBase {
    editorOptions;
    diffEditorOptions;
    config;
    logger;
    constructor(id, userConfig, logger) {
        super(id);
        this.logger = logger;
        this.config = this.buildConfig(userConfig);
        const userInput = userConfig.wrapperConfig.editorAppConfig;
        // default to vs-light
        this.config.theme = userInput.theme ?? 'vs-light';
        // default to true
        this.config.automaticLayout = userInput.automaticLayout ?? true;
        this.editorOptions = userInput.editorOptions ?? {};
        this.editorOptions.automaticLayout = userInput.automaticLayout ?? true;
        this.diffEditorOptions = userInput.diffEditorOptions ?? {};
        this.diffEditorOptions.automaticLayout = userInput.automaticLayout ?? true;
        this.config.languageExtensionConfig = userInput.languageExtensionConfig ?? undefined;
        this.config.languageDef = userInput.languageDef ?? undefined;
        this.config.themeData = userInput.themeData ?? undefined;
    }
    getAppType() {
        return 'classic';
    }
    getConfig() {
        return this.config;
    }
    async createEditors(container) {
        if (this.config.useDiffEditor) {
            await this.createDiffEditor(container, this.diffEditorOptions);
        }
        else {
            await this.createEditor(container, this.editorOptions);
        }
    }
    async init() {
        // register own language first
        const extLang = this.config.languageExtensionConfig;
        if (extLang) {
            languages.register(extLang);
        }
        const languageRegistered = languages.getLanguages().filter(x => x.id === this.config.languageId);
        if (languageRegistered.length === 0) {
            // this is only meaningful for languages supported by monaco out of the box
            languages.register({
                id: this.config.languageId
            });
        }
        // apply monarch definitions
        const tokenProvider = this.config.languageDef;
        if (tokenProvider) {
            languages.setMonarchTokensProvider(this.config.languageId, tokenProvider);
        }
        const themeData = this.config.themeData;
        if (themeData) {
            editor.defineTheme(this.config.theme, themeData);
        }
        editor.setTheme(this.config.theme);
        this.logger?.info('Init of MonacoConfig was completed.');
        return Promise.resolve();
    }
    async updateEditorOptions(options) {
        this.updateMonacoEditorOptions(options);
    }
    disposeApp() {
        this.disposeEditor();
        this.disposeDiffEditor();
    }
}
//# sourceMappingURL=editorAppClassic.js.map