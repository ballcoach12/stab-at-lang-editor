import { _ as f, a as s, af as I, ab as v, ai as C, ag as x, bX as g, lh as D, sV as V, p5 as d, $ as a, K as c, a2 as p, b6 as h, a4 as _ } from "./verifyPrepare-778b382e.js";
let l = class extends D {
  get onDidChangeDropdownVisibility() {
    return this._dropdown.onDidChangeVisibility;
  }
  constructor(i, t, n, e, o, w, m, u, y, A, b) {
    var r;
    super(null, i), this._contextMenuProvider = o, this._options = w, this._container = null, this._dropdownContainer = null, this._primaryAction = new V(
      i,
      void 0,
      m,
      u,
      y,
      A,
      o,
      b
    ), this._dropdown = new d(t, n, this._contextMenuProvider, {
      menuAsChild: !0,
      classNames: e ? ["codicon", "codicon-chevron-down", e] : ["codicon", "codicon-chevron-down"],
      keybindingProvider: (r = this._options) == null ? void 0 : r.getKeyBinding
    });
  }
  setActionContext(i) {
    super.setActionContext(i), this._primaryAction.setActionContext(i), this._dropdown.setActionContext(i);
  }
  render(i) {
    this._container = i, super.render(this._container), this._container.classList.add("monaco-dropdown-with-primary");
    const t = a(".action-container");
    this._primaryAction.render(c(this._container, t)), this._dropdownContainer = a(".dropdown-action-container"), this._dropdown.render(c(this._container, this._dropdownContainer)), this._register(p(t, _.KEY_DOWN, (n) => {
      const e = new h(n);
      e.equals(17) && (this._primaryAction.element.tabIndex = -1, this._dropdown.focus(), e.stopPropagation());
    })), this._register(p(this._dropdownContainer, _.KEY_DOWN, (n) => {
      var o;
      const e = new h(n);
      e.equals(15) && (this._primaryAction.element.tabIndex = 0, this._dropdown.setFocusable(!1), (o = this._primaryAction.element) == null || o.focus(), e.stopPropagation());
    }));
  }
  focus(i) {
    i ? this._dropdown.focus() : (this._primaryAction.element.tabIndex = 0, this._primaryAction.element.focus());
  }
  blur() {
    this._primaryAction.element.tabIndex = -1, this._dropdown.blur(), this._container.blur();
  }
  setFocusable(i) {
    i ? this._primaryAction.element.tabIndex = 0 : (this._primaryAction.element.tabIndex = -1, this._dropdown.setFocusable(!1));
  }
  update(i, t, n) {
    this._dropdown.dispose(), this._dropdown = new d(i, t, this._contextMenuProvider, {
      menuAsChild: !0,
      classNames: ["codicon", n || "codicon-chevron-down"]
    }), this._dropdownContainer && this._dropdown.render(this._dropdownContainer);
  }
  dispose() {
    this._primaryAction.dispose(), this._dropdown.dispose(), super.dispose();
  }
};
l = f([
  s(6, I),
  s(7, v),
  s(8, C),
  s(9, x),
  s(10, g)
], l);
export {
  l as D
};
