import { D as N, E as d, pa as A, pc as Y, L as j, t as Z, y as q, bS as E, sd as J, jv as u, eX as W, jf as Q, cZ as ee, aP as ie, _ as $, a as D, aI as O, a9 as x, fe as z, bz as m, bx as a, pd as M, p7 as h, dA as T, aE as p, p8 as c, e as te, ff as R, B as _, bM as C, aG as y, bd as se, p5 as ne } from "./index-7e82f14c.js";
class re extends N {
  constructor(e, i) {
    super(), this.item = e, this.onClose = i, this._onDidClose = this._register(new d()), this.onDidClose = this._onDidClose.event, this._onDidChangeVisibility = this._register(new d()), this.onDidChangeVisibility = this._onDidChangeVisibility.event, this.registerListeners();
  }
  registerListeners() {
    this._register(this.item.onDidChangeVisibility((e) => this._onDidChangeVisibility.fire(e))), j.once(this.item.onDidClose)(() => {
      this._onDidClose.fire(), this.dispose();
    });
  }
  get progress() {
    return this.item.progress;
  }
  updateSeverity(e) {
    this.item.updateSeverity(e);
  }
  updateMessage(e) {
    this.item.updateMessage(e);
  }
  updateActions(e) {
    this.item.updateActions(e);
  }
  close() {
    this.onClose(this.item), this.dispose();
  }
}
const b = class b extends N {
  constructor() {
    super(...arguments), this._onDidChangeNotification = this._register(new d()), this.onDidChangeNotification = this._onDidChangeNotification.event, this._onDidChangeStatusMessage = this._register(new d()), this.onDidChangeStatusMessage = this._onDidChangeStatusMessage.event, this._onDidChangeFilter = this._register(new d()), this.onDidChangeFilter = this._onDidChangeFilter.event, this._notifications = [], this.filter = A.OFF;
  }
  get notifications() {
    return this._notifications;
  }
  get statusMessage() {
    return this._statusMessage;
  }
  setFilter(e) {
    this.filter = e, this._onDidChangeFilter.fire(e);
  }
  addNotification(e) {
    const i = this.createViewItem(e);
    if (!i)
      return b.NO_OP_NOTIFICATION;
    const t = this.findNotification(i);
    return t == null || t.close(), this._notifications.splice(0, 0, i), this._onDidChangeNotification.fire({ item: i, index: 0, kind: 0 }), new re(i, (n) => this.onClose(n));
  }
  onClose(e) {
    const i = this.findNotification(e);
    i && i !== e ? i.close() : e.close();
  }
  findNotification(e) {
    return this._notifications.find((i) => i.equals(e));
  }
  createViewItem(e) {
    const i = S.create(e, this.filter);
    if (!i)
      return;
    const t = (s, l) => {
      const f = this._notifications.indexOf(i);
      f >= 0 && this._onDidChangeNotification.fire({ item: i, index: f, kind: s, detail: l });
    }, n = i.onDidChangeExpansion(() => t(2)), r = i.onDidChangeContent((s) => t(1, s.kind));
    return j.once(i.onDidClose)(() => {
      n.dispose(), r.dispose();
      const s = this._notifications.indexOf(i);
      s >= 0 && (this._notifications.splice(s, 1), this._onDidChangeNotification.fire({ item: i, index: s, kind: 3 }));
    }), i;
  }
  showStatusMessage(e, i) {
    const t = ae.create(e, i);
    return t ? (this._statusMessage = t, this._onDidChangeStatusMessage.fire({ kind: 0, item: t }), Z(() => {
      this._statusMessage === t && (this._statusMessage = void 0, this._onDidChangeStatusMessage.fire({ kind: 1, item: t }));
    })) : N.None;
  }
};
b.NO_OP_NOTIFICATION = new Y();
let k = b;
function L(o) {
  return o instanceof S;
}
class oe extends N {
  constructor() {
    super(), this._onDidChange = this._register(new d()), this.onDidChange = this._onDidChange.event, this._state = /* @__PURE__ */ Object.create(null);
  }
  get state() {
    return this._state;
  }
  infinite() {
    this._state.infinite || (this._state.infinite = !0, this._state.total = void 0, this._state.worked = void 0, this._state.done = void 0, this._onDidChange.fire());
  }
  done() {
    this._state.done || (this._state.done = !0, this._state.infinite = void 0, this._state.total = void 0, this._state.worked = void 0, this._onDidChange.fire());
  }
  total(e) {
    this._state.total !== e && (this._state.total = e, this._state.infinite = void 0, this._state.done = void 0, this._onDidChange.fire());
  }
  worked(e) {
    typeof this._state.worked == "number" ? this._state.worked += e : this._state.worked = e, this._state.infinite = void 0, this._state.done = void 0, this._onDidChange.fire();
  }
}
const g = class g extends N {
  static create(e, i = A.OFF) {
    if (!e || !e.message || q(e.message))
      return;
    let t;
    typeof e.severity == "number" ? t = e.severity : t = E.Info;
    const n = g.parseNotificationMessage(e.message);
    if (!n)
      return;
    let r;
    e.actions ? r = e.actions : J(e.message) && (r = { primary: e.message.actions });
    let s = e.priority ?? u.DEFAULT;
    return s === u.DEFAULT && (i === A.SILENT || i === A.ERROR && e.severity !== E.Error) && (s = u.SILENT), new g(
      e.id,
      t,
      e.sticky,
      s,
      n,
      e.source,
      e.progress,
      r
    );
  }
  static parseNotificationMessage(e) {
    let i;
    if (e instanceof Error ? i = W(e, !1) : typeof e == "string" && (i = e), !i)
      return;
    const t = i;
    i.length > g.MAX_MESSAGE_LENGTH && (i = `${i.substr(0, g.MAX_MESSAGE_LENGTH)}...`), i = i.replace(/(\r\n|\n|\r)/gm, " ").trim();
    const n = Q(i);
    return { raw: t, linkedText: n, original: e };
  }
  constructor(e, i, t, n, r, s, l, f) {
    super(), this.id = e, this._severity = i, this._sticky = t, this._priority = n, this._message = r, this._source = s, this._visible = !1, this._onDidChangeExpansion = this._register(new d()), this.onDidChangeExpansion = this._onDidChangeExpansion.event, this._onDidClose = this._register(new d()), this.onDidClose = this._onDidClose.event, this._onDidChangeContent = this._register(new d()), this.onDidChangeContent = this._onDidChangeContent.event, this._onDidChangeVisibility = this._register(new d()), this.onDidChangeVisibility = this._onDidChangeVisibility.event, l && this.setProgress(l), this.setActions(f);
  }
  setProgress(e) {
    e.infinite ? this.progress.infinite() : e.total && (this.progress.total(e.total), e.worked && this.progress.worked(e.worked));
  }
  setActions(e = { primary: [], secondary: [] }) {
    this._actions = {
      primary: Array.isArray(e.primary) ? e.primary : [],
      secondary: Array.isArray(e.secondary) ? e.secondary : []
    }, this._expanded = e.primary && e.primary.length > 0;
  }
  get canCollapse() {
    return !this.hasActions;
  }
  get expanded() {
    return !!this._expanded;
  }
  get severity() {
    return this._severity;
  }
  get sticky() {
    if (this._sticky)
      return !0;
    const e = this.hasActions;
    return !!(e && this._severity === E.Error || !e && this._expanded || this._progress && !this._progress.state.done);
  }
  get priority() {
    return this._priority;
  }
  get hasActions() {
    return !this._actions || !this._actions.primary ? !1 : this._actions.primary.length > 0;
  }
  get hasProgress() {
    return !!this._progress;
  }
  get progress() {
    return this._progress || (this._progress = this._register(new oe()), this._register(this._progress.onDidChange(() => this._onDidChangeContent.fire({ kind: 3 })))), this._progress;
  }
  get message() {
    return this._message;
  }
  get source() {
    return typeof this._source == "string" ? this._source : this._source ? this._source.label : void 0;
  }
  get sourceId() {
    return this._source && typeof this._source != "string" && "id" in this._source ? this._source.id : void 0;
  }
  get actions() {
    return this._actions;
  }
  get visible() {
    return this._visible;
  }
  updateSeverity(e) {
    e !== this._severity && (this._severity = e, this._onDidChangeContent.fire({ kind: 0 }));
  }
  updateMessage(e) {
    const i = g.parseNotificationMessage(e);
    !i || i.raw === this._message.raw || (this._message = i, this._onDidChangeContent.fire({ kind: 1 }));
  }
  updateActions(e) {
    this.setActions(e), this._onDidChangeContent.fire({ kind: 2 });
  }
  updateVisibility(e) {
    this._visible !== e && (this._visible = e, this._onDidChangeVisibility.fire(e));
  }
  expand() {
    this._expanded || !this.canCollapse || (this._expanded = !0, this._onDidChangeExpansion.fire());
  }
  collapse(e) {
    !this._expanded || !this.canCollapse || (this._expanded = !1, e || this._onDidChangeExpansion.fire());
  }
  toggle() {
    this._expanded ? this.collapse() : this.expand();
  }
  close() {
    this._onDidClose.fire(), this.dispose();
  }
  equals(e) {
    if (this.hasProgress || e.hasProgress)
      return !1;
    if (typeof this.id == "string" || typeof e.id == "string")
      return this.id === e.id;
    if (typeof this._source == "object") {
      if (this._source.label !== e.source || this._source.id !== e.sourceId)
        return !1;
    } else if (this._source !== e.source)
      return !1;
    if (this._message.raw !== e.message.raw)
      return !1;
    const i = this._actions && this._actions.primary || [], t = e.actions && e.actions.primary || [];
    return ee(i, t, (n, r) => n.id + n.label === r.id + r.label);
  }
};
g.MAX_MESSAGE_LENGTH = 1e3;
let S = g;
class B extends ie {
  constructor(e, i) {
    super(e, i.label, void 0, !0, async () => {
      i.run(), this._onDidRun.fire();
    }), this._onDidRun = this._register(new d()), this.onDidRun = this._onDidRun.event, this._keepOpen = !!i.keepOpen, this._menu = !i.isSecondary && i.menu ? i.menu.map((t, n) => new B(`${e}.${n}`, t)) : void 0;
  }
  get menu() {
    return this._menu;
  }
  get keepOpen() {
    return this._keepOpen;
  }
}
class ae {
  static create(e, i) {
    if (!e || q(e))
      return;
    let t;
    if (e instanceof Error ? t = W(e, !1) : typeof e == "string" && (t = e), !!t)
      return { message: t, options: i };
  }
}
function w(o, e, i) {
  return {
    id: z(o.toString()).toString(),
    silent: i,
    source: e || "core"
  };
}
let P = class extends N {
  constructor(e, i) {
    super(), this.telemetryService = e, this.notificationService = i, this.registerListeners();
  }
  registerListeners() {
    this._register(this.notificationService.onDidAddNotification((e) => {
      const i = e.source && typeof e.source != "string" ? e.source.id : e.source;
      this.telemetryService.publicLog2("notification:show", w(e.message, i, e.priority === u.SILENT));
    })), this._register(this.notificationService.onDidRemoveNotification((e) => {
      const i = e.source && typeof e.source != "string" ? e.source.id : e.source;
      this.telemetryService.publicLog2("notification:close", w(e.message, i, e.priority === u.SILENT));
    }));
  }
};
P = $([
  D(0, O),
  D(1, x)
], P);
const V = "notifications.showList", K = "notifications.hideList", de = "notifications.toggleList", v = "notifications.hideToasts", G = "notifications.focusToasts", he = "notifications.focusNextToast", ce = "notifications.focusPreviousToast", ge = "notifications.focusFirstToast", ue = "notifications.focusLastToast", le = "notification.collapse", fe = "notification.expand", H = "notification.acceptPrimaryAction", _e = "notification.toggle", me = "notification.clear", U = "notifications.clearAll", X = "notifications.toggleDoNotDisturbMode";
function I(o, e) {
  if (L(e))
    return e;
  const i = o.lastFocusedList;
  if (i instanceof ne) {
    const t = i.getFocusedElements()[0];
    if (L(t))
      return t;
  }
}
function ye(o, e, i) {
  m.registerCommand(V, () => {
    e.hide(), o.show();
  }), a.registerCommandAndKeybindingRule({
    id: K,
    weight: 200 + 50,
    when: M,
    primary: 9,
    handler: (n) => {
      const r = n.get(O);
      for (const s of i.notifications)
        s.visible && r.publicLog2("notification:hide", w(s.message.original, s.sourceId, s.priority === u.SILENT));
      o.hide();
    }
  }), m.registerCommand(de, () => {
    o.isVisible ? o.hide() : (e.hide(), o.show());
  }), a.registerCommandAndKeybindingRule({
    id: me,
    weight: 200,
    when: h,
    primary: 20,
    mac: {
      primary: 2049
    },
    handler: (n, r) => {
      const s = I(n.get(T), r);
      s && !s.hasProgress && s.close();
    }
  }), a.registerCommandAndKeybindingRule({
    id: fe,
    weight: 200,
    when: h,
    primary: 17,
    handler: (n, r) => {
      const s = I(n.get(T), r);
      s == null || s.expand();
    }
  }), a.registerCommandAndKeybindingRule({
    id: H,
    weight: 200,
    when: p.and(c),
    primary: 3103,
    handler: (n) => {
      var f;
      const r = n.get(te).createInstance(F), s = R(i.notifications);
      if (!s)
        return;
      const l = (f = s.actions) != null && f.primary ? R(s.actions.primary) : void 0;
      l && (r.run(l, s), s.close());
    }
  }), a.registerCommandAndKeybindingRule({
    id: le,
    weight: 200,
    when: h,
    primary: 15,
    handler: (n, r) => {
      const s = I(n.get(T), r);
      s == null || s.collapse();
    }
  }), a.registerCommandAndKeybindingRule({
    id: _e,
    weight: 200,
    when: h,
    primary: 10,
    secondary: [3],
    handler: (n) => {
      const r = I(n.get(T));
      r == null || r.toggle();
    }
  }), m.registerCommand(v, (n) => {
    const r = n.get(O);
    for (const s of i.notifications)
      s.visible && r.publicLog2("notification:hide", w(s.message.original, s.sourceId, s.priority === u.SILENT));
    e.hide();
  }), a.registerKeybindingRule({
    id: v,
    weight: 200 - 50,
    when: c,
    primary: 9
  }), a.registerKeybindingRule({
    id: v,
    weight: 200 + 100,
    when: p.and(c, h),
    primary: 9
  }), m.registerCommand(G, () => e.focus()), a.registerCommandAndKeybindingRule({
    id: he,
    weight: 200,
    when: p.and(h, c),
    primary: 18,
    handler: () => {
      e.focusNext();
    }
  }), a.registerCommandAndKeybindingRule({
    id: ce,
    weight: 200,
    when: p.and(h, c),
    primary: 16,
    handler: () => {
      e.focusPrevious();
    }
  }), a.registerCommandAndKeybindingRule({
    id: ge,
    weight: 200,
    when: p.and(h, c),
    primary: 11,
    secondary: [14],
    handler: () => {
      e.focusFirst();
    }
  }), a.registerCommandAndKeybindingRule({
    id: ue,
    weight: 200,
    when: p.and(h, c),
    primary: 12,
    secondary: [13],
    handler: () => {
      e.focusLast();
    }
  }), m.registerCommand(U, () => o.clearAll()), m.registerCommand(X, (n) => {
    const r = n.get(x);
    r.doNotDisturbMode = !r.doNotDisturbMode;
  });
  const t = { value: _("notifications", "Notifications"), original: "Notifications" };
  C.appendMenuItem(y.CommandPalette, { command: { id: V, title: { value: _("showNotifications", "Show Notifications"), original: "Show Notifications" }, category: t } }), C.appendMenuItem(y.CommandPalette, { command: { id: K, title: { value: _("hideNotifications", "Hide Notifications"), original: "Hide Notifications" }, category: t }, when: M }), C.appendMenuItem(y.CommandPalette, { command: { id: U, title: { value: _("clearAllNotifications", "Clear All Notifications"), original: "Clear All Notifications" }, category: t } }), C.appendMenuItem(y.CommandPalette, { command: { id: H, title: { value: _("acceptNotificationPrimaryAction", "Accept Notification Primary Action"), original: "Accept Notification Primary Action" }, category: t } }), C.appendMenuItem(y.CommandPalette, { command: { id: X, title: { value: _("toggleDoNotDisturbMode", "Toggle Do Not Disturb Mode"), original: "Toggle Do Not Disturb Mode" }, category: t } }), C.appendMenuItem(y.CommandPalette, { command: { id: G, title: { value: _("focusNotificationToasts", "Focus Notification Toast"), original: "Focus Notification Toast" }, category: t }, when: c });
}
let F = class extends se {
  constructor(e, i) {
    super(), this.telemetryService = e, this.notificationService = i;
  }
  async runAction(e, i) {
    this.telemetryService.publicLog2("workbenchActionExecuted", { id: e.id, from: "message" }), L(i) && this.telemetryService.publicLog2("notification:actionExecuted", {
      id: z(i.message.original.toString()).toString(),
      actionLabel: e.label,
      source: i.sourceId || "core",
      silent: i.priority === u.SILENT
    });
    try {
      await super.runAction(e, i);
    } catch (t) {
      this.notificationService.error(t);
    }
  }
};
F = $([
  D(0, O),
  D(1, x)
], F);
export {
  me as C,
  fe as E,
  K as H,
  S as N,
  X as T,
  U as a,
  le as b,
  B as c,
  F as d,
  k as e,
  P as f,
  I as g,
  ye as r
};
