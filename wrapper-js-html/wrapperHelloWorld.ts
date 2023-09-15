import * as vscode from 'vscode';
import { MonacoEditorLanguageClientWrapper } from 'monaco-editor-wrapper';
import { createLangiumGlobalConfig } from './config/wrapperHelloWorldConfig.js';

import { buildWorkerDefinition } from 'monaco-editor-workers';
//buildWorkerDefinition('../../node_modules/monaco-editor-workers/dist/workers', import.meta.url, false);
buildWorkerDefinition('../../node_modules/monaco-editor-workers/dist/workers', new URL('', window.location.href).href, false);

const wrapper = new MonacoEditorLanguageClientWrapper();

const startEditor = async () => {
    
    // if (wrapper.isStarted() && wrapper2.isStarted()) {
    //     alert('Editor was already started!');
    //     return;
    // }
    const langiumGlobalConfig = await createLangiumGlobalConfig(document.getElementById('monaco-editor-root') as HTMLElement);
    await wrapper.start(langiumGlobalConfig);
    // const langiumGlobalConfig2 = await createLangiumGlobalConfig(document.getElementById('monaco-editor-root2') as HTMLElement);
    // await wrapper2.startEditor(langiumGlobalConfig2);

    vscode.commands.getCommands().then((x) => {
        console.log('Currently registered # of vscode commands: ' + x.length);
    });
};

const disposeEditor = async () => {
    wrapper.reportStatus();
    await wrapper.dispose();
    console.log(wrapper.reportStatus().join('\n'));

    // wrapper2.reportStatus();
    // await wrapper2.dispose();
    // console.log(wrapper2.reportStatus().join('\n'));
};

try {
    
    startEditor();
} catch (e) {
    console.error(e);
}

export const loadHelloWorldWorker = () => {
    // Language Server preparation
    const workerUrl = new URL('./dist/worker/hello-world-server-worker.js', window.location.href); //  this needs to be copied from the language project
    console.log(`Langium worker URL: ${workerUrl}`);

    return new Worker(workerUrl, {
        type: 'module',
        name: 'HelloWorld LS',
    });
};