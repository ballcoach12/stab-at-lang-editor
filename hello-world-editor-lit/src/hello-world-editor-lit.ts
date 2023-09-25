import { css, html, LitElement, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import * as vscode from 'vscode';
import { createHelloWorldGlobalConfig } from './config/helloWorldLitConfiguration.js';
//import { getMonacoCss } from 'monaco-editor-wrapper/monaco-css';
import { MonacoEditorLanguageClientWrapper } from 'monaco-editor-wrapper';
import { buildWorkerDefinition } from 'monaco-editor-workers';
import { common } from './editor-styles.js';
import { colors } from './monaco-colors.js';
import { monacocss } from './monaco-styles.js';

buildWorkerDefinition('../node_modules/monaco-editor-workers/dist/workers', import.meta.url, false);
const wrapper = new MonacoEditorLanguageClientWrapper();

// const code = 'hello Bob!';
const code = `hello Bob!
person Bob
Hello Bob!
`;

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


const cheatDOM = async () => {
  console.log('attempting to cheat DOM');
  let styles = Array.from(document.querySelectorAll('style'));
  const txt = styles.map((s) => s.textContent).join(' ');
  console.log(txt);
  return txt;
}


@customElement('hello-world-editor-lit')
export class HelloWorldEditorLit extends LitElement {

  private wrapper: MonacoEditorLanguageClientWrapper = new MonacoEditorLanguageClientWrapper();
  private containerElement?: HTMLDivElement;

  @property({ reflect: true }) code = '';
  @property({ reflect: true }) languageId = 'typescript';


  static override styles = [
    monacocss,
    common,
    colors,
    css`
      :host {
        --editor-width: 100%;
        --editor-height: 100%;
        /* --editor-width: 1200px;
        --editor-height: 800px; */
        position:absolute;
        inset:0;
        display:grid;
        grid-template-rows:auto 1fr auto;
      }
      #monaco-editor-root {
        width: var(--editor-width);
        height: var(--editor-height);
      }
    `];


  protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    try {
      console.log('starting editor');
      startEditor(this.renderRoot.querySelector('#monaco-editor-root') as HTMLElement);
      
      // setTimeout(() => {
      //   console.log(cheatDOM());
      // }, 1000);
    }
    catch (e) {
      console.error(e);
    }
  }
  
  
  override render() {
    return html`
      <div id="topbar"></div>
      <div id="monaco-editor-root"></div>
      <div id="btmbar"></div>
    `
  }




}

declare global {
  interface HTMLElementTagNameMap {
    'hello-world-editor-lit': HelloWorldEditorLit
  }
}
