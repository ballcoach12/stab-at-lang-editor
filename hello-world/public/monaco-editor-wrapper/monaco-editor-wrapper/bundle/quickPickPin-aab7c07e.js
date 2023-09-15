import { c3 as t, B as e, bi as s, au as g } from "./index-4b7b8e94.js";
t("extensions-view-icon", s.extensions, e("extensionsViewIcon", "View icon of the extensions view."));
const E = t("extensions-manage", s.gear, e(
  "manageExtensionIcon",
  "Icon for the 'Manage' action in the extensions view."
));
t("extensions-clear-search-results", s.clearAll, e(
  "clearSearchResultsIcon",
  "Icon for the 'Clear Search Result' action in the extensions view."
));
t("extensions-refresh", s.refresh, e("refreshIcon", "Icon for the 'Refresh' action in the extensions view."));
const F = t("extensions-filter", s.filter, e("filterIcon", "Icon for the 'Filter' action in the extensions view."));
t("extensions-install-local-in-remote", s.cloudDownload, e(
  "installLocalInRemoteIcon",
  "Icon for the 'Install Local Extension in Remote' action in the extensions view."
));
t("extensions-install-workspace-recommended", s.cloudDownload, e(
  "installWorkspaceRecommendedIcon",
  "Icon for the 'Install Workspace Recommended Extensions' action in the extensions view."
));
t("extensions-configure-recommended", s.pencil, e(
  "configureRecommendedIcon",
  "Icon for the 'Configure Recommended Extensions' action in the extensions view."
));
const W = t("extensions-sync-enabled", s.sync, e("syncEnabledIcon", "Icon to indicate that an extension is synced.")), D = t("extensions-sync-ignored", s.syncIgnored, e(
  "syncIgnoredIcon",
  "Icon to indicate that an extension is ignored when syncing."
));
t("extensions-remote", s.remote, e(
  "remoteIcon",
  "Icon to indicate that an extension is remote in the extensions view and editor."
));
t("extensions-install-count", s.cloudDownload, e(
  "installCountIcon",
  "Icon shown along with the install count in the extensions view and editor."
));
t("extensions-rating", s.star, e(
  "ratingIcon",
  "Icon shown along with the rating in the extensions view and editor."
));
t("extensions-verified-publisher", s.verifiedFilled, e(
  "verifiedPublisher",
  "Icon used for the verified extension publisher in the extensions view and editor."
));
const N = t("extensions-pre-release", s.versions, e(
  "preReleaseIcon",
  "Icon shown for extensions having pre-release versions in extensions view and editor."
));
t("extensions-sponsor", s.heartFilled, e(
  "sponsorIcon",
  "Icon used for sponsoring extensions in the extensions view and editor."
));
t("extensions-star-full", s.starFull, e(
  "starFullIcon",
  "Full star icon used for the rating in the extensions editor."
));
t("extensions-star-half", s.starHalf, e(
  "starHalfIcon",
  "Half star icon used for the rating in the extensions editor."
));
t("extensions-star-empty", s.starEmpty, e(
  "starEmptyIcon",
  "Empty star icon used for the rating in the extensions editor."
));
const T = t("extensions-error-message", s.error, e("errorIcon", "Icon shown with a error message in the extensions editor.")), V = t("extensions-warning-message", s.warning, e(
  "warningIcon",
  "Icon shown with a warning message in the extensions editor."
)), H = t("extensions-info-message", s.info, e("infoIcon", "Icon shown with an info message in the extensions editor.")), O = t("extension-workspace-trust", s.shield, e(
  "trustIcon",
  "Icon shown with a workspace trust message in the extension editor."
));
t("extension-activation-time", s.history, e(
  "activationtimeIcon",
  "Icon shown with a activation time message in the extension editor."
));
const v = g.asClassName(s.pin), x = g.asClassName(s.pinned), y = [v, x];
async function $(o, i, n, l) {
  const a = n.items;
  let c = u(i, n, o, void 0, l);
  n.onDidTriggerItemButton(async (r) => {
    r.button.iconClass && y.includes(r.button.iconClass) && (n.items = a, c = u(i, n, o, r.item, l), n.items = n.value ? a : c);
  }), n.onDidChangeValue(async (r) => {
    n.items === c && r ? n.items = a : n.items === a && !r && (n.items = c);
  }), n.items = n.value ? a : c, n.show();
}
function u(o, i, n, l, a) {
  const c = [];
  let r;
  l ? r = R(o, l, n) : r = C(o, n), r.length && c.push({ type: "separator", label: e("terminal.commands.pinned", "pinned") });
  const f = /* @__PURE__ */ new Set();
  for (const h of r) {
    const I = i.items.find((m) => b(m, h));
    if (I) {
      const m = d(I), p = Object.assign({}, I);
      (!a || !f.has(m)) && (f.add(m), w(p, !1), c.push(p));
    }
  }
  for (const h of i.items)
    w(h, !0), c.push(h);
  return c;
}
function d(o) {
  return o.type === "separator" ? "" : o.id || `${o.label}${o.description}${o.detail}}`;
}
function w(o, i) {
  var l;
  if (o.type === "separator")
    return;
  const n = ((l = o.buttons) == null ? void 0 : l.filter((a) => a.iconClass && !y.includes(a.iconClass))) ?? [];
  n.unshift({
    iconClass: i ? v : x,
    tooltip: i ? e("pinCommand", "Pin command") : e("pinnedCommand", "Pinned command"),
    alwaysVisible: !1
  }), o.buttons = n;
}
function b(o, i) {
  return d(o) === d(i);
}
function R(o, i, n) {
  var c;
  const l = (c = i.buttons) == null ? void 0 : c.find((r) => r.iconClass === x);
  let a = C(o, n);
  return l ? a = a.filter((r) => d(r) !== d(i)) : a.push(i), n.store(o, JSON.stringify(a), 1, 1), a;
}
function C(o, i) {
  const n = i.get(o, 1);
  return n ? JSON.parse(n) : [];
}
export {
  W as a,
  $ as b,
  T as e,
  F as f,
  H as i,
  E as m,
  N as p,
  D as s,
  O as t,
  V as w
};
