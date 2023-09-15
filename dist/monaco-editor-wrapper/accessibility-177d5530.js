import { A6 as M, _ as F, a as k, ad as E, N as x, hM as _, B as g, kN as w, A7 as c, A8 as m, D as b, yg as L, gi as V, yh as l, e as N, bW as I, gf as H, A9 as f, tq as A, fO as R, cF as W, aM as D, dA as O, p7 as K, Aa as T, Ab as P, p5 as $, ph as p, n as z, ai as j, aj as B, Ac as U, bV as q, aL as G, k as J, Ad as Q } from "./index-4b7b8e94.js";
import { g as X } from "./notificationsCommands-570a0b43.js";
M();
let h = class {
  onClose() {
    this._editor.focus();
  }
  constructor(e, i) {
    this._editor = e, this._keybindingService = i, this.options = { type: "help", ariaLabel: g("editor-help", "editor accessibility help"), readMoreUrl: "https://go.microsoft.com/fwlink/?linkid=851010" }, this.verbositySettingKey = "accessibility.verbosity.editor";
  }
  _descriptionForCommand(e, i, o) {
    const t = this._keybindingService.lookupKeybinding(e);
    return t ? w(i, t.getAriaLabel()) : w(o, e);
  }
  provideContent() {
    const e = this._editor.getOptions(), i = [];
    return e.get(60) ? e.get(89) ? i.push(c.readonlyDiffEditor) : i.push(c.editableDiffEditor) : e.get(89) ? i.push(c.readonlyEditor) : i.push(c.editableEditor), e.get(141) ? i.push(this._descriptionForCommand(m.ID, c.tabFocusModeOnMsg, c.tabFocusModeOnMsgNoKb)) : i.push(this._descriptionForCommand(m.ID, c.tabFocusModeOffMsg, c.tabFocusModeOffMsgNoKb)), i.join(`
`);
  }
};
h = F([
  k(1, E)
], h);
class Y extends b {
  constructor() {
    super(), this._register(L.addImplementation(95, "editor", async (e) => {
      const i = e.get(V), o = e.get(l), t = e.get(N), n = e.get(I);
      let s = i.getActiveCodeEditor() || i.getFocusedCodeEditor();
      s || (await n.executeCommand(H), s = i.getActiveCodeEditor()), o.show(t.createInstance(h, s));
    }));
  }
}
const Z = x.as(_.Workbench);
Z.registerWorkbenchContribution(Y, 4);
class ee extends b {
  constructor() {
    super(), this._options = {
      ariaLabel: g("hoverAccessibleView", "Hover Accessible View"),
      language: "typescript",
      type: "view"
    }, this._register(f.addImplementation(95, "hover", (e) => {
      var s, a;
      const i = e.get(l), o = e.get(V), t = o.getActiveCodeEditor() || o.getFocusedCodeEditor(), n = t ? ((s = A.get(t)) == null ? void 0 : s.getWidgetContent()) ?? void 0 : void 0;
      return !t || !n ? !1 : (this._options.language = ((a = t == null ? void 0 : t.getModel()) == null ? void 0 : a.getLanguageId()) ?? void 0, i.show({
        verbositySettingKey: "accessibility.verbosity.hover",
        provideContent() {
          return n;
        },
        onClose() {
          var u;
          (u = A.get(t)) == null || u.focus();
        },
        options: this._options
      }), !0);
    }, R.hoverFocused)), this._register(f.addImplementation(90, "extension-hover", (e) => {
      const i = e.get(l), t = e.get(W).getContextViewElement(), n = (t == null ? void 0 : t.textContent) ?? void 0, s = e.get(D);
      return t.classList.contains("accessible-view-container") || !n ? !1 : (i.show({
        verbositySettingKey: "accessibility.verbosity.hover",
        provideContent() {
          return n;
        },
        onClose() {
          s.showAndFocusLastHover();
        },
        options: this._options
      }), !0);
    }));
  }
}
const y = x.as(_.Workbench);
y.registerWorkbenchContribution(ee, 4);
class ie extends b {
  constructor() {
    super(), this._register(f.addImplementation(90, "notifications", (e) => {
      const i = e.get(l), o = e.get(O), t = e.get(I);
      function n() {
        const s = X(o);
        if (!s)
          return !1;
        t.executeCommand("notifications.showList");
        let a, u;
        const r = o.lastFocusedList;
        if (r instanceof $ && (a = r.indexOf(s), u = r.length), a === void 0)
          return !1;
        function v() {
          if (t.executeCommand("notifications.showList"), r && a !== void 0) {
            r.domFocus();
            try {
              r.setFocus([a]);
            } catch {
            }
          }
        }
        const S = s.message.original.toString();
        return S ? (i.show({
          provideContent: () => g(
            "notification.accessibleView",
            "{0} Source: {1}",
            S,
            s.source
          ),
          onClose() {
            v();
          },
          next() {
            r && (v(), r.focusNext(), C(a, u, "next"), n());
          },
          previous() {
            r && (v(), r.focusPrevious(), C(a, u, "previous"), n());
          },
          verbositySettingKey: "accessibility.verbosity.notification",
          options: {
            ariaLabel: g("notification", "Notification Accessible View"),
            type: "view"
          }
        }), !0) : !1;
      }
      return n();
    }, K));
  }
}
y.registerWorkbenchContribution(ie, 4);
class te extends b {
  constructor() {
    super(), this._register(T.addImplementation(95, "next", (e) => (e.get(l).next(), !0))), this._register(P.addImplementation(95, "previous", (e) => (e.get(l).previous(), !0)));
  }
}
y.registerWorkbenchContribution(te, 4);
function C(d, e, i) {
  if (d === void 0 || e === void 0)
    return;
  const o = d + 1;
  i === "next" && o + 1 <= e ? p(`Focused ${o + 1} of ${e}`) : i === "previous" && o - 1 > 0 && p(`Focused ${o - 1} of ${e}`);
}
var oe = ".accessible-view{background-color:var(--vscode-editorWidget-background);border:2px solid var(--vscode-focusBorder);box-shadow:0 2px 8px var(--vscode-widget-shadow);color:var(--vscode-editorWidget-foreground);position:absolute}";
z(oe, {});
class se extends B {
  constructor() {
    super({
      id: "editor.action.toggleScreenReaderAccessibilityMode",
      title: { value: g("toggleScreenReaderMode", "Toggle Screen Reader Accessibility Mode"), original: "Toggle Screen Reader Accessibility Mode" },
      f1: !0,
      keybinding: [
        {
          primary: 2083,
          weight: 200 + 10,
          when: U
        },
        {
          primary: 1595,
          linux: { primary: 1598 },
          weight: 200 + 10
        }
      ]
    });
  }
  async run(e) {
    const i = e.get(q), o = e.get(G), t = i.isScreenReaderOptimized();
    o.updateValue("editor.accessibilitySupport", t ? "off" : "on", 2), p(t ? c.screenReaderModeDisabled : c.screenReaderModeEnabled);
  }
}
j(se);
function ae() {
  return {
    [l.toString()]: new J(Q, [], !0)
  };
}
export {
  ae as default
};
