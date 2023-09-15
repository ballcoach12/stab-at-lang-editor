import { D as O, $ as S, J as Fe, G as d, oH as Pe, oI as De, a2 as R, a4 as Be, b8 as Ce, lS as Ae, oJ as Ee, oK as Ie, b5 as B, b6 as te, bb as ie, aw as x, bk as F, ba as We, aR as Te, z as Ue, bh as Le, fk as Re, e2 as ue, oL as Ne, cD as Oe, eY as W, y as Me, lT as _e, oM as He, kJ as qe, oN as Ve, _ as T, a as c, aZ as M, l1 as fe, af as Y, e as Z, aW as me, cQ as ge, oO as Ke, bH as G, Q as $e, hO as ze, E as H, f4 as je, ap as ee, aJ as Qe, g as pe, bD as Xe, bF as Se, bE as ve, ab as Je, f2 as U, I as Ye, bG as be, oP as Ze, eE as ye, ai as Ge, bX as et, S as g, cR as ke, cM as b, aq as D, m5 as tt, U as se, mm as we, fd as I, cL as v, kP as it, oQ as k, oR as E, oS as st, oT as ae, oU as P, oV as oe, av as ne, oW as _, oX as at, oY as ot, oZ as nt, bL as re, bM as rt, d as lt, bx as ht, lu as ct, aN as dt, cz as ut, bC as ft, bY as mt, gk as gt, jy as pt, kE as St, o_ as vt, fs as bt, o$ as yt, eW as le, p0 as kt, ax as he, fy as wt, p1 as N, p2 as xt, l as ce, lk as Ft, lD as Pt } from "./verifyPrepare-778b382e.js";
import { i as Dt, b as Bt } from "./window-b5bb040d.js";
var de = globalThis && globalThis.__awaiter || function(f, e, t, i) {
  function s(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function l(r) {
      try {
        u(i.next(r));
      } catch (h) {
        o(h);
      }
    }
    function n(r) {
      try {
        u(i.throw(r));
      } catch (h) {
        o(h);
      }
    }
    function u(r) {
      r.done ? a(r.value) : s(r.value).then(l, n);
    }
    u((i = i.apply(f, e || [])).next());
  });
};
class Ct extends O {
  constructor(e, t, i, s) {
    super(), this.container = e, this.message = t, this.options = s, this.modalElement = this.container.appendChild(S(".monaco-dialog-modal-block.dimmed")), this.shadowElement = this.modalElement.appendChild(S(".dialog-shadow")), this.element = this.shadowElement.appendChild(S(".monaco-dialog-box")), this.element.setAttribute("role", "dialog"), this.element.tabIndex = -1, Fe(this.element), this.buttonStyles = s.buttonStyles, Array.isArray(i) && i.length > 0 ? this.buttons = i : this.options.disableDefaultAction ? this.buttons = [] : this.buttons = [d("ok", "OK")];
    const a = this.element.appendChild(S(".dialog-buttons-row"));
    this.buttonsContainer = a.appendChild(S(".dialog-buttons"));
    const o = this.element.appendChild(S(".dialog-message-row"));
    if (this.iconElement = o.appendChild(S("#monaco-dialog-icon.dialog-icon")), this.iconElement.setAttribute("aria-label", this.getIconAriaLabel()), this.messageContainer = o.appendChild(S(".dialog-message-container")), this.options.detail || this.options.renderBody) {
      const u = this.messageContainer.appendChild(S(".dialog-message")).appendChild(S("#monaco-dialog-message-text.dialog-message-text"));
      u.innerText = this.message;
    }
    if (this.messageDetailElement = this.messageContainer.appendChild(S("#monaco-dialog-message-detail.dialog-message-detail")), this.options.detail || !this.options.renderBody ? this.messageDetailElement.innerText = this.options.detail ? this.options.detail : t : this.messageDetailElement.style.display = "none", this.options.renderBody) {
      const n = this.messageContainer.appendChild(S("#monaco-dialog-message-body.dialog-message-body"));
      this.options.renderBody(n);
      for (const u of this.messageContainer.querySelectorAll("a"))
        u.tabIndex = 0;
    }
    if (this.options.inputs ? this.inputs = this.options.inputs.map((n) => {
      var u;
      const r = this.messageContainer.appendChild(S(".dialog-message-input")), h = this._register(new Pe(r, void 0, {
        placeholder: n.placeholder,
        type: (u = n.type) !== null && u !== void 0 ? u : "text",
        inputBoxStyles: s.inputBoxStyles
      }));
      return n.value && (h.value = n.value), h;
    }) : this.inputs = [], this.options.checkboxLabel) {
      const n = this.messageContainer.appendChild(S(".dialog-checkbox-row")), u = this.checkbox = this._register(new De(this.options.checkboxLabel, !!this.options.checkboxChecked, s.checkboxStyles));
      n.appendChild(u.domNode);
      const r = n.appendChild(S(".dialog-checkbox-message"));
      r.innerText = this.options.checkboxLabel, this._register(R(r, Be.CLICK, () => u.checked = !u.checked));
    }
    const l = this.element.appendChild(S(".dialog-toolbar-row"));
    this.toolbarContainer = l.appendChild(S(".dialog-toolbar")), this.applyStyles();
  }
  getIconAriaLabel() {
    let e = d("dialogInfoMessage", "Info");
    switch (this.options.type) {
      case "error":
        e = d("dialogErrorMessage", "Error");
        break;
      case "warning":
        e = d("dialogWarningMessage", "Warning");
        break;
      case "pending":
        e = d("dialogPendingMessage", "In Progress");
        break;
    }
    return e;
  }
  updateMessage(e) {
    this.messageDetailElement.innerText = e;
  }
  show() {
    return de(this, void 0, void 0, function* () {
      return this.focusToReturn = document.activeElement, new Promise((e) => {
        Ce(this.buttonsContainer);
        const t = this.buttonBar = this._register(new Ae(this.buttonsContainer)), i = this.rearrangeButtons(this.buttons, this.options.cancelId);
        i.forEach((a, o) => {
          const l = i[o].index === 0, n = this.options.buttonDetails ? this._register(t.addButtonWithDescription(Object.assign({ title: !0, secondary: !l }, this.buttonStyles))) : this._register(t.addButton(Object.assign({ title: !0, secondary: !l }, this.buttonStyles)));
          n.label = Ee(i[o].label, !0), n instanceof Ie && (n.description = this.options.buttonDetails[i[o].index]), this._register(n.onDidClick((u) => {
            u && B.stop(u), e({
              button: i[o].index,
              checkboxChecked: this.checkbox ? this.checkbox.checked : void 0,
              values: this.inputs.length > 0 ? this.inputs.map((r) => r.value) : void 0
            });
          }));
        }), this._register(R(window, "keydown", (a) => {
          var o, l;
          const n = new te(a);
          if (n.equals(
            512
            /* KeyMod.Alt */
          ) && n.preventDefault(), n.equals(
            3
            /* KeyCode.Enter */
          )) {
            this.inputs.some((r) => r.hasFocus()) && (B.stop(a), e({
              button: (l = (o = i.find((r) => r.index !== this.options.cancelId)) === null || o === void 0 ? void 0 : o.index) !== null && l !== void 0 ? l : 0,
              checkboxChecked: this.checkbox ? this.checkbox.checked : void 0,
              values: this.inputs.length > 0 ? this.inputs.map((r) => r.value) : void 0
            }));
            return;
          }
          if (n.equals(
            10
            /* KeyCode.Space */
          ))
            return;
          let u = !1;
          if (n.equals(
            2
            /* KeyCode.Tab */
          ) || n.equals(
            17
            /* KeyCode.RightArrow */
          ) || n.equals(
            1026
            /* KeyCode.Tab */
          ) || n.equals(
            15
            /* KeyCode.LeftArrow */
          )) {
            const r = [];
            let h = -1;
            if (this.messageContainer) {
              const m = this.messageContainer.querySelectorAll("a");
              for (const p of m)
                r.push(p), p === document.activeElement && (h = r.length - 1);
            }
            for (const m of this.inputs)
              r.push(m), m.hasFocus() && (h = r.length - 1);
            if (this.checkbox && (r.push(this.checkbox), this.checkbox.hasFocus() && (h = r.length - 1)), this.buttonBar)
              for (const m of this.buttonBar.buttons)
                r.push(m), m.hasFocus() && (h = r.length - 1);
            if (n.equals(
              2
              /* KeyCode.Tab */
            ) || n.equals(
              17
              /* KeyCode.RightArrow */
            )) {
              h === -1 && (h = 0);
              const m = (h + 1) % r.length;
              r[m].focus();
            } else {
              h === -1 && (h = r.length);
              let m = h - 1;
              m === -1 && (m = r.length - 1), r[m].focus();
            }
            u = !0;
          }
          u ? B.stop(a, !0) : this.options.keyEventProcessor && this.options.keyEventProcessor(n);
        }, !0)), this._register(R(window, "keyup", (a) => {
          B.stop(a, !0);
          const o = new te(a);
          !this.options.disableCloseAction && o.equals(
            9
            /* KeyCode.Escape */
          ) && e({
            button: this.options.cancelId || 0,
            checkboxChecked: this.checkbox ? this.checkbox.checked : void 0
          });
        }, !0)), this._register(R(this.element, "focusout", (a) => {
          a.relatedTarget && this.element && (ie(a.relatedTarget, this.element) || (this.focusToReturn = a.relatedTarget, a.target && (a.target.focus(), B.stop(a, !0))));
        }, !1));
        const s = "codicon-modifier-spin";
        if (this.iconElement.classList.remove(...x.asClassNameArray(F.dialogError), ...x.asClassNameArray(F.dialogWarning), ...x.asClassNameArray(F.dialogInfo), ...x.asClassNameArray(F.loading), s), this.options.icon)
          this.iconElement.classList.add(...x.asClassNameArray(this.options.icon));
        else
          switch (this.options.type) {
            case "error":
              this.iconElement.classList.add(...x.asClassNameArray(F.dialogError));
              break;
            case "warning":
              this.iconElement.classList.add(...x.asClassNameArray(F.dialogWarning));
              break;
            case "pending":
              this.iconElement.classList.add(...x.asClassNameArray(F.loading), s);
              break;
            case "none":
              this.iconElement.classList.add("no-codicon");
              break;
            case "info":
            case "question":
            default:
              this.iconElement.classList.add(...x.asClassNameArray(F.dialogInfo));
              break;
          }
        if (!this.options.disableCloseAction) {
          const a = this._register(new We(this.toolbarContainer, {})), o = this._register(new Te("dialog.close", d("dialogClose", "Close Dialog"), x.asClassName(F.dialogClose), !0, () => de(this, void 0, void 0, function* () {
            e({
              button: this.options.cancelId || 0,
              checkboxChecked: this.checkbox ? this.checkbox.checked : void 0
            });
          })));
          a.push(o, { icon: !0, label: !1 });
        }
        this.applyStyles(), this.element.setAttribute("aria-modal", "true"), this.element.setAttribute("aria-labelledby", "monaco-dialog-icon monaco-dialog-message-text"), this.element.setAttribute("aria-describedby", "monaco-dialog-icon monaco-dialog-message-text monaco-dialog-message-detail monaco-dialog-message-body"), Ue(this.element), this.inputs.length > 0 ? (this.inputs[0].focus(), this.inputs[0].select()) : i.forEach((a, o) => {
          a.index === 0 && t.buttons[o].focus();
        });
      });
    });
  }
  applyStyles() {
    const e = this.options.dialogStyles, t = e.dialogForeground, i = e.dialogBackground, s = e.dialogShadow ? `0 0px 8px ${e.dialogShadow}` : "", a = e.dialogBorder ? `1px solid ${e.dialogBorder}` : "", o = e.textLinkForeground;
    if (this.shadowElement.style.boxShadow = s, this.element.style.color = t ?? "", this.element.style.backgroundColor = i ?? "", this.element.style.border = a, o)
      for (const n of this.messageContainer.getElementsByTagName("a"))
        n.style.color = o;
    let l;
    switch (this.options.type) {
      case "error":
        l = e.errorIconForeground;
        break;
      case "warning":
        l = e.warningIconForeground;
        break;
      default:
        l = e.infoIconForeground;
        break;
    }
    l && (this.iconElement.style.color = l);
  }
  dispose() {
    super.dispose(), this.modalElement && (this.modalElement.remove(), this.modalElement = void 0), this.focusToReturn && ie(this.focusToReturn, document.body) && (this.focusToReturn.focus(), this.focusToReturn = void 0);
  }
  rearrangeButtons(e, t) {
    const i = e.map((s, a) => ({ label: s, index: a }));
    if (e.length < 2)
      return i;
    if (Le || Re) {
      if (typeof t == "number" && i[t]) {
        const s = i.splice(t, 1)[0];
        i.splice(1, 0, s);
      }
      i.reverse();
    } else if (ue && typeof t == "number" && i[t]) {
      const s = i.splice(t, 1)[0];
      i.push(s);
    }
    return i;
  }
}
var C;
let q = (C = class extends Ne {
  constructor(e, t, i, s, a, o) {
    super(), this.logService = e, this.layoutService = t, this.keybindingService = i, this.instantiationService = s, this.productService = a, this.clipboardService = o, this.markdownRenderer = this.instantiationService.createInstance(Oe, {});
  }
  async prompt(e) {
    this.logService.trace("DialogService#prompt", e.message);
    const t = this.getPromptButtons(e), { button: i, checkboxChecked: s } = await this.doShow(e.type, e.message, t, e.detail, e.cancelButton ? t.length - 1 : -1, e.checkbox, void 0, typeof (e == null ? void 0 : e.custom) == "object" ? e.custom : void 0);
    return this.getPromptResult(e, i, s);
  }
  async confirm(e) {
    this.logService.trace("DialogService#confirm", e.message);
    const t = this.getConfirmationButtons(e), { button: i, checkboxChecked: s } = await this.doShow(e.type ?? "question", e.message, t, e.detail, t.length - 1, e.checkbox, void 0, typeof (e == null ? void 0 : e.custom) == "object" ? e.custom : void 0);
    return { confirmed: i === 0, checkboxChecked: s };
  }
  async input(e) {
    this.logService.trace("DialogService#input", e.message);
    const t = this.getInputButtons(e), { button: i, checkboxChecked: s, values: a } = await this.doShow(e.type ?? "question", e.message, t, e.detail, t.length - 1, e == null ? void 0 : e.checkbox, e.inputs, typeof e.custom == "object" ? e.custom : void 0);
    return { confirmed: i === 0, checkboxChecked: s, values: a };
  }
  async about() {
    const e = (a) => d(
      "aboutDetail",
      `Version: {0}
Commit: {1}
Date: {2}
Browser: {3}`,
      this.productService.version || "Unknown",
      this.productService.commit || "Unknown",
      this.productService.date ? `${this.productService.date}${a ? " (" + Ke(new Date(this.productService.date), !0) + ")" : ""}` : "Unknown",
      navigator.userAgent
    ), t = e(!0), i = e(!1), { button: s } = await this.doShow(W.Info, this.productService.nameLong, [
      d({ key: "copy", comment: ["&& denotes a mnemonic"] }, "&&Copy"),
      d("ok", "OK")
    ], t, 1);
    s === 0 && this.clipboardService.writeText(i);
  }
  async doShow(e, t, i, s, a, o, l, n) {
    const u = new Me(), r = n ? (p) => {
      var w;
      p.classList.add(...n.classes || []), (w = n.markdownDetails) == null || w.forEach((L) => {
        const A = this.markdownRenderer.render(L.markdown);
        p.appendChild(A.element), A.element.classList.add(...L.classes || []), u.add(A);
      });
    } : void 0, h = new Ct(this.layoutService.container, t, i, {
      detail: s,
      cancelId: a,
      type: this.getDialogType(e),
      keyEventProcessor: (p) => {
        const w = this.keybindingService.softDispatch(p, this.layoutService.container);
        w.kind === 2 && w.commandId && C.ALLOWABLE_COMMANDS.indexOf(w.commandId) === -1 && B.stop(p, !0);
      },
      renderBody: r,
      icon: n == null ? void 0 : n.icon,
      disableCloseAction: n == null ? void 0 : n.disableCloseAction,
      buttonDetails: n == null ? void 0 : n.buttonDetails,
      checkboxLabel: o == null ? void 0 : o.label,
      checkboxChecked: o == null ? void 0 : o.checked,
      inputs: l,
      buttonStyles: _e,
      checkboxStyles: He,
      inputBoxStyles: qe,
      dialogStyles: Ve
    });
    u.add(h);
    const m = await h.show();
    return u.dispose(), m;
  }
}, C.ALLOWABLE_COMMANDS = [
  "copy",
  "cut",
  "editor.action.selectAll",
  "editor.action.clipboardCopyAction",
  "editor.action.clipboardCutAction",
  "editor.action.clipboardPasteAction"
], C);
q = T([
  c(0, M),
  c(1, fe),
  c(2, Y),
  c(3, Z),
  c(4, me),
  c(5, ge)
], q);
let V = class extends O {
  constructor(e, t, i, s, a, o, l) {
    super(), this.dialogService = e, this.impl = new q(
      t,
      i,
      s,
      a,
      o,
      l
    ), this.model = this.dialogService.model, this._register(this.model.onWillShowDialog(() => {
      this.currentDialog || this.processDialogs();
    })), this.processDialogs();
  }
  async processDialogs() {
    for (; this.model.dialogs.length; ) {
      this.currentDialog = this.model.dialogs[0];
      let e;
      if (this.currentDialog.args.confirmArgs) {
        const t = this.currentDialog.args.confirmArgs;
        e = await this.impl.confirm(t.confirmation);
      } else if (this.currentDialog.args.inputArgs) {
        const t = this.currentDialog.args.inputArgs;
        e = await this.impl.input(t.input);
      } else if (this.currentDialog.args.promptArgs) {
        const t = this.currentDialog.args.promptArgs;
        e = await this.impl.prompt(t.prompt);
      } else
        await this.impl.about();
      this.currentDialog.close(e), this.currentDialog = void 0;
    }
  }
};
V = T([
  c(0, G),
  c(1, M),
  c(2, fe),
  c(3, Y),
  c(4, Z),
  c(5, me),
  c(6, ge)
], V);
const At = $e.as(ze.Workbench);
At.registerWorkbenchContribution(V, 1);
class Et extends O {
  constructor() {
    super(...arguments), this.dialogs = [], this._onWillShowDialog = this._register(new H()), this.onWillShowDialog = this._onWillShowDialog.event, this._onDidShowDialog = this._register(new H()), this.onDidShowDialog = this._onDidShowDialog.event;
  }
  show(e) {
    const t = new je(), i = {
      args: e,
      close: (s) => {
        this.dialogs.splice(0, 1), t.complete(s), this._onDidShowDialog.fire();
      }
    };
    return this.dialogs.push(i), this._onWillShowDialog.fire(), {
      item: i,
      result: t.p
    };
  }
}
let K = class extends O {
  constructor(e, t) {
    super(), this.environmentService = e, this.logService = t, this.model = this._register(new Et()), this.onWillShowDialog = this.model.onWillShowDialog, this.onDidShowDialog = this.model.onDidShowDialog;
  }
  skipDialogs() {
    return this.environmentService.isExtensionDevelopment && this.environmentService.extensionTestsLocationURI ? !0 : !!this.environmentService.enableSmokeTestDriver;
  }
  async confirm(e) {
    return this.skipDialogs() ? (this.logService.trace("DialogService: refused to show confirmation dialog in tests."), { confirmed: !0 }) : await this.model.show({ confirmArgs: { confirmation: e } }).result;
  }
  async prompt(e) {
    if (this.skipDialogs())
      throw new Error(`DialogService: refused to show dialog in tests. Contents: ${e.message}`);
    return await this.model.show({ promptArgs: { prompt: e } }).result;
  }
  async input(e) {
    if (this.skipDialogs())
      throw new Error("DialogService: refused to show input dialog in tests.");
    return await this.model.show({ inputArgs: { input: e } }).result;
  }
  async info(e, t) {
    await this.prompt({ type: W.Info, message: e, detail: t });
  }
  async warn(e, t) {
    await this.prompt({ type: W.Warning, message: e, detail: t });
  }
  async error(e, t) {
    await this.prompt({ type: W.Error, message: e, detail: t });
  }
  async about() {
    if (this.skipDialogs())
      throw new Error("DialogService: refused to show about dialog in tests.");
    await this.model.show({}).result;
  }
};
K = T([
  c(0, ee),
  c(1, M)
], K);
var $;
(function(f) {
  f.ID = "workbench.action.files.openLocalFile", f.LABEL = d("openLocalFile", "Open Local File...");
  function e() {
    return (t) => t.get(U).pickFileAndOpen({ forceNewWindow: !1, availableFileSystems: [g.file] });
  }
  f.handler = e;
})($ || ($ = {}));
var z;
(function(f) {
  f.ID = "workbench.action.files.saveLocalFile", f.LABEL = d("saveLocalFile", "Save Local File...");
  function e() {
    return (t) => {
      const i = t.get(ke), s = i.activeEditorPane;
      return s ? i.save({ groupId: s.group.id, editor: s.input }, { saveAs: !0, availableFileSystems: [g.file], reason: 1 }) : Promise.resolve(void 0);
    };
  }
  f.handler = e;
})(z || (z = {}));
var j;
(function(f) {
  f.ID = "workbench.action.files.openLocalFolder", f.LABEL = d("openLocalFolder", "Open Local Folder...");
  function e() {
    return (t) => t.get(U).pickFolderAndOpen({ forceNewWindow: !1, availableFileSystems: [g.file] });
  }
  f.handler = e;
})(j || (j = {}));
var Q;
(function(f) {
  f.ID = "workbench.action.files.openLocalFileFolder", f.LABEL = d("openLocalFileFolder", "Open Local...");
  function e() {
    return (t) => t.get(U).pickFileFolderAndOpen({ forceNewWindow: !1, availableFileSystems: [g.file] });
  }
  f.handler = e;
})(Q || (Q = {}));
var y;
(function(f) {
  f[f.Updated = 0] = "Updated", f[f.UpdatedWithTrailing = 1] = "UpdatedWithTrailing", f[f.Updating = 2] = "Updating", f[f.NotUpdated = 3] = "NotUpdated", f[f.InvalidPath = 4] = "InvalidPath";
})(y || (y = {}));
const It = new Qe("remoteFileDialogVisible", !1);
let X = class {
  constructor(e, t, i, s, a, o, l, n, u, r, h, m, p, w) {
    this.fileService = e, this.quickInputService = t, this.labelService = i, this.workspaceContextService = s, this.notificationService = a, this.fileDialogService = o, this.modelService = l, this.languageService = n, this.environmentService = u, this.remoteAgentService = r, this.pathService = h, this.keybindingService = m, this.accessibilityService = w, this.hidden = !1, this.allowFileSelection = !0, this.allowFolderSelection = !1, this.requiresTrailing = !1, this.userEnteredPathSegment = "", this.autoCompletePathSegment = "", this.isWindows = !1, this.separator = "/", this.onBusyChangeEmitter = new H(), this.disposables = [
      this.onBusyChangeEmitter
    ], this.remoteAuthority = this.environmentService.remoteAuthority, this.contextKey = It.bindTo(p), this.scheme = this.pathService.defaultUriScheme;
  }
  set busy(e) {
    this.filePickBox.busy !== e && (this.filePickBox.busy = e, this.onBusyChangeEmitter.fire(e));
  }
  get busy() {
    return this.filePickBox.busy;
  }
  async showOpenDialog(e = {}) {
    this.scheme = this.getScheme(e.availableFileSystems, e.defaultUri), this.userHome = await this.getUserHome(), this.trueHome = await this.getUserHome(!0);
    const t = this.getOptions(e);
    return t ? (this.options = t, this.pickResource()) : Promise.resolve(void 0);
  }
  async showSaveDialog(e) {
    this.scheme = this.getScheme(e.availableFileSystems, e.defaultUri), this.userHome = await this.getUserHome(), this.trueHome = await this.getUserHome(!0), this.requiresTrailing = !0;
    const t = this.getOptions(e, !0);
    return t ? (this.options = t, this.options.canSelectFolders = !0, this.options.canSelectFiles = !0, new Promise((i) => {
      this.pickResource(!0).then((s) => {
        i(s);
      });
    })) : Promise.resolve(void 0);
  }
  getOptions(e, t = !1) {
    let i, s;
    if (e.defaultUri && (i = this.scheme === e.defaultUri.scheme ? e.defaultUri : void 0, s = t ? b(e.defaultUri) : void 0), i || (i = this.userHome, s && (i = D(i, s))), this.scheme !== g.file && !this.fileService.hasProvider(i)) {
      this.notificationService.info(d(
        "remoteFileDialog.notConnectedToRemote",
        "File system provider for {0} is not available.",
        i.toString()
      ));
      return;
    }
    const a = tt(e);
    return a.defaultUri = i, a;
  }
  remoteUriFrom(e, t) {
    e.startsWith("\\\\") || (e = e.replace(/\\/g, "/"));
    const i = this.scheme === g.file ? se.file(e) : se.from(
      { scheme: this.scheme, path: e, query: t == null ? void 0 : t.query, fragment: t == null ? void 0 : t.fragment }
    ), s = i.scheme === g.file ? void 0 : this.remoteAuthority ?? (t == null ? void 0 : t.authority);
    return we(
      i,
      s,
      s ? this.pathService.defaultUriScheme : i.scheme
    );
  }
  getScheme(e, t) {
    return e && e.length > 0 ? t && e.indexOf(t.scheme) >= 0 ? t.scheme : e[0] : t ? t.scheme : g.file;
  }
  async getRemoteAgentEnvironment() {
    return this.remoteAgentEnvironment === void 0 && (this.remoteAgentEnvironment = await this.remoteAgentService.getEnvironment()), this.remoteAgentEnvironment;
  }
  getUserHome(e = !1) {
    return e ? this.pathService.userHome({ preferLocal: this.scheme === g.file }) : this.fileDialogService.preferredHome(this.scheme);
  }
  async pickResource(e = !1) {
    this.allowFolderSelection = !!this.options.canSelectFolders, this.allowFileSelection = !!this.options.canSelectFiles, this.separator = this.labelService.getSeparator(this.scheme, this.remoteAuthority), this.hidden = !1, this.isWindows = await this.checkIsWindowsOS();
    let t = this.options.defaultUri ? this.options.defaultUri : this.workspaceContextService.getWorkspace().folders[0].uri, i;
    const s = I(t);
    if (this.options.defaultUri) {
      try {
        i = await this.fileService.stat(this.options.defaultUri);
      } catch {
      }
      (!i || !i.isDirectory) && (t = v(this.options.defaultUri), this.trailing = b(this.options.defaultUri));
    }
    return new Promise((a) => {
      if (this.filePickBox = this.quickInputService.createQuickPick(), this.busy = !0, this.filePickBox.matchOnLabel = !1, this.filePickBox.sortByLabel = !1, this.filePickBox.autoFocusOnList = !1, this.filePickBox.ignoreFocusOut = !0, this.filePickBox.ok = !0, this.scheme !== g.file && this.options && this.options.availableFileSystems && this.options.availableFileSystems.length > 1 && this.options.availableFileSystems.indexOf(g.file) > -1) {
        this.filePickBox.customButton = !0, this.filePickBox.customLabel = d("remoteFileDialog.local", "Show Local");
        let r;
        e ? r = z : r = this.allowFileSelection ? this.allowFolderSelection ? Q : $ : j;
        const h = this.keybindingService.lookupKeybinding(r.ID);
        if (h) {
          const m = h.getLabel();
          m && (this.filePickBox.customHover = it("{0} ({1})", r.LABEL, m));
        }
      }
      let o = 0, l = !1;
      this.currentFolder = v(t), this.userEnteredPathSegment = "", this.autoCompletePathSegment = "", this.filePickBox.title = this.options.title, this.filePickBox.value = this.pathFromUri(this.currentFolder, !0), this.filePickBox.valueSelection = [this.filePickBox.value.length, this.filePickBox.value.length], this.filePickBox.items = [];
      function n(r, h) {
        h && (h = P(h, r.separator), h = _(h)), a(h), r.contextKey.set(!1), r.filePickBox.dispose(), lt(r.disposables);
      }
      this.filePickBox.onDidCustom(() => {
        if (!(l || this.busy))
          return l = !0, o++, this.options.availableFileSystems && this.options.availableFileSystems.length > 1 && (this.options.availableFileSystems = this.options.availableFileSystems.slice(1)), this.filePickBox.hide(), e ? this.fileDialogService.showSaveDialog(this.options).then((r) => {
            n(this, r);
          }) : this.fileDialogService.showOpenDialog(this.options).then((r) => {
            n(this, r ? r[0] : void 0);
          });
      });
      function u(r) {
        if (r.busy) {
          r.onBusyChangeEmitter.event((h) => {
            h || u(r);
          });
          return;
        } else if (l)
          return;
        l = !0, o++, r.onDidAccept().then((h) => {
          h ? (r.filePickBox.hide(), n(r, h)) : r.hidden ? n(r, void 0) : (o--, l = !1);
        });
      }
      this.filePickBox.onDidAccept((r) => {
        u(this);
      }), this.filePickBox.onDidChangeActive((r) => {
        if (l = !1, r.length === 1 && this.isSelectionChangeFromUser()) {
          this.filePickBox.validationMessage = void 0;
          const h = this.constructFullUserPath();
          k(this.filePickBox.value.substring(0, h.length), h) || (this.filePickBox.valueSelection = [0, this.filePickBox.value.length], this.insertText(h, h)), this.setAutoComplete(h, this.userEnteredPathSegment, r[0], !0);
        }
      }), this.filePickBox.onDidChangeValue(async (r) => this.handleValueChange(r)), this.filePickBox.onDidHide(() => {
        this.hidden = !0, o === 0 && n(this, void 0);
      }), this.filePickBox.show(), this.contextKey.set(!0), this.updateItems(t, !0, this.trailing).then(() => {
        this.trailing ? this.filePickBox.valueSelection = [this.filePickBox.value.length - this.trailing.length, this.filePickBox.value.length - s.length] : this.filePickBox.valueSelection = [this.filePickBox.value.length, this.filePickBox.value.length], this.busy = !1;
      });
    });
  }
  async handleValueChange(e) {
    try {
      if (this.isValueChangeFromUser())
        if (!k(e, this.constructFullUserPath()) && !this.isBadSubpath(e)) {
          this.filePickBox.validationMessage = void 0;
          const t = this.filePickBoxValue();
          let i = y.NotUpdated;
          E.isEqual(this.currentFolder, t) || (i = await this.tryUpdateItems(e, t)), (i === y.NotUpdated || i === y.UpdatedWithTrailing) && this.setActiveItems(e);
        } else
          this.filePickBox.activeItems = [], this.userEnteredPathSegment = "";
    } catch {
    }
  }
  isBadSubpath(e) {
    return this.badPath && e.length > this.badPath.length && k(e.substring(0, this.badPath.length), this.badPath);
  }
  isValueChangeFromUser() {
    return !k(this.filePickBox.value, this.pathAppend(this.currentFolder, this.userEnteredPathSegment + this.autoCompletePathSegment));
  }
  isSelectionChangeFromUser() {
    return this.activeItem !== (this.filePickBox.activeItems ? this.filePickBox.activeItems[0] : void 0);
  }
  constructFullUserPath() {
    const e = this.pathFromUri(this.currentFolder);
    return k(this.filePickBox.value.substr(0, this.userEnteredPathSegment.length), this.userEnteredPathSegment) ? k(this.filePickBox.value.substr(0, e.length), e) ? e : this.userEnteredPathSegment : this.pathAppend(this.currentFolder, this.userEnteredPathSegment);
  }
  filePickBoxValue() {
    const e = this.remoteUriFrom(this.filePickBox.value.trimRight(), this.currentFolder), t = this.pathFromUri(this.currentFolder);
    if (k(this.filePickBox.value, t))
      return this.currentFolder;
    const i = this.remoteUriFrom(t, this.currentFolder), s = st(i, e), a = this.filePickBox.value.length > 1 && t.length > 1 ? k(this.filePickBox.value.substr(0, 2), t.substr(0, 2)) : !1;
    if (s && a) {
      let o = D(this.currentFolder, s);
      const l = b(e);
      return (l === "." || l === "..") && (o = this.remoteUriFrom(this.pathAppend(o, l), this.currentFolder)), ae(e) ? P(o) : o;
    } else
      return e;
  }
  async onDidAccept() {
    if (this.busy = !0, this.filePickBox.activeItems.length === 1) {
      const t = this.filePickBox.selectedItems[0];
      if (t.isFolder) {
        if (this.trailing)
          await this.updateItems(t.uri, !0, this.trailing);
        else {
          const i = this.pathFromUri(t.uri);
          oe(i, this.filePickBox.value) && k(t.label, b(t.uri)) ? (this.filePickBox.valueSelection = [this.pathFromUri(this.currentFolder).length, this.filePickBox.value.length], this.insertText(i, this.basenameWithTrailingSlash(t.uri))) : t.label === ".." && oe(this.filePickBox.value, i) ? (this.filePickBox.valueSelection = [i.length, this.filePickBox.value.length], this.insertText(i, "")) : await this.updateItems(t.uri, !0);
        }
        this.filePickBox.busy = !1;
        return;
      }
    } else if (await this.tryUpdateItems(this.filePickBox.value, this.filePickBoxValue()) !== y.NotUpdated) {
      this.filePickBox.busy = !1;
      return;
    }
    let e;
    if (this.filePickBox.activeItems.length === 0 ? e = this.filePickBoxValue() : this.filePickBox.activeItems.length === 1 && (e = this.filePickBox.selectedItems[0].uri), e && (e = this.addPostfix(e)), await this.validate(e))
      return this.busy = !1, e;
    this.busy = !1;
  }
  root(e) {
    let t = e, i = v(e);
    for (; !ne(t, i); )
      t = i, i = v(i);
    return i;
  }
  tildaReplace(e) {
    const t = this.trueHome;
    return e.length > 0 && e[0] === "~" ? D(t, e.substring(1)) : this.remoteUriFrom(e);
  }
  tryAddTrailingSeparatorToDirectory(e, t) {
    return t.isDirectory && !this.endsWithSlash(e.path) ? P(e) : e;
  }
  async tryUpdateItems(e, t) {
    if (e.length > 0 && e[0] === "~") {
      const i = this.tildaReplace(e);
      return await this.updateItems(i, !0) ? y.UpdatedWithTrailing : y.Updated;
    } else {
      if (e === "\\")
        return t = this.root(this.currentFolder), e = this.pathFromUri(t), await this.updateItems(t, !0) ? y.UpdatedWithTrailing : y.Updated;
      if (!E.isEqual(this.currentFolder, t) && (this.endsWithSlash(e) || !E.isEqual(this.currentFolder, v(t)) && E.isEqualOrParent(this.currentFolder, v(t)))) {
        let i;
        try {
          i = await this.fileService.stat(t);
        } catch {
        }
        if (i && i.isDirectory && b(t) !== "." && this.endsWithSlash(e))
          return t = this.tryAddTrailingSeparatorToDirectory(t, i), await this.updateItems(t) ? y.UpdatedWithTrailing : y.Updated;
        if (this.endsWithSlash(e))
          return this.filePickBox.validationMessage = d("remoteFileDialog.badPath", "The path does not exist."), this.badPath = e, y.InvalidPath;
        {
          let s = v(t);
          const a = _(P(this.currentFolder)), o = _(P(s));
          if (!E.isEqual(a, o) && (!/^[a-zA-Z]:$/.test(this.filePickBox.value) || !k(this.pathFromUri(this.currentFolder).substring(0, this.filePickBox.value.length), this.filePickBox.value))) {
            let l;
            try {
              l = await this.fileService.stat(s);
            } catch {
            }
            if (l && l.isDirectory)
              return this.badPath = void 0, s = this.tryAddTrailingSeparatorToDirectory(s, l), await this.updateItems(s, !1, b(t)) ? y.UpdatedWithTrailing : y.Updated;
          }
        }
      }
    }
    return this.badPath = void 0, y.NotUpdated;
  }
  tryUpdateTrailing(e) {
    const t = I(e);
    this.trailing && t && (this.trailing = b(e));
  }
  setActiveItems(e) {
    e = this.pathFromUri(this.tildaReplace(e));
    const t = this.remoteUriFrom(e), i = b(t), s = this.constructFullUserPath();
    if (k(s, e.substring(0, s.length)) || k(e, s.substring(0, e.length))) {
      let o = !1;
      for (let l = 0; l < this.filePickBox.items.length; l++) {
        const n = this.filePickBox.items[l];
        if (this.setAutoComplete(e, i, n)) {
          o = !0;
          break;
        }
      }
      if (!o) {
        const l = i.length >= 2 ? s.substring(s.length - i.length + 2) : "";
        this.userEnteredPathSegment = l === i ? i : "", this.autoCompletePathSegment = "", this.filePickBox.activeItems = [], this.tryUpdateTrailing(t);
      }
    } else
      this.userEnteredPathSegment = i, this.autoCompletePathSegment = "", this.filePickBox.activeItems = [], this.tryUpdateTrailing(t);
  }
  setAutoComplete(e, t, i, s = !1) {
    if (this.busy)
      return this.userEnteredPathSegment = t, this.autoCompletePathSegment = "", !1;
    const a = i.label;
    return a === ".." ? (this.userEnteredPathSegment = "", this.autoCompletePathSegment = "", this.activeItem = i, s && document.execCommand("insertText", !1, ""), !1) : !s && a.length >= t.length && k(a.substr(0, t.length), t) ? (this.userEnteredPathSegment = t, this.activeItem = i, this.autoCompletePathSegment = "", i.isFolder || !this.trailing ? this.filePickBox.activeItems = [i] : this.filePickBox.activeItems = [], !0) : s && !k(this.basenameWithTrailingSlash(i.uri), this.userEnteredPathSegment + this.autoCompletePathSegment) ? (this.userEnteredPathSegment = "", this.accessibilityService.isScreenReaderOptimized() || (this.autoCompletePathSegment = this.trimTrailingSlash(a)), this.activeItem = i, this.accessibilityService.isScreenReaderOptimized() || (this.filePickBox.valueSelection = [this.pathFromUri(this.currentFolder, !0).length, this.filePickBox.value.length], this.insertText(this.pathAppend(this.currentFolder, this.autoCompletePathSegment), this.autoCompletePathSegment), this.filePickBox.valueSelection = [this.filePickBox.value.length - this.autoCompletePathSegment.length, this.filePickBox.value.length]), !0) : (this.userEnteredPathSegment = t, this.autoCompletePathSegment = "", !1);
  }
  insertText(e, t) {
    this.filePickBox.inputHasFocus() ? (document.execCommand("insertText", !1, t), this.filePickBox.value !== e && (this.filePickBox.value = e, this.handleValueChange(e))) : (this.filePickBox.value = e, this.handleValueChange(e));
  }
  addPostfix(e) {
    let t = e;
    if (this.requiresTrailing && this.options.filters && this.options.filters.length > 0 && !ae(e)) {
      let i = !1;
      const s = I(e).substr(1);
      for (let a = 0; a < this.options.filters.length; a++) {
        for (let o = 0; o < this.options.filters[a].extensions.length; o++)
          if (this.options.filters[a].extensions[o] === "*" || this.options.filters[a].extensions[o] === s) {
            i = !0;
            break;
          }
        if (i)
          break;
      }
      i || (t = D(v(e), b(e) + "." + this.options.filters[0].extensions[0]));
    }
    return t;
  }
  trimTrailingSlash(e) {
    return e.length > 1 && this.endsWithSlash(e) ? e.substr(0, e.length - 1) : e;
  }
  yesNoPrompt(e, t) {
    const i = this.quickInputService.createQuickPick();
    i.title = t, i.ignoreFocusOut = !0, i.ok = !0, i.customButton = !0, i.customLabel = d("remoteFileDialog.cancel", "Cancel"), i.value = this.pathFromUri(e);
    let s = !1;
    return new Promise((a) => {
      i.onDidAccept(() => {
        s = !0, i.hide(), a(!0);
      }), i.onDidHide(() => {
        s || a(!1), this.filePickBox.show(), this.hidden = !1, this.filePickBox.items = this.filePickBox.items, i.dispose();
      }), i.onDidChangeValue(() => {
        i.hide();
      }), i.onDidCustom(() => {
        i.hide();
      }), i.show();
    });
  }
  async validate(e) {
    if (e === void 0)
      return this.filePickBox.validationMessage = d("remoteFileDialog.invalidPath", "Please enter a valid path."), Promise.resolve(!1);
    let t, i;
    try {
      i = await this.fileService.stat(v(e)), t = await this.fileService.stat(e);
    } catch {
    }
    if (this.requiresTrailing) {
      if (t && t.isDirectory)
        return this.filePickBox.validationMessage = d(
          "remoteFileDialog.validateFolder",
          "The folder already exists. Please use a new file name."
        ), Promise.resolve(!1);
      if (t) {
        const s = d(
          "remoteFileDialog.validateExisting",
          "{0} already exists. Are you sure you want to overwrite it?",
          b(e)
        );
        return this.yesNoPrompt(e, s);
      } else if (at(b(e), this.isWindows))
        if (i) {
          if (!i.isDirectory)
            return this.filePickBox.validationMessage = d(
              "remoteFileDialog.validateNonexistentDir",
              "Please enter a path that exists."
            ), Promise.resolve(!1);
        } else {
          const s = d(
            "remoteFileDialog.validateCreateDirectory",
            "The folder {0} does not exist. Would you like to create it?",
            b(v(e))
          );
          return this.yesNoPrompt(e, s);
        }
      else
        return this.filePickBox.validationMessage = d("remoteFileDialog.validateBadFilename", "Please enter a valid file name."), Promise.resolve(!1);
    } else if (t) {
      if (e.path === "/" && this.isWindows)
        return this.filePickBox.validationMessage = d(
          "remoteFileDialog.windowsDriveLetter",
          "Please start the path with a drive letter."
        ), Promise.resolve(!1);
      if (t.isDirectory && !this.allowFolderSelection)
        return this.filePickBox.validationMessage = d("remoteFileDialog.validateFileOnly", "Please select a file."), Promise.resolve(!1);
      if (!t.isDirectory && !this.allowFileSelection)
        return this.filePickBox.validationMessage = d("remoteFileDialog.validateFolderOnly", "Please select a folder."), Promise.resolve(!1);
    } else
      return this.filePickBox.validationMessage = d(
        "remoteFileDialog.validateNonexistentDir",
        "Please enter a path that exists."
      ), Promise.resolve(!1);
    return Promise.resolve(!0);
  }
  async updateItems(e, t = !1, i) {
    this.busy = !0, this.autoCompletePathSegment = "";
    const s = !!i;
    let a = !1;
    const o = ot(async (l) => {
      let n;
      try {
        n = await this.fileService.resolve(e), n.isDirectory || (i = b(e), e = v(e), n = void 0, a = !0);
      } catch {
      }
      const u = i ? this.pathAppend(e, i) : this.pathFromUri(e, !0);
      return this.currentFolder = this.endsWithSlash(e.path) ? e : P(e, this.separator), this.userEnteredPathSegment = i || "", this.createItems(n, this.currentFolder, l).then((r) => l.isCancellationRequested ? (this.busy = !1, !1) : (this.filePickBox.items = r, this.filePickBox.activeItems = [this.filePickBox.items[0]], this.filePickBox.activeItems = [], !k(this.filePickBox.value, u) && t && (this.filePickBox.valueSelection = [0, this.filePickBox.value.length], this.insertText(u, u)), t && i && s ? this.filePickBox.valueSelection = [this.filePickBox.value.length - i.length, this.filePickBox.value.length - i.length] : i || (this.filePickBox.valueSelection = [this.filePickBox.value.length, this.filePickBox.value.length]), this.busy = !1, this.updatingPromise = void 0, a));
    });
    return this.updatingPromise !== void 0 && this.updatingPromise.cancel(), this.updatingPromise = o, o;
  }
  pathFromUri(e, t = !1) {
    let i = nt(e.fsPath, this.isWindows).replace(/\n/g, "");
    return this.separator === "/" ? i = i.replace(/\\/g, this.separator) : i = i.replace(/\//g, this.separator), t && !this.endsWithSlash(i) && (i = i + this.separator), i;
  }
  pathAppend(e, t) {
    return t === ".." || t === "." ? this.pathFromUri(e, !0) + t : this.pathFromUri(D(e, t));
  }
  async checkIsWindowsOS() {
    let e = ue;
    const t = await this.getRemoteAgentEnvironment();
    return t && (e = t.os === 1), e;
  }
  endsWithSlash(e) {
    return /[\/\\]$/.test(e);
  }
  basenameWithTrailingSlash(e) {
    const t = this.pathFromUri(e, !0), i = this.pathFromUri(v(e), !0);
    return t.substring(i.length);
  }
  async createBackItem(e) {
    const t = this.currentFolder.with({ scheme: g.file, authority: "" }), i = v(t);
    if (!ne(t, i)) {
      const s = v(e);
      if (await this.fileService.exists(s))
        return { label: "..", uri: P(s, this.separator), isFolder: !0 };
    }
  }
  async createItems(e, t, i) {
    const s = [], a = await this.createBackItem(t);
    try {
      e || (e = await this.fileService.resolve(t));
      const l = e.children ? await Promise.all(e.children.map((n) => this.createItem(n, t, i))) : [];
      for (const n of l)
        n && s.push(n);
    } catch (l) {
      console.log(l);
    }
    if (i.isCancellationRequested)
      return [];
    const o = s.sort((l, n) => {
      if (l.isFolder !== n.isFolder)
        return l.isFolder ? -1 : 1;
      const u = this.endsWithSlash(l.label) ? l.label.substr(0, l.label.length - 1) : l.label, r = this.endsWithSlash(n.label) ? n.label.substr(0, n.label.length - 1) : n.label;
      return u.localeCompare(r);
    });
    return a && o.unshift(a), o;
  }
  extname(e) {
    const t = I(e);
    if (t.length === 0) {
      const i = b(e);
      if (i.startsWith("."))
        return i;
    } else
      return t;
    return "";
  }
  filterFile(e) {
    if (this.options.filters) {
      const t = this.extname(e);
      for (let i = 0; i < this.options.filters.length; i++)
        for (let s = 0; s < this.options.filters[i].extensions.length; s++) {
          const a = this.options.filters[i].extensions[s];
          if (a === "*" || t === "." + a)
            return !0;
        }
      return !1;
    }
    return !0;
  }
  async createItem(e, t, i) {
    if (i.isCancellationRequested)
      return;
    let s = D(t, e.name);
    if (e.isDirectory) {
      const a = b(s);
      return s = P(s, this.separator), { label: a, uri: s, isFolder: !0, iconClasses: re(this.modelService, this.languageService, s || void 0, rt.FOLDER) };
    } else if (!e.isDirectory && this.allowFileSelection && this.filterFile(s))
      return { label: e.name, uri: s, isFolder: !1, iconClasses: re(this.modelService, this.languageService, s || void 0) };
  }
};
X = T([
  c(0, pe),
  c(1, Xe),
  c(2, Se),
  c(3, ve),
  c(4, Je),
  c(5, U),
  c(6, Ye),
  c(7, be),
  c(8, ee),
  c(9, Ze),
  c(10, ye),
  c(11, Y),
  c(12, Ge),
  c(13, et)
], X);
let J = class {
  constructor(e, t, i, s, a, o, l, n, u, r, h, m, p, w, L, A, xe) {
    this.hostService = e, this.contextService = t, this.historyService = i, this.environmentService = s, this.instantiationService = a, this.configurationService = o, this.fileService = l, this.openerService = n, this.dialogService = u, this.languageService = r, this.workspacesService = h, this.labelService = m, this.pathService = p, this.commandService = w, this.editorService = L, this.codeEditorService = A, this.logService = xe;
  }
  async defaultFilePath(e = this.getSchemeFilterForWindow()) {
    let t = this.historyService.getLastActiveFile(e);
    return t ? t = v(t) : t = this.historyService.getLastActiveWorkspaceRoot(e), t || (t = await this.preferredHome(e)), t;
  }
  async defaultFolderPath(e = this.getSchemeFilterForWindow()) {
    let t = this.historyService.getLastActiveWorkspaceRoot(e);
    return t || (t = this.historyService.getLastActiveFile(e)), t ? v(t) : this.preferredHome(e);
  }
  async preferredHome(e = this.getSchemeFilterForWindow()) {
    const t = e === g.file, i = this.configurationService.inspect("files.dialog.defaultPath"), s = t ? i.userLocalValue : i.userRemoteValue;
    if (s && (t ? pt(s) : (await this.pathService.path).isAbsolute(s))) {
      const o = t ? St(s) : (await this.pathService.path).normalize(s), l = we(await this.pathService.fileURI(o), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
      if (await this.fileService.exists(l))
        return l;
    }
    return this.pathService.userHome({ preferLocal: t });
  }
  async defaultWorkspacePath(e = this.getSchemeFilterForWindow()) {
    let t;
    if (this.contextService.getWorkbenchState() === 3) {
      const i = this.contextService.getWorkspace().configuration;
      (i == null ? void 0 : i.scheme) === e && vt(i, this.environmentService) && !bt(i) && (t = v(i));
    }
    return t || (t = await this.defaultFilePath(e)), t;
  }
  async showSaveConfirm(e) {
    return this.skipDialogs() ? (this.logService.trace("FileDialogService: refused to show save confirmation dialog in tests."), 1) : this.doShowSaveConfirm(e);
  }
  skipDialogs() {
    return this.environmentService.isExtensionDevelopment && this.environmentService.extensionTestsLocationURI ? !0 : !!this.environmentService.enableSmokeTestDriver;
  }
  async doShowSaveConfirm(e) {
    if (e.length === 0)
      return 1;
    let t, i = d("saveChangesDetail", "Your changes will be lost if you don't save them.");
    e.length === 1 ? t = d(
      "saveChangesMessage",
      "Do you want to save the changes you made to {0}?",
      typeof e[0] == "string" ? e[0] : b(e[0])
    ) : (t = d(
      "saveChangesMessages",
      "Do you want to save the changes to the following {0} files?",
      e.length
    ), i = yt(e) + `
` + i);
    const { result: s } = await this.dialogService.prompt({
      type: W.Warning,
      message: t,
      detail: i,
      buttons: [
        {
          label: e.length > 1 ? d({ key: "saveAll", comment: ["&& denotes a mnemonic"] }, "&&Save All") : d({ key: "save", comment: ["&& denotes a mnemonic"] }, "&&Save"),
          run: () => 0
        },
        {
          label: d({ key: "dontSave", comment: ["&& denotes a mnemonic"] }, "Do&&n't Save"),
          run: () => 1
        }
      ],
      cancelButton: {
        run: () => 2
      }
    });
    return s;
  }
  addFileSchemaIfNeeded(e, t) {
    return e === g.untitled ? [g.file] : e !== g.file ? [e, g.file] : [e];
  }
  async pickFileFolderAndOpenSimplified(e, t, i) {
    const s = d("openFileOrFolder.title", "Open File or Folder"), a = this.addFileSchemaIfNeeded(e), o = await this.pickResource({ canSelectFiles: !0, canSelectFolders: !0, canSelectMany: !1, defaultUri: t.defaultUri, title: s, availableFileSystems: a });
    if (o) {
      const l = await this.fileService.stat(o), n = l.isDirectory ? { folderUri: o } : { fileUri: o };
      !Dt(n) && Bt(n) && this.addFileToRecentlyOpened(n.fileUri), l.isDirectory || t.forceNewWindow || i ? await this.hostService.openWindow([n], { forceNewWindow: t.forceNewWindow, remoteAuthority: t.remoteAuthority }) : await this.editorService.openEditors([{ resource: o, options: { source: le.USER, pinned: !0 } }], void 0, { validateTrust: !0 });
    }
  }
  async pickFileAndOpenSimplified(e, t, i) {
    const s = d("openFile.title", "Open File"), a = this.addFileSchemaIfNeeded(e), o = await this.pickResource({ canSelectFiles: !0, canSelectFolders: !1, canSelectMany: !1, defaultUri: t.defaultUri, title: s, availableFileSystems: a });
    o && (this.addFileToRecentlyOpened(o), t.forceNewWindow || i ? await this.hostService.openWindow([{ fileUri: o }], { forceNewWindow: t.forceNewWindow, remoteAuthority: t.remoteAuthority }) : await this.editorService.openEditors([{ resource: o, options: { source: le.USER, pinned: !0 } }], void 0, { validateTrust: !0 }));
  }
  addFileToRecentlyOpened(e) {
    this.workspacesService.addRecentlyOpened([{ fileUri: e, label: this.labelService.getUriLabel(e) }]);
  }
  async pickFolderAndOpenSimplified(e, t) {
    const i = d("openFolder.title", "Open Folder"), s = this.addFileSchemaIfNeeded(e, !0), a = await this.pickResource({ canSelectFiles: !1, canSelectFolders: !0, canSelectMany: !1, defaultUri: t.defaultUri, title: i, availableFileSystems: s });
    if (a)
      return this.hostService.openWindow([{ folderUri: a }], { forceNewWindow: t.forceNewWindow, remoteAuthority: t.remoteAuthority });
  }
  async pickWorkspaceAndOpenSimplified(e, t) {
    const i = d("openWorkspace.title", "Open Workspace from File"), s = [{ name: d("filterName.workspace", "Workspace"), extensions: [kt] }], a = this.addFileSchemaIfNeeded(e, !0), o = await this.pickResource({ canSelectFiles: !0, canSelectFolders: !1, canSelectMany: !1, defaultUri: t.defaultUri, title: i, filters: s, availableFileSystems: a });
    if (o)
      return this.hostService.openWindow([{ workspaceUri: o }], { forceNewWindow: t.forceNewWindow, remoteAuthority: t.remoteAuthority });
  }
  async pickFileToSaveSimplified(e, t) {
    t.availableFileSystems || (t.availableFileSystems = this.addFileSchemaIfNeeded(e)), t.title = d("saveFileAs.title", "Save As");
    const i = await this.saveRemoteResource(t);
    return i && this.addFileToRecentlyOpened(i), i;
  }
  async showSaveDialogSimplified(e, t) {
    return t.availableFileSystems || (t.availableFileSystems = this.addFileSchemaIfNeeded(e)), this.saveRemoteResource(t);
  }
  async showOpenDialogSimplified(e, t) {
    t.availableFileSystems || (t.availableFileSystems = this.addFileSchemaIfNeeded(e, t.canSelectFolders));
    const i = await this.pickResource(t);
    return i ? [i] : void 0;
  }
  getSimpleFileDialog() {
    return this.instantiationService.createInstance(X);
  }
  pickResource(e) {
    return this.getSimpleFileDialog().showOpenDialog(e);
  }
  saveRemoteResource(e) {
    return this.getSimpleFileDialog().showSaveDialog(e);
  }
  getSchemeFilterForWindow(e) {
    return e ?? this.pathService.defaultUriScheme;
  }
  getFileSystemSchema(e) {
    var t;
    return e.availableFileSystems && e.availableFileSystems[0] || this.getSchemeFilterForWindow((t = e.defaultUri) == null ? void 0 : t.scheme);
  }
  getWorkspaceAvailableFileSystems(e) {
    if (e.availableFileSystems && e.availableFileSystems.length > 0)
      return e.availableFileSystems;
    const t = [g.file];
    return this.environmentService.remoteAuthority && t.unshift(g.vscodeRemote), t;
  }
  getPickFileToSaveDialogOptions(e, t) {
    const i = {
      defaultUri: e,
      title: d("saveAsTitle", "Save As"),
      availableFileSystems: t
    }, s = e ? I(e) : void 0;
    let a;
    const o = this.languageService.getSortedRegisteredLanguageNames(), l = he(o.map(({ languageName: n, languageId: u }) => {
      const r = this.languageService.getExtensions(u);
      if (!r.length)
        return null;
      const h = { name: n, extensions: wt(r).slice(0, 10).map((p) => N(p, ".")) }, m = s || xt;
      if (!a && r.includes(m)) {
        a = h;
        const p = N(m, ".");
        return h.extensions.includes(p) || h.extensions.unshift(p), null;
      }
      return h;
    }));
    return !a && s && (a = { name: N(s, ".").toUpperCase(), extensions: [N(s, ".")] }), i.filters = he([
      { name: d("allFiles", "All Files"), extensions: ["*"] },
      a,
      ...l,
      { name: d("noExt", "No Extension"), extensions: [""] }
    ]), i;
  }
};
J = T([
  c(0, ht),
  c(1, ve),
  c(2, ct),
  c(3, ee),
  c(4, Z),
  c(5, dt),
  c(6, pe),
  c(7, ut),
  c(8, G),
  c(9, be),
  c(10, ft),
  c(11, Se),
  c(12, ye),
  c(13, mt),
  c(14, ke),
  c(15, gt),
  c(16, M)
], J);
class Wt extends J {
  constructor() {
    super(...arguments), this.pickWorkspaceAndOpen = Pt;
  }
  async pickFileFolderAndOpen(e) {
    const t = this.getFileSystemSchema(e);
    return e.defaultUri == null && (e.defaultUri = await this.defaultFilePath(t)), super.pickFileFolderAndOpenSimplified(t, e, !1);
  }
  async pickFolderAndOpen(e) {
    const t = this.getFileSystemSchema(e);
    return e.defaultUri == null && (e.defaultUri = await this.defaultFolderPath(t)), super.pickFolderAndOpenSimplified(t, e);
  }
  async pickFileAndOpen(e) {
    const t = this.getFileSystemSchema(e);
    return e.defaultUri == null && (e.defaultUri = await this.defaultFilePath(t)), super.pickFileAndOpenSimplified(t, e, !1);
  }
  async showSaveDialog(e) {
    const t = this.getFileSystemSchema(e);
    return super.showSaveDialogSimplified(t, e);
  }
  async showOpenDialog(e) {
    const t = this.getFileSystemSchema(e);
    return super.showOpenDialogSimplified(t, e);
  }
  async pickFileToSave(e, t) {
    const i = this.getFileSystemSchema({ defaultUri: e, availableFileSystems: t }), s = this.getPickFileToSaveDialogOptions(e, t);
    return super.pickFileToSaveSimplified(i, s);
  }
}
function Mt(f) {
  return {
    [G.toString()]: new ce(K, void 0, !0),
    [U.toString()]: new ce(Wt, void 0, !0),
    ...Ft(f)
  };
}
export {
  Mt as default
};
