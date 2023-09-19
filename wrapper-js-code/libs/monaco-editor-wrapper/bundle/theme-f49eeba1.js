import { cT as Q, eM as Me, pk as Ae, pl as Pt, pm as Ot, pn as Lt, po as Ht, pp as Mt, pq as At, pr as Ft, ps as Nt, pt as $t, pu as jt, pv as Ut, pw as qt, px as Gt, N as se, py as zt, ap as J, pz as Ie, pA as Ze, pB as pe, pC as Bt, pD as Vt, pE as le, pF as Wt, pG as Xe, pH as F, ip as k, pI as ke, pJ as we, pK as xe, pL as Kt, pM as je, fb as Jt, pN as Ue, B as r, pO as qe, pP as Ge, ao as Y, cJ as be, c9 as D, pQ as de, pR as Yt, pS as Zt, pT as ze, c5 as ue, pU as Be, pV as yt, iU as Ve, pW as Ee, E as ge, pX as Qe, hY as Xt, bR as Ct, pY as v, pZ as y, p_ as et, au as tt, p$ as Qt, q0 as en, _ as tn, a as L, ah as nn, aa as on, aL as sn, aI as rn, q1 as an, g as cn, q2 as hn, ac as ln, aX as dn, q3 as un, q4 as fn, bE as mn, q5 as _e, q6 as pn, q7 as gn, d7 as Tn, d0 as yn, q8 as Cn, bc as Sn, ky as In, q9 as bn, qa as nt, at as En, d as ot, qb as kn, ae as wn, k as xn } from "./index-7e82f14c.js";
const Fe = {};
function R(s, e) {
  let t = Fe[s];
  t || (Fe[s] = t = []), t.push(e);
}
function St(s, e) {
  for (const t of s)
    if (e.textMateRules.push(t), !t.scope) {
      const n = t.settings;
      if (!n)
        t.settings = {};
      else
        for (const o in n) {
          const i = o, a = Fe[i];
          if (a) {
            const c = n[i];
            if (typeof c == "string") {
              const l = Q.fromHex(c);
              for (const u of a)
                e.colors[u] = l;
            }
          }
          i !== "foreground" && i !== "background" && i !== "fontStyle" && delete n[i];
        }
    }
}
R("background", Me);
R("foreground", Ae);
R("selection", Pt);
R("inactiveSelection", Ot);
R("selectionHighlightColor", Lt);
R("findMatchHighlight", Ht);
R("currentFindMatchHighlight", Mt);
R("hoverHighlight", At);
R("wordHighlight", "editor.wordHighlightBackground");
R("wordHighlightStrong", "editor.wordHighlightStrongBackground");
R("findRangeHighlight", Ft);
R("findMatchHighlight", "peekViewResult.matchHighlightBackground");
R("referenceHighlight", "peekViewEditor.matchHighlightBackground");
R("lineHighlight", Nt);
R("rangeHighlight", $t);
R("caret", jt);
R("invisibles", Ut);
R("guide", qt);
R("activeGuide", Gt);
const Rn = [
  "ansiBlack",
  "ansiRed",
  "ansiGreen",
  "ansiYellow",
  "ansiBlue",
  "ansiMagenta",
  "ansiCyan",
  "ansiWhite",
  "ansiBrightBlack",
  "ansiBrightRed",
  "ansiBrightGreen",
  "ansiBrightYellow",
  "ansiBrightBlue",
  "ansiBrightMagenta",
  "ansiBrightCyan",
  "ansiBrightWhite"
];
for (const s of Rn)
  R(s, "terminal." + s);
function vn(s) {
  return _n(s, null, null);
}
function _n(s, e, t) {
  const n = s.length;
  let o = 0, i = 1, a = 0;
  n > 0 && s.charCodeAt(0) === 65279 && (o = 1);
  function c(h) {
    if (t === null)
      o = o + h;
    else
      for (; h > 0; )
        s.charCodeAt(o) === 10 ? (o++, i++, a = 0) : (o++, a++), h--;
  }
  function l(h) {
    t === null ? o = h : c(h - o);
  }
  function u() {
    for (; o < n; ) {
      const h = s.charCodeAt(o);
      if (h !== 32 && h !== 9 && h !== 13 && h !== 10)
        break;
      c(1);
    }
  }
  function f(h) {
    return s.substr(o, h.length) === h ? (c(h.length), !0) : !1;
  }
  function p(h) {
    const E = s.indexOf(h, o);
    l(E !== -1 ? E + h.length : n);
  }
  function C(h) {
    const E = s.indexOf(h, o);
    if (E !== -1) {
      const x = s.substring(o, E);
      return l(E + h.length), x;
    } else {
      const x = s.substr(o);
      return l(n), x;
    }
  }
  let d = 0, g = null;
  const T = [], S = [];
  let m = null;
  function I(h, E) {
    T.push(d), S.push(g), d = h, g = E;
  }
  function P() {
    if (T.length === 0)
      return b("illegal state stack");
    d = T.pop(), g = S.pop();
  }
  function b(h) {
    throw new Error("Near offset " + o + ": " + h + " ~~~" + s.substr(o, 50) + "~~~");
  }
  const Z = {
    enterDict: function() {
      if (m === null)
        return b("missing <key>");
      const h = {};
      t !== null && (h[t] = {
        filename: e,
        line: i,
        char: a
      }), g[m] = h, m = null, I(1, h);
    },
    enterArray: function() {
      if (m === null)
        return b("missing <key>");
      const h = [];
      g[m] = h, m = null, I(2, h);
    }
  }, N = {
    enterDict: function() {
      const h = {};
      t !== null && (h[t] = {
        filename: e,
        line: i,
        char: a
      }), g.push(h), I(1, h);
    },
    enterArray: function() {
      const h = [];
      g.push(h), I(2, h);
    }
  };
  function z() {
    d === 1 ? Z.enterDict() : d === 2 ? N.enterDict() : (g = {}, t !== null && (g[t] = {
      filename: e,
      line: i,
      char: a
    }), I(1, g));
  }
  function O() {
    if (d === 1)
      P();
    else
      return b("unexpected </dict>");
  }
  function ae() {
    d === 1 ? Z.enterArray() : d === 2 ? N.enterArray() : (g = [], I(2, g));
  }
  function oe() {
    if (d === 1)
      return b("unexpected </array>");
    if (d === 2)
      P();
    else
      return b("unexpected </array>");
  }
  function _(h) {
    if (d === 1) {
      if (m !== null)
        return b("too many <key>");
      m = h;
    } else
      return b("unexpected <key>");
  }
  function w(h) {
    if (d === 1) {
      if (m === null)
        return b("missing <key>");
      g[m] = h, m = null;
    } else
      d === 2 ? g.push(h) : g = h;
  }
  function $(h) {
    if (isNaN(h))
      return b("cannot parse float");
    if (d === 1) {
      if (m === null)
        return b("missing <key>");
      g[m] = h, m = null;
    } else
      d === 2 ? g.push(h) : g = h;
  }
  function j(h) {
    if (isNaN(h))
      return b("cannot parse integer");
    if (d === 1) {
      if (m === null)
        return b("missing <key>");
      g[m] = h, m = null;
    } else
      d === 2 ? g.push(h) : g = h;
  }
  function U(h) {
    if (d === 1) {
      if (m === null)
        return b("missing <key>");
      g[m] = h, m = null;
    } else
      d === 2 ? g.push(h) : g = h;
  }
  function vt(h) {
    if (d === 1) {
      if (m === null)
        return b("missing <key>");
      g[m] = h, m = null;
    } else
      d === 2 ? g.push(h) : g = h;
  }
  function Ye(h) {
    if (d === 1) {
      if (m === null)
        return b("missing <key>");
      g[m] = h, m = null;
    } else
      d === 2 ? g.push(h) : g = h;
  }
  function _t(h) {
    return h.replace(/&#([0-9]+);/g, function(E, x) {
      return String.fromCodePoint(parseInt(x, 10));
    }).replace(/&#x([0-9a-f]+);/g, function(E, x) {
      return String.fromCodePoint(parseInt(x, 16));
    }).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, function(E) {
      switch (E) {
        case "&amp;":
          return "&";
        case "&lt;":
          return "<";
        case "&gt;":
          return ">";
        case "&quot;":
          return '"';
        case "&apos;":
          return "'";
      }
      return E;
    });
  }
  function Dt() {
    let h = C(">"), E = !1;
    return h.charCodeAt(h.length - 1) === 47 && (E = !0, h = h.substring(0, h.length - 1)), {
      name: h.trim(),
      isClosed: E
    };
  }
  function B(h) {
    if (h.isClosed)
      return "";
    const E = C("</");
    return p(">"), _t(E);
  }
  for (; o < n && (u(), !(o >= n)); ) {
    const h = s.charCodeAt(o);
    if (c(1), h !== 60)
      return b("expected <");
    if (o >= n)
      return b("unexpected end of input");
    const E = s.charCodeAt(o);
    if (E === 63) {
      c(1), p("?>");
      continue;
    }
    if (E === 33) {
      if (c(1), f("--")) {
        p("-->");
        continue;
      }
      p(">");
      continue;
    }
    if (E === 47) {
      if (c(1), u(), f("plist")) {
        p(">");
        continue;
      }
      if (f("dict")) {
        p(">"), O();
        continue;
      }
      if (f("array")) {
        p(">"), oe();
        continue;
      }
      return b("unexpected closed tag");
    }
    const x = Dt();
    switch (x.name) {
      case "dict":
        z(), x.isClosed && O();
        continue;
      case "array":
        ae(), x.isClosed && oe();
        continue;
      case "key":
        _(B(x));
        continue;
      case "string":
        w(B(x));
        continue;
      case "real":
        $(parseFloat(B(x)));
        continue;
      case "integer":
        j(parseInt(B(x), 10));
        continue;
      case "date":
        U(new Date(B(x)));
        continue;
      case "data":
        vt(B(x));
        continue;
      case "true":
        B(x), Ye(!0);
        continue;
      case "false":
        B(x), Ye(!1);
        continue;
    }
    if (!/^plist/.test(x.name))
      return b("unexpected opened tag " + x.name);
  }
  return g;
}
function it(s, e, t) {
  const n = Dn(s);
  let o = n.next();
  for (; o !== null; ) {
    let l = 0;
    if (o.length === 2 && o.charAt(1) === ":") {
      switch (o.charAt(0)) {
        case "R":
          l = 1;
          break;
        case "L":
          l = -1;
          break;
        default:
          console.log(`Unknown priority ${o} in scope selector`);
      }
      o = n.next();
    }
    const u = a();
    if (u && t.push({ matcher: u, priority: l }), o !== ",")
      break;
    o = n.next();
  }
  function i() {
    if (o === "-") {
      o = n.next();
      const l = i();
      return l ? (u) => l(u) < 0 ? 0 : -1 : null;
    }
    if (o === "(") {
      o = n.next();
      const l = c();
      return o === ")" && (o = n.next()), l;
    }
    if (st(o)) {
      const l = [];
      do
        l.push(o), o = n.next();
      while (st(o));
      return (u) => e(l, u);
    }
    return null;
  }
  function a() {
    let l = i();
    if (!l)
      return null;
    const u = [];
    for (; l; )
      u.push(l), l = i();
    return (f) => {
      let p = u[0](f);
      for (let C = 1; p >= 0 && C < u.length; C++)
        p = Math.min(p, u[C](f));
      return p;
    };
  }
  function c() {
    let l = a();
    if (!l)
      return null;
    const u = [];
    for (; l && (u.push(l), o === "|" || o === ","); ) {
      do
        o = n.next();
      while (o === "|" || o === ",");
      l = a();
    }
    return (f) => {
      let p = u[0](f);
      for (let C = 1; C < u.length; C++)
        p = Math.max(p, u[C](f));
      return p;
    };
  }
}
function st(s) {
  return !!s && !!s.match(/[\w\.:]+/);
}
function Dn(s) {
  const e = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g;
  let t = e.exec(s);
  return {
    next: () => {
      if (!t)
        return null;
      const n = t[0];
      return t = e.exec(s), n;
    }
  };
}
const Pn = se.as(zt.ColorContribution), Te = Yt(), rt = {
  comments: ["comment", "punctuation.definition.comment"],
  strings: ["string", "meta.embedded.assembly"],
  keywords: ["keyword - keyword.operator", "keyword.control", "storage", "storage.type"],
  numbers: ["constant.numeric"],
  types: ["entity.name.type", "entity.name.class", "support.type", "support.class"],
  functions: ["entity.name.function", "support.function"],
  variables: ["variable", "entity.name.variable"]
}, A = class A {
  constructor(e, t, n) {
    this.themeTokenColors = [], this.customTokenColors = [], this.colorMap = {}, this.customColorMap = {}, this.semanticTokenRules = [], this.customSemanticTokenRules = [], this.textMateThemingRules = void 0, this.tokenColorIndex = void 0, this.id = e, this.label = t, this.settingsId = n, this.isLoaded = !1;
  }
  get semanticHighlighting() {
    return this.customSemanticHighlighting !== void 0 ? this.customSemanticHighlighting : this.customSemanticHighlightingDeprecated !== void 0 ? this.customSemanticHighlightingDeprecated : !!this.themeSemanticHighlighting;
  }
  get tokenColors() {
    if (!this.textMateThemingRules) {
      let i = function(a) {
        a.scope && a.settings && (a.scope === "token.info-token" && (o = !0), e.push({ scope: a.scope, settings: { foreground: ie(a.settings.foreground), background: ie(a.settings.background), fontStyle: a.settings.fontStyle } }));
      };
      const e = [], t = this.getColor(Ae) || this.getDefault(Ae), n = this.getColor(Me) || this.getDefault(Me);
      e.push({
        settings: {
          foreground: ie(t),
          background: ie(n)
        }
      });
      let o = !1;
      this.themeTokenColors.forEach(i), this.customTokenColors.forEach(i), o || Ln[this.type].forEach(i), this.textMateThemingRules = e;
    }
    return this.textMateThemingRules;
  }
  getColor(e, t) {
    let n = this.customColorMap[e];
    return n || (n = this.colorMap[e], t !== !1 && J(n) && (n = this.getDefault(e)), n);
  }
  getTokenStyle(e, t, n, o = !0, i = {}) {
    const a = {
      foreground: void 0,
      bold: void 0,
      underline: void 0,
      strikethrough: void 0,
      italic: void 0
    }, c = {
      foreground: -1,
      bold: -1,
      underline: -1,
      strikethrough: -1,
      italic: -1
    };
    function l(p, C, d) {
      C.foreground && c.foreground <= p && (c.foreground = p, a.foreground = C.foreground, i.foreground = d);
      for (const g of ["bold", "underline", "strikethrough", "italic"]) {
        const T = g, S = C[T];
        S !== void 0 && c[T] <= p && (c[T] = p, a[T] = S, i[T] = d);
      }
    }
    function u(p) {
      const C = p.selector.match(e, t, n);
      C >= 0 && l(C, p.style, p);
    }
    this.semanticTokenRules.forEach(u), this.customSemanticTokenRules.forEach(u);
    let f = !1;
    for (const p in c) {
      const C = p;
      c[C] === -1 ? f = !0 : c[C] = Number.MAX_VALUE;
    }
    if (f)
      for (const p of Te.getTokenStylingDefaultRules()) {
        const C = p.selector.match(e, t, n);
        if (C >= 0) {
          let d;
          if (p.defaults.scopesToProbe && (d = this.resolveScopes(p.defaults.scopesToProbe), d && l(C, d, p.defaults.scopesToProbe)), !d && o !== !1) {
            const g = p.defaults[this.type];
            d = this.resolveTokenStyleValue(g), d && l(C, d, g);
          }
        }
      }
    return Ie.fromData(a);
  }
  resolveTokenStyleValue(e) {
    if (e !== void 0) {
      if (typeof e == "string") {
        const { type: t, modifiers: n, language: o } = Ze(e, "");
        return this.getTokenStyle(t, n, o);
      } else if (typeof e == "object")
        return e;
    }
  }
  getTokenColorIndex() {
    if (!this.tokenColorIndex) {
      const e = new An();
      this.tokenColors.forEach((t) => {
        e.add(t.settings.foreground), e.add(t.settings.background);
      }), this.semanticTokenRules.forEach((t) => e.add(t.style.foreground)), Te.getTokenStylingDefaultRules().forEach((t) => {
        const n = t.defaults[this.type];
        n && typeof n == "object" && e.add(n.foreground);
      }), this.customSemanticTokenRules.forEach((t) => e.add(t.style.foreground)), this.tokenColorIndex = e;
    }
    return this.tokenColorIndex;
  }
  get tokenColorMap() {
    return this.getTokenColorIndex().asArray();
  }
  getTokenStyleMetadata(e, t, n, o = !0, i = {}) {
    const { type: a, language: c } = Ze(e, n), l = this.getTokenStyle(a, t, c, o, i);
    if (l)
      return {
        foreground: this.getTokenColorIndex().get(l.foreground),
        bold: l.bold,
        underline: l.underline,
        strikethrough: l.strikethrough,
        italic: l.italic
      };
  }
  getTokenStylingRuleScope(e) {
    if (this.customSemanticTokenRules.indexOf(e) !== -1)
      return "setting";
    if (this.semanticTokenRules.indexOf(e) !== -1)
      return "theme";
  }
  getDefault(e) {
    return Pn.resolveDefaultColor(e, this);
  }
  resolveScopes(e, t) {
    this.themeTokenScopeMatchers || (this.themeTokenScopeMatchers = this.themeTokenColors.map(lt)), this.customTokenScopeMatchers || (this.customTokenScopeMatchers = this.customTokenColors.map(lt));
    for (const n of e) {
      let f = function(p, C) {
        for (let d = 0; d < p.length; d++) {
          const g = p[d](n);
          if (g >= 0) {
            const T = C[d], S = C[d].settings;
            g >= a && S.foreground && (o = S.foreground, a = g, u = T), g >= c && D(S.fontStyle) && (i = S.fontStyle, c = g, l = T);
          }
        }
      }, o, i, a = -1, c = -1, l, u;
      if (f(this.themeTokenScopeMatchers, this.themeTokenColors), f(this.customTokenScopeMatchers, this.customTokenColors), o !== void 0 || i !== void 0)
        return t && (t.foreground = u, t.bold = t.italic = t.underline = t.strikethrough = l, t.scope = n), Ie.fromSettings(o, i);
    }
  }
  defines(e) {
    return this.customColorMap.hasOwnProperty(e) || this.colorMap.hasOwnProperty(e);
  }
  setCustomizations(e) {
    this.setCustomColors(e.colorCustomizations), this.setCustomTokenColors(e.tokenColorCustomizations), this.setCustomSemanticTokenColors(e.semanticTokenColorCustomizations);
  }
  setCustomColors(e) {
    this.customColorMap = {}, this.overwriteCustomColors(e);
    const t = this.getThemeSpecificColors(e);
    pe(t) && this.overwriteCustomColors(t), this.tokenColorIndex = void 0, this.textMateThemingRules = void 0, this.customTokenScopeMatchers = void 0;
  }
  overwriteCustomColors(e) {
    for (const t in e) {
      const n = e[t];
      typeof n == "string" && (this.customColorMap[t] = Q.fromHex(n));
    }
  }
  setCustomTokenColors(e) {
    this.customTokenColors = [], this.customSemanticHighlightingDeprecated = void 0, this.addCustomTokenColors(e);
    const t = this.getThemeSpecificColors(e);
    pe(t) && this.addCustomTokenColors(t), this.tokenColorIndex = void 0, this.textMateThemingRules = void 0, this.customTokenScopeMatchers = void 0;
  }
  setCustomSemanticTokenColors(e) {
    if (this.customSemanticTokenRules = [], this.customSemanticHighlighting = void 0, e) {
      this.customSemanticHighlighting = e.enabled, e.rules && this.readSemanticTokenRules(e.rules);
      const t = this.getThemeSpecificColors(e);
      pe(t) && (t.enabled !== void 0 && (this.customSemanticHighlighting = t.enabled), t.rules && this.readSemanticTokenRules(t.rules));
    }
    this.tokenColorIndex = void 0, this.textMateThemingRules = void 0;
  }
  isThemeScope(e) {
    return e.charAt(0) === Bt && e.charAt(e.length - 1) === Vt;
  }
  isThemeScopeMatch(e) {
    const t = e.charAt(0), n = e.charAt(e.length - 1), o = e.slice(0, -1), i = e.slice(1, -1), a = e.slice(1);
    return e === this.settingsId || this.settingsId.includes(i) && t === le && n === le || this.settingsId.startsWith(o) && n === le || this.settingsId.endsWith(a) && t === le;
  }
  getThemeSpecificColors(e) {
    let t;
    for (const n in e) {
      const o = e[n];
      if (this.isThemeScope(n) && o instanceof Object && !Array.isArray(o)) {
        const i = n.match(Wt) || [];
        for (const a of i) {
          const c = a.substring(1, a.length - 1);
          if (this.isThemeScopeMatch(c)) {
            t || (t = {});
            const l = o;
            for (const u in l) {
              const f = t[u], p = l[u];
              Array.isArray(f) && Array.isArray(p) ? t[u] = f.concat(p) : p && (t[u] = p);
            }
          }
        }
      }
    }
    return t;
  }
  readSemanticTokenRules(e) {
    for (const t in e)
      if (!this.isThemeScope(t))
        try {
          const n = bt(t, e[t]);
          n && this.customSemanticTokenRules.push(n);
        } catch {
        }
  }
  addCustomTokenColors(e) {
    for (const t in rt) {
      const n = t, o = e[n];
      if (o) {
        const i = typeof o == "string" ? { foreground: o } : o, a = rt[n];
        for (const c of a)
          this.customTokenColors.push({ scope: c, settings: i });
      }
    }
    if (Array.isArray(e.textMateRules))
      for (const t of e.textMateRules)
        t.scope && t.settings && this.customTokenColors.push(t);
    e.semanticHighlighting !== void 0 && (this.customSemanticHighlightingDeprecated = e.semanticHighlighting);
  }
  ensureLoaded(e) {
    return this.isLoaded ? Promise.resolve(void 0) : this.load(e);
  }
  reload(e) {
    return this.load(e);
  }
  load(e) {
    if (!this.location)
      return Promise.resolve(void 0);
    this.themeTokenColors = [], this.clearCaches();
    const t = {
      colors: {},
      textMateRules: [],
      semanticTokenRules: [],
      semanticHighlighting: !1
    };
    return It(e, this.location, t).then((n) => {
      this.isLoaded = !0, this.semanticTokenRules = t.semanticTokenRules, this.colorMap = t.colors, this.themeTokenColors = t.textMateRules, this.themeSemanticHighlighting = t.semanticHighlighting;
    });
  }
  clearCaches() {
    this.tokenColorIndex = void 0, this.textMateThemingRules = void 0, this.themeTokenScopeMatchers = void 0, this.customTokenScopeMatchers = void 0;
  }
  toStorage(e) {
    const t = {};
    for (const o in this.colorMap)
      t[o] = Q.Format.CSS.formatHexA(this.colorMap[o], !0);
    const n = JSON.stringify({
      id: this.id,
      label: this.label,
      settingsId: this.settingsId,
      themeTokenColors: this.themeTokenColors.map((o) => ({ settings: o.settings, scope: o.scope })),
      semanticTokenRules: this.semanticTokenRules.map(Xe.toJSONObject),
      extensionData: F.toJSONObject(this.extensionData),
      themeSemanticHighlighting: this.themeSemanticHighlighting,
      colorMap: t,
      watch: this.watch
    });
    e.store(A.STORAGE_KEY, n, 0, 0);
  }
  get baseTheme() {
    return this.classNames[0];
  }
  get classNames() {
    return this.id.split(" ");
  }
  get type() {
    switch (this.baseTheme) {
      case xe:
        return k.LIGHT;
      case we:
        return k.HIGH_CONTRAST_DARK;
      case ke:
        return k.HIGH_CONTRAST_LIGHT;
      default:
        return k.DARK;
    }
  }
  static createUnloadedThemeForThemeType(e, t) {
    return A.createUnloadedTheme(Kt(e), t);
  }
  static createUnloadedTheme(e, t) {
    const n = new A(e, "", "__" + e);
    if (n.isLoaded = !1, n.themeTokenColors = [], n.watch = !1, t)
      for (const o in t)
        n.colorMap[o] = Q.fromHex(t[o]);
    return n;
  }
  static createLoadedEmptyTheme(e, t) {
    const n = new A(e, "", t);
    return n.isLoaded = !0, n.themeTokenColors = [], n.watch = !1, n;
  }
  static fromStorageData(e) {
    const t = e.get(A.STORAGE_KEY, 0);
    if (t)
      try {
        const n = JSON.parse(t), o = new A("", "", "");
        for (const i in n)
          switch (i) {
            case "colorMap": {
              const a = n[i];
              for (const c in a)
                o.colorMap[c] = Q.fromHex(a[c]);
              break;
            }
            case "themeTokenColors":
            case "id":
            case "label":
            case "settingsId":
            case "watch":
            case "themeSemanticHighlighting":
              o[i] = n[i];
              break;
            case "semanticTokenRules": {
              const a = n[i];
              if (Array.isArray(a))
                for (const c of a) {
                  const l = Xe.fromJSONObject(Te, c);
                  l && o.semanticTokenRules.push(l);
                }
              break;
            }
            case "location":
              break;
            case "extensionData":
              o.extensionData = F.fromJSONObject(n.extensionData);
              break;
          }
        return !o.id || !o.settingsId ? void 0 : o;
      } catch {
        return;
      }
  }
  static fromExtensionTheme(e, t, n) {
    const o = e.uiTheme || "vs-dark", i = On(n.extensionId, e.path), a = `${o} ${i}`, c = e.label || je(e.path), l = e.id || c, u = new A(a, c, l);
    return u.description = e.description, u.watch = e._watch === !0, u.location = t, u.extensionData = n, u.isLoaded = !1, u;
  }
};
A.STORAGE_KEY = "colorThemeData";
let q = A;
function On(s, e) {
  e.startsWith("./") && (e = e.substr(2));
  let t = `${s}-${e}`;
  return t = t.replace(/[^_a-zA-Z0-9-]/g, "-"), t.charAt(0).match(/[0-9-]/) && (t = "_" + t), t;
}
async function It(s, e, t) {
  if (Jt(e) === ".json") {
    const n = await s.readExtensionResource(e), o = [], i = Ue(n, o);
    if (o.length > 0)
      return Promise.reject(new Error(r(
        "error.cannotparsejson",
        "Problems parsing JSON theme file: {0}",
        o.map((u) => qe(u.error)).join(", ")
      )));
    if (Ge(i) !== "object")
      return Promise.reject(new Error(r(
        "error.invalidformat",
        "Invalid format for JSON theme file: Object expected."
      )));
    if (i.include && await It(s, Y(be(e), i.include), t), Array.isArray(i.settings))
      return St(i.settings, t), null;
    t.semanticHighlighting = t.semanticHighlighting || i.semanticHighlighting;
    const a = i.colors;
    if (a) {
      if (typeof a != "object")
        return Promise.reject(new Error(r(
          { key: "error.invalidformat.colors", comment: ["{0} will be replaced by a path. Values in quotes should not be translated."] },
          "Problem parsing color theme file: {0}. Property 'colors' is not of type 'object'.",
          e.toString()
        )));
      for (const u in a)
        typeof a[u] == "string" && (t.colors[u] = Q.fromHex(a[u]));
    }
    const c = i.tokenColors;
    if (c)
      if (Array.isArray(c))
        t.textMateRules.push(...c);
      else if (typeof c == "string")
        await at(s, Y(be(e), c), t);
      else
        return Promise.reject(new Error(r(
          { key: "error.invalidformat.tokenColors", comment: ["{0} will be replaced by a path. Values in quotes should not be translated."] },
          "Problem parsing color theme file: {0}. Property 'tokenColors' should be either an array specifying colors or a path to a TextMate theme file",
          e.toString()
        )));
    const l = i.semanticTokenColors;
    if (l && typeof l == "object")
      for (const u in l)
        try {
          const f = bt(u, l[u]);
          f && t.semanticTokenRules.push(f);
        } catch {
          return Promise.reject(new Error(r(
            { key: "error.invalidformat.semanticTokenColors", comment: ["{0} will be replaced by a path. Values in quotes should not be translated."] },
            "Problem parsing color theme file: {0}. Property 'semanticTokenColors' contains a invalid selector",
            e.toString()
          )));
        }
  } else
    return at(s, e, t);
}
function at(s, e, t) {
  return s.readExtensionResource(e).then((n) => {
    try {
      const i = vn(n).settings;
      return Array.isArray(i) ? (St(i, t), Promise.resolve(null)) : Promise.reject(new Error(r(
        "error.plist.invalidformat",
        "Problem parsing tmTheme file: {0}. 'settings' is not array."
      )));
    } catch (o) {
      return Promise.reject(new Error(r("error.cannotparse", "Problems parsing tmTheme file: {0}", o.message)));
    }
  }, (n) => Promise.reject(new Error(r(
    "error.cannotload",
    "Problems loading tmTheme file {0}: {1}",
    e.toString(),
    n.message
  ))));
}
const Ln = {
  light: [
    { scope: "token.info-token", settings: { foreground: "#316bcd" } },
    { scope: "token.warn-token", settings: { foreground: "#cd9731" } },
    { scope: "token.error-token", settings: { foreground: "#cd3131" } },
    { scope: "token.debug-token", settings: { foreground: "#800080" } }
  ],
  dark: [
    { scope: "token.info-token", settings: { foreground: "#6796e6" } },
    { scope: "token.warn-token", settings: { foreground: "#cd9731" } },
    { scope: "token.error-token", settings: { foreground: "#f44747" } },
    { scope: "token.debug-token", settings: { foreground: "#b267e6" } }
  ],
  hcLight: [
    { scope: "token.info-token", settings: { foreground: "#316bcd" } },
    { scope: "token.warn-token", settings: { foreground: "#cd9731" } },
    { scope: "token.error-token", settings: { foreground: "#cd3131" } },
    { scope: "token.debug-token", settings: { foreground: "#800080" } }
  ],
  hcDark: [
    { scope: "token.info-token", settings: { foreground: "#6796e6" } },
    { scope: "token.warn-token", settings: { foreground: "#008000" } },
    { scope: "token.error-token", settings: { foreground: "#FF0000" } },
    { scope: "token.debug-token", settings: { foreground: "#b267e6" } }
  ]
}, ct = (s) => -1;
function ht(s, e) {
  function t(i, a) {
    for (let c = a - 1; c >= 0; c--)
      if (Hn(i, s[c]))
        return c;
    return -1;
  }
  if (e.length < s.length)
    return -1;
  let n = e.length - 1, o = t(e[n--], s.length);
  if (o >= 0) {
    const i = (o + 1) * 65536 + s[o].length;
    for (; n >= 0; )
      if (o = t(e[n--], o), o === -1)
        return -1;
    return i;
  }
  return -1;
}
function Hn(s, e) {
  if (!s)
    return !1;
  if (s === e)
    return !0;
  const t = e.length;
  return s.length > t && s.substr(0, t) === e && s[t] === ".";
}
function lt(s) {
  const e = s.scope;
  if (!e || !s.settings)
    return ct;
  const t = [];
  if (Array.isArray(e))
    for (const n of e)
      it(n, ht, t);
  else
    it(e, ht, t);
  return t.length === 0 ? ct : (n) => {
    let o = t[0].matcher(n);
    for (let i = 1; i < t.length; i++)
      o = Math.max(o, t[i].matcher(n));
    return o;
  };
}
function bt(s, e) {
  const t = Te.parseTokenSelector(s);
  let n;
  if (typeof e == "string" ? n = Ie.fromSettings(e, void 0) : Mn(e) && (n = Ie.fromSettings(e.foreground, e.fontStyle, e.bold, e.underline, e.strikethrough, e.italic)), n)
    return { selector: t, style: n };
}
function Mn(s) {
  return s && (D(s.foreground) || D(s.fontStyle) || de(s.italic) || de(s.underline) || de(s.strikethrough) || de(s.bold));
}
class An {
  constructor() {
    this._lastColorId = 0, this._id2color = [], this._color2id = /* @__PURE__ */ Object.create(null);
  }
  add(e) {
    if (e = ie(e), e === void 0)
      return 0;
    let t = this._color2id[e];
    return t || (t = ++this._lastColorId, this._color2id[e] = t, this._id2color[t] = e, t);
  }
  get(e) {
    if (e = ie(e), e === void 0)
      return 0;
    const t = this._color2id[e];
    return t || (console.log(`Color ${e} not in index.`), 0);
  }
  asArray() {
    return this._id2color.slice(0);
  }
}
function ie(s) {
  if (!s)
    return;
  typeof s != "string" && (s = Q.Format.CSS.formatHexA(s, !0));
  const e = s.length;
  if (s.charCodeAt(0) !== 35 || e !== 4 && e !== 5 && e !== 7 && e !== 9)
    return;
  const t = [35];
  for (let n = 1; n < e; n++) {
    const o = Fn(s.charCodeAt(n));
    if (!o)
      return;
    t.push(o), (e === 4 || e === 5) && t.push(o);
  }
  return t.length === 9 && t[7] === 70 && t[8] === 70 && (t.length = 7), String.fromCharCode(...t);
}
function Fn(s) {
  return s >= 48 && s <= 57 || s >= 65 && s <= 70 ? s : s >= 97 && s <= 102 ? s - 97 + 65 : 0;
}
const We = "^([\\w_-]+)$", Ke = "^(normal|italic|(oblique[ \\w\\s-]+))$", Je = "^(normal|bold|lighter|bolder|(\\d{0-1000}))$", dt = "^([\\w .%_-]+)$", Nn = "^woff|woff2|truetype|opentype|embedded-opentype|svg$", $n = "vscode://schemas/product-icon-theme", jn = {
  type: "object",
  allowComments: !0,
  allowTrailingCommas: !0,
  properties: {
    fonts: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: r("schema.id", "The ID of the font."),
            pattern: We,
            patternErrorMessage: r(
              "schema.id.formatError",
              "The ID must only contain letters, numbers, underscore and minus."
            )
          },
          src: {
            type: "array",
            description: r("schema.src", "The location of the font."),
            items: {
              type: "object",
              properties: {
                path: {
                  type: "string",
                  description: r(
                    "schema.font-path",
                    "The font path, relative to the current product icon theme file."
                  )
                },
                format: {
                  type: "string",
                  description: r("schema.font-format", "The format of the font."),
                  enum: ["woff", "woff2", "truetype", "opentype", "embedded-opentype", "svg"]
                }
              },
              required: [
                "path",
                "format"
              ]
            }
          },
          weight: {
            type: "string",
            description: r(
              "schema.font-weight",
              "The weight of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight for valid values."
            ),
            anyOf: [
              { enum: ["normal", "bold", "lighter", "bolder"] },
              { type: "string", pattern: Je }
            ]
          },
          style: {
            type: "string",
            description: r(
              "schema.font-style",
              "The style of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-style for valid values."
            ),
            anyOf: [
              { enum: ["normal", "italic", "oblique"] },
              { type: "string", pattern: Ke }
            ]
          }
        },
        required: [
          "id",
          "src"
        ]
      }
    },
    iconDefinitions: {
      description: r("schema.iconDefinitions", "Association of icon name to a font character."),
      $ref: Zt
    }
  }
};
function Un() {
  se.as(ze.JSONContribution).registerSchema($n, jn);
}
const qn = "vscode://schemas/icon-theme", Gn = {
  type: "object",
  allowComments: !0,
  allowTrailingCommas: !0,
  definitions: {
    folderExpanded: {
      type: "string",
      description: r(
        "schema.folderExpanded",
        "The folder icon for expanded folders. The expanded folder icon is optional. If not set, the icon defined for folder will be shown."
      )
    },
    folder: {
      type: "string",
      description: r(
        "schema.folder",
        "The folder icon for collapsed folders, and if folderExpanded is not set, also for expanded folders."
      )
    },
    file: {
      type: "string",
      description: r(
        "schema.file",
        "The default file icon, shown for all files that don't match any extension, filename or language id."
      )
    },
    folderNames: {
      type: "object",
      description: r(
        "schema.folderNames",
        "Associates folder names to icons. The object key is the folder name, not including any path segments. No patterns or wildcards are allowed. Folder name matching is case insensitive."
      ),
      additionalProperties: {
        type: "string",
        description: r("schema.folderName", "The ID of the icon definition for the association.")
      }
    },
    folderNamesExpanded: {
      type: "object",
      description: r(
        "schema.folderNamesExpanded",
        "Associates folder names to icons for expanded folders. The object key is the folder name, not including any path segments. No patterns or wildcards are allowed. Folder name matching is case insensitive."
      ),
      additionalProperties: {
        type: "string",
        description: r(
          "schema.folderNameExpanded",
          "The ID of the icon definition for the association."
        )
      }
    },
    fileExtensions: {
      type: "object",
      description: r(
        "schema.fileExtensions",
        "Associates file extensions to icons. The object key is the file extension name. The extension name is the last segment of a file name after the last dot (not including the dot). Extensions are compared case insensitive."
      ),
      additionalProperties: {
        type: "string",
        description: r(
          "schema.fileExtension",
          "The ID of the icon definition for the association."
        )
      }
    },
    fileNames: {
      type: "object",
      description: r(
        "schema.fileNames",
        "Associates file names to icons. The object key is the full file name, but not including any path segments. File name can include dots and a possible file extension. No patterns or wildcards are allowed. File name matching is case insensitive."
      ),
      additionalProperties: {
        type: "string",
        description: r("schema.fileName", "The ID of the icon definition for the association.")
      }
    },
    languageIds: {
      type: "object",
      description: r(
        "schema.languageIds",
        "Associates languages to icons. The object key is the language id as defined in the language contribution point."
      ),
      additionalProperties: {
        type: "string",
        description: r("schema.languageId", "The ID of the icon definition for the association.")
      }
    },
    associations: {
      type: "object",
      properties: {
        folderExpanded: {
          $ref: "#/definitions/folderExpanded"
        },
        folder: {
          $ref: "#/definitions/folder"
        },
        file: {
          $ref: "#/definitions/file"
        },
        folderNames: {
          $ref: "#/definitions/folderNames"
        },
        folderNamesExpanded: {
          $ref: "#/definitions/folderNamesExpanded"
        },
        fileExtensions: {
          $ref: "#/definitions/fileExtensions"
        },
        fileNames: {
          $ref: "#/definitions/fileNames"
        },
        languageIds: {
          $ref: "#/definitions/languageIds"
        }
      }
    }
  },
  properties: {
    fonts: {
      type: "array",
      description: r("schema.fonts", "Fonts that are used in the icon definitions."),
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: r("schema.id", "The ID of the font."),
            pattern: We,
            patternErrorMessage: r(
              "schema.id.formatError",
              "The ID must only contain letter, numbers, underscore and minus."
            )
          },
          src: {
            type: "array",
            description: r("schema.src", "The location of the font."),
            items: {
              type: "object",
              properties: {
                path: {
                  type: "string",
                  description: r(
                    "schema.font-path",
                    "The font path, relative to the current file icon theme file."
                  )
                },
                format: {
                  type: "string",
                  description: r("schema.font-format", "The format of the font."),
                  enum: ["woff", "woff2", "truetype", "opentype", "embedded-opentype", "svg"]
                }
              },
              required: [
                "path",
                "format"
              ]
            }
          },
          weight: {
            type: "string",
            description: r(
              "schema.font-weight",
              "The weight of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight for valid values."
            ),
            pattern: Je
          },
          style: {
            type: "string",
            description: r(
              "schema.font-style",
              "The style of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-style for valid values."
            ),
            pattern: Ke
          },
          size: {
            type: "string",
            description: r(
              "schema.font-size",
              "The default size of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-size for valid values."
            ),
            pattern: dt
          }
        },
        required: [
          "id",
          "src"
        ]
      }
    },
    iconDefinitions: {
      type: "object",
      description: r(
        "schema.iconDefinitions",
        "Description of all icons that can be used when associating files to icons."
      ),
      additionalProperties: {
        type: "object",
        description: r(
          "schema.iconDefinition",
          "An icon definition. The object key is the ID of the definition."
        ),
        properties: {
          iconPath: {
            type: "string",
            description: r(
              "schema.iconPath",
              "When using a SVG or PNG: The path to the image. The path is relative to the icon set file."
            )
          },
          fontCharacter: {
            type: "string",
            description: r(
              "schema.fontCharacter",
              "When using a glyph font: The character in the font to use."
            )
          },
          fontColor: {
            type: "string",
            format: "color-hex",
            description: r("schema.fontColor", "When using a glyph font: The color to use.")
          },
          fontSize: {
            type: "string",
            description: r(
              "schema.fontSize",
              "When using a font: The font size in percentage to the text font. If not set, defaults to the size in the font definition."
            ),
            pattern: dt
          },
          fontId: {
            type: "string",
            description: r(
              "schema.fontId",
              "When using a font: The id of the font. If not set, defaults to the first font definition."
            )
          }
        }
      }
    },
    folderExpanded: {
      $ref: "#/definitions/folderExpanded"
    },
    folder: {
      $ref: "#/definitions/folder"
    },
    file: {
      $ref: "#/definitions/file"
    },
    folderNames: {
      $ref: "#/definitions/folderNames"
    },
    folderNamesExpanded: {
      $ref: "#/definitions/folderNamesExpanded"
    },
    fileExtensions: {
      $ref: "#/definitions/fileExtensions"
    },
    fileNames: {
      $ref: "#/definitions/fileNames"
    },
    languageIds: {
      $ref: "#/definitions/languageIds"
    },
    light: {
      $ref: "#/definitions/associations",
      description: r(
        "schema.light",
        "Optional associations for file icons in light color themes."
      )
    },
    highContrast: {
      $ref: "#/definitions/associations",
      description: r(
        "schema.highContrast",
        "Optional associations for file icons in high contrast color themes."
      )
    },
    hidesExplorerArrows: {
      type: "boolean",
      description: r(
        "schema.hidesExplorerArrows",
        "Configures whether the file explorer's arrows should be hidden when this theme is active."
      )
    },
    showLanguageModeIcons: {
      type: "boolean",
      description: r(
        "schema.showLanguageModeIcons",
        "Configures whether the default language icons should be used if the theme does not define an icon for a language."
      )
    }
  }
};
function zn() {
  se.as(ze.JSONContribution).registerSchema(qn, Gn);
}
const H = class H {
  constructor(e, t, n) {
    this.id = e, this.label = t, this.settingsId = n, this.isLoaded = !1, this.hasFileIcons = !1, this.hasFolderIcons = !1, this.hidesExplorerArrows = !1;
  }
  ensureLoaded(e) {
    return this.isLoaded ? Promise.resolve(this.styleSheetContent) : this.load(e);
  }
  reload(e) {
    return this.load(e);
  }
  load(e) {
    return e.load(this);
  }
  static fromExtensionTheme(e, t, n) {
    const o = n.extensionId + "-" + e.id, i = e.label || je(e.path), a = e.id, c = new H(o, i, a);
    return c.description = e.description, c.location = t, c.extensionData = n, c.watch = e._watch, c.isLoaded = !1, c;
  }
  static get noIconTheme() {
    let e = H._noIconTheme;
    return e || (e = H._noIconTheme = new H("", "", null), e.hasFileIcons = !1, e.hasFolderIcons = !1, e.hidesExplorerArrows = !1, e.isLoaded = !0, e.extensionData = void 0, e.watch = !1), e;
  }
  static createUnloadedTheme(e) {
    const t = new H(e, "", "__" + e);
    return t.isLoaded = !1, t.hasFileIcons = !1, t.hasFolderIcons = !1, t.hidesExplorerArrows = !1, t.extensionData = void 0, t.watch = !1, t;
  }
  static fromStorageData(e) {
    const t = e.get(H.STORAGE_KEY, 0);
    if (t)
      try {
        const n = JSON.parse(t), o = new H("", "", null);
        for (const i in n)
          switch (i) {
            case "id":
            case "label":
            case "description":
            case "settingsId":
            case "styleSheetContent":
            case "hasFileIcons":
            case "hidesExplorerArrows":
            case "hasFolderIcons":
            case "watch":
              o[i] = n[i];
              break;
            case "location":
              break;
            case "extensionData":
              o.extensionData = F.fromJSONObject(n.extensionData);
              break;
          }
        return o;
      } catch {
        return;
      }
  }
  toStorage(e) {
    const t = JSON.stringify({
      id: this.id,
      label: this.label,
      description: this.description,
      settingsId: this.settingsId,
      styleSheetContent: this.styleSheetContent,
      hasFileIcons: this.hasFileIcons,
      hasFolderIcons: this.hasFolderIcons,
      hidesExplorerArrows: this.hidesExplorerArrows,
      extensionData: F.toJSONObject(this.extensionData),
      watch: this.watch
    });
    e.store(H.STORAGE_KEY, t, 0, 1);
  }
};
H.STORAGE_KEY = "iconThemeData", H._noIconTheme = null;
let W = H;
class Bn {
  constructor(e, t) {
    this.fileService = e, this.languageService = t;
  }
  load(e) {
    return e.location ? this.loadIconThemeDocument(e.location).then((t) => {
      const n = this.processIconThemeDocument(e.id, e.location, t);
      return e.styleSheetContent = n.content, e.hasFileIcons = n.hasFileIcons, e.hasFolderIcons = n.hasFolderIcons, e.hidesExplorerArrows = n.hidesExplorerArrows, e.isLoaded = !0, e.styleSheetContent;
    }) : Promise.resolve(e.styleSheetContent);
  }
  loadIconThemeDocument(e) {
    return this.fileService.readExtensionResource(e).then((t) => {
      const n = [], o = Ue(t, n);
      return n.length > 0 ? Promise.reject(new Error(r(
        "error.cannotparseicontheme",
        "Problems parsing file icons file: {0}",
        n.map((i) => qe(i.error)).join(", ")
      ))) : Ge(o) !== "object" ? Promise.reject(new Error(r(
        "error.invalidformat",
        "Invalid format for file icons theme file: Object expected."
      ))) : Promise.resolve(o);
    });
  }
  processIconThemeDocument(e, t, n) {
    const o = { content: "", hasFileIcons: !1, hasFolderIcons: !1, hidesExplorerArrows: !!n.hidesExplorerArrows };
    let i = !1;
    if (!n.iconDefinitions)
      return o;
    const a = {}, c = {}, l = be(t);
    function u(T) {
      return Y(l, T);
    }
    function f(T, S) {
      function m(I, P) {
        if (P) {
          let b = a[P];
          b || (b = a[P] = []), b.push(I);
        }
      }
      if (T) {
        let I = ".show-file-icons";
        S && (I = S + " " + I);
        const P = ".monaco-tl-twistie.collapsible:not(.collapsed) + .monaco-tl-contents";
        T.folder && (m(`${I} .folder-icon::before`, T.folder), o.hasFolderIcons = !0), T.folderExpanded && (m(`${I} ${P} .folder-icon::before`, T.folderExpanded), o.hasFolderIcons = !0);
        const b = T.rootFolder || T.folder, Z = T.rootFolderExpanded || T.folderExpanded;
        b && (m(`${I} .rootfolder-icon::before`, b), o.hasFolderIcons = !0), Z && (m(`${I} ${P} .rootfolder-icon::before`, Z), o.hasFolderIcons = !0), T.file && (m(`${I} .file-icon::before`, T.file), o.hasFileIcons = !0);
        const N = T.folderNames;
        if (N)
          for (const _ in N) {
            const w = [], $ = fe(_.toLowerCase(), w);
            w.push(`.${V($)}-name-folder-icon`), m(`${I} ${w.join("")}.folder-icon::before`, N[_]), o.hasFolderIcons = !0;
          }
        const z = T.folderNamesExpanded;
        if (z)
          for (const _ in z) {
            const w = [], $ = fe(_.toLowerCase(), w);
            w.push(`.${V($)}-name-folder-icon`), m(`${I} ${P} ${w.join("")}.folder-icon::before`, z[_]), o.hasFolderIcons = !0;
          }
        const O = T.languageIds;
        if (O) {
          !O.jsonc && O.json && (O.jsonc = O.json);
          for (const _ in O)
            m(`${I} .${V(_)}-lang-file-icon.file-icon::before`, O[_]), o.hasFileIcons = !0, i = !0, c[_] = !0;
        }
        const ae = T.fileExtensions;
        if (ae)
          for (const _ in ae) {
            const w = [], j = fe(_.toLowerCase(), w).split(".");
            if (j.length) {
              for (let U = 0; U < j.length; U++)
                w.push(`.${V(j.slice(U).join("."))}-ext-file-icon`);
              w.push(".ext-file-icon");
            }
            m(`${I} ${w.join("")}.file-icon::before`, ae[_]), o.hasFileIcons = !0, i = !0;
          }
        const oe = T.fileNames;
        if (oe)
          for (const _ in oe) {
            const w = [], $ = fe(_.toLowerCase(), w);
            w.push(`.${V($)}-name-file-icon`), w.push(".name-file-icon");
            const j = $.split(".");
            if (j.length) {
              for (let U = 1; U < j.length; U++)
                w.push(`.${V(j.slice(U).join("."))}-ext-file-icon`);
              w.push(".ext-file-icon");
            }
            m(`${I} ${w.join("")}.file-icon::before`, oe[_]), o.hasFileIcons = !0, i = !0;
          }
      }
    }
    if (f(n), f(n.light, ".vs"), f(n.highContrast, ".hc-black"), f(n.highContrast, ".hc-light"), !o.hasFileIcons && !o.hasFolderIcons)
      return o;
    const p = n.showLanguageModeIcons === !0 || i && n.showLanguageModeIcons !== !1, C = [], d = n.fonts, g = /* @__PURE__ */ new Map();
    if (Array.isArray(d)) {
      const T = d[0].size || "150%";
      d.forEach((S) => {
        const m = S.src.map((I) => `${ue(u(I.path))} format('${I.format}')`).join(", ");
        C.push(`@font-face { src: ${m}; font-family: '${S.id}'; font-weight: ${S.weight}; font-style: ${S.style}; font-display: block; }`), S.size !== void 0 && S.size !== T && g.set(S.id, S.size);
      }), C.push(`.show-file-icons .file-icon::before, .show-file-icons .folder-icon::before, .show-file-icons .rootfolder-icon::before { font-family: '${d[0].id}'; font-size: ${T}; }`);
    }
    for (const T in a) {
      const S = a[T], m = n.iconDefinitions[T];
      if (m) {
        if (m.iconPath)
          C.push(`${S.join(", ")} { content: ' '; background-image: ${ue(u(m.iconPath))}; }`);
        else if (m.fontCharacter || m.fontColor) {
          const I = [];
          m.fontColor && I.push(`color: ${m.fontColor};`), m.fontCharacter && I.push(`content: '${m.fontCharacter}';`);
          const P = m.fontSize ?? (m.fontId ? g.get(m.fontId) : void 0);
          P && I.push(`font-size: ${P};`), m.fontId && I.push(`font-family: ${m.fontId};`), p && I.push("background-image: unset;"), C.push(`${S.join(", ")} { ${I.join(" ")} }`);
        }
      }
    }
    if (p) {
      for (const T of this.languageService.getRegisteredLanguageIds())
        if (!c[T]) {
          const S = this.languageService.getIcon(T);
          if (S) {
            const m = `.show-file-icons .${V(T)}-lang-file-icon.file-icon::before`;
            C.push(`${m} { content: ' '; background-image: ${ue(S.dark)}; }`), C.push(`.vs ${m} { content: ' '; background-image: ${ue(S.light)}; }`);
          }
        }
    }
    return o.content = C.join(`
`), o;
  }
}
function fe(s, e) {
  const t = s.lastIndexOf("/");
  if (t >= 0) {
    const n = s.substring(0, t);
    return e.push(`.${V(n)}-name-dir-icon`), s.substring(t + 1);
  }
  return s;
}
function V(s) {
  return s = s.replace(/[\11\12\14\15\40]/g, "/"), window.CSS.escape(s);
}
const ut = [
  "comment",
  "comment.block",
  "comment.block.documentation",
  "comment.line",
  "constant",
  "constant.character",
  "constant.character.escape",
  "constant.numeric",
  "constant.numeric.integer",
  "constant.numeric.float",
  "constant.numeric.hex",
  "constant.numeric.octal",
  "constant.other",
  "constant.regexp",
  "constant.rgb-value",
  "emphasis",
  "entity",
  "entity.name",
  "entity.name.class",
  "entity.name.function",
  "entity.name.method",
  "entity.name.section",
  "entity.name.selector",
  "entity.name.tag",
  "entity.name.type",
  "entity.other",
  "entity.other.attribute-name",
  "entity.other.inherited-class",
  "invalid",
  "invalid.deprecated",
  "invalid.illegal",
  "keyword",
  "keyword.control",
  "keyword.operator",
  "keyword.operator.new",
  "keyword.operator.assignment",
  "keyword.operator.arithmetic",
  "keyword.operator.logical",
  "keyword.other",
  "markup",
  "markup.bold",
  "markup.changed",
  "markup.deleted",
  "markup.heading",
  "markup.inline.raw",
  "markup.inserted",
  "markup.italic",
  "markup.list",
  "markup.list.numbered",
  "markup.list.unnumbered",
  "markup.other",
  "markup.quote",
  "markup.raw",
  "markup.underline",
  "markup.underline.link",
  "meta",
  "meta.block",
  "meta.cast",
  "meta.class",
  "meta.function",
  "meta.function-call",
  "meta.preprocessor",
  "meta.return-type",
  "meta.selector",
  "meta.tag",
  "meta.type.annotation",
  "meta.type",
  "punctuation.definition.string.begin",
  "punctuation.definition.string.end",
  "punctuation.separator",
  "punctuation.separator.continuation",
  "punctuation.terminator",
  "storage",
  "storage.modifier",
  "storage.type",
  "string",
  "string.interpolated",
  "string.other",
  "string.quoted",
  "string.quoted.double",
  "string.quoted.other",
  "string.quoted.single",
  "string.quoted.triple",
  "string.regexp",
  "string.unquoted",
  "strong",
  "support",
  "support.class",
  "support.constant",
  "support.function",
  "support.other",
  "support.type",
  "support.type.property-name",
  "support.variable",
  "variable",
  "variable.language",
  "variable.name",
  "variable.other",
  "variable.other.readwrite",
  "variable.parameter"
], Re = "vscode://schemas/textmate-colors", Vn = `${Re}#/definitions/colorGroup`, Wn = {
  type: "array",
  definitions: {
    colorGroup: {
      default: "#FF0000",
      anyOf: [
        {
          type: "string",
          format: "color-hex"
        },
        {
          $ref: "#/definitions/settings"
        }
      ]
    },
    settings: {
      type: "object",
      description: r("schema.token.settings", "Colors and styles for the token."),
      properties: {
        foreground: {
          type: "string",
          description: r("schema.token.foreground", "Foreground color for the token."),
          format: "color-hex",
          default: "#ff0000"
        },
        background: {
          type: "string",
          deprecationMessage: r(
            "schema.token.background.warning",
            "Token background colors are currently not supported."
          )
        },
        fontStyle: {
          type: "string",
          description: r(
            "schema.token.fontStyle",
            "Font style of the rule: 'italic', 'bold', 'underline', 'strikethrough' or a combination. The empty string unsets inherited settings."
          ),
          pattern: "^(\\s*\\b(italic|bold|underline|strikethrough))*\\s*$",
          patternErrorMessage: r(
            "schema.fontStyle.error",
            "Font style must be 'italic', 'bold', 'underline', 'strikethrough' or a combination or the empty string."
          ),
          defaultSnippets: [
            { label: r("schema.token.fontStyle.none", "None (clear inherited style)"), bodyText: '""' },
            { body: "italic" },
            { body: "bold" },
            { body: "underline" },
            { body: "strikethrough" },
            { body: "italic bold" },
            { body: "italic underline" },
            { body: "italic strikethrough" },
            { body: "bold underline" },
            { body: "bold strikethrough" },
            { body: "underline strikethrough" },
            { body: "italic bold underline" },
            { body: "italic bold strikethrough" },
            { body: "italic underline strikethrough" },
            { body: "bold underline strikethrough" },
            { body: "italic bold underline strikethrough" }
          ]
        }
      },
      additionalProperties: !1,
      defaultSnippets: [{ body: { foreground: "${1:#FF0000}", fontStyle: "${2:bold}" } }]
    }
  },
  items: {
    type: "object",
    defaultSnippets: [{ body: { scope: "${1:keyword.operator}", settings: { foreground: "${2:#FF0000}" } } }],
    properties: {
      name: {
        type: "string",
        description: r("schema.properties.name", "Description of the rule.")
      },
      scope: {
        description: r(
          "schema.properties.scope",
          "Scope selector against which this rule matches."
        ),
        anyOf: [
          {
            enum: ut
          },
          {
            type: "string"
          },
          {
            type: "array",
            items: {
              enum: ut
            }
          },
          {
            type: "array",
            items: {
              type: "string"
            }
          }
        ]
      },
      settings: {
        $ref: "#/definitions/settings"
      }
    },
    required: [
      "settings"
    ],
    additionalProperties: !1
  }
}, Kn = "vscode://schemas/color-theme", Jn = {
  type: "object",
  allowComments: !0,
  allowTrailingCommas: !0,
  properties: {
    colors: {
      description: r("schema.workbenchColors", "Colors in the workbench"),
      $ref: Be,
      additionalProperties: !1
    },
    tokenColors: {
      anyOf: [
        {
          type: "string",
          description: r(
            "schema.tokenColors.path",
            "Path to a tmTheme file (relative to the current file)."
          )
        },
        {
          description: r("schema.colors", "Colors for syntax highlighting"),
          $ref: Re
        }
      ]
    },
    semanticHighlighting: {
      type: "boolean",
      description: r(
        "schema.supportsSemanticHighlighting",
        "Whether semantic highlighting should be enabled for this theme."
      )
    },
    semanticTokenColors: {
      type: "object",
      description: r("schema.semanticTokenColors", "Colors for semantic tokens"),
      $ref: yt
    }
  }
};
function Yn() {
  const s = se.as(ze.JSONContribution);
  s.registerSchema(Kn, Jn), s.registerSchema(Re, Wn);
}
function Zn() {
  return Ve.registerExtensionPoint({
    extensionPoint: "themes",
    jsonSchema: {
      description: r(
        "vscode.extension.contributes.themes",
        "Contributes textmate color themes."
      ),
      type: "array",
      items: {
        type: "object",
        defaultSnippets: [{ body: { label: "${1:label}", id: "${2:id}", uiTheme: Ee, path: "./themes/${3:id}.tmTheme." } }],
        properties: {
          id: {
            description: r(
              "vscode.extension.contributes.themes.id",
              "Id of the color theme as used in the user settings."
            ),
            type: "string"
          },
          label: {
            description: r(
              "vscode.extension.contributes.themes.label",
              "Label of the color theme as shown in the UI."
            ),
            type: "string"
          },
          uiTheme: {
            description: r(
              "vscode.extension.contributes.themes.uiTheme",
              "Base theme defining the colors around the editor: 'vs' is the light color theme, 'vs-dark' is the dark color theme. 'hc-black' is the dark high contrast theme, 'hc-light' is the light high contrast theme."
            ),
            enum: [xe, Ee, we, ke]
          },
          path: {
            description: r(
              "vscode.extension.contributes.themes.path",
              "Path of the tmTheme file. The path is relative to the extension folder and is typically './colorthemes/awesome-color-theme.json'."
            ),
            type: "string"
          }
        },
        required: ["path", "uiTheme"]
      }
    }
  });
}
function Xn() {
  return Ve.registerExtensionPoint({
    extensionPoint: "iconThemes",
    jsonSchema: {
      description: r("vscode.extension.contributes.iconThemes", "Contributes file icon themes."),
      type: "array",
      items: {
        type: "object",
        defaultSnippets: [{ body: { id: "${1:id}", label: "${2:label}", path: "./fileicons/${3:id}-icon-theme.json" } }],
        properties: {
          id: {
            description: r(
              "vscode.extension.contributes.iconThemes.id",
              "Id of the file icon theme as used in the user settings."
            ),
            type: "string"
          },
          label: {
            description: r(
              "vscode.extension.contributes.iconThemes.label",
              "Label of the file icon theme as shown in the UI."
            ),
            type: "string"
          },
          path: {
            description: r(
              "vscode.extension.contributes.iconThemes.path",
              "Path of the file icon theme definition file. The path is relative to the extension folder and is typically './fileicons/awesome-icon-theme.json'."
            ),
            type: "string"
          }
        },
        required: ["path", "id"]
      }
    }
  });
}
function Qn() {
  return Ve.registerExtensionPoint({
    extensionPoint: "productIconThemes",
    jsonSchema: {
      description: r(
        "vscode.extension.contributes.productIconThemes",
        "Contributes product icon themes."
      ),
      type: "array",
      items: {
        type: "object",
        defaultSnippets: [{ body: { id: "${1:id}", label: "${2:label}", path: "./producticons/${3:id}-product-icon-theme.json" } }],
        properties: {
          id: {
            description: r(
              "vscode.extension.contributes.productIconThemes.id",
              "Id of the product icon theme as used in the user settings."
            ),
            type: "string"
          },
          label: {
            description: r(
              "vscode.extension.contributes.productIconThemes.label",
              "Label of the product icon theme as shown in the UI."
            ),
            type: "string"
          },
          path: {
            description: r(
              "vscode.extension.contributes.productIconThemes.path",
              "Path of the product icon theme definition file. The path is relative to the extension folder and is typically './producticons/awesome-product-icon-theme.json'."
            ),
            type: "string"
          }
        },
        required: ["path", "id"]
      }
    }
  });
}
class De {
  constructor(e, t, n = !1, o = void 0) {
    this.themesExtPoint = e, this.create = t, this.idRequired = n, this.builtInTheme = o, this.onDidChangeEmitter = new ge(), this.onDidChange = this.onDidChangeEmitter.event, this.extensionThemes = [], this.initialize();
  }
  initialize() {
    this.themesExtPoint.setHandler((e, t) => {
      const n = {}, o = [];
      for (const a of this.extensionThemes)
        n[a.id] = a;
      this.extensionThemes.length = 0;
      for (const a of e) {
        const c = F.fromName(a.description.publisher, a.description.name, a.description.isBuiltin);
        this.onThemes(c, a.description.extensionLocation, a.value, this.extensionThemes, a.collector);
      }
      for (const a of this.extensionThemes)
        n[a.id] ? delete n[a.id] : o.push(a);
      const i = Object.values(n);
      this.onDidChangeEmitter.fire({ themes: this.extensionThemes, added: o, removed: i });
    });
  }
  onThemes(e, t, n, o = [], i) {
    return Array.isArray(n) ? (n.forEach((a) => {
      if (!a.path || !D(a.path)) {
        i == null || i.error(r(
          "reqpath",
          "Expected string in `contributes.{0}.path`. Provided value: {1}",
          this.themesExtPoint.name,
          String(a.path)
        ));
        return;
      }
      if (this.idRequired && (!a.id || !D(a.id))) {
        i == null || i.error(r(
          "reqid",
          "Expected string in `contributes.{0}.id`. Provided value: {1}",
          this.themesExtPoint.name,
          String(a.id)
        ));
        return;
      }
      const c = Y(t, a.path);
      Qe(c, t) || i == null || i.warn(r(
        "invalid.path.1",
        "Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable.",
        this.themesExtPoint.name,
        c.path,
        t.path
      ));
      const l = this.create(a, c, e);
      o.push(l);
    }), o) : (i == null || i.error(r(
      "reqarray",
      "Extension point `{0}` must be an array.",
      this.themesExtPoint.name
    )), o);
  }
  findThemeById(e) {
    if (this.builtInTheme && this.builtInTheme.id === e)
      return this.builtInTheme;
    const t = this.getThemes();
    for (const n of t)
      if (n.id === e)
        return n;
  }
  findThemeBySettingsId(e, t) {
    if (this.builtInTheme && this.builtInTheme.settingsId === e)
      return this.builtInTheme;
    const n = this.getThemes();
    let o;
    for (const i of n) {
      if (i.settingsId === e)
        return i;
      i.settingsId === t && (o = i);
    }
    return o;
  }
  findThemeByExtensionLocation(e) {
    return e ? this.getThemes().filter((t) => t.location && Qe(t.location, e)) : [];
  }
  getThemes() {
    return this.extensionThemes;
  }
  getMarketplaceThemes(e, t, n) {
    var i;
    const o = (i = e == null ? void 0 : e.contributes) == null ? void 0 : i[this.themesExtPoint.name];
    return Array.isArray(o) ? this.onThemes(n, t, o) : [];
  }
}
const re = se.as(Xt.Configuration), ee = [], te = [], ne = [];
function G(s) {
  return `\`#${s}#\``;
}
const eo = {
  type: "string",
  description: r("colorTheme", "Specifies the color theme used in the workbench."),
  default: Ct ? v.COLOR_THEME_LIGHT : v.COLOR_THEME_DARK,
  enum: ee,
  enumDescriptions: ne,
  enumItemLabels: te,
  errorMessage: r("colorThemeError", "Theme is unknown or not installed.")
}, to = {
  type: "string",
  markdownDescription: r(
    { key: "preferredDarkColorTheme", comment: ["{0} will become a link to another setting."] },
    "Specifies the preferred color theme for dark OS appearance when {0} is enabled.",
    G(y.DETECT_COLOR_SCHEME)
  ),
  default: v.COLOR_THEME_DARK,
  enum: ee,
  enumDescriptions: ne,
  enumItemLabels: te,
  errorMessage: r("colorThemeError", "Theme is unknown or not installed.")
}, no = {
  type: "string",
  markdownDescription: r(
    { key: "preferredLightColorTheme", comment: ["{0} will become a link to another setting."] },
    "Specifies the preferred color theme for light OS appearance when {0} is enabled.",
    G(y.DETECT_COLOR_SCHEME)
  ),
  default: v.COLOR_THEME_LIGHT,
  enum: ee,
  enumDescriptions: ne,
  enumItemLabels: te,
  errorMessage: r("colorThemeError", "Theme is unknown or not installed.")
}, oo = {
  type: "string",
  markdownDescription: r(
    { key: "preferredHCDarkColorTheme", comment: ["{0} will become a link to another setting."] },
    "Specifies the preferred color theme used in high contrast dark mode when {0} is enabled.",
    G(y.DETECT_HC)
  ),
  default: v.COLOR_THEME_HC_DARK,
  enum: ee,
  enumDescriptions: ne,
  enumItemLabels: te,
  errorMessage: r("colorThemeError", "Theme is unknown or not installed.")
}, io = {
  type: "string",
  markdownDescription: r(
    { key: "preferredHCLightColorTheme", comment: ["{0} will become a link to another setting."] },
    "Specifies the preferred color theme used in high contrast light mode when {0} is enabled.",
    G(y.DETECT_HC)
  ),
  default: v.COLOR_THEME_HC_LIGHT,
  enum: ee,
  enumDescriptions: ne,
  enumItemLabels: te,
  errorMessage: r("colorThemeError", "Theme is unknown or not installed.")
}, so = {
  type: "boolean",
  markdownDescription: r(
    { key: "detectColorScheme", comment: ["{0} and {1} will become links to other settings."] },
    "If set, automatically switch to the preferred color theme based on the OS appearance. If the OS appearance is dark, the theme specified at {0} is used, for light {1}.",
    G(y.PREFERRED_DARK_THEME),
    G(y.PREFERRED_LIGHT_THEME)
  ),
  default: !1
}, Et = {
  type: "object",
  description: r(
    "workbenchColors",
    "Overrides colors from the currently selected color theme."
  ),
  allOf: [{ $ref: Be }],
  default: {},
  defaultSnippets: [{
    body: {}
  }]
}, ye = {
  type: ["string", "null"],
  default: v.FILE_ICON_THEME,
  description: r(
    "iconTheme",
    "Specifies the file icon theme used in the workbench or 'null' to not show any file icons."
  ),
  enum: [null],
  enumItemLabels: [r("noIconThemeLabel", "None")],
  enumDescriptions: [r("noIconThemeDesc", "No file icons")],
  errorMessage: r("iconThemeError", "File icon theme is unknown or not installed.")
}, Ce = {
  type: ["string", "null"],
  default: v.PRODUCT_ICON_THEME,
  description: r("productIconTheme", "Specifies the product icon theme used."),
  enum: [v.PRODUCT_ICON_THEME],
  enumItemLabels: [r("defaultProductIconThemeLabel", "Default")],
  enumDescriptions: [r("defaultProductIconThemeDesc", "Default")],
  errorMessage: r("productIconThemeError", "Product icon theme is unknown or not installed.")
}, ro = {
  type: "boolean",
  default: !0,
  markdownDescription: r(
    { key: "autoDetectHighContrast", comment: ["{0} and {1} will become links to other settings."] },
    "If enabled, will automatically change to high contrast theme if the OS is using a high contrast theme. The high contrast theme to use is specified by {0} and {1}",
    G(y.PREFERRED_HC_DARK_THEME),
    G(y.PREFERRED_HC_LIGHT_THEME)
  ),
  scope: 1
}, ve = {
  id: "workbench",
  order: 7.1,
  type: "object",
  properties: {
    [y.COLOR_THEME]: eo,
    [y.PREFERRED_DARK_THEME]: to,
    [y.PREFERRED_LIGHT_THEME]: no,
    [y.PREFERRED_HC_DARK_THEME]: oo,
    [y.PREFERRED_HC_LIGHT_THEME]: io,
    [y.FILE_ICON_THEME]: ye,
    [y.COLOR_CUSTOMIZATIONS]: Et,
    [y.PRODUCT_ICON_THEME]: Ce
  }
};
re.registerConfiguration(ve);
const ao = {
  id: "window",
  order: 8.1,
  type: "object",
  properties: {
    [y.DETECT_HC]: ro,
    [y.DETECT_COLOR_SCHEME]: so
  }
};
re.registerConfiguration(ao);
function X(s) {
  return {
    description: s,
    $ref: Vn
  };
}
const Pe = "^\\[[^\\]]*(\\]\\s*\\[[^\\]]*)*\\]$", kt = {
  type: "object",
  properties: {
    comments: X(r("editorColors.comments", "Sets the colors and styles for comments")),
    strings: X(r("editorColors.strings", "Sets the colors and styles for strings literals.")),
    keywords: X(r("editorColors.keywords", "Sets the colors and styles for keywords.")),
    numbers: X(r("editorColors.numbers", "Sets the colors and styles for number literals.")),
    types: X(r(
      "editorColors.types",
      "Sets the colors and styles for type declarations and references."
    )),
    functions: X(r(
      "editorColors.functions",
      "Sets the colors and styles for functions declarations and references."
    )),
    variables: X(r(
      "editorColors.variables",
      "Sets the colors and styles for variables declarations and references."
    )),
    textMateRules: {
      description: r(
        "editorColors.textMateRules",
        "Sets colors and styles using textmate theming rules (advanced)."
      ),
      $ref: Re
    },
    semanticHighlighting: {
      description: r(
        "editorColors.semanticHighlighting",
        "Whether semantic highlighting should be enabled for this theme."
      ),
      deprecationMessage: r(
        "editorColors.semanticHighlighting.deprecationMessage",
        "Use `enabled` in `editor.semanticTokenColorCustomizations` setting instead."
      ),
      markdownDeprecationMessage: r(
        { key: "editorColors.semanticHighlighting.deprecationMessageMarkdown", comment: ["{0} will become a link to another setting."] },
        "Use `enabled` in {0} setting instead.",
        G("editor.semanticTokenColorCustomizations")
      ),
      type: "boolean"
    }
  },
  additionalProperties: !1
}, wt = {
  description: r(
    "editorColors",
    "Overrides editor syntax colors and font style from the currently selected color theme."
  ),
  default: {},
  allOf: [{ ...kt, patternProperties: { "^\\[": {} } }]
}, Ne = {
  type: "object",
  properties: {
    enabled: {
      type: "boolean",
      description: r(
        "editorColors.semanticHighlighting.enabled",
        "Whether semantic highlighting is enabled or disabled for this theme"
      ),
      suggestSortText: "0_enabled"
    },
    rules: {
      $ref: yt,
      description: r(
        "editorColors.semanticHighlighting.rules",
        "Semantic token styling rules for this theme."
      ),
      suggestSortText: "0_rules"
    }
  },
  additionalProperties: !1
}, xt = {
  description: r(
    "semanticTokenColors",
    "Overrides editor semantic token color and styles from the currently selected color theme."
  ),
  default: {},
  allOf: [{ ...Ne, patternProperties: { "^\\[": {} } }]
}, Rt = {
  id: "editor",
  order: 7.2,
  type: "object",
  properties: {
    [y.TOKEN_COLOR_CUSTOMIZATIONS]: wt,
    [y.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS]: xt
  }
};
re.registerConfiguration(Rt);
function ft(s) {
  s.sort((a, c) => a.label.localeCompare(c.label)), ee.splice(0, ee.length, ...s.map((a) => a.settingsId)), ne.splice(0, ne.length, ...s.map((a) => a.description || "")), te.splice(0, te.length, ...s.map((a) => a.label || ""));
  const e = { properties: {} }, t = { properties: {} }, n = { properties: {} }, o = { $ref: Be, additionalProperties: !1 }, i = { properties: kt.properties, additionalProperties: !1 };
  for (const a of s) {
    const c = `[${a.settingsId}]`;
    e.properties[c] = o, t.properties[c] = i, n.properties[c] = Ne;
  }
  e.patternProperties = { [Pe]: o }, t.patternProperties = { [Pe]: i }, n.patternProperties = { [Pe]: Ne }, Et.allOf[1] = e, wt.allOf[1] = t, xt.allOf[1] = n, re.notifyConfigurationSchemaUpdated(ve, Rt);
}
function mt(s) {
  ye.enum.splice(1, Number.MAX_VALUE, ...s.map((e) => e.settingsId)), ye.enumItemLabels.splice(1, Number.MAX_VALUE, ...s.map((e) => e.label)), ye.enumDescriptions.splice(1, Number.MAX_VALUE, ...s.map((e) => e.description || "")), re.notifyConfigurationSchemaUpdated(ve);
}
function pt(s) {
  Ce.enum.splice(1, Number.MAX_VALUE, ...s.map((e) => e.settingsId)), Ce.enumItemLabels.splice(1, Number.MAX_VALUE, ...s.map((e) => e.label)), Ce.enumDescriptions.splice(1, Number.MAX_VALUE, ...s.map((e) => e.description || "")), re.notifyConfigurationSchemaUpdated(ve);
}
class co {
  constructor(e) {
    this.configurationService = e;
  }
  get colorTheme() {
    return this.configurationService.getValue(y.COLOR_THEME);
  }
  get fileIconTheme() {
    return this.configurationService.getValue(y.FILE_ICON_THEME);
  }
  get productIconTheme() {
    return this.configurationService.getValue(y.PRODUCT_ICON_THEME);
  }
  get colorCustomizations() {
    return this.configurationService.getValue(y.COLOR_CUSTOMIZATIONS) || {};
  }
  get tokenColorCustomizations() {
    return this.configurationService.getValue(y.TOKEN_COLOR_CUSTOMIZATIONS) || {};
  }
  get semanticTokenColorCustomizations() {
    return this.configurationService.getValue(y.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS);
  }
  async setColorTheme(e, t) {
    return await this.writeConfiguration(y.COLOR_THEME, e.settingsId, t), e;
  }
  async setFileIconTheme(e, t) {
    return await this.writeConfiguration(y.FILE_ICON_THEME, e.settingsId, t), e;
  }
  async setProductIconTheme(e, t) {
    return await this.writeConfiguration(y.PRODUCT_ICON_THEME, e.settingsId, t), e;
  }
  isDefaultColorTheme() {
    var t;
    const e = this.configurationService.inspect(y.COLOR_THEME);
    return e && ((t = e.default) == null ? void 0 : t.value) === e.value;
  }
  findAutoConfigurationTarget(e) {
    const t = this.configurationService.inspect(e);
    if (J(t.workspaceFolderValue))
      if (J(t.workspaceValue)) {
        if (!J(t.userRemote))
          return 4;
      } else
        return 5;
    else
      return 6;
    return 2;
  }
  async writeConfiguration(e, t, n) {
    if (n === void 0 || n === "preview")
      return;
    const o = this.configurationService.inspect(e);
    if (n === "auto")
      return this.configurationService.updateValue(e, t);
    if (n === 2) {
      if (t === o.userValue)
        return Promise.resolve(void 0);
      if (t === o.defaultValue) {
        if (J(o.userValue))
          return Promise.resolve(void 0);
        t = void 0;
      }
    } else if ((n === 5 || n === 6 || n === 4) && t === o.value)
      return Promise.resolve(void 0);
    return this.configurationService.updateValue(e, t, n);
  }
}
const Se = "", M = class M {
  constructor(e, t, n) {
    this.iconThemeDocument = { iconDefinitions: /* @__PURE__ */ new Map() }, this.id = e, this.label = t, this.settingsId = n, this.isLoaded = !1;
  }
  getIcon(e) {
    return uo(e, this.iconThemeDocument);
  }
  ensureLoaded(e, t) {
    return this.isLoaded ? Promise.resolve(this.styleSheetContent) : this.load(e, t);
  }
  reload(e, t) {
    return this.load(e, t);
  }
  async load(e, t) {
    const n = this.location;
    if (!n)
      return Promise.resolve(this.styleSheetContent);
    const o = [];
    return this.iconThemeDocument = await ho(e, n, o), this.isLoaded = !0, o.length && t.error(r(
      "error.parseicondefs",
      `Problems processing product icons definitions in {0}:
{1}`,
      n.toString(),
      o.join(`
`)
    )), this.styleSheetContent;
  }
  static fromExtensionTheme(e, t, n) {
    const o = n.extensionId + "-" + e.id, i = e.label || je(e.path), a = e.id, c = new M(o, i, a);
    return c.description = e.description, c.location = t, c.extensionData = n, c.watch = e._watch, c.isLoaded = !1, c;
  }
  static createUnloadedTheme(e) {
    const t = new M(e, "", "__" + e);
    return t.isLoaded = !1, t.extensionData = void 0, t.watch = !1, t;
  }
  static get defaultTheme() {
    let e = M._defaultProductIconTheme;
    return e || (e = M._defaultProductIconTheme = new M(Se, r("defaultTheme", "Default"), v.PRODUCT_ICON_THEME), e.isLoaded = !0, e.extensionData = void 0, e.watch = !1), e;
  }
  static fromStorageData(e) {
    const t = e.get(M.STORAGE_KEY, 0);
    if (t)
      try {
        const n = JSON.parse(t), o = new M("", "", "");
        for (const c in n)
          switch (c) {
            case "id":
            case "label":
            case "description":
            case "settingsId":
            case "styleSheetContent":
            case "watch":
              o[c] = n[c];
              break;
            case "location":
              break;
            case "extensionData":
              o.extensionData = F.fromJSONObject(n.extensionData);
              break;
          }
        const { iconDefinitions: i, iconFontDefinitions: a } = n;
        if (Array.isArray(i) && pe(a)) {
          const c = /* @__PURE__ */ new Map();
          for (const l of i) {
            const { id: u, fontCharacter: f, fontId: p } = l;
            if (D(u) && D(f))
              if (D(p)) {
                const C = et.fromJSONObject(a[p]);
                C && c.set(u, { fontCharacter: f, font: { id: p, definition: C } });
              } else
                c.set(u, { fontCharacter: f });
          }
          o.iconThemeDocument = { iconDefinitions: c };
        }
        return o;
      } catch {
        return;
      }
  }
  toStorage(e) {
    const t = [], n = {};
    for (const i of this.iconThemeDocument.iconDefinitions.entries()) {
      const a = i[1].font;
      t.push({ id: i[0], fontCharacter: i[1].fontCharacter, fontId: a == null ? void 0 : a.id }), a && n[a.id] === void 0 && (n[a.id] = et.toJSONObject(a.definition));
    }
    const o = JSON.stringify({
      id: this.id,
      label: this.label,
      description: this.description,
      settingsId: this.settingsId,
      styleSheetContent: this.styleSheetContent,
      watch: this.watch,
      extensionData: F.toJSONObject(this.extensionData),
      iconDefinitions: t,
      iconFontDefinitions: n
    });
    e.store(M.STORAGE_KEY, o, 0, 1);
  }
};
M.STORAGE_KEY = "productIconThemeData", M._defaultProductIconTheme = null;
let K = M;
function ho(s, e, t) {
  return s.readExtensionResource(e).then((n) => {
    const o = [], i = Ue(n, o);
    if (o.length > 0)
      return Promise.reject(new Error(r(
        "error.cannotparseicontheme",
        "Problems parsing product icons file: {0}",
        o.map((f) => qe(f.error)).join(", ")
      )));
    if (Ge(i) !== "object")
      return Promise.reject(new Error(r(
        "error.invalidformat",
        "Invalid format for product icons theme file: Object expected."
      )));
    if (!i.iconDefinitions || !Array.isArray(i.fonts) || !i.fonts.length)
      return Promise.reject(new Error(r(
        "error.missingProperties",
        "Invalid format for product icons theme file: Must contain iconDefinitions and fonts."
      )));
    const a = be(e), c = /* @__PURE__ */ new Map();
    for (const f of i.fonts)
      if (D(f.id) && f.id.match(We)) {
        const p = f.id;
        let C;
        D(f.weight) && f.weight.match(Je) ? C = f.weight : t.push(r(
          "error.fontWeight",
          "Invalid font weight in font '{0}'. Ignoring setting.",
          f.id
        ));
        let d;
        D(f.style) && f.style.match(Ke) ? d = f.style : t.push(r(
          "error.fontStyle",
          "Invalid font style in font '{0}'. Ignoring setting.",
          f.id
        ));
        const g = [];
        if (Array.isArray(f.src))
          for (const T of f.src)
            if (D(T.path) && D(T.format) && T.format.match(Nn)) {
              const S = Y(a, T.path);
              g.push({ location: S, format: T.format });
            } else
              t.push(r(
                "error.fontSrc",
                "Invalid font source in font '{0}'. Ignoring source.",
                f.id
              ));
        g.length ? c.set(p, { weight: C, style: d, src: g }) : t.push(r(
          "error.noFontSrc",
          "No valid font source in font '{0}'. Ignoring font definition.",
          f.id
        ));
      } else
        t.push(r(
          "error.fontId",
          "Missing or invalid font id '{0}'. Skipping font definition.",
          f.id
        ));
    const l = /* @__PURE__ */ new Map(), u = i.fonts[0].id;
    for (const f in i.iconDefinitions) {
      const p = i.iconDefinitions[f];
      if (D(p.fontCharacter)) {
        const C = p.fontId ?? u, d = c.get(C);
        if (d) {
          const g = { id: `pi-${C}`, definition: d };
          l.set(f, { fontCharacter: p.fontCharacter, font: g });
        } else
          t.push(r(
            "error.icon.font",
            "Skipping icon definition '{0}'. Unknown font.",
            f
          ));
      } else
        t.push(r(
          "error.icon.fontCharacter",
          "Skipping icon definition '{0}'. Unknown fontCharacter.",
          f
        ));
    }
    return { iconDefinitions: l };
  });
}
const lo = Qt();
function uo(s, e) {
  const t = e.iconDefinitions;
  let n = t.get(s.id), o = s.defaults;
  for (; !n && tt.isThemeIcon(o); ) {
    const i = lo.getIcon(o.id);
    if (i)
      n = t.get(i.id), o = i.defaults;
    else
      return;
  }
  if (n)
    return n;
  if (!tt.isThemeIcon(o))
    return o;
}
const ce = "osColorScheme", he = -1, me = "vscode-theme-defaults", Oe = "vscode.vscode-theme-seti-vs-seti", gt = "file-icons-enabled", fo = "contributedColorTheme", mo = "contributedFileIconTheme", po = "contributedProductIconTheme", Tt = se.as(en.ThemingContribution);
function go(s) {
  switch (s) {
    case xe:
      return `vs ${me}-themes-light_vs-json`;
    case Ee:
      return `vs-dark ${me}-themes-dark_vs-json`;
    case we:
      return `hc-black ${me}-themes-hc_black-json`;
    case ke:
      return `hc-light ${me}-themes-hc_light-json`;
  }
  return s;
}
const To = Zn(), yo = Xn(), Co = Qn();
let $e = class {
  constructor(e, t, n, o, i, a, c, l, u, f, p, C) {
    var z;
    this.storageService = t, this.configurationService = n, this.telemetryService = o, this.environmentService = i, this.extensionResourceLoaderService = c, this.logService = u, this.hostColorService = f, this.hasDefaultUpdated = !1, this.themeExtensionsActivated = /* @__PURE__ */ new Map(), this.container = l.container, this.settings = new co(n), this.colorThemeRegistry = new De(To, q.fromExtensionTheme), this.colorThemeWatcher = new Le(a, i, this.reloadCurrentColorTheme.bind(this)), this.onColorThemeChange = new ge({ leakWarningThreshold: 400 }), this.currentColorTheme = q.createUnloadedTheme(""), this.colorThemeSequencer = new _e(), this.fileIconThemeWatcher = new Le(
      a,
      i,
      this.reloadCurrentFileIconTheme.bind(this)
    ), this.fileIconThemeRegistry = new De(
      yo,
      W.fromExtensionTheme,
      !0,
      W.noIconTheme
    ), this.fileIconThemeLoader = new Bn(c, C), this.onFileIconThemeChange = new ge({ leakWarningThreshold: 400 }), this.currentFileIconTheme = W.createUnloadedTheme(""), this.fileIconThemeSequencer = new _e(), this.productIconThemeWatcher = new Le(
      a,
      i,
      this.reloadCurrentProductIconTheme.bind(this)
    ), this.productIconThemeRegistry = new De(
      Co,
      K.fromExtensionTheme,
      !0,
      K.defaultTheme
    ), this.onProductIconThemeChange = new ge(), this.currentProductIconTheme = K.createUnloadedTheme(""), this.productIconThemeSequencer = new _e();
    let d = q.fromStorageData(this.storageService);
    const g = this.settings.colorTheme;
    d && g !== d.settingsId && this.settings.isDefaultColorTheme() && (this.hasDefaultUpdated = d.settingsId === v.COLOR_THEME_DARK_OLD || d.settingsId === v.COLOR_THEME_LIGHT_OLD, d = void 0);
    const T = this.getPreferredColorScheme(), S = g === v.COLOR_THEME_LIGHT ? pn : g === v.COLOR_THEME_DARK ? gn : void 0;
    if (T && (d == null ? void 0 : d.type) !== T && this.storageService.get(ce, he) !== T && (d = q.createUnloadedThemeForThemeType(T, void 0)), !d) {
      const O = (z = i.options) == null ? void 0 : z.initialColorTheme;
      O && (d = q.createUnloadedThemeForThemeType(O.themeType, O.colors ?? S));
    }
    d || (d = q.createUnloadedThemeForThemeType(Ct ? k.LIGHT : k.DARK, S)), d.setCustomizations(this.settings), this.applyTheme(d, void 0, !0);
    const m = W.fromStorageData(this.storageService);
    m && this.applyAndSetFileIconTheme(m, !0);
    const I = K.fromStorageData(this.storageService);
    I && this.applyAndSetProductIconTheme(I, !0), Promise.all([e.whenInstalledExtensionsRegistered(), p.whenInitializationFinished()]).then((O) => {
      this.installConfigurationListener(), this.installPreferredSchemeListener(), this.installRegistryListeners(), this.initialize().catch(Tn);
    });
    const P = yn();
    P.id = "codiconStyles";
    const b = Cn(this);
    function Z() {
      P.textContent = b.getCSS();
    }
    const N = new Sn(Z, 0);
    b.onDidChange(() => N.schedule()), N.schedule();
  }
  initialize() {
    const e = this.environmentService.extensionDevelopmentLocationURI, t = e && e.length === 1 ? e[0] : void 0, n = async () => {
      const a = this.colorThemeRegistry.findThemeByExtensionLocation(t);
      if (a.length)
        return this.setColorTheme(a[0].id, 8);
      const c = this.currentColorTheme.type === k.LIGHT ? v.COLOR_THEME_LIGHT : v.COLOR_THEME_DARK, l = this.colorThemeRegistry.findThemeBySettingsId(this.settings.colorTheme, c), u = this.getPreferredColorScheme(), f = this.storageService.get(ce, he);
      return u !== f && (this.storageService.store(ce, u, he, 0), u && (l == null ? void 0 : l.type) !== u) ? this.applyPreferredColorTheme(u) : this.setColorTheme(l && l.id, void 0);
    }, o = async () => {
      const a = this.fileIconThemeRegistry.findThemeByExtensionLocation(t);
      if (a.length)
        return this.setFileIconTheme(a[0].id, 8);
      const c = this.fileIconThemeRegistry.findThemeBySettingsId(this.settings.fileIconTheme);
      return this.setFileIconTheme(c ? c.id : Oe, void 0);
    }, i = async () => {
      const a = this.productIconThemeRegistry.findThemeByExtensionLocation(t);
      if (a.length)
        return this.setProductIconTheme(a[0].id, 8);
      const c = this.productIconThemeRegistry.findThemeBySettingsId(this.settings.productIconTheme);
      return this.setProductIconTheme(c ? c.id : Se, void 0);
    };
    return Promise.all([n(), o(), i()]);
  }
  installConfigurationListener() {
    this.configurationService.onDidChangeConfiguration((e) => {
      let t = null;
      const n = () => (t === null && (t = this.getPreferredColorScheme()), t);
      if (e.affectsConfiguration(y.COLOR_THEME) && this.restoreColorTheme(), (e.affectsConfiguration(y.DETECT_COLOR_SCHEME) || e.affectsConfiguration(y.DETECT_HC)) && this.handlePreferredSchemeUpdated(), e.affectsConfiguration(y.PREFERRED_DARK_THEME) && n() === k.DARK && this.applyPreferredColorTheme(k.DARK), e.affectsConfiguration(y.PREFERRED_LIGHT_THEME) && n() === k.LIGHT && this.applyPreferredColorTheme(k.LIGHT), e.affectsConfiguration(y.PREFERRED_HC_DARK_THEME) && n() === k.HIGH_CONTRAST_DARK && this.applyPreferredColorTheme(k.HIGH_CONTRAST_DARK), e.affectsConfiguration(y.PREFERRED_HC_LIGHT_THEME) && n() === k.HIGH_CONTRAST_LIGHT && this.applyPreferredColorTheme(k.HIGH_CONTRAST_LIGHT), e.affectsConfiguration(y.FILE_ICON_THEME) && this.restoreFileIconTheme(), e.affectsConfiguration(y.PRODUCT_ICON_THEME) && this.restoreProductIconTheme(), this.currentColorTheme) {
        let o = !1;
        e.affectsConfiguration(y.COLOR_CUSTOMIZATIONS) && (this.currentColorTheme.setCustomColors(this.settings.colorCustomizations), o = !0), e.affectsConfiguration(y.TOKEN_COLOR_CUSTOMIZATIONS) && (this.currentColorTheme.setCustomTokenColors(this.settings.tokenColorCustomizations), o = !0), e.affectsConfiguration(y.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS) && (this.currentColorTheme.setCustomSemanticTokenColors(this.settings.semanticTokenColorCustomizations), o = !0), o && (this.updateDynamicCSSRules(this.currentColorTheme), this.onColorThemeChange.fire(this.currentColorTheme));
      }
    });
  }
  installRegistryListeners() {
    let e;
    this.colorThemeRegistry.onDidChange(async (o) => {
      if (ft(o.themes), await this.restoreColorTheme())
        this.currentColorTheme.settingsId === v.COLOR_THEME_DARK && !J(e) && await this.colorThemeRegistry.findThemeById(e) ? (await this.setColorTheme(e, "auto"), e = void 0) : o.added.some((i) => i.settingsId === this.currentColorTheme.settingsId) && await this.reloadCurrentColorTheme();
      else if (o.removed.some((i) => i.settingsId === this.currentColorTheme.settingsId)) {
        e = this.currentColorTheme.id;
        const i = this.colorThemeRegistry.findThemeBySettingsId(v.COLOR_THEME_DARK);
        await this.setColorTheme(i, "auto");
      }
    });
    let t;
    this.fileIconThemeRegistry.onDidChange(async (o) => {
      mt(o.themes), await this.restoreFileIconTheme() ? this.currentFileIconTheme.id === Oe && !J(t) && this.fileIconThemeRegistry.findThemeById(t) ? (await this.setFileIconTheme(t, "auto"), t = void 0) : o.added.some((i) => i.settingsId === this.currentFileIconTheme.settingsId) && await this.reloadCurrentFileIconTheme() : o.removed.some((i) => i.settingsId === this.currentFileIconTheme.settingsId) && (t = this.currentFileIconTheme.id, await this.setFileIconTheme(Oe, "auto"));
    });
    let n;
    return this.productIconThemeRegistry.onDidChange(async (o) => {
      pt(o.themes), await this.restoreProductIconTheme() ? this.currentProductIconTheme.id === Se && !J(n) && this.productIconThemeRegistry.findThemeById(n) ? (await this.setProductIconTheme(n, "auto"), n = void 0) : o.added.some((i) => i.settingsId === this.currentProductIconTheme.settingsId) && await this.reloadCurrentProductIconTheme() : o.removed.some((i) => i.settingsId === this.currentProductIconTheme.settingsId) && (n = this.currentProductIconTheme.id, await this.setProductIconTheme(Se, "auto"));
    }), Promise.all([this.getColorThemes(), this.getFileIconThemes(), this.getProductIconThemes()]).then(([o, i, a]) => {
      ft(o), mt(i), pt(a);
    });
  }
  installPreferredSchemeListener() {
    this.hostColorService.onDidChangeColorScheme(() => this.handlePreferredSchemeUpdated());
  }
  async handlePreferredSchemeUpdated() {
    const e = this.getPreferredColorScheme(), t = this.storageService.get(ce, he);
    if (e !== t) {
      if (this.storageService.store(ce, e, he, 1), e)
        return t || (this.themeSettingIdBeforeSchemeSwitch = this.settings.colorTheme), this.applyPreferredColorTheme(e);
      if (t && this.themeSettingIdBeforeSchemeSwitch) {
        const n = this.colorThemeRegistry.findThemeBySettingsId(this.themeSettingIdBeforeSchemeSwitch, void 0);
        n && this.setColorTheme(n.id, "auto");
      }
    }
  }
  getPreferredColorScheme() {
    if (this.configurationService.getValue(y.DETECT_HC) && this.hostColorService.highContrast)
      return this.hostColorService.dark ? k.HIGH_CONTRAST_DARK : k.HIGH_CONTRAST_LIGHT;
    if (this.configurationService.getValue(y.DETECT_COLOR_SCHEME))
      return this.hostColorService.dark ? k.DARK : k.LIGHT;
  }
  async applyPreferredColorTheme(e) {
    let t;
    switch (e) {
      case k.LIGHT:
        t = y.PREFERRED_LIGHT_THEME;
        break;
      case k.HIGH_CONTRAST_DARK:
        t = y.PREFERRED_HC_DARK_THEME;
        break;
      case k.HIGH_CONTRAST_LIGHT:
        t = y.PREFERRED_HC_LIGHT_THEME;
        break;
      default:
        t = y.PREFERRED_DARK_THEME;
    }
    const n = this.configurationService.getValue(t);
    if (n && typeof n == "string") {
      const o = this.colorThemeRegistry.findThemeBySettingsId(n, void 0);
      if (o) {
        const i = this.settings.findAutoConfigurationTarget(t);
        return this.setColorTheme(o.id, i);
      }
    }
    return null;
  }
  hasUpdatedDefaultThemes() {
    return this.hasDefaultUpdated;
  }
  getColorTheme() {
    return this.currentColorTheme;
  }
  async getColorThemes() {
    return this.colorThemeRegistry.getThemes();
  }
  async getMarketplaceColorThemes(e, t, n) {
    const o = this.extensionResourceLoaderService.getExtensionGalleryResourceURL({ publisher: e, name: t, version: n }, "extension");
    if (o)
      try {
        const i = await this.extensionResourceLoaderService.readExtensionResource(Y(o, "package.json"));
        return this.colorThemeRegistry.getMarketplaceThemes(JSON.parse(i), o, F.fromName(e, t));
      } catch (i) {
        this.logService.error("Problem loading themes from marketplace", i);
      }
    return [];
  }
  get onDidColorThemeChange() {
    return this.onColorThemeChange.event;
  }
  setColorTheme(e, t) {
    return this.colorThemeSequencer.queue(async () => this.internalSetColorTheme(e, t));
  }
  async internalSetColorTheme(e, t) {
    var i;
    if (!e)
      return null;
    const n = D(e) ? go(e) : e.id;
    if (this.currentColorTheme.isLoaded && n === this.currentColorTheme.id)
      return t !== "preview" && this.currentColorTheme.toStorage(this.storageService), this.settings.setColorTheme(this.currentColorTheme, t);
    let o = this.colorThemeRegistry.findThemeById(n);
    if (!o)
      if (e instanceof q)
        o = e;
      else
        return null;
    try {
      return await o.ensureLoaded(this.extensionResourceLoaderService), o.setCustomizations(this.settings), this.applyTheme(o, t);
    } catch (a) {
      throw new Error(r("error.cannotloadtheme", "Unable to load {0}: {1}", (i = o.location) == null ? void 0 : i.toString(), a.message));
    }
  }
  reloadCurrentColorTheme() {
    return this.colorThemeSequencer.queue(async () => {
      var e;
      try {
        const t = this.colorThemeRegistry.findThemeBySettingsId(this.currentColorTheme.settingsId) || this.currentColorTheme;
        await t.reload(this.extensionResourceLoaderService), t.setCustomizations(this.settings), await this.applyTheme(t, void 0, !1);
      } catch {
        this.logService.info("Unable to reload {0}: {1}", (e = this.currentColorTheme.location) == null ? void 0 : e.toString());
      }
    });
  }
  async restoreColorTheme() {
    return this.colorThemeSequencer.queue(async () => {
      const e = this.settings.colorTheme, t = this.colorThemeRegistry.findThemeBySettingsId(e);
      return t ? (e !== this.currentColorTheme.settingsId ? await this.internalSetColorTheme(t.id, void 0) : t !== this.currentColorTheme && (await t.ensureLoaded(this.extensionResourceLoaderService), t.setCustomizations(this.settings), await this.applyTheme(t, void 0, !0)), !0) : !1;
    });
  }
  updateDynamicCSSRules(e) {
    const t = /* @__PURE__ */ new Set(), n = {
      addRule: (i) => {
        t.has(i) || t.add(i);
      }
    };
    n.addRule(".monaco-workbench { forced-color-adjust: none; }"), Tt.getThemingParticipants().forEach((i) => i(e, n, this.environmentService));
    const o = [];
    for (const i of In().getColors()) {
      const a = e.getColor(i.id, !0);
      a && o.push(`${bn(i.id)}: ${a.toString()};`);
    }
    n.addRule(`.monaco-workbench { ${o.join(`
`)} }`), He([...t].join(`
`), fo);
  }
  applyTheme(e, t, n = !1) {
    return this.updateDynamicCSSRules(e), this.currentColorTheme.id ? this.container.classList.remove(...this.currentColorTheme.classNames) : this.container.classList.remove(Ee, xe, we, ke), this.container.classList.add(...e.classNames), this.currentColorTheme.clearCaches(), this.currentColorTheme = e, this.colorThemingParticipantChangeListener || (this.colorThemingParticipantChangeListener = Tt.onThemingParticipantAdded((o) => this.updateDynamicCSSRules(this.currentColorTheme))), this.colorThemeWatcher.update(e), this.sendTelemetry(e.id, e.extensionData, "color"), n ? Promise.resolve(null) : (this.onColorThemeChange.fire(this.currentColorTheme), e.isLoaded && t !== "preview" && e.toStorage(this.storageService), this.settings.setColorTheme(this.currentColorTheme, t));
  }
  sendTelemetry(e, t, n) {
    if (t) {
      const o = n + t.extensionId;
      this.themeExtensionsActivated.get(o) || (this.telemetryService.publicLog2("activatePlugin", {
        id: t.extensionId,
        name: t.extensionName,
        isBuiltin: t.extensionIsBuiltin,
        publisherDisplayName: t.extensionPublisher,
        themeId: e
      }), this.themeExtensionsActivated.set(o, !0));
    }
  }
  async getFileIconThemes() {
    return this.fileIconThemeRegistry.getThemes();
  }
  getFileIconTheme() {
    return this.currentFileIconTheme;
  }
  get onDidFileIconThemeChange() {
    return this.onFileIconThemeChange.event;
  }
  async setFileIconTheme(e, t) {
    return this.fileIconThemeSequencer.queue(async () => this.internalSetFileIconTheme(e, t));
  }
  async internalSetFileIconTheme(e, t) {
    e === void 0 && (e = "");
    const n = D(e) ? e : e.id;
    if (n !== this.currentFileIconTheme.id || !this.currentFileIconTheme.isLoaded) {
      let i = this.fileIconThemeRegistry.findThemeById(n);
      !i && e instanceof W && (i = e), i || (i = W.noIconTheme), await i.ensureLoaded(this.fileIconThemeLoader), this.applyAndSetFileIconTheme(i);
    }
    const o = this.currentFileIconTheme;
    return o.isLoaded && t !== "preview" && (!o.location || !nt(o.location)) && o.toStorage(this.storageService), await this.settings.setFileIconTheme(this.currentFileIconTheme, t), o;
  }
  async getMarketplaceFileIconThemes(e, t, n) {
    const o = this.extensionResourceLoaderService.getExtensionGalleryResourceURL({ publisher: e, name: t, version: n }, "extension");
    if (o)
      try {
        const i = await this.extensionResourceLoaderService.readExtensionResource(Y(o, "package.json"));
        return this.fileIconThemeRegistry.getMarketplaceThemes(JSON.parse(i), o, F.fromName(e, t));
      } catch (i) {
        this.logService.error("Problem loading themes from marketplace", i);
      }
    return [];
  }
  async reloadCurrentFileIconTheme() {
    return this.fileIconThemeSequencer.queue(async () => {
      await this.currentFileIconTheme.reload(this.fileIconThemeLoader), this.applyAndSetFileIconTheme(this.currentFileIconTheme);
    });
  }
  async restoreFileIconTheme() {
    return this.fileIconThemeSequencer.queue(async () => {
      const e = this.settings.fileIconTheme, t = this.fileIconThemeRegistry.findThemeBySettingsId(e);
      return t ? (e !== this.currentFileIconTheme.settingsId ? await this.internalSetFileIconTheme(t.id, void 0) : t !== this.currentFileIconTheme && (await t.ensureLoaded(this.fileIconThemeLoader), this.applyAndSetFileIconTheme(t, !0)), !0) : !1;
    });
  }
  applyAndSetFileIconTheme(e, t = !1) {
    this.currentFileIconTheme = e, He(e.styleSheetContent, mo), e.id ? this.container.classList.add(gt) : this.container.classList.remove(gt), this.fileIconThemeWatcher.update(e), e.id && this.sendTelemetry(e.id, e.extensionData, "fileIcon"), t || this.onFileIconThemeChange.fire(this.currentFileIconTheme);
  }
  async getProductIconThemes() {
    return this.productIconThemeRegistry.getThemes();
  }
  getProductIconTheme() {
    return this.currentProductIconTheme;
  }
  get onDidProductIconThemeChange() {
    return this.onProductIconThemeChange.event;
  }
  async setProductIconTheme(e, t) {
    return this.productIconThemeSequencer.queue(async () => this.internalSetProductIconTheme(e, t));
  }
  async internalSetProductIconTheme(e, t) {
    e === void 0 && (e = "");
    const n = D(e) ? e : e.id;
    if (n !== this.currentProductIconTheme.id || !this.currentProductIconTheme.isLoaded) {
      let i = this.productIconThemeRegistry.findThemeById(n);
      !i && e instanceof K && (i = e), i || (i = K.defaultTheme), await i.ensureLoaded(this.extensionResourceLoaderService, this.logService), this.applyAndSetProductIconTheme(i);
    }
    const o = this.currentProductIconTheme;
    return o.isLoaded && t !== "preview" && (!o.location || !nt(o.location)) && o.toStorage(this.storageService), await this.settings.setProductIconTheme(this.currentProductIconTheme, t), o;
  }
  async getMarketplaceProductIconThemes(e, t, n) {
    const o = this.extensionResourceLoaderService.getExtensionGalleryResourceURL({ publisher: e, name: t, version: n }, "extension");
    if (o)
      try {
        const i = await this.extensionResourceLoaderService.readExtensionResource(Y(o, "package.json"));
        return this.productIconThemeRegistry.getMarketplaceThemes(JSON.parse(i), o, F.fromName(e, t));
      } catch (i) {
        this.logService.error("Problem loading themes from marketplace", i);
      }
    return [];
  }
  async reloadCurrentProductIconTheme() {
    return this.productIconThemeSequencer.queue(async () => {
      await this.currentProductIconTheme.reload(this.extensionResourceLoaderService, this.logService), this.applyAndSetProductIconTheme(this.currentProductIconTheme);
    });
  }
  async restoreProductIconTheme() {
    return this.productIconThemeSequencer.queue(async () => {
      const e = this.settings.productIconTheme, t = this.productIconThemeRegistry.findThemeBySettingsId(e);
      return t ? (e !== this.currentProductIconTheme.settingsId ? await this.internalSetProductIconTheme(t.id, void 0) : t !== this.currentProductIconTheme && (await t.ensureLoaded(this.extensionResourceLoaderService, this.logService), this.applyAndSetProductIconTheme(t, !0)), !0) : !1;
    });
  }
  applyAndSetProductIconTheme(e, t = !1) {
    this.currentProductIconTheme = e, He(e.styleSheetContent, po), this.productIconThemeWatcher.update(e), e.id && this.sendTelemetry(e.id, e.extensionData, "productIcon"), t || this.onProductIconThemeChange.fire(this.currentProductIconTheme);
  }
};
$e = tn([
  L(0, nn),
  L(1, on),
  L(2, sn),
  L(3, rn),
  L(4, an),
  L(5, cn),
  L(6, hn),
  L(7, ln),
  L(8, dn),
  L(9, un),
  L(10, fn),
  L(11, mn)
], $e);
class Le {
  constructor(e, t, n) {
    this.fileService = e, this.environmentService = t, this.onUpdate = n;
  }
  update(e) {
    En(e.location, this.watchedLocation) || (this.dispose(), e.location && (e.watch || this.environmentService.isExtensionDevelopment) && (this.watchedLocation = e.location, this.watcherDisposable = this.fileService.watch(e.location), this.fileService.onDidFilesChange((t) => {
      this.watchedLocation && t.contains(this.watchedLocation, 0) && this.onUpdate();
    })));
  }
  dispose() {
    this.watcherDisposable = ot(this.watcherDisposable), this.fileChangeListener = ot(this.fileChangeListener), this.watchedLocation = void 0;
  }
}
function He(s, e) {
  const t = document.head.getElementsByClassName(e);
  if (t.length === 0) {
    const n = document.createElement("style");
    n.type = "text/css", n.className = e, n.textContent = s, document.head.appendChild(n);
  } else
    t[0].textContent = s;
}
Yn();
zn();
Un();
class So extends $e {
  registerEditorContainer() {
    return {
      dispose() {
      }
    };
  }
  setTheme(e) {
    this.getColorThemes().then((t) => {
      setTimeout(() => {
        this.setColorTheme(t.find((n) => n.settingsId === e) ?? e, 8);
      });
    });
  }
}
function Eo() {
  return {
    ...kn(),
    [wn.toString()]: new xn(So, [], !1)
  };
}
export {
  Eo as default
};
