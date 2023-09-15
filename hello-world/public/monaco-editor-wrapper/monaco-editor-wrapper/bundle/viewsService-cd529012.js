import { _ as x, a, aI as k, aa as E, e as F, ae as B, ab as R, ah as K, bC as O, N as y, yl as Y, ym as Z, bO as ee, aF as ie, aR as te, yn as ne, yo as se, aL as oe, ac as I, af as m, aA as re, aK as ae, ag as Q, D as ce, E as N, t as U, yp as G, yq as de, aH as le, w as P, ak as M, ai as b, aj as S, B as p, aE as C, c8 as z, dy as H, fS as A, bM as q, aG as D, c9 as we, U as he, L as ue } from "./index-4b7b8e94.js";
let _ = class extends Y {
  constructor(e, i, t, n, s, o, r, c) {
    super(e, i, s, t), this.storageService = t, this.instantiationService = n, this.contextMenuService = o, this.extensionService = r, this.contextService = c;
  }
  create(e) {
    this.viewPaneContainer = this._register(this.createViewPaneContainer(e)), this._register(this.viewPaneContainer.onTitleAreaUpdate(() => this.updateTitleArea())), this.viewPaneContainer.create(e);
  }
  setVisible(e) {
    var i;
    super.setVisible(e), (i = this.viewPaneContainer) == null || i.setVisible(e);
  }
  layout(e) {
    var i;
    (i = this.viewPaneContainer) == null || i.layout(e);
  }
  setBoundarySashes(e) {
    var i;
    (i = this.viewPaneContainer) == null || i.setBoundarySashes(e);
  }
  getOptimalWidth() {
    var e;
    return ((e = this.viewPaneContainer) == null ? void 0 : e.getOptimalWidth()) ?? 0;
  }
  openView(e, i) {
    var t;
    return (t = this.viewPaneContainer) == null ? void 0 : t.openView(e, i);
  }
  getViewPaneContainer() {
    return this.viewPaneContainer;
  }
  getActionsContext() {
    var e;
    return (e = this.getViewPaneContainer()) == null ? void 0 : e.getActionsContext();
  }
  getContextMenuActions() {
    var e, i;
    return ((i = (e = this.viewPaneContainer) == null ? void 0 : e.menuActions) == null ? void 0 : i.getContextMenuActions()) ?? [];
  }
  getMenuIds() {
    var i;
    const e = [];
    return (i = this.viewPaneContainer) != null && i.menuActions && (e.push(this.viewPaneContainer.menuActions.menuId), this.viewPaneContainer.isViewMergedWithContainer() && e.push(this.viewPaneContainer.panes[0].menuActions.menuId)), e;
  }
  getActions() {
    var i;
    const e = [];
    if ((i = this.viewPaneContainer) != null && i.menuActions && (e.push(...this.viewPaneContainer.menuActions.getPrimaryActions()), this.viewPaneContainer.isViewMergedWithContainer())) {
      const t = this.viewPaneContainer.panes[0];
      t.shouldShowFilterInHeader() && e.push(Z), e.push(...t.menuActions.getPrimaryActions());
    }
    return e;
  }
  getSecondaryActions() {
    var n;
    if (!((n = this.viewPaneContainer) != null && n.menuActions))
      return [];
    const e = this.viewPaneContainer.isViewMergedWithContainer() ? this.viewPaneContainer.panes[0].menuActions.getSecondaryActions() : [];
    let i = this.viewPaneContainer.menuActions.getSecondaryActions();
    const t = i.findIndex((s) => s instanceof ee && s.item.submenu === ie);
    if (t !== -1) {
      const s = i[t];
      s.actions.some(({ enabled: o }) => o) ? i.length === 1 && e.length === 0 ? i = s.actions.slice() : t !== 0 && (i = [s, ...i.slice(0, t), ...i.slice(t + 1)]) : i.splice(t, 1);
    }
    return i.length && e.length ? [
      ...i,
      new te(),
      ...e
    ] : i.length ? i : e;
  }
  getActionViewItem(e) {
    var i;
    return (i = this.viewPaneContainer) == null ? void 0 : i.getActionViewItem(e);
  }
  getTitle() {
    var e;
    return ((e = this.viewPaneContainer) == null ? void 0 : e.getTitle()) ?? "";
  }
  focus() {
    var e;
    (e = this.viewPaneContainer) == null || e.focus();
  }
};
_ = x([
  a(1, k),
  a(2, E),
  a(3, F),
  a(4, B),
  a(5, R),
  a(6, K),
  a(7, O)
], _);
class W extends se {
  static create(e, i, t, n, s, o, r) {
    return new W(e, i, t, n, s, o, r);
  }
  constructor(e, i, t, n, s, o, r) {
    super(e, i, t, n, s, o), this.iconUrl = r;
  }
}
const v = {
  Viewlets: "workbench.contributions.viewlets",
  Panels: "workbench.contributions.panels",
  Auxiliary: "workbench.contributions.auxiliary"
};
class $ extends ne {
  registerPaneComposite(e) {
    super.registerComposite(e);
  }
  deregisterPaneComposite(e) {
    super.deregisterComposite(e);
  }
  getPaneComposite(e) {
    return this.getComposite(e);
  }
  getPaneComposites() {
    return this.getComposites();
  }
}
y.add(v.Viewlets, new $());
y.add(v.Panels, new $());
y.add(v.Auxiliary, new $());
let T = class extends re {
  constructor(e, i, t, n, s, o, r, c, d, l, h, u) {
    super(e, { mergeViewWithContainerWhenSingleView: !1 }, r, t, n, d, s, l, c, o, h, u), this.constantViewDescriptors = /* @__PURE__ */ new Map(), this.allViews = /* @__PURE__ */ new Map(), this._register(i((g) => {
      this.filterValue = g, this.onFilterChanged(g);
    })), this._register(this.onDidChangeViewVisibility((g) => {
      var f;
      const w = Array.from(this.allViews.entries()).find((L) => L[1].has(g.id));
      w && !((f = this.filterValue) != null && f.includes(w[0])) && this.setFilter(w[1].get(g.id));
    })), this._register(this.viewContainerModel.onDidChangeActiveViewDescriptors(() => {
      this.updateAllViews(this.viewContainerModel.activeViewDescriptors);
    }));
  }
  updateAllViews(e) {
    e.forEach((i) => {
      const t = this.getFilterOn(i);
      t && (this.allViews.has(t) || this.allViews.set(t, /* @__PURE__ */ new Map()), this.allViews.get(t).set(i.id, i), this.filterValue && !this.filterValue.includes(t) && this.panes.find((n) => n.id === i.id) && this.viewContainerModel.setVisible(i.id, !1));
    });
  }
  addConstantViewDescriptors(e) {
    e.forEach((i) => this.constantViewDescriptors.set(i.id, i));
  }
  onFilterChanged(e) {
    this.allViews.size === 0 && this.updateAllViews(this.viewContainerModel.activeViewDescriptors), this.getViewsNotForTarget(e).forEach((i) => this.viewContainerModel.setVisible(i.id, !1)), this.getViewsForTarget(e).forEach((i) => this.viewContainerModel.setVisible(i.id, !0));
  }
  getViewsForTarget(e) {
    const i = [];
    for (let t = 0; t < e.length; t++)
      this.allViews.has(e[t]) && i.push(...Array.from(this.allViews.get(e[t]).values()));
    return i;
  }
  getViewsNotForTarget(e) {
    const i = this.allViews.keys();
    let t = i.next(), n = [];
    for (; !t.done; ) {
      let s = !1;
      e.forEach((o) => {
        t.value === o && (s = !0);
      }), s || (n = n.concat(this.getViewsForTarget([t.value]))), t = i.next();
    }
    return n;
  }
  onDidAddViewDescriptors(e) {
    const i = super.onDidAddViewDescriptors(e);
    for (let t = 0; t < e.length; t++)
      this.constantViewDescriptors.has(e[t].viewDescriptor.id) && i[t].setExpanded(!1);
    return this.allViews.size === 0 && this.updateAllViews(this.viewContainerModel.activeViewDescriptors), i;
  }
};
T = x([
  a(2, oe),
  a(3, I),
  a(4, k),
  a(5, E),
  a(6, F),
  a(7, B),
  a(8, R),
  a(9, K),
  a(10, O),
  a(11, m)
], T);
let j = class extends ce {
  constructor(e, i, t, n) {
    super(), this.viewDescriptorService = e, this.paneCompositeService = i, this.contextKeyService = t, this.layoutService = n, this._onDidChangeViewVisibility = this._register(new N()), this.onDidChangeViewVisibility = this._onDidChangeViewVisibility.event, this._onDidChangeViewContainerVisibility = this._register(new N()), this.onDidChangeViewContainerVisibility = this._onDidChangeViewContainerVisibility.event, this.viewDisposable = /* @__PURE__ */ new Map(), this.visibleViewContextKeys = /* @__PURE__ */ new Map(), this.viewPaneContainers = /* @__PURE__ */ new Map(), this._register(U(() => {
      this.viewDisposable.forEach((s) => s.dispose()), this.viewDisposable.clear();
    })), this.viewDescriptorService.viewContainers.forEach((s) => this.onDidRegisterViewContainer(s, this.viewDescriptorService.getViewContainerLocation(s))), this._register(this.viewDescriptorService.onDidChangeViewContainers(({ added: s, removed: o }) => this.onDidChangeContainers(s, o))), this._register(this.viewDescriptorService.onDidChangeContainerLocation(({ viewContainer: s, from: o, to: r }) => this.onDidChangeContainerLocation(s, o, r))), this._register(this.paneCompositeService.onDidPaneCompositeOpen((s) => this._onDidChangeViewContainerVisibility.fire({ id: s.composite.getId(), visible: !0, location: s.viewContainerLocation }))), this._register(this.paneCompositeService.onDidPaneCompositeClose((s) => this._onDidChangeViewContainerVisibility.fire({ id: s.composite.getId(), visible: !1, location: s.viewContainerLocation }))), this.focusedViewContextKey = G.bindTo(t);
  }
  onViewsAdded(e) {
    for (const i of e)
      this.onViewsVisibilityChanged(i, i.isBodyVisible());
  }
  onViewsVisibilityChanged(e, i) {
    this.getOrCreateActiveViewContextKey(e).set(i), this._onDidChangeViewVisibility.fire({ id: e.id, visible: i });
  }
  onViewsRemoved(e) {
    for (const i of e)
      this.onViewsVisibilityChanged(i, !1);
  }
  getOrCreateActiveViewContextKey(e) {
    const i = de(e.id);
    let t = this.visibleViewContextKeys.get(i);
    return t || (t = new le(i, !1).bindTo(this.contextKeyService), this.visibleViewContextKeys.set(i, t)), t;
  }
  onDidChangeContainers(e, i) {
    for (const { container: t, location: n } of i)
      this.deregisterPaneComposite(t, n);
    for (const { container: t, location: n } of e)
      this.onDidRegisterViewContainer(t, n);
  }
  onDidRegisterViewContainer(e, i) {
    this.registerPaneComposite(e, i);
    const t = this.viewDescriptorService.getViewContainerModel(e);
    this.onViewDescriptorsAdded(t.allViewDescriptors, e), this._register(t.onDidChangeAllViewDescriptors(({ added: n, removed: s }) => {
      this.onViewDescriptorsAdded(n, e), this.onViewDescriptorsRemoved(s);
    })), this._register(this.registerOpenViewContainerAction(e));
  }
  onDidChangeContainerLocation(e, i, t) {
    this.deregisterPaneComposite(e, i), this.registerPaneComposite(e, t);
  }
  onViewDescriptorsAdded(e, i) {
    const t = this.viewDescriptorService.getViewContainerLocation(i);
    if (t === null)
      return;
    const n = this.getComposite(i.id, t);
    for (const s of e) {
      const o = new P();
      o.add(this.registerOpenViewAction(s)), o.add(this.registerFocusViewAction(s, n != null && n.name && n.name !== n.id ? n.name : M.View)), o.add(this.registerResetViewLocationAction(s)), this.viewDisposable.set(s, o);
    }
  }
  onViewDescriptorsRemoved(e) {
    for (const i of e) {
      const t = this.viewDisposable.get(i);
      t && (t.dispose(), this.viewDisposable.delete(i));
    }
  }
  async openComposite(e, i, t) {
    return this.paneCompositeService.openPaneComposite(e, i, t);
  }
  getComposite(e, i) {
    return this.paneCompositeService.getPaneComposite(e, i);
  }
  isViewContainerVisible(e) {
    var t;
    const i = this.viewDescriptorService.getViewContainerById(e);
    if (i) {
      const n = this.viewDescriptorService.getViewContainerLocation(i);
      if (n !== null)
        return ((t = this.paneCompositeService.getActivePaneComposite(n)) == null ? void 0 : t.getId()) === e;
    }
    return !1;
  }
  getVisibleViewContainer(e) {
    var t;
    const i = (t = this.paneCompositeService.getActivePaneComposite(e)) == null ? void 0 : t.getId();
    return i ? this.viewDescriptorService.getViewContainerById(i) : null;
  }
  getActiveViewPaneContainerWithId(e) {
    const i = this.viewDescriptorService.getViewContainerById(e);
    return i ? this.getActiveViewPaneContainer(i) : null;
  }
  async openViewContainer(e, i) {
    const t = this.viewDescriptorService.getViewContainerById(e);
    if (t) {
      const n = this.viewDescriptorService.getViewContainerLocation(t);
      if (n !== null)
        return await this.paneCompositeService.openPaneComposite(e, n, i) || null;
    }
    return null;
  }
  async closeViewContainer(e) {
    const i = this.viewDescriptorService.getViewContainerById(e);
    if (i) {
      const t = this.viewDescriptorService.getViewContainerLocation(i), n = t !== null && this.paneCompositeService.getActivePaneComposite(t);
      if (t !== null)
        return n ? this.layoutService.setPartHidden(!0, J(t)) : void 0;
    }
  }
  isViewVisible(e) {
    const i = this.getActiveViewWithId(e);
    return (i == null ? void 0 : i.isBodyVisible()) || !1;
  }
  getActiveViewWithId(e) {
    const i = this.viewDescriptorService.getViewContainerByViewId(e);
    if (i) {
      const t = this.getActiveViewPaneContainer(i);
      if (t)
        return t.getView(e);
    }
    return null;
  }
  getViewWithId(e) {
    const i = this.viewDescriptorService.getViewContainerByViewId(e);
    if (i) {
      const t = this.viewPaneContainers.get(i.id);
      if (t)
        return t.getView(e);
    }
    return null;
  }
  async openView(e, i) {
    const t = this.viewDescriptorService.getViewContainerByViewId(e);
    if (!t || !this.viewDescriptorService.getViewContainerModel(t).activeViewDescriptors.some((o) => o.id === e))
      return null;
    const n = this.viewDescriptorService.getViewContainerLocation(t), s = this.getComposite(t.id, n);
    if (s) {
      const o = await this.openComposite(s.id, n);
      if (o && o.openView)
        return o.openView(e, i) || null;
      i && (o == null || o.focus());
    }
    return null;
  }
  closeView(e) {
    const i = this.viewDescriptorService.getViewContainerByViewId(e);
    if (i) {
      const t = this.getActiveViewPaneContainer(i);
      if (t) {
        const n = t.getView(e);
        if (n)
          if (t.views.length === 1) {
            const s = this.viewDescriptorService.getViewContainerLocation(i);
            s === 0 ? this.layoutService.setPartHidden(!0, "workbench.parts.sidebar") : (s === 1 || s === 2) && this.paneCompositeService.hideActivePaneComposite(s), this.focusedViewContextKey.get() === e && this.focusedViewContextKey.reset();
          } else
            n.setExpanded(!1);
      }
    }
  }
  getActiveViewPaneContainer(e) {
    const i = this.viewDescriptorService.getViewContainerLocation(e);
    if (i === null)
      return null;
    const t = this.paneCompositeService.getActivePaneComposite(i);
    return (t == null ? void 0 : t.getId()) === e.id && t.getViewPaneContainer() || null;
  }
  getViewProgressIndicator(e) {
    const i = this.viewDescriptorService.getViewContainerByViewId(e);
    if (!i)
      return;
    const t = this.viewPaneContainers.get(i.id);
    if (!t)
      return;
    const n = t.getView(e);
    if (n)
      return t.isViewMergedWithContainer() ? this.getViewContainerProgressIndicator(i) : n.getProgressIndicator();
  }
  getViewContainerProgressIndicator(e) {
    const i = this.viewDescriptorService.getViewContainerLocation(e);
    if (i !== null)
      return this.paneCompositeService.getProgressIndicator(e.id, i);
  }
  registerOpenViewContainerAction(e) {
    const i = new P();
    if (e.openCommandActionDescriptor) {
      const { id: t, mnemonicTitle: n, keybindings: s, order: o } = e.openCommandActionDescriptor ?? { id: e.id }, r = e.openCommandActionDescriptor.title ?? e.title, c = this;
      if (i.add(b(class extends S {
        constructor() {
          super({
            id: t,
            get title() {
              const l = c.viewDescriptorService.getViewContainerLocation(e), h = typeof r == "string" ? r : r.value, u = typeof r == "string" ? r : r.original;
              return l === 0 ? { value: p("show view", "Show {0}", h), original: `Show ${u}` } : { value: p("toggle view", "Toggle {0}", h), original: `Toggle ${u}` };
            },
            category: M.View,
            precondition: C.has(z(e.id)),
            keybinding: s ? { ...s, weight: 200 } : void 0,
            f1: !0
          });
        }
        async run(l) {
          const h = l.get(H), u = l.get(m), g = l.get(I), w = l.get(A), f = u.getViewContainerLocation(e);
          switch (f) {
            case 2:
            case 0: {
              const L = f === 0 ? "workbench.parts.sidebar" : "workbench.parts.auxiliarybar";
              !w.isViewContainerVisible(e.id) || !g.hasFocus(L) ? await w.openViewContainer(e.id, !0) : h.activeGroup.focus();
              break;
            }
            case 1:
              !w.isViewContainerVisible(e.id) || !g.hasFocus("workbench.parts.panel") ? await w.openViewContainer(e.id, !0) : w.closeViewContainer(e.id);
              break;
          }
        }
      })), n) {
        const d = this.viewDescriptorService.getDefaultViewContainerLocation(e);
        i.add(q.appendMenuItem(D.MenubarViewMenu, {
          command: {
            id: t,
            title: n
          },
          group: d === 0 ? "3_views" : "4_panels",
          when: C.has(z(e.id)),
          order: o ?? Number.MAX_VALUE
        }));
      }
    }
    return i;
  }
  registerOpenViewAction(e) {
    const i = new P();
    if (e.openCommandActionDescriptor) {
      const t = e.openCommandActionDescriptor.title ?? e.name, n = e.openCommandActionDescriptor.id, s = this;
      if (i.add(b(class extends S {
        constructor() {
          super({
            id: n,
            get title() {
              const r = s.viewDescriptorService.getViewLocationById(e.id), c = typeof t == "string" ? t : t.value, d = typeof t == "string" ? t : t.original;
              return r === 0 ? { value: p("show view", "Show {0}", c), original: `Show ${d}` } : { value: p("toggle view", "Toggle {0}", c), original: `Toggle ${d}` };
            },
            category: M.View,
            precondition: C.has(`${e.id}.active`),
            keybinding: e.openCommandActionDescriptor.keybindings ? { ...e.openCommandActionDescriptor.keybindings, weight: 200 } : void 0,
            f1: !0
          });
        }
        async run(r) {
          const c = r.get(H), d = r.get(m), l = r.get(I), h = r.get(A), u = r.get(Q);
          if (G.getValue(u) === e.id) {
            const w = d.getViewLocationById(e.id);
            d.getViewLocationById(e.id) === 0 ? c.activeGroup.focus() : w !== null && l.setPartHidden(!0, J(w));
          } else
            h.openView(e.id, !0);
        }
      })), e.openCommandActionDescriptor.mnemonicTitle) {
        const o = this.viewDescriptorService.getDefaultContainerById(e.id);
        if (o) {
          const r = this.viewDescriptorService.getDefaultViewContainerLocation(o);
          i.add(q.appendMenuItem(D.MenubarViewMenu, {
            command: {
              id: n,
              title: e.openCommandActionDescriptor.mnemonicTitle
            },
            group: r === 0 ? "3_views" : "4_panels",
            when: C.has(`${e.id}.active`),
            order: e.openCommandActionDescriptor.order ?? Number.MAX_VALUE
          }));
        }
      }
    }
    return i;
  }
  registerFocusViewAction(e, i) {
    return b(class extends S {
      constructor() {
        var s, o, r, c, d, l, h, u, g, w;
        const n = p(
          { key: "focus view", comment: ["{0} indicates the name of the view to be focused."] },
          "Focus on {0} View",
          e.name
        );
        super({
          id: e.focusCommand ? e.focusCommand.id : `${e.id}.focus`,
          title: { original: `Focus on ${e.name} View`, value: n },
          category: i,
          menu: [{
            id: D.CommandPalette,
            when: e.when
          }],
          keybinding: {
            when: C.has(`${e.id}.active`),
            weight: 200,
            primary: (o = (s = e.focusCommand) == null ? void 0 : s.keybindings) == null ? void 0 : o.primary,
            secondary: (c = (r = e.focusCommand) == null ? void 0 : r.keybindings) == null ? void 0 : c.secondary,
            linux: (l = (d = e.focusCommand) == null ? void 0 : d.keybindings) == null ? void 0 : l.linux,
            mac: (u = (h = e.focusCommand) == null ? void 0 : h.keybindings) == null ? void 0 : u.mac,
            win: (w = (g = e.focusCommand) == null ? void 0 : g.keybindings) == null ? void 0 : w.win
          },
          description: {
            description: n,
            args: [
              {
                name: "focusOptions",
                description: "Focus Options",
                schema: {
                  type: "object",
                  properties: {
                    preserveFocus: {
                      type: "boolean",
                      default: !1
                    }
                  }
                }
              }
            ]
          }
        });
      }
      run(n, s) {
        n.get(A).openView(e.id, !(s != null && s.preserveFocus));
      }
    });
  }
  registerResetViewLocationAction(e) {
    return b(class extends S {
      constructor() {
        super({
          id: `${e.id}.resetViewLocation`,
          title: {
            original: "Reset Location",
            value: p("resetViewLocation", "Reset Location")
          },
          menu: [{
            id: D.ViewTitleContext,
            when: C.or(C.and(C.equals("view", e.id), C.equals(`${e.id}.defaultViewLocation`, !1))),
            group: "1_hide",
            order: 2
          }]
        });
      }
      run(t) {
        const n = t.get(m), s = n.getDefaultContainerById(e.id), o = n.getViewContainerModel(s);
        if (s.hideIfEmpty && o.visibleViewDescriptors.length === 0) {
          const r = n.getDefaultViewContainerLocation(s);
          n.moveViewContainerToLocation(s, r);
        }
        n.moveViewsToContainer([e], n.getDefaultContainerById(e.id)), t.get(A).openView(e.id, !0);
      }
    });
  }
  registerPaneComposite(e, i) {
    const t = this;
    let n = class extends _ {
      constructor(o, r, c, d, l, h, u) {
        super(e.id, o, c, d, l, h, u, r);
      }
      createViewPaneContainer(o) {
        const r = this._register(new P()), c = t.createViewPaneContainer(o, e, i, r, this.instantiationService);
        return c instanceof T || r.add(ue.any(c.onDidAddViews, c.onDidRemoveViews, c.onTitleAreaUpdate)(() => {
          this.updateTitleArea();
        })), c;
      }
    };
    n = x([
      a(0, k),
      a(1, O),
      a(2, E),
      a(3, F),
      a(4, B),
      a(5, R),
      a(6, K)
    ], n), y.as(X(i)).registerPaneComposite(W.create(n, e.id, typeof e.title == "string" ? e.title : e.title.value, we(e.icon) ? e.icon : void 0, e.order, e.requestedIndex, e.icon instanceof he ? e.icon : void 0));
  }
  deregisterPaneComposite(e, i) {
    y.as(X(i)).deregisterPaneComposite(e.id);
  }
  createViewPaneContainer(e, i, t, n, s) {
    const o = s.createInstance(i.ctorDescriptor.ctor, ...i.ctorDescriptor.staticArguments || []);
    return this.viewPaneContainers.set(o.getId(), o), n.add(U(() => this.viewPaneContainers.delete(o.getId()))), n.add(o.onDidAddViews((r) => this.onViewsAdded(r))), n.add(o.onDidChangeViewVisibility((r) => this.onViewsVisibilityChanged(r, r.isBodyVisible()))), n.add(o.onDidRemoveViews((r) => this.onViewsRemoved(r))), n.add(o.onDidFocusView((r) => this.focusedViewContextKey.set(r.id))), n.add(o.onDidBlurView((r) => {
      this.focusedViewContextKey.get() === r.id && this.focusedViewContextKey.reset();
    })), o;
  }
};
j = x([
  a(0, m),
  a(1, ae),
  a(2, Q),
  a(3, I)
], j);
function X(V) {
  switch (V) {
    case 2:
      return v.Auxiliary;
    case 1:
      return v.Panels;
    case 0:
    default:
      return v.Viewlets;
  }
}
function J(V) {
  switch (V) {
    case 2:
      return "workbench.parts.auxiliarybar";
    case 1:
      return "workbench.parts.panel";
    case 0:
    default:
      return "workbench.parts.sidebar";
  }
}
export {
  v as E,
  j as V,
  J as g
};
