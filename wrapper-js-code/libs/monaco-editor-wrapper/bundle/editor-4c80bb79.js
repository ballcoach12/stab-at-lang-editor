import { _ as i, a as s, e as a, N as c, eT as d, gl as n, lB as E, gi as S, k as e, cP as p, jy as u, lk as l, dy as v, lC as I } from "./index-7e82f14c.js";
import { n as g, M as f, o as y } from "./editor-189fe1f4.js";
import "./simpleIconLabel-cbc6bc36.js";
let t = class extends y {
  constructor(o) {
    super(o.createInstance(I), o);
  }
};
t = i([
  s(0, a)
], t);
c.as(d.EditorFactory).registerFileEditorFactory({
  typeId: n,
  createFileEditor: E,
  isFileEditor: (r) => !1
});
function G(r) {
  return {
    [S.toString()]: new e(g, void 0, !0),
    [p.toString()]: new e(f, [r, () => !1], !0),
    [u.toString()]: new e(l, [], !1),
    [v.toString()]: new e(t)
  };
}
export {
  f as MonacoEditorService,
  G as default
};
