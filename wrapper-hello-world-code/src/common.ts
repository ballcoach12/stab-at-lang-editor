import { ModelUpdate, MonacoEditorLanguageClientWrapper, UserConfig } from 'monaco-editor-wrapper'
import { languages } from 'monaco-editor';

const extensionFilesOrContents = new Map<string, string | URL>();

const helloWorldLanguageConfig = new URL('../../hello-world/language-configuration.json', window.location.href);
const helloWorldTm = new URL('../../hello-world/syntaxes/hello-world.tmLanguage.json', window.location.href);
extensionFilesOrContents.set('/hello-world-configuration.json', helloWorldLanguageConfig);
extensionFilesOrContents.set('/hello-world-grammar.json', helloWorldTm);

export const wrapper = new MonacoEditorLanguageClientWrapper();



export const updateModel = async (modelUpdate: ModelUpdate) => {
    if (wrapper.getMonacoEditorApp()?.getConfig().useDiffEditor) {
        await wrapper?.updateDiffModel(modelUpdate);
    } else {
        await wrapper?.updateModel(modelUpdate);
    }
};

export const swapEditors = async (userConfig: UserConfig, code: string, codeUri: string) => {
    userConfig.wrapperConfig.editorAppConfig.useDiffEditor = !userConfig.wrapperConfig.editorAppConfig.useDiffEditor;
    saveMainCode(!userConfig.wrapperConfig.editorAppConfig.useDiffEditor);
    configureCodeEditors(userConfig, code, codeUri);
    await restartEditor(userConfig);
};

export const disposeEditor = async (useDiffEditor: boolean) => {
    wrapper.reportStatus();
    toggleSwapDiffButton(false);
    const codeMain = saveMainCode(useDiffEditor);

    await wrapper.dispose();
    return codeMain;
};

const restartEditor = async (userConfig: UserConfig) => {
    await wrapper.start(userConfig);
    logEditorInfo(userConfig);
};

const configureCodeEditors = (userConfig: UserConfig, code: string, codeUri: string) => {
   
        userConfig.wrapperConfig.editorAppConfig.code = code;
        userConfig.wrapperConfig.editorAppConfig.codeUri = codeUri;
    
};

const saveMainCode = (saveFromDiff: boolean) => {
    if (saveFromDiff) {
        return wrapper.getModel(true)!.getValue();
    } else {
        return wrapper.getModel()!.getValue();
    }
};

export function getConfig() : UserConfig {

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

    console.log(`There are ${extensionFilesOrContents.size.toString()} extensions in the map.`);

    return {
        htmlElement: document.getElementById('monaco-editor-root') as HTMLElement,
        wrapperConfig: {
            serviceConfig: {
                enableKeybindingsService: true,
                debugLogging: true,
                enableThemeService: true,
                enableTextmateService:true,
                enableModelService: true,
                configuredEditorOrViewsService: {

                },
                configureConfigurationService: {
                    defaultWorkspaceUri: '/tmp/'
                },
                enableLanguagesService: true

            },
            editorAppConfig: {
                $type: 'vscodeApi',
                languageId: 'hello-world',
                useDiffEditor: false,
                editorOptions: monacoEditorConfig,
                extension: {
                    name: 'hello-world-example',
                    publisher: 'SEL',
                    version: '1.0.0',
                    engines: {
                        vscode: '*'
                    },
                    "contributes": {
                        "languages": [
                            {
                                "id": "hello-world",
                                "aliases": [
                                    "Hello World",
                                    "hello-world"
                                ],
                                "extensions": [".hello"],
                                "configuration": "./hello-world-configuration.json"
                            }
                        ],
                        "grammars": [
                            {
                                "language": "hello-world",
                                "scopeName": "source.hello-world",
                                "path": "./hello-world-grammar.json"
                            }
                        ]
                    }
                },
                extensionFilesOrContents: extensionFilesOrContents,
                userConfiguration: {
                    json: `{
                        "workbench.colorTheme": "Default Dark Modern",
                        "editor.guides.bracketPairsHorizontal": "active",
                        "editor.lightbulb.enabled": true
                    }`
                }
            }
        },
        languageClientConfig: {
            options: {
                $type: 'WorkerDirect',
                worker: helloWorldWorker
            }
        }
    };
}

const helloWorldWorker = loadHelloWorldWorker();

function loadHelloWorldWorker ()  {
    const workerUrl = new URL('../../hello-world/public/hello-world-server-worker.js', window.location.href);
    console.log(`Hello World worker URL: ${workerUrl}`);

    return new Worker(workerUrl, {
        type: 'module',
        name: 'Hello World LS'
    })
};

const toggleSwapDiffButton = (enabled: boolean) => {
    const button = document.getElementById('button-swap') as HTMLButtonElement;
    if (button !== null) {
        button.disabled = !enabled;
    }
};

const logEditorInfo = (userConfig: UserConfig) => {
    console.log(`# of configured languages: ${languages.getLanguages().length}`);
    console.log(`Main code: ${wrapper.getModel(true)!.getValue()}`);
    if (userConfig.wrapperConfig.editorAppConfig.useDiffEditor) {
        console.log(`Modified code: ${wrapper.getModel()!.getValue()}`);
    }
};

export const getTextContent = async (url: URL) => {
    const response = await fetch(url.href);
    return response.text();
};
