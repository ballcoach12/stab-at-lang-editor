import { A8 as k, _ as F, a as M, af as E, Q as x, hO as _, G as g, kP as w, A9 as c, Aa as m, D as b, yi as L, gk as I, yj as l, e as H, bY as V, gh as N, Ab as f, ts as C, fQ as O, cH as R, aO as D, dC as W, p9 as K, Ac as T, Ad as P, p7 as $, pj as p, n as j, ak as z, al as Q, Ae as U, bX as B, aN as G, l as X, Af as Y } from "./verifyPrepare-778b382e.js";
import { g as q } from "./notificationsCommands-93c7d0a9.js";
k();
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
  M(1, E)
], h);
class J extends b {
  constructor() {
    super(), this._register(L.addImplementation(95, "editor", async (e) => {
      const i = e.get(I), o = e.get(l), t = e.get(H), n = e.get(V);
      let s = i.getActiveCodeEditor() || i.getFocusedCodeEditor();
      s || (await n.executeCommand(N), s = i.getActiveCodeEditor()), o.show(t.createInstance(h, s));
    }));
  }
}
const Z = x.as(_.Workbench);
Z.registerWorkbenchContribution(J, 4);
class ee extends b {
  constructor() {
    super(), this._options = {
      ariaLabel: g("hoverAccessibleView", "Hover Accessible View"),
      language: "typescript",
      type: "view"
    }, this._register(f.addImplementation(95, "hover", (e) => {
      var s, a;
      const i = e.get(l), o = e.get(I), t = o.getActiveCodeEditor() || o.getFocusedCodeEditor(), n = t ? ((s = C.get(t)) == null ? void 0 : s.getWidgetContent()) ?? void 0 : void 0;
      return !t || !n ? !1 : (this._options.language = ((a = t == null ? void 0 : t.getModel()) == null ? void 0 : a.getLanguageId()) ?? void 0, i.show({
        verbositySettingKey: "accessibility.verbosity.hover",
        provideContent() {
          return n;
        },
        onClose() {
          var u;
          (u = C.get(t)) == null || u.focus();
        },
        options: this._options
      }), !0);
    }, O.hoverFocused)), this._register(f.addImplementation(90, "extension-hover", (e) => {
      const i = e.get(l), t = e.get(R).getContextViewElement(), n = (t == null ? void 0 : t.textContent) ?? void 0, s = e.get(D);
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
      const i = e.get(l), o = e.get(W), t = e.get(V);
      function n() {
        const s = q(o);
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
            r && (v(), r.focusNext(), A(a, u, "next"), n());
          },
          previous() {
            r && (v(), r.focusPrevious(), A(a, u, "previous"), n());
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
function A(d, e, i) {
  if (d === void 0 || e === void 0)
    return;
  const o = d + 1;
  i === "next" && o + 1 <= e ? p(`Focused ${o + 1} of ${e}`) : i === "previous" && o - 1 > 0 && p(`Focused ${o - 1} of ${e}`);
}
var oe = ".accessible-view{background-color:var(--vscode-editorWidget-background);border:2px solid var(--vscode-focusBorder);box-shadow:0 2px 8px var(--vscode-widget-shadow);color:var(--vscode-editorWidget-foreground);position:absolute}";
j(oe, {});
class se extends Q {
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
    const i = e.get(B), o = e.get(G), t = i.isScreenReaderOptimized();
    o.updateValue("editor.accessibilitySupport", t ? "off" : "on", 2), p(t ? c.screenReaderModeDisabled : c.screenReaderModeEnabled);
  }
}
z(se);
function ae() {
  return {
    [l.toString()]: new X(Y, [], !0)
  };
}
export {
  ae as default
};
