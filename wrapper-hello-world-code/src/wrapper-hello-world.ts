import * as vscode from 'vscode';
import { MonacoEditorLanguageClientWrapper } from 'monaco-editor-wrapper';
import { buildWorkerDefinition } from 'monaco-editor-workers';
import { createHelloWorldGlobalConfig } from './config/wrapperHelloWorldConfig.js';
import { Utils } from './util.js';

buildWorkerDefinition('../node_modules/monaco-editor-workers/dist/workers', import.meta.url, false);
const wrapper = new MonacoEditorLanguageClientWrapper();

const code = `hello Bob!
person Bob
Hello Bob!`;

const startEditor = async () => {
    if (wrapper.isStarted()) {
        alert('Editor was already started!');
        return;
    }
    //Utils.registerBroadcast({ event: "EditorStarted", name: 'hello-world', data: 'wrapper-hello-world registerBroadcast' })
    const helloWorldGlobalConfig = await createHelloWorldGlobalConfig(document.getElementById('monaco-editor-root') as HTMLElement, code);
    await wrapper.start(helloWorldGlobalConfig);
    vscode.commands.getCommands().then((x) => {
        console.log('Currently registered # of vscode commands: ' + x.length);
    });
    
    window.onmessage = (e) => {
        console.log('<<<<<<<<<<<<<<<< [child] editor caught message from parent', e.data);
    }
    let editor = wrapper.getEditor();
    if(editor) {
        
        editor.onContextMenu
        editor.onDidBlurEditorText
        editor.onDidChangeConfiguration
        editor.onDidChangeModel
        editor.onDidPaste
        
        editor.getModel()?.onDidChangeContent((event) => {
            console.log('detected did change content in wrapper-hello-world!!!!!!', event);
            window.parent.postMessage('didchangecontent', window.parent.location.origin);
        })
        
    }
};

try{
  startEditor();
} catch (e) {
    console.error(e);
}



// export const loadHelloWorldWorker = () => {
//     const workerUrl = new URL('../../hello-world/public/hello-world-server-worker.js', window.location.href);
//     console.log(`Hello World worker URL: ${workerUrl}`);

//     return new Worker(workerUrl, {
//         type: 'module',
//         name: 'Hello World LS'
//     })
// }