import { _ as i, a as s, e as a, N as c, eT as d, gl as n, lB as E, gi as S, k as e, cP as p, jy as u, lk as l, dy as v, lC as I } from "./index-4b7b8e94.js";
import { n as g, M as f, o as y } from "./editor-af8eadab.js";
import "./simpleIconLabel-ea8c56ba.js";
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
