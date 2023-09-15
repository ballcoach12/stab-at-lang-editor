import { startEditor } from './common.js';

import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js';
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution.js';

import { buildWorkerDefinition } from 'monaco-editor-workers';
import { UserConfig } from 'monaco-editor-wrapper';

buildWorkerDefinition('./node_modules/monaco-editor-workers/dist/workers', import.meta.url, false);
//import { MonacoEditorLanguageClientWrapper } from 'monaco-editor-wrapper';
//import { addMonacoStyles, MonacoEditorLanguageClientWrapper } from '../libs/monaco-editor-wrapper/mew.js';

//addMonacoStyles('monaco-styles-helper');

const codeUri = '/tmp/hello.ts';
let code = `function sayHello(): string {
    return "Hello";
};`;

//const codeOriginalUri = '/tmp/goodbye.ts';
let codeOriginal = `function sayGoodbye(): string {
    return "Goodbye";
};`;

const monacoEditorConfig = {
    glyphMargin: true,
    guides: {
        bracketPairs: true
    },
    lightbulb: {
        enabled: true
    },
    theme: 'vs-dark',
    renderSideBySide: false
};

const userConfig: UserConfig = {
    htmlElement: document.getElementById('monaco-editor-root') as HTMLElement,
    wrapperConfig: {
        serviceConfig: {
            enableKeybindingsService: true,
            debugLogging: true
        },
        editorAppConfig: {
            $type: 'classic',
            languageId: 'typescript',
            code: code,
            codeUri: codeUri,
            codeOriginal: codeOriginal,
            useDiffEditor: false,
            editorOptions: monacoEditorConfig,
            diffEditorOptions: monacoEditorConfig
        }
    }
};



try{
  startEditor(userConfig, code);
} catch (e) {
    console.error(e);
}