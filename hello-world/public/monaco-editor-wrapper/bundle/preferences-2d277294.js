import { B as c, _ as v, a as u, ad as Fe, ah as nn, lV as Xs, qW as zo, u5 as qo, qN as Yo, c9 as We, iX as Jo, av as ns, qQ as Xo, fw as Nt, bM as St, mb as Qo, u6 as st, u7 as yn, u8 as Re, u9 as ci, ua as Zo, ub as tt, oO as ae, uc as Sn, ud as ea, lv as Qs, qO as _i, e as $, U as Y, S as me, bU as B, ue as Zs, cT as ft, pB as ss, ax as fe, aL as ge, E as T, N as ue, hY as _e, tv as ta, uf as Ht, z as rs, ug as Qt, D as Q, uh as er, ui as tr, dC as ia, mf as na, hh as vt, jT as ir, cP as N, dy as nr, f as sa, a9 as sr, bC as lt, aY as Wt, qZ as Ft, b as rr, I as sn, uj as ra, bE as Pe, bD as os, oN as oa, jy as or, uk as Di, ul as wi, dj as _s, e4 as aa, um as vn, un as wn, mq as ca, dS as ar, pN as cr, uo as da, jb as la, t_ as as, up as ga, tw as Ds, aU as ii, uq as dr, ur as ua, us as ha, ut as cs, n as Pt, c3 as ye, bi as he, ab as Kt, an as Bt, cF as ni, ag as Ke, lf as pa, $ as W, au as oe, a0 as _, b3 as dt, a2 as I, H as b, b4 as Je, at as Xe, b7 as rn, b8 as on, aP as re, dd as fa, sF as J, ck as ds, cl as ls, V as gs, Z as us, uu as ma, uv as lr, kG as ba, jg as ya, uw as Sa, ux as va, uy as wa, da as Ea, kH as xa, fg as Ca, b6 as Ae, dx as gr, ph as ka, uz as En, uA as xn, l as hs, w as U, t as si, hJ as ur, aZ as hr, uB as Ta, uC as we, uD as Ee, pl as Ia, rI as _a, sy as Da, u as La, st as Ma, uE as ps, l7 as Ra, uF as Aa, uG as Oa, uH as Na, L as le, bf as pr, uI as Wa, uJ as Fa, l5 as Pa, sx as fr, uK as Ka, uL as Ba, sP as Ne, sC as G, uM as Be, tL as di, ct as Ve, sH as li, uN as gi, sG as ui, uO as hi, uP as pi, uQ as fi, uR as mi, uS as Zt, b2 as Ut, dP as mr, kI as be, uT as j, uU as Ei, uV as ke, uW as br, uX as yr, tV as Va, c0 as xt, uY as Sr, uZ as Ct, cp as vr, u_ as Ua, ik as Ga, tD as ja, eM as q, aG as P, u$ as wr, du as Er, aR as mt, v0 as Li, v1 as xr, v2 as Cr, v3 as kr, v4 as Tr, v5 as Ir, v6 as _r, v7 as Dr, v8 as Lr, aI as fs, ae as an, v9 as Mr, cO as ms, aa as Rr, hH as wt, va as Ar, vb as Ue, sJ as pt, eL as Ha, dX as $a, dY as za, vc as qa, vd as Ya, ve as Ja, vf as Xa, vg as Qa, vh as Za, vi as Gt, aH as ec, bJ as tc, bB as ic, bz as bt, l_ as Or, vj as gt, eP as Nr, h as nc, hC as ve, to as sc, vk as rc, aQ as oc, vl as Ls, bG as ac, vm as it, vn as cc, e0 as dc, vo as Wr, vp as lc, aM as gc, vq as cn, bW as kt, bc as uc, vr as Tt, vs as ot, vt as Fr, vu as w, vv as hc, vw as pc, vx as fc, vy as mc, dQ as xi, iy as bc, c$ as It, b9 as Pr, vz as Kr, sq as Br, c1 as Vr, vA as bs, vB as Qe, lR as Ze, ey as Mi, oF as Ge, vC as xe, ij as Ur, vD as Gr, cB as yc, vE as Ri, vF as jr, vG as Sc, d7 as Hr, cx as vc, vH as wc, dA as $r, d as $t, vI as Me, vJ as zr, vK as qr, d0 as Yr, vL as Jr, vM as Xr, kP as ys, tP as Ec, vN as xc, io as Cc, vO as Qr, p3 as kc, vP as Ci, vQ as de, vR as Tc, vS as Ic, vT as Ms, jn as _c, vU as Le, vV as jt, vW as Zr, vX as Cn, vY as eo, vZ as Dc, pk as Lc, cX as Mc, cW as Rc, hf as Rs, cM as Ac, y as Oc, d8 as Nc, v_ as to, aX as Wc, v$ as Fc, w0 as Pc, qt as Kc, l$ as Bc, G as bi, w1 as Vc, oM as Uc, x as As, w2 as Gc, pT as jc, dD as Hc, ml as $c, jU as zc, eT as io, j5 as no, k as zt, hM as qc, hu as Yc, ai as L, aj as M, o as Jc, aE as D, dG as ut, w3 as Os, h8 as yi, w4 as Ns, gw as Xc, fF as Qc, w5 as Si, fH as vi, w6 as Zc, w7 as ed, w8 as td, w9 as id, bx as ne, wa as nd, wb as sd, wc as rd, wd as od, we as ad, hQ as cd, wf as dd, pQ as ld, wg as gd } from "./index-4b7b8e94.js";
import { g as ud } from "./unboundCommands-6da4f3ee.js";
import { D as hd } from "./style-02fbe42e.js";
import { S as yt } from "./simpleIconLabel-ea8c56ba.js";
const je = "keybinding.entry.template", Ws = c("default", "System"), Fs = c("extension", "Extension"), Ps = c("user", "User"), pd = st(Sn, Re, tt), Ks = /@source:\s*(user|default|system|extension)/i, Bs = /@ext:\s*((".+")|([^\s]+))/i;
let kn = class Te extends Xs {
  constructor(e, t, i) {
    super(), this.keybindingsService = t, this.extensionService = i, this._keybindingItems = [], this._keybindingItemsSortedByPrecedence = [], this.modifierLabels = {
      ui: zo.modifierLabels[e],
      aria: qo.modifierLabels[e],
      user: Yo.modifierLabels[e]
    };
  }
  fetch(e, t = !1) {
    let i = t ? this._keybindingItemsSortedByPrecedence : this._keybindingItems;
    const n = /@command:\s*(.+)/i.exec(e);
    if (n && n[1])
      return i.filter((s) => s.command === n[1]).map(
        (s) => ({ id: Te.getId(s), keybindingItem: s, templateId: je })
      );
    if (Ks.test(e))
      i = this.filterBySource(i, e), e = e.replace(Ks, "");
    else {
      const s = Bs.exec(e);
      if (s && (s[2] || s[3])) {
        const r = s[2] ? s[2].substring(1, s[2].length - 1) : s[3];
        i = this.filterByExtension(i, r), e = e.replace(Bs, "");
      } else {
        const r = /@keybinding:\s*((\".+\")|(\S+))/i.exec(e);
        r && (r[2] || r[3]) && (e = r[2] || `"${r[3]}"`);
      }
    }
    return e = e.trim(), e ? this.filterByText(i, e) : i.map(
      (s) => ({ id: Te.getId(s), keybindingItem: s, templateId: je })
    );
  }
  filterBySource(e, t) {
    return /@source:\s*default/i.test(t) || /@source:\s*system/i.test(t) ? e.filter((i) => i.source === Ws) : /@source:\s*user/i.test(t) ? e.filter((i) => i.source === Ps) : /@source:\s*extension/i.test(t) ? e.filter((i) => !We(i.source) || i.source === Fs) : e;
  }
  filterByExtension(e, t) {
    return t = t.toLowerCase().trim(), e.filter((i) => {
      var n;
      return !We(i.source) && (Jo.equals(i.source.identifier, t) || ((n = i.source.displayName) == null ? void 0 : n.toLowerCase()) === t.toLowerCase());
    });
  }
  filterByText(e, t) {
    const i = t.charAt(0) === '"', n = t.charAt(t.length - 1) === '"', s = i && n;
    i && (t = t.substring(1)), n && (t = t.substring(0, t.length - 1)), t = t.trim();
    const r = [], a = t.split(" "), l = this.splitKeybindingWords(a);
    for (const d of e) {
      const g = new fd(
        this.modifierLabels,
        d,
        t,
        a,
        l,
        s
      );
      (g.commandIdMatches || g.commandLabelMatches || g.commandDefaultLabelMatches || g.sourceMatches || g.whenMatches || g.keybindingMatches || g.extensionIdMatches || g.extensionLabelMatches) && r.push({
        id: Te.getId(d),
        templateId: je,
        commandLabelMatches: g.commandLabelMatches || void 0,
        commandDefaultLabelMatches: g.commandDefaultLabelMatches || void 0,
        keybindingItem: d,
        keybindingMatches: g.keybindingMatches || void 0,
        commandIdMatches: g.commandIdMatches || void 0,
        sourceMatches: g.sourceMatches || void 0,
        whenMatches: g.whenMatches || void 0,
        extensionIdMatches: g.extensionIdMatches || void 0,
        extensionLabelMatches: g.extensionLabelMatches || void 0
      });
    }
    return r;
  }
  splitKeybindingWords(e) {
    const t = [];
    for (const i of e)
      t.push(...ns(i.split("+")));
    return t;
  }
  async resolve(e = /* @__PURE__ */ new Map()) {
    const t = new ea();
    for (const s of this.extensionService.extensions)
      t.set(s.identifier, s);
    this._keybindingItemsSortedByPrecedence = [];
    const i = /* @__PURE__ */ new Map();
    for (const s of this.keybindingsService.getKeybindings())
      s.command && (this._keybindingItemsSortedByPrecedence.push(Te.toKeybindingEntry(s.command, s, e, t)), i.set(s.command, !0));
    const n = this.keybindingsService.getDefaultKeybindings().map((s) => s.command);
    for (const s of ud(i)) {
      const r = new Xo(
        void 0,
        s,
        null,
        void 0,
        n.indexOf(s) === -1,
        null,
        !1
      );
      this._keybindingItemsSortedByPrecedence.push(Te.toKeybindingEntry(s, r, e, t));
    }
    return this._keybindingItemsSortedByPrecedence = Nt(this._keybindingItemsSortedByPrecedence, (s) => Te.getId(s)), this._keybindingItems = this._keybindingItemsSortedByPrecedence.slice(0).sort((s, r) => Te.compareKeybindingData(s, r)), super.resolve();
  }
  static getId(e) {
    var t;
    return e.command + (((t = e == null ? void 0 : e.keybinding) == null ? void 0 : t.getAriaLabel()) ?? "") + e.when + (We(e.source) ? e.source : e.source.identifier.value);
  }
  static compareKeybindingData(e, t) {
    return e.keybinding && !t.keybinding ? -1 : t.keybinding && !e.keybinding ? 1 : e.commandLabel && !t.commandLabel ? -1 : t.commandLabel && !e.commandLabel ? 1 : e.commandLabel && t.commandLabel && e.commandLabel !== t.commandLabel ? e.commandLabel.localeCompare(t.commandLabel) : e.command === t.command ? e.keybindingItem.isDefault ? 1 : -1 : e.command.localeCompare(t.command);
  }
  static toKeybindingEntry(e, t, i, n) {
    var l;
    const s = St.getCommand(e), r = i.get(e);
    let a = Ps;
    if (t.isDefault) {
      const d = t.extensionId ?? (t.resolvedKeybinding || (l = s == null ? void 0 : s.source) == null ? void 0 : l.id);
      a = d ? n.get(d) ?? Fs : Ws;
    }
    return {
      keybinding: t.resolvedKeybinding,
      keybindingItem: t,
      command: e,
      commandLabel: Te.getCommandLabel(s, r),
      commandDefaultLabel: Te.getCommandDefaultLabel(s),
      when: t.when ? t.when.serialize() : "",
      source: a
    };
  }
  static getCommandDefaultLabel(e) {
    if (!Qo.isDefaultVariant() && e && e.title && e.title.original) {
      const t = e.category ? e.category.original : void 0, i = e.title.original;
      return t ? c("cat.title", "{0}: {1}", t, i) : i;
    }
    return null;
  }
  static getCommandLabel(e, t) {
    if (e) {
      const i = e.category ? typeof e.category == "string" ? e.category : e.category.value : void 0, n = typeof e.title == "string" ? e.title : e.title.value;
      return i ? c("cat.title", "{0}: {1}", i, n) : n;
    }
    return t || "";
  }
};
kn = v([
  u(1, Fe),
  u(2, nn)
], kn);
class fd {
  constructor(e, t, i, n, s, r) {
    this.modifierLabels = e, this.commandIdMatches = null, this.commandLabelMatches = null, this.commandDefaultLabelMatches = null, this.sourceMatches = null, this.whenMatches = null, this.keybindingMatches = null, this.extensionIdMatches = null, this.extensionLabelMatches = null, r || (this.commandIdMatches = this.matches(i, t.command, st(Re, yn), n), this.commandLabelMatches = t.commandLabel ? this.matches(i, t.commandLabel, (a, l) => Re(a, t.commandLabel, !0), n) : null, this.commandDefaultLabelMatches = t.commandDefaultLabel ? this.matches(i, t.commandDefaultLabel, (a, l) => Re(a, t.commandDefaultLabel, !0), n) : null, this.whenMatches = t.when ? this.matches(null, t.when, st(Re, yn), n) : null, We(t.source) ? this.sourceMatches = this.matches(i, t.source, (a, l) => Re(a, t.source, !0), n) : this.extensionLabelMatches = t.source.displayName ? this.matches(i, t.source.displayName, (a, l) => Re(a, t.commandLabel, !0), n) : null), this.keybindingMatches = t.keybinding ? this.matchesKeybinding(t.keybinding, i, s, r) : null;
  }
  matches(e, t, i, n) {
    let s = e ? pd(e, t) : null;
    return s || (s = this.matchesWords(n, t, i)), s && (s = this.filterAndSort(s)), s;
  }
  matchesWords(e, t, i) {
    let n = [];
    for (const s of e) {
      const r = i(s, t);
      if (r)
        n = [...n || [], ...r];
      else {
        n = null;
        break;
      }
    }
    return n;
  }
  filterAndSort(e) {
    return Nt(e, (t) => t.start + "." + t.end).filter((t) => !e.some(
      (i) => !(i.start === t.start && i.end === t.end) && i.start <= t.start && i.end >= t.end
    )).sort((t, i) => t.start - i.start);
  }
  matchesKeybinding(e, t, i, n) {
    const [s, r] = e.getChords(), a = e.getUserSettingsLabel(), l = e.getAriaLabel(), d = e.getLabel();
    if (a && ci(t, a) === 0 || l && ci(t, l) === 0 || d && ci(t, d) === 0)
      return {
        firstPart: this.createCompleteMatch(s),
        chordPart: this.createCompleteMatch(r)
      };
    const g = {};
    let h = {};
    const f = [], m = [];
    let p = [], y = !0;
    for (let x = 0; x < i.length; x++) {
      const E = i[x];
      let S = !1, A = !1;
      y = y && !g.keyCode;
      let C = !h.keyCode;
      if (y && (S = this.matchPart(s, g, E, n), g.keyCode)) {
        for (const Z of p)
          m.indexOf(Z) === -1 && f.splice(f.indexOf(Z), 1);
        h = {}, p = [], C = !1;
      }
      C && (A = this.matchPart(r, h, E, n)), S && m.push(x), A && p.push(x), (S || A) && f.push(x), y = y && this.isModifier(E);
    }
    return f.length !== i.length || n && (!this.isCompleteMatch(s, g) || !Zo(h) && !this.isCompleteMatch(r, h)) ? null : this.hasAnyMatch(g) || this.hasAnyMatch(h) ? { firstPart: g, chordPart: h } : null;
  }
  matchPart(e, t, i, n) {
    let s = !1;
    return this.matchesMetaModifier(e, i) && (s = !0, t.metaKey = !0), this.matchesCtrlModifier(e, i) && (s = !0, t.ctrlKey = !0), this.matchesShiftModifier(e, i) && (s = !0, t.shiftKey = !0), this.matchesAltModifier(e, i) && (s = !0, t.altKey = !0), this.matchesKeyCode(e, i, n) && (t.keyCode = !0, s = !0), s;
  }
  matchesKeyCode(e, t, i) {
    if (!e)
      return !1;
    const n = e.keyAriaLabel || "";
    if (i || n.length === 1 || t.length === 1) {
      if (ci(n, t) === 0)
        return !0;
    } else if (tt(t, n))
      return !0;
    return !1;
  }
  matchesMetaModifier(e, t) {
    return !e || !e.metaKey ? !1 : this.wordMatchesMetaModifier(t);
  }
  matchesCtrlModifier(e, t) {
    return !e || !e.ctrlKey ? !1 : this.wordMatchesCtrlModifier(t);
  }
  matchesShiftModifier(e, t) {
    return !e || !e.shiftKey ? !1 : this.wordMatchesShiftModifier(t);
  }
  matchesAltModifier(e, t) {
    return !e || !e.altKey ? !1 : this.wordMatchesAltModifier(t);
  }
  hasAnyMatch(e) {
    return !!e.altKey || !!e.ctrlKey || !!e.metaKey || !!e.shiftKey || !!e.keyCode;
  }
  isCompleteMatch(e, t) {
    return e ? !(!t.keyCode || e.metaKey && !t.metaKey || e.altKey && !t.altKey || e.ctrlKey && !t.ctrlKey || e.shiftKey && !t.shiftKey) : !0;
  }
  createCompleteMatch(e) {
    const t = {};
    return e && (t.keyCode = !0, e.metaKey && (t.metaKey = !0), e.altKey && (t.altKey = !0), e.ctrlKey && (t.ctrlKey = !0), e.shiftKey && (t.shiftKey = !0)), t;
  }
  isModifier(e) {
    return !!(this.wordMatchesAltModifier(e) || this.wordMatchesCtrlModifier(e) || this.wordMatchesMetaModifier(e) || this.wordMatchesShiftModifier(e));
  }
  wordMatchesAltModifier(e) {
    return !!(ae(this.modifierLabels.ui.altKey, e) || ae(this.modifierLabels.aria.altKey, e) || ae(this.modifierLabels.user.altKey, e) || ae(c("option", "option"), e));
  }
  wordMatchesCtrlModifier(e) {
    return !!(ae(this.modifierLabels.ui.ctrlKey, e) || ae(this.modifierLabels.aria.ctrlKey, e) || ae(this.modifierLabels.user.ctrlKey, e));
  }
  wordMatchesMetaModifier(e) {
    return !!(ae(this.modifierLabels.ui.metaKey, e) || ae(this.modifierLabels.aria.metaKey, e) || ae(this.modifierLabels.user.metaKey, e) || ae(c("meta", "meta"), e));
  }
  wordMatchesShiftModifier(e) {
    return !!(ae(this.modifierLabels.ui.shiftKey, e) || ae(this.modifierLabels.aria.shiftKey, e) || ae(this.modifierLabels.user.shiftKey, e));
  }
}
var at;
let Ai = (at = class extends Qs {
  constructor(e) {
    super(), this.searchOptions = null, this.resource = void 0, this.keybindingsModel = e.createInstance(kn, _i);
  }
  get typeId() {
    return at.ID;
  }
  getName() {
    return c("keybindingsInputName", "Keyboard Shortcuts");
  }
  async resolve() {
    return this.keybindingsModel;
  }
  matches(e) {
    return e instanceof at;
  }
  dispose() {
    this.keybindingsModel.dispose(), super.dispose();
  }
}, at.ID = "workbench.input.keybindings", at);
Ai = v([
  u(0, $)
], Ai);
var ct;
let Oi = (ct = class extends Qs {
  constructor(e) {
    super(), this.resource = Y.from({
      scheme: me.vscodeSettings,
      path: "settingseditor"
    }), this._settingsModel = e.createSettings2EditorModel();
  }
  matches(e) {
    return super.matches(e) || e instanceof ct;
  }
  get typeId() {
    return ct.ID;
  }
  getName() {
    return c("settingsEditor2InputName", "Settings");
  }
  async resolve() {
    return this._settingsModel;
  }
  dispose() {
    this._settingsModel.dispose(), super.dispose();
  }
}, ct.ID = "workbench.input.settings2", ct);
Oi = v([
  u(0, B)
], Oi);
function Et(o, ...e) {
  return e.some((t) => o.includes(t));
}
function Vs(o) {
  return o === "" || fe(o);
}
function so(o) {
  const e = Array.isArray(o.type) ? o.type : [o.type], t = Et(e, "null"), i = (Et(e, "number") || Et(e, "integer")) && (e.length === 1 || e.length === 2 && t), n = yd(o), s = bd(o), r = Sd(o), a = vd(o);
  return (l) => {
    if (t && Vs(l))
      return "";
    const d = [];
    if (r) {
      const g = r(l);
      g && d.push(g);
    }
    if (a) {
      const g = a(l);
      g && d.push(g);
    }
    return o.type === "boolean" && l !== !0 && l !== !1 && d.push(c("validations.booleanIncorrectType", 'Incorrect type. Expected "boolean".')), i && (Vs(l) || typeof l == "boolean" || Array.isArray(l) || isNaN(+l) ? d.push(c("validations.expectedNumeric", "Value must be a number.")) : d.push(...n.filter((g) => !g.isValid(+l)).map((g) => g.message))), o.type === "string" && (o.enum && !Zs(o.enum) ? d.push(c(
      "validations.stringIncorrectEnumOptions",
      "The enum options should be strings, but there is a non-string option. Please file an issue with the extension author."
    )) : We(l) ? d.push(...s.filter((g) => !g.isValid(l)).map((g) => g.message)) : d.push(c("validations.stringIncorrectType", 'Incorrect type. Expected "string".'))), d.length ? o.errorMessage ? [o.errorMessage, ...d].join(" ") : d.join(" ") : "";
  };
}
function ro(o, e) {
  if (typeof e > "u")
    return;
  if (!(Array.isArray(e) ? e : [e]).some((i) => md(o, i)))
    return c(
      "invalidTypeError",
      "Setting has an invalid type, expected {0}. Fix in JSON.",
      JSON.stringify(e)
    );
}
function md(o, e) {
  const t = typeof o;
  return e === "boolean" ? t === "boolean" : e === "object" ? o && !Array.isArray(o) && t === "object" : e === "null" ? o === null : e === "array" ? Array.isArray(o) : e === "string" ? t === "string" : e === "number" || e === "integer" ? t === "number" : !0;
}
function bd(o) {
  const e = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  let t;
  return typeof o.pattern == "string" && (t = new RegExp(o.pattern)), [
    {
      enabled: o.maxLength !== void 0,
      isValid: (i) => i.length <= o.maxLength,
      message: c(
        "validations.maxLength",
        "Value must be {0} or fewer characters long.",
        o.maxLength
      )
    },
    {
      enabled: o.minLength !== void 0,
      isValid: (i) => i.length >= o.minLength,
      message: c(
        "validations.minLength",
        "Value must be {0} or more characters long.",
        o.minLength
      )
    },
    {
      enabled: t !== void 0,
      isValid: (i) => t.test(i),
      message: o.patternErrorMessage || c("validations.regex", "Value must match regex `{0}`.", o.pattern)
    },
    {
      enabled: o.format === "color-hex",
      isValid: (i) => ft.Format.CSS.parseHex(i),
      message: c(
        "validations.colorFormat",
        "Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."
      )
    },
    {
      enabled: o.format === "uri" || o.format === "uri-reference",
      isValid: (i) => !!i.length,
      message: c("validations.uriEmpty", "URI expected.")
    },
    {
      enabled: o.format === "uri" || o.format === "uri-reference",
      isValid: (i) => e.test(i),
      message: c("validations.uriMissing", "URI is expected.")
    },
    {
      enabled: o.format === "uri",
      isValid: (i) => {
        const n = i.match(e);
        return !!(n && n[2]);
      },
      message: c("validations.uriSchemeMissing", "URI with a scheme is expected.")
    },
    {
      enabled: o.enum !== void 0,
      isValid: (i) => o.enum.includes(i),
      message: c(
        "validations.invalidStringEnumValue",
        "Value is not accepted. Valid values: {0}.",
        o.enum ? o.enum.map((i) => `"${i}"`).join(", ") : "[]"
      )
    }
  ].filter((i) => i.enabled);
}
function yd(o) {
  const e = Array.isArray(o.type) ? o.type : [o.type], t = Et(e, "null"), i = Et(e, "integer") && (e.length === 1 || e.length === 2 && t);
  if (!(Et(e, "number", "integer") && (e.length === 1 || e.length === 2 && t)))
    return [];
  let s, r;
  return typeof o.exclusiveMaximum == "boolean" ? s = o.exclusiveMaximum ? o.maximum : void 0 : s = o.exclusiveMaximum, typeof o.exclusiveMinimum == "boolean" ? r = o.exclusiveMinimum ? o.minimum : void 0 : r = o.exclusiveMinimum, [
    {
      enabled: s !== void 0 && (o.maximum === void 0 || s <= o.maximum),
      isValid: (a) => a < s,
      message: c(
        "validations.exclusiveMax",
        "Value must be strictly less than {0}.",
        s
      )
    },
    {
      enabled: r !== void 0 && (o.minimum === void 0 || r >= o.minimum),
      isValid: (a) => a > r,
      message: c(
        "validations.exclusiveMin",
        "Value must be strictly greater than {0}.",
        r
      )
    },
    {
      enabled: o.maximum !== void 0 && (s === void 0 || s > o.maximum),
      isValid: (a) => a <= o.maximum,
      message: c(
        "validations.max",
        "Value must be less than or equal to {0}.",
        o.maximum
      )
    },
    {
      enabled: o.minimum !== void 0 && (r === void 0 || r < o.minimum),
      isValid: (a) => a >= o.minimum,
      message: c(
        "validations.min",
        "Value must be greater than or equal to {0}.",
        o.minimum
      )
    },
    {
      enabled: o.multipleOf !== void 0,
      isValid: (a) => a % o.multipleOf === 0,
      message: c(
        "validations.multipleOf",
        "Value must be a multiple of {0}.",
        o.multipleOf
      )
    },
    {
      enabled: i,
      isValid: (a) => a % 1 === 0,
      message: c("validations.expectedInteger", "Value must be an integer.")
    }
  ].filter((a) => a.enabled);
}
function Sd(o) {
  if (o.type === "array" && o.items && !Array.isArray(o.items)) {
    const e = o.items;
    if (e && !Array.isArray(e.type)) {
      const t = (i) => "'" + i + "'";
      return (i) => {
        if (!i)
          return null;
        let n = "";
        if (!Array.isArray(i))
          return n += c("validations.arrayIncorrectType", "Incorrect type. Expected an array."), n += `
`, n;
        const s = i;
        if (o.uniqueItems && new Set(s).size < s.length && (n += c("validations.stringArrayUniqueItems", "Array has duplicate items"), n += `
`), o.minItems && s.length < o.minItems && (n += c(
          "validations.stringArrayMinItem",
          "Array must have at least {0} items",
          o.minItems
        ), n += `
`), o.maxItems && s.length > o.maxItems && (n += c(
          "validations.stringArrayMaxItem",
          "Array must have at most {0} items",
          o.maxItems
        ), n += `
`), e.type === "string") {
          if (!Zs(s))
            return n += c(
              "validations.stringArrayIncorrectType",
              "Incorrect type. Expected a string array."
            ), n += `
`, n;
          if (typeof e.pattern == "string") {
            const a = new RegExp(e.pattern);
            s.forEach((l) => {
              a.test(l) || (n += e.patternErrorMessage || c(
                "validations.stringArrayItemPattern",
                "Value {0} must match regex {1}.",
                t(l),
                t(e.pattern)
              ));
            });
          }
          const r = e.enum;
          r && s.forEach((a) => {
            r.indexOf(a) === -1 && (n += c(
              "validations.stringArrayItemEnum",
              "Value {0} is not one of {1}",
              t(a),
              "[" + r.map(t).join(", ") + "]"
            ), n += `
`);
          });
        } else
          (e.type === "integer" || e.type === "number") && s.forEach((r) => {
            const a = ki(e, r);
            a && (n += `${r}: ${a}
`);
          });
        return n;
      };
    }
  }
  return null;
}
function vd(o) {
  if (o.type === "object") {
    const { properties: e, patternProperties: t, additionalProperties: i } = o;
    return (n) => {
      if (!n)
        return null;
      const s = [];
      return ss(n) ? Object.keys(n).forEach((r) => {
        const a = n[r];
        if (e && r in e) {
          const l = ki(e[r], a);
          l && s.push(`${r}: ${l}
`);
          return;
        }
        if (t) {
          for (const l in t)
            if (RegExp(l).test(r)) {
              const d = ki(t[l], a);
              d && s.push(`${r}: ${d}
`);
              return;
            }
        }
        if (i === !1)
          s.push(c("validations.objectPattern", `Property {0} is not allowed.
`, r));
        else if (typeof i == "object") {
          const l = ki(i, a);
          l && s.push(`${r}: ${l}
`);
        }
      }) : s.push(c("validations.objectIncorrectType", "Incorrect type. Expected an object.")), s.length ? o.errorMessage ? [o.errorMessage, ...s].join(" ") : s.join(" ") : "";
    };
  }
  return null;
}
function ki(o, e) {
  return so(o)(e);
}
const F = { startLineNumber: -1, startColumn: -1, endLineNumber: -1, endColumn: -1 };
function ln(o) {
  return o.startLineNumber === -1 && o.startColumn === -1 && o.endLineNumber === -1 && o.endColumn === -1;
}
class Ss extends Xs {
  constructor() {
    super(...arguments), this._currentResultGroups = /* @__PURE__ */ new Map();
  }
  updateResultGroup(e, t) {
    return t ? this._currentResultGroups.set(e, t) : this._currentResultGroups.delete(e), this.removeDuplicateResults(), this.update();
  }
  removeDuplicateResults() {
    const e = /* @__PURE__ */ new Set();
    [...this._currentResultGroups.keys()].sort((t, i) => this._currentResultGroups.get(t).order - this._currentResultGroups.get(i).order).forEach((t) => {
      const i = this._currentResultGroups.get(t);
      i.result.filterMatches = i.result.filterMatches.filter((n) => !e.has(n.setting.key)), i.result.filterMatches.forEach((n) => e.add(n.setting.key));
    });
  }
  compareTwoNullableNumbers(e, t) {
    const i = e ?? Number.MAX_SAFE_INTEGER, n = t ?? Number.MAX_SAFE_INTEGER;
    return i < n ? -1 : i > n ? 1 : 0;
  }
  filterSettings(e, t, i) {
    const n = this.filterGroups, s = [];
    for (const r of n) {
      const a = t(r);
      for (const l of r.sections)
        for (const d of l.settings) {
          const g = i(d, r);
          (a || g) && s.push({
            setting: d,
            matches: g && g.matches,
            matchType: (g == null ? void 0 : g.matchType) ?? Ht.None,
            score: (g == null ? void 0 : g.score) ?? 0
          });
        }
    }
    return s.sort((r, a) => {
      if (r.matchType !== a.matchType)
        return a.matchType - r.matchType;
      if (r.setting.extensionInfo && a.setting.extensionInfo && r.setting.extensionInfo.id === a.setting.extensionInfo.id) {
        if (r.setting.categoryLabel !== a.setting.categoryLabel && (r.setting.categoryOrder !== void 0 || a.setting.categoryOrder !== void 0) && r.setting.categoryOrder !== a.setting.categoryOrder)
          return this.compareTwoNullableNumbers(r.setting.categoryOrder, a.setting.categoryOrder);
        if (r.setting.categoryLabel === a.setting.categoryLabel && (r.setting.order !== void 0 || a.setting.order !== void 0) && r.setting.order !== a.setting.order)
          return this.compareTwoNullableNumbers(r.setting.order, a.setting.order);
      }
      return a.score - r.score;
    }), s;
  }
  getPreference(e) {
    for (const t of this.settingsGroups)
      for (const i of t.sections)
        for (const n of i.settings)
          if (e === n.key)
            return n;
  }
  collectMetadata(e) {
    const t = /* @__PURE__ */ Object.create(null);
    let i = !1;
    return e.forEach((n) => {
      n.result.metadata && (t[n.id] = n.result.metadata, i = !0);
    }), i ? t : null;
  }
  get filterGroups() {
    return this.settingsGroups;
  }
}
class vs extends Ss {
  constructor(e, t) {
    super(), this._configurationTarget = t, this._onDidChangeGroups = this._register(new T()), this.onDidChangeGroups = this._onDidChangeGroups.event, this.settingsModel = e.object.textEditorModel, this._register(this.onWillDispose(() => e.dispose())), this._register(this.settingsModel.onDidChangeContent(() => {
      this._settingsGroups = void 0, this._onDidChangeGroups.fire();
    }));
  }
  get uri() {
    return this.settingsModel.uri;
  }
  get configurationTarget() {
    return this._configurationTarget;
  }
  get settingsGroups() {
    return this._settingsGroups || this.parse(), this._settingsGroups;
  }
  get content() {
    return this.settingsModel.getValue();
  }
  findValueMatches(e, t) {
    return this.settingsModel.findMatches(e, t.valueRange, !1, !1, null, !1).map((i) => i.range);
  }
  isSettingsProperty(e, t) {
    return t.length === 0;
  }
  parse() {
    this._settingsGroups = oo(this.settingsModel, (e, t) => this.isSettingsProperty(e, t));
  }
  update() {
    const e = [...this._currentResultGroups.values()];
    if (!e.length)
      return;
    const t = [], i = [];
    e.forEach((a) => {
      a.result.filterMatches.forEach((l) => {
        t.push(l.setting), l.matches && i.push(...l.matches);
      });
    });
    let n;
    const s = this.settingsGroups[0];
    s && (n = {
      id: s.id,
      range: s.range,
      sections: [{
        settings: t
      }],
      title: s.title,
      titleRange: s.titleRange,
      order: s.order,
      extensionInfo: s.extensionInfo
    });
    const r = this.collectMetadata(e);
    return {
      allGroups: this.settingsGroups,
      filteredGroups: n ? [n] : [],
      matches: i,
      metadata: r
    };
  }
}
let Ni = class extends Ss {
  constructor(e, t) {
    super(), this._defaultSettings = e, this._onDidChangeGroups = this._register(new T()), this.onDidChangeGroups = this._onDidChangeGroups.event, this.dirty = !1, this._register(t.onDidChangeConfiguration((i) => {
      i.source === 7 && (this.dirty = !0, this._onDidChangeGroups.fire());
    })), this._register(ue.as(_e.Configuration).onDidSchemaChange((i) => {
      this.dirty = !0, this._onDidChangeGroups.fire();
    }));
  }
  get filterGroups() {
    return this.settingsGroups.slice(1);
  }
  get settingsGroups() {
    var t;
    const e = this._defaultSettings.getSettingsGroups(this.dirty);
    return (t = this.additionalGroups) != null && t.length && e.push(...this.additionalGroups), this.dirty = !1, e;
  }
  setAdditionalGroups(e) {
    this.additionalGroups = e;
  }
  findValueMatches(e, t) {
    return [];
  }
  update() {
    throw new Error("Not supported");
  }
};
Ni = v([
  u(1, ge)
], Ni);
function oo(o, e) {
  const t = [];
  let i = null, n = null, s = [];
  const r = [];
  let a = -1;
  const l = {
    startLineNumber: 0,
    startColumn: 0,
    endLineNumber: 0,
    endColumn: 0
  };
  function d(h, f, m) {
    if (Array.isArray(s) ? s.push(h) : n && (s[n] = h), r.length === a + 1 || r.length === a + 2 && i !== null) {
      const p = r.length === a + 1 ? t[t.length - 1] : i.overrides[i.overrides.length - 1];
      if (p) {
        const y = o.getPositionAt(f), x = o.getPositionAt(f + m);
        p.value = h, p.valueRange = {
          startLineNumber: y.lineNumber,
          startColumn: y.column,
          endLineNumber: x.lineNumber,
          endColumn: x.column
        }, p.range = Object.assign(p.range, {
          endLineNumber: x.lineNumber,
          endColumn: x.column
        });
      }
    }
  }
  const g = {
    onObjectBegin: (h, f) => {
      if (e(n, r)) {
        a = r.length;
        const p = o.getPositionAt(h);
        l.startLineNumber = p.lineNumber, l.startColumn = p.column;
      }
      const m = {};
      d(m, h, f), s = m, n = null, r.push(s);
    },
    onObjectProperty: (h, f, m) => {
      if (n = h, r.length === a + 1 || r.length === a + 2 && i !== null) {
        const p = o.getPositionAt(f), y = {
          description: [],
          descriptionIsMarkdown: !1,
          key: h,
          keyRange: {
            startLineNumber: p.lineNumber,
            startColumn: p.column + 1,
            endLineNumber: p.lineNumber,
            endColumn: p.column + m
          },
          range: {
            startLineNumber: p.lineNumber,
            startColumn: p.column,
            endLineNumber: 0,
            endColumn: 0
          },
          value: null,
          valueRange: F,
          descriptionRanges: [],
          overrides: [],
          overrideOf: rs(i)
        };
        r.length === a + 1 ? (t.push(y), Qt.test(h) && (i = y)) : i.overrides.push(y);
      }
    },
    onObjectEnd: (h, f) => {
      if (s = r.pop(), a !== -1 && (r.length === a + 1 || r.length === a + 2 && i !== null)) {
        const m = r.length === a + 1 ? t[t.length - 1] : i.overrides[i.overrides.length - 1];
        if (m) {
          const p = o.getPositionAt(h + f);
          m.valueRange = Object.assign(m.valueRange, {
            endLineNumber: p.lineNumber,
            endColumn: p.column
          }), m.range = Object.assign(m.range, {
            endLineNumber: p.lineNumber,
            endColumn: p.column
          });
        }
        r.length === a + 1 && (i = null);
      }
      if (r.length === a) {
        const m = o.getPositionAt(h);
        l.endLineNumber = m.lineNumber, l.endColumn = m.column, a = -1;
      }
    },
    onArrayBegin: (h, f) => {
      const m = [];
      d(m, h, f), r.push(s), s = m, n = null;
    },
    onArrayEnd: (h, f) => {
      if (s = r.pop(), r.length === a + 1 || r.length === a + 2 && i !== null) {
        const m = r.length === a + 1 ? t[t.length - 1] : i.overrides[i.overrides.length - 1];
        if (m) {
          const p = o.getPositionAt(h + f);
          m.valueRange = Object.assign(m.valueRange, {
            endLineNumber: p.lineNumber,
            endColumn: p.column
          }), m.range = Object.assign(m.range, {
            endLineNumber: p.lineNumber,
            endColumn: p.column
          });
        }
      }
    },
    onLiteralValue: d,
    onError: (h) => {
      const f = t[t.length - 1];
      f && (ln(f.range) || ln(f.keyRange) || ln(f.valueRange)) && t.pop();
    }
  };
  return o.isDisposed() || ta(o.getValue(), g), t.length > 0 ? [{
    sections: [
      {
        settings: t
      }
    ],
    title: "",
    titleRange: F,
    range: l
  }] : [];
}
class Tn extends vs {
  constructor() {
    super(...arguments), this._configurationGroups = [];
  }
  get configurationGroups() {
    return this._configurationGroups;
  }
  parse() {
    super.parse(), this._configurationGroups = oo(this.settingsModel, (e, t) => t.length === 0);
  }
  isSettingsProperty(e, t) {
    return e === "settings" && t.length === 1;
  }
}
class gn extends Q {
  constructor(e, t) {
    super(), this._mostCommonlyUsedSettingsKeys = e, this.target = t, this._settingsByName = /* @__PURE__ */ new Map(), this._onDidChange = this._register(new T()), this.onDidChange = this._onDidChange.event;
  }
  getContent(e = !1) {
    return (!this._content || e) && this.initialize(), this._content;
  }
  getContentWithoutMostCommonlyUsed(e = !1) {
    return (!this._contentWithoutMostCommonlyUsed || e) && this.initialize(), this._contentWithoutMostCommonlyUsed;
  }
  getSettingsGroups(e = !1) {
    return (!this._allSettingsGroups || e) && this.initialize(), this._allSettingsGroups;
  }
  initialize() {
    this._allSettingsGroups = this.parse(), this._content = this.toContent(this._allSettingsGroups, 0), this._contentWithoutMostCommonlyUsed = this.toContent(this._allSettingsGroups, 1);
  }
  parse() {
    const e = this.getRegisteredGroups();
    return this.initAllSettingsMap(e), [this.getMostCommonlyUsedSettings(e), ...e];
  }
  getRegisteredGroups() {
    const e = ue.as(_e.Configuration).getConfigurations().slice(), t = this.removeEmptySettingsGroups(e.sort(this.compareConfigurationNodes).reduce((i, n, s, r) => this.parseConfig(n, i, r), []));
    return this.sortGroups(t);
  }
  sortGroups(e) {
    return e.forEach((t) => {
      t.sections.forEach((i) => {
        i.settings.sort((n, s) => n.key.localeCompare(s.key));
      });
    }), e;
  }
  initAllSettingsMap(e) {
    this._settingsByName = /* @__PURE__ */ new Map();
    for (const t of e)
      for (const i of t.sections)
        for (const n of i.settings)
          this._settingsByName.set(n.key, n);
  }
  getMostCommonlyUsedSettings(e) {
    const t = ns(this._mostCommonlyUsedSettingsKeys.map((i) => {
      const n = this._settingsByName.get(i);
      return n ? {
        description: n.description,
        key: n.key,
        value: n.value,
        keyRange: F,
        range: F,
        valueRange: F,
        overrides: [],
        scope: 4,
        type: n.type,
        enum: n.enum,
        enumDescriptions: n.enumDescriptions,
        descriptionRanges: []
      } : null;
    }));
    return {
      id: "mostCommonlyUsed",
      range: F,
      title: c("commonlyUsed", "Commonly Used"),
      titleRange: F,
      sections: [
        {
          settings: t
        }
      ]
    };
  }
  parseConfig(e, t, i, n, s) {
    var a;
    s = s || {};
    let r = e.title;
    if (!r) {
      const l = i.find((d) => d.id === e.id && d.title);
      l && (r = l.title);
    }
    if (r && (n ? n.sections[n.sections.length - 1].title = r : (n = t.find((l) => {
      var d, g;
      return l.title === r && ((d = l.extensionInfo) == null ? void 0 : d.id) === ((g = e.extensionInfo) == null ? void 0 : g.id);
    }), n || (n = { sections: [{ settings: [] }], id: e.id || "", title: r || "", titleRange: F, order: e.order, range: F, extensionInfo: e.extensionInfo }, t.push(n)))), e.properties) {
      n || (n = { sections: [{ settings: [] }], id: e.id || "", title: e.id || "", titleRange: F, order: e.order, range: F, extensionInfo: e.extensionInfo }, t.push(n));
      const l = [];
      for (const d of [...n.sections[n.sections.length - 1].settings, ...this.parseSettings(e)])
        s[d.key] || (l.push(d), s[d.key] = !0);
      l.length && (n.sections[n.sections.length - 1].settings = l);
    }
    return (a = e.allOf) == null || a.forEach((l) => this.parseConfig(l, t, i, n, s)), t;
  }
  removeEmptySettingsGroups(e) {
    const t = [];
    for (const i of e)
      i.sections = i.sections.filter((n) => n.settings.length > 0), i.sections.length && t.push(i);
    return t;
  }
  parseSettings(e) {
    var a;
    const t = [], i = e.properties, n = e.extensionInfo, s = ((a = e.extensionInfo) == null ? void 0 : a.id) === e.id ? e.title : e.id, r = e.order;
    for (const l in i) {
      const d = i[l];
      if (this.matchesScope(d)) {
        const g = d.default;
        let h = d.markdownDescription || d.description || "";
        typeof h != "string" && (h = "");
        const f = h.split(`
`), m = Qt.test(l) ? this.parseOverrideSettings(d.default) : [];
        let p;
        d.type === "array" && d.items && !Array.isArray(d.items) && d.items.type && (d.items.enum ? p = "enum" : Array.isArray(d.items.type) || (p = d.items.type));
        const y = d.type === "object" ? d.properties : void 0, x = d.type === "object" ? d.patternProperties : void 0, E = d.type === "object" ? d.additionalProperties : void 0;
        let S = d.enum, A = d.markdownEnumDescriptions ?? d.enumDescriptions, C = !!d.markdownEnumDescriptions;
        p === "enum" && !Array.isArray(d.items) && (S = d.items.enum, A = d.items.markdownEnumDescriptions ?? d.items.enumDescriptions, C = !!d.items.markdownEnumDescriptions);
        let Z = !1;
        d.type === "object" && !d.additionalProperties && d.properties && Object.keys(d.properties).length && (Z = Object.keys(d.properties).every((Se) => d.properties[Se].type === "boolean"));
        let z = !1;
        Qt.test(l) && (z = !0);
        let ie;
        if (!z) {
          const Se = d;
          Se && Se.defaultValueSource && (ie = Se.defaultValueSource);
        }
        t.push({
          key: l,
          value: g,
          description: f,
          descriptionIsMarkdown: !!d.markdownDescription,
          range: F,
          keyRange: F,
          valueRange: F,
          descriptionRanges: [],
          overrides: m,
          scope: d.scope,
          type: d.type,
          arrayItemType: p,
          objectProperties: y,
          objectPatternProperties: x,
          objectAdditionalProperties: E,
          enum: S,
          enumDescriptions: A,
          enumDescriptionsAreMarkdown: C,
          uniqueItems: d.uniqueItems,
          tags: d.tags,
          disallowSyncIgnore: d.disallowSyncIgnore,
          restricted: d.restricted,
          extensionInfo: n,
          deprecationMessage: d.markdownDeprecationMessage || d.deprecationMessage,
          deprecationMessageIsMarkdown: !!d.markdownDeprecationMessage,
          validator: so(d),
          enumItemLabels: d.enumItemLabels,
          allKeysAreBoolean: Z,
          editPresentation: d.editPresentation,
          order: d.order,
          nonLanguageSpecificDefaultValueSource: ie,
          isLanguageTagSetting: z,
          categoryLabel: s,
          categoryOrder: r
        });
      }
    }
    return t;
  }
  parseOverrideSettings(e) {
    return Object.keys(e).map((t) => ({
      key: t,
      value: e[t],
      description: [],
      descriptionIsMarkdown: !1,
      range: F,
      keyRange: F,
      valueRange: F,
      descriptionRanges: [],
      overrides: []
    }));
  }
  matchesScope(e) {
    return e.scope ? this.target === 6 ? er.indexOf(e.scope) !== -1 : this.target === 5 ? tr.indexOf(e.scope) !== -1 : !0 : !0;
  }
  compareConfigurationNodes(e, t) {
    if (typeof e.order != "number")
      return 1;
    if (typeof t.order != "number")
      return -1;
    if (e.order === t.order) {
      const i = e.title || "", n = t.title || "";
      return i.localeCompare(n);
    }
    return e.order - t.order;
  }
  toContent(e, t) {
    const i = new ws();
    for (let n = t; n < e.length; n++)
      i.pushGroup(e[n], n === t, n === e.length - 1);
    return i.getContent();
  }
}
class ao extends Ss {
  constructor(e, t, i) {
    super(), this._uri = e, this.defaultSettings = i, this._onDidChangeGroups = this._register(new T()), this.onDidChangeGroups = this._onDidChangeGroups.event, this._register(i.onDidChange(() => this._onDidChangeGroups.fire())), this._model = t.object.textEditorModel, this._register(this.onWillDispose(() => t.dispose()));
  }
  get uri() {
    return this._uri;
  }
  get target() {
    return this.defaultSettings.target;
  }
  get settingsGroups() {
    return this.defaultSettings.getSettingsGroups();
  }
  get filterGroups() {
    return this.settingsGroups.slice(1);
  }
  update() {
    if (this._model.isDisposed())
      return;
    const e = [...this._currentResultGroups.values()].sort((a, l) => a.order - l.order), t = e.filter((a) => a.result.filterMatches.length), i = ia(this.settingsGroups).range.endLineNumber + 2, { settingsGroups: n, matches: s } = this.writeResultGroups(t, i), r = this.collectMetadata(e);
    return e.length ? {
      allGroups: this.settingsGroups,
      filteredGroups: n,
      matches: s,
      metadata: r
    } : void 0;
  }
  writeResultGroups(e, t) {
    const i = t - 1, n = new ws(i), s = [], r = [];
    e.length && (n.pushLine(","), e.forEach((f) => {
      const m = this.getGroup(f);
      s.push(m), r.push(...this.writeSettingsGroupToBuilder(n, m, f.result.filterMatches));
    }));
    const a = n.getContent() + `
`, l = this._model.getLineCount(), d = new na(t, 1, t, 1), g = {
      text: a,
      forceMoveMarkers: !0,
      range: new vt(t, 1, l, 1)
    };
    this._model.pushEditOperations([d], [g], () => [d]);
    const h = Math.min(t + 60, this._model.getLineCount());
    return this._model.tokenization.forceTokenization(h), { matches: r, settingsGroups: s };
  }
  writeSettingsGroupToBuilder(e, t, i) {
    return i = i.map((s) => ({
      setting: s.setting,
      score: s.score,
      matches: s.matches && s.matches.map((r) => new vt(
        r.startLineNumber - s.setting.range.startLineNumber,
        r.startColumn,
        r.endLineNumber - s.setting.range.startLineNumber,
        r.endColumn
      ))
    })), e.pushGroup(t), ir(i.map((s) => s.matches || []).map((s, r) => {
      const a = t.sections[0].settings[r];
      return s.map((l) => new vt(
        l.startLineNumber + a.range.startLineNumber,
        l.startColumn,
        l.endLineNumber + a.range.startLineNumber,
        l.endColumn
      ));
    }));
  }
  copySetting(e) {
    return {
      description: e.description,
      scope: e.scope,
      type: e.type,
      enum: e.enum,
      enumDescriptions: e.enumDescriptions,
      key: e.key,
      value: e.value,
      range: e.range,
      overrides: [],
      overrideOf: e.overrideOf,
      tags: e.tags,
      deprecationMessage: e.deprecationMessage,
      keyRange: F,
      valueRange: F,
      descriptionIsMarkdown: void 0,
      descriptionRanges: []
    };
  }
  findValueMatches(e, t) {
    return [];
  }
  getPreference(e) {
    for (const t of this.settingsGroups)
      for (const i of t.sections)
        for (const n of i.settings)
          if (n.key === e)
            return n;
  }
  getGroup(e) {
    return {
      id: e.id,
      range: F,
      title: e.label,
      titleRange: F,
      sections: [
        {
          settings: e.result.filterMatches.map((t) => this.copySetting(t.setting))
        }
      ]
    };
  }
}
class ws {
  get lineCountWithOffset() {
    return this._contentByLines.length + this._rangeOffset;
  }
  get lastLine() {
    return this._contentByLines[this._contentByLines.length - 1] || "";
  }
  constructor(e = 0) {
    this._rangeOffset = e, this._contentByLines = [];
  }
  pushLine(...e) {
    this._contentByLines.push(...e);
  }
  pushGroup(e, t, i) {
    this._contentByLines.push(t ? "[{" : "{");
    const n = this._pushGroup(e, "  ");
    if (n) {
      const s = n.range.endLineNumber - this._rangeOffset, r = this._contentByLines[s - 2];
      this._contentByLines[s - 2] = r.substring(0, r.length - 1);
    }
    this._contentByLines.push(i ? "}]" : "},");
  }
  _pushGroup(e, t) {
    let i = null;
    const n = this.lineCountWithOffset + 1;
    for (const s of e.sections) {
      if (s.title) {
        const r = this.lineCountWithOffset + 1;
        this.addDescription([s.title], t, this._contentByLines), s.titleRange = { startLineNumber: r, startColumn: 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length };
      }
      if (s.settings.length)
        for (const r of s.settings)
          this.pushSetting(r, t), i = r;
    }
    return e.range = { startLineNumber: n, startColumn: 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length }, i;
  }
  getContent() {
    return this._contentByLines.join(`
`);
  }
  pushSetting(e, t) {
    const i = this.lineCountWithOffset + 1;
    this.pushSettingDescription(e, t);
    let n = t;
    const s = JSON.stringify(e.key);
    n += s, e.keyRange = { startLineNumber: this.lineCountWithOffset + 1, startColumn: n.indexOf(e.key) + 1, endLineNumber: this.lineCountWithOffset + 1, endColumn: e.key.length }, n += ": ";
    const r = this.lineCountWithOffset + 1;
    this.pushValue(e, n, t), e.valueRange = { startLineNumber: r, startColumn: n.length + 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length + 1 }, this._contentByLines[this._contentByLines.length - 1] += ",", this._contentByLines.push(""), e.range = { startLineNumber: i, startColumn: 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length };
  }
  pushSettingDescription(e, t) {
    var r;
    const i = (a) => a.replace(/`#(.*)#`/g, (l, d) => `\`${d}\``);
    e.descriptionRanges = [];
    const n = t + "// ", s = ((r = e.deprecationMessage) == null ? void 0 : r.split(/\n/g)) ?? [];
    for (let a of [...s, ...e.description])
      a = i(a), this._contentByLines.push(n + a), e.descriptionRanges.push({ startLineNumber: this.lineCountWithOffset, startColumn: this.lastLine.indexOf(a) + 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length });
    e.enumDescriptions && e.enumDescriptions.some((a) => !!a) && e.enumDescriptions.forEach((a, l) => {
      const d = xd(String(e.enum[l])), g = a ? `${d}: ${i(a)}` : d, h = g.split(/\n/g);
      h[0] = " - " + h[0], this._contentByLines.push(...h.map((f) => `${t}// ${f}`)), e.descriptionRanges.push({ startLineNumber: this.lineCountWithOffset, startColumn: this.lastLine.indexOf(g) + 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length });
    });
  }
  pushValue(e, t, i) {
    const n = JSON.stringify(e.value, null, i);
    if (n && typeof e.value == "object")
      if (e.overrides && e.overrides.length) {
        this._contentByLines.push(t + " {");
        for (const a of e.overrides)
          this.pushSetting(a, i + i), this._contentByLines.pop();
        const s = e.overrides[e.overrides.length - 1], r = this._contentByLines[s.range.endLineNumber - 2];
        this._contentByLines[s.range.endLineNumber - 2] = r.substring(0, r.length - 1), this._contentByLines.push(i + "}");
      } else {
        const s = n.split(`
`);
        this._contentByLines.push(t + s[0]);
        for (let r = 1; r < s.length; r++)
          this._contentByLines.push(i + s[r]);
      }
    else
      this._contentByLines.push(t + n);
  }
  addDescription(e, t, i) {
    for (const n of e)
      i.push(t + "// " + n);
  }
}
class wd extends ws {
  constructor(e = "	") {
    super(0), this.indent = e;
  }
  pushGroup(e) {
    this._pushGroup(e, this.indent);
  }
}
class Ed extends Q {
  constructor(e) {
    super(), this.defaultSettings = e, this._content = null, this._register(e.onDidChange(() => this._content = null));
  }
  get content() {
    if (this._content === null) {
      const e = new wd();
      e.pushLine("{");
      for (const t of this.defaultSettings.getRegisteredGroups())
        e.pushGroup(t);
      e.pushLine("}"), this._content = e.getContent();
    }
    return this._content;
  }
}
function xd(o) {
  return o && o.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
}
function co(o) {
  return "// " + c(
    "defaultKeybindingsHeader",
    "Override key bindings by placing them into your key bindings file."
  ) + `
` + o.getDefaultKeybindingsContent();
}
let In = class {
  constructor(e, t) {
    this._uri = e, this.keybindingService = t;
  }
  get uri() {
    return this._uri;
  }
  get content() {
    return this._content || (this._content = co(this.keybindingService)), this._content;
  }
  getPreference() {
    return null;
  }
  dispose() {
  }
};
In = v([
  u(1, Fe)
], In);
const Cd = `{
}`;
let _n = class extends Q {
  constructor(e, t, i, n, s, r, a, l, d, g, h, f, m, p, y, x, E) {
    super(), this.editorService = e, this.editorGroupService = t, this.textFileService = i, this.configurationService = n, this.notificationService = s, this.contextService = r, this.instantiationService = a, this.userDataProfileService = l, this.userDataProfilesService = d, this.textModelResolverService = g, this.modelService = f, this.jsonEditingService = m, this.languageService = p, this.labelService = y, this.remoteAgentService = x, this.textEditorService = E, this._onDispose = this._register(new T()), this.defaultKeybindingsResource = Y.from(
      { scheme: me.vscode, authority: "defaultsettings", path: "/keybindings.json" }
    ), this.defaultSettingsRawResource = Y.from(
      { scheme: me.vscode, authority: "defaultsettings", path: "/defaultSettings.json" }
    ), this._register(h.onDidUpdateKeybindings(() => {
      const S = f.getModel(this.defaultKeybindingsResource);
      S && f.updateModel(S, co(h));
    }));
  }
  get userSettingsResource() {
    return this.userDataProfileService.currentProfile.settingsResource;
  }
  get workspaceSettingsResource() {
    if (this.contextService.getWorkbenchState() === 1)
      return null;
    const e = this.contextService.getWorkspace();
    return e.configuration || e.folders[0].toResource(Di);
  }
  get settingsEditor2Input() {
    return this.instantiationService.createInstance(Oi);
  }
  getFolderSettingsResource(e) {
    const t = this.contextService.getWorkspaceFolder(e);
    return t ? t.toResource(Di) : null;
  }
  resolveModel(e) {
    if (this.isDefaultSettingsResource(e)) {
      const t = this.getConfigurationTargetFromDefaultSettingsResource(e), i = this.languageService.createById("jsonc"), n = this._register(this.modelService.createModel("", i, e));
      let s;
      return this.configurationService.onDidChangeConfiguration((r) => {
        if (r.source === 7) {
          const a = this.modelService.getModel(e);
          if (!a)
            return;
          s = this.getDefaultSettings(t), this.modelService.updateModel(a, s.getContentWithoutMostCommonlyUsed(!0)), s._onDidChange.fire();
        }
      }), s || (s = this.getDefaultSettings(t), this.modelService.updateModel(n, s.getContentWithoutMostCommonlyUsed(!0))), n;
    }
    if (this.defaultSettingsRawResource.toString() === e.toString()) {
      const t = this.instantiationService.createInstance(Ed, this.getDefaultSettings(3)), i = this.languageService.createById("jsonc");
      return this._register(this.modelService.createModel(t.content, i, e));
    }
    if (this.defaultKeybindingsResource.toString() === e.toString()) {
      const t = this.instantiationService.createInstance(In, e), i = this.languageService.createById("jsonc");
      return this._register(this.modelService.createModel(t.content, i, e));
    }
    return null;
  }
  async createPreferencesEditorModel(e) {
    if (this.isDefaultSettingsResource(e))
      return this.createDefaultSettingsEditorModel(e);
    if (this.userSettingsResource.toString() === e.toString() || this.userDataProfilesService.defaultProfile.settingsResource.toString() === e.toString())
      return this.createEditableSettingsEditorModel(3, e);
    const t = await this.getEditableSettingsURI(5);
    if (t && t.toString() === e.toString())
      return this.createEditableSettingsEditorModel(5, t);
    if (this.contextService.getWorkbenchState() === 3) {
      const s = await this.getEditableSettingsURI(6, e);
      if (s && s.toString() === e.toString())
        return this.createEditableSettingsEditorModel(6, e);
    }
    const i = await this.remoteAgentService.getEnvironment(), n = i ? i.settingsPath : null;
    return n && n.toString() === e.toString() ? this.createEditableSettingsEditorModel(4, e) : null;
  }
  openRawDefaultSettings() {
    return this.editorService.openEditor({ resource: this.defaultSettingsRawResource });
  }
  openRawUserSettings() {
    return this.editorService.openEditor({ resource: this.userSettingsResource });
  }
  shouldOpenJsonByDefault() {
    return this.configurationService.getValue("workbench.settings.editor") === "json";
  }
  openSettings(e = {}) {
    return e = {
      ...e,
      target: 3
    }, e.query && (e.jsonEditor = !1), this.open(this.userSettingsResource, e);
  }
  openLanguageSpecificSettings(e, t = {}) {
    return this.shouldOpenJsonByDefault() ? (t.query = void 0, t.revealSetting = { key: `[${e}]`, edit: !0 }) : t.query = `@lang:${e}${t.query ? ` ${t.query}` : ""}`, t.target = t.target ?? 3, this.open(this.userSettingsResource, t);
  }
  open(e, t) {
    return t = {
      ...t,
      jsonEditor: t.jsonEditor ?? this.shouldOpenJsonByDefault()
    }, t.jsonEditor ? this.openSettingsJson(e, t) : this.openSettings2(t);
  }
  async openSettings2(e) {
    const t = this.settingsEditor2Input;
    return e = {
      ...e,
      focusSearch: !0
    }, await this.editorService.openEditor(t, wi(e), e.openToSide ? _s : void 0), this.editorGroupService.activeGroup.activeEditorPane;
  }
  openApplicationSettings(e = {}) {
    return e = {
      ...e,
      target: 3
    }, this.open(this.userDataProfilesService.defaultProfile.settingsResource, e);
  }
  openUserSettings(e = {}) {
    return e = {
      ...e,
      target: 3
    }, this.open(this.userSettingsResource, e);
  }
  async openRemoteSettings(e = {}) {
    const t = await this.remoteAgentService.getEnvironment();
    t && (e = {
      ...e,
      target: 4
    }, this.open(t.settingsPath, e));
  }
  openWorkspaceSettings(e = {}) {
    return this.workspaceSettingsResource ? (e = {
      ...e,
      target: 5
    }, this.open(this.workspaceSettingsResource, e)) : (this.notificationService.info(c(
      "openFolderFirst",
      "Open a folder or workspace first to create workspace or folder settings."
    )), Promise.reject(null));
  }
  async openFolderSettings(e = {}) {
    if (e = {
      ...e,
      target: 6
    }, !e.folderUri)
      throw new Error("Missing folder URI");
    const t = await this.getEditableSettingsURI(6, e.folderUri);
    if (!t)
      throw new Error(`Invalid folder URI - ${e.folderUri.toString()}`);
    return this.open(t, e);
  }
  async openGlobalKeybindingSettings(e, t) {
    if (t = { pinned: !0, revealIfOpened: !0, ...t }, e) {
      const i = "// " + c(
        "emptyKeybindingsHeader",
        "Place your key bindings in this file to override the defaults"
      ) + `
[
]`, n = this.userDataProfileService.currentProfile.keybindingsResource, s = !!this.configurationService.getValue("workbench.settings.openDefaultKeybindings");
      if (await this.createIfNotExists(n, i), s) {
        const r = this.editorGroupService.activeGroup, a = this.editorGroupService.addGroup(r.id, 3);
        await Promise.all([
          this.editorService.openEditor({ resource: this.defaultKeybindingsResource, options: { pinned: !0, preserveFocus: !0, revealIfOpened: !0, override: aa.id }, label: c("defaultKeybindings", "Default Keybindings"), description: "" }),
          this.editorService.openEditor({ resource: n, options: t }, a.id)
        ]);
      } else
        await this.editorService.openEditor({ resource: n, options: t });
    } else {
      const i = await this.editorService.openEditor(this.instantiationService.createInstance(Ai), { ...t });
      t.query && i.search(t.query);
    }
  }
  openDefaultKeybindingsFile() {
    return this.editorService.openEditor({ resource: this.defaultKeybindingsResource, label: c("defaultKeybindings", "Default Keybindings") });
  }
  async openSettingsJson(e, t) {
    const i = t != null && t.openToSide ? _s : void 0, n = await this.doOpenSettingsJson(e, t, i);
    return n && (t != null && t.revealSetting) && await this.revealSetting(t.revealSetting.key, !!t.revealSetting.edit, n, e), n;
  }
  async doOpenSettingsJson(e, t, i) {
    const n = !!this.configurationService.getValue(vn), s = !!this.configurationService.getValue(wn);
    if (n || s)
      return this.doOpenSplitJSON(e, t, i);
    const r = (t == null ? void 0 : t.target) ?? 2, a = await this.getOrCreateEditableSettingsEditorInput(r, e);
    return t = { ...t, pinned: !0 }, await this.editorService.openEditor(a, wi(t), i);
  }
  async doOpenSplitJSON(e, t = {}, i) {
    const n = t.target ?? 2;
    await this.createSettingsIfNotExists(n, e);
    const s = this.createSplitJsonEditorInput(n, e);
    return t = { ...t, pinned: !0 }, this.editorService.openEditor(s, wi(t), i);
  }
  createSplitJsonEditorInput(e, t) {
    const i = this.textEditorService.createTextEditor({ resource: t }), n = this.instantiationService.createInstance(ca, this.getDefaultSettingsResource(e), void 0, void 0, void 0, void 0);
    return this.instantiationService.createInstance(ar, i.getName(), void 0, n, i);
  }
  createSettings2EditorModel() {
    return this.instantiationService.createInstance(Ni, this.getDefaultSettings(3));
  }
  getConfigurationTargetFromDefaultSettingsResource(e) {
    return this.isDefaultWorkspaceSettingsResource(e) ? 5 : this.isDefaultFolderSettingsResource(e) ? 6 : 3;
  }
  isDefaultSettingsResource(e) {
    return this.isDefaultUserSettingsResource(e) || this.isDefaultWorkspaceSettingsResource(e) || this.isDefaultFolderSettingsResource(e);
  }
  isDefaultUserSettingsResource(e) {
    return e.authority === "defaultsettings" && e.scheme === me.vscode && !!e.path.match(/\/(\d+\/)?settings\.json$/);
  }
  isDefaultWorkspaceSettingsResource(e) {
    return e.authority === "defaultsettings" && e.scheme === me.vscode && !!e.path.match(/\/(\d+\/)?workspaceSettings\.json$/);
  }
  isDefaultFolderSettingsResource(e) {
    return e.authority === "defaultsettings" && e.scheme === me.vscode && !!e.path.match(/\/(\d+\/)?resourceSettings\.json$/);
  }
  getDefaultSettingsResource(e) {
    switch (e) {
      case 5:
        return Y.from(
          { scheme: me.vscode, authority: "defaultsettings", path: "/workspaceSettings.json" }
        );
      case 6:
        return Y.from(
          { scheme: me.vscode, authority: "defaultsettings", path: "/resourceSettings.json" }
        );
    }
    return Y.from(
      { scheme: me.vscode, authority: "defaultsettings", path: "/settings.json" }
    );
  }
  async getOrCreateEditableSettingsEditorInput(e, t) {
    return await this.createSettingsIfNotExists(e, t), this.textEditorService.createTextEditor({ resource: t });
  }
  async createEditableSettingsEditorModel(e, t) {
    const i = this.contextService.getWorkspace();
    if (i.configuration && i.configuration.toString() === t.toString()) {
      const s = await this.textModelResolverService.createModelReference(t);
      return this.instantiationService.createInstance(Tn, s, e);
    }
    const n = await this.textModelResolverService.createModelReference(t);
    return this.instantiationService.createInstance(vs, n, e);
  }
  async createDefaultSettingsEditorModel(e) {
    const t = await this.textModelResolverService.createModelReference(e), i = this.getConfigurationTargetFromDefaultSettingsResource(e);
    return this.instantiationService.createInstance(ao, e, t, this.getDefaultSettings(i));
  }
  getDefaultSettings(e) {
    return e === 5 ? (this._defaultWorkspaceSettingsContentModel || (this._defaultWorkspaceSettingsContentModel = new gn(this.getMostCommonlyUsedSettings(), e)), this._defaultWorkspaceSettingsContentModel) : e === 6 ? (this._defaultFolderSettingsContentModel || (this._defaultFolderSettingsContentModel = new gn(this.getMostCommonlyUsedSettings(), e)), this._defaultFolderSettingsContentModel) : (this._defaultUserSettingsContentModel || (this._defaultUserSettingsContentModel = new gn(this.getMostCommonlyUsedSettings(), e)), this._defaultUserSettingsContentModel);
  }
  async getEditableSettingsURI(e, t) {
    switch (e) {
      case 1:
        return this.userDataProfilesService.defaultProfile.settingsResource;
      case 2:
      case 3:
        return this.userSettingsResource;
      case 4: {
        const i = await this.remoteAgentService.getEnvironment();
        return i ? i.settingsPath : null;
      }
      case 5:
        return this.workspaceSettingsResource;
      case 6:
        if (t)
          return this.getFolderSettingsResource(t);
    }
    return null;
  }
  async createSettingsIfNotExists(e, t) {
    if (this.contextService.getWorkbenchState() === 3 && e === 5) {
      const i = this.contextService.getWorkspace().configuration;
      if (!i)
        return;
      const n = await this.textFileService.read(i);
      Object.keys(cr(n.value)).indexOf("settings") === -1 && await this.jsonEditingService.write(t, [{ path: ["settings"], value: {} }], !0);
      return;
    }
    await this.createIfNotExists(t, Cd);
  }
  async createIfNotExists(e, t) {
    try {
      await this.textFileService.read(e, { acceptTextOnly: !0 });
    } catch (i) {
      if (i.fileOperationResult === 1)
        try {
          await this.textFileService.write(e, t);
          return;
        } catch (n) {
          throw new Error(c("fail.createSettings", "Unable to create '{0}' ({1}).", this.labelService.getUriLabel(e, { relative: !0 }), da(n)));
        }
      else
        throw i;
    }
  }
  getMostCommonlyUsedSettings() {
    return [
      "files.autoSave",
      "editor.fontSize",
      "editor.fontFamily",
      "editor.tabSize",
      "editor.renderWhitespace",
      "editor.cursorStyle",
      "editor.multiCursorModifier",
      "editor.insertSpaces",
      "editor.wordWrap",
      "files.exclude",
      "files.associations",
      "workbench.editor.enablePreview"
    ];
  }
  async revealSetting(e, t, i, n) {
    var l;
    const s = i ? la(i.getControl()) : null;
    if (!s)
      return;
    const r = await this.createPreferencesEditorModel(n);
    if (!r)
      return;
    const a = await this.getPositionToReveal(e, t, r, s);
    a && (s.setPosition(a), s.revealPositionNearTop(a), s.focus(), t && ((l = as.get(s)) == null || l.triggerSuggest()));
  }
  async getPositionToReveal(e, t, i, n) {
    const s = n.getModel();
    if (!s)
      return null;
    const r = ue.as(_e.Configuration).getConfigurationProperties()[e], a = Qt.test(e);
    if (!r && !a)
      return null;
    let l = null;
    const d = (r == null ? void 0 : r.type) ?? "object";
    let g = i.getPreference(e);
    if (!g && t) {
      let h = d === "object" || d === "array" ? this.configurationService.inspect(e).defaultValue : ga(d);
      if (h = h === void 0 && a ? {} : h, h !== void 0) {
        const f = i instanceof Tn ? ["settings", e] : [e];
        await this.jsonEditingService.write(i.uri, [{ path: f, value: h }], !1), g = i.getPreference(e);
      }
    }
    if (g)
      if (t)
        if (ss(g.value) || Array.isArray(g.value)) {
          l = { lineNumber: g.valueRange.startLineNumber, column: g.valueRange.startColumn + 1 }, n.setPosition(l), await Ds.LineBreakInsert.runEditorCommand(null, n, null), l = { lineNumber: l.lineNumber + 1, column: s.getLineMaxColumn(l.lineNumber + 1) };
          const h = s.getLineFirstNonWhitespaceColumn(l.lineNumber);
          h && (n.setPosition({ lineNumber: l.lineNumber, column: h }), await Ds.LineBreakInsert.runEditorCommand(null, n, null), l = { lineNumber: l.lineNumber, column: s.getLineMaxColumn(l.lineNumber) });
        } else
          l = { lineNumber: g.valueRange.startLineNumber, column: g.valueRange.endColumn };
      else
        l = { lineNumber: g.keyRange.startLineNumber, column: g.keyRange.startColumn };
    return l;
  }
  dispose() {
    this._onDispose.fire(), super.dispose();
  }
};
_n = v([
  u(0, N),
  u(1, nr),
  u(2, sa),
  u(3, ge),
  u(4, sr),
  u(5, lt),
  u(6, $),
  u(7, Wt),
  u(8, Ft),
  u(9, rr),
  u(10, Fe),
  u(11, sn),
  u(12, ra),
  u(13, Pe),
  u(14, os),
  u(15, oa),
  u(16, or)
], _n);
let Dn = class extends Q {
  constructor(e, t, i, n, s) {
    super(), this.instantiationService = e, this.configurationService = t, this.productService = i, this.extensionManagementService = n, this.extensionEnablementService = s, this._installedExtensions = this.extensionManagementService.getInstalled(1).then((r) => r.filter((a) => this.extensionEnablementService.isEnabled(a)).filter((a) => a.manifest && a.manifest.contributes && a.manifest.contributes.configuration).filter((a) => !!a.identifier.uuid));
  }
  get remoteSearchAllowed() {
    return this.configurationService.getValue().workbench.settings.enableNaturalLanguageSearch ? !!this._endpoint.urlBase : !1;
  }
  get _endpoint() {
    const e = this.configurationService.getValue().workbench.settings;
    return e.naturalLanguageSearchEndpoint ? {
      urlBase: e.naturalLanguageSearchEndpoint,
      key: e.naturalLanguageSearchKey
    } : {
      urlBase: this.productService.settingsSearchUrl
    };
  }
  getRemoteSearchProvider(e, t = !1) {
  }
  getLocalSearchProvider(e) {
    return this.instantiationService.createInstance(Ln, e);
  }
};
Dn = v([
  u(0, $),
  u(1, ge),
  u(2, ii),
  u(3, dr),
  u(4, ua)
], Dn);
var Oe;
let Ln = (Oe = class {
  constructor(e, t) {
    this._filter = e, this.configurationService = t, this._filter = this._filter.replace(/[":]/g, " ").replace(/  /g, " ").trim();
  }
  searchModel(e, t) {
    if (!this._filter)
      return Promise.resolve(null);
    let i = Oe.START_SCORE;
    const n = (r) => {
      const { matches: a, matchType: l } = new Mn(
        this._filter,
        r,
        !0,
        !0,
        (g, h) => e.findValueMatches(g, h),
        this.configurationService
      ), d = this._filter === r.key ? Oe.EXACT_MATCH_SCORE : i--;
      return a && a.length ? {
        matches: a,
        matchType: l,
        score: d
      } : null;
    }, s = e.filterSettings(this._filter, this.getGroupFilter(this._filter), n);
    return s[0] && s[0].score === Oe.EXACT_MATCH_SCORE ? Promise.resolve({
      filterMatches: s.slice(0, 1),
      exactMatch: !0
    }) : Promise.resolve({
      filterMatches: s
    });
  }
  getGroupFilter(e) {
    const t = ha(e, !1, { global: !0 });
    return (i) => t.test(i.title);
  }
}, Oe.EXACT_MATCH_SCORE = 1e4, Oe.START_SCORE = 1e3, Oe);
Ln = v([
  u(1, ge)
], Ln);
let Mn = class lo {
  constructor(e, t, i, n, s, r) {
    this.requireFullQueryMatch = i, this.searchDescription = n, this.valuesMatcher = s, this.configurationService = r, this.descriptionMatchingWords = /* @__PURE__ */ new Map(), this.keyMatchingWords = /* @__PURE__ */ new Map(), this.valueMatchingWords = /* @__PURE__ */ new Map(), this.matchType = Ht.None, this.matches = Nt(this._findMatchesInSetting(e, t), (a) => `${a.startLineNumber}_${a.startColumn}_${a.endLineNumber}_${a.endColumn}_`);
  }
  _findMatchesInSetting(e, t) {
    const i = this._doFindMatchesInSetting(e, t);
    if (t.overrides && t.overrides.length)
      for (const n of t.overrides) {
        const s = new lo(
          e,
          n,
          this.requireFullQueryMatch,
          this.searchDescription,
          this.valuesMatcher,
          this.configurationService
        ), r = e.split(" "), a = this.getRangesForWords(r, this.descriptionMatchingWords, [s.descriptionMatchingWords, s.keyMatchingWords, s.valueMatchingWords]), l = this.getRangesForWords(r, this.keyMatchingWords, [s.descriptionMatchingWords, s.keyMatchingWords, s.valueMatchingWords]), d = this.getRangesForWords(r, s.keyMatchingWords, [this.descriptionMatchingWords, this.keyMatchingWords, s.valueMatchingWords]), g = this.getRangesForWords(r, s.valueMatchingWords, [this.descriptionMatchingWords, this.keyMatchingWords, s.keyMatchingWords]);
        i.push(...a, ...l, ...d, ...g), i.push(...s.matches), this.refreshMatchType(l.length + d.length), this.matchType |= s.matchType;
      }
    return i;
  }
  _doFindMatchesInSetting(e, t) {
    const n = ue.as(_e.Configuration).getConfigurationProperties()[t.key], s = e.split(" "), r = t.key.split(".").join(" "), a = this.configurationService.getValue(t.key);
    for (const f of s) {
      if (this.searchDescription)
        for (let y = 0; y < t.description.length; y++) {
          const x = Re(f, t.description[y], !0);
          x && this.descriptionMatchingWords.set(f, x.map((E) => this.toDescriptionRange(t, E, y))), this.checkForWholeWordMatchType(f, t.description[y]);
        }
      const m = st(Re, yn)(f, r);
      m && this.keyMatchingWords.set(f, m.map((y) => this.toKeyRange(t, y))), this.checkForWholeWordMatchType(f, r);
      const p = typeof a == "string" ? tt(f, a) : null;
      p ? this.valueMatchingWords.set(f, p.map((y) => this.toValueRange(t, y))) : n && n.enum && n.enum.some(
        (y) => typeof y == "string" && !!tt(f, y)
      ) && this.valueMatchingWords.set(f, []), typeof a == "string" && this.checkForWholeWordMatchType(f, a);
    }
    const l = [];
    if (this.searchDescription) {
      for (let f = 0; f < t.description.length; f++) {
        const m = st(tt)(e, t.description[f] || "") || [];
        l.push(...m.map((p) => this.toDescriptionRange(t, p, f)));
      }
      l.length === 0 && l.push(...this.getRangesForWords(s, this.descriptionMatchingWords, [this.keyMatchingWords, this.valueMatchingWords]));
    }
    const d = st(Sn, tt)(e, t.key), g = d ? d.map((f) => this.toKeyRange(t, f)) : this.getRangesForWords(s, this.keyMatchingWords, [this.descriptionMatchingWords, this.valueMatchingWords]);
    let h = [];
    if (typeof a == "string" && a) {
      const f = st(Sn, tt)(e, a);
      h = f ? f.map((m) => this.toValueRange(t, m)) : this.getRangesForWords(s, this.valueMatchingWords, [this.keyMatchingWords, this.descriptionMatchingWords]);
    } else
      h = this.valuesMatcher(e, t);
    return this.refreshMatchType(g.length), [...l, ...g, ...h];
  }
  checkForWholeWordMatchType(e, t) {
    e = e.toLowerCase().replace(/[\s-\._]+$/, ""), t = t.toLowerCase(), new RegExp(`\\b${cs(e)}\\b`).test(t) && (this.matchType |= Ht.WholeWordMatch);
  }
  refreshMatchType(e) {
    e && (this.matchType |= Ht.KeyMatch);
  }
  getRangesForWords(e, t, i) {
    const n = [];
    for (const s of e) {
      const r = t.get(s);
      if (r)
        n.push(...r);
      else if (this.requireFullQueryMatch && i.every((a) => !a.has(s)))
        return [];
    }
    return n;
  }
  toKeyRange(e, t) {
    return {
      startLineNumber: e.keyRange.startLineNumber,
      startColumn: e.keyRange.startColumn + t.start,
      endLineNumber: e.keyRange.startLineNumber,
      endColumn: e.keyRange.startColumn + t.end
    };
  }
  toDescriptionRange(e, t, i) {
    return {
      startLineNumber: e.descriptionRanges[i].startLineNumber,
      startColumn: e.descriptionRanges[i].startColumn + t.start,
      endLineNumber: e.descriptionRanges[i].endLineNumber,
      endColumn: e.descriptionRanges[i].startColumn + t.end
    };
  }
  toValueRange(e, t) {
    return {
      startLineNumber: e.valueRange.startLineNumber,
      startColumn: e.valueRange.startColumn + t.start + 1,
      endLineNumber: e.valueRange.startLineNumber,
      endColumn: e.valueRange.startColumn + t.end + 1
    };
  }
};
Mn = v([
  u(5, ge)
], Mn);
var kd = ".preferences-editor{display:flex;flex-direction:column}.preferences-editor>.preferences-header{padding:11px 32px 11px 27px}.preferences-editor .deprecation-warning{display:flex;margin-top:4px}.preferences-editor .deprecation-warning .icon{margin-right:3px}.preferences-editor .deprecation-warning .learnMore-button{margin-left:3px;text-decoration:underline}.preferences-editor>.preferences-editors-container.side-by-side-preferences-editor{flex:1}.preferences-editor>.preferences-editors-container.side-by-side-preferences-editor .preferences-header-container{line-height:28px}.settings-tabs-widget>.monaco-action-bar .action-item.disabled{display:none}.settings-tabs-widget>.monaco-action-bar .action-item{max-width:300px;overflow:hidden;text-overflow:ellipsis}.default-preferences-editor-container>.preferences-header-container>.default-preferences-header,.settings-tabs-widget>.monaco-action-bar .action-item .action-label{cursor:pointer;display:flex;font-size:11px;margin-right:5px;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase}.default-preferences-editor-container>.preferences-header-container>.default-preferences-header,.preferences-editor .settings-tabs-widget>.monaco-action-bar .action-item .action-label{margin-left:33px}.settings-tabs-widget>.monaco-action-bar .action-item .action-label{background:none!important;border-radius:initial;display:block;padding:0}.settings-tabs-widget>.monaco-action-bar .action-item .action-label.folder-settings{display:flex}.default-preferences-editor-container>.preferences-header-container>.default-preferences-header,.settings-tabs-widget>.monaco-action-bar .action-item{padding:3px 0}.settings-tabs-widget>.monaco-action-bar .action-item .action-title{overflow:hidden;text-overflow:ellipsis}.settings-tabs-widget>.monaco-action-bar .action-item .action-details{font-size:10px;margin-left:.5em;opacity:.7;text-transform:none}.settings-tabs-widget .monaco-action-bar .action-item .dropdown-icon{font-size:12px;padding-left:.3em;padding-top:8px}.settings-tabs-widget .monaco-action-bar .action-item .dropdown-icon.hide{display:none}.settings-tabs-widget>.monaco-action-bar .action-item .action-label{color:var(--vscode-panelTitle-inactiveForeground)}.settings-tabs-widget>.monaco-action-bar .action-item .action-label.checked,.settings-tabs-widget>.monaco-action-bar .action-item .action-label:hover{border-bottom:1px solid var(--vscode-panelTitle-activeBorder);color:var(--vscode-panelTitle-activeForeground);outline:1px solid var(--vscode-contrastActiveBorder,transparent);outline-offset:-1px}.settings-tabs-widget>.monaco-action-bar .action-item .action-label:focus{border-bottom:1px solid var(--vscode-focusBorder);outline:1px solid transparent;outline-offset:-1px}.settings-tabs-widget>.monaco-action-bar .action-item .action-label:not(.checked):hover{outline-style:dashed}.preferences-header>.settings-header-widget{align-self:stretch;display:flex;flex:1;position:relative}.settings-header-widget>.settings-search-controls>.settings-count-widget{border-radius:2px;float:left;margin:6px 0;padding:0 8px}.settings-header-widget>.settings-search-controls{position:absolute;right:10px}.settings-header-widget>.settings-search-controls>.settings-count-widget.hide{display:none}.settings-header-widget>.settings-search-container{flex:1}.settings-header-widget>.settings-search-container>.settings-search-input{vertical-align:middle}.settings-header-widget>.settings-search-container>.settings-search-input>.monaco-inputbox{height:30px}.monaco-workbench.vs .settings-header-widget>.settings-search-container>.settings-search-input>.monaco-inputbox{border:1px solid #ddd}.settings-header-widget>.settings-search-container>.settings-search-input>.monaco-inputbox .input{font-size:14px;padding-left:10px}.monaco-editor .view-zones>.settings-header-widget{z-index:1}.monaco-editor .settings-header-widget .title-container{display:flex;user-select:none;-webkit-user-select:none}.monaco-editor .settings-header-widget .title-container .title{font-weight:700;text-transform:uppercase;white-space:nowrap}.monaco-editor .settings-header-widget .title-container .message{white-space:nowrap}.monaco-editor .settings-group-title-widget{z-index:1}.monaco-editor .settings-group-title-widget .title-container{cursor:pointer;display:flex;font-weight:700;user-select:none;-webkit-user-select:none;width:100%}.monaco-editor .settings-group-title-widget .title-container .title{overflow:hidden;white-space:nowrap}.monaco-editor.vs .settings-group-title-widget .title-container.focused,.monaco-editor.vs-dark .settings-group-title-widget .title-container.focused{outline:none!important}.monaco-editor .settings-group-title-widget .title-container.focused,.monaco-editor .settings-group-title-widget .title-container:hover{background-color:hsla(0,0%,60%,.2)}.monaco-editor.hc-black .settings-group-title-widget .title-container.focused{outline:1px dotted #f38518}.monaco-editor.hc-light .settings-group-title-widget .title-container.focused{outline:1px dotted #0f4a85}.monaco-editor .settings-group-title-widget .title-container .codicon{align-items:center;display:flex;height:100%;justify-content:center;margin:0 2px;width:16px}.monaco-editor .dim-configuration{color:#b1b1b1}.codicon-settings-edit:hover{cursor:pointer}";
Pt(kd, {});
var Td = '.keybindings-editor{padding:11px 0 0 27px}.keybindings-overflow-widgets-container{height:0;left:0;overflow:visible;position:absolute;top:0;width:0;z-index:5000}.keybindings-editor>.keybindings-header{padding:0 10px 11px 0}.keybindings-editor>.keybindings-header>.search-container{position:relative}.keybindings-editor>.keybindings-header>.search-container>.keybindings-search-actions-container{display:flex;margin-top:4px;position:absolute;right:10px;top:0}.keybindings-editor>.keybindings-header>.search-container>.keybindings-search-actions-container>.recording-badge{margin-right:8px;padding:4px}.keybindings-editor>.keybindings-header.small>.search-container>.keybindings-search-actions-container>.recording-badge,.keybindings-editor>.keybindings-header>.search-container>.keybindings-search-actions-container>.recording-badge.disabled{display:none}.keybindings-editor>.keybindings-header>.search-container>.keybindings-search-actions-container .monaco-action-bar .action-item>.icon{height:18px;width:16px}.keybindings-editor>.keybindings-header>.search-container>.keybindings-search-actions-container .monaco-action-bar .action-item{margin-right:4px}.keybindings-editor .monaco-action-bar .action-item .monaco-custom-toggle{margin:0;padding:2px}.keybindings-editor .monaco-action-bar .action-item>.codicon{align-items:center;box-sizing:content-box;color:inherit;display:flex;justify-content:center}.keybindings-editor>.keybindings-header .open-keybindings-container{display:flex;margin-top:10px}.keybindings-editor>.keybindings-header .open-keybindings-container>div{opacity:.7}.keybindings-editor>.keybindings-header .open-keybindings-container>.file-name{cursor:pointer;margin-left:4px;text-decoration:underline}.keybindings-editor>.keybindings-header .open-keybindings-container>.file-name:focus{opacity:1}.keybindings-editor>.keybindings-body .keybindings-table-container{border-collapse:separate;border-spacing:0;width:100%}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr{cursor:default}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td{align-items:center;display:flex;overflow:hidden}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .actions .monaco-action-bar{display:none;flex:1}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-list-row.selected .monaco-table-tr .monaco-table-td .actions .monaco-action-bar,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-list-row:hover .monaco-table-tr .monaco-table-td .actions .monaco-action-bar,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table.focused .monaco-list-row.focused .monaco-table-tr .monaco-table-td .actions .monaco-action-bar{display:flex}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .monaco-action-bar .action-item>.icon{cursor:pointer;height:16px;margin-top:3px;width:16px}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command.vertical-align-column{align-items:flex-start;flex-direction:column;justify-content:center}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command .command-default-label{margin-top:2px;opacity:.8}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .keybinding .monaco-highlighted-label{padding-left:10px}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .when{width:100%}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .when .empty{padding-left:4px}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .when.input-mode .when-label{display:none}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .when .suggest-input-container{padding-left:10px}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .source a{cursor:pointer}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-list-row:not(.focused):not(.selected) .monaco-table-tr .monaco-table-td .source a{color:var(--vscode-textLink-foreground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .source a:hover{text-decoration:underline}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-list-row:not(.focused):not(.selected) .monaco-table-tr .monaco-table-td .source a:active,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-list-row:not(.focused):not(.selected) .monaco-table-tr .monaco-table-td .source a:hover{color:var(--vscode-textLink-activeForeground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command .monaco-highlighted-label,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command>.command-default-label,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command>.command-id-label,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command>.command-label,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .source .monaco-highlighted-label,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .when .monaco-highlighted-label{overflow:hidden;text-overflow:ellipsis}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .hide{display:none}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .code{display:flex;font-family:var(--monaco-monospace-font);font-size:90%;overflow:hidden}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .code.strong{background-color:hsla(0,0%,50%,.17);border-radius:4px;padding:1px 4px}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .highlight{color:var(--vscode-list-highlightForeground);font-weight:700}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table.focused .monaco-list-row.selected .monaco-table-td .highlight,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table.focused .monaco-list-row.selected.focused .monaco-table-td .highlight{color:inherit}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list-row.selected .monaco-table-tr .monaco-table-td .monaco-keybinding-key,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list-row.selected.focused .monaco-table-tr .monaco-table-td .monaco-keybinding-key{color:var(--vscode-list-inactiveSelectionForeground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list-row.focused .monaco-table-tr .monaco-table-td .monaco-keybinding-key{color:var(--vscode-list-focusForeground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table.focused .monaco-list-row.selected .monaco-table-tr .monaco-table-td .monaco-keybinding-key{color:var(--vscode-list-activeSelectionForeground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list-row:hover:not(.selected):not(.focused) .monaco-table-tr .monaco-table-td .monaco-keybinding-key{color:var(--vscode-list-hoverForeground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list-row[data-parity=odd]:not(.focused):not(.selected):not(:hover) .monaco-table-tr,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list:not(.focused) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list:not(:focus) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr{background-color:var(--vscode-keybindingTable-rowsBackground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-th{background-color:var(--vscode-keybindingTable-headerBackground)}.keybindings-editor .monaco-table-td,.keybindings-editor .monaco-table-th{padding-left:10px}.keybindings-editor .monaco-table-td[data-col-index="0"],.keybindings-editor .monaco-table-th[data-col-index="0"]{padding-left:20px}';
Pt(Td, {});
var Id = ".defineKeybindingWidget{padding:10px;position:absolute}.defineKeybindingWidget .message{text-align:center;width:400px}.defineKeybindingWidget .existing,.defineKeybindingWidget .monaco-inputbox,.defineKeybindingWidget .output{display:block;margin-top:10px;text-align:center;width:400px}.defineKeybindingWidget .input{text-align:center}.defineKeybindingWidget .output{display:flex;justify-content:center}.defineKeybindingWidget .existing .existingText{cursor:pointer;text-decoration:underline}.defineKeybindingWidget .output .monaco-keybinding{margin:0 4px}.monaco-editor .keybindingInfo{background-color:rgba(100,100,250,.2);box-shadow:inset 0 0 0 1px #b9b9b9}.monaco-editor .keybindingError{background-color:hsla(0,94%,69%,.2);box-shadow:inset 0 0 0 1px #b9b9b9}";
Pt(Id, {});
const _d = ye("settings-folder-dropdown", he.triangleDown, c(
  "settingsScopeDropDownIcon",
  "Icon for the folder dropdown button in the split JSON Settings editor."
)), Dd = ye("settings-more-action", he.gear, c(
  "settingsMoreActionIcon",
  "Icon for the 'more actions' action in the Settings UI."
)), Ld = ye("keybindings-record-keys", he.recordKeys, c(
  "keybindingsRecordKeysIcon",
  "Icon for the 'record keys' action in the keybinding UI."
)), Md = ye("keybindings-sort", he.sortPrecedence, c(
  "keybindingsSortIcon",
  "Icon for the 'sort by precedence' toggle in the keybinding UI."
)), Rd = ye("keybindings-edit", he.edit, c("keybindingsEditIcon", "Icon for the edit action in the keybinding UI.")), Ad = ye("keybindings-add", he.add, c("keybindingsAddIcon", "Icon for the add action in the keybinding UI.")), dn = ye("settings-edit", he.edit, c("settingsEditIcon", "Icon for the edit action in the Settings UI.")), go = ye("settings-remove", he.close, c("settingsRemoveIcon", "Icon for the remove action in the Settings UI.")), Od = ye("settings-discard", he.discard, c(
  "preferencesDiscardIcon",
  "Icon for the discard action in the Settings UI."
)), uo = ye("preferences-clear-input", he.clearAll, c(
  "preferencesClearInput",
  "Icon for clear input in the Settings and keybinding UI."
)), Nd = ye("preferences-filter", he.filter, c(
  "settingsFilter",
  "Icon for the button that suggests filters for the Settings UI."
)), ht = ye("preferences-open-settings", he.goToFile, c("preferencesOpenSettings", "Icon for open settings commands."));
let Rn = class extends pa {
  constructor(e, t, i) {
    super(null, e), this.contextService = t, this.contextMenuService = i, this._folderSettingCounts = /* @__PURE__ */ new Map();
    const n = this.contextService.getWorkspace();
    this._folder = n.folders.length === 1 ? n.folders[0] : null, this._register(this.contextService.onDidChangeWorkspaceFolders(() => this.onWorkspaceFoldersChanged()));
  }
  get folder() {
    return this._folder;
  }
  set folder(e) {
    this._folder = e, this.update();
  }
  setCount(e, t) {
    const i = this.contextService.getWorkspaceFolder(e);
    if (!i)
      throw new Error("unknown folder");
    const n = i.uri;
    this._folderSettingCounts.set(n.toString(), t), this.update();
  }
  render(e) {
    this.element = e, this.container = e, this.labelElement = W(".action-title"), this.detailsElement = W(".action-details"), this.dropDownElement = W(".dropdown-icon.hide" + oe.asCSSSelector(_d)), this.anchorElement = W("a.action-label.folder-settings", {
      role: "button",
      "aria-haspopup": "true",
      tabindex: "0"
    }, this.labelElement, this.detailsElement, this.dropDownElement), this._register(_(this.anchorElement, I.MOUSE_DOWN, (t) => dt.stop(t))), this._register(_(this.anchorElement, I.CLICK, (t) => this.onClick(t))), this._register(_(this.container, I.KEY_UP, (t) => this.onKeyUp(t))), b(this.container, this.anchorElement), this.update();
  }
  onKeyUp(e) {
    switch (new Je(e).keyCode) {
      case 3:
      case 10:
        this.onClick(e);
        return;
    }
  }
  onClick(e) {
    dt.stop(e, !0), !this.folder || this._action.checked ? this.showMenu() : this._action.run(this._folder);
  }
  updateEnabled() {
    this.update();
  }
  updateChecked() {
    this.update();
  }
  onWorkspaceFoldersChanged() {
    const e = this._folder, t = this.contextService.getWorkspace();
    e && (this._folder = t.folders.filter((i) => Xe(i.uri, e.uri))[0] || t.folders[0]), this._folder = this._folder ? this._folder : t.folders.length === 1 ? t.folders[0] : null, this.update(), this._action.checked && this._action.run(this._folder);
  }
  update() {
    let e = 0;
    this._folderSettingCounts.forEach((i) => e += i);
    const t = this.contextService.getWorkspace();
    if (this._folder) {
      this.labelElement.textContent = this._folder.name, this.anchorElement.title = this._folder.name;
      const i = this.labelWithCount(this._action.label, e);
      this.detailsElement.textContent = i, this.dropDownElement.classList.toggle("hide", t.folders.length === 1 || !this._action.checked);
    } else {
      const i = this.labelWithCount(this._action.label, e);
      this.labelElement.textContent = i, this.detailsElement.textContent = "", this.anchorElement.title = this._action.label, this.dropDownElement.classList.remove("hide");
    }
    this.anchorElement.classList.toggle("checked", this._action.checked), this.container.classList.toggle("disabled", !this._action.enabled);
  }
  showMenu() {
    this.contextMenuService.showContextMenu({
      getAnchor: () => this.container,
      getActions: () => this.getDropdownMenuActions(),
      getActionViewItem: () => {
      },
      onHide: () => {
        this.anchorElement.blur();
      }
    });
  }
  getDropdownMenuActions() {
    const e = [], t = this.contextService.getWorkspace().folders;
    return this.contextService.getWorkbenchState() === 3 && t.length > 0 && e.push(...t.map((i, n) => {
      const s = this._folderSettingCounts.get(i.uri.toString());
      return {
        id: "folderSettingsTarget" + n,
        label: this.labelWithCount(i.name, s),
        checked: this.folder && Xe(this.folder.uri, i.uri),
        enabled: !0,
        run: () => this._action.run(i)
      };
    })), e;
  }
  labelWithCount(e, t) {
    return t && (e += ` (${t})`), e;
  }
};
Rn = v([
  u(1, lt),
  u(2, Kt)
], Rn);
let An = class extends rn {
  constructor(e, t, i, n, s, r, a) {
    super(), this.contextService = i, this.instantiationService = n, this.environmentService = s, this.labelService = r, this.languageService = a, this._settingsTarget = null, this._onDidTargetChange = this._register(new T()), this.onDidTargetChange = this._onDidTargetChange.event, this.options = t ?? {}, this.create(e), this._register(this.contextService.onDidChangeWorkbenchState(() => this.onWorkbenchStateChanged())), this._register(this.contextService.onDidChangeWorkspaceFolders(() => this.update()));
  }
  resetLabels() {
    const e = this.environmentService.remoteAuthority, t = e && this.labelService.getHostLabel(me.vscodeRemote, e);
    this.userLocalSettings.label = c("userSettings", "User"), this.userRemoteSettings.label = c("userSettingsRemote", "Remote") + (t ? ` [${t}]` : ""), this.workspaceSettings.label = c("workspaceSettings", "Workspace"), this.folderSettingsAction.label = c("folderSettings", "Folder");
  }
  create(e) {
    const t = b(e, W(".settings-tabs-widget"));
    this.settingsSwitcherBar = this._register(new on(t, {
      orientation: 0,
      focusOnlyEnabledItems: !0,
      ariaLabel: c("settingsSwitcherBarAriaLabel", "Settings Switcher"),
      animated: !1,
      actionViewItemProvider: (s) => s.id === "folderSettings" ? this.folderSettings : void 0
    })), this.userLocalSettings = new re(
      "userSettings",
      "",
      ".settings-tab",
      !0,
      () => this.updateTarget(3)
    ), this.userLocalSettings.tooltip = c("userSettings", "User"), this.userRemoteSettings = new re(
      "userSettingsRemote",
      "",
      ".settings-tab",
      !0,
      () => this.updateTarget(4)
    );
    const i = this.environmentService.remoteAuthority, n = i && this.labelService.getHostLabel(me.vscodeRemote, i);
    this.userRemoteSettings.tooltip = c("userSettingsRemote", "Remote") + (n ? ` [${n}]` : ""), this.workspaceSettings = new re(
      "workspaceSettings",
      "",
      ".settings-tab",
      !1,
      () => this.updateTarget(5)
    ), this.folderSettingsAction = new re("folderSettings", "", ".settings-tab", !1, async (s) => {
      this.updateTarget(fa(s) ? s.uri : 3);
    }), this.folderSettings = this.instantiationService.createInstance(Rn, this.folderSettingsAction), this.resetLabels(), this.update(), this.settingsSwitcherBar.push([this.userLocalSettings, this.userRemoteSettings, this.workspaceSettings, this.folderSettingsAction]);
  }
  get settingsTarget() {
    return this._settingsTarget;
  }
  set settingsTarget(e) {
    this._settingsTarget = e, this.userLocalSettings.checked = this.settingsTarget === 3, this.userRemoteSettings.checked = this.settingsTarget === 4, this.workspaceSettings.checked = this.settingsTarget === 5, this.settingsTarget instanceof Y ? (this.folderSettings.action.checked = !0, this.folderSettings.folder = this.contextService.getWorkspaceFolder(this.settingsTarget)) : this.folderSettings.action.checked = !1;
  }
  setResultCount(e, t) {
    if (e === 5) {
      let i = c("workspaceSettings", "Workspace");
      t && (i += ` (${t})`), this.workspaceSettings.label = i;
    } else if (e === 3) {
      let i = c("userSettings", "User");
      t && (i += ` (${t})`), this.userLocalSettings.label = i;
    } else
      e instanceof Y && this.folderSettings.setCount(e, t);
  }
  updateLanguageFilterIndicators(e) {
    if (this.resetLabels(), e) {
      const t = this.languageService.getLanguageName(e);
      if (t) {
        const i = ` [${t}]`;
        this.userLocalSettings.label += i, this.userRemoteSettings.label += i, this.workspaceSettings.label += i, this.folderSettingsAction.label += i;
      }
    }
  }
  onWorkbenchStateChanged() {
    this.folderSettings.folder = null, this.update(), this.settingsTarget === 5 && this.contextService.getWorkbenchState() === 3 && this.updateTarget(3);
  }
  updateTarget(e) {
    return this.settingsTarget === e || e instanceof Y && this.settingsTarget instanceof Y && Xe(this.settingsTarget, e) || (this.settingsTarget = e, this._onDidTargetChange.fire(this.settingsTarget)), Promise.resolve(void 0);
  }
  async update() {
    this.settingsSwitcherBar.domNode.classList.toggle("empty-workbench", this.contextService.getWorkbenchState() === 1), this.userRemoteSettings.enabled = !!(this.options.enableRemoteSettings && this.environmentService.remoteAuthority), this.workspaceSettings.enabled = this.contextService.getWorkbenchState() !== 1, this.folderSettings.action.enabled = this.contextService.getWorkbenchState() === 3 && this.contextService.getWorkspace().folders.length > 0, this.workspaceSettings.tooltip = c("workspaceSettings", "Workspace");
  }
};
An = v([
  u(2, lt),
  u(3, $),
  u(4, Bt),
  u(5, os),
  u(6, Pe)
], An);
let On = class extends rn {
  constructor(e, t, i, n, s, r) {
    super(), this.options = t, this.contextViewService = i, this.instantiationService = n, this.contextKeyService = s, this.keybindingService = r, this._onDidChange = this._register(new T()), this.onDidChange = this._onDidChange.event, this._onFocus = this._register(new T()), this.onFocus = this._onFocus.event, this.create(e);
  }
  create(e) {
    this.domNode = b(e, W("div.settings-header-widget")), this.createSearchContainer(b(this.domNode, W("div.settings-search-container"))), this.controlsDiv = b(this.domNode, W("div.settings-search-controls")), this.options.showResultCount && (this.countElement = b(this.controlsDiv, W(".settings-count-widget")), this.countElement.style.backgroundColor = J(ds), this.countElement.style.color = J(ls), this.countElement.style.border = `1px solid ${J(gs)}`), this.inputBox.inputElement.setAttribute("aria-live", this.options.ariaLive || "off"), this.options.ariaLabelledBy && this.inputBox.inputElement.setAttribute("aria-labelledBy", this.options.ariaLabelledBy);
    const t = this._register(us(this.inputBox.inputElement));
    this._register(t.onDidFocus(() => this._onFocus.fire()));
    const i = this.options.focusKey;
    i && (this._register(t.onDidFocus(() => i.set(!0))), this._register(t.onDidBlur(() => i.set(!1))));
  }
  createSearchContainer(e) {
    this.searchContainer = e;
    const t = b(this.searchContainer, W("div.settings-search-input"));
    this.inputBox = this._register(this.createInputBox(t)), this._register(this.inputBox.onDidChange((i) => this._onDidChange.fire(i)));
  }
  createInputBox(e) {
    const t = () => ba(this.keybindingService);
    return this._register(new ma(
      e,
      this.contextViewService,
      { ...this.options, showHistoryHint: t },
      this.contextKeyService
    ));
  }
  showMessage(e) {
    this.countElement && e !== this.countElement.textContent && (this.countElement.textContent = e, this.inputBox.inputElement.setAttribute("aria-label", e), this.inputBox.inputElement.style.paddingRight = this.getControlsWidth() + "px");
  }
  layout(e) {
    var t, i;
    e.width < 400 ? ((t = this.countElement) == null || t.classList.add("hide"), this.inputBox.inputElement.style.paddingRight = "0px") : ((i = this.countElement) == null || i.classList.remove("hide"), this.inputBox.inputElement.style.paddingRight = this.getControlsWidth() + "px");
  }
  getControlsWidth() {
    return (this.countElement ? lr(this.countElement) : 0) + 20;
  }
  focus() {
    this.inputBox.focus(), this.getValue() && this.inputBox.select();
  }
  hasFocus() {
    return this.inputBox.hasFocus();
  }
  clear() {
    this.inputBox.value = "";
  }
  getValue() {
    return this.inputBox.value;
  }
  setValue(e) {
    return this.inputBox.value = e;
  }
  dispose() {
    var e;
    (e = this.options.focusKey) == null || e.set(!1), super.dispose();
  }
};
On = v([
  u(2, ni),
  u(3, $),
  u(4, Ke),
  u(5, Fe)
], On);
class Us extends Q {
  constructor(e) {
    super(), this.editor = e, this._line = -1, this._preferences = [], this._editPreferenceDecoration = this.editor.createDecorationsCollection(), this._onClick = this._register(new T()), this.onClick = this._onClick.event, this._register(this.editor.onMouseDown((t) => {
      t.target.type !== 2 || t.target.detail.isAfterLines || !this.isVisible() || this._onClick.fire(t);
    }));
  }
  get preferences() {
    return this._preferences;
  }
  getLine() {
    return this._line;
  }
  show(e, t, i) {
    this._preferences = i;
    const n = [];
    this._line = e, n.push({
      options: {
        description: "edit-preference-widget-decoration",
        glyphMarginClassName: oe.asClassName(dn),
        glyphMarginHoverMessage: new ya().appendText(t),
        stickiness: 1
      },
      range: {
        startLineNumber: e,
        startColumn: 1,
        endLineNumber: e,
        endColumn: 1
      }
    }), this._editPreferenceDecoration.set(n);
  }
  hide() {
    this._editPreferenceDecoration.clear();
  }
  isVisible() {
    return this._editPreferenceDecoration.length > 0;
  }
  dispose() {
    this.hide(), super.dispose();
  }
}
let Wi = class extends On {
  constructor(e, t, i, n, s, r) {
    super(e, t, i, n, s, r), this.recordDisposables = this._register(new U()), this._onKeybinding = this._register(new T()), this.onKeybinding = this._onKeybinding.event, this._onEnter = this._register(new T()), this.onEnter = this._onEnter.event, this._onEscape = this._register(new T()), this.onEscape = this._onEscape.event, this._onBlur = this._register(new T()), this.onBlur = this._onBlur.event, this._register(si(() => this.stopRecordingKeys())), this._chords = null, this._inputValue = "";
  }
  clear() {
    this._chords = null, super.clear();
  }
  startRecordingKeys() {
    this.recordDisposables.add(_(this.inputBox.inputElement, I.KEY_DOWN, (e) => this._onKeyDown(new Je(e)))), this.recordDisposables.add(_(this.inputBox.inputElement, I.BLUR, () => this._onBlur.fire())), this.recordDisposables.add(_(this.inputBox.inputElement, I.INPUT, () => {
      this.setInputValue(this._inputValue);
    }));
  }
  stopRecordingKeys() {
    this._chords = null, this.recordDisposables.clear();
  }
  setInputValue(e) {
    this._inputValue = e, this.inputBox.value = this._inputValue;
  }
  _onKeyDown(e) {
    if (e.preventDefault(), e.stopPropagation(), !this.options.recordEnter && e.equals(3)) {
      this._onEnter.fire();
      return;
    }
    if (e.equals(9)) {
      this._onEscape.fire();
      return;
    }
    this.printKeybinding(e);
  }
  printKeybinding(e) {
    const t = this.keybindingService.resolveKeyboardEvent(e), i = `code: ${e.browserEvent.code}, keyCode: ${e.browserEvent.keyCode}, key: ${e.browserEvent.key} => UI: ${t.getAriaLabel()}, user settings: ${t.getUserSettingsLabel()}, dispatch: ${t.getDispatchChords()[0]}`, n = this.options;
    this._chords || (this._chords = []), this._chords.length > 0 && this._chords[this._chords.length - 1].getDispatchChords()[0] === null ? this._chords[this._chords.length - 1] = t : (this._chords.length === 2 && (this._chords = []), this._chords.push(t));
    const r = this._chords.map((a) => a.getUserSettingsLabel() || "").join(" ");
    this.setInputValue(n.quoteRecordedKeys ? `"${r}"` : r), this.inputBox.inputElement.title = i, this._onKeybinding.fire(this._chords);
  }
};
Wi = v([
  u(2, ni),
  u(3, $),
  u(4, Ke),
  u(5, Fe)
], Wi);
var Ie;
let Fi = (Ie = class extends rn {
  constructor(e, t) {
    super(), this.instantiationService = t, this._chords = null, this._isVisible = !1, this._onHide = this._register(new T()), this._onDidChange = this._register(new T()), this.onDidChange = this._onDidChange.event, this._onShowExistingKeybindings = this._register(new T()), this.onShowExistingKeybidings = this._onShowExistingKeybindings.event, this._domNode = Sa(document.createElement("div")), this._domNode.setDisplay("none"), this._domNode.setClassName("defineKeybindingWidget"), this._domNode.setWidth(Ie.WIDTH), this._domNode.setHeight(Ie.HEIGHT);
    const i = c(
      "defineKeybinding.initial",
      "Press desired key combination and then press ENTER."
    );
    b(this._domNode.domNode, W(".message", void 0, i)), this._domNode.domNode.style.backgroundColor = J(va), this._domNode.domNode.style.color = J(wa), this._domNode.domNode.style.boxShadow = `0 2px 8px ${J(Ea)}`, this._keybindingInputWidget = this._register(this.instantiationService.createInstance(Wi, this._domNode.domNode, { ariaLabel: i, history: [], inputBoxStyles: xa })), this._keybindingInputWidget.startRecordingKeys(), this._register(this._keybindingInputWidget.onKeybinding((n) => this.onKeybinding(n))), this._register(this._keybindingInputWidget.onEnter(() => this.hide())), this._register(this._keybindingInputWidget.onEscape(() => this.clearOrHide())), this._register(this._keybindingInputWidget.onBlur(() => this.onCancel())), this._outputNode = b(this._domNode.domNode, W(".output")), this._showExistingKeybindingsNode = b(this._domNode.domNode, W(".existing")), e && b(e, this._domNode.domNode);
  }
  get domNode() {
    return this._domNode.domNode;
  }
  define() {
    return this._keybindingInputWidget.clear(), Ca.withAsyncBody(async (e) => {
      this._isVisible || (this._isVisible = !0, this._domNode.setDisplay("block"), this._chords = null, this._keybindingInputWidget.setInputValue(""), Ae(this._outputNode), Ae(this._showExistingKeybindingsNode), await gr(0), this._keybindingInputWidget.focus());
      const t = this._onHide.event(() => {
        e(this.getUserSettingsLabel()), t.dispose();
      });
    });
  }
  layout(e) {
    const t = Math.round((e.height - Ie.HEIGHT) / 2);
    this._domNode.setTop(t);
    const i = Math.round((e.width - Ie.WIDTH) / 2);
    this._domNode.setLeft(i);
  }
  printExisting(e) {
    if (e > 0) {
      const t = W("span.existingText"), i = e === 1 ? c(
        "defineKeybinding.oneExists",
        "1 existing command has this keybinding",
        e
      ) : c(
        "defineKeybinding.existing",
        "{0} existing commands have this keybinding",
        e
      );
      b(t, document.createTextNode(i)), ka(i), this._showExistingKeybindingsNode.appendChild(t), t.onmousedown = (n) => {
        n.preventDefault();
      }, t.onmouseup = (n) => {
        n.preventDefault();
      }, t.onclick = () => {
        this._onShowExistingKeybindings.fire(this.getUserSettingsLabel());
      };
    }
  }
  onKeybinding(e) {
    var n;
    if (this._chords = e, Ae(this._outputNode), Ae(this._showExistingKeybindingsNode), new En(this._outputNode, _i, xn).set(rs((n = this._chords) == null ? void 0 : n[0])), this._chords)
      for (let s = 1; s < this._chords.length; s++)
        this._outputNode.appendChild(document.createTextNode(c("defineKeybinding.chordsTo", "chord to"))), new En(this._outputNode, _i, xn).set(this._chords[s]);
    const i = this.getUserSettingsLabel();
    i && this._onDidChange.fire(i);
  }
  getUserSettingsLabel() {
    let e = null;
    return this._chords && (e = this._chords.map((t) => t.getUserSettingsLabel()).join(" ")), e;
  }
  onCancel() {
    this._chords = null, this.hide();
  }
  clearOrHide() {
    this._chords === null ? this.hide() : (this._chords = null, this._keybindingInputWidget.clear(), Ae(this._outputNode), Ae(this._showExistingKeybindingsNode));
  }
  hide() {
    this._domNode.setDisplay("none"), this._isVisible = !1, this._onHide.fire();
  }
}, Ie.WIDTH = 400, Ie.HEIGHT = 110, Ie);
Fi = v([
  u(1, $)
], Fi);
var Dt;
Dt = class extends Q {
  constructor(e, t) {
    super(), this._editor = e, this._widget = t.createInstance(Fi, null), this._editor.addOverlayWidget(this);
  }
  getId() {
    return Dt.ID;
  }
  getDomNode() {
    return this._widget.domNode;
  }
  getPosition() {
    return {
      preference: null
    };
  }
  dispose() {
    this._editor.removeOverlayWidget(this), super.dispose();
  }
  start() {
    this._editor.hasModel() && this._editor.revealPositionInCenterIfOutsideViewport(this._editor.getPosition(), 0);
    const e = this._editor.getLayoutInfo();
    return this._widget.layout(new hs(e.width, e.height)), this._widget.define();
  }
}, Dt.ID = "editor.contrib.defineKeybindingWidget";
var Wd = ".suggest-input-container{border-radius:2px;padding:2px 6px}.suggest-input-container .monaco-editor,.suggest-input-container .monaco-editor-background,.suggest-input-container .mtk1{color:inherit}.suggest-input-container .suggest-input-placeholder{margin-top:1px;overflow:hidden;pointer-events:none;position:absolute;text-overflow:ellipsis;white-space:nowrap;z-index:1}.suggest-input-container .monaco-editor,.suggest-input-container .monaco-editor .lines-content{background:none}";
Pt(Wd, {});
let Pi = class extends rn {
  constructor(e, t, i, n, s, r, a, l, d, g, h) {
    super(), this._onShouldFocusResults = new T(), this.onShouldFocusResults = this._onShouldFocusResults.event, this._onInputDidChange = new T(), this.onInputDidChange = this._onInputDidChange.event, this._onDidFocus = this._register(new T()), this.onDidFocus = this._onDidFocus.event, this._onDidBlur = this._register(new T()), this.onDidBlur = this._onDidBlur.event, this.stylingContainer = b(t, W(".suggest-input-container")), this.element = t, this.placeholderText = b(this.stylingContainer, W(".suggest-input-placeholder", void 0, r.placeholderText || ""));
    const f = _a(Da(h), Fd(n));
    f.overflowWidgetsDomNode = r.overflowWidgetsDomNode;
    const m = this.getScopedContextKeyService(d), p = m ? a.createChild(new La([Ke, m])) : a;
    this.inputWidget = this._register(p.createInstance(Ma, this.stylingContainer, f, {
      contributions: ps.getSomeEditorContributions([
        as.ID,
        Ra.ID,
        Aa.ID,
        Oa.ID,
        Na
      ]),
      isSimpleWidget: !0
    })), this._register(h.onDidChangeConfiguration((C) => {
      if (C.affectsConfiguration("editor.accessibilitySupport") || C.affectsConfiguration("editor.cursorBlinking")) {
        const Z = h.getValue("editor.accessibilitySupport"), z = h.getValue("editor.cursorBlinking");
        this.inputWidget.updateOptions({
          accessibilitySupport: Z,
          cursorBlinking: z
        });
      }
    })), this._register(this.inputWidget.onDidFocusEditorText(() => this._onDidFocus.fire())), this._register(this.inputWidget.onDidBlurEditorText(() => this._onDidBlur.fire()));
    const y = Y.parse(s);
    this.inputModel = l.createModel("", null, y, !0), this._register(this.inputModel), this.inputWidget.setModel(this.inputModel), this._register(this.inputWidget.onDidPaste(() => this.setValue(this.getValue()))), this._register(this.inputWidget.onDidFocusEditorText(() => {
      r.focusContextKey && r.focusContextKey.set(!0), this.stylingContainer.classList.add("synthetic-focus");
    })), this._register(this.inputWidget.onDidBlurEditorText(() => {
      r.focusContextKey && r.focusContextKey.set(!1), this.stylingContainer.classList.remove("synthetic-focus");
    }));
    const x = le.chain(this.inputWidget.onKeyDown);
    this._register(x.filter((C) => C.keyCode === 3).on((C) => {
      C.preventDefault();
    }, this)), this._register(x.filter((C) => C.keyCode === 18 && (pr ? C.metaKey : C.ctrlKey)).on(() => this._onShouldFocusResults.fire(), this));
    let E = this.getValue();
    const S = this.inputWidget.getModel();
    S && this._register(S.onDidChangeContent(() => {
      const C = this.getValue();
      this.placeholderText.style.visibility = C ? "hidden" : "visible", E.trim() !== C.trim() && (this._onInputDidChange.fire(void 0), E = C);
    }));
    const A = {
      provideResults: i.provideResults,
      sortKey: i.sortKey || ((C) => C),
      triggerCharacters: i.triggerCharacters || [],
      wordDefinition: i.wordDefinition ? Wa(i.wordDefinition) : void 0,
      alwaysShowSuggestions: !!i.alwaysShowSuggestions
    };
    this.setValue(r.value || ""), this._register(g.completionProvider.register({ scheme: y.scheme, pattern: "**/" + y.path, hasAccessToAllModels: !0 }, {
      _debugDisplayName: `suggestEnabledInput/${e}`,
      triggerCharacters: A.triggerCharacters,
      provideCompletionItems: (C, Z, z) => {
        var Ts;
        const ie = C.getValue(), Se = Z.column - 1;
        let oi = 0, ai = 0;
        if (A.wordDefinition) {
          const Ce = Fa(Z.column, A.wordDefinition, ie, 0);
          oi = (Ce == null ? void 0 : Ce.word.length) ?? 0, ai = Ce ? Ce.startColumn - 1 : 0;
        } else
          ai = ie.lastIndexOf(" ", Se - 1) + 1, oi = Se - ai;
        return !A.alwaysShowSuggestions && oi > 0 && ((Ts = A.triggerCharacters) == null ? void 0 : Ts.indexOf(ie[ai])) === -1 ? { suggestions: [] } : {
          suggestions: i.provideResults(ie).map((Ce) => {
            let Vt, Is;
            return typeof Ce == "string" ? Vt = Ce : (Vt = Ce.label, Is = Ce), {
              label: Vt,
              insertText: Vt,
              range: vt.fromPositions(Z.delta(0, -oi), Z),
              sortText: A.sortKey(Vt),
              kind: 17,
              ...Is
            };
          })
        };
      }
    })), this.style(r.styleOverrides || {});
  }
  getScopedContextKeyService(e) {
  }
  updateAriaLabel(e) {
    this.inputWidget.updateOptions({ ariaLabel: e });
  }
  setValue(e) {
    e = e.replace(/\s/g, " ");
    const t = this.inputModel.getFullModelRange();
    this.inputWidget.executeEdits("suggestEnabledInput.setValue", [Pa.replace(t, e)]), this.inputWidget.setScrollTop(0), this.inputWidget.setPosition(new fr(1, e.length + 1));
  }
  getValue() {
    return this.inputWidget.getValue();
  }
  style(e) {
    this.stylingContainer.style.backgroundColor = J(e.inputBackground ?? we), this.stylingContainer.style.color = J(e.inputForeground ?? Ee), this.placeholderText.style.color = J(e.inputPlaceholderForeground ?? Ka), this.stylingContainer.style.borderWidth = "1px", this.stylingContainer.style.borderStyle = "solid", this.stylingContainer.style.borderColor = Ba(e.inputBorder ?? Ne, "transparent");
    const t = this.stylingContainer.getElementsByClassName("cursor")[0];
    t && (t.style.backgroundColor = J(e.inputForeground ?? Ee));
  }
  focus(e) {
    this.inputWidget.focus(), e && this.inputWidget.getValue() && this.selectAll();
  }
  onHide() {
    this.inputWidget.onHide();
  }
  layout(e) {
    this.inputWidget.layout(e), this.placeholderText.style.width = `${e.width - 2}px`;
  }
  selectAll() {
    this.inputWidget.setSelection(new vt(1, 1, 1, this.getValue().length + 1));
  }
};
Pi = v([
  u(6, $),
  u(7, sn),
  u(8, Ke),
  u(9, ur),
  u(10, ge)
], Pi);
hr((o, e) => {
  const t = o.getColor(Ta);
  if (t) {
    const i = o.getColor(we);
    i && e.addRule(`.suggest-input-container .monaco-editor .selected-text { background-color: ${i.transparent(0.4)}; }`);
    const n = o.getColor(Ee);
    n && e.addRule(`.suggest-input-container .monaco-editor .view-line span.inline-selected-text { color: ${n}; }`);
    const s = o.getColor(we);
    s && e.addRule(`.suggest-input-container .monaco-editor-background { background-color: ${s}; } `), e.addRule(`.suggest-input-container .monaco-editor .focused .selected-text { background-color: ${t}; }`);
  } else
    e.addRule(`.suggest-input-container .monaco-editor .focused .selected-text { background-color: ${o.getColor(Ia)}; }`);
});
function Fd(o) {
  return {
    fontSize: 13,
    lineHeight: 20,
    wordWrap: "off",
    scrollbar: { vertical: "hidden" },
    roundedSelection: !1,
    guides: {
      indentation: !1
    },
    cursorWidth: 1,
    fontFamily: hd,
    ariaLabel: o || "",
    snippetSuggestions: "none",
    suggest: { filterGraceful: !1, showIcons: !1 },
    autoClosingBrackets: "never"
  };
}
const rt = G("settings.headerForeground", { light: "#444444", dark: "#e7e7e7", hcDark: "#ffffff", hcLight: "#292929" }, c(
  "headerForeground",
  "The foreground color for a section header or active title."
)), Gs = G("settings.settingsHeaderHoverForeground", { light: Be(rt, 0.7), dark: Be(rt, 0.7), hcDark: Be(rt, 0.7), hcLight: Be(rt, 0.7) }, c(
  "settingsHeaderHoverForeground",
  "The foreground color for a section header or hovered title."
));
G("settings.modifiedItemIndicator", {
  light: new ft(new di(102, 175, 224)),
  dark: new ft(new di(12, 125, 157)),
  hcDark: new ft(new di(0, 73, 122)),
  hcLight: new ft(new di(102, 175, 224))
}, c("modifiedItemForeground", "The color of the modified setting indicator."));
const Pd = G("settings.headerBorder", { dark: Ve, light: Ve, hcDark: Ve, hcLight: Ve }, c("settingsHeaderBorder", "The color of the header container border.")), js = G("settings.sashBorder", { dark: Ve, light: Ve, hcDark: Ve, hcLight: Ve }, c(
  "settingsSashBorder",
  "The color of the Settings editor splitview sash border."
)), ho = G("settings.dropdownBackground", { dark: li, light: li, hcDark: li, hcLight: li }, c("settingsDropdownBackground", "Settings editor dropdown background.")), po = G("settings.dropdownForeground", { dark: gi, light: gi, hcDark: gi, hcLight: gi }, c("settingsDropdownForeground", "Settings editor dropdown foreground.")), fo = G("settings.dropdownBorder", { dark: ui, light: ui, hcDark: ui, hcLight: ui }, c("settingsDropdownBorder", "Settings editor dropdown border.")), mo = G("settings.dropdownListBorder", { dark: hi, light: hi, hcDark: hi, hcLight: hi }, c(
  "settingsDropdownListBorder",
  "Settings editor dropdown list border. This surrounds the options and separates the options from the description."
));
G("settings.checkboxBackground", { dark: pi, light: pi, hcDark: pi, hcLight: pi }, c("settingsCheckboxBackground", "Settings editor checkbox background."));
G("settings.checkboxForeground", { dark: fi, light: fi, hcDark: fi, hcLight: fi }, c("settingsCheckboxForeground", "Settings editor checkbox foreground."));
G("settings.checkboxBorder", { dark: mi, light: mi, hcDark: mi, hcLight: mi }, c("settingsCheckboxBorder", "Settings editor checkbox border."));
const Ki = G("settings.textInputBackground", { dark: we, light: we, hcDark: we, hcLight: we }, c("textInputBoxBackground", "Settings editor text input box background.")), Bi = G("settings.textInputForeground", { dark: Ee, light: Ee, hcDark: Ee, hcLight: Ee }, c("textInputBoxForeground", "Settings editor text input box foreground.")), _t = G("settings.textInputBorder", { dark: Ne, light: Ne, hcDark: Ne, hcLight: Ne }, c("textInputBoxBorder", "Settings editor text input box border.")), Kd = G("settings.numberInputBackground", { dark: we, light: we, hcDark: we, hcLight: we }, c("numberInputBoxBackground", "Settings editor number input box background.")), Bd = G("settings.numberInputForeground", { dark: Ee, light: Ee, hcDark: Ee, hcLight: Ee }, c("numberInputBoxForeground", "Settings editor number input box foreground.")), Vd = G("settings.numberInputBorder", { dark: Ne, light: Ne, hcDark: Ne, hcLight: Ne }, c("numberInputBoxBorder", "Settings editor number input box border."));
G("settings.focusedRowBackground", {
  dark: Be(Zt, 0.6),
  light: Be(Zt, 0.6),
  hcDark: null,
  hcLight: null
}, c(
  "focusedRowBackground",
  "The background color of a settings row when focused."
));
G("settings.rowHoverBackground", {
  dark: Be(Zt, 0.3),
  light: Be(Zt, 0.3),
  hcDark: null,
  hcLight: null
}, c(
  "settings.rowHoverBackground",
  "The background color of a settings row when hovered."
));
G("settings.focusedRowBorder", {
  dark: Ut,
  light: Ut,
  hcDark: Ut,
  hcLight: Ut
}, c(
  "settings.focusedRowBorder",
  "The color of the row's top and bottom border when the row is focused."
));
const H = W;
var Lt;
let K = (Lt = class extends mr {
  constructor(e, t, i, n, s, r, a, l, d, g, h, f) {
    super(Lt.ID, e, t, h), this.keybindingsService = i, this.contextMenuService = n, this.keybindingEditingService = s, this.contextKeyService = r, this.notificationService = a, this.clipboardService = l, this.instantiationService = d, this.editorService = g, this.configurationService = f, this._onDefineWhenExpression = this._register(new T()), this.onDefineWhenExpression = this._onDefineWhenExpression.event, this._onRejectWhenExpression = this._register(new T()), this.onRejectWhenExpression = this._onRejectWhenExpression.event, this._onAcceptWhenExpression = this._register(new T()), this.onAcceptWhenExpression = this._onAcceptWhenExpression.event, this._onLayout = this._register(new T()), this.onLayout = this._onLayout.event, this.keybindingsEditorModel = null, this.unAssignedKeybindingItemToRevealAndFocus = null, this.tableEntries = [], this.dimension = null, this.latestEmptyFilters = [], this.delayedFiltering = new be(300), this._register(i.onDidUpdateKeybindings(() => this.render(!!this.keybindingFocusContextKey.get()))), this.keybindingsEditorContextKey = j.bindTo(this.contextKeyService), this.searchFocusContextKey = Ei.bindTo(this.contextKeyService), this.keybindingFocusContextKey = ke.bindTo(this.contextKeyService), this.searchHistoryDelayer = new be(500), this.recordKeysAction = new re(br, c("recordKeysLabel", "Record Keys"), oe.asClassName(Ld)), this.recordKeysAction.checked = !1, this.sortByPrecedenceAction = new re(yr, c("sortByPrecedeneLabel", "Sort by Precedence (Highest first)"), oe.asClassName(Md)), this.sortByPrecedenceAction.checked = !1, this.overflowWidgetsDomNode = H(".keybindings-overflow-widgets-container.monaco-editor");
  }
  create(e) {
    super.create(e), this._register(Va({
      focusNotifiers: [this],
      focusNextWidget: () => {
        this.searchWidget.hasFocus() && this.focusKeybindings();
      },
      focusPreviousWidget: () => {
        this.searchWidget.hasFocus() || this.focusSearch();
      }
    }));
  }
  createEditor(e) {
    const t = b(e, H("div", { class: "keybindings-editor" }));
    this.createAriaLabelElement(t), this.createOverlayContainer(t), this.createHeader(t), this.createBody(t);
  }
  setInput(e, t, i, n) {
    return this.keybindingsEditorContextKey.set(!0), super.setInput(e, t, i, n).then(() => this.render(!!(t && t.preserveFocus)));
  }
  clearInput() {
    super.clearInput(), this.keybindingsEditorContextKey.reset(), this.keybindingFocusContextKey.reset();
  }
  layout(e) {
    this.dimension = e, this.layoutSearchWidget(e), this.overlayContainer.style.width = e.width + "px", this.overlayContainer.style.height = e.height + "px", this.defineKeybindingWidget.layout(this.dimension), this.layoutKeybindingsTable(), this._onLayout.fire();
  }
  focus() {
    const e = this.activeKeybindingEntry;
    e ? this.selectEntry(e) : xt || this.searchWidget.focus();
  }
  get activeKeybindingEntry() {
    const e = this.keybindingsTable.getFocusedElements()[0];
    return e && e.templateId === je ? e : null;
  }
  async defineKeybinding(e, t) {
    this.selectEntry(e), this.showOverlayContainer();
    try {
      const i = await this.defineKeybindingWidget.define();
      i && await this.updateKeybinding(e, i, e.keybindingItem.when, t);
    } catch (i) {
      this.onKeybindingEditingError(i);
    } finally {
      this.hideOverlayContainer(), this.selectEntry(e);
    }
  }
  defineWhenExpression(e) {
    e.keybindingItem.keybinding && (this.selectEntry(e), this._onDefineWhenExpression.fire(e));
  }
  rejectWhenExpression(e) {
    this._onRejectWhenExpression.fire(e);
  }
  acceptWhenExpression(e) {
    this._onAcceptWhenExpression.fire(e);
  }
  async updateKeybinding(e, t, i, n) {
    ((e.keybindingItem.keybinding ? e.keybindingItem.keybinding.getUserSettingsLabel() : "") !== t || e.keybindingItem.when !== i) && (n ? await this.keybindingEditingService.addKeybinding(e.keybindingItem.keybindingItem, t, i || void 0) : await this.keybindingEditingService.editKeybinding(e.keybindingItem.keybindingItem, t, i || void 0), e.keybindingItem.keybinding || (this.unAssignedKeybindingItemToRevealAndFocus = e));
  }
  async removeKeybinding(e) {
    if (this.selectEntry(e), e.keybindingItem.keybinding)
      try {
        await this.keybindingEditingService.removeKeybinding(e.keybindingItem.keybindingItem), this.focus();
      } catch (t) {
        this.onKeybindingEditingError(t), this.selectEntry(e);
      }
  }
  async resetKeybinding(e) {
    this.selectEntry(e);
    try {
      await this.keybindingEditingService.resetKeybinding(e.keybindingItem.keybindingItem), e.keybindingItem.keybinding || (this.unAssignedKeybindingItemToRevealAndFocus = e), this.selectEntry(e);
    } catch (t) {
      this.onKeybindingEditingError(t), this.selectEntry(e);
    }
  }
  async copyKeybinding(e) {
    this.selectEntry(e);
    const t = {
      key: e.keybindingItem.keybinding && e.keybindingItem.keybinding.getUserSettingsLabel() || "",
      command: e.keybindingItem.command
    };
    e.keybindingItem.when && (t.when = e.keybindingItem.when), await this.clipboardService.writeText(JSON.stringify(t, null, "  "));
  }
  async copyKeybindingCommand(e) {
    this.selectEntry(e), await this.clipboardService.writeText(e.keybindingItem.command);
  }
  async copyKeybindingCommandTitle(e) {
    this.selectEntry(e), await this.clipboardService.writeText(e.keybindingItem.commandLabel);
  }
  focusSearch() {
    this.searchWidget.focus();
  }
  search(e) {
    this.focusSearch(), this.searchWidget.setValue(e), this.selectEntry(0);
  }
  clearSearchResults() {
    this.searchWidget.clear();
  }
  showSimilarKeybindings(e) {
    const t = `"${e.keybindingItem.keybinding.getAriaLabel()}"`;
    t !== this.searchWidget.getValue() && this.searchWidget.setValue(t);
  }
  createAriaLabelElement(e) {
    this.ariaLabelElement = b(e, W("")), this.ariaLabelElement.setAttribute("id", "keybindings-editor-aria-label-element"), this.ariaLabelElement.setAttribute("aria-live", "assertive");
  }
  createOverlayContainer(e) {
    this.overlayContainer = b(e, H(".overlay-container")), this.overlayContainer.style.position = "absolute", this.overlayContainer.style.zIndex = "40", this.defineKeybindingWidget = this._register(this.instantiationService.createInstance(Fi, this.overlayContainer)), this._register(this.defineKeybindingWidget.onDidChange((t) => this.defineKeybindingWidget.printExisting(this.keybindingsEditorModel.fetch(`"${t}"`).length))), this._register(this.defineKeybindingWidget.onShowExistingKeybidings((t) => this.searchWidget.setValue(`"${t}"`))), this.hideOverlayContainer();
  }
  showOverlayContainer() {
    this.overlayContainer.style.display = "block";
  }
  hideOverlayContainer() {
    this.overlayContainer.style.display = "none";
  }
  createHeader(e) {
    this.headerContainer = b(e, H(".keybindings-header"));
    const t = c(
      "SearchKeybindings.FullTextSearchPlaceholder",
      "Type to search in keybindings"
    ), i = c(
      "SearchKeybindings.KeybindingsSearchPlaceholder",
      "Recording Keys. Press Escape to exit"
    ), n = new re(Sr, c("clearInput", "Clear Keybindings Search Input"), oe.asClassName(uo), !1, async () => this.clearSearchResults()), s = b(this.headerContainer, H(".search-container"));
    this.searchWidget = this._register(this.instantiationService.createInstance(Wi, s, {
      ariaLabel: t,
      placeholder: t,
      focusKey: this.searchFocusContextKey,
      ariaLabelledBy: "keybindings-editor-aria-label-element",
      recordEnter: !0,
      quoteRecordedKeys: !0,
      history: this.getMemento(0, 0).searchHistory || [],
      inputBoxStyles: Ct({
        inputBorder: _t
      })
    })), this._register(this.searchWidget.onDidChange((d) => {
      n.enabled = !!d, this.delayedFiltering.trigger(() => this.filterKeybindings()), this.updateSearchOptions();
    })), this._register(this.searchWidget.onEscape(() => this.recordKeysAction.checked = !1)), this.actionsContainer = b(s, W(".keybindings-search-actions-container"));
    const r = this.createRecordingBadge(this.actionsContainer);
    this._register(this.sortByPrecedenceAction.onDidChange((d) => {
      d.checked !== void 0 && this.renderKeybindingsEntries(!1), this.updateSearchOptions();
    })), this._register(this.recordKeysAction.onDidChange((d) => {
      d.checked !== void 0 && (r.classList.toggle("disabled", !d.checked), d.checked ? (this.searchWidget.inputBox.setPlaceHolder(i), this.searchWidget.inputBox.setAriaLabel(i), this.searchWidget.startRecordingKeys(), this.searchWidget.focus()) : (this.searchWidget.inputBox.setPlaceHolder(t), this.searchWidget.inputBox.setAriaLabel(t), this.searchWidget.stopRecordingKeys(), this.searchWidget.focus()), this.updateSearchOptions());
    }));
    const a = [this.recordKeysAction, this.sortByPrecedenceAction, n], l = this._register(new vr(this.actionsContainer, this.contextMenuService, {
      actionViewItemProvider: (d) => {
        var g;
        if (d.id === this.sortByPrecedenceAction.id || d.id === this.recordKeysAction.id)
          return new Ua(
            null,
            d,
            { keybinding: (g = this.keybindingsService.lookupKeybinding(d.id)) == null ? void 0 : g.getLabel(), toggleStyles: Ga }
          );
      },
      getKeyBinding: (d) => this.keybindingsService.lookupKeybinding(d.id)
    }));
    l.setActions(a), this._register(this.keybindingsService.onDidUpdateKeybindings(() => l.setActions(a)));
  }
  updateSearchOptions() {
    const e = this.input;
    e && (e.searchOptions = {
      searchValue: this.searchWidget.getValue(),
      recordKeybindings: !!this.recordKeysAction.checked,
      sortByPrecedence: !!this.sortByPrecedenceAction.checked
    });
  }
  createRecordingBadge(e) {
    const t = b(e, W(".recording-badge.monaco-count-badge.long.disabled"));
    return t.textContent = c("recording", "Recording Keys"), t.style.backgroundColor = J(ds), t.style.color = J(ls), t.style.border = `1px solid ${J(gs)}`, t;
  }
  layoutSearchWidget(e) {
    this.searchWidget.layout(e), this.headerContainer.classList.toggle("small", e.width < 400), this.searchWidget.inputBox.inputElement.style.paddingRight = `${lr(this.actionsContainer) + 12}px`;
  }
  createBody(e) {
    const t = b(e, H(".keybindings-body"));
    this.createTable(t);
  }
  createTable(e) {
    this.keybindingsTableContainer = b(e, H(".keybindings-table-container")), this.keybindingsTable = this._register(this.instantiationService.createInstance(ja, "KeybindingsEditor", this.keybindingsTableContainer, new Ud(), [
      {
        label: "",
        tooltip: "",
        weight: 0,
        minimumWidth: 40,
        maximumWidth: 40,
        templateId: Vi.TEMPLATE_ID,
        project(t) {
          return t;
        }
      },
      {
        label: c("command", "Command"),
        tooltip: "",
        weight: 0.3,
        templateId: Ui.TEMPLATE_ID,
        project(t) {
          return t;
        }
      },
      {
        label: c("keybinding", "Keybinding"),
        tooltip: "",
        weight: 0.2,
        templateId: Gi.TEMPLATE_ID,
        project(t) {
          return t;
        }
      },
      {
        label: c("when", "When"),
        tooltip: "",
        weight: 0.35,
        templateId: Hi.TEMPLATE_ID,
        project(t) {
          return t;
        }
      },
      {
        label: c("source", "Source"),
        tooltip: "",
        weight: 0.15,
        templateId: ji.TEMPLATE_ID,
        project(t) {
          return t;
        }
      }
    ], [
      this.instantiationService.createInstance(Vi, this),
      this.instantiationService.createInstance(Ui),
      this.instantiationService.createInstance(Gi),
      this.instantiationService.createInstance(Hi, this),
      this.instantiationService.createInstance(ji)
    ], {
      identityProvider: { getId: (t) => t.id },
      horizontalScrolling: !1,
      accessibilityProvider: new jd(this.configurationService),
      keyboardNavigationLabelProvider: { getKeyboardNavigationLabel: (t) => t.keybindingItem.commandLabel || t.keybindingItem.command },
      overrideStyles: {
        listBackground: q
      },
      multipleSelectionSupport: !1,
      setRowLineHeight: !1,
      openOnSingleClick: !1,
      transformOptimization: !1
    })), this._register(this.keybindingsTable.onContextMenu((t) => this.onContextMenu(t))), this._register(this.keybindingsTable.onDidChangeFocus((t) => this.onFocusChange())), this._register(this.keybindingsTable.onDidFocus(() => {
      this.keybindingsTable.getHTMLElement().classList.add("focused"), this.onFocusChange();
    })), this._register(this.keybindingsTable.onDidBlur(() => {
      this.keybindingsTable.getHTMLElement().classList.remove("focused"), this.keybindingFocusContextKey.reset();
    })), this._register(this.keybindingsTable.onDidOpen((t) => {
      var n;
      if ((n = t.browserEvent) != null && n.defaultPrevented)
        return;
      const i = this.activeKeybindingEntry;
      i && this.defineKeybinding(i, !1);
    })), b(this.keybindingsTableContainer, this.overflowWidgetsDomNode);
  }
  async render(e) {
    if (this.input) {
      const t = this.input;
      this.keybindingsEditorModel = await t.resolve(), await this.keybindingsEditorModel.resolve(this.getActionsLabels()), this.renderKeybindingsEntries(!1, e), t.searchOptions ? (this.recordKeysAction.checked = t.searchOptions.recordKeybindings, this.sortByPrecedenceAction.checked = t.searchOptions.sortByPrecedence, this.searchWidget.setValue(t.searchOptions.searchValue)) : this.updateSearchOptions();
    }
  }
  getActionsLabels() {
    const e = /* @__PURE__ */ new Map();
    for (const t of ps.getEditorActions())
      e.set(t.id, t.label);
    for (const t of St.getMenuItems(P.CommandPalette))
      if (wr(t)) {
        const i = typeof t.command.title == "string" ? t.command.title : t.command.title.value, n = t.command.category ? typeof t.command.category == "string" ? t.command.category : t.command.category.value : void 0;
        e.set(t.command.id, n ? `${n}: ${i}` : i);
      }
    return e;
  }
  filterKeybindings() {
    this.renderKeybindingsEntries(this.searchWidget.hasFocus()), this.searchHistoryDelayer.trigger(() => {
      this.searchWidget.inputBox.addToHistory(), this.getMemento(0, 0).searchHistory = this.searchWidget.inputBox.getHistory(), this.saveState();
    });
  }
  clearKeyboardShortcutSearchHistory() {
    this.searchWidget.inputBox.clearHistory(), this.getMemento(0, 0).searchHistory = this.searchWidget.inputBox.getHistory(), this.saveState();
  }
  renderKeybindingsEntries(e, t) {
    if (this.keybindingsEditorModel) {
      const i = this.searchWidget.getValue(), n = this.keybindingsEditorModel.fetch(i, this.sortByPrecedenceAction.checked);
      this.ariaLabelElement.setAttribute("aria-label", this.getAriaLabel(n)), n.length === 0 && this.latestEmptyFilters.push(i);
      const s = this.keybindingsTable.getSelection()[0];
      if (this.tableEntries = n, this.keybindingsTable.splice(0, this.keybindingsTable.length, this.tableEntries), this.layoutKeybindingsTable(), e)
        this.keybindingsTable.setSelection([]), this.keybindingsTable.setFocus([]);
      else if (this.unAssignedKeybindingItemToRevealAndFocus) {
        const r = this.getNewIndexOfUnassignedKeybinding(this.unAssignedKeybindingItemToRevealAndFocus);
        r !== -1 && (this.keybindingsTable.reveal(r, 0.2), this.selectEntry(r)), this.unAssignedKeybindingItemToRevealAndFocus = null;
      } else
        s !== -1 && s < this.tableEntries.length ? this.selectEntry(s, t) : this.editorService.activeEditorPane === this && !t && this.focus();
    }
  }
  getAriaLabel(e) {
    return this.sortByPrecedenceAction.checked ? c(
      "show sorted keybindings",
      "Showing {0} Keybindings in precedence order",
      e.length
    ) : c(
      "show keybindings",
      "Showing {0} Keybindings in alphabetical order",
      e.length
    );
  }
  layoutKeybindingsTable() {
    if (!this.dimension)
      return;
    const e = this.dimension.height - (Er(this.headerContainer).height + 12);
    this.keybindingsTableContainer.style.height = `${e}px`, this.keybindingsTable.layout(e);
  }
  getIndexOf(e) {
    const t = this.tableEntries.indexOf(e);
    if (t === -1) {
      for (let i = 0; i < this.tableEntries.length; i++)
        if (this.tableEntries[i].id === e.id)
          return i;
    }
    return t;
  }
  getNewIndexOfUnassignedKeybinding(e) {
    for (let t = 0; t < this.tableEntries.length; t++) {
      const i = this.tableEntries[t];
      if (i.templateId === je && i.keybindingItem.command === e.keybindingItem.command)
        return t;
    }
    return -1;
  }
  selectEntry(e, t = !0) {
    const i = typeof e == "number" ? e : this.getIndexOf(e);
    i !== -1 && i < this.keybindingsTable.length && (t && (this.keybindingsTable.domFocus(), this.keybindingsTable.setFocus([i])), this.keybindingsTable.setSelection([i]));
  }
  focusKeybindings() {
    this.keybindingsTable.domFocus();
    const e = this.keybindingsTable.getFocus();
    this.keybindingsTable.setFocus([e.length ? e[0] : 0]);
  }
  selectKeybinding(e) {
    this.selectEntry(e);
  }
  recordSearchKeys() {
    this.recordKeysAction.checked = !0;
  }
  toggleSortByPrecedence() {
    this.sortByPrecedenceAction.checked = !this.sortByPrecedenceAction.checked;
  }
  onContextMenu(e) {
    if (e.element && e.element.templateId === je) {
      const t = e.element;
      this.selectEntry(t), this.contextMenuService.showContextMenu({
        getAnchor: () => e.anchor,
        getActions: () => [
          this.createCopyAction(t),
          this.createCopyCommandAction(t),
          this.createCopyCommandTitleAction(t),
          new mt(),
          ...t.keybindingItem.keybinding ? [this.createDefineKeybindingAction(t), this.createAddKeybindingAction(t)] : [this.createDefineKeybindingAction(t)],
          new mt(),
          this.createRemoveAction(t),
          this.createResetAction(t),
          new mt(),
          this.createDefineWhenExpressionAction(t),
          new mt(),
          this.createShowConflictsAction(t)
        ]
      });
    }
  }
  onFocusChange() {
    this.keybindingFocusContextKey.reset();
    const e = this.keybindingsTable.getFocusedElements()[0];
    e && e.templateId === je && this.keybindingFocusContextKey.set(!0);
  }
  createDefineKeybindingAction(e) {
    return {
      label: e.keybindingItem.keybinding ? c("changeLabel", "Change Keybinding...") : c("addLabel", "Add Keybinding..."),
      enabled: !0,
      id: Li,
      run: () => this.defineKeybinding(e, !1)
    };
  }
  createAddKeybindingAction(e) {
    return {
      label: c("addLabel", "Add Keybinding..."),
      enabled: !0,
      id: xr,
      run: () => this.defineKeybinding(e, !0)
    };
  }
  createDefineWhenExpressionAction(e) {
    return {
      label: c("editWhen", "Change When Expression"),
      enabled: !!e.keybindingItem.keybinding,
      id: Cr,
      run: () => this.defineWhenExpression(e)
    };
  }
  createRemoveAction(e) {
    return {
      label: c("removeLabel", "Remove Keybinding"),
      enabled: !!e.keybindingItem.keybinding,
      id: kr,
      run: () => this.removeKeybinding(e)
    };
  }
  createResetAction(e) {
    return {
      label: c("resetLabel", "Reset Keybinding"),
      enabled: !e.keybindingItem.keybindingItem.isDefault,
      id: Tr,
      run: () => this.resetKeybinding(e)
    };
  }
  createShowConflictsAction(e) {
    return {
      label: c("showSameKeybindings", "Show Same Keybindings"),
      enabled: !!e.keybindingItem.keybinding,
      id: Ir,
      run: () => this.showSimilarKeybindings(e)
    };
  }
  createCopyAction(e) {
    return {
      label: c("copyLabel", "Copy"),
      enabled: !0,
      id: _r,
      run: () => this.copyKeybinding(e)
    };
  }
  createCopyCommandAction(e) {
    return {
      label: c("copyCommandLabel", "Copy Command ID"),
      enabled: !0,
      id: Dr,
      run: () => this.copyKeybindingCommand(e)
    };
  }
  createCopyCommandTitleAction(e) {
    return {
      label: c("copyCommandTitleLabel", "Copy Command Title"),
      enabled: !!e.keybindingItem.commandLabel,
      id: Lr,
      run: () => this.copyKeybindingCommandTitle(e)
    };
  }
  onKeybindingEditingError(e) {
    this.notificationService.error(typeof e == "string" ? e : c(
      "error",
      "Error '{0}' while editing the keybinding. Please open 'keybindings.json' file and check for errors.",
      `${e}`
    ));
  }
}, Lt.ID = "workbench.editor.keybindings", Lt);
K = v([
  u(0, fs),
  u(1, an),
  u(2, Fe),
  u(3, Kt),
  u(4, Mr),
  u(5, Ke),
  u(6, sr),
  u(7, ms),
  u(8, $),
  u(9, N),
  u(10, Rr),
  u(11, ge)
], K);
class Ud {
  constructor() {
    this.headerRowHeight = 30;
  }
  getHeight(e) {
    if (e.templateId === je) {
      const t = e.keybindingItem.commandLabel && e.commandIdMatches, i = !!e.commandDefaultLabelMatches, n = !!e.extensionIdMatches;
      if (t && i)
        return 60;
      if (n || t || i)
        return 40;
    }
    return 24;
  }
}
var Mt;
let Vi = (Mt = class {
  constructor(e, t) {
    this.keybindingsEditor = e, this.keybindingsService = t, this.templateId = Mt.TEMPLATE_ID;
  }
  renderTemplate(e) {
    const t = b(e, H(".actions"));
    return { actionBar: new on(t, { animated: !1 }) };
  }
  renderElement(e, t, i, n) {
    i.actionBar.clear();
    const s = [];
    e.keybindingItem.keybinding ? s.push(this.createEditAction(e)) : s.push(this.createAddAction(e)), i.actionBar.push(s, { icon: !0 });
  }
  createEditAction(e) {
    const t = this.keybindingsService.lookupKeybinding(Li);
    return {
      class: oe.asClassName(Rd),
      enabled: !0,
      id: "editKeybinding",
      tooltip: t ? c(
        "editKeybindingLabelWithKey",
        "Change Keybinding {0}",
        `(${t.getLabel()})`
      ) : c("editKeybindingLabel", "Change Keybinding"),
      run: () => this.keybindingsEditor.defineKeybinding(e, !1)
    };
  }
  createAddAction(e) {
    const t = this.keybindingsService.lookupKeybinding(Li);
    return {
      class: oe.asClassName(Ad),
      enabled: !0,
      id: "addKeybinding",
      tooltip: t ? c(
        "addKeybindingLabelWithKey",
        "Add Keybinding {0}",
        `(${t.getLabel()})`
      ) : c("addKeybindingLabel", "Add Keybinding"),
      run: () => this.keybindingsEditor.defineKeybinding(e, !1)
    };
  }
  disposeTemplate(e) {
    e.actionBar.dispose();
  }
}, Mt.TEMPLATE_ID = "actions", Mt);
Vi = v([
  u(1, Fe)
], Vi);
const en = class en {
  constructor() {
    this.templateId = en.TEMPLATE_ID;
  }
  renderTemplate(e) {
    const t = b(e, H(".command")), i = b(t, H(".command-label")), n = new wt(i), s = b(t, H(".command-default-label")), r = new wt(s), a = b(t, H(".command-id.code")), l = new wt(a);
    return { commandColumn: t, commandLabelContainer: i, commandLabel: n, commandDefaultLabelContainer: s, commandDefaultLabel: r, commandIdLabelContainer: a, commandIdLabel: l };
  }
  renderElement(e, t, i, n) {
    const s = e.keybindingItem, r = !!(s.commandLabel && e.commandIdMatches), a = !!e.commandDefaultLabelMatches;
    i.commandColumn.classList.toggle("vertical-align-column", r || a), i.commandColumn.title = s.commandLabel ? c("title", "{0} ({1})", s.commandLabel, s.command) : s.command, s.commandLabel ? (i.commandLabelContainer.classList.remove("hide"), i.commandLabel.set(s.commandLabel, e.commandLabelMatches)) : (i.commandLabelContainer.classList.add("hide"), i.commandLabel.set(void 0)), e.commandDefaultLabelMatches ? (i.commandDefaultLabelContainer.classList.remove("hide"), i.commandDefaultLabel.set(s.commandDefaultLabel, e.commandDefaultLabelMatches)) : (i.commandDefaultLabelContainer.classList.add("hide"), i.commandDefaultLabel.set(void 0)), e.commandIdMatches || !s.commandLabel ? (i.commandIdLabelContainer.classList.remove("hide"), i.commandIdLabel.set(s.command, e.commandIdMatches)) : (i.commandIdLabelContainer.classList.add("hide"), i.commandIdLabel.set(void 0));
  }
  disposeTemplate(e) {
  }
};
en.TEMPLATE_ID = "commands";
let Ui = en;
const tn = class tn {
  constructor() {
    this.templateId = tn.TEMPLATE_ID;
  }
  renderTemplate(e) {
    const t = b(e, H(".keybinding"));
    return { keybindingLabel: new En(
      b(t, H("div.keybinding-label")),
      _i,
      xn
    ) };
  }
  renderElement(e, t, i, n) {
    e.keybindingItem.keybinding ? i.keybindingLabel.set(e.keybindingItem.keybinding, e.keybindingMatches) : i.keybindingLabel.set(void 0, void 0);
  }
  disposeTemplate(e) {
  }
};
tn.TEMPLATE_ID = "keybindings";
let Gi = tn;
function Gd(o, e) {
  const t = new U();
  return t.add(_(o, I.CLICK, Za(e))), t.add(_(o, I.KEY_UP, (i) => {
    const n = new Je(i);
    (n.equals(10) || n.equals(3)) && (i.preventDefault(), i.stopPropagation(), e());
  })), t;
}
var Rt;
let ji = (Rt = class {
  constructor(e) {
    this.extensionsWorkbenchService = e, this.templateId = Rt.TEMPLATE_ID;
  }
  renderTemplate(e) {
    const t = b(e, H(".source")), i = new wt(b(t, H(".source-label"))), n = b(t, H(".extension-container")), s = b(n, H("a.extension-label", { tabindex: 0 })), r = new wt(b(n, H(".extension-id-container.code")));
    return { sourceColumn: t, sourceLabel: i, extensionLabel: s, extensionContainer: n, extensionId: r, disposables: new U() };
  }
  renderElement(e, t, i, n) {
    if (We(e.keybindingItem.source))
      i.extensionContainer.classList.add("hide"), i.sourceLabel.element.classList.remove("hide"), i.sourceColumn.title = "", i.sourceLabel.set(e.keybindingItem.source || "-", e.sourceMatches);
    else {
      i.extensionContainer.classList.remove("hide"), i.sourceLabel.element.classList.add("hide");
      const s = e.keybindingItem.source, r = s.displayName ?? s.identifier.value;
      i.sourceColumn.title = c("extension label", "Extension ({0})", r), i.extensionLabel.textContent = r, i.disposables.add(Gd(i.extensionLabel, () => {
        this.extensionsWorkbenchService.open(s.identifier.value);
      })), e.extensionIdMatches ? (i.extensionId.element.classList.remove("hide"), i.extensionId.set(s.identifier.value, e.extensionIdMatches)) : (i.extensionId.element.classList.add("hide"), i.extensionId.set(void 0));
    }
  }
  disposeTemplate(e) {
    e.disposables.dispose();
  }
}, Rt.TEMPLATE_ID = "source", Rt);
ji = v([
  u(0, Ar)
], ji);
let Nn = class extends Q {
  constructor(e, t, i, n) {
    super(), this._onDidAccept = this._register(new T()), this.onDidAccept = this._onDidAccept.event, this._onDidReject = this._register(new T()), this.onDidReject = this._onDidReject.event;
    const s = Gt.bindTo(n);
    this.input = this._register(i.createInstance(Pi, "keyboardshortcutseditor#wheninput", e, {
      provideResults: () => {
        const r = [];
        for (const a of ec.all())
          r.push({ label: a.key, documentation: a.description, detail: a.type, kind: 14 });
        return r;
      },
      triggerCharacters: ["!", " "],
      wordDefinition: /[a-zA-Z.]+/,
      alwaysShowSuggestions: !0
    }, "", "keyboardshortcutseditor#wheninput", { focusContextKey: s, overflowWidgetsDomNode: t.overflowWidgetsDomNode })), this._register(_(this.input.element, I.DBLCLICK, (r) => dt.stop(r))), this._register(si(() => s.reset())), this._register(t.onAcceptWhenExpression(() => this._onDidAccept.fire(this.input.getValue()))), this._register(le.any(t.onRejectWhenExpression, this.input.onDidBlur)(() => this._onDidReject.fire()));
  }
  layout(e) {
    this.input.layout(e);
  }
  show(e) {
    this.input.setValue(e), this.input.focus(!0);
  }
};
Nn = v([
  u(2, $),
  u(3, Ke)
], Nn);
var At;
let Hi = (At = class {
  constructor(e, t) {
    this.keybindingsEditor = e, this.instantiationService = t, this.templateId = At.TEMPLATE_ID;
  }
  renderTemplate(e) {
    const t = b(e, H(".when")), i = b(t, H("div.when-label")), n = new wt(i), s = b(t, H("div.when-input-container"));
    return {
      element: t,
      whenLabelContainer: i,
      whenLabel: n,
      whenInputContainer: s,
      disposables: new U()
    };
  }
  renderElement(e, t, i, n) {
    i.disposables.clear();
    const s = i.disposables.add(new U());
    i.disposables.add(this.keybindingsEditor.onDefineWhenExpression((r) => {
      if (e === r) {
        i.element.classList.add("input-mode");
        const a = s.add(this.instantiationService.createInstance(Nn, i.whenInputContainer, this.keybindingsEditor));
        a.layout(new hs(i.element.parentElement.clientWidth, 18)), a.show(e.keybindingItem.when || "");
        const l = () => {
          s.clear(), i.element.classList.remove("input-mode"), i.element.parentElement.style.paddingLeft = "10px", Ae(i.whenInputContainer);
        };
        s.add(a.onDidAccept((d) => {
          l(), this.keybindingsEditor.updateKeybinding(e, e.keybindingItem.keybinding && e.keybindingItem.keybinding.getUserSettingsLabel() || "", d), this.keybindingsEditor.selectKeybinding(e);
        })), s.add(a.onDidReject(() => {
          l(), this.keybindingsEditor.selectKeybinding(e);
        })), i.element.parentElement.style.paddingLeft = "0px";
      }
    })), i.whenLabelContainer.classList.toggle("code", !!e.keybindingItem.when), i.whenLabelContainer.classList.toggle("empty", !e.keybindingItem.when), e.keybindingItem.when ? (i.whenLabel.set(e.keybindingItem.when, e.whenMatches), i.whenLabel.element.title = e.keybindingItem.when, i.element.title = e.keybindingItem.when) : (i.whenLabel.set("-"), i.whenLabel.element.title = "", i.element.title = "");
  }
  disposeTemplate(e) {
    e.disposables.dispose();
  }
}, At.TEMPLATE_ID = "when", At);
Hi = v([
  u(1, $)
], Hi);
class jd {
  constructor(e) {
    this.configurationService = e;
  }
  getWidgetAriaLabel() {
    return c("keybindingsLabel", "Keybindings");
  }
  getAriaLabel({ keybindingItem: e }) {
    var i;
    const t = [
      e.commandLabel ? e.commandLabel : e.command,
      ((i = e.keybinding) == null ? void 0 : i.getAriaLabel()) || c("noKeybinding", "No keybinding assigned"),
      e.when ? e.when : c("noWhen", "No when context"),
      We(e.source) ? e.source : e.source.description ?? e.source.identifier.value
    ];
    if (this.configurationService.getValue("accessibility.verbosity.keybindingsEditor")) {
      const n = c(
        "keyboard shortcuts aria label",
        "use space or enter to change the keybinding."
      );
      t.push(n);
    }
    return t.join(", ");
  }
}
G("keybindingTable.headerBackground", { dark: Ue, light: Ue, hcDark: Ue, hcLight: Ue }, "Background color for the keyboard shortcuts table header.");
G("keybindingTable.rowsBackground", { light: Ue, dark: Ue, hcDark: Ue, hcLight: Ue }, "Background color for the keyboard shortcuts table alternating rows.");
hr((o, e) => {
  const t = o.getColor(pt);
  if (t) {
    const h = t.transparent(0.8).makeOpaque(Ha(o));
    e.addRule(`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table .monaco-table-tr .monaco-table-td .code { color: ${h}; }`);
  }
  const i = o.getColor($a), n = o.getColor(za);
  if (i && n) {
    const h = i.transparent(0.8).makeOpaque(n);
    e.addRule(`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table.focused .monaco-list-row.selected .monaco-table-tr .monaco-table-td .code { color: ${h}; }`);
  }
  const s = o.getColor(qa), r = o.getColor(Ya);
  if (s && r) {
    const h = s.transparent(0.8).makeOpaque(r);
    e.addRule(`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table .monaco-list-row.selected .monaco-table-tr .monaco-table-td .code { color: ${h}; }`);
  }
  const a = o.getColor(Ja), l = o.getColor(Xa);
  if (a && l) {
    const h = a.transparent(0.8).makeOpaque(l);
    e.addRule(`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table.focused .monaco-list-row.focused .monaco-table-tr .monaco-table-td .code { color: ${h}; }`);
  }
  const d = o.getColor(Qa), g = o.getColor(Zt);
  if (d && g) {
    const h = d.transparent(0.8).makeOpaque(g);
    e.addRule(`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table.focused .monaco-list-row:hover:not(.focused):not(.selected) .monaco-table-tr .monaco-table-td .code { color: ${h}; }`);
  }
});
var Ot;
let nt = (Ot = class extends re {
  constructor(e, t, i, n, s, r) {
    super(e, t), this.modelService = i, this.languageService = n, this.quickInputService = s, this.preferencesService = r;
  }
  async run() {
    const t = this.languageService.getSortedRegisteredLanguageNames().map(({ languageName: i, languageId: n }) => {
      const s = c("languageDescriptionConfigured", "({0})", n);
      let r;
      const a = this.languageService.getExtensions(n);
      if (a.length)
        r = Y.file(a[0]);
      else {
        const l = this.languageService.getFilenames(n);
        l.length && (r = Y.file(l[0]));
      }
      return {
        label: i,
        iconClasses: tc(this.modelService, this.languageService, r),
        description: s
      };
    });
    await this.quickInputService.pick(t, { placeHolder: c("pickLanguage", "Select Language") }).then((i) => {
      if (i) {
        const n = this.languageService.getLanguageIdByLanguageName(i.label);
        if (typeof n == "string")
          return this.preferencesService.openLanguageSpecificSettings(n);
      }
    });
  }
}, Ot.ID = "workbench.action.configureLanguageBasedSettings", Ot.LABEL = { value: c(
  "configureLanguageBasedSettings",
  "Configure Language Specific Settings..."
), original: "Configure Language Specific Settings..." }, Ot);
nt = v([
  u(2, sn),
  u(3, Pe),
  u(4, ic),
  u(5, B)
], nt);
bt.registerCommand({
  id: "_getAllSettings",
  handler: () => ue.as(_e.Configuration).getConfigurationProperties()
});
bt.registerCommand("_getAllCommands", function(o) {
  var i, n;
  const e = o.get(Fe), t = [];
  for (const s of ps.getEditorActions()) {
    const r = e.lookupKeybinding(s.id);
    t.push({ command: s.id, label: s.label, precondition: (i = s.precondition) == null ? void 0 : i.serialize(), keybinding: (r == null ? void 0 : r.getLabel()) ?? "Not set" });
  }
  for (const s of St.getMenuItems(P.CommandPalette))
    if (wr(s)) {
      const r = typeof s.command.title == "string" ? s.command.title : s.command.title.value, a = s.command.category ? typeof s.command.category == "string" ? s.command.category : s.command.category.value : void 0, l = a ? `${a}: ${r}` : r, d = e.lookupKeybinding(s.command.id);
      t.push({ command: s.command.id, label: l, precondition: (n = s.when) == null ? void 0 : n.serialize(), keybinding: (d == null ? void 0 : d.getLabel()) ?? "Not set" });
    }
  return t;
});
let $i = class extends Q {
  constructor(e, t, i, n, s) {
    super(), this.editor = e, this.preferencesModel = t, this.preferencesService = i, this.configurationService = n, this.instantiationService = s, this.modelChangeDelayer = new be(200), this.settingHighlighter = this._register(s.createInstance(Pn, e)), this.editSettingActionRenderer = this._register(this.instantiationService.createInstance(Fn, this.editor, this.preferencesModel, this.settingHighlighter)), this._register(this.editSettingActionRenderer.onUpdateSetting(({ key: r, value: a, source: l }) => this.updatePreference(r, a, l))), this._register(this.editor.getModel().onDidChangeContent(() => this.modelChangeDelayer.trigger(() => this.onModelChanged()))), this.unsupportedSettingsRenderer = this._register(s.createInstance(Kn, e, t));
  }
  render() {
    this.editSettingActionRenderer.render(this.preferencesModel.settingsGroups, this.associatedPreferencesModel), this.unsupportedSettingsRenderer.render();
  }
  updatePreference(e, t, i) {
    const n = i.overrideOf ? rc(i.overrideOf.key) : null, s = this.preferencesModel.uri;
    this.configurationService.updateValue(e, t, { overrideIdentifiers: n, resource: s }, this.preferencesModel.configurationTarget).then(() => this.onSettingUpdated(i));
  }
  onModelChanged() {
    this.editor.hasModel() && this.render();
  }
  onSettingUpdated(e) {
    this.editor.focus(), e = this.getSetting(e), e && (this.editor.setSelection(e.valueRange), this.settingHighlighter.highlight(e, !0));
  }
  getSetting(e) {
    const { key: t, overrideOf: i } = e;
    if (i) {
      const n = this.getSetting(i);
      for (const s of n.overrides)
        if (s.key === t)
          return s;
      return;
    }
    return this.preferencesModel.getPreference(t);
  }
  focusPreference(e) {
    const t = this.getSetting(e);
    t ? (this.settingHighlighter.highlight(t, !0), this.editor.setPosition({ lineNumber: t.keyRange.startLineNumber, column: t.keyRange.startColumn })) : this.settingHighlighter.clear(!0);
  }
  clearFocus(e) {
    this.settingHighlighter.clear(!0);
  }
  editPreference(e) {
    const t = this.getSetting(e);
    return !!(t && this.editSettingActionRenderer.activateOnSetting(t));
  }
};
$i = v([
  u(2, B),
  u(3, ge),
  u(4, $)
], $i);
let Wn = class extends $i {
  constructor(e, t, i, n, s) {
    super(e, t, i, n, s), this.workspaceConfigurationRenderer = this._register(s.createInstance(Bn, e, t));
  }
  render() {
    super.render(), this.workspaceConfigurationRenderer.render();
  }
};
Wn = v([
  u(2, B),
  u(3, ge),
  u(4, $)
], Wn);
let Fn = class extends Q {
  constructor(e, t, i, n, s, r) {
    super(), this.editor = e, this.primarySettingsModel = t, this.settingHighlighter = i, this.configurationService = n, this.instantiationService = s, this.contextMenuService = r, this.settingsGroups = [], this._onUpdateSetting = new T(), this.onUpdateSetting = this._onUpdateSetting.event, this.editPreferenceWidgetForCursorPosition = this._register(this.instantiationService.createInstance(Us, e)), this.editPreferenceWidgetForMouseMove = this._register(this.instantiationService.createInstance(Us, e)), this.toggleEditPreferencesForMouseMoveDelayer = new be(75), this._register(this.editPreferenceWidgetForCursorPosition.onClick((a) => this.onEditSettingClicked(this.editPreferenceWidgetForCursorPosition, a))), this._register(this.editPreferenceWidgetForMouseMove.onClick((a) => this.onEditSettingClicked(this.editPreferenceWidgetForMouseMove, a))), this._register(this.editor.onDidChangeCursorPosition((a) => this.onPositionChanged(a))), this._register(this.editor.onMouseMove((a) => this.onMouseMoved(a))), this._register(this.editor.onDidChangeConfiguration(() => this.onConfigurationChanged()));
  }
  render(e, t) {
    this.editPreferenceWidgetForCursorPosition.hide(), this.editPreferenceWidgetForMouseMove.hide(), this.settingsGroups = e, this.associatedPreferencesModel = t;
    const i = this.getSettings(this.editor.getPosition().lineNumber);
    i.length && this.showEditPreferencesWidget(this.editPreferenceWidgetForCursorPosition, i);
  }
  isDefaultSettings() {
    return this.primarySettingsModel instanceof ao;
  }
  onConfigurationChanged() {
    this.editor.getOption(56) || (this.editPreferenceWidgetForCursorPosition.hide(), this.editPreferenceWidgetForMouseMove.hide());
  }
  onPositionChanged(e) {
    this.editPreferenceWidgetForMouseMove.hide();
    const t = this.getSettings(e.position.lineNumber);
    t.length ? this.showEditPreferencesWidget(this.editPreferenceWidgetForCursorPosition, t) : this.editPreferenceWidgetForCursorPosition.hide();
  }
  onMouseMoved(e) {
    const t = this.getEditPreferenceWidgetUnderMouse(e);
    if (t) {
      this.onMouseOver(t);
      return;
    }
    this.settingHighlighter.clear(), this.toggleEditPreferencesForMouseMoveDelayer.trigger(() => this.toggleEditPreferenceWidgetForMouseMove(e));
  }
  getEditPreferenceWidgetUnderMouse(e) {
    if (e.target.type === 2) {
      const t = e.target.position.lineNumber;
      if (this.editPreferenceWidgetForMouseMove.getLine() === t && this.editPreferenceWidgetForMouseMove.isVisible())
        return this.editPreferenceWidgetForMouseMove;
      if (this.editPreferenceWidgetForCursorPosition.getLine() === t && this.editPreferenceWidgetForCursorPosition.isVisible())
        return this.editPreferenceWidgetForCursorPosition;
    }
  }
  toggleEditPreferenceWidgetForMouseMove(e) {
    const t = e.target.position ? this.getSettings(e.target.position.lineNumber) : null;
    t && t.length ? this.showEditPreferencesWidget(this.editPreferenceWidgetForMouseMove, t) : this.editPreferenceWidgetForMouseMove.hide();
  }
  showEditPreferencesWidget(e, t) {
    const i = t[0].valueRange.startLineNumber;
    this.editor.getOption(56) && this.marginFreeFromOtherDecorations(i) && (e.show(i, c("editTtile", "Edit"), t), (e === this.editPreferenceWidgetForCursorPosition ? this.editPreferenceWidgetForMouseMove : this.editPreferenceWidgetForCursorPosition).hide());
  }
  marginFreeFromOtherDecorations(e) {
    const t = this.editor.getLineDecorations(e);
    if (t) {
      for (const { options: i } of t)
        if (i.glyphMarginClassName && i.glyphMarginClassName.indexOf(oe.asClassName(dn)) === -1)
          return !1;
    }
    return !0;
  }
  getSettings(e) {
    const t = this.getConfigurationsMap();
    return this.getSettingsAtLineNumber(e).filter((i) => {
      const n = t[i.key];
      if (n) {
        if (n.policy && this.configurationService.inspect(i.key).policyValue !== void 0)
          return !1;
        if (this.isDefaultSettings())
          return i.key !== "launch";
        if ((n.type === "boolean" || n.enum) && (this.primarySettingsModel.configurationTarget !== 6 || n.scope === 4 || n.scope === 5))
          return !0;
      }
      return !1;
    });
  }
  getSettingsAtLineNumber(e) {
    let t = 0;
    const i = [];
    for (const n of this.settingsGroups) {
      if (n.range.startLineNumber > e)
        break;
      if (e >= n.range.startLineNumber && e <= n.range.endLineNumber)
        for (const s of n.sections)
          for (const r of s.settings) {
            if (r.range.startLineNumber > e)
              break;
            if (e >= r.range.startLineNumber && e <= r.range.endLineNumber)
              if (!this.isDefaultSettings() && r.overrides.length)
                for (const a of r.overrides)
                  e >= a.range.startLineNumber && e <= a.range.endLineNumber && i.push({ ...a, index: t, groupId: n.id });
              else
                i.push({ ...r, index: t, groupId: n.id });
            t++;
          }
    }
    return i;
  }
  onMouseOver(e) {
    this.settingHighlighter.highlight(e.preferences[0]);
  }
  onEditSettingClicked(e, t) {
    dt.stop(t.event, !0);
    const i = this.getSettings(e.getLine()).length === 1 ? this.getActions(e.preferences[0], this.getConfigurationsMap()[e.preferences[0].key]) : e.preferences.map((n) => new oc(
      `preferences.submenu.${n.key}`,
      n.key,
      this.getActions(n, this.getConfigurationsMap()[n.key])
    ));
    this.contextMenuService.showContextMenu({
      getAnchor: () => t.event,
      getActions: () => i
    });
  }
  activateOnSetting(e) {
    const t = e.keyRange.startLineNumber, i = this.getSettings(t);
    if (!i.length)
      return !1;
    this.editPreferenceWidgetForMouseMove.show(t, "", i);
    const n = this.getActions(this.editPreferenceWidgetForMouseMove.preferences[0], this.getConfigurationsMap()[this.editPreferenceWidgetForMouseMove.preferences[0].key]);
    return this.contextMenuService.showContextMenu({
      getAnchor: () => this.toAbsoluteCoords(new fr(t, 1)),
      getActions: () => n
    }), !0;
  }
  toAbsoluteCoords(e) {
    const t = this.editor.getScrolledVisiblePosition(e), i = Er(this.editor.getDomNode()), n = i.left + t.left, s = i.top + t.top + t.height;
    return { x: n, y: s + 10 };
  }
  getConfigurationsMap() {
    return ue.as(_e.Configuration).getConfigurationProperties();
  }
  getActions(e, t) {
    return t.type === "boolean" ? [{
      id: "truthyValue",
      label: "true",
      enabled: !0,
      run: () => this.updateSetting(e.key, !0, e)
    }, {
      id: "falsyValue",
      label: "false",
      enabled: !0,
      run: () => this.updateSetting(e.key, !1, e)
    }] : t.enum ? t.enum.map((i) => ({
      id: i,
      label: JSON.stringify(i),
      enabled: !0,
      run: () => this.updateSetting(e.key, i, e)
    })) : this.getDefaultActions(e);
  }
  getDefaultActions(e) {
    return this.isDefaultSettings() ? [{
      id: "setDefaultValue",
      label: this.associatedPreferencesModel.getPreference(e.key) ? c("replaceDefaultValue", "Replace in Settings") : c("copyDefaultValue", "Copy to Settings"),
      enabled: !0,
      run: () => this.updateSetting(e.key, e.value, e)
    }] : [];
  }
  updateSetting(e, t, i) {
    this._onUpdateSetting.fire({ key: e, value: t, source: i });
  }
};
Fn = v([
  u(3, ge),
  u(4, $),
  u(5, Kt)
], Fn);
let Pn = class extends Q {
  constructor(e, t) {
    super(), this.editor = e, this.fixedHighlighter = this._register(t.createInstance(Ls)), this.volatileHighlighter = this._register(t.createInstance(Ls));
  }
  highlight(e, t = !1) {
    this.volatileHighlighter.removeHighlightRange(), this.fixedHighlighter.removeHighlightRange(), (t ? this.fixedHighlighter : this.volatileHighlighter).highlightRange({
      range: e.valueRange,
      resource: this.editor.getModel().uri
    }, this.editor), this.editor.revealLineInCenterIfOutsideViewport(e.valueRange.startLineNumber, 0);
  }
  clear(e = !1) {
    this.volatileHighlighter.removeHighlightRange(), e && this.fixedHighlighter.removeHighlightRange();
  }
};
Pn = v([
  u(1, $)
], Pn);
let Kn = class extends Q {
  constructor(e, t, i, n, s, r, a, l, d, g) {
    super(), this.editor = e, this.settingsEditorModel = t, this.markerService = i, this.environmentService = n, this.configurationService = s, this.workspaceTrustManagementService = r, this.uriIdentityService = a, this.userDataProfileService = d, this.userDataProfilesService = g, this.renderingDelayer = new be(200), this.codeActions = new ac((h) => this.uriIdentityService.extUri.getComparisonKey(h)), this._register(this.editor.getModel().onDidChangeContent(() => this.delayedRender())), this._register(le.filter(this.configurationService.onDidChangeConfiguration, (h) => h.source === 7)(() => this.delayedRender())), this._register(l.codeActionProvider.register({ pattern: t.uri.path }, this));
  }
  delayedRender() {
    this.renderingDelayer.trigger(() => this.render());
  }
  render() {
    this.codeActions.clear();
    const e = this.generateMarkerData();
    e.length ? this.markerService.changeOne("UnsupportedSettingsRenderer", this.settingsEditorModel.uri, e) : this.markerService.remove("UnsupportedSettingsRenderer", [this.settingsEditorModel.uri]);
  }
  async provideCodeActions(e, t, i, n) {
    const s = [], r = this.codeActions.get(e.uri);
    if (r)
      for (const [a, l] of r)
        a.containsRange(t) && s.push(...l);
    return {
      actions: s,
      dispose: () => {
      }
    };
  }
  generateMarkerData() {
    const e = [], t = ue.as(_e.Configuration).getConfigurationProperties();
    for (const i of this.settingsEditorModel.settingsGroups)
      for (const n of i.sections)
        for (const s of n.settings) {
          if (Qt.test(s.key)) {
            s.overrides && this.handleOverrides(s.overrides, t, e);
            continue;
          }
          const r = t[s.key];
          if (r) {
            if (this.handlePolicyConfiguration(s, r, e))
              continue;
            switch (this.settingsEditorModel.configurationTarget) {
              case 3:
                this.handleLocalUserConfiguration(s, r, e);
                break;
              case 4:
                this.handleRemoteUserConfiguration(s, r, e);
                break;
              case 5:
                this.handleWorkspaceConfiguration(s, r, e);
                break;
              case 6:
                this.handleWorkspaceFolderConfiguration(s, r, e);
                break;
            }
          } else
            e.push(this.gemerateUnknownConfigurationMarker(s));
        }
    return e;
  }
  handlePolicyConfiguration(e, t, i) {
    return !t.policy || this.configurationService.inspect(e.key).policyValue === void 0 || this.settingsEditorModel.configurationTarget === 7 ? !1 : (i.push({
      severity: ve.Hint,
      tags: [1],
      ...e.range,
      message: c(
        "unsupportedPolicySetting",
        "This setting cannot be applied because it is configured in the system policy."
      )
    }), !0);
  }
  handleOverrides(e, t, i) {
    for (const n of e || []) {
      const s = t[n.key];
      s ? s.scope !== 5 && i.push({
        severity: ve.Hint,
        tags: [1],
        ...n.range,
        message: c(
          "unsupportLanguageOverrideSetting",
          "This setting cannot be applied because it is not registered as language override setting."
        )
      }) : i.push(this.gemerateUnknownConfigurationMarker(n));
    }
  }
  handleLocalUserConfiguration(e, t, i) {
    var n;
    !this.userDataProfileService.currentProfile.isDefault && !((n = this.userDataProfileService.currentProfile.useDefaultFlags) != null && n.settings) && (Xe(this.userDataProfilesService.defaultProfile.settingsResource, this.settingsEditorModel.uri) && !this.configurationService.isSettingAppliedForAllProfiles(e.key) ? i.push({
      severity: ve.Hint,
      tags: [1],
      ...e.range,
      message: c(
        "defaultProfileSettingWhileNonDefaultActive",
        "This setting cannot be applied while a non-default profile is active. It will be applied when the default profile is active."
      )
    }) : Xe(this.userDataProfileService.currentProfile.settingsResource, this.settingsEditorModel.uri) && (t.scope === 1 ? i.push(this.generateUnsupportedApplicationSettingMarker(e)) : this.configurationService.isSettingAppliedForAllProfiles(e.key) && i.push({
      severity: ve.Hint,
      tags: [1],
      ...e.range,
      message: c(
        "allProfileSettingWhileInNonDefaultProfileSetting",
        "This setting cannot be applied because it is configured to be applied in all profiles using setting {0}. Value from the default profile will be used instead.",
        it
      )
    }))), this.environmentService.remoteAuthority && (t.scope === 2 || t.scope === 6) && i.push({
      severity: ve.Hint,
      tags: [1],
      ...e.range,
      message: c(
        "unsupportedRemoteMachineSetting",
        "This setting cannot be applied in this window. It will be applied when you open a local window."
      )
    });
  }
  handleRemoteUserConfiguration(e, t, i) {
    t.scope === 1 && i.push(this.generateUnsupportedApplicationSettingMarker(e));
  }
  handleWorkspaceConfiguration(e, t, i) {
    if (t.scope === 1 && i.push(this.generateUnsupportedApplicationSettingMarker(e)), t.scope === 2 && i.push(this.generateUnsupportedMachineSettingMarker(e)), !this.workspaceTrustManagementService.isWorkspaceTrusted() && t.restricted) {
      const n = this.generateUntrustedSettingMarker(e);
      i.push(n);
      const s = this.generateUntrustedSettingCodeActions([n]);
      this.addCodeActions(n, s);
    }
  }
  handleWorkspaceFolderConfiguration(e, t, i) {
    if (t.scope === 1 && i.push(this.generateUnsupportedApplicationSettingMarker(e)), t.scope === 2 && i.push(this.generateUnsupportedMachineSettingMarker(e)), t.scope === 3 && i.push({
      severity: ve.Hint,
      tags: [1],
      ...e.range,
      message: c(
        "unsupportedWindowSetting",
        "This setting cannot be applied in this workspace. It will be applied when you open the containing workspace folder directly."
      )
    }), !this.workspaceTrustManagementService.isWorkspaceTrusted() && t.restricted) {
      const n = this.generateUntrustedSettingMarker(e);
      i.push(n);
      const s = this.generateUntrustedSettingCodeActions([n]);
      this.addCodeActions(n, s);
    }
  }
  generateUnsupportedApplicationSettingMarker(e) {
    return {
      severity: ve.Hint,
      tags: [1],
      ...e.range,
      message: c(
        "unsupportedApplicationSetting",
        "This setting has an application scope and can be set only in the user settings file."
      )
    };
  }
  generateUnsupportedMachineSettingMarker(e) {
    return {
      severity: ve.Hint,
      tags: [1],
      ...e.range,
      message: c(
        "unsupportedMachineSetting",
        "This setting can only be applied in user settings in local window or in remote settings in remote window."
      )
    };
  }
  generateUntrustedSettingMarker(e) {
    return {
      severity: ve.Warning,
      ...e.range,
      message: c(
        "untrustedSetting",
        "This setting can only be applied in a trusted workspace."
      )
    };
  }
  gemerateUnknownConfigurationMarker(e) {
    return {
      severity: ve.Hint,
      tags: [1],
      ...e.range,
      message: c("unknown configuration setting", "Unknown Configuration Setting")
    };
  }
  generateUntrustedSettingCodeActions(e) {
    return [{
      title: c("manage workspace trust", "Manage Workspace Trust"),
      command: {
        id: "workbench.trust.manage",
        title: c("manage workspace trust", "Manage Workspace Trust")
      },
      diagnostics: e,
      kind: cc.QuickFix.value
    }];
  }
  addCodeActions(e, t) {
    let i = this.codeActions.get(this.settingsEditorModel.uri);
    i || (i = [], this.codeActions.set(this.settingsEditorModel.uri, i)), i.push([vt.lift(e), t]);
  }
  dispose() {
    this.markerService.remove("UnsupportedSettingsRenderer", [this.settingsEditorModel.uri]), this.codeActions.clear(), super.dispose();
  }
};
Kn = v([
  u(2, Or),
  u(3, Bt),
  u(4, gt),
  u(5, Nr),
  u(6, nc),
  u(7, ur),
  u(8, Wt),
  u(9, Ft)
], Kn);
var He;
let Bn = (He = class extends Q {
  constructor(e, t, i, n) {
    super(), this.editor = e, this.workspaceSettingsEditorModel = t, this.workspaceContextService = i, this.markerService = n, this.decorations = this.editor.createDecorationsCollection(), this.renderingDelayer = new be(200), this._register(this.editor.getModel().onDidChangeContent(() => this.renderingDelayer.trigger(() => this.render())));
  }
  render() {
    const e = [];
    if (this.workspaceContextService.getWorkbenchState() === 3 && this.workspaceSettingsEditorModel instanceof Tn) {
      const t = [];
      for (const i of this.workspaceSettingsEditorModel.configurationGroups)
        for (const n of i.sections)
          for (const s of n.settings)
            He.supportedKeys.includes(s.key) || e.push({
              severity: ve.Hint,
              tags: [1],
              ...s.range,
              message: c("unsupportedProperty", "Unsupported Property")
            });
      this.decorations.set(t.map((i) => this.createDecoration(i)));
    }
    e.length ? this.markerService.changeOne("WorkspaceConfigurationRenderer", this.workspaceSettingsEditorModel.uri, e) : this.markerService.remove("WorkspaceConfigurationRenderer", [this.workspaceSettingsEditorModel.uri]);
  }
  createDecoration(e) {
    return {
      range: e,
      options: He._DIM_CONFIGURATION_
    };
  }
  dispose() {
    this.markerService.remove("WorkspaceConfigurationRenderer", [this.workspaceSettingsEditorModel.uri]), this.decorations.clear(), super.dispose();
  }
}, He.supportedKeys = ["folders", "tasks", "launch", "extensions", "settings", "remoteAuthority", "transient"], He._DIM_CONFIGURATION_ = sc.register({
  description: "dim-configuration",
  stickiness: 1,
  inlineClassName: "dim-configuration"
}), He);
Bn = v([
  u(2, lt),
  u(3, Or)
], Bn);
var ti;
let zi = (ti = class extends Q {
  constructor(e, t, i, n) {
    super(), this.editor = e, this.instantiationService = t, this.preferencesService = i, this.workspaceContextService = n, this.disposables = this._register(new U()), this._createPreferencesRenderer(), this._register(this.editor.onDidChangeModel((s) => this._createPreferencesRenderer())), this._register(this.workspaceContextService.onDidChangeWorkbenchState(() => this._createPreferencesRenderer()));
  }
  async _createPreferencesRenderer() {
    var t;
    this.disposables.clear(), this.currentRenderer = void 0;
    const e = this.editor.getModel();
    if (e && /\.(json|code-workspace)$/.test(e.uri.path)) {
      const i = await this.preferencesService.createPreferencesEditorModel(e.uri);
      if (i instanceof vs && this.editor.getModel())
        switch (this.disposables.add(i), i.configurationTarget) {
          case 5:
            this.currentRenderer = this.disposables.add(this.instantiationService.createInstance(Wn, this.editor, i));
            break;
          default:
            this.currentRenderer = this.disposables.add(this.instantiationService.createInstance($i, this.editor, i));
            break;
        }
      (t = this.currentRenderer) == null || t.render();
    }
  }
}, ti.ID = "editor.contrib.settings", ti);
zi = v([
  u(1, $),
  u(2, B),
  u(3, lt)
], zi);
var Hd = '.editor-instance#workbench\\.editor\\.settings2:focus{outline:none}.settings-editor{margin:auto;max-width:1200px;overflow:hidden}.settings-editor:focus{outline:none!important}.settings-editor>.settings-header{box-sizing:border-box;margin:11px auto auto;max-width:1200px;overflow:hidden;padding-left:24px;padding-right:24px;padding-top:3px}.settings-editor>.settings-header>.search-container{position:relative}.monaco-workbench.vs .settings-editor>.settings-header>.search-container>.suggest-input-container{border:1px solid #ddd}.settings-editor>.settings-header>.search-container>.settings-count-widget{margin:4px 0;position:absolute;right:46px;top:0}.settings-editor>.settings-header>.search-container>.settings-count-widget:empty{visibility:hidden}.settings-editor>.settings-header>.search-container>.settings-clear-widget{align-items:center;display:flex;height:100%;position:absolute;right:0;top:0;width:43px}.settings-editor>.settings-header>.search-container>.settings-clear-widget .action-label{padding:2px}.settings-editor>.settings-header>.settings-header-controls{border-bottom:1px solid;display:flex;height:32px;margin-top:10px}.settings-editor>.settings-header>.settings-header-controls .settings-target-container{flex:auto}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget .action-label{border-radius:0;color:var(--vscode-foreground);opacity:.9}.settings-editor>.settings-header>.settings-header-controls .last-synced-label{opacity:.9;padding-top:7px}.settings-editor .settings-tabs-widget>.monaco-action-bar .action-item .action-details{opacity:.9}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget .action-label:hover{opacity:1}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget .action-label.checked{color:var(--vscode-settings-headerForeground);opacity:1}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget .action-label.checked:not(:focus){border-bottom-color:var(--vscode-settings-headerForeground)}.settings-editor>.settings-header .settings-tabs-widget>.monaco-action-bar .action-item .action-label{margin-right:0}.settings-editor>.settings-header .settings-tabs-widget .monaco-action-bar .action-item .dropdown-icon{padding-top:3px}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget>.monaco-action-bar .action-item{padding:0}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget>.monaco-action-bar .action-item .action-label{font-size:13px;padding:7px 8px 6.5px;text-transform:none}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget>.monaco-action-bar .action-item .action-label .dropdown-icon{padding-top:2px}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget>.monaco-action-bar .action-item .action-label:not(.checked):not(:focus){border-bottom:1px solid transparent}.settings-editor>.settings-body{position:relative}.settings-editor>.settings-body>.no-results-message{box-sizing:border-box;display:none;margin:20px auto auto;max-width:1200px;padding-left:24px;padding-right:24px}.settings-editor>.settings-body>.monaco-split-view2{margin-top:14px}.settings-editor>.settings-body .settings-toc-container,.settings-editor>.settings-body .settings-tree-container{height:100%}.settings-editor>.settings-body .settings-tree-container .setting-item-label,.settings-editor>.settings-body .settings-tree-container .settings-group-title-label{color:var(--vscode-settings-headerForeground)}.settings-editor>.settings-body .settings-tree-container .setting-item-extension-toggle .setting-item-extension-toggle-button{display:block;width:fit-content}.settings-editor.no-results>.settings-body .settings-toc-container,.settings-editor.no-results>.settings-body .settings-tree-container{display:none}.settings-editor.no-results>.settings-body>.no-results-message{display:block}.settings-editor>.settings-body>.no-results-message a.prominent{text-decoration:underline}.settings-editor.narrow-width>.settings-body .settings-tree-container .monaco-list-row .monaco-tl-contents,.settings-editor.no-toc-search>.settings-body .settings-tree-container .monaco-list-row .monaco-tl-contents{padding-left:33px}.settings-editor>.settings-body .settings-tree-container .monaco-list-row{outline:none!important}.settings-editor>.settings-body .settings-tree-container .monaco-list-row .monaco-tl-twistie{display:none!important}.settings-editor>.settings-body .settings-tree-container .monaco-list-row.focused .settings-row-inner-container{background-color:var(--vscode-settings-focusedRowBackground)}.settings-editor>.settings-body .settings-tree-container .monaco-list-row:not(.focused) .settings-row-inner-container:hover{background-color:var(--vscode-settings-rowHoverBackground)}.settings-editor>.settings-body .settings-tree-container .monaco-list:focus-within .monaco-list-row.focused .setting-item-contents,.settings-editor>.settings-body .settings-tree-container .monaco-list:focus-within .monaco-list-row.focused .settings-group-title-label{outline:1px solid var(--vscode-settings-focusedRowBorder)}.settings-editor>.settings-body .settings-tree-container .settings-editor-tree>.monaco-scrollable-element>.shadow.top{z-index:11}.settings-editor>.settings-body .settings-tree-container .setting-toolbar-container{bottom:0;height:22px;left:-22px;position:absolute;top:8px;width:22px}.settings-editor>.settings-body .settings-tree-container .monaco-list-row .mouseover .setting-toolbar-container>.monaco-toolbar .codicon,.settings-editor>.settings-body .settings-tree-container .monaco-list-row .setting-toolbar-container:hover>.monaco-toolbar .codicon,.settings-editor>.settings-body .settings-tree-container .monaco-list-row .setting-toolbar-container>.monaco-toolbar .active .codicon,.settings-editor>.settings-body .settings-tree-container .monaco-list-row.focused .setting-item-contents .setting-toolbar-container>.monaco-toolbar .codicon{opacity:1}.settings-editor>.settings-body .settings-tree-container .setting-toolbar-container>.monaco-toolbar .codicon{align-items:center;display:flex;justify-content:center;opacity:0}.monaco-workbench:not(.reduce-motion) .settings-editor>.settings-body .settings-tree-container .setting-toolbar-container>.monaco-toolbar .codicon{transition:opacity .3s}.settings-editor>.settings-body .settings-toc-container{pointer-events:none;position:absolute;width:100%;z-index:10}.settings-editor>.settings-body .settings-toc-container .monaco-list{pointer-events:auto}.settings-editor.narrow-width>.settings-body .settings-toc-container,.settings-editor.no-toc-search>.settings-body .settings-toc-container{display:none}.settings-editor>.settings-body .settings-toc-container .monaco-list-row:not(.selected){color:var(--vscode-foreground);opacity:.9}.settings-editor>.settings-body .settings-toc-container .monaco-list-row .monaco-tl-contents{display:flex}.settings-editor>.settings-body .settings-toc-container .monaco-list-row .settings-toc-entry{flex-shrink:1;line-height:22px;overflow:hidden;text-overflow:ellipsis}.settings-editor>.settings-body .settings-toc-container .monaco-list-row .settings-toc-count{display:none;line-height:22px;margin-left:3px;opacity:.8}.settings-editor>.settings-body .settings-toc-container .monaco-list-row.selected .settings-toc-entry{font-weight:700}.settings-editor>.settings-body .settings-tree-container{border-collapse:separate;border-spacing:0;position:relative}.settings-editor>.settings-body .settings-toc-container .monaco-scrollable-element,.settings-editor>.settings-body .settings-tree-container .monaco-scrollable-element{padding-top:0}.settings-editor>.settings-body .settings-toc-wrapper{height:100%;margin:auto;max-width:1200px;padding-left:24px}.settings-editor.narrow-width>.settings-body .settings-tree-container,.settings-editor.no-toc-search>.settings-body .settings-tree-container{margin-left:0}.settings-editor>.settings-body .settings-tree-container .monaco-list-row{cursor:default;line-height:1.4em!important;overflow:visible}.settings-editor>.settings-body .settings-tree-container .monaco-list-rows{min-height:100%;overflow:visible!important}.settings-editor>.settings-body .settings-tree-container .monaco-list-row .monaco-tl-contents{box-sizing:border-box;margin:auto;max-width:min(100%,1200px);overflow:visible;padding-left:24px;padding-right:24px}.settings-editor>.settings-body .settings-tree-container .monaco-list-row .monaco-tl-contents.group-title{max-width:min(100%,1200px)}.settings-editor>.settings-body .settings-tree-container .setting-item-contents,.settings-editor>.settings-body .settings-tree-container .settings-group-title-label{outline-offset:-1px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents{padding:12px 14px 18px;position:relative;white-space:normal}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title{display:inline-block;overflow:hidden;padding-bottom:2px;text-overflow:ellipsis}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-modified-indicator{border-color:var(--vscode-settings-modifiedItemIndicator);display:none}.settings-editor>.settings-body .settings-tree-container .setting-item-contents.is-configured .setting-item-modified-indicator{border-left-style:solid;border-left-width:2px;bottom:18px;content:" ";display:block;left:5px;position:absolute;top:15px;width:6px}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-item-contents.is-configured .setting-item-modified-indicator,.settings-editor>.settings-body .settings-tree-container .setting-item-list .setting-item-contents.is-configured .setting-item-modified-indicator{bottom:23px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title>.setting-indicators-container{font-style:italic}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title .setting-item-ignored,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title .setting-item-overrides{color:var(--vscode-foreground);opacity:.9}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title>.setting-indicators-container .setting-indicator{padding-bottom:2px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title .codicon{padding-left:1px;vertical-align:middle}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title .setting-item-label .codicon{vertical-align:middle}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title .setting-item-overrides a.modified-scope{cursor:pointer;text-decoration:underline}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-label{margin-right:7px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-cat-label-container{float:left}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-category,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-label{font-weight:600;user-select:text;-webkit-user-select:text}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-category{opacity:.9}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-deprecation-message{color:var(--vscode-errorForeground);display:none;margin-top:3px;user-select:text;-webkit-user-select:text}.settings-editor>.settings-body .settings-tree-container .setting-item-contents.is-deprecated .setting-item-deprecation-message{display:flex}.settings-editor>.settings-body .settings-tree-container .setting-item-contents.is-deprecated .setting-item-deprecation-message .codicon{color:inherit;margin-right:4px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-description{color:var(--vscode-foreground);margin-top:-1px;opacity:.9;user-select:text;-webkit-user-select:text}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-validation-message{background-color:var(--vscode-inputValidation-errorBackground);border:1px solid var(--vscode-inputValidation-errorBorder);color:var(--vscode-inputValidation-errorForeground);display:none}.settings-editor>.settings-body .settings-tree-container .setting-item .setting-item-contents.invalid-input .setting-item-validation-message{box-sizing:border-box;display:block;margin-top:-1px;padding:5px;position:absolute;z-index:1}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-item-contents.invalid-input .setting-item-validation-message{margin-top:1rem;position:static}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-text .setting-item-validation-message{width:420px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-number .setting-item-validation-message{width:200px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-number input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none!important}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-number input[type=number]{-moz-appearance:textfield!important;appearance:textfield!important}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown *{margin:0}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown :not(:last-child){margin-bottom:8px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .edit-in-settings-button{opacity:.9}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .edit-in-settings-button,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a>code{color:var(--vscode-textLink-foreground)}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .edit-in-settings-button:focus,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a:focus{outline:1px solid -webkit-focus-ring-color;outline-color:var(--vscode-focusBorder);outline-offset:-1px;text-decoration:underline}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .edit-in-settings-button:active,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .edit-in-settings-button:hover,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a:active,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a:active>code,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a:hover,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a:hover>code{color:var(--vscode-textLink-activeForeground)}.settings-editor>.settings-body .settings-tree-container .edit-in-settings-button:hover,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a:hover{cursor:pointer;text-decoration:underline}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown code{color:var(--vscode-textPreformat-foreground);font-family:var(--monaco-monospace-font);line-height:15px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown .monaco-tokenized-source{font-family:var(--monaco-monospace-font);white-space:pre}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-enumDescription{display:block}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-item-contents,.settings-editor>.settings-body .settings-tree-container .setting-item-list .setting-item-contents{padding-bottom:26px}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-item-value-description{cursor:pointer;display:flex}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-value-checkbox{border:1px solid transparent;border-radius:3px;height:18px;margin-left:0;margin-right:9px;padding:0;width:18px}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-value-checkbox.codicon:not(.checked):before{opacity:0}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-value{display:flex;margin-top:9px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-number .setting-item-value>.setting-item-control{min-width:200px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-text .setting-item-control{width:420px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-enum .setting-item-value>.setting-item-control,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-text .setting-item-value>.setting-item-control{min-width:auto}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-enum .setting-item-value>.setting-item-control>select{width:320px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .monaco-select-box{font:inherit;height:26px;padding:2px 6px;width:auto}.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown code{color:var(--vscode-textPreformat-foreground)}.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a,.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a>code{color:var(--vscode-textLink-foreground)}.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a:active,.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a:active>code,.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a:hover,.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a:hover>code{color:var(--vscode-textLink-activeForeground)}.settings-editor>.settings-body .settings-tree-container .setting-item-new-extensions{display:flex}.settings-editor>.settings-body .settings-tree-container .setting-item-new-extensions .settings-new-extensions-button{margin:auto auto 15px;padding:4px 10px;width:auto}.settings-editor>.settings-body .settings-tree-container .group-title{cursor:default}.settings-editor>.settings-body .settings-tree-container .settings-group-title-label{box-sizing:border-box;display:inline-block;font-weight:600;height:100%;margin:0;overflow:hidden;padding:10px 10px 10px 15px;position:relative;text-overflow:ellipsis;width:100%}.settings-editor>.settings-body .settings-tree-container .settings-group-title-label.settings-group-level-1{font-size:26px}.settings-editor>.settings-body .settings-tree-container .settings-group-title-label.settings-group-level-2{font-size:22px}.settings-editor>.settings-body .settings-tree-container .settings-group-title-label.settings-group-level-3{font-size:18px}.settings-editor.search-mode>.settings-body .settings-toc-container .monaco-list-row .settings-toc-count{display:block}.settings-editor>.settings-body .settings-tree-container .setting-list-widget .setting-list-object-list-row.select-container{width:320px}.settings-editor>.settings-body .settings-tree-container .setting-list-widget .setting-list-object-list-row.select-container>select{width:inherit}.settings-editor>.settings-body .settings-toc-container .monaco-list-row.focused .codicon,.settings-editor>.settings-body .settings-tree-container .monaco-list-row.focused .setting-item-contents .codicon,.settings-editor>.settings-body .settings-tree-container .setting-item-bool .codicon{color:inherit!important}';
Pt(Hd, {});
const $d = [
  "files.autoSave",
  "editor.fontSize",
  "editor.fontFamily",
  "editor.tabSize",
  "editor.renderWhitespace",
  "editor.cursorStyle",
  "editor.multiCursorModifier",
  "editor.insertSpaces",
  "editor.wordWrap",
  "files.exclude",
  "files.associations",
  "workbench.editor.enablePreview"
];
async function zd(o, e, t) {
  const i = await Wr(o, e, t);
  return {
    id: "commonlyUsed",
    label: c("commonlyUsed", "Commonly Used"),
    settings: i ? i.commonlyUsed : $d
  };
}
const bo = {
  id: "root",
  label: "root",
  children: [
    {
      id: "editor",
      label: c("textEditor", "Text Editor"),
      settings: ["editor.*"],
      children: [
        {
          id: "editor/cursor",
          label: c("cursor", "Cursor"),
          settings: ["editor.cursor*"]
        },
        {
          id: "editor/find",
          label: c("find", "Find"),
          settings: ["editor.find.*"]
        },
        {
          id: "editor/font",
          label: c("font", "Font"),
          settings: ["editor.font*"]
        },
        {
          id: "editor/format",
          label: c("formatting", "Formatting"),
          settings: ["editor.format*"]
        },
        {
          id: "editor/diffEditor",
          label: c("diffEditor", "Diff Editor"),
          settings: ["diffEditor.*"]
        },
        {
          id: "editor/minimap",
          label: c("minimap", "Minimap"),
          settings: ["editor.minimap.*"]
        },
        {
          id: "editor/suggestions",
          label: c("suggestions", "Suggestions"),
          settings: ["editor.*suggest*"]
        },
        {
          id: "editor/files",
          label: c("files", "Files"),
          settings: ["files.*"]
        }
      ]
    },
    {
      id: "workbench",
      label: c("workbench", "Workbench"),
      settings: ["workbench.*"],
      children: [
        {
          id: "workbench/appearance",
          label: c("appearance", "Appearance"),
          settings: ["workbench.activityBar.*", "workbench.*color*", "workbench.fontAliasing", "workbench.iconTheme", "workbench.sidebar.location", "workbench.*.visible", "workbench.tips.enabled", "workbench.tree.*", "workbench.view.*"]
        },
        {
          id: "workbench/breadcrumbs",
          label: c("breadcrumbs", "Breadcrumbs"),
          settings: ["breadcrumbs.*"]
        },
        {
          id: "workbench/editor",
          label: c("editorManagement", "Editor Management"),
          settings: ["workbench.editor.*"]
        },
        {
          id: "workbench/settings",
          label: c("settings", "Settings Editor"),
          settings: ["workbench.settings.*"]
        },
        {
          id: "workbench/zenmode",
          label: c("zenMode", "Zen Mode"),
          settings: ["zenmode.*"]
        },
        {
          id: "workbench/screencastmode",
          label: c("screencastMode", "Screencast Mode"),
          settings: ["screencastMode.*"]
        }
      ]
    },
    {
      id: "window",
      label: c("window", "Window"),
      settings: ["window.*"],
      children: [
        {
          id: "window/newWindow",
          label: c("newWindow", "New Window"),
          settings: ["window.*newwindow*"]
        }
      ]
    },
    {
      id: "features",
      label: c("features", "Features"),
      children: [
        {
          id: "features/accessibility",
          label: c("accessibility", "Accessibility"),
          settings: ["accessibility.*"]
        },
        {
          id: "features/explorer",
          label: c("fileExplorer", "Explorer"),
          settings: ["explorer.*", "outline.*"]
        },
        {
          id: "features/search",
          label: c("search", "Search"),
          settings: ["search.*"]
        },
        {
          id: "features/debug",
          label: c("debug", "Debug"),
          settings: ["debug.*", "launch"]
        },
        {
          id: "features/testing",
          label: c("testing", "Testing"),
          settings: ["testing.*"]
        },
        {
          id: "features/scm",
          label: c("scm", "Source Control"),
          settings: ["scm.*"]
        },
        {
          id: "features/extensions",
          label: c("extensions", "Extensions"),
          settings: ["extensions.*"]
        },
        {
          id: "features/terminal",
          label: c("terminal", "Terminal"),
          settings: ["terminal.*"]
        },
        {
          id: "features/task",
          label: c("task", "Task"),
          settings: ["task.*"]
        },
        {
          id: "features/problems",
          label: c("problems", "Problems"),
          settings: ["problems.*"]
        },
        {
          id: "features/output",
          label: c("output", "Output"),
          settings: ["output.*"]
        },
        {
          id: "features/comments",
          label: c("comments", "Comments"),
          settings: ["comments.*"]
        },
        {
          id: "features/remote",
          label: c("remote", "Remote"),
          settings: ["remote.*"]
        },
        {
          id: "features/timeline",
          label: c("timeline", "Timeline"),
          settings: ["timeline.*"]
        },
        {
          id: "features/notebook",
          label: c("notebook", "Notebook"),
          settings: ["notebook.*", "interactiveWindow.*"]
        },
        {
          id: "features/audioCues",
          label: c("audioCues", "Audio Cues"),
          settings: ["audioCues.*"]
        },
        {
          id: "features/mergeEditor",
          label: c("mergeEditor", "Merge Editor"),
          settings: ["mergeEditor.*"]
        },
        {
          id: "features/chat",
          label: c("chat", "Chat"),
          settings: ["chat.*", "inlineChat.*"]
        }
      ]
    },
    {
      id: "application",
      label: c("application", "Application"),
      children: [
        {
          id: "application/http",
          label: c("proxy", "Proxy"),
          settings: ["http.*"]
        },
        {
          id: "application/keyboard",
          label: c("keyboard", "Keyboard"),
          settings: ["keyboard.*"]
        },
        {
          id: "application/update",
          label: c("update", "Update"),
          settings: ["update.*"]
        },
        {
          id: "application/telemetry",
          label: c("telemetry", "Telemetry"),
          settings: ["telemetry.*"]
        },
        {
          id: "application/settingsSync",
          label: c("settingsSync", "Settings Sync"),
          settings: ["settingsSync.*"]
        },
        {
          id: "application/experimental",
          label: c("experimental", "Experimental"),
          settings: ["application.experimental.*"]
        },
        {
          id: "application/other",
          label: c("other", "Other"),
          settings: ["application.*"]
        }
      ]
    },
    {
      id: "security",
      label: c("security", "Security"),
      settings: dc ? ["security.*"] : void 0,
      children: [
        {
          id: "security/workspace",
          label: c("workspace", "Workspace"),
          settings: ["security.workspace.*"]
        }
      ]
    }
  ]
}, yo = /* @__PURE__ */ new Set();
[
  "css",
  "html",
  "scss",
  "less",
  "json",
  "js",
  "ts",
  "ie",
  "id",
  "php",
  "scm"
].forEach((o) => yo.add(o));
const ri = /* @__PURE__ */ new Map();
ri.set("power shell", "PowerShell");
ri.set("powershell", "PowerShell");
ri.set("javascript", "JavaScript");
ri.set("typescript", "TypeScript");
function Vn(o, e, t) {
  let i = [];
  t ? i = Yd(t) : i = qd(e);
  const n = [], s = [...lc()];
  if (Array.isArray(i))
    for (const r of i)
      r.startsWith("-") ? s.push(r.substring(1)) : n.push(r);
  return Nt([...o, ...n].filter((r) => !s.includes(r)));
}
function qd(o) {
  let e = o.inspect("settingsSync.ignoredSettings").userValue;
  return e !== void 0 || (e = o.inspect("sync.ignoredSettings").userValue, e !== void 0) ? e : o.getValue("settingsSync.ignoredSettings") || [];
}
function Yd(o) {
  const e = cr(o);
  return e ? e["settingsSync.ignoredSettings"] || e["sync.ignoredSettings"] || [] : [];
}
const De = W;
let So = /* @__PURE__ */ new Set(), un = [], qi = class {
  constructor(e, t, i, n, s, r, a) {
    this.configurationService = t, this.hoverService = i, this.userDataSyncEnablementService = n, this.languageService = s, this.userDataProfilesService = r, this.commandService = a, this.keybindingListeners = new U(), this.focusedIndex = 0, this.defaultHoverOptions = {
      hoverPosition: 2,
      showPointer: !0,
      compact: !1,
      trapFocus: !0
    }, this.indicatorsContainerElement = b(e, De(".setting-indicators-container")), this.indicatorsContainerElement.style.display = "inline", this.profilesEnabled = this.userDataProfilesService.isEnabled(), this.workspaceTrustIndicator = this.createWorkspaceTrustIndicator(), this.scopeOverridesIndicator = this.createScopeOverridesIndicator(), this.syncIgnoredIndicator = this.createSyncIgnoredIndicator(), this.defaultOverrideIndicator = this.createDefaultOverrideIndicator(), this.allIndicators = [this.workspaceTrustIndicator, this.scopeOverridesIndicator, this.syncIgnoredIndicator, this.defaultOverrideIndicator];
  }
  addHoverDisposables(e, t, i) {
    e.clear();
    const n = e.add(new uc(() => {
      const s = i(!1);
      s && e.add(s);
    }, this.configurationService.getValue("workbench.hover.delay")));
    e.add(_(t, I.MOUSE_OVER, () => {
      n.isScheduled() || n.schedule();
    })), e.add(_(t, I.MOUSE_LEAVE, () => {
      n.cancel();
    })), e.add(_(t, I.KEY_DOWN, (s) => {
      const r = new Je(s);
      if (r.equals(10) || r.equals(3)) {
        const a = i(!0);
        a && e.add(a), s.preventDefault();
      }
    }));
  }
  createWorkspaceTrustIndicator() {
    const e = De("span.setting-indicator.setting-item-workspace-trust"), t = new yt(e);
    t.text = "$(warning) " + c("workspaceUntrustedLabel", "Setting value not applied");
    const i = c(
      "trustLabel",
      "The setting value can only be applied in a trusted workspace."
    ), n = new U(), s = (r) => this.hoverService.showHover({
      ...this.defaultHoverOptions,
      content: i,
      target: e,
      actions: [{
        label: c("manageWorkspaceTrust", "Manage Workspace Trust"),
        commandId: "workbench.trust.manage",
        run: (a) => {
          this.commandService.executeCommand("workbench.trust.manage");
        }
      }]
    }, r);
    return this.addHoverDisposables(n, e, s), {
      element: e,
      label: t,
      disposables: n
    };
  }
  createScopeOverridesIndicator() {
    const e = De("span.setting-item-overrides"), t = new yt(e);
    return {
      element: e,
      label: t,
      disposables: new U()
    };
  }
  createSyncIgnoredIndicator() {
    const e = De("span.setting-indicator.setting-item-ignored"), t = new yt(e);
    t.text = c("extensionSyncIgnoredLabel", "Not synced");
    const i = c("syncIgnoredTitle", "This setting is ignored during sync"), n = new U(), s = (r) => this.hoverService.showHover({
      ...this.defaultHoverOptions,
      content: i,
      target: e
    }, r);
    return this.addHoverDisposables(n, e, s), {
      element: e,
      label: t,
      disposables: new U()
    };
  }
  createDefaultOverrideIndicator() {
    const e = De("span.setting-indicator.setting-item-default-overridden"), t = new yt(e);
    return t.text = c("defaultOverriddenLabel", "Default value changed"), {
      element: e,
      label: t,
      disposables: new U()
    };
  }
  render() {
    const e = this.allIndicators.filter((t) => t.element.style.display !== "none");
    if (this.indicatorsContainerElement.innerText = "", this.indicatorsContainerElement.style.display = "none", e.length) {
      this.indicatorsContainerElement.style.display = "inline", b(this.indicatorsContainerElement, De("span", void 0, "("));
      for (let t = 0; t < e.length - 1; t++)
        b(this.indicatorsContainerElement, e[t].element), b(this.indicatorsContainerElement, De("span.comma", void 0, " • "));
      b(this.indicatorsContainerElement, e[e.length - 1].element), b(this.indicatorsContainerElement, De("span", void 0, ")")), this.resetIndicatorNavigationKeyBindings(e);
    }
  }
  resetIndicatorNavigationKeyBindings(e) {
    if (this.keybindingListeners.clear(), this.indicatorsContainerElement.role = e.length >= 1 ? "toolbar" : "button", !e.length)
      return;
    const t = e[0].focusElement ?? e[0].element;
    t.tabIndex = 0, this.keybindingListeners.add(_(this.indicatorsContainerElement, "keydown", (i) => {
      const n = new Je(i);
      let s = !0;
      if (n.equals(14))
        this.focusIndicatorAt(e, 0);
      else if (n.equals(13))
        this.focusIndicatorAt(e, e.length - 1);
      else if (n.equals(17)) {
        const r = (this.focusedIndex + 1) % e.length;
        this.focusIndicatorAt(e, r);
      } else if (n.equals(15)) {
        const r = this.focusedIndex ? this.focusedIndex - 1 : e.length - 1;
        this.focusIndicatorAt(e, r);
      } else
        s = !1;
      s && (i.preventDefault(), i.stopPropagation());
    }));
  }
  focusIndicatorAt(e, t) {
    if (t === this.focusedIndex)
      return;
    const i = e[t], n = i.focusElement ?? i.element;
    n.tabIndex = 0, n.focus();
    const s = e[this.focusedIndex], r = s.focusElement ?? s.element;
    r.tabIndex = -1, this.focusedIndex = t;
  }
  updateWorkspaceTrust(e) {
    this.workspaceTrustIndicator.element.style.display = e.isUntrusted ? "inline" : "none", this.render();
  }
  updateSyncIgnored(e, t) {
    this.syncIgnoredIndicator.element.style.display = this.userDataSyncEnablementService.isEnabled() && t.includes(e.setting.key) ? "inline" : "none", this.render(), un !== t && (un = t, So = new Set(un));
  }
  getInlineScopeDisplayText(e) {
    const [t, i] = e.split(":"), n = t === "user" ? c("user", "User") : t === "workspace" ? c("workspace", "Workspace") : c("remote", "Remote");
    return i ? `${this.languageService.getLanguageName(i)} > ${n}` : n;
  }
  dispose() {
    this.keybindingListeners.dispose();
    for (const e of this.allIndicators)
      e.disposables.dispose();
  }
  updateScopeOverrides(e, t, i) {
    if (this.scopeOverridesIndicator.element.innerText = "", this.scopeOverridesIndicator.element.style.display = "none", this.scopeOverridesIndicator.focusElement = this.scopeOverridesIndicator.element, e.hasPolicyValue) {
      this.scopeOverridesIndicator.element.style.display = "inline", this.scopeOverridesIndicator.element.classList.add("setting-indicator"), this.scopeOverridesIndicator.label.text = "$(warning) " + c("policyLabelText", "Setting value not applied");
      const n = c(
        "policyDescription",
        "This setting is managed by your organization and its applied value cannot be changed."
      ), s = (r) => this.hoverService.showHover({
        ...this.defaultHoverOptions,
        content: n,
        actions: [{
          label: c("policyFilterLink", "View policy settings"),
          commandId: "_settings.action.viewPolicySettings",
          run: (a) => {
            i.fire(`@${Tt}`);
          }
        }],
        target: this.scopeOverridesIndicator.element
      }, r);
      this.addHoverDisposables(this.scopeOverridesIndicator.disposables, this.scopeOverridesIndicator.element, s);
    } else if (this.profilesEnabled && e.settingsTarget === 3 && this.configurationService.isSettingAppliedForAllProfiles(e.setting.key)) {
      this.scopeOverridesIndicator.element.style.display = "inline", this.scopeOverridesIndicator.element.classList.add("setting-indicator"), this.scopeOverridesIndicator.label.text = c("applicationSetting", "Applies to all profiles");
      const n = c(
        "applicationSettingDescription",
        "The setting is not specific to the current profile, and will retain its value when switching profiles."
      ), s = (r) => this.hoverService.showHover({
        ...this.defaultHoverOptions,
        content: n,
        target: this.scopeOverridesIndicator.element
      }, r);
      this.addHoverDisposables(this.scopeOverridesIndicator.disposables, this.scopeOverridesIndicator.element, s);
    } else if (e.overriddenScopeList.length || e.overriddenDefaultsLanguageList.length)
      if (e.overriddenScopeList.length === 1 && !e.overriddenDefaultsLanguageList.length) {
        this.scopeOverridesIndicator.element.style.display = "inline", this.scopeOverridesIndicator.element.classList.remove("setting-indicator"), this.scopeOverridesIndicator.disposables.clear();
        const n = e.isConfigured ? c("alsoConfiguredIn", "Also modified in") : c("configuredIn", "Modified in");
        this.scopeOverridesIndicator.label.text = `${n} `;
        const s = e.overriddenScopeList[0], r = b(this.scopeOverridesIndicator.element, De("a.modified-scope", void 0, this.getInlineScopeDisplayText(s)));
        r.tabIndex = -1, this.scopeOverridesIndicator.focusElement = r;
        const a = (l) => {
          const [d, g] = s.split(":");
          t.fire({
            settingKey: e.setting.key,
            scope: d,
            language: g
          }), l.preventDefault(), l.stopPropagation();
        };
        this.scopeOverridesIndicator.disposables.add(_(r, I.CLICK, (l) => {
          a(l);
        })), this.scopeOverridesIndicator.disposables.add(_(r, I.KEY_DOWN, (l) => {
          const d = new Je(l);
          (d.equals(10) || d.equals(3)) && a(l);
        }));
      } else {
        this.scopeOverridesIndicator.element.style.display = "inline", this.scopeOverridesIndicator.element.classList.add("setting-indicator");
        const n = e.isConfigured ? c("alsoConfiguredElsewhere", "Also modified elsewhere") : c("configuredElsewhere", "Modified elsewhere");
        this.scopeOverridesIndicator.label.text = n;
        let s = "";
        if (e.overriddenScopeList.length) {
          s = e.isConfigured ? c(
            "alsoModifiedInScopes",
            "The setting has also been modified in the following scopes:"
          ) : c(
            "modifiedInScopes",
            "The setting has been modified in the following scopes:"
          );
          for (const d of e.overriddenScopeList) {
            const g = this.getInlineScopeDisplayText(d);
            s += `
- [${g}](${encodeURIComponent(d)} "${Jd(d, this.languageService)}")`;
          }
        }
        if (e.overriddenDefaultsLanguageList.length) {
          s && (s += `

`);
          const l = c(
            "hasDefaultOverridesForLanguages",
            "The following languages have default overrides:"
          );
          s += l;
          for (const d of e.overriddenDefaultsLanguageList) {
            const g = this.languageService.getLanguageName(d);
            s += `
- [${g}](${encodeURIComponent(`default:${d}`)} "${g}")`;
          }
        }
        const r = {
          value: s,
          isTrusted: !1,
          supportHtml: !1
        }, a = (l) => this.hoverService.showHover({
          ...this.defaultHoverOptions,
          content: r,
          linkHandler: (d) => {
            const [g, h] = decodeURIComponent(d).split(":");
            t.fire({
              settingKey: e.setting.key,
              scope: g,
              language: h
            });
          },
          target: this.scopeOverridesIndicator.element
        }, l);
        this.addHoverDisposables(this.scopeOverridesIndicator.disposables, this.scopeOverridesIndicator.element, a);
      }
    this.render();
  }
  updateDefaultOverrideIndicator(e) {
    this.defaultOverrideIndicator.element.style.display = "none";
    const t = vo(e);
    if (t !== void 0) {
      this.defaultOverrideIndicator.element.style.display = "inline", this.defaultOverrideIndicator.disposables.clear();
      const i = c(
        "defaultOverriddenDetails",
        "Default setting value overridden by {0}",
        t
      ), n = (s) => this.hoverService.showHover({
        content: i,
        target: this.defaultOverrideIndicator.element,
        hoverPosition: 2,
        showPointer: !0,
        compact: !1
      }, s);
      this.addHoverDisposables(this.defaultOverrideIndicator.disposables, this.defaultOverrideIndicator.element, n);
    }
    this.render();
  }
};
qi = v([
  u(1, gt),
  u(2, gc),
  u(3, cn),
  u(4, Pe),
  u(5, Ft),
  u(6, kt)
], qi);
function vo(o) {
  let e;
  const t = o.defaultValueSource;
  return t && (typeof t != "string" ? e = t.displayName ?? t.id : typeof t == "string" && (e = t)), e;
}
function Jd(o, e) {
  const [t, i] = o.split(":"), n = t === "user" ? c("user", "User") : t === "workspace" ? c("workspace", "Workspace") : c("remote", "Remote");
  return i ? c(
    "modifiedInScopeForLanguage",
    "The {0} scope for {1}",
    n,
    e.getLanguageName(i)
  ) : n;
}
function Xd(o, e) {
  const [t, i] = o.split(":"), n = t === "user" ? c("user", "User") : t === "workspace" ? c("workspace", "Workspace") : c("remote", "Remote");
  return i ? c(
    "modifiedInScopeForLanguageMidSentence",
    "the {0} scope for {1}",
    n.toLowerCase(),
    e.getLanguageName(i)
  ) : n;
}
function Qd(o, e, t, i) {
  const n = [];
  if (o.isUntrusted && n.push(c(
    "workspaceUntrustedAriaLabel",
    "Workspace untrusted; setting value not applied"
  )), o.hasPolicyValue)
    n.push(c(
      "policyDescriptionAccessible",
      "Managed by organization policy; setting value not applied"
    ));
  else if (t.isEnabled() && o.settingsTarget === 3 && e.isSettingAppliedForAllProfiles(o.setting.key))
    n.push(c(
      "applicationSettingDescriptionAccessible",
      "Setting value retained when switching profiles"
    ));
  else {
    const l = o.isConfigured ? c("alsoConfiguredIn", "Also modified in") : c("configuredIn", "Modified in"), d = o.overriddenScopeList.map((g) => Xd(g, i)).join(", ");
    o.overriddenScopeList.length && n.push(`${l} ${d}`);
  }
  So.has(o.setting.key) && n.push(c("syncIgnoredAriaLabel", "Setting ignored during sync"));
  const s = vo(o);
  s !== void 0 && n.push(c(
    "defaultOverriddenDetailsAriaLabel",
    "{0} overrides the default value",
    s
  ));
  const r = o.overriddenDefaultsLanguageList.map((l) => i.getLanguageName(l)).join(", ");
  if (o.overriddenDefaultsLanguageList.length) {
    const l = c(
      "defaultOverriddenLanguagesList",
      "Language-specific default values exist for {0}",
      r
    );
    n.push(l);
  }
  return n.join(". ");
}
class Es extends Q {
  constructor(e) {
    super(), this._tabbable = !1, this._onDidChangeTabbable = new T(), this.onDidChangeTabbable = this._onDidChangeTabbable.event, this.id = e;
  }
  get tabbable() {
    return this._tabbable;
  }
  set tabbable(e) {
    this._tabbable = e, this._onDidChangeTabbable.fire();
  }
}
class X extends Es {
  get children() {
    return this._children;
  }
  set children(e) {
    this._children = e, this._childSettingKeys = /* @__PURE__ */ new Set(), this._children.forEach((t) => {
      t instanceof te && this._childSettingKeys.add(t.setting.key);
    });
  }
  constructor(e, t, i, n, s) {
    super(e), this._childSettingKeys = /* @__PURE__ */ new Set(), this._children = [], this.count = t, this.label = i, this.level = n, this.isFirstGroup = s;
  }
  containsSetting(e) {
    return this._childSettingKeys.has(e);
  }
}
class xs extends Es {
  constructor(e, t) {
    super(e), this.extensionIds = t;
  }
}
const Jt = class Jt extends Es {
  constructor(e, t, i, n, s, r, a) {
    super(el(t.id + "_" + e.key)), this.settingsTarget = s, this.languageService = r, this.productService = a, this._displayCategory = null, this._displayLabel = null, this.isConfigured = !1, this.isUntrusted = !1, this.hasPolicyValue = !1, this.overriddenScopeList = [], this.overriddenDefaultsLanguageList = [], this.languageOverrideValues = /* @__PURE__ */ new Map(), this.setting = e, this.parent = t, this.update(i, n);
  }
  get displayCategory() {
    return this._displayCategory || this.initLabels(), this._displayCategory;
  }
  get displayLabel() {
    return this._displayLabel || this.initLabels(), this._displayLabel;
  }
  initLabels() {
    if (this.setting.title) {
      this._displayLabel = this.setting.title, this._displayCategory = "";
      return;
    }
    const e = wo(this.setting.key, this.parent.id, this.setting.isLanguageTagSetting);
    this._displayLabel = e.label, this._displayCategory = e.category;
  }
  update(e, t) {
    var h, f, m, p, y, x, E;
    let { isConfigured: i, inspected: n, targetSelector: s, inspectedLanguageOverrides: r, languageSelector: a } = e;
    switch (s) {
      case "workspaceFolderValue":
      case "workspaceValue":
        this.isUntrusted = !!this.setting.restricted && !t;
        break;
    }
    let l = i ? n[s] : n.defaultValue;
    const d = [], g = [];
    if ((a || s !== "workspaceValue") && typeof n.workspaceValue < "u" && d.push("workspace:"), (a || s !== "userRemoteValue") && typeof n.userRemoteValue < "u" && d.push("remote:"), (a || s !== "userLocalValue") && typeof n.userLocalValue < "u" && d.push("user:"), n.overrideIdentifiers)
      for (const S of n.overrideIdentifiers) {
        const A = r.get(S);
        A && (this.languageService.isRegisteredLanguageId(S) && (a !== S && typeof ((h = A.default) == null ? void 0 : h.override) < "u" && g.push(S), (a !== S || s !== "workspaceValue") && typeof ((f = A.workspace) == null ? void 0 : f.override) < "u" && d.push(`workspace:${S}`), (a !== S || s !== "userRemoteValue") && typeof ((m = A.userRemote) == null ? void 0 : m.override) < "u" && d.push(`remote:${S}`), (a !== S || s !== "userLocalValue") && typeof ((p = A.userLocal) == null ? void 0 : p.override) < "u" && d.push(`user:${S}`)), this.languageOverrideValues.set(S, A));
      }
    if (this.overriddenScopeList = d, this.overriddenDefaultsLanguageList = g, this.defaultValueSource = this.setting.nonLanguageSpecificDefaultValueSource, n.policyValue)
      this.hasPolicyValue = !0, i = !1, l = n.policyValue, this.scopeValue = n.policyValue, this.defaultValue = n.defaultValue;
    else if (a && this.languageOverrideValues.has(a)) {
      const S = this.languageOverrideValues.get(a);
      l = (i ? S[s] : S.defaultValue) ?? l, this.scopeValue = i && S[s], this.defaultValue = S.defaultValue ?? n.defaultValue;
      const C = (x = (y = ue.as(_e.Configuration).getConfigurationDefaultsOverrides().get(`[${a}]`)) == null ? void 0 : y.valuesSources) == null ? void 0 : x.get(this.setting.key);
      C && (this.defaultValueSource = C);
    } else
      this.scopeValue = i && n[s], this.defaultValue = n.defaultValue;
    if (this.value = l, this.isConfigured = i, (i || this.setting.tags || this.tags || this.setting.restricted || this.hasPolicyValue) && (this.tags = /* @__PURE__ */ new Set(), i && this.tags.add(ot), (E = this.setting.tags) == null || E.forEach((S) => this.tags.add(S)), this.setting.restricted && this.tags.add(Fr), this.hasPolicyValue && this.tags.add(Tt)), this.setting.description.length > Jt.MAX_DESC_LINES) {
      const S = this.setting.description.slice(0, Jt.MAX_DESC_LINES);
      S.push("[...]"), this.description = S.join(`
`);
    } else
      this.description = this.setting.description.join(`
`);
    il(this.setting, this.productService) ? this.valueType = w.ExtensionToggle : this.setting.enum && (!this.setting.type || al(this.setting.type)) ? this.valueType = w.Enum : this.setting.type === "string" ? this.setting.editPresentation === hc.Multiline ? this.valueType = w.MultilineString : this.valueType = w.String : nl(this.setting) ? this.valueType = w.Exclude : sl(this.setting) ? this.valueType = w.Include : this.setting.type === "integer" ? this.valueType = w.Integer : this.setting.type === "number" ? this.valueType = w.Number : this.setting.type === "boolean" ? this.valueType = w.Boolean : this.setting.type === "array" && this.setting.arrayItemType && ["string", "enum", "number", "integer"].includes(this.setting.arrayItemType) ? this.valueType = w.Array : Array.isArray(this.setting.type) && this.setting.type.includes(w.Null) && this.setting.type.length === 2 ? this.setting.type.includes(w.Integer) ? this.valueType = w.NullableInteger : this.setting.type.includes(w.Number) ? this.valueType = w.NullableNumber : this.valueType = w.Complex : ol(this.setting) ? this.setting.allKeysAreBoolean ? this.valueType = w.BooleanObject : this.valueType = w.Object : this.setting.isLanguageTagSetting ? this.valueType = w.LanguageTag : this.valueType = w.Complex;
  }
  matchesAllTags(e) {
    if (!e || !e.size)
      return !0;
    if (this.tags) {
      let t = !0;
      return e.forEach((i) => {
        t = t && this.tags.has(i);
      }), t;
    } else
      return !1;
  }
  matchesScope(e, t) {
    const i = Y.isUri(e) ? 6 : e;
    return this.setting.scope ? i === 1 ? pc.includes(this.setting.scope) : i === 6 ? er.includes(this.setting.scope) : i === 5 ? tr.includes(this.setting.scope) : i === 4 ? fc.includes(this.setting.scope) : i === 3 && t ? mc.includes(this.setting.scope) : !0 : !0;
  }
  matchesAnyExtension(e) {
    return !e || !e.size ? !0 : this.setting.extensionInfo ? Array.from(e).some(
      (t) => t.toLowerCase() === this.setting.extensionInfo.id.toLowerCase()
    ) : !1;
  }
  matchesAnyFeature(e) {
    if (!e || !e.size)
      return !0;
    const t = bo.children.find((i) => i.id === "features");
    return Array.from(e).some((i) => {
      var n;
      if (t && t.children) {
        const s = t.children.find((r) => "features/" + i === r.id);
        if (s) {
          const r = (n = s.settings) == null ? void 0 : n.map((a) => Zd(a));
          return r && !this.setting.extensionInfo && r.some((a) => a.test(this.setting.key.toLowerCase()));
        } else
          return !1;
      } else
        return !1;
    });
  }
  matchesAnyId(e) {
    return !e || !e.size ? !0 : e.has(this.setting.key);
  }
  matchesAllLanguages(e) {
    return e ? this.languageService.isRegisteredLanguageId(e) ? this.setting.scope === 5 : !1 : !0;
  }
};
Jt.MAX_DESC_LINES = 20;
let te = Jt;
function Zd(o) {
  return o = cs(o).replace(/\\\*/g, ".*"), new RegExp(`^${o}$`, "i");
}
let Yi = class {
  constructor(e, t, i, n, s, r) {
    this._viewState = e, this._isWorkspaceTrusted = t, this._configurationService = i, this._languageService = n, this._userDataProfileService = s, this._productService = r, this._treeElementsBySettingName = /* @__PURE__ */ new Map();
  }
  get root() {
    return this._root;
  }
  update(e = this._tocRoot) {
    this._treeElementsBySettingName.clear();
    const t = this.createSettingsTreeGroupElement(e);
    t.children[0] instanceof X && (t.children[0].isFirstGroup = !0), this._root ? (this.disposeChildren(this._root.children), this._root.children = t.children) : this._root = t;
  }
  updateWorkspaceTrust(e) {
    this._isWorkspaceTrusted = e, this.updateRequireTrustedTargetElements();
  }
  disposeChildren(e) {
    for (const t of e)
      this.recursiveDispose(t);
  }
  recursiveDispose(e) {
    e instanceof X && this.disposeChildren(e.children), e.dispose();
  }
  getElementsByName(e) {
    return xi(this._treeElementsBySettingName.get(e));
  }
  updateElementsByName(e) {
    this._treeElementsBySettingName.has(e) && this.updateSettings(this._treeElementsBySettingName.get(e));
  }
  updateRequireTrustedTargetElements() {
    this.updateSettings([...this._treeElementsBySettingName.values()].flat().filter((e) => e.isUntrusted));
  }
  getTargetToInspect(e) {
    return !this._userDataProfileService.currentProfile.isDefault && (e.scope === 1 || this._configurationService.isSettingAppliedForAllProfiles(e.key) && this._viewState.settingsTarget === 3) ? 1 : this._viewState.settingsTarget;
  }
  updateSettings(e) {
    for (const t of e) {
      const i = this.getTargetToInspect(t.setting), n = Un(t.setting.key, i, this._viewState.languageFilter, this._configurationService);
      t.update(n, this._isWorkspaceTrusted);
    }
  }
  createSettingsTreeGroupElement(e, t) {
    const i = t ? this.getDepth(t) + 1 : 0, n = new X(e.id, void 0, e.label, i, !1);
    n.parent = t;
    const s = [];
    if (e.settings) {
      const r = e.settings.map((a) => this.createSettingsTreeSettingElement(a, n)).filter((a) => a.setting.deprecationMessage ? a.isConfigured : !0);
      s.push(...r);
    }
    if (e.children) {
      const r = e.children.map((a) => this.createSettingsTreeGroupElement(a, n));
      s.push(...r);
    }
    return n.children = s, n;
  }
  getDepth(e) {
    return e.parent ? 1 + this.getDepth(e.parent) : 0;
  }
  createSettingsTreeSettingElement(e, t) {
    const i = this.getTargetToInspect(e), n = Un(e.key, i, this._viewState.languageFilter, this._configurationService), s = new te(
      e,
      t,
      n,
      this._isWorkspaceTrusted,
      this._viewState.settingsTarget,
      this._languageService,
      this._productService
    ), r = this._treeElementsBySettingName.get(e.key) || [];
    return r.push(s), this._treeElementsBySettingName.set(e.key, r), s;
  }
};
Yi = v([
  u(2, gt),
  u(3, Pe),
  u(4, Wt),
  u(5, ii)
], Yi);
function Un(o, e, t, i) {
  var h;
  const n = Y.isUri(e) ? { resource: e } : void 0, s = i.inspect(o, n), r = e === 1 ? "applicationValue" : e === 3 ? "userLocalValue" : e === 4 ? "userRemoteValue" : e === 5 ? "workspaceValue" : "workspaceFolderValue", a = e === 1 ? "application" : e === 3 ? "userLocal" : e === 4 ? "userRemote" : e === 5 ? "workspace" : "workspaceFolder";
  let l = typeof s[r] < "u";
  const d = s.overrideIdentifiers, g = /* @__PURE__ */ new Map();
  if (t && (l = !1), d) {
    for (const f of d)
      g.set(f, i.inspect(o, { overrideIdentifier: f }));
    t && g.has(t) && typeof ((h = g.get(t)[a]) == null ? void 0 : h.override) < "u" && (l = !0);
  }
  return { isConfigured: l, inspected: s, targetSelector: r, inspectedLanguageOverrides: g, languageSelector: t };
}
function el(o) {
  return o.replace(/[\.\/]/, "_");
}
function wo(o, e = "", t = !1) {
  const i = o.lastIndexOf(".");
  let n = "";
  i >= 0 && (n = o.substring(0, i), o = o.substring(i + 1)), e = e.replace(/\//g, "."), n = tl(n, e), n = Hs(n), t && (o = o.replace(/[\[\]]/g, ""), o = "$(bracket) " + o);
  const s = Hs(o);
  return { category: n, label: s };
}
function Hs(o) {
  o = o.replace(/\.([a-z0-9])/g, (e, t) => ` › ${t.toUpperCase()}`).replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/^[a-z]/g, (e) => e.toUpperCase()).replace(/\b\w+\b/g, (e) => yo.has(e.toLowerCase()) ? e.toUpperCase() : e);
  for (const [e, t] of ri)
    o = o.replace(new RegExp(`\\b${e}\\b`, "gi"), t);
  return o;
}
function tl(o, e) {
  const t = (n) => {
    /insiders$/i.test(o) || (e = e.replace(/-?insiders$/i, ""));
    const s = e.split(".").map((r) => r.replace(/-/g, "").toLowerCase() === o.toLowerCase() ? r.replace(/-/g, "") : r);
    for (; s.length; ) {
      const r = new RegExp(`^${s.join("\\.")}(\\.|$)`, "i");
      if (r.test(o))
        return o.replace(r, "");
      n ? s.pop() : s.shift();
    }
    return null;
  };
  let i = t(!0);
  return i === null && (i = t(!1)), i === null && (i = o), i;
}
function il(o, e) {
  return !!e.extensionRecommendations && !!o.displayExtensionId;
}
function nl(o) {
  return o.key === "files.exclude" || o.key === "search.exclude" || o.key === "workbench.localHistory.exclude" || o.key === "explorer.autoRevealExclude" || o.key === "files.readonlyExclude" || o.key === "files.watcherExclude";
}
function sl(o) {
  return o.key === "files.readonlyInclude";
}
function rl({ type: o }) {
  return o === "string" || o === "boolean" || o === "integer" || o === "number";
}
function ol({ type: o, objectProperties: e, objectPatternProperties: t, objectAdditionalProperties: i }) {
  if (o !== "object" || fe(e) && fe(t) && fe(i) || (i === !0 || i === void 0) && !Object.keys(t ?? {}).includes(".*"))
    return !1;
  const n = [...Object.values(e ?? {}), ...Object.values(t ?? {})];
  return i && typeof i == "object" && n.push(i), ir(n.map((r) => Array.isArray(r.anyOf) ? r.anyOf : [r])).every(rl);
}
function al(o) {
  const e = ["string", "boolean", "null", "integer", "number"];
  return (Array.isArray(o) ? o : [o]).every((i) => e.includes(i));
}
let Ji = class extends Yi {
  constructor(e, t, i, n, s, r, a) {
    super(e, t, i, s, r, a), this.environmentService = n, this.rawSearchResults = null, this.cachedUniqueSearchResults = null, this.newExtensionSearchResults = null, this.searchResultCount = null, this.id = "searchResultModel", this.update({ id: "searchResultModel", label: "" });
  }
  getUniqueResults() {
    if (this.cachedUniqueSearchResults)
      return this.cachedUniqueSearchResults;
    if (!this.rawSearchResults)
      return [];
    const e = /* @__PURE__ */ new Set(), t = this.rawSearchResults[0];
    t == null || t.filterMatches.forEach((n) => e.add(n.setting.key));
    const i = this.rawSearchResults[1];
    return i && (i.filterMatches = i.filterMatches.filter((n) => !e.has(n.setting.key))), i && (this.newExtensionSearchResults = this.rawSearchResults[2]), this.cachedUniqueSearchResults = [t, i], this.cachedUniqueSearchResults;
  }
  getRawResults() {
    return this.rawSearchResults || [];
  }
  setResult(e, t) {
    if (this.cachedUniqueSearchResults = null, this.newExtensionSearchResults = null, this.rawSearchResults = this.rawSearchResults || [], !t) {
      delete this.rawSearchResults[e];
      return;
    }
    t.exactMatch && (this.rawSearchResults = []), this.rawSearchResults[e] = t, this.updateChildren();
  }
  updateChildren() {
    var t;
    this.update({
      id: "searchResultModel",
      label: "searchResultModel",
      settings: this.getFlatSettings()
    });
    const e = !!this.environmentService.remoteAuthority;
    if (this.root.children = this.root.children.filter((i) => i instanceof te && i.matchesAllTags(this._viewState.tagFilters) && i.matchesScope(this._viewState.settingsTarget, e) && i.matchesAnyExtension(this._viewState.extensionFilters) && i.matchesAnyId(this._viewState.idFilters) && i.matchesAnyFeature(this._viewState.featureFilters) && i.matchesAllLanguages(this._viewState.languageFilter)), this.searchResultCount = this.root.children.length, (t = this.newExtensionSearchResults) != null && t.filterMatches.length) {
      let i = this.newExtensionSearchResults.filterMatches.map((n) => n.setting).filter((n) => n.extensionName && n.extensionPublisher).map((n) => `${n.extensionPublisher}.${n.extensionName}`);
      if (i = Nt(i), i.length) {
        const n = new xs("newExtensions", i);
        n.parent = this._root, this._root.children.push(n);
      }
    }
  }
  getUniqueResultsCount() {
    return this.searchResultCount ?? 0;
  }
  getFlatSettings() {
    const e = [];
    return ns(this.getUniqueResults()).forEach((t) => {
      e.push(...t.filterMatches.map((i) => i.setting));
    }), e;
  }
};
Ji = v([
  u(2, gt),
  u(3, Bt),
  u(4, Pe),
  u(5, Wt),
  u(6, ii)
], Ji);
const cl = /(^|\s)@tag:("([^"]*)"|[^"]\S*)/g, dl = /(^|\s)@ext:("([^"]*)"|[^"]\S*)?/g, ll = /(^|\s)@feature:("([^"]*)"|[^"]\S*)?/g, gl = /(^|\s)@id:("([^"]*)"|[^"]\S*)?/g, ul = /(^|\s)@lang:("([^"]*)"|[^"]\S*)?/g;
function hn(o) {
  function e(a, l, d) {
    return a.replace(l, (g, h, f, m) => {
      const p = m || f;
      return p && d.push(...p.split(",").map((y) => y.trim()).filter((y) => !bc(y))), "";
    });
  }
  const t = [];
  o = o.replace(cl, (a, l, d, g) => (t.push(g || d), "")), o = o.replace(`@${ot}`, () => (t.push(ot), "")), o = o.replace(`@${Tt}`, () => (t.push(Tt), ""));
  const i = [], n = [], s = [], r = [];
  return o = e(o, dl, i), o = e(o, ll, n), o = e(o, gl, s), o = e(o, ul, r), o = o.trim(), {
    tags: t,
    extensionFilters: i,
    featureFilters: n,
    idFilters: s,
    languageFilter: r.length ? r[0] : void 0,
    query: o
  };
}
var hl = ".settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-item-value>.setting-item-control{width:100%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-key,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-value{margin-left:2px;margin-right:3px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-key,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-value,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-sibling,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-value{overflow-wrap:normal;white-space:normal}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-value-checkbox{background-color:var(--vscode-settings-checkboxBackground)!important;border-color:var(--vscode-settings-checkboxBorder)!important;color:var(--vscode-settings-checkboxForeground)!important}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-list-object-input-key-checkbox{height:24px;margin-left:4px}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-list-object-input-key-checkbox .setting-value-checkbox{margin-top:3px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-item-bool .setting-list-object-value{cursor:pointer;width:100%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-key{margin-left:4px;width:40%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-input-key{margin-left:0;min-width:40%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-input-value,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-value{width:100%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-row .setting-list-object-value,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-value{box-sizing:border-box;padding-right:40px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-value{width:60%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-key,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-value,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-sibling,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-value{display:inline-block;line-height:24px;min-height:24px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-include-exclude-widget .setting-list-sibling,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-include-exclude-widget .setting-list-value{font-family:var(--monaco-monospace-font)}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-sibling{font-size:.9em;margin-left:.5em;opacity:.7;white-space:pre}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row .monaco-action-bar{display:none;position:absolute;right:0;top:0}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row{display:flex}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row:hover{background-color:var(--vscode-list-hoverBackground);color:var(--vscode-list-hoverForeground)}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row.selected:focus{background-color:var(--vscode-list-activeSelectionBackground);color:var(--vscode-list-activeSelectionForeground)}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row.selected:not(:focus){background-color:var(--vscode-list-inactiveSelectionBackground);color:var(--vscode-list-inactiveSelectionForeground)}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row.draggable{cursor:pointer;user-select:none}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row.drag-hover{background-color:var(--vscode-list-dropBackground)}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row.drag-hover *{pointer-events:none}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row-header{max-height:24px;position:relative}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row-header{font-weight:700}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-row,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-row-header{display:flex;padding-right:4px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-edit-row.setting-list-object-row:nth-child(odd):hover,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-row:nth-child(odd):not(:hover):not(:focus):not(.selected),.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-row-header{background-color:hsla(0,0%,51%,.04)}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row.selected .monaco-action-bar,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row:hover .monaco-action-bar{display:block}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row .monaco-action-bar .action-label{align-items:center;color:inherit;display:flex;height:20px;justify-content:center;margin-right:2px;padding:2px;width:16px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row .monaco-action-bar .setting-listAction-edit{margin-right:4px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .monaco-text-button{padding:2px 14px;white-space:nowrap;width:auto}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-item-control.setting-list-hide-add-button .setting-list-new-row{display:none}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .monaco-text-button.setting-list-addButton{display:inline-block;margin-right:4px;margin-top:4px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-edit-row,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row{display:flex}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-input,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-siblingInput,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-valueInput{height:24px;margin-right:4px;max-width:320px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-input,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-valueInput.no-sibling{max-width:unset}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-valueInput.no-sibling{width:100%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-value-container .setting-list-object-input{margin-right:0}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-ok-button{margin:0 4px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-include-exclude-widget,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-widget{margin-bottom:1px;padding:1px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-input select,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-value-container{height:24px;width:100%}.settings-editor>.settings-body .settings-tree-container .setting-list-widget .setting-list-object-list-row.select-container{width:320px}.settings-editor>.settings-body .settings-tree-container .setting-list-widget .setting-list-object-list-row.select-container>select{width:inherit}";
Pt(hl, {});
const V = W;
class pl {
  get items() {
    const e = this._dataItems.map((t, i) => {
      const n = typeof this._editKey == "number" && this._editKey === i;
      return {
        ...t,
        editing: n,
        selected: i === this._selectedIdx || n
      };
    });
    return this._editKey === "create" && e.push({
      editing: !0,
      selected: !0,
      ...this._newDataItem
    }), e;
  }
  constructor(e) {
    this._dataItems = [], this._editKey = null, this._selectedIdx = null, this._newDataItem = e;
  }
  setEditKey(e) {
    this._editKey = e;
  }
  setValue(e) {
    this._dataItems = e;
  }
  select(e) {
    this._selectedIdx = e;
  }
  getSelected() {
    return this._selectedIdx;
  }
  selectNext() {
    typeof this._selectedIdx == "number" ? this._selectedIdx = Math.min(this._selectedIdx + 1, this._dataItems.length - 1) : this._selectedIdx = 0;
  }
  selectPrevious() {
    typeof this._selectedIdx == "number" ? this._selectedIdx = Math.max(this._selectedIdx - 1, 0) : this._selectedIdx = 0;
  }
}
let ei = class extends Q {
  get domNode() {
    return this.listElement;
  }
  get items() {
    return this.model.items;
  }
  get inReadMode() {
    return this.model.items.every((e) => !e.editing);
  }
  constructor(e, t, i) {
    super(), this.container = e, this.themeService = t, this.contextViewService = i, this.rowElements = [], this._onDidChangeList = this._register(new T()), this.model = new pl(this.getEmptyItem()), this.listDisposables = this._register(new U()), this.onDidChangeList = this._onDidChangeList.event, this.listElement = b(e, V("div")), this.listElement.setAttribute("role", "list"), this.getContainerClasses().forEach((n) => this.listElement.classList.add(n)), b(e, this.renderAddButton()), this.renderList(), this._register(_(this.listElement, I.POINTER_DOWN, (n) => this.onListClick(n))), this._register(_(this.listElement, I.DBLCLICK, (n) => this.onListDoubleClick(n))), this._register(It(this.listElement, "keydown", (n) => {
      if (n.equals(16))
        this.selectPreviousRow();
      else if (n.equals(18))
        this.selectNextRow();
      else
        return;
      n.preventDefault(), n.stopPropagation();
    }));
  }
  setValue(e) {
    this.model.setValue(e), this.renderList();
  }
  renderHeader() {
  }
  isAddButtonVisible() {
    return !0;
  }
  renderList() {
    const e = Pr(document.activeElement, this.listElement);
    Ae(this.listElement), this.listDisposables.clear();
    const t = this.model.items.some((r) => !!(r.editing && this.isItemNew(r)));
    this.container.classList.toggle("setting-list-hide-add-button", !this.isAddButtonVisible() || t), this.model.items.length ? this.listElement.tabIndex = 0 : this.listElement.removeAttribute("tabIndex");
    const i = this.renderHeader(), n = 24;
    let s = n * this.model.items.length;
    i && (s += n, this.listElement.appendChild(i)), this.rowElements = this.model.items.map((r, a) => this.renderDataOrEditItem(r, a, e)), this.rowElements.forEach((r) => this.listElement.appendChild(r)), this.listElement.style.height = s + "px";
  }
  createBasicSelectBox(e) {
    const t = e.options.map(({ value: r, description: a }) => ({ text: r, description: a })), i = e.options.findIndex((r) => e.data === r.value), n = Kr({
      selectBackground: ho,
      selectForeground: po,
      selectBorder: fo,
      selectListBorder: mo
    });
    return new Br(t, i, this.contextViewService, n, {
      useCustomDrawn: !(xt && Vr.pointerEvents)
    });
  }
  editSetting(e) {
    this.model.setEditKey(e), this.renderList();
  }
  cancelEdit() {
    this.model.setEditKey("none"), this.renderList();
  }
  handleItemChange(e, t, i) {
    this.model.setEditKey("none"), this._onDidChangeList.fire({
      originalItem: e,
      item: t,
      targetIndex: i
    }), this.renderList();
  }
  renderDataOrEditItem(e, t, i) {
    const n = e.editing ? this.renderEdit(e, t) : this.renderDataItem(e, t, i);
    return n.setAttribute("role", "listitem"), n;
  }
  renderDataItem(e, t, i) {
    const n = this.renderItem(e, t), s = n.rowElement;
    s.setAttribute("data-index", t + ""), s.setAttribute("tabindex", e.selected ? "0" : "-1"), s.classList.toggle("selected", e.selected);
    const r = new on(s);
    return this.listDisposables.add(r), r.push(this.getActionsForItem(e, t), { icon: !0, label: !0 }), this.addTooltipsToRow(n, e), e.selected && i && this.listDisposables.add(bs(() => s.focus())), this.listDisposables.add(_(s, "click", (a) => {
      a.stopPropagation();
    })), s;
  }
  renderAddButton() {
    const e = V(".setting-list-new-row"), t = this._register(new Qe(e, Ze));
    return t.label = this.getLocalizedStrings().addButtonLabel, t.element.classList.add("setting-list-addButton"), this._register(t.onDidClick(() => {
      this.model.setEditKey("create"), this.renderList();
    })), e;
  }
  onListClick(e) {
    const t = this.getClickedItemIndex(e);
    t < 0 || (e.preventDefault(), e.stopImmediatePropagation(), this.model.getSelected() !== t && this.selectRow(t));
  }
  onListDoubleClick(e) {
    const t = this.getClickedItemIndex(e);
    if (t < 0)
      return;
    this.model.items[t] && (this.editSetting(t), e.preventDefault(), e.stopPropagation());
  }
  getClickedItemIndex(e) {
    if (!e.target || Mi(e.target, "monaco-action-bar"))
      return -1;
    const i = Mi(e.target, "setting-list-row");
    if (!i)
      return -1;
    const n = i.getAttribute("data-index");
    return n ? parseInt(n) : -1;
  }
  selectRow(e) {
    this.model.select(e), this.rowElements.forEach((i) => i.classList.remove("selected"));
    const t = this.rowElements[this.model.getSelected()];
    t.classList.add("selected"), t.focus();
  }
  selectNextRow() {
    this.model.selectNext(), this.selectRow(this.model.getSelected());
  }
  selectPreviousRow() {
    this.model.selectPrevious(), this.selectRow(this.model.getSelected());
  }
};
ei = v([
  u(1, an),
  u(2, ni)
], ei);
class Cs extends ei {
  constructor() {
    super(...arguments), this.showAddButton = !0;
  }
  setValue(e, t) {
    this.keyValueSuggester = t == null ? void 0 : t.keySuggester, this.showAddButton = (t == null ? void 0 : t.showAddButton) ?? !0, super.setValue(e);
  }
  getEmptyItem() {
    return {
      value: {
        type: "string",
        data: ""
      }
    };
  }
  isAddButtonVisible() {
    return this.showAddButton;
  }
  getContainerClasses() {
    return ["setting-list-widget"];
  }
  getActionsForItem(e, t) {
    return [
      {
        class: oe.asClassName(dn),
        enabled: !0,
        id: "workbench.action.editListItem",
        tooltip: this.getLocalizedStrings().editActionTooltip,
        run: () => this.editSetting(t)
      },
      {
        class: oe.asClassName(go),
        enabled: !0,
        id: "workbench.action.removeListItem",
        tooltip: this.getLocalizedStrings().deleteActionTooltip,
        run: () => this._onDidChangeList.fire({ originalItem: e, item: void 0, targetIndex: t })
      }
    ];
  }
  getDragImage(e) {
    const t = V(".monaco-drag-image");
    return t.textContent = e.value.data, t;
  }
  renderItem(e, t) {
    const i = V(".setting-list-row"), n = b(i, V(".setting-list-value")), s = b(i, V(".setting-list-sibling"));
    return n.textContent = e.value.data.toString(), s.textContent = e.sibling ? `when: ${e.sibling}` : null, this.addDragAndDrop(i, e, t), { rowElement: i, keyElement: n, valueElement: s };
  }
  addDragAndDrop(e, t, i) {
    this.inReadMode ? (e.draggable = !0, e.classList.add("draggable")) : (e.draggable = !1, e.classList.remove("draggable")), this.listDisposables.add(_(e, I.DRAG_START, (s) => {
      if (this.dragDetails = {
        element: e,
        item: t,
        itemIndex: i
      }, s.dataTransfer) {
        s.dataTransfer.dropEffect = "move";
        const r = this.getDragImage(t);
        document.body.appendChild(r), s.dataTransfer.setDragImage(r, -10, -10), setTimeout(() => document.body.removeChild(r), 0);
      }
    })), this.listDisposables.add(_(e, I.DRAG_OVER, (s) => this.dragDetails ? (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), !0) : !1));
    let n = 0;
    this.listDisposables.add(_(e, I.DRAG_ENTER, (s) => {
      n++, e.classList.add("drag-hover");
    })), this.listDisposables.add(_(e, I.DRAG_LEAVE, (s) => {
      n--, n || e.classList.remove("drag-hover");
    })), this.listDisposables.add(_(e, I.DROP, (s) => this.dragDetails ? (s.preventDefault(), n = 0, this.dragDetails.element !== e && this._onDidChangeList.fire({
      originalItem: this.dragDetails.item,
      sourceIndex: this.dragDetails.itemIndex,
      item: t,
      targetIndex: i
    }), !0) : !1)), this.listDisposables.add(_(e, I.DRAG_END, (s) => {
      var r;
      n = 0, e.classList.remove("drag-hover"), (r = s.dataTransfer) == null || r.clearData(), this.dragDetails && (this.dragDetails = void 0);
    }));
  }
  renderEdit(e, t) {
    const i = V(".setting-list-edit-row");
    let n, s, r;
    if (this.keyValueSuggester) {
      const m = this.keyValueSuggester(this.model.items.map(({ value: { data: p } }) => p), t);
      e = {
        ...e,
        value: {
          type: "enum",
          data: e.value.data,
          options: m ? m.options : []
        }
      };
    }
    switch (e.value.type) {
      case "string":
        n = this.renderInputBox(e.value, i);
        break;
      case "enum":
        n = this.renderDropdown(e.value, i), r = e.value.options, e.value.options.length && (s = this.isItemNew(e) ? r[0].value : e.value.data);
        break;
    }
    const a = () => ({
      value: {
        type: "string",
        data: n.value
      },
      sibling: g == null ? void 0 : g.value
    }), l = (m) => ({
      value: {
        type: "enum",
        data: m,
        options: r ?? []
      }
    }), d = (m) => {
      m.equals(3) ? this.handleItemChange(e, a(), t) : m.equals(9) && (this.cancelEdit(), m.preventDefault()), i == null || i.focus();
    };
    if (e.value.type !== "string") {
      const m = n;
      this.listDisposables.add(m.onDidSelect(({ selected: p }) => {
        s = p;
      }));
    } else {
      const m = n;
      this.listDisposables.add(It(m.inputElement, I.KEY_DOWN, d));
    }
    let g;
    fe(e.sibling) ? n instanceof Ge && n.element.classList.add("no-sibling") : (g = new Ge(i, this.contextViewService, {
      placeholder: this.getLocalizedStrings().siblingInputPlaceholder,
      inputBoxStyles: Ct({
        inputBackground: Ki,
        inputForeground: Bi,
        inputBorder: _t
      })
    }), g.element.classList.add("setting-list-siblingInput"), this.listDisposables.add(g), g.value = e.sibling, this.listDisposables.add(It(g.inputElement, I.KEY_DOWN, d)));
    const h = this._register(new Qe(i, Ze));
    h.label = c("okButton", "OK"), h.element.classList.add("setting-list-ok-button"), this.listDisposables.add(h.onDidClick(() => {
      e.value.type === "string" ? this.handleItemChange(e, a(), t) : this.handleItemChange(e, l(s), t);
    }));
    const f = this._register(new Qe(i, { secondary: !0, ...Ze }));
    return f.label = c("cancelButton", "Cancel"), f.element.classList.add("setting-list-cancel-button"), this.listDisposables.add(f.onDidClick(() => this.cancelEdit())), this.listDisposables.add(bs(() => {
      n.focus(), n instanceof Ge && n.select();
    })), i;
  }
  isItemNew(e) {
    return e.value.data === "";
  }
  addTooltipsToRow(e, { value: t, sibling: i }) {
    const n = fe(i) ? c("listValueHintLabel", "List item `{0}`", t.data) : c(
      "listSiblingHintLabel",
      "List item `{0}` with sibling `${1}`",
      t.data,
      i
    ), { rowElement: s } = e;
    s.title = n, s.setAttribute("aria-label", s.title);
  }
  getLocalizedStrings() {
    return {
      deleteActionTooltip: c("removeItem", "Remove Item"),
      editActionTooltip: c("editItem", "Edit Item"),
      addButtonLabel: c("addItem", "Add Item"),
      inputPlaceholder: c("itemInputPlaceholder", "Item..."),
      siblingInputPlaceholder: c("listSiblingInputPlaceholder", "Sibling...")
    };
  }
  renderInputBox(e, t) {
    const i = new Ge(t, this.contextViewService, {
      placeholder: this.getLocalizedStrings().inputPlaceholder,
      inputBoxStyles: Ct({
        inputBackground: Ki,
        inputForeground: Bi,
        inputBorder: _t
      })
    });
    return i.element.classList.add("setting-list-valueInput"), this.listDisposables.add(i), i.value = e.data.toString(), i;
  }
  renderDropdown(e, t) {
    if (e.type !== "enum")
      throw new Error("Valuetype must be enum.");
    const i = this.createBasicSelectBox(e), n = V(".setting-list-object-list-row");
    return i.render(n), t.appendChild(n), i;
  }
}
class fl extends Cs {
  getContainerClasses() {
    return ["setting-list-include-exclude-widget"];
  }
  addDragAndDrop(e, t, i) {
  }
  addTooltipsToRow(e, { value: t, sibling: i }) {
    const n = fe(i) ? c("excludePatternHintLabel", "Exclude files matching `{0}`", t.data) : c(
      "excludeSiblingHintLabel",
      "Exclude files matching `{0}`, only when a file matching `{1}` is present",
      t.data,
      i
    ), { rowElement: s } = e;
    s.title = n, s.setAttribute("aria-label", s.title);
  }
  getLocalizedStrings() {
    return {
      deleteActionTooltip: c("removeExcludeItem", "Remove Exclude Item"),
      editActionTooltip: c("editExcludeItem", "Edit Exclude Item"),
      addButtonLabel: c("addPattern", "Add Pattern"),
      inputPlaceholder: c("excludePatternInputPlaceholder", "Exclude Pattern..."),
      siblingInputPlaceholder: c("excludeSiblingInputPlaceholder", "When Pattern Is Present...")
    };
  }
}
class ml extends Cs {
  getContainerClasses() {
    return ["setting-list-include-exclude-widget"];
  }
  addDragAndDrop(e, t, i) {
  }
  addTooltipsToRow(e, { value: t, sibling: i }) {
    const n = fe(i) ? c("includePatternHintLabel", "Include files matching `{0}`", t.data) : c(
      "includeSiblingHintLabel",
      "Include files matching `{0}`, only when a file matching `{1}` is present",
      t.data,
      i
    ), { rowElement: s } = e;
    s.title = n, s.setAttribute("aria-label", s.title);
  }
  getLocalizedStrings() {
    return {
      deleteActionTooltip: c("removeIncludeItem", "Remove Include Item"),
      editActionTooltip: c("editIncludeItem", "Edit Include Item"),
      addButtonLabel: c("addPattern", "Add Pattern"),
      inputPlaceholder: c("includePatternInputPlaceholder", "Include Pattern..."),
      siblingInputPlaceholder: c("includeSiblingInputPlaceholder", "When Pattern Is Present...")
    };
  }
}
class bl extends ei {
  constructor() {
    super(...arguments), this.currentSettingKey = "", this.showAddButton = !0, this.keySuggester = () => {
    }, this.valueSuggester = () => {
    };
  }
  setValue(e, t) {
    this.showAddButton = (t == null ? void 0 : t.showAddButton) ?? this.showAddButton, this.keySuggester = (t == null ? void 0 : t.keySuggester) ?? this.keySuggester, this.valueSuggester = (t == null ? void 0 : t.valueSuggester) ?? this.valueSuggester, xe(t) && t.settingKey !== this.currentSettingKey && (this.model.setEditKey("none"), this.model.select(null), this.currentSettingKey = t.settingKey), super.setValue(e);
  }
  isItemNew(e) {
    return e.key.data === "" && e.value.data === "";
  }
  isAddButtonVisible() {
    return this.showAddButton;
  }
  getEmptyItem() {
    return {
      key: { type: "string", data: "" },
      value: { type: "string", data: "" },
      removable: !0
    };
  }
  getContainerClasses() {
    return ["setting-list-object-widget"];
  }
  getActionsForItem(e, t) {
    const i = [
      {
        class: oe.asClassName(dn),
        enabled: !0,
        id: "workbench.action.editListItem",
        tooltip: this.getLocalizedStrings().editActionTooltip,
        run: () => this.editSetting(t)
      }
    ];
    return e.removable ? i.push({
      class: oe.asClassName(go),
      enabled: !0,
      id: "workbench.action.removeListItem",
      tooltip: this.getLocalizedStrings().deleteActionTooltip,
      run: () => this._onDidChangeList.fire({ originalItem: e, item: void 0, targetIndex: t })
    }) : i.push({
      class: oe.asClassName(Od),
      enabled: !0,
      id: "workbench.action.resetListItem",
      tooltip: this.getLocalizedStrings().resetActionTooltip,
      run: () => this._onDidChangeList.fire({ originalItem: e, item: void 0, targetIndex: t })
    }), i;
  }
  renderHeader() {
    const e = V(".setting-list-row-header"), t = b(e, V(".setting-list-object-key")), i = b(e, V(".setting-list-object-value")), { keyHeaderText: n, valueHeaderText: s } = this.getLocalizedStrings();
    return t.textContent = n, i.textContent = s, e;
  }
  renderItem(e, t) {
    const i = V(".setting-list-row");
    i.classList.add("setting-list-object-row");
    const n = b(i, V(".setting-list-object-key")), s = b(i, V(".setting-list-object-value"));
    return n.textContent = e.key.data, s.textContent = e.value.data.toString(), { rowElement: i, keyElement: n, valueElement: s };
  }
  renderEdit(e, t) {
    const i = V(".setting-list-edit-row.setting-list-object-row"), n = { ...e }, s = (p) => {
      n.key = p, f.enabled = p.data !== "";
      const y = this.valueSuggester(p.data) ?? e.value;
      this.shouldUseSuggestion(e.value, n.value, y) && (r(y), h());
    }, r = (p) => {
      n.value = p;
    };
    let a, l;
    if (this.showAddButton) {
      if (this.isItemNew(e)) {
        const x = this.keySuggester(this.model.items.map(({ key: { data: E } }) => E));
        if (xe(x)) {
          n.key = x;
          const E = this.valueSuggester(n.key.data);
          r(E ?? n.value);
        }
      }
      const { widget: p, element: y } = this.renderEditWidget(n.key, {
        idx: t,
        isKey: !0,
        originalItem: e,
        changedItem: n,
        update: s
      });
      a = p, l = y;
    } else
      l = V(".setting-list-object-key"), l.textContent = e.key.data;
    let d;
    const g = V(".setting-list-object-value-container"), h = () => {
      const { widget: p, element: y } = this.renderEditWidget(n.value, {
        idx: t,
        isKey: !1,
        originalItem: e,
        changedItem: n,
        update: r
      });
      d = p, Ae(g), g.append(y);
    };
    h(), i.append(l, g);
    const f = this._register(new Qe(i, Ze));
    f.enabled = n.key.data !== "", f.label = c("okButton", "OK"), f.element.classList.add("setting-list-ok-button"), this.listDisposables.add(f.onDidClick(() => this.handleItemChange(e, n, t)));
    const m = this._register(new Qe(i, { secondary: !0, ...Ze }));
    return m.label = c("cancelButton", "Cancel"), m.element.classList.add("setting-list-cancel-button"), this.listDisposables.add(m.onDidClick(() => this.cancelEdit())), this.listDisposables.add(bs(() => {
      const p = a ?? d;
      p.focus(), p instanceof Ge && p.select();
    })), i;
  }
  renderEditWidget(e, t) {
    switch (e.type) {
      case "string":
        return this.renderStringEditWidget(e, t);
      case "enum":
        return this.renderEnumEditWidget(e, t);
      case "boolean":
        return this.renderEnumEditWidget({
          type: "enum",
          data: e.data.toString(),
          options: [{ value: "true" }, { value: "false" }]
        }, t);
    }
  }
  renderStringEditWidget(e, { idx: t, isKey: i, originalItem: n, changedItem: s, update: r }) {
    const a = V(i ? ".setting-list-object-input-key" : ".setting-list-object-input-value"), l = new Ge(a, this.contextViewService, {
      placeholder: i ? c("objectKeyInputPlaceholder", "Key") : c("objectValueInputPlaceholder", "Value"),
      inputBoxStyles: Ct({
        inputBackground: Ki,
        inputForeground: Bi,
        inputBorder: _t
      })
    });
    l.element.classList.add("setting-list-object-input"), this.listDisposables.add(l), l.value = e.data, this.listDisposables.add(l.onDidChange((g) => r({ ...e, data: g })));
    const d = (g) => {
      g.equals(3) ? this.handleItemChange(n, s, t) : g.equals(9) && (this.cancelEdit(), g.preventDefault());
    };
    return this.listDisposables.add(It(l.inputElement, I.KEY_DOWN, d)), { widget: l, element: a };
  }
  renderEnumEditWidget(e, { isKey: t, changedItem: i, update: n }) {
    const s = this.createBasicSelectBox(e), r = t ? i.key : i.value;
    this.listDisposables.add(s.onDidSelect(({ selected: d }) => n(r.type === "boolean" ? { ...r, data: d === "true" } : { ...r, data: d })));
    const a = V(".setting-list-object-input");
    return a.classList.add(t ? "setting-list-object-input-key" : "setting-list-object-input-value"), s.render(a), e.options.findIndex((d) => e.data === d.value) === -1 && e.options.length ? n(r.type === "boolean" ? { ...r, data: !0 } : { ...r, data: e.options[0].value }) : r.type === "boolean" && n({ ...r, data: e.data === "true" }), { widget: s, element: a };
  }
  shouldUseSuggestion(e, t, i) {
    if (i.type !== "enum" && i.type === t.type && i.data === t.data)
      return !1;
    if (e.data === "")
      return !0;
    if (t.type === i.type && i.type !== "enum")
      return !1;
    if (t.type === "enum" && i.type === "enum") {
      const n = new Set(t.options.map(({ value: s }) => s));
      if (i.options.forEach(({ value: s }) => n.delete(s)), n.size === 0)
        return !1;
    }
    return !0;
  }
  addTooltipsToRow(e, t) {
    const { keyElement: i, valueElement: n, rowElement: s } = e, r = c(
      "objectPairHintLabel",
      "The property `{0}` is set to `{1}`.",
      t.key.data,
      t.value.data
    ), a = this.getEnumDescription(t.key) ?? t.keyDescription ?? r;
    i.title = a;
    const l = this.getEnumDescription(t.value) ?? r;
    n.title = l, s.setAttribute("aria-label", r);
  }
  getEnumDescription(e) {
    var i;
    return e.type === "enum" ? (i = e.options.find(({ value: n }) => e.data === n)) == null ? void 0 : i.description : void 0;
  }
  getLocalizedStrings() {
    return {
      deleteActionTooltip: c("removeItem", "Remove Item"),
      resetActionTooltip: c("resetItem", "Reset Item"),
      editActionTooltip: c("editItem", "Edit Item"),
      addButtonLabel: c("addItem", "Add Item"),
      keyHeaderText: c("objectKeyHeader", "Item"),
      valueHeaderText: c("objectValueHeader", "Value")
    };
  }
}
class Eo extends ei {
  constructor() {
    super(...arguments), this.currentSettingKey = "";
  }
  setValue(e, t) {
    xe(t) && t.settingKey !== this.currentSettingKey && (this.model.setEditKey("none"), this.model.select(null), this.currentSettingKey = t.settingKey), super.setValue(e);
  }
  isItemNew(e) {
    return !e.key.data && !e.value.data;
  }
  getEmptyItem() {
    return {
      key: { type: "string", data: "" },
      value: { type: "boolean", data: !1 },
      removable: !1
    };
  }
  getContainerClasses() {
    return ["setting-list-object-widget"];
  }
  getActionsForItem(e, t) {
    return [];
  }
  isAddButtonVisible() {
    return !1;
  }
  renderHeader() {
  }
  renderDataOrEditItem(e, t, i) {
    const n = this.renderEdit(e, t);
    return n.setAttribute("role", "listitem"), n;
  }
  renderItem(e, t) {
    const i = V(".blank-row"), n = V(".blank-row-key");
    return { rowElement: i, keyElement: n };
  }
  renderEdit(e, t) {
    const i = V(".setting-list-edit-row.setting-list-object-row.setting-item-bool"), n = { ...e }, s = (h) => {
      n.value.data = h, this.handleItemChange(e, n, t);
    }, r = e.keyDescription ? `${e.keyDescription} (${e.key.data})` : e.key.data, { element: a, widget: l } = this.renderEditWidget(n.value.data, r, s);
    i.appendChild(a);
    const d = b(i, V(".setting-list-object-value"));
    d.textContent = r;
    const g = { rowElement: i, keyElement: d, valueElement: l.domNode };
    return this.addTooltipsToRow(g, e), this._register(_(d, I.MOUSE_DOWN, (h) => {
      h.target.tagName.toLowerCase() !== "a" && (l.checked = !l.checked, s(l.checked)), dt.stop(h);
    })), i;
  }
  renderEditWidget(e, t, i) {
    const n = new Ur({
      icon: he.check,
      actionClassName: "setting-value-checkbox",
      isChecked: e,
      title: t,
      ...Gr
    });
    this.listDisposables.add(n);
    const s = V(".setting-list-object-input");
    return s.classList.add("setting-list-object-input-key-checkbox"), n.domNode.classList.add("setting-value-checkbox"), s.appendChild(n.domNode), this._register(_(s, I.MOUSE_DOWN, (r) => {
      n.checked = !n.checked, i(n.checked), r.stopImmediatePropagation();
    })), { widget: n, element: s };
  }
  addTooltipsToRow(e, t) {
    const i = c(
      "objectPairHintLabel",
      "The property `{0}` is set to `{1}`.",
      t.key.data,
      t.value.data
    ), n = t.keyDescription ?? i, { rowElement: s, keyElement: r, valueElement: a } = e;
    r.title = n, a.setAttribute("aria-label", i), s.setAttribute("aria-label", i);
  }
  getLocalizedStrings() {
    return {
      deleteActionTooltip: c("removeItem", "Remove Item"),
      resetActionTooltip: c("resetItem", "Reset Item"),
      editActionTooltip: c("editItem", "Edit Item"),
      addButtonLabel: c("addItem", "Add Item"),
      keyHeaderText: c("objectKeyHeader", "Item"),
      valueHeaderText: c("objectValueHeader", "Value")
    };
  }
}
const O = W;
function yl(o) {
  const e = o.isConfigured ? { ...o.defaultValue, ...o.scopeValue } : o.defaultValue;
  return Object.keys(e).filter((t) => !!e[t]).map((t) => {
    const i = e[t], n = typeof i == "boolean" ? void 0 : i.when;
    return {
      value: {
        type: "string",
        data: t
      },
      sibling: n,
      elementType: o.valueType
    };
  });
}
function Sl(o, e) {
  const t = new Set(o);
  return e.forEach(({ key: i }) => t.delete(i.data)), t.size === 0;
}
function qt(o) {
  if (o.anyOf)
    return o.anyOf.map(qt).flat();
  const e = o.enumDescriptions ?? [];
  return (o.enum ?? []).map((t, i) => {
    const n = i < e.length ? e[i] : void 0;
    return { value: t, description: n };
  });
}
function Yt(o) {
  return o.anyOf ? o.anyOf.map(Yt).some((t) => t === "enum") ? "enum" : "string" : o.type === "boolean" ? "boolean" : o.type === "string" && xe(o.enum) && o.enum.length > 0 ? "enum" : "string";
}
function xo(o) {
  const e = typeof o.defaultValue == "object" ? o.defaultValue ?? {} : {}, t = typeof o.scopeValue == "object" ? o.scopeValue ?? {} : {}, i = o.isConfigured ? { ...e, ...t } : e, { objectProperties: n, objectPatternProperties: s, objectAdditionalProperties: r } = o.setting, a = Object.entries(s ?? {}).map(([d, g]) => ({
    pattern: new RegExp(d),
    schema: g
  })), l = Object.entries(n ?? {}).map(([d, g]) => ({ value: d, description: g.description }));
  return Object.keys(i).map((d) => {
    var p;
    const g = e[d];
    if (xe(n) && d in n) {
      if (o.setting.allKeysAreBoolean)
        return {
          key: {
            type: "string",
            data: d
          },
          value: {
            type: "boolean",
            data: i[d]
          },
          keyDescription: n[d].description,
          removable: !1
        };
      const y = qt(n[d]);
      return {
        key: {
          type: "enum",
          data: d,
          options: l
        },
        value: {
          type: Yt(n[d]),
          data: i[d],
          options: y
        },
        keyDescription: n[d].description,
        removable: fe(g)
      };
    }
    const h = !g, f = (p = a.find(({ pattern: y }) => y.test(d))) == null ? void 0 : p.schema;
    if (f) {
      const y = qt(f);
      return {
        key: { type: "string", data: d },
        value: {
          type: Yt(f),
          data: i[d],
          options: y
        },
        keyDescription: f.description,
        removable: h
      };
    }
    const m = qt(typeof r == "boolean" ? {} : r ?? {});
    return {
      key: { type: "string", data: d },
      value: {
        type: typeof r == "object" ? Yt(r) : "string",
        data: i[d],
        options: m
      },
      keyDescription: typeof r == "object" ? r.description : void 0,
      removable: h
    };
  }).filter((d) => !fe(d.value.data));
}
function vl(o) {
  return (e, t) => {
    const i = [];
    return o.setting.enum && o.setting.enum.forEach((n, s) => {
      var r;
      if (!o.setting.uniqueItems || t !== void 0 && n === e[t] || !e.includes(n)) {
        const a = (r = o.setting.enumDescriptions) == null ? void 0 : r[s];
        i.push({ value: n, description: a });
      }
    }), i.length > 0 ? { type: "enum", data: i[0].value, options: i } : void 0;
  };
}
function wl(o) {
  const { objectProperties: e } = o.setting, t = Object.keys(e ?? {});
  return (i) => {
    const n = new Set(i), s = [];
    return t.forEach((r) => {
      n.has(r) || s.push({ value: r, description: e[r].description });
    }), s.length > 0 ? { type: "enum", data: s[0].value, options: s } : void 0;
  };
}
function El(o) {
  const { objectProperties: e, objectPatternProperties: t, objectAdditionalProperties: i } = o.setting, n = Object.entries(t ?? {}).map(([s, r]) => ({
    pattern: new RegExp(s),
    schema: r
  }));
  return (s) => {
    var l;
    let r;
    xe(e) && s in e && (r = e[s]);
    const a = r ?? ((l = n.find(({ pattern: d }) => d.test(s))) == null ? void 0 : l.schema);
    if (xe(a) ? r = a : xe(i) && typeof i == "object" && (r = i), xe(r)) {
      const d = Yt(r);
      if (d === "boolean")
        return { type: d, data: r.default ?? !0 };
      if (d === "enum") {
        const g = qt(r);
        return { type: d, data: r.default ?? g[0].value, options: g };
      } else
        return { type: d, data: r.default ?? "" };
    }
  };
}
function Ti(o) {
  return o === "number" || o === "integer";
}
function xl(o, e) {
  const t = {};
  for (const i in e) {
    let n;
    const s = o.setting.objectPatternProperties, r = o.setting.objectProperties, a = o.setting.objectAdditionalProperties;
    if (r) {
      for (const l in r)
        if (l === i) {
          n = Ti(r[l].type);
          break;
        }
    }
    if (n === void 0 && s) {
      for (const l in s)
        if (i.match(l)) {
          n = Ti(s[l].type);
          break;
        }
    }
    n === void 0 && a && typeof a != "boolean" && Ti(a.type) && (n = !0), t[i] = n ? Number(e[i]) : e[i];
  }
  return t;
}
function Cl(o) {
  if (!o.value || !Array.isArray(o.value))
    return [];
  if (o.setting.arrayItemType === "enum") {
    let e = [];
    return o.setting.enum && (e = o.setting.enum.map((t, i) => {
      var n;
      return {
        value: t,
        description: (n = o.setting.enumDescriptions) == null ? void 0 : n[i]
      };
    })), o.value.map((t) => ({
      value: {
        type: "enum",
        data: t,
        options: e
      }
    }));
  } else
    return o.value.map((e) => ({
      value: {
        type: "string",
        data: e
      }
    }));
}
function kl(o, e) {
  return o.setting.enum && o.setting.uniqueItems ? o.setting.enum.length - e.length > 0 : !0;
}
function $s(o, e, t) {
  const i = ko(e);
  return {
    tree: Co(o, i, t),
    leftoverSettings: i
  };
}
function Tl(o, e, t, i) {
  return [...ko(o)].filter((s) => s.restricted && Un(s.key, e, t, i).isConfigured);
}
function zs(o, e) {
  const t = o ?? Number.MAX_SAFE_INTEGER, i = e ?? Number.MAX_SAFE_INTEGER;
  return t - i;
}
async function Il(o, e) {
  const t = /* @__PURE__ */ new Map(), i = (r, a, l) => {
    if (!t.has(r)) {
      const d = {
        id: r,
        label: a,
        children: []
      };
      t.set(r, d);
    }
    t.get(r).children.push(l);
  }, n = async (r) => {
    const a = r.sections.map((f) => f.settings).flat(), l = r.extensionInfo.id, d = await o.getExtension(l), g = (d == null ? void 0 : d.displayName) ?? (d == null ? void 0 : d.name) ?? l, h = {
      id: r.id || r.title,
      label: r.title,
      order: r.order,
      settings: a
    };
    i(l, g, h);
  }, s = e.map((r) => n(r));
  return Promise.all(s).then(() => {
    var a;
    const r = [];
    for (const l of t.values()) {
      for (const d of l.children)
        (a = d.settings) == null || a.sort((g, h) => zs(g.order, h.order));
      if (l.children.length === 1)
        r.push({
          id: l.id,
          label: l.children[0].label,
          settings: l.children[0].settings
        });
      else {
        l.children.sort((g, h) => zs(g.order, h.order));
        const d = l.children.find((g) => g.label === l.label);
        if (d && !d.children) {
          const g = l.children.filter((h) => h !== d);
          r.push({
            id: l.id,
            label: l.label,
            settings: d.settings,
            children: g
          });
        } else
          r.push(l);
      }
    }
    return r.sort((l, d) => l.label.localeCompare(d.label)), {
      id: "extensions",
      label: c("extensions", "Extensions"),
      children: r
    };
  });
}
function Co(o, e, t) {
  let i;
  o.children && (i = o.children.map((s) => Co(s, e, t)).filter((s) => {
    var r, a;
    return ((r = s.children) == null ? void 0 : r.length) || ((a = s.settings) == null ? void 0 : a.length);
  }));
  let n;
  if (o.settings && (n = o.settings.map((s) => Dl(e, s, t)).flat()), !i && !n)
    throw new Error(`TOC node has no child groups or settings: ${o.id}`);
  return {
    id: o.id,
    label: o.label,
    children: i,
    settings: n
  };
}
const _l = [
  /^settingsSync\..*/,
  /^sync\..*/,
  /^workbench.fontAliasing$/
];
function Dl(o, e, t) {
  const i = [];
  return o.forEach((n) => {
    Ml(n, e) && (i.push(n), o.delete(n));
  }), !i.length && !_l.some((n) => n.test(e)) && t.warn(`Settings pattern "${e}" doesn't match any settings`), i.sort((n, s) => n.key.localeCompare(s.key));
}
const qs = /* @__PURE__ */ new Map();
function Ll(o) {
  return o = cs(o).replace(/\\\*/g, ".*"), new RegExp(`^${o}$`, "i");
}
function Ml(o, e) {
  let t = qs.get(e);
  return t || (t = Ll(e), qs.set(e, t)), t.test(o.key);
}
function ko(o) {
  const e = /* @__PURE__ */ new Set();
  for (const t of o)
    for (const i of t.sections)
      for (const n of i.settings)
        (!n.overrides || !n.overrides.length) && e.add(n);
  return e;
}
const To = "settings.text.template", Io = "settings.multilineText.template", _o = "settings.number.template", Do = "settings.enum.template", Lo = "settings.bool.template", Mo = "settings.array.template", Ro = "settings.exclude.template", Ao = "settings.include.template", Oo = "settings.object.template", No = "settings.boolObject.template", Ii = "settings.complex.template", Wo = "settings.newExtensions.template", Fo = "settings.group.template", Po = "settings.extensionToggle.template";
function Rl(o) {
  o.querySelectorAll(`
		[tabindex="0"],
		input:not([tabindex="-1"]),
		select:not([tabindex="-1"]),
		textarea:not([tabindex="-1"]),
		a:not([tabindex="-1"]),
		button:not([tabindex="-1"]),
		area:not([tabindex="-1"])
	`).forEach((t) => {
    t.setAttribute(R.ELEMENT_FOCUSABLE_ATTR, "true"), t.setAttribute("tabindex", "-1");
  });
}
function Al(o) {
  o.querySelectorAll(`[${R.ELEMENT_FOCUSABLE_ATTR}="true"]`).forEach((t) => {
    t.removeAttribute(R.ELEMENT_FOCUSABLE_ATTR), t.setAttribute("tabindex", "0");
  });
}
var ee;
let R = (ee = class extends Q {
  constructor(e, t, i, n, s, r, a, l, d, g, h, f, m, p) {
    super(), this.settingActions = e, this.disposableActionFactory = t, this._themeService = i, this._contextViewService = n, this._openerService = s, this._instantiationService = r, this._commandService = a, this._contextMenuService = l, this._keybindingService = d, this._configService = g, this._extensionsService = h, this._extensionsWorkbenchService = f, this._productService = m, this._telemetryService = p, this._onDidClickOverrideElement = this._register(new T()), this.onDidClickOverrideElement = this._onDidClickOverrideElement.event, this._onDidChangeSetting = this._register(new T()), this.onDidChangeSetting = this._onDidChangeSetting.event, this._onDidOpenSettings = this._register(new T()), this.onDidOpenSettings = this._onDidOpenSettings.event, this._onDidClickSettingLink = this._register(new T()), this.onDidClickSettingLink = this._onDidClickSettingLink.event, this._onDidFocusSetting = this._register(new T()), this.onDidFocusSetting = this._onDidFocusSetting.event, this._onDidChangeIgnoredSettings = this._register(new T()), this.onDidChangeIgnoredSettings = this._onDidChangeIgnoredSettings.event, this._onDidChangeSettingHeight = this._register(new T()), this.onDidChangeSettingHeight = this._onDidChangeSettingHeight.event, this._onApplyFilter = this._register(new T()), this.onApplyFilter = this._onApplyFilter.event, this.markdownRenderer = this._register(r.createInstance(yc, {})), this.ignoredSettings = Vn(Ri(), this._configService), this._register(this._configService.onDidChangeConfiguration((y) => {
      this.ignoredSettings = Vn(Ri(), this._configService), this._onDidChangeIgnoredSettings.fire();
    }));
  }
  renderCommonTemplate(e, t, i) {
    t.classList.add("setting-item"), t.classList.add("setting-item-" + i);
    const n = new U(), s = b(t, O(ee.CONTENTS_SELECTOR));
    s.classList.add("settings-row-inner-container");
    const r = b(s, O(".setting-item-title")), a = b(r, O(".setting-item-cat-label-container")), l = b(a, O("span.setting-item-category")), d = b(a, O("span.setting-item-label")), g = new yt(d), h = this._instantiationService.createInstance(qi, r);
    n.add(h);
    const f = b(s, O(".setting-item-description")), m = b(s, O(".setting-item-modified-indicator"));
    m.title = c("modified", "The setting has been configured in the current scope.");
    const p = b(s, O(".setting-item-value")), y = b(p, O("div.setting-item-control")), x = b(s, O(".setting-item-deprecation-message")), E = b(s, O(".setting-toolbar-container")), S = this.renderSettingToolbar(E), A = {
      toDispose: n,
      elementDisposables: n.add(new U()),
      containerElement: s,
      categoryElement: l,
      labelElement: g,
      descriptionElement: f,
      controlElement: y,
      deprecationWarningElement: x,
      indicatorsLabel: h,
      toolbar: S
    };
    return n.add(_(y, I.MOUSE_DOWN, (C) => C.stopPropagation())), n.add(_(r, I.MOUSE_ENTER, (C) => s.classList.add("mouseover"))), n.add(_(r, I.MOUSE_LEAVE, (C) => s.classList.remove("mouseover"))), A;
  }
  addSettingElementFocusHandler(e) {
    const t = us(e.containerElement);
    e.toDispose.add(t), t.onDidBlur(() => {
      e.containerElement.classList.contains("focused") && e.containerElement.classList.remove("focused");
    }), t.onDidFocus(() => {
      e.containerElement.classList.add("focused"), e.context && this._onDidFocusSetting.fire(e.context);
    });
  }
  renderSettingToolbar(e) {
    const t = this._keybindingService.lookupKeybinding(jr);
    let i = c("settingsContextMenuTitle", "More Actions... ");
    return t && (i += ` (${t && t.getLabel()})`), new vr(e, this._contextMenuService, {
      toggleMenuTitle: i,
      renderDropdownAsChildElement: !xt,
      moreIcon: Dd
    });
  }
  renderSettingElement(e, t, i) {
    const n = e.element;
    i.context = n, i.toolbar.context = n;
    const s = this.disposableActionFactory(n.setting, n.settingsTarget);
    s.forEach((g) => Sc(g) && i.elementDisposables.add(g)), i.toolbar.setActions([], [...this.settingActions, ...s]);
    const r = n.setting;
    i.containerElement.classList.toggle("is-configured", n.isConfigured), i.containerElement.setAttribute(ee.SETTING_KEY_ATTR, n.setting.key), i.containerElement.setAttribute(ee.SETTING_ID_ATTR, n.id);
    const a = r.key + (n.isConfigured ? " - Modified" : "");
    if (i.categoryElement.textContent = n.displayCategory ? n.displayCategory + ": " : "", i.categoryElement.title = a, i.labelElement.text = n.displayLabel, i.labelElement.title = a, i.descriptionElement.innerText = "", n.setting.descriptionIsMarkdown) {
      const g = this.renderSettingMarkdown(n, i.containerElement, n.description, i.elementDisposables);
      i.descriptionElement.appendChild(g);
    } else
      i.descriptionElement.innerText = n.description;
    i.indicatorsLabel.updateScopeOverrides(n, this._onDidClickOverrideElement, this._onApplyFilter), i.elementDisposables.add(this._configService.onDidChangeConfiguration((g) => {
      g.affectsConfiguration(it) && i.indicatorsLabel.updateScopeOverrides(n, this._onDidClickOverrideElement, this._onApplyFilter);
    }));
    const l = (g) => this._onDidChangeSetting.fire({
      key: n.setting.key,
      value: g,
      type: i.context.valueType,
      manualReset: !1,
      scope: n.setting.scope
    }), d = n.setting.deprecationMessage || "";
    d && n.setting.deprecationMessageIsMarkdown ? (i.deprecationWarningElement.innerText = "", i.deprecationWarningElement.appendChild(this.renderSettingMarkdown(n, i.containerElement, n.setting.deprecationMessage, i.elementDisposables))) : i.deprecationWarningElement.innerText = d, i.deprecationWarningElement.prepend(O(".codicon.codicon-error")), i.containerElement.classList.toggle("is-deprecated", !!d), this.renderValue(n, i, l), i.indicatorsLabel.updateWorkspaceTrust(n), i.indicatorsLabel.updateSyncIgnored(n, this.ignoredSettings), i.indicatorsLabel.updateDefaultOverrideIndicator(n), i.elementDisposables.add(this.onDidChangeIgnoredSettings(() => {
      i.indicatorsLabel.updateSyncIgnored(n, this.ignoredSettings);
    })), this.updateSettingTabbable(n, i), i.elementDisposables.add(n.onDidChangeTabbable(() => {
      this.updateSettingTabbable(n, i);
    }));
  }
  updateSettingTabbable(e, t) {
    e.tabbable ? Al(t.containerElement) : Rl(t.containerElement);
  }
  renderSettingMarkdown(e, t, i, n) {
    i = ks(i);
    const s = this.markdownRenderer.render({ value: i, isTrusted: !0 }, {
      actionHandler: {
        callback: (r) => {
          if (r.startsWith("#")) {
            const a = {
              source: e,
              targetKey: r.substring(1)
            };
            this._onDidClickSettingLink.fire(a);
          } else
            this._openerService.open(r, { allowCommands: !0 }).catch(Hr);
        },
        disposables: n
      },
      asyncRenderCallback: () => {
        const r = t.clientHeight;
        r && this._onDidChangeSettingHeight.fire({ element: e, height: r });
      }
    });
    return n.add(s), s.element.classList.add("setting-item-markdown"), Uo(s.element), s.element;
  }
  disposeTemplate(e) {
    e.toDispose.dispose();
  }
  disposeElement(e, t, i, n) {
    var s;
    (s = i.elementDisposables) == null || s.clear();
  }
}, ee.CONTROL_CLASS = "setting-control-focus-target", ee.CONTROL_SELECTOR = "." + ee.CONTROL_CLASS, ee.CONTENTS_CLASS = "setting-item-contents", ee.CONTENTS_SELECTOR = "." + ee.CONTENTS_CLASS, ee.ALL_ROWS_SELECTOR = ".monaco-list-row", ee.SETTING_KEY_ATTR = "data-key", ee.SETTING_ID_ATTR = "data-id", ee.ELEMENT_FOCUSABLE_ATTR = "data-focusable", ee);
R = v([
  u(2, an),
  u(3, ni),
  u(4, vc),
  u(5, $),
  u(6, kt),
  u(7, Kt),
  u(8, Fe),
  u(9, ge),
  u(10, nn),
  u(11, Ar),
  u(12, ii),
  u(13, fs)
], R);
class Ol {
  constructor() {
    this.templateId = Fo;
  }
  renderTemplate(e) {
    return e.classList.add("group-title"), {
      parent: e,
      toDispose: new U()
    };
  }
  renderElement(e, t, i) {
    i.parent.innerText = "";
    const n = b(i.parent, O("div.settings-group-title-label.settings-row-inner-container"));
    n.classList.add(`settings-group-level-${e.element.level}`), n.textContent = e.element.label, e.element.isFirstGroup && n.classList.add("settings-group-first");
  }
  disposeTemplate(e) {
  }
}
let Gn = class {
  constructor(e) {
    this._commandService = e, this.templateId = Wo;
  }
  renderTemplate(e) {
    const t = new U();
    e.classList.add("setting-item-new-extensions");
    const i = new Qe(e, { title: !0, ...Ze });
    t.add(i), t.add(i.onDidClick(() => {
      n.context && this._commandService.executeCommand("workbench.extensions.action.showExtensionsWithIds", n.context.extensionIds);
    })), i.label = c("newExtensionsButtonLabel", "Show matching extensions"), i.element.classList.add("settings-new-extensions-button");
    const n = {
      button: i,
      toDispose: t
    };
    return n;
  }
  renderElement(e, t, i) {
    i.context = e.element;
  }
  disposeTemplate(e) {
    $t(e.toDispose);
  }
};
Gn = v([
  u(0, kt)
], Gn);
const Xt = class Xt extends R {
  constructor() {
    super(...arguments), this.templateId = Ii;
  }
  renderTemplate(e) {
    const t = this.renderCommonTemplate(null, e, "complex"), i = b(t.controlElement, O("a.edit-in-settings-button"));
    i.classList.add(R.CONTROL_CLASS), i.role = "button";
    const n = O(".setting-item-validation-message");
    t.containerElement.appendChild(n);
    const s = {
      ...t,
      button: i,
      validationErrorMessageElement: n
    };
    return this.addSettingElementFocusHandler(s), s;
  }
  renderElement(e, t, i) {
    super.renderSettingElement(e, t, i);
  }
  renderValue(e, t, i) {
    const n = wc(e.setting.key), s = c("editLanguageSettingLabel", "Edit settings for {0}", n), r = e.setting.isLanguageTagSetting;
    t.button.textContent = r ? s : Xt.EDIT_IN_JSON_LABEL;
    const a = (l) => {
      r ? this._onApplyFilter.fire(`@${Me}${n}`) : this._onDidOpenSettings.fire(e.setting.key), l.preventDefault(), l.stopPropagation();
    };
    t.elementDisposables.add(_(t.button, I.CLICK, (l) => {
      a(l);
    })), t.elementDisposables.add(_(t.button, I.KEY_DOWN, (l) => {
      const d = new Je(l);
      (d.equals(10) || d.equals(3)) && a(l);
    })), this.renderValidations(e, t), r ? t.button.setAttribute("aria-label", s) : t.button.setAttribute("aria-label", `${Xt.EDIT_IN_JSON_LABEL}: ${e.setting.key}`);
  }
  renderValidations(e, t) {
    const i = e.isConfigured && ro(e.value, e.setting.type);
    if (i) {
      t.containerElement.classList.add("invalid-input"), t.validationErrorMessageElement.innerText = i;
      return;
    }
    t.containerElement.classList.remove("invalid-input");
  }
};
Xt.EDIT_IN_JSON_LABEL = c("editInSettingsJson", "Edit in settings.json");
let jn = Xt;
class Nl extends R {
  constructor() {
    super(...arguments), this.templateId = Mo;
  }
  renderTemplate(e) {
    const t = this.renderCommonTemplate(null, e, "list"), i = t.containerElement.querySelector(".setting-item-description"), n = O(".setting-item-validation-message");
    i.after(n);
    const s = this._instantiationService.createInstance(Cs, t.controlElement);
    s.domNode.classList.add(R.CONTROL_CLASS), t.toDispose.add(s);
    const r = {
      ...t,
      listWidget: s,
      validationErrorMessageElement: n
    };
    return this.addSettingElementFocusHandler(r), t.toDispose.add(s.onDidChangeList((a) => {
      var d;
      const l = this.computeNewList(r, a);
      (d = r.onChange) == null || d.call(r, l);
    })), r;
  }
  computeNewList(e, t) {
    var i, n, s, r;
    if (e.context) {
      let a = [];
      if (Array.isArray(e.context.scopeValue) ? a = [...e.context.scopeValue] : Array.isArray(e.context.value) && (a = [...e.context.value]), t.sourceIndex !== void 0) {
        const l = t.sourceIndex, d = t.targetIndex, g = a.splice(l, 1)[0];
        a.splice(d, 0, g);
      } else if (t.targetIndex !== void 0) {
        const l = ((i = t.item) == null ? void 0 : i.value.data.toString()) ?? "";
        !((n = t.item) != null && n.value.data) && t.originalItem.value.data && t.targetIndex > -1 ? a.splice(t.targetIndex, 1) : (s = t.item) != null && s.value.data && t.originalItem.value.data ? t.targetIndex > -1 ? a[t.targetIndex] = l : a.push(l) : (r = t.item) != null && r.value.data && !t.originalItem.value.data && t.targetIndex >= a.length && a.push(l);
      }
      return e.context.defaultValue && Array.isArray(e.context.defaultValue) && e.context.defaultValue.length === a.length && e.context.defaultValue.join() === a.join() ? void 0 : a;
    }
  }
  renderElement(e, t, i) {
    super.renderSettingElement(e, t, i);
  }
  renderValue(e, t, i) {
    const n = Cl(e), s = e.setting.enum ? vl(e) : void 0;
    t.listWidget.setValue(n, {
      showAddButton: kl(e, n),
      keySuggester: s
    }), t.context = e, t.elementDisposables.add(si(() => {
      t.listWidget.cancelEdit();
    })), t.onChange = (r) => {
      if (r && !Qi(e, t, r, !1)) {
        const a = e.setting.arrayItemType, l = Ti(a) ? r.map((d) => +d) : r;
        i(l);
      } else
        i(r);
    }, Qi(e, t, n.map((r) => r.value.data.toString()), !0);
  }
}
class Ko extends R {
  renderTemplateWithWidget(e, t) {
    t.domNode.classList.add(R.CONTROL_CLASS), e.toDispose.add(t);
    const i = e.containerElement.querySelector(".setting-item-description"), n = O(".setting-item-validation-message");
    i.after(n);
    const s = {
      ...e,
      validationErrorMessageElement: n
    };
    return t instanceof Eo ? s.objectCheckboxWidget = t : s.objectDropdownWidget = t, this.addSettingElementFocusHandler(s), e.toDispose.add(t.onDidChangeList((r) => {
      this.onDidChangeObject(s, r);
    })), s;
  }
  onDidChangeObject(e, t) {
    var n;
    const i = e.objectCheckboxWidget ?? e.objectDropdownWidget;
    if (e.context) {
      const s = typeof e.context.defaultValue == "object" ? e.context.defaultValue ?? {} : {}, r = typeof e.context.scopeValue == "object" ? e.context.scopeValue ?? {} : {}, a = {}, l = [];
      if (i.items.forEach((g, h) => {
        xe(t.item) && t.targetIndex === h ? (a[t.item.key.data] = t.item.value.data, l.push(t.item)) : (fe(t.item) || t.item.key.data !== g.key.data) && (a[g.key.data] = g.value.data, l.push(g));
      }), fe(t.item)) {
        delete a[t.originalItem.key.data];
        const g = l.findIndex((f) => f.key.data === t.originalItem.key.data), h = s[t.originalItem.key.data];
        fe(s[t.originalItem.key.data]) && g > -1 ? l.splice(g, 1) : g > -1 && (l[g].value.data = h);
      } else
        i.isItemNew(t.originalItem) && t.item.key.data !== "" && (a[t.item.key.data] = t.item.value.data, l.push(t.item));
      Object.entries(a).forEach(([g, h]) => {
        r[g] !== h && s[g] === h && delete a[g];
      });
      const d = Object.keys(a).length === 0 ? void 0 : a;
      e.objectCheckboxWidget ? e.objectCheckboxWidget.setValue(l) : e.objectDropdownWidget.setValue(l), (n = e.onChange) == null || n.call(e, d);
    }
  }
  renderElement(e, t, i) {
    super.renderSettingElement(e, t, i);
  }
}
class Wl extends Ko {
  constructor() {
    super(...arguments), this.templateId = Oo;
  }
  renderTemplate(e) {
    const t = this.renderCommonTemplate(null, e, "list"), i = this._instantiationService.createInstance(bl, t.controlElement);
    return this.renderTemplateWithWidget(t, i);
  }
  renderValue(e, t, i) {
    const n = xo(e), { key: s, objectProperties: r, objectPatternProperties: a, objectAdditionalProperties: l } = e.setting;
    t.objectDropdownWidget.setValue(n, {
      settingKey: s,
      showAddButton: l === !1 ? !Sl(Object.keys(r ?? {}), n) || xe(a) : !0,
      keySuggester: wl(e),
      valueSuggester: El(e)
    }), t.context = e, t.elementDisposables.add(si(() => {
      t.objectDropdownWidget.cancelEdit();
    })), t.onChange = (d) => {
      if (d && !Qi(e, t, d, !1)) {
        const g = xl(e, d);
        i(g);
      } else
        i(d);
    }, Qi(e, t, e.value, !0);
  }
}
class Fl extends Ko {
  constructor() {
    super(...arguments), this.templateId = No;
  }
  renderTemplate(e) {
    const t = this.renderCommonTemplate(null, e, "list"), i = this._instantiationService.createInstance(Eo, t.controlElement);
    return this.renderTemplateWithWidget(t, i);
  }
  onDidChangeObject(e, t) {
    e.context && (super.onDidChangeObject(e, t), this._onDidFocusSetting.fire(e.context));
  }
  renderValue(e, t, i) {
    const n = xo(e), { key: s } = e.setting;
    t.objectCheckboxWidget.setValue(n, {
      settingKey: s
    }), t.context = e, t.onChange = (r) => {
      i(r);
    };
  }
}
class Bo extends R {
  renderTemplate(e) {
    const t = this.renderCommonTemplate(null, e, "list"), i = this._instantiationService.createInstance(this.isExclude() ? fl : ml, t.controlElement);
    i.domNode.classList.add(R.CONTROL_CLASS), t.toDispose.add(i);
    const n = {
      ...t,
      includeExcludeWidget: i
    };
    return this.addSettingElementFocusHandler(n), t.toDispose.add(i.onDidChangeList((s) => this.onDidChangeIncludeExclude(n, s))), n;
  }
  onDidChangeIncludeExclude(e, t) {
    var i;
    if (e.context) {
      let s = function(r) {
        const a = Object.keys(r).sort((d, g) => d.localeCompare(g)), l = {};
        for (const d of a)
          l[d] = r[d];
        return l;
      };
      const n = { ...e.context.scopeValue };
      t.originalItem.value.data.toString() in e.context.defaultValue ? n[t.originalItem.value.data.toString()] = !1 : delete n[t.originalItem.value.data.toString()], (i = t.item) != null && i.value && (t.item.value.data.toString() in e.context.defaultValue && !t.item.sibling ? delete n[t.item.value.data.toString()] : n[t.item.value.data.toString()] = t.item.sibling ? { when: t.item.sibling } : !0), this._onDidChangeSetting.fire({
        key: e.context.setting.key,
        value: Object.keys(n).length === 0 ? void 0 : s(n),
        type: e.context.valueType,
        manualReset: !1,
        scope: e.context.setting.scope
      });
    }
  }
  renderElement(e, t, i) {
    super.renderSettingElement(e, t, i);
  }
  renderValue(e, t, i) {
    const n = yl(e);
    t.includeExcludeWidget.setValue(n), t.context = e, t.elementDisposables.add(si(() => {
      t.includeExcludeWidget.cancelEdit();
    }));
  }
}
class Pl extends Bo {
  constructor() {
    super(...arguments), this.templateId = Ro;
  }
  isExclude() {
    return !0;
  }
}
class Kl extends Bo {
  constructor() {
    super(...arguments), this.templateId = Ao;
  }
  isExclude() {
    return !1;
  }
}
const Bl = Ct({
  inputBackground: Ki,
  inputForeground: Bi,
  inputBorder: _t
});
class Vo extends R {
  constructor() {
    super(...arguments), this.MULTILINE_MAX_HEIGHT = 150;
  }
  renderTemplate(e, t) {
    const i = this.renderCommonTemplate(null, e, "text"), n = b(i.containerElement, O(".setting-item-validation-message")), s = {
      flexibleHeight: t,
      flexibleWidth: !1,
      flexibleMaxHeight: this.MULTILINE_MAX_HEIGHT,
      inputBoxStyles: Bl
    }, r = new Ge(i.controlElement, this._contextViewService, s);
    i.toDispose.add(r), i.toDispose.add(r.onDidChange((l) => {
      var d;
      (d = a.onChange) == null || d.call(a, l);
    })), i.toDispose.add(r), r.inputElement.classList.add(R.CONTROL_CLASS), r.inputElement.tabIndex = 0;
    const a = {
      ...i,
      inputBox: r,
      validationErrorMessageElement: n
    };
    return this.addSettingElementFocusHandler(a), a;
  }
  renderElement(e, t, i) {
    super.renderSettingElement(e, t, i);
  }
  renderValue(e, t, i) {
    t.onChange = void 0, t.inputBox.value = e.value, t.inputBox.setAriaLabel(e.setting.key), t.onChange = (n) => {
      Xi(e, t, !1) || i(n);
    }, Xi(e, t, !0);
  }
}
class Vl extends Vo {
  constructor() {
    super(...arguments), this.templateId = To;
  }
  renderTemplate(e) {
    const t = super.renderTemplate(e, !1);
    return t.toDispose.add(It(t.inputBox.inputElement, I.KEY_DOWN, (i) => {
      (i.equals(16) || i.equals(18)) && i.preventDefault();
    })), t;
  }
}
class Ul extends Vo {
  constructor() {
    super(...arguments), this.templateId = Io;
  }
  renderTemplate(e) {
    return super.renderTemplate(e, !0);
  }
  renderValue(e, t, i) {
    const n = (s) => {
      e.value = s, i(s);
    };
    super.renderValue(e, t, n), t.elementDisposables.add(t.inputBox.onDidHeightChange((s) => {
      t.containerElement.clientHeight && this._onDidChangeSettingHeight.fire({
        element: e,
        height: t.containerElement.clientHeight
      });
    })), t.inputBox.layout();
  }
}
class Gl extends R {
  constructor() {
    super(...arguments), this.templateId = Do;
  }
  renderTemplate(e) {
    const t = this.renderCommonTemplate(null, e, "enum"), i = Kr({
      selectBackground: ho,
      selectForeground: po,
      selectBorder: fo,
      selectListBorder: mo
    }), n = new Br([], 0, this._contextViewService, i, {
      useCustomDrawn: !(xt && Vr.pointerEvents)
    });
    t.toDispose.add(n), n.render(t.controlElement);
    const s = t.controlElement.querySelector("select");
    s && (s.classList.add(R.CONTROL_CLASS), s.tabIndex = 0), t.toDispose.add(n.onDidSelect((l) => {
      var d;
      (d = a.onChange) == null || d.call(a, l.index);
    }));
    const r = t.containerElement.insertBefore(O(".setting-item-enumDescription"), t.descriptionElement.nextSibling), a = {
      ...t,
      selectBox: n,
      selectElement: s,
      enumDescriptionElement: r
    };
    return this.addSettingElementFocusHandler(a), a;
  }
  renderElement(e, t, i) {
    super.renderSettingElement(e, t, i);
  }
  renderValue(e, t, i) {
    const n = e.setting.enumItemLabels ? [...e.setting.enumItemLabels] : [], s = e.setting.enumDescriptions ? [...e.setting.enumDescriptions] : [], r = [...e.setting.enum], a = e.setting.enumDescriptionsAreMarkdown, l = new U();
    t.toDispose.add(l);
    let d = !1;
    r.includes(e.defaultValue) || (r.unshift(e.defaultValue), s.unshift(""), n.unshift(""), d = !0);
    const g = Ys(String(e.defaultValue)), h = r.map(String).map(Ys).map((m, p) => {
      const y = s[p] && (a ? ks(s[p], !1) : s[p]);
      return {
        text: n[p] ? n[p] : m,
        detail: n[p] ? m : "",
        description: y,
        descriptionIsMarkdown: a,
        descriptionMarkdownActionHandler: {
          callback: (x) => {
            this._openerService.open(x).catch(Hr);
          },
          disposables: l
        },
        decoratorRight: m === g || d && p === 0 ? c("settings.Default", "default") : ""
      };
    });
    t.selectBox.setOptions(h), t.selectBox.setAriaLabel(e.setting.key);
    let f = r.indexOf(e.value);
    f === -1 && (f = 0), t.onChange = void 0, t.selectBox.select(f), t.onChange = (m) => {
      i(d && m === 0 ? e.defaultValue : r[m]);
    }, t.enumDescriptionElement.innerText = "";
  }
}
const jl = Ct({
  inputBackground: Kd,
  inputForeground: Bd,
  inputBorder: Vd
});
class Hl extends R {
  constructor() {
    super(...arguments), this.templateId = _o;
  }
  renderTemplate(e) {
    const t = super.renderCommonTemplate(null, e, "number"), i = b(t.containerElement, O(".setting-item-validation-message")), n = new Ge(
      t.controlElement,
      this._contextViewService,
      { type: "number", inputBoxStyles: jl }
    );
    t.toDispose.add(n), t.toDispose.add(n.onDidChange((r) => {
      var a;
      (a = s.onChange) == null || a.call(s, r);
    })), t.toDispose.add(n), n.inputElement.classList.add(R.CONTROL_CLASS), n.inputElement.tabIndex = 0;
    const s = {
      ...t,
      inputBox: n,
      validationErrorMessageElement: i
    };
    return this.addSettingElementFocusHandler(s), s;
  }
  renderElement(e, t, i) {
    super.renderSettingElement(e, t, i);
  }
  renderValue(e, t, i) {
    const n = e.valueType === "integer" || e.valueType === "nullable-integer" ? parseInt : parseFloat, s = e.valueType === "nullable-integer" || e.valueType === "nullable-number" ? (r) => r === "" ? null : n(r) : n;
    t.onChange = void 0, t.inputBox.value = typeof e.value == "number" ? e.value.toString() : "", t.inputBox.step = e.valueType.includes("integer") ? "1" : "any", t.inputBox.setAriaLabel(e.setting.key), t.onChange = (r) => {
      Xi(e, t, !1) || i(s(r));
    }, Xi(e, t, !0);
  }
}
class $l extends R {
  constructor() {
    super(...arguments), this.templateId = Lo;
  }
  renderTemplate(e) {
    e.classList.add("setting-item"), e.classList.add("setting-item-bool");
    const t = b(e, O(R.CONTENTS_SELECTOR));
    t.classList.add("settings-row-inner-container");
    const i = b(t, O(".setting-item-title")), n = b(i, O("span.setting-item-category")), s = b(i, O("span.setting-item-label")), r = new yt(s), a = this._instantiationService.createInstance(qi, i), l = b(t, O(".setting-item-value-description")), d = b(l, O(".setting-item-bool-control")), g = b(l, O(".setting-item-description")), h = b(t, O(".setting-item-modified-indicator"));
    h.title = c("modified", "The setting has been configured in the current scope.");
    const f = b(t, O(".setting-item-deprecation-message")), m = new U(), p = new Ur(
      { icon: he.check, actionClassName: "setting-value-checkbox", isChecked: !0, title: "", ...Gr }
    );
    d.appendChild(p.domNode), m.add(p), m.add(p.onChange(() => {
      E.onChange(p.checked);
    })), m.add(_(g, I.MOUSE_DOWN, (S) => {
      S.target.tagName.toLowerCase() !== "a" && (E.checkbox.checked = !E.checkbox.checked, E.onChange(p.checked)), dt.stop(S);
    })), p.domNode.classList.add(R.CONTROL_CLASS);
    const y = b(t, O(".setting-toolbar-container")), x = this.renderSettingToolbar(y);
    m.add(x);
    const E = {
      toDispose: m,
      elementDisposables: m.add(new U()),
      containerElement: t,
      categoryElement: n,
      labelElement: r,
      controlElement: d,
      checkbox: p,
      descriptionElement: g,
      deprecationWarningElement: f,
      indicatorsLabel: a,
      toolbar: x
    };
    return this.addSettingElementFocusHandler(E), m.add(_(d, "mousedown", (S) => S.stopPropagation())), m.add(_(i, I.MOUSE_ENTER, (S) => t.classList.add("mouseover"))), m.add(_(i, I.MOUSE_LEAVE, (S) => t.classList.remove("mouseover"))), E;
  }
  renderElement(e, t, i) {
    super.renderSettingElement(e, t, i);
  }
  renderValue(e, t, i) {
    t.onChange = void 0, t.checkbox.checked = e.value, t.checkbox.setTitle(e.setting.key), t.onChange = i;
  }
}
class zl extends R {
  constructor() {
    super(...arguments), this.templateId = Po;
  }
  renderTemplate(e) {
    const t = super.renderCommonTemplate(null, e, "extension-toggle"), i = new Qe(t.containerElement, {
      title: !1,
      ...Ze
    });
    i.element.classList.add("setting-item-extension-toggle-button"), i.label = c("showExtension", "Show Extension");
    const n = {
      ...t,
      actionButton: i
    };
    return this.addSettingElementFocusHandler(n), n;
  }
  renderElement(e, t, i) {
    super.renderSettingElement(e, t, i);
  }
  renderValue(e, t, i) {
    t.elementDisposables.clear();
    const n = e.setting.displayExtensionId;
    t.elementDisposables.add(t.actionButton.onDidClick(async () => {
      this._telemetryService.publicLog2("ManageExtensionClick", { extensionId: n }), this._commandService.executeCommand("extension.open", n);
    }));
  }
}
let Hn = class {
  constructor(e, t, i, n, s) {
    this._instantiationService = e, this._contextMenuService = t, this._contextViewService = i, this._userDataProfilesService = n, this._userDataSyncEnablementService = s, this._onDidChangeSetting = new T(), this.settingActions = [
      new re("settings.resetSetting", c("resetSettingLabel", "Reset Setting"), void 0, void 0, async (d) => {
        d instanceof te && (d.isUntrusted || this._onDidChangeSetting.fire({
          key: d.setting.key,
          value: void 0,
          type: d.setting.type,
          manualReset: !0,
          scope: d.setting.scope
        }));
      }),
      new mt(),
      this._instantiationService.createInstance(zn),
      this._instantiationService.createInstance(qn)
    ];
    const r = (d, g) => this.getActionsForSetting(d, g), a = (d) => [], l = [
      this._instantiationService.createInstance($l, this.settingActions, r),
      this._instantiationService.createInstance(Hl, this.settingActions, r),
      this._instantiationService.createInstance(Nl, this.settingActions, r),
      this._instantiationService.createInstance(jn, this.settingActions, r),
      this._instantiationService.createInstance(Vl, this.settingActions, r),
      this._instantiationService.createInstance(Ul, this.settingActions, r),
      this._instantiationService.createInstance(Pl, this.settingActions, r),
      this._instantiationService.createInstance(Kl, this.settingActions, r),
      this._instantiationService.createInstance(Gl, this.settingActions, r),
      this._instantiationService.createInstance(Wl, this.settingActions, r),
      this._instantiationService.createInstance(Fl, this.settingActions, r),
      this._instantiationService.createInstance(zl, [], a)
    ];
    this.onDidClickOverrideElement = le.any(...l.map((d) => d.onDidClickOverrideElement)), this.onDidChangeSetting = le.any(...l.map((d) => d.onDidChangeSetting), this._onDidChangeSetting.event), this.onDidOpenSettings = le.any(...l.map((d) => d.onDidOpenSettings)), this.onDidClickSettingLink = le.any(...l.map((d) => d.onDidClickSettingLink)), this.onDidFocusSetting = le.any(...l.map((d) => d.onDidFocusSetting)), this.onDidChangeSettingHeight = le.any(...l.map((d) => d.onDidChangeSettingHeight)), this.onApplyFilter = le.any(...l.map((d) => d.onApplyFilter)), this.allRenderers = [
      ...l,
      this._instantiationService.createInstance(Ol),
      this._instantiationService.createInstance(Gn)
    ];
  }
  getActionsForSetting(e, t) {
    const i = [];
    return this._userDataProfilesService.isEnabled() && e.scope !== 1 && t === 3 && i.push(this._instantiationService.createInstance(Jn, e)), this._userDataSyncEnablementService.isEnabled() && !e.disallowSyncIgnore && i.push(this._instantiationService.createInstance(Yn, e)), i.length && i.splice(0, 0, new mt()), i;
  }
  cancelSuggesters() {
    this._contextViewService.hideContextView();
  }
  showContextMenu(e, t) {
    const i = t.querySelector(".monaco-toolbar");
    i && this._contextMenuService.showContextMenu({
      getActions: () => this.settingActions,
      getAnchor: () => i,
      getActionsContext: () => e
    });
  }
  getSettingDOMElementForDOMElement(e) {
    const t = Mi(e, R.CONTENTS_CLASS);
    return t || null;
  }
  getDOMElementsForSettingKey(e, t) {
    return e.querySelectorAll(`[${R.SETTING_KEY_ATTR}="${t}"]`);
  }
  getKeyForDOMElementInSetting(e) {
    const t = this.getSettingDOMElementForDOMElement(e);
    return t && t.getAttribute(R.SETTING_KEY_ATTR);
  }
  getIdForDOMElementInSetting(e) {
    const t = this.getSettingDOMElementForDOMElement(e);
    return t && t.getAttribute(R.SETTING_ID_ATTR);
  }
};
Hn = v([
  u(0, $),
  u(1, Kt),
  u(2, ni),
  u(3, Ft),
  u(4, cn)
], Hn);
function Xi(o, e, t) {
  if (o.setting.validator) {
    const i = o.setting.validator(e.inputBox.value);
    if (i) {
      e.containerElement.classList.add("invalid-input"), e.validationErrorMessageElement.innerText = i;
      const n = c("validationError", "Validation Error.");
      return e.inputBox.inputElement.parentElement.setAttribute("aria-label", [n, i].join(" ")), t || ys(n + " " + i), !0;
    } else
      e.inputBox.inputElement.parentElement.removeAttribute("aria-label");
  }
  return e.containerElement.classList.remove("invalid-input"), !1;
}
function Qi(o, e, t, i) {
  if (e.containerElement.classList.add("invalid-input"), o.setting.validator) {
    const n = o.setting.validator(t);
    if (n && n !== "") {
      e.containerElement.classList.add("invalid-input"), e.validationErrorMessageElement.innerText = n;
      const s = c("validationError", "Validation Error.");
      return e.containerElement.setAttribute("aria-label", [o.setting.key, s, n].join(" ")), i || ys(s + " " + n), !0;
    } else
      e.containerElement.setAttribute("aria-label", o.setting.key), e.containerElement.classList.remove("invalid-input");
  }
  return !1;
}
function Uo(o) {
  for (let e = 0; e < o.childNodes.length; e++) {
    const t = o.childNodes.item(e);
    (t.tagName && t.tagName.toLowerCase()) === "img" ? o.removeChild(t) : Uo(t);
  }
}
function ks(o, e = !0) {
  return o.replace(/`#([^#\s`]+)#`|'#([^#\s']+)#'/g, (t, i, n) => {
    const s = i ?? n, r = wo(s), a = `${r.category}: ${r.label}`;
    return e ? `[${a}](#${s} "${s}")` : `"${a}"`;
  });
}
function Ys(o) {
  return o && o.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
}
let Zi = class {
  constructor(e, t) {
    this.viewState = e, this.environmentService = t;
  }
  filter(e, t) {
    var i;
    if (this.viewState.filterToCategory && e instanceof te && !this.settingContainedInGroup(e.setting, this.viewState.filterToCategory))
      return !1;
    if (e instanceof te && this.viewState.settingsTarget !== 3) {
      const n = !!this.environmentService.remoteAuthority;
      if (!e.matchesScope(this.viewState.settingsTarget, n))
        return !1;
    }
    return e instanceof X ? typeof e.count == "number" ? e.count > 0 : 2 : !(e instanceof xs && ((i = this.viewState.tagFilters) != null && i.size || this.viewState.filterToCategory));
  }
  settingContainedInGroup(e, t) {
    return t.children.some((i) => i instanceof X ? this.settingContainedInGroup(e, i) : i instanceof te ? i.setting.key === e.key : !1);
  }
};
Zi = v([
  u(1, Bt)
], Zi);
class ql extends Ec {
  getTemplateId(e) {
    if (e instanceof X)
      return Fo;
    if (e instanceof te)
      return e.valueType === w.ExtensionToggle ? Po : e.isConfigured && ro(e.value, e.setting.type) ? Ii : e.valueType === w.Boolean ? Lo : e.valueType === w.Integer || e.valueType === w.Number || e.valueType === w.NullableInteger || e.valueType === w.NullableNumber ? _o : e.valueType === w.MultilineString ? Io : e.valueType === w.String ? To : e.valueType === w.Enum ? Do : e.valueType === w.Array ? Mo : e.valueType === w.Exclude ? Ro : e.valueType === w.Include ? Ao : e.valueType === w.Object ? Oo : e.valueType === w.BooleanObject ? No : (e.valueType === w.LanguageTag, Ii);
    if (e instanceof xs)
      return Wo;
    throw new Error("unknown element type: " + e);
  }
  hasDynamicHeight(e) {
    return !(e instanceof X);
  }
  estimateHeight(e) {
    return e instanceof X ? 42 : e instanceof te && e.valueType === w.Boolean ? 78 : 104;
  }
}
class Yl extends xc {
  isCollapsible(e) {
    return !1;
  }
  setCollapsed(e, t, i) {
    return !1;
  }
}
class Jl {
  constructor(e, t, i) {
    this.configurationService = e, this.languageService = t, this.userDataProfilesService = i;
  }
  getAriaLabel(e) {
    if (e instanceof te) {
      const t = [];
      if (t.push(`${e.displayCategory} ${e.displayLabel}.`), e.isConfigured) {
        const s = c("settings.Modified", "Modified.");
        t.push(s);
      }
      const i = Qd(e, this.configurationService, this.userDataProfilesService, this.languageService);
      i.length && t.push(`${i}.`);
      const n = Cc({ value: ks(e.description, !1) });
      return n.length && t.push(n), t.join(" ");
    } else
      return e instanceof X ? e.label : e.id;
  }
  getWidgetAriaLabel() {
    return c("settings", "Settings");
  }
}
let $n = class extends zr {
  constructor(e, t, i, n, s, r, a, l, d) {
    super("SettingsTree", e, new ql(), i, {
      horizontalScrolling: !1,
      supportDynamicHeights: !0,
      identityProvider: {
        getId(g) {
          return g.id;
        }
      },
      accessibilityProvider: new Jl(r, l, d),
      styleController: (g) => new qr(Yr(e), g),
      filter: a.createInstance(Zi, t),
      smoothScrolling: r.getValue("workbench.list.smoothScrolling"),
      multipleSelectionSupport: !1,
      findWidgetEnabled: !1,
      renderIndentGuides: Jr.None
    }, a, n, s, r), this.getHTMLElement().classList.add("settings-editor-tree"), this.style(Xr({
      listBackground: q,
      listActiveSelectionBackground: q,
      listActiveSelectionForeground: pt,
      listFocusAndSelectionBackground: q,
      listFocusAndSelectionForeground: pt,
      listFocusBackground: q,
      listFocusForeground: pt,
      listHoverForeground: pt,
      listHoverBackground: q,
      listHoverOutline: q,
      listFocusOutline: q,
      listInactiveSelectionBackground: q,
      listInactiveSelectionForeground: pt,
      listInactiveFocusBackground: q,
      listInactiveFocusOutline: q,
      treeIndentGuidesStroke: void 0,
      treeInactiveIndentGuidesStroke: void 0
    })), this.disposables.add(r.onDidChangeConfiguration((g) => {
      g.affectsConfiguration("workbench.list.smoothScrolling") && this.updateOptions({
        smoothScrolling: r.getValue("workbench.list.smoothScrolling")
      });
    }));
  }
  createModel(e, t, i) {
    return new Yl(e, t, i);
  }
};
$n = v([
  u(3, Ke),
  u(4, $r),
  u(5, gt),
  u(6, $),
  u(7, Pe),
  u(8, Ft)
], $n);
var $e;
let zn = ($e = class extends re {
  constructor(e) {
    super($e.ID, $e.LABEL), this.clipboardService = e;
  }
  async run(e) {
    return e && await this.clipboardService.writeText(e.setting.key), Promise.resolve(void 0);
  }
}, $e.ID = "settings.copySettingId", $e.LABEL = c("copySettingIdLabel", "Copy Setting ID"), $e);
zn = v([
  u(0, ms)
], zn);
var ze;
let qn = (ze = class extends re {
  constructor(e) {
    super(ze.ID, ze.LABEL), this.clipboardService = e;
  }
  async run(e) {
    if (e) {
      const t = `"${e.setting.key}": ${JSON.stringify(e.value, void 0, "  ")}`;
      await this.clipboardService.writeText(t);
    }
    return Promise.resolve(void 0);
  }
}, ze.ID = "settings.copySettingAsJSON", ze.LABEL = c("copySettingAsJSONLabel", "Copy Setting as JSON"), ze);
qn = v([
  u(0, ms)
], qn);
var qe;
let Yn = (qe = class extends re {
  constructor(e, t) {
    super(qe.ID, qe.LABEL), this.setting = e, this.configService = t, this._register(le.filter(t.onDidChangeConfiguration, (i) => i.affectsConfiguration("settingsSync.ignoredSettings"))(() => this.update())), this.update();
  }
  async update() {
    const e = Vn(Ri(), this.configService);
    this.checked = !e.includes(this.setting.key);
  }
  async run() {
    let e = [...this.configService.getValue("settingsSync.ignoredSettings")];
    e = e.filter((s) => s !== this.setting.key && s !== `-${this.setting.key}`);
    const i = Ri().includes(this.setting.key), n = !this.checked;
    return n && i && e.push(`-${this.setting.key}`), !n && !i && e.push(this.setting.key), this.configService.updateValue("settingsSync.ignoredSettings", e.length ? e : void 0, 2), Promise.resolve(void 0);
  }
}, qe.ID = "settings.stopSyncingSetting", qe.LABEL = c("stopSyncingSetting", "Sync This Setting"), qe);
Yn = v([
  u(1, ge)
], Yn);
var Ye;
let Jn = (Ye = class extends re {
  constructor(e, t) {
    super(Ye.ID, Ye.LABEL), this.setting = e, this.configService = t, this._register(le.filter(t.onDidChangeConfiguration, (i) => i.affectsConfiguration(it))(() => this.update())), this.update();
  }
  update() {
    const e = this.configService.getValue(it);
    this.checked = e.includes(this.setting.key);
  }
  async run() {
    var i, n;
    const e = this.configService.getValue(it) ?? [];
    this.checked ? e.splice(e.indexOf(this.setting.key), 1) : e.push(this.setting.key);
    const t = Nt(e);
    this.checked ? (await this.configService.updateValue(this.setting.key, (i = this.configService.inspect(this.setting.key).application) == null ? void 0 : i.value, 3), await this.configService.updateValue(it, t.length ? t : void 0, 3)) : (await this.configService.updateValue(it, t.length ? t : void 0, 3), await this.configService.updateValue(this.setting.key, (n = this.configService.inspect(this.setting.key).userLocal) == null ? void 0 : n.value, 3));
  }
}, Ye.ID = "settings.applyToAllProfiles", Ye.LABEL = c("applyToAllProfiles", "Apply Setting to all Profiles"), Ye);
Jn = v([
  u(1, gt)
], Jn);
const Js = W;
let Xn = class {
  constructor(e, t) {
    this._viewState = e, this.environmentService = t, this._currentSearchModel = null;
  }
  get settingsTreeRoot() {
    return this._settingsTreeRoot;
  }
  set settingsTreeRoot(e) {
    this._settingsTreeRoot = e, this.update();
  }
  get currentSearchModel() {
    return this._currentSearchModel;
  }
  set currentSearchModel(e) {
    this._currentSearchModel = e, this.update();
  }
  get children() {
    return this._settingsTreeRoot.children;
  }
  update() {
    this._settingsTreeRoot && this.updateGroupCount(this._settingsTreeRoot);
  }
  updateGroupCount(e) {
    e.children.forEach((i) => {
      i instanceof X && this.updateGroupCount(i);
    });
    const t = e.children.filter((i) => i instanceof X).reduce((i, n) => i + n.count, 0);
    e.count = t + this.getGroupCount(e);
  }
  getGroupCount(e) {
    return e.children.filter((t) => {
      if (!(t instanceof te) || this._currentSearchModel && !this._currentSearchModel.root.containsSetting(t.setting.key))
        return !1;
      const i = !!this.environmentService.remoteAuthority;
      return t.matchesScope(this._viewState.settingsTarget, i) && t.matchesAllTags(this._viewState.tagFilters) && t.matchesAnyFeature(this._viewState.featureFilters) && t.matchesAnyExtension(this._viewState.extensionFilters) && t.matchesAnyId(this._viewState.idFilters);
    }).length;
  }
};
Xn = v([
  u(1, Bt)
], Xn);
const Go = "settings.toc.entry";
class Xl {
  constructor() {
    this.templateId = Go;
  }
  renderTemplate(e) {
    return {
      labelElement: b(e, Js(".settings-toc-entry")),
      countElement: b(e, Js(".settings-toc-count"))
    };
  }
  renderElement(e, t, i) {
    const n = e.element, s = n.count, r = n.label;
    i.labelElement.textContent = r, i.labelElement.title = r, s ? i.countElement.textContent = ` (${s})` : i.countElement.textContent = "";
  }
  disposeTemplate(e) {
  }
}
class Ql {
  getTemplateId(e) {
    return Go;
  }
  getHeight(e) {
    return 22;
  }
}
function jo(o, e) {
  const t = o.children.filter((i) => i instanceof X);
  return Qr.map(t, (i) => {
    const n = i.children.some((s) => s instanceof X);
    return {
      element: i,
      collapsed: void 0,
      collapsible: n,
      children: i instanceof X ? jo(i) : void 0
    };
  });
}
class Zl {
  getWidgetAriaLabel() {
    return c({
      key: "settingsTOC",
      comment: ["A label for the table of contents for the full settings list"]
    }, "Settings Table of Contents");
  }
  getAriaLabel(e) {
    return e && e instanceof X ? c("groupRowAriaLabel", "{0}, group", e.label) : "";
  }
  getAriaLevel(e) {
    let t = 1;
    for (; e instanceof X && e.parent; )
      t++, e = e.parent;
    return t;
  }
}
let Qn = class extends zr {
  constructor(e, t, i, n, s, r) {
    const l = {
      filter: r.createInstance(Zi, t),
      multipleSelectionSupport: !1,
      identityProvider: {
        getId(d) {
          return d.id;
        }
      },
      styleController: (d) => new qr(Yr(e), d),
      accessibilityProvider: r.createInstance(Zl),
      collapseByDefault: !0,
      horizontalScrolling: !1,
      hideTwistiesOfChildlessElements: !0,
      renderIndentGuides: Jr.None
    };
    super("SettingsTOC", e, new Ql(), [new Xl()], l, r, i, n, s), this.style(Xr({
      listBackground: q,
      listFocusOutline: Ut,
      listActiveSelectionBackground: q,
      listActiveSelectionForeground: rt,
      listFocusAndSelectionBackground: q,
      listFocusAndSelectionForeground: rt,
      listFocusBackground: q,
      listFocusForeground: Gs,
      listHoverForeground: Gs,
      listHoverBackground: q,
      listInactiveSelectionBackground: q,
      listInactiveSelectionForeground: rt,
      listInactiveFocusBackground: q,
      listInactiveFocusOutline: q,
      treeIndentGuidesStroke: void 0,
      treeInactiveIndentGuidesStroke: void 0
    }));
  }
};
Qn = v([
  u(2, Ke),
  u(3, $r),
  u(4, ge),
  u(5, $)
], Qn);
let Zn = class extends kc {
  constructor(e, t, i, n) {
    super(e, { getActions: () => this.getActions() }, n, {
      actionRunner: t,
      classNames: e.class,
      anchorAlignmentProvider: () => 1,
      menuAsChild: !0
    }), this.searchWidget = i, this.suggestController = as.get(this.searchWidget.inputWidget);
  }
  render(e) {
    super.render(e);
  }
  doSearchWidgetAction(e, t) {
    this.searchWidget.setValue(this.searchWidget.getValue().trimEnd() + " " + e), this.searchWidget.focus(), t && this.suggestController && this.suggestController.triggerSuggest();
  }
  createAction(e, t, i, n, s) {
    return {
      id: e,
      label: t,
      tooltip: i,
      class: void 0,
      enabled: !0,
      checked: !1,
      run: () => {
        this.doSearchWidgetAction(n, s);
      }
    };
  }
  createToggleAction(e, t, i, n) {
    const r = this.searchWidget.getValue().split(" ").includes(n);
    return {
      id: e,
      label: t,
      tooltip: i,
      class: void 0,
      enabled: !0,
      checked: r,
      run: () => {
        if (r) {
          const a = this.searchWidget.getValue().split(" ").filter((l) => l !== n).join(" ");
          this.searchWidget.setValue(a);
        } else {
          const a = this.searchWidget.getValue().trimEnd(), l = a ? a + " " + n : n;
          this.searchWidget.setValue(l);
        }
        this.searchWidget.focus();
      }
    };
  }
  getActions() {
    return [
      this.createToggleAction("modifiedSettingsSearch", c("modifiedSettingsSearch", "Modified"), c("modifiedSettingsSearchTooltip", "Add or remove modified settings filter"), `@${ot}`),
      this.createAction("extSettingsSearch", c("extSettingsSearch", "Extension ID..."), c("extSettingsSearchTooltip", "Add extension ID filter"), `@${Ci}`, !0),
      this.createAction("featuresSettingsSearch", c("featureSettingsSearch", "Feature..."), c("featureSettingsSearchTooltip", "Add feature filter"), `@${de}`, !0),
      this.createAction("tagSettingsSearch", c("tagSettingsSearch", "Tag..."), c("tagSettingsSearchTooltip", "Add tag filter"), `@${Tc}`, !0),
      this.createAction("langSettingsSearch", c("langSettingsSearch", "Language..."), c("langSettingsSearchTooltip", "Add language ID filter"), `@${Me}`, !0),
      this.createToggleAction("onlineSettingsSearch", c("onlineSettingsSearch", "Online services"), c("onlineSettingsSearchTooltip", "Show settings for online services"), "@tag:usesOnlineServices"),
      this.createToggleAction("policySettingsSearch", c("policySettingsSearch", "Policy services"), c("policySettingsSearchTooltip", "Show settings for policy services"), `@${Tt}`)
    ];
  }
};
Zn = v([
  u(3, Kt)
], Zn);
function Ho(o) {
  return Qr.map(o.children, (e) => ({
    element: e,
    children: e instanceof X ? Ho(e) : void 0
  }));
}
const se = W, pn = c("SearchSettings.AriaLabel", "Search settings"), eg = "settingsEditorState";
var k;
let pe = (k = class extends mr {
  static shouldSettingUpdateFast(e) {
    return Array.isArray(e) ? !1 : e === w.Enum || e === w.Array || e === w.BooleanObject || e === w.Object || e === w.Complex || e === w.Boolean || e === w.Exclude || e === w.Include;
  }
  constructor(e, t, i, n, s, r, a, l, d, g, h, f, m, p, y, x, E, S, A, C, Z) {
    super(k.ID, e, n, g), this.configurationService = t, this.preferencesService = s, this.instantiationService = r, this.preferencesSearchService = a, this.logService = l, this.storageService = g, this.editorGroupService = h, this.userDataSyncWorkbenchService = f, this.userDataSyncEnablementService = m, this.workspaceTrustManagementService = p, this.extensionService = y, this.languageService = x, this.workbenchAssignmentService = S, this.productService = A, this.environmentService = C, this.extensionGalleryService = Z, this.searchInProgress = null, this.pendingSettingUpdate = null, this._searchResultModel = null, this.searchResultLabel = null, this.lastSyncedLabel = null, this._currentFocusContext = 0, this.hasWarnedMissingSettings = !1, this.tocFocusedElement = null, this.treeFocusedElement = null, this.settingsTreeScrollTop = 0, this.installedExtensionIds = [], this.delayedFilterLogging = new be(1e3), this.localSearchDelayer = new be(300), this.remoteSearchThrottle = new _c(200), this.viewState = { settingsTarget: 3 }, this.settingFastUpdateDelayer = new be(k.SETTING_UPDATE_FAST_DEBOUNCE), this.settingSlowUpdateDelayer = new be(k.SETTING_UPDATE_SLOW_DEBOUNCE), this.searchInputDelayer = new be(k.SEARCH_DEBOUNCE), this.updatedConfigSchemaDelayer = new be(k.CONFIG_SCHEMA_UPDATE_DELAYER), this.inSettingsEditorContextKey = Le.bindTo(d), this.searchFocusContextKey = jt.bindTo(d), this.tocRowFocused = Zr.bindTo(d), this.settingRowFocused = Cn.bindTo(d), this.scheduledRefreshes = /* @__PURE__ */ new Map(), this.editorMemento = this.getEditorMemento(h, i, eg), this._register(t.onDidChangeConfiguration((z) => {
      z.source !== 7 && this.onConfigUpdate(z.affectedKeys);
    })), this._register(p.onDidChangeTrust(() => {
      var z;
      (z = this.searchResultModel) == null || z.updateWorkspaceTrust(p.isWorkspaceTrusted()), this.settingsTreeModel && (this.settingsTreeModel.updateWorkspaceTrust(p.isWorkspaceTrusted()), this.renderTree());
    })), this._register(t.onDidChangeRestrictedSettings((z) => {
      z.default.length && this.currentSettingsModel && this.updateElementsByKey(new Set(z.default));
    })), this.modelDisposables = this._register(new U()), k.SUGGESTIONS.includes(`@${Me}`) || k.SUGGESTIONS.push(`@${Me}`), E.getInstalled().then((z) => {
      this.installedExtensionIds = z.filter((ie) => ie.manifest && ie.manifest.contributes && ie.manifest.contributes.configuration).map((ie) => ie.identifier.id);
    });
  }
  get minimumWidth() {
    return k.EDITOR_MIN_WIDTH;
  }
  get maximumWidth() {
    return Number.POSITIVE_INFINITY;
  }
  get minimumHeight() {
    return 180;
  }
  set minimumWidth(e) {
  }
  set maximumWidth(e) {
  }
  get currentSettingsModel() {
    return this.searchResultModel || this.settingsTreeModel;
  }
  get searchResultModel() {
    return this._searchResultModel;
  }
  set searchResultModel(e) {
    this._searchResultModel = e, this.rootElement.classList.toggle("search-mode", !!this._searchResultModel);
  }
  get focusedSettingDOMElement() {
    const e = this.settingsTree.getFocus()[0];
    if (e instanceof te)
      return this.settingRenderers.getDOMElementsForSettingKey(this.settingsTree.getHTMLElement(), e.setting.key)[0];
  }
  get currentFocusContext() {
    return this._currentFocusContext;
  }
  createEditor(e) {
    e.setAttribute("tabindex", "-1"), this.rootElement = b(e, se(".settings-editor", { tabindex: "-1" })), this.createHeader(this.rootElement), this.createBody(this.rootElement), this.addCtrlAInterceptor(this.rootElement), this.updateStyles();
  }
  async setInput(e, t, i, n) {
    if (this.inSettingsEditorContextKey.set(!0), await super.setInput(e, t, i, n), await gr(0), !this.input)
      return;
    const s = await this.input.resolve(t);
    if (!(n.isCancellationRequested || !(s instanceof Ni))) {
      if (this.modelDisposables.clear(), this.modelDisposables.add(s.onDidChangeGroups(() => {
        this.updatedConfigSchemaDelayer.trigger(() => {
          this.onConfigUpdate(void 0, !1, !0);
        });
      })), this.defaultSettingsEditorModel = s, t = t || wi({}), !this.viewState.settingsTarget || !this.settingsTargetsWidget.settingsTarget) {
        const r = t.viewState && t.viewState.settingsTarget;
        !t.target && !r && (t.target = 3);
      }
      this._setOptions(t), this.onConfigUpdate(void 0, !0).then(() => {
        this._register(e.onWillDispose(() => {
          this.searchWidget.setValue("");
        })), this.updateTreeScrollSync();
      });
    }
  }
  restoreCachedState() {
    const e = this.group && this.input && this.editorMemento.loadEditorState(this.group, this.input);
    if (e && typeof e.target == "object" && (e.target = Y.revive(e.target)), e) {
      const t = e.target;
      this.settingsTargetsWidget.settingsTarget = t, this.viewState.settingsTarget = t, this.searchWidget.setValue(e.searchQuery);
    }
    return this.input && this.editorMemento.clearEditorState(this.input, this.group), xi(e);
  }
  getViewState() {
    return this.viewState;
  }
  setOptions(e) {
    super.setOptions(e), e && this._setOptions(e);
  }
  _setOptions(e) {
    e.focusSearch && !xt && this.focusSearch();
    const t = e.viewState ? e.viewState : void 0, i = (t == null ? void 0 : t.query) ?? e.query;
    i !== void 0 && (this.searchWidget.setValue(i), this.viewState.query = i);
    const n = e.folderUri ?? (t == null ? void 0 : t.settingsTarget) ?? e.target;
    n && (this.settingsTargetsWidget.settingsTarget = n, this.viewState.settingsTarget = n);
  }
  clearInput() {
    this.inSettingsEditorContextKey.set(!1), super.clearInput();
  }
  layout(e) {
    if (this.dimension = e, !this.isVisible())
      return;
    this.layoutSplitView(e);
    const i = Math.min(this.headerContainer.clientWidth, e.width) - 24 * 2 - 10 - this.countElement.clientWidth - this.controlsElement.clientWidth - 12;
    this.searchWidget.layout(new hs(i, 20)), this.rootElement.classList.toggle("narrow-width", e.width < k.NARROW_TOTAL_WIDTH);
  }
  focus() {
    if (this._currentFocusContext === 0)
      xt || this.focusSearch();
    else if (this._currentFocusContext === 3) {
      const e = this.focusedSettingDOMElement;
      if (e) {
        const t = e.querySelector(R.CONTROL_SELECTOR);
        if (t) {
          t.focus();
          return;
        }
      }
    } else
      this._currentFocusContext === 2 ? this.settingsTree.domFocus() : this._currentFocusContext === 1 && this.tocTree.domFocus();
  }
  setEditorVisible(e, t) {
    super.setEditorVisible(e, t), e || setTimeout(() => {
      this.searchWidget.onHide();
    }, 0);
  }
  focusSettings(e = !1) {
    if (this.settingsTree.getFocus().length || this.settingsTree.focusFirst(), this.settingsTree.domFocus(), e) {
      const i = this.settingsTree.getHTMLElement().querySelector(`.focused ${R.CONTROL_SELECTOR}`);
      i && i.focus();
    }
  }
  focusTOC() {
    this.tocTree.domFocus();
  }
  showContextMenu() {
    const e = this.settingsTree.getFocus()[0], t = this.focusedSettingDOMElement;
    t && e instanceof te && this.settingRenderers.showContextMenu(e, t);
  }
  focusSearch(e, t = !0) {
    e && this.searchWidget && this.searchWidget.setValue(e), this.searchWidget.focus(t);
  }
  clearSearchResults() {
    this.searchWidget.setValue(""), this.focusSearch();
  }
  clearSearchFilters() {
    const t = this.searchWidget.getValue().split(" ").filter((i) => i.length && !k.SUGGESTIONS.some((n) => i.startsWith(n)));
    this.searchWidget.setValue(t.join(" "));
  }
  updateInputAriaLabel() {
    let e = pn;
    this.searchResultLabel && (e += `. ${this.searchResultLabel}`), this.lastSyncedLabel && (e += `. ${this.lastSyncedLabel}`), this.searchWidget.updateAriaLabel(e);
  }
  createHeader(e) {
    this.headerContainer = b(e, se(".settings-header"));
    const t = b(this.headerContainer, se(".search-container")), i = new re(eo, c("clearInput", "Clear Settings Search Input"), oe.asClassName(uo), !1, async () => this.clearSearchResults()), n = new re(Dc, c("filterInput", "Filter Settings"), oe.asClassName(Nd));
    this.searchWidget = this._register(this.instantiationService.createInstance(Pi, `${k.ID}.searchbox`, t, {
      triggerCharacters: ["@", ":"],
      provideResults: (l) => {
        const d = l.split(/\s/g);
        return d[d.length - 1].startsWith(`@${Me}`) ? this.languageService.getRegisteredLanguageIds().map((h) => `@${Me}${h} `).sort().filter((h) => !l.includes(h)) : d[d.length - 1].startsWith(`@${Ci}`) ? this.installedExtensionIds.map((h) => `@${Ci}${h} `).sort().filter((h) => !l.includes(h)) : d[d.length - 1].startsWith("@") ? k.SUGGESTIONS.filter((g) => !l.includes(g)).map((g) => g.endsWith(":") ? g : g + " ") : [];
      }
    }, pn, "settingseditor:searchinput" + k.NUM_INSTANCES++, {
      placeholderText: pn,
      focusContextKey: this.searchFocusContextKey,
      styleOverrides: {
        inputBorder: _t
      }
    })), this._register(this.searchWidget.onDidFocus(() => {
      this._currentFocusContext = 0;
    })), this.countElement = b(t, W(".settings-count-widget.monaco-count-badge.long")), this.countElement.style.backgroundColor = J(ds), this.countElement.style.color = J(ls), this.countElement.style.border = `1px solid ${J(gs)}`, this._register(this.searchWidget.onInputDidChange(() => {
      const l = this.searchWidget.getValue();
      i.enabled = !!l, this.searchInputDelayer.trigger(() => this.onSearchInputChanged());
    }));
    const s = b(this.headerContainer, se(".settings-header-controls"));
    s.style.borderColor = J(Pd);
    const r = b(s, se(".settings-target-container"));
    if (this.settingsTargetsWidget = this._register(this.instantiationService.createInstance(An, r, { enableRemoteSettings: !0 })), this.settingsTargetsWidget.settingsTarget = 3, this.settingsTargetsWidget.onDidTargetChange((l) => this.onDidSettingsTargetChange(l)), this._register(_(r, I.KEY_DOWN, (l) => {
      new Je(l).keyCode === 18 && this.focusSettings();
    })), this.userDataSyncWorkbenchService.enabled && this.userDataSyncEnablementService.canToggleEnablement()) {
      const l = this._register(this.instantiationService.createInstance(es, s));
      this._register(l.onDidChangeLastSyncedLabel((d) => {
        this.lastSyncedLabel = d, this.updateInputAriaLabel();
      }));
    }
    this.controlsElement = b(t, W(".settings-clear-widget")), this._register(new on(this.controlsElement, {
      animated: !1,
      actionViewItemProvider: (l) => {
        if (l.id === n.id)
          return this.instantiationService.createInstance(Zn, l, this.actionRunner, this.searchWidget);
      }
    })).push([i, n], { label: !1, icon: !0 });
  }
  onDidSettingsTargetChange(e) {
    this.viewState.settingsTarget = e, this.onConfigUpdate(void 0, !0);
  }
  onDidClickSetting(e, t) {
    var s;
    const i = (s = this.currentSettingsModel.getElementsByName(e.targetKey)) == null ? void 0 : s[0];
    let n = !1;
    if (i) {
      let r = 0.5;
      try {
        const a = this.settingsTree.getRelativeTop(e.source);
        a !== null && (r = a);
      } catch {
      }
      this.viewState.filterToCategory && e.source.displayCategory !== i.displayCategory && this.tocTree.setFocus([]);
      try {
        this.settingsTree.reveal(i, r);
      } catch {
        n = !0;
      }
      if (!n) {
        setTimeout(() => {
          this.settingsTree.setFocus([i]);
        }, 50);
        const a = this.settingRenderers.getDOMElementsForSettingKey(this.settingsTree.getHTMLElement(), e.targetKey);
        if (a && a[0]) {
          const l = a[0].querySelector(R.CONTROL_SELECTOR);
          l && l.focus();
        }
      }
    }
    !t && (!i || n) && this.triggerSearch("").then(() => {
      this.searchWidget.setValue(""), this.onDidClickSetting(e, !0);
    });
  }
  switchToSettingsFile() {
    const e = hn(this.searchWidget.getValue()).query;
    return this.openSettingsFile({ query: e });
  }
  async openSettingsFile(e) {
    var n;
    const t = this.settingsTargetsWidget.settingsTarget, i = { jsonEditor: !0, ...e };
    if (t === 3)
      return e != null && e.revealSetting && ((n = ue.as(_e.Configuration).getConfigurationProperties()[e == null ? void 0 : e.revealSetting.key]) == null ? void 0 : n.scope) === 1 ? this.preferencesService.openApplicationSettings(i) : this.preferencesService.openUserSettings(i);
    if (t === 4)
      return this.preferencesService.openRemoteSettings(i);
    if (t === 5)
      return this.preferencesService.openWorkspaceSettings(i);
    if (Y.isUri(t))
      return this.preferencesService.openFolderSettings({ folderUri: t, ...i });
  }
  createBody(e) {
    this.bodyContainer = b(e, se(".settings-body")), this.noResultsMessage = b(this.bodyContainer, se(".no-results-message")), this.noResultsMessage.innerText = c("noResults", "No Settings Found"), this.clearFilterLinkContainer = se("span.clear-search-filters"), this.clearFilterLinkContainer.textContent = " - ";
    const t = b(this.clearFilterLinkContainer, se("a.pointer.prominent", { tabindex: 0 }, c("clearSearchFilters", "Clear Filters")));
    this._register(_(t, I.CLICK, (s) => {
      dt.stop(s, !1), this.clearSearchFilters();
    })), b(this.noResultsMessage, this.clearFilterLinkContainer), this.noResultsMessage.style.color = J(Lc), this.tocTreeContainer = se(".settings-toc-container"), this.settingsTreeContainer = se(".settings-tree-container"), this.createTOC(this.tocTreeContainer), this.createSettingsTree(this.settingsTreeContainer), this.splitView = new Mc(this.bodyContainer, {
      orientation: 1,
      proportionalLayout: !0
    });
    const i = this.storageService.getNumber("settingsEditor2.splitViewWidth", 0, k.TOC_RESET_WIDTH);
    this.splitView.addView({
      onDidChange: le.None,
      element: this.tocTreeContainer,
      minimumSize: k.TOC_MIN_WIDTH,
      maximumSize: Number.POSITIVE_INFINITY,
      layout: (s, r, a) => {
        this.tocTreeContainer.style.width = `${s}px`, this.tocTree.layout(a, s);
      }
    }, i, void 0, !0), this.splitView.addView({
      onDidChange: le.None,
      element: this.settingsTreeContainer,
      minimumSize: k.EDITOR_MIN_WIDTH,
      maximumSize: Number.POSITIVE_INFINITY,
      layout: (s, r, a) => {
        this.settingsTreeContainer.style.width = `${s}px`, this.settingsTree.layout(a, s);
      }
    }, Rc.Distribute, void 0, !0), this._register(this.splitView.onDidSashReset(() => {
      const s = this.splitView.getViewSize(0) + this.splitView.getViewSize(1);
      this.splitView.resizeView(0, k.TOC_RESET_WIDTH), this.splitView.resizeView(1, s - k.TOC_RESET_WIDTH);
    })), this._register(this.splitView.onDidSashChange(() => {
      const s = this.splitView.getViewSize(0);
      this.storageService.store("settingsEditor2.splitViewWidth", s, 0, 0);
    }));
    const n = this.theme.getColor(js);
    this.splitView.style({ separatorBorder: n });
  }
  addCtrlAInterceptor(e) {
    this._register(It(e, I.KEY_DOWN, (t) => {
      t.keyCode === 31 && (pr ? t.metaKey : t.ctrlKey) && t.target.tagName !== "TEXTAREA" && t.target.tagName !== "INPUT" && (t.browserEvent.stopPropagation(), t.browserEvent.preventDefault());
    }));
  }
  createTOC(e) {
    this.tocTreeModel = this.instantiationService.createInstance(Xn, this.viewState), this.tocTree = this._register(this.instantiationService.createInstance(Qn, b(e, se(".settings-toc-wrapper", {
      role: "navigation",
      "aria-label": c("settings", "Settings")
    })), this.viewState)), this._register(this.tocTree.onDidFocus(() => {
      this._currentFocusContext = 1;
    })), this._register(this.tocTree.onDidChangeFocus((t) => {
      var n;
      const i = xi((n = t.elements) == null ? void 0 : n[0]);
      this.tocFocusedElement !== i && (this.tocFocusedElement = i, this.tocTree.setSelection(i ? [i] : []), this.searchResultModel ? this.viewState.filterToCategory !== i && (this.viewState.filterToCategory = rs(i), this.renderTree(void 0, !0), this.settingsTree.scrollTop = 0) : i && (!t.browserEvent || !t.browserEvent.fromScroll) && (this.settingsTree.reveal(i, 0), this.settingsTree.setFocus([i])));
    })), this._register(this.tocTree.onDidFocus(() => {
      this.tocRowFocused.set(!0);
    })), this._register(this.tocTree.onDidBlur(() => {
      this.tocRowFocused.set(!1);
    }));
  }
  applyFilter(e) {
    if (this.searchWidget && !this.searchWidget.getValue().includes(e)) {
      const t = `${e} ${this.searchWidget.getValue().trimStart()}`;
      this.focusSearch(t, !1);
    }
  }
  removeLanguageFilters() {
    if (this.searchWidget && this.searchWidget.getValue().includes(`@${Me}`)) {
      const t = this.searchWidget.getValue().split(" ").filter((i) => !i.startsWith(`@${Me}`)).join(" ");
      this.focusSearch(t, !1);
    }
  }
  createSettingsTree(e) {
    this.settingRenderers = this.instantiationService.createInstance(Hn), this._register(this.settingRenderers.onDidChangeSetting((t) => this.onDidChangeSetting(t.key, t.value, t.type, t.manualReset, t.scope))), this._register(this.settingRenderers.onDidOpenSettings((t) => {
      this.openSettingsFile({ revealSetting: { key: t, edit: !0 } });
    })), this._register(this.settingRenderers.onDidClickSettingLink((t) => this.onDidClickSetting(t))), this._register(this.settingRenderers.onDidFocusSetting((t) => {
      this.settingsTree.setFocus([t]), this._currentFocusContext = 3, this.settingRowFocused.set(!1);
    })), this._register(this.settingRenderers.onDidChangeSettingHeight((t) => {
      const { element: i, height: n } = t;
      try {
        this.settingsTree.updateElementHeight(i, n);
      } catch {
      }
    })), this._register(this.settingRenderers.onApplyFilter((t) => this.applyFilter(t))), this._register(this.settingRenderers.onDidClickOverrideElement((t) => {
      this.removeLanguageFilters(), t.language && this.applyFilter(`@${Me}${t.language}`), t.scope === "workspace" ? this.settingsTargetsWidget.updateTarget(5) : t.scope === "user" ? this.settingsTargetsWidget.updateTarget(3) : t.scope === "remote" && this.settingsTargetsWidget.updateTarget(4), this.applyFilter(`@${Ms}${t.settingKey}`);
    })), this.settingsTree = this._register(this.instantiationService.createInstance($n, e, this.viewState, this.settingRenderers.allRenderers)), this._register(this.settingsTree.onDidScroll(() => {
      this.settingsTree.scrollTop !== this.settingsTreeScrollTop && (this.settingsTreeScrollTop = this.settingsTree.scrollTop, setTimeout(() => {
        this.updateTreeScrollSync();
      }, 0));
    })), this._register(this.settingsTree.onDidFocus(() => {
      var i;
      const t = (i = document.activeElement) == null ? void 0 : i.classList;
      t && t.contains("monaco-list") && t.contains("settings-editor-tree") && (this._currentFocusContext = 2, this.settingRowFocused.set(!0), this.treeFocusedElement ?? (this.treeFocusedElement = xi(this.settingsTree.firstVisibleElement)), this.treeFocusedElement && (this.treeFocusedElement.tabbable = !0));
    })), this._register(this.settingsTree.onDidBlur(() => {
      this.settingRowFocused.set(!1), this.treeFocusedElement = null;
    })), this._register(this.settingsTree.onDidChangeFocus((t) => {
      const i = t.elements[0];
      this.treeFocusedElement !== i && (this.treeFocusedElement && (this.treeFocusedElement.tabbable = !1), this.treeFocusedElement = i, this.treeFocusedElement && (this.treeFocusedElement.tabbable = !0), this.settingsTree.setSelection(i ? [i] : []));
    }));
  }
  onDidChangeSetting(e, t, i, n, s) {
    const a = hn(this.searchWidget.getValue()).languageFilter;
    (n || this.pendingSettingUpdate && this.pendingSettingUpdate.key !== e) && this.updateChangedSetting(e, t, n, a, s), this.pendingSettingUpdate = { key: e, value: t, languageFilter: a }, k.shouldSettingUpdateFast(i) ? this.settingFastUpdateDelayer.trigger(() => this.updateChangedSetting(e, t, n, a, s)) : this.settingSlowUpdateDelayer.trigger(() => this.updateChangedSetting(e, t, n, a, s));
  }
  updateTreeScrollSync() {
    if (this.settingRenderers.cancelSuggesters(), this.searchResultModel || !this.tocTreeModel)
      return;
    const e = this.settingsTree.firstVisibleElement, t = e instanceof te ? e.parent : e instanceof X ? e : null;
    let i = !0;
    try {
      this.tocTree.getNode(t);
    } catch {
      i = !1;
    }
    if (i && t && this.tocTree.getSelection()[0] !== t) {
      const n = this.getAncestors(t);
      n.forEach((a) => this.tocTree.expand(a)), this.tocTree.reveal(t);
      const s = this.tocTree.getRelativeTop(t);
      if (typeof s != "number")
        return;
      this.tocTree.collapseAll(), n.forEach((a) => this.tocTree.expand(a)), s < 0 || s > 1 ? this.tocTree.reveal(t) : this.tocTree.reveal(t, s), this.tocTree.expand(t), this.tocTree.setSelection([t]);
      const r = new KeyboardEvent("keydown");
      r.fromScroll = !0, this.tocTree.setFocus([t], r);
    }
  }
  getAncestors(e) {
    const t = [];
    for (; e.parent; )
      e.parent.id !== "root" && t.push(e.parent), e = e.parent;
    return t.reverse();
  }
  updateChangedSetting(e, t, i, n, s) {
    const r = this.settingsTargetsWidget.settingsTarget, a = Y.isUri(r) ? r : void 0, l = (a ? 6 : r) ?? 3, d = { resource: a, overrideIdentifiers: n ? [n] : void 0 }, h = l === 5 || l === 6 || !!n, f = h ? i : t === void 0, m = this.configurationService.inspect(e, d);
    return !h && m.defaultValue === t && (t = void 0), this.configurationService.updateValue(e, t, d, l, { handleDirtyFile: "save" }).then(() => {
      const p = this.searchWidget.getValue();
      p.includes(`@${ot}`) && this.refreshTOCTree(), this.renderTree(e, f);
      const y = {
        key: e,
        query: p,
        searchResults: this.searchResultModel && this.searchResultModel.getUniqueResults(),
        rawResults: this.searchResultModel && this.searchResultModel.getRawResults(),
        showConfiguredOnly: !!this.viewState.tagFilters && this.viewState.tagFilters.has(ot),
        isReset: typeof t > "u",
        settingsTarget: this.settingsTargetsWidget.settingsTarget
      };
      return this.reportModifiedSetting(y);
    });
  }
  reportModifiedSetting(e) {
    this.pendingSettingUpdate = null;
    let t, i, n;
    if (e.searchResults) {
      const a = e.searchResults[1], l = e.searchResults[0], d = l.filterMatches.findIndex((g) => g.setting.key === e.key);
      if (t = d >= 0 ? "local" : "remote", n = d >= 0 ? d : a && a.filterMatches.findIndex((g) => g.setting.key === e.key) + l.filterMatches.length, this.searchResultModel) {
        const g = this.searchResultModel.getRawResults();
        if (g[1]) {
          const h = g[1].filterMatches.findIndex((f) => f.setting.key === e.key);
          i = h >= 0 ? h : void 0;
        }
      }
    }
    const s = e.settingsTarget === 3 ? "user" : e.settingsTarget === 4 ? "user_remote" : e.settingsTarget === 5 ? "workspace" : "folder", r = {
      key: e.key,
      groupId: t,
      nlpIndex: i,
      displayIndex: n,
      showConfiguredOnly: e.showConfiguredOnly,
      isReset: e.isReset,
      target: s
    };
    this.telemetryService.publicLog2("settingsEditor.settingModified", r);
  }
  onSearchModeToggled() {
    this.rootElement.classList.remove("no-toc-search"), this.configurationService.getValue("workbench.settings.settingsSearchTocBehavior") === "hide" && this.rootElement.classList.toggle("no-toc-search", !!this.searchResultModel);
  }
  scheduleRefresh(e, t = "") {
    if (t && this.scheduledRefreshes.has(t))
      return;
    t || ($t(this.scheduledRefreshes.values()), this.scheduledRefreshes.clear());
    const i = us(e);
    this.scheduledRefreshes.set(t, i), i.onDidBlur(() => {
      i.dispose(), this.scheduledRefreshes.delete(t), this.onConfigUpdate(/* @__PURE__ */ new Set([t]));
    });
  }
  addOrRemoveManageExtensionSetting(e, t, i) {
    const n = i.filter((r) => {
      var l;
      const a = (l = r.extensionInfo) == null ? void 0 : l.id.toLowerCase();
      return a === e.stableExtensionId.toLowerCase() || a === e.prereleaseExtensionId.toLowerCase();
    }), s = e.displayExtensionId;
    if (n.length) {
      if (n.length >= 2) {
        const r = n.findIndex((a) => a.sections.length === 1 && a.sections[0].settings.length === 1 && a.sections[0].settings[0].displayExtensionId);
        r !== -1 && i.splice(r, 1);
      }
    } else {
      const r = {
        sections: [{
          settings: [e]
        }],
        id: s,
        title: e.extensionGroupTitle,
        titleRange: F,
        range: F,
        extensionInfo: {
          id: s,
          displayName: t == null ? void 0 : t.displayName
        }
      };
      return i.push(r), r;
    }
  }
  async onConfigUpdate(e, t = !1, i = !1) {
    var f, m;
    if (e && this.settingsTreeModel)
      return this.updateElementsByKey(e);
    if (!this.defaultSettingsEditorModel)
      return;
    const n = this.defaultSettingsEditorModel.settingsGroups.slice(1), s = n.filter((p) => !p.extensionInfo), r = $s(bo, s, this.logService), a = r.tree;
    if (r.leftoverSettings.size && !this.hasWarnedMissingSettings) {
      const p = [];
      r.leftoverSettings.forEach((y) => {
        p.push(y.key);
      }), this.logService.warn(`SettingsEditor2: Settings not included in settingsLayout.ts: ${p.join(", ")}`), this.hasWarnedMissingSettings = !0;
    }
    const l = [], d = await Wr(this.workbenchAssignmentService, this.environmentService, this.productService);
    if (d && n.filter((p) => p.extensionInfo).length)
      for (const p in d.settingsEditorRecommendedExtensions) {
        const y = d.settingsEditorRecommendedExtensions[p].onSettingsEditorOpen.prerelease, x = typeof y == "string" && this.productService.quality !== "stable" ? y : p, [E] = await this.extensionGalleryService.getExtensions([{ id: x }], Rs.None);
        if (!E)
          continue;
        let S;
        const A = await this.extensionGalleryService.getManifest(E, Rs.None), C = (f = A == null ? void 0 : A.contributes) == null ? void 0 : f.configuration;
        Array.isArray(C) ? C.length === 1 && (S = C[0].title) : S = C == null ? void 0 : C.title;
        const Z = (E == null ? void 0 : E.displayName) ?? (E == null ? void 0 : E.name) ?? x, z = `${p}.manageExtension`, ie = {
          range: F,
          key: z,
          keyRange: F,
          value: null,
          valueRange: F,
          description: [(E == null ? void 0 : E.description) || ""],
          descriptionIsMarkdown: !1,
          descriptionRanges: [],
          title: Z,
          scope: 3,
          type: "null",
          displayExtensionId: x,
          stableExtensionId: p,
          prereleaseExtensionId: typeof y == "string" ? y : p,
          extensionGroupTitle: S ?? Z
        }, Se = this.addOrRemoveManageExtensionSetting(ie, E, n);
        Se && l.push(Se);
      }
    a.children.push(await Il(this.extensionService, n.filter((p) => p.extensionInfo)));
    const g = await zd(this.workbenchAssignmentService, this.environmentService, this.productService), h = $s(g, n, this.logService);
    if (a.children.unshift(h.tree), d && this.defaultSettingsEditorModel.setAdditionalGroups(l), !this.workspaceTrustManagementService.isWorkspaceTrusted() && (this.viewState.settingsTarget instanceof Y || this.viewState.settingsTarget === 5)) {
      const p = Tl(n, this.viewState.settingsTarget, this.viewState.languageFilter, this.configurationService);
      p.length && a.children.unshift({
        id: "workspaceTrust",
        label: c("settings require trust", "Workspace Trust"),
        settings: p
      });
    }
    if ((m = this.searchResultModel) == null || m.updateChildren(), this.settingsTreeModel) {
      if (this.settingsTreeModel.update(a), i && this.searchResultModel)
        return await this.onSearchInputChanged();
      this.refreshTOCTree(), this.renderTree(void 0, t);
    } else {
      this.settingsTreeModel = this.instantiationService.createInstance(Yi, this.viewState, this.workspaceTrustManagementService.isWorkspaceTrusted()), this.settingsTreeModel.update(a), this.tocTreeModel.settingsTreeRoot = this.settingsTreeModel.root;
      const p = this.viewState.query ? void 0 : this.restoreCachedState();
      p != null && p.searchQuery || this.searchWidget.getValue() ? await this.onSearchInputChanged() : (this.refreshTOCTree(), this.refreshTree(), this.tocTree.collapseAll());
    }
  }
  updateElementsByKey(e) {
    e.size ? (this.searchResultModel && e.forEach((t) => this.searchResultModel.updateElementsByName(t)), this.settingsTreeModel && e.forEach((t) => this.settingsTreeModel.updateElementsByName(t)), this.renderTree()) : this.renderTree();
  }
  getActiveControlInSettingsTree() {
    return document.activeElement && Pr(document.activeElement, this.settingsTree.getHTMLElement()) ? document.activeElement : null;
  }
  renderTree(e, t = !1) {
    if (!t && e && this.scheduledRefreshes.has(e)) {
      this.updateModifiedLabelForKey(e);
      return;
    }
    if (this.contextViewFocused()) {
      const s = document.querySelector(".context-view");
      s && this.scheduleRefresh(s, e);
      return;
    }
    const i = this.getActiveControlInSettingsTree(), n = i && this.settingRenderers.getSettingDOMElementForDOMElement(i);
    if (n && !t)
      if (e) {
        if (n.getAttribute(R.SETTING_KEY_ATTR) === e && n.parentElement && !n.parentElement.classList.contains("setting-item-list")) {
          this.updateModifiedLabelForKey(e), this.scheduleRefresh(n, e);
          return;
        }
      } else {
        this.scheduleRefresh(n);
        return;
      }
    if (this.renderResultCountMessages(), e) {
      const s = this.currentSettingsModel.getElementsByName(e);
      if (s && s.length)
        this.refreshTree();
      else
        return;
    } else
      this.refreshTree();
  }
  contextViewFocused() {
    return !!Mi(document.activeElement, "context-view");
  }
  refreshTree() {
    this.isVisible() && this.settingsTree.setChildren(null, Ho(this.currentSettingsModel.root));
  }
  refreshTOCTree() {
    this.isVisible() && (this.tocTreeModel.update(), this.tocTree.setChildren(null, jo(this.tocTreeModel)));
  }
  updateModifiedLabelForKey(e) {
    const t = this.currentSettingsModel.getElementsByName(e), i = t && t[0] && t[0].isConfigured, n = this.settingRenderers.getDOMElementsForSettingKey(this.settingsTree.getHTMLElement(), e);
    n && n[0] && n[0].classList.toggle("is-configured", !!i);
  }
  async onSearchInputChanged() {
    if (!this.currentSettingsModel)
      return;
    const e = this.searchWidget.getValue().trim();
    this.viewState.query = e, this.delayedFilterLogging.cancel(), await this.triggerSearch(e.replace(/\u203A/g, " ")), e && this.searchResultModel && this.delayedFilterLogging.trigger(() => this.reportFilteringUsed(this.searchResultModel.getUniqueResults()));
  }
  parseSettingFromJSON(e) {
    const t = e.match(/"([a-zA-Z.]+)": /);
    return t && t[1];
  }
  triggerSearch(e) {
    if (this.viewState.tagFilters = /* @__PURE__ */ new Set(), this.viewState.extensionFilters = /* @__PURE__ */ new Set(), this.viewState.featureFilters = /* @__PURE__ */ new Set(), this.viewState.idFilters = /* @__PURE__ */ new Set(), this.viewState.languageFilter = void 0, e) {
      const t = hn(e);
      e = t.query, t.tags.forEach((i) => this.viewState.tagFilters.add(i)), t.extensionFilters.forEach((i) => this.viewState.extensionFilters.add(i)), t.featureFilters.forEach((i) => this.viewState.featureFilters.add(i)), t.idFilters.forEach((i) => this.viewState.idFilters.add(i)), this.viewState.languageFilter = t.languageFilter;
    }
    return this.settingsTargetsWidget.updateLanguageFilterIndicators(this.viewState.languageFilter), e && e !== "@" ? (e = this.parseSettingFromJSON(e) || e, this.triggerFilterPreferences(e)) : (this.viewState.tagFilters.size || this.viewState.extensionFilters.size || this.viewState.featureFilters.size || this.viewState.idFilters.size || this.viewState.languageFilter ? this.searchResultModel = this.createFilterModel() : this.searchResultModel = null, this.localSearchDelayer.cancel(), this.remoteSearchThrottle.cancel(), this.searchInProgress && (this.searchInProgress.cancel(), this.searchInProgress.dispose(), this.searchInProgress = null), this.tocTree.setFocus([]), this.viewState.filterToCategory = void 0, this.tocTreeModel.currentSearchModel = this.searchResultModel, this.onSearchModeToggled(), this.searchResultModel ? (this.tocTree.setSelection([]), this.tocTree.expandAll(), this.refreshTOCTree(), this.renderResultCountMessages(), this.refreshTree()) : (this.tocTree.collapseAll(), this.refreshTOCTree(), this.renderResultCountMessages(), this.refreshTree()), Promise.resolve());
  }
  createFilterModel() {
    const e = this.instantiationService.createInstance(Ji, this.viewState, this.workspaceTrustManagementService.isWorkspaceTrusted()), t = {
      filterMatches: []
    };
    for (const i of this.defaultSettingsEditorModel.settingsGroups.slice(1))
      for (const n of i.sections)
        for (const s of n.settings)
          t.filterMatches.push({ setting: s, matches: [], matchType: Ht.None, score: 0 });
    return e.setResult(0, t), e;
  }
  reportFilteringUsed(e) {
    const t = e[1], i = t == null ? void 0 : t.metadata, n = {
      nlpResult: i == null ? void 0 : i.duration
    }, s = {}, r = e[0];
    r && (s.filterResult = r.filterMatches.length), t && (s.nlpResult = t.filterMatches.length);
    const a = i == null ? void 0 : i.requestCount, l = {
      "durations.nlpResult": n.nlpResult,
      "counts.nlpResult": s.nlpResult,
      "counts.filterResult": s.filterResult,
      requestCount: a
    };
    this.telemetryService.publicLog2("settingsEditor.filter", l);
  }
  triggerFilterPreferences(e) {
    this.searchInProgress && (this.searchInProgress.cancel(), this.searchInProgress = null);
    const t = this.searchInProgress = new Ac();
    return this.localSearchDelayer.trigger(() => t && !t.token.isCancellationRequested ? this.localFilterPreferences(e).then((i) => {
      i && !i.exactMatch && this.remoteSearchThrottle.trigger(() => t && !t.token.isCancellationRequested ? this.remoteSearchPreferences(e, this.searchInProgress.token) : Promise.resolve());
    }) : Promise.resolve());
  }
  localFilterPreferences(e, t) {
    const i = this.preferencesSearchService.getLocalSearchProvider(e);
    return this.filterOrSearchPreferences(e, 0, i, t);
  }
  remoteSearchPreferences(e, t) {
    const i = this.preferencesSearchService.getRemoteSearchProvider(e), n = this.preferencesSearchService.getRemoteSearchProvider(e, !0);
    return Promise.all([
      this.filterOrSearchPreferences(e, 1, i, t),
      this.filterOrSearchPreferences(e, 2, n, t)
    ]).then(() => {
    });
  }
  filterOrSearchPreferences(e, t, i, n) {
    return this._filterOrSearchPreferencesModel(e, this.defaultSettingsEditorModel, i, n).then((s) => n && n.isCancellationRequested ? null : (this.searchResultModel ? (this.searchResultModel.setResult(t, s), this.tocTreeModel.update()) : (this.searchResultModel = this.instantiationService.createInstance(Ji, this.viewState, this.workspaceTrustManagementService.isWorkspaceTrusted()), this.searchResultModel.setResult(t, s), this.tocTreeModel.currentSearchModel = this.searchResultModel, this.onSearchModeToggled()), t === 0 && (this.tocTree.setFocus([]), this.viewState.filterToCategory = void 0, this.tocTree.expandAll()), this.settingsTree.scrollTop = 0, this.refreshTOCTree(), this.renderTree(void 0, !0), s));
  }
  renderResultCountMessages() {
    if (this.currentSettingsModel)
      if (this.clearFilterLinkContainer.style.display = this.viewState.tagFilters && this.viewState.tagFilters.size > 0 ? "initial" : "none", this.searchResultModel) {
        const e = this.searchResultModel.getUniqueResultsCount();
        let t;
        switch (e) {
          case 0:
            t = c("noResults", "No Settings Found");
            break;
          case 1:
            t = c("oneResult", "1 Setting Found");
            break;
          default:
            t = c("moreThanOneResult", "{0} Settings Found", e);
        }
        this.searchResultLabel = t, this.updateInputAriaLabel(), this.countElement.innerText = t, ys(t), this.countElement.style.display !== "block" && (this.countElement.style.display = "block", this.layout(this.dimension)), this.rootElement.classList.toggle("no-results", e === 0), this.splitView.el.style.visibility = e === 0 ? "hidden" : "visible";
      } else {
        this.countElement.style.display !== "none" && (this.searchResultLabel = null, this.updateInputAriaLabel(), this.countElement.style.display = "none", this.layout(this.dimension)), this.rootElement.classList.remove("no-results"), this.splitView.el.style.visibility = "visible";
        return;
      }
  }
  _filterOrSearchPreferencesModel(e, t, i, n) {
    return (i ? i.searchModel(t, n) : Promise.resolve(null)).then(void 0, (r) => Oc(r) ? Promise.reject(r) : null);
  }
  layoutSplitView(e) {
    const t = e.height - 97;
    this.splitView.el.style.height = `${t}px`, this.splitView.layout(this.bodyContainer.clientWidth, t);
    const i = this.splitView.isViewVisible(0), n = this.bodyContainer.clientWidth >= k.NARROW_TOTAL_WIDTH;
    this.splitView.setViewVisible(0, n), !i && n && this.bodyContainer.clientWidth >= k.EDITOR_MIN_WIDTH + k.TOC_RESET_WIDTH && this.splitView.resizeView(0, k.TOC_RESET_WIDTH), this.splitView.style({
      separatorBorder: n ? this.theme.getColor(js) : ft.transparent
    });
  }
  saveState() {
    if (this.isVisible()) {
      const e = this.searchWidget.getValue().trim(), t = this.settingsTargetsWidget.settingsTarget;
      this.group && this.input && this.editorMemento.saveEditorState(this.group, this.input, { searchQuery: e, target: t });
    } else
      this.group && this.input && this.editorMemento.clearEditorState(this.input, this.group);
    super.saveState();
  }
}, k.ID = "workbench.editor.settings2", k.NUM_INSTANCES = 0, k.SEARCH_DEBOUNCE = 200, k.SETTING_UPDATE_FAST_DEBOUNCE = 200, k.SETTING_UPDATE_SLOW_DEBOUNCE = 1e3, k.CONFIG_SCHEMA_UPDATE_DELAYER = 500, k.TOC_MIN_WIDTH = 100, k.TOC_RESET_WIDTH = 200, k.EDITOR_MIN_WIDTH = 500, k.NARROW_TOTAL_WIDTH = k.TOC_RESET_WIDTH + k.EDITOR_MIN_WIDTH, k.SUGGESTIONS = [
  `@${ot}`,
  "@tag:notebookLayout",
  "@tag:notebookOutputLayout",
  `@tag:${Fr}`,
  `@tag:${Ic}`,
  "@tag:sync",
  "@tag:usesOnlineServices",
  "@tag:telemetry",
  "@tag:accessibility",
  `@${Ms}`,
  `@${Ci}`,
  `@${de}scm`,
  `@${de}explorer`,
  `@${de}search`,
  `@${de}debug`,
  `@${de}extensions`,
  `@${de}terminal`,
  `@${de}task`,
  `@${de}problems`,
  `@${de}output`,
  `@${de}comments`,
  `@${de}remote`,
  `@${de}timeline`,
  `@${de}notebook`,
  `@${Tt}`
], k);
pe = v([
  u(0, fs),
  u(1, gt),
  u(2, Nc),
  u(3, an),
  u(4, B),
  u(5, $),
  u(6, to),
  u(7, Wc),
  u(8, Ke),
  u(9, Rr),
  u(10, nr),
  u(11, Fc),
  u(12, cn),
  u(13, Nr),
  u(14, nn),
  u(15, Pe),
  u(16, dr),
  u(17, Pc),
  u(18, ii),
  u(19, Kc),
  u(20, Bc)
], pe);
let es = class extends Q {
  constructor(e, t, i, n) {
    super(), this.commandService = t, this.userDataSyncService = i, this.userDataSyncEnablementService = n, this._onDidChangeLastSyncedLabel = this._register(new T()), this.onDidChangeLastSyncedLabel = this._onDidChangeLastSyncedLabel.event;
    const s = b(e, se(".settings-right-controls")), r = b(s, se(".turn-on-sync"));
    this.turnOnSyncButton = this._register(new Qe(r, { title: !0, ...Ze })), this.lastSyncedLabel = b(s, se(".last-synced-label")), bi(this.lastSyncedLabel), this.turnOnSyncButton.enabled = !0, this.turnOnSyncButton.label = c("turnOnSyncButton", "Turn on Settings Sync"), bi(this.turnOnSyncButton.element), this._register(this.turnOnSyncButton.onDidClick(async () => {
      await this.commandService.executeCommand("workbench.userDataSync.actions.turnOn");
    })), this.updateLastSyncedTime(), this._register(this.userDataSyncService.onDidChangeLastSyncTime(() => {
      this.updateLastSyncedTime();
    })), this._register(new Vc()).cancelAndSet(() => this.updateLastSyncedTime(), 60 * 1e3), this.update(), this._register(this.userDataSyncService.onDidChangeStatus(() => {
      this.update();
    })), this._register(this.userDataSyncEnablementService.onDidChangeEnablement(() => {
      this.update();
    }));
  }
  updateLastSyncedTime() {
    const e = this.userDataSyncService.lastSyncTime;
    let t;
    if (typeof e == "number") {
      const i = Uc(e, !0, void 0, !0);
      t = c("lastSyncedLabel", "Last synced: {0}", i);
    } else
      t = "";
    this.lastSyncedLabel.textContent = t, this._onDidChangeLastSyncedLabel.fire(t);
  }
  update() {
    this.userDataSyncService.status !== "uninitialized" && (this.userDataSyncEnablementService.isEnabled() || this.userDataSyncService.status !== "idle" ? (As(this.lastSyncedLabel), bi(this.turnOnSyncButton.element)) : (bi(this.lastSyncedLabel), As(this.turnOnSyncButton.element)));
  }
};
es = v([
  u(1, kt),
  u(2, Gc),
  u(3, cn)
], es);
const fn = ue.as(jc.JSONContribution);
let ts = class {
  constructor(e, t, i, n, s, r, a, l, d) {
    this.modelService = e, this.textModelResolverService = t, this.preferencesService = i, this.languageService = n, this.userDataProfileService = s, this.workspaceService = r, this.configurationService = a, this.editorResolverService = l, this.textEditorService = d, this.settingsListener = this.configurationService.onDidChangeConfiguration((g) => {
      (g.affectsConfiguration(vn) || g.affectsConfiguration(wn)) && this.handleSettingsEditorRegistration();
    }), this.handleSettingsEditorRegistration(), this.start();
  }
  handleSettingsEditorRegistration() {
    $t(this.editorOpeningListener), (this.configurationService.getValue(vn) || this.configurationService.getValue(wn)) && (this.editorOpeningListener = this.editorResolverService.registerEditor("**/settings.json", {
      id: ar.ID,
      label: c("splitSettingsEditorLabel", "Split Settings Editor"),
      priority: zc.builtin
    }, {}, {
      createEditorInput: ({ resource: e, options: t }) => {
        if (Xe(e, this.userDataProfileService.currentProfile.settingsResource))
          return { editor: this.preferencesService.createSplitJsonEditorInput(3, e), options: t };
        const i = this.workspaceService.getWorkbenchState();
        if (i === 2) {
          const n = this.workspaceService.getWorkspace().folders;
          if (Xe(e, n[0].toResource(Di)))
            return { editor: this.preferencesService.createSplitJsonEditorInput(5, e), options: t };
        } else if (i === 3) {
          const n = this.workspaceService.getWorkspace().folders;
          for (const s of n)
            if (Xe(e, s.toResource(Di)))
              return { editor: this.preferencesService.createSplitJsonEditorInput(6, e), options: t };
        }
        return { editor: this.textEditorService.createTextEditor({ resource: e }), options: t };
      }
    }));
  }
  start() {
    this.textModelResolverService.registerTextModelContentProvider("vscode", {
      provideTextContent: async (e) => e.scheme !== "vscode" ? null : e.authority === "schemas" ? this.getSchemaModel(e) : this.preferencesService.resolveModel(e)
    });
  }
  getSchemaModel(e) {
    let t = fn.getSchemaContributions().schemas[e.toString()] ?? {};
    const i = JSON.stringify(t), n = this.languageService.createById("jsonc"), s = this.modelService.createModel(i, n, e), r = new U();
    return r.add(fn.onDidChangeSchema((a) => {
      a === e.toString() && (t = fn.getSchemaContributions().schemas[e.toString()], s.setValue(JSON.stringify(t)));
    })), r.add(s.onWillDispose(() => r.dispose())), s;
  }
  dispose() {
    $t(this.editorOpeningListener), $t(this.settingsListener);
  }
};
ts = v([
  u(0, sn),
  u(1, rr),
  u(2, B),
  u(3, Pe),
  u(4, Wt),
  u(5, lt),
  u(6, ge),
  u(7, Hc),
  u(8, or)
], ts);
const tg = ue.as(_e.Configuration);
tg.registerConfiguration({
  ...$c,
  properties: {
    "workbench.settings.enableNaturalLanguageSearch": {
      type: "boolean",
      description: c(
        "enableNaturalLanguageSettingsSearch",
        "Controls whether to enable the natural language search mode for settings. The natural language search is provided by a Microsoft online service."
      ),
      default: !0,
      scope: 3,
      tags: ["usesOnlineServices"]
    },
    "workbench.settings.settingsSearchTocBehavior": {
      type: "string",
      enum: ["hide", "filter"],
      enumDescriptions: [
        c(
          "settingsSearchTocBehavior.hide",
          "Hide the Table of Contents while searching."
        ),
        c(
          "settingsSearchTocBehavior.filter",
          "Filter the Table of Contents to just categories that have matching settings. Clicking a category will filter the results to that category."
        )
      ],
      description: c(
        "settingsSearchTocBehavior",
        "Controls the behavior of the settings editor Table of Contents while searching."
      ),
      default: "filter",
      scope: 3
    }
  }
});
const ig = "settings.action.search", ng = "settings.action.focusSettingsFile", sg = "settings.action.focusSettingsFromSearch", rg = "settings.action.focusSettingsList", og = "settings.action.focusTOC", ag = "settings.action.focusSettingControl", cg = "settings.action.focusLevelUp", dg = "settings.switchToJSON", lg = "settings.filterByOnline", gg = "workbench.action.openSettings", ug = "settings.filterByTelemetry";
ue.as(io.EditorPane).registerEditorPane(no.create(pe, pe.ID, c("settingsEditor2", "Settings Editor 2")), [
  new zt(Oi)
]);
ue.as(io.EditorPane).registerEditorPane(no.create(K, K.ID, c("keybindingsEditor", "Keybindings Editor")), [
  new zt(Ai)
]);
const mn = { value: c("openSettings2", "Open Settings (UI)"), original: "Open Settings (UI)" }, hg = { value: c("openUserSettingsJson", "Open User Settings (JSON)"), original: "Open User Settings (JSON)" }, ce = { value: c("preferences", "Preferences"), original: "Preferences" };
function bn(o) {
  return ld(o) ? o : void 0;
}
function pg(o) {
  return We(o) ? o : void 0;
}
function et(o) {
  var t, i;
  ss(o) || (o = {});
  let e = {
    focusSearch: bn(o == null ? void 0 : o.focusSearch),
    openToSide: bn(o == null ? void 0 : o.openToSide),
    query: pg(o == null ? void 0 : o.query)
  };
  return We((t = o == null ? void 0 : o.revealSetting) == null ? void 0 : t.key) && (e = {
    ...e,
    revealSetting: {
      key: o.revealSetting.key,
      edit: bn((i = o.revealSetting) == null ? void 0 : i.edit)
    }
  }), e;
}
let is = class extends Q {
  constructor(e, t, i, n, s, r, a) {
    super(), this.environmentService = e, this.userDataProfileService = t, this.preferencesService = i, this.workspaceContextService = n, this.labelService = s, this.extensionService = r, this.userDataProfilesService = a, this.registerSettingsActions(), this.registerKeybindingsActions(), this.updatePreferencesEditorMenuItem(), this._register(n.onDidChangeWorkbenchState(() => this.updatePreferencesEditorMenuItem())), this._register(n.onDidChangeWorkspaceFolders(() => this.updatePreferencesEditorMenuItemForWorkspaceFolders()));
  }
  registerSettingsActions() {
    this._register(L(class extends M {
      constructor() {
        super({
          id: gg,
          title: {
            value: c("settings", "Settings"),
            mnemonicTitle: c(
              { key: "miOpenSettings", comment: ["&& denotes a mnemonic"] },
              "&&Settings"
            ),
            original: "Settings"
          },
          keybinding: {
            weight: 200,
            when: null,
            primary: 2135
          },
          menu: [{
            id: P.GlobalActivity,
            group: "2_configuration",
            order: 1
          }, {
            id: P.MenubarPreferencesMenu,
            group: "2_configuration",
            order: 1
          }]
        });
      }
      run(s, r) {
        const a = typeof r == "string" ? { query: r } : et(r);
        return s.get(B).openSettings(a);
      }
    })), L(class extends M {
      constructor() {
        super({
          id: "workbench.action.openSettings2",
          title: { value: c("openSettings2", "Open Settings (UI)"), original: "Open Settings (UI)" },
          category: ce,
          f1: !0
        });
      }
      run(s, r) {
        return r = et(r), s.get(B).openSettings({ jsonEditor: !1, ...r });
      }
    }), L(class extends M {
      constructor() {
        super({
          id: "workbench.action.openSettingsJson",
          title: hg,
          category: ce,
          f1: !0
        });
      }
      run(s, r) {
        return r = et(r), s.get(B).openSettings({ jsonEditor: !0, ...r });
      }
    }), L(class extends M {
      constructor() {
        super({
          id: "workbench.action.openGlobalSettings",
          title: { value: c("openGlobalSettings", "Open User Settings"), original: "Open User Settings" },
          category: ce,
          f1: !0
        });
      }
      run(s, r) {
        return r = et(r), s.get(B).openUserSettings(r);
      }
    }), L(class extends M {
      constructor() {
        super({
          id: "workbench.action.openRawDefaultSettings",
          title: { value: c("openRawDefaultSettings", "Open Default Settings (JSON)"), original: "Open Default Settings (JSON)" },
          category: ce,
          f1: !0
        });
      }
      run(s) {
        return s.get(B).openRawDefaultSettings();
      }
    });
    const e = this._register(new Jc()), t = D.and(
      D.or(ut.Resource.isEqualTo(
        this.userDataProfileService.currentProfile.settingsResource.toString()
      ), ut.Resource.isEqualTo(
        this.userDataProfilesService.defaultProfile.settingsResource.toString()
      )),
      D.not("isInDiffEditor")
    ), i = () => {
      e.value = L(class extends M {
        constructor() {
          super({
            id: "_workbench.openUserSettingsEditor",
            title: mn,
            icon: ht,
            menu: [{
              id: P.EditorTitle,
              when: t,
              group: "navigation",
              order: 1
            }]
          });
        }
        run(s, r) {
          return r = et(r), s.get(B).openUserSettings({ jsonEditor: !1, ...r });
        }
      });
    }, n = D.and(
      Le,
      Os.toNegated()
    );
    L(class extends M {
      constructor() {
        super({
          id: dg,
          title: { value: c("openSettingsJson", "Open Settings (JSON)"), original: "Open Settings (JSON)" },
          icon: ht,
          menu: [{
            id: P.EditorTitle,
            when: n,
            group: "navigation",
            order: 1
          }]
        });
      }
      run(s) {
        const r = s.get(N).activeEditorPane;
        return r instanceof pe ? r.switchToSettingsFile() : null;
      }
    }), i(), this._register(this.userDataProfileService.onDidChangeCurrentProfile(() => {
      i();
    })), L(class extends M {
      constructor() {
        super({
          id: nt.ID,
          title: nt.LABEL,
          category: ce,
          f1: !0
        });
      }
      run(s) {
        return s.get($).createInstance(nt, nt.ID, nt.LABEL.value).run();
      }
    }), L(class extends M {
      constructor() {
        super({
          id: "workbench.action.openAccessibilitySettings",
          title: { value: c("openAccessibilitySettings", "Open Accessibility Settings"), original: "Open Accessibility Settings" },
          category: ce,
          menu: {
            id: P.CommandPalette,
            when: yi.notEqualsTo("empty")
          }
        });
      }
      async run(s) {
        await s.get(B).openSettings({ jsonEditor: !1, query: "@tag:accessibility" });
      }
    }), L(class extends M {
      constructor() {
        super({
          id: "workbench.action.openFolderSettings",
          title: { value: c("openFolderSettings", "Open Folder Settings"), original: "Open Folder Settings" },
          category: ce,
          menu: {
            id: P.CommandPalette,
            when: yi.isEqualTo("workspace")
          }
        });
      }
      async run(s, r) {
        const a = s.get(kt), l = s.get(B), d = await a.executeCommand(Ns);
        d && (r = et(r), await l.openFolderSettings({ folderUri: d.uri, ...r }));
      }
    }), L(class extends M {
      constructor() {
        super({
          id: "workbench.action.openFolderSettingsFile",
          title: { value: c("openFolderSettingsFile", "Open Folder Settings (JSON)"), original: "Open Folder Settings (JSON)" },
          category: ce,
          menu: {
            id: P.CommandPalette,
            when: yi.isEqualTo("workspace")
          }
        });
      }
      async run(s, r) {
        const a = s.get(kt), l = s.get(B), d = await a.executeCommand(Ns);
        d && (r = et(r), await l.openFolderSettings({ folderUri: d.uri, jsonEditor: !0, ...r }));
      }
    }), L(class extends M {
      constructor() {
        super({
          id: "_workbench.action.openFolderSettings",
          title: { value: c("openFolderSettings", "Open Folder Settings"), original: "Open Folder Settings" },
          category: ce,
          menu: {
            id: P.ExplorerContext,
            group: "2_workspace",
            order: 20,
            when: D.and(Xc, Qc)
          }
        });
      }
      run(s, r) {
        return s.get(B).openFolderSettings({ folderUri: r });
      }
    }), L(class extends M {
      constructor() {
        super({
          id: lg,
          title: c(
            { key: "miOpenOnlineSettings", comment: ["&& denotes a mnemonic"] },
            "&&Online Services Settings"
          ),
          menu: {
            id: P.MenubarPreferencesMenu,
            group: "3_settings",
            order: 1
          }
        });
      }
      run(s) {
        const r = s.get(N).activeEditorPane;
        r instanceof pe ? r.focusSearch("@tag:usesOnlineServices") : s.get(B).openSettings({ jsonEditor: !1, query: "@tag:usesOnlineServices" });
      }
    }), L(class extends M {
      constructor() {
        super({
          id: ug,
          title: c(
            { key: "miOpenTelemetrySettings", comment: ["&& denotes a mnemonic"] },
            "&&Telemetry Settings"
          )
        });
      }
      run(s) {
        const r = s.get(N).activeEditorPane;
        r instanceof pe ? r.focusSearch("@tag:telemetry") : s.get(B).openSettings({ jsonEditor: !1, query: "@tag:telemetry" });
      }
    }), this.registerSettingsEditorActions(), this.extensionService.whenInstalledExtensionsRegistered().then(() => {
      const s = this.environmentService.remoteAuthority;
      this.labelService.getHostLabel(me.vscodeRemote, s);
    });
  }
  registerSettingsEditorActions() {
    function e(i) {
      const n = i.get(N).activeEditorPane;
      return n instanceof pe ? n : null;
    }
    function t(i) {
      const n = e(i);
      n == null || n.focusSearch();
    }
    L(class extends M {
      constructor() {
        super({
          id: ig,
          precondition: Le,
          keybinding: {
            primary: 2084,
            weight: 100,
            when: null
          },
          category: ce,
          f1: !0,
          title: { value: c("settings.focusSearch", "Focus Settings Search"), original: "Focus Settings Search" }
        });
      }
      run(i) {
        t(i);
      }
    }), L(class extends M {
      constructor() {
        super({
          id: eo,
          precondition: Le,
          keybinding: {
            primary: 9,
            weight: 100,
            when: jt
          },
          category: ce,
          f1: !0,
          title: { value: c("settings.clearResults", "Clear Settings Search Results"), original: "Clear Settings Search Results" }
        });
      }
      run(i) {
        const n = e(i);
        n == null || n.clearSearchResults();
      }
    }), L(class extends M {
      constructor() {
        super({
          id: ng,
          precondition: D.and(jt, Si.Visible.toNegated()),
          keybinding: {
            primary: 18,
            weight: 100,
            when: null
          },
          title: c("settings.focusFile", "Focus settings file")
        });
      }
      run(i, n) {
        const s = e(i);
        s == null || s.focusSettings();
      }
    }), L(class extends M {
      constructor() {
        super({
          id: sg,
          precondition: D.and(jt, Si.Visible.toNegated()),
          keybinding: {
            primary: 18,
            weight: 200,
            when: null
          },
          title: c("settings.focusFile", "Focus settings file")
        });
      }
      run(i, n) {
        const s = e(i);
        s == null || s.focusSettings();
      }
    }), L(class extends M {
      constructor() {
        super({
          id: rg,
          precondition: D.and(Le, Zr),
          keybinding: {
            primary: 3,
            weight: 200,
            when: null
          },
          title: c("settings.focusSettingsList", "Focus settings list")
        });
      }
      run(i) {
        const n = e(i);
        n instanceof pe && n.focusSettings();
      }
    }), L(class extends M {
      constructor() {
        super({
          id: og,
          precondition: Le,
          f1: !0,
          keybinding: [
            {
              primary: 15,
              weight: 200,
              when: Cn
            }
          ],
          category: ce,
          title: { value: c("settings.focusSettingsTOC", "Focus Settings Table of Contents"), original: "Focus Settings Table of Contents" }
        });
      }
      run(i) {
        const n = e(i);
        n instanceof pe && n.focusTOC();
      }
    }), L(class extends M {
      constructor() {
        super({
          id: ag,
          precondition: D.and(Le, Cn),
          keybinding: {
            primary: 3,
            weight: 200
          },
          title: c("settings.focusSettingControl", "Focus Setting Control")
        });
      }
      run(i) {
        var s;
        const n = e(i);
        n instanceof pe && (s = document.activeElement) != null && s.classList.contains("monaco-list") && n.focusSettings(!0);
      }
    }), L(class extends M {
      constructor() {
        super({
          id: jr,
          precondition: Le,
          keybinding: {
            primary: 1091,
            weight: 200,
            when: null
          },
          f1: !0,
          category: ce,
          title: { value: c("settings.showContextMenu", "Show Setting Context Menu"), original: "Show Setting Context Menu" }
        });
      }
      run(i) {
        const n = e(i);
        n instanceof pe && n.showContextMenu();
      }
    }), L(class extends M {
      constructor() {
        super({
          id: cg,
          precondition: D.and(
            Le,
            jt.toNegated(),
            Os.toNegated()
          ),
          keybinding: {
            primary: 9,
            weight: 200,
            when: null
          },
          f1: !0,
          category: ce,
          title: { value: c("settings.focusLevelUp", "Move Focus Up One Level"), original: "Move Focus Up One Level" }
        });
      }
      run(i) {
        const n = e(i);
        n instanceof pe && (n.currentFocusContext === 3 ? n.focusSettings() : n.currentFocusContext === 2 ? n.focusTOC() : n.currentFocusContext === 1 && n.focusSearch());
      }
    });
  }
  registerKeybindingsActions() {
    const e = this, t = { value: c("preferences", "Preferences"), original: "Preferences" }, i = "workbench.action.openGlobalKeybindings";
    this._register(L(class extends M {
      constructor() {
        super({
          id: i,
          title: { value: c("openGlobalKeybindings", "Open Keyboard Shortcuts"), original: "Open Keyboard Shortcuts" },
          shortTitle: c("keyboardShortcuts", "Keyboard Shortcuts"),
          category: t,
          icon: ht,
          keybinding: {
            when: null,
            weight: 200,
            primary: vi(2089, 2097)
          },
          menu: [
            { id: P.CommandPalette },
            {
              id: P.EditorTitle,
              when: ut.Resource.isEqualTo(
                e.userDataProfileService.currentProfile.keybindingsResource.toString()
              ),
              group: "navigation",
              order: 1
            },
            {
              id: P.GlobalActivity,
              group: "2_configuration",
              order: 3
            }
          ]
        });
      }
      run(n, s) {
        const r = typeof s == "string" ? s : void 0;
        return n.get(B).openGlobalKeybindingSettings(!1, { query: r });
      }
    })), this._register(St.appendMenuItem(P.MenubarPreferencesMenu, {
      command: {
        id: i,
        title: c("keyboardShortcuts", "Keyboard Shortcuts")
      },
      group: "2_configuration",
      order: 3
    })), L(class extends M {
      constructor() {
        super({
          id: "workbench.action.openDefaultKeybindingsFile",
          title: { value: c("openDefaultKeybindingsFile", "Open Default Keyboard Shortcuts (JSON)"), original: "Open Default Keyboard Shortcuts (JSON)" },
          category: t,
          menu: { id: P.CommandPalette }
        });
      }
      run(n) {
        return n.get(B).openDefaultKeybindingsFile();
      }
    }), L(class extends M {
      constructor() {
        super({
          id: "workbench.action.openGlobalKeybindingsFile",
          title: { value: c("openGlobalKeybindingsFile", "Open Keyboard Shortcuts (JSON)"), original: "Open Keyboard Shortcuts (JSON)" },
          category: t,
          icon: ht,
          menu: [
            { id: P.CommandPalette },
            {
              id: P.EditorTitle,
              when: D.and(j),
              group: "navigation"
            }
          ]
        });
      }
      run(n) {
        return n.get(B).openGlobalKeybindingSettings(!0);
      }
    }), L(class extends M {
      constructor() {
        super({
          id: Zc,
          title: { value: c("showDefaultKeybindings", "Show System Keybindings"), original: "Show System Keyboard Shortcuts" },
          menu: [
            {
              id: P.EditorTitle,
              when: D.and(j),
              group: "1_keyboard_preferences_actions"
            }
          ]
        });
      }
      run(n) {
        const s = n.get(N).activeEditorPane;
        s instanceof K && s.search("@source:system");
      }
    }), L(class extends M {
      constructor() {
        super({
          id: ed,
          title: { value: c("showExtensionKeybindings", "Show Extension Keybindings"), original: "Show Extension Keyboard Shortcuts" },
          menu: [
            {
              id: P.EditorTitle,
              when: D.and(j),
              group: "1_keyboard_preferences_actions"
            }
          ]
        });
      }
      run(n) {
        const s = n.get(N).activeEditorPane;
        s instanceof K && s.search("@source:extension");
      }
    }), L(class extends M {
      constructor() {
        super({
          id: td,
          title: { value: c("showUserKeybindings", "Show User Keybindings"), original: "Show User Keyboard Shortcuts" },
          menu: [
            {
              id: P.EditorTitle,
              when: D.and(j),
              group: "1_keyboard_preferences_actions"
            }
          ]
        });
      }
      run(n) {
        const s = n.get(N).activeEditorPane;
        s instanceof K && s.search("@source:user");
      }
    }), L(class extends M {
      constructor() {
        super({
          id: Sr,
          title: c("clear", "Clear Search Results"),
          keybinding: {
            weight: 200,
            when: D.and(j, Ei),
            primary: 9
          }
        });
      }
      run(n) {
        const s = n.get(N).activeEditorPane;
        s instanceof K && s.clearSearchResults();
      }
    }), L(class extends M {
      constructor() {
        super({
          id,
          title: c("clearHistory", "Clear Keyboard Shortcuts Search History"),
          category: t,
          menu: [
            {
              id: P.CommandPalette,
              when: D.and(j)
            }
          ]
        });
      }
      run(n) {
        const s = n.get(N).activeEditorPane;
        s instanceof K && s.clearKeyboardShortcutSearchHistory();
      }
    }), this.registerKeybindingEditorActions();
  }
  registerKeybindingEditorActions() {
    const e = this;
    ne.registerCommandAndKeybindingRule({
      id: Li,
      weight: 200,
      when: D.and(
        j,
        ke,
        Gt.toNegated()
      ),
      primary: 3,
      handler: (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && r.defineKeybinding(r.activeKeybindingEntry, !1);
      }
    }), ne.registerCommandAndKeybindingRule({
      id: xr,
      weight: 200,
      when: D.and(j, ke),
      primary: vi(2089, 2079),
      handler: (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && r.defineKeybinding(r.activeKeybindingEntry, !0);
      }
    }), ne.registerCommandAndKeybindingRule({
      id: Cr,
      weight: 200,
      when: D.and(j, ke),
      primary: vi(2089, 2083),
      handler: (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && r.activeKeybindingEntry.keybindingItem.keybinding && r.defineWhenExpression(r.activeKeybindingEntry);
      }
    }), ne.registerCommandAndKeybindingRule({
      id: kr,
      weight: 200,
      when: D.and(
        j,
        ke,
        nd.toNegated()
      ),
      primary: 20,
      mac: {
        primary: 2049
      },
      handler: (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && r.removeKeybinding(r.activeKeybindingEntry);
      }
    }), ne.registerCommandAndKeybindingRule({
      id: Tr,
      weight: 200,
      when: D.and(j, ke),
      primary: 0,
      handler: (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && r.resetKeybinding(r.activeKeybindingEntry);
      }
    }), ne.registerCommandAndKeybindingRule({
      id: sd,
      weight: 200,
      when: D.and(j),
      primary: 2084,
      handler: (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && r.focusSearch();
      }
    }), ne.registerCommandAndKeybindingRule({
      id: br,
      weight: 200,
      when: D.and(j, Ei),
      primary: 553,
      mac: { primary: 2601 },
      handler: (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && r.recordSearchKeys();
      }
    }), ne.registerCommandAndKeybindingRule({
      id: yr,
      weight: 200,
      when: D.and(j),
      primary: 558,
      mac: { primary: 2606 },
      handler: (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && r.toggleSortByPrecedence();
      }
    }), ne.registerCommandAndKeybindingRule({
      id: Ir,
      weight: 200,
      when: D.and(j, ke),
      primary: 0,
      handler: (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && r.showSimilarKeybindings(r.activeKeybindingEntry);
      }
    }), ne.registerCommandAndKeybindingRule({
      id: _r,
      weight: 200,
      when: D.and(
        j,
        ke,
        Gt.negate()
      ),
      primary: 2081,
      handler: async (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && await r.copyKeybinding(r.activeKeybindingEntry);
      }
    }), ne.registerCommandAndKeybindingRule({
      id: Dr,
      weight: 200,
      when: D.and(j, ke),
      primary: 0,
      handler: async (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && await r.copyKeybindingCommand(r.activeKeybindingEntry);
      }
    }), ne.registerCommandAndKeybindingRule({
      id: Lr,
      weight: 200,
      when: D.and(j, ke),
      primary: 0,
      handler: async (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && await r.copyKeybindingCommandTitle(r.activeKeybindingEntry);
      }
    }), ne.registerCommandAndKeybindingRule({
      id: rd,
      weight: 200,
      when: D.and(j, Ei),
      primary: 2066,
      handler: (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && r.focusKeybindings();
      }
    }), ne.registerCommandAndKeybindingRule({
      id: od,
      weight: 200,
      when: D.and(
        j,
        Gt,
        Si.Visible.toNegated()
      ),
      primary: 9,
      handler: async (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && r.rejectWhenExpression(r.activeKeybindingEntry);
      }
    }), ne.registerCommandAndKeybindingRule({
      id: ad,
      weight: 200,
      when: D.and(
        j,
        Gt,
        Si.Visible.toNegated()
      ),
      primary: 3,
      handler: async (n, s) => {
        const r = n.get(N).activeEditorPane;
        r instanceof K && r.acceptWhenExpression(r.activeKeybindingEntry);
      }
    });
    const t = this._register(new U()), i = () => {
      t.clear(), t.add(L(class extends M {
        constructor() {
          const s = ut.Resource.isEqualTo(
            e.userDataProfileService.currentProfile.keybindingsResource.toString()
          );
          super({
            id: "editor.action.defineKeybinding",
            title: { value: c("defineKeybinding.start", "Define Keybinding"), original: "Define Keybinding" },
            f1: !0,
            precondition: s,
            keybinding: {
              weight: 200,
              when: s,
              primary: vi(2089, 2089)
            },
            menu: {
              id: P.EditorContent,
              when: s
            }
          });
        }
        async run(s) {
          var a;
          const r = s.get(N).activeTextEditorControl;
          cd(r) && ((a = r.getContribution(dd)) == null || a.showDefineKeybindingWidget());
        }
      }));
    };
    i(), this._register(this.userDataProfileService.onDidChangeCurrentProfile(() => i()));
  }
  updatePreferencesEditorMenuItem() {
    const e = "_workbench.openWorkspaceSettingsEditor";
    this.workspaceContextService.getWorkbenchState() === 3 && !bt.getCommand(e) && (bt.registerCommand(e, () => this.preferencesService.openWorkspaceSettings({ jsonEditor: !1 })), St.appendMenuItem(P.EditorTitle, {
      command: {
        id: e,
        title: mn,
        icon: ht
      },
      when: D.and(ut.Resource.isEqualTo(
        this.preferencesService.workspaceSettingsResource.toString()
      ), yi.isEqualTo("workspace"), D.not("isInDiffEditor")),
      group: "navigation",
      order: 1
    })), this.updatePreferencesEditorMenuItemForWorkspaceFolders();
  }
  updatePreferencesEditorMenuItemForWorkspaceFolders() {
    for (const e of this.workspaceContextService.getWorkspace().folders) {
      const t = `_workbench.openFolderSettings.${e.uri.toString()}`;
      bt.getCommand(t) || (bt.registerCommand(t, () => this.workspaceContextService.getWorkbenchState() === 2 ? this.preferencesService.openWorkspaceSettings({ jsonEditor: !1 }) : this.preferencesService.openFolderSettings({ folderUri: e.uri, jsonEditor: !1 })), St.appendMenuItem(P.EditorTitle, {
        command: {
          id: t,
          title: mn,
          icon: ht
        },
        when: D.and(ut.Resource.isEqualTo(
          this.preferencesService.getFolderSettingsResource(e.uri).toString()
        ), D.not("isInDiffEditor")),
        group: "navigation",
        order: 1
      }));
    }
  }
};
is = v([
  u(0, Bt),
  u(1, Wt),
  u(2, B),
  u(3, lt),
  u(4, os),
  u(5, nn),
  u(6, Ft)
], is);
const $o = ue.as(qc.Workbench);
$o.registerWorkbenchContribution(is, 1);
$o.registerWorkbenchContribution(ts, 1);
Yc(zi.ID, zi, 1);
function Yg() {
  return {
    [B.toString()]: new zt(_n, [], !0),
    [to.toString()]: new zt(Dn, [], !0),
    [Mr.toString()]: new zt(gd, [], !0)
  };
}
export {
  Yg as default
};
