import { bO as i, aI as u, v1 as d, uG as f, bB as r, p3 as c } from "./verifyPrepare-778b382e.js";
function p(a) {
  const o = [], s = /* @__PURE__ */ new Map(), e = (t, m) => {
    if (!s.has(t) && (s.set(t, !0), !(t[0] === "_" || t.indexOf("vscode.") === 0) && a.get(t) !== !0)) {
      if (!m) {
        const n = r.getCommand(t);
        if (n && typeof n.description == "object" && c(n.description.args))
          return;
      }
      o.push(t);
    }
  };
  for (const t of i.getMenuItems(u.CommandPalette))
    d(t) && e(t.command.id, !0);
  for (const t of f.getEditorActions())
    e(t.id, !0);
  for (const t of r.getCommands().keys())
    e(t, !1);
  return o;
}
export {
  p as g
};
