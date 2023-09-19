import { bG as et, cK as X, jT as It, p1 as tt, hC as _, dB as ie, hh as Te, mg as At, E as q, dQ as it, zY as Pe, mh as Rt, zZ as vt, n as rt, B as n, aP as Ne, au as Ve, bi as O, _ as x, a as d, ab as st, ix as Oe, b3 as xt, du as Lt, D, z_ as Ft, t3 as Ct, bn as yt, bm as He, tK as Tt, dm as qe, z$ as Pt, oQ as Nt, A0 as Ge, bD as Z, g as Vt, e as K, cx as De, c3 as Ke, I as Ot, cP as nt, hJ as Dt, ag as We, zg as Kt, w as re, H as u, $ as p, tN as Wt, tO as Bt, S as Ut, cJ as Ht, b8 as we, b6 as ot, eW as at, zb as lt, a0 as Ee, a2 as se, ax as ct, t as B, hH as L, je as ht, oW as $e, A1 as qt, lc as Gt, A2 as $t, vn as zt, A3 as Qt, A4 as jt, dv as dt, at as Yt, kI as Xt, d as ze, pM as Jt, ey as ut, tD as Zt, L as T, p2 as Qe, af as ei, aL as mt, aI as ti, l_ as Be, bC as ii, h as ri, ad as si, aa as ni, ae as gt, dA as oi, tQ as ai, iS as li, vl as ci, tV as hi, b4 as di, dj as ui, m3 as mi, zs as je, zt as be, cU as gi, dg as pi, wm as fi, dq as ki, dr as bi, c$ as Ye, aG as P, aR as wi, vJ as Ei, vO as te, bx as ge, aE as A, fS as Q, N as pe, hY as _i, ar as pt, k as ft, aA as Si, hM as Mi, ai as I, sW as R, A5 as ee, aj as kt, ak as Ii, yp as bt, cO as Ue, yq as wt, ji as Ai, aJ as Ri, o as vi, c4 as xi } from "./index-7e82f14c.js";
import { a as b, M as a } from "./markers-c7ab8d5a.js";
function Et(l, e) {
  return ie.compare(l.resource, e.resource);
}
function Li(l, e) {
  const [t] = l.markers, [i] = e.markers;
  let r = 0;
  return t && i && (r = _.compare(t.marker.severity, i.marker.severity)), r === 0 && (r = l.path.localeCompare(e.path) || l.name.localeCompare(e.name)), r;
}
class y {
  constructor(e, t) {
    this.id = e, this.resource = t, this._markersMap = new et(), this._total = 0, this.path = this.resource.fsPath, this.name = X(this.resource);
  }
  get markers() {
    return this._cachedMarkers || (this._cachedMarkers = It([...this._markersMap.values()]).sort(y._compareMarkers)), this._cachedMarkers;
  }
  has(e) {
    return this._markersMap.has(e);
  }
  set(e, t) {
    this.delete(e), tt(t) && (this._markersMap.set(e, t), this._total += t.length, this._cachedMarkers = void 0);
  }
  delete(e) {
    const t = this._markersMap.get(e);
    t && (this._total -= t.length, this._cachedMarkers = void 0, this._markersMap.delete(e));
  }
  get total() {
    return this._total;
  }
  static _compareMarkers(e, t) {
    return _.compare(e.marker.severity, t.marker.severity) || ie.compare(e.resource, t.resource) || Te.compareRangesUsingStarts(e.marker, t.marker);
  }
}
class w {
  get resource() {
    return this.marker.resource;
  }
  get range() {
    return this.marker;
  }
  get lines() {
    return this._lines || (this._lines = At(this.marker.message)), this._lines;
  }
  constructor(e, t, i = []) {
    this.id = e, this.marker = t, this.relatedInformation = i;
  }
  toString() {
    return JSON.stringify({
      ...this.marker,
      resource: this.marker.resource.path,
      relatedInformation: this.relatedInformation.length ? this.relatedInformation.map((e) => ({ ...e.raw, resource: e.raw.resource.path })) : void 0
    }, null, "	");
  }
}
class V extends w {
  constructor(e, t, i, r, s, o) {
    super(e.id, e.marker, e.relatedInformation), this.sourceMatches = t, this.codeMatches = i, this.messageMatches = r, this.fileMatches = s, this.ownerMatches = o;
  }
}
class H {
  constructor(e, t, i) {
    this.id = e, this.marker = t, this.raw = i;
  }
}
class Fi {
  get resourceMarkers() {
    return this.cachedSortedResources || (this.cachedSortedResources = [...this.resourcesByUri.values()].sort(Li)), this.cachedSortedResources;
  }
  constructor() {
    this.cachedSortedResources = void 0, this._onDidChange = new q(), this.onDidChange = this._onDidChange.event, this._total = 0, this.resourcesByUri = /* @__PURE__ */ new Map();
  }
  reset() {
    const e = /* @__PURE__ */ new Set();
    for (const t of this.resourcesByUri.values())
      e.add(t);
    this.resourcesByUri.clear(), this._total = 0, this._onDidChange.fire({ removed: e, added: /* @__PURE__ */ new Set(), updated: /* @__PURE__ */ new Set() });
  }
  get total() {
    return this._total;
  }
  getResourceMarkers(e) {
    return it(this.resourcesByUri.get(ie.getComparisonKey(e, !0)));
  }
  setResourceMarkers(e) {
    const t = { added: /* @__PURE__ */ new Set(), removed: /* @__PURE__ */ new Set(), updated: /* @__PURE__ */ new Set() };
    for (const [i, r] of e) {
      if (Pe.has(i.scheme))
        continue;
      const s = ie.getComparisonKey(i, !0);
      let o = this.resourcesByUri.get(s);
      if (tt(r)) {
        if (o)
          t.updated.add(o);
        else {
          const g = this.id(i.toString());
          o = new y(g, i.with({ fragment: null })), this.resourcesByUri.set(s, o), t.added.add(o);
        }
        const c = /* @__PURE__ */ new Map(), m = r.map((g) => {
          const E = Rt.makeKey(g), M = c.get(E) || 0;
          c.set(E, M + 1);
          const S = this.id(o.id, E, M, g.resource.toString());
          let k;
          return g.relatedInformation && (k = g.relatedInformation.map((F, fe) => new H(this.id(S, F.resource.toString(), F.startLineNumber, F.startColumn, F.endLineNumber, F.endColumn, fe), g, F))), new w(S, g, k);
        });
        this._total -= o.total, o.set(i, m), this._total += o.total;
      } else
        o && (this._total -= o.total, o.delete(i), this._total += o.total, o.total === 0 ? (this.resourcesByUri.delete(s), t.removed.add(o)) : t.updated.add(o));
    }
    this.cachedSortedResources = void 0, (t.added.size || t.removed.size || t.updated.size) && this._onDidChange.fire(t);
  }
  id(...e) {
    const t = new vt();
    for (const i of e)
      t.hash(i);
    return `${t.value}`;
  }
  dispose() {
    this._onDidChange.dispose(), this.resourcesByUri.clear();
  }
}
var Ci = '.markers-panel .markers-panel-container{height:100%}.markers-panel .hide{display:none}.markers-panel .markers-panel-container .message-box-container{line-height:22px;padding-left:20px}.markers-panel .markers-panel-container .message-box-container .messageAction{cursor:pointer;margin-left:4px;text-decoration:underline}.markers-panel .markers-panel-container .hidden{display:none}.markers-panel .markers-panel-container .codicon.codicon-light-bulb{color:var(--vscode-editorLightBulb-foreground)}.markers-panel .markers-panel-container .codicon.codicon-lightbulb-autofix{color:var(--vscode-editorLightBulbAutoFix-foreground)}.markers-panel .markers-panel-container .tree-container.hidden{display:none;visibility:hidden}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents{display:flex;line-height:22px;padding-right:10px}.monaco-workbench.hc-black .markers-panel .markers-panel-container .tree-container .monaco-tl-contents,.monaco-workbench.hc-light .markers-panel .markers-panel-container .tree-container .monaco-tl-contents{line-height:20px}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-stats{display:inline-block;margin-left:10px}.markers-panel:not(.wide) .markers-panel-container .tree-container .monaco-tl-contents .resource-label-container{flex:1}.markers-panel.wide .markers-panel-container .tree-container .monaco-tl-contents .count-badge-wrapper{margin-left:10px}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-message-details-container{flex:1;overflow:hidden}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-message-details-container>.marker-message-line{overflow:hidden}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-message-details-container>.marker-message-line>.marker-message{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-message-details-container>.marker-message-line.details-container{display:flex}.markers-panel .markers-panel-container .tree-container .monaco-list:focus .monaco-list-row.focused .monaco-tl-contents .details-container a.monaco-link{color:inherit}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .details-container a.monaco-link .monaco-highlighted-label{text-decoration:underline;text-underline-position:under}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-code:before{content:"("}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-code:after{content:")"}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .details-container .marker-line,.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .details-container .marker-source,.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .details-container .multiline-actions{margin-left:6px}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-code,.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-line,.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-source,.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .related-info-resource,.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .related-info-resource-separator{opacity:.7}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .highlight{font-weight:700}.markers-panel .monaco-tl-contents .marker-icon{align-items:center;display:flex;height:22px;justify-content:center;margin:0 6px}.markers-panel .monaco-list-row.focused .monaco-tl-contents>.marker-icon.quickFix,.markers-panel .monaco-list-row.selected .monaco-tl-contents>.marker-icon.quickFix,.markers-panel .monaco-list-row:hover .monaco-tl-contents>.marker-icon.quickFix,.markers-panel .monaco-tl-contents .actions .monaco-action-bar{display:none}.markers-panel .monaco-list-row.focused .monaco-tl-contents .actions .monaco-action-bar,.markers-panel .monaco-list-row.selected .monaco-tl-contents .actions .monaco-action-bar,.markers-panel .monaco-list-row:hover .monaco-tl-contents .actions .monaco-action-bar{display:block}.markers-panel .monaco-tl-contents .actions,.markers-panel .monaco-tl-contents .multiline-actions .monaco-action-bar{height:22px}.markers-panel .monaco-tl-contents .actions .action-label,.markers-panel .monaco-tl-contents .multiline-actions .monaco-action-bar .action-label{padding:2px}.markers-panel .monaco-tl-contents .actions .action-item{margin:0 4px}.markers-panel .monaco-tl-contents .actions .action-item.disabled,.markers-panel .monaco-tl-contents .multiline-actions .action-item.disabled{display:none}.markers-panel .markers-table-container .monaco-table .monaco-table-th{align-items:center;display:flex;font-weight:600;padding-left:10px}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td{align-items:center;display:flex;padding-left:10px}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td .highlight{font-weight:700}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code,.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.file,.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.message,.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.owner{overflow:hidden;text-overflow:ellipsis}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.severity{display:flex}.markers-panel .markers-table-container .monaco-table .monaco-list-row.focused .monaco-table-tr>.monaco-table-td.quickFix>.severity,.markers-panel .markers-table-container .monaco-table .monaco-list-row.selected .monaco-table-tr>.monaco-table-td.quickFix>.severity,.markers-panel .markers-table-container .monaco-table .monaco-list-row:hover .monaco-table-tr>.monaco-table-td.quickFix>.severity{display:none}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.actions{margin-left:-3px}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.actions>.monaco-action-bar .action-item{display:none}.markers-panel .markers-table-container .monaco-table .monaco-list-row.focused .monaco-table-tr>.monaco-table-td.quickFix>.actions>.monaco-action-bar .action-item,.markers-panel .markers-table-container .monaco-table .monaco-list-row.selected .monaco-table-tr>.monaco-table-td.quickFix>.actions>.monaco-action-bar .action-item,.markers-panel .markers-table-container .monaco-table .monaco-list-row:hover .monaco-table-tr>.monaco-table-td.quickFix>.actions>.monaco-action-bar .action-item{display:flex}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code>.code-label:before,.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code>.monaco-link:before{content:"("}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code>.code-label:after,.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code>.monaco-link:after{content:")"}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code>.code-label,.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code>.monaco-link{display:none}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code.code-label>.code-label{display:inline}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code.code-link>.monaco-link{display:inline;text-decoration:underline}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.file>.file-position{margin-left:6px;opacity:.7}';
rt(Ci, {});
const h = class h {
};
h.MARKERS_PANEL_TOGGLE_LABEL = n("problems.view.toggle.label", "Toggle Problems (Errors, Warnings, Infos)"), h.MARKERS_PANEL_SHOW_LABEL = n("problems.view.focus.label", "Focus Problems (Errors, Warnings, Infos)"), h.PROBLEMS_PANEL_CONFIGURATION_TITLE = n("problems.panel.configuration.title", "Problems View"), h.PROBLEMS_PANEL_CONFIGURATION_AUTO_REVEAL = n(
  "problems.panel.configuration.autoreveal",
  "Controls whether Problems view should automatically reveal files when opening them."
), h.PROBLEMS_PANEL_CONFIGURATION_VIEW_MODE = n(
  "problems.panel.configuration.viewMode",
  "Controls the default view mode of the Problems view."
), h.PROBLEMS_PANEL_CONFIGURATION_SHOW_CURRENT_STATUS = n(
  "problems.panel.configuration.showCurrentInStatus",
  "When enabled shows the current problem in the status bar."
), h.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER = n(
  "problems.panel.configuration.compareOrder",
  "Controls the order in which problems are navigated."
), h.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_SEVERITY = n(
  "problems.panel.configuration.compareOrder.severity",
  "Navigate problems ordered by severity"
), h.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_POSITION = n(
  "problems.panel.configuration.compareOrder.position",
  "Navigate problems ordered by position"
), h.MARKERS_PANEL_TITLE_PROBLEMS = n("markers.panel.title.problems", "Problems"), h.MARKERS_PANEL_NO_PROBLEMS_BUILT = n(
  "markers.panel.no.problems.build",
  "No problems have been detected in the workspace."
), h.MARKERS_PANEL_NO_PROBLEMS_ACTIVE_FILE_BUILT = n(
  "markers.panel.no.problems.activeFile.build",
  "No problems have been detected in the current file."
), h.MARKERS_PANEL_NO_PROBLEMS_FILTERS = n(
  "markers.panel.no.problems.filters",
  "No results found with provided filter criteria."
), h.MARKERS_PANEL_ACTION_TOOLTIP_MORE_FILTERS = n("markers.panel.action.moreFilters", "More Filters..."), h.MARKERS_PANEL_FILTER_LABEL_SHOW_ERRORS = n("markers.panel.filter.showErrors", "Show Errors"), h.MARKERS_PANEL_FILTER_LABEL_SHOW_WARNINGS = n("markers.panel.filter.showWarnings", "Show Warnings"), h.MARKERS_PANEL_FILTER_LABEL_SHOW_INFOS = n("markers.panel.filter.showInfos", "Show Infos"), h.MARKERS_PANEL_FILTER_LABEL_EXCLUDED_FILES = n("markers.panel.filter.useFilesExclude", "Hide Excluded Files"), h.MARKERS_PANEL_FILTER_LABEL_ACTIVE_FILE = n("markers.panel.filter.activeFile", "Show Active File Only"), h.MARKERS_PANEL_ACTION_TOOLTIP_FILTER = n("markers.panel.action.filter", "Filter Problems"), h.MARKERS_PANEL_ACTION_TOOLTIP_QUICKFIX = n("markers.panel.action.quickfix", "Show fixes"), h.MARKERS_PANEL_FILTER_ARIA_LABEL = n("markers.panel.filter.ariaLabel", "Filter Problems"), h.MARKERS_PANEL_FILTER_PLACEHOLDER = n(
  "markers.panel.filter.placeholder",
  "Filter (e.g. text, **/*.ts, !**/node_modules/**)"
), h.MARKERS_PANEL_FILTER_ERRORS = n("markers.panel.filter.errors", "errors"), h.MARKERS_PANEL_FILTER_WARNINGS = n("markers.panel.filter.warnings", "warnings"), h.MARKERS_PANEL_FILTER_INFOS = n("markers.panel.filter.infos", "infos"), h.MARKERS_PANEL_SINGLE_ERROR_LABEL = n("markers.panel.single.error.label", "1 Error"), h.MARKERS_PANEL_MULTIPLE_ERRORS_LABEL = (e) => n("markers.panel.multiple.errors.label", "{0} Errors", "" + e), h.MARKERS_PANEL_SINGLE_WARNING_LABEL = n("markers.panel.single.warning.label", "1 Warning"), h.MARKERS_PANEL_MULTIPLE_WARNINGS_LABEL = (e) => n("markers.panel.multiple.warnings.label", "{0} Warnings", "" + e), h.MARKERS_PANEL_SINGLE_INFO_LABEL = n("markers.panel.single.info.label", "1 Info"), h.MARKERS_PANEL_MULTIPLE_INFOS_LABEL = (e) => n("markers.panel.multiple.infos.label", "{0} Infos", "" + e), h.MARKERS_PANEL_SINGLE_UNKNOWN_LABEL = n("markers.panel.single.unknown.label", "1 Unknown"), h.MARKERS_PANEL_MULTIPLE_UNKNOWNS_LABEL = (e) => n("markers.panel.multiple.unknowns.label", "{0} Unknowns", "" + e), h.MARKERS_PANEL_AT_LINE_COL_NUMBER = (e, t) => n("markers.panel.at.ln.col.number", "[Ln {0}, Col {1}]", "" + e, "" + t), h.MARKERS_TREE_ARIA_LABEL_RESOURCE = (e, t, i) => n(
  "problems.tree.aria.label.resource",
  "{0} problems in file {1} of folder {2}",
  e,
  t,
  i
), h.MARKERS_TREE_ARIA_LABEL_MARKER = (e) => {
  const t = e.relatedInformation.length ? n(
    "problems.tree.aria.label.marker.relatedInformation",
    " This problem has references to {0} locations.",
    e.relatedInformation.length
  ) : "";
  switch (e.marker.severity) {
    case _.Error:
      return e.marker.source ? n(
        "problems.tree.aria.label.error.marker",
        "Error: {0} at line {1} and character {2}.{3} generated by {4}",
        e.marker.message,
        e.marker.startLineNumber,
        e.marker.startColumn,
        t,
        e.marker.source
      ) : n(
        "problems.tree.aria.label.error.marker.nosource",
        "Error: {0} at line {1} and character {2}.{3}",
        e.marker.message,
        e.marker.startLineNumber,
        e.marker.startColumn,
        t
      );
    case _.Warning:
      return e.marker.source ? n(
        "problems.tree.aria.label.warning.marker",
        "Warning: {0} at line {1} and character {2}.{3} generated by {4}",
        e.marker.message,
        e.marker.startLineNumber,
        e.marker.startColumn,
        t,
        e.marker.source
      ) : n(
        "problems.tree.aria.label.warning.marker.nosource",
        "Warning: {0} at line {1} and character {2}.{3}",
        e.marker.message,
        e.marker.startLineNumber,
        e.marker.startColumn,
        t,
        t
      );
    case _.Info:
      return e.marker.source ? n(
        "problems.tree.aria.label.info.marker",
        "Info: {0} at line {1} and character {2}.{3} generated by {4}",
        e.marker.message,
        e.marker.startLineNumber,
        e.marker.startColumn,
        t,
        e.marker.source
      ) : n(
        "problems.tree.aria.label.info.marker.nosource",
        "Info: {0} at line {1} and character {2}.{3}",
        e.marker.message,
        e.marker.startLineNumber,
        e.marker.startColumn,
        t
      );
    default:
      return e.marker.source ? n(
        "problems.tree.aria.label.marker",
        "Problem: {0} at line {1} and character {2}.{3} generated by {4}",
        e.marker.source,
        e.marker.message,
        e.marker.startLineNumber,
        e.marker.startColumn,
        t,
        e.marker.source
      ) : n(
        "problems.tree.aria.label.marker.nosource",
        "Problem: {0} at line {1} and character {2}.{3}",
        e.marker.message,
        e.marker.startLineNumber,
        e.marker.startColumn,
        t
      );
  }
}, h.MARKERS_TREE_ARIA_LABEL_RELATED_INFORMATION = (e) => n(
  "problems.tree.aria.label.relatedinfo.message",
  "{0} at line {1} and character {2} in {3}",
  e.message,
  e.startLineNumber,
  e.startColumn,
  X(e.resource)
), h.SHOW_ERRORS_WARNINGS_ACTION_LABEL = n("errors.warnings.show.label", "Show Errors and Warnings");
let f = h;
var yi = ".markers-panel-action-filter>.markers-panel-filter-controls>.monaco-action-bar .action-label.markers-filters.checked{background-color:var(--vscode-inputOption-activeBackground);border-color:var(--vscode-inputOption-activeBorder);color:var(--vscode-inputOption-activeForeground)}";
rt(yi, {});
class Ti extends D {
  constructor(e, t) {
    super(), this.contextKeyService = t, this._onDidChange = this._register(new q()), this.onDidChange = this._onDidChange.event, this._excludedFiles = b.ShowExcludedFilesFilterContextKey.bindTo(this.contextKeyService), this._activeFile = b.ShowActiveFileFilterContextKey.bindTo(this.contextKeyService), this._showWarnings = b.ShowWarningsFilterContextKey.bindTo(this.contextKeyService), this._showErrors = b.ShowErrorsFilterContextKey.bindTo(this.contextKeyService), this._showInfos = b.ShowInfoFilterContextKey.bindTo(this.contextKeyService), this._showErrors.set(e.showErrors), this._showWarnings.set(e.showWarnings), this._showInfos.set(e.showInfos), this._excludedFiles.set(e.excludedFiles), this._activeFile.set(e.activeFile), this.filterHistory = e.filterHistory;
  }
  get excludedFiles() {
    return !!this._excludedFiles.get();
  }
  set excludedFiles(e) {
    this._excludedFiles.get() !== e && (this._excludedFiles.set(e), this._onDidChange.fire({ excludedFiles: !0 }));
  }
  get activeFile() {
    return !!this._activeFile.get();
  }
  set activeFile(e) {
    this._activeFile.get() !== e && (this._activeFile.set(e), this._onDidChange.fire({ activeFile: !0 }));
  }
  get showWarnings() {
    return !!this._showWarnings.get();
  }
  set showWarnings(e) {
    this._showWarnings.get() !== e && (this._showWarnings.set(e), this._onDidChange.fire({ showWarnings: !0 }));
  }
  get showErrors() {
    return !!this._showErrors.get();
  }
  set showErrors(e) {
    this._showErrors.get() !== e && (this._showErrors.set(e), this._onDidChange.fire({ showErrors: !0 }));
  }
  get showInfos() {
    return !!this._showInfos.get();
  }
  set showInfos(e) {
    this._showInfos.get() !== e && (this._showInfos.set(e), this._onDidChange.fire({ showInfos: !0 }));
  }
}
const C = class C extends Ne {
  get quickFixes() {
    return this._quickFixes;
  }
  set quickFixes(e) {
    this._quickFixes = e, this.enabled = this._quickFixes.length > 0;
  }
  autoFixable(e) {
    this.class = e ? C.AUTO_FIX_CLASS : C.CLASS;
  }
  constructor(e) {
    super(C.ID, f.MARKERS_PANEL_ACTION_TOOLTIP_QUICKFIX, C.CLASS, !1), this.marker = e, this._onShowQuickFixes = this._register(new q()), this.onShowQuickFixes = this._onShowQuickFixes.event, this._quickFixes = [];
  }
  run() {
    return this._onShowQuickFixes.fire(), Promise.resolve();
  }
};
C.ID = "workbench.actions.problems.quickfix", C.CLASS = "markers-panel-action-quickfix " + Ve.asClassName(O.lightBulb), C.AUTO_FIX_CLASS = C.CLASS + " autofixable";
let J = C, ne = class extends Oe {
  constructor(e, t) {
    super(null, e, { icon: !0, label: !1 }), this.contextMenuService = t;
  }
  onClick(e) {
    xt.stop(e, !0), this.showQuickFixes();
  }
  showQuickFixes() {
    if (!this.element || !this.isEnabled())
      return;
    const e = Lt(this.element), t = this.action.quickFixes;
    t.length && this.contextMenuService.showContextMenu({
      getAnchor: () => ({ x: e.left + 10, y: e.top + e.height + 4 }),
      getActions: () => t
    });
  }
};
ne = x([
  d(1, st)
], ne);
class Xe {
  constructor(e, t, i) {
    this.globalExpression = qe(e), this.expressionsByRoot = Pt.forUris((r) => i.extUri.ignorePathCasing(r));
    for (const r of t)
      this.expressionsByRoot.set(r.root, { root: r.root, expression: qe(r.expression) });
  }
  matches(e) {
    const t = this.expressionsByRoot.findSubstr(e);
    if (t) {
      const i = Nt(t.root, e);
      if (i && t.expression(i))
        return !0;
    }
    return !!this.globalExpression(e.path);
  }
}
const j = class j {
  static EMPTY(e) {
    return new j("", [], !1, !1, !1, e);
  }
  constructor(e, t, i, r, s, o) {
    this.filter = e, this.showWarnings = !1, this.showErrors = !1, this.showInfos = !1, e = e.trim(), this.showWarnings = i, this.showErrors = r, this.showInfos = s;
    const c = Array.isArray(t) ? t : [], m = Array.isArray(t) ? Ge() : t;
    for (const { expression: M } of c)
      for (const S of Object.keys(M))
        S.endsWith("/**") || (M[`${yt(S, "/")}/**`] = M[S]);
    const g = e.startsWith("!");
    this.textFilter = { text: (g ? He(e, "!") : e).trim(), negate: g };
    const E = Ge();
    if (e) {
      const M = Tt(e, ",").map((S) => S.trim()).filter((S) => !!S.length);
      for (const S of M)
        if (S.startsWith("!")) {
          const k = He(S, "!");
          k && this.setPattern(m, k);
        } else
          this.setPattern(E, S);
    }
    this.excludesMatcher = new Xe(m, c, o), this.includesMatcher = new Xe(E, [], o);
  }
  setPattern(e, t) {
    t[0] === "." && (t = "*" + t), e[`**/${t}/**`] = !0, e[`**/${t}`] = !0;
  }
};
j._filter = Ft, j._messageFilter = Ct;
let v = j, _e = class {
  constructor(e) {
    this.labelService = e;
  }
  getWidgetAriaLabel() {
    return n("problemsView", "Problems View");
  }
  getAriaLabel(e) {
    if (e instanceof y) {
      const t = this.labelService.getUriLabel(e.resource, { relative: !0 }) || e.resource.fsPath;
      return f.MARKERS_TREE_ARIA_LABEL_RESOURCE(e.markers.length, e.name, Kt(t));
    }
    return e instanceof w || e instanceof V ? f.MARKERS_TREE_ARIA_LABEL_MARKER(e) : e instanceof H ? f.MARKERS_TREE_ARIA_LABEL_RELATED_INFORMATION(e.raw) : null;
  }
};
_e = x([
  d(0, Z)
], _e);
const Y = class Y {
  constructor(e) {
    this.markersViewState = e;
  }
  getHeight(e) {
    if (e instanceof w) {
      const t = this.markersViewState.getViewModel(e);
      return (!t || t.multiline ? e.lines.length : 1) * Y.LINE_HEIGHT;
    }
    return Y.LINE_HEIGHT;
  }
  getTemplateId(e) {
    return e instanceof y ? "rm" : e instanceof w ? "m" : "ri";
  }
};
Y.LINE_HEIGHT = 22;
let oe = Y, Se = class {
  constructor(e, t, i, r) {
    this.labels = e, this.labelService = i, this.fileService = r, this.renderedNodes = /* @__PURE__ */ new Map(), this.disposables = new re(), this.templateId = "rm", t(this.onDidChangeRenderNodeCount, this, this.disposables);
  }
  renderTemplate(e) {
    const t = u(e, p(".resource-label-container")), i = this.labels.create(t, { supportHighlights: !0 }), r = u(e, p(".count-badge-wrapper"));
    return { count: new Wt(r, {}, Bt), resourceLabel: i };
  }
  renderElement(e, t, i) {
    const r = e.element, s = e.filterData && e.filterData.uriMatches || [];
    this.fileService.hasProvider(r.resource) || r.resource.scheme === Ut.untitled ? i.resourceLabel.setFile(r.resource, { matches: s }) : i.resourceLabel.setResource({ name: r.name, description: this.labelService.getUriLabel(Ht(r.resource), { relative: !0 }), resource: r.resource }, { matches: s }), this.updateCount(e, i), this.renderedNodes.set(e, i);
  }
  disposeElement(e) {
    this.renderedNodes.delete(e);
  }
  disposeTemplate(e) {
    e.resourceLabel.dispose();
  }
  onDidChangeRenderNodeCount(e) {
    const t = this.renderedNodes.get(e);
    t && this.updateCount(e, t);
  }
  updateCount(e, t) {
    t.count.setCount(e.children.reduce((i, r) => i + (r.visible ? 1 : 0), 0));
  }
  dispose() {
    this.disposables.dispose();
  }
};
Se = x([
  d(2, Z),
  d(3, Vt)
], Se);
let Me = class {
  constructor(e, t, i) {
    this.markersViewState = e, this.instantiationService = t, this.openerService = i, this.templateId = "m";
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return t.markerWidget = new Vi(
      e,
      this.markersViewState,
      this.openerService,
      this.instantiationService
    ), t;
  }
  renderElement(e, t, i) {
    i.markerWidget.render(e.element, e.filterData);
  }
  disposeTemplate(e) {
    e.markerWidget.dispose();
  }
};
Me = x([
  d(1, K),
  d(2, De)
], Me);
const _t = Ke("markers-view-multi-line-expanded", O.chevronUp, n(
  "expandedIcon",
  "Icon indicating that multiple lines are shown in the markers view."
)), Pi = Ke("markers-view-multi-line-collapsed", O.chevronDown, n(
  "collapsedIcon",
  "Icon indicating that multiple lines are collapsed in the markers view."
)), Je = "problems.action.toggleMultiline";
class Ni extends Oe {
  render(e) {
    super.render(e), this.updateExpandedAttribute();
  }
  updateClass() {
    super.updateClass(), this.updateExpandedAttribute();
  }
  updateExpandedAttribute() {
    var e;
    (e = this.element) == null || e.setAttribute("aria-expanded", `${this._action.class === Ve.asClassName(_t)}`);
  }
}
class Vi extends D {
  constructor(e, t, i, r) {
    super(), this.parent = e, this.markersViewModel = t, this._openerService = i, this.disposables = this._register(new re()), this.actionBar = this._register(new we(u(e, p(".actions")), {
      actionViewItemProvider: (s) => s.id === J.ID ? r.createInstance(ne, s) : void 0
    })), this.iconContainer = u(e, p("")), this.icon = u(this.iconContainer, p("")), this.messageAndDetailsContainer = u(e, p(".marker-message-details-container"));
  }
  render(e, t) {
    this.actionBar.clear(), this.disposables.clear(), ot(this.messageAndDetailsContainer), this.iconContainer.className = `marker-icon ${at.toString(_.toSeverity(e.marker.severity))}`, this.icon.className = `codicon ${lt.className(_.toSeverity(e.marker.severity))}`, this.renderQuickfixActionbar(e), this.renderMessageAndDetails(e, t), this.disposables.add(Ee(this.parent, se.MOUSE_OVER, () => this.markersViewModel.onMarkerMouseHover(e))), this.disposables.add(Ee(this.parent, se.MOUSE_LEAVE, () => this.markersViewModel.onMarkerMouseLeave(e)));
  }
  renderQuickfixActionbar(e) {
    const t = this.markersViewModel.getViewModel(e);
    if (t) {
      const i = t.quickFixAction;
      this.actionBar.push([i], { icon: !0, label: !1 }), this.iconContainer.classList.toggle("quickFix", i.enabled), i.onDidChange(({ enabled: r }) => {
        ct(r) || this.iconContainer.classList.toggle("quickFix", r);
      }, this, this.disposables), i.onShowQuickFixes(() => {
        const r = this.actionBar.viewItems[0];
        r && r.showQuickFixes();
      }, this, this.disposables);
    }
  }
  renderMultilineActionbar(e, t) {
    const i = this.disposables.add(new we(u(t, p(".multiline-actions")), {
      actionViewItemProvider: (c) => {
        if (c.id === Je)
          return new Ni(void 0, c, { icon: !0 });
      }
    }));
    this.disposables.add(B(() => i.dispose()));
    const r = this.markersViewModel.getViewModel(e), s = r && r.multiline, o = new Ne(Je);
    o.enabled = !!r && e.lines.length > 1, o.tooltip = s ? n("single line", "Show message in single line") : n("multi line", "Show message in multiple lines"), o.class = Ve.asClassName(s ? _t : Pi), o.run = () => (r && (r.multiline = !r.multiline), Promise.resolve()), i.push([o], { icon: !0, label: !1 });
  }
  renderMessageAndDetails(e, t) {
    const { marker: i, lines: r } = e, s = this.markersViewModel.getViewModel(e), o = !s || s.multiline, c = t && t.lineMatches || [];
    this.messageAndDetailsContainer.title = e.marker.message;
    const m = [];
    for (let g = 0; g < (o ? r.length : 1); g++) {
      const E = u(this.messageAndDetailsContainer, p(".marker-message-line")), M = u(E, p(".marker-message"));
      new L(M).set(r[g].length > 1e3 ? `${r[g].substring(0, 1e3)}...` : r[g], c[g]), r[g] === "" && (E.style.height = `${oe.LINE_HEIGHT}px`), m.push(E);
    }
    this.renderDetails(i, t, m[0]), this.renderMultilineActionbar(e, m[0]);
  }
  renderDetails(e, t, i) {
    if (i.classList.add("details-container"), e.source || e.code) {
      const s = new L(u(i, p(".marker-source"))), o = t && t.sourceMatches || [];
      if (s.set(e.source, o), e.code)
        if (typeof e.code == "string") {
          const c = new L(u(i, p(".marker-code"))), m = t && t.codeMatches || [];
          c.set(e.code, m);
        } else {
          const c = p(".marker-code"), m = new L(c), g = e.code.target.toString(!0);
          this.disposables.add(new ht(
            i,
            { href: g, label: c, title: g },
            void 0,
            this._openerService
          ));
          const E = t && t.codeMatches || [];
          m.set(e.code.value, E);
        }
    }
    const r = u(i, p("span.marker-line"));
    r.textContent = f.MARKERS_PANEL_AT_LINE_COL_NUMBER(e.startLineNumber, e.startColumn);
  }
}
let Ie = class {
  constructor(e) {
    this.labelService = e, this.templateId = "ri";
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null);
    u(e, p(".actions")), u(e, p(".icon")), t.resourceLabel = new L(u(e, p(".related-info-resource"))), t.lnCol = u(e, p("span.marker-line"));
    const i = u(e, p("span.related-info-resource-separator"));
    return i.textContent = ":", i.style.paddingRight = "4px", t.description = new L(u(e, p(".marker-description"))), t;
  }
  renderElement(e, t, i) {
    const r = e.element.raw, s = e.filterData && e.filterData.uriMatches || [], o = e.filterData && e.filterData.messageMatches || [];
    i.resourceLabel.set(X(r.resource), s), i.resourceLabel.element.title = this.labelService.getUriLabel(r.resource, { relative: !0 }), i.lnCol.textContent = f.MARKERS_PANEL_AT_LINE_COL_NUMBER(r.startLineNumber, r.startColumn), i.description.set(r.message, o), i.description.element.title = r.message;
  }
  disposeTemplate(e) {
  }
};
Ie = x([
  d(0, Z)
], Ie);
class Oi {
  constructor(e) {
    this.options = e;
  }
  filter(e, t) {
    return e instanceof y ? this.filterResourceMarkers(e) : e instanceof w ? this.filterMarker(e, t) : this.filterRelatedInformation(e, t);
  }
  filterResourceMarkers(e) {
    if (Pe.has(e.resource.scheme) || this.options.excludesMatcher.matches(e.resource))
      return !1;
    if (this.options.includesMatcher.matches(e.resource))
      return !0;
    if (this.options.textFilter.text && !this.options.textFilter.negate) {
      const t = v._filter(this.options.textFilter.text, X(e.resource));
      if (t)
        return { visibility: !0, data: { type: 0, uriMatches: t || [] } };
    }
    return 2;
  }
  filterMarker(e, t) {
    if (!(this.options.showErrors && _.Error === e.marker.severity || this.options.showWarnings && _.Warning === e.marker.severity || this.options.showInfos && _.Info === e.marker.severity))
      return !1;
    if (!this.options.textFilter.text)
      return !0;
    const r = [];
    for (const m of e.lines) {
      const g = v._messageFilter(this.options.textFilter.text, m);
      r.push(g || []);
    }
    const s = e.marker.source ? v._filter(this.options.textFilter.text, e.marker.source) : void 0, o = e.marker.code ? v._filter(this.options.textFilter.text, typeof e.marker.code == "string" ? e.marker.code : e.marker.code.value) : void 0, c = s || o || r.some((m) => m.length > 0);
    return c && !this.options.textFilter.negate ? { visibility: !0, data: { type: 1, lineMatches: r, sourceMatches: s || [], codeMatches: o || [] } } : c && this.options.textFilter.negate && t === 2 ? !1 : !c && this.options.textFilter.negate && t === 2 ? !0 : t;
  }
  filterRelatedInformation(e, t) {
    if (!this.options.textFilter.text)
      return !0;
    const i = v._filter(this.options.textFilter.text, X(e.raw.resource)), r = v._messageFilter(this.options.textFilter.text, Jt(e.raw.message)), s = i || r;
    return s && !this.options.textFilter.negate ? { visibility: !0, data: { type: 2, uriMatches: i || [], messageMatches: r || [] } } : s && this.options.textFilter.negate && t === 2 ? !1 : !s && this.options.textFilter.negate && t === 2 ? !0 : t;
  }
}
let Ae = class extends D {
  constructor(e, t, i, r, s) {
    super(), this.marker = e, this.modelService = t, this.instantiationService = i, this.editorService = r, this.languageFeaturesService = s, this._onDidChange = this._register(new q()), this.onDidChange = this._onDidChange.event, this.modelPromise = null, this.codeActionsPromise = null, this._multiline = !0, this._quickFixAction = null, this._register(B(() => {
      this.modelPromise && this.modelPromise.cancel(), this.codeActionsPromise && this.codeActionsPromise.cancel();
    }));
  }
  get multiline() {
    return this._multiline;
  }
  set multiline(e) {
    this._multiline !== e && (this._multiline = e, this._onDidChange.fire());
  }
  get quickFixAction() {
    return this._quickFixAction || (this._quickFixAction = this._register(this.instantiationService.createInstance(J, this.marker))), this._quickFixAction;
  }
  showLightBulb() {
    this.setQuickFixes(!0);
  }
  async setQuickFixes(e) {
    const t = await this.getCodeActions(e);
    this.quickFixAction.quickFixes = t ? this.toActions(t) : [], this.quickFixAction.autoFixable(!!t && t.hasAutoFix);
  }
  getCodeActions(e) {
    return this.codeActionsPromise !== null ? this.codeActionsPromise : this.getModel(e).then((t) => t ? (this.codeActionsPromise || (this.codeActionsPromise = $e((i) => qt(this.languageFeaturesService.codeActionProvider, t, new Te(
      this.marker.range.startLineNumber,
      this.marker.range.startColumn,
      this.marker.range.endLineNumber,
      this.marker.range.endColumn
    ), {
      type: 1,
      triggerAction: $t.ProblemsView,
      filter: { include: zt.QuickFix }
    }, Gt.None, i).then((r) => this._register(r)))), this.codeActionsPromise) : null);
  }
  toActions(e) {
    return e.validActions.map((t) => new Ne(
      t.action.command ? t.action.command.id : t.action.title,
      t.action.title,
      void 0,
      !0,
      () => this.openFileAtMarker(this.marker).then(() => this.instantiationService.invokeFunction(Qt, t, jt.FromProblemsView))
    ));
  }
  openFileAtMarker(e) {
    const { resource: t, selection: i } = { resource: e.resource, selection: e.range };
    return this.editorService.openEditor({
      resource: t,
      options: {
        selection: i,
        preserveFocus: !0,
        pinned: !1,
        revealIfVisible: !0
      }
    }, dt).then(() => {
    });
  }
  getModel(e) {
    const t = this.modelService.getModel(this.marker.resource);
    return t ? Promise.resolve(t) : e ? (this.modelPromise || (this.modelPromise = $e((i) => new Promise((r) => {
      this._register(this.modelService.onModelAdded((s) => {
        Yt(s.uri, this.marker.resource) && r(s);
      }));
    }))), this.modelPromise) : Promise.resolve(null);
  }
};
Ae = x([
  d(1, Ot),
  d(2, K),
  d(3, nt),
  d(4, Dt)
], Ae);
let Re = class extends D {
  constructor(e = !0, t = "tree", i, r) {
    super(), this.contextKeyService = i, this.instantiationService = r, this._onDidChange = this._register(new q()), this.onDidChange = this._onDidChange.event, this._onDidChangeViewMode = this._register(new q()), this.onDidChangeViewMode = this._onDidChangeViewMode.event, this.markersViewStates = /* @__PURE__ */ new Map(), this.markersPerResource = /* @__PURE__ */ new Map(), this.bulkUpdate = !1, this.hoveredMarker = null, this.hoverDelayer = new Xt(300), this._multiline = !0, this._viewMode = "tree", this._multiline = e, this._viewMode = t, this.viewModeContextKey = b.MarkersViewModeContextKey.bindTo(this.contextKeyService), this.viewModeContextKey.set(t);
  }
  add(e) {
    if (!this.markersViewStates.has(e.id)) {
      const t = this.instantiationService.createInstance(Ae, e), i = [t];
      t.multiline = this.multiline, t.onDidChange(() => {
        this.bulkUpdate || this._onDidChange.fire(e);
      }, this, i), this.markersViewStates.set(e.id, { viewModel: t, disposables: i });
      const r = this.markersPerResource.get(e.resource.toString()) || [];
      r.push(e), this.markersPerResource.set(e.resource.toString(), r);
    }
  }
  remove(e) {
    const t = this.markersPerResource.get(e.toString()) || [];
    for (const i of t) {
      const r = this.markersViewStates.get(i.id);
      r && ze(r.disposables), this.markersViewStates.delete(i.id), this.hoveredMarker === i && (this.hoveredMarker = null);
    }
    this.markersPerResource.delete(e.toString());
  }
  getViewModel(e) {
    const t = this.markersViewStates.get(e.id);
    return t ? t.viewModel : null;
  }
  onMarkerMouseHover(e) {
    this.hoveredMarker = e, this.hoverDelayer.trigger(() => {
      if (this.hoveredMarker) {
        const t = this.getViewModel(this.hoveredMarker);
        t && t.showLightBulb();
      }
    });
  }
  onMarkerMouseLeave(e) {
    this.hoveredMarker === e && (this.hoveredMarker = null);
  }
  get multiline() {
    return this._multiline;
  }
  set multiline(e) {
    let t = !1;
    this._multiline !== e && (this._multiline = e, t = !0), this.bulkUpdate = !0, this.markersViewStates.forEach(({ viewModel: i }) => {
      i.multiline !== e && (i.multiline = e, t = !0);
    }), this.bulkUpdate = !1, t && this._onDidChange.fire(void 0);
  }
  get viewMode() {
    return this._viewMode;
  }
  set viewMode(e) {
    this._viewMode !== e && (this._viewMode = e, this._onDidChangeViewMode.fire(e), this.viewModeContextKey.set(e));
  }
  dispose() {
    this.markersViewStates.forEach(({ disposables: e }) => ze(e)), this.markersViewStates.clear(), this.markersPerResource.clear(), super.dispose();
  }
};
Re = x([
  d(2, We),
  d(3, K)
], Re);
const N = p;
var G;
let ae = (G = class {
  constructor(e, t) {
    this.markersViewModel = e, this.instantiationService = t, this.templateId = G.TEMPLATE_ID;
  }
  renderTemplate(e) {
    const t = u(e, N(".severity")), i = u(t, N("")), r = u(e, N(".actions"));
    return { actionBar: new we(r, {
      actionViewItemProvider: (o) => o.id === J.ID ? this.instantiationService.createInstance(ne, o) : void 0,
      animated: !1
    }), icon: i };
  }
  renderElement(e, t, i, r) {
    const s = (c) => {
      ct(c) || ut(i.icon, "monaco-table-td").classList.toggle("quickFix", c);
    };
    i.icon.title = _.toString(e.marker.severity), i.icon.className = `marker-icon ${at.toString(_.toSeverity(e.marker.severity))} codicon ${lt.className(_.toSeverity(e.marker.severity))}`, i.actionBar.clear();
    const o = this.markersViewModel.getViewModel(e);
    if (o) {
      const c = o.quickFixAction;
      i.actionBar.push([c], { icon: !0, label: !1 }), s(o.quickFixAction.enabled), c.onDidChange(({ enabled: m }) => s(m)), c.onShowQuickFixes(() => {
        const m = i.actionBar.viewItems[0];
        m && m.showQuickFixes();
      });
    }
  }
  disposeTemplate(e) {
  }
}, G.TEMPLATE_ID = "severity", G);
ae = x([
  d(1, K)
], ae);
var $;
let le = ($ = class {
  constructor(e) {
    this.openerService = e, this.templateId = $.TEMPLATE_ID;
  }
  renderTemplate(e) {
    const t = u(e, N(".code")), i = new L(t);
    i.element.classList.add("source-label");
    const r = new L(t);
    r.element.classList.add("code-label");
    const s = new ht(t, { href: "", label: "" }, {}, this.openerService);
    return { codeColumn: t, sourceLabel: i, codeLabel: r, codeLink: s };
  }
  renderElement(e, t, i, r) {
    if (i.codeColumn.classList.remove("code-label"), i.codeColumn.classList.remove("code-link"), e.marker.source && e.marker.code)
      if (typeof e.marker.code == "string")
        i.codeColumn.classList.add("code-label"), i.codeColumn.title = `${e.marker.source} (${e.marker.code})`, i.sourceLabel.set(e.marker.source, e.sourceMatches), i.codeLabel.set(e.marker.code, e.codeMatches);
      else {
        i.codeColumn.classList.add("code-link"), i.codeColumn.title = `${e.marker.source} (${e.marker.code.value})`, i.sourceLabel.set(e.marker.source, e.sourceMatches);
        const s = new L(N(".code-link-label"));
        s.set(e.marker.code.value, e.codeMatches), i.codeLink.link = {
          href: e.marker.code.target.toString(),
          title: e.marker.code.target.toString(),
          label: s.element
        };
      }
    else
      i.codeColumn.title = "", i.sourceLabel.set("-");
  }
  disposeTemplate(e) {
  }
}, $.TEMPLATE_ID = "code", $);
le = x([
  d(0, De)
], le);
const ue = class ue {
  constructor() {
    this.templateId = ue.TEMPLATE_ID;
  }
  renderTemplate(e) {
    const t = u(e, N(".message")), i = new L(t);
    return { columnElement: t, highlightedLabel: i };
  }
  renderElement(e, t, i, r) {
    i.columnElement.title = e.marker.message, i.highlightedLabel.set(e.marker.message, e.messageMatches);
  }
  disposeTemplate(e) {
  }
};
ue.TEMPLATE_ID = "message";
let ce = ue;
var z;
let he = (z = class {
  constructor(e) {
    this.labelService = e, this.templateId = z.TEMPLATE_ID;
  }
  renderTemplate(e) {
    const t = u(e, N(".file")), i = new L(t);
    i.element.classList.add("file-label");
    const r = new L(t);
    return r.element.classList.add("file-position"), { columnElement: t, fileLabel: i, positionLabel: r };
  }
  renderElement(e, t, i, r) {
    const s = f.MARKERS_PANEL_AT_LINE_COL_NUMBER(e.marker.startLineNumber, e.marker.startColumn);
    i.columnElement.title = `${this.labelService.getUriLabel(e.marker.resource, { relative: !1 })} ${s}`, i.fileLabel.set(this.labelService.getUriLabel(e.marker.resource, { relative: !0 }), e.fileMatches), i.positionLabel.set(s, void 0);
  }
  disposeTemplate(e) {
  }
}, z.TEMPLATE_ID = "file", z);
he = x([
  d(0, Z)
], he);
const me = class me {
  constructor() {
    this.templateId = me.TEMPLATE_ID;
  }
  renderTemplate(e) {
    const t = u(e, N(".owner")), i = new L(t);
    return { columnElement: t, highlightedLabel: i };
  }
  renderElement(e, t, i, r) {
    i.columnElement.title = e.marker.owner, i.highlightedLabel.set(e.marker.owner, e.ownerMatches);
  }
  disposeTemplate(e) {
  }
};
me.TEMPLATE_ID = "owner";
let de = me;
const U = class U {
  constructor() {
    this.headerRowHeight = U.HEADER_ROW_HEIGHT;
  }
  getHeight(e) {
    return U.ROW_HEIGHT;
  }
};
U.HEADER_ROW_HEIGHT = 24, U.ROW_HEIGHT = 24;
let ve = U, xe = class extends D {
  constructor(e, t, i, r, s, o, c) {
    super(), this.container = e, this.markersViewModel = t, this.resourceMarkers = i, this.filterOptions = r, this.instantiationService = o, this.labelService = c, this._itemCount = 0, this.table = this.instantiationService.createInstance(Zt, "Markers", this.container, new ve(), [
      {
        label: "",
        tooltip: "",
        weight: 0,
        minimumWidth: 36,
        maximumWidth: 36,
        templateId: ae.TEMPLATE_ID,
        project(k) {
          return k;
        }
      },
      {
        label: n("codeColumnLabel", "Code"),
        tooltip: "",
        weight: 1,
        minimumWidth: 100,
        maximumWidth: 300,
        templateId: le.TEMPLATE_ID,
        project(k) {
          return k;
        }
      },
      {
        label: n("messageColumnLabel", "Message"),
        tooltip: "",
        weight: 4,
        templateId: ce.TEMPLATE_ID,
        project(k) {
          return k;
        }
      },
      {
        label: n("fileColumnLabel", "File"),
        tooltip: "",
        weight: 2,
        templateId: he.TEMPLATE_ID,
        project(k) {
          return k;
        }
      },
      {
        label: n("sourceColumnLabel", "Source"),
        tooltip: "",
        weight: 1,
        minimumWidth: 100,
        maximumWidth: 300,
        templateId: de.TEMPLATE_ID,
        project(k) {
          return k;
        }
      }
    ], [
      this.instantiationService.createInstance(ae, this.markersViewModel),
      this.instantiationService.createInstance(le),
      this.instantiationService.createInstance(ce),
      this.instantiationService.createInstance(he),
      this.instantiationService.createInstance(de)
    ], s);
    const m = this.table.domNode.querySelector(".monaco-list-rows"), g = T.chain(this._register(new Qe(m, "mouseover")).event).map(
      (k) => ut(k.target, "monaco-list-row", "monaco-list-rows")
    ).filter((k) => !!k).map((k) => parseInt(k.getAttribute("data-index"))).event, E = T.map(
      this._register(new Qe(m, "mouseleave")).event,
      () => -1
    ), M = T.latch(T.any(g, E)), S = T.debounce(M, (k, F) => F, 500);
    this._register(S((k) => {
      k !== -1 && this.table.row(k) && this.markersViewModel.onMarkerMouseHover(this.table.row(k));
    }));
  }
  get contextKeyService() {
    return this.table.contextKeyService;
  }
  get onContextMenu() {
    return this.table.onContextMenu;
  }
  get onDidOpen() {
    return this.table.onDidOpen;
  }
  get onDidChangeFocus() {
    return this.table.onDidChangeFocus;
  }
  get onDidChangeSelection() {
    return this.table.onDidChangeSelection;
  }
  collapseMarkers() {
  }
  domFocus() {
    this.table.domFocus();
  }
  filterMarkers(e, t) {
    this.filterOptions = t, this.reset(e);
  }
  getFocus() {
    const e = this.table.getFocus();
    return e.length > 0 ? [...e.map((t) => this.table.row(t))] : [];
  }
  getHTMLElement() {
    return this.table.getHTMLElement();
  }
  getRelativeTop(e) {
    return e ? this.table.getRelativeTop(this.table.indexOf(e)) : null;
  }
  getSelection() {
    const e = this.table.getSelection();
    return e.length > 0 ? [...e.map((t) => this.table.row(t))] : [];
  }
  getVisibleItemCount() {
    return this._itemCount;
  }
  isVisible() {
    return !this.container.classList.contains("hidden");
  }
  layout(e, t) {
    this.container.style.height = `${e}px`, this.table.layout(e, t);
  }
  reset(e) {
    this.resourceMarkers = e;
    const t = [];
    for (const i of this.resourceMarkers)
      for (const r of i.markers) {
        if (Pe.has(r.resource.scheme) || this.filterOptions.excludesMatcher.matches(r.resource))
          continue;
        if (this.filterOptions.includesMatcher.matches(r.resource)) {
          t.push(new V(r));
          continue;
        }
        if (this.filterOptions.showErrors && _.Error === r.marker.severity || this.filterOptions.showWarnings && _.Warning === r.marker.severity || this.filterOptions.showInfos && _.Info === r.marker.severity) {
          if (this.filterOptions.textFilter.text) {
            const o = r.marker.source ? v._filter(this.filterOptions.textFilter.text, r.marker.source) ?? void 0 : void 0, c = r.marker.code ? v._filter(this.filterOptions.textFilter.text, typeof r.marker.code == "string" ? r.marker.code : r.marker.code.value) ?? void 0 : void 0, m = v._messageFilter(this.filterOptions.textFilter.text, r.marker.message) ?? void 0, g = v._messageFilter(this.filterOptions.textFilter.text, this.labelService.getUriLabel(r.resource, { relative: !0 })) ?? void 0, E = v._messageFilter(this.filterOptions.textFilter.text, r.marker.owner) ?? void 0, M = o || c || m || g || E;
            (M && !this.filterOptions.textFilter.negate || !M && this.filterOptions.textFilter.negate) && t.push(new V(
              r,
              o,
              c,
              m,
              g,
              E
            ));
            continue;
          }
          t.push(new V(r));
        }
      }
    this._itemCount = t.length, this.table.splice(0, Number.POSITIVE_INFINITY, t.sort((i, r) => {
      let s = _.compare(i.marker.severity, r.marker.severity);
      return s === 0 && (s = Et(i.marker, r.marker)), s === 0 && (s = Te.compareRangesUsingStarts(i.marker, r.marker)), s;
    }));
  }
  revealMarkers(e, t, i) {
    if (e) {
      const r = this.resourceMarkers.indexOf(e);
      if (r !== -1)
        if (this.hasSelectedMarkerFor(e)) {
          const s = this.table.getSelection();
          this.table.reveal(s[0], i), t && this.table.setFocus(s);
        } else
          this.table.reveal(r, 0), t && (this.table.setFocus([r]), this.table.setSelection([r]));
    } else
      t && (this.table.setSelection([]), this.table.focusFirst());
  }
  setAriaLabel(e) {
    this.table.domNode.ariaLabel = e;
  }
  setMarkerSelection(e, t) {
    this.isVisible() && (e && e.length > 0 ? (this.table.setSelection(e.map((i) => this.findMarkerIndex(i))), t && t.length > 0 ? this.table.setFocus(t.map((i) => this.findMarkerIndex(i))) : this.table.setFocus([this.findMarkerIndex(e[0])]), this.table.reveal(this.findMarkerIndex(e[0]))) : this.getSelection().length === 0 && this.getVisibleItemCount() > 0 && (this.table.setSelection([0]), this.table.setFocus([0]), this.table.reveal(0)));
  }
  toggleVisibility(e) {
    this.container.classList.toggle("hidden", e);
  }
  update(e) {
    for (const t of e) {
      const i = this.resourceMarkers.indexOf(t);
      this.resourceMarkers.splice(i, 1, t);
    }
    this.reset(this.resourceMarkers);
  }
  updateMarker(e) {
    this.table.rerender();
  }
  findMarkerIndex(e) {
    for (let t = 0; t < this.table.length; t++)
      if (this.table.row(t).marker === e.marker)
        return t;
    return -1;
  }
  hasSelectedMarkerFor(e) {
    const t = this.getSelection();
    return !!(t && t.length > 0 && t[0] instanceof w && e.has(t[0].marker.resource));
  }
};
xe = x([
  d(5, K),
  d(6, Z)
], xe);
function Ze(l) {
  return te.map(l.markers, (e) => {
    const t = te.from(e.relatedInformation), i = te.map(t, (r) => ({ element: r }));
    return { element: e, children: i };
  });
}
let Le = class extends ai {
  constructor(e, t, i, r, s, o, c, m, g, E, M, S, k, F, fe) {
    const ke = new li(a.MARKERS_VIEW_STORAGE_ID, k).getMemento(1, 1);
    super({
      ...e,
      filterOptions: {
        ariaLabel: f.MARKERS_PANEL_FILTER_ARIA_LABEL,
        placeholder: f.MARKERS_PANEL_FILTER_PLACEHOLDER,
        focusContextKey: b.MarkerViewFilterFocusContextKey.key,
        text: ke.filter || "",
        history: ke.filterHistory || []
      }
    }, S, E, s, m, i, t, F, fe, o), this.editorService = r, this.markerService = c, this.workspaceContextService = g, this.uriIdentityService = M, this.lastSelectedRelativeTop = 0, this.currentActiveResource = null, this.onVisibleDisposables = this._register(new re()), this.widgetDisposables = this._register(new re()), this.currentHeight = 0, this.currentWidth = 0, this.cachedFilterStats = void 0, this.currentResourceGotAddedToMarkersData = !1, this.onDidChangeVisibility = this.onDidChangeBodyVisibility, this.panelState = ke, this.markersModel = this._register(t.createInstance(Fi)), this.markersViewModel = this._register(t.createInstance(Re, this.panelState.multiline, this.panelState.viewMode ?? this.getDefaultViewMode())), this._register(this.onDidChangeVisibility((W) => this.onDidChangeMarkersViewVisibility(W))), this._register(this.markersViewModel.onDidChangeViewMode((W) => this.onDidChangeViewMode())), this.widgetAccessibilityProvider = t.createInstance(_e), this.widgetIdentityProvider = { getId(W) {
      return W.id;
    } }, this.setCurrentActiveEditor(), this.filter = new Oi(v.EMPTY(M)), this.rangeHighlightDecorations = this._register(this.instantiationService.createInstance(ci)), this.filters = this._register(new Ti({
      filterHistory: this.panelState.filterHistory || [],
      showErrors: this.panelState.showErrors !== !1,
      showWarnings: this.panelState.showWarnings !== !1,
      showInfos: this.panelState.showInfos !== !1,
      excludedFiles: !!this.panelState.useFilesExclude,
      activeFile: !!this.panelState.activeFile
    }, this.contextKeyService)), this._register(this.configurationService.onDidChangeConfiguration((W) => {
      this.filters.excludedFiles && W.affectsConfiguration("files.exclude") && this.updateFilter();
    }));
  }
  render() {
    super.render(), this._register(hi({
      focusNotifiers: [this, this.filterWidget],
      focusNextWidget: () => {
        this.filterWidget.hasFocus() && this.focus();
      },
      focusPreviousWidget: () => {
        this.filterWidget.hasFocus() || this.focusFilter();
      }
    }));
  }
  renderBody(e) {
    super.renderBody(e), e.classList.add("markers-panel"), this._register(Ee(e, "keydown", (i) => {
      this.keybindingService.mightProducePrintableCharacter(new di(i)) && this.focusFilter();
    }));
    const t = u(e, p(".markers-panel-container"));
    this.createArialLabelElement(t), this.createMessageBox(t), this.widgetContainer = u(t, p(".widget-container")), this.createWidget(this.widgetContainer), this.updateFilter(), this.renderContent();
  }
  getTitle() {
    return f.MARKERS_PANEL_TITLE_PROBLEMS;
  }
  layoutBodyContent(e = this.currentHeight, t = this.currentWidth) {
    this.messageBoxContainer && (this.messageBoxContainer.style.height = `${e}px`), this.widget.layout(e, t), this.currentHeight = e, this.currentWidth = t;
  }
  focus() {
    this.widget.getHTMLElement() !== document.activeElement && (this.hasNoProblems() ? this.messageBoxContainer.focus() : (this.widget.domFocus(), this.widget.setMarkerSelection()));
  }
  focusFilter() {
    this.filterWidget.focus();
  }
  updateBadge(e, t) {
    this.filterWidget.updateBadge(e === t || e === 0 ? void 0 : n("showing filtered problems", "Showing {0} of {1}", t, e));
  }
  checkMoreFilters() {
    this.filterWidget.checkMoreFilters(!this.filters.showErrors || !this.filters.showWarnings || !this.filters.showInfos || this.filters.excludedFiles || this.filters.activeFile);
  }
  clearFilterText() {
    this.filterWidget.setFilterText("");
  }
  showQuickFixes(e) {
    const t = this.markersViewModel.getViewModel(e);
    t && t.quickFixAction.run();
  }
  openFileAtElement(e, t, i, r) {
    const { resource: s, selection: o } = e instanceof w ? { resource: e.resource, selection: e.range } : e instanceof H ? { resource: e.raw.resource, selection: e.raw } : "marker" in e ? { resource: e.marker.resource, selection: e.marker.range } : { resource: null, selection: null };
    return s && o ? (this.editorService.openEditor({
      resource: s,
      options: {
        selection: o,
        preserveFocus: t,
        pinned: r,
        revealIfVisible: !0
      }
    }, i ? ui : dt).then((c) => {
      c && t ? this.rangeHighlightDecorations.highlightRange({ resource: s, range: o }, c.getControl()) : this.rangeHighlightDecorations.removeHighlightRange();
    }), !0) : (this.rangeHighlightDecorations.removeHighlightRange(), !1);
  }
  refreshPanel(e) {
    if (this.isVisible()) {
      const t = this.widget.getSelection().length > 0;
      e ? e instanceof w ? this.widget.updateMarker(e) : e.added.size || e.removed.size ? this.resetWidget() : this.widget.update([...e.updated]) : this.resetWidget(), t && this.widget.setMarkerSelection(), this.cachedFilterStats = void 0;
      const { total: i, filtered: r } = this.getFilterStats();
      this.toggleVisibility(i === 0 || r === 0), this.renderMessage(), this.updateBadge(i, r), this.checkMoreFilters();
    }
  }
  onDidChangeViewState(e) {
    this.refreshPanel(e);
  }
  resetWidget() {
    this.widget.reset(this.getResourceMarkers());
  }
  updateFilter() {
    this.filter.options = new v(
      this.filterWidget.getFilterText(),
      this.getFilesExcludeExpressions(),
      this.filters.showWarnings,
      this.filters.showErrors,
      this.filters.showInfos,
      this.uriIdentityService
    ), this.widget.filterMarkers(this.getResourceMarkers(), this.filter.options), this.cachedFilterStats = void 0;
    const { total: e, filtered: t } = this.getFilterStats();
    this.toggleVisibility(e === 0 || t === 0), this.renderMessage(), this.updateBadge(e, t), this.checkMoreFilters();
  }
  getDefaultViewMode() {
    switch (this.configurationService.getValue("problems.defaultViewMode")) {
      case "table":
        return "table";
      case "tree":
        return "tree";
      default:
        return "tree";
    }
  }
  getFilesExcludeExpressions() {
    if (!this.filters.excludedFiles)
      return [];
    const e = this.workspaceContextService.getWorkspace().folders;
    return e.length ? e.map(
      (t) => ({ root: t.uri, expression: this.getFilesExclude(t.uri) })
    ) : this.getFilesExclude();
  }
  getFilesExclude(e) {
    return mi(this.configurationService.getValue("files.exclude", { resource: e })) || {};
  }
  getResourceMarkers() {
    if (!this.filters.activeFile)
      return this.markersModel.resourceMarkers;
    let e = [];
    if (this.currentActiveResource) {
      const t = this.markersModel.getResourceMarkers(this.currentActiveResource);
      t && (e = [t]);
    }
    return e;
  }
  createMessageBox(e) {
    this.messageBoxContainer = u(e, p(".message-box-container")), this.messageBoxContainer.setAttribute("aria-labelledby", "markers-panel-arialabel");
  }
  createArialLabelElement(e) {
    this.ariaLabelElement = u(e, p("")), this.ariaLabelElement.setAttribute("id", "markers-panel-arialabel");
  }
  createWidget(e) {
    this.widget = this.markersViewModel.viewMode === "table" ? this.createTable(e) : this.createTree(e), this.widgetDisposables.add(this.widget);
    const t = b.MarkerFocusContextKey.bindTo(this.widget.contextKeyService), i = b.RelatedInformationFocusContextKey.bindTo(this.widget.contextKeyService);
    this.widgetDisposables.add(this.widget.onDidChangeFocus((r) => {
      t.set(r.elements.some((s) => s instanceof w)), i.set(r.elements.some((s) => s instanceof H));
    })), this.widgetDisposables.add(T.debounce(this.widget.onDidOpen, (r, s) => s, 75, !0)((r) => {
      this.openFileAtElement(r.element, !!r.editorOptions.preserveFocus, r.sideBySide, !!r.editorOptions.pinned);
    })), this.widgetDisposables.add(T.any(this.widget.onDidChangeSelection, this.widget.onDidChangeFocus)(() => {
      const r = [...this.widget.getSelection(), ...this.widget.getFocus()];
      for (const s of r)
        if (s instanceof w) {
          const o = this.markersViewModel.getViewModel(s);
          o == null || o.showLightBulb();
        }
    })), this.widgetDisposables.add(this.widget.onContextMenu(this.onContextMenu, this)), this.widgetDisposables.add(this.widget.onDidChangeSelection(this.onSelected, this));
  }
  createTable(e) {
    return this.instantiationService.createInstance(xe, u(e, p(".markers-table-container")), this.markersViewModel, this.getResourceMarkers(), this.filter.options, {
      accessibilityProvider: this.widgetAccessibilityProvider,
      dnd: this.instantiationService.createInstance(je, (i) => i instanceof V ? be(i.resource, i.range) : null),
      horizontalScrolling: !1,
      identityProvider: this.widgetIdentityProvider,
      multipleSelectionSupport: !0,
      selectionNavigation: !0
    });
  }
  createTree(e) {
    const t = new gi(), i = this.instantiationService.createInstance(pi, this), r = new oe(this.markersViewModel), s = [
      this.instantiationService.createInstance(Se, i, t.event),
      this.instantiationService.createInstance(Me, this.markersViewModel),
      this.instantiationService.createInstance(Ie)
    ], o = this.instantiationService.createInstance(Fe, "MarkersView", u(e, p(".tree-container.show-file-icons")), r, s, {
      filter: this.filter,
      accessibilityProvider: this.widgetAccessibilityProvider,
      identityProvider: this.widgetIdentityProvider,
      dnd: this.instantiationService.createInstance(je, (c) => c instanceof y ? c.resource : c instanceof w ? be(c.resource, c.range) : c instanceof H ? be(c.raw.resource, c.raw) : null),
      expandOnlyOnTwistieClick: (c) => c instanceof w && c.relatedInformation.length > 0,
      overrideStyles: {
        listBackground: this.getBackgroundColor()
      },
      selectionNavigation: !0,
      multipleSelectionSupport: !0
    });
    return t.input = o.onDidChangeRenderNodeCount, o;
  }
  collapseAll() {
    this.widget.collapseMarkers();
  }
  setMultiline(e) {
    this.markersViewModel.multiline = e;
  }
  setViewMode(e) {
    this.markersViewModel.viewMode = e;
  }
  onDidChangeMarkersViewVisibility(e) {
    if (this.onVisibleDisposables.clear(), e) {
      for (const t of this.reInitialize())
        this.onVisibleDisposables.add(t);
      this.refreshPanel();
    }
  }
  reInitialize() {
    const e = [], t = (i) => this.markerService.read({ resource: i, severities: _.Error | _.Warning | _.Info });
    return this.markersModel.setResourceMarkers(fi(t(), Et).map((i) => [i[0].resource, i])), e.push(T.debounce(this.markerService.onMarkerChanged, (i, r) => (i = i || new et(), r.forEach((s) => i.set(s, s)), i), 64)((i) => {
      this.markersModel.setResourceMarkers([...i.values()].map((r) => [r, t(r)]));
    })), e.push(T.any(this.markersModel.onDidChange, this.editorService.onDidActiveEditorChange)((i) => {
      i ? this.onDidChangeModel(i) : this.onActiveEditorChanged();
    })), e.push(B(() => this.markersModel.reset())), this.markersModel.resourceMarkers.forEach((i) => i.markers.forEach((r) => this.markersViewModel.add(r))), e.push(this.markersViewModel.onDidChange((i) => this.onDidChangeViewState(i))), e.push(B(() => this.markersModel.resourceMarkers.forEach((i) => this.markersViewModel.remove(i.resource)))), e.push(this.filters.onDidChange((i) => {
      i.activeFile ? this.refreshPanel() : (i.excludedFiles || i.showWarnings || i.showErrors || i.showInfos) && this.updateFilter();
    })), e.push(this.filterWidget.onDidChangeFilterText((i) => this.updateFilter())), e.push(B(() => {
      this.cachedFilterStats = void 0;
    })), e.push(B(() => this.rangeHighlightDecorations.removeHighlightRange())), e;
  }
  onDidChangeModel(e) {
    const t = [...e.added, ...e.removed, ...e.updated], i = [];
    for (const { resource: r } of t) {
      this.markersViewModel.remove(r);
      const s = this.markersModel.getResourceMarkers(r);
      if (s)
        for (const o of s.markers)
          this.markersViewModel.add(o);
      i.push(r);
    }
    this.currentResourceGotAddedToMarkersData = this.currentResourceGotAddedToMarkersData || this.isCurrentResourceGotAddedToMarkersData(i), this.refreshPanel(e), this.updateRangeHighlights(), this.currentResourceGotAddedToMarkersData && (this.autoReveal(), this.currentResourceGotAddedToMarkersData = !1);
  }
  onDidChangeViewMode() {
    this.widgetContainer && this.widget && (this.widgetContainer.textContent = "", this.widgetDisposables.clear());
    const e = /* @__PURE__ */ new Set();
    for (const i of this.widget.getSelection())
      i instanceof y ? i.markers.forEach((r) => e.add(r)) : (i instanceof w || i instanceof V) && e.add(i);
    const t = /* @__PURE__ */ new Set();
    for (const i of this.widget.getFocus())
      (i instanceof w || i instanceof V) && t.add(i);
    this.createWidget(this.widgetContainer), this.refreshPanel(), e.size > 0 && (this.widget.setMarkerSelection(Array.from(e), Array.from(t)), this.widget.domFocus());
  }
  isCurrentResourceGotAddedToMarkersData(e) {
    const t = this.currentActiveResource;
    return !t || this.getResourceForCurrentActiveResource() ? !1 : e.some((r) => r.toString() === t.toString());
  }
  onActiveEditorChanged() {
    this.setCurrentActiveEditor(), this.filters.activeFile && this.refreshPanel(), this.autoReveal();
  }
  setCurrentActiveEditor() {
    const e = this.editorService.activeEditor;
    this.currentActiveResource = e ? it(ki.getOriginalUri(e, { supportSideBySide: bi.PRIMARY })) : null;
  }
  onSelected() {
    const e = this.widget.getSelection();
    e && e.length > 0 && (this.lastSelectedRelativeTop = this.widget.getRelativeTop(e[0]) || 0);
  }
  hasNoProblems() {
    const { total: e, filtered: t } = this.getFilterStats();
    return e === 0 || t === 0;
  }
  renderContent() {
    this.cachedFilterStats = void 0, this.resetWidget(), this.toggleVisibility(this.hasNoProblems()), this.renderMessage();
  }
  renderMessage() {
    if (!this.messageBoxContainer || !this.ariaLabelElement)
      return;
    ot(this.messageBoxContainer);
    const { total: e, filtered: t } = this.getFilterStats();
    t === 0 ? (this.messageBoxContainer.style.display = "block", this.messageBoxContainer.setAttribute("tabIndex", "0"), this.filters.activeFile ? this.renderFilterMessageForActiveFile(this.messageBoxContainer) : e > 0 ? this.renderFilteredByFilterMessage(this.messageBoxContainer) : this.renderNoProblemsMessage(this.messageBoxContainer)) : (this.messageBoxContainer.style.display = "none", t === e ? this.setAriaLabel(n("No problems filtered", "Showing {0} problems", e)) : this.setAriaLabel(n("problems filtered", "Showing {0} of {1} problems", t, e)), this.messageBoxContainer.removeAttribute("tabIndex"));
  }
  renderFilterMessageForActiveFile(e) {
    this.currentActiveResource && this.markersModel.getResourceMarkers(this.currentActiveResource) ? this.renderFilteredByFilterMessage(e) : this.renderNoProblemsMessageForActiveFile(e);
  }
  renderFilteredByFilterMessage(e) {
    const t = u(e, p("span"));
    t.textContent = f.MARKERS_PANEL_NO_PROBLEMS_FILTERS;
    const i = u(e, p("a.messageAction"));
    i.textContent = n("clearFilter", "Clear Filters"), i.setAttribute("tabIndex", "0");
    const r = u(e, p("span"));
    r.textContent = ".", Ye(i, se.CLICK, () => this.clearFilters()), Ye(i, se.KEY_DOWN, (s) => {
      (s.equals(3) || s.equals(10)) && (this.clearFilters(), s.stopPropagation());
    }), this.setAriaLabel(f.MARKERS_PANEL_NO_PROBLEMS_FILTERS);
  }
  renderNoProblemsMessageForActiveFile(e) {
    const t = u(e, p("span"));
    t.textContent = f.MARKERS_PANEL_NO_PROBLEMS_ACTIVE_FILE_BUILT, this.setAriaLabel(f.MARKERS_PANEL_NO_PROBLEMS_ACTIVE_FILE_BUILT);
  }
  renderNoProblemsMessage(e) {
    const t = u(e, p("span"));
    t.textContent = f.MARKERS_PANEL_NO_PROBLEMS_BUILT, this.setAriaLabel(f.MARKERS_PANEL_NO_PROBLEMS_BUILT);
  }
  setAriaLabel(e) {
    this.widget.setAriaLabel(e), this.ariaLabelElement.setAttribute("aria-label", e);
  }
  clearFilters() {
    this.filterWidget.setFilterText(""), this.filters.excludedFiles = !1, this.filters.showErrors = !0, this.filters.showWarnings = !0, this.filters.showInfos = !0;
  }
  autoReveal(e = !1) {
    if (this.filters.activeFile)
      return;
    const t = this.configurationService.getValue("problems.autoReveal");
    if (typeof t == "boolean" && t) {
      const i = this.getResourceForCurrentActiveResource();
      this.widget.revealMarkers(i, e, this.lastSelectedRelativeTop);
    }
  }
  getResourceForCurrentActiveResource() {
    return this.currentActiveResource ? this.markersModel.getResourceMarkers(this.currentActiveResource) : null;
  }
  updateRangeHighlights() {
    this.rangeHighlightDecorations.removeHighlightRange(), this.widget.getHTMLElement() === document.activeElement && this.highlightCurrentSelectedMarkerRange();
  }
  highlightCurrentSelectedMarkerRange() {
    const e = this.widget.getSelection() ?? [];
    if (e.length !== 1)
      return;
    const t = e[0];
    t instanceof w && this.rangeHighlightDecorations.highlightRange(t);
  }
  onContextMenu(e) {
    const t = e.element;
    t && (e.browserEvent.preventDefault(), e.browserEvent.stopPropagation(), this.contextMenuService.showContextMenu({
      getAnchor: () => e.anchor,
      menuId: P.ProblemsPanelContext,
      contextKeyService: this.widget.contextKeyService,
      getActions: () => this.getMenuActions(t),
      getActionViewItem: (i) => {
        const r = this.keybindingService.lookupKeybinding(i.id);
        if (r)
          return new Oe(i, i, { label: !0, keybinding: r.getLabel() });
      },
      onHide: (i) => {
        i && this.widget.domFocus();
      }
    }));
  }
  getMenuActions(e) {
    const t = [];
    if (e instanceof w) {
      const i = this.markersViewModel.getViewModel(e);
      if (i) {
        const r = i.quickFixAction.quickFixes;
        r.length && (t.push(...r), t.push(new wi()));
      }
    }
    return t;
  }
  getFocusElement() {
    return this.widget.getFocus()[0] ?? void 0;
  }
  getFocusedSelectedElements() {
    const e = this.getFocusElement();
    if (!e)
      return null;
    const t = this.widget.getSelection();
    if (t.includes(e)) {
      const i = [];
      for (const r of t)
        r && i.push(r);
      return i;
    } else
      return [e];
  }
  getAllResourceMarkers() {
    return this.markersModel.resourceMarkers;
  }
  getFilterStats() {
    var e;
    return this.cachedFilterStats || (this.cachedFilterStats = {
      total: this.markersModel.total,
      filtered: ((e = this.widget) == null ? void 0 : e.getVisibleItemCount()) ?? 0
    }), this.cachedFilterStats;
  }
  toggleVisibility(e) {
    this.widget.toggleVisibility(e), this.layoutBodyContent();
  }
  saveState() {
    this.panelState.filter = this.filterWidget.getFilterText(), this.panelState.filterHistory = this.filters.filterHistory, this.panelState.showErrors = this.filters.showErrors, this.panelState.showWarnings = this.filters.showWarnings, this.panelState.showInfos = this.filters.showInfos, this.panelState.useFilesExclude = this.filters.excludedFiles, this.panelState.activeFile = this.filters.activeFile, this.panelState.multiline = this.markersViewModel.multiline, this.panelState.viewMode = this.markersViewModel.viewMode, super.saveState();
  }
  dispose() {
    super.dispose();
  }
};
Le = x([
  d(1, K),
  d(2, ei),
  d(3, nt),
  d(4, mt),
  d(5, ti),
  d(6, Be),
  d(7, We),
  d(8, ii),
  d(9, st),
  d(10, ri),
  d(11, si),
  d(12, ni),
  d(13, De),
  d(14, gt)
], Le);
let Fe = class extends Ei {
  constructor(e, t, i, r, s, o, c, m, g, E) {
    super(e, t, i, r, s, o, c, m, E), this.container = t, this.visibilityContextKey = b.MarkersTreeVisibilityContextKey.bindTo(c);
  }
  collapseMarkers() {
    this.collapseAll(), this.setSelection([]), this.setFocus([]), this.getHTMLElement().focus(), this.focusFirst();
  }
  filterMarkers() {
    this.refilter();
  }
  getVisibleItemCount() {
    let e = 0;
    const t = this.getNode();
    for (const i of t.children)
      for (const r of i.children)
        i.visible && r.visible && e++;
    return e;
  }
  isVisible() {
    return !this.container.classList.contains("hidden");
  }
  toggleVisibility(e) {
    this.visibilityContextKey.set(!e), this.container.classList.toggle("hidden", e);
  }
  reset(e) {
    this.setChildren(null, te.map(
      e,
      (t) => ({ element: t, children: Ze(t) })
    ));
  }
  revealMarkers(e, t, i) {
    e ? this.hasElement(e) && (!this.isCollapsed(e) && this.hasSelectedMarkerFor(e) ? (this.reveal(this.getSelection()[0], i), t && this.setFocus(this.getSelection())) : (this.expand(e), this.reveal(e, 0), t && (this.setFocus([e]), this.setSelection([e])))) : t && (this.setSelection([]), this.focusFirst());
  }
  setAriaLabel(e) {
    this.ariaLabel = e;
  }
  setMarkerSelection(e, t) {
    if (this.isVisible()) {
      if (e && e.length > 0)
        this.setSelection(e.map((i) => this.findMarkerNode(i))), t && t.length > 0 ? this.setFocus(t.map((i) => this.findMarkerNode(i))) : this.setFocus([this.findMarkerNode(e[0])]), this.reveal(this.findMarkerNode(e[0]));
      else if (this.getSelection().length === 0) {
        const i = this.firstVisibleElement, r = i ? i instanceof y ? i.markers[0] : i instanceof w ? i : void 0 : void 0;
        r && (this.setSelection([r]), this.setFocus([r]), this.reveal(r));
      }
    }
  }
  update(e) {
    for (const t of e)
      this.setChildren(t, Ze(t)), this.rerender(t);
  }
  updateMarker(e) {
    this.rerender(e);
  }
  findMarkerNode(e) {
    for (const t of this.getNode().children)
      for (const i of t.children)
        if (i.element instanceof w && i.element.marker === e.marker)
          return i.element;
    return null;
  }
  hasSelectedMarkerFor(e) {
    const t = this.getSelection();
    return !!(t && t.length > 0 && t[0] instanceof w && e.has(t[0].marker.resource));
  }
  dispose() {
    super.dispose();
  }
  layout(e, t) {
    this.container.style.height = `${e}px`, super.layout(e, t);
  }
};
Fe = x([
  d(5, K),
  d(6, We),
  d(7, oi),
  d(8, gt),
  d(9, mt)
], Fe);
ge.registerCommandAndKeybindingRule({
  id: a.MARKER_OPEN_ACTION_ID,
  weight: 200,
  when: A.and(b.MarkerFocusContextKey),
  primary: 3,
  mac: {
    primary: 3,
    secondary: [2066]
  },
  handler: (l, e) => {
    const t = l.get(Q).getActiveViewWithId(a.MARKERS_VIEW_ID);
    t.openFileAtElement(t.getFocusElement(), !1, !1, !0);
  }
});
ge.registerCommandAndKeybindingRule({
  id: a.MARKER_OPEN_SIDE_ACTION_ID,
  weight: 200,
  when: A.and(b.MarkerFocusContextKey),
  primary: 2051,
  mac: {
    primary: 259
  },
  handler: (l, e) => {
    const t = l.get(Q).getActiveViewWithId(a.MARKERS_VIEW_ID);
    t.openFileAtElement(t.getFocusElement(), !1, !0, !0);
  }
});
ge.registerCommandAndKeybindingRule({
  id: a.MARKER_SHOW_PANEL_ID,
  weight: 200,
  when: void 0,
  primary: void 0,
  handler: async (l, e) => {
    await l.get(Q).openView(a.MARKERS_VIEW_ID);
  }
});
ge.registerCommandAndKeybindingRule({
  id: a.MARKER_SHOW_QUICK_FIX,
  weight: 200,
  when: b.MarkerFocusContextKey,
  primary: 2137,
  handler: (l, e) => {
    const t = l.get(Q).getActiveViewWithId(a.MARKERS_VIEW_ID), i = t.getFocusElement();
    i instanceof w && t.showQuickFixes(i);
  }
});
pe.as(_i.Configuration).registerConfiguration({
  id: "problems",
  order: 101,
  title: f.PROBLEMS_PANEL_CONFIGURATION_TITLE,
  type: "object",
  properties: {
    "problems.autoReveal": {
      description: f.PROBLEMS_PANEL_CONFIGURATION_AUTO_REVEAL,
      type: "boolean",
      default: !0
    },
    "problems.defaultViewMode": {
      description: f.PROBLEMS_PANEL_CONFIGURATION_VIEW_MODE,
      type: "string",
      default: "tree",
      enum: ["table", "tree"]
    },
    "problems.showCurrentInStatus": {
      description: f.PROBLEMS_PANEL_CONFIGURATION_SHOW_CURRENT_STATUS,
      type: "boolean",
      default: !1
    },
    "problems.sortOrder": {
      description: f.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER,
      type: "string",
      default: "severity",
      enum: ["severity", "position"],
      enumDescriptions: [
        f.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_SEVERITY,
        f.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_POSITION
      ]
    }
  }
});
const St = Ke("markers-view-icon", O.warning, n("markersViewIcon", "View icon of the markers view.")), Di = pe.as(pt.ViewContainersRegistry).registerViewContainer({
  id: a.MARKERS_CONTAINER_ID,
  title: f.MARKERS_PANEL_TITLE_PROBLEMS,
  icon: St,
  hideIfEmpty: !0,
  order: 0,
  ctorDescriptor: new ft(
    Si,
    [a.MARKERS_CONTAINER_ID, { mergeViewWithContainerWhenSingleView: !0 }]
  ),
  storageId: a.MARKERS_VIEW_STORAGE_ID
}, 1, { doNotRegisterOpenCommand: !0 });
pe.as(pt.ViewsRegistry).registerViews([{
  id: a.MARKERS_VIEW_ID,
  containerIcon: St,
  name: f.MARKERS_PANEL_TITLE_PROBLEMS,
  canToggleVisibility: !1,
  canMoveView: !0,
  ctorDescriptor: new ft(Le),
  openCommandActionDescriptor: {
    id: "workbench.actions.view.problems",
    mnemonicTitle: n({ key: "miMarker", comment: ["&& denotes a mnemonic"] }, "&&Problems"),
    keybindings: { primary: 3115 },
    order: 0
  }
}], Di);
const Mt = pe.as(Mi.Workbench);
I(class extends R {
  constructor() {
    super({
      id: `workbench.actions.table.${a.MARKERS_VIEW_ID}.viewAsTree`,
      title: n("viewAsTree", "View as Tree"),
      menu: {
        id: P.ViewTitle,
        when: A.and(A.equals("view", a.MARKERS_VIEW_ID), b.MarkersViewModeContextKey.isEqualTo("table")),
        group: "navigation",
        order: 3
      },
      icon: O.listTree,
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    e.setViewMode("tree");
  }
});
I(class extends R {
  constructor() {
    super({
      id: `workbench.actions.table.${a.MARKERS_VIEW_ID}.viewAsTable`,
      title: n("viewAsTable", "View as Table"),
      menu: {
        id: P.ViewTitle,
        when: A.and(A.equals("view", a.MARKERS_VIEW_ID), b.MarkersViewModeContextKey.isEqualTo("tree")),
        group: "navigation",
        order: 3
      },
      icon: O.listFlat,
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    e.setViewMode("table");
  }
});
I(class extends R {
  constructor() {
    super({
      id: `workbench.actions.${a.MARKERS_VIEW_ID}.toggleErrors`,
      title: n("toggle errors", "Toggle Errors"),
      category: n("problems", "Problems"),
      toggled: {
        condition: b.ShowErrorsFilterContextKey,
        title: n("errors", "Show Errors")
      },
      menu: {
        id: ee,
        group: "1_filter",
        when: A.equals("view", a.MARKERS_VIEW_ID),
        order: 1
      },
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    e.filters.showErrors = !e.filters.showErrors;
  }
});
I(class extends R {
  constructor() {
    super({
      id: `workbench.actions.${a.MARKERS_VIEW_ID}.toggleWarnings`,
      title: n("toggle warnings", "Toggle Warnings"),
      category: n("problems", "Problems"),
      toggled: {
        condition: b.ShowWarningsFilterContextKey,
        title: n("warnings", "Show Warnings")
      },
      menu: {
        id: ee,
        group: "1_filter",
        when: A.equals("view", a.MARKERS_VIEW_ID),
        order: 2
      },
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    e.filters.showWarnings = !e.filters.showWarnings;
  }
});
I(class extends R {
  constructor() {
    super({
      id: `workbench.actions.${a.MARKERS_VIEW_ID}.toggleInfos`,
      title: n("toggle infos", "Toggle Infos"),
      category: n("problems", "Problems"),
      toggled: {
        condition: b.ShowInfoFilterContextKey,
        title: n("Infos", "Show Infos")
      },
      menu: {
        id: ee,
        group: "1_filter",
        when: A.equals("view", a.MARKERS_VIEW_ID),
        order: 3
      },
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    e.filters.showInfos = !e.filters.showInfos;
  }
});
I(class extends R {
  constructor() {
    super({
      id: `workbench.actions.${a.MARKERS_VIEW_ID}.toggleActiveFile`,
      title: n("toggle active file", "Toggle Active File"),
      category: n("problems", "Problems"),
      toggled: {
        condition: b.ShowActiveFileFilterContextKey,
        title: n("Active File", "Show Active File Only")
      },
      menu: {
        id: ee,
        group: "2_filter",
        when: A.equals("view", a.MARKERS_VIEW_ID),
        order: 1
      },
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    e.filters.activeFile = !e.filters.activeFile;
  }
});
I(class extends R {
  constructor() {
    super({
      id: `workbench.actions.${a.MARKERS_VIEW_ID}.toggleExcludedFiles`,
      title: n("toggle Excluded Files", "Toggle Excluded Files"),
      category: n("problems", "Problems"),
      toggled: {
        condition: b.ShowExcludedFilesFilterContextKey,
        title: n("Excluded Files", "Hide Excluded Files")
      },
      menu: {
        id: ee,
        group: "2_filter",
        when: A.equals("view", a.MARKERS_VIEW_ID),
        order: 2
      },
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    e.filters.excludedFiles = !e.filters.excludedFiles;
  }
});
I(class extends kt {
  constructor() {
    super({
      id: "workbench.action.problems.focus",
      title: { value: f.MARKERS_PANEL_SHOW_LABEL, original: "Focus Problems (Errors, Warnings, Infos)" },
      category: Ii.View,
      f1: !0
    });
  }
  async run(l) {
    l.get(Q).openView(a.MARKERS_VIEW_ID, !0);
  }
});
I(class extends R {
  constructor() {
    const l = A.and(bt.isEqualTo(a.MARKERS_VIEW_ID), b.MarkersTreeVisibilityContextKey, b.RelatedInformationFocusContextKey.toNegated());
    super({
      id: a.MARKER_COPY_ACTION_ID,
      title: { value: n("copyMarker", "Copy"), original: "Copy" },
      menu: {
        id: P.ProblemsPanelContext,
        when: l,
        group: "navigation"
      },
      keybinding: {
        weight: 200,
        primary: 2081,
        when: l
      },
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    const t = l.get(Ue), i = e.getFocusedSelectedElements() || e.getAllResourceMarkers(), r = [], s = (o) => {
      r.includes(o) || r.push(o);
    };
    for (const o of i)
      o instanceof y ? o.markers.forEach(s) : o instanceof w && s(o);
    r.length && await t.writeText(`[${r}]`);
  }
});
I(class extends R {
  constructor() {
    super({
      id: a.MARKER_COPY_MESSAGE_ACTION_ID,
      title: { value: n("copyMessage", "Copy Message"), original: "Copy Message" },
      menu: {
        id: P.ProblemsPanelContext,
        when: b.MarkerFocusContextKey,
        group: "navigation"
      },
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    const t = l.get(Ue), i = e.getFocusElement();
    i instanceof w && await t.writeText(i.marker.message);
  }
});
I(class extends R {
  constructor() {
    super({
      id: a.RELATED_INFORMATION_COPY_MESSAGE_ACTION_ID,
      title: { value: n("copyMessage", "Copy Message"), original: "Copy Message" },
      menu: {
        id: P.ProblemsPanelContext,
        when: b.RelatedInformationFocusContextKey,
        group: "navigation"
      },
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    const t = l.get(Ue), i = e.getFocusElement();
    i instanceof H && await t.writeText(i.raw.message);
  }
});
I(class extends R {
  constructor() {
    super({
      id: a.FOCUS_PROBLEMS_FROM_FILTER,
      title: n("focusProblemsList", "Focus problems view"),
      keybinding: {
        when: b.MarkerViewFilterFocusContextKey,
        weight: 200,
        primary: 2066
      },
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    e.focus();
  }
});
I(class extends R {
  constructor() {
    super({
      id: a.MARKERS_VIEW_FOCUS_FILTER,
      title: n("focusProblemsFilter", "Focus problems filter"),
      keybinding: {
        when: bt.isEqualTo(a.MARKERS_VIEW_ID),
        weight: 200,
        primary: 2084
      },
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    e.focusFilter();
  }
});
I(class extends R {
  constructor() {
    super({
      id: a.MARKERS_VIEW_SHOW_MULTILINE_MESSAGE,
      title: { value: n("show multiline", "Show message in multiple lines"), original: "Problems: Show message in multiple lines" },
      category: n("problems", "Problems"),
      menu: {
        id: P.CommandPalette,
        when: A.has(wt(a.MARKERS_VIEW_ID))
      },
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    e.setMultiline(!0);
  }
});
I(class extends R {
  constructor() {
    super({
      id: a.MARKERS_VIEW_SHOW_SINGLELINE_MESSAGE,
      title: { value: n("show singleline", "Show message in single line"), original: "Problems: Show message in single line" },
      category: n("problems", "Problems"),
      menu: {
        id: P.CommandPalette,
        when: A.has(wt(a.MARKERS_VIEW_ID))
      },
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    e.setMultiline(!1);
  }
});
I(class extends R {
  constructor() {
    super({
      id: a.MARKERS_VIEW_CLEAR_FILTER_TEXT,
      title: n("clearFiltersText", "Clear filters text"),
      category: n("problems", "Problems"),
      keybinding: {
        when: b.MarkerViewFilterFocusContextKey,
        weight: 200,
        primary: 9
      },
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    e.clearFilterText();
  }
});
I(class extends R {
  constructor() {
    super({
      id: `workbench.actions.treeView.${a.MARKERS_VIEW_ID}.collapseAll`,
      title: n("collapseAll", "Collapse All"),
      menu: {
        id: P.ViewTitle,
        when: A.and(A.equals("view", a.MARKERS_VIEW_ID), b.MarkersViewModeContextKey.isEqualTo("tree")),
        group: "navigation",
        order: 2
      },
      icon: O.collapseAll,
      viewId: a.MARKERS_VIEW_ID
    });
  }
  async runInView(l, e) {
    return e.collapseAll();
  }
});
I(class extends kt {
  constructor() {
    super({
      id: a.TOGGLE_MARKERS_VIEW_ACTION_ID,
      title: f.MARKERS_PANEL_TOGGLE_LABEL
    });
  }
  async run(l) {
    const e = l.get(Q);
    e.isViewVisible(a.MARKERS_VIEW_ID) ? e.closeView(a.MARKERS_VIEW_ID) : e.openView(a.MARKERS_VIEW_ID, !0);
  }
});
let Ce = class extends D {
  constructor(e, t) {
    super(), this.markerService = e, this.statusbarService = t, this.markersStatusItem = this._register(this.statusbarService.addEntry(this.getMarkersItem(), "status.problems", 0, 50)), this.markerService.onMarkerChanged(() => this.markersStatusItem.update(this.getMarkersItem()));
  }
  getMarkersItem() {
    const e = this.markerService.getStatistics(), t = this.getMarkersTooltip(e);
    return {
      name: n("status.problems", "Problems"),
      text: this.getMarkersText(e),
      ariaLabel: t,
      tooltip: t,
      command: "workbench.actions.view.toggleProblems"
    };
  }
  getMarkersTooltip(e) {
    const t = (o) => n("totalErrors", "Errors: {0}", o), i = (o) => n("totalWarnings", "Warnings: {0}", o), r = (o) => n("totalInfos", "Infos: {0}", o), s = [];
    return e.errors > 0 && s.push(t(e.errors)), e.warnings > 0 && s.push(i(e.warnings)), e.infos > 0 && s.push(r(e.infos)), s.length === 0 ? n("noProblems", "No Problems") : s.join(", ");
  }
  getMarkersText(e) {
    const t = [];
    return t.push("$(error) " + this.packNumber(e.errors)), t.push("$(warning) " + this.packNumber(e.warnings)), e.infos > 0 && t.push("$(info) " + this.packNumber(e.infos)), t.join(" ");
  }
  packNumber(e) {
    const t = n("manyProblems", "10K+");
    return e > 9999 ? t : e > 999 ? e.toString().charAt(0) + "K" : e.toString();
  }
};
Ce = x([
  d(0, Be),
  d(1, Ai)
], Ce);
Mt.registerWorkbenchContribution(Ce, 3);
let ye = class extends D {
  constructor(e, t) {
    super(), this.activityService = e, this.markerService = t, this.activity = this._register(new vi()), this._register(this.markerService.onMarkerChanged(() => this.updateBadge())), this.updateBadge();
  }
  updateBadge() {
    const { errors: e, warnings: t, infos: i } = this.markerService.getStatistics(), r = e + t + i, s = n("totalProblems", "Total {0} Problems", r);
    this.activity.value = this.activityService.showViewActivity(a.MARKERS_VIEW_ID, { badge: new xi(r, () => s) });
  }
};
ye = x([
  d(0, Ri),
  d(1, Be)
], ye);
Mt.registerWorkbenchContribution(ye, 3);
function Zi() {
  return {};
}
export {
  Zi as default
};
