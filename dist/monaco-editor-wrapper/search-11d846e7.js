import { _ as B, a as g, I as Pe, cP as M, aI as st, aX as Hi, ah as qs, g as Et, h as qi, D as se, t as Ks, av as at, rE as fs, jT as wi, yr as rn, f2 as nn, qc as on, ys as an, S as H, yt as ze, bG as Ge, dq as Ot, dr as Ss, yu as cn, yv as ln, yw as hn, yx as un, yy as dn, yz as gn, yA as pn, e as N, b as Jt, bE as ht, yB as Zt, yC as Ki, yD as fn, B as l, yE as Sn, fg as mn, yF as F, cJ as Qi, l5 as vn, hh as le, yG as fe, yH as L, l3 as yn, f as ei, cQ as wn, bD as he, yI as bn, yJ as xn, n as ti, p as In, e7 as En, t2 as Ui, z as rt, yK as Cn, jn as Qs, yL as Us, yM as ms, yN as zs, hd as li, yO as hi, au as z, bi as A, tx as We, dj as ft, dv as ii, cx as zi, aL as V, gi as $s, c3 as Q, rO as Gs, bB as si, a9 as ri, ae as ni, bF as $i, aa as nt, yP as ct, m3 as kn, xb as Rn, ws as Fn, bS as Pn, c9 as $e, yQ as js, yR as Xs, L as ut, t3 as Tn, yS as An, kr as vs, yT as Mn, yU as _n, yV as Gi, yW as ys, yX as Ee, w as Ae, o as Wn, yY as Ln, yZ as On, y_ as Dn, y$ as ws, z0 as ui, z1 as bs, z2 as ji, z3 as Nn, mk as xs, z4 as Bn, z5 as Vn, U as Le, kl as Is, eh as Hn, z6 as Ys, bC as ue, eC as Js, an as qn, jx as Zs, ls as Xi, cS as Kn, z7 as Es, bJ as Qn, N as Me, hM as Yi, b7 as er, E as U, uu as Un, kG as bi, Z as xi, ag as J, ad as Ct, ij as Ji, ik as kt, z8 as oe, z9 as zn, za as X, b9 as tr, $ as k, jf as $n, H as v, zb as Gn, zc as ir, eW as Cs, je as jn, aH as O, zd as _t, bK as Tt, tN as sr, tO as rr, u as Rt, ze as Zi, aG as P, at as Dt, zf as Ii, zg as Xn, ab as es, aZ as Yn, p3 as Jn, zh as Zn, aR as eo, aP as nr, b8 as or, bd as to, kF as io, j4 as ks, kI as Oe, vB as so, oF as ro, kH as Wt, zi as no, cF as ts, cO as oi, bV as ar, bf as ai, bx as oo, aE as y, zj as ao, fS as R, zk as ye, m as is, j2 as di, zl as co, lv as lo, iS as ss, pM as ho, fb as cr, zm as uo, q_ as go, ao as po, f0 as fo, dy as lr, rh as hr, hR as ur, hT as So, zn as Nt, bc as mo, zo as dr, zp as pe, G as gi, a0 as me, b3 as ke, a2 as ve, b4 as St, vO as pi, zq as Rs, zr as ci, y as Fs, b6 as gr, x as Ps, dg as vo, tJ as yo, zs as wo, zt as bo, zu as Ei, i6 as Re, kP as ot, hQ as fi, zv as xo, gj as Io, ut as Eo, iz as Ci, l as Co, bP as ko, zw as Ro, zx as Fo, d7 as Lt, mf as ki, jb as Po, zy as To, cR as Ao, bW as Ft, af as Mo, bU as _o, zz as rs, zA as Wo, ai as w, aj as b, e0 as Lo, aK as Oo, fC as pr, ga as Do, fE as No, fF as Ri, gw as Bo, dA as Vo, fD as Ho, zB as qo, zC as fr, zD as Sr, zE as mr, zF as Ko, wC as Qo, zG as dt, cZ as Uo, dz as zo, ar as vr, zH as Ts, k as De, aA as $o, mt as Go, zI as jo, zJ as Xo, hY as Yo, ki as Jo, bz as yr, zK as Zo, jA as ea, eS as ta, zL as ia, uZ as sa, zM as ra, uE as na, ph as oa, sx as gt, zN as aa, v as ca, d8 as la, sC as ha, sP as At, eT as ua, j5 as da, dD as ga, zO as As, j1 as pa, e4 as fa, jU as Sa, zP as ma } from "./index-4b7b8e94.js";
import { ae as va } from "./debugCommands-5995116a.js";
import { b as ya, f as wa } from "./quickPickPin-aab7c07e.js";
let Fi = class extends se {
  constructor(e, t, i, s, r, n, a) {
    super(), this.modelService = e, this.editorService = t, this.telemetryService = i, this.logService = s, this.extensionService = r, this.fileService = n, this.uriIdentityService = a, this.fileSearchProviders = /* @__PURE__ */ new Map(), this.textSearchProviders = /* @__PURE__ */ new Map(), this.deferredFileSearchesByScheme = /* @__PURE__ */ new Map(), this.deferredTextSearchesByScheme = /* @__PURE__ */ new Map(), this.loggedSchemesMissingProviders = /* @__PURE__ */ new Set();
  }
  registerSearchResultProvider(e, t, i) {
    let s, r;
    if (t === 0)
      s = this.fileSearchProviders, r = this.deferredFileSearchesByScheme;
    else if (t === 1)
      s = this.textSearchProviders, r = this.deferredTextSearchesByScheme;
    else
      throw new Error("Unknown SearchProviderType");
    return s.set(e, i), r.has(e) && (r.get(e).complete(i), r.delete(e)), Ks(() => {
      s.delete(e);
    });
  }
  async textSearch(e, t, i, s) {
    const r = this.getLocalResults(e);
    i && at([...r.results.values()]).forEach(i);
    const n = (c) => {
      dn(c) ? !r.results.has(c.resource) && !(s && s.has(c.resource)) && i && i(c) : i && i(c), gn(c) && this.logService.debug("SearchService#search", c.message);
    }, a = await this.doSearch(e, t, n);
    return {
      ...a,
      limitHit: a.limitHit || r.limitHit,
      results: [...a.results, ...at([...r.results.values()])]
    };
  }
  fileSearch(e, t) {
    return this.doSearch(e, t);
  }
  doSearch(e, t, i) {
    this.logService.trace("SearchService#search", JSON.stringify(e));
    const s = this.getSchemesInQuery(e), r = [Promise.resolve(null)];
    s.forEach((a) => r.push(this.extensionService.activateByEvent(`onSearch:${a}`))), r.push(this.extensionService.activateByEvent("onSearch:file"));
    const n = (async () => {
      if (await Promise.all(r), await this.extensionService.whenInstalledExtensionsRegistered(), t && t.isCancellationRequested)
        return Promise.reject(new fs());
      const a = (u) => {
        t && t.isCancellationRequested || i == null || i(u);
      }, c = await Promise.all(e.folderQueries.map((u) => this.fileService.exists(u.folder)));
      e.folderQueries = e.folderQueries.filter((u, d) => c[d]);
      let h = await this.searchWithProviders(e, a, t);
      return h = at(h), h.length ? {
        limitHit: h[0] && h[0].limitHit,
        stats: h[0].stats,
        messages: at(wi(h.map((u) => u.messages))).filter(rn((u) => u.type + u.text + u.trusted)),
        results: wi(h.map((u) => u.results))
      } : {
        limitHit: !1,
        results: [],
        messages: []
      };
    })();
    return new Promise((a, c) => {
      t && t.onCancellationRequested(() => {
        c(new fs());
      }), n.then(a, c);
    });
  }
  getSchemesInQuery(e) {
    var i, s;
    const t = /* @__PURE__ */ new Set();
    return (i = e.folderQueries) == null || i.forEach((r) => t.add(r.folder.scheme)), (s = e.extraFileResources) == null || s.forEach((r) => t.add(r.scheme)), t;
  }
  async waitForProvider(e, t) {
    const i = e === 1 ? this.deferredFileSearchesByScheme : this.deferredTextSearchesByScheme;
    if (i.has(t))
      return i.get(t).p;
    {
      const s = new nn();
      return i.set(t, s), s.p;
    }
  }
  async searchWithProviders(e, t, i) {
    const s = on.create(!1), r = [], n = this.groupFolderQueriesByScheme(e), a = [...n.keys()].some((c) => e.type === 1 ? this.fileSearchProviders.has(c) : this.textSearchProviders.has(c));
    return await Promise.all([...n.keys()].map(async (c) => {
      const h = n.get(c);
      let u = e.type === 1 ? this.fileSearchProviders.get(c) : this.textSearchProviders.get(c);
      if (!u)
        if (a) {
          this.loggedSchemesMissingProviders.has(c) || (this.logService.warn(`No search provider registered for scheme: ${c}. Another scheme has a provider, not waiting for ${c}`), this.loggedSchemesMissingProviders.add(c));
          return;
        } else
          this.loggedSchemesMissingProviders.has(c) || (this.logService.warn(`No search provider registered for scheme: ${c}, waiting`), this.loggedSchemesMissingProviders.add(c)), u = await this.waitForProvider(e.type, c);
      const d = {
        ...e,
        folderQueries: h
      };
      r.push(e.type === 1 ? u.fileSearch(d, i) : u.textSearch(d, t, i));
    })), Promise.all(r).then((c) => {
      const h = s.elapsed();
      return this.logService.trace(`SearchService#search: ${h}ms`), c.forEach((u) => {
        this.sendTelemetry(e, h, u);
      }), c;
    }, (c) => {
      const h = s.elapsed();
      this.logService.trace(`SearchService#search: ${h}ms`);
      const u = an(c);
      throw this.logService.trace(`SearchService#searchError: ${u.message}`), this.sendTelemetry(e, h, void 0, u), u;
    });
  }
  groupFolderQueriesByScheme(e) {
    const t = /* @__PURE__ */ new Map();
    return e.folderQueries.forEach((i) => {
      const s = t.get(i.folder.scheme) || [];
      s.push(i), t.set(i.folder.scheme, s);
    }), t;
  }
  sendTelemetry(e, t, i, s) {
    const r = e.folderQueries.every((c) => c.folder.scheme === H.file), n = e.folderQueries.every((c) => c.folder.scheme !== H.file), a = r ? H.file : n ? "other" : "mixed";
    if (e.type === 1 && i && i.stats) {
      const c = i.stats;
      if (c.fromCache) {
        const h = c.detailStats;
        this.telemetryService.publicLog2("cachedSearchComplete", {
          reason: e._reason,
          resultCount: c.resultCount,
          workspaceFolderCount: e.folderQueries.length,
          endToEndTime: t,
          sortingTime: c.sortingTime,
          cacheWasResolved: h.cacheWasResolved,
          cacheLookupTime: h.cacheLookupTime,
          cacheFilterTime: h.cacheFilterTime,
          cacheEntryCount: h.cacheEntryCount,
          scheme: a
        });
      } else {
        const h = c.detailStats;
        this.telemetryService.publicLog2("searchComplete", {
          reason: e._reason,
          resultCount: c.resultCount,
          workspaceFolderCount: e.folderQueries.length,
          endToEndTime: t,
          sortingTime: c.sortingTime,
          fileWalkTime: h.fileWalkTime,
          directoriesWalked: h.directoriesWalked,
          filesWalked: h.filesWalked,
          cmdTime: h.cmdTime,
          cmdResultCount: h.cmdResultCount,
          scheme: a
        });
      }
    } else if (e.type === 2) {
      let c;
      s && (c = s.code === ze.regexParseError ? "regex" : s.code === ze.unknownEncoding ? "encoding" : s.code === ze.globParseError ? "glob" : s.code === ze.invalidLiteral ? "literal" : s.code === ze.other ? "other" : s.code === ze.canceled ? "canceled" : "unknown"), this.telemetryService.publicLog2("textSearchComplete", {
        reason: e._reason,
        workspaceFolderCount: e.folderQueries.length,
        endToEndTime: t,
        scheme: a,
        error: c
      });
    }
  }
  getLocalResults(e) {
    const t = new Ge((s) => this.uriIdentityService.extUri.getComparisonKey(s));
    let i = !1;
    if (e.type === 2) {
      const s = new Ge();
      for (const n of this.editorService.editors) {
        const a = Ot.getCanonicalUri(n, { supportSideBySide: Ss.PRIMARY }), c = Ot.getOriginalUri(n, { supportSideBySide: Ss.PRIMARY });
        a && s.set(a, c ?? a);
      }
      this.modelService.getModels().forEach((n) => {
        const a = n.uri;
        if (!a || i)
          return;
        const c = s.get(a);
        if (!c || n.getLanguageId() === "search-result" && !(e.includePattern && e.includePattern["**/*.code-search"]) || c.scheme !== H.untitled && !this.fileService.hasProvider(c) || c.scheme === "git" || !this.matches(c, e))
          return;
        const h = cn(e.maxResults) ? e.maxResults + 1 : Number.MAX_SAFE_INTEGER;
        let u = n.findMatches(e.contentPattern.pattern, !1, !!e.contentPattern.isRegExp, !!e.contentPattern.isCaseSensitive, e.contentPattern.isWordMatch ? e.contentPattern.wordSeparators : null, !1, h);
        if (u.length) {
          h && u.length >= h && (i = !0, u = u.slice(0, h - 1));
          const d = new pn(c);
          t.set(c, d);
          const f = ln(u, n, e.previewOptions);
          d.results = hn(f, n, e);
        } else
          t.set(c, null);
      });
    }
    return {
      results: t,
      limitHit: i
    };
  }
  matches(e, t) {
    return un(t, e.fsPath);
  }
  async clearCache(e) {
    const t = Array.from(this.fileSearchProviders.values()).map((i) => i && i.clearCache(e));
    await Promise.all(t);
  }
};
Fi = B([
  g(0, Pe),
  g(1, M),
  g(2, st),
  g(3, Hi),
  g(4, qs),
  g(5, Et),
  g(6, qi)
], Fi);
const wr = "replacePreview", Ms = (o) => o.with({ scheme: H.internal, fragment: wr, query: JSON.stringify({ scheme: o.scheme }) }), ba = (o) => o.with({ scheme: JSON.parse(o.query).scheme, fragment: "", query: "" });
let Bt = class {
  constructor(e, t) {
    this.instantiationService = e, this.textModelResolverService = t, this.textModelResolverService.registerTextModelContentProvider(H.internal, this);
  }
  provideTextContent(e) {
    return e.fragment === wr ? this.instantiationService.createInstance(Pi).resolve(e) : null;
  }
};
Bt = B([
  g(0, N),
  g(1, Jt)
], Bt);
let Pi = class extends se {
  constructor(e, t, i, s, r) {
    super(), this.modelService = e, this.languageService = t, this.textModelResolverService = i, this.replaceService = s, this.searchWorkbenchService = r;
  }
  async resolve(e) {
    const t = ba(e), i = this.searchWorkbenchService.searchModel.searchResult.matches().filter((c) => c.resource.toString() === t.toString())[0], r = this._register(await this.textModelResolverService.createModelReference(t)).object.textEditorModel, n = r.getLanguageId(), a = this.modelService.createModel(xn(r.createSnapshot()), this.languageService.createById(n), e);
    return this._register(i.onChange(({ forceUpdateModel: c }) => this.update(r, a, i, c))), this._register(this.searchWorkbenchService.searchModel.onReplaceTermChanged(() => this.update(r, a, i))), this._register(i.onDispose(() => a.dispose())), this._register(a.onWillDispose(() => this.dispose())), this._register(r.onWillDispose(() => this.dispose())), a;
  }
  update(e, t, i, s = !1) {
    !e.isDisposed() && !t.isDisposed() && this.replaceService.updateReplacePreview(i, s);
  }
};
Pi = B([
  g(0, Pe),
  g(1, ht),
  g(2, Jt),
  g(3, Zt),
  g(4, Ki)
], Pi);
var Ve;
let Ti = (Ve = class {
  constructor(e, t, i, s, r, n) {
    this.textFileService = e, this.editorService = t, this.textModelResolverService = i, this.bulkEditorService = s, this.labelService = r, this.notebookEditorModelResolverService = n;
  }
  async replace(e, t = void 0, i = null) {
    const s = this.createEdits(e, i);
    await this.bulkEditorService.apply(s, { progress: t });
    const r = s.map(async (n) => {
      var a, c;
      if (n.resource.scheme === H.vscodeNotebookCell) {
        const h = (a = Sn.parse(n.resource)) == null ? void 0 : a.notebook;
        if (h) {
          let u;
          try {
            u = await this.notebookEditorModelResolverService.resolve(h), await u.object.save({ source: Ve.REPLACE_SAVE_SOURCE });
          } finally {
            u == null || u.dispose();
          }
        }
        return;
      } else
        return (c = this.textFileService.files.get(n.resource)) == null ? void 0 : c.save({ source: Ve.REPLACE_SAVE_SOURCE });
    });
    return mn.settled(r);
  }
  async openReplacePreview(e, t, i, s) {
    const r = e instanceof F ? e.parent() : e, n = await this.editorService.openEditor({
      original: { resource: r.resource },
      modified: { resource: Ms(r.resource) },
      label: l(
        "fileReplaceChanges",
        "{0} ↔ {1} (Replace Preview)",
        r.name(),
        r.name()
      ),
      description: this.labelService.getUriLabel(Qi(r.resource), { relative: !0 }),
      options: {
        preserveFocus: t,
        pinned: s,
        revealIfVisible: !0
      }
    }), a = n == null ? void 0 : n.input, c = r.onDispose(() => {
      a == null || a.dispose(), c.dispose();
    });
    if (await this.updateReplacePreview(r), n) {
      const h = n.getControl();
      e instanceof F && h && h.revealLineInCenter(e.range().startLineNumber, 1);
    }
  }
  async updateReplacePreview(e, t = !1) {
    const i = Ms(e.resource), [s, r] = await Promise.all([this.textModelResolverService.createModelReference(e.resource), this.textModelResolverService.createModelReference(i)]), n = s.object.textEditorModel, a = r.object.textEditorModel;
    try {
      n && a && (t ? a.setValue(n.getValue()) : a.undo(), this.applyEditsToPreview(e, a));
    } finally {
      s.dispose(), r.dispose();
    }
  }
  applyEditsToPreview(e, t) {
    const i = this.createEdits(e, t.uri), s = [];
    for (const r of i)
      s.push(vn.replaceMove(le.lift(r.textEdit.range), r.textEdit.text));
    t.pushEditOperations([], s.sort((r, n) => le.compareRangesUsingStarts(r.range, n.range)), () => []);
  }
  createEdits(e, t = null) {
    const i = [];
    if (e instanceof F)
      if (e instanceof fe) {
        if (!e.isWebviewMatch()) {
          const s = e;
          i.push(this.createEdit(s, s.replaceString, s.cell.uri));
        }
      } else {
        const s = e;
        i.push(this.createEdit(s, s.replaceString, t));
      }
    return e instanceof L && (e = [e]), e instanceof Array && e.forEach((s) => {
      const r = s;
      r.count() > 0 && i.push(...r.matches().flatMap((n) => this.createEdits(n, t)));
    }), i;
  }
  createEdit(e, t, i = null) {
    const s = e.parent();
    return new yn(
      i ?? s.resource,
      { range: e.range(), text: t },
      void 0,
      void 0
    );
  }
}, Ve.REPLACE_SAVE_SOURCE = fn.registerSource("searchReplace.source", l("searchReplace.source", "Search and Replace")), Ve);
Ti = B([
  g(0, ei),
  g(1, M),
  g(2, Jt),
  g(3, wn),
  g(4, he),
  g(5, bn)
], Ti);
var xa = '.quick-input-list .quick-input-list-entry.has-actions:hover .quick-input-list-entry-action-bar .action-label.dirty-anything:before{content:"\\ea76"}';
ti(xa, {});
var re;
(function(o) {
  o[o.Created = 1] = "Created", o[o.Loading = 2] = "Loading", o[o.Loaded = 3] = "Loaded", o[o.Errored = 4] = "Errored", o[o.Disposed = 5] = "Disposed";
})(re || (re = {}));
class Ia {
  get cacheKey() {
    return this.loadingPhase === re.Loaded || !this.previousCacheState ? this._cacheKey : this.previousCacheState.cacheKey;
  }
  get isLoaded() {
    const e = this.loadingPhase === re.Loaded;
    return e || !this.previousCacheState ? e : this.previousCacheState.isLoaded;
  }
  get isUpdating() {
    const e = this.loadingPhase === re.Loading;
    return e || !this.previousCacheState ? e : this.previousCacheState.isUpdating;
  }
  constructor(e, t, i, s) {
    if (this.cacheQuery = e, this.loadFn = t, this.disposeFn = i, this.previousCacheState = s, this._cacheKey = In.nextId(), this.query = this.cacheQuery(this._cacheKey), this.loadingPhase = re.Created, this.previousCacheState) {
      const r = Object.assign({}, this.query, { cacheKey: null }), n = Object.assign({}, this.previousCacheState.query, { cacheKey: null });
      En(r, n) || (this.previousCacheState.dispose(), this.previousCacheState = void 0);
    }
  }
  load() {
    return this.isUpdating ? this : (this.loadingPhase = re.Loading, this.loadPromise = (async () => {
      try {
        await this.loadFn(this.query), this.loadingPhase = re.Loaded, this.previousCacheState && (this.previousCacheState.dispose(), this.previousCacheState = void 0);
      } catch (e) {
        throw this.loadingPhase = re.Errored, e;
      }
    })(), this);
  }
  dispose() {
    this.loadPromise ? (async () => {
      try {
        await this.loadPromise;
      } catch {
      }
      this.loadingPhase = re.Disposed, this.disposeFn(this._cacheKey);
    })() : this.loadingPhase = re.Disposed, this.previousCacheState && (this.previousCacheState.dispose(), this.previousCacheState = void 0);
  }
}
var ce;
let mt = (ce = class extends Ui {
  get defaultFilterValue() {
    const e = this.codeEditorService.getFocusedCodeEditor();
    if (e)
      return rt(Cn(e));
  }
  constructor(e, t, i, s, r) {
    super(ce.PREFIX, {
      canAcceptInBackground: !0,
      noResultsPick: {
        label: l("noSymbolResults", "No matching workspace symbols")
      }
    }), this.labelService = e, this.openerService = t, this.editorService = i, this.configurationService = s, this.codeEditorService = r, this.delayer = this._register(new Qs(ce.TYPING_SEARCH_DELAY));
  }
  get configuration() {
    var t;
    const e = (t = this.configurationService.getValue().workbench) == null ? void 0 : t.editor;
    return {
      openEditorPinned: !(e != null && e.enablePreviewFromQuickOpen) || !(e != null && e.enablePreview),
      openSideBySideDirection: e == null ? void 0 : e.openSideBySideDirection
    };
  }
  _getPicks(e, t, i) {
    return this.getSymbolPicks(e, void 0, i);
  }
  async getSymbolPicks(e, t, i) {
    return this.delayer.trigger(async () => i.isCancellationRequested ? [] : this.doGetSymbolPicks(Us(e), t, i), t == null ? void 0 : t.delay);
  }
  async doGetSymbolPicks(e, t, i) {
    let s, r;
    e.values && e.values.length > 1 ? (s = ms(e.values[0]), r = ms(e.values.slice(1))) : s = e;
    const n = await zs(s.original, i);
    if (i.isCancellationRequested)
      return [];
    const a = [], c = this.configuration.openSideBySideDirection;
    for (const { symbol: h, provider: u } of n) {
      if (t != null && t.skipLocal && !ce.TREAT_AS_GLOBAL_SYMBOL_TYPES.has(h.kind) && h.containerName)
        continue;
      const d = h.name, f = `$(${li.toIcon(h.kind).id}) ${d}`, p = f.length - d.length;
      let S, m, I = !1;
      if (s.original.length > 0 && (s !== e && ([S, m] = hi(f, { ...e, values: void 0 }, 0, p), typeof S == "number" && (I = !0)), typeof S != "number" && ([S, m] = hi(f, s, 0, p), typeof S != "number")))
        continue;
      const x = h.location.uri;
      let E;
      if (x) {
        const ee = this.labelService.getUriLabel(x, { relative: !0 });
        h.containerName ? E = `${h.containerName} • ${ee}` : E = ee;
      }
      let _, be;
      if (!I && r && r.original.length > 0) {
        if (E && ([_, be] = hi(E, r)), typeof _ != "number")
          continue;
        typeof S == "number" && (S += _);
      }
      const ae = h.tags ? h.tags.indexOf(1) >= 0 : !1;
      a.push({
        symbol: h,
        resource: x,
        score: S,
        label: f,
        ariaLabel: d,
        highlights: ae ? void 0 : {
          label: m,
          description: be
        },
        description: E,
        strikethrough: ae,
        buttons: [
          {
            iconClass: c === "right" ? z.asClassName(A.splitHorizontal) : z.asClassName(A.splitVertical),
            tooltip: c === "right" ? l("openToSide", "Open to the Side") : l("openToBottom", "Open to the Bottom")
          }
        ],
        trigger: (ee, W) => (this.openSymbol(u, h, i, { keyMods: W, forceOpenSideBySide: !0 }), We.CLOSE_PICKER),
        accept: async (ee, W) => this.openSymbol(u, h, i, { keyMods: ee, preserveFocus: W.inBackground, forcePinned: W.inBackground })
      });
    }
    return t != null && t.skipSorting || a.sort((h, u) => this.compareSymbols(h, u)), a;
  }
  async openSymbol(e, t, i, s) {
    let r = t;
    typeof e.resolveWorkspaceSymbol == "function" && (r = await e.resolveWorkspaceSymbol(t, i) || t, i.isCancellationRequested) || (r.location.uri.scheme === H.http || r.location.uri.scheme === H.https ? await this.openerService.open(r.location.uri, { fromUserGesture: !0, allowContributedOpeners: !0 }) : await this.editorService.openEditor({
      resource: r.location.uri,
      options: {
        preserveFocus: s == null ? void 0 : s.preserveFocus,
        pinned: s.keyMods.ctrlCmd || s.forcePinned || this.configuration.openEditorPinned,
        selection: r.location.range ? le.collapseToStart(r.location.range) : void 0
      }
    }, s.keyMods.alt || this.configuration.openEditorPinned && s.keyMods.ctrlCmd || s != null && s.forceOpenSideBySide ? ft : ii));
  }
  compareSymbols(e, t) {
    if (typeof e.score == "number" && typeof t.score == "number") {
      if (e.score > t.score)
        return -1;
      if (e.score < t.score)
        return 1;
    }
    if (e.symbol && t.symbol) {
      const i = e.symbol.name.toLowerCase(), s = t.symbol.name.toLowerCase(), r = i.localeCompare(s);
      if (r !== 0)
        return r;
    }
    if (e.symbol && t.symbol) {
      const i = li.toIcon(e.symbol.kind).id, s = li.toIcon(t.symbol.kind).id;
      return i.localeCompare(s);
    }
    return 0;
  }
}, ce.PREFIX = "#", ce.TYPING_SEARCH_DELAY = 200, ce.TREAT_AS_GLOBAL_SYMBOL_TYPES = /* @__PURE__ */ new Set([
  4,
  9,
  0,
  10,
  2,
  3,
  1
]), ce);
mt = B([
  g(0, he),
  g(1, zi),
  g(2, M),
  g(3, V),
  g(4, $s)
], mt);
const Ea = "task.quickOpen.detail", Ca = "task.quickOpen.skip", Si = l("taskQuickPick.showAll", "Show All Tasks..."), _s = Q("tasks-list-configure", A.gear, l("configureTaskIcon", "Configuration icon in the tasks selection list.")), Ws = Q("tasks-remove", A.close, l("removeTaskIcon", "Icon for remove in the tasks selection list.")), ka = "runTaskStorageKey";
let Ai = class Ce extends se {
  constructor(e, t, i, s, r, n, a) {
    super(), this._taskService = e, this._configurationService = t, this._quickInputService = i, this._notificationService = s, this._themeService = r, this._dialogService = n, this._storageService = a, this._sorter = this._taskService.createSorter();
  }
  _showDetail() {
    return !!this._configurationService.getValue(Ea);
  }
  _guessTaskLabel(e) {
    if (e._label)
      return e._label;
    if (ct.is(e)) {
      let t = e.configures.type;
      const i = kn(e.configures);
      return delete i._key, delete i.type, Object.keys(i).forEach((s) => t += `: ${i[s]}`), t;
    }
    return "";
  }
  static getTaskLabelWithIcon(e, t) {
    const i = t || e._label, s = e.configurationProperties.icon;
    return s ? s.id ? `$(${s.id}) ${i}` : `$(${A.tools.id}) ${i}` : `${i}`;
  }
  static applyColorStyles(e, t, i) {
    var s;
    if ((s = e.configurationProperties.icon) != null && s.color) {
      const r = i.getColorTheme(), n = Rn(r);
      t.iconClasses = [Fn(e.configurationProperties.icon.color)], document.body.appendChild(n);
    }
  }
  _createTaskEntry(e, t = []) {
    const i = [
      { iconClass: z.asClassName(_s), tooltip: l("configureTask", "Configure Task") },
      ...t
    ], s = { label: Ce.getTaskLabelWithIcon(e, this._guessTaskLabel(e)), description: this._taskService.getTaskDescription(e), task: e, detail: this._showDetail() ? e.configurationProperties.detail : void 0, buttons: i };
    return Ce.applyColorStyles(e, s, this._themeService), s;
  }
  _createEntriesForGroup(e, t, i, s = []) {
    e.push({ type: "separator", label: i }), t.forEach((r) => {
      r.configurationProperties.hide || e.push(this._createTaskEntry(r, s));
    });
  }
  _createTypeEntries(e, t) {
    e.push({ type: "separator", label: l("contributedTasks", "contributed") }), t.forEach((i) => {
      e.push({ label: `$(folder) ${i}`, task: i, ariaLabel: l("taskType", "All {0} tasks", i) });
    }), e.push({ label: Si, task: Si, alwaysShow: !0 });
  }
  _handleFolderTaskResult(e) {
    const t = [];
    return Array.from(e).forEach(([i, s]) => {
      if (s.set && t.push(...s.set.tasks), s.configurations)
        for (const r in s.configurations.byIdentifier)
          t.push(s.configurations.byIdentifier[r]);
    }), t;
  }
  _dedupeConfiguredAndRecent(e, t) {
    var n, a;
    let i = [];
    const s = Array(e.length).fill(!1);
    for (let c = 0; c < t.length; c++) {
      const h = (n = t[c].getWorkspaceFolder()) == null ? void 0 : n.uri.toString(), u = (a = t[c].getDefinition()) == null ? void 0 : a._key, d = t[c].type, f = t[c]._label, p = t[c].getRecentlyUsedKey(), S = e.findIndex((m) => {
        var I, x;
        return h && u && ((I = m.getWorkspaceFolder()) == null ? void 0 : I.uri.toString()) === h && (((x = m.getDefinition()) == null ? void 0 : x._key) === u || m.type === d && m._label === f) || p && m.getRecentlyUsedKey() === p;
      });
      S === -1 ? i.push(t[c]) : (e[S] = t[c], s[S] = !0);
    }
    i = i.sort((c, h) => this._sorter.compare(c, h));
    const r = [];
    for (let c = 0; c < e.length; c++)
      (s[c] || ct.is(e[c])) && r.push(e[c]);
    return { configuredTasks: i, recentTasks: r };
  }
  async getTopLevelEntries(e) {
    if (this._topLevelEntries !== void 0)
      return { entries: this._topLevelEntries };
    let t = (await this._taskService.getSavedTasks("historical")).reverse();
    const i = this._handleFolderTaskResult(await this._taskService.getWorkspaceTasks()), s = this._taskService.taskTypes();
    this._topLevelEntries = [];
    const r = this._dedupeConfiguredAndRecent(t, i), n = r.configuredTasks;
    if (t = r.recentTasks, t.length > 0) {
      const a = {
        iconClass: z.asClassName(Ws),
        tooltip: l("removeRecent", "Remove Recently Used Task")
      };
      this._createEntriesForGroup(this._topLevelEntries, t, l("recentlyUsed", "recently used"), [a]);
    }
    return i.length > 0 && n.length > 0 && this._createEntriesForGroup(this._topLevelEntries, n, l("configured", "configured")), e && i.length === 0 && (this._topLevelEntries.push({ type: "separator", label: l("configured", "configured") }), this._topLevelEntries.push(e)), s.length > 0 && this._createTypeEntries(this._topLevelEntries, s), { entries: this._topLevelEntries, isSingleConfigured: i.length === 1 ? i[0] : void 0 };
  }
  async handleSettingOption(e) {
    const { confirmed: t } = await this._dialogService.confirm({
      type: Pn.Warning,
      message: l(
        "TaskQuickPick.changeSettingDetails",
        `Task detection for {0} tasks causes files in any workspace you open to be run as code. Enabling {0} task detection is a user setting and will apply to any workspace you open. 

 Do you want to enable {0} task detection for all workspaces?`,
        e
      ),
      cancelButton: l("TaskQuickPick.changeSettingNo", "No")
    });
    if (t)
      return await this._configurationService.updateValue(`${e}.autoDetect`, "on"), await new Promise((i) => setTimeout(() => i(), 100)), this.show(l("TaskService.pickRunTask", "Select the task to run"), void 0, e);
  }
  async show(e, t, i, s) {
    const r = this._quickInputService.createQuickPick();
    r.placeholder = e, r.matchOnDescription = !0, r.ignoreFocusOut = !1, r.onDidTriggerItemButton(async (a) => {
      const c = a.item.task;
      if (a.button.iconClass === z.asClassName(Ws)) {
        const h = c && !$e(c) ? c.getRecentlyUsedKey() : void 0;
        h && this._taskService.removeRecentlyUsedTask(h);
        const u = r.items.indexOf(a.item);
        u >= 0 && (r.items = [...r.items.slice(0, u), ...r.items.slice(u + 1)]);
      } else if (a.button.iconClass === z.asClassName(_s)) {
        if (this._quickInputService.cancel(), js.is(c))
          this._taskService.customize(c, void 0, !0);
        else if (Xs.is(c) || ct.is(c)) {
          let h = !1;
          try {
            h = await this._taskService.openConfig(c);
          } catch {
          }
          h || this._taskService.customize(c, void 0, !0);
        }
      }
    }), s && (r.value = s);
    let n = i;
    if (!n) {
      const a = await this.getTopLevelEntries(t);
      if (a.isSingleConfigured && this._configurationService.getValue(Ca))
        return r.dispose(), this._toTask(a.isSingleConfigured);
      const c = a.entries;
      n = await this._doPickerFirstLevel(r, c);
    }
    do
      if ($e(n)) {
        if (s) {
          await this._doPickerFirstLevel(r, (await this.getTopLevelEntries(t)).entries), r.dispose();
          return;
        }
        const a = await this.doPickerSecondLevel(r, n);
        if (a && !a.settingType && a.task === null)
          r.value = "", n = await this._doPickerFirstLevel(r, (await this.getTopLevelEntries(t)).entries);
        else
          return a && $e(a.settingType) ? (r.dispose(), this.handleSettingOption(a.settingType)) : (r.dispose(), a != null && a.task && !$e(a == null ? void 0 : a.task) ? this._toTask(a == null ? void 0 : a.task) : void 0);
      } else
        return n ? (r.dispose(), this._toTask(n)) : (r.dispose(), n);
    while (1);
  }
  async _doPickerFirstLevel(e, t) {
    e.items = t, ya(this._storageService, ka, e, !0);
    const i = await new Promise((s) => {
      ut.once(e.onDidAccept)(async () => {
        s(e.selectedItems ? e.selectedItems[0] : void 0);
      });
    });
    return i == null ? void 0 : i.task;
  }
  async doPickerSecondLevel(e, t, i) {
    if (e.busy = !0, t === Si) {
      const r = (await this._taskService.tasks()).filter((n) => !n.configurationProperties.hide).sort((n, a) => this._sorter.compare(n, a)).map((n) => this._createTaskEntry(n));
      r.push(...Ce.allSettingEntries(this._configurationService)), e.items = r;
    } else
      e.value = i || "", e.items = await this._getEntriesForProvider(t);
    return await e.show(), e.busy = !1, await new Promise((r) => {
      ut.once(e.onDidAccept)(async () => {
        r(e.selectedItems ? e.selectedItems[0] : void 0);
      });
    });
  }
  static allSettingEntries(e) {
    const t = [], i = Ce.getSettingEntry(e, "grunt");
    i && t.push(i);
    const s = Ce.getSettingEntry(e, "gulp");
    s && t.push(s);
    const r = Ce.getSettingEntry(e, "jake");
    return r && t.push(r), t;
  }
  static getSettingEntry(e, t) {
    if (e.getValue(`${t}.autoDetect`) === "off")
      return {
        label: l(
          "TaskQuickPick.changeSettingsOptions",
          "$(gear) {0} task detection is turned off. Enable {1} task detection...",
          t[0].toUpperCase() + t.slice(1),
          t
        ),
        task: null,
        settingType: t,
        alwaysShow: !0
      };
  }
  async _getEntriesForProvider(e) {
    const t = (await this._taskService.tasks({ type: e })).sort((r, n) => this._sorter.compare(r, n));
    let i = [];
    if (t.length > 0) {
      for (const r of t)
        r.configurationProperties.hide || i.push(this._createTaskEntry(r));
      i.push({
        type: "separator"
      }, {
        label: l("TaskQuickPick.goBack", "Go back ↩"),
        task: null,
        alwaysShow: !0
      });
    } else
      i = [{
        label: l("TaskQuickPick.noTasksForType", "No {0} tasks found. Go back ↩", e),
        task: null,
        alwaysShow: !0
      }];
    const s = Ce.getSettingEntry(this._configurationService, e);
    return s && i.push(s), i;
  }
  async _toTask(e) {
    if (!ct.is(e))
      return e;
    const t = await this._taskService.tryResolveTask(e);
    return t || this._notificationService.error(l(
      "noProviderForTask",
      'There is no task provider registered for tasks of type "{0}".',
      e.type
    )), t;
  }
};
Ai = B([
  g(0, Gs),
  g(1, V),
  g(2, si),
  g(3, ri),
  g(4, ni),
  g(5, $i),
  g(6, nt)
], Ai);
var Je;
let Mi = (Je = class extends Ui {
  constructor(e, t, i, s, r, n, a, c) {
    super(Je.PREFIX, {
      noResultsPick: {
        label: l("noTaskResults", "No matching tasks")
      }
    }), this._taskService = t, this._configurationService = i, this._quickInputService = s, this._notificationService = r, this._dialogService = n, this._themeService = a, this._storageService = c;
  }
  async _getPicks(e, t, i) {
    if (i.isCancellationRequested)
      return [];
    const s = new Ai(
      this._taskService,
      this._configurationService,
      this._quickInputService,
      this._notificationService,
      this._themeService,
      this._dialogService,
      this._storageService
    ), r = await s.getTopLevelEntries(), n = [];
    for (const a of r.entries) {
      const c = Tn(e, a.label);
      if (!c)
        continue;
      a.type === "separator" && n.push(a);
      const h = a.task, u = a;
      u.highlights = { label: c }, u.trigger = (d) => {
        var f;
        if (d === 1 && ((f = u.buttons) == null ? void 0 : f.length) === 2) {
          const p = h && !$e(h) ? h.getRecentlyUsedKey() : void 0;
          return p && this._taskService.removeRecentlyUsedTask(p), We.REFRESH_PICKER;
        } else
          return js.is(h) ? this._taskService.customize(h, void 0, !0) : Xs.is(h) && this._taskService.openConfig(h), We.CLOSE_PICKER;
      }, u.accept = async () => {
        if ($e(h)) {
          const d = await s.show(l("TaskService.pickRunTask", "Select the task to run"), void 0, h);
          d && this._taskService.run(d, { attachProblemMatcher: !0 });
        } else
          this._taskService.run(await this._toTask(h), { attachProblemMatcher: !0 });
      }, n.push(u);
    }
    return n;
  }
  async _toTask(e) {
    return ct.is(e) ? this._taskService.tryResolveTask(e) : e;
  }
}, Je.PREFIX = "task ", Je);
Mi = B([
  g(0, qs),
  g(1, Gs),
  g(2, V),
  g(3, si),
  g(4, ri),
  g(5, $i),
  g(6, ni),
  g(7, nt)
], Mi);
function mi(o) {
  const e = o;
  return !!(e != null && e.range) && !!e.resource;
}
var K;
let Vt = (K = class extends Ui {
  get defaultFilterValue() {
    if (this.configuration.preserveInput)
      return An.LAST;
  }
  constructor(e, t, i, s, r, n, a, c, h, u, d, f, p, S, m, I, x) {
    super(K.PREFIX, {
      canAcceptInBackground: !0,
      noResultsPick: K.NO_RESULTS_PICK
    }), this.instantiationService = e, this.searchService = t, this.contextService = i, this.pathService = s, this.environmentService = r, this.fileService = n, this.labelService = a, this.modelService = c, this.languageService = h, this.workingCopyService = u, this.configurationService = d, this.editorService = f, this.historyService = p, this.filesConfigurationService = S, this.textModelService = m, this.uriIdentityService = I, this.quickInputService = x, this.pickState = new class {
      constructor(E, _) {
        this.provider = E, this.editorService = _, this.picker = void 0, this.editorViewState = void 0, this.scorerCache = /* @__PURE__ */ Object.create(null), this.fileQueryCache = void 0, this.lastOriginalFilter = void 0, this.lastFilter = void 0, this.lastRange = void 0, this.lastGlobalPicks = void 0, this.isQuickNavigating = void 0;
      }
      set(E) {
        this.picker = E, vs(E.onDispose)(() => {
          E === this.picker && (this.picker = void 0);
        });
        const _ = !!E.quickNavigate;
        _ || (this.fileQueryCache = this.provider.createFileQueryCache(), this.scorerCache = /* @__PURE__ */ Object.create(null)), this.isQuickNavigating = _, this.lastOriginalFilter = void 0, this.lastFilter = void 0, this.lastRange = void 0, this.lastGlobalPicks = void 0, this.editorViewState = void 0;
      }
      rememberEditorViewState() {
        var _;
        if (this.editorViewState)
          return;
        const E = this.editorService.activeEditorPane;
        E && (this.editorViewState = {
          group: E.group,
          editor: E.input,
          state: rt((_ = Mn(E.getControl())) == null ? void 0 : _.saveViewState())
        });
      }
      async restoreEditorViewState() {
        if (this.editorViewState) {
          const E = {
            viewState: this.editorViewState.state,
            preserveFocus: !0
          };
          await this.editorViewState.group.openEditor(this.editorViewState.editor, E);
        }
      }
    }(this, this.editorService), this.labelOnlyEditorHistoryPickAccessor = new _n({ skipDescription: !0 }), this.fileQueryDelayer = this._register(new Qs(K.TYPING_SEARCH_DELAY)), this.fileQueryBuilder = this.instantiationService.createInstance(Gi), this.helpQuickAccess = this.instantiationService.createInstance(ys), this.workspaceSymbolsQuickAccess = this._register(this.instantiationService.createInstance(mt)), this.editorSymbolsQuickAccess = this.instantiationService.createInstance(Ee);
  }
  get configuration() {
    var s;
    const e = (s = this.configurationService.getValue().workbench) == null ? void 0 : s.editor, t = this.configurationService.getValue().search, i = this.configurationService.getValue().workbench.quickOpen;
    return {
      openEditorPinned: !(e != null && e.enablePreviewFromQuickOpen) || !(e != null && e.enablePreview),
      openSideBySideDirection: e == null ? void 0 : e.openSideBySideDirection,
      includeSymbols: t == null ? void 0 : t.quickOpen.includeSymbols,
      includeHistory: t == null ? void 0 : t.quickOpen.includeHistory,
      historyFilterSortOrder: t == null ? void 0 : t.quickOpen.history.filterSortOrder,
      shortAutoSaveDelay: this.filesConfigurationService.getAutoSaveMode() === 1,
      preserveInput: i.preserveInput
    };
  }
  provide(e, t, i) {
    const s = new Ae();
    this.pickState.set(e);
    const r = s.add(new Wn());
    return s.add(e.onDidChangeActive(() => {
      r.value = void 0;
      const [n] = e.activeItems;
      mi(n) && (r.value = this.decorateAndRevealSymbolRange(n));
    })), s.add(vs(e.onDidHide)(({ reason: n }) => {
      n === Ln.Gesture && this.pickState.restoreEditorViewState();
    })), s.add(super.provide(e, t, i)), s;
  }
  decorateAndRevealSymbolRange(e) {
    const t = this.editorService.activeEditor;
    if (!this.uriIdentityService.extUri.isEqual(e.resource, t == null ? void 0 : t.resource))
      return se.None;
    const i = this.editorService.activeTextEditorControl;
    return i ? (this.pickState.rememberEditorViewState(), i.revealRangeInCenter(e.range.selection, 0), this.addDecorations(i, e.range.decoration), Ks(() => this.clearDecorations(i))) : se.None;
  }
  _getPicks(e, t, i, s) {
    var u, d;
    const r = On(e, [Ee.PREFIX]);
    let n;
    if (r ? n = r.filter : n = e, this.pickState.lastRange = r == null ? void 0 : r.range, e !== this.pickState.lastOriginalFilter && n === this.pickState.lastFilter)
      return null;
    const a = !!this.pickState.lastOriginalFilter;
    this.pickState.lastOriginalFilter = e, this.pickState.lastFilter = n;
    const c = (u = this.pickState.picker) == null ? void 0 : u.items, h = (d = this.pickState.picker) == null ? void 0 : d.activeItems[0];
    if (c && h) {
      const f = mi(h), p = h === K.NO_RESULTS_PICK && n.indexOf(Ee.PREFIX) >= 0;
      !f && !p && (this.pickState.lastGlobalPicks = {
        items: c,
        active: h
      });
    }
    return this.doGetPicks(n, { enableEditorSymbolSearch: a, includeHelp: s == null ? void 0 : s.includeHelp, from: s == null ? void 0 : s.from }, t, i);
  }
  doGetPicks(e, t, i, s) {
    var h;
    const r = Us(e);
    if (t.enableEditorSymbolSearch) {
      const u = this.getEditorSymbolPicks(r, i, s);
      if (u)
        return u;
    }
    const n = (h = this.pickState.picker) == null ? void 0 : h.activeItems[0];
    if (mi(n) && this.pickState.lastGlobalPicks)
      return this.pickState.lastGlobalPicks;
    const a = this.getEditorHistoryPicks(r);
    let c;
    return this.pickState.isQuickNavigating ? c = a : (c = [], t.includeHelp && c.push(...this.getHelpPicks(r, s, t)), a.length !== 0 && (c.push({ type: "separator", label: l("recentlyOpenedSeparator", "recently opened") }), c.push(...a))), {
      picks: c,
      additionalPicks: (async () => {
        const u = new Ge();
        for (const f of a)
          f.resource && u.set(f.resource, !0);
        const d = await this.getAdditionalPicks(r, u, s);
        return s.isCancellationRequested ? [] : d.length > 0 ? [
          { type: "separator", label: this.configuration.includeSymbols ? l("fileAndSymbolResultsSeparator", "file and symbol results") : l("fileResultsSeparator", "file results") },
          ...d
        ] : [];
      })(),
      mergeDelay: K.SYMBOL_PICKS_MERGE_DELAY
    };
  }
  async getAdditionalPicks(e, t, i) {
    const [s, r] = await Promise.all([
      this.getFilePicks(e, t, i),
      this.getWorkspaceSymbolPicks(e, i)
    ]);
    if (i.isCancellationRequested)
      return [];
    const n = Dn([...s, ...r], (c, h) => bs(c, h, e, !0, ui, this.pickState.scorerCache), K.MAX_RESULTS), a = [];
    for (const c of n)
      if (c.highlights)
        a.push(c);
      else {
        const { score: h, labelMatch: u, descriptionMatch: d } = ws(c, e, !0, ui, this.pickState.scorerCache);
        if (!h)
          continue;
        c.highlights = {
          label: u,
          description: d
        }, a.push(c);
      }
    return a;
  }
  getEditorHistoryPicks(e) {
    const t = this.configuration;
    if (!e.normalized)
      return this.historyService.getHistory().map((r) => this.createAnythingPick(r, t));
    if (!this.configuration.includeHistory)
      return [];
    const i = e.containsPathSeparator ? ui : this.labelOnlyEditorHistoryPickAccessor, s = [];
    for (const r of this.historyService.getHistory()) {
      const n = r.resource;
      if (!n || !this.fileService.hasProvider(n) && n.scheme !== H.untitled && n.scheme !== H.vscodeTerminal)
        continue;
      const a = this.createAnythingPick(r, t), { score: c, labelMatch: h, descriptionMatch: u } = ws(a, e, !1, i, this.pickState.scorerCache);
      c && (a.highlights = {
        label: h,
        description: u
      }, s.push(a));
    }
    return this.configuration.historyFilterSortOrder === "recency" ? s : s.sort((r, n) => bs(r, n, e, !1, i, this.pickState.scorerCache));
  }
  createFileQueryCache() {
    return new Ia(
      (e) => this.fileQueryBuilder.file(this.contextService.getWorkspace().folders, this.getFileQueryOptions({ cacheKey: e })),
      (e) => this.searchService.fileSearch(e),
      (e) => this.searchService.clearCache(e),
      this.pickState.fileQueryCache
    ).load();
  }
  async getFilePicks(e, t, i) {
    var a;
    if (!e.normalized)
      return [];
    const s = await this.getAbsolutePathFileResult(e, i);
    if (i.isCancellationRequested)
      return [];
    let r;
    if (s) {
      if (t.has(s))
        return [];
      const c = this.createAnythingPick(s, this.configuration);
      return c.highlights = {
        label: [{ start: 0, end: c.label.length }],
        description: c.description ? [{ start: 0, end: c.description.length }] : void 0
      }, [c];
    }
    if ((a = this.pickState.fileQueryCache) != null && a.isLoaded ? r = await this.doFileSearch(e, i) : r = await this.fileQueryDelayer.trigger(async () => i.isCancellationRequested ? [] : this.doFileSearch(e, i)), i.isCancellationRequested)
      return [];
    const n = this.configuration;
    return r.filter((c) => !t.has(c)).map((c) => this.createAnythingPick(c, n));
  }
  async doFileSearch(e, t) {
    const [i, s] = await Promise.all([
      this.getFileSearchResults(e, t),
      this.getRelativePathFileResults(e, t)
    ]);
    if (t.isCancellationRequested)
      return [];
    if (!s)
      return i;
    const r = new Ge();
    for (const n of s)
      r.set(n, !0);
    return [
      ...i.filter((n) => !r.has(n)),
      ...s
    ];
  }
  async getFileSearchResults(e, t) {
    let i = "";
    e.values && e.values.length > 1 ? i = e.values[0].original : i = e.original;
    const s = await this.doGetFileSearchResults(i, t);
    if (t.isCancellationRequested)
      return [];
    if (s.limitHit && e.values && e.values.length > 1) {
      const r = await this.doGetFileSearchResults(e.original, t);
      if (t.isCancellationRequested)
        return [];
      const n = new Ge();
      for (const a of s.results)
        n.set(a.resource, !0);
      for (const a of r.results)
        n.has(a.resource) || s.results.push(a);
    }
    return s.results.map((r) => r.resource);
  }
  doGetFileSearchResults(e, t) {
    var i;
    return this.searchService.fileSearch(this.fileQueryBuilder.file(this.contextService.getWorkspace().folders, this.getFileQueryOptions({
      filePattern: e,
      cacheKey: (i = this.pickState.fileQueryCache) == null ? void 0 : i.cacheKey,
      maxResults: K.MAX_RESULTS
    })), t);
  }
  getFileQueryOptions(e) {
    return {
      _reason: "openFileHandler",
      extraFileResources: this.instantiationService.invokeFunction(ji),
      filePattern: e.filePattern || "",
      cacheKey: e.cacheKey,
      maxResults: e.maxResults || 0,
      sortByScore: !0
    };
  }
  async getAbsolutePathFileResult(e, t) {
    if (!e.containsPathSeparator)
      return;
    const i = await this.pathService.userHome(), s = Nn(e.original, i.scheme === H.file ? i.fsPath : i.path);
    if (t.isCancellationRequested)
      return;
    const r = (await this.pathService.path).isAbsolute(s);
    if (!t.isCancellationRequested && r) {
      const n = xs(await this.pathService.fileURI(s), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
      if (t.isCancellationRequested)
        return;
      try {
        if ((await this.fileService.stat(n)).isFile)
          return n;
      } catch {
      }
    }
  }
  async getRelativePathFileResults(e, t) {
    if (!e.containsPathSeparator)
      return;
    if (!(await this.pathService.path).isAbsolute(e.original)) {
      const s = [];
      for (const r of this.contextService.getWorkspace().folders) {
        if (t.isCancellationRequested)
          break;
        const n = xs(r.toResource(e.original), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
        try {
          (await this.fileService.stat(n)).isFile && s.push(n);
        } catch {
        }
      }
      return s;
    }
  }
  getHelpPicks(e, t, i) {
    if (e.normalized)
      return [];
    const s = this.helpQuickAccess.getQuickAccessProviders(), r = /* @__PURE__ */ new Map();
    for (const c of s)
      r.set(c.prefix, c);
    const n = [], a = (c, h = {}) => {
      if (r.has(c)) {
        const u = r.get(c);
        u.label = u.description, u.description = u.prefix;
        const d = {
          ...i,
          includeHelp: u.prefix === K.PREFIX ? !1 : i == null ? void 0 : i.includeHelp
        };
        n.push({
          ...r.get(c),
          ...h,
          accept: () => {
            this.quickInputService.quickAccess.show(u.prefix, {
              preserveValue: !0,
              providerOptions: d
            });
          }
        });
      }
    };
    return a(K.PREFIX), a(Bn.PREFIX), a(Ee.PREFIX), a(va), a(Mi.PREFIX), a(ys.PREFIX, {
      label: l("more", "More")
    }), n;
  }
  async getWorkspaceSymbolPicks(e, t) {
    const i = this.configuration;
    return !e.normalized || !i.includeSymbols || this.pickState.lastRange ? [] : this.workspaceSymbolsQuickAccess.getSymbolPicks(e.original, {
      skipLocal: !0,
      skipSorting: !0,
      delay: K.TYPING_SEARCH_DELAY
    }, t);
  }
  getEditorSymbolPicks(e, t, i) {
    var c, h;
    const s = e.original.split(Ee.PREFIX), r = s.length > 1 ? s[s.length - 1].trim() : void 0;
    if (typeof r != "string")
      return null;
    const n = (c = this.pickState.lastGlobalPicks) == null ? void 0 : c.active;
    if (!n)
      return null;
    const a = n.resource;
    return !a || !this.fileService.hasProvider(a) && a.scheme !== H.untitled || (n.label.includes(Ee.PREFIX) || (h = n.description) != null && h.includes(Ee.PREFIX)) && s.length < 3 ? null : this.doGetEditorSymbolPicks(n, a, r, t, i);
  }
  async doGetEditorSymbolPicks(e, t, i, s, r) {
    try {
      this.pickState.rememberEditorViewState(), await this.editorService.openEditor({
        resource: t,
        options: { preserveFocus: !0, revealIfOpened: !0, ignoreError: !0 }
      });
    } catch {
      return [];
    }
    if (r.isCancellationRequested)
      return [];
    let n = this.modelService.getModel(t);
    if (!n)
      try {
        const c = s.add(await this.textModelService.createModelReference(t));
        if (r.isCancellationRequested)
          return [];
        n = c.object.textEditorModel;
      } catch {
        return [];
      }
    const a = await this.editorSymbolsQuickAccess.getSymbolPicks(n, i, { extraContainerLabel: Vn(e.label) }, s, r);
    return r.isCancellationRequested ? [] : a.map((c) => c.type === "separator" ? c : {
      ...c,
      resource: t,
      description: c.description,
      trigger: (h, u) => {
        var d;
        return this.openAnything(t, { keyMods: u, range: (d = c.range) == null ? void 0 : d.selection, forceOpenSideBySide: !0 }), We.CLOSE_PICKER;
      },
      accept: (h, u) => {
        var d;
        return this.openAnything(t, { keyMods: h, range: (d = c.range) == null ? void 0 : d.selection, preserveFocus: u.inBackground, forcePinned: u.inBackground });
      }
    });
  }
  addDecorations(e, t) {
    this.editorSymbolsQuickAccess.addDecorations(e, t);
  }
  clearDecorations(e) {
    this.editorSymbolsQuickAccess.clearDecorations(e);
  }
  createAnythingPick(e, t) {
    const i = !Le.isUri(e);
    let s, r, n, a, c;
    Is(e) ? (s = Ot.getOriginalUri(e), r = e.getName(), n = e.getDescription(), a = e.isDirty() && !e.isSaving(), c = e.getLabelExtraClasses()) : (s = Le.isUri(e) ? e : e.resource, r = Hn(s), n = this.labelService.getUriLabel(Qi(s), { relative: !0 }), a = this.workingCopyService.isDirty(s) && !t.shortAutoSaveDelay, c = []);
    const h = n ? `${r} ${n}` : r, u = new Es(
      () => Qn(this.modelService, this.languageService, s).concat(c)
    ), d = new Es(() => {
      const f = t.openSideBySideDirection, p = [];
      return p.push({
        iconClass: f === "right" ? z.asClassName(A.splitHorizontal) : z.asClassName(A.splitVertical),
        tooltip: f === "right" ? l(
          { key: "openToSide", comment: ["Open this file in a split editor on the left/right side"] },
          "Open to the Side"
        ) : l(
          { key: "openToBottom", comment: ["Open this file in a split editor on the bottom"] },
          "Open to the Bottom"
        )
      }), i && p.push({
        iconClass: a ? "dirty-anything " + z.asClassName(A.circleFilled) : z.asClassName(A.close),
        tooltip: l("closeEditor", "Remove from Recently Opened"),
        alwaysVisible: a
      }), p;
    });
    return {
      resource: s,
      label: r,
      ariaLabel: a ? l("filePickAriaLabelDirty", "{0} unsaved changes", h) : h,
      description: n,
      get iconClasses() {
        return u.value;
      },
      get buttons() {
        return d.value;
      },
      trigger: (f, p) => {
        switch (f) {
          case 0:
            return this.openAnything(e, { keyMods: p, range: this.pickState.lastRange, forceOpenSideBySide: !0 }), We.CLOSE_PICKER;
          case 1:
            if (!Le.isUri(e))
              return this.historyService.removeFromHistory(e), We.REMOVE_ITEM;
        }
        return We.NO_ACTION;
      },
      accept: (f, p) => this.openAnything(e, { keyMods: f, range: this.pickState.lastRange, preserveFocus: p.inBackground, forcePinned: p.inBackground })
    };
  }
  async openAnything(e, t) {
    var r, n, a;
    const i = {
      preserveFocus: t.preserveFocus,
      pinned: ((r = t.keyMods) == null ? void 0 : r.ctrlCmd) || t.forcePinned || this.configuration.openEditorPinned,
      selection: t.range ? le.collapseToStart(t.range) : void 0
    }, s = (n = t.keyMods) != null && n.alt || this.configuration.openEditorPinned && ((a = t.keyMods) != null && a.ctrlCmd) || t.forceOpenSideBySide ? ft : ii;
    if (s === ft && await this.pickState.restoreEditorViewState(), Is(e))
      await this.editorService.openEditor(e, i, s);
    else {
      let c;
      Le.isUri(e) ? c = {
        resource: e,
        options: i
      } : c = {
        ...e,
        options: {
          ...e.options,
          ...i
        }
      }, await this.editorService.openEditor(c, s);
    }
  }
}, K.PREFIX = "", K.NO_RESULTS_PICK = {
  label: l("noAnythingResults", "No matching results")
}, K.MAX_RESULTS = 512, K.TYPING_SEARCH_DELAY = 200, K.SYMBOL_PICKS_MERGE_DELAY = 200, K);
Vt = B([
  g(0, N),
  g(1, Ys),
  g(2, ue),
  g(3, Js),
  g(4, qn),
  g(5, Et),
  g(6, he),
  g(7, Pe),
  g(8, ht),
  g(9, Zs),
  g(10, V),
  g(11, M),
  g(12, Xi),
  g(13, Kn),
  g(14, Jt),
  g(15, qi),
  g(16, si)
], Vt);
function Ra() {
  Me.as(Yi.Workbench).registerWorkbenchContribution(Bt, 1);
}
function Fa() {
  Me.as(Yi.Workbench).registerWorkbenchContribution(Bt, 1);
}
const br = Q("search-details", A.ellipsis, l("searchDetailsIcon", "Icon to make search details visible.")), Pa = Q("search-show-context", A.listSelection, l(
  "searchShowContextIcon",
  "Icon for toggle the context in the search editor."
)), vi = Q("search-hide-replace", A.chevronRight, l(
  "searchHideReplaceIcon",
  "Icon to collapse the replace section in the search view."
)), Ls = Q("search-show-replace", A.chevronDown, l(
  "searchShowReplaceIcon",
  "Icon to expand the replace section in the search view."
)), Ta = Q("search-replace-all", A.replaceAll, l("searchReplaceAllIcon", "Icon for replace all in the search view.")), ns = Q("search-replace", A.replace, l("searchReplaceIcon", "Icon for replace in the search view.")), Aa = Q("search-remove", A.close, l("searchRemoveIcon", "Icon to remove a search result.")), xr = Q("search-refresh", A.refresh, l("searchRefreshIcon", "Icon for refresh in the search view.")), Ma = Q("search-collapse-results", A.collapseAll, l("searchCollapseAllIcon", "Icon for collapse results in the search view.")), _a = Q("search-expand-results", A.expandAll, l("searchExpandAllIcon", "Icon for expand results in the search view.")), Wa = Q("search-tree", A.listTree, l(
  "searchShowAsTree",
  "Icon for viewing results as a tree in the search view."
)), La = Q("search-list", A.listFlat, l(
  "searchShowAsList",
  "Icon for viewing results as a list in the search view."
)), Oa = Q("search-clear-results", A.clearAll, l("searchClearIcon", "Icon for clear results in the search view.")), Da = Q("search-stop", A.searchStop, l("searchStopIcon", "Icon for stop in the search view.")), Ir = Q("search-view-icon", A.search, l("searchViewIcon", "View icon of the search view.")), Na = Q("search-new-editor", A.newFile, l("searchNewEditorIcon", "Icon for the action to open a new search editor."));
var Ba = ".search-view{display:flex;flex-direction:column;height:100%}.search-view .results{flex-grow:1;min-height:0}.search-view .search-widgets-container{margin:0 12px 0 2px;padding-bottom:6px;padding-top:6px}.search-view .search-widget .toggle-replace-button{align-items:center;background-color:unset;background-position:50%;background-repeat:no-repeat;box-sizing:border-box;color:inherit;cursor:pointer;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:16px}.monaco-workbench .search-view .search-widget .toggle-replace-button:hover{background-color:var(--vscode-toolbar-hoverBackground)}.monaco-workbench .search-view .search-widget .toggle-replace-button:active{background-color:var(--vscode-toolbar-activeBackground)}.search-view .search-widget .replace-container,.search-view .search-widget .search-container{margin-left:18px}.search-view .search-widget .monaco-inputbox>.ibwrapper{height:100%}.search-view .search-widget .monaco-inputbox>.ibwrapper>.mirror,.search-view .search-widget .monaco-inputbox>.ibwrapper>textarea.input{padding:3px 0 3px 6px}.search-view .search-widget .monaco-inputbox>.ibwrapper>textarea.input{height:26px;overflow:initial}.search-view .search-widget .monaco-findInput .monaco-scrollable-element .scrollbar{opacity:0}.search-view .monaco-inputbox>.ibwrapper>textarea.input{scrollbar-width:none}.search-view .monaco-inputbox>.ibwrapper>textarea.input::-webkit-scrollbar{display:none}.search-view .monaco-findInput{display:inline-block;vertical-align:middle;width:100%}.search-view .search-widget .replace-container{display:inline-flex;margin-top:6px;position:relative}.search-view .search-widget .replace-input{display:flex;position:relative;vertical-align:middle;width:auto!important}.search-view .search-widget .replace-input>.controls{position:absolute;right:2px;top:3px}.search-view .search-widget .replace-container.disabled{display:none}.search-view .search-widget .replace-container .monaco-action-bar{height:25px;margin-left:4px}.search-view .query-details{margin:0 0 0 18px;min-height:1em;position:relative}.search-view .query-details .more{color:inherit;cursor:pointer;height:16px;position:absolute;right:-2px;width:25px;z-index:2}.search-view .query-details .file-types{display:none}.search-view .query-details .file-types>.monaco-inputbox{height:25px;width:100%}.search-view .query-details.more .file-types{display:inherit}.search-view .query-details.more .file-types:last-child{padding-bottom:4px}.search-view .query-details.more h4{font-size:11px;font-weight:400;margin:0;overflow:hidden;padding:4px 0 0;text-overflow:ellipsis;white-space:nowrap}.search-view .messages{color:var(--vscode-search-resultsInfoForeground);cursor:default;margin-top:-5px}.search-view .message{overflow-wrap:break-word;padding:0 22px 8px}.search-view .message p:first-child{margin-bottom:0;margin-top:0;padding-bottom:4px;user-select:text;-webkit-user-select:text}.search-view .message a{color:var(--vscode-textLink-foreground)}.search-view .message a:active,.search-view .message a:hover{color:var(--vscode-textLink-activeForeground)}.search-view .filematch,.search-view .foldermatch{display:flex;height:100%;line-height:22px;padding:0;position:relative}.pane-body:not(.wide) .search-view .filematch .monaco-icon-label,.pane-body:not(.wide) .search-view .foldermatch .monaco-icon-label,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row.focused .filematch .monaco-icon-label,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row.focused .foldermatch .monaco-icon-label,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row:hover:not(.highlighted) .filematch .monaco-icon-label,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row:hover:not(.highlighted) .foldermatch .monaco-icon-label{flex:1}.pane-body.wide .search-view .filematch .badge,.pane-body.wide .search-view .foldermatch .badge{margin-left:10px}.search-view .linematch{display:flex;line-height:22px;overflow:hidden;position:relative}.search-view .linematch>.match{overflow:hidden;text-overflow:ellipsis;white-space:pre}.search-view .linematch .matchLineNum{display:none;font-size:.9em;margin-left:7px;margin-right:4px;opacity:.7}.search-view .linematch .matchLineNum.show{display:block}.pane-body.wide .search-view .monaco-list .monaco-list-row .filematch .actionBarContainer,.pane-body.wide .search-view .monaco-list .monaco-list-row .foldermatch .actionBarContainer,.search-view .monaco-list .monaco-list-row .linematch .actionBarContainer{flex:1 0 auto}.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row .filematch .actionBarContainer,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row .foldermatch .actionBarContainer{flex:0 0 auto}.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row .linematch .actionBarContainer,.search-view.actions-right .monaco-list .monaco-list-row .filematch .actionBarContainer,.search-view.actions-right .monaco-list .monaco-list-row .foldermatch .actionBarContainer,.search-view.actions-right .monaco-list .monaco-list-row .linematch .actionBarContainer{text-align:right}.search-view .monaco-list .monaco-list-row .monaco-action-bar{display:none;line-height:1em;padding:0 .8em 0 .4em}.search-view .monaco-list .monaco-list-row .monaco-action-bar .action-item{margin:0}.search-view .monaco-list .monaco-list-row.focused .monaco-action-bar,.search-view .monaco-list .monaco-list-row.selected .monaco-action-bar,.search-view .monaco-list .monaco-list-row:hover:not(.highlighted) .monaco-action-bar{display:inline-block}.search-view .monaco-list .monaco-list-row .monaco-action-bar .action-item{margin-right:.2em}.search-view .monaco-list .monaco-list-row .monaco-action-bar .action-label{padding:2px}.monaco-workbench.hc-black .search-view .monaco-list .monaco-list-row .monaco-action-bar .action-label,.monaco-workbench.hc-light .search-view .monaco-list .monaco-list-row .monaco-action-bar .action-label{margin-top:2px}.search-view .monaco-count-badge{margin-right:12px}.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row.focused .filematch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row.focused .foldermatch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row.focused .linematch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row:hover .filematch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row:hover .foldermatch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row:hover .linematch .monaco-count-badge{display:none}.search-view .replace.findInFileMatch{background-color:var(--vscode-diffEditor-removedTextBackground);border:1px solid var(--vscode-diffEditor-removedTextBackground);text-decoration:line-through}.monaco-workbench.hc-dark .search-view .replace.findInFileMatch,.monaco-workbench.hc-light .search-view .replace.findInFileMatch{border:1px dashed var(--vscode-diffEditor-removedTextBackground)}.search-view .findInFileMatch,.search-view .replaceMatch{white-space:pre}.search-view .findInFileMatch{background-color:var(--vscode-editor-findMatchHighlightBackground);border:1px solid var(--vscode-editor-findMatchHighlightBorder)}.monaco-workbench.hc-dark .search-view .findInFileMatch,.monaco-workbench.hc-light .search-view .findInFileMatch{border:1px dashed var(--vscode-editor-findMatchHighlightBorder)}.search-view .replaceMatch{background-color:var(--vscode-diffEditor-insertedTextBackground)}.monaco-workbench.hc-black .search-view .findInFileMatch,.monaco-workbench.hc-black .search-view .replaceMatch,.monaco-workbench.hc-light .search-view .findInFileMatch,.monaco-workbench.hc-light .search-view .replaceMatch{background:none!important;box-sizing:border-box}.search-view .replaceMatch:not(:empty){border:1px solid var(--vscode-diffEditor-insertedLineBackground)}.monaco-workbench.hc-dark .search-view .replaceMatch:not(:empty),.monaco-workbench.hc-light .search-view .replaceMatch:not(:empty){border:1px dashed var(--vscode-diffEditor-insertedLineBackground)}.monaco-workbench.hc-black .search-view .filematch,.monaco-workbench.hc-black .search-view .foldermatch,.monaco-workbench.hc-black .search-view .linematch,.monaco-workbench.hc-light .search-view .filematch,.monaco-workbench.hc-light .search-view .foldermatch,.monaco-workbench.hc-light .search-view .linematch{line-height:20px}.monaco-workbench.vs .search-panel .search-view .monaco-inputbox{border:1px solid transparent}.text-search-provider-messages .providerMessage{padding-top:4px}.text-search-provider-messages .providerMessage .codicon{padding-right:3px;position:relative;top:3px}.monaco-workbench .search-view .monaco-list.element-focused .monaco-list-row.focused.selected:not(.highlighted) .action-label:focus{outline-color:var(--vscode-list-activeSelectionForeground)}.monaco-workbench .search-container .monaco-custom-toggle.disabled{background-color:inherit!important;cursor:default;opacity:.3;pointer-events:none;user-select:none;-webkit-user-select:none}.monaco-workbench .search-container .find-filter-button{box-sizing:border-box;color:inherit;cursor:pointer;float:left;margin-left:2px;user-select:none;-webkit-user-select:none}";
ti(Ba, {});
class Va {
}
var It;
let Ht = (It = class extends er {
  constructor(e, t, i, s, r, n) {
    super(), this.contextViewProvider = t, this.contextKeyService = s, this.configurationService = r, this.keybindingService = n, this._onSubmit = this._register(new U()), this.onSubmit = this._onSubmit.event, this._onCancel = this._register(new U()), this.onCancel = this._onCancel.event, i = {
      ariaLabel: l("defaultLabel", "input"),
      ...i
    }, this.width = i.width ?? 100, this.render(i), e.appendChild(this.domNode);
  }
  dispose() {
    var e;
    super.dispose(), (e = this.inputFocusTracker) == null || e.dispose();
  }
  setWidth(e) {
    this.width = e, this.contextViewProvider.layout(), this.setInputWidth();
  }
  getValue() {
    return this.inputBox.value;
  }
  setValue(e) {
    this.inputBox.value !== e && (this.inputBox.value = e);
  }
  select() {
    this.inputBox.select();
  }
  focus() {
    this.inputBox.focus();
  }
  inputHasFocus() {
    return this.inputBox.hasFocus();
  }
  setInputWidth() {
    this.inputBox.width = this.width - this.getSubcontrolsWidth() - 2;
  }
  getSubcontrolsWidth() {
    return 0;
  }
  getHistory() {
    return this.inputBox.getHistory();
  }
  clearHistory() {
    this.inputBox.clearHistory();
  }
  prependHistory(e) {
    this.inputBox.prependHistory(e);
  }
  clear() {
    this.setValue("");
  }
  onSearchSubmit() {
    this.inputBox.addToHistory();
  }
  showNextTerm() {
    this.inputBox.showNextValue();
  }
  showPreviousTerm() {
    this.inputBox.showPreviousValue();
  }
  render(e) {
    this.domNode = document.createElement("div"), this.domNode.classList.add("monaco-findInput"), this.inputBox = new Un(this.domNode, this.contextViewProvider, {
      placeholder: e.placeholder,
      showPlaceholderOnFocus: e.showPlaceholderOnFocus,
      tooltip: e.tooltip,
      ariaLabel: e.ariaLabel,
      validationOptions: {
        validation: void 0
      },
      history: e.history || [],
      showHistoryHint: () => bi(this.keybindingService),
      inputBoxStyles: e.inputBoxStyles
    }, this.contextKeyService), this._register(this.inputBox.onDidChange(() => this._onSubmit.fire(!0))), this.inputFocusTracker = xi(this.inputBox.inputElement), this.onkeyup(this.inputBox.inputElement, (i) => this.onInputKeyUp(i));
    const t = document.createElement("div");
    t.className = "controls", this.renderSubcontrols(t), this.domNode.appendChild(t), this.setInputWidth();
  }
  renderSubcontrols(e) {
  }
  onInputKeyUp(e) {
    switch (e.keyCode) {
      case 3:
        this.onSearchSubmit(), this._onSubmit.fire(!1);
        return;
      case 9:
        this._onCancel.fire();
        return;
    }
  }
}, It.OPTION_CHANGE = "optionChange", It);
Ht = B([
  g(3, J),
  g(4, V),
  g(5, Ct)
], Ht);
let qt = class extends Ht {
  constructor(e, t, i, s, r, n) {
    super(e, t, i, s, r, n), this._onChangeSearchInEditorsBoxEmitter = this._register(new U()), this.onChangeSearchInEditorsBox = this._onChangeSearchInEditorsBoxEmitter.event;
  }
  dispose() {
    super.dispose(), this.useSearchInEditorsBox.dispose();
  }
  onlySearchInOpenEditors() {
    return this.useSearchInEditorsBox.checked;
  }
  setOnlySearchInOpenEditors(e) {
    this.useSearchInEditorsBox.checked = e, this._onChangeSearchInEditorsBoxEmitter.fire();
  }
  getSubcontrolsWidth() {
    return super.getSubcontrolsWidth() + this.useSearchInEditorsBox.width();
  }
  renderSubcontrols(e) {
    this.useSearchInEditorsBox = this._register(new Ji({
      icon: A.book,
      title: l("onlySearchInOpenEditors", "Search only in Open Editors"),
      isChecked: !1,
      ...kt
    })), this._register(this.useSearchInEditorsBox.onChange((t) => {
      this._onChangeSearchInEditorsBoxEmitter.fire(), t || this.inputBox.focus();
    })), e.appendChild(this.useSearchInEditorsBox.domNode), super.renderSubcontrols(e);
  }
};
qt = B([
  g(3, J),
  g(4, V),
  g(5, Ct)
], qt);
let Kt = class extends Ht {
  constructor(e, t, i, s, r, n) {
    super(e, t, i, s, r, n), this._onChangeIgnoreBoxEmitter = this._register(new U()), this.onChangeIgnoreBox = this._onChangeIgnoreBoxEmitter.event;
  }
  dispose() {
    super.dispose(), this.useExcludesAndIgnoreFilesBox.dispose();
  }
  useExcludesAndIgnoreFiles() {
    return this.useExcludesAndIgnoreFilesBox.checked;
  }
  setUseExcludesAndIgnoreFiles(e) {
    this.useExcludesAndIgnoreFilesBox.checked = e, this._onChangeIgnoreBoxEmitter.fire();
  }
  getSubcontrolsWidth() {
    return super.getSubcontrolsWidth() + this.useExcludesAndIgnoreFilesBox.width();
  }
  renderSubcontrols(e) {
    this.useExcludesAndIgnoreFilesBox = this._register(new Ji({
      icon: A.exclude,
      actionClassName: "useExcludesAndIgnoreFiles",
      title: l(
        "useExcludesAndIgnoreFilesDescription",
        "Use Exclude Settings and Ignore Files"
      ),
      isChecked: !0,
      ...kt
    })), this._register(this.useExcludesAndIgnoreFilesBox.onChange((t) => {
      this._onChangeIgnoreBoxEmitter.fire(), t || this.inputBox.focus();
    })), e.appendChild(this.useExcludesAndIgnoreFilesBox.domNode), super.renderSubcontrols(e);
  }
};
Kt = B([
  g(3, J),
  g(4, V),
  g(5, Ct)
], Kt);
const C = { value: l("search", "Search"), original: "Search" };
function Ha(o) {
  const e = T(o), t = document.activeElement;
  return !!(e && t && tr(t, e.getContainer()));
}
function _e(o, e) {
  return Qa(o, e);
}
function T(o) {
  return o.getActiveViewWithId(oe);
}
function os(o, e, t) {
  let i = o.getSelection().filter((s) => s !== null).sort((s, r) => zn(s, r, t.sortOrder));
  return e && !(i.length > 1 && i.includes(e)) && (i = [e]), i;
}
function qa(o, e) {
  return e ? !e || o.includes(e) || Ka(o, e) : !1;
}
function Ka(o, e) {
  for (const t of o)
    if (t instanceof L && e instanceof F && t.matches().includes(e) || t instanceof X && (e instanceof L && t.getDownstreamFileMatch(e.resource) || e instanceof F && t.getDownstreamFileMatch(e.parent().resource)))
      return !0;
  return !1;
}
function Ue(o, e) {
  return o.openView(oe, e).then((t) => t ?? void 0);
}
function Qa(o, e) {
  return e ? o + " (" + e.getLabel() + ")" : o;
}
const Er = (o, e, t, i, s, r, n) => {
  const a = k("div.providerMessage"), c = $n(o.text);
  v(a, k("." + Gn.className(o.type === ir.Information ? Cs.Info : Cs.Warning).split(" ").join(".")));
  for (const h of c.nodes)
    if (typeof h == "string")
      v(a, document.createTextNode(h));
    else {
      const u = e.createInstance(jn, a, h, {
        opener: async (d) => {
          if (!o.trusted)
            return;
          const f = Le.parse(d, !0);
          if (f.scheme === H.command && o.trusted) {
            const p = await s.executeCommand(f.path);
            p != null && p.triggerSearch && n();
          } else
            f.scheme === H.https ? i.open(f) : f.scheme === H.command && !o.trusted ? t.error(l(
              "unable to open trust",
              "Unable to open command link from untrusted source: {0}",
              d
            )) : t.error(l("unable to open", "Unable to open unknown link: {0}", d));
        }
      });
      r.add(u);
    }
  return a;
}, Ua = "workbench.action.findInFiles", za = "search.action.focusSearchFromResults", $a = "search.action.openResult", Ga = "search.action.openResultToSide", ja = "search.action.remove", Xa = "search.action.copyPath", Ya = "search.action.copyMatch", Ja = "search.action.copyAll", Za = "search.action.openInEditor", ec = "search.action.clearHistory", tc = "search.action.focusSearchList", ic = "search.action.replace", sc = "search.action.replaceAllInFile", rc = "search.action.replaceAllInFolder", nc = "closeReplaceInFilesWidget", Cr = "toggleSearchCaseSensitive", kr = "toggleSearchWholeWord", Rr = "toggleSearchRegex", Fr = "toggleSearchPreserveCase", oc = "addCursorsAtSearchResults", ac = "search.action.revealInSideBar", cc = "workbench.action.replaceInFiles", Pr = "workbench.action.showAllSymbols", lc = "search.action.cancel", hc = "search.action.refreshSearchResults", uc = "search.action.focusNextSearchResult", dc = "search.action.focusPreviousSearchResult", gc = "workbench.action.toggleSearchOnType", pc = "search.action.collapseSearchResults", fc = "search.action.expandSearchResults", Sc = "search.action.clearSearchResults", mc = "search.action.viewAsTree", vc = "search.action.viewAsList", yc = "workbench.action.search.toggleQueryDetails", wc = "search.action.excludeFromSearch", bc = "search.focus.nextInputBox", xc = "search.focus.previousInputBox", Ic = "search.action.restrictSearchToFolder", Ec = "filesExplorer.findInFolder", Cc = "filesExplorer.findInWorkspace", Z = new O("searchViewletVisible", !0), we = new O("searchViewletFocus", !1), je = new O("inputBoxFocus", !1), Pt = new O("searchInputBoxFocus", !1), Tr = new O("replaceInputBoxFocus", !1), kc = new O("patternIncludesInputBoxFocus", !1), Rc = new O("patternExcludesInputBoxFocus", !1), ne = new O("replaceActive", !1), te = new O("hasSearchResult", !1), Ar = new O("firstMatchFocus", !1), Ke = new O("fileMatchOrMatchFocus", !1), Mr = new O("fileMatchOrFolderMatchFocus", !1), _i = new O("fileMatchOrFolderMatchWithResourceFocus", !1), Te = new O("fileMatchFocus", !1), Ne = new O("folderMatchFocus", !1), Qt = new O("folderMatchWithResourceFocus", !1), Y = new O("isEditableItem", !0), Be = new O("matchFocus", !1), as = new O("viewHasSearchPattern", !1), _r = new O("viewHasReplacePattern", !1), Wr = new O("viewHasFilePattern", !1), vt = new O("viewHasSomeCollapsibleResult", !1), yt = new O("inTreeView", !1), Xt = class Xt {
  getHeight(e) {
    return Xt.ITEM_HEIGHT;
  }
  getTemplateId(e) {
    if (e instanceof X)
      return zt.TEMPLATE_ID;
    if (e instanceof L)
      return $t.TEMPLATE_ID;
    if (e instanceof F)
      return Gt.TEMPLATE_ID;
    throw console.error("Invalid search tree element", e), new Error("Invalid search tree element");
  }
};
Xt.ITEM_HEIGHT = 22;
let Ut = Xt;
var Ze;
let zt = (Ze = class extends se {
  constructor(e, t, i, s, r, n) {
    super(), this.searchView = e, this.labels = t, this.contextService = i, this.labelService = s, this.instantiationService = r, this.contextKeyService = n, this.templateId = Ze.TEMPLATE_ID;
  }
  renderCompressedElements(e, t, i, s) {
    const r = e.element, n = r.elements[r.elements.length - 1], a = r.elements.map((c) => c.name());
    if (n.resource) {
      const c = n instanceof _t ? Tt.ROOT_FOLDER : Tt.FOLDER;
      i.label.setResource({ resource: n.resource, name: a }, {
        fileKind: c,
        separator: this.labelService.getSeparator(n.resource.scheme)
      });
    } else
      i.label.setLabel(l("searchFolderMatch.other.label", "Other files"));
    this.renderFolderDetails(n, i);
  }
  renderTemplate(e) {
    const t = new Ae(), i = v(e, k(".foldermatch")), s = this.labels.create(i, { supportDescriptionHighlights: !0, supportHighlights: !0 });
    t.add(s);
    const r = new sr(
      v(i, k(".badge")),
      {},
      rr
    ), n = v(i, k(".actionBarContainer")), a = new Ae();
    t.add(a);
    const c = t.add(this.contextKeyService.createScoped(e));
    Be.bindTo(c).set(!1), Te.bindTo(c).set(!1), Ne.bindTo(c).set(!0);
    const h = this.instantiationService.createChild(new Rt([J, c])), u = t.add(h.createInstance(Zi, n, P.SearchActionMenu, {
      menuOptions: {
        shouldForwardArgs: !0
      },
      hiddenItemStrategy: 0,
      toolbarOptions: {
        primaryGroup: (d) => /^inline/.test(d)
      }
    }));
    return {
      label: s,
      badge: r,
      actions: u,
      disposables: t,
      elementDisposables: a,
      contextKeyService: c
    };
  }
  renderElement(e, t, i) {
    const s = e.element;
    if (s.resource) {
      const r = this.contextService.getWorkspaceFolder(s.resource);
      r && Dt(r.uri, s.resource) ? i.label.setFile(s.resource, { fileKind: Tt.ROOT_FOLDER, hidePath: !0 }) : i.label.setFile(s.resource, { fileKind: Tt.FOLDER, hidePath: this.searchView.isTreeLayoutViewVisible });
    } else
      i.label.setLabel(l("searchFolderMatch.other.label", "Other files"));
    Y.bindTo(i.contextKeyService).set(!s.hasOnlyReadOnlyMatches()), i.elementDisposables.add(s.onChange(() => {
      Y.bindTo(i.contextKeyService).set(!s.hasOnlyReadOnlyMatches());
    })), this.renderFolderDetails(s, i);
  }
  disposeElement(e, t, i) {
    i.elementDisposables.clear();
  }
  disposeCompressedElements(e, t, i, s) {
    i.elementDisposables.clear();
  }
  disposeTemplate(e) {
    e.disposables.dispose();
  }
  renderFolderDetails(e, t) {
    const i = e.recursiveMatchCount();
    t.badge.setCount(i), t.badge.setTitleFormat(i > 1 ? l("searchFileMatches", "{0} files found", i) : l("searchFileMatch", "{0} file found", i)), t.actions.context = { viewer: this.searchView.getControl(), element: e };
  }
}, Ze.TEMPLATE_ID = "folderMatch", Ze);
zt = B([
  g(2, ue),
  g(3, he),
  g(4, N),
  g(5, J)
], zt);
var et;
let $t = (et = class extends se {
  constructor(e, t, i, s, r, n) {
    super(), this.searchView = e, this.labels = t, this.contextService = i, this.configurationService = s, this.instantiationService = r, this.contextKeyService = n, this.templateId = et.TEMPLATE_ID;
  }
  renderCompressedElements(e, t, i, s) {
    throw new Error("Should never happen since node is incompressible.");
  }
  renderTemplate(e) {
    const t = new Ae(), i = new Ae();
    t.add(i);
    const s = v(e, k(".filematch")), r = this.labels.create(s);
    t.add(r);
    const n = new sr(v(s, k(".badge")), {}, rr), a = v(s, k(".actionBarContainer")), c = t.add(this.contextKeyService.createScoped(e));
    Be.bindTo(c).set(!1), Te.bindTo(c).set(!0), Ne.bindTo(c).set(!1);
    const h = this.instantiationService.createChild(new Rt([J, c])), u = t.add(h.createInstance(Zi, a, P.SearchActionMenu, {
      menuOptions: {
        shouldForwardArgs: !0
      },
      hiddenItemStrategy: 0,
      toolbarOptions: {
        primaryGroup: (d) => /^inline/.test(d)
      }
    }));
    return {
      el: s,
      label: r,
      badge: n,
      actions: u,
      disposables: t,
      elementDisposables: i,
      contextKeyService: c
    };
  }
  renderElement(e, t, i) {
    var c, h;
    const s = e.element;
    i.el.setAttribute("data-resource", s.resource.toString());
    const r = this.configurationService.getValue("search").decorations;
    i.label.setFile(s.resource, { hidePath: this.searchView.isTreeLayoutViewVisible && !(s.parent() instanceof Ii), hideIcon: !1, fileDecorations: { colors: r.colors, badges: r.badges } });
    const n = s.count();
    i.badge.setCount(n), i.badge.setTitleFormat(n > 1 ? l("searchMatches", "{0} matches found", n) : l("searchMatch", "{0} match found", n)), i.actions.context = { viewer: this.searchView.getControl(), element: s }, Y.bindTo(i.contextKeyService).set(!s.hasOnlyReadOnlyMatches()), i.elementDisposables.add(s.onChange(() => {
      Y.bindTo(i.contextKeyService).set(!s.hasOnlyReadOnlyMatches());
    }));
    const a = (h = (c = i.el.parentElement) == null ? void 0 : c.parentElement) == null ? void 0 : h.querySelector(".monaco-tl-twistie");
    a == null || a.classList.add("force-twistie");
  }
  disposeElement(e, t, i) {
    i.elementDisposables.clear();
  }
  disposeTemplate(e) {
    e.disposables.dispose();
  }
}, et.TEMPLATE_ID = "fileMatch", et);
$t = B([
  g(2, ue),
  g(3, V),
  g(4, N),
  g(5, J)
], $t);
var tt;
let Gt = (tt = class extends se {
  constructor(e, t, i, s, r, n) {
    super(), this.searchModel = e, this.searchView = t, this.contextService = i, this.configurationService = s, this.instantiationService = r, this.contextKeyService = n, this.templateId = tt.TEMPLATE_ID;
  }
  renderCompressedElements(e, t, i, s) {
    throw new Error("Should never happen since node is incompressible.");
  }
  renderTemplate(e) {
    e.classList.add("linematch");
    const t = v(e, k("a.plain.match")), i = v(t, k("span")), s = v(t, k("span.findInFileMatch")), r = v(t, k("span.replaceMatch")), n = v(t, k("span")), a = v(e, k("span.matchLineNum")), c = v(e, k("span.actionBarContainer")), h = new Ae(), u = h.add(this.contextKeyService.createScoped(e));
    Be.bindTo(u).set(!0), Te.bindTo(u).set(!1), Ne.bindTo(u).set(!1);
    const d = this.instantiationService.createChild(new Rt([J, u])), f = h.add(d.createInstance(Zi, c, P.SearchActionMenu, {
      menuOptions: {
        shouldForwardArgs: !0
      },
      hiddenItemStrategy: 0,
      toolbarOptions: {
        primaryGroup: (p) => /^inline/.test(p)
      }
    }));
    return {
      parent: t,
      before: i,
      match: s,
      replace: r,
      after: n,
      lineNumber: a,
      actions: f,
      disposables: h,
      contextKeyService: u
    };
  }
  renderElement(e, t, i) {
    const s = e.element, r = s.preview(), n = this.searchModel.isReplaceActive() && !!this.searchModel.replaceString && !(s instanceof fe && s.isWebviewMatch());
    i.before.textContent = r.before, i.match.textContent = r.inside, i.match.classList.toggle("replace", n), i.replace.textContent = n ? s.replaceString : "", i.after.textContent = r.after, i.parent.title = (r.before + (n ? s.replaceString : r.inside) + r.after).trim().substr(0, 999), Y.bindTo(i.contextKeyService).set(!(s instanceof fe && s.isWebviewMatch()));
    const a = s.range().endLineNumber - s.range().startLineNumber, c = a > 0 ? `+${a}` : "", h = this.configurationService.getValue("search").showLineNumbers, u = h ? `:${s.range().startLineNumber}` : "";
    i.lineNumber.classList.toggle("show", a > 0 || h), i.lineNumber.textContent = u + c, i.lineNumber.setAttribute("title", this.getMatchTitle(s, h)), i.actions.context = { viewer: this.searchView.getControl(), element: s };
  }
  disposeTemplate(e) {
    e.disposables.dispose();
  }
  getMatchTitle(e, t) {
    const i = e.range().startLineNumber, s = e.range().endLineNumber - e.range().startLineNumber, r = t ? l("lineNumStr", "From line {0}", i, s) + " " : "", n = s > 0 ? "+ " + l("numLinesStr", "{0} more lines", s) : "";
    return r + n;
  }
}, tt.TEMPLATE_ID = "match", tt);
Gt = B([
  g(2, ue),
  g(3, V),
  g(4, N),
  g(5, J)
], Gt);
let Wi = class {
  constructor(e, t) {
    this.searchModel = e, this.labelService = t;
  }
  getWidgetAriaLabel() {
    return l("search", "Search");
  }
  getAriaLabel(e) {
    if (e instanceof X) {
      const t = e.allDownstreamFileMatches().reduce((i, s) => i + s.count(), 0);
      return e.resource ? l(
        "folderMatchAriaLabel",
        "{0} matches in folder root {1}, Search result",
        t,
        e.name()
      ) : l(
        "otherFilesAriaLabel",
        "{0} matches outside of the workspace, Search result",
        t
      );
    }
    if (e instanceof L) {
      const t = this.labelService.getUriLabel(e.resource, { relative: !0 }) || e.resource.fsPath;
      return l(
        "fileMatchAriaLabel",
        "{0} matches in file {1} of folder {2}, Search result",
        e.count(),
        e.name(),
        Xn(t)
      );
    }
    if (e instanceof F) {
      const t = e, i = this.searchModel, s = i.isReplaceActive() && !!i.replaceString, r = t.getMatchString(), n = t.range(), a = t.text().substr(0, n.endColumn + 150);
      return s ? l(
        "replacePreviewResultAria",
        "'{0}' at column {1} replace {2} with {3}",
        a,
        n.startColumn,
        r,
        t.replaceString
      ) : l(
        "searchResultAria",
        "'{0}' at column {1} found {2}",
        a,
        n.startColumn,
        r
      );
    }
    return null;
  }
};
Wi = B([
  g(1, he)
], Wi);
const q = new O("inSearchEditor", !1), cs = "search-editor", Lr = "search/editor", Os = "searchEditorFindMatch", Li = "workbench.editor.searchEditor", Fc = "search.action.openNewEditor", wt = "search.action.openEditor", Or = "toggleSearchEditorContextLines", Oi = "workbench.editorinputs.searchEditorInput";
class Pc extends se {
  get markupInput() {
    return this._markupInput;
  }
  set markupInput(e) {
    this._markupInput !== e && (this._markupInput = e, this._onDidChange.fire({ markupInput: e }));
  }
  get markupPreview() {
    return this._markupPreview;
  }
  set markupPreview(e) {
    this._markupPreview !== e && (this._markupPreview = e, this._onDidChange.fire({ markupPreview: e }));
  }
  get codeInput() {
    return this._codeInput;
  }
  set codeInput(e) {
    this._codeInput !== e && (this._codeInput = e, this._onDidChange.fire({ codeInput: e }));
  }
  get codeOutput() {
    return this._codeOutput;
  }
  set codeOutput(e) {
    this._codeOutput !== e && (this._codeOutput = e, this._onDidChange.fire({ codeOutput: e }));
  }
  constructor(e, t, i, s) {
    super(), this._onDidChange = this._register(new U()), this.onDidChange = this._onDidChange.event, this._markupInput = !0, this._markupPreview = !0, this._codeInput = !0, this._codeOutput = !0, this._markupInput = e, this._markupPreview = t, this._codeInput = i, this._codeOutput = s, this._initialMarkupInput = e, this._initialMarkupPreview = t, this._initialCodeInput = i, this._initialCodeOutput = s;
  }
  isModified() {
    return this._markupInput !== this._initialMarkupInput || this._markupPreview !== this._initialMarkupPreview || this._codeInput !== this._initialCodeInput || this._codeOutput !== this._initialCodeOutput;
  }
  update(e) {
    this._markupInput = e.markupInput, this._markupPreview = e.markupPreview, this._codeInput = e.codeInput, this._codeOutput = e.codeOutput;
  }
}
var Tc = ".monaco-workbench .simple-fr-find-part-wrapper{background-color:var(--vscode-editorWidget-background)!important;border-bottom-left-radius:4px;border-bottom-right-radius:4px;box-shadow:0 0 8px 2px var(--vscode-widget-shadow);color:var(--vscode-editorWidget-foreground);max-width:calc(100% - 64px);overflow:hidden;padding:0 var(--notebook-find-horizontal-padding);position:absolute;right:18px;top:-45px;transition:top .2s linear;visibility:hidden;width:var(--notebook-find-width);z-index:10}.monaco-workbench.reduce-motion .simple-fr-find-part-wrapper{transition:top 0ms linear}.monaco-workbench .notebookOverlay .simple-fr-find-part-wrapper.visible{z-index:100}.monaco-workbench .simple-fr-find-part,.monaco-workbench .simple-fr-replace-part{align-items:center;display:flex;margin:0 0 0 17px;padding:4px;pointer-events:all;position:relative;top:0;z-index:10}.monaco-workbench .simple-fr-find-part-wrapper .find-replace-progress{height:2px;position:absolute;width:100%}.monaco-workbench .simple-fr-find-part-wrapper .find-replace-progress .monaco-progress-container{height:2px;top:0!important;z-index:100!important}.monaco-workbench .simple-fr-find-part-wrapper .find-replace-progress .monaco-progress-container .progress-bit{height:2px}.monaco-workbench .simple-fr-find-part-wrapper .monaco-findInput{width:224px}.monaco-workbench .simple-fr-find-part-wrapper .button{align-items:center;background-position:50%;background-repeat:no-repeat;cursor:pointer;display:flex;flex:initial;height:20px;justify-content:center;margin-left:3px;width:20px}.monaco-workbench .simple-fr-find-part-wrapper.visible .simple-fr-find-part{visibility:visible}.monaco-workbench .simple-fr-find-part-wrapper .toggle{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:center;margin-left:0;pointer-events:all;position:absolute;top:0;width:18px}.monaco-workbench .simple-fr-find-part-wrapper.visible{visibility:visible}.monaco-workbench .simple-fr-find-part-wrapper.visible-transition{top:0}.monaco-workbench .simple-fr-find-part .monaco-findInput{flex:1}.monaco-workbench .simple-fr-find-part .button{background-position:50%;background-repeat:no-repeat;cursor:pointer;display:flex;flex:initial;height:20px;margin-left:3px;min-width:20px;width:20px}.monaco-workbench .simple-fr-find-part-wrapper .button.disabled{cursor:default;opacity:.3}.monaco-workbench .simple-fr-find-part-wrapper .monaco-custom-toggle.disabled{background-color:inherit!important;cursor:default;opacity:.3;pointer-events:none;user-select:none;-webkit-user-select:none}.monaco-workbench .simple-fr-find-part-wrapper .find-filter-button{box-sizing:border-box;color:inherit;cursor:pointer;float:left;margin-left:2px;user-select:none;-webkit-user-select:none}.find-filter-button .monaco-action-bar .action-label{padding:0}.monaco-workbench .simple-fr-find-part .monaco-inputbox>.ibwrapper>.input,.monaco-workbench .simple-fr-replace-part .monaco-inputbox>.ibwrapper>.input{height:24px}.monaco-workbench .simple-fr-find-part-wrapper .monaco-sash{background-color:var(--vscode-editorWidget-resizeBorder,var(--vscode-editorWidget-border));left:0!important}";
ti(Tc, {});
Q("find-filter", A.filter, l("findFilterIcon", "Icon for Find Filter in find widget."));
const Ac = l("notebook.find.filter.filterAction", "Find Filters"), Mc = l("notebook.find.filter.findInMarkupInput", "Markdown Source"), _c = l("notebook.find.filter.findInMarkupPreview", "Rendered Markdown"), Wc = l("notebook.find.filter.findInCodeInput", "Code Cell Source"), Lc = l("notebook.find.filter.findInCodeOutput", "Code Cell Output"), Oc = 318, Dc = 4;
let Di = class extends Jn {
  constructor(e, t, i, s) {
    super(t, { getActions: () => this.getActions() }, s, {
      actionRunner: i,
      classNames: t.class,
      anchorAlignmentProvider: () => 1
    }), this.filters = e;
  }
  render(e) {
    super.render(e), this.updateChecked();
  }
  getActions() {
    const e = {
      checked: this.filters.markupInput,
      class: void 0,
      enabled: !0,
      id: "findInMarkdownInput",
      label: Mc,
      run: async () => {
        this.filters.markupInput = !this.filters.markupInput;
      },
      tooltip: ""
    }, t = {
      checked: this.filters.markupPreview,
      class: void 0,
      enabled: !0,
      id: "findInMarkdownInput",
      label: _c,
      run: async () => {
        this.filters.markupPreview = !this.filters.markupPreview;
      },
      tooltip: ""
    }, i = {
      checked: this.filters.codeInput,
      class: void 0,
      enabled: !0,
      id: "findInCodeInput",
      label: Wc,
      run: async () => {
        this.filters.codeInput = !this.filters.codeInput;
      },
      tooltip: ""
    }, s = {
      checked: this.filters.codeOutput,
      class: void 0,
      enabled: !0,
      id: "findInCodeOutput",
      label: Lc,
      run: async () => {
        this.filters.codeOutput = !this.filters.codeOutput;
      },
      tooltip: "",
      dispose: () => null
    };
    return Zn ? [
      e,
      i
    ] : [
      e,
      t,
      new eo(),
      i,
      s
    ];
  }
  updateChecked() {
    this.element.classList.toggle("checked", this._action.checked);
  }
};
Di = B([
  g(3, es)
], Di);
class Nc extends se {
  constructor(e, t, i, s, r = Ac) {
    super(), this.filters = e, this.contextMenuService = t, this.instantiationService = i, this._actionbar = null, this._toggleStyles = s.toggleStyles, this._filtersAction = new nr(
      "notebookFindFilterAction",
      r,
      "notebook-filters " + z.asClassName(wa)
    ), this._filtersAction.checked = !1, this._filterButtonContainer = k(".find-filter-button"), this._filterButtonContainer.classList.add("monaco-custom-toggle"), this.createFilters(this._filterButtonContainer);
  }
  get container() {
    return this._filterButtonContainer;
  }
  get width() {
    return 2 + 2 + 2 + 16;
  }
  applyStyles(e) {
    const t = this._toggleStyles;
    this._filterButtonContainer.style.border = "1px solid transparent", this._filterButtonContainer.style.borderRadius = "3px", this._filterButtonContainer.style.borderColor = e && t.inputActiveOptionBorder || "", this._filterButtonContainer.style.color = e && t.inputActiveOptionForeground || "inherit", this._filterButtonContainer.style.backgroundColor = e && t.inputActiveOptionBackground || "";
  }
  createFilters(e) {
    this._actionbar = this._register(new or(e, {
      actionViewItemProvider: (t) => {
        if (t.id === this._filtersAction.id)
          return this.instantiationService.createInstance(Di, this.filters, t, new to());
      }
    })), this._actionbar.push(this._filtersAction, { icon: !0, label: !1 });
  }
}
Yn((o, e) => {
  e.addRule(`
	.notebook-editor {
		--notebook-find-width: ${Oc}px;
		--notebook-find-horizontal-padding: ${Dc}px;
	}
	`);
});
class yi extends io {
  constructor(e, t, i, s, r, n, a, c) {
    var h, u, d;
    super(e, t, i, s), this.contextMenuService = r, this.instantiationService = n, this.filters = a, this._filterChecked = !1, this._visible = !1, this._findFilter = this._register(new Nc(a, r, n, i, l("searchFindInputNotebookFilter.label", "Notebook Find Filters"))), this.inputBox.paddingRight = (((h = this.caseSensitive) == null ? void 0 : h.width()) ?? 0) + (((u = this.wholeWords) == null ? void 0 : u.width()) ?? 0) + (((d = this.regex) == null ? void 0 : d.width()) ?? 0) + this._findFilter.width, this.controls.appendChild(this._findFilter.container), this._findFilter.container.classList.add("monaco-custom-toggle"), this.filterVisible = c;
  }
  set filterVisible(e) {
    this._findFilter.container.style.display = e ? "" : "none", this._visible = e, this.updateStyles();
  }
  setEnabled(e) {
    var t, i;
    super.setEnabled(e), e && (!this._filterChecked || !this._visible) ? (t = this.regex) == null || t.enable() : (i = this.regex) == null || i.disable();
  }
  updateStyles() {
    this._filterChecked = !this.filters.markupInput || !this.filters.markupPreview || !this.filters.codeInput || !this.filters.codeOutput, this._findFilter.applyStyles(this._filterChecked);
  }
}
const Dr = 26, Yt = class Yt extends nr {
  constructor(e) {
    super(Yt.ID, "", z.asClassName(Ta), !1), this._searchWidget = e;
  }
  set searchWidget(e) {
    this._searchWidget = e;
  }
  run() {
    return this._searchWidget ? this._searchWidget.triggerReplaceAll() : Promise.resolve(null);
  }
};
Yt.ID = "search.action.replaceAll";
let Xe = Yt;
const Ds = ai ? 256 : 2048;
function Ns(o, e, t) {
  const i = !!e.match(/\n/);
  if (t && (i || t.clientHeight > Dr) && t.selectionStart > 0) {
    o.stopPropagation();
    return;
  }
}
function Bs(o, e, t) {
  const i = !!e.match(/\n/);
  if (t && (i || t.clientHeight > Dr) && t.selectionEnd < t.value.length) {
    o.stopPropagation();
    return;
  }
}
var ie;
let jt = (ie = class extends er {
  constructor(e, t, i, s, r, n, a, c, h, u, d) {
    super(), this.contextViewService = i, this.contextKeyService = s, this.keybindingService = r, this.clipboardServce = n, this.configurationService = a, this.accessibilityService = c, this.contextMenuService = h, this.instantiationService = u, this.editorService = d, this.ignoreGlobalFindBufferOnNextFocus = !1, this.previousGlobalFindBufferValue = null, this._onSearchSubmit = this._register(new U()), this.onSearchSubmit = this._onSearchSubmit.event, this._onSearchCancel = this._register(new U()), this.onSearchCancel = this._onSearchCancel.event, this._onReplaceToggled = this._register(new U()), this.onReplaceToggled = this._onReplaceToggled.event, this._onReplaceStateChange = this._register(new U()), this.onReplaceStateChange = this._onReplaceStateChange.event, this._onPreserveCaseChange = this._register(new U()), this.onPreserveCaseChange = this._onPreserveCaseChange.event, this._onReplaceValueChanged = this._register(new U()), this.onReplaceValueChanged = this._onReplaceValueChanged.event, this._onReplaceAll = this._register(new U()), this.onReplaceAll = this._onReplaceAll.event, this._onBlur = this._register(new U()), this.onBlur = this._onBlur.event, this._onDidHeightChange = this._register(new U()), this.onDidHeightChange = this._onDidHeightChange.event, this._onDidToggleContext = new U(), this.onDidToggleContext = this._onDidToggleContext.event, this.replaceActive = ne.bindTo(this.contextKeyService), this.searchInputBoxFocused = Pt.bindTo(this.contextKeyService), this.replaceInputBoxFocused = Tr.bindTo(this.contextKeyService);
    const f = t.notebookOptions ?? {
      isInNotebookMarkdownInput: !0,
      isInNotebookMarkdownPreview: !0,
      isInNotebookCellInput: !0,
      isInNotebookCellOutput: !0
    };
    this._notebookFilters = this._register(new Pc(
      f.isInNotebookMarkdownInput,
      f.isInNotebookMarkdownPreview,
      f.isInNotebookCellInput,
      f.isInNotebookCellOutput
    )), this._register(this._notebookFilters.onDidChange(() => {
      this.searchInput instanceof yi && this.searchInput.updateStyles();
    })), this._register(this.editorService.onDidEditorsChange((p) => {
      this.searchInput instanceof yi && p.event.editor instanceof ks && (p.event.kind === 3 || p.event.kind === 4) && (this.searchInput.filterVisible = this._hasNotebookOpen());
    })), this._replaceHistoryDelayer = new Oe(500), this.render(e, t), this.configurationService.onDidChangeConfiguration((p) => {
      p.affectsConfiguration("editor.accessibilitySupport") && this.updateAccessibilitySupport();
    }), this.accessibilityService.onDidChangeScreenReaderOptimized(() => this.updateAccessibilitySupport()), this.updateAccessibilitySupport();
  }
  _hasNotebookOpen() {
    return this.editorService.editors.some((t) => t instanceof ks);
  }
  getNotebookFilters() {
    return this._notebookFilters;
  }
  focus(e = !0, t = !1, i = !1) {
    this.ignoreGlobalFindBufferOnNextFocus = i, t && this.isReplaceShown() ? this.replaceInput && (this.replaceInput.focus(), e && this.replaceInput.select()) : this.searchInput && (this.searchInput.focus(), e && this.searchInput.select());
  }
  setWidth(e) {
    var t;
    (t = this.searchInput) == null || t.inputBox.layout(), this.replaceInput && (this.replaceInput.width = e - 28, this.replaceInput.inputBox.layout());
  }
  clear() {
    var e, t;
    (e = this.searchInput) == null || e.clear(), (t = this.replaceInput) == null || t.setValue(""), this.setReplaceAllActionState(!1);
  }
  isReplaceShown() {
    return this.replaceContainer ? !this.replaceContainer.classList.contains("disabled") : !1;
  }
  isReplaceActive() {
    return !!this.replaceActive.get();
  }
  getReplaceValue() {
    var e;
    return ((e = this.replaceInput) == null ? void 0 : e.getValue()) ?? "";
  }
  toggleReplace(e) {
    (e === void 0 || e !== this.isReplaceShown()) && this.onToggleReplaceButton();
  }
  getSearchHistory() {
    var e;
    return ((e = this.searchInput) == null ? void 0 : e.inputBox.getHistory()) ?? [];
  }
  getReplaceHistory() {
    var e;
    return ((e = this.replaceInput) == null ? void 0 : e.inputBox.getHistory()) ?? [];
  }
  prependSearchHistory(e) {
    var t;
    (t = this.searchInput) == null || t.inputBox.prependHistory(e);
  }
  prependReplaceHistory(e) {
    var t;
    (t = this.replaceInput) == null || t.inputBox.prependHistory(e);
  }
  clearHistory() {
    var e, t;
    (e = this.searchInput) == null || e.inputBox.clearHistory(), (t = this.replaceInput) == null || t.inputBox.clearHistory();
  }
  showNextSearchTerm() {
    var e;
    (e = this.searchInput) == null || e.inputBox.showNextValue();
  }
  showPreviousSearchTerm() {
    var e;
    (e = this.searchInput) == null || e.inputBox.showPreviousValue();
  }
  showNextReplaceTerm() {
    var e;
    (e = this.replaceInput) == null || e.inputBox.showNextValue();
  }
  showPreviousReplaceTerm() {
    var e;
    (e = this.replaceInput) == null || e.inputBox.showPreviousValue();
  }
  searchInputHasFocus() {
    return !!this.searchInputBoxFocused.get();
  }
  replaceInputHasFocus() {
    var e;
    return !!((e = this.replaceInput) != null && e.inputBox.hasFocus());
  }
  focusReplaceAllAction() {
    var e;
    (e = this.replaceActionBar) == null || e.focus(!0);
  }
  focusRegexAction() {
    var e;
    (e = this.searchInput) == null || e.focusOnRegex();
  }
  render(e, t) {
    this.domNode = v(e, k(".search-widget")), this.domNode.style.position = "relative", t._hideReplaceToggle || this.renderToggleReplaceButton(this.domNode), this.renderSearchInput(this.domNode, t), this.renderReplaceInput(this.domNode, t);
  }
  updateAccessibilitySupport() {
    var e;
    (e = this.searchInput) == null || e.setFocusInputOnOptionClick(!this.accessibilityService.isScreenReaderOptimized());
  }
  renderToggleReplaceButton(e) {
    const t = {
      buttonBackground: void 0,
      buttonBorder: void 0,
      buttonForeground: void 0,
      buttonHoverBackground: void 0,
      buttonSecondaryBackground: void 0,
      buttonSecondaryForeground: void 0,
      buttonSecondaryHoverBackground: void 0,
      buttonSeparator: void 0
    };
    this.toggleReplaceButton = this._register(new so(e, t)), this.toggleReplaceButton.element.setAttribute("aria-expanded", "false"), this.toggleReplaceButton.element.classList.add("toggle-replace-button"), this.toggleReplaceButton.icon = vi, this.toggleReplaceButton.onDidClick(() => this.onToggleReplaceButton()), this.toggleReplaceButton.element.title = l("search.replace.toggle.button.title", "Toggle Replace");
  }
  renderSearchInput(e, t) {
    const i = {
      label: l("label.Search", "Search: Type Search Term and press Enter to search"),
      validation: (r) => this.validateSearchInput(r),
      placeholder: l("search.placeHolder", "Search"),
      appendCaseSensitiveLabel: _e("", this.keybindingService.lookupKeybinding(Cr)),
      appendWholeWordsLabel: _e("", this.keybindingService.lookupKeybinding(kr)),
      appendRegexLabel: _e("", this.keybindingService.lookupKeybinding(Rr)),
      history: t.searchHistory,
      showHistoryHint: () => bi(this.keybindingService),
      flexibleHeight: !0,
      flexibleMaxHeight: ie.INPUT_MAX_HEIGHT,
      showCommonFindToggles: !0,
      inputBoxStyles: t.inputBoxStyles,
      toggleStyles: t.toggleStyles
    }, s = v(e, k(".search-container.input-box"));
    this.searchInput = this._register(new yi(
      s,
      this.contextViewService,
      i,
      this.contextKeyService,
      this.contextMenuService,
      this.instantiationService,
      this._notebookFilters,
      this._hasNotebookOpen()
    )), this.searchInput.onKeyDown((r) => this.onSearchInputKeyDown(r)), this.searchInput.setValue(t.value || ""), this.searchInput.setRegex(!!t.isRegex), this.searchInput.setCaseSensitive(!!t.isCaseSensitive), this.searchInput.setWholeWords(!!t.isWholeWords), this._register(this.searchInput.onCaseSensitiveKeyDown((r) => this.onCaseSensitiveKeyDown(r))), this._register(this.searchInput.onRegexKeyDown((r) => this.onRegexKeyDown(r))), this._register(this.searchInput.inputBox.onDidChange(() => this.onSearchInputChanged())), this._register(this.searchInput.inputBox.onDidHeightChange(() => this._onDidHeightChange.fire())), this._register(this.onReplaceValueChanged(() => {
      this._replaceHistoryDelayer.trigger(() => {
        var r;
        return (r = this.replaceInput) == null ? void 0 : r.inputBox.addToHistory();
      });
    })), this.searchInputFocusTracker = this._register(xi(this.searchInput.inputBox.inputElement)), this._register(this.searchInputFocusTracker.onDidFocus(async () => {
      var n, a, c;
      this.searchInputBoxFocused.set(!0);
      const r = this.searchConfiguration.globalFindClipboard;
      if (!this.ignoreGlobalFindBufferOnNextFocus && r) {
        const h = await this.clipboardServce.readFindText();
        h && this.previousGlobalFindBufferValue !== h && ((n = this.searchInput) == null || n.inputBox.addToHistory(), (a = this.searchInput) == null || a.setValue(h), (c = this.searchInput) == null || c.select()), this.previousGlobalFindBufferValue = h;
      }
      this.ignoreGlobalFindBufferOnNextFocus = !1;
    })), this._register(this.searchInputFocusTracker.onDidBlur(() => this.searchInputBoxFocused.set(!1))), this.showContextToggle = new Ji({
      isChecked: !1,
      title: _e(l("showContext", "Toggle Context Lines"), this.keybindingService.lookupKeybinding(Or)),
      icon: Pa,
      ...kt
    }), this._register(this.showContextToggle.onChange(() => this.onContextLinesChanged())), t.showContextToggle && (this.contextLinesInput = new ro(
      s,
      this.contextViewService,
      { type: "number", inputBoxStyles: Wt }
    ), this.contextLinesInput.element.classList.add("context-lines-input"), this.contextLinesInput.value = "" + (this.configurationService.getValue("search").searchEditor.defaultNumberOfContextLines ?? 1), this._register(this.contextLinesInput.onDidChange((r) => {
      r !== "0" && (this.showContextToggle.checked = !0), this.onContextLinesChanged();
    })), v(s, this.showContextToggle.domNode));
  }
  onContextLinesChanged() {
    this._onDidToggleContext.fire(), this.contextLinesInput.value.includes("-") && (this.contextLinesInput.value = "0"), this._onDidToggleContext.fire();
  }
  setContextLines(e) {
    this.contextLinesInput && (e === 0 ? this.showContextToggle.checked = !1 : (this.showContextToggle.checked = !0, this.contextLinesInput.value = "" + e));
  }
  renderReplaceInput(e, t) {
    this.replaceContainer = v(e, k(".replace-container.disabled"));
    const i = v(this.replaceContainer, k(".replace-input"));
    this.replaceInput = this._register(new no(i, this.contextViewService, {
      label: l("label.Replace", "Replace: Type replace term and press Enter to preview"),
      placeholder: l("search.replace.placeHolder", "Replace"),
      appendPreserveCaseLabel: _e("", this.keybindingService.lookupKeybinding(Fr)),
      history: t.replaceHistory,
      showHistoryHint: () => bi(this.keybindingService),
      flexibleHeight: !0,
      flexibleMaxHeight: ie.INPUT_MAX_HEIGHT,
      inputBoxStyles: t.inputBoxStyles,
      toggleStyles: t.toggleStyles
    }, this.contextKeyService, !0)), this._register(this.replaceInput.onDidOptionChange((s) => {
      s || this.replaceInput && this._onPreserveCaseChange.fire(this.replaceInput.getPreserveCase());
    })), this.replaceInput.onKeyDown((s) => this.onReplaceInputKeyDown(s)), this.replaceInput.setValue(t.replaceValue || ""), this._register(this.replaceInput.inputBox.onDidChange(() => this._onReplaceValueChanged.fire())), this._register(this.replaceInput.inputBox.onDidHeightChange(() => this._onDidHeightChange.fire())), this.replaceAllAction = new Xe(this), this.replaceAllAction.label = ie.REPLACE_ALL_DISABLED_LABEL, this.replaceActionBar = this._register(new or(this.replaceContainer)), this.replaceActionBar.push([this.replaceAllAction], { icon: !0, label: !1 }), this.onkeydown(this.replaceActionBar.domNode, (s) => this.onReplaceActionbarKeyDown(s)), this.replaceInputFocusTracker = this._register(xi(this.replaceInput.inputBox.inputElement)), this._register(this.replaceInputFocusTracker.onDidFocus(() => this.replaceInputBoxFocused.set(!0))), this._register(this.replaceInputFocusTracker.onDidBlur(() => this.replaceInputBoxFocused.set(!1))), this._register(this.replaceInput.onPreserveCaseKeyDown((s) => this.onPreserveCaseKeyDown(s)));
  }
  triggerReplaceAll() {
    return this._onReplaceAll.fire(), Promise.resolve(null);
  }
  onToggleReplaceButton() {
    var e, t, i, s, r, n;
    (e = this.replaceContainer) == null || e.classList.toggle("disabled"), this.isReplaceShown() ? ((t = this.toggleReplaceButton) == null || t.element.classList.remove(...z.asClassNameArray(vi)), (i = this.toggleReplaceButton) == null || i.element.classList.add(...z.asClassNameArray(Ls))) : ((s = this.toggleReplaceButton) == null || s.element.classList.remove(...z.asClassNameArray(Ls)), (r = this.toggleReplaceButton) == null || r.element.classList.add(...z.asClassNameArray(vi))), (n = this.toggleReplaceButton) == null || n.element.setAttribute("aria-expanded", this.isReplaceShown() ? "true" : "false"), this.updateReplaceActiveState(), this._onReplaceToggled.fire();
  }
  setValue(e) {
    var t;
    (t = this.searchInput) == null || t.setValue(e);
  }
  setReplaceAllActionState(e) {
    this.replaceAllAction && this.replaceAllAction.enabled !== e && (this.replaceAllAction.enabled = e, this.replaceAllAction.label = e ? ie.REPLACE_ALL_ENABLED_LABEL(this.keybindingService) : ie.REPLACE_ALL_DISABLED_LABEL, this.updateReplaceActiveState());
  }
  updateReplaceActiveState() {
    var i, s;
    const e = this.isReplaceActive(), t = this.isReplaceShown() && !!((i = this.replaceAllAction) != null && i.enabled);
    e !== t && (this.replaceActive.set(t), this._onReplaceStateChange.fire(t), (s = this.replaceInput) == null || s.inputBox.layout());
  }
  validateSearchInput(e) {
    var t;
    return e.length === 0 || !((t = this.searchInput) != null && t.getRegex()), null;
  }
  onSearchInputChanged() {
    var e, t, i;
    if ((e = this.searchInput) == null || e.clearMessage(), this.setReplaceAllActionState(!1), this.searchConfiguration.searchOnType)
      if ((t = this.searchInput) != null && t.getRegex())
        try {
          const s = new RegExp(this.searchInput.getValue(), "ug"), r = ((i = `
								~!@#$%^&*()_+
								\`1234567890-=
								qwertyuiop[]\\
								QWERTYUIOP{}|
								asdfghjkl;'
								ASDFGHJKL:"
								zxcvbnm,./
								ZXCVBNM<>? `.match(s)) == null ? void 0 : i.length) ?? 0, n = r < 50 ? 1 : r < 100 ? 5 : 10;
          this.submitSearch(!0, this.searchConfiguration.searchOnTypeDebouncePeriod * n);
        } catch {
        }
      else
        this.submitSearch(!0, this.searchConfiguration.searchOnTypeDebouncePeriod);
  }
  onSearchInputKeyDown(e) {
    var t, i, s, r, n, a, c, h;
    e.equals(Ds | 3) && ((t = this.searchInput) == null || t.inputBox.insertAtCursor(`
`), e.preventDefault()), e.equals(3) ? ((i = this.searchInput) == null || i.onSearchSubmit(), this.submitSearch(), e.preventDefault()) : e.equals(9) ? (this._onSearchCancel.fire({ focus: !0 }), e.preventDefault()) : e.equals(2) ? (this.isReplaceShown() ? (s = this.replaceInput) == null || s.focus() : (r = this.searchInput) == null || r.focusOnCaseSensitive(), e.preventDefault()) : e.equals(16) ? Ns(e, ((n = this.searchInput) == null ? void 0 : n.getValue()) ?? "", ((a = this.searchInput) == null ? void 0 : a.domNode.querySelector("textarea")) ?? null) : e.equals(18) && Bs(e, ((c = this.searchInput) == null ? void 0 : c.getValue()) ?? "", ((h = this.searchInput) == null ? void 0 : h.domNode.querySelector("textarea")) ?? null);
  }
  onCaseSensitiveKeyDown(e) {
    var t;
    e.equals(1026) && this.isReplaceShown() && ((t = this.replaceInput) == null || t.focus(), e.preventDefault());
  }
  onRegexKeyDown(e) {
    var t;
    e.equals(2) && this.isReplaceShown() && ((t = this.replaceInput) == null || t.focusOnPreserve(), e.preventDefault());
  }
  onPreserveCaseKeyDown(e) {
    e.equals(2) ? (this.isReplaceActive() ? this.focusReplaceAllAction() : this._onBlur.fire(), e.preventDefault()) : e.equals(1026) && (this.focusRegexAction(), e.preventDefault());
  }
  onReplaceInputKeyDown(e) {
    var t, i, s, r, n, a, c;
    e.equals(Ds | 3) && ((t = this.replaceInput) == null || t.inputBox.insertAtCursor(`
`), e.preventDefault()), e.equals(3) ? (this.submitSearch(), e.preventDefault()) : e.equals(2) ? ((i = this.searchInput) == null || i.focusOnCaseSensitive(), e.preventDefault()) : e.equals(1026) ? ((s = this.searchInput) == null || s.focus(), e.preventDefault()) : e.equals(16) ? Ns(e, ((r = this.replaceInput) == null ? void 0 : r.getValue()) ?? "", ((n = this.replaceInput) == null ? void 0 : n.domNode.querySelector("textarea")) ?? null) : e.equals(18) && Bs(e, ((a = this.replaceInput) == null ? void 0 : a.getValue()) ?? "", ((c = this.replaceInput) == null ? void 0 : c.domNode.querySelector("textarea")) ?? null);
  }
  onReplaceActionbarKeyDown(e) {
    e.equals(1026) && (this.focusRegexAction(), e.preventDefault());
  }
  async submitSearch(e = !1, t = 0) {
    var r, n;
    if ((r = this.searchInput) == null || r.validate(), !((n = this.searchInput) != null && n.inputBox.isInputValid()))
      return;
    const i = this.searchInput.getValue(), s = this.searchConfiguration.globalFindClipboard;
    i && s && await this.clipboardServce.writeFindText(i), this._onSearchSubmit.fire({ triggeredOnType: e, delay: t });
  }
  getContextLines() {
    return this.showContextToggle.checked ? +this.contextLinesInput.value : 0;
  }
  modifyContextLines(e) {
    const i = +this.contextLinesInput.value + (e ? 1 : -1);
    this.showContextToggle.checked = i !== 0, this.contextLinesInput.value = "" + i;
  }
  toggleContextLines() {
    this.showContextToggle.checked = !this.showContextToggle.checked, this.onContextLinesChanged();
  }
  dispose() {
    this.setReplaceAllActionState(!1), super.dispose();
  }
  get searchConfiguration() {
    return this.configurationService.getValue("search");
  }
}, ie.INPUT_MAX_HEIGHT = 134, ie.REPLACE_ALL_DISABLED_LABEL = l(
  "search.action.replaceAll.disabled.label",
  "Replace All (Submit Search to Enable)"
), ie.REPLACE_ALL_ENABLED_LABEL = (e) => {
  const t = e.lookupKeybinding(Xe.ID);
  return _e(l("search.action.replaceAll.enabled.label", "Replace All"), t);
}, ie);
jt = B([
  g(2, ts),
  g(3, J),
  g(4, Ct),
  g(5, oi),
  g(6, V),
  g(7, ar),
  g(8, es),
  g(9, N),
  g(10, M)
], jt);
function Bc() {
  oo.registerCommandAndKeybindingRule({
    id: Xe.ID,
    weight: 200,
    when: y.and(
      Z,
      ne,
      ao
    ),
    primary: 2563,
    handler: (o) => {
      const e = o.get(R);
      if (Ha(e)) {
        const t = T(e);
        t && new Xe(t.searchAndReplaceWidget).run();
      }
    }
  });
}
var Vc = ".search-editor{display:flex;flex-direction:column}.search-editor .search-results{flex:1}.search-editor .query-container{margin:0 12px 12px 19px;padding-top:6px}.search-editor .search-widget .toggle-replace-button{align-items:center;background-position:50%;background-repeat:no-repeat;box-sizing:border-box;cursor:pointer;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:16px}.search-editor .search-widget .replace-container,.search-editor .search-widget .search-container{align-items:center;display:flex}.search-editor .search-widget .monaco-findInput{display:inline-block;vertical-align:middle;width:100%}.search-editor .search-widget .monaco-inputbox>.ibwrapper{height:100%}.search-editor .search-widget .monaco-inputbox>.ibwrapper>.mirror,.search-editor .search-widget .monaco-inputbox>.ibwrapper>textarea.input{padding:3px 3px 3px 6px}.search-editor .search-widget .monaco-inputbox>.ibwrapper>.mirror{max-height:134px}.search-editor .search-widget .monaco-inputbox>.ibwrapper>textarea.input{height:26px;overflow:initial}.search-editor .monaco-inputbox>.ibwrapper>textarea.input{scrollbar-width:none}.search-editor .monaco-inputbox>.ibwrapper>textarea.input::-webkit-scrollbar{display:none}.search-editor .search-widget .context-lines-input{margin-left:5px;margin-right:2px;max-width:50px}.search-editor .search-widget .context-lines-input input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none!important}.search-editor .search-widget .replace-container{display:inline-flex;margin-top:6px;position:relative}.search-editor .search-widget .replace-input{display:flex;height:25px;position:relative;vertical-align:middle;width:auto!important}.search-editor .search-widget .replace-input>.controls{position:absolute;right:2px;top:3px}.search-editor .search-widget .replace-container.disabled{display:none}.search-editor .search-widget .replace-container .monaco-action-bar{height:25px;margin-left:0}.search-editor .search-widget .replace-container .monaco-action-bar .action-item .codicon{align-items:center;background-repeat:no-repeat;display:flex;height:25px;justify-content:center;margin-right:0;width:25px}.search-editor .includes-excludes{min-height:1em;position:relative}.search-editor .includes-excludes .expand{cursor:pointer;height:16px;position:absolute;right:-2px;width:25px;z-index:2}.search-editor .includes-excludes .file-types{display:none}.search-editor .includes-excludes.expanded .file-types{display:inherit}.search-editor .includes-excludes.expanded .file-types:last-child{padding-bottom:10px}.search-editor .includes-excludes.expanded h4{font-size:11px;font-weight:400;margin:0;overflow:hidden;padding:4px 0 0;text-overflow:ellipsis;white-space:nowrap}.search-editor .messages{cursor:default;margin-top:-5px}.search-editor .message{padding-left:7px;padding-right:22px;padding-top:0}.search-editor a.prominent{text-decoration:underline}.monaco-editor .searchEditorFindMatch{background-color:var(--vscode-searchEditor-findMatchBackground);border:1px solid var(--vscode-searchEditor-findMatchBorder);box-sizing:border-box}.monaco-editor.hc-black .searchEditorFindMatch,.monaco-editor.hc-light .searchEditorFindMatch{border:1px dotted var(--vscode-searchEditor-findMatchBorder)}";
ti(Vc, {});
const Nr = `
`, ls = (o) => (e) => new le(
  e.startLineNumber + o,
  e.startColumn,
  e.endLineNumber + o,
  e.endColumn
), Hc = (o, e) => {
  const t = (r) => `${o.range().startLineNumber + r}`, i = o.fullPreviewLines(), s = [];
  return i.forEach((r, n) => {
    const a = t(n), h = `  ${" ".repeat(e - a.length)}${a}: `, u = h.length, d = h + (r.split(/\r?\n?$/, 1)[0] || ""), f = ({ start: I, end: x }) => new le(
      1,
      (I ?? 1) + u,
      1,
      (x ?? r.length + 1) + u
    ), p = o.rangeInPreview(), S = p.startLineNumber === p.endLineNumber;
    let m;
    S ? m = f({ start: p.startColumn, end: p.endColumn }) : n === 0 ? m = f({ start: p.startColumn }) : n === i.length - 1 ? m = f({ end: p.endColumn }) : m = f({}), s.push({ lineNumber: a, line: d, ranges: [m] });
  }), s;
};
function qc(o, e) {
  const t = o.textMatches().length > 0 ? Br(o.resource, o.textMatches().sort(ye), o.context, e) : void 0, i = o.cellMatches().sort((s, r) => s.cellIndex - r.cellIndex).sort().filter((s) => s.contentMatches.length > 0).map(
    (s, r) => Kc(s, e, r === 0)
  );
  return [t, ...i].filter((s) => !!s);
}
function Br(o, e, t, i, s = !0) {
  const r = e[e.length - 1].range().endLineNumber.toString().length, n = s ? [`${i(o)}:`] : [], a = [], c = {}, h = [];
  t.forEach((f, p) => h.push({ line: f, lineNumber: p })), h.sort((f, p) => f.lineNumber - p.lineNumber);
  let u;
  const d = /* @__PURE__ */ new Set();
  for (e.forEach((f) => {
    Hc(f, r).forEach((p) => {
      if (!d.has(p.lineNumber)) {
        for (; h.length && h[0].lineNumber < +p.lineNumber; ) {
          const { line: S, lineNumber: m } = h.shift();
          u !== void 0 && m !== u + 1 && n.push(""), n.push(`  ${" ".repeat(r - `${m}`.length)}${m}  ${S}`), u = m;
        }
        c[p.lineNumber] = n.length, d.add(p.lineNumber), n.push(p.line), u = +p.lineNumber;
      }
      a.push(...p.ranges.map(ls(c[p.lineNumber])));
    });
  }); h.length; ) {
    const { line: f, lineNumber: p } = h.shift();
    n.push(`  ${p}  ${f}`);
  }
  return { text: n, matchRanges: a };
}
function Kc(o, e, t) {
  return Br(o.cell.uri, o.contentMatches.sort(ye), o.context, e, t);
}
const Qc = (o, e, t, i) => {
  var s, r, n, a;
  return {
    query: o.contentPattern.pattern,
    isRegexp: !!o.contentPattern.isRegExp,
    isCaseSensitive: !!o.contentPattern.isCaseSensitive,
    matchWholeWord: !!o.contentPattern.isWordMatch,
    filesToExclude: t,
    filesToInclude: e,
    showIncludesExcludes: !!(e || t || o != null && o.userDisabledExcludesAndIgnoreFiles),
    useExcludeSettingsAndIgnoreFiles: (o == null ? void 0 : o.userDisabledExcludesAndIgnoreFiles) === void 0 ? !0 : !o.userDisabledExcludesAndIgnoreFiles,
    contextLines: i,
    onlyOpenEditors: !!o.onlyOpenEditors,
    notebookSearchConfig: {
      includeMarkupInput: !!((s = o.contentPattern.notebookInfo) != null && s.isInNotebookMarkdownInput),
      includeMarkupPreview: !!((r = o.contentPattern.notebookInfo) != null && r.isInNotebookMarkdownPreview),
      includeCodeInput: !!((n = o.contentPattern.notebookInfo) != null && n.isInNotebookCellInput),
      includeOutput: !!((a = o.contentPattern.notebookInfo) != null && a.isInNotebookCellOutput)
    }
  };
}, Uc = (o) => ((i) => i.filter((s) => s !== !1 && s !== null && s !== void 0))([
  `# Query: ${((i) => i.replace(/\\/g, "\\\\").replace(/\n/g, "\\n"))(o.query ?? "")}`,
  (o.isCaseSensitive || o.matchWholeWord || o.isRegexp || o.useExcludeSettingsAndIgnoreFiles === !1) && `# Flags: ${at([
    o.isCaseSensitive && "CaseSensitive",
    o.matchWholeWord && "WordMatch",
    o.isRegexp && "RegExp",
    o.onlyOpenEditors && "OpenEditors",
    o.useExcludeSettingsAndIgnoreFiles === !1 && "IgnoreExcludeSettings"
  ]).join(" ")}`,
  o.filesToInclude ? `# Including: ${o.filesToInclude}` : void 0,
  o.filesToExclude ? `# Excluding: ${o.filesToExclude}` : void 0,
  o.contextLines ? `# ContextLines: ${o.contextLines}` : void 0,
  ""
]).join(Nr), Vr = () => ({
  query: "",
  filesToInclude: "",
  filesToExclude: "",
  isRegexp: !1,
  isCaseSensitive: !1,
  useExcludeSettingsAndIgnoreFiles: !0,
  matchWholeWord: !1,
  contextLines: 0,
  showIncludesExcludes: !1,
  onlyOpenEditors: !1,
  notebookSearchConfig: {
    includeMarkupInput: !0,
    includeMarkupPreview: !1,
    includeCodeInput: !0,
    includeOutput: !0
  }
}), zc = (o) => {
  const e = Vr(), t = (s) => {
    let r = "";
    for (let n = 0; n < s.length; n++)
      if (s[n] === "\\") {
        n++;
        const a = s[n];
        if (a === "n")
          r += `
`;
        else if (a === "\\")
          r += "\\";
        else
          throw Error(l("invalidQueryStringError", "All backslashes in Query string must be escaped (\\\\)"));
      } else
        r += s[n];
    return r;
  }, i = /^# ([^:]*): (.*)$/;
  for (const s of o) {
    const r = i.exec(s);
    if (!r)
      continue;
    const [, n, a] = r;
    switch (n) {
      case "Query":
        e.query = t(a);
        break;
      case "Including":
        e.filesToInclude = a;
        break;
      case "Excluding":
        e.filesToExclude = a;
        break;
      case "ContextLines":
        e.contextLines = +a;
        break;
      case "Flags":
        e.isRegexp = a.indexOf("RegExp") !== -1, e.isCaseSensitive = a.indexOf("CaseSensitive") !== -1, e.useExcludeSettingsAndIgnoreFiles = a.indexOf("IgnoreExcludeSettings") === -1, e.matchWholeWord = a.indexOf("WordMatch") !== -1, e.onlyOpenEditors = a.indexOf("OpenEditors") !== -1;
    }
  }
  return e.showIncludesExcludes = !!(e.filesToInclude || e.filesToExclude || !e.useExcludeSettingsAndIgnoreFiles), e;
}, Hr = (o, e, t, i, s, r, n) => {
  if (!o.query)
    throw Error("Internal Error: Expected query, got null");
  const a = Qc(o.query, e, t, i), c = o.fileCount() > 1 ? l("numFiles", "{0} files", o.fileCount()) : l("oneFile", "1 file"), h = o.count() > 1 ? l("numResults", "{0} results", o.count()) : l("oneResult", "1 result"), u = [
    o.count() ? `${h} - ${c}` : l("noResults", "No Results")
  ];
  n && u.push(l(
    "searchMaxResultsWarning",
    "The result set only contains a subset of all matches. Be more specific in your search to narrow down the results."
  )), u.push("");
  const d = (p, S) => ye(p, S, r), f = $c(wi(o.folderMatches().sort(d).map((p) => p.allDownstreamFileMatches().sort(d).flatMap((S) => qc(S, s)))));
  return {
    matchRanges: f.matchRanges.map(ls(u.length)),
    text: u.concat(f.text).join(Nr),
    config: a
  };
}, $c = (o) => {
  const e = [], t = [];
  return o.forEach((i) => {
    i.matchRanges.map(ls(e.length)).forEach((s) => t.push(s)), i.text.forEach((s) => e.push(s)), e.push("");
  }), { text: e, matchRanges: t };
}, qr = async (o, e) => {
  const i = (await o.get(ei).read(e)).value;
  return Kr(i);
}, Kr = (o) => {
  const e = [], t = [];
  let i = !0;
  for (const s of o.split(/\r?\n/g))
    i ? (e.push(s), s === "" && (i = !1)) : t.push(s);
  return { config: zc(e), text: t.join(`
`) };
};
class Mt {
  constructor(e) {
    this.config = e, this._onConfigDidUpdate = new U(), this.onConfigDidUpdate = this._onConfigDidUpdate.event;
  }
  updateConfig(e) {
    this.config = e, this._onConfigDidUpdate.fire(e);
  }
}
class Gc {
  constructor(e) {
    this.resource = e;
  }
  async resolve() {
    return is(lt.models.get(this.resource)).resolve();
  }
}
class jc {
  constructor() {
    this.models = new Ge();
  }
  initializeModelFromExistingModel(e, t, i) {
    if (this.models.has(t))
      throw Error("Unable to contruct model for resource that already exists");
    const s = e.get(ht), r = e.get(Pe), n = e.get(N), a = e.get(di);
    let c;
    this.models.set(t, {
      resolve: () => (c || (c = (async () => {
        const h = await this.tryFetchModelFromBackupService(t, s, r, a, n);
        return h || Promise.resolve({
          resultsModel: r.getModel(t) ?? r.createModel("", s.createById("search-result"), t),
          configurationModel: new Mt(i)
        });
      })()), c)
    });
  }
  initializeModelFromRawData(e, t, i, s) {
    if (this.models.has(t))
      throw Error("Unable to contruct model for resource that already exists");
    const r = e.get(ht), n = e.get(Pe), a = e.get(N), c = e.get(di);
    let h;
    this.models.set(t, {
      resolve: () => (h || (h = (async () => {
        const u = await this.tryFetchModelFromBackupService(t, r, n, c, a);
        return u || Promise.resolve({
          resultsModel: n.createModel(s ?? "", r.createById("search-result"), t),
          configurationModel: new Mt(i)
        });
      })()), h)
    });
  }
  initializeModelFromExistingFile(e, t, i) {
    if (this.models.has(t))
      throw Error("Unable to contruct model for resource that already exists");
    const s = e.get(ht), r = e.get(Pe), n = e.get(N), a = e.get(di);
    let c;
    this.models.set(t, {
      resolve: async () => (c || (c = (async () => {
        const h = await this.tryFetchModelFromBackupService(t, s, r, a, n);
        if (h)
          return h;
        const { text: u, config: d } = await n.invokeFunction(qr, i);
        return {
          resultsModel: r.createModel(u ?? "", s.createById("search-result"), t),
          configurationModel: new Mt(d)
        };
      })()), c)
    });
  }
  async tryFetchModelFromBackupService(e, t, i, s, r) {
    const n = await s.resolve({ resource: e, typeId: Lr });
    let a = i.getModel(e);
    if (!a && n) {
      const c = await co(n.value);
      a = i.createModel(c, t.createById("search-result"), e);
    }
    if (a) {
      const c = a.getValue(), { text: h, config: u } = Kr(c);
      return i.destroyModel(e), {
        resultsModel: i.createModel(h ?? "", t.createById("search-result"), e),
        configurationModel: new Mt(u)
      };
    } else
      return;
  }
}
const lt = new jc(), pt = ".code-search";
var Se;
let D = (Se = class extends lo {
  get typeId() {
    return Se.ID;
  }
  get editorId() {
    return this.typeId;
  }
  get capabilities() {
    let e = 8;
    return this.backingUri || (e |= 4), e;
  }
  get resource() {
    return this.backingUri || this.modelUri;
  }
  constructor(e, t, i, s, r, n, a, c, h, u) {
    if (super(), this.modelUri = e, this.backingUri = t, this.modelService = i, this.textFileService = s, this.fileDialogService = r, this.instantiationService = n, this.workingCopyService = a, this.telemetryService = c, this.pathService = h, this.dirty = !1, this._onDidChangeContent = this._register(new U()), this.onDidChangeContent = this._onDidChangeContent.event, this._onDidSave = this._register(new U()), this.onDidSave = this._onDidSave.event, this.oldDecorationsIDs = [], this.model = n.createInstance(Gc, e), this.modelUri.scheme !== cs)
      throw Error("SearchEditorInput must be invoked with a SearchEditorScheme uri");
    this.memento = new ss(Se.ID, u), u.onWillSaveState(() => this.memento.saveMemento());
    const d = this, f = new class {
      constructor() {
        this.typeId = Lr, this.resource = d.modelUri, this.capabilities = d.hasCapability(4) ? 2 : 0, this.onDidChangeDirty = d.onDidChangeDirty, this.onDidChangeContent = d.onDidChangeContent, this.onDidSave = d.onDidSave;
      }
      get name() {
        return d.getName();
      }
      isDirty() {
        return d.isDirty();
      }
      isModified() {
        return d.isDirty();
      }
      backup(p) {
        return d.backup(p);
      }
      save(p) {
        return d.save(0, p).then((S) => !!S);
      }
      revert(p) {
        return d.revert(0, p);
      }
    }();
    this._register(this.workingCopyService.registerWorkingCopy(f));
  }
  async save(e, t) {
    if (!(await this.resolveModels()).resultsModel.isDisposed())
      return this.backingUri ? (await this.textFileService.write(this.backingUri, await this.serializeForDisk(), t), this.setDirty(!1), this._onDidSave.fire({ reason: t == null ? void 0 : t.reason, source: t == null ? void 0 : t.source }), this) : this.saveAs(e, t);
  }
  tryReadConfigSync() {
    var e;
    return (e = this._cachedConfigurationModel) == null ? void 0 : e.config;
  }
  async serializeForDisk() {
    const { configurationModel: e, resultsModel: t } = await this.resolveModels();
    return Uc(e.config) + `
` + t.getValue();
  }
  registerConfigChangeListeners(e) {
    var t;
    (t = this.configChangeListenerDisposable) == null || t.dispose(), this.isDisposed() || (this.configChangeListenerDisposable = e.onConfigDidUpdate(() => {
      this.lastLabel !== this.getName() && (this._onDidChangeLabel.fire(), this.lastLabel = this.getName()), this.memento.getMemento(1, 1).searchConfig = e.config;
    }), this._register(this.configChangeListenerDisposable));
  }
  async resolveModels() {
    return this.model.resolve().then((e) => (this._cachedResultsModel = e.resultsModel, this._cachedConfigurationModel = e.configurationModel, this.lastLabel !== this.getName() && (this._onDidChangeLabel.fire(), this.lastLabel = this.getName()), this.registerConfigChangeListeners(e.configurationModel), e));
  }
  async saveAs(e, t) {
    const i = await this.fileDialogService.pickFileToSave(await this.suggestFileName(), t == null ? void 0 : t.availableFileSystems);
    if (i) {
      this.telemetryService.publicLog2("searchEditor/saveSearchResults");
      const s = await this.serializeForDisk();
      if (await this.textFileService.create([{ resource: i, value: s, options: { overwrite: !0 } }])) {
        if (this.setDirty(!1), !Dt(i, this.modelUri)) {
          const r = this.instantiationService.invokeFunction(Qe, { fileUri: i, from: "existingFile" });
          return r.setMatchRanges(this.getMatchRanges()), r;
        }
        return this;
      }
    }
  }
  getName(e = 12) {
    var s, r, n;
    const t = (a) => a.length < e ? a : `${a.slice(0, e - 3)}...`;
    if (this.backingUri) {
      const a = Ot.getOriginalUri(this);
      return l(
        "searchTitle.withQuery",
        "Search: {0}",
        ho((a ?? this.backingUri).path, pt)
      );
    }
    const i = (n = (r = (s = this._cachedConfigurationModel) == null ? void 0 : s.config) == null ? void 0 : r.query) == null ? void 0 : n.trim();
    return i ? l("searchTitle.withQuery", "Search: {0}", t(i)) : l("searchTitle", "Search");
  }
  setDirty(e) {
    const t = this.dirty;
    this.dirty = e, t !== e && this._onDidChangeDirty.fire();
  }
  isDirty() {
    return this.dirty;
  }
  async rename(e, t) {
    if (cr(t) === pt)
      return {
        editor: this.instantiationService.invokeFunction(Qe, { from: "existingFile", fileUri: t })
      };
  }
  dispose() {
    this.modelService.destroyModel(this.modelUri), super.dispose();
  }
  matches(e) {
    return super.matches(e) ? !0 : e instanceof Se ? !!(e.modelUri.fragment && e.modelUri.fragment === this.modelUri.fragment) || !!(e.backingUri && Dt(e.backingUri, this.backingUri)) : !1;
  }
  getMatchRanges() {
    var e;
    return (((e = this._cachedResultsModel) == null ? void 0 : e.getAllDecorations()) ?? []).filter((t) => t.options.className === Os).filter(({ range: t }) => !(t.startColumn === 1 && t.endColumn === 1)).map(({ range: t }) => t);
  }
  async setMatchRanges(e) {
    this.oldDecorationsIDs = (await this.resolveModels()).resultsModel.deltaDecorations(this.oldDecorationsIDs, e.map(
      (t) => ({ range: t, options: { description: "search-editor-find-match", className: Os, stickiness: 1 } })
    ));
  }
  async revert(e, t) {
    if (t != null && t.soft) {
      this.setDirty(!1);
      return;
    }
    if (this.backingUri) {
      const { config: i, text: s } = await this.instantiationService.invokeFunction(qr, this.backingUri), { resultsModel: r, configurationModel: n } = await this.resolveModels();
      r.setValue(s), n.updateConfig(i);
    } else
      (await this.resolveModels()).resultsModel.setValue("");
    super.revert(e, t), this.setDirty(!1);
  }
  async backup(e) {
    const t = await this.serializeForDisk();
    return e.isCancellationRequested ? {} : {
      content: uo(go.fromString(t))
    };
  }
  async suggestFileName() {
    const t = ((await this.resolveModels()).configurationModel.config.query.replace(/[^\w \-_]+/g, "_") || "Search") + pt;
    return po(await this.fileDialogService.defaultFilePath(this.pathService.defaultUriScheme), t);
  }
  toUntyped() {
    if (!this.hasCapability(4))
      return {
        resource: this.resource,
        options: {
          override: Se.ID
        }
      };
  }
}, Se.ID = Oi, Se);
D = B([
  g(2, Pe),
  g(3, ei),
  g(4, fo),
  g(5, N),
  g(6, Zs),
  g(7, st),
  g(8, Js),
  g(9, nt)
], D);
const Qe = (o, e) => {
  var n;
  const t = o.get(nt), i = o.get(V), s = o.get(N), r = e.from === "model" ? e.modelUri : Le.from({ scheme: cs, fragment: `${Math.random()}` });
  if (!lt.models.has(r))
    if (e.from === "existingFile")
      s.invokeFunction((a) => lt.initializeModelFromExistingFile(a, r, e.fileUri));
    else {
      const a = i.getValue("search").searchEditor, c = a.reusePriorSearchConfiguration, h = a.defaultNumberOfContextLines, u = c ? new ss(D.ID, t).getMemento(1, 1).searchConfig : {}, f = { ...Vr(), ...u, ...e.config };
      h != null && (f.contextLines = ((n = e == null ? void 0 : e.config) == null ? void 0 : n.contextLines) ?? h), e.from === "rawData" ? (e.resultsContents && (f.contextLines = 0), s.invokeFunction((p) => lt.initializeModelFromRawData(p, r, f, e.resultsContents))) : s.invokeFunction((p) => lt.initializeModelFromExistingModel(p, r, f));
    }
  return s.createInstance(D, r, e.from === "existingFile" ? e.fileUri : e.from === "model" ? e.backupOf : void 0);
}, Xc = (o) => {
  const e = o.get(M);
  e.activeEditor instanceof D && e.activeEditorPane.toggleCaseSensitive();
}, Yc = (o) => {
  const e = o.get(M);
  e.activeEditor instanceof D && e.activeEditorPane.toggleWholeWords();
}, Jc = (o) => {
  const e = o.get(M);
  e.activeEditor instanceof D && e.activeEditorPane.toggleRegex();
}, Zc = (o) => {
  const e = o.get(M);
  e.activeEditor instanceof D && e.activeEditorPane.toggleContextLines();
}, Qr = (o, e) => {
  const t = o.get(M);
  t.activeEditor instanceof D && t.activeEditorPane.modifyContextLines(e);
}, el = (o) => {
  const e = o.get(M);
  e.activeEditor instanceof D && e.activeEditorPane.focusAllResults();
};
async function tl(o) {
  var s, r, n;
  const e = o.get(R), t = o.get(N), i = T(e);
  i ? await t.invokeFunction(bt, {
    filesToInclude: i.searchIncludePattern.getValue(),
    onlyOpenEditors: i.searchIncludePattern.onlySearchInOpenEditors(),
    filesToExclude: i.searchExcludePattern.getValue(),
    isRegexp: (s = i.searchAndReplaceWidget.searchInput) == null ? void 0 : s.getRegex(),
    isCaseSensitive: (r = i.searchAndReplaceWidget.searchInput) == null ? void 0 : r.getCaseSensitive(),
    matchWholeWord: (n = i.searchAndReplaceWidget.searchInput) == null ? void 0 : n.getWholeWords(),
    useExcludeSettingsAndIgnoreFiles: i.searchExcludePattern.useExcludesAndIgnoreFiles(),
    showIncludesExcludes: !!(i.searchIncludePattern.getValue() || i.searchExcludePattern.getValue() || !i.searchExcludePattern.useExcludesAndIgnoreFiles())
  }) : await t.invokeFunction(bt);
}
const bt = async (o, e = {}, t = !1) => {
  var ae, ee;
  const i = o.get(M), s = o.get(lr), r = o.get(st), n = o.get(N), a = o.get(V), c = o.get(hr), h = o.get(ue), d = o.get(Xi).getLastActiveWorkspaceRoot(H.file), f = d ? rt(h.getWorkspaceFolder(d)) : void 0, p = i.activeTextEditorControl;
  let S, m = "";
  if (p) {
    ur(p) ? p.getOriginalEditor().hasTextFocus() ? S = p.getOriginalEditor() : S = p.getModifiedEditor() : S = p;
    const W = S == null ? void 0 : S.getSelection();
    if (m = (W && ((ae = S == null ? void 0 : S.getModel()) == null ? void 0 : ae.getValueInRange(W))) ?? "", W != null && W.isEmpty() && a.getValue("search").seedWithNearestWord) {
      const G = (ee = S.getModel()) == null ? void 0 : ee.getWordAtPosition(W.getStartPosition());
      G && (m = G.word);
    }
  } else
    i.activeEditor instanceof D && (m = i.activeEditorPane.getSelected());
  r.publicLog2("searchEditor/openNewSearchEditor");
  const x = { query: e.location === "new" || a.getValue("editor").find.seedSearchStringFromSelection ? m : void 0 };
  for (const W of Object.entries(e)) {
    const G = W[0], de = W[1];
    de !== void 0 && (x[G] = typeof de == "string" ? await c.resolveAsync(f, de) : de);
  }
  const E = i.getEditors(0).find((W) => W.editor.typeId === D.ID);
  let _;
  if (E && x.location === "reuse") {
    const W = s.getGroup(E.groupId);
    if (!W)
      throw new Error("Invalid group id for search editor");
    const G = E.editor;
    _ = await W.openEditor(G), m ? _.setQuery(m) : _.selectQuery(), _.setSearchConfig(x);
  } else {
    const W = n.invokeFunction(Qe, { config: x, resultsContents: "", from: "rawData" });
    _ = await i.openEditor(W, { pinned: !0 }, t ? ft : ii);
  }
  const be = a.getValue("search").searchOnType;
  (x.triggerSearch === !0 || x.triggerSearch !== !1 && be && x.query) && _.triggerSearch({ focusResults: x.focusResults }), x.focusResults || _.focusSearchInput();
}, Ur = async (o, e, t, i, s) => {
  if (!e.query) {
    console.error("Expected searchResult.query to be defined. Got", e);
    return;
  }
  const r = o.get(M), n = o.get(st), a = o.get(N), c = o.get(he), h = o.get(V), u = h.getValue("search").sortOrder;
  n.publicLog2("searchEditor/createEditorFromSearchResult");
  const d = (I) => c.getUriLabel(I, { relative: !0 }), { text: f, matchRanges: p, config: S } = Hr(e, t, i, 0, d, u);
  S.onlyOpenEditors = s;
  const m = h.getValue("search").searchEditor.defaultNumberOfContextLines;
  if (e.isDirty || m === 0 || m === null) {
    const I = a.invokeFunction(Qe, { resultsContents: f, config: S, from: "rawData" });
    await r.openEditor(I, { pinned: !0 }), I.setMatchRanges(p);
  } else {
    const I = a.invokeFunction(Qe, { from: "rawData", resultsContents: "", config: { ...S, contextLines: m } });
    (await r.openEditor(I, { pinned: !0 })).triggerSearch({ focusResults: !0 });
  }
}, j = k, Vs = l(
  "searchCanceled",
  "Search was canceled before any results could be found - "
), Hs = 75;
var it;
let Ni = (it = class extends So {
  constructor(e, t, i, s, r, n, a, c, h, u, d, f, p, S, m, I, x, E, _, be, ae, ee, W, G, de, en, tn, sn) {
    super(e, W, ae, f, m, d, u, de, _, en), this.fileService = t, this.editorService = i, this.codeEditorService = s, this.progressService = r, this.notificationService = n, this.dialogService = a, this.commandService = c, this.contextViewService = h, this.contextService = p, this.searchWorkbenchService = S, this.replaceService = I, this.textFileService = x, this.preferencesService = E, this.searchHistoryService = be, this.accessibilityService = ee, this.storageService = G, this.notebookService = tn, this.logService = sn, this.isDisposed = !1, this.lastFocusState = "input", this.messageDisposables = new Ae(), this.changedWhileHidden = !1, this.currentSearchQ = Promise.resolve(), this.pauseSearching = !1, this._visibleMatches = 0, this.container = k(".search-view"), this.viewletVisible = Z.bindTo(this.contextKeyService), this.firstMatchFocused = Ar.bindTo(this.contextKeyService), this.fileMatchOrMatchFocused = Ke.bindTo(this.contextKeyService), this.fileMatchOrFolderMatchFocus = Mr.bindTo(this.contextKeyService), this.fileMatchOrFolderMatchWithResourceFocus = _i.bindTo(this.contextKeyService), this.fileMatchFocused = Te.bindTo(this.contextKeyService), this.folderMatchFocused = Ne.bindTo(this.contextKeyService), this.folderMatchWithResourceFocused = Qt.bindTo(this.contextKeyService), this.hasSearchResultsKey = te.bindTo(this.contextKeyService), this.matchFocused = Be.bindTo(this.contextKeyService), this.searchStateKey = Nt.bindTo(this.contextKeyService), this.hasSearchPatternKey = as.bindTo(this.contextKeyService), this.hasReplacePatternKey = _r.bindTo(this.contextKeyService), this.hasFilePatternKey = Wr.bindTo(this.contextKeyService), this.hasSomeCollapsibleResultKey = vt.bindTo(this.contextKeyService), this.treeViewKey = yt.bindTo(this.contextKeyService), this.contextKeyService = this._register(this.contextKeyService.createScoped(this.container)), we.bindTo(this.contextKeyService).set(!0), this.inputBoxFocused = je.bindTo(this.contextKeyService), this.inputPatternIncludesFocused = kc.bindTo(this.contextKeyService), this.inputPatternExclusionsFocused = Rc.bindTo(this.contextKeyService), this.isEditableItem = Y.bindTo(this.contextKeyService), this.instantiationService = this.instantiationService.createChild(new Rt([J, this.contextKeyService])), this.configurationService.onDidChangeConfiguration((ge) => {
      ge.affectsConfiguration("search.sortOrder") && (this.searchConfig.sortOrder === "modified" && this.removeFileStats(), this.refreshTree());
    }), this.viewModel = this._register(this.searchWorkbenchService.searchModel), this.queryBuilder = this.instantiationService.createInstance(Gi), this.memento = new ss(this.id, G), this.viewletState = this.memento.getMemento(1, 1), this._register(this.fileService.onDidFilesChange((ge) => this.onFilesChanged(ge))), this._register(this.textFileService.untitled.onWillDispose((ge) => this.onUntitledDidDispose(ge.resource))), this._register(this.contextService.onDidChangeWorkbenchState(() => this.onDidChangeWorkbenchState())), this._register(this.searchHistoryService.onDidClearHistory(() => this.clearHistory())), this._register(this.configurationService.onDidChangeConfiguration((ge) => this.onConfigurationUpdated(ge))), this.delayedRefresh = this._register(new Oe(250)), this.addToSearchHistoryDelayer = this._register(new Oe(2e3)), this.toggleCollapseStateDelayer = this._register(new Oe(100)), this.triggerQueryDelayer = this._register(new Oe(0)), this.treeAccessibilityProvider = this.instantiationService.createInstance(Wi, this.viewModel), this.isTreeLayoutViewVisible = this.viewletState["view.treeLayout"] ?? this.searchConfig.defaultViewMode === "tree", this._refreshResultsScheduler = this._register(new mo(this._updateResults.bind(this), 80)), this._register(this.storageService.onWillSaveState(() => {
      this._saveSearchHistoryService();
    })), this._register(this.storageService.onDidChangeValue((ge) => {
      if (ge.key === dr.SEARCH_HISTORY_KEY) {
        const xe = this.searchHistoryService.load();
        xe.include && this.inputPatternIncludes.prependHistory(xe.include), xe.exclude && this.inputPatternExcludes.prependHistory(xe.exclude), xe.search && this.searchWidget.prependSearchHistory(xe.search), xe.replace && this.searchWidget.prependReplaceHistory(xe.replace);
      }
    }));
  }
  get isTreeLayoutViewVisible() {
    return this.treeViewKey.get() ?? !1;
  }
  set isTreeLayoutViewVisible(e) {
    this.treeViewKey.set(e);
  }
  setTreeView(e) {
    e !== this.isTreeLayoutViewVisible && (this.isTreeLayoutViewVisible = e, this.updateIndentStyles(this.themeService.getFileIconTheme()), this.refreshTree());
  }
  get state() {
    return this.searchStateKey.get() ?? pe.Idle;
  }
  set state(e) {
    this.searchStateKey.set(e);
  }
  getContainer() {
    return this.container;
  }
  get searchResult() {
    return this.viewModel && this.viewModel.searchResult;
  }
  onDidChangeWorkbenchState() {
    this.contextService.getWorkbenchState() !== 1 && this.searchWithoutFolderMessageElement && gi(this.searchWithoutFolderMessageElement);
  }
  renderBody(e) {
    super.renderBody(e), this.container = v(e, k(".search-view")), this.searchWidgetsContainerElement = v(this.container, j(".search-widgets-container")), this.createSearchWidget(this.searchWidgetsContainerElement);
    const t = this.searchHistoryService.load(), i = this.viewletState["query.filePatterns"] || "", s = this.viewletState["query.folderExclusions"] || "", r = t.exclude || [], n = this.viewletState["query.folderIncludes"] || "", a = t.include || [], c = this.viewletState["query.onlyOpenEditors"] || !1, h = this.viewletState["query.queryDetailsExpanded"] || "", u = typeof this.viewletState["query.useExcludesAndIgnoreFiles"] == "boolean" ? this.viewletState["query.useExcludesAndIgnoreFiles"] : !0;
    this.queryDetails = v(this.searchWidgetsContainerElement, j(".query-details")), this.toggleQueryDetailsButton = v(this.queryDetails, j(".more" + z.asCSSSelector(br), { tabindex: 0, role: "button", title: l("moreSearch", "Toggle Search Details") })), this._register(me(this.toggleQueryDetailsButton, ve.CLICK, (x) => {
      ke.stop(x), this.toggleQueryDetails(!this.accessibilityService.isScreenReaderOptimized());
    })), this._register(me(this.toggleQueryDetailsButton, ve.KEY_UP, (x) => {
      const E = new St(x);
      (E.equals(3) || E.equals(10)) && (ke.stop(x), this.toggleQueryDetails(!1));
    })), this._register(me(this.toggleQueryDetailsButton, ve.KEY_DOWN, (x) => {
      var _;
      new St(x).equals(1026) && (this.searchWidget.isReplaceActive() ? this.searchWidget.focusReplaceAllAction() : this.searchWidget.isReplaceShown() ? (_ = this.searchWidget.replaceInput) == null || _.focusOnPreserve() : this.searchWidget.focusRegexAction(), ke.stop(x));
    }));
    const d = v(this.queryDetails, j(".file-types.includes")), f = l("searchScope.includes", "files to include");
    v(d, j("h4", void 0, f)), this.inputPatternIncludes = this._register(this.instantiationService.createInstance(qt, d, this.contextViewService, {
      ariaLabel: f,
      placeholder: l("placeholder.includes", "e.g. *.ts, src/**/include"),
      showPlaceholderOnFocus: !0,
      history: a,
      inputBoxStyles: Wt
    })), this.inputPatternIncludes.setValue(n), this.inputPatternIncludes.setOnlySearchInOpenEditors(c), this._register(this.inputPatternIncludes.onCancel(() => this.cancelSearch(!1))), this._register(this.inputPatternIncludes.onChangeSearchInEditorsBox(() => this.triggerQueryChange())), this.trackInputBox(this.inputPatternIncludes.inputFocusTracker, this.inputPatternIncludesFocused);
    const p = v(this.queryDetails, j(".file-types.excludes")), S = l("searchScope.excludes", "files to exclude");
    v(p, j("h4", void 0, S)), this.inputPatternExcludes = this._register(this.instantiationService.createInstance(Kt, p, this.contextViewService, {
      ariaLabel: S,
      placeholder: l("placeholder.excludes", "e.g. *.ts, src/**/exclude"),
      showPlaceholderOnFocus: !0,
      history: r,
      inputBoxStyles: Wt
    })), this.inputPatternExcludes.setValue(s), this.inputPatternExcludes.setUseExcludesAndIgnoreFiles(u), this._register(this.inputPatternExcludes.onCancel(() => this.cancelSearch(!1))), this._register(this.inputPatternExcludes.onChangeIgnoreBox(() => this.triggerQueryChange())), this.trackInputBox(this.inputPatternExcludes.inputFocusTracker, this.inputPatternExclusionsFocused);
    const m = () => this.hasFilePatternKey.set(this.inputPatternIncludes.getValue().length > 0 || this.inputPatternExcludes.getValue().length > 0);
    m();
    const I = (x) => {
      this.triggerQueryChange({ triggeredOnType: x, delay: this.searchConfig.searchOnTypeDebouncePeriod }), x && m();
    };
    this._register(this.inputPatternIncludes.onSubmit(I)), this._register(this.inputPatternExcludes.onSubmit(I)), this.messagesElement = v(this.container, j(".messages.text-search-provider-messages")), this.contextService.getWorkbenchState() === 1 && this.showSearchWithoutFolderMessage(), this.createSearchResultsView(this.container), (i !== "" || s !== "" || n !== "" || h !== "" || !u) && this.toggleQueryDetails(!0, !0, !0), this._register(this.viewModel.searchResult.onChange((x) => this.onSearchResultsChanged(x))), this._register(this.onDidChangeBodyVisibility((x) => this.onVisibilityChanged(x))), this.updateIndentStyles(this.themeService.getFileIconTheme()), this._register(this.themeService.onDidFileIconThemeChange(this.updateIndentStyles, this));
  }
  updateIndentStyles(e) {
    this.resultsElement.classList.toggle("hide-arrows", this.isTreeLayoutViewVisible && e.hidesExplorerArrows);
  }
  onVisibilityChanged(e) {
    var t;
    this.viewletVisible.set(e), e ? this.changedWhileHidden && (this.refreshAndUpdateCount(), this.changedWhileHidden = !1) : this.lastFocusState = "input", (t = this.viewModel) == null || t.searchResult.toggleHighlights(e);
  }
  get searchAndReplaceWidget() {
    return this.searchWidget;
  }
  get searchIncludePattern() {
    return this.inputPatternIncludes;
  }
  get searchExcludePattern() {
    return this.inputPatternExcludes;
  }
  createSearchWidget(e) {
    const t = this.viewletState["query.contentPattern"] || "", i = this.viewletState["query.replaceText"] || "", s = this.viewletState["query.regex"] === !0, r = this.viewletState["query.wholeWords"] === !0, n = this.viewletState["query.caseSensitive"] === !0, a = this.searchHistoryService.load(), c = a.search || this.viewletState["query.searchHistory"] || [], h = a.replace || this.viewletState["query.replaceHistory"] || [], u = typeof this.viewletState["view.showReplace"] == "boolean" ? this.viewletState["view.showReplace"] : !0, d = this.viewletState["query.preserveCase"] === !0, f = this.viewletState["query.isInNotebookMarkdownInput"] ?? !0, p = this.viewletState["query.isInNotebookMarkdownPreview"] ?? !0, S = this.viewletState["query.isInNotebookCellInput"] ?? !0, m = this.viewletState["query.isInNotebookCellOutput"] ?? !0;
    if (this.searchWidget = this._register(this.instantiationService.createInstance(jt, e, {
      value: t,
      replaceValue: i,
      isRegex: s,
      isCaseSensitive: n,
      isWholeWords: r,
      searchHistory: c,
      replaceHistory: h,
      preserveCase: d,
      inputBoxStyles: Wt,
      toggleStyles: kt,
      notebookOptions: {
        isInNotebookMarkdownInput: f,
        isInNotebookMarkdownPreview: p,
        isInNotebookCellInput: S,
        isInNotebookCellOutput: m
      }
    })), !this.searchWidget.searchInput || !this.searchWidget.replaceInput) {
      this.logService.warn(`Cannot fully create search widget. Search or replace input undefined. SearchInput: ${this.searchWidget.searchInput}, ReplaceInput: ${this.searchWidget.replaceInput}`);
      return;
    }
    u && this.searchWidget.toggleReplace(!0), this._register(this.searchWidget.onSearchSubmit((E) => this.triggerQueryChange(E))), this._register(this.searchWidget.onSearchCancel(({ focus: E }) => this.cancelSearch(E))), this._register(this.searchWidget.searchInput.onDidOptionChange(() => this.triggerQueryChange())), this._register(this.searchWidget.getNotebookFilters().onDidChange(() => this.triggerQueryChange()));
    const I = () => this.hasSearchPatternKey.set(this.searchWidget.searchInput ? this.searchWidget.searchInput.getValue().length > 0 : !1);
    I(), this._register(this.searchWidget.searchInput.onDidChange(() => I()));
    const x = () => this.hasReplacePatternKey.set(this.searchWidget.getReplaceValue().length > 0);
    x(), this._register(this.searchWidget.replaceInput.inputBox.onDidChange(() => x())), this._register(this.searchWidget.onDidHeightChange(() => this.reLayout())), this._register(this.searchWidget.onReplaceToggled(() => this.reLayout())), this._register(this.searchWidget.onReplaceStateChange((E) => {
      this.viewModel.replaceActive = E, this.refreshTree();
    })), this._register(this.searchWidget.onPreserveCaseChange((E) => {
      this.viewModel.preserveCase = E, this.refreshTree();
    })), this._register(this.searchWidget.onReplaceValueChanged(() => {
      this.viewModel.replaceString = this.searchWidget.getReplaceValue(), this.delayedRefresh.trigger(() => this.refreshTree());
    })), this._register(this.searchWidget.onBlur(() => {
      this.toggleQueryDetailsButton.focus();
    })), this._register(this.searchWidget.onReplaceAll(() => this.replaceAll())), this.trackInputBox(this.searchWidget.searchInputFocusTracker), this.trackInputBox(this.searchWidget.replaceInputFocusTracker);
  }
  onConfigurationUpdated(e) {
    e && (e.affectsConfiguration("search.decorations.colors") || e.affectsConfiguration("search.decorations.badges")) && this.refreshTree();
  }
  trackInputBox(e, t) {
    e && (this._register(e.onDidFocus(() => {
      this.lastFocusState = "input", this.inputBoxFocused.set(!0), t == null || t.set(!0);
    })), this._register(e.onDidBlur(() => {
      this.inputBoxFocused.set(this.searchWidget.searchInputHasFocus() || this.searchWidget.replaceInputHasFocus() || this.inputPatternIncludes.inputHasFocus() || this.inputPatternExcludes.inputHasFocus()), t == null || t.set(!1);
    })));
  }
  onSearchResultsChanged(e) {
    if (this.isVisible())
      return this.refreshAndUpdateCount(e);
    this.changedWhileHidden = !0;
  }
  refreshAndUpdateCount(e) {
    var t;
    return this.searchWidget.setReplaceAllActionState(!this.viewModel.searchResult.isEmpty()), this.updateSearchResultCount(this.viewModel.searchResult.query.userDisabledExcludesAndIgnoreFiles, (t = this.viewModel.searchResult.query) == null ? void 0 : t.onlyOpenEditors, e == null ? void 0 : e.clearingAll), this.refreshTree(e);
  }
  refreshTree(e) {
    const t = this.searchConfig.collapseResults;
    !e || e.added || e.removed ? this.searchConfig.sortOrder === "modified" ? this.retrieveFileStats().then(() => this.tree.setChildren(null, this.createResultIterator(t))) : this.tree.setChildren(null, this.createResultIterator(t)) : this.searchConfig.sortOrder === "countAscending" || this.searchConfig.sortOrder === "countDescending" ? this.tree.setChildren(null, this.createResultIterator(t)) : e.elements.forEach((i) => {
      this.tree.setChildren(i, this.createIterator(i, t)), this.tree.rerender(i);
    });
  }
  createResultIterator(e) {
    const t = this.searchResult.folderMatches().filter((i) => !i.isEmpty()).sort(ye);
    return t.length === 1 ? this.createFolderIterator(t[0], e, !0) : pi.map(t, (i) => {
      const s = this.createFolderIterator(i, e, !0);
      return { element: i, children: s, incompressible: !0 };
    });
  }
  createFolderIterator(e, t, i) {
    const s = this.searchConfig.sortOrder, n = (this.isTreeLayoutViewVisible ? e.matches() : e.allDownstreamFileMatches()).sort((a, c) => ye(a, c, s));
    return pi.map(n, (a) => {
      let c;
      a instanceof L ? c = this.createFileIterator(a) : c = this.createFolderIterator(a, t, !1);
      const h = t === "alwaysCollapse" || a.count() > 10 && t !== "alwaysExpand" ? Rs.PreserveOrCollapsed : Rs.PreserveOrExpanded;
      return { element: a, children: c, collapsed: h, incompressible: a instanceof L ? !0 : i };
    });
  }
  createFileIterator(e) {
    const t = e.matches().sort(ye);
    return pi.map(t, (i) => ({ element: i, incompressible: !0 }));
  }
  createIterator(e, t) {
    return e instanceof ci ? this.createResultIterator(t) : e instanceof X ? this.createFolderIterator(e, t, !1) : this.createFileIterator(e);
  }
  replaceAll() {
    if (this.viewModel.searchResult.count() === 0)
      return;
    const e = this.viewModel.searchResult.count(), t = this.viewModel.searchResult.fileCount(), i = this.searchWidget.getReplaceValue() || "", s = this.buildAfterReplaceAllMessage(e, t, i);
    let r, n;
    this.progressService.withProgress({ location: this.getProgressLocation(), delay: 100, total: e }, (c) => (n = c, new Promise((h) => r = h)));
    const a = {
      title: l("replaceAll.confirmation.title", "Replace All"),
      message: this.buildReplaceAllConfirmationMessage(e, t, i),
      primaryButton: l(
        { key: "replaceAll.confirm.button", comment: ["&& denotes a mnemonic"] },
        "&&Replace"
      )
    };
    this.dialogService.confirm(a).then((c) => {
      c.confirmed ? (this.searchWidget.setReplaceAllActionState(!1), this.viewModel.searchResult.replaceAll(n).then(() => {
        r();
        const h = this.clearMessage();
        v(h, s), this.reLayout();
      }, (h) => {
        r(), Fs(h), this.notificationService.error(h);
      })) : r();
    });
  }
  buildAfterReplaceAllMessage(e, t, i) {
    return e === 1 ? t === 1 ? i ? l(
      "replaceAll.occurrence.file.message",
      "Replaced {0} occurrence across {1} file with '{2}'.",
      e,
      t,
      i
    ) : l(
      "removeAll.occurrence.file.message",
      "Replaced {0} occurrence across {1} file.",
      e,
      t
    ) : i ? l(
      "replaceAll.occurrence.files.message",
      "Replaced {0} occurrence across {1} files with '{2}'.",
      e,
      t,
      i
    ) : l(
      "removeAll.occurrence.files.message",
      "Replaced {0} occurrence across {1} files.",
      e,
      t
    ) : t === 1 ? i ? l(
      "replaceAll.occurrences.file.message",
      "Replaced {0} occurrences across {1} file with '{2}'.",
      e,
      t,
      i
    ) : l(
      "removeAll.occurrences.file.message",
      "Replaced {0} occurrences across {1} file.",
      e,
      t
    ) : i ? l(
      "replaceAll.occurrences.files.message",
      "Replaced {0} occurrences across {1} files with '{2}'.",
      e,
      t,
      i
    ) : l(
      "removeAll.occurrences.files.message",
      "Replaced {0} occurrences across {1} files.",
      e,
      t
    );
  }
  buildReplaceAllConfirmationMessage(e, t, i) {
    return e === 1 ? t === 1 ? i ? l(
      "removeAll.occurrence.file.confirmation.message",
      "Replace {0} occurrence across {1} file with '{2}'?",
      e,
      t,
      i
    ) : l(
      "replaceAll.occurrence.file.confirmation.message",
      "Replace {0} occurrence across {1} file?",
      e,
      t
    ) : i ? l(
      "removeAll.occurrence.files.confirmation.message",
      "Replace {0} occurrence across {1} files with '{2}'?",
      e,
      t,
      i
    ) : l(
      "replaceAll.occurrence.files.confirmation.message",
      "Replace {0} occurrence across {1} files?",
      e,
      t
    ) : t === 1 ? i ? l(
      "removeAll.occurrences.file.confirmation.message",
      "Replace {0} occurrences across {1} file with '{2}'?",
      e,
      t,
      i
    ) : l(
      "replaceAll.occurrences.file.confirmation.message",
      "Replace {0} occurrences across {1} file?",
      e,
      t
    ) : i ? l(
      "removeAll.occurrences.files.confirmation.message",
      "Replace {0} occurrences across {1} files with '{2}'?",
      e,
      t,
      i
    ) : l(
      "replaceAll.occurrences.files.confirmation.message",
      "Replace {0} occurrences across {1} files?",
      e,
      t
    );
  }
  clearMessage() {
    this.searchWithoutFolderMessageElement = void 0;
    const e = this.messagesElement.style.display === "none";
    gr(this.messagesElement), Ps(this.messagesElement), this.messageDisposables.clear();
    const t = v(this.messagesElement, j(".message"));
    return e && this.reLayout(), t;
  }
  createSearchResultsView(e) {
    this.resultsElement = v(e, j(".results.show-file-icons.file-icon-themable-tree"));
    const t = this.instantiationService.createInstance(Ut), i = {
      getId(r) {
        return r.id();
      }
    };
    this.treeLabels = this._register(this.instantiationService.createInstance(vo, { onDidChangeVisibility: this.onDidChangeBodyVisibility })), this.tree = this._register(this.instantiationService.createInstance(yo, "SearchView", this.resultsElement, t, [
      this._register(this.instantiationService.createInstance(zt, this, this.treeLabels)),
      this._register(this.instantiationService.createInstance($t, this, this.treeLabels)),
      this._register(this.instantiationService.createInstance(Gt, this.viewModel, this))
    ], {
      identityProvider: i,
      accessibilityProvider: this.treeAccessibilityProvider,
      dnd: this.instantiationService.createInstance(wo, (r) => r instanceof L ? r.resource : r instanceof F ? bo(r.parent().resource, r.range()) : null),
      multipleSelectionSupport: !0,
      selectionNavigation: !0,
      overrideStyles: {
        listBackground: this.getBackgroundColor()
      },
      additionalScrollHeight: Ut.ITEM_HEIGHT
    })), this._register(this.tree.onContextMenu((r) => this.onContextMenu(r)));
    const s = () => this.toggleCollapseStateDelayer.trigger(() => this.hasSomeCollapsibleResultKey.set(this.hasSomeCollapsible()));
    s(), this._register(this.viewModel.searchResult.onChange(() => s())), this._register(this.tree.onDidChangeCollapseState(() => s())), this._register(ut.debounce(this.tree.onDidOpen, (r, n) => n, Hs, !0)((r) => {
      var n;
      if (r.element instanceof F) {
        const a = r.element;
        (n = this.currentSelectedFileMatch) == null || n.setSelectedMatch(null), this.currentSelectedFileMatch = a.parent(), this.currentSelectedFileMatch.setSelectedMatch(a), this.onFocus(a, r.editorOptions.preserveFocus, r.sideBySide, r.editorOptions.pinned);
      }
    })), this._register(ut.debounce(this.tree.onDidChangeFocus, (r, n) => n, Hs, !0)(() => {
      const r = this.tree.getSelection(), n = this.tree.getFocus()[0];
      r.length > 1 && n instanceof F && this.onFocus(n, !0);
    })), this._register(ut.any(this.tree.onDidFocus, this.tree.onDidChangeFocus)(() => {
      const r = this.tree.getFocus()[0];
      this.tree.isDOMFocused() && (this.firstMatchFocused.set(this.tree.navigate().first() === r), this.fileMatchOrMatchFocused.set(!!r), this.fileMatchFocused.set(r instanceof L), this.folderMatchFocused.set(r instanceof X), this.matchFocused.set(r instanceof F), this.fileMatchOrFolderMatchFocus.set(r instanceof L || r instanceof X), this.fileMatchOrFolderMatchWithResourceFocus.set(r instanceof L || r instanceof Ei), this.folderMatchWithResourceFocused.set(r instanceof Ei), this.lastFocusState = "tree");
      let n = !1;
      r instanceof fe ? n = !r.isWebviewMatch() : (r instanceof L || r instanceof X) && (n = !r.hasOnlyReadOnlyMatches()), this.isEditableItem.set(n);
    })), this._register(this.tree.onDidBlur(() => {
      this.firstMatchFocused.reset(), this.fileMatchOrMatchFocused.reset(), this.fileMatchFocused.reset(), this.folderMatchFocused.reset(), this.matchFocused.reset(), this.fileMatchOrFolderMatchFocus.reset(), this.fileMatchOrFolderMatchWithResourceFocus.reset(), this.folderMatchWithResourceFocused.reset(), this.isEditableItem.reset();
    }));
  }
  onContextMenu(e) {
    e.browserEvent.preventDefault(), e.browserEvent.stopPropagation(), this.contextMenuService.showContextMenu({
      menuId: P.SearchContext,
      menuActionOptions: { shouldForwardArgs: !0 },
      contextKeyService: this.contextKeyService,
      getAnchor: () => e.anchor,
      getActionsContext: () => e.element
    });
  }
  hasSomeCollapsible() {
    const e = this.getControl(), t = e.navigate();
    let i = t.first();
    do
      if (!e.isCollapsed(i))
        return !0;
    while (i = t.next());
    return !1;
  }
  selectNextMatch() {
    if (!this.hasSearchResults())
      return;
    const [e] = this.tree.getSelection();
    e && !(e instanceof F) && this.tree.isCollapsed(e) && this.tree.expand(e);
    const t = this.tree.navigate(e);
    let i = t.next();
    for (i || (i = t.first()); i && !(i instanceof F); )
      this.tree.isCollapsed(i) && this.tree.expand(i), i = t.next();
    if (i) {
      i === e && this.tree.setFocus([]);
      const s = Re(void 0, !1, !1);
      this.tree.setFocus([i], s), this.tree.setSelection([i], s), this.tree.reveal(i);
      const r = this.treeAccessibilityProvider.getAriaLabel(i);
      r && ot(r);
    }
  }
  selectPreviousMatch() {
    if (!this.hasSearchResults())
      return;
    const [e] = this.tree.getSelection();
    let t = this.tree.navigate(e), i = t.previous();
    for (; !i || !(i instanceof F) && !this.tree.isCollapsed(i); ) {
      const s = i ? t.previous() : t.last();
      if (!i && !s)
        return;
      i = s;
    }
    for (; !(i instanceof F); ) {
      const s = t.next();
      this.tree.expand(i), t = this.tree.navigate(s), i = s ? t.previous() : t.last();
    }
    if (i) {
      i === e && this.tree.setFocus([]);
      const s = Re(void 0, !1, !1);
      this.tree.setFocus([i], s), this.tree.setSelection([i], s), this.tree.reveal(i);
      const r = this.treeAccessibilityProvider.getAriaLabel(i);
      r && ot(r);
    }
  }
  moveFocusToResults() {
    this.tree.domFocus();
  }
  focus() {
    if (super.focus(), this.lastFocusState === "input" || !this.hasSearchResults()) {
      const e = this.searchConfig.seedOnFocus ? this.updateTextFromSelection({ allowSearchOnType: !1 }) : !1;
      this.searchWidget.focus(void 0, void 0, e);
    } else
      this.tree.domFocus();
  }
  updateTextFromFindWidgetOrSelection({ allowUnselectedWord: e = !0, allowSearchOnType: t = !0 }) {
    let i = this.editorService.activeTextEditorControl;
    if (fi(i) && !(i != null && i.hasTextFocus())) {
      const s = xo.get(i);
      if (s && s.isFindInputFocused())
        return this.updateTextFromFindWidget(s, { allowSearchOnType: t });
      i = this.codeEditorService.listCodeEditors().find((n) => n instanceof Io && n.getParentEditor() === i && n.hasTextFocus()) ?? i;
    }
    return this.updateTextFromSelection({ allowUnselectedWord: e, allowSearchOnType: t }, i);
  }
  updateTextFromFindWidget(e, { allowSearchOnType: t = !0 }) {
    var s, r, n, a;
    if (!this.searchConfig.seedWithNearestWord && (((s = window.getSelection()) == null ? void 0 : s.toString()) ?? "") === "")
      return !1;
    const i = e.getState().searchString;
    return i === "" ? !1 : ((r = this.searchWidget.searchInput) == null || r.setCaseSensitive(e.getState().matchCase), (n = this.searchWidget.searchInput) == null || n.setWholeWords(e.getState().wholeWord), (a = this.searchWidget.searchInput) == null || a.setRegex(e.getState().isRegex), this.updateText(i, t), !0);
  }
  updateTextFromSelection({ allowUnselectedWord: e = !0, allowSearchOnType: t = !0 }, i) {
    var n;
    if (!this.configurationService.getValue("editor").find.seedSearchStringFromSelection)
      return !1;
    let r = this.getSearchTextFromEditor(e, i);
    return r === null ? !1 : ((n = this.searchWidget.searchInput) != null && n.getRegex() && (r = Eo(r)), this.updateText(r, t), !0);
  }
  updateText(e, t = !0) {
    t && !this.viewModel.searchResult.isDirty ? this.searchWidget.setValue(e) : (this.pauseSearching = !0, this.searchWidget.setValue(e), this.pauseSearching = !1);
  }
  focusNextInputBox() {
    if (this.searchWidget.searchInputHasFocus()) {
      this.searchWidget.isReplaceShown() ? this.searchWidget.focus(!0, !0) : this.moveFocusFromSearchOrReplace();
      return;
    }
    if (this.searchWidget.replaceInputHasFocus()) {
      this.moveFocusFromSearchOrReplace();
      return;
    }
    if (this.inputPatternIncludes.inputHasFocus()) {
      this.inputPatternExcludes.focus(), this.inputPatternExcludes.select();
      return;
    }
    if (this.inputPatternExcludes.inputHasFocus()) {
      this.selectTreeIfNotSelected();
      return;
    }
  }
  moveFocusFromSearchOrReplace() {
    this.showsFileTypes() ? this.toggleQueryDetails(!0, this.showsFileTypes()) : this.selectTreeIfNotSelected();
  }
  focusPreviousInputBox() {
    if (!this.searchWidget.searchInputHasFocus()) {
      if (this.searchWidget.replaceInputHasFocus()) {
        this.searchWidget.focus(!0);
        return;
      }
      if (this.inputPatternIncludes.inputHasFocus()) {
        this.searchWidget.focus(!0, !0);
        return;
      }
      if (this.inputPatternExcludes.inputHasFocus()) {
        this.inputPatternIncludes.focus(), this.inputPatternIncludes.select();
        return;
      }
      if (this.tree.isDOMFocused()) {
        this.moveFocusFromResults();
        return;
      }
    }
  }
  moveFocusFromResults() {
    this.showsFileTypes() ? this.toggleQueryDetails(!0, !0, !1, !0) : this.searchWidget.focus(!0, !0);
  }
  reLayout() {
    if (this.isDisposed || !this.size)
      return;
    const e = this.searchConfig.actionsPosition;
    this.getContainer().classList.toggle(it.ACTIONS_RIGHT_CLASS_NAME, e === "right"), this.searchWidget.setWidth(this.size.width - 28), this.inputPatternExcludes.setWidth(this.size.width - 28), this.inputPatternIncludes.setWidth(this.size.width - 28);
    const t = Ci(this.searchWidgetsContainerElement), i = Ci(this.messagesElement);
    this.tree.layout(this.size.height - t - i, this.size.width - 28);
  }
  layoutBody(e, t) {
    super.layoutBody(e, t), this.size = new Co(t, e), this.reLayout();
  }
  getControl() {
    return this.tree;
  }
  allSearchFieldsClear() {
    return this.searchWidget.getReplaceValue() === "" && (!this.searchWidget.searchInput || this.searchWidget.searchInput.getValue() === "");
  }
  allFilePatternFieldsClear() {
    return this.searchExcludePattern.getValue() === "" && this.searchIncludePattern.getValue() === "";
  }
  hasSearchResults() {
    return !this.viewModel.searchResult.isEmpty();
  }
  clearSearchResults(e = !0) {
    this.viewModel.searchResult.clear(), this.showEmptyStage(!0), this.contextService.getWorkbenchState() === 1 && this.showSearchWithoutFolderMessage(), e && (this.allSearchFieldsClear() && this.clearFilePatternFields(), this.searchWidget.clear()), this.viewModel.cancelSearch(), this.tree.ariaLabel = l("emptySearch", "Empty Search"), ot(l("ariaSearchResultsClearStatus", "The search results have been cleared")), this.reLayout();
  }
  clearFilePatternFields() {
    this.searchExcludePattern.clear(), this.searchIncludePattern.clear();
  }
  cancelSearch(e = !0) {
    return this.viewModel.cancelSearch() ? (e && this.searchWidget.focus(), !0) : !1;
  }
  selectTreeIfNotSelected() {
    if (this.tree.getNode(null) && (this.tree.domFocus(), this.tree.getSelection().length === 0)) {
      const t = Re();
      this.tree.focusNext(void 0, void 0, t), this.tree.setSelection(this.tree.getFocus(), t);
    }
  }
  getSearchTextFromEditor(e, t) {
    if (tr(document.activeElement, this.getContainer()) || (t = t ?? this.editorService.activeTextEditorControl, ur(t) && (t.getOriginalEditor().hasTextFocus() ? t = t.getOriginalEditor() : t = t.getModifiedEditor()), !fi(t) || !t.hasModel()))
      return null;
    const i = t.getSelection();
    if (!i)
      return null;
    if (i.isEmpty() && this.searchConfig.seedWithNearestWord && e) {
      const s = t.getModel().getWordAtPosition(i.getStartPosition());
      if (s)
        return s.word;
    }
    if (!i.isEmpty()) {
      let s = "";
      for (let r = i.startLineNumber; r <= i.endLineNumber; r++) {
        let n = t.getModel().getLineContent(r);
        r === i.endLineNumber && (n = n.substring(0, i.endColumn - 1)), r === i.startLineNumber && (n = n.substring(i.startColumn - 1)), r !== i.startLineNumber && (n = `
` + n), s += n;
      }
      return s;
    }
    return null;
  }
  showsFileTypes() {
    return this.queryDetails.classList.contains("more");
  }
  toggleCaseSensitive() {
    var e;
    (e = this.searchWidget.searchInput) == null || e.setCaseSensitive(!this.searchWidget.searchInput.getCaseSensitive()), this.triggerQueryChange();
  }
  toggleWholeWords() {
    var e;
    (e = this.searchWidget.searchInput) == null || e.setWholeWords(!this.searchWidget.searchInput.getWholeWords()), this.triggerQueryChange();
  }
  toggleRegex() {
    var e;
    (e = this.searchWidget.searchInput) == null || e.setRegex(!this.searchWidget.searchInput.getRegex()), this.triggerQueryChange();
  }
  togglePreserveCase() {
    var e;
    (e = this.searchWidget.replaceInput) == null || e.setPreserveCase(!this.searchWidget.replaceInput.getPreserveCase()), this.triggerQueryChange();
  }
  setSearchParameters(e = {}) {
    var t, i, s, r, n, a;
    typeof e.isCaseSensitive == "boolean" && ((t = this.searchWidget.searchInput) == null || t.setCaseSensitive(e.isCaseSensitive)), typeof e.matchWholeWord == "boolean" && ((i = this.searchWidget.searchInput) == null || i.setWholeWords(e.matchWholeWord)), typeof e.isRegex == "boolean" && ((s = this.searchWidget.searchInput) == null || s.setRegex(e.isRegex)), typeof e.filesToInclude == "string" && this.searchIncludePattern.setValue(String(e.filesToInclude)), typeof e.filesToExclude == "string" && this.searchExcludePattern.setValue(String(e.filesToExclude)), typeof e.query == "string" && ((r = this.searchWidget.searchInput) == null || r.setValue(e.query)), typeof e.replace == "string" ? (n = this.searchWidget.replaceInput) == null || n.setValue(e.replace) : this.searchWidget.replaceInput && this.searchWidget.replaceInput.getValue() !== "" && this.searchWidget.replaceInput.setValue(""), typeof e.triggerSearch == "boolean" && e.triggerSearch && this.triggerQueryChange(), typeof e.preserveCase == "boolean" && ((a = this.searchWidget.replaceInput) == null || a.setPreserveCase(e.preserveCase)), typeof e.useExcludeSettingsAndIgnoreFiles == "boolean" && this.inputPatternExcludes.setUseExcludesAndIgnoreFiles(e.useExcludeSettingsAndIgnoreFiles), typeof e.onlyOpenEditors == "boolean" && this.searchIncludePattern.setOnlySearchInOpenEditors(e.onlyOpenEditors);
  }
  toggleQueryDetails(e = !0, t, i, s) {
    const r = "more";
    t = typeof t > "u" ? !this.queryDetails.classList.contains(r) : !!t, this.viewletState["query.queryDetailsExpanded"] = t, i = !!i, t ? (this.toggleQueryDetailsButton.setAttribute("aria-expanded", "true"), this.queryDetails.classList.add(r), e && (s ? (this.inputPatternExcludes.focus(), this.inputPatternExcludes.select()) : (this.inputPatternIncludes.focus(), this.inputPatternIncludes.select()))) : (this.toggleQueryDetailsButton.setAttribute("aria-expanded", "false"), this.queryDetails.classList.remove(r), e && this.searchWidget.focus()), !i && this.size && this.reLayout();
  }
  searchInFolders(e = []) {
    this._searchWithIncludeOrExclude(!0, e);
  }
  searchOutsideOfFolders(e = []) {
    this._searchWithIncludeOrExclude(!1, e);
  }
  _searchWithIncludeOrExclude(e, t) {
    if (!t.length || t.some((i) => i === ".")) {
      this.inputPatternIncludes.setValue(""), this.searchWidget.focus();
      return;
    }
    this.showsFileTypes() || this.toggleQueryDetails(!0, !0), (e ? this.inputPatternIncludes : this.inputPatternExcludes).setValue(t.join(", ")), this.searchWidget.focus(!1);
  }
  triggerQueryChange(e) {
    const t = { preserveFocus: !0, triggeredOnType: !1, delay: 0, ...e };
    t.triggeredOnType && !this.searchConfig.searchOnType || this.pauseSearching || this.triggerQueryDelayer.trigger(() => {
      this._onQueryChanged(t.preserveFocus, t.triggeredOnType);
    }, t.delay);
  }
  _onQueryChanged(e, t = !1) {
    var W;
    if (!((W = this.searchWidget.searchInput) != null && W.inputBox.isInputValid()))
      return;
    const i = this.searchWidget.searchInput.getRegex(), s = this.searchWidget.getNotebookFilters().markupInput, r = this.searchWidget.getNotebookFilters().markupPreview, n = this.searchWidget.getNotebookFilters().codeInput, a = this.searchWidget.getNotebookFilters().codeOutput, c = this.searchWidget.searchInput.getWholeWords(), h = this.searchWidget.searchInput.getCaseSensitive(), u = this.searchWidget.searchInput.getValue(), d = this.inputPatternExcludes.getValue().trim(), f = this.inputPatternIncludes.getValue().trim(), p = this.inputPatternExcludes.useExcludesAndIgnoreFiles(), S = this.inputPatternIncludes.onlySearchInOpenEditors();
    if (u.length === 0) {
      this.clearSearchResults(!1), this.clearMessage();
      return;
    }
    const m = {
      pattern: u,
      isRegExp: i,
      isCaseSensitive: h,
      isWordMatch: c,
      notebookInfo: {
        isInNotebookMarkdownInput: s,
        isInNotebookMarkdownPreview: r,
        isInNotebookCellInput: n,
        isInNotebookCellOutput: a
      }
    }, I = this.inputPatternExcludes.getValue(), x = this.inputPatternIncludes.getValue(), E = m.isRegExp ? 1e4 : 1e3, _ = {
      _reason: "searchView",
      extraFileResources: this.instantiationService.invokeFunction(ji),
      maxResults: rt(this.searchConfig.maxResults),
      disregardIgnoreFiles: !p || void 0,
      disregardExcludeSettings: !p || void 0,
      onlyOpenEditors: S,
      excludePattern: I,
      includePattern: x,
      previewOptions: {
        matchLines: 1,
        charsPerLine: E
      },
      isSmartCase: this.searchConfig.smartCase,
      expandPatterns: !0
    }, be = this.contextService.getWorkspace().folders, ae = (G) => {
      var de;
      (de = this.searchWidget.searchInput) == null || de.showMessage({ content: G.message, type: 3 }), this.viewModel.searchResult.clear();
    };
    let ee;
    try {
      ee = this.queryBuilder.text(m, be.map((G) => G.uri), _);
    } catch (G) {
      ae(G);
      return;
    }
    this.validateQuery(ee).then(() => {
      this.onQueryTriggered(ee, _, d, f, t), e || this.searchWidget.focus(!1, void 0, !0);
    }, ae);
  }
  validateQuery(e) {
    const t = e.folderQueries.map((i) => this.fileService.exists(i.folder).catch(() => !1));
    return Promise.all(t).then((i) => {
      const s = e.folderQueries.filter((r, n) => i[n]);
      if (!e.folderQueries.length || s.length)
        e.folderQueries = s;
      else {
        const r = e.folderQueries[0].folder.fsPath, n = l("searchPathNotFoundError", "Search path not found: {0}", r);
        return Promise.reject(new Error(n));
      }
    });
  }
  onQueryTriggered(e, t, i, s, r) {
    this.addToSearchHistoryDelayer.trigger(() => {
      var n;
      (n = this.searchWidget.searchInput) == null || n.onSearchSubmit(), this.inputPatternExcludes.onSearchSubmit(), this.inputPatternIncludes.onSearchSubmit();
    }), this.viewModel.cancelSearch(!0), this.currentSearchQ = this.currentSearchQ.then(() => this.doSearch(e, i, s, r)).then(() => {
    }, () => {
    });
  }
  _updateResults() {
    if (this.state !== pe.Idle)
      try {
        const e = this.viewModel.searchResult.fileCount();
        this._visibleMatches !== e && (this._visibleMatches = e, this.refreshAndUpdateCount());
      } finally {
        this._refreshResultsScheduler.schedule();
      }
  }
  doSearch(e, t, i, s) {
    var h;
    let r;
    this.progressService.withProgress({ location: this.getProgressLocation(), delay: s ? 300 : 0 }, (u) => new Promise((d) => r = d)), (h = this.searchWidget.searchInput) == null || h.clearMessage(), this.state = pe.Searching, this.showEmptyStage();
    const n = setTimeout(() => {
      this.state = pe.SlowSearch;
    }, 2e3), a = (u) => {
      if (clearTimeout(n), this.state = pe.Idle, r(), this.onSearchResultsChanged(), this.searchConfig.collapseResults !== "alwaysCollapse" && this.viewModel.searchResult.matches().length === 1) {
        const p = this.viewModel.searchResult.matches()[0];
        p.count() < 50 && this.tree.expand(p);
      }
      this.viewModel.replaceString = this.searchWidget.getReplaceValue();
      const f = !this.viewModel.searchResult.isEmpty();
      if ((u == null ? void 0 : u.exit) !== 1) {
        if (f)
          this.viewModel.searchResult.toggleHighlights(this.isVisible()), ot(l(
            "ariaSearchResultsStatus",
            "Search returned {0} results in {1} files",
            this.viewModel.searchResult.count(),
            this.viewModel.searchResult.fileCount()
          ));
        else {
          const p = !!t, S = !!i;
          let m;
          u ? this.inputPatternIncludes.onlySearchInOpenEditors() ? S && p ? m = l(
            "noOpenEditorResultsIncludesExcludes",
            "No results found in open editors matching '{0}' excluding '{1}' - ",
            i,
            t
          ) : S ? m = l(
            "noOpenEditorResultsIncludes",
            "No results found in open editors matching '{0}' - ",
            i
          ) : p ? m = l(
            "noOpenEditorResultsExcludes",
            "No results found in open editors excluding '{0}' - ",
            t
          ) : m = l(
            "noOpenEditorResultsFound",
            "No results found in open editors. Review your settings for configured exclusions and check your gitignore files - "
          ) : S && p ? m = l(
            "noResultsIncludesExcludes",
            "No results found in '{0}' excluding '{1}' - ",
            i,
            t
          ) : S ? m = l("noResultsIncludes", "No results found in '{0}' - ", i) : p ? m = l(
            "noResultsExcludes",
            "No results found excluding '{0}' - ",
            t
          ) : m = l(
            "noResultsFound",
            "No results found. Review your settings for configured exclusions and check your gitignore files - "
          ) : m = Vs, ot(m);
          const I = this.clearMessage();
          if (v(I, m), u)
            if (S || p) {
              const x = this.messageDisposables.add(new Ie(l("rerunSearchInAll.message", "Search again in all files"), this.onSearchAgain.bind(this)));
              v(I, x.element);
            } else {
              const x = this.messageDisposables.add(new Ie(l("openSettings.message", "Open Settings"), this.onOpenSettings.bind(this)));
              v(I, x.element);
            }
          else {
            const x = this.messageDisposables.add(new Ie(l("rerunSearch.message", "Search again"), () => this.triggerQueryChange({ preserveFocus: !1 })));
            v(I, x.element);
          }
          if (u) {
            v(I, j("span", void 0, " - "));
            const x = this.messageDisposables.add(new Ie(l("openSettings.learnMore", "Learn More"), this.onLearnMore.bind(this)));
            v(I, x.element);
          }
          this.contextService.getWorkbenchState() === 1 && this.showSearchWithoutFolderMessage(), this.reLayout();
        }
        if (u && u.limitHit && u.messages.push({ type: ir.Warning, text: l(
          "searchMaxResultsWarning",
          "The result set only contains a subset of all matches. Be more specific in your search to narrow down the results."
        ) }), u && u.messages)
          for (const p of u.messages)
            this.addMessage(p);
        this.reLayout();
      }
    }, c = (u) => {
      var d;
      return clearTimeout(n), this.state = pe.Idle, Fs(u) ? a(void 0) : (r(), (d = this.searchWidget.searchInput) == null || d.showMessage({ content: u.message, type: 3 }), this.viewModel.searchResult.clear(), Promise.resolve());
    };
    return this._visibleMatches = 0, this._refreshResultsScheduler.schedule(), this.searchWidget.setReplaceAllActionState(!1), this.tree.setSelection([]), this.tree.setFocus([]), this.viewModel.search(e).then(a, c);
  }
  onOpenSettings(e) {
    ke.stop(e, !1), this.openSettings("@id:files.exclude,search.exclude,search.useParentIgnoreFiles,search.useGlobalIgnoreFiles,search.useIgnoreFiles");
  }
  openSettings(e) {
    const t = { query: e };
    return this.contextService.getWorkbenchState() !== 1 ? this.preferencesService.openWorkspaceSettings(t) : this.preferencesService.openUserSettings(t);
  }
  onLearnMore() {
    this.openerService.open(Le.parse("https://go.microsoft.com/fwlink/?linkid=853977"));
  }
  onSearchAgain() {
    this.inputPatternExcludes.setValue(""), this.inputPatternIncludes.setValue(""), this.inputPatternIncludes.setOnlySearchInOpenEditors(!1), this.triggerQueryChange({ preserveFocus: !1 });
  }
  onEnableExcludes() {
    this.toggleQueryDetails(!1, !0), this.searchExcludePattern.setUseExcludesAndIgnoreFiles(!0);
  }
  onDisableSearchInOpenEditors() {
    this.toggleQueryDetails(!1, !0), this.inputPatternIncludes.setOnlySearchInOpenEditors(!1);
  }
  updateSearchResultCount(e, t, i = !1) {
    var c;
    const s = this.viewModel.searchResult.fileCount();
    this.hasSearchResultsKey.set(s > 0);
    const r = this.messagesElement.style.display === "none", n = this.clearMessage(), a = i ? "" : this.buildResultCountMessage(this.viewModel.searchResult.count(), s);
    if (this.tree.ariaLabel = a + l(
      "forTerm",
      " - Search: {0}",
      ((c = this.searchResult.query) == null ? void 0 : c.contentPattern.pattern) ?? ""
    ), v(n, a), s > 0) {
      if (e) {
        const d = " - " + l(
          "useIgnoresAndExcludesDisabled",
          "exclude settings and ignore files are disabled"
        ) + " ", f = this.messageDisposables.add(new Ie(l("excludes.enable", "enable"), this.onEnableExcludes.bind(this), l(
          "useExcludesAndIgnoreFilesDescription",
          "Use Exclude Settings and Ignore Files"
        )));
        v(n, j("span", void 0, d, "(", f.element, ")"));
      }
      if (t) {
        const d = " - " + l("onlyOpenEditors", "searching only in open files") + " ", f = this.messageDisposables.add(new Ie(l("openEditors.disable", "disable"), this.onDisableSearchInOpenEditors.bind(this), l("disableOpenEditors", "Search in entire workspace")));
        v(n, j("span", void 0, d, "(", f.element, ")"));
      }
      v(n, " - ");
      const h = _e(l("openInEditor.tooltip", "Copy current search results to an editor"), this.keybindingService.lookupKeybinding(Za)), u = this.messageDisposables.add(new Ie(l("openInEditor.message", "Open in editor"), () => this.instantiationService.invokeFunction(Ur, this.searchResult, this.searchIncludePattern.getValue(), this.searchExcludePattern.getValue(), this.searchIncludePattern.onlySearchInOpenEditors()), h));
      v(n, u.element), this.reLayout();
    } else
      r || gi(this.messagesElement);
  }
  addMessage(e) {
    const t = this.messagesElement.firstChild;
    t && v(t, Er(e, this.instantiationService, this.notificationService, this.openerService, this.commandService, this.messageDisposables, () => this.triggerQueryChange()));
  }
  buildResultCountMessage(e, t) {
    return e === 1 && t === 1 ? l("search.file.result", "{0} result in {1} file", e, t) : e === 1 ? l("search.files.result", "{0} result in {1} files", e, t) : t === 1 ? l("search.file.results", "{0} results in {1} file", e, t) : l("search.files.results", "{0} results in {1} files", e, t);
  }
  showSearchWithoutFolderMessage() {
    this.searchWithoutFolderMessageElement = this.clearMessage();
    const e = v(this.searchWithoutFolderMessageElement, j("p", void 0, l(
      "searchWithoutFolder",
      "You have not opened or specified a folder. Only open files are currently searched - "
    ))), t = this.messageDisposables.add(new Ie(l("openFolder", "Open Folder"), () => {
      this.commandService.executeCommand(ai && ko ? Ro.ID : Fo.ID).catch((i) => Lt(i));
    }));
    v(e, t.element);
  }
  showEmptyStage(e = !1) {
    var i, s;
    ((((s = (i = this.messagesElement.firstChild) == null ? void 0 : i.textContent) == null ? void 0 : s.indexOf(Vs)) ?? -1) > -1 || e || !this.configurationService.getValue().search.searchOnType) && gi(this.messagesElement), Ps(this.resultsElement), this.currentSelectedFileMatch = void 0;
  }
  shouldOpenInNotebookEditor(e, t) {
    return e instanceof fe || t.scheme !== H.untitled && this.notebookService.getContributedNotebookTypes(t).length > 0;
  }
  onFocus(e, t, i, s) {
    const r = this.configurationService.getValue().search.useReplacePreview, n = e instanceof F ? e.parent().resource : e.resource;
    return r && this.viewModel.isReplaceActive() && this.viewModel.replaceString && !this.shouldOpenInNotebookEditor(e, n) ? this.replaceService.openReplacePreview(e, t, i, s) : this.open(e, t, i, s, n);
  }
  async open(e, t, i, s, r) {
    const n = this.getSelectionFrom(e), a = e instanceof F ? e.parent().matches() : [], c = r ?? (e instanceof F ? e.parent().resource : e.resource);
    let h;
    const u = {
      preserveFocus: t,
      pinned: s,
      selection: n,
      revealIfVisible: !0,
      indexedCellOptions: e instanceof fe ? { cellIndex: e.cellIndex, selection: e.range } : void 0
    };
    try {
      h = await this.editorService.openEditor({
        resource: c,
        options: u
      }, i ? ft : ii);
      const d = h == null ? void 0 : h.getControl();
      e instanceof F && t && fi(d) ? this.viewModel.searchResult.rangeHighlightDecorations.highlightRange(d.getModel(), e.range()) : this.viewModel.searchResult.rangeHighlightDecorations.removeHighlightRange();
    } catch (d) {
      Lt(d);
      return;
    }
    if (h instanceof Va) {
      const d = e.parent();
      if (e instanceof F)
        if (e instanceof fe)
          e.parent().showMatch(e);
        else {
          const f = h.getControl();
          if (f) {
            d.bindNotebookEditorWidget(f), await d.updateMatchesForEditorWidget();
            const p = a.findIndex((I) => I.id() === e.id()), S = d.matches(), m = p >= S.length ? S[S.length - 1] : S[p];
            m instanceof fe && (d.showMatch(m), (!this.tree.getFocus().includes(m) || !this.tree.getSelection().includes(m)) && (this.tree.setSelection([m], Re()), this.tree.setFocus([m])));
          }
        }
    }
  }
  openEditorWithMultiCursor(e) {
    const t = e instanceof F ? e.parent().resource : e.resource;
    return this.editorService.openEditor({
      resource: t,
      options: {
        preserveFocus: !1,
        pinned: !0,
        revealIfVisible: !0
      }
    }).then((i) => {
      if (i) {
        let s = null;
        if (e instanceof L ? s = e : e instanceof F && (s = e.parent()), s) {
          const r = s.matches().map((a) => new ki(
            a.range().startLineNumber,
            a.range().startColumn,
            a.range().endLineNumber,
            a.range().endColumn
          )), n = Po(i.getControl());
          if (n) {
            const a = To.get(n);
            a == null || a.selectAllUsingSelections(r);
          }
        }
      }
      this.viewModel.searchResult.rangeHighlightDecorations.removeHighlightRange();
    }, Lt);
  }
  getSelectionFrom(e) {
    let t = null;
    if (e instanceof F && (t = e), e instanceof L && e.count() > 0 && (t = e.matches()[e.matches().length - 1]), t) {
      const i = t.range();
      if (this.viewModel.isReplaceActive() && this.viewModel.replaceString) {
        const s = t.replaceString;
        return {
          startLineNumber: i.startLineNumber,
          startColumn: i.startColumn,
          endLineNumber: i.startLineNumber,
          endColumn: i.startColumn + s.length
        };
      }
      return i;
    }
  }
  onUntitledDidDispose(e) {
    if (!this.viewModel)
      return;
    const t = this.viewModel.searchResult.matches();
    for (let i = 0, s = t.length; i < s; i++)
      e.toString() === t[i].resource.toString() && this.viewModel.searchResult.remove(t[i]);
  }
  onFilesChanged(e) {
    if (!this.viewModel || this.searchConfig.sortOrder !== "modified" && !e.gotDeleted())
      return;
    const t = this.viewModel.searchResult.matches();
    if (e.gotDeleted()) {
      const i = t.filter((s) => e.contains(s.resource, 2));
      this.viewModel.searchResult.remove(i);
    } else {
      const i = t.filter((s) => e.contains(s.resource));
      i.length && this.searchConfig.sortOrder === "modified" && this.updateFileStats(i).then(() => this.refreshTree());
    }
  }
  get searchConfig() {
    return this.configurationService.getValue("search");
  }
  clearHistory() {
    this.searchWidget.clearHistory(), this.inputPatternExcludes.clearHistory(), this.inputPatternIncludes.clearHistory();
  }
  saveState() {
    var a, c, h, u;
    if (!this.searchWidget)
      return;
    const e = ((a = this.inputPatternExcludes) == null ? void 0 : a.getValue().trim()) ?? "", t = ((c = this.inputPatternIncludes) == null ? void 0 : c.getValue().trim()) ?? "", i = ((h = this.inputPatternIncludes) == null ? void 0 : h.onlySearchInOpenEditors()) ?? !1, s = ((u = this.inputPatternExcludes) == null ? void 0 : u.useExcludesAndIgnoreFiles()) ?? !0, r = this.viewModel.preserveCase;
    if (this.searchWidget.searchInput) {
      const d = this.searchWidget.searchInput.getRegex(), f = this.searchWidget.searchInput.getWholeWords(), p = this.searchWidget.searchInput.getCaseSensitive(), S = this.searchWidget.searchInput.getValue(), m = this.searchWidget.getNotebookFilters().codeInput, I = this.searchWidget.getNotebookFilters().codeOutput, x = this.searchWidget.getNotebookFilters().markupInput, E = this.searchWidget.getNotebookFilters().markupPreview;
      this.viewletState["query.contentPattern"] = S, this.viewletState["query.regex"] = d, this.viewletState["query.wholeWords"] = f, this.viewletState["query.caseSensitive"] = p, this.viewletState["query.isInNotebookMarkdownInput"] = x, this.viewletState["query.isInNotebookMarkdownPreview"] = E, this.viewletState["query.isInNotebookCellInput"] = m, this.viewletState["query.isInNotebookCellOutput"] = I;
    }
    this.viewletState["query.folderExclusions"] = e, this.viewletState["query.folderIncludes"] = t, this.viewletState["query.useExcludesAndIgnoreFiles"] = s, this.viewletState["query.preserveCase"] = r, this.viewletState["query.onlyOpenEditors"] = i;
    const n = this.searchAndReplaceWidget.isReplaceShown();
    this.viewletState["view.showReplace"] = n, this.viewletState["view.treeLayout"] = this.isTreeLayoutViewVisible, this.viewletState["query.replaceText"] = n && this.searchWidget.getReplaceValue(), this._saveSearchHistoryService(), this.memento.saveMemento(), super.saveState();
  }
  _saveSearchHistoryService() {
    const e = /* @__PURE__ */ Object.create(null), t = this.searchWidget.getSearchHistory();
    t && t.length && (e.search = t);
    const i = this.searchWidget.getReplaceHistory();
    i && i.length && (e.replace = i);
    const s = this.inputPatternExcludes.getHistory();
    s && s.length && (e.exclude = s);
    const r = this.inputPatternIncludes.getHistory();
    r && r.length && (e.include = r), this.searchHistoryService.save(e);
  }
  async retrieveFileStats() {
    const e = this.searchResult.matches().filter((t) => !t.fileStat).map((t) => t.resolveFileStat(this.fileService));
    await Promise.all(e);
  }
  async updateFileStats(e) {
    const t = e.map((i) => i.resolveFileStat(this.fileService));
    await Promise.all(t);
  }
  removeFileStats() {
    for (const e of this.searchResult.matches())
      e.fileStat = void 0;
  }
  dispose() {
    this.isDisposed = !0, this.saveState(), super.dispose();
  }
}, it.ACTIONS_RIGHT_CLASS_NAME = "actions-right", it);
Ni = B([
  g(1, Et),
  g(2, M),
  g(3, $s),
  g(4, Ao),
  g(5, ri),
  g(6, $i),
  g(7, Ft),
  g(8, ts),
  g(9, N),
  g(10, Mo),
  g(11, V),
  g(12, ue),
  g(13, Ki),
  g(14, J),
  g(15, Zt),
  g(16, ei),
  g(17, _o),
  g(18, ni),
  g(19, rs),
  g(20, es),
  g(21, ar),
  g(22, Ct),
  g(23, nt),
  g(24, zi),
  g(25, st),
  g(26, Wo),
  g(27, Hi)
], Ni);
class Ie extends se {
  constructor(e, t, i) {
    super(), this.element = j("a.pointer", { tabindex: 0, title: i }, e), this.addEventHandlers(t);
  }
  addEventHandlers(e) {
    const t = (i) => {
      ke.stop(i, !1), e(i);
    };
    this._register(me(this.element, ve.CLICK, t)), this._register(me(this.element, ve.KEY_DOWN, (i) => {
      const s = new St(i);
      (s.equals(10) || s.equals(3)) && (t(i), s.preventDefault(), s.stopPropagation());
    }));
  }
}
w(class extends b {
  constructor() {
    super({
      id: Ya,
      title: {
        value: l("copyMatchLabel", "Copy"),
        original: "Copy"
      },
      category: C,
      keybinding: {
        weight: 200,
        when: Ke,
        primary: 2081
      },
      menu: [{
        id: P.SearchContext,
        when: Ke,
        group: "search_2",
        order: 1
      }]
    });
  }
  async run(e, t) {
    await sl(e, t);
  }
});
w(class extends b {
  constructor() {
    super({
      id: Xa,
      title: {
        value: l("copyPathLabel", "Copy Path"),
        original: "Copy Path"
      },
      category: C,
      keybinding: {
        weight: 200,
        when: _i,
        primary: 2593,
        win: {
          primary: 1569
        }
      },
      menu: [{
        id: P.SearchContext,
        when: _i,
        group: "search_2",
        order: 2
      }]
    });
  }
  async run(e, t) {
    await il(e, t);
  }
});
w(class extends b {
  constructor() {
    super({
      id: Ja,
      title: {
        value: l("copyAllLabel", "Copy All"),
        original: "Copy All"
      },
      category: C,
      menu: [{
        id: P.SearchContext,
        when: te,
        group: "search_2",
        order: 3
      }]
    });
  }
  async run(e) {
    await rl(e);
  }
});
const Ye = Lo ? `\r
` : `
`;
async function il(o, e) {
  if (!e) {
    const r = Gr(o);
    if (!(r instanceof L || r instanceof Ei))
      return;
    e = r;
  }
  const t = o.get(oi), s = o.get(he).getUriLabel(e.resource, { noPrefix: !0 });
  await t.writeText(s);
}
async function sl(o, e) {
  if (!e) {
    const r = Gr(o);
    if (!r)
      return;
    e = r;
  }
  const t = o.get(oi), i = o.get(he);
  let s;
  e instanceof F ? s = zr(e) : e instanceof L ? s = $r(e, i).text : e instanceof X && (s = hs(e, i).text), s && await t.writeText(s);
}
async function rl(o) {
  const e = o.get(R), t = o.get(oi), i = o.get(he), s = T(e);
  if (s) {
    const r = s.searchResult, n = ol(r.folderMatches(), i);
    await t.writeText(n);
  }
}
function zr(o, e = 0) {
  const t = () => `${o.range().startLineNumber},${o.range().startColumn}`, i = (a) => o.range().startLineNumber + a + "", s = o.fullPreviewLines(), r = s.reduce((a, c, h) => {
    const u = h === 0 ? t().length : i(h).length;
    return Math.max(u, a);
  }, 0);
  return s.map((a, c) => {
    const h = c === 0 ? t() : i(c), u = " ".repeat(r - h.length);
    return `${" ".repeat(e)}${h}: ${u}${a}`;
  }).join(`
`);
}
function nl(o, e) {
  return o instanceof L ? $r(o, e) : hs(o, e);
}
function $r(o, e) {
  const t = o.matches().sort(ye).map((s) => zr(s, 2));
  return {
    text: `${e.getUriLabel(o.resource, { noPrefix: !0 })}${Ye}${t.join(Ye)}`,
    count: t.length
  };
}
function hs(o, e) {
  const t = [];
  let i = 0;
  return o.matches().sort(ye).forEach((r) => {
    const n = nl(r, e);
    i += n.count, t.push(n.text);
  }), {
    text: t.join(Ye + Ye),
    count: i
  };
}
function ol(o, e) {
  const t = [];
  o = o.sort(ye);
  for (let i = 0; i < o.length; i++) {
    const s = hs(o[i], e);
    s.count && t.push(s.text);
  }
  return t.join(Ye + Ye);
}
function Gr(o) {
  const e = o.get(R), t = T(e);
  return t == null ? void 0 : t.getControl().getSelection()[0];
}
w(class extends b {
  constructor() {
    super({
      id: Ic,
      title: {
        value: l("restrictResultsToFolder", "Restrict Search to Folder"),
        original: "Restrict Search to Folder"
      },
      category: C,
      keybinding: {
        weight: 200,
        when: y.and(Z, Qt),
        primary: 1572
      },
      menu: [
        {
          id: P.SearchContext,
          group: "search",
          order: 3,
          when: y.and(Qt)
        }
      ]
    });
  }
  async run(e, t) {
    await us(e, !1, !0, void 0, t);
  }
});
w(class extends b {
  constructor() {
    super({
      id: wc,
      title: {
        value: l("excludeFolderFromSearch", "Exclude Folder from Search"),
        original: "Exclude Folder from Search"
      },
      category: C,
      menu: [
        {
          id: P.SearchContext,
          group: "search",
          order: 4,
          when: y.and(Qt)
        }
      ]
    });
  }
  async run(e, t) {
    await us(e, !1, !1, void 0, t);
  }
});
w(class extends b {
  constructor() {
    super({
      id: ac,
      title: {
        value: l("revealInSideBar", "Reveal in Explorer View"),
        original: "Reveal in Explorer View"
      },
      category: C,
      menu: [{
        id: P.SearchContext,
        when: y.and(Te, te),
        group: "search_3",
        order: 1
      }]
    });
  }
  async run(e, t) {
    const i = e.get(Oo), s = e.get(pr), r = e.get(ue), n = T(e.get(R));
    if (!n)
      return;
    let a;
    if (t instanceof L || (t = n.getControl().getFocus()[0]), t instanceof L)
      a = t;
    else
      return;
    i.openPaneComposite(Do, 0, !1).then((c) => {
      if (!c)
        return;
      const h = c.getViewPaneContainer(), u = a.resource;
      if (u && r.isInsideWorkspace(u)) {
        const d = h.getExplorerView();
        d.setExpanded(!0), s.select(u, !0).then(() => d.focus(), Lt);
      }
    });
  }
});
w(class extends b {
  constructor() {
    super({
      id: Ua,
      title: {
        value: l("findInFiles", "Find in Files"),
        mnemonicTitle: l(
          { key: "miFindInFiles", comment: ["&& denotes a mnemonic"] },
          "Find &&in Files"
        ),
        original: "Find in Files"
      },
      description: {
        description: l("findInFiles.description", "Open a workspace search"),
        args: [
          {
            name: l("findInFiles.args", "A set of options for the search"),
            schema: {
              type: "object",
              properties: {
                query: { type: "string" },
                replace: { type: "string" },
                preserveCase: { type: "boolean" },
                triggerSearch: { type: "boolean" },
                filesToInclude: { type: "string" },
                filesToExclude: { type: "string" },
                isRegex: { type: "boolean" },
                isCaseSensitive: { type: "boolean" },
                matchWholeWord: { type: "boolean" },
                useExcludeSettingsAndIgnoreFiles: { type: "boolean" },
                onlyOpenEditors: { type: "boolean" }
              }
            }
          }
        ]
      },
      category: C,
      keybinding: {
        weight: 200,
        primary: 3108
      },
      menu: [{
        id: P.MenubarEditMenu,
        group: "4_find_global",
        order: 1
      }],
      f1: !0
    });
  }
  async run(e, t = {}) {
    cl(e, t);
  }
});
w(class extends b {
  constructor() {
    super({
      id: Ec,
      title: {
        value: l("findInFolder", "Find in Folder..."),
        original: "Find in Folder..."
      },
      category: C,
      keybinding: {
        weight: 200,
        when: y.and(No, Ri),
        primary: 1572
      },
      menu: [
        {
          id: P.ExplorerContext,
          group: "4_search",
          order: 10,
          when: y.and(Ri)
        }
      ]
    });
  }
  async run(e, t) {
    await us(e, !0, !0, t);
  }
});
w(class extends b {
  constructor() {
    super({
      id: Cc,
      title: {
        value: l("findInWorkspace", "Find in Workspace..."),
        original: "Find in Workspace..."
      },
      category: C,
      menu: [
        {
          id: P.ExplorerContext,
          group: "4_search",
          order: 10,
          when: y.and(Bo, Ri.toNegated())
        }
      ]
    });
  }
  async run(e) {
    const i = e.get(V).getValue().search.mode;
    if (i === "view") {
      const s = await Ue(e.get(R), !0);
      s == null || s.searchInFolders();
    } else
      return e.get(Ft).executeCommand(wt, {
        location: i === "newEditor" ? "new" : "reuse",
        filesToInclude: ""
      });
  }
});
async function us(o, e, t, i, s) {
  const r = o.get(Vo), n = o.get(Et), a = o.get(R), c = o.get(ue), h = o.get(Ft), u = o.get(V).getValue().search, d = u.mode;
  let f;
  if (e)
    f = Ho(i, r, o.get(M), o.get(pr));
  else {
    const S = T(o.get(R));
    if (!S)
      return;
    f = al(S.getControl(), s, u);
  }
  const p = n.resolveAll(f.map((S) => ({ resource: S }))).then((S) => {
    const m = [];
    return S.forEach((I) => {
      I.success && I.stat && m.push(I.stat.isDirectory ? I.stat.resource : Qi(I.stat.resource));
    }), qo(m, c);
  });
  if (d === "view") {
    const S = await Ue(a, !0);
    f && f.length && S && (t ? S.searchInFolders(await p) : S.searchOutsideOfFolders(await p));
    return;
  } else
    return t ? h.executeCommand(wt, {
      filesToInclude: (await p).join(", "),
      showIncludesExcludes: !0,
      location: d === "newEditor" ? "new" : "reuse"
    }) : h.executeCommand(wt, {
      filesToExclude: (await p).join(", "),
      showIncludesExcludes: !0,
      location: d === "newEditor" ? "new" : "reuse"
    });
}
function al(o, e, t) {
  return os(o, e, t).map(
    (i) => i instanceof F ? null : i.resource
  ).filter((i) => i !== null);
}
async function cl(o, e = {}) {
  const t = o.get(V).getValue().search, i = o.get(R), s = o.get(Ft), r = {};
  if (Object.keys(e).length !== 0) {
    const a = o.get(hr), c = o.get(Xi), h = o.get(ue), u = c.getLastActiveWorkspaceRoot(), d = (u == null ? void 0 : u.scheme) === H.file || (u == null ? void 0 : u.scheme) === H.vscodeRemote ? u : void 0, f = d ? rt(h.getWorkspaceFolder(d)) : void 0;
    for (const p of Object.entries(e)) {
      const S = p[0], m = p[1];
      m !== void 0 && (r[S] = typeof m == "string" ? await a.resolveAsync(f, m) : m);
    }
  }
  const n = t.mode;
  if (n === "view")
    Ue(i, !1).then((a) => {
      if (a) {
        a.searchAndReplaceWidget.toggleReplace(typeof r.replace == "string");
        let h = !1;
        typeof r.query != "string" && (h = a.updateTextFromFindWidgetOrSelection({ allowUnselectedWord: typeof r.replace != "string" })), a.setSearchParameters(r), a.searchAndReplaceWidget.focus(void 0, h, h);
      }
    });
  else {
    const a = (c) => ({
      location: n === "newEditor" ? "new" : "reuse",
      query: c.query,
      filesToInclude: c.filesToInclude,
      filesToExclude: c.filesToExclude,
      matchWholeWord: c.matchWholeWord,
      isCaseSensitive: c.isCaseSensitive,
      isRegexp: c.isRegex,
      useExcludeSettingsAndIgnoreFiles: c.useExcludeSettingsAndIgnoreFiles,
      onlyOpenEditors: c.onlyOpenEditors,
      showIncludesExcludes: !!(c.filesToExclude || c.filesToExclude || !c.useExcludeSettingsAndIgnoreFiles)
    });
    s.executeCommand(wt, a(r));
  }
}
w(class extends b {
  constructor() {
    super({
      id: yc,
      title: {
        value: l("ToggleQueryDetailsAction.label", "Toggle Query Details"),
        original: "Toggle Query Details"
      },
      category: C,
      keybinding: {
        weight: 200,
        when: y.or(we, q),
        primary: 3112
      }
    });
  }
  run(e) {
    const t = e.get(J).getContext(document.activeElement);
    if (t.getValue(q.serialize()))
      e.get(M).activeEditorPane.toggleQueryDetails();
    else if (t.getValue(we.serialize())) {
      const i = T(e.get(R));
      is(i).toggleQueryDetails();
    }
  }
});
w(class extends b {
  constructor() {
    super({
      id: nc,
      title: {
        value: l("CloseReplaceWidget.label", "Close Replace Widget"),
        original: "Close Replace Widget"
      },
      category: C,
      keybinding: {
        weight: 200,
        when: y.and(Z, Tr),
        primary: 9
      }
    });
  }
  run(e) {
    const t = T(e.get(R));
    return t && (t.searchAndReplaceWidget.toggleReplace(!1), t.searchAndReplaceWidget.focus()), Promise.resolve(null);
  }
});
w(class extends b {
  constructor() {
    super({
      id: Cr,
      title: {
        value: l("ToggleCaseSensitiveCommandId.label", "Toggle Case Sensitive"),
        original: "Toggle Case Sensitive"
      },
      category: C,
      keybinding: Object.assign({
        weight: 200,
        when: ai ? y.and(we, Mr.toNegated()) : we
      }, fr)
    });
  }
  async run(e) {
    ll(e);
  }
});
w(class extends b {
  constructor() {
    super({
      id: kr,
      title: {
        value: l("ToggleWholeWordCommandId.label", "Toggle Whole Word"),
        original: "Toggle Whole Word"
      },
      keybinding: Object.assign({
        weight: 200,
        when: we
      }, Sr),
      category: C
    });
  }
  async run(e) {
    return hl(e);
  }
});
w(class extends b {
  constructor() {
    super({
      id: Rr,
      title: {
        value: l("ToggleRegexCommandId.label", "Toggle Regex"),
        original: "Toggle Regex"
      },
      keybinding: Object.assign({
        weight: 200,
        when: we
      }, mr),
      category: C
    });
  }
  async run(e) {
    return ul(e);
  }
});
w(class extends b {
  constructor() {
    super({
      id: Fr,
      title: {
        value: l("TogglePreserveCaseId.label", "Toggle Preserve Case"),
        original: "Toggle Preserve Case"
      },
      keybinding: Object.assign({
        weight: 200,
        when: we
      }, Ko),
      category: C
    });
  }
  async run(e) {
    return dl(e);
  }
});
w(class extends b {
  constructor() {
    super({
      id: $a,
      title: {
        value: l("OpenMatch.label", "Open Match"),
        original: "Open Match"
      },
      category: C,
      keybinding: {
        weight: 200,
        when: y.and(Z, Ke),
        primary: 3,
        mac: {
          primary: 3,
          secondary: [2066]
        }
      }
    });
  }
  run(e) {
    const t = T(e.get(R));
    if (t) {
      const i = t.getControl(), s = t.getControl(), r = i.getFocus()[0];
      r instanceof X ? s.toggleCollapsed(r) : t.open(i.getFocus()[0], !1, !1, !0);
    }
  }
});
w(class extends b {
  constructor() {
    super({
      id: Ga,
      title: {
        value: l("OpenMatchToSide.label", "Open Match To Side"),
        original: "Open Match To Side"
      },
      category: C,
      keybinding: {
        weight: 200,
        when: y.and(Z, Ke),
        primary: 2051,
        mac: {
          primary: 259
        }
      }
    });
  }
  run(e) {
    const t = T(e.get(R));
    if (t) {
      const i = t.getControl();
      t.open(i.getFocus()[0], !1, !0, !0);
    }
  }
});
w(class extends b {
  constructor() {
    super({
      id: oc,
      title: {
        value: l("AddCursorsAtSearchResults.label", "Add Cursors at Search Results"),
        original: "Add Cursors at Search Results"
      },
      keybinding: {
        weight: 200,
        when: y.and(Z, Ke),
        primary: 3114
      },
      category: C
    });
  }
  async run(e) {
    const t = T(e.get(R));
    if (t) {
      const i = t.getControl();
      t.openEditorWithMultiCursor(i.getFocus()[0]);
    }
  }
});
w(class extends b {
  constructor() {
    super({
      id: bc,
      title: {
        value: l("FocusNextInputAction.label", "Focus Next Input"),
        original: "Focus Next Input"
      },
      category: C,
      keybinding: {
        weight: 200,
        when: y.or(y.and(q, je), y.and(Z, je)),
        primary: 2066
      }
    });
  }
  async run(e) {
    const t = e.get(M);
    t.activeEditor instanceof D && t.activeEditorPane.focusNextInput();
    const s = T(e.get(R));
    s == null || s.focusNextInputBox();
  }
});
w(class extends b {
  constructor() {
    super({
      id: xc,
      title: {
        value: l("FocusPreviousInputAction.label", "Focus Previous Input"),
        original: "Focus Previous Input"
      },
      category: C,
      keybinding: {
        weight: 200,
        when: y.or(y.and(q, je), y.and(
          Z,
          je,
          Pt.toNegated()
        )),
        primary: 2064
      }
    });
  }
  async run(e) {
    const t = e.get(M);
    t.activeEditor instanceof D && t.activeEditorPane.focusPrevInput();
    const s = T(e.get(R));
    s == null || s.focusPreviousInputBox();
  }
});
w(class extends b {
  constructor() {
    super({
      id: za,
      title: {
        value: l("FocusSearchFromResults.label", "Focus Search From Results"),
        original: "Focus Search From Results"
      },
      category: C,
      keybinding: {
        weight: 200,
        when: y.and(Z, y.or(Ar, Qo)),
        primary: 2064
      }
    });
  }
  run(e) {
    const t = T(e.get(R));
    t == null || t.focusPreviousInputBox();
  }
});
var He;
w((He = class extends b {
  constructor() {
    super({
      id: gc,
      title: {
        value: l("toggleTabs", "Toggle Search on Type"),
        original: "Toggle Search on Type"
      },
      category: C
    });
  }
  async run(e) {
    const t = e.get(V), i = t.getValue(He.searchOnTypeKey);
    return t.updateValue(He.searchOnTypeKey, !i);
  }
}, He.searchOnTypeKey = "search.searchOnType", He));
w(class extends b {
  constructor() {
    super({
      id: tc,
      title: {
        value: l("focusSearchListCommandLabel", "Focus List"),
        original: "Focus List"
      },
      category: C,
      f1: !0
    });
  }
  async run(e) {
    gl(e);
  }
});
w(class extends b {
  constructor() {
    super({
      id: uc,
      title: {
        value: l("FocusNextSearchResult.label", "Focus Next Search Result"),
        original: "Focus Next Search Result"
      },
      keybinding: [{
        primary: 62,
        weight: 200
      }],
      category: C,
      f1: !0,
      precondition: y.or(te, q)
    });
  }
  async run(e) {
    return await pl(e);
  }
});
w(class extends b {
  constructor() {
    super({
      id: dc,
      title: {
        value: l("FocusPreviousSearchResult.label", "Focus Previous Search Result"),
        original: "Focus Previous Search Result"
      },
      keybinding: [{
        primary: 1086,
        weight: 200
      }],
      category: C,
      f1: !0,
      precondition: y.or(te, q)
    });
  }
  async run(e) {
    return await fl(e);
  }
});
w(class extends b {
  constructor() {
    super({
      id: cc,
      title: {
        value: l("replaceInFiles", "Replace in Files"),
        original: "Replace in Files"
      },
      keybinding: [{
        primary: 3110,
        weight: 200
      }],
      category: C,
      f1: !0,
      menu: [{
        id: P.MenubarEditMenu,
        group: "4_find_global",
        order: 2
      }]
    });
  }
  async run(e) {
    return await Sl(e, !0);
  }
});
function ll(o) {
  const e = T(o.get(R));
  e == null || e.toggleCaseSensitive();
}
function hl(o) {
  const e = T(o.get(R));
  e == null || e.toggleWholeWords();
}
function ul(o) {
  const e = T(o.get(R));
  e == null || e.toggleRegex();
}
function dl(o) {
  const e = T(o.get(R));
  e == null || e.togglePreserveCase();
}
const gl = (o) => {
  const e = o.get(R);
  Ue(e).then((t) => {
    t == null || t.moveFocusToResults();
  });
};
async function pl(o) {
  const e = o.get(M);
  return e.activeEditor instanceof D ? e.activeEditorPane.focusNextResult() : Ue(o.get(R)).then((i) => {
    i == null || i.selectNextMatch();
  });
}
async function fl(o) {
  const e = o.get(M);
  return e.activeEditor instanceof D ? e.activeEditorPane.focusPreviousResult() : Ue(o.get(R)).then((i) => {
    i == null || i.selectPreviousMatch();
  });
}
async function Sl(o, e) {
  return Ue(o.get(R), !1).then((t) => {
    if (t) {
      t.searchAndReplaceWidget.toggleReplace(e);
      const s = t.updateTextFromFindWidgetOrSelection({ allowUnselectedWord: !e });
      t.searchAndReplaceWidget.focus(void 0, s, s);
    }
  });
}
w(class extends b {
  constructor() {
    super({
      id: ja,
      title: {
        value: l("RemoveAction.label", "Dismiss"),
        original: "Dismiss"
      },
      category: C,
      icon: Aa,
      keybinding: {
        weight: 200,
        when: y.and(Z, Ke),
        primary: 20,
        mac: {
          primary: 2049
        }
      },
      menu: [
        {
          id: P.SearchContext,
          group: "search",
          order: 2
        },
        {
          id: P.SearchActionMenu,
          group: "inline",
          order: 2
        }
      ]
    });
  }
  run(e, t) {
    const i = e.get(R), s = e.get(V), r = T(i);
    if (!r)
      return;
    let n = t == null ? void 0 : t.element, a = t == null ? void 0 : t.viewer;
    a || (a = r.getControl()), n || (n = a.getFocus()[0] ?? void 0);
    const c = os(a, n, s.getValue("search"));
    let h = a.getFocus()[0] ?? void 0;
    if (c.length === 0)
      return;
    (!h || h instanceof ci) && (h = n);
    let u;
    const d = qa(c, h);
    h && d && (u = jr(a, h, c));
    const f = r.searchResult;
    f && f.batchRemove(c), h && d ? (u || (u = Xr(a, h)), u && !dt(u, c) && (a.reveal(u), a.setFocus([u], Re()), a.setSelection([u], Re()))) : Uo(a.getFocus(), a.getSelection()) || a.setSelection(a.getFocus()), a.domFocus();
  }
});
w(class extends b {
  constructor() {
    super({
      id: ic,
      title: {
        value: l("match.replace.label", "Replace"),
        original: "Replace"
      },
      category: C,
      keybinding: {
        weight: 200,
        when: y.and(
          Z,
          ne,
          Be,
          Y
        ),
        primary: 3094
      },
      icon: ns,
      menu: [
        {
          id: P.SearchContext,
          when: y.and(
            ne,
            Be,
            Y
          ),
          group: "search",
          order: 1
        },
        {
          id: P.SearchActionMenu,
          when: y.and(
            ne,
            Be,
            Y
          ),
          group: "inline",
          order: 1
        }
      ]
    });
  }
  async run(e, t) {
    return ds(e, t);
  }
});
w(class extends b {
  constructor() {
    super({
      id: sc,
      title: {
        value: l("file.replaceAll.label", "Replace All"),
        original: "Replace All"
      },
      category: C,
      keybinding: {
        weight: 200,
        when: y.and(
          Z,
          ne,
          Te,
          Y
        ),
        primary: 3094,
        secondary: [3075]
      },
      icon: ns,
      menu: [
        {
          id: P.SearchContext,
          when: y.and(
            ne,
            Te,
            Y
          ),
          group: "search",
          order: 1
        },
        {
          id: P.SearchActionMenu,
          when: y.and(
            ne,
            Te,
            Y
          ),
          group: "inline",
          order: 1
        }
      ]
    });
  }
  async run(e, t) {
    return ds(e, t);
  }
});
w(class extends b {
  constructor() {
    super({
      id: rc,
      title: {
        value: l("file.replaceAll.label", "Replace All"),
        original: "Replace All"
      },
      category: C,
      keybinding: {
        weight: 200,
        when: y.and(
          Z,
          ne,
          Ne,
          Y
        ),
        primary: 3094,
        secondary: [3075]
      },
      icon: ns,
      menu: [
        {
          id: P.SearchContext,
          when: y.and(
            ne,
            Ne,
            Y
          ),
          group: "search",
          order: 1
        },
        {
          id: P.SearchActionMenu,
          when: y.and(
            ne,
            Ne,
            Y
          ),
          group: "inline",
          order: 1
        }
      ]
    });
  }
  async run(e, t) {
    return ds(e, t);
  }
});
function ds(o, e) {
  const t = o.get(V), i = o.get(R), s = T(i), r = (e == null ? void 0 : e.viewer) ?? (s == null ? void 0 : s.getControl());
  if (!r)
    return;
  const n = (e == null ? void 0 : e.element) ?? r.getFocus()[0], a = os(r, n ?? void 0, t.getValue("search"));
  let c = r.getFocus()[0];
  if ((!c || c && !dt(c, a) || c instanceof ci) && (c = n), a.length === 0)
    return;
  let h;
  c && (h = jr(r, c, a));
  const u = s == null ? void 0 : s.searchResult;
  u && u.batchReplace(a), c && (h || (h = Xr(r, c)), h && (r.reveal(h), r.setFocus([h], Re()), r.setSelection([h], Re()), h instanceof F ? !t.getValue().search.useReplacePreview || ml(o, h) || h instanceof fe ? s == null || s.open(h, !0) : o.get(Zt).openReplacePreview(h, !0) : h instanceof L && (s == null || s.open(h, !0)))), r.domFocus();
}
function ml(o, e) {
  if (!(e instanceof F))
    return !1;
  const t = o.get(M).activeEditor, i = t == null ? void 0 : t.resource;
  return i ? o.get(qi).extUri.isEqual(i, e.parent().resource) : !1;
}
function vl(o, e) {
  return o instanceof F ? e instanceof F ? 0 : -1 : o instanceof L ? e instanceof F ? 1 : e instanceof L ? 0 : -1 : e instanceof X ? 0 : 1;
}
function jr(o, e, t) {
  const i = o.navigate(e);
  if (e instanceof X)
    for (; i.next() && (!(i.current() instanceof X) || dt(i.current(), t)); )
      ;
  else if (e instanceof L)
    for (; i.next() && (!(i.current() instanceof L) || dt(i.current(), t)); )
      o.expand(i.current());
  else
    for (; i.next() && (!(i.current() instanceof F) || dt(i.current(), t)); )
      o.expand(i.current());
  return i.current();
}
function Xr(o, e) {
  let t = o.lastVisibleElement ?? null;
  for (; t; ) {
    const i = vl(e, t);
    if (i === -1)
      o.expand(t), t = o.lastVisibleElement;
    else if (i === 1)
      t = o.getParentElement(t);
    else
      return t;
  }
}
var Fe;
w((Fe = class extends b {
  constructor() {
    super({
      id: Pr,
      title: {
        value: l("showTriggerActions", "Go to Symbol in Workspace..."),
        original: "Go to Symbol in Workspace...",
        mnemonicTitle: l(
          { key: "miGotoSymbolInWorkspace", comment: ["&& denotes a mnemonic"] },
          "Go to Symbol in &&Workspace..."
        )
      },
      f1: !0,
      keybinding: {
        weight: 200,
        primary: 2098
      },
      menu: {
        id: P.MenubarGoMenu,
        group: "3_global_nav",
        order: 2
      }
    });
  }
  async run(e) {
    e.get(si).quickAccess.show(Fe.ALL_SYMBOLS_PREFIX);
  }
}, Fe.ID = "workbench.action.showAllSymbols", Fe.LABEL = l("showTriggerActions", "Go to Symbol in Workspace..."), Fe.ALL_SYMBOLS_PREFIX = "#", Fe));
w(class extends b {
  constructor() {
    super({
      id: ec,
      title: {
        value: l("clearSearchHistoryLabel", "Clear Search History"),
        original: "Clear Search History"
      },
      category: C,
      f1: !0
    });
  }
  async run(e) {
    yl(e);
  }
});
w(class extends b {
  constructor() {
    super({
      id: lc,
      title: {
        value: l("CancelSearchAction.label", "Cancel Search"),
        original: "Cancel Search"
      },
      icon: Da,
      category: C,
      f1: !0,
      precondition: Nt.isEqualTo(pe.Idle).negate(),
      keybinding: {
        weight: 200,
        when: y.and(Z, zo),
        primary: 9
      },
      menu: [{
        id: P.ViewTitle,
        group: "navigation",
        order: 0,
        when: y.and(y.equals("view", oe), Nt.isEqualTo(pe.SlowSearch))
      }]
    });
  }
  run(e) {
    return xl(e);
  }
});
w(class extends b {
  constructor() {
    super({
      id: hc,
      title: {
        value: l("RefreshAction.label", "Refresh"),
        original: "Refresh"
      },
      icon: xr,
      precondition: as,
      category: C,
      f1: !0,
      menu: [{
        id: P.ViewTitle,
        group: "navigation",
        order: 0,
        when: y.and(y.equals("view", oe), Nt.isEqualTo(pe.SlowSearch).negate())
      }]
    });
  }
  run(e, ...t) {
    return Il(e);
  }
});
w(class extends b {
  constructor() {
    super({
      id: pc,
      title: {
        value: l("CollapseDeepestExpandedLevelAction.label", "Collapse All"),
        original: "Collapse All"
      },
      category: C,
      icon: Ma,
      f1: !0,
      precondition: y.and(te, vt),
      menu: [{
        id: P.ViewTitle,
        group: "navigation",
        order: 3,
        when: y.and(y.equals("view", oe), y.or(te.negate(), vt))
      }]
    });
  }
  run(e, ...t) {
    return El(e);
  }
});
w(class extends b {
  constructor() {
    super({
      id: fc,
      title: {
        value: l("ExpandAllAction.label", "Expand All"),
        original: "Expand All"
      },
      category: C,
      icon: _a,
      f1: !0,
      precondition: y.and(te, vt.toNegated()),
      menu: [{
        id: P.ViewTitle,
        group: "navigation",
        order: 3,
        when: y.and(y.equals("view", oe), te, vt.toNegated())
      }]
    });
  }
  run(e, ...t) {
    return wl(e);
  }
});
w(class extends b {
  constructor() {
    super({
      id: Sc,
      title: {
        value: l("ClearSearchResultsAction.label", "Clear Search Results"),
        original: "Clear Search Results"
      },
      category: C,
      icon: Oa,
      f1: !0,
      precondition: y.or(
        te,
        as,
        _r,
        Wr
      ),
      menu: [{
        id: P.ViewTitle,
        group: "navigation",
        order: 1,
        when: y.equals("view", oe)
      }]
    });
  }
  run(e, ...t) {
    return bl(e);
  }
});
w(class extends b {
  constructor() {
    super({
      id: mc,
      title: {
        value: l("ViewAsTreeAction.label", "View as Tree"),
        original: "View as Tree"
      },
      category: C,
      icon: La,
      f1: !0,
      precondition: y.and(te, yt.toNegated()),
      menu: [{
        id: P.ViewTitle,
        group: "navigation",
        order: 2,
        when: y.and(y.equals("view", oe), yt.toNegated())
      }]
    });
  }
  run(e, ...t) {
    const i = T(e.get(R));
    i && i.setTreeView(!0);
  }
});
w(class extends b {
  constructor() {
    super({
      id: vc,
      title: {
        value: l("ViewAsListAction.label", "View as List"),
        original: "View as List"
      },
      category: C,
      icon: Wa,
      f1: !0,
      precondition: y.and(te, yt),
      menu: [{
        id: P.ViewTitle,
        group: "navigation",
        order: 2,
        when: y.and(y.equals("view", oe), yt)
      }]
    });
  }
  run(e, ...t) {
    const i = T(e.get(R));
    i && i.setTreeView(!1);
  }
});
const yl = (o) => {
  o.get(rs).clearHistory();
};
function wl(o) {
  const e = o.get(R), t = T(e);
  t && t.getControl().expandAll();
}
function bl(o) {
  const e = o.get(R), t = T(e);
  t == null || t.clearSearchResults();
}
function xl(o) {
  const e = o.get(R), t = T(e);
  t == null || t.cancelSearch();
}
function Il(o) {
  const e = o.get(R), t = T(e);
  t == null || t.triggerQueryChange({ preserveFocus: !1 });
}
function El(o) {
  var i, s, r;
  const e = o.get(R), t = T(e);
  if (t) {
    const n = t.getControl(), a = n.navigate();
    let c = a.first(), h = !1, u = !1;
    if (c instanceof _t || t.isTreeLayoutViewVisible)
      for (; c = a.next(); ) {
        if (c instanceof F) {
          h = !0;
          break;
        }
        if (t.isTreeLayoutViewVisible && !u) {
          let f = c;
          if (c instanceof X) {
            const S = (i = n.getCompressedTreeNode(c).element) == null ? void 0 : i.elements[0];
            f = S && !(S instanceof F) ? S : c;
          }
          const p = f.parent();
          p instanceof _t || p instanceof Ii || p instanceof ci || (u = !0);
        }
      }
    if (h) {
      c = a.first();
      do
        c instanceof L && n.collapse(c);
      while (c = a.next());
    } else if (u) {
      if (c = a.first(), c)
        do {
          let f = c;
          if (c instanceof X) {
            const S = (s = n.getCompressedTreeNode(c).element) == null ? void 0 : s.elements[0];
            f = S && !(S instanceof F) ? S : c;
          }
          const p = f.parent();
          (p instanceof _t || p instanceof Ii) && (n.hasElement(c) ? n.collapse(c, !0) : n.collapseAll());
        } while (c = a.next());
    } else
      n.collapseAll();
    const d = (r = n.getFocus()[0]) == null ? void 0 : r.parent();
    d && (d instanceof X || d instanceof L) && n.hasElement(d) && n.isCollapsed(d) && (n.domFocus(), n.focusFirst(), n.setSelection(n.getFocus()));
  }
}
Ra();
Fa();
Bc();
const Cl = "search.mode", Yr = Me.as(vr.ViewContainersRegistry).registerViewContainer({
  id: Ts,
  title: { value: l("name", "Search"), original: "Search" },
  ctorDescriptor: new De(
    $o,
    [Ts, { mergeViewWithContainerWhenSingleView: !0 }]
  ),
  hideIfEmpty: !0,
  icon: Ir,
  order: 1
}, 0, { doNotRegisterOpenCommand: !0 }), kl = {
  id: oe,
  containerIcon: Ir,
  name: l("search", "Search"),
  ctorDescriptor: new De(Ni),
  canToggleVisibility: !1,
  canMoveView: !0,
  openCommandActionDescriptor: {
    id: Yr.id,
    mnemonicTitle: l({ key: "miViewSearch", comment: ["&& denotes a mnemonic"] }, "&&Search"),
    keybindings: {
      primary: 3108,
      when: y.regex("neverMatch", /doesNotMatch/)
    },
    order: 1
  }
};
Me.as(vr.ViewsRegistry).registerViews([kl], Yr);
const Jr = Me.as(Go.Quickaccess);
Jr.registerQuickAccessProvider({
  ctor: Vt,
  prefix: Vt.PREFIX,
  placeholder: l(
    "anythingQuickAccessPlaceholder",
    "Search files by name (append {0} to go to line or {1} to go to symbol)",
    jo.PREFIX,
    Ee.PREFIX
  ),
  contextKey: Xo,
  helpEntries: [{ description: l("anythingQuickAccess", "Go to File"), commandId: "workbench.action.quickOpen" }]
});
Jr.registerQuickAccessProvider({
  ctor: mt,
  prefix: mt.PREFIX,
  placeholder: l("symbolsQuickAccessPlaceholder", "Type the name of a symbol to open."),
  contextKey: "inWorkspaceSymbolsPicker",
  helpEntries: [{ description: l("symbolsQuickAccess", "Go to Symbol in Workspace"), commandId: Pr }]
});
const Rl = Me.as(Yo.Configuration);
Rl.registerConfiguration({
  id: "search",
  order: 13,
  title: l("searchConfigurationTitle", "Search"),
  type: "object",
  properties: {
    [Jo]: {
      type: "object",
      markdownDescription: l(
        "exclude",
        "Configure [glob patterns](https://code.visualstudio.com/docs/editor/codebasics#_advanced-search-options) for excluding files and folders in fulltext searches and quick open. Inherits all glob patterns from the `#files.exclude#` setting."
      ),
      default: { "**/node_modules": !0, "**/bower_components": !0, "**/*.code-search": !0 },
      additionalProperties: {
        anyOf: [
          {
            type: "boolean",
            description: l(
              "exclude.boolean",
              "The glob pattern to match file paths against. Set to true or false to enable or disable the pattern."
            )
          },
          {
            type: "object",
            properties: {
              when: {
                type: "string",
                pattern: "\\w*\\$\\(basename\\)\\w*",
                default: "$(basename).ext",
                markdownDescription: l(
                  { key: "exclude.when", comment: ["\\$(basename) should not be translated"] },
                  "Additional check on the siblings of a matching file. Use \\$(basename) as variable for the matching file name."
                )
              }
            }
          }
        ]
      },
      scope: 4
    },
    [Cl]: {
      type: "string",
      enum: ["view", "reuseEditor", "newEditor"],
      default: "view",
      markdownDescription: l(
        "search.mode",
        "Controls where new `Search: Find in Files` and `Find in Folder` operations occur: either in the search view, or in a search editor."
      ),
      enumDescriptions: [
        l(
          "search.mode.view",
          "Search in the search view, either in the panel or side bars."
        ),
        l(
          "search.mode.reuseEditor",
          "Search in an existing search editor if present, otherwise in a new search editor."
        ),
        l("search.mode.newEditor", "Search in a new search editor.")
      ]
    },
    "search.useRipgrep": {
      type: "boolean",
      description: l(
        "useRipgrep",
        'This setting is deprecated and now falls back on "search.usePCRE2".'
      ),
      deprecationMessage: l(
        "useRipgrepDeprecated",
        'Deprecated. Consider "search.usePCRE2" for advanced regex feature support.'
      ),
      default: !0
    },
    "search.maintainFileSearchCache": {
      type: "boolean",
      deprecationMessage: l(
        "maintainFileSearchCacheDeprecated",
        "The search cache is kept in the extension host which never shuts down, so this setting is no longer needed."
      ),
      description: l(
        "search.maintainFileSearchCache",
        "When enabled, the searchService process will be kept alive instead of being shut down after an hour of inactivity. This will keep the file search cache in memory."
      ),
      default: !1
    },
    "search.useIgnoreFiles": {
      type: "boolean",
      markdownDescription: l(
        "useIgnoreFiles",
        "Controls whether to use `.gitignore` and `.ignore` files when searching for files."
      ),
      default: !0,
      scope: 4
    },
    "search.useGlobalIgnoreFiles": {
      type: "boolean",
      markdownDescription: l(
        "useGlobalIgnoreFiles",
        "Controls whether to use your global gitignore file (e.g., from `$HOME/.config/git/ignore`) when searching for files. Requires `#search.useIgnoreFiles#` to be enabled."
      ),
      default: !1,
      scope: 4
    },
    "search.useParentIgnoreFiles": {
      type: "boolean",
      markdownDescription: l(
        "useParentIgnoreFiles",
        "Controls whether to use `.gitignore` and `.ignore` files in parent directories when searching for files. Requires `#search.useIgnoreFiles#` to be enabled."
      ),
      default: !1,
      scope: 4
    },
    "search.quickOpen.includeSymbols": {
      type: "boolean",
      description: l(
        "search.quickOpen.includeSymbols",
        "Whether to include results from a global symbol search in the file results for Quick Open."
      ),
      default: !1
    },
    "search.quickOpen.includeHistory": {
      type: "boolean",
      description: l(
        "search.quickOpen.includeHistory",
        "Whether to include results from recently opened files in the file results for Quick Open."
      ),
      default: !0
    },
    "search.quickOpen.history.filterSortOrder": {
      type: "string",
      enum: ["default", "recency"],
      default: "default",
      enumDescriptions: [
        l(
          "filterSortOrder.default",
          "History entries are sorted by relevance based on the filter value used. More relevant entries appear first."
        ),
        l(
          "filterSortOrder.recency",
          "History entries are sorted by recency. More recently opened entries appear first."
        )
      ],
      description: l(
        "filterSortOrder",
        "Controls sorting order of editor history in quick open when filtering."
      )
    },
    "search.followSymlinks": {
      type: "boolean",
      description: l(
        "search.followSymlinks",
        "Controls whether to follow symlinks while searching."
      ),
      default: !0
    },
    "search.smartCase": {
      type: "boolean",
      description: l(
        "search.smartCase",
        "Search case-insensitively if the pattern is all lowercase, otherwise, search case-sensitively."
      ),
      default: !1
    },
    "search.globalFindClipboard": {
      type: "boolean",
      default: !1,
      description: l(
        "search.globalFindClipboard",
        "Controls whether the search view should read or modify the shared find clipboard on macOS."
      ),
      included: ai
    },
    "search.location": {
      type: "string",
      enum: ["sidebar", "panel"],
      default: "sidebar",
      description: l(
        "search.location",
        "Controls whether the search will be shown as a view in the sidebar or as a panel in the panel area for more horizontal space."
      ),
      deprecationMessage: l(
        "search.location.deprecationMessage",
        "This setting is deprecated. You can drag the search icon to a new location instead."
      )
    },
    "search.maxResults": {
      type: ["number", "null"],
      default: 2e4,
      markdownDescription: l(
        "search.maxResults",
        "Controls the maximum number of search results, this can be set to `null` (empty) to return unlimited results."
      )
    },
    "search.collapseResults": {
      type: "string",
      enum: ["auto", "alwaysCollapse", "alwaysExpand"],
      enumDescriptions: [
        l(
          "search.collapseResults.auto",
          "Files with less than 10 results are expanded. Others are collapsed."
        ),
        "",
        ""
      ],
      default: "alwaysExpand",
      description: l(
        "search.collapseAllResults",
        "Controls whether the search results will be collapsed or expanded."
      )
    },
    "search.useReplacePreview": {
      type: "boolean",
      default: !0,
      description: l(
        "search.useReplacePreview",
        "Controls whether to open Replace Preview when selecting or replacing a match."
      )
    },
    "search.showLineNumbers": {
      type: "boolean",
      default: !1,
      description: l(
        "search.showLineNumbers",
        "Controls whether to show line numbers for search results."
      )
    },
    "search.usePCRE2": {
      type: "boolean",
      default: !1,
      description: l(
        "search.usePCRE2",
        "Whether to use the PCRE2 regex engine in text search. This enables using some advanced regex features like lookahead and backreferences. However, not all PCRE2 features are supported - only features that are also supported by JavaScript."
      ),
      deprecationMessage: l(
        "usePCRE2Deprecated",
        "Deprecated. PCRE2 will be used automatically when using regex features that are only supported by PCRE2."
      )
    },
    "search.actionsPosition": {
      type: "string",
      enum: ["auto", "right"],
      enumDescriptions: [
        l(
          "search.actionsPositionAuto",
          "Position the actionbar to the right when the search view is narrow, and immediately after the content when the search view is wide."
        ),
        l(
          "search.actionsPositionRight",
          "Always position the actionbar to the right."
        )
      ],
      default: "right",
      description: l(
        "search.actionsPosition",
        "Controls the positioning of the actionbar on rows in the search view."
      )
    },
    "search.searchOnType": {
      type: "boolean",
      default: !0,
      description: l("search.searchOnType", "Search all files as you type.")
    },
    "search.seedWithNearestWord": {
      type: "boolean",
      default: !1,
      description: l(
        "search.seedWithNearestWord",
        "Enable seeding search from the word nearest the cursor when the active editor has no selection."
      )
    },
    "search.seedOnFocus": {
      type: "boolean",
      default: !1,
      markdownDescription: l(
        "search.seedOnFocus",
        "Update the search query to the editor's selected text when focusing the search view. This happens either on click or when triggering the `workbench.views.search.focus` command."
      )
    },
    "search.searchOnTypeDebouncePeriod": {
      type: "number",
      default: 300,
      markdownDescription: l(
        "search.searchOnTypeDebouncePeriod",
        "When {0} is enabled, controls the timeout in milliseconds between a character being typed and the search starting. Has no effect when {0} is disabled.",
        "`#search.searchOnType#`"
      )
    },
    "search.searchEditor.doubleClickBehaviour": {
      type: "string",
      enum: ["selectWord", "goToLocation", "openLocationToSide"],
      default: "goToLocation",
      enumDescriptions: [
        l(
          "search.searchEditor.doubleClickBehaviour.selectWord",
          "Double-clicking selects the word under the cursor."
        ),
        l(
          "search.searchEditor.doubleClickBehaviour.goToLocation",
          "Double-clicking opens the result in the active editor group."
        ),
        l(
          "search.searchEditor.doubleClickBehaviour.openLocationToSide",
          "Double-clicking opens the result in the editor group to the side, creating one if it does not yet exist."
        )
      ],
      markdownDescription: l(
        "search.searchEditor.doubleClickBehaviour",
        "Configure effect of double-clicking a result in a search editor."
      )
    },
    "search.searchEditor.reusePriorSearchConfiguration": {
      type: "boolean",
      default: !1,
      markdownDescription: l(
        { key: "search.searchEditor.reusePriorSearchConfiguration", comment: ['"Search Editor" is a type of editor that can display search results. "includes, excludes, and flags" refers to the "files to include" and "files to exclude" input boxes, and the flags that control whether a query is case-sensitive or a regex.'] },
        "When enabled, new Search Editors will reuse the includes, excludes, and flags of the previously opened Search Editor."
      )
    },
    "search.searchEditor.defaultNumberOfContextLines": {
      type: ["number", "null"],
      default: 1,
      markdownDescription: l(
        "search.searchEditor.defaultNumberOfContextLines",
        "The default number of surrounding context lines to use when creating new Search Editors. If using `#search.searchEditor.reusePriorSearchConfiguration#`, this can be set to `null` (empty) to use the prior Search Editor's configuration."
      )
    },
    "search.sortOrder": {
      type: "string",
      enum: ["default", "fileNames", "type", "modified", "countDescending", "countAscending"],
      default: "default",
      enumDescriptions: [
        l(
          "searchSortOrder.default",
          "Results are sorted by folder and file names, in alphabetical order."
        ),
        l(
          "searchSortOrder.filesOnly",
          "Results are sorted by file names ignoring folder order, in alphabetical order."
        ),
        l(
          "searchSortOrder.type",
          "Results are sorted by file extensions, in alphabetical order."
        ),
        l(
          "searchSortOrder.modified",
          "Results are sorted by file last modified date, in descending order."
        ),
        l(
          "searchSortOrder.countDescending",
          "Results are sorted by count per file, in descending order."
        ),
        l(
          "searchSortOrder.countAscending",
          "Results are sorted by count per file, in ascending order."
        )
      ],
      description: l("search.sortOrder", "Controls sorting order of search results.")
    },
    "search.decorations.colors": {
      type: "boolean",
      description: l(
        "search.decorations.colors",
        "Controls whether search file decorations should use colors."
      ),
      default: !0
    },
    "search.decorations.badges": {
      type: "boolean",
      description: l(
        "search.decorations.badges",
        "Controls whether search file decorations should use badges."
      ),
      default: !0
    },
    "search.defaultViewMode": {
      type: "string",
      enum: ["tree", "list"],
      default: "list",
      enumDescriptions: [
        l("scm.defaultViewMode.tree", "Shows search results as a tree."),
        l("scm.defaultViewMode.list", "Shows search results as a list.")
      ],
      description: l("search.defaultViewMode", "Controls the default search result view mode.")
    },
    "search.experimental.closedNotebookRichContentResults": {
      type: "boolean",
      description: l(
        "search.experimental.closedNotebookResults",
        "Show notebook editor rich content results for closed notebooks. Please refresh your search results after changing this setting."
      ),
      default: !1
    }
  }
});
yr.registerCommand("_executeWorkspaceSymbolProvider", async function(o, ...e) {
  const [t] = e;
  return Zo(typeof t == "string"), (await zs(t)).map((s) => s.symbol);
});
const Fl = /^(\s+)(\d+)(: |  )(\s*)(.*)$/, Pl = /^(\S.*):$/;
var qe;
let xt = (qe = class extends ea {
  get searchResultEditor() {
    return this.editorControl;
  }
  constructor(e, t, i, s, r, n, a, c, h, u, d, f, p, S, m, I, x, E) {
    super(qe.ID, e, a, i, p, t, m, S, x), this.modelService = s, this.contextService = r, this.labelService = n, this.contextViewService = c, this.commandService = h, this.openerService = u, this.notificationService = d, this.configurationService = I, this.logService = E, this.runSearchDelayer = new Oe(0), this.pauseSearching = !1, this.showingIncludesExcludes = !1, this.ongoingOperations = 0, this.updatingModelForSearch = !1, this.container = k(".search-editor"), this.searchOperation = this._register(new ta(f)), this._register(this.messageDisposables = new Ae()), this.searchHistoryDelayer = new Oe(2e3), this.searchModel = this._register(this.instantiationService.createInstance(ia));
  }
  createEditor(e) {
    v(e, this.container), this.queryEditorContainer = v(this.container, k(".query-container"));
    const t = v(this.container, k(".search-results"));
    super.createEditor(t), this.registerEditorListeners();
    const i = is(this.scopedContextKeyService);
    q.bindTo(i).set(!0), this.createQueryEditor(this.queryEditorContainer, this.instantiationService.createChild(new Rt([J, i])), je.bindTo(i));
  }
  createQueryEditor(e, t, i) {
    const s = sa({ inputBorder: Tl });
    this.queryEditorWidget = this._register(t.createInstance(jt, e, { _hideReplaceToggle: !0, showContextToggle: !0, inputBoxStyles: s, toggleStyles: kt })), this._register(this.queryEditorWidget.onReplaceToggled(() => this.reLayout())), this._register(this.queryEditorWidget.onDidHeightChange(() => this.reLayout())), this._register(this.queryEditorWidget.onSearchSubmit(({ delay: h }) => this.triggerSearch({ delay: h }))), this.queryEditorWidget.searchInput ? this._register(this.queryEditorWidget.searchInput.onDidOptionChange(() => this.triggerSearch({ resetCursor: !1 }))) : this.logService.warn("SearchEditor: SearchWidget.searchInput is undefined, cannot register onDidOptionChange listener"), this._register(this.queryEditorWidget.onDidToggleContext(() => this.triggerSearch({ resetCursor: !1 }))), this.includesExcludesContainer = v(e, k(".includes-excludes")), this.toggleQueryDetailsButton = v(this.includesExcludesContainer, k(".expand" + z.asCSSSelector(br), { tabindex: 0, role: "button", title: l("moreSearch", "Toggle Search Details") })), this._register(me(this.toggleQueryDetailsButton, ve.CLICK, (h) => {
      ke.stop(h), this.toggleIncludesExcludes();
    })), this._register(me(this.toggleQueryDetailsButton, ve.KEY_UP, (h) => {
      const u = new St(h);
      (u.equals(3) || u.equals(10)) && (ke.stop(h), this.toggleIncludesExcludes());
    })), this._register(me(this.toggleQueryDetailsButton, ve.KEY_DOWN, (h) => {
      var d;
      new St(h).equals(1026) && (this.queryEditorWidget.isReplaceActive() ? this.queryEditorWidget.focusReplaceAllAction() : this.queryEditorWidget.isReplaceShown() ? (d = this.queryEditorWidget.replaceInput) == null || d.focusOnPreserve() : this.queryEditorWidget.focusRegexAction(), ke.stop(h));
    }));
    const r = v(this.includesExcludesContainer, k(".file-types.includes")), n = l("searchScope.includes", "files to include");
    v(r, k("h4", void 0, n)), this.inputPatternIncludes = this._register(t.createInstance(qt, r, this.contextViewService, {
      ariaLabel: l("label.includes", "Search Include Patterns"),
      inputBoxStyles: s
    })), this.inputPatternIncludes.onSubmit((h) => this.triggerSearch({ resetCursor: !1, delay: h ? this.searchConfig.searchOnTypeDebouncePeriod : 0 })), this._register(this.inputPatternIncludes.onChangeSearchInEditorsBox(() => this.triggerSearch()));
    const a = v(this.includesExcludesContainer, k(".file-types.excludes")), c = l("searchScope.excludes", "files to exclude");
    v(a, k("h4", void 0, c)), this.inputPatternExcludes = this._register(t.createInstance(Kt, a, this.contextViewService, {
      ariaLabel: l("label.excludes", "Search Exclude Patterns"),
      inputBoxStyles: s
    })), this.inputPatternExcludes.onSubmit((h) => this.triggerSearch({ resetCursor: !1, delay: h ? this.searchConfig.searchOnTypeDebouncePeriod : 0 })), this._register(this.inputPatternExcludes.onChangeIgnoreBox(() => this.triggerSearch())), this.messageBox = v(e, k(".messages.text-search-provider-messages")), [this.queryEditorWidget.searchInputFocusTracker, this.queryEditorWidget.replaceInputFocusTracker, this.inputPatternExcludes.inputFocusTracker, this.inputPatternIncludes.inputFocusTracker].forEach((h) => {
      h && (this._register(h.onDidFocus(() => setTimeout(() => i.set(!0), 0))), this._register(h.onDidBlur(() => i.set(!1))));
    });
  }
  toggleRunAgainMessage(e) {
    if (gr(this.messageBox), this.messageDisposables.clear(), e) {
      const t = v(this.messageBox, k("a.pointer.prominent.message", {}, l("runSearch", "Run Search")));
      this.messageDisposables.add(me(t, ve.CLICK, async () => {
        await this.triggerSearch(), this.searchResultEditor.focus();
      }));
    }
  }
  _getContributions() {
    const e = [ra.ID];
    return na.getEditorContributions().filter((t) => e.indexOf(t.id) === -1);
  }
  getCodeEditorWidgetOptions() {
    return { contributions: this._getContributions() };
  }
  registerEditorListeners() {
    this.searchResultEditor.onMouseUp((e) => {
      var t;
      if (e.event.detail === 2) {
        const i = this.searchConfig.searchEditor.doubleClickBehaviour, s = e.target.position;
        if (s && i !== "selectWord") {
          const r = ((t = this.searchResultEditor.getModel()) == null ? void 0 : t.getLineContent(s.lineNumber)) ?? "";
          r.match(Fl) ? (this.searchResultEditor.setSelection(le.fromPositions(s)), this.commandService.executeCommand(i === "goToLocation" ? "editor.action.goToDeclaration" : "editor.action.openDeclarationToTheSide")) : r.match(Pl) && (this.searchResultEditor.setSelection(le.fromPositions(s)), this.commandService.executeCommand("editor.action.peekDefinition"));
        }
      }
    }), this._register(this.searchResultEditor.onDidChangeModelContent(() => {
      var e;
      this.updatingModelForSearch || (e = this.getInput()) == null || e.setDirty(!0);
    }));
  }
  getControl() {
    return this.searchResultEditor;
  }
  focus() {
    const e = this.loadEditorViewState(this.getInput());
    e && e.focused === "editor" ? this.searchResultEditor.focus() : this.queryEditorWidget.focus();
  }
  focusSearchInput() {
    var e;
    (e = this.queryEditorWidget.searchInput) == null || e.focus();
  }
  focusFilesToIncludeInput() {
    this.showingIncludesExcludes || this.toggleIncludesExcludes(!0), this.inputPatternIncludes.focus();
  }
  focusFilesToExcludeInput() {
    this.showingIncludesExcludes || this.toggleIncludesExcludes(!0), this.inputPatternExcludes.focus();
  }
  focusNextInput() {
    this.queryEditorWidget.searchInputHasFocus() ? this.showingIncludesExcludes ? this.inputPatternIncludes.focus() : this.searchResultEditor.focus() : this.inputPatternIncludes.inputHasFocus() ? this.inputPatternExcludes.focus() : this.inputPatternExcludes.inputHasFocus() ? this.searchResultEditor.focus() : this.searchResultEditor.hasWidgetFocus();
  }
  focusPrevInput() {
    var e;
    this.queryEditorWidget.searchInputHasFocus() ? this.searchResultEditor.focus() : this.inputPatternIncludes.inputHasFocus() ? (e = this.queryEditorWidget.searchInput) == null || e.focus() : this.inputPatternExcludes.inputHasFocus() ? this.inputPatternIncludes.focus() : this.searchResultEditor.hasWidgetFocus();
  }
  setQuery(e) {
    var t;
    (t = this.queryEditorWidget.searchInput) == null || t.setValue(e);
  }
  selectQuery() {
    var e;
    (e = this.queryEditorWidget.searchInput) == null || e.select();
  }
  toggleWholeWords() {
    var e;
    (e = this.queryEditorWidget.searchInput) == null || e.setWholeWords(!this.queryEditorWidget.searchInput.getWholeWords()), this.triggerSearch({ resetCursor: !1 });
  }
  toggleRegex() {
    var e;
    (e = this.queryEditorWidget.searchInput) == null || e.setRegex(!this.queryEditorWidget.searchInput.getRegex()), this.triggerSearch({ resetCursor: !1 });
  }
  toggleCaseSensitive() {
    var e;
    (e = this.queryEditorWidget.searchInput) == null || e.setCaseSensitive(!this.queryEditorWidget.searchInput.getCaseSensitive()), this.triggerSearch({ resetCursor: !1 });
  }
  toggleContextLines() {
    this.queryEditorWidget.toggleContextLines();
  }
  modifyContextLines(e) {
    this.queryEditorWidget.modifyContextLines(e);
  }
  toggleQueryDetails() {
    this.toggleIncludesExcludes();
  }
  deleteResultBlock() {
    const e = /* @__PURE__ */ new Set(), t = this.searchResultEditor.getSelections(), i = this.searchResultEditor.getModel();
    if (!(t && i))
      return;
    const s = i.getLineCount(), r = 1, n = (u) => {
      for (let d = u; d >= r; d--) {
        const f = i.getLineContent(d);
        if (e.add(d), f[0] !== void 0 && f[0] !== " ")
          break;
      }
    }, a = (u) => {
      e.add(u);
      for (let d = u + 1; d <= s; d++) {
        const f = i.getLineContent(d);
        if (f[0] !== void 0 && f[0] !== " ")
          return d;
        e.add(d);
      }
    }, c = [];
    for (const u of t) {
      const d = u.startLineNumber;
      c.push(a(d)), n(d);
      for (let f = u.startLineNumber; f <= u.endLineNumber; f++)
        e.add(f);
    }
    c.length === 0 && c.push(1);
    const h = (u) => u !== void 0;
    i.pushEditOperations(this.searchResultEditor.getSelections(), [...e].map((u) => ({ range: new le(u, 1, u + 1, 1), text: "" })), () => c.filter(h).map((u) => new ki(u, 1, u, 1)));
  }
  cleanState() {
    var e;
    (e = this.getInput()) == null || e.setDirty(!1);
  }
  get searchConfig() {
    return this.configurationService.getValue("search");
  }
  iterateThroughMatches(e) {
    var f, p;
    const t = this.searchResultEditor.getModel();
    if (!t)
      return;
    const i = t.getLineCount() ?? 1, s = t.getLineLength(i), r = e ? new gt(i, s) : new gt(1, 1), n = ((f = this.searchResultEditor.getSelection()) == null ? void 0 : f.getStartPosition()) ?? r, a = (p = this.getInput()) == null ? void 0 : p.getMatchRanges();
    if (!a)
      return;
    const c = (e ? Ml : Al)(a, n);
    this.searchResultEditor.setSelection(c), this.searchResultEditor.revealLineInCenterIfOutsideViewport(c.startLineNumber), this.searchResultEditor.focus();
    const h = t.getLineContent(c.startLineNumber), u = t.getValueInRange(c);
    let d = "";
    for (let S = c.startLineNumber; S >= 1; S--)
      if (t.getValueInRange(new le(S, 1, S, 2)) !== " ") {
        d = t.getLineContent(S);
        break;
      }
    oa(l(
      "searchResultItem",
      "Matched {0} at {1} in file {2}",
      u,
      h,
      d.slice(0, d.length - 1)
    ));
  }
  focusNextResult() {
    this.iterateThroughMatches(!1);
  }
  focusPreviousResult() {
    this.iterateThroughMatches(!0);
  }
  focusAllResults() {
    var e;
    this.searchResultEditor.setSelections((((e = this.getInput()) == null ? void 0 : e.getMatchRanges()) ?? []).map((t) => new ki(
      t.startLineNumber,
      t.startColumn,
      t.endLineNumber,
      t.endColumn
    ))), this.searchResultEditor.focus();
  }
  async triggerSearch(e) {
    const t = { resetCursor: !0, delay: 0, ...e };
    this.pauseSearching || await this.runSearchDelayer.trigger(async () => {
      this.toggleRunAgainMessage(!1), await this.doRunSearch(), t.resetCursor && (this.searchResultEditor.setPosition(new gt(1, 1)), this.searchResultEditor.setScrollPosition({ scrollTop: 0, scrollLeft: 0 })), t.focusResults && this.searchResultEditor.focus();
    }, t.delay);
  }
  readConfigFromWidget() {
    var e, t, i, s;
    return {
      isCaseSensitive: ((e = this.queryEditorWidget.searchInput) == null ? void 0 : e.getCaseSensitive()) ?? !1,
      contextLines: this.queryEditorWidget.getContextLines(),
      filesToExclude: this.inputPatternExcludes.getValue(),
      filesToInclude: this.inputPatternIncludes.getValue(),
      query: ((t = this.queryEditorWidget.searchInput) == null ? void 0 : t.getValue()) ?? "",
      isRegexp: ((i = this.queryEditorWidget.searchInput) == null ? void 0 : i.getRegex()) ?? !1,
      matchWholeWord: ((s = this.queryEditorWidget.searchInput) == null ? void 0 : s.getWholeWords()) ?? !1,
      useExcludeSettingsAndIgnoreFiles: this.inputPatternExcludes.useExcludesAndIgnoreFiles(),
      onlyOpenEditors: this.inputPatternIncludes.onlySearchInOpenEditors(),
      showIncludesExcludes: this.showingIncludesExcludes,
      notebookSearchConfig: {
        includeMarkupInput: this.queryEditorWidget.getNotebookFilters().markupInput,
        includeMarkupPreview: this.queryEditorWidget.getNotebookFilters().markupPreview,
        includeCodeInput: this.queryEditorWidget.getNotebookFilters().codeInput,
        includeOutput: this.queryEditorWidget.getNotebookFilters().codeOutput
      }
    };
  }
  async doRunSearch() {
    this.searchModel.cancelSearch(!0);
    const e = this.getInput();
    if (!e)
      return;
    this.searchHistoryDelayer.trigger(() => {
      var h;
      (h = this.queryEditorWidget.searchInput) == null || h.onSearchSubmit(), this.inputPatternExcludes.onSearchSubmit(), this.inputPatternIncludes.onSearchSubmit();
    });
    const t = this.readConfigFromWidget();
    if (!t.query)
      return;
    const i = {
      pattern: t.query,
      isRegExp: t.isRegexp,
      isCaseSensitive: t.isCaseSensitive,
      isWordMatch: t.matchWholeWord
    }, s = {
      _reason: "searchEditor",
      extraFileResources: this.instantiationService.invokeFunction(ji),
      maxResults: rt(this.searchConfig.maxResults),
      disregardIgnoreFiles: !t.useExcludeSettingsAndIgnoreFiles || void 0,
      disregardExcludeSettings: !t.useExcludeSettingsAndIgnoreFiles || void 0,
      excludePattern: t.filesToExclude,
      includePattern: t.filesToInclude,
      onlyOpenEditors: t.onlyOpenEditors,
      previewOptions: {
        matchLines: 1,
        charsPerLine: 1e3
      },
      afterContext: t.contextLines,
      beforeContext: t.contextLines,
      isSmartCase: this.searchConfig.smartCase,
      expandPatterns: !0,
      notebookSearchConfig: {
        includeMarkupInput: t.notebookSearchConfig.includeMarkupInput,
        includeMarkupPreview: t.notebookSearchConfig.includeMarkupPreview,
        includeCodeInput: t.notebookSearchConfig.includeCodeInput,
        includeOutput: t.notebookSearchConfig.includeOutput
      }
    }, r = this.contextService.getWorkspace().folders;
    let n;
    try {
      n = this.instantiationService.createInstance(Gi).text(i, r.map((u) => u.uri), s);
    } catch {
      return;
    }
    this.searchOperation.start(500), this.ongoingOperations++;
    const { configurationModel: a } = await e.resolveModels();
    a.updateConfig(t), e.ongoingSearchOperation = this.searchModel.search(n).finally(() => {
      this.ongoingOperations--, this.ongoingOperations === 0 && this.searchOperation.stop();
    });
    const c = await e.ongoingSearchOperation;
    await this.onSearchComplete(c, t, e);
  }
  async onSearchComplete(e, t, i) {
    const s = this.getInput();
    if (!s || s !== i || JSON.stringify(t) !== JSON.stringify(this.readConfigFromWidget()))
      return;
    s.ongoingSearchOperation = void 0;
    const r = this.searchConfig.sortOrder;
    r === "modified" && await this.retrieveFileStats(this.searchModel.searchResult);
    const n = aa.get(this.searchResultEditor);
    n == null || n.closeWidget(!1);
    const a = (u) => this.labelService.getUriLabel(u, { relative: !0 }), c = Hr(this.searchModel.searchResult, t.filesToInclude, t.filesToExclude, t.contextLines, a, r, e == null ? void 0 : e.limitHit), { resultsModel: h } = await s.resolveModels();
    if (this.updatingModelForSearch = !0, this.modelService.updateModel(h, c.text), this.updatingModelForSearch = !1, e && e.messages)
      for (const u of e.messages)
        this.addMessage(u);
    this.reLayout(), s.setDirty(!s.hasCapability(4)), s.setMatchRanges(c.matchRanges);
  }
  addMessage(e) {
    let t;
    this.messageBox.firstChild ? t = this.messageBox.firstChild : t = v(this.messageBox, k(".message")), v(t, Er(e, this.instantiationService, this.notificationService, this.openerService, this.commandService, this.messageDisposables, () => this.triggerSearch()));
  }
  async retrieveFileStats(e) {
    const t = e.matches().filter((i) => !i.fileStat).map((i) => i.resolveFileStat(this.fileService));
    await Promise.all(t);
  }
  layout(e) {
    this.dimension = e, this.reLayout();
  }
  getSelected() {
    var t;
    const e = this.searchResultEditor.getSelection();
    return e ? ((t = this.searchResultEditor.getModel()) == null ? void 0 : t.getValueInRange(e)) ?? "" : "";
  }
  reLayout() {
    this.dimension && (this.queryEditorWidget.setWidth(this.dimension.width - 28), this.searchResultEditor.layout({ height: this.dimension.height - Ci(this.queryEditorContainer), width: this.dimension.width }), this.inputPatternExcludes.setWidth(this.dimension.width - 28), this.inputPatternIncludes.setWidth(this.dimension.width - 28));
  }
  getInput() {
    return this._input;
  }
  setSearchConfig(e) {
    var t, i, s;
    this.priorConfig = e, e.query !== void 0 && this.queryEditorWidget.setValue(e.query), e.isCaseSensitive !== void 0 && ((t = this.queryEditorWidget.searchInput) == null || t.setCaseSensitive(e.isCaseSensitive)), e.isRegexp !== void 0 && ((i = this.queryEditorWidget.searchInput) == null || i.setRegex(e.isRegexp)), e.matchWholeWord !== void 0 && ((s = this.queryEditorWidget.searchInput) == null || s.setWholeWords(e.matchWholeWord)), e.contextLines !== void 0 && this.queryEditorWidget.setContextLines(e.contextLines), e.filesToExclude !== void 0 && this.inputPatternExcludes.setValue(e.filesToExclude), e.filesToInclude !== void 0 && this.inputPatternIncludes.setValue(e.filesToInclude), e.onlyOpenEditors !== void 0 && this.inputPatternIncludes.setOnlySearchInOpenEditors(e.onlyOpenEditors), e.useExcludeSettingsAndIgnoreFiles !== void 0 && this.inputPatternExcludes.setUseExcludesAndIgnoreFiles(e.useExcludeSettingsAndIgnoreFiles), e.showIncludesExcludes !== void 0 && this.toggleIncludesExcludes(e.showIncludesExcludes);
  }
  async setInput(e, t, i, s) {
    if (await super.setInput(e, t, i, s), s.isCancellationRequested)
      return;
    const { configurationModel: r, resultsModel: n } = await e.resolveModels();
    if (!s.isCancellationRequested && (this.searchResultEditor.setModel(n), this.pauseSearching = !0, this.toggleRunAgainMessage(!e.ongoingSearchOperation && n.getLineCount() === 1 && n.getValue() === "" && r.config.query !== ""), this.setSearchConfig(r.config), this._register(r.onConfigDidUpdate((a) => {
      a !== this.priorConfig && (this.pauseSearching = !0, this.setSearchConfig(a), this.pauseSearching = !1);
    })), this.restoreViewState(i), t != null && t.preserveFocus || this.focus(), this.pauseSearching = !1, e.ongoingSearchOperation)) {
      const a = this.readConfigFromWidget();
      e.ongoingSearchOperation.then((c) => {
        this.onSearchComplete(c, a, e);
      });
    }
  }
  toggleIncludesExcludes(e) {
    const t = "expanded";
    e ?? !this.includesExcludesContainer.classList.contains(t) ? (this.toggleQueryDetailsButton.setAttribute("aria-expanded", "true"), this.includesExcludesContainer.classList.add(t)) : (this.toggleQueryDetailsButton.setAttribute("aria-expanded", "false"), this.includesExcludesContainer.classList.remove(t)), this.showingIncludesExcludes = this.includesExcludesContainer.classList.contains(t), this.reLayout();
  }
  toEditorViewStateResource(e) {
    if (e.typeId === Oi)
      return e.modelUri;
  }
  computeEditorViewState(e) {
    var s;
    const i = this.getControl().saveViewState();
    if (i && e.toString() === ((s = this.getInput()) == null ? void 0 : s.modelUri.toString()))
      return { ...i, focused: this.searchResultEditor.hasWidgetFocus() ? "editor" : "input" };
  }
  tracksEditorViewState(e) {
    return e.typeId === Oi;
  }
  restoreViewState(e) {
    const t = this.loadEditorViewState(this.getInput(), e);
    t && this.searchResultEditor.restoreViewState(t);
  }
  getAriaLabel() {
    var e;
    return ((e = this.getInput()) == null ? void 0 : e.getName()) ?? l("searchEditor", "Search");
  }
}, qe.ID = Li, qe.SEARCH_EDITOR_VIEW_STATE_PREFERENCE_KEY = "searchEditorViewState", qe);
xt = B([
  g(0, st),
  g(1, ni),
  g(2, nt),
  g(3, Pe),
  g(4, ue),
  g(5, he),
  g(6, N),
  g(7, ts),
  g(8, Ft),
  g(9, zi),
  g(10, ri),
  g(11, ca),
  g(12, la),
  g(13, lr),
  g(14, M),
  g(15, V),
  g(16, Et),
  g(17, Hi)
], xt);
const Tl = ha("searchEditor.textInputBorder", { dark: At, light: At, hcDark: At, hcLight: At }, l("textInputBoxBorder", "Search editor text input box border."));
function Al(o, e) {
  for (const t of o)
    if (gt.isBefore(e, t.getStartPosition()))
      return t;
  return o[0];
}
function Ml(o, e) {
  for (let t = o.length - 1; t >= 0; t--) {
    const i = o[t];
    if (gt.isBefore(i.getStartPosition(), e))
      return i;
  }
  return o[o.length - 1];
}
const _l = "search.action.openInEditor", Wl = "search.action.openNewEditorToSide", Ll = "search.action.focusQueryEditorWidget", Ol = "search.action.focusFilesToInclude", Dl = "search.action.focusFilesToExclude", Nl = "toggleSearchEditorCaseSensitive", Bl = "toggleSearchEditorWholeWord", Vl = "toggleSearchEditorRegex", Hl = "increaseSearchEditorContextLines", ql = "decreaseSearchEditorContextLines", Kl = "rerunSearchEditorSearch", Ql = "cleanSearchEditorState", Ul = "selectAllSearchEditorMatches";
Me.as(ua.EditorPane).registerEditorPane(da.create(xt, xt.ID, l("searchEditor", "Search Editor")), [
  new De(D)
]);
let Bi = class {
  constructor(e, t) {
    e.registerEditor("*" + pt, {
      id: D.ID,
      label: l("promptOpenWith.searchEditor.displayName", "Search Editor"),
      detail: fa.providerDisplayName,
      priority: Sa.default
    }, {
      singlePerResource: !0,
      canSupportResource: (i) => cr(i) === pt
    }, {
      createEditorInput: ({ resource: i }) => ({ editor: t.invokeFunction(Qe, { from: "existingFile", fileUri: i }) })
    });
  }
};
Bi = B([
  g(0, ga),
  g(1, N)
], Bi);
const Zr = Me.as(Yi.Workbench);
Zr.registerWorkbenchContribution(Bi, 1);
yr.registerCommand(Ql, (o) => {
  const e = o.get(M).activeEditorPane;
  e instanceof xt && e.cleanState();
});
const $ = { value: l("search", "Search Editor"), original: "Search Editor" }, gs = (o = {}) => {
  const e = {}, t = {
    includes: "filesToInclude",
    excludes: "filesToExclude",
    wholeWord: "matchWholeWord",
    caseSensitive: "isCaseSensitive",
    regexp: "isRegexp",
    useIgnores: "useExcludeSettingsAndIgnoreFiles"
  };
  return Object.entries(o).forEach(([i, s]) => {
    e[t[i] ?? i] = s;
  }), e;
}, ps = {
  description: "Open a new search editor. Arguments passed can include variables like ${relativeFileDirname}.",
  args: [{
    name: "Open new Search Editor args",
    schema: {
      properties: {
        query: { type: "string" },
        filesToInclude: { type: "string" },
        filesToExclude: { type: "string" },
        contextLines: { type: "number" },
        matchWholeWord: { type: "boolean" },
        isCaseSensitive: { type: "boolean" },
        isRegexp: { type: "boolean" },
        useExcludeSettingsAndIgnoreFiles: { type: "boolean" },
        showIncludesExcludes: { type: "boolean" },
        triggerSearch: { type: "boolean" },
        focusResults: { type: "boolean" },
        onlyOpenEditors: { type: "boolean" }
      }
    }
  }]
};
w(class extends b {
  constructor() {
    super({
      id: "search.searchEditor.action.deleteFileResults",
      title: { value: l("searchEditor.deleteResultBlock", "Delete File Results"), original: "Delete File Results" },
      keybinding: {
        weight: 100,
        primary: 3073
      },
      precondition: q,
      category: $,
      f1: !0
    });
  }
  async run(o) {
    o.get(J).getContext(document.activeElement).getValue(q.serialize()) && o.get(M).activeEditorPane.deleteResultBlock();
  }
});
w(class extends b {
  constructor() {
    super({
      id: Fc,
      title: { value: l("search.openNewSearchEditor", "New Search Editor"), original: "New Search Editor" },
      category: $,
      f1: !0,
      description: ps
    });
  }
  async run(o, e) {
    await o.get(N).invokeFunction(bt, gs({ location: "new", ...e }));
  }
});
w(class extends b {
  constructor() {
    super({
      id: wt,
      title: { value: l("search.openSearchEditor", "Open Search Editor"), original: "Open Search Editor" },
      category: $,
      f1: !0,
      description: ps
    });
  }
  async run(o, e) {
    await o.get(N).invokeFunction(bt, gs({ location: "reuse", ...e }));
  }
});
w(class extends b {
  constructor() {
    super({
      id: Wl,
      title: { value: l("search.openNewEditorToSide", "Open New Search Editor to the Side"), original: "Open new Search Editor to the Side" },
      category: $,
      f1: !0,
      description: ps
    });
  }
  async run(o, e) {
    await o.get(N).invokeFunction(bt, gs(e), !0);
  }
});
w(class extends b {
  constructor() {
    super({
      id: _l,
      title: { value: l("search.openResultsInEditor", "Open Results in Editor"), original: "Open Results in Editor" },
      category: $,
      f1: !0,
      keybinding: {
        primary: 515,
        when: y.and(te, we),
        weight: 200,
        mac: {
          primary: 2051
        }
      }
    });
  }
  async run(o) {
    const e = o.get(R), t = o.get(N), i = T(e);
    i && await t.invokeFunction(Ur, i.searchResult, i.searchIncludePattern.getValue(), i.searchExcludePattern.getValue(), i.searchIncludePattern.onlySearchInOpenEditors());
  }
});
w(class extends b {
  constructor() {
    super({
      id: Kl,
      title: { value: l("search.rerunSearchInEditor", "Search Again"), original: "Search Again" },
      category: $,
      keybinding: {
        primary: 3120,
        when: q,
        weight: 100
      },
      icon: xr,
      menu: [
        {
          id: P.EditorTitle,
          group: "navigation",
          when: As.isEqualTo(Li)
        },
        {
          id: P.CommandPalette,
          when: As.isEqualTo(Li)
        }
      ]
    });
  }
  async run(o) {
    const e = o.get(M);
    e.activeEditor instanceof D && e.activeEditorPane.triggerSearch({ resetCursor: !1 });
  }
});
w(class extends b {
  constructor() {
    super({
      id: Ll,
      title: { value: l("search.action.focusQueryEditorWidget", "Focus Search Editor Input"), original: "Focus Search Editor Input" },
      category: $,
      f1: !0,
      precondition: q,
      keybinding: {
        primary: 9,
        weight: 100
      }
    });
  }
  async run(o) {
    const e = o.get(M);
    e.activeEditor instanceof D && e.activeEditorPane.focusSearchInput();
  }
});
w(class extends b {
  constructor() {
    super({
      id: Ol,
      title: { value: l(
        "search.action.focusFilesToInclude",
        "Focus Search Editor Files to Include"
      ), original: "Focus Search Editor Files to Include" },
      category: $,
      f1: !0,
      precondition: q
    });
  }
  async run(o) {
    const e = o.get(M);
    e.activeEditor instanceof D && e.activeEditorPane.focusFilesToIncludeInput();
  }
});
w(class extends b {
  constructor() {
    super({
      id: Dl,
      title: { value: l(
        "search.action.focusFilesToExclude",
        "Focus Search Editor Files to Exclude"
      ), original: "Focus Search Editor Files to Exclude" },
      category: $,
      f1: !0,
      precondition: q
    });
  }
  async run(o) {
    const e = o.get(M);
    e.activeEditor instanceof D && e.activeEditorPane.focusFilesToExcludeInput();
  }
});
w(class extends b {
  constructor() {
    super({
      id: Nl,
      title: { value: l("searchEditor.action.toggleSearchEditorCaseSensitive", "Toggle Match Case"), original: "Toggle Match Case" },
      category: $,
      f1: !0,
      precondition: q,
      keybinding: Object.assign({
        weight: 200,
        when: Pt
      }, fr)
    });
  }
  run(o) {
    Xc(o);
  }
});
w(class extends b {
  constructor() {
    super({
      id: Bl,
      title: { value: l(
        "searchEditor.action.toggleSearchEditorWholeWord",
        "Toggle Match Whole Word"
      ), original: "Toggle Match Whole Word" },
      category: $,
      f1: !0,
      precondition: q,
      keybinding: Object.assign({
        weight: 200,
        when: Pt
      }, Sr)
    });
  }
  run(o) {
    Yc(o);
  }
});
w(class extends b {
  constructor() {
    super({
      id: Vl,
      title: { value: l(
        "searchEditor.action.toggleSearchEditorRegex",
        "Toggle Use Regular Expression"
      ), original: 'Toggle Use Regular Expression"' },
      category: $,
      f1: !0,
      precondition: q,
      keybinding: Object.assign({
        weight: 200,
        when: Pt
      }, mr)
    });
  }
  run(o) {
    Jc(o);
  }
});
w(class extends b {
  constructor() {
    super({
      id: Or,
      title: { value: l(
        "searchEditor.action.toggleSearchEditorContextLines",
        "Toggle Context Lines"
      ), original: 'Toggle Context Lines"' },
      category: $,
      f1: !0,
      precondition: q,
      keybinding: {
        weight: 200,
        primary: 554,
        mac: { primary: 2602 }
      }
    });
  }
  run(o) {
    Zc(o);
  }
});
w(class extends b {
  constructor() {
    super({
      id: Hl,
      title: { original: "Increase Context Lines", value: l(
        "searchEditor.action.increaseSearchEditorContextLines",
        "Increase Context Lines"
      ) },
      category: $,
      f1: !0,
      precondition: q,
      keybinding: {
        weight: 200,
        primary: 598
      }
    });
  }
  run(o) {
    Qr(o, !0);
  }
});
w(class extends b {
  constructor() {
    super({
      id: ql,
      title: { original: "Decrease Context Lines", value: l(
        "searchEditor.action.decreaseSearchEditorContextLines",
        "Decrease Context Lines"
      ) },
      category: $,
      f1: !0,
      precondition: q,
      keybinding: {
        weight: 200,
        primary: 600
      }
    });
  }
  run(o) {
    Qr(o, !1);
  }
});
w(class extends b {
  constructor() {
    super({
      id: Ul,
      title: { original: "Select All Matches", value: l("searchEditor.action.selectAllSearchEditorMatches", "Select All Matches") },
      category: $,
      f1: !0,
      precondition: q,
      keybinding: {
        weight: 200,
        primary: 3114
      }
    });
  }
  run(o) {
    el(o);
  }
});
w(class extends b {
  constructor() {
    super({
      id: "search.action.openNewEditorFromView",
      title: l("search.openNewEditor", "Open New Search Editor"),
      category: $,
      icon: Na,
      menu: [{
        id: P.ViewTitle,
        group: "navigation",
        order: 2,
        when: y.equals("view", oe)
      }]
    });
  }
  run(e, ...t) {
    return tl(e);
  }
});
let Vi = class extends se {
  constructor(e, t) {
    super(), this.instantiationService = e, this._register(t.registerHandler(this));
  }
  handles(e) {
    return e.resource.scheme === cs;
  }
  isOpen(e, t) {
    return this.handles(e) ? t instanceof D && Dt(e.resource, t.modelUri) : !1;
  }
  createEditor(e) {
    const t = this.instantiationService.invokeFunction(Qe, { from: "model", modelUri: e.resource });
    return t.setDirty(!0), t;
  }
};
Vi = B([
  g(0, N),
  g(1, pa)
], Vi);
Zr.registerWorkbenchContribution(Vi, 2);
function qh() {
  return {
    [Ys.toString()]: new De(Fi, [], !0),
    [Ki.toString()]: new De(ma, [], !0),
    [rs.toString()]: new De(dr, [], !0),
    [Zt.toString()]: new De(Ti, [], !0)
  };
}
export {
  qh as default
};
