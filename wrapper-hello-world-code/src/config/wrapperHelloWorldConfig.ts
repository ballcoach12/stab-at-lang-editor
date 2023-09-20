import { UserConfig } from 'monaco-editor-wrapper';
//import { loadHelloWorldWorker } from '../wrapper-hello-world.js';



export const loadHelloWorldWorker = () => {
    const workerUrl = new URL('../src/worker/hello-world-server-worker.js', window.location.href);
    console.log(`Hello World worker URL: ${workerUrl}`);

    return new Worker(workerUrl, {
        type: 'module',
        name: 'Hello World LS'
    })
}

export const createHelloWorldGlobalConfig = async (htmlElement: HTMLElement, code: string): Promise<UserConfig> => {
    const extensionFilesOrContents = new Map<string, string | URL>();

    const helloWorldLanguageConfig = new URL('../../../hello-world/language-configuration.json', window.location.href);
    const helloWorldTm = new URL('../../../hello-world/syntaxes/hello-world.tmLanguage.json', window.location.href);
    extensionFilesOrContents.set('/hello-world-configuration.json', helloWorldLanguageConfig);
    extensionFilesOrContents.set('/hello-world-grammar.json', helloWorldTm);

    const helloWorldWorker = loadHelloWorldWorker();
    
    return {
        htmlElement: htmlElement,
        wrapperConfig: {
            serviceConfig: {
                enableThemeService: true,
                enableTextmateService: true,
                enableModelService: true,
                configureEditorOrViewsService: {
                },
                configureConfigurationService: {
                    defaultWorkspaceUri: '/tmp/'
                },
                enableLanguagesService: true,
                enableKeybindingsService: true,
                debugLogging: true
            },
            editorAppConfig: {
                $type: 'classic',
                languageId: 'helloworld',
                code: code,
                useDiffEditor: false,
                extension: {
                    name: 'langium-example',
                    publisher: 'monaco-languageclient-project',
                    version: '1.0.0',
                    engines: {
                        vscode: '*'
                    },
                    contributes: {
                        languages: [{
                            id: 'hello-world',
                            extensions: [
                                '.hello'
                            ],
                            "aliases": [
                                "Hello World",
                                "hello-world"
                            ],
                            configuration: './hello-world-configuration.json'
                        }],
                        grammars: [{
                            language: 'hello-world',
                            scopeName: 'source.helloworld',
                            path: './hello-world-grammar.json'
                        }]
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
