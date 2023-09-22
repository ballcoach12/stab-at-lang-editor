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
const startEditor = async (parentNode: HTMLElement) => {
  if (wrapper.isStarted()) {
      alert('Editor was already started!');
      return;
  }
  const helloWorldGlobalConfig = await createHelloWorldGlobalConfig(parentNode, code);
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
@customElement('hello-world-editor-lit')
export class HelloWorldEditorLit extends LitElement {
  
  private wrapper: MonacoEditorLanguageClientWrapper = new MonacoEditorLanguageClientWrapper();
  private containerElement?: HTMLDivElement;

  @property({ reflect: true }) code = '';
  @property( { reflect: true }) languageId = 'typescript';

  
static override styles = css`
        :host {
            --editor-width: 100%;
            --editor-height: 100%;
        }
        #monaco-editor-root {
            width: var(--editor-width);
            height: var(--editor-height);
            width: 500px;
            height: 500px;
        }
    `;
  
    

    protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
      try {
        console.log('starting editor');
        startEditor(this.renderRoot.querySelector('#monaco-editor-root') as HTMLElement );
      }
      catch(e) {
        console.error(e);
      }
    }
  override render() {
    return html`
    <div id="monaco-editor-root" style="height: 80vh;"></div>
    `
  }

  

  
}

declare global {
  interface HTMLElementTagNameMap {
    'hello-world-editor-lit': HelloWorldEditorLit
  }
}
