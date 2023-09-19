import { B as o, aj as de, hv as ue, U as fe, aG as H, wk as m, bB as U, cx as ge, bE as W, aY as Se, bC as he, g as me, f as be, bD as we, cK as k, ao as Q, kA as _, oV as ve, cP as ye, jb as Ie, l7 as R, wl as Ce, wm as xe, hg as ke, L as K, au as V, bi as G, fO as j, cO as Y, e as z, wn as Pe, aE as $e, vn as P, mf as Ae, _ as q, a as $, hJ as Ee, aL as Te, w as X, ai as N, bz as Ne, N as B, hM as _e, hY as je, wo as Le, pT as Me, qb as Fe, k as Oe, wp as De, qC as Ue, e_ as We, le as Re } from "./index-7e82f14c.js";
const Z = {
  category: {
    value: o("snippets", "Snippets"),
    original: "Snippets"
  }
};
class ee extends de {
  constructor(e) {
    super({ ...Z, ...e });
  }
}
class te extends ue {
  constructor(e) {
    super({ ...Z, ...e });
  }
}
var L;
(function(u) {
  function e(i) {
    return !!i && fe.isUri(i.filepath);
  }
  u.is = e;
})(L || (L = {}));
async function ze(u, e, i, p) {
  const s = [], r = [], n = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
  for (const t of await u.getSnippetFiles())
    if (t.source !== 3)
      if (t.isGlobalSnippets) {
        await t.load();
        const a = /* @__PURE__ */ new Set();
        let l;
        e:
          for (const g of t.data) {
            l || (l = g.source);
            for (const b of g.scopes) {
              const y = i.getLanguageName(b);
              if (y)
                if (a.size >= 4) {
                  a.add(`${y}...`);
                  break e;
                } else
                  a.add(y);
            }
          }
        const f = {
          label: k(t.location),
          filepath: t.location,
          description: a.size === 0 ? o("global.scope", "(global)") : o("global.1", "({0})", [...a].join(", "))
        };
        if (s.push(f), !l)
          continue;
        const S = o(
          "detail.label",
          "({0}) {1}",
          l,
          p.getUriLabel(t.location, { relative: !0 })
        ), h = d.get(k(t.location));
        h && (f.detail = S, h.snippet.detail = h.detail), d.set(k(t.location), { snippet: f, detail: S });
      } else {
        const a = k(t.location).replace(/\.json$/, "");
        s.push({
          label: k(t.location),
          description: `(${i.getLanguageName(a)})`,
          filepath: t.location
        }), n.add(a);
      }
  const c = e.currentProfile.snippetsHome;
  for (const t of i.getRegisteredLanguageIds()) {
    const a = i.getLanguageName(t);
    a && !n.has(t) && r.push({
      label: t,
      description: `(${a})`,
      filepath: Q(c, `${t}.json`),
      hint: !0
    });
  }
  return s.sort((t, a) => {
    const l = _(t.filepath.path), f = _(a.filepath.path);
    return l === f ? t.label.localeCompare(a.label) : l === ".code-snippets" ? -1 : 1;
  }), r.sort((t, a) => t.label.localeCompare(a.label)), { existing: s, future: r };
}
async function J(u, e, i, p, s, r) {
  function n(t) {
    const a = _(t) !== ".code-snippets" ? `${t}.code-snippets` : t;
    return Q(e, a);
  }
  await p.createFolder(e);
  const d = await i.input({
    placeHolder: o("name", "Type snippet file name"),
    async validateInput(t) {
      if (!t)
        return o("bad_name1", "Invalid file name");
      if (!ve(t))
        return o("bad_name2", "'{0}' is not a valid file name", t);
      if (await p.exists(n(t)))
        return o("bad_name3", "'{0}' already exists", t);
    }
  });
  if (!d)
    return;
  const c = n(d);
  await s.write(c, [
    "{",
    "	// Place your " + u + " snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and ",
    "	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope ",
    "	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is ",
    "	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: ",
    "	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. ",
    "	// Placeholders with the same ids are connected.",
    "	// Example:",
    '	// "Print to console": {',
    '	// 	"scope": "javascript,typescript",',
    '	// 	"prefix": "log",',
    '	// 	"body": [',
    `	// 		"console.log('$1');",`,
    '	// 		"$2"',
    "	// 	],",
    '	// 	"description": "Log output to console"',
    "	// }",
    "}"
  ].join(`
`)), await r.open(c);
}
async function qe(u, e, i) {
  if (await e.exists(u.filepath))
    return;
  const p = [
    "{",
    "	// Place your snippets for " + u.label + " here. Each snippet is defined under a snippet name and has a prefix, body and ",
    "	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:",
    "	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the ",
    "	// same ids are connected.",
    "	// Example:",
    '	// "Print to console": {',
    '	// 	"prefix": "log",',
    '	// 	"body": [',
    `	// 		"console.log('$1');",`,
    '	// 		"$2"',
    "	// 	],",
    '	// 	"description": "Log output to console"',
    "	// }",
    "}"
  ].join(`
`);
  await i.write(u.filepath, p);
}
class Be extends ee {
  constructor() {
    super({
      id: "workbench.action.openSnippets",
      title: {
        value: o("openSnippet.label", "Configure User Snippets"),
        original: "Configure User Snippets"
      },
      shortTitle: {
        value: o("userSnippets", "User Snippets"),
        mnemonicTitle: o(
          { key: "miOpenSnippets", comment: ["&& denotes a mnemonic"] },
          "User &&Snippets"
        ),
        original: "User Snippets"
      },
      f1: !0,
      menu: [
        { id: H.MenubarPreferencesMenu, group: "2_configuration", order: 4 },
        { id: H.GlobalActivity, group: "2_configuration", order: 4 }
      ]
    });
  }
  async run(e) {
    const i = e.get(m), p = e.get(U), s = e.get(ge), r = e.get(W), n = e.get(Se), d = e.get(he), c = e.get(me), t = e.get(be), a = e.get(we), l = await ze(i, n, r, a), f = l.existing, S = [{
      scope: o("new.global_scope", "global"),
      label: o("new.global", "New Global Snippets file..."),
      uri: n.currentProfile.snippetsHome
    }], h = [];
    for (const b of d.getWorkspace().folders)
      h.push({
        scope: o("new.workspace_scope", "{0} workspace", b.name),
        label: o("new.folder", "New Snippets file for '{0}'...", b.name),
        uri: b.toResource(".vscode")
      });
    f.length > 0 ? (f.unshift({ type: "separator", label: o("group.global", "Existing Snippets") }), f.push({ type: "separator", label: o("new.global.sep", "New Snippets") })) : f.push({ type: "separator", label: o("new.global.sep", "New Snippets") });
    const g = await p.pick([].concat(f, S, h, l.future), {
      placeHolder: o("openSnippet.pickLanguage", "Select Snippets File or Create Snippets"),
      matchOnDescription: !0
    });
    if (S.indexOf(g) >= 0)
      return J(g.scope, g.uri, p, c, t, s);
    if (h.indexOf(g) >= 0)
      return J(g.scope, g.uri, p, c, t, s);
    if (L.is(g))
      return g.hint && await qe(g, c, t), s.open(g.filepath);
  }
}
const A = class A extends ee {
  constructor() {
    super({
      id: A.Id,
      title: {
        value: o("label", "Fill File with Snippet"),
        original: "Fill File with Snippet"
      },
      f1: !0
    });
  }
  async run(e) {
    var t;
    const i = e.get(m), p = e.get(U), s = e.get(ye), r = e.get(W), n = Ie(s.activeTextEditorControl);
    if (!n || !n.hasModel())
      return;
    const d = await i.getSnippets(void 0, { fileTemplateSnippets: !0, noRecencySort: !0, includeNoPrefixSnippets: !0 });
    if (d.length === 0)
      return;
    const c = await this._pick(p, r, d);
    c && n.hasModel() && ((t = R.get(n)) == null || t.apply([{
      range: n.getModel().getFullModelRange(),
      template: c.snippet.body
    }]), n.getModel().setLanguage(r.createById(c.langId), A.Id), n.focus());
  }
  async _pick(e, i, p) {
    const s = [];
    for (const c of p)
      if (Ce(c.scopes))
        s.push({ langId: "", snippet: c });
      else
        for (const t of c.scopes)
          s.push({ langId: t, snippet: c });
    const r = [], n = xe(s, (c, t) => ke(c.langId, t.langId));
    for (const c of n) {
      let t = !0;
      for (const a of c)
        t && (r.push({
          type: "separator",
          label: i.getLanguageName(a.langId) ?? a.langId
        }), t = !1), r.push({
          snippet: a,
          label: a.snippet.prefix || a.snippet.name,
          detail: a.snippet.description
        });
    }
    const d = await e.pick(r, {
      placeHolder: o("placeholder", "Select a snippet"),
      matchOnDetail: !0
    });
    return d == null ? void 0 : d.snippet;
  }
};
A.Id = "workbench.action.populateFileFromSnippet";
let E = A;
async function ie(u, e) {
  var c;
  const i = u.get(m), p = u.get(U);
  let s;
  Array.isArray(e) ? s = e : s = await i.getSnippets(e, { includeDisabledSnippets: !0, includeNoPrefixSnippets: !0 }), s.sort((t, a) => t.snippetSource - a.snippetSource);
  const r = () => {
    const t = [];
    let a;
    for (const l of s) {
      const f = {
        label: l.prefix || l.name,
        detail: l.description || l.body,
        snippet: l
      };
      if (!a || a.snippetSource !== l.snippetSource || a.source !== l.source) {
        let S = "";
        switch (l.snippetSource) {
          case 1:
            S = o("sep.userSnippet", "User Snippets");
            break;
          case 3:
            S = l.source;
            break;
          case 2:
            S = o("sep.workspaceSnippet", "Workspace Snippets");
            break;
        }
        t.push({ type: "separator", label: S });
      }
      l.snippetSource === 3 && (i.isEnabled(l) ? f.buttons = [{
        iconClass: V.asClassName(G.eyeClosed),
        tooltip: o("disableSnippet", "Hide from IntelliSense")
      }] : (f.description = o("isDisabled", "(hidden from IntelliSense)"), f.buttons = [{
        iconClass: V.asClassName(G.eye),
        tooltip: o("enable.snippet", "Show in IntelliSense")
      }])), t.push(f), a = l;
    }
    return t;
  }, n = p.createQuickPick();
  n.placeholder = o("pick.placeholder", "Select a snippet"), n.matchOnDetail = !0, n.ignoreFocusOut = !1, n.keepScrollPosition = !0, n.onDidTriggerItemButton((t) => {
    const a = i.isEnabled(t.item.snippet);
    i.updateEnablement(t.item.snippet, !a), n.items = r();
  }), n.items = r(), n.items.length || (n.validationMessage = o("pick.noSnippetAvailable", "No snippet available")), n.show(), await Promise.race([K.toPromise(n.onDidAccept), K.toPromise(n.onDidHide)]);
  const d = (c = n.selectedItems[0]) == null ? void 0 : c.snippet;
  return n.dispose(), d;
}
const C = class C {
  static fromUser(e) {
    if (!e || typeof e != "object")
      return C._empty;
    let { snippet: i, name: p, langId: s } = e;
    return typeof i != "string" && (i = void 0), typeof p != "string" && (p = void 0), typeof s != "string" && (s = void 0), new C(i, p, s);
  }
  constructor(e, i, p) {
    this.snippet = e, this.name = i, this.langId = p;
  }
};
C._empty = new C(void 0, void 0, void 0);
let M = C;
class He extends te {
  constructor() {
    super({
      id: "editor.action.insertSnippet",
      title: {
        value: o("snippet.suggestions.label", "Insert Snippet"),
        original: "Insert Snippet"
      },
      f1: !0,
      precondition: j.writable,
      description: {
        description: "Insert Snippet",
        args: [{
          name: "args",
          schema: {
            type: "object",
            properties: {
              snippet: {
                type: "string"
              },
              langId: {
                type: "string"
              },
              name: {
                type: "string"
              }
            }
          }
        }]
      }
    });
  }
  async runEditorCommand(e, i, p) {
    var a;
    const s = e.get(W), r = e.get(m);
    if (!i.hasModel())
      return;
    const n = e.get(Y), d = e.get(z), c = await new Promise((l, f) => {
      const { lineNumber: S, column: h } = i.getPosition(), { snippet: g, name: b, langId: y } = M.fromUser(p);
      if (g)
        return l(new Pe(
          !1,
          [],
          "",
          "",
          "",
          g,
          "",
          1,
          `random/${Math.random()}`
        ));
      let I;
      if (y) {
        if (!s.isRegisteredLanguageId(y))
          return l(void 0);
        I = y;
      } else
        i.getModel().tokenization.tokenizeIfCheap(S), I = i.getModel().getLanguageIdAtPosition(S, h), s.getLanguageName(I) || (I = i.getModel().getLanguageId());
      b ? r.getSnippets(I, { includeNoPrefixSnippets: !0 }).then((ce) => ce.find((le) => le.name === b)).then(l, f) : l(d.invokeFunction(ie, I));
    });
    if (!c)
      return;
    let t;
    c.needsClipboard && (t = await n.readText()), i.focus(), (a = R.get(i)) == null || a.insert(c.codeSnippet, { clipboardText: t }), r.updateUsageTimestamp(c);
  }
}
async function ne(u, e, i, p) {
  const { lineNumber: s, column: r } = i;
  e.tokenization.tokenizeIfCheap(s);
  const n = e.getLanguageIdAtPosition(s, r);
  return (await u.getSnippets(n, { includeNoPrefixSnippets: !0, includeDisabledSnippets: p })).filter((c) => c.usesSelection);
}
const T = class T extends te {
  constructor() {
    super({
      ...T.options,
      precondition: $e.and(j.writable, j.hasNonEmptySelection),
      f1: !0
    });
  }
  async runEditorCommand(e, i) {
    var t;
    if (!i.hasModel())
      return;
    const p = e.get(z), s = e.get(m), r = e.get(Y), n = await ne(s, i.getModel(), i.getPosition(), !0);
    if (!n.length)
      return;
    const d = await p.invokeFunction(ie, n);
    if (!d)
      return;
    let c;
    d.needsClipboard && (c = await r.readText()), i.focus(), (t = R.get(i)) == null || t.insert(d.codeSnippet, { clipboardText: c }), s.updateUsageTimestamp(d);
  }
};
T.options = {
  id: "editor.action.surroundWithSnippet",
  title: {
    value: o("label", "Surround With Snippet..."),
    original: "Surround With Snippet..."
  }
};
let x = T;
var w;
let F = (w = class {
  constructor(e) {
    this._snippetService = e;
  }
  async provideCodeActions(e, i) {
    if (i.isEmpty())
      return;
    const p = Ae.isISelection(i) ? i.getPosition() : i.getStartPosition(), s = await ne(this._snippetService, e, p, !1);
    if (!s.length)
      return;
    const r = [];
    for (const n of s) {
      if (r.length >= w._MAX_CODE_ACTIONS) {
        r.push(w._overflowCommandCodeAction);
        break;
      }
      r.push({
        title: o("codeAction", "Surround With: {0}", n.name),
        kind: P.SurroundWith.value,
        edit: se(e, i, n)
      });
    }
    return {
      actions: r,
      dispose() {
      }
    };
  }
}, w._MAX_CODE_ACTIONS = 4, w._overflowCommandCodeAction = {
  kind: P.SurroundWith.value,
  title: x.options.title.value,
  command: {
    id: x.options.id,
    title: x.options.title.value
  }
}, w);
F = q([
  $(0, m)
], F);
var v;
let O = (v = class {
  constructor(e) {
    this._snippetService = e, this.providedCodeActionKinds = [P.SurroundWith.value];
  }
  async provideCodeActions(e) {
    if (e.getValueLength() !== 0)
      return;
    const i = await this._snippetService.getSnippets(e.getLanguageId(), { fileTemplateSnippets: !0, includeNoPrefixSnippets: !0 }), p = [];
    for (const s of i) {
      if (p.length >= v._MAX_CODE_ACTIONS) {
        p.push(v._overflowCommandCodeAction);
        break;
      }
      p.push({
        title: o("title", "Start with: {0}", s.name),
        kind: P.SurroundWith.value,
        edit: se(e, e.getFullModelRange(), s)
      });
    }
    return {
      actions: p,
      dispose() {
      }
    };
  }
}, v._MAX_CODE_ACTIONS = 4, v._overflowCommandCodeAction = {
  title: o("overflow.start.title", "Start with Snippet"),
  kind: P.SurroundWith.value,
  command: {
    id: E.Id,
    title: ""
  }
}, v);
O = q([
  $(0, m)
], O);
function se(u, e, i) {
  return {
    edits: [{
      versionId: u.getVersionId(),
      resource: u.uri,
      textEdit: {
        range: e,
        text: i.body,
        insertAsSnippet: !0
      }
    }]
  };
}
let D = class {
  constructor(e, i, p) {
    this._store = new X();
    const s = "editor.snippets.codeActions.enabled", r = new X(), n = () => {
      r.clear(), p.getValue(s) && (r.add(i.codeActionProvider.register("*", e.createInstance(F))), r.add(i.codeActionProvider.register("*", e.createInstance(O))));
    };
    n(), this._store.add(p.onDidChangeConfiguration((d) => d.affectsConfiguration(s) && n())), this._store.add(r);
  }
  dispose() {
    this._store.dispose();
  }
};
D = q([
  $(0, z),
  $(1, Ee),
  $(2, Te)
], D);
N(He);
Ne.registerCommandAlias("editor.action.showSnippets", "editor.action.insertSnippet");
N(x);
N(E);
N(Be);
const Ke = B.as(_e.Workbench);
Ke.registerWorkbenchContribution(D, 3);
B.as(je.Configuration).registerConfiguration({
  ...Le,
  properties: {
    "editor.snippets.codeActions.enabled": {
      description: o(
        "editor.snippets.codeActions.enabled",
        "Controls if surround-with-snippets or file template snippets show as Code Actions."
      ),
      type: "boolean",
      default: !0
    }
  }
});
const oe = "vscode://schemas/snippets", ae = {
  prefix: {
    description: o(
      "snippetSchema.json.prefix",
      "The prefix to use when selecting the snippet in intellisense"
    ),
    type: ["string", "array"]
  },
  isFileTemplate: {
    description: o(
      "snippetSchema.json.isFileTemplate",
      "The snippet is meant to populate or replace a whole file"
    ),
    type: "boolean"
  },
  body: {
    markdownDescription: o(
      "snippetSchema.json.body",
      "The snippet content. Use `$1`, `${1:defaultText}` to define cursor positions, use `$0` for the final cursor position. Insert variable values with `${varName}` and `${varName:defaultText}`, e.g. `This is file: $TM_FILENAME`."
    ),
    type: ["string", "array"],
    items: {
      type: "string"
    }
  },
  description: {
    description: o("snippetSchema.json.description", "The snippet description."),
    type: ["string", "array"]
  }
}, Ve = {
  id: oe,
  allowComments: !0,
  allowTrailingCommas: !0,
  defaultSnippets: [{
    label: o("snippetSchema.json.default", "Empty snippet"),
    body: { "${1:snippetName}": { prefix: "${2:prefix}", body: "${3:snippet}", description: "${4:description}" } }
  }],
  type: "object",
  description: o("snippetSchema.json", "User snippet configuration"),
  additionalProperties: {
    type: "object",
    required: ["body"],
    properties: ae,
    additionalProperties: !1
  }
}, pe = "vscode://schemas/global-snippets", Ge = {
  id: pe,
  allowComments: !0,
  allowTrailingCommas: !0,
  defaultSnippets: [{
    label: o("snippetSchema.json.default", "Empty snippet"),
    body: { "${1:snippetName}": { scope: "${2:scope}", prefix: "${3:prefix}", body: "${4:snippet}", description: "${5:description}" } }
  }],
  type: "object",
  description: o("snippetSchema.json", "User snippet configuration"),
  additionalProperties: {
    type: "object",
    required: ["body"],
    properties: {
      ...ae,
      scope: {
        description: o(
          "snippetSchema.json.scope",
          "A list of language names to which this snippet applies, e.g. 'typescript,javascript'."
        ),
        type: "string"
      }
    },
    additionalProperties: !1
  }
}, re = B.as(Me.JSONContribution);
re.registerSchema(oe, Ve);
re.registerSchema(pe, Ge);
Ue(async (u) => {
  u.get(We).when(2).then(() => {
    Re.get(m);
  });
});
function Qe() {
  return {
    ...Fe(),
    [m.toString()]: new Oe(De, [], !0)
  };
}
export {
  Qe as default
};
