import { aZ as c, eL as r, uB as d, bR as l, wh as m, wi as u, eK as b, c0 as g, r0 as k, e0 as w, bf as f } from "./index-7e82f14c.js";
c((n, o) => {
  const a = r(n);
  o.addRule(`.monaco-workbench { background-color: ${a}; }`);
  const s = n.getColor(d);
  if (s && o.addRule(`.monaco-workbench ::selection { background-color: ${s}; }`), l) {
    const t = n.getColor(m);
    if (t) {
      const i = "monaco-workbench-meta-theme-color";
      let e = document.getElementById(i);
      e || (e = u(), e.name = "theme-color", e.id = i), e.content = t.toString();
    }
  }
  b && o.addRule(`
			body.web {
				touch-action: none;
			}
			.monaco-workbench .monaco-editor .view-lines {
				user-select: text;
				-webkit-user-select: text;
			}
		`), g && k() && o.addRule(`body { background-color: ${a}; }`);
});
const h = w ? '"Segoe WPC", "Segoe UI", sans-serif' : f ? "-apple-system, BlinkMacSystemFont, sans-serif" : 'system-ui, "Ubuntu", "Droid Sans", sans-serif';
export {
  h as D
};
