import { EditorAppBase } from './editorAppBase.js';
import { updateUserConfiguration } from 'vscode/service-override/configuration';
import { registerExtension } from 'vscode/extensions';
import 'vscode/default-extensions/theme-defaults';
import { verifyUrlorCreateDataUrl } from './utils.js';
/**
 * The vscode-apo monaco-editor app uses vscode user and extension configuration for monaco-editor.
 */
export class EditorAppVscodeApi extends EditorAppBase {
    config;
    extensionResult;
    logger;
    constructor(id, userConfig, logger) {
        super(id);
        this.logger = logger;
        this.config = this.buildConfig(userConfig);
        const userInput = userConfig.wrapperConfig.editorAppConfig;
        this.config.userConfiguration = userInput.userConfiguration ?? undefined;
        this.config.extension = userInput.extension ?? undefined;
        this.config.extensionFilesOrContents = userInput.extensionFilesOrContents ?? undefined;
    }
    getAppType() {
        return 'vscodeApi';
    }
    getConfig() {
        return this.config;
    }
    async createEditors(container) {
        if (this.config.useDiffEditor) {
            await this.createDiffEditor(container, this.getConfig());
        }
        else {
            await this.createEditor(container, this.getConfig());
        }
    }
    async init() {
        if (this.config.extension) {
            const extension = this.config.extension;
            this.extensionResult = registerExtension(extension, 1 /* ExtensionHostKind.LocalProcess */);
            const extensionFilesOrContents = this.config.extensionFilesOrContents;
            if (extensionFilesOrContents) {
                for (const entry of extensionFilesOrContents) {
                    this.extensionResult.registerFileUrl(entry[0], verifyUrlorCreateDataUrl(entry[1]));
                }
            }
        }
        await this.updateEditorOptions(this.config.userConfiguration ?? {});
        this.logger?.info('Init of VscodeApiConfig was completed.');
    }
    async updateEditorOptions(config) {
        if (config.json) {
            return updateUserConfiguration(config.json);
        }
    }
    disposeApp() {
        this.disposeEditor();
        this.disposeDiffEditor();
        this.extensionResult.dispose();
    }
}
//# sourceMappingURL=editorAppVscodeApi.js.map