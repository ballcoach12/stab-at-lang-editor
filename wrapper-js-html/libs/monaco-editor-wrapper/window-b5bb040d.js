import { bh as s, bR as a, bT as r, fk as u } from "./verifyPrepare-778b382e.js";
function f(e) {
  return !!e.workspaceUri;
}
function b(e) {
  return !!e.fileUri;
}
function m(e) {
  const t = l(e), i = e.getValue("window.menuBarVisibility");
  return i === "default" || t === "native" && i === "compact" || s && a ? "classic" : i;
}
function l(e) {
  if (r)
    return "custom";
  const t = e.getValue("window");
  if (t) {
    if (s && t.nativeTabs === !0 || s && t.nativeFullScreen === !1)
      return "native";
    const n = t.titleBarStyle;
    if (n === "native" || n === "custom")
      return n;
  }
  return u ? "native" : "custom";
}
export {
  l as a,
  b,
  m as g,
  f as i
};
