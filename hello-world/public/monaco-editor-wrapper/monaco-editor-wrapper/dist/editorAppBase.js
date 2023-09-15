import { Uri } from 'monaco-editor';
import { createConfiguredEditor, createConfiguredDiffEditor, createModelReference } from 'vscode/monaco';
/**
 * This is the base class for both Monaco Ediotor Apps:
 * - EditorAppClassic
 * - EditorAppVscodeApi
 *
 * It provides the generic functionality for both implementations.
 */
export class EditorAppBase {
    id;
    editor;
    diffEditor;
    modelRef;
    modelOriginalRef;
    constructor(id) {
        this.id = id;
    }
    buildConfig(userConfig) {
        const userAppConfig = userConfig.wrapperConfig.editorAppConfig;
        return {
            languageId: userAppConfig.languageId,
            code: userAppConfig.code ?? '',
            codeOriginal: userAppConfig.codeOriginal ?? '',
            useDiffEditor: userAppConfig.useDiffEditor === true,
            codeUri: userAppConfig.codeUri ?? undefined,
            codeOriginalUri: userAppConfig.codeOriginalUri ?? undefined,
            readOnly: userAppConfig.readOnly ?? false,
            domReadOnly: userAppConfig.domReadOnly ?? false,
        };
    }
    haveEditor() {
        return this.editor !== undefined || this.diffEditor !== undefined;
    }
    getEditor() {
        return this.editor;
    }
    getDiffEditor() {
        return this.diffEditor;
    }
    async createEditor(container, editorOptions) {
        this.editor = createConfiguredEditor(container, editorOptions);
        await this.updateEditorModel();
    }
    async createDiffEditor(container, diffEditorOptions) {
        this.diffEditor = createConfiguredDiffEditor(container, diffEditorOptions);
        await this.updateDiffEditorModel();
    }
    disposeEditor() {
        if (this.editor) {
            this.modelRef?.dispose();
            this.editor.dispose();
            this.editor = undefined;
        }
    }
    disposeDiffEditor() {
        if (this.diffEditor) {
            this.modelRef?.dispose();
            this.modelOriginalRef?.dispose();
            this.diffEditor.dispose();
            this.diffEditor = undefined;
        }
    }
    getModel(original) {
        if (this.getConfig().useDiffEditor) {
            return ((original === true) ? this.modelOriginalRef?.object.textEditorModel : this.modelRef?.object.textEditorModel) ?? undefined;
        }
        else {
            return this.modelRef?.object.textEditorModel ?? undefined;
        }
    }
    async updateModel(modelUpdate) {
        if (!this.editor) {
            return Promise.reject(new Error('You cannot update the editor model, because the regular editor is not configured.'));
        }
        this.updateAppConfig(modelUpdate);
        await this.updateEditorModel();
    }
    async updateEditorModel() {
        const config = this.getConfig();
        this.modelRef?.dispose();
        const uri = this.getEditorUri('code');
        this.modelRef = await createModelReference(uri, config.code);
        this.modelRef.object.setLanguageId(config.languageId);
        if (this.editor) {
            this.editor.setModel(this.modelRef.object.textEditorModel);
        }
    }
    async updateDiffModel(modelUpdate) {
        if (!this.diffEditor) {
            return Promise.reject(new Error('You cannot update the diff editor models, because the diffEditor is not configured.'));
        }
        this.updateAppConfig(modelUpdate);
        return this.updateDiffEditorModel();
    }
    async updateDiffEditorModel() {
        const config = this.getConfig();
        this.modelRef?.dispose();
        this.modelOriginalRef?.dispose();
        const uri = this.getEditorUri('code');
        const uriOriginal = this.getEditorUri('codeOriginal');
        const promises = [];
        promises.push(createModelReference(uri, config.code));
        promises.push(createModelReference(uriOriginal, config.codeOriginal));
        const refs = await Promise.all(promises);
        this.modelRef = refs[0];
        this.modelRef.object.setLanguageId(config.languageId);
        this.modelOriginalRef = refs[1];
        this.modelOriginalRef.object.setLanguageId(config.languageId);
        if (this.diffEditor && this.modelRef.object.textEditorModel !== null && this.modelOriginalRef.object.textEditorModel !== null) {
            this.diffEditor?.setModel({
                original: this.modelOriginalRef.object.textEditorModel,
                modified: this.modelRef.object.textEditorModel
            });
        }
    }
    updateAppConfig(modelUpdate) {
        const config = this.getConfig();
        if (modelUpdate.code !== undefined) {
            config.code = modelUpdate.code;
        }
        if (modelUpdate.languageId !== undefined) {
            config.languageId = modelUpdate.languageId;
        }
        if (modelUpdate.uri !== undefined) {
            config.codeUri = modelUpdate.uri;
        }
        if (modelUpdate.codeOriginal !== undefined) {
            config.codeOriginal = modelUpdate.codeOriginal;
        }
        if (modelUpdate.codeOriginalUri !== undefined) {
            config.codeOriginalUri = modelUpdate.codeOriginalUri;
        }
    }
    getEditorUri(uriType) {
        const config = this.getConfig();
        const uri = uriType === 'code' ? config.codeUri : config.codeOriginalUri;
        if (uri) {
            return Uri.parse(uri);
        }
        else {
            return Uri.parse(`/tmp/model${uriType === 'codeOriginal' ? 'Original' : ''}${this.id}.${config.languageId}`);
        }
    }
    updateLayout() {
        if (this.getConfig().useDiffEditor) {
            this.diffEditor?.layout();
        }
        else {
            this.editor?.layout();
        }
    }
    updateMonacoEditorOptions(options) {
        this.editor?.updateOptions(options);
    }
}
export const isVscodeApiEditorApp = (wrapperConfig) => {
    return wrapperConfig.editorAppConfig?.$type === 'vscodeApi';
};
//# sourceMappingURL=editorAppBase.js.map