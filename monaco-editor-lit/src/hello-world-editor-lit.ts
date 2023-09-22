import { css, html, LitElement, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import * as vscode from 'vscode';
import { createHelloWorldGlobalConfig } from './config/helloWorldLitConfiguration.js';
//import { getMonacoCss } from 'monaco-editor-wrapper/monaco-css';
import { MonacoEditorLanguageClientWrapper } from 'monaco-editor-wrapper';
import { buildWorkerDefinition } from 'monaco-editor-workers';

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
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('monaco-editor-lit')
export class MonacoEditorLit extends LitElement {
  
  private wrapper: MonacoEditorLanguageClientWrapper = new MonacoEditorLanguageClientWrapper();
  private containerElement?: HTMLDivElement;

  @property({ reflect: true }) code = '';
  @property( { reflect: true }) languageId = 'typescript';

  
static override styles = css`
        :host {
            --editor-width: 100%;
            --editor-height: 100%;
        }
        main {
            width: var(--editor-width);
            height: var(--editor-height);
        }
    `;
  
    

    protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
      try {
        console.log('starting editor');
        startEditor();
      }
      catch(e) {
        console.error(e);
      }
    }
  override render() {
    return html`
    <div id="monaco-editor-root" style="height: 80vh;"></div>
    <script type="module" src="./src/helloWorldWrapperLit.ts"></script>
    `
  }

  

  
}

declare global {
  interface HTMLElementTagNameMap {
    'monaco-editor-lit': MonacoEditorLit
  }
}
