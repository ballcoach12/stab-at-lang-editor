import { _ as i, a as s, e as a, Q as c, eV as d, gn as n, lD as E, gk as S, l as e, cR as p, jA as u, lm as l, dA as v, lE as I } from "./verifyPrepare-778b382e.js";
import { n as g, M as f, o as m } from "./editor-dcf3b6ac.js";
import "./simpleIconLabel-8cfef1f5.js";
let t = class extends m {
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
function D(r) {
  return {
    [S.toString()]: new e(g, void 0, !0),
    [p.toString()]: new e(f, [r, () => !1], !0),
    [u.toString()]: new e(l, [], !1),
    [v.toString()]: new e(t)
  };
}
export {
  f as MonacoEditorService,
  D as default
};
