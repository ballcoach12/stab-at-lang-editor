import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { Utils } from "./util";


@customElement("code-editor")
export class CodeEditor extends LitElement {

  static override styles = [
    css`
      :host {
        width: 100%;
        height: 100vh;
        display:grid;
        grid-template-rows:auto 1fr auto;
      }
      #editor-host {
        border:0;
        height:100%;
        width:100%;
      }
  `];

  // @property({ type: Boolean, attribute: "readonly" }) readOnly?: boolean;
  @property({ type: String }) theme: 'light' | 'dark' = 'light';
  @property({ type: String }) code?: string;
  @property({ type: Number }) private changeCount: number = 0;
  @property({ type: String, reflect:false }) filetype: string = 'default';
  @property({ type: String, reflect: false }) private target: string = 'default';
  @query('#editor-host') host?: HTMLIFrameElement | undefined;


  
  override firstUpdated() {
    this.setTarget();
    window.onmessage = (e) => {
      console.log('>>>>>>>>>>>>>> [parent] component caught childs postMessage', e.data);
      this.changeCount++;
    }
  }

  override render() {
    return html`
      <div id="topbar">top ${this.theme}</div>
      <div id="middle">
        <iframe id="editor-host" src="${this.target}"></iframe>
      </div>
      <div id="bottombar">bottom. CHANGE COUNT: ${this.changeCount}</div>
    `;
  }
  
  setTarget() {
    switch(this.filetype) {
      case 'bob':
      default:
        this.target = './index2.html'
        break;
    }
    //Utils.registerBroadcast({ event: "TargetSet", name: 'hello-world', data: 'code-editor registerBroadcast at setTarget' })
  }
  
  setTheme(theme: 'light' | 'dark') {
    this.theme = theme;
    //Utils.registerBroadcast({ event: "SetTheme", name: 'hello-world', data: 'code-editor registerBroadcast at setTheme' })
    if(this.host)
    this.host.contentWindow?.postMessage("time to setTheme", window.location.origin);
  }


  //#region helpers

  // private getFileContent() {
  //   if (this.children.length > 0) return this.children[0];
  //   return null;
  // }

  // private getCode() {
  //   if (this.code) return this.code;
  //   const file = this.getFileContent();
  //   if (!file) return;
  //   return file.innerHTML.trim();
  // }

  // setValue(value: string) {
  //   this.editor!.setValue(value);
  // }

  // getValue() {
  //   const value = this.editor!.getValue();
  //   return value;
  // }

  // setReadOnly(value: boolean) {
  //   this.readOnly = value;
  //   this.setOptions({ readOnly: value });
  // }

  // setOptions(value: monaco.editor.IStandaloneEditorConstructionOptions) {
  //   this.editor!.updateOptions(value);
  // }
  //#endregion helpers
}


declare global {
  interface HTMLElementTagNameMap {
    'code-editor': CodeEditor
  }
}