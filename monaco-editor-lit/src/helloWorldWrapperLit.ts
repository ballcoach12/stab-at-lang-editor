import * as vscode from 'vscode';
import { MonacoEditorLanguageClientWrapper } from 'monaco-editor-wrapper';
import { buildWorkerDefinition } from 'monaco-editor-workers';
import { createHelloWorldGlobalConfig } from './config/helloWorldLitConfiguration.js';

buildWorkerDefinition('../node_modules/monaco-editor-workers/dist/workers', import.meta.url, false);
const wrapper = new MonacoEditorLanguageClientWrapper();

const code = 'hello Bob!';

const startEditor = async () => {
    if (wrapper.isStarted()) {
        alert('Editor was already started!');
        return;
    }
    const helloWorldGlobalConfig = await createHelloWorldGlobalConfig(document.getElementById('monaco-editor-root') as HTMLElement, code);
    await wrapper.start(helloWorldGlobalConfig);
    vscode.commands.getCommands().then((x) => {
        console.log('Currently registered # of vscode commands: ' + x.length);
    });
    
};

try{
    console.log('starting editor');
  startEditor();
} catch (e) {
    console.error(e);
}

export const loadHelloWorldWorker = () => {
    const workerUrl = new URL('../../hello-world/public/hello-world-server-worker.js', window.location.href);
    console.log(`Hello World worker URL: ${workerUrl}`);

    return new Worker(workerUrl, {
        type: 'module',
        name: 'Hello World LS'
    })
}

