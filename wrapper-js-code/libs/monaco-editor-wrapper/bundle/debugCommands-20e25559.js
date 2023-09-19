import { B as c, eh as G, su as q, dj as ot, dv as at, S as Ut, kC as Ht, U as ce, rD as Kt, jw as qt, lv as Gt, c9 as $e, aC as Y, _ as Q, a as S, f as zt, h as Wt, aX as Xt, rA as jt, ax as ae, E as fe, zQ as Jt, f2 as $t, bc as rt, fw as ct, zR as Yt, hh as be, cM as Qt, D as Zt, zS as ei, q_ as Ye, zT as ti, rI as ii, c3 as h, bi as l, ab as dt, r5 as g, ad as ni, e as si, ae as oi, cP as R, cF as ai, aL as He, af as ri, ag as le, cx as ci, aI as di, bD as Z, aN as ui, aM as li, bE as ut, H as f, c$ as M, b8 as _e, cJ as lt, au as he, b5 as Ke, d as F, oF as ht, kH as pt, a0 as gt, ai as O, aj as V, aG as k, aE as B, tA as ee, rn as z, zU as L, s8 as Te, s6 as te, sW as qe, zV as Ge, hQ as pe, sm as hi, aP as Qe, $ as pi, a3 as gi, hT as fi, zW as ft, p5 as bi, zX as Ae, hc as mi, G as Ze, bZ as Si, sD as ki, jg as vi, x as Ii, cZ as Ci, bB as ie, I as Bi, w as bt, t3 as Fe, bJ as wi, fS as ze, bW as Di, sc as de, bz as v, rg as yi, cO as Ei, s9 as Oe, a9 as mt, bM as St, rV as xi, fO as Ne, bx as I, tY as kt, bR as vt, s4 as ne, rU as _i, rS as It, wa as Ti, dA as se, i3 as We, u1 as Ct, te as Ai, rP as Oi, cs as Ni, e0 as Li } from "./index-7e82f14c.js";
const Me = c("unknownSource", "Unknown Source");
class Nn {
  constructor(e, t, i, n) {
    let s;
    e ? (this.raw = e, s = this.raw.path || this.raw.name || "", this.available = !0) : (this.raw = { name: Me }, this.available = !1, s = `${q}:${Me}`), this.uri = Bt(this.raw, s, t, i, n);
  }
  get name() {
    return this.raw.name || G(this.uri);
  }
  get origin() {
    return this.raw.origin;
  }
  get presentationHint() {
    return this.raw.presentationHint;
  }
  get reference() {
    return this.raw.sourceReference;
  }
  get inMemory() {
    return this.uri.scheme === q;
  }
  openInEditor(e, t, i, n, s) {
    return this.available ? e.openEditor({
      resource: this.uri,
      description: this.origin,
      options: {
        preserveFocus: i,
        selection: t,
        revealIfOpened: !0,
        selectionRevealType: 1,
        pinned: s
      }
    }, n ? ot : at) : Promise.resolve(void 0);
  }
  static getEncodedDebugData(e) {
    let t, i, n;
    switch (e.scheme) {
      case Ut.file:
        t = Ht(e.fsPath);
        break;
      case q:
        if (t = e.path, e.query) {
          const s = e.query.split("&");
          for (const a of s) {
            const r = a.split("=");
            if (r.length === 2)
              switch (r[0]) {
                case "session":
                  n = r[1];
                  break;
                case "ref":
                  i = parseInt(r[1]);
                  break;
              }
          }
        }
        break;
      default:
        t = e.toString();
        break;
    }
    return {
      name: G(e),
      path: t,
      sourceReference: i,
      sessionId: n
    };
  }
}
function Bt(o, e, t, i, n) {
  const s = (a) => typeof o.sourceReference == "number" && o.sourceReference > 0 ? ce.from({
    scheme: q,
    path: a,
    query: `session=${t}&ref=${o.sourceReference}`
  }) : a && Kt(a) ? i.asCanonicalUri(ce.parse(a)) : a && qt(a) ? i.asCanonicalUri(ce.file(a)) : i.asCanonicalUri(ce.from({
    scheme: q,
    path: a,
    query: `session=${t}`
  }));
  try {
    return s(e);
  } catch {
    return n.error("Invalid path from debug adapter: " + e), s("/invalidDebugSource");
  }
}
const T = class T extends Gt {
  constructor() {
    super(...arguments), this.resource = void 0;
  }
  get typeId() {
    return T.ID;
  }
  static get instance() {
    return (!T._instance || T._instance.isDisposed()) && (T._instance = new T()), T._instance;
  }
  getName() {
    return c("disassemblyInputName", "Disassembly");
  }
  matches(e) {
    return e instanceof T;
  }
};
T.ID = "debug.disassemblyView.input";
let me = T;
const x = class x {
  constructor(e, t, i, n, s = 0, a = 0, r = void 0, d = 0, u = void 0) {
    this.session = e, this.threadId = t, this._reference = i, this.id = n, this.namedVariables = s, this.indexedVariables = a, this.memoryReference = r, this.startOfVariables = d, this.presentationHint = u, this.valueChanged = !1, this._value = "";
  }
  get reference() {
    return this._reference;
  }
  set reference(e) {
    this._reference = e, this.children = void 0;
  }
  async evaluateLazy() {
    if (typeof this.reference > "u")
      return;
    const e = await this.session.variables(this.reference, this.threadId, void 0, void 0, void 0);
    if (!e || !e.body || !e.body.variables || e.body.variables.length !== 1)
      return;
    const t = e.body.variables[0];
    this.reference = t.variablesReference, this._value = t.value, this.namedVariables = t.namedVariables, this.indexedVariables = t.indexedVariables, this.memoryReference = t.memoryReference, this.presentationHint = t.presentationHint, this.adoptLazyResponse(t);
  }
  adoptLazyResponse(e) {
  }
  getChildren() {
    return this.children || (this.children = this.doGetChildren()), this.children;
  }
  async doGetChildren() {
    if (!this.hasChildren)
      return [];
    if (!this.getChildrenInChunks)
      return this.fetchVariables(void 0, void 0, void 0);
    const e = this.namedVariables ? await this.fetchVariables(void 0, void 0, "named") : [];
    let t = x.BASE_CHUNK_SIZE;
    for (; this.indexedVariables && this.indexedVariables > t * x.BASE_CHUNK_SIZE; )
      t *= x.BASE_CHUNK_SIZE;
    if (this.indexedVariables && this.indexedVariables > t) {
      const n = Math.ceil(this.indexedVariables / t);
      for (let s = 0; s < n; s++) {
        const a = (this.startOfVariables || 0) + s * t, r = Math.min(t, this.indexedVariables - s * t);
        e.push(new K(
          this.session,
          this.threadId,
          this,
          this.reference,
          `[${a}..${a + r - 1}]`,
          "",
          "",
          void 0,
          r,
          void 0,
          { kind: "virtual" },
          void 0,
          void 0,
          !0,
          a
        ));
      }
      return e;
    }
    const i = await this.fetchVariables(this.startOfVariables, this.indexedVariables, "indexed");
    return e.concat(i);
  }
  getId() {
    return this.id;
  }
  getSession() {
    return this.session;
  }
  get value() {
    return this._value;
  }
  get hasChildren() {
    var e;
    return !!this.reference && this.reference > 0 && !((e = this.presentationHint) != null && e.lazy);
  }
  async fetchVariables(e, t, i) {
    try {
      const n = await this.session.variables(this.reference || 0, this.threadId, i, e, t);
      if (!n || !n.body || !n.body.variables)
        return [];
      const s = /* @__PURE__ */ new Map(), a = n.body.variables.filter((r) => !!r).map((r) => {
        if ($e(r.value) && $e(r.name) && typeof r.variablesReference == "number") {
          const d = s.get(r.name) || 0, u = d > 0 ? d.toString() : "";
          return s.set(r.name, d + 1), new K(
            this.session,
            this.threadId,
            this,
            r.variablesReference,
            r.name,
            r.evaluateName,
            r.value,
            r.namedVariables,
            r.indexedVariables,
            r.memoryReference,
            r.presentationHint,
            r.type,
            r.__vscodeVariableMenuContext,
            !0,
            0,
            u
          );
        }
        return new K(
          this.session,
          this.threadId,
          this,
          0,
          "",
          void 0,
          c("invalidVariableAttributes", "Invalid variable attributes"),
          0,
          0,
          void 0,
          { kind: "virtual" },
          void 0,
          void 0,
          !1
        );
      });
      return this.session.autoExpandLazyVariables && await Promise.all(a.map((r) => {
        var d;
        return ((d = r.presentationHint) == null ? void 0 : d.lazy) && r.evaluateLazy();
      })), a;
    } catch (n) {
      return [new K(
        this.session,
        this.threadId,
        this,
        0,
        "",
        void 0,
        n.message,
        0,
        0,
        void 0,
        { kind: "virtual" },
        void 0,
        void 0,
        !1
      )];
    }
  }
  get getChildrenInChunks() {
    return !!this.indexedVariables;
  }
  set value(e) {
    this._value = e, this.valueChanged = !!x.allValues.get(this.getId()) && x.allValues.get(this.getId()) !== _.DEFAULT_VALUE && x.allValues.get(this.getId()) !== e, x.allValues.set(this.getId(), e);
  }
  toString() {
    return this.value;
  }
  async evaluateExpression(e, t, i, n, s = !1) {
    var a;
    if (!t || !i && n !== "repl")
      return this.value = n === "repl" ? c("startDebugFirst", "Please start a debug session to evaluate expressions") : _.DEFAULT_VALUE, this.reference = 0, !1;
    this.session = t;
    try {
      const r = await t.evaluate(e, i ? i.frameId : void 0, n);
      return r && r.body ? (this.value = r.body.result || "", this.reference = r.body.variablesReference, this.namedVariables = r.body.namedVariables, this.indexedVariables = r.body.indexedVariables, this.memoryReference = r.body.memoryReference, this.type = r.body.type || this.type, this.presentationHint = r.body.presentationHint, !s && ((a = r.body.presentationHint) != null && a.lazy) && await this.evaluateLazy(), !0) : !1;
    } catch (r) {
      return this.value = r.message || "", this.reference = 0, !1;
    }
  }
};
x.allValues = /* @__PURE__ */ new Map(), x.BASE_CHUNK_SIZE = 100;
let ue = x;
function Ve(o, e) {
  e && e.body && (o.value = e.body.value || "", o.type = e.body.type || o.type, o.reference = e.body.variablesReference, o.namedVariables = e.body.namedVariables, o.indexedVariables = e.body.indexedVariables);
}
const De = class De extends ue {
  constructor(e, t = Y()) {
    super(void 0, void 0, 0, t), this.name = e, this.available = !1, e && (this.value = De.DEFAULT_VALUE);
  }
  async evaluate(e, t, i, n) {
    this.available = await this.evaluateExpression(this.name, e, t, i, n);
  }
  toString() {
    return `${this.name}
${this.value}`;
  }
  async setExpression(e, t) {
    if (!this.session)
      return;
    const i = await this.session.setExpression(t.frameId, this.name, e);
    Ve(this, i);
  }
};
De.DEFAULT_VALUE = c("notAvailable", "not available");
let _ = De;
class K extends ue {
  constructor(e, t, i, n, s, a, r, d, u, p, b, C = void 0, E = void 0, U = !0, H = 0, Re = "") {
    super(e, t, n, `variable:${i.getId()}:${s}:${Re}`, d, u, p, H, b), this.parent = i, this.name = s, this.evaluateName = a, this.variableMenuContext = E, this.available = U, this.value = r || "", this.type = C;
  }
  async setVariable(e, t) {
    if (this.session)
      try {
        if (this.session.capabilities.supportsSetExpression && !this.session.capabilities.supportsSetVariable && this.evaluateName)
          return this.setExpression(e, t);
        const i = await this.session.setVariable(this.parent.reference, this.name, e);
        Ve(this, i);
      } catch (i) {
        this.errorMessage = i.message;
      }
  }
  async setExpression(e, t) {
    if (!this.session || !this.evaluateName)
      return;
    const i = await this.session.setExpression(t.frameId, this.evaluateName, e);
    Ve(this, i);
  }
  toString() {
    return this.name ? `${this.name}: ${this.value}` : this.value;
  }
  adoptLazyResponse(e) {
    this.evaluateName = e.evaluateName;
  }
  toDebugProtocolObject() {
    return {
      name: this.name,
      variablesReference: this.reference || 0,
      memoryReference: this.memoryReference,
      value: this.value,
      evaluateName: this.evaluateName
    };
  }
}
class wt extends ue {
  constructor(e, t, i, n, s, a, r, d) {
    super(e.thread.session, e.thread.threadId, n, `scope:${i}:${t}`, a, r), this.name = i, this.expensive = s, this.range = d;
  }
  toString() {
    return this.name;
  }
  toDebugProtocolObject() {
    return {
      name: this.name,
      variablesReference: this.reference || 0,
      expensive: this.expensive
    };
  }
}
class Ri extends wt {
  constructor(e, t, i) {
    super(e, t, i, 0, !1);
  }
  toString() {
    return this.name;
  }
}
class Fi {
  constructor(e, t, i, n, s, a, r, d, u) {
    this.thread = e, this.frameId = t, this.source = i, this.name = n, this.presentationHint = s, this.range = a, this.index = r, this.canRestart = d, this.instructionPointerReference = u;
  }
  getId() {
    return `stackframe:${this.thread.getId()}:${this.index}:${this.source.name}`;
  }
  getScopes() {
    return this.scopes || (this.scopes = this.thread.session.scopes(this.frameId, this.thread.threadId).then((e) => {
      if (!e || !e.body || !e.body.scopes)
        return [];
      const t = /* @__PURE__ */ new Set();
      return e.body.scopes.map((i) => {
        let n = 0;
        do
          n = Yt(`${i.name}:${i.line}:${i.column}`, n);
        while (t.has(n));
        return t.add(n), new wt(
          this,
          n,
          i.name,
          i.variablesReference,
          i.expensive,
          i.namedVariables,
          i.indexedVariables,
          i.line && i.column && i.endLine && i.endColumn ? new be(i.line, i.column, i.endLine, i.endColumn) : void 0
        );
      });
    }, (e) => [new Ri(this, 0, e.message)])), this.scopes;
  }
  async getMostSpecificScopes(e) {
    const i = (await this.getScopes()).filter((a) => !a.expensive);
    if (!i.some((a) => !!a.range))
      return i;
    const s = i.filter((a) => a.range && be.containsRange(a.range, e)).sort((a, r) => a.range.endLineNumber - a.range.startLineNumber - (r.range.endLineNumber - r.range.startLineNumber));
    return s.length ? s : i;
  }
  restart() {
    return this.thread.session.restartFrame(this.frameId, this.thread.threadId);
  }
  forgetScopes() {
    this.scopes = void 0;
  }
  toString() {
    const e = typeof this.range.startLineNumber == "number" ? `:${this.range.startLineNumber}` : "", t = `${this.source.inMemory ? this.source.name : this.source.uri.fsPath}${e}`;
    return t === Me ? this.name : `${this.name} (${t})`;
  }
  async openInEditor(e, t, i, n) {
    var a;
    const s = (a = this.thread.stoppedDetails) == null ? void 0 : a.reason;
    if (this.instructionPointerReference && (s === "instruction breakpoint" || s === "step" && this.thread.lastSteppingGranularity === "instruction"))
      return e.openEditor(me.instance, { pinned: !0 });
    if (this.source.available)
      return this.source.openInEditor(e, this.range, t, i, n);
  }
  equals(e) {
    return this.name === e.name && e.thread === this.thread && this.frameId === e.frameId && e.source === this.source && be.equalsRange(this.range, e.range);
  }
}
class Ln {
  constructor(e, t, i) {
    this.session = e, this.name = t, this.threadId = i, this.callStackCancellationTokens = [], this.reachedEndOfCallStack = !1, this.callStack = [], this.staleCallStack = [], this.stopped = !1;
  }
  getId() {
    return `thread:${this.session.getId()}:${this.threadId}`;
  }
  clearCallStack() {
    this.callStack.length && (this.staleCallStack = this.callStack), this.callStack = [], this.callStackCancellationTokens.forEach((e) => e.dispose(!0)), this.callStackCancellationTokens = [];
  }
  getCallStack() {
    return this.callStack;
  }
  getStaleCallStack() {
    return this.staleCallStack;
  }
  getTopStackFrame() {
    return this.getCallStack().find((i) => {
      var n, s;
      return !!(i && (((n = this.stoppedDetails) == null ? void 0 : n.reason) === "instruction breakpoint" || ((s = this.stoppedDetails) == null ? void 0 : s.reason) === "step" && this.lastSteppingGranularity === "instruction") && i.instructionPointerReference || i.source && i.source.available && i.source.presentationHint !== "deemphasize");
    });
  }
  get stateLabel() {
    return this.stoppedDetails ? this.stoppedDetails.description || (this.stoppedDetails.reason ? c(
      { key: "pausedOn", comment: ["indicates reason for program being paused"] },
      "Paused on {0}",
      this.stoppedDetails.reason
    ) : c("paused", "Paused")) : c({ key: "running", comment: ["indicates state"] }, "Running");
  }
  async fetchCallStack(e = 20) {
    var t;
    if (this.stopped) {
      const i = this.callStack.length, n = await this.getCallStackImpl(i, e);
      this.reachedEndOfCallStack = n.length < e, i < this.callStack.length && this.callStack.splice(i, this.callStack.length - i), this.callStack = this.callStack.concat(n || []), typeof ((t = this.stoppedDetails) == null ? void 0 : t.totalFrames) == "number" && this.stoppedDetails.totalFrames === this.callStack.length && (this.reachedEndOfCallStack = !0);
    }
  }
  async getCallStackImpl(e, t) {
    try {
      const i = new Qt();
      this.callStackCancellationTokens.push(i);
      const n = await this.session.stackTrace(this.threadId, e, t, i.token);
      return !n || !n.body || i.token.isCancellationRequested ? [] : (this.stoppedDetails && (this.stoppedDetails.totalFrames = n.body.totalFrames), n.body.stackFrames.map((s, a) => {
        const r = this.session.getSource(s.source);
        return new Fi(
          this,
          s.id,
          r,
          s.name,
          s.presentationHint,
          new be(s.line, s.column, s.endLine || s.line, s.endColumn || s.column),
          e + a,
          typeof s.canRestart == "boolean" ? s.canRestart : !0,
          s.instructionPointerReference
        );
      }));
    } catch (i) {
      return this.stoppedDetails && (this.stoppedDetails.framesErrorMessage = i.message), [];
    }
  }
  get exceptionInfo() {
    return this.stoppedDetails && this.stoppedDetails.reason === "exception" ? this.session.capabilities.supportsExceptionInfoRequest ? this.session.exceptionInfo(this.threadId) : Promise.resolve({
      description: this.stoppedDetails.text,
      breakMode: null
    }) : Promise.resolve(void 0);
  }
  next(e) {
    return this.session.next(this.threadId, e);
  }
  stepIn(e) {
    return this.session.stepIn(this.threadId, void 0, e);
  }
  stepOut(e) {
    return this.session.stepOut(this.threadId, e);
  }
  stepBack(e) {
    return this.session.stepBack(this.threadId, e);
  }
  continue() {
    return this.session.continue(this.threadId);
  }
  pause() {
    return this.session.pause(this.threadId);
  }
  terminate() {
    return this.session.terminateThreads([this.threadId]);
  }
  reverseContinue() {
    return this.session.reverseContinue(this.threadId);
  }
}
const Rn = (o, e, t, i = "memory") => ce.from({
  scheme: jt,
  authority: o,
  path: "/" + encodeURIComponent(e) + `/${encodeURIComponent(i)}.bin`,
  query: t ? `?range=${t.fromOffset}:${t.toOffset}` : void 0
});
class Fn extends Zt {
  constructor(e, t) {
    super(), this.memoryReference = e, this.session = t, this.invalidateEmitter = this._register(new fe()), this.onDidInvalidate = this.invalidateEmitter.event, this.writable = !!this.session.capabilities.supportsWriteMemoryRequest, this._register(t.onDidInvalidateMemory((i) => {
      i.body.memoryReference === e && this.invalidate(i.body.offset, i.body.count - i.body.offset);
    }));
  }
  async read(e, t) {
    var u;
    const i = t - e, n = e, s = await this.session.readMemory(this.memoryReference, n, i);
    if (s === void 0 || !((u = s.body) != null && u.data))
      return [{ type: 1, offset: n, length: i }];
    let a;
    try {
      a = ei(s.body.data);
    } catch {
      return [{ type: 2, offset: n, length: i, error: "Invalid base64 data from debug adapter" }];
    }
    const r = s.body.unreadableBytes || 0, d = i - r;
    if (a.byteLength < d) {
      const p = Ye.alloc(d - a.byteLength);
      p.buffer.fill(0), a = Ye.concat([a, p], d);
    } else
      a.byteLength > d && (a = a.slice(0, d));
    return r ? [
      { type: 0, offset: n, length: d, data: a },
      { type: 1, offset: n + d, length: r }
    ] : [{ type: 0, offset: n, length: i, data: a }];
  }
  async write(e, t) {
    var s;
    const i = await this.session.writeMemory(this.memoryReference, e, ti(t), !0), n = ((s = i == null ? void 0 : i.body) == null ? void 0 : s.bytesWritten) ?? t.byteLength;
    return this.invalidate(e, e + n), n;
  }
  dispose() {
    super.dispose();
  }
  invalidate(e, t) {
    this.invalidateEmitter.fire({ fromOffset: e, toOffset: t });
  }
}
class Mi {
  constructor(e, t) {
    this.enabled = e, this.id = t;
  }
  getId() {
    return this.id;
  }
}
function re(o, e) {
  return ii({
    supportsConditionalBreakpoints: !!e.supportsConditionalBreakpoints,
    supportsHitConditionalBreakpoints: !!e.supportsHitConditionalBreakpoints,
    supportsLogPoints: !!e.supportsLogPoints,
    supportsFunctionBreakpoints: !!e.supportsFunctionBreakpoints,
    supportsDataBreakpoints: !!e.supportsDataBreakpoints,
    supportsInstructionBreakpoints: !!e.supportsInstructionBreakpoints
  }, o);
}
class ge extends Mi {
  constructor(e, t, i, n, s) {
    super(e, s), this.hitCondition = t, this.condition = i, this.logMessage = n, this.sessionData = /* @__PURE__ */ new Map(), e === void 0 && (this.enabled = !0);
  }
  setSessionData(e, t) {
    t ? (t.sessionId = e, this.sessionData.set(e, t)) : this.sessionData.delete(e);
    const i = Array.from(this.sessionData.values()), n = ct(i.filter((s) => s.verified), (s) => `${s.line}:${s.column}`);
    n.length ? this.data = n.length === 1 ? n[0] : void 0 : this.data = i.length ? i[0] : void 0;
  }
  get message() {
    if (this.data)
      return this.data.message;
  }
  get verified() {
    return this.data ? this.data.verified : !0;
  }
  get sessionsThatVerified() {
    const e = [];
    for (const [t, i] of this.sessionData)
      i.verified && e.push(t);
    return e;
  }
  getIdFromAdapter(e) {
    const t = this.sessionData.get(e);
    return t ? t.id : void 0;
  }
  getDebugProtocolBreakpoint(e) {
    const t = this.sessionData.get(e);
    if (t)
      return {
        id: t.id,
        verified: t.verified,
        message: t.message,
        source: t.source,
        line: t.line,
        column: t.column,
        endLine: t.endLine,
        endColumn: t.endColumn,
        instructionReference: t.instructionReference,
        offset: t.offset
      };
  }
  toJSON() {
    const e = /* @__PURE__ */ Object.create(null);
    return e.id = this.getId(), e.enabled = this.enabled, e.condition = this.condition, e.hitCondition = this.hitCondition, e.logMessage = this.logMessage, e;
  }
}
class w extends ge {
  constructor(e, t, i, n, s, a, r, d, u, p, b, C = Y()) {
    super(n, a, s, r, C), this._uri = e, this._lineNumber = t, this._column = i, this._adapterData = d, this.textFileService = u, this.uriIdentityService = p, this.logService = b;
  }
  get originalUri() {
    return this._uri;
  }
  get lineNumber() {
    return this.verified && this.data && typeof this.data.line == "number" ? this.data.line : this._lineNumber;
  }
  get verified() {
    return this.data ? this.data.verified && !this.textFileService.isDirty(this._uri) : !0;
  }
  get uri() {
    return this.verified && this.data && this.data.source ? Bt(this.data.source, this.data.source.path, this.data.sessionId, this.uriIdentityService, this.logService) : this._uri;
  }
  get column() {
    return this.verified && this.data && typeof this.data.column == "number" ? this.data.column : this._column;
  }
  get message() {
    return this.textFileService.isDirty(this.uri) ? c(
      "breakpointDirtydHover",
      "Unverified breakpoint. File is modified, please restart debug session."
    ) : super.message;
  }
  get adapterData() {
    return this.data && this.data.source && this.data.source.adapterData ? this.data.source.adapterData : this._adapterData;
  }
  get endLineNumber() {
    return this.verified && this.data ? this.data.endLine : void 0;
  }
  get endColumn() {
    return this.verified && this.data ? this.data.endColumn : void 0;
  }
  get sessionAgnosticData() {
    return {
      lineNumber: this._lineNumber,
      column: this._column
    };
  }
  get supported() {
    return this.data ? !(this.logMessage && !this.data.supportsLogPoints || this.condition && !this.data.supportsConditionalBreakpoints || this.hitCondition && !this.data.supportsHitConditionalBreakpoints) : !0;
  }
  setSessionData(e, t) {
    super.setSessionData(e, t), this._adapterData || (this._adapterData = this.adapterData);
  }
  toJSON() {
    const e = super.toJSON();
    return e.uri = this._uri, e.lineNumber = this._lineNumber, e.column = this._column, e.adapterData = this.adapterData, e;
  }
  toString() {
    return `${G(this.uri)} ${this.lineNumber}`;
  }
  update(e) {
    ae(e.lineNumber) || (this._lineNumber = e.lineNumber), ae(e.column) || (this._column = e.column), ae(e.condition) || (this.condition = e.condition), ae(e.hitCondition) || (this.hitCondition = e.hitCondition), ae(e.logMessage) || (this.logMessage = e.logMessage);
  }
}
class D extends ge {
  constructor(e, t, i, n, s, a = Y()) {
    super(t, i, n, s, a), this.name = e;
  }
  toJSON() {
    const e = super.toJSON();
    return e.name = this.name, e;
  }
  get supported() {
    return this.data ? this.data.supportsFunctionBreakpoints : !0;
  }
  toString() {
    return this.name;
  }
}
class A extends ge {
  constructor(e, t, i, n, s, a, r, d, u, p = Y()) {
    super(n, s, a, r, p), this.description = e, this.dataId = t, this.canPersist = i, this.accessTypes = d, this.accessType = u;
  }
  toJSON() {
    const e = super.toJSON();
    return e.description = this.description, e.dataId = this.dataId, e.accessTypes = this.accessTypes, e.accessType = this.accessType, e;
  }
  get supported() {
    return this.data ? this.data.supportsDataBreakpoints : !0;
  }
  toString() {
    return this.description;
  }
}
class W extends ge {
  constructor(e, t, i, n, s, a, r, d = !1) {
    super(i, void 0, s, void 0, Y()), this.filter = e, this.label = t, this.supportsCondition = n, this.description = a, this.conditionDescription = r, this.fallback = d, this.supportedSessions = /* @__PURE__ */ new Set();
  }
  toJSON() {
    const e = /* @__PURE__ */ Object.create(null);
    return e.filter = this.filter, e.label = this.label, e.enabled = this.enabled, e.supportsCondition = this.supportsCondition, e.conditionDescription = this.conditionDescription, e.condition = this.condition, e.fallback = this.fallback, e.description = this.description, e;
  }
  setSupportedSession(e, t) {
    t ? this.supportedSessions.add(e) : this.supportedSessions.delete(e);
  }
  setFallback(e) {
    this.fallback = e;
  }
  get supported() {
    return !0;
  }
  isSupportedSession(e) {
    return e ? this.supportedSessions.has(e) : this.fallback;
  }
  matches(e) {
    return this.filter === e.filter && this.label === e.label && this.supportsCondition === !!e.supportsCondition && this.conditionDescription === e.conditionDescription && this.description === e.description;
  }
  toString() {
    return this.label;
  }
}
class N extends ge {
  constructor(e, t, i, n, s, a, r, d = Y()) {
    super(n, s, a, r, d), this.instructionReference = e, this.offset = t, this.canPersist = i;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instructionReference = this.instructionReference, e.offset = this.offset, e;
  }
  get supported() {
    return this.data ? this.data.supportsInstructionBreakpoints : !0;
  }
  toString() {
    return this.instructionReference;
  }
}
class Mn {
  constructor(e, t) {
    this.sessionId = e, this.threadId = t;
  }
  getId() {
    return `${this.sessionId}:${this.threadId}`;
  }
}
let et = class {
  constructor(e, t, i, n) {
    this.textFileService = t, this.uriIdentityService = i, this.logService = n, this.schedulers = /* @__PURE__ */ new Map(), this.breakpointsActivated = !0, this._onDidChangeBreakpoints = new fe(), this._onDidChangeCallStack = new fe(), this._onDidChangeWatchExpressions = new fe(), this.breakpoints = e.loadBreakpoints(), this.functionBreakpoints = e.loadFunctionBreakpoints(), this.exceptionBreakpoints = e.loadExceptionBreakpoints(), this.dataBreakpoints = e.loadDataBreakpoints(), this.watchExpressions = e.loadWatchExpressions(), this.instructionBreakpoints = [], this.sessions = [];
  }
  getId() {
    return "root";
  }
  getSession(e, t = !1) {
    if (e)
      return this.getSessions(t).find((i) => i.getId() === e);
  }
  getSessions(e = !1) {
    return this.sessions.filter((t) => e || t.state !== 0);
  }
  addSession(e) {
    this.sessions = this.sessions.filter((n) => !(n.getId() === e.getId() || n.state === 0 && n.configuration.name === e.configuration.name));
    let t = 1;
    for (; this.sessions.some((n) => n.getLabel() === e.getLabel()); )
      e.setName(`${e.configuration.name} ${++t}`);
    let i = -1;
    e.parentSession && (i = Jt(this.sessions, (n) => n.parentSession === e.parentSession || n === e.parentSession)), i >= 0 ? this.sessions.splice(i + 1, 0, e) : this.sessions.push(e), this._onDidChangeCallStack.fire(void 0);
  }
  get onDidChangeBreakpoints() {
    return this._onDidChangeBreakpoints.event;
  }
  get onDidChangeCallStack() {
    return this._onDidChangeCallStack.event;
  }
  get onDidChangeWatchExpressions() {
    return this._onDidChangeWatchExpressions.event;
  }
  rawUpdate(e) {
    const t = this.sessions.find((i) => i.getId() === e.sessionId);
    t && (t.rawUpdate(e), this._onDidChangeCallStack.fire(void 0));
  }
  clearThreads(e, t, i = void 0) {
    const n = this.sessions.find((s) => s.getId() === e);
    this.schedulers.forEach((s) => {
      s.scheduler.dispose(), s.completeDeferred.complete();
    }), this.schedulers.clear(), n && (n.clearThreads(t, i), this._onDidChangeCallStack.fire(void 0));
  }
  async fetchCallstack(e, t) {
    var s;
    if (e.reachedEndOfCallStack)
      return;
    const i = (s = e.stoppedDetails) == null ? void 0 : s.totalFrames, n = typeof i == "number" ? i - e.getCallStack().length : void 0;
    (!t || n && t > n) && (t = n), t && t > 0 && (await e.fetchCallStack(t), this._onDidChangeCallStack.fire());
  }
  refreshTopOfCallstack(e) {
    if (e.session.capabilities.supportsDelayedStackTraceLoading) {
      let i = Promise.resolve();
      const n = new Promise((s, a) => {
        i = e.fetchCallStack(1).then(() => {
          if (!this.schedulers.has(e.getId())) {
            const d = new $t();
            this.schedulers.set(e.getId(), {
              completeDeferred: d,
              scheduler: new rt(() => {
                e.fetchCallStack(19).then(() => {
                  const u = e.getStaleCallStack(), p = e.getCallStack();
                  let b = u.length !== p.length;
                  for (let C = 1; C < u.length && !b; C++)
                    b = !u[C].equals(p[C]);
                  b && this._onDidChangeCallStack.fire();
                }).finally(() => {
                  d.complete(), this.schedulers.delete(e.getId());
                });
              }, 420)
            });
          }
          const r = this.schedulers.get(e.getId());
          r.scheduler.schedule(), r.completeDeferred.p.then(s, a), this._onDidChangeCallStack.fire();
        });
      });
      return { topCallStack: i, wholeCallStack: n };
    }
    const t = e.fetchCallStack();
    return { wholeCallStack: t, topCallStack: t };
  }
  getBreakpoints(e) {
    var t, i;
    if (e) {
      const n = (t = e.uri) == null ? void 0 : t.toString(), s = (i = e.originalUri) == null ? void 0 : i.toString();
      return this.breakpoints.filter((a) => !(n && a.uri.toString() !== n || s && a.originalUri.toString() !== s || e.lineNumber && a.lineNumber !== e.lineNumber || e.column && a.column !== e.column || e.enabledOnly && (!this.breakpointsActivated || !a.enabled)));
    }
    return this.breakpoints;
  }
  getFunctionBreakpoints() {
    return this.functionBreakpoints;
  }
  getDataBreakpoints() {
    return this.dataBreakpoints;
  }
  getExceptionBreakpoints() {
    return this.exceptionBreakpoints;
  }
  getExceptionBreakpointsForSession(e) {
    return this.exceptionBreakpoints.filter((t) => t.isSupportedSession(e));
  }
  getInstructionBreakpoints() {
    return this.instructionBreakpoints;
  }
  setExceptionBreakpointsForSession(e, t) {
    if (t) {
      let i = !1;
      t.forEach((n) => {
        let s = this.exceptionBreakpoints.filter((a) => a.matches(n)).pop();
        s || (i = !0, s = new W(
          n.filter,
          n.label,
          !!n.default,
          !!n.supportsCondition,
          void 0,
          n.description,
          n.conditionDescription
        ), this.exceptionBreakpoints.push(s)), s.setSupportedSession(e, !0);
      }), i && this._onDidChangeBreakpoints.fire(void 0);
    }
  }
  removeExceptionBreakpointsForSession(e) {
    this.exceptionBreakpoints.forEach((t) => t.setSupportedSession(e, !1));
  }
  setExceptionBreakpointFallbackSession(e) {
    this.exceptionBreakpoints.forEach((t) => t.setFallback(t.isSupportedSession(e)));
  }
  setExceptionBreakpointCondition(e, t) {
    e.condition = t, this._onDidChangeBreakpoints.fire(void 0);
  }
  areBreakpointsActivated() {
    return this.breakpointsActivated;
  }
  setBreakpointsActivated(e) {
    this.breakpointsActivated = e, this._onDidChangeBreakpoints.fire(void 0);
  }
  addBreakpoints(e, t, i = !0) {
    const n = t.map((s) => new w(
      e,
      s.lineNumber,
      s.column,
      s.enabled !== !1,
      s.condition,
      s.hitCondition,
      s.logMessage,
      void 0,
      this.textFileService,
      this.uriIdentityService,
      this.logService,
      s.id
    ));
    return this.breakpoints = this.breakpoints.concat(n), this.breakpointsActivated = !0, this.sortAndDeDup(), i && this._onDidChangeBreakpoints.fire({ added: n, sessionOnly: !1 }), n;
  }
  removeBreakpoints(e) {
    this.breakpoints = this.breakpoints.filter((t) => !e.some((i) => i.getId() === t.getId())), this._onDidChangeBreakpoints.fire({ removed: e, sessionOnly: !1 });
  }
  updateBreakpoints(e) {
    const t = [];
    this.breakpoints.forEach((i) => {
      const n = e.get(i.getId());
      n && (i.update(n), t.push(i));
    }), this.sortAndDeDup(), this._onDidChangeBreakpoints.fire({ changed: t, sessionOnly: !1 });
  }
  setBreakpointSessionData(e, t, i) {
    this.breakpoints.forEach((n) => {
      if (!i)
        n.setSessionData(e, void 0);
      else {
        const s = i.get(n.getId());
        s && n.setSessionData(e, re(s, t));
      }
    }), this.functionBreakpoints.forEach((n) => {
      if (!i)
        n.setSessionData(e, void 0);
      else {
        const s = i.get(n.getId());
        s && n.setSessionData(e, re(s, t));
      }
    }), this.dataBreakpoints.forEach((n) => {
      if (!i)
        n.setSessionData(e, void 0);
      else {
        const s = i.get(n.getId());
        s && n.setSessionData(e, re(s, t));
      }
    }), this.exceptionBreakpoints.forEach((n) => {
      if (!i)
        n.setSessionData(e, void 0);
      else {
        const s = i.get(n.getId());
        s && n.setSessionData(e, re(s, t));
      }
    }), this.instructionBreakpoints.forEach((n) => {
      if (!i)
        n.setSessionData(e, void 0);
      else {
        const s = i.get(n.getId());
        s && n.setSessionData(e, re(s, t));
      }
    }), this._onDidChangeBreakpoints.fire({
      sessionOnly: !0
    });
  }
  getDebugProtocolBreakpoint(e, t) {
    const i = this.breakpoints.find((n) => n.getId() === e);
    if (i)
      return i.getDebugProtocolBreakpoint(t);
  }
  sortAndDeDup() {
    this.breakpoints = this.breakpoints.sort((e, t) => e.uri.toString() !== t.uri.toString() ? G(e.uri).localeCompare(G(t.uri)) : e.lineNumber === t.lineNumber ? e.column && t.column ? e.column - t.column : 1 : e.lineNumber - t.lineNumber), this.breakpoints = ct(this.breakpoints, (e) => `${e.uri.toString()}:${e.lineNumber}:${e.column}`);
  }
  setEnablement(e, t) {
    if (e instanceof w || e instanceof D || e instanceof W || e instanceof A || e instanceof N) {
      const i = [];
      e.enabled !== t && (e instanceof w || e instanceof D || e instanceof A || e instanceof N) && i.push(e), e.enabled = t, t && (this.breakpointsActivated = !0), this._onDidChangeBreakpoints.fire({ changed: i, sessionOnly: !1 });
    }
  }
  enableOrDisableAllBreakpoints(e) {
    const t = [];
    this.breakpoints.forEach((i) => {
      i.enabled !== e && t.push(i), i.enabled = e;
    }), this.functionBreakpoints.forEach((i) => {
      i.enabled !== e && t.push(i), i.enabled = e;
    }), this.dataBreakpoints.forEach((i) => {
      i.enabled !== e && t.push(i), i.enabled = e;
    }), this.instructionBreakpoints.forEach((i) => {
      i.enabled !== e && t.push(i), i.enabled = e;
    }), e && (this.breakpointsActivated = !0), this._onDidChangeBreakpoints.fire({ changed: t, sessionOnly: !1 });
  }
  addFunctionBreakpoint(e, t) {
    const i = new D(e, !0, void 0, void 0, void 0, t);
    return this.functionBreakpoints.push(i), this._onDidChangeBreakpoints.fire({ added: [i], sessionOnly: !1 }), i;
  }
  updateFunctionBreakpoint(e, t) {
    const i = this.functionBreakpoints.find((n) => n.getId() === e);
    i && (typeof t.name == "string" && (i.name = t.name), typeof t.condition == "string" && (i.condition = t.condition), typeof t.hitCondition == "string" && (i.hitCondition = t.hitCondition), this._onDidChangeBreakpoints.fire({ changed: [i], sessionOnly: !1 }));
  }
  removeFunctionBreakpoints(e) {
    let t;
    e ? (t = this.functionBreakpoints.filter((i) => i.getId() === e), this.functionBreakpoints = this.functionBreakpoints.filter((i) => i.getId() !== e)) : (t = this.functionBreakpoints, this.functionBreakpoints = []), this._onDidChangeBreakpoints.fire({ removed: t, sessionOnly: !1 });
  }
  addDataBreakpoint(e, t, i, n, s) {
    const a = new A(
      e,
      t,
      i,
      !0,
      void 0,
      void 0,
      void 0,
      n,
      s
    );
    this.dataBreakpoints.push(a), this._onDidChangeBreakpoints.fire({ added: [a], sessionOnly: !1 });
  }
  removeDataBreakpoints(e) {
    let t;
    e ? (t = this.dataBreakpoints.filter((i) => i.getId() === e), this.dataBreakpoints = this.dataBreakpoints.filter((i) => i.getId() !== e)) : (t = this.dataBreakpoints, this.dataBreakpoints = []), this._onDidChangeBreakpoints.fire({ removed: t, sessionOnly: !1 });
  }
  addInstructionBreakpoint(e, t, i, n) {
    const s = new N(e, t, !1, !0, n, i, void 0);
    this.instructionBreakpoints.push(s), this._onDidChangeBreakpoints.fire({ added: [s], sessionOnly: !0 });
  }
  removeInstructionBreakpoints(e) {
    let t;
    e ? (t = this.instructionBreakpoints.filter((i) => i.instructionReference === e), this.instructionBreakpoints = this.instructionBreakpoints.filter((i) => i.instructionReference !== e)) : (t = this.instructionBreakpoints, this.instructionBreakpoints = []), this._onDidChangeBreakpoints.fire({ removed: t, sessionOnly: !1 });
  }
  getWatchExpressions() {
    return this.watchExpressions;
  }
  addWatchExpression(e) {
    const t = new _(e || "");
    return this.watchExpressions.push(t), this._onDidChangeWatchExpressions.fire(t), t;
  }
  renameWatchExpression(e, t) {
    const i = this.watchExpressions.filter((n) => n.getId() === e);
    i.length === 1 && (i[0].name = t, this._onDidChangeWatchExpressions.fire(i[0]));
  }
  removeWatchExpressions(e = null) {
    this.watchExpressions = e ? this.watchExpressions.filter((t) => t.getId() !== e) : [], this._onDidChangeWatchExpressions.fire(void 0);
  }
  moveWatchExpression(e, t) {
    const i = this.watchExpressions.find((n) => n.getId() === e);
    i && (this.watchExpressions = this.watchExpressions.filter((n) => n.getId() !== e), this.watchExpressions = this.watchExpressions.slice(0, t).concat(i, this.watchExpressions.slice(t)), this._onDidChangeWatchExpressions.fire(void 0));
  }
  sourceIsNotAvailable(e) {
    this.sessions.forEach((t) => {
      const i = t.getSourceForUri(e);
      i && (i.available = !1);
    }), this._onDidChangeCallStack.fire(void 0);
  }
};
et = Q([
  S(1, zt),
  S(2, Wt),
  S(3, Xt)
], et);
const Pn = h("debug-console-view-icon", l.debugConsole, c("debugConsoleViewIcon", "View icon of the debug console view.")), Un = h("run-view-icon", l.debugAlt, c("runViewIcon", "View icon of the run view.")), Hn = h("variables-view-icon", l.debugAlt, c("variablesViewIcon", "View icon of the variables view.")), Kn = h("watch-view-icon", l.debugAlt, c("watchViewIcon", "View icon of the watch view.")), qn = h("callstack-view-icon", l.debugAlt, c("callStackViewIcon", "View icon of the call stack view.")), Gn = h("breakpoints-view-icon", l.debugAlt, c("breakpointsViewIcon", "View icon of the breakpoints view.")), zn = h("loaded-scripts-view-icon", l.debugAlt, c("loadedScriptsViewIcon", "View icon of the loaded scripts view.")), Dt = {
  regular: h("debug-breakpoint", l.debugBreakpoint, c("debugBreakpoint", "Icon for breakpoints.")),
  disabled: h("debug-breakpoint-disabled", l.debugBreakpointDisabled, c("debugBreakpointDisabled", "Icon for disabled breakpoints.")),
  unverified: h("debug-breakpoint-unverified", l.debugBreakpointUnverified, c("debugBreakpointUnverified", "Icon for unverified breakpoints."))
}, yt = {
  regular: h("debug-breakpoint-function", l.debugBreakpointFunction, c("debugBreakpointFunction", "Icon for function breakpoints.")),
  disabled: h("debug-breakpoint-function-disabled", l.debugBreakpointFunctionDisabled, c(
    "debugBreakpointFunctionDisabled",
    "Icon for disabled function breakpoints."
  )),
  unverified: h("debug-breakpoint-function-unverified", l.debugBreakpointFunctionUnverified, c(
    "debugBreakpointFunctionUnverified",
    "Icon for unverified function breakpoints."
  ))
}, Et = {
  regular: h("debug-breakpoint-conditional", l.debugBreakpointConditional, c("debugBreakpointConditional", "Icon for conditional breakpoints.")),
  disabled: h("debug-breakpoint-conditional-disabled", l.debugBreakpointConditionalDisabled, c(
    "debugBreakpointConditionalDisabled",
    "Icon for disabled conditional breakpoints."
  )),
  unverified: h("debug-breakpoint-conditional-unverified", l.debugBreakpointConditionalUnverified, c(
    "debugBreakpointConditionalUnverified",
    "Icon for unverified conditional breakpoints."
  ))
}, xt = {
  regular: h("debug-breakpoint-data", l.debugBreakpointData, c("debugBreakpointData", "Icon for data breakpoints.")),
  disabled: h("debug-breakpoint-data-disabled", l.debugBreakpointDataDisabled, c("debugBreakpointDataDisabled", "Icon for disabled data breakpoints.")),
  unverified: h("debug-breakpoint-data-unverified", l.debugBreakpointDataUnverified, c("debugBreakpointDataUnverified", "Icon for unverified data breakpoints."))
}, Pe = {
  regular: h("debug-breakpoint-log", l.debugBreakpointLog, c("debugBreakpointLog", "Icon for log breakpoints.")),
  disabled: h("debug-breakpoint-log-disabled", l.debugBreakpointLogDisabled, c("debugBreakpointLogDisabled", "Icon for disabled log breakpoint.")),
  unverified: h("debug-breakpoint-log-unverified", l.debugBreakpointLogUnverified, c("debugBreakpointLogUnverified", "Icon for unverified log breakpoints."))
}, Wn = h("debug-hint", l.debugHint, c(
  "debugBreakpointHint",
  "Icon for breakpoint hints shown on hover in editor glyph margin."
)), Vi = h("debug-breakpoint-unsupported", l.debugBreakpointUnsupported, c("debugBreakpointUnsupported", "Icon for unsupported breakpoints.")), Xn = [Dt, yt, Et, xt, Pe], jn = h("debug-stackframe", l.debugStackframe, c(
  "debugStackframe",
  "Icon for a stackframe shown in the editor glyph margin."
)), Jn = h("debug-stackframe-focused", l.debugStackframeFocused, c(
  "debugStackframeFocused",
  "Icon for a focused stackframe  shown in the editor glyph margin."
)), $n = h("debug-gripper", l.gripper, c("debugGripper", "Icon for the debug bar gripper.")), Yn = h("debug-restart-frame", l.debugRestartFrame, c("debugRestartFrame", "Icon for the debug restart frame action.")), Qn = h("debug-stop", l.debugStop, c("debugStop", "Icon for the debug stop action.")), Zn = h("debug-disconnect", l.debugDisconnect, c("debugDisconnect", "Icon for the debug disconnect action.")), es = h("debug-restart", l.debugRestart, c("debugRestart", "Icon for the debug restart action.")), ts = h("debug-step-over", l.debugStepOver, c("debugStepOver", "Icon for the debug step over action.")), is = h("debug-step-into", l.debugStepInto, c("debugStepInto", "Icon for the debug step into action.")), ns = h("debug-step-out", l.debugStepOut, c("debugStepOut", "Icon for the debug step out action.")), ss = h("debug-step-back", l.debugStepBack, c("debugStepBack", "Icon for the debug step back action.")), os = h("debug-pause", l.debugPause, c("debugPause", "Icon for the debug pause action.")), as = h("debug-continue", l.debugContinue, c("debugContinue", "Icon for the debug continue action.")), rs = h("debug-reverse-continue", l.debugReverseContinue, c("debugReverseContinue", "Icon for the debug reverse continue action.")), cs = h("debug-run", l.run, c("debugRun", "Icon for the run or debug action.")), ds = h("debug-start", l.debugStart, c("debugStart", "Icon for the debug start action.")), us = h("debug-configure", l.gear, c("debugConfigure", "Icon for the debug configure action."));
h("debug-console", l.gear, c("debugConsole", "Icon for the debug console open action."));
const ls = h("debug-remove-config", l.trash, c("debugRemoveConfig", "Icon for removing debug configurations."));
h("debug-collapse-all", l.collapseAll, c("debugCollapseAll", "Icon for the collapse all action in the debug views."));
const hs = h("callstack-view-session", l.bug, c(
  "callstackViewSession",
  "Icon for the session icon in the call stack view."
)), ps = h("debug-console-clear-all", l.clearAll, c(
  "debugConsoleClearAll",
  "Icon for the clear all action in the debug console."
)), gs = h("watch-expressions-remove-all", l.closeAll, c(
  "watchExpressionsRemoveAll",
  "Icon for the Remove All action in the watch view."
)), fs = h("watch-expression-remove", l.removeClose, c("watchExpressionRemove", "Icon for the Remove action in the watch view.")), bs = h("watch-expressions-add", l.add, c("watchExpressionsAdd", "Icon for the add action in the watch view.")), Pi = h("watch-expressions-add-function-breakpoint", l.add, c(
  "watchExpressionsAddFuncBreakpoint",
  "Icon for the add function breakpoint action in the watch view."
)), Ui = h("breakpoints-remove-all", l.closeAll, c(
  "breakpointsRemoveAll",
  "Icon for the Remove All action in the breakpoints view."
)), Hi = h("breakpoints-activate", l.activateBreakpoints, c(
  "breakpointsActivate",
  "Icon for the activate action in the breakpoints view."
)), ms = h("debug-console-evaluation-input", l.arrowSmallRight, c(
  "debugConsoleEvaluationInput",
  "Icon for the debug evaluation input marker."
)), Ss = h("debug-console-evaluation-prompt", l.chevronRight, c("debugConsoleEvaluationPrompt", "Icon for the debug evaluation prompt.")), ks = h("debug-inspect-memory", l.fileBinary, c("debugInspectMemory", "Icon for the inspect memory action.")), m = pi;
function P(o) {
  const e = m("input");
  return e.type = "checkbox", e.tabIndex = -1, o.push(gi.ignoreTarget(e)), e;
}
const Ki = 9;
function tt(o, e, t) {
  const i = o.getBreakpoints().length + o.getExceptionBreakpointsForSession(e).length + o.getFunctionBreakpoints().length + o.getDataBreakpoints().length + o.getInstructionBreakpoints().length;
  return Math.min(t, i) * 22;
}
let it = class extends fi {
  constructor(e, t, i, n, s, a, r, d, u, p, b, C, E, U, H, Re, Pt) {
    super(e, n, t, u, b, p, s, C, a, E), this.debugService = i, this.editorService = r, this.contextViewService = d, this.labelService = U, this.hoverService = Re, this.languageService = Pt, this.needsRefresh = !1, this.needsStateChange = !1, this.ignoreLayout = !1, this.autoFocusedIndex = -1, this.menu = H.createMenu(k.DebugBreakpointsContext, b), this._register(this.menu), this.breakpointItemType = L.bindTo(b), this.breakpointSupportsCondition = Ge.bindTo(b), this.breakpointInputFocused = ft.bindTo(b), this._register(this.debugService.getModel().onDidChangeBreakpoints(() => this.onBreakpointsChange())), this._register(this.debugService.getViewModel().onDidFocusSession(() => this.onBreakpointsChange())), this._register(this.debugService.onDidChangeState(() => this.onStateChange())), this.hintDelayer = this._register(new rt(() => this.updateBreakpointsHint(!0), 4e3));
  }
  renderBody(e) {
    super.renderBody(e), this.element.classList.add("debug-pane"), e.classList.add("debug-breakpoints");
    const t = new qi(this);
    this.list = this.instantiationService.createInstance(bi, "Breakpoints", e, t, [
      this.instantiationService.createInstance(Se, this.menu, this.breakpointSupportsCondition, this.breakpointItemType),
      new ke(
        this.menu,
        this.breakpointSupportsCondition,
        this.breakpointItemType,
        this.debugService
      ),
      new we(this, this.debugService, this.contextViewService),
      this.instantiationService.createInstance(ve, this.menu, this.breakpointSupportsCondition, this.breakpointItemType),
      this.instantiationService.createInstance(Ie),
      new Be(this, this.debugService, this.contextViewService, this.labelService),
      this.instantiationService.createInstance(Ce)
    ], {
      identityProvider: { getId: (n) => n.getId() },
      multipleSelectionSupport: !1,
      keyboardNavigationLabelProvider: { getKeyboardNavigationLabel: (n) => n },
      accessibilityProvider: new Gi(this.debugService, this.labelService),
      overrideStyles: {
        listBackground: this.getBackgroundColor()
      }
    }), Ae.bindTo(this.list.contextKeyService), this._register(this.list.onContextMenu(this.onListContextMenu, this)), this.list.onMouseMiddleClick(async ({ element: n }) => {
      n instanceof w ? await this.debugService.removeBreakpoints(n.getId()) : n instanceof D ? await this.debugService.removeFunctionBreakpoints(n.getId()) : n instanceof A ? await this.debugService.removeDataBreakpoints(n.getId()) : n instanceof N && await this.debugService.removeInstructionBreakpoints(n.instructionReference);
    }), this._register(this.list.onDidOpen(async (n) => {
      var s;
      n.element && (n.browserEvent instanceof MouseEvent && n.browserEvent.button === 1 || (n.element instanceof w && Xe(n.element, n.sideBySide, n.editorOptions.preserveFocus || !1, n.editorOptions.pinned || !n.editorOptions.preserveFocus, this.debugService, this.editorService), n.element instanceof N && (await this.editorService.openEditor(me.instance)).goToAddress(n.element.instructionReference, n.browserEvent instanceof MouseEvent && n.browserEvent.detail === 2), n.browserEvent instanceof MouseEvent && n.browserEvent.detail === 2 && n.element instanceof D && n.element !== ((s = this.inputBoxData) == null ? void 0 : s.breakpoint) && this.renderInputBox({ breakpoint: n.element, type: "name" })));
    })), this.list.splice(0, this.list.length, this.elements), this._register(this.onDidChangeBodyVisibility((n) => {
      n && (this.needsRefresh && this.onBreakpointsChange(), this.needsStateChange && this.onStateChange());
    }));
    const i = this.viewDescriptorService.getViewContainerModel(this.viewDescriptorService.getViewContainerByViewId(this.id));
    this._register(i.onDidChangeAllViewDescriptors(() => {
      this.updateSize();
    }));
  }
  renderHeaderTitle(e, t) {
    super.renderHeaderTitle(e, t);
    const i = f(e, m("span.breakpoint-warning"));
    this.hintContainer = this._register(new mi(i, {
      supportIcons: !0,
      hoverDelegate: {
        showHover: (n, s) => this.hoverService.showHover({ content: n.content, target: this.hintContainer.element }, s),
        delay: this.configurationService.getValue("workbench.hover.delay")
      }
    })), Ze(this.hintContainer.element);
  }
  focus() {
    var e;
    super.focus(), (e = this.list) == null || e.domFocus();
  }
  renderInputBox(e) {
    this._inputBoxData = e, this.onBreakpointsChange(), this._inputBoxData = void 0;
  }
  get inputBoxData() {
    return this._inputBoxData;
  }
  layoutBody(e, t) {
    var i;
    if (!this.ignoreLayout) {
      super.layoutBody(e, t), (i = this.list) == null || i.layout(e, t);
      try {
        this.ignoreLayout = !0, this.updateSize();
      } finally {
        this.ignoreLayout = !1;
      }
    }
  }
  onListContextMenu(e) {
    const t = e.element, i = t instanceof w ? "breakpoint" : t instanceof W ? "exceptionBreakpoint" : t instanceof D ? "functionBreakpoint" : t instanceof A ? "dataBreakpoint" : t instanceof N ? "instructionBreakpoint" : void 0;
    this.breakpointItemType.set(i);
    const n = this.debugService.getViewModel().focusedSession, s = t instanceof W ? t.supportsCondition : !n || !!n.capabilities.supportsConditionalBreakpoints;
    this.breakpointSupportsCondition.set(s);
    const a = [];
    Si(this.menu, { arg: e.element, shouldForwardArgs: !1 }, { primary: [], secondary: a }, "inline"), this.contextMenuService.showContextMenu({
      getAnchor: () => e.anchor,
      getActions: () => a,
      getActionsContext: () => t
    });
  }
  updateSize() {
    var i;
    const e = this.viewDescriptorService.getViewContainerModel(this.viewDescriptorService.getViewContainerByViewId(this.id)), t = (i = this.debugService.getViewModel().focusedSession) == null ? void 0 : i.getId();
    this.minimumBodySize = this.orientation === 0 ? tt(this.debugService.getModel(), t, Ki) : 170, this.maximumBodySize = this.orientation === 0 && e.visibleViewDescriptors.length > 1 ? tt(this.debugService.getModel(), t, Number.POSITIVE_INFINITY) : Number.POSITIVE_INFINITY;
  }
  updateBreakpointsHint(e = !1) {
    var a, r;
    if (!this.hintContainer)
      return;
    const t = (a = this.debugService.getViewModel().focusedSession) == null ? void 0 : a.configuration.type, i = t ? this.debugService.getAdapterManager().getDebugger(t) : void 0, n = (r = i == null ? void 0 : i.strings) == null ? void 0 : r[ki.UnverifiedBreakpoints], s = n && this.debugService.getModel().getBreakpoints().filter((d) => {
      if (d.verified || !d.enabled)
        return !1;
      const u = this.languageService.guessLanguageIdByFilepathOrFirstLine(d.uri);
      return u && i.interestedInLanguage(u);
    });
    if (n && (s != null && s.length) && this.debugService.getModel().areBreakpointsActivated())
      if (e) {
        const d = new vi(void 0, { isTrusted: !0 }).appendMarkdown(n);
        this.hintContainer.setLabel("$(warning)", void 0, { title: { markdown: d, markdownNotSupportedFallback: n } }), Ii(this.hintContainer.element);
      } else
        this.hintDelayer.schedule();
    else
      Ze(this.hintContainer.element);
  }
  onBreakpointsChange() {
    if (this.isBodyVisible()) {
      if (this.updateSize(), this.list) {
        const e = this.list.getFocus()[0], t = e && !this.elements.includes(this.list.element(e));
        this.list.splice(0, this.list.length, this.elements), this.needsRefresh = !1, t && this.list.focusNth(Math.min(e, this.list.length - 1));
      }
      this.updateBreakpointsHint();
    } else
      this.needsRefresh = !0;
  }
  onStateChange() {
    if (this.isBodyVisible()) {
      this.needsStateChange = !1;
      const e = this.debugService.getViewModel().focusedThread;
      let t = !1;
      if (e && e.stoppedDetails && e.stoppedDetails.hitBreakpointIds && e.stoppedDetails.hitBreakpointIds.length > 0) {
        const i = e.stoppedDetails.hitBreakpointIds, s = this.elements.findIndex((a) => {
          const r = a.getIdFromAdapter(e.session.getId());
          return typeof r == "number" && i.indexOf(r) !== -1;
        });
        s >= 0 && (this.list.setFocus([s]), this.list.setSelection([s]), t = !0, this.autoFocusedIndex = s);
      }
      if (!t) {
        const i = this.list.getFocus(), n = this.list.getSelection();
        this.autoFocusedIndex >= 0 && Ci(i, n) && i.indexOf(this.autoFocusedIndex) >= 0 && (this.list.setFocus([]), this.list.setSelection([])), this.autoFocusedIndex = -1;
      }
      this.updateBreakpointsHint();
    } else
      this.needsStateChange = !0;
  }
  get elements() {
    var n;
    const e = this.debugService.getModel(), t = (n = this.debugService.getViewModel().focusedSession) == null ? void 0 : n.getId();
    return e.getExceptionBreakpointsForSession(t).concat(e.getFunctionBreakpoints()).concat(e.getDataBreakpoints()).concat(e.getBreakpoints()).concat(e.getInstructionBreakpoints());
  }
};
it = Q([
  S(1, dt),
  S(2, g),
  S(3, ni),
  S(4, si),
  S(5, oi),
  S(6, R),
  S(7, ai),
  S(8, He),
  S(9, ri),
  S(10, le),
  S(11, ci),
  S(12, di),
  S(13, Z),
  S(14, ui),
  S(15, li),
  S(16, ut)
], it);
class qi {
  constructor(e) {
    this.view = e;
  }
  getHeight(e) {
    return 22;
  }
  getTemplateId(e) {
    var t, i;
    if (e instanceof w)
      return Se.ID;
    if (e instanceof D) {
      const n = (t = this.view.inputBoxData) == null ? void 0 : t.breakpoint;
      return !e.name || n && n.getId() === e.getId() ? Be.ID : ve.ID;
    }
    if (e instanceof W) {
      const n = (i = this.view.inputBoxData) == null ? void 0 : i.breakpoint;
      return n && n.getId() === e.getId() ? we.ID : ke.ID;
    }
    return e instanceof A ? Ie.ID : e instanceof N ? Ce.ID : "";
  }
}
const Le = /* @__PURE__ */ new Map();
var X;
let Se = (X = class {
  constructor(e, t, i, n, s) {
    this.menu = e, this.breakpointSupportsCondition = t, this.breakpointItemType = i, this.debugService = n, this.labelService = s;
  }
  get templateId() {
    return X.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null);
    t.toDispose = [], t.breakpoint = f(e, m(".breakpoint")), t.icon = m(".icon"), t.checkbox = P(t.toDispose), t.toDispose.push(M(t.checkbox, "change", (n) => {
      this.debugService.enableOrDisableBreakpoints(!t.context.enabled, t.context);
    })), f(t.breakpoint, t.icon), f(t.breakpoint, t.checkbox), t.name = f(t.breakpoint, m("span.name")), t.filePath = f(t.breakpoint, m("span.file-path")), t.actionBar = new _e(t.breakpoint), t.toDispose.push(t.actionBar);
    const i = f(t.breakpoint, m(".line-number-container"));
    return t.lineNumber = f(i, m("span.line-number.monaco-count-badge")), t;
  }
  renderElement(e, t, i) {
    i.context = e, i.breakpoint.classList.toggle("disabled", !this.debugService.getModel().areBreakpointsActivated()), i.name.textContent = G(e.uri), i.lineNumber.textContent = e.lineNumber.toString(), e.column && (i.lineNumber.textContent += `:${e.column}`), i.filePath.textContent = this.labelService.getUriLabel(lt(e.uri), { relative: !0 }), i.checkbox.checked = e.enabled;
    const { message: n, icon: s } = oe(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), e, this.labelService);
    i.icon.className = he.asClassName(s), i.breakpoint.title = e.message || n || "", (this.debugService.state === 3 || this.debugService.state === 2) && !e.verified && i.breakpoint.classList.add("disabled");
    const r = [], d = this.debugService.getViewModel().focusedSession;
    this.breakpointSupportsCondition.set(!d || !!d.capabilities.supportsConditionalBreakpoints), this.breakpointItemType.set("breakpoint"), Ke(this.menu, { arg: e, shouldForwardArgs: !0 }, { primary: r, secondary: [] }, "inline"), i.actionBar.clear(), i.actionBar.push(r, { icon: !0, label: !1 }), Le.set(e.getId(), i.actionBar.domNode);
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
}, X.ID = "breakpoints", X);
Se = Q([
  S(3, g),
  S(4, Z)
], Se);
const ye = class ye {
  constructor(e, t, i, n) {
    this.menu = e, this.breakpointSupportsCondition = t, this.breakpointItemType = i, this.debugService = n;
  }
  get templateId() {
    return ye.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return t.toDispose = [], t.breakpoint = f(e, m(".breakpoint")), t.checkbox = P(t.toDispose), t.toDispose.push(M(t.checkbox, "change", (i) => {
      this.debugService.enableOrDisableBreakpoints(!t.context.enabled, t.context);
    })), f(t.breakpoint, t.checkbox), t.name = f(t.breakpoint, m("span.name")), t.condition = f(t.breakpoint, m("span.condition")), t.breakpoint.classList.add("exception"), t.actionBar = new _e(t.breakpoint), t.toDispose.push(t.actionBar), t;
  }
  renderElement(e, t, i) {
    i.context = e, i.name.textContent = e.label || `${e.filter} exceptions`, i.breakpoint.title = e.verified ? e.description || i.name.textContent : e.message || c("unverifiedExceptionBreakpoint", "Unverified Exception Breakpoint"), i.breakpoint.classList.toggle("disabled", !e.verified), i.checkbox.checked = e.enabled, i.condition.textContent = e.condition || "", i.condition.title = c(
      "expressionCondition",
      "Expression condition: {0}",
      e.condition
    );
    const n = [];
    this.breakpointSupportsCondition.set(e.supportsCondition), this.breakpointItemType.set("exceptionBreakpoint"), Ke(this.menu, { arg: e, shouldForwardArgs: !0 }, { primary: n, secondary: [] }, "inline"), i.actionBar.clear(), i.actionBar.push(n, { icon: !0, label: !1 }), Le.set(e.getId(), i.actionBar.domNode);
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
};
ye.ID = "exceptionbreakpoints";
let ke = ye;
var j;
let ve = (j = class {
  constructor(e, t, i, n, s) {
    this.menu = e, this.breakpointSupportsCondition = t, this.breakpointItemType = i, this.debugService = n, this.labelService = s;
  }
  get templateId() {
    return j.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return t.toDispose = [], t.breakpoint = f(e, m(".breakpoint")), t.icon = m(".icon"), t.checkbox = P(t.toDispose), t.toDispose.push(M(t.checkbox, "change", (i) => {
      this.debugService.enableOrDisableBreakpoints(!t.context.enabled, t.context);
    })), f(t.breakpoint, t.icon), f(t.breakpoint, t.checkbox), t.name = f(t.breakpoint, m("span.name")), t.condition = f(t.breakpoint, m("span.condition")), t.actionBar = new _e(t.breakpoint), t.toDispose.push(t.actionBar), t;
  }
  renderElement(e, t, i) {
    i.context = e, i.name.textContent = e.name;
    const { icon: n, message: s } = oe(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), e, this.labelService);
    i.icon.className = he.asClassName(n), i.icon.title = s || "", i.checkbox.checked = e.enabled, i.breakpoint.title = s || "", e.condition && e.hitCondition ? i.condition.textContent = c(
      "expressionAndHitCount",
      "Expression: {0} | Hit Count: {1}",
      e.condition,
      e.hitCondition
    ) : i.condition.textContent = e.condition || e.hitCondition || "";
    const a = this.debugService.getViewModel().focusedSession;
    i.breakpoint.classList.toggle("disabled", a && !a.capabilities.supportsFunctionBreakpoints || !this.debugService.getModel().areBreakpointsActivated()), a && !a.capabilities.supportsFunctionBreakpoints && (i.breakpoint.title = c(
      "functionBreakpointsNotSupported",
      "Function breakpoints are not supported by this debug type"
    ));
    const r = [];
    this.breakpointSupportsCondition.set(!a || !!a.capabilities.supportsConditionalBreakpoints), this.breakpointItemType.set("functionBreakpoint"), Ke(this.menu, { arg: e, shouldForwardArgs: !0 }, { primary: r, secondary: [] }, "inline"), i.actionBar.clear(), i.actionBar.push(r, { icon: !0, label: !1 }), Le.set(e.getId(), i.actionBar.domNode);
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
}, j.ID = "functionbreakpoints", j);
ve = Q([
  S(3, g),
  S(4, Z)
], ve);
var J;
let Ie = (J = class {
  constructor(e, t) {
    this.debugService = e, this.labelService = t;
  }
  get templateId() {
    return J.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return t.breakpoint = f(e, m(".breakpoint")), t.toDispose = [], t.icon = m(".icon"), t.checkbox = P(t.toDispose), t.toDispose.push(M(t.checkbox, "change", (i) => {
      this.debugService.enableOrDisableBreakpoints(!t.context.enabled, t.context);
    })), f(t.breakpoint, t.icon), f(t.breakpoint, t.checkbox), t.name = f(t.breakpoint, m("span.name")), t.accessType = f(t.breakpoint, m("span.access-type")), t;
  }
  renderElement(e, t, i) {
    i.context = e, i.name.textContent = e.description;
    const { icon: n, message: s } = oe(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), e, this.labelService);
    i.icon.className = he.asClassName(n), i.icon.title = s || "", i.checkbox.checked = e.enabled, i.breakpoint.title = s || "";
    const a = this.debugService.getViewModel().focusedSession;
    if (i.breakpoint.classList.toggle("disabled", a && !a.capabilities.supportsDataBreakpoints || !this.debugService.getModel().areBreakpointsActivated()), a && !a.capabilities.supportsDataBreakpoints && (i.breakpoint.title = c(
      "dataBreakpointsNotSupported",
      "Data breakpoints are not supported by this debug type"
    )), e.accessType) {
      const r = e.accessType === "read" ? c("read", "Read") : e.accessType === "write" ? c("write", "Write") : c("access", "Access");
      i.accessType.textContent = r;
    } else
      i.accessType.textContent = "";
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
}, J.ID = "databreakpoints", J);
Ie = Q([
  S(0, g),
  S(1, Z)
], Ie);
var $;
let Ce = ($ = class {
  constructor(e, t) {
    this.debugService = e, this.labelService = t;
  }
  get templateId() {
    return $.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return t.toDispose = [], t.breakpoint = f(e, m(".breakpoint")), t.icon = m(".icon"), t.checkbox = P(t.toDispose), t.toDispose.push(M(t.checkbox, "change", (i) => {
      this.debugService.enableOrDisableBreakpoints(!t.context.enabled, t.context);
    })), f(t.breakpoint, t.icon), f(t.breakpoint, t.checkbox), t.name = f(t.breakpoint, m("span.name")), t.address = f(t.breakpoint, m("span.file-path")), t.actionBar = new _e(t.breakpoint), t.toDispose.push(t.actionBar), t;
  }
  renderElement(e, t, i) {
    i.context = e, i.breakpoint.classList.toggle("disabled", !this.debugService.getModel().areBreakpointsActivated()), i.name.textContent = e.instructionReference, i.checkbox.checked = e.enabled;
    const { message: n, icon: s } = oe(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), e, this.labelService);
    i.icon.className = he.asClassName(s), i.breakpoint.title = e.message || n || "", (this.debugService.state === 3 || this.debugService.state === 2) && !e.verified && i.breakpoint.classList.add("disabled");
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
}, $.ID = "instructionBreakpoints", $);
Ce = Q([
  S(0, g),
  S(1, Z)
], Ce);
const Ee = class Ee {
  constructor(e, t, i, n) {
    this.view = e, this.debugService = t, this.contextViewService = i, this.labelService = n;
  }
  get templateId() {
    return Ee.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null), i = [], n = f(e, m(".breakpoint"));
    t.icon = m(".icon"), t.checkbox = P(i), f(n, t.icon), f(n, t.checkbox), this.view.breakpointInputFocused.set(!0);
    const s = f(n, m(".inputBoxContainer")), a = new ht(
      s,
      this.contextViewService,
      { inputBoxStyles: pt }
    ), r = (d) => {
      t.updating = !0;
      try {
        this.view.breakpointInputFocused.set(!1);
        const u = t.breakpoint.getId();
        d ? (t.type === "name" && this.debugService.updateFunctionBreakpoint(u, { name: a.value }), t.type === "condition" && this.debugService.updateFunctionBreakpoint(u, { condition: a.value }), t.type === "hitCount" && this.debugService.updateFunctionBreakpoint(u, { hitCondition: a.value })) : t.type === "name" && !t.breakpoint.name ? this.debugService.removeFunctionBreakpoints(u) : this.view.renderInputBox(void 0);
      } finally {
        t.updating = !1;
      }
    };
    return i.push(M(a.inputElement, "keydown", (d) => {
      const u = d.equals(9), p = d.equals(3);
      (u || p) && (d.preventDefault(), d.stopPropagation(), r(p));
    })), i.push(gt(a.inputElement, "blur", () => {
      t.updating || r(!!a.value);
    })), t.inputBox = a, t.toDispose = i, t;
  }
  renderElement(e, t, i) {
    var d;
    i.breakpoint = e, i.type = ((d = this.view.inputBoxData) == null ? void 0 : d.type) || "name";
    const { icon: n, message: s } = oe(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), e, this.labelService);
    i.icon.className = he.asClassName(n), i.icon.title = s || "", i.checkbox.checked = e.enabled, i.checkbox.disabled = !0, i.inputBox.value = e.name || "";
    let a = c("functionBreakpointPlaceholder", "Function to break on"), r = c("functionBreakPointInputAriaLabel", "Type function breakpoint.");
    i.type === "condition" ? (i.inputBox.value = e.condition || "", a = c(
      "functionBreakpointExpressionPlaceholder",
      "Break when expression evaluates to true"
    ), r = c(
      "functionBreakPointExpresionAriaLabel",
      "Type expression. Function breakpoint will break when expression evaluates to true"
    )) : i.type === "hitCount" && (i.inputBox.value = e.hitCondition || "", a = c("functionBreakpointHitCountPlaceholder", "Break when hit count is met"), r = c(
      "functionBreakPointHitCountAriaLabel",
      "Type hit count. Function breakpoint will break when hit count is met."
    )), i.inputBox.setAriaLabel(r), i.inputBox.setPlaceHolder(a), setTimeout(() => {
      i.inputBox.focus(), i.inputBox.select();
    }, 0);
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
};
Ee.ID = "functionbreakpointinput";
let Be = Ee;
const xe = class xe {
  constructor(e, t, i) {
    this.view = e, this.debugService = t, this.contextViewService = i;
  }
  get templateId() {
    return xe.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null), i = [], n = f(e, m(".breakpoint"));
    n.classList.add("exception"), t.checkbox = P(i), f(n, t.checkbox), this.view.breakpointInputFocused.set(!0);
    const s = f(n, m(".inputBoxContainer")), a = new ht(s, this.contextViewService, {
      ariaLabel: c("exceptionBreakpointAriaLabel", "Type exception breakpoint condition"),
      inputBoxStyles: pt
    }), r = (d) => {
      this.view.breakpointInputFocused.set(!1);
      let u = t.breakpoint.condition;
      d && (u = a.value !== "" ? a.value : void 0), this.debugService.setExceptionBreakpointCondition(t.breakpoint, u);
    };
    return i.push(M(a.inputElement, "keydown", (d) => {
      const u = d.equals(9), p = d.equals(3);
      (u || p) && (d.preventDefault(), d.stopPropagation(), r(p));
    })), i.push(gt(a.inputElement, "blur", () => {
      setTimeout(() => {
        r(!0);
      });
    })), t.inputBox = a, t.toDispose = i, t;
  }
  renderElement(e, t, i) {
    const n = e.conditionDescription || c(
      "exceptionBreakpointPlaceholder",
      "Break when expression evaluates to true"
    );
    i.inputBox.setPlaceHolder(n), i.breakpoint = e, i.checkbox.checked = e.enabled, i.checkbox.disabled = !0, i.inputBox.value = e.condition || "", setTimeout(() => {
      i.inputBox.focus(), i.inputBox.select();
    }, 0);
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
};
xe.ID = "exceptionbreakpointinput";
let we = xe;
class Gi {
  constructor(e, t) {
    this.debugService = e, this.labelService = t;
  }
  getWidgetAriaLabel() {
    return c("breakpoints", "Breakpoints");
  }
  getRole() {
    return "checkbox";
  }
  isChecked(e) {
    return e.enabled;
  }
  getAriaLabel(e) {
    if (e instanceof W)
      return e.toString();
    const { message: t } = oe(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), e, this.labelService), i = e.toString();
    return t ? `${i}, ${t}` : i;
  }
}
function Xe(o, e, t, i, n, s) {
  if (o.uri.scheme === q && n.state === 0)
    return Promise.resolve(void 0);
  const a = o.endLineNumber ? {
    startLineNumber: o.lineNumber,
    endLineNumber: o.endLineNumber,
    startColumn: o.column || 1,
    endColumn: o.endColumn || 1073741824
  } : {
    startLineNumber: o.lineNumber,
    startColumn: o.column || 1,
    endLineNumber: o.lineNumber,
    endColumn: o.column || 1073741824
  };
  return s.openEditor({
    resource: o.uri,
    options: {
      preserveFocus: t,
      selection: a,
      revealIfOpened: !0,
      selectionRevealType: 1,
      pinned: i
    }
  }, e ? ot : at);
}
function oe(o, e, t, i) {
  const n = o === 3 || o === 2, s = t instanceof A ? xt : t instanceof D ? yt : t.logMessage ? Pe : Dt;
  if (!t.enabled || !e)
    return {
      icon: s.disabled,
      message: t.logMessage ? c("disabledLogpoint", "Disabled Logpoint") : c("disabledBreakpoint", "Disabled Breakpoint")
    };
  const a = (d) => "message" in t && t.message ? d.concat(", " + t.message) : d;
  if (n && !t.verified)
    return {
      icon: s.unverified,
      message: "message" in t && t.message ? t.message : t.logMessage ? c("unverifiedLogpoint", "Unverified Logpoint") : c("unverifiedBreakpoint", "Unverified Breakpoint"),
      showAdapterUnverifiedMessage: !0
    };
  if (t instanceof A)
    return t.supported ? {
      icon: s.regular,
      message: t.message || c("dataBreakpoint", "Data Breakpoint")
    } : {
      icon: s.unverified,
      message: c(
        "dataBreakpointUnsupported",
        "Data breakpoints not supported by this debug type"
      )
    };
  if (t instanceof D) {
    if (!t.supported)
      return {
        icon: s.unverified,
        message: c(
          "functionBreakpointUnsupported",
          "Function breakpoints not supported by this debug type"
        )
      };
    const d = [];
    return d.push(t.message || c("functionBreakpoint", "Function Breakpoint")), t.condition && d.push(c("expression", "Expression condition: {0}", t.condition)), t.hitCondition && d.push(c("hitCount", "Hit Count: {0}", t.hitCondition)), {
      icon: s.regular,
      message: a(d.join(`
`))
    };
  }
  if (t instanceof N) {
    if (!t.supported)
      return {
        icon: s.unverified,
        message: c(
          "instructionBreakpointUnsupported",
          "Instruction breakpoints not supported by this debug type"
        )
      };
    const d = [];
    return t.message ? d.push(t.message) : t.instructionReference ? d.push(c(
      "instructionBreakpointAtAddress",
      "Instruction breakpoint at address {0}",
      t.instructionReference
    )) : d.push(c("instructionBreakpoint", "Instruction breakpoint")), t.hitCondition && d.push(c("hitCount", "Hit Count: {0}", t.hitCondition)), {
      icon: s.regular,
      message: a(d.join(`
`))
    };
  }
  if (t.logMessage || t.condition || t.hitCondition) {
    const d = [];
    return t.supported ? (t.logMessage && d.push(c("logMessage", "Log Message: {0}", t.logMessage)), t.condition && d.push(c("expression", "Expression condition: {0}", t.condition)), t.hitCondition && d.push(c("hitCount", "Hit Count: {0}", t.hitCondition)), {
      icon: t.logMessage ? Pe.regular : Et.regular,
      message: a(d.join(`
`))
    }) : {
      icon: Vi,
      message: c(
        "breakpointUnsupported",
        "Breakpoints of this type are not supported by the debugger"
      )
    };
  }
  const r = "message" in t && t.message ? t.message : t instanceof w && i ? i.getUriLabel(t.uri) : c("breakpoint", "Breakpoint");
  return {
    icon: s.regular,
    message: r
  };
}
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.addFunctionBreakpointAction",
      title: {
        value: c("addFunctionBreakpoint", "Add Function Breakpoint"),
        original: "Add Function Breakpoint",
        mnemonicTitle: c(
          { key: "miFunctionBreakpoint", comment: ["&& denotes a mnemonic"] },
          "&&Function Breakpoint..."
        )
      },
      f1: !0,
      icon: Pi,
      menu: [{
        id: k.ViewTitle,
        group: "navigation",
        order: 10,
        when: B.equals("view", ee)
      }, {
        id: k.MenubarNewBreakpointMenu,
        group: "1_breakpoints",
        order: 3,
        when: z
      }]
    });
  }
  run(o) {
    o.get(g).addFunctionBreakpoint();
  }
});
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.toggleBreakpointsActivatedAction",
      title: { value: c("activateBreakpoints", "Toggle Activate Breakpoints"), original: "Toggle Activate Breakpoints" },
      f1: !0,
      icon: Hi,
      menu: {
        id: k.ViewTitle,
        group: "navigation",
        order: 20,
        when: B.equals("view", ee)
      }
    });
  }
  run(o) {
    const e = o.get(g);
    e.setBreakpointsActivated(!e.getModel().areBreakpointsActivated());
  }
});
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.removeBreakpoint",
      title: c("removeBreakpoint", "Remove Breakpoint"),
      icon: l.removeClose,
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "3_modification",
        order: 10,
        when: L.notEqualsTo("exceptionBreakpoint")
      }, {
        id: k.DebugBreakpointsContext,
        group: "inline",
        order: 20,
        when: L.notEqualsTo("exceptionBreakpoint")
      }]
    });
  }
  async run(o, e) {
    const t = o.get(g);
    e instanceof w ? await t.removeBreakpoints(e.getId()) : e instanceof D ? await t.removeFunctionBreakpoints(e.getId()) : e instanceof A ? await t.removeDataBreakpoints(e.getId()) : e instanceof N && await t.removeInstructionBreakpoints(e.instructionReference);
  }
});
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.removeAllBreakpoints",
      title: {
        original: "Remove All Breakpoints",
        value: c("removeAllBreakpoints", "Remove All Breakpoints"),
        mnemonicTitle: c(
          { key: "miRemoveAllBreakpoints", comment: ["&& denotes a mnemonic"] },
          "Remove &&All Breakpoints"
        )
      },
      f1: !0,
      icon: Ui,
      menu: [{
        id: k.ViewTitle,
        group: "navigation",
        order: 30,
        when: B.equals("view", ee)
      }, {
        id: k.DebugBreakpointsContext,
        group: "3_modification",
        order: 20,
        when: B.and(Te, L.notEqualsTo("exceptionBreakpoint"))
      }, {
        id: k.MenubarDebugMenu,
        group: "5_breakpoints",
        order: 3,
        when: z
      }]
    });
  }
  run(o) {
    const e = o.get(g);
    e.removeBreakpoints(), e.removeFunctionBreakpoints(), e.removeDataBreakpoints(), e.removeInstructionBreakpoints();
  }
});
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.enableAllBreakpoints",
      title: {
        original: "Enable All Breakpoints",
        value: c("enableAllBreakpoints", "Enable All Breakpoints"),
        mnemonicTitle: c(
          { key: "miEnableAllBreakpoints", comment: ["&& denotes a mnemonic"] },
          "&&Enable All Breakpoints"
        )
      },
      f1: !0,
      precondition: z,
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "z_commands",
        order: 10,
        when: B.and(Te, L.notEqualsTo("exceptionBreakpoint"))
      }, {
        id: k.MenubarDebugMenu,
        group: "5_breakpoints",
        order: 1,
        when: z
      }]
    });
  }
  async run(o) {
    await o.get(g).enableOrDisableBreakpoints(!0);
  }
});
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.disableAllBreakpoints",
      title: {
        original: "Disable All Breakpoints",
        value: c("disableAllBreakpoints", "Disable All Breakpoints"),
        mnemonicTitle: c(
          { key: "miDisableAllBreakpoints", comment: ["&& denotes a mnemonic"] },
          "Disable A&&ll Breakpoints"
        )
      },
      f1: !0,
      precondition: z,
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "z_commands",
        order: 20,
        when: B.and(Te, L.notEqualsTo("exceptionBreakpoint"))
      }, {
        id: k.MenubarDebugMenu,
        group: "5_breakpoints",
        order: 2,
        when: z
      }]
    });
  }
  async run(o) {
    await o.get(g).enableOrDisableBreakpoints(!1);
  }
});
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.reapplyBreakpointsAction",
      title: { value: c("reapplyAllBreakpoints", "Reapply All Breakpoints"), original: "Reapply All Breakpoints" },
      f1: !0,
      precondition: te,
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "z_commands",
        order: 30,
        when: B.and(Te, L.notEqualsTo("exceptionBreakpoint"))
      }]
    });
  }
  async run(o) {
    await o.get(g).setBreakpointsActivated(!0);
  }
});
O(class extends qe {
  constructor() {
    super({
      id: "debug.editBreakpoint",
      viewId: ee,
      title: c("editCondition", "Edit Condition..."),
      icon: l.edit,
      precondition: Ge,
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "navigation",
        order: 10
      }, {
        id: k.DebugBreakpointsContext,
        group: "inline",
        order: 10
      }]
    });
  }
  async runInView(o, e, t) {
    var s;
    const i = o.get(g), n = o.get(R);
    if (t instanceof w) {
      const a = await Xe(t, !1, !1, !0, i, n);
      if (a) {
        const r = a.getControl();
        pe(r) && ((s = r.getContribution(hi)) == null || s.showBreakpointWidget(t.lineNumber, t.column));
      }
    } else if (t instanceof D) {
      const a = o.get(dt), r = [
        new Qe("breakpoint.editCondition", c("editCondition", "Edit Condition..."), void 0, !0, async () => e.renderInputBox({ breakpoint: t, type: "condition" })),
        new Qe("breakpoint.editCondition", c("editHitCount", "Edit Hit Count..."), void 0, !0, async () => e.renderInputBox({ breakpoint: t, type: "hitCount" }))
      ], d = Le.get(t.getId());
      d && a.showContextMenu({
        getActions: () => r,
        getAnchor: () => d,
        onHide: () => F(r)
      });
    } else
      e.renderInputBox({ breakpoint: t, type: "condition" });
  }
});
O(class extends qe {
  constructor() {
    super({
      id: "debug.editFunctionBreakpoint",
      viewId: ee,
      title: c("editBreakpoint", "Edit Function Breakpoint..."),
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "1_breakpoints",
        order: 10,
        when: L.isEqualTo("functionBreakpoint")
      }]
    });
  }
  runInView(o, e, t) {
    e.renderInputBox({ breakpoint: t, type: "name" });
  }
});
O(class extends qe {
  constructor() {
    super({
      id: "debug.editFunctionBreakpointHitCount",
      viewId: ee,
      title: c("editHitCount", "Edit Hit Count..."),
      precondition: Ge,
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "navigation",
        order: 20,
        when: L.isEqualTo("functionBreakpoint")
      }]
    });
  }
  runInView(o, e, t) {
    e.renderInputBox({ breakpoint: t, type: "hitCount" });
  }
});
async function zi(o) {
  const e = o.get(ie), t = o.get(g), i = o.get(R), n = t.getModel().getSessions(!1), s = o.get(Bi), a = o.get(ut), r = o.get(Z), d = new bt(), u = e.createQuickPick();
  d.add(u), u.matchOnLabel = u.matchOnDescription = u.matchOnDetail = u.sortByLabel = !1, u.placeholder = c("moveFocusedView.selectView", "Search loaded scripts by name"), u.items = await nt(u.value, n, i, s, a, r), d.add(u.onDidChangeValue(async () => {
    u.items = await nt(u.value, n, i, s, a, r);
  })), d.add(u.onDidAccept(() => {
    u.selectedItems[0].accept(), u.hide(), d.dispose();
  })), u.show();
}
async function Wi(o, e, t, i, n, s) {
  const a = [];
  return a.push({ type: "separator", label: o.name }), (await o.getLoadedSources()).forEach((d) => {
    const u = Xi(d, e, t, i, n, s);
    u && a.push(u);
  }), a;
}
async function nt(o, e, t, i, n, s) {
  const a = [], r = await Promise.all(e.map(
    (d) => Wi(d, o, t, i, n, s)
  ));
  for (const d of r)
    for (const u of d)
      a.push(u);
  return a;
}
function Xi(o, e, t, i, n, s) {
  const a = s.getUriBasenameLabel(o.uri), r = s.getUriLabel(lt(o.uri)), d = Fe(e, a, !0), u = Fe(e, r, !0);
  if (d || u)
    return {
      label: a,
      description: r === "." ? void 0 : r,
      highlights: { label: d ?? void 0, description: u ?? void 0 },
      iconClasses: wi(i, n, o.uri),
      accept: () => {
        o.available && o.openInEditor(t, { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 });
      }
    };
}
async function ji(o, e) {
  const t = o.get(ie), i = o.get(g), n = o.get(ze), s = o.get(Di), a = new bt(), r = t.createQuickPick();
  a.add(r), r.matchOnLabel = r.matchOnDescription = r.matchOnDetail = r.sortByLabel = !1, r.placeholder = c("moveFocusedView.selectView", "Search debug sessions by name");
  const d = st(r.value, e, i, n, s);
  r.items = d.picks, r.activeItems = d.activeItems, a.add(r.onDidChangeValue(async () => {
    r.items = st(r.value, e, i, n, s).picks;
  })), a.add(r.onDidAccept(() => {
    r.selectedItems[0].accept(), r.hide(), a.dispose();
  })), r.show();
}
function st(o, e, t, i, n) {
  const s = [], a = [], r = t.getViewModel().focusedSession, d = t.getModel().getSessions(!1), u = [];
  d.forEach((b) => {
    b.compact && b.parentSession && a.push(b.parentSession);
  }), d.forEach((b) => {
    const C = a.includes(b);
    if (b.parentSession || s.push({ type: "separator", label: C ? b.name : void 0 }), !C) {
      const E = $i(b, o, t, i);
      E && (s.push(E), b.getId() === (r == null ? void 0 : r.getId()) && u.push(E));
    }
  }), s.length && s.push({ type: "separator" });
  const p = c("workbench.action.debug.startDebug", "Start a New Debug Session");
  return s.push({
    label: `$(plus) ${p}`,
    ariaLabel: p,
    accept: () => n.executeCommand(e)
  }), { picks: s, activeItems: u };
}
function Ji(o) {
  var s;
  const e = o.configuration.name.length ? o.configuration.name : o.name, t = o.compact || (s = o.parentSession) == null ? void 0 : s.configuration.name;
  let i = "", n = "";
  return t && (n = c(
    "workbench.action.debug.spawnFrom",
    "Session {0} spawned from {1}",
    e,
    t
  ), i = t), { label: e, description: i, ariaLabel: n };
}
function $i(o, e, t, i, n) {
  const s = Ji(o), a = Fe(e, s.label, !0);
  if (a)
    return {
      label: s.label,
      description: s.description,
      ariaLabel: s.ariaLabel,
      highlights: { label: a },
      accept: () => {
        t.focusStackFrame(void 0, void 0, o, { explicit: !0 }), i.isViewVisible(de) || i.openView(de, !0);
      }
    };
}
const Is = "debug.addConfiguration", _t = "editor.debug.action.toggleInlineBreakpoint", Yi = "debug.copyStackTrace", Qi = "workbench.action.debug.reverseContinue", Zi = "workbench.action.debug.stepBack", en = "workbench.action.debug.restart", tn = "workbench.action.debug.terminateThread", nn = "workbench.action.debug.stepOver", sn = "workbench.action.debug.stepInto", on = "workbench.action.debug.stepIntoTarget", an = "workbench.action.debug.stepOut", rn = "workbench.action.debug.pause", cn = "workbench.action.debug.disconnect", dn = "workbench.action.debug.disconnectAndSuspend", un = "workbench.action.debug.stop", ln = "workbench.action.debug.restartFrame", hn = "workbench.action.debug.continue", pn = "workbench.debug.action.focusRepl", Tt = "debug.jumpToCursor", gn = "workbench.action.debug.focusProcess", At = "workbench.action.debug.selectandstart", fn = "workbench.action.debug.selectDebugConsole", bn = "workbench.action.debug.selectDebugSession", Cs = "workbench.action.debug.configure", Bs = "workbench.action.debug.start", mn = "debug.renameWatchExpression", Sn = "debug.setWatchExpression", kn = "debug.removeWatchExpression", vn = "workbench.action.debug.nextConsole", In = "workbench.action.debug.prevConsole", Cn = "workbench.action.debug.showLoadedScripts", Bn = "workbench.action.debug.callStackTop", wn = "workbench.action.debug.callStackBottom", Dn = "workbench.action.debug.callStackUp", yn = "workbench.action.debug.callStackDown", Ot = { original: "Debug", value: c("debug", "Debug") }, ws = { value: c("restartDebug", "Restart"), original: "Restart" }, Ds = { value: c("stepOverDebug", "Step Over"), original: "Step Over" }, ys = { value: c("stepIntoDebug", "Step Into"), original: "Step Into" }, Es = { value: c("stepIntoTargetDebug", "Step Into Target"), original: "Step Into Target" }, xs = { value: c("stepOutDebug", "Step Out"), original: "Step Out" }, _s = { value: c("pauseDebug", "Pause"), original: "Pause" }, Ts = { value: c("disconnect", "Disconnect"), original: "Disconnect" }, As = { value: c("disconnectSuspend", "Disconnect and Suspend"), original: "Disconnect and Suspend" }, Os = { value: c("stop", "Stop"), original: "Stop" }, Ns = { value: c("continueDebug", "Continue"), original: "Continue" }, Ls = { value: c("focusSession", "Focus Session"), original: "Focus Session" }, Rs = { value: c("selectAndStartDebugging", "Select and Start Debugging"), original: "Select and Start Debugging" }, Fs = c("openLaunchJson", "Open '{0}'", "launch.json"), Ms = { value: c("nextDebugConsole", "Focus Next Debug Console"), original: "Focus Next Debug Console" }, Vs = { value: c("prevDebugConsole", "Focus Previous Debug Console"), original: "Focus Previous Debug Console" }, Ps = { value: c("openLoadedScript", "Open Loaded Script..."), original: "Open Loaded Script..." }, Us = { value: c("callStackTop", "Navigate to Top of Call Stack"), original: "Navigate to Top of Call Stack" }, Hs = { value: c("callStackBottom", "Navigate to Bottom of Call Stack"), original: "Navigate to Bottom of Call Stack" }, Ks = { value: c("callStackUp", "Navigate Up Call Stack"), original: "Navigate Up Call Stack" }, qs = { value: c("callStackDown", "Navigate Down Call Stack"), original: "Navigate Down Call Stack" }, Gs = { value: c("selectDebugConsole", "Select Debug Console"), original: "Select Debug Console" }, zs = { value: c("selectDebugSession", "Select Debug Session"), original: "Select Debug Session" }, En = "debug ", xn = "debug consoles ";
function _n(o) {
  return o && typeof o.sessionId == "string" && typeof o.threadId == "string";
}
async function y(o, e, t) {
  const i = o.get(g);
  let n;
  if (_n(e)) {
    const s = i.getModel().getSession(e.sessionId);
    s && (n = s.getAllThreads().find((a) => a.getId() === e.threadId));
  } else if (je(e)) {
    const s = i.getModel().getSession(e.sessionId);
    if (s) {
      const a = s.getAllThreads();
      n = a.length > 0 ? a[0] : void 0;
    }
  }
  if (!n && (n = i.getViewModel().focusedThread, !n)) {
    const s = i.getViewModel().focusedSession, a = s ? s.getAllThreads() : void 0;
    n = a && a.length ? a[0] : void 0;
  }
  n && await t(n);
}
function Tn(o) {
  return o && typeof o.sessionId == "string" && typeof o.threadId == "string" && typeof o.frameId == "string";
}
function Nt(o, e) {
  if (Tn(e)) {
    const t = o.getModel().getSession(e.sessionId);
    if (t) {
      const i = t.getAllThreads().find((n) => n.getId() === e.threadId);
      if (i)
        return i.getCallStack().find((n) => n.getId() === e.frameId);
    }
  } else
    return o.getViewModel().focusedStackFrame;
}
function je(o) {
  return o && typeof o.sessionId == "string";
}
async function Lt(o, e) {
  const t = o.get(g), i = o.get(ze), n = t.getModel().getSessions(!0).filter((r) => r.hasSeparateRepl());
  let s = t.getViewModel().focusedSession, a = 0;
  if (n.length > 0 && s) {
    for (; s && !s.hasSeparateRepl(); )
      s = s.parentSession;
    if (s) {
      const r = n.indexOf(s);
      e ? a = r === n.length - 1 ? 0 : r + 1 : a = r === 0 ? n.length - 1 : r - 1;
    }
  }
  await t.focusStackFrame(void 0, void 0, n[a], { explicit: !0 }), i.isViewVisible(de) || await i.openView(de, !0);
}
async function Rt(o, e) {
  const t = o.getViewModel().focusedStackFrame;
  if (t) {
    let i = t.thread.getCallStack(), n = i.findIndex((a) => a.frameId === t.frameId), s;
    if (e) {
      if (n >= i.length - 1)
        if (t.thread.reachedEndOfCallStack) {
          Mt(o);
          return;
        } else
          await o.getModel().fetchCallstack(t.thread, 20), i = t.thread.getCallStack(), n = i.findIndex((a) => a.frameId === t.frameId);
      s = Ue(!0, i, n);
    } else {
      if (n <= 0) {
        Ft(o);
        return;
      }
      s = Ue(!1, i, n);
    }
    s && o.focusStackFrame(s);
  }
}
async function Ft(o) {
  const e = o.getViewModel().focusedThread;
  if (e) {
    await o.getModel().fetchCallstack(e);
    const t = e.getCallStack();
    if (t.length > 0) {
      const i = Ue(!1, t, 0);
      i && o.focusStackFrame(i);
    }
  }
}
function Mt(o) {
  const e = o.getViewModel().focusedThread;
  e && o.focusStackFrame(e.getTopStackFrame());
}
function Ue(o, e, t) {
  t >= e.length ? t = e.length - 1 : t < 0 && (t = 0);
  let i = t, n;
  do
    if (o ? i === e.length - 1 ? i = 0 : i++ : i === 0 ? i = e.length - 1 : i--, n = e[i], !(n.source.presentationHint === "deemphasize" || n.presentationHint === "deemphasize"))
      return n;
  while (i !== t);
}
v.registerCommand({
  id: Yi,
  handler: async (o, e, t) => {
    const i = o.get(yi), n = o.get(Ei), s = o.get(g), a = Nt(s, t);
    if (a) {
      const r = i.getEOL(a.source.uri);
      await n.writeText(a.thread.getCallStack().map((d) => d.toString()).join(r));
    }
  }
});
v.registerCommand({
  id: Qi,
  handler: async (o, e, t) => {
    await y(o, t, (i) => i.reverseContinue());
  }
});
v.registerCommand({
  id: Zi,
  handler: async (o, e, t) => {
    const i = o.get(le);
    Oe.getValue(i) ? await y(o, t, (n) => n.stepBack("instruction")) : await y(o, t, (n) => n.stepBack());
  }
});
v.registerCommand({
  id: tn,
  handler: async (o, e, t) => {
    await y(o, t, (i) => i.terminate());
  }
});
v.registerCommand({
  id: Tt,
  handler: async (o) => {
    const t = o.get(g).getViewModel().focusedStackFrame, n = o.get(R).activeTextEditorControl, s = o.get(mt), a = o.get(ie);
    if (t && pe(n) && n.hasModel()) {
      const r = n.getPosition(), d = n.getModel().uri, u = t.thread.session.getSourceForUri(d);
      if (u) {
        const p = await t.thread.session.gotoTargets(u.raw, r.lineNumber, r.column), b = p == null ? void 0 : p.body.targets;
        if (b && b.length) {
          let C = b[0].id;
          if (b.length > 1) {
            const E = b.map((H) => ({ label: H.label, _id: H.id })), U = await a.pick(E, { placeHolder: c("chooseLocation", "Choose the specific location") });
            if (!U)
              return;
            C = U._id;
          }
          return await t.thread.session.goto(t.thread.threadId, C).catch((E) => s.warn(E));
        }
      }
    }
    return s.warn(c(
      "noExecutableCode",
      "No executable code is associated at the current cursor position."
    ));
  }
});
v.registerCommand({
  id: Bn,
  handler: async (o, e, t) => {
    const i = o.get(g);
    Mt(i);
  }
});
v.registerCommand({
  id: wn,
  handler: async (o, e, t) => {
    const i = o.get(g);
    await Ft(i);
  }
});
v.registerCommand({
  id: Dn,
  handler: async (o, e, t) => {
    const i = o.get(g);
    Rt(i, !1);
  }
});
v.registerCommand({
  id: yn,
  handler: async (o, e, t) => {
    const i = o.get(g);
    Rt(i, !0);
  }
});
St.appendMenuItem(k.EditorContext, {
  command: {
    id: Tt,
    title: c("jumpToCursor", "Jump to Cursor"),
    category: Ot
  },
  when: B.and(xi, Ne.editorTextFocus),
  group: "debug",
  order: 3
});
I.registerCommandAndKeybindingRule({
  id: vn,
  weight: 200 + 1,
  when: kt,
  primary: 2060,
  mac: { primary: 3166 },
  handler: async (o, e, t) => {
    Lt(o, !0);
  }
});
I.registerCommandAndKeybindingRule({
  id: In,
  weight: 200 + 1,
  when: kt,
  primary: 2059,
  mac: { primary: 3164 },
  handler: async (o, e, t) => {
    Lt(o, !1);
  }
});
I.registerCommandAndKeybindingRule({
  id: en,
  weight: 200,
  primary: 3135,
  when: te,
  handler: async (o, e, t) => {
    const i = o.get(g), n = o.get(He);
    let s;
    if (je(t) ? s = i.getModel().getSession(t.sessionId) : s = i.getViewModel().focusedSession, s) {
      const a = n.getValue("debug").showSubSessionsInToolBar;
      for (; !a && s.lifecycleManagedByParent && s.parentSession; )
        s = s.parentSession;
      s.removeReplExpressions(), await i.restartSession(s);
    } else {
      const { launch: a, name: r } = i.getConfigurationManager().selectedConfiguration;
      await i.startDebugging(a, r, { noDebug: !1, startedByUser: !0 });
    }
  }
});
I.registerCommandAndKeybindingRule({
  id: nn,
  weight: 200,
  primary: 68,
  secondary: vt ? [580] : void 0,
  when: ne.isEqualTo("stopped"),
  handler: async (o, e, t) => {
    const i = o.get(le);
    Oe.getValue(i) ? await y(o, t, (n) => n.next("instruction")) : await y(o, t, (n) => n.next());
  }
});
const Vt = vt && Li ? 581 : 69;
I.registerCommandAndKeybindingRule({
  id: sn,
  weight: 200 + 10,
  primary: Vt,
  when: ne.notEqualsTo("inactive"),
  handler: async (o, e, t) => {
    const i = o.get(le);
    Oe.getValue(i) ? await y(o, t, (n) => n.stepIn("instruction")) : await y(o, t, (n) => n.stepIn());
  }
});
I.registerCommandAndKeybindingRule({
  id: an,
  weight: 200,
  primary: 1093,
  when: ne.isEqualTo("stopped"),
  handler: async (o, e, t) => {
    const i = o.get(le);
    Oe.getValue(i) ? await y(o, t, (n) => n.stepOut("instruction")) : await y(o, t, (n) => n.stepOut());
  }
});
I.registerCommandAndKeybindingRule({
  id: rn,
  weight: 200 + 2,
  primary: 64,
  when: ne.isEqualTo("running"),
  handler: async (o, e, t) => {
    await y(o, t, (i) => i.pause());
  }
});
I.registerCommandAndKeybindingRule({
  id: on,
  primary: Vt | 2048,
  when: B.and(_i, te, ne.isEqualTo("stopped")),
  weight: 200,
  handler: async (o, e, t) => {
    const i = o.get(ie), n = o.get(g), s = n.getViewModel().focusedSession, a = n.getViewModel().focusedStackFrame;
    if (!a || !s)
      return;
    const r = await o.get(R).openEditor({
      resource: a.source.uri,
      options: { revealIfOpened: !0 }
    });
    let d;
    if (r) {
      const p = r == null ? void 0 : r.getControl();
      pe(p) && (d = p);
    }
    const u = i.createQuickPick();
    u.busy = !0, u.show(), u.onDidChangeActive(([p]) => {
      d && p && p.target.line !== void 0 && (d.revealLineInCenterIfOutsideViewport(p.target.line), d.setSelection({
        startLineNumber: p.target.line,
        startColumn: p.target.column || 1,
        endLineNumber: p.target.endLine || p.target.line,
        endColumn: p.target.endColumn || p.target.column || 1
      }));
    }), u.onDidAccept(() => {
      u.activeItems.length && s.stepIn(a.thread.threadId, u.activeItems[0].target.id);
    }), u.onDidHide(() => u.dispose()), s.stepInTargets(a.frameId).then((p) => {
      u.busy = !1, p != null && p.length ? u.items = p == null ? void 0 : p.map((b) => ({ target: b, label: b.label })) : u.placeholder = c("editor.debug.action.stepIntoTargets.none", "No step targets available");
    });
  }
});
async function Je(o, e, t, i, n) {
  const s = o.get(g);
  let a;
  je(t) ? a = s.getModel().getSession(t.sessionId) : a = s.getViewModel().focusedSession;
  const d = o.get(He).getValue("debug").showSubSessionsInToolBar;
  for (; !d && a && a.lifecycleManagedByParent && a.parentSession; )
    a = a.parentSession;
  await s.stopSession(a, i, n);
}
I.registerCommandAndKeybindingRule({
  id: cn,
  weight: 200,
  primary: 1087,
  when: B.and(It, te),
  handler: (o, e, t) => Je(o, e, t, !0)
});
v.registerCommand({
  id: dn,
  handler: (o, e, t) => Je(o, e, t, !0, !0)
});
I.registerCommandAndKeybindingRule({
  id: un,
  weight: 200,
  primary: 1087,
  when: B.and(It.toNegated(), te),
  handler: (o, e, t) => Je(o, e, t, !1)
});
v.registerCommand({
  id: ln,
  handler: async (o, e, t) => {
    const i = o.get(g), n = o.get(mt), s = Nt(i, t);
    if (s)
      try {
        await s.restart();
      } catch (a) {
        n.error(a);
      }
  }
});
I.registerCommandAndKeybindingRule({
  id: hn,
  weight: 200 + 10,
  primary: 63,
  when: ne.isEqualTo("stopped"),
  handler: async (o, e, t) => {
    await y(o, t, (i) => i.continue());
  }
});
v.registerCommand({
  id: Cn,
  handler: async (o) => {
    await zi(o);
  }
});
v.registerCommand({
  id: pn,
  handler: async (o) => {
    await o.get(ze).openView(de, !0);
  }
});
v.registerCommand({
  id: "debug.startFromConfig",
  handler: async (o, e) => {
    await o.get(g).startDebugging(void 0, e);
  }
});
v.registerCommand({
  id: gn,
  handler: async (o, e) => {
    const t = o.get(g), i = o.get(R), n = t.getModel().getSessions().find((a) => a.parentSession === e && a.state === 2);
    n && e.state !== 2 && (e = n), await t.focusStackFrame(void 0, void 0, e, { explicit: !0 });
    const s = t.getViewModel().focusedStackFrame;
    s && await s.openInEditor(i, !0);
  }
});
v.registerCommand({
  id: At,
  handler: async (o) => {
    o.get(ie).quickAccess.show(En);
  }
});
v.registerCommand({
  id: fn,
  handler: async (o) => {
    o.get(ie).quickAccess.show(xn);
  }
});
v.registerCommand({
  id: bn,
  handler: async (o) => {
    ji(o, At);
  }
});
I.registerCommandAndKeybindingRule({
  id: "debug.toggleBreakpoint",
  weight: 200 + 5,
  when: B.and(Ae, Ti.toNegated()),
  primary: 10,
  handler: (o) => {
    const e = o.get(se), t = o.get(g), i = e.lastFocusedList;
    if (i instanceof We) {
      const n = i.getFocusedElements();
      n && n.length && t.enableOrDisableBreakpoints(!n[0].enabled, n[0]);
    }
  }
});
I.registerCommandAndKeybindingRule({
  id: "debug.enableOrDisableBreakpoint",
  weight: 200,
  primary: void 0,
  when: Ne.editorTextFocus,
  handler: (o) => {
    const e = o.get(g), i = o.get(R).activeTextEditorControl;
    if (pe(i)) {
      const n = i.getModel();
      if (n) {
        const s = i.getPosition();
        if (s) {
          const a = e.getModel().getBreakpoints({ uri: n.uri, lineNumber: s.lineNumber });
          a.length && e.enableOrDisableBreakpoints(!a[0].enabled, a[0]);
        }
      }
    }
  }
});
I.registerCommandAndKeybindingRule({
  id: mn,
  weight: 200 + 5,
  when: Ct,
  primary: 60,
  mac: { primary: 3 },
  handler: (o, e) => {
    const t = o.get(g);
    if (!(e instanceof _)) {
      const n = o.get(se).lastFocusedList;
      if (n) {
        const s = n.getFocus();
        Array.isArray(s) && s[0] instanceof _ && (e = s[0]);
      }
    }
    e instanceof _ && t.getViewModel().setSelectedExpression(e, !1);
  }
});
v.registerCommand({
  id: Sn,
  handler: async (o, e) => {
    const t = o.get(g);
    (e instanceof _ || e instanceof K) && t.getViewModel().setSelectedExpression(e, !0);
  }
});
I.registerCommandAndKeybindingRule({
  id: "debug.setVariable",
  weight: 200 + 5,
  when: Ai,
  primary: 60,
  mac: { primary: 3 },
  handler: (o) => {
    const e = o.get(se), t = o.get(g), i = e.lastFocusedList;
    if (i) {
      const n = i.getFocus();
      Array.isArray(n) && n[0] instanceof K && t.getViewModel().setSelectedExpression(n[0], !1);
    }
  }
});
I.registerCommandAndKeybindingRule({
  id: kn,
  weight: 200,
  when: B.and(Ct, Oi.toNegated()),
  primary: 20,
  mac: { primary: 2049 },
  handler: (o, e) => {
    const t = o.get(g);
    if (e instanceof _) {
      t.removeWatchExpressions(e.getId());
      return;
    }
    const n = o.get(se).lastFocusedList;
    if (n) {
      let s = n.getFocus();
      if (Array.isArray(s) && s[0] instanceof _) {
        const a = n.getSelection();
        a && a.indexOf(s[0]) >= 0 && (s = a), s.forEach((r) => t.removeWatchExpressions(r.getId()));
      }
    }
  }
});
I.registerCommandAndKeybindingRule({
  id: "debug.removeBreakpoint",
  weight: 200,
  when: B.and(Ae, ft.toNegated()),
  primary: 20,
  mac: { primary: 2049 },
  handler: (o) => {
    const e = o.get(se), t = o.get(g), i = e.lastFocusedList;
    if (i instanceof We) {
      const n = i.getFocusedElements(), s = n.length ? n[0] : void 0;
      s instanceof w ? t.removeBreakpoints(s.getId()) : s instanceof D ? t.removeFunctionBreakpoints(s.getId()) : s instanceof A && t.removeDataBreakpoints(s.getId());
    }
  }
});
const An = (o) => {
  const e = o.get(g), i = o.get(R).activeTextEditorControl;
  if (pe(i)) {
    const n = i.getPosition();
    if (n && i.hasModel() && e.canSetBreakpointsIn(i.getModel())) {
      const s = i.getModel().uri;
      e.getModel().getBreakpoints({ lineNumber: n.lineNumber, uri: s }).some(
        (r) => r.sessionAgnosticData.column === n.column || !r.column && n.column <= 1
      ) || e.addBreakpoints(s, [{ lineNumber: n.lineNumber, column: n.column > 1 ? n.column : void 0 }]);
    }
  }
};
I.registerCommandAndKeybindingRule({
  weight: 200,
  primary: 1091,
  when: Ne.editorTextFocus,
  id: _t,
  handler: An
});
St.appendMenuItem(k.EditorContext, {
  command: {
    id: _t,
    title: c("addInlineBreakpoint", "Add Inline Breakpoint"),
    category: Ot
  },
  when: B.and(te, Ni.toNegated(), Ne.editorTextFocus),
  group: "debug",
  order: 1
});
I.registerCommandAndKeybindingRule({
  id: "debug.openBreakpointToSide",
  weight: 200,
  when: Ae,
  primary: 2051,
  secondary: [515],
  handler: (o) => {
    const t = o.get(se).lastFocusedList;
    if (t instanceof We) {
      const i = t.getFocusedElements();
      if (i.length && i[0] instanceof w)
        return Xe(i[0], !0, !1, !0, o.get(g), o.get(R));
    }
  }
});
export {
  As as $,
  Is as A,
  w as B,
  Ns as C,
  Cs as D,
  ue as E,
  D as F,
  hn as G,
  rn as H,
  N as I,
  cn as J,
  Ts as K,
  Os as L,
  Fn as M,
  un as N,
  Ds as O,
  _s as P,
  nn as Q,
  ys as R,
  Nn as S,
  Ln as T,
  sn as U,
  K as V,
  xs as W,
  an as X,
  Zi as Y,
  Qi as Z,
  dn as _,
  Fs as a,
  ks as a$,
  $n as a0,
  gn as a1,
  ws as a2,
  en as a3,
  Ls as a4,
  hs as a5,
  Fi as a6,
  Mn as a7,
  xn as a8,
  At as a9,
  Dn as aA,
  qs as aB,
  yn as aC,
  ln as aD,
  Yi as aE,
  mn as aF,
  Sn as aG,
  kn as aH,
  cs as aI,
  Pn as aJ,
  Un as aK,
  Hn as aL,
  Kn as aM,
  qn as aN,
  Gn as aO,
  it as aP,
  zn as aQ,
  Ot as aR,
  Ms as aS,
  vn as aT,
  Vs as aU,
  In as aV,
  Ps as aW,
  Cn as aX,
  Gs as aY,
  zs as aZ,
  bn as a_,
  Xe as aa,
  Rn as ab,
  Ri as ac,
  wt as ad,
  En as ae,
  ls as af,
  Bs as ag,
  Bt as ah,
  ms as ai,
  Ss as aj,
  ps as ak,
  bs as al,
  gs as am,
  fn as an,
  tn as ao,
  Es as ap,
  on as aq,
  pn as ar,
  Tt as as,
  _t as at,
  Rs as au,
  Us as av,
  Bn as aw,
  Hs as ax,
  wn as ay,
  Ks as az,
  W as b,
  fs as b0,
  A as c,
  us as d,
  _ as e,
  et as f,
  me as g,
  Wn as h,
  Xn as i,
  Vi as j,
  Dt as k,
  Jn as l,
  jn as m,
  oe as n,
  ds as o,
  os as p,
  Qn as q,
  Zn as r,
  es as s,
  Yn as t,
  ts as u,
  is as v,
  ns as w,
  as as x,
  rs as y,
  ss as z
};
