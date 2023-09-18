//import  { ModelUpdate, MonacoEditorLanguageClientWrapper, UserConfig }  from '../libs/monaco-editor-wrapper/bundle/index.js'
import { MonacoEditorLanguageClientWrapper } from 'monaco-editor-wrapper';
//import { ModelUpdate, MonacoEditorLanguageClientWrapper, UserConfig } from 'monaco-editor-wrapper/bundle';
import { languages } from 'monaco-editor';
export const wrapper = new MonacoEditorLanguageClientWrapper();
export const startEditor = async (userConfig, code, codeOriginal) => {
    if (wrapper.isStarted()) {
        alert('Editor was already started!');
        return;
    }
    configureCodeEditors(userConfig, code, codeOriginal);
    //toggleSwapDiffButton(true);
    await restartEditor(userConfig);
};
export const updateModel = async (modelUpdate) => {
    if (wrapper.getMonacoEditorApp()?.getConfig().useDiffEditor) {
        await wrapper?.updateDiffModel(modelUpdate);
    }
    else {
        await wrapper?.updateModel(modelUpdate);
    }
};
export const swapEditors = async (userConfig, code, codeOriginal) => {
    userConfig.wrapperConfig.editorAppConfig.useDiffEditor = !userConfig.wrapperConfig.editorAppConfig.useDiffEditor;
    saveMainCode(!userConfig.wrapperConfig.editorAppConfig.useDiffEditor);
    configureCodeEditors(userConfig, code, codeOriginal);
    await restartEditor(userConfig);
};
export const disposeEditor = async (useDiffEditor) => {
    wrapper.reportStatus();
    toggleSwapDiffButton(false);
    const codeMain = saveMainCode(useDiffEditor);
    await wrapper.dispose();
    return codeMain;
};
const restartEditor = async (userConfig) => {
    await wrapper.start(userConfig);
    logEditorInfo(userConfig);
};
const configureCodeEditors = (userConfig, code, codeOriginal) => {
    if (userConfig.wrapperConfig.editorAppConfig.useDiffEditor) {
        userConfig.wrapperConfig.editorAppConfig.code = code;
        userConfig.wrapperConfig.editorAppConfig.codeOriginal = codeOriginal;
    }
    else {
        userConfig.wrapperConfig.editorAppConfig.code = code;
    }
};
const saveMainCode = (saveFromDiff) => {
    if (saveFromDiff) {
        return wrapper.getModel(true).getValue();
    }
    else {
        return wrapper.getModel().getValue();
    }
};
const toggleSwapDiffButton = (enabled) => {
    const button = document.getElementById('button-swap');
    if (button !== null) {
        button.disabled = !enabled;
    }
};
const logEditorInfo = (userConfig) => {
    console.log(`# of configured languages: ${languages.getLanguages().length}`);
    console.log(`Main code: ${wrapper.getModel(true).getValue()}`);
    if (userConfig.wrapperConfig.editorAppConfig.useDiffEditor) {
        console.log(`Modified code: ${wrapper.getModel().getValue()}`);
    }
};
export const getTextContent = async (url) => {
    const response = await fetch(url.href);
    return response.text();
};
//# sourceMappingURL=common.js.map