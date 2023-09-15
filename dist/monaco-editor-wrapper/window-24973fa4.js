import { bf as s, bP as a, bR as r, fi as u } from "./index-4b7b8e94.js";
function f(e) {
  return !!e.workspaceUri;
}
function b(e) {
  return !!e.fileUri;
}
function m(e) {
  const i = l(e), t = e.getValue("window.menuBarVisibility");
  return t === "default" || i === "native" && t === "compact" || s && a ? "classic" : t;
}
function l(e) {
  if (r)
    return "custom";
  const i = e.getValue("window");
  if (i) {
    if (s && i.nativeTabs === !0 || s && i.nativeFullScreen === !1)
      return "native";
    const n = i.titleBarStyle;
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
