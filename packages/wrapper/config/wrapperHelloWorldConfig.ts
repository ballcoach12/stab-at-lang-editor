import { UserConfig } from 'monaco-editor-wrapper';
import { loadHelloWorldWorker } from '../wrapperHelloWorld.js';
import { getTextContent } from '../common.js';

export const createLangiumGlobalConfig = async (htmlElement: HTMLElement): Promise<UserConfig> => {
    const code = await getTextContent(new URL('./content/example.hello', window.location.href));

    const extensionFilesOrContents = new Map<string, string | URL>();
    const helloWorldLanguageConfig = new URL('../hello-world/language-configuration.json', window.location.href);
    const helloWorldStatemachineTm = new URL('../hello-world/syntaxes/hello-world.tmLanguage.json', window.location.href);
    extensionFilesOrContents.set('/helloWorld-configuration.json', helloWorldLanguageConfig);
    extensionFilesOrContents.set('/helloWorld-grammar.json', helloWorldStatemachineTm);

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
                $type: 'vscodeApi',
                languageId: 'hello-world',
                code: code,
                useDiffEditor: false,
                extension: {
                    name: 'hello-world-example',
                    publisher: 'SEL',
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
                            aliases: [
                                "Hello World",
                                "hello-world"
                            ],
                            configuration: './statemachine-configuration.json'
                        }],
                        grammars: [{
                            language: 'hello-world',
                            scopeName: 'source.hello',
                            path: './helloWorld-grammar.json'
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
};