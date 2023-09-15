import { initServices, wasVscodeApiInitialized } from 'monaco-languageclient';
import { EditorAppVscodeApi } from './editorAppVscodeApi.js';
import { EditorAppClassic } from './editorAppClassic.js';
import { isVscodeApiEditorApp } from './editorAppBase.js';
import { LanguageClientWrapper } from './languageClientWrapper.js';
import { Logger } from './logger.js';
/**
 * This class is responsible for the overall ochestration.
 * It inits, start and disposes the editor apps and the language client (if configured) and provides
 * access to all required components.
 */
export class MonacoEditorLanguageClientWrapper {
    id;
    htmlElement;
    editorApp;
    languageClientWrapper;
    serviceConfig;
    logger;
    async init(userConfig) {
        if (userConfig.wrapperConfig.editorAppConfig.useDiffEditor && !userConfig.wrapperConfig.editorAppConfig.codeOriginal) {
            throw new Error('Use diff editor was used without a valid config.');
        }
        this.id = userConfig.id ?? Math.floor(Math.random() * 101).toString();
        this.htmlElement = userConfig.htmlElement;
        this.logger = new Logger(userConfig.loggerConfig);
        this.serviceConfig = userConfig.wrapperConfig.serviceConfig ?? {};
        // always set required services if not configure
        this.serviceConfig.enableModelService = this.serviceConfig.enableModelService ?? true;
        this.serviceConfig.configureConfigurationService = this.serviceConfig.configureConfigurationService ?? {
            defaultWorkspaceUri: '/tmp/'
        };
        // overrule debug log flag
        this.serviceConfig.debugLogging = this.logger.isEnabled() && (this.serviceConfig.debugLogging || this.logger.isDebugEnabled());
        if (wasVscodeApiInitialized()) {
            this.logger.debug('No service init on restart', this.serviceConfig.debugLogging);
        }
        else {
            this.logger.debug('Init Services', this.serviceConfig.debugLogging);
            await initServices(this.serviceConfig);
        }
        this.languageClientWrapper = new LanguageClientWrapper(userConfig.languageClientConfig, this.logger);
    }
    async start(userConfig) {
        await this.init(userConfig);
        // Always dispose old instances before start
        this.editorApp?.disposeApp();
        if (isVscodeApiEditorApp(userConfig.wrapperConfig)) {
            this.editorApp = new EditorAppVscodeApi(this.id, userConfig, this.logger);
        }
        else {
            this.editorApp = new EditorAppClassic(this.id, userConfig, this.logger);
        }
        this.languageClientWrapper.init(this.editorApp.getConfig().languageId);
        this.logger.info(`Starting monaco-editor (${this.id})`);
        await this.editorApp?.init();
        await this.editorApp.createEditors(this.htmlElement);
        if (this.languageClientWrapper.haveLanguageClientConfig()) {
            await this.languageClientWrapper.start();
        }
    }
    isStarted() {
        // fast-fail
        if (!this.editorApp?.haveEditor()) {
            return false;
        }
        if (this.languageClientWrapper.haveLanguageClient()) {
            return this.languageClientWrapper.isStarted();
        }
        return true;
    }
    getMonacoEditorApp() {
        return this.editorApp;
    }
    getEditor() {
        return this.editorApp?.getEditor();
    }
    getDiffEditor() {
        return this.editorApp?.getDiffEditor();
    }
    getLanguageClient() {
        return this.languageClientWrapper.getLanguageClient();
    }
    getModel(original) {
        return this.editorApp?.getModel(original);
    }
    getWorker() {
        return this.languageClientWrapper.getWorker();
    }
    async updateModel(modelUpdate) {
        await this.editorApp?.updateModel(modelUpdate);
    }
    async updateDiffModel(modelUpdate) {
        await this.editorApp?.updateDiffModel(modelUpdate);
    }
    async updateEditorOptions(options) {
        if (this.editorApp) {
            await this.editorApp.updateEditorOptions(options);
        }
        else {
            await Promise.reject('Update was called when editor wrapper was not correctly configured.');
        }
    }
    reportStatus() {
        const status = [];
        status.push('Wrapper status:');
        status.push(`Editor: ${this.editorApp?.getEditor()}`);
        status.push(`DiffEditor: ${this.editorApp?.getDiffEditor()}`);
        return status;
    }
    async dispose() {
        this.editorApp?.disposeApp();
        if (this.languageClientWrapper.haveLanguageClient()) {
            await this.languageClientWrapper.disposeLanguageClient(false);
            this.editorApp = undefined;
            await Promise.resolve('Monaco editor and languageclient completed disposed.');
        }
        else {
            await Promise.resolve('Monaco editor has been disposed.');
        }
    }
    updateLayout() {
        this.editorApp?.updateLayout();
    }
}
//# sourceMappingURL=wrapper.js.map