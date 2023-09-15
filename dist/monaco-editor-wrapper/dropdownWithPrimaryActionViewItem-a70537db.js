import { _ as f, a as s, ad as I, a9 as v, ag as C, ae as x, bV as g, lf as D, sT as V, p3 as d, $ as a, H as c, a0 as p, b4 as h, a2 as _ } from "./index-4b7b8e94.js";
let l = class extends D {
  get onDidChangeDropdownVisibility() {
    return this._dropdown.onDidChangeVisibility;
  }
  constructor(e, t, n, i, o, w, m, u, y, A, b) {
    var r;
    super(null, e), this._contextMenuProvider = o, this._options = w, this._container = null, this._dropdownContainer = null, this._primaryAction = new V(
      e,
      void 0,
      m,
      u,
      y,
      A,
      o,
      b
    ), this._dropdown = new d(t, n, this._contextMenuProvider, {
      menuAsChild: !0,
      classNames: i ? ["codicon", "codicon-chevron-down", i] : ["codicon", "codicon-chevron-down"],
      keybindingProvider: (r = this._options) == null ? void 0 : r.getKeyBinding
    });
  }
  setActionContext(e) {
    super.setActionContext(e), this._primaryAction.setActionContext(e), this._dropdown.setActionContext(e);
  }
  render(e) {
    this._container = e, super.render(this._container), this._container.classList.add("monaco-dropdown-with-primary");
    const t = a(".action-container");
    this._primaryAction.render(c(this._container, t)), this._dropdownContainer = a(".dropdown-action-container"), this._dropdown.render(c(this._container, this._dropdownContainer)), this._register(p(t, _.KEY_DOWN, (n) => {
      const i = new h(n);
      i.equals(17) && (this._primaryAction.element.tabIndex = -1, this._dropdown.focus(), i.stopPropagation());
    })), this._register(p(this._dropdownContainer, _.KEY_DOWN, (n) => {
      var o;
      const i = new h(n);
      i.equals(15) && (this._primaryAction.element.tabIndex = 0, this._dropdown.setFocusable(!1), (o = this._primaryAction.element) == null || o.focus(), i.stopPropagation());
    }));
  }
  focus(e) {
    e ? this._dropdown.focus() : (this._primaryAction.element.tabIndex = 0, this._primaryAction.element.focus());
  }
  blur() {
    this._primaryAction.element.tabIndex = -1, this._dropdown.blur(), this._container.blur();
  }
  setFocusable(e) {
    e ? this._primaryAction.element.tabIndex = 0 : (this._primaryAction.element.tabIndex = -1, this._dropdown.setFocusable(!1));
  }
  update(e, t, n) {
    this._dropdown.dispose(), this._dropdown = new d(e, t, this._contextMenuProvider, {
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
