import { UserConfig } from 'monaco-editor-wrapper';
import { HelloWorldMonarchContent, LangiumTheme } from './helloworld.monarch.js';



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
        loggerConfig: {
            enabled: true,
            debugEnabled: true
        },
        wrapperConfig: {
            serviceConfig: {
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
                theme: 'langium-theme',
                code: code,
                useDiffEditor: false,
                editorOptions: {
                    'semanticHighlighting.enabled': true
                },
                languageExtensionConfig: { id: 'langium' },
                languageDef: HelloWorldMonarchContent,
                themeData: LangiumTheme,
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
