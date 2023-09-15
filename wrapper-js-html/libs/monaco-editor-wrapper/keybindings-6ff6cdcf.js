import { bs as S, qF as T, qG as _, qH as A, qI as Ze, aI as g, G as r, qJ as Xe, y as me, iW as Z, aw as Ue, aq as D, iY as et, bO as E, aG as P, iA as N, _ as fe, a as K, ai as tt, bY as X, aK as nt, ab as Re, a_ as it, bx as ot, aj as $e, g as pe, h as st, aZ as Ge, qK as Oe, Q as ge, pV as rt, bB as V, qL as at, bz as ie, a2 as Se, b6 as ke, qM as dt, qN as ct, a4 as ve, qO as ut, c3 as oe, br as we, qP as lt, qQ as w, qR as ht, qS as Y, qT as v, bh as qe, D as F, E as U, be as Fe, O as J, cL as yt, e9 as We, pP as je, e2 as ae, fk as mt, qU as Q, h_ as Be, qV as xe, qW as ft, qX as Ne, qY as pt, qZ as Ie, qv as gt, ac as bt, aN as Ct, pR as Kt, q_ as Le, e as _t, dz as St, ak as kt, al as vt, am as wt, af as Ye, lg as Te, q$ as xt, r0 as It, qd as Lt, l as se, k as Tt } from "./verifyPrepare-778b382e.js";
import { g as At } from "./unboundCommands-7952c9f1.js";
import "./workbench.contribution-b85f35b1.js";
import { s as Dt } from "./logConstants-dafc31db.js";
class de {
  static _readModifiers(e) {
    e = e.toLowerCase().trim();
    let t = !1, n = !1, i = !1, o = !1, s;
    do
      s = !1, /^ctrl(\+|\-)/.test(e) && (t = !0, e = e.substr(5), s = !0), /^shift(\+|\-)/.test(e) && (n = !0, e = e.substr(6), s = !0), /^alt(\+|\-)/.test(e) && (i = !0, e = e.substr(4), s = !0), /^meta(\+|\-)/.test(e) && (o = !0, e = e.substr(5), s = !0), /^win(\+|\-)/.test(e) && (o = !0, e = e.substr(4), s = !0), /^cmd(\+|\-)/.test(e) && (o = !0, e = e.substr(4), s = !0);
    while (s);
    let c;
    const u = e.indexOf(" ");
    return u > 0 ? (c = e.substring(0, u), e = e.substring(u)) : (c = e, e = ""), {
      remains: e,
      ctrl: t,
      shift: n,
      alt: i,
      meta: o,
      key: c
    };
  }
  static parseChord(e) {
    const t = this._readModifiers(e), n = t.key.match(/^\[([^\]]+)\]$/);
    if (n) {
      const o = n[1], s = S.lowerCaseToEnum(o);
      return [new T(t.ctrl, t.shift, t.alt, t.meta, s), t.remains];
    }
    const i = _.fromUserSettings(t.key);
    return [new A(t.ctrl, t.shift, t.alt, t.meta, i), t.remains];
  }
  static parseKeybinding(e) {
    if (!e)
      return null;
    const t = [];
    let n;
    for (; e.length > 0; )
      [n, e] = this.parseChord(e), t.push(n);
    return t.length > 0 ? new Ze(t) : null;
  }
}
const ze = [
  {
    key: "commandPalette",
    id: g.CommandPalette,
    description: r("menus.commandPalette", "The Command Palette"),
    supportsSubmenus: !1
  },
  {
    key: "touchBar",
    id: g.TouchBarContext,
    description: r("menus.touchBar", "The touch bar (macOS only)"),
    supportsSubmenus: !1
  },
  {
    key: "editor/title",
    id: g.EditorTitle,
    description: r("menus.editorTitle", "The editor title menu")
  },
  {
    key: "editor/title/run",
    id: g.EditorTitleRun,
    description: r("menus.editorTitleRun", "Run submenu inside the editor title menu")
  },
  {
    key: "editor/context",
    id: g.EditorContext,
    description: r("menus.editorContext", "The editor context menu")
  },
  {
    key: "editor/context/copy",
    id: g.EditorContextCopy,
    description: r(
      "menus.editorContextCopyAs",
      "'Copy as' submenu in the editor context menu"
    )
  },
  {
    key: "editor/context/share",
    id: g.EditorContextShare,
    description: r("menus.editorContextShare", "'Share' submenu in the editor context menu"),
    proposed: "contribShareMenu"
  },
  {
    key: "explorer/context",
    id: g.ExplorerContext,
    description: r("menus.explorerContext", "The file explorer context menu")
  },
  {
    key: "explorer/context/share",
    id: g.ExplorerContextShare,
    description: r(
      "menus.explorerContextShare",
      "'Share' submenu in the file explorer context menu"
    ),
    proposed: "contribShareMenu"
  },
  {
    key: "editor/title/context",
    id: g.EditorTitleContext,
    description: r("menus.editorTabContext", "The editor tabs context menu")
  },
  {
    key: "editor/title/context/share",
    id: g.EditorTitleContextShare,
    description: r(
      "menus.editorTitleContextShare",
      "'Share' submenu inside the editor title context menu"
    ),
    proposed: "contribShareMenu"
  },
  {
    key: "debug/callstack/context",
    id: g.DebugCallStackContext,
    description: r("menus.debugCallstackContext", "The debug callstack view context menu")
  },
  {
    key: "debug/variables/context",
    id: g.DebugVariablesContext,
    description: r("menus.debugVariablesContext", "The debug variables view context menu")
  },
  {
    key: "debug/toolBar",
    id: g.DebugToolBar,
    description: r("menus.debugToolBar", "The debug toolbar menu")
  },
  {
    key: "menuBar/home",
    id: g.MenubarHomeMenu,
    description: r("menus.home", "The home indicator context menu (web only)"),
    proposed: "contribMenuBarHome",
    supportsSubmenus: !1
  },
  {
    key: "menuBar/edit/copy",
    id: g.MenubarCopy,
    description: r("menus.opy", "'Copy as' submenu in the top level Edit menu")
  },
  {
    key: "scm/title",
    id: g.SCMTitle,
    description: r("menus.scmTitle", "The Source Control title menu")
  },
  {
    key: "scm/sourceControl",
    id: g.SCMSourceControl,
    description: r("menus.scmSourceControl", "The Source Control menu")
  },
  {
    key: "scm/resourceState/context",
    id: g.SCMResourceContext,
    description: r(
      "menus.resourceStateContext",
      "The Source Control resource state context menu"
    )
  },
  {
    key: "scm/resourceFolder/context",
    id: g.SCMResourceFolderContext,
    description: r(
      "menus.resourceFolderContext",
      "The Source Control resource folder context menu"
    )
  },
  {
    key: "scm/resourceGroup/context",
    id: g.SCMResourceGroupContext,
    description: r(
      "menus.resourceGroupContext",
      "The Source Control resource group context menu"
    )
  },
  {
    key: "scm/change/title",
    id: g.SCMChangeContext,
    description: r("menus.changeTitle", "The Source Control inline change menu")
  },
  {
    key: "statusBar/remoteIndicator",
    id: g.StatusBarRemoteIndicatorMenu,
    description: r(
      "menus.statusBarRemoteIndicator",
      "The remote indicator menu in the status bar"
    ),
    supportsSubmenus: !1
  },
  {
    key: "view/title",
    id: g.ViewTitle,
    description: r("view.viewTitle", "The contributed view title menu")
  },
  {
    key: "view/item/context",
    id: g.ViewItemContext,
    description: r("view.itemContext", "The contributed view item context menu")
  },
  {
    key: "comments/comment/editorActions",
    id: g.CommentEditorActions,
    description: r("commentThread.editorActions", "The contributed comment editor actions"),
    proposed: "contribCommentEditorActionsMenu"
  },
  {
    key: "comments/commentThread/title",
    id: g.CommentThreadTitle,
    description: r("commentThread.title", "The contributed comment thread title menu")
  },
  {
    key: "comments/commentThread/context",
    id: g.CommentThreadActions,
    description: r(
      "commentThread.actions",
      "The contributed comment thread context menu, rendered as buttons below the comment editor"
    ),
    supportsSubmenus: !1
  },
  {
    key: "comments/commentThread/additionalActions",
    id: g.CommentThreadAdditionalActions,
    description: r(
      "commentThread.actions",
      "The contributed comment thread context menu, rendered as buttons below the comment editor"
    ),
    supportsSubmenus: !1,
    proposed: "contribCommentThreadAdditionalMenu"
  },
  {
    key: "comments/commentThread/title/context",
    id: g.CommentThreadTitleContext,
    description: r(
      "commentThread.titleContext",
      "The contributed comment thread title's peek context menu, rendered as a right click menu on the comment thread's peek title."
    ),
    proposed: "contribCommentPeekContext"
  },
  {
    key: "comments/comment/title",
    id: g.CommentTitle,
    description: r("comment.title", "The contributed comment title menu")
  },
  {
    key: "comments/comment/context",
    id: g.CommentActions,
    description: r(
      "comment.actions",
      "The contributed comment context menu, rendered as buttons below the comment editor"
    ),
    supportsSubmenus: !1
  },
  {
    key: "comments/commentThread/comment/context",
    id: g.CommentThreadCommentContext,
    description: r(
      "comment.commentContext",
      "The contributed comment context menu, rendered as a right click menu on the an individual comment in the comment thread's peek view."
    ),
    proposed: "contribCommentPeekContext"
  },
  {
    key: "notebook/toolbar",
    id: g.NotebookToolbar,
    description: r("notebook.toolbar", "The contributed notebook toolbar menu")
  },
  {
    key: "notebook/kernelSource",
    id: g.NotebookKernelSource,
    description: r("notebook.kernelSource", "The contributed notebook kernel sources menu"),
    proposed: "notebookKernelSource"
  },
  {
    key: "notebook/cell/title",
    id: g.NotebookCellTitle,
    description: r("notebook.cell.title", "The contributed notebook cell title menu")
  },
  {
    key: "notebook/cell/execute",
    id: g.NotebookCellExecute,
    description: r("notebook.cell.execute", "The contributed notebook cell execution menu")
  },
  {
    key: "interactive/toolbar",
    id: g.InteractiveToolbar,
    description: r("interactive.toolbar", "The contributed interactive toolbar menu")
  },
  {
    key: "interactive/cell/title",
    id: g.InteractiveCellTitle,
    description: r("interactive.cell.title", "The contributed interactive cell title menu")
  },
  {
    key: "testing/item/context",
    id: g.TestItem,
    description: r("testing.item.context", "The contributed test item menu")
  },
  {
    key: "testing/item/gutter",
    id: g.TestItemGutter,
    description: r(
      "testing.item.gutter.title",
      "The menu for a gutter decoration for a test item"
    )
  },
  {
    key: "extension/context",
    id: g.ExtensionContext,
    description: r("menus.extensionContext", "The extension context menu")
  },
  {
    key: "timeline/title",
    id: g.TimelineTitle,
    description: r("view.timelineTitle", "The Timeline view title menu")
  },
  {
    key: "timeline/item/context",
    id: g.TimelineItemContext,
    description: r("view.timelineContext", "The Timeline view item context menu")
  },
  {
    key: "ports/item/context",
    id: g.TunnelContext,
    description: r("view.tunnelContext", "The Ports view item context menu")
  },
  {
    key: "ports/item/origin/inline",
    id: g.TunnelOriginInline,
    description: r("view.tunnelOriginInline", "The Ports view item origin inline menu")
  },
  {
    key: "ports/item/port/inline",
    id: g.TunnelPortInline,
    description: r("view.tunnelPortInline", "The Ports view item port inline menu")
  },
  {
    key: "file/newFile",
    id: g.NewFile,
    description: r(
      "file.newFile",
      "The 'New File...' quick pick, shown on welcome page and File menu."
    ),
    supportsSubmenus: !1
  },
  {
    key: "webview/context",
    id: g.WebviewContext,
    description: r("webview.context", "The webview context menu")
  },
  {
    key: "file/share",
    id: g.MenubarShare,
    description: r("menus.share", "Share submenu shown in the top level File menu."),
    proposed: "contribShareMenu"
  },
  {
    key: "editor/inlineCompletions/actions",
    id: g.InlineCompletionsActions,
    description: r(
      "inlineCompletions.actions",
      "The actions shown when hovering on an inline completion"
    ),
    supportsSubmenus: !1,
    proposed: "inlineCompletionsAdditions"
  },
  {
    key: "editor/content",
    id: g.EditorContent,
    description: r("merge.toolbar", "The prominent button in an editor, overlays its content"),
    proposed: "contribEditorContentMenu"
  },
  {
    key: "editor/lineNumber/context",
    id: g.EditorLineNumberContext,
    description: r(
      "editorLineNumberContext",
      "The contributed editor line number context menu"
    )
  },
  {
    key: "mergeEditor/result/title",
    id: g.MergeInputResultToolbar,
    description: r("menus.mergeEditorResult", "The result toolbar of the merge editor"),
    proposed: "contribMergeEditorMenus"
  }
];
var I;
(function(l) {
  function e(d) {
    return typeof d.command == "string";
  }
  l.isMenuItem = e;
  function t(d, m) {
    return typeof d.command != "string" ? (m.error(r(
      "requirestring",
      "property `{0}` is mandatory and must be of type `string`",
      "command"
    )), !1) : d.alt && typeof d.alt != "string" ? (m.error(r(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "alt"
    )), !1) : d.when && typeof d.when != "string" ? (m.error(r(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "when"
    )), !1) : d.group && typeof d.group != "string" ? (m.error(r(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "group"
    )), !1) : !0;
  }
  l.isValidMenuItem = t;
  function n(d, m) {
    return typeof d.submenu != "string" ? (m.error(r(
      "requirestring",
      "property `{0}` is mandatory and must be of type `string`",
      "submenu"
    )), !1) : d.when && typeof d.when != "string" ? (m.error(r(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "when"
    )), !1) : d.group && typeof d.group != "string" ? (m.error(r(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "group"
    )), !1) : !0;
  }
  l.isValidSubmenuItem = n;
  function i(d, m) {
    if (!Array.isArray(d))
      return m.error(r("requirearray", "submenu items must be an array")), !1;
    for (const f of d)
      if (e(f)) {
        if (!t(f, m))
          return !1;
      } else if (!n(f, m))
        return !1;
    return !0;
  }
  l.isValidItems = i;
  function o(d, m) {
    return typeof d != "object" ? (m.error(r("require", "submenu items must be an object")), !1) : typeof d.id != "string" ? (m.error(r(
      "requirestring",
      "property `{0}` is mandatory and must be of type `string`",
      "id"
    )), !1) : typeof d.label != "string" ? (m.error(r(
      "requirestring",
      "property `{0}` is mandatory and must be of type `string`",
      "label"
    )), !1) : !0;
  }
  l.isValidSubmenu = o;
  const s = {
    type: "object",
    required: ["command"],
    properties: {
      command: {
        description: r(
          "vscode.extension.contributes.menuItem.command",
          "Identifier of the command to execute. The command must be declared in the 'commands'-section"
        ),
        type: "string"
      },
      alt: {
        description: r(
          "vscode.extension.contributes.menuItem.alt",
          "Identifier of an alternative command to execute. The command must be declared in the 'commands'-section"
        ),
        type: "string"
      },
      when: {
        description: r(
          "vscode.extension.contributes.menuItem.when",
          "Condition which must be true to show this item"
        ),
        type: "string"
      },
      group: {
        description: r(
          "vscode.extension.contributes.menuItem.group",
          "Group into which this item belongs"
        ),
        type: "string"
      }
    }
  }, c = {
    type: "object",
    required: ["submenu"],
    properties: {
      submenu: {
        description: r(
          "vscode.extension.contributes.menuItem.submenu",
          "Identifier of the submenu to display in this item."
        ),
        type: "string"
      },
      when: {
        description: r(
          "vscode.extension.contributes.menuItem.when",
          "Condition which must be true to show this item"
        ),
        type: "string"
      },
      group: {
        description: r(
          "vscode.extension.contributes.menuItem.group",
          "Group into which this item belongs"
        ),
        type: "string"
      }
    }
  }, u = {
    type: "object",
    required: ["id", "label"],
    properties: {
      id: {
        description: r(
          "vscode.extension.contributes.submenu.id",
          "Identifier of the menu to display as a submenu."
        ),
        type: "string"
      },
      label: {
        description: r(
          "vscode.extension.contributes.submenu.label",
          "The label of the menu item which leads to this submenu."
        ),
        type: "string"
      },
      icon: {
        description: r(
          { key: "vscode.extension.contributes.submenu.icon", comment: ["do not translate or change `\\$(zap)`, \\ in front of $ is important."] },
          "(Optional) Icon which is used to represent the submenu in the UI. Either a file path, an object with file paths for dark and light themes, or a theme icon references, like `\\$(zap)`"
        ),
        anyOf: [
          {
            type: "string"
          },
          {
            type: "object",
            properties: {
              light: {
                description: r(
                  "vscode.extension.contributes.submenu.icon.light",
                  "Icon path when a light theme is used"
                ),
                type: "string"
              },
              dark: {
                description: r(
                  "vscode.extension.contributes.submenu.icon.dark",
                  "Icon path when a dark theme is used"
                ),
                type: "string"
              }
            }
          }
        ]
      }
    }
  };
  l.menusContribution = {
    description: r(
      "vscode.extension.contributes.menus",
      "Contributes menu items to the editor"
    ),
    type: "object",
    properties: Xe(ze, (d) => d.key, (d) => ({
      markdownDescription: d.proposed ? r(
        "proposed",
        'Proposed API, requires `enabledApiProposal: ["{0}"]` - {1}',
        d.proposed,
        d.description
      ) : d.description,
      type: "array",
      items: d.supportsSubmenus === !1 ? s : { oneOf: [s, c] }
    })),
    additionalProperties: {
      description: "Submenu",
      type: "array",
      items: { oneOf: [s, c] }
    }
  }, l.submenusContribution = {
    description: r(
      "vscode.extension.contributes.submenus",
      "Contributes submenu items to the editor"
    ),
    type: "array",
    items: u
  };
  function p(d, m) {
    return d ? N(d.command) ? (m.error(r(
      "requirestring",
      "property `{0}` is mandatory and must be of type `string`",
      "command"
    )), !1) : !a(d.title, m, "title") || d.shortTitle && !a(d.shortTitle, m, "shortTitle") ? !1 : d.enablement && typeof d.enablement != "string" ? (m.error(r(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "precondition"
    )), !1) : !(d.category && !a(d.category, m, "category") || !h(d.icon, m)) : (m.error(r("nonempty", "expected non-empty value.")), !1);
  }
  l.isValidCommand = p;
  function h(d, m) {
    return typeof d > "u" || typeof d == "string" || typeof d.dark == "string" && typeof d.light == "string" ? !0 : (m.error(r(
      "opticon",
      "property `icon` can be omitted or must be either a string or a literal like `{dark, light}`"
    )), !1);
  }
  function a(d, m, f) {
    return typeof d > "u" ? (m.error(r(
      "requireStringOrObject",
      "property `{0}` is mandatory and must be of type `string` or `object`",
      f
    )), !1) : typeof d == "string" && N(d) ? (m.error(r(
      "requirestring",
      "property `{0}` is mandatory and must be of type `string`",
      f
    )), !1) : typeof d != "string" && (N(d.original) || N(d.value)) ? (m.error(r(
      "requirestrings",
      "properties `{0}` and `{1}` are mandatory and must be of type `string`",
      `${f}.value`,
      `${f}.original`
    )), !1) : !0;
  }
  const y = {
    type: "object",
    required: ["command", "title"],
    properties: {
      command: {
        description: r(
          "vscode.extension.contributes.commandType.command",
          "Identifier of the command to execute"
        ),
        type: "string"
      },
      title: {
        description: r(
          "vscode.extension.contributes.commandType.title",
          "Title by which the command is represented in the UI"
        ),
        type: "string"
      },
      shortTitle: {
        markdownDescription: r(
          "vscode.extension.contributes.commandType.shortTitle",
          "(Optional) Short title by which the command is represented in the UI. Menus pick either `title` or `shortTitle` depending on the context in which they show commands."
        ),
        type: "string"
      },
      category: {
        description: r(
          "vscode.extension.contributes.commandType.category",
          "(Optional) Category string by which the command is grouped in the UI"
        ),
        type: "string"
      },
      enablement: {
        description: r(
          "vscode.extension.contributes.commandType.precondition",
          "(Optional) Condition which must be true to enable the command in the UI (menu and keybindings). Does not prevent executing the command by other means, like the `executeCommand`-api."
        ),
        type: "string"
      },
      icon: {
        description: r(
          { key: "vscode.extension.contributes.commandType.icon", comment: ["do not translate or change `\\$(zap)`, \\ in front of $ is important."] },
          "(Optional) Icon which is used to represent the command in the UI. Either a file path, an object with file paths for dark and light themes, or a theme icon references, like `\\$(zap)`"
        ),
        anyOf: [
          {
            type: "string"
          },
          {
            type: "object",
            properties: {
              light: {
                description: r(
                  "vscode.extension.contributes.commandType.icon.light",
                  "Icon path when a light theme is used"
                ),
                type: "string"
              },
              dark: {
                description: r(
                  "vscode.extension.contributes.commandType.icon.dark",
                  "Icon path when a dark theme is used"
                ),
                type: "string"
              }
            }
          }
        ]
      }
    }
  };
  l.commandsContribution = {
    description: r(
      "vscode.extension.contributes.commands",
      "Contributes commands to the command palette."
    ),
    oneOf: [
      y,
      {
        type: "array",
        items: y
      }
    ]
  };
})(I || (I = {}));
const Ae = new me(), Ve = Z.registerExtensionPoint({
  extensionPoint: "commands",
  jsonSchema: I.commandsContribution,
  activationEventsGenerator: (l, e) => {
    for (const t of l)
      t.command && e.push(`onCommand:${t.command}`);
  }
});
Ve.setHandler((l) => {
  function e(t, n) {
    if (!I.isValidCommand(t, n.collector))
      return;
    const { icon: i, enablement: o, category: s, title: c, shortTitle: u, command: p } = t;
    let h;
    i && (typeof i == "string" ? h = Ue.fromString(i) ?? { dark: D(n.description.extensionLocation, i), light: D(n.description.extensionLocation, i) } : h = {
      dark: D(n.description.extensionLocation, i.dark),
      light: D(n.description.extensionLocation, i.light)
    });
    const a = E.getCommand(p);
    a && (a.source ? n.collector.info(r(
      "dup1",
      "Command `{0}` already registered by {1} ({2})",
      t.command,
      a.source.title,
      a.source.id
    )) : n.collector.info(r("dup0", "Command `{0}` already registered", t.command))), Ae.add(E.addCommand({
      id: p,
      title: c,
      source: { id: n.description.identifier.value, title: n.description.displayName ?? n.description.name },
      shortTitle: u,
      tooltip: c,
      category: s,
      precondition: P.deserialize(o),
      icon: h
    }));
  }
  Ae.clear();
  for (const t of l) {
    const { value: n } = t;
    if (Array.isArray(n))
      for (const i of n)
        e(i, t);
    else
      e(n, t);
  }
});
const G = /* @__PURE__ */ new Map(), He = Z.registerExtensionPoint({
  extensionPoint: "submenus",
  jsonSchema: I.submenusContribution
});
He.setHandler((l) => {
  G.clear();
  for (const e of l) {
    const { value: t, collector: n } = e;
    for (const [, i] of Object.entries(t)) {
      if (!I.isValidSubmenu(i, n))
        continue;
      if (!i.id) {
        n.warn(r(
          "submenuId.invalid.id",
          "`{0}` is not a valid submenu identifier",
          i.id
        ));
        continue;
      }
      if (G.has(i.id)) {
        n.info(r(
          "submenuId.duplicate.id",
          "The `{0}` submenu was already previously registered.",
          i.id
        ));
        continue;
      }
      if (!i.label) {
        n.warn(r(
          "submenuId.invalid.label",
          "`{0}` is not a valid submenu label",
          i.label
        ));
        continue;
      }
      let o;
      i.icon && (typeof i.icon == "string" ? o = Ue.fromString(i.icon) || { dark: D(e.description.extensionLocation, i.icon) } : o = {
        dark: D(e.description.extensionLocation, i.icon.dark),
        light: D(e.description.extensionLocation, i.icon.light)
      });
      const s = {
        id: g.for(`api:${i.id}`),
        label: i.label,
        icon: o
      };
      G.set(i.id, s);
    }
  }
});
const Et = new Map(ze.map((l) => [l.key, l])), De = new me(), re = /* @__PURE__ */ new Map(), Mt = Z.registerExtensionPoint({
  extensionPoint: "menus",
  jsonSchema: I.menusContribution,
  deps: [He]
});
Mt.setHandler((l) => {
  De.clear(), re.clear();
  for (const e of l) {
    const { value: t, collector: n } = e;
    for (const i of Object.entries(t)) {
      if (!I.isValidItems(i[1], n))
        continue;
      let o = Et.get(i[0]);
      if (!o) {
        const s = G.get(i[0]);
        s && (o = {
          key: i[0],
          id: s.id,
          description: ""
        });
      }
      if (o) {
        if (o.proposed && !et(e.description, o.proposed)) {
          n.error(r(
            "proposedAPI.invalid",
            `{0} is a proposed menu identifier. It requires 'package.json#enabledApiProposals: ["{1}"]' and is only available when running out of dev or with the following command line switch: --enable-proposed-api {2}`,
            i[0],
            o.proposed,
            e.description.identifier.value
          ));
          continue;
        }
        for (const s of i[1]) {
          let c;
          if (I.isMenuItem(s)) {
            const u = E.getCommand(s.command), p = s.alt && E.getCommand(s.alt) || void 0;
            if (!u) {
              n.error(r(
                "missing.command",
                "Menu item references a command `{0}` which is not defined in the 'commands' section.",
                s.command
              ));
              continue;
            }
            s.alt && !p && n.warn(r(
              "missing.altCommand",
              "Menu item references an alt-command `{0}` which is not defined in the 'commands' section.",
              s.alt
            )), s.command === s.alt && n.info(r(
              "dupe.command",
              "Menu item references the same command as default and alt-command"
            )), c = { command: u, alt: p, group: void 0, order: void 0, when: void 0 };
          } else {
            if (o.supportsSubmenus === !1) {
              n.error(r(
                "unsupported.submenureference",
                "Menu item references a submenu for a menu which doesn't have submenu support."
              ));
              continue;
            }
            const u = G.get(s.submenu);
            if (!u) {
              n.error(r(
                "missing.submenu",
                "Menu item references a submenu `{0}` which is not defined in the 'submenus' section.",
                s.submenu
              ));
              continue;
            }
            let p = re.get(o.id.id);
            if (p || (p = /* @__PURE__ */ new Set(), re.set(o.id.id, p)), p.has(u.id.id)) {
              n.warn(r(
                "submenuItem.duplicate",
                "The `{0}` submenu was already contributed to the `{1}` menu.",
                s.submenu,
                i[0]
              ));
              continue;
            }
            p.add(u.id.id), c = { submenu: u.id, icon: u.icon, title: u.label, group: void 0, order: void 0, when: void 0 };
          }
          if (s.group) {
            const u = s.group.lastIndexOf("@");
            u > 0 ? (c.group = s.group.substr(0, u), c.order = Number(s.group.substr(u + 1)) || void 0) : c.group = s.group;
          }
          c.when = P.deserialize(s.when), De.add(E.appendMenuItem(o.id, c));
        }
      }
    }
  }
});
class Je {
  static writeKeybindingItem(e, t) {
    if (!t.resolvedKeybinding)
      return;
    const n = JSON.stringify(t.resolvedKeybinding.getUserSettingsLabel());
    e.write(`{ "key": ${Pt(n + ",", 25)} "command": `);
    const i = t.when ? JSON.stringify(t.when.serialize()) : "", o = JSON.stringify(t.command);
    i.length > 0 ? (e.write(`${o},`), e.writeLine(), e.write(`                                     "when": ${i}`)) : e.write(`${o}`), t.commandArgs && (e.write(","), e.writeLine(), e.write(`                                     "args": ${JSON.stringify(t.commandArgs)}`)), e.write(" }");
  }
  static readUserKeybindingItem(e) {
    const t = "key" in e && typeof e.key == "string" ? de.parseKeybinding(e.key) : null, n = "when" in e && typeof e.when == "string" ? P.deserialize(e.when) : void 0, i = "command" in e && typeof e.command == "string" ? e.command : null, o = "args" in e && typeof e.args < "u" ? e.args : void 0;
    return {
      keybinding: t,
      command: i,
      commandArgs: o,
      when: n,
      _sourceKey: "key" in e && typeof e.key == "string" ? e.key : void 0
    };
  }
}
function Pt(l, e) {
  return l.length < e ? l + new Array(e - l.length).join(" ") : l;
}
class Ut {
  constructor() {
    this._lines = [], this._currentLine = "";
  }
  write(e) {
    this._currentLine += e;
  }
  writeLine(e = "") {
    this._lines.push(this._currentLine + e), this._currentLine = "";
  }
  toString() {
    return this.writeLine(), this._lines.join(`
`);
  }
}
function Rt(l, e) {
  return l ? typeof l.command != "string" ? (e.push(r(
    "requirestring",
    "property `{0}` is mandatory and must be of type `string`",
    "command"
  )), !1) : l.key && typeof l.key != "string" ? (e.push(r(
    "optstring",
    "property `{0}` can be omitted or must be of type `string`",
    "key"
  )), !1) : l.when && typeof l.when != "string" ? (e.push(r(
    "optstring",
    "property `{0}` can be omitted or must be of type `string`",
    "when"
  )), !1) : l.mac && typeof l.mac != "string" ? (e.push(r(
    "optstring",
    "property `{0}` can be omitted or must be of type `string`",
    "mac"
  )), !1) : l.linux && typeof l.linux != "string" ? (e.push(r(
    "optstring",
    "property `{0}` can be omitted or must be of type `string`",
    "linux"
  )), !1) : l.win && typeof l.win != "string" ? (e.push(r(
    "optstring",
    "property `{0}` can be omitted or must be of type `string`",
    "win"
  )), !1) : !0 : (e.push(r("nonempty", "expected non-empty value.")), !1);
}
const Ee = {
  type: "object",
  default: { command: "", key: "" },
  properties: {
    command: {
      description: r(
        "vscode.extension.contributes.keybindings.command",
        "Identifier of the command to run when keybinding is triggered."
      ),
      type: "string"
    },
    args: {
      description: r(
        "vscode.extension.contributes.keybindings.args",
        "Arguments to pass to the command to execute."
      )
    },
    key: {
      description: r(
        "vscode.extension.contributes.keybindings.key",
        "Key or key sequence (separate keys with plus-sign and sequences with space, e.g. Ctrl+O and Ctrl+L L for a chord)."
      ),
      type: "string"
    },
    mac: {
      description: r(
        "vscode.extension.contributes.keybindings.mac",
        "Mac specific key or key sequence."
      ),
      type: "string"
    },
    linux: {
      description: r(
        "vscode.extension.contributes.keybindings.linux",
        "Linux specific key or key sequence."
      ),
      type: "string"
    },
    win: {
      description: r(
        "vscode.extension.contributes.keybindings.win",
        "Windows specific key or key sequence."
      ),
      type: "string"
    },
    when: {
      description: r(
        "vscode.extension.contributes.keybindings.when",
        "Condition when the key is active."
      ),
      type: "string"
    }
  }
}, Me = Z.registerExtensionPoint({
  extensionPoint: "keybindings",
  deps: [Ve],
  jsonSchema: {
    description: r("vscode.extension.contributes.keybindings", "Contributes keybindings."),
    oneOf: [
      Ee,
      {
        type: "array",
        items: Ee
      }
    ]
  }
}), $t = [
  90,
  91,
  92,
  93,
  95,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105
], x = /* @__PURE__ */ new Map();
x.set(95, 22);
x.set(96, 23);
x.set(97, 24);
x.set(98, 25);
x.set(99, 26);
x.set(100, 27);
x.set(101, 28);
x.set(102, 29);
x.set(103, 30);
x.set(104, 21);
let ce = class H extends at {
  constructor(e, t, n, i, o, s, c, u, p, h, a) {
    super(e, t, n, i, h), this.hostService = s, this.keyboardLayoutService = a, this._contributions = [], this.isComposingGlobalContextKey = e.createKey("isComposing", !1), this.kbsJsonSchema = new ue(), this.updateKeybindingsJsonSchema(), this._keyboardMapper = this.keyboardLayoutService.getKeyboardMapper(), this.keyboardLayoutService.onDidChangeKeyboardLayout(() => {
      this._keyboardMapper = this.keyboardLayoutService.getKeyboardMapper(), this.updateResolver();
    }), this._cachedResolver = null, this.userKeybindings = this._register(new Gt(o, p, u, h)), this.userKeybindings.initialize().then(() => {
      this.userKeybindings.keybindings.length && this.updateResolver();
    }), this._register(this.userKeybindings.onDidChange(() => {
      h.debug("User keybindings changed"), this.updateResolver();
    })), Me.setHandler((y) => {
      const d = [];
      for (const m of y)
        this._handleKeybindingsExtensionPointUser(m.description.identifier, m.description.isBuiltin, m.value, m.collector, d);
      ie.setExtensionKeybindings(d), this.updateResolver();
    }), this.updateKeybindingsJsonSchema(), this._register(c.onDidRegisterExtensions(() => this.updateKeybindingsJsonSchema())), this._register(Se(window, ve.KEY_DOWN, (y) => {
      this.isComposingGlobalContextKey.set(y.isComposing);
      const d = new ke(y);
      this._log(`/ Received  keydown event - ${dt(y)}`), this._log(`| Converted keydown event - ${ct(d)}`), this._dispatch(d, d.target) && d.preventDefault(), this.isComposingGlobalContextKey.set(!1);
    })), this._register(Se(window, ve.KEY_UP, (y) => {
      this.isComposingGlobalContextKey.set(y.isComposing);
      const d = new ke(y);
      this._singleModifierDispatch(d, d.target) && d.preventDefault(), this.isComposingGlobalContextKey.set(!1);
    })), this._register(ut(() => {
      const y = navigator.keyboard;
      oe.keyboard !== 2 && (we() ? y == null || y.lock(["Escape"]) : y == null || y.unlock(), this._cachedResolver = null, this._onDidUpdateKeybindings.fire());
    }));
  }
  registerSchemaContribution(e) {
    this._contributions.push(e), e.onDidChange && this._register(e.onDidChange(() => this.updateKeybindingsJsonSchema())), this.updateKeybindingsJsonSchema();
  }
  updateKeybindingsJsonSchema() {
    this.kbsJsonSchema.updateSchema(this._contributions.flatMap((e) => e.getSchemaAdditions()));
  }
  _printKeybinding(e) {
    return lt.toLabel(w, e.chords, (t) => t instanceof A ? _.toString(t.keyCode) : S.toString(t.scanCode)) || "[null]";
  }
  _printResolvedKeybinding(e) {
    return e.getDispatchChords().map((t) => t || "[null]").join(" ");
  }
  _printResolvedKeybindings(e, t, n) {
    const o = `${t.padStart(35, " ")} => `;
    if (n.length === 0) {
      e.push(`${o}${"[NO BINDING]".padStart(35, " ")}`);
      return;
    }
    for (const s of n)
      e.push(`${o}${this._printResolvedKeybinding(s).padStart(35, " ")}`);
  }
  _dumpResolveKeybindingDebugInfo() {
    const e = /* @__PURE__ */ new Set(), t = [];
    t.push("Default Resolved Keybindings (unique only):");
    for (const n of ie.getDefaultKeybindings()) {
      if (!n.keybinding)
        continue;
      const i = this._printKeybinding(n.keybinding);
      if (e.has(i))
        continue;
      e.add(i);
      const o = this._keyboardMapper.resolveKeybinding(n.keybinding);
      this._printResolvedKeybindings(t, i, o);
    }
    t.push("User Resolved Keybindings (unique only):");
    for (const n of this.userKeybindings.keybindings) {
      if (!n.keybinding)
        continue;
      const i = n._sourceKey ?? "Impossible: missing source key, but has keybinding";
      if (e.has(i))
        continue;
      e.add(i);
      const o = this._keyboardMapper.resolveKeybinding(n.keybinding);
      this._printResolvedKeybindings(t, i, o);
    }
    return t.join(`
`);
  }
  _dumpDebugInfo() {
    const e = JSON.stringify(this.keyboardLayoutService.getCurrentKeyboardLayout(), null, "	"), t = this._keyboardMapper.dumpDebugInfo(), n = this._dumpResolveKeybindingDebugInfo(), i = JSON.stringify(this.keyboardLayoutService.getRawKeyboardMapping(), null, "	");
    return `Layout info:
${e}

${n}

${t}

Raw mapping:
${i}`;
  }
  _dumpDebugInfoJSON() {
    const e = {
      layout: this.keyboardLayoutService.getCurrentKeyboardLayout(),
      rawMapping: this.keyboardLayoutService.getRawKeyboardMapping()
    };
    return JSON.stringify(e, null, "	");
  }
  customKeybindingsCount() {
    return this.userKeybindings.keybindings.length;
  }
  updateResolver() {
    this._cachedResolver = null, this._onDidUpdateKeybindings.fire();
  }
  getUserKeybindingItems() {
    return this._resolveUserKeybindingItems(this.userKeybindings.keybindings, !1);
  }
  _getResolver() {
    if (!this._cachedResolver) {
      const e = this._resolveKeybindingItems(ie.getDefaultKeybindings(), !0), t = this.getUserKeybindingItems();
      this._cachedResolver = new ht(e, t, (n) => this._log(n));
    }
    return this._cachedResolver;
  }
  _documentHasFocus() {
    return this.hostService.hasFocus;
  }
  _resolveKeybindingItems(e, t) {
    const n = [];
    let i = 0;
    for (const o of e) {
      const s = o.when || void 0, c = o.keybinding;
      if (!c)
        n[i++] = new Y(
          void 0,
          o.command,
          o.commandArgs,
          s,
          t,
          o.extensionId,
          o.isBuiltinExtension
        );
      else {
        if (this._assertBrowserConflicts(c))
          continue;
        const u = this._keyboardMapper.resolveKeybinding(c);
        for (let p = u.length - 1; p >= 0; p--) {
          const h = u[p];
          n[i++] = new Y(
            h,
            o.command,
            o.commandArgs,
            s,
            t,
            o.extensionId,
            o.isBuiltinExtension
          );
        }
      }
    }
    return n;
  }
  _resolveUserKeybindingItems(e, t) {
    const n = [];
    let i = 0;
    for (const o of e) {
      const s = o.when || void 0;
      if (!o.keybinding)
        n[i++] = new Y(void 0, o.command, o.commandArgs, s, t, null, !1);
      else {
        const c = this._keyboardMapper.resolveKeybinding(o.keybinding);
        for (const u of c)
          n[i++] = new Y(
            u,
            o.command,
            o.commandArgs,
            s,
            t,
            null,
            !1
          );
      }
    }
    return n;
  }
  _assertBrowserConflicts(e) {
    if (oe.keyboard === 0 || oe.keyboard === 1 && we())
      return !1;
    for (const t of e.chords) {
      if (!t.metaKey && !t.altKey && !t.ctrlKey && !t.shiftKey)
        continue;
      const n = 3584;
      let i = 0;
      if (t.metaKey && (i |= 2048), t.shiftKey && (i |= 1024), t.altKey && (i |= 512), t.ctrlKey && w === 2 && (i |= 256), (i & n) === 2560 && (t instanceof T && (t.scanCode === 86 || t.scanCode === 85) || t instanceof A && (t.keyCode === 15 || t.keyCode === 17)) || (i & n) === 2048 && (t instanceof T && t.scanCode >= 36 && t.scanCode <= 45 || t instanceof A && t.keyCode >= 21 && t.keyCode <= 30))
        return !0;
    }
    return !1;
  }
  resolveKeybinding(e) {
    return this._keyboardMapper.resolveKeybinding(e);
  }
  resolveKeyboardEvent(e) {
    return this.keyboardLayoutService.validateCurrentKeyboardMapping(e), this._keyboardMapper.resolveKeyboardEvent(e);
  }
  resolveUserBinding(e) {
    const t = de.parseKeybinding(e);
    return t ? this._keyboardMapper.resolveKeybinding(t) : [];
  }
  _handleKeybindingsExtensionPointUser(e, t, n, i, o) {
    if (Array.isArray(n))
      for (let s = 0, c = n.length; s < c; s++)
        this._handleKeybinding(e, t, s + 1, n[s], i, o);
    else
      this._handleKeybinding(e, t, 1, n, i, o);
  }
  _handleKeybinding(e, t, n, i, o, s) {
    const c = [];
    if (Rt(i, c)) {
      const u = this._asCommandRule(e, t, n++, i);
      u && s.push(u);
    }
    c.length > 0 && o.error(r(
      "invalid.keybindings",
      "Invalid `contributes.{0}`: {1}",
      Me.name,
      c.join(`
`)
    ));
  }
  static bindToCurrentPlatform(e, t, n, i) {
    if (w === 1 && i) {
      if (i)
        return i;
    } else if (w === 2) {
      if (t)
        return t;
    } else if (n)
      return n;
    return e;
  }
  _asCommandRule(e, t, n, i) {
    const { command: o, args: s, when: c, key: u, mac: p, linux: h, win: a } = i, y = H.bindToCurrentPlatform(u, p, h, a);
    if (!y)
      return;
    let d;
    t ? d = 300 + n : d = 400 + n;
    const m = E.getCommand(o), f = m && m.precondition;
    let b;
    return c && f ? b = P.and(f, P.deserialize(c)) : c ? b = P.deserialize(c) : f && (b = f), {
      id: o,
      args: s,
      when: b,
      weight: d,
      keybinding: de.parseKeybinding(y),
      extensionId: e.value,
      isBuiltinExtension: t
    };
  }
  getDefaultKeybindingsContent() {
    const e = this._getResolver(), t = e.getDefaultKeybindings(), n = e.getDefaultBoundCommands();
    return H._getDefaultKeybindings(t) + `

` + H._getAllCommandsAsComment(n);
  }
  static _getDefaultKeybindings(e) {
    const t = new Ut();
    t.writeLine("[");
    const n = e.length - 1;
    return e.forEach((i, o) => {
      Je.writeKeybindingItem(t, i), o !== n ? t.writeLine(",") : t.writeLine();
    }), t.writeLine("]"), t.toString();
  }
  static _getAllCommandsAsComment(e) {
    const n = At(e).sort().join(`
// - `);
    return "// " + r("unboundCommands", "Here are other available commands: ") + `
// - ` + n;
  }
  mightProducePrintableCharacter(e) {
    if (e.ctrlKey || e.metaKey || e.altKey)
      return !1;
    const t = S.toEnum(e.code);
    if ($t.indexOf(t) !== -1)
      return !!(e.keyCode === v[t] || qe && e.keyCode === x.get(t));
    if (v[t] !== -1)
      return !1;
    const i = this.keyboardLayoutService.getRawKeyboardMapping();
    if (!i)
      return !1;
    const o = i[e.code];
    return !(!o || !o.value || /\s/.test(o.value));
  }
};
ce = fe([
  K(0, tt),
  K(1, X),
  K(2, nt),
  K(3, Re),
  K(4, it),
  K(5, ot),
  K(6, $e),
  K(7, pe),
  K(8, st),
  K(9, Ge),
  K(10, Oe)
], ce);
class Gt extends F {
  get keybindings() {
    return this._keybindings;
  }
  constructor(e, t, n, i) {
    super(), this.userDataProfileService = e, this.uriIdentityService = t, this.fileService = n, this._rawKeybindings = [], this._keybindings = [], this.watchDisposables = this._register(new me()), this._onDidChange = this._register(new U()), this.onDidChange = this._onDidChange.event, this.watch(), this.reloadConfigurationScheduler = this._register(new Fe(() => this.reload().then((o) => {
      o && this._onDidChange.fire();
    }), 50)), this._register(J.filter(this.fileService.onDidFilesChange, (o) => o.contains(this.userDataProfileService.currentProfile.keybindingsResource))(() => {
      i.debug("Keybindings file changed"), this.reloadConfigurationScheduler.schedule();
    })), this._register(this.fileService.onDidRunOperation((o) => {
      o.operation === 4 && o.resource.toString() === this.userDataProfileService.currentProfile.keybindingsResource.toString() && (i.debug("Keybindings file written"), this.reloadConfigurationScheduler.schedule());
    })), this._register(e.onDidChangeCurrentProfile((o) => {
      this.uriIdentityService.extUri.isEqual(o.previous.keybindingsResource, o.profile.keybindingsResource) || o.join(this.whenCurrentProfileChanged());
    }));
  }
  async whenCurrentProfileChanged() {
    this.watch(), this.reloadConfigurationScheduler.schedule();
  }
  watch() {
    this.watchDisposables.clear(), this.watchDisposables.add(this.fileService.watch(yt(this.userDataProfileService.currentProfile.keybindingsResource))), this.watchDisposables.add(this.fileService.watch(this.userDataProfileService.currentProfile.keybindingsResource));
  }
  async initialize() {
    await this.reload();
  }
  async reload() {
    const e = await this.readUserKeybindings();
    return We(this._rawKeybindings, e) ? !1 : (this._rawKeybindings = e, this._keybindings = this._rawKeybindings.map((t) => Je.readUserKeybindingItem(t)), !0);
  }
  async readUserKeybindings() {
    try {
      const e = await this.fileService.readFile(this.userDataProfileService.currentProfile.keybindingsResource), t = je(e.value.toString());
      return Array.isArray(t) ? t.filter((n) => n && typeof n == "object") : [];
    } catch {
      return [];
    }
  }
}
const M = class M {
  constructor() {
    this.commandsSchemas = [], this.commandsEnum = [], this.removalCommandsEnum = [], this.commandsEnumDescriptions = [], this.schema = {
      id: M.schemaId,
      type: "array",
      title: r("keybindings.json.title", "Keybindings configuration"),
      allowTrailingCommas: !0,
      allowComments: !0,
      definitions: {
        editorGroupsSchema: {
          type: "array",
          items: {
            type: "object",
            properties: {
              groups: {
                $ref: "#/definitions/editorGroupsSchema",
                default: [{}, {}]
              },
              size: {
                type: "number",
                default: 0.5
              }
            }
          }
        },
        commandNames: {
          type: "string",
          enum: this.commandsEnum,
          enumDescriptions: this.commandsEnumDescriptions,
          description: r("keybindings.json.command", "Name of the command to execute")
        },
        commandType: {
          anyOf: [
            {
              $ref: "#/definitions/commandNames"
            },
            {
              type: "string",
              enum: this.removalCommandsEnum,
              enumDescriptions: this.commandsEnumDescriptions,
              description: r(
                "keybindings.json.removalCommand",
                "Name of the command to remove keyboard shortcut for"
              )
            },
            {
              type: "string"
            }
          ]
        },
        commandsSchemas: {
          allOf: this.commandsSchemas
        }
      },
      items: {
        required: ["key"],
        type: "object",
        defaultSnippets: [{ body: { key: "$1", command: "$2", when: "$3" } }],
        properties: {
          key: {
            type: "string",
            description: r("keybindings.json.key", "Key or key sequence (separated by space)")
          },
          command: {
            anyOf: [
              {
                if: {
                  type: "array"
                },
                then: {
                  not: {
                    type: "array"
                  },
                  errorMessage: r(
                    "keybindings.commandsIsArray",
                    `Incorrect type. Expected "{0}". The field 'command' does not support running multiple commands. Use command 'runCommands' to pass it multiple commands to run.`,
                    "string"
                  )
                },
                else: {
                  $ref: "#/definitions/commandType"
                }
              },
              {
                $ref: "#/definitions/commandType"
              }
            ]
          },
          when: {
            type: "string",
            description: r("keybindings.json.when", "Condition when the key is active.")
          },
          args: {
            description: r("keybindings.json.args", "Arguments to pass to the command to execute.")
          }
        },
        $ref: "#/definitions/commandsSchemas"
      }
    }, this.schemaRegistry = ge.as(rt.JSONContribution), this.schemaRegistry.registerSchema(M.schemaId, this.schema);
  }
  updateSchema(e) {
    this.commandsSchemas.length = 0, this.commandsEnum.length = 0, this.removalCommandsEnum.length = 0, this.commandsEnumDescriptions.length = 0;
    const t = /* @__PURE__ */ new Set(), n = (s, c) => {
      /^_/.test(s) || t.has(s) || (t.add(s), this.commandsEnum.push(s), this.commandsEnumDescriptions.push(c), this.removalCommandsEnum.push(`-${s}`));
    }, i = V.getCommands();
    for (const [s, c] of i) {
      const u = c.description;
      if (n(s, u ? u.description : void 0), !u || !u.args || u.args.length !== 1 || !u.args[0].schema)
        continue;
      const p = u.args[0].schema, h = typeof u.args[0].isOptional < "u" ? !u.args[0].isOptional : Array.isArray(p.required) && p.required.length > 0, a = {
        if: {
          required: ["command"],
          properties: {
            command: { const: s }
          }
        },
        then: {
          required: [].concat(h ? ["args"] : []),
          properties: {
            args: p
          }
        }
      };
      this.commandsSchemas.push(a);
    }
    const o = E.getCommands();
    for (const s of o.keys())
      n(s);
    this.commandsSchemas.push(...e), this.schemaRegistry.notifySchemaChanged(M.schemaId);
  }
};
M.schemaId = "vscode://schemas/keybindings";
let ue = M;
function Ot(l) {
  const e = l, t = {};
  for (const n in e) {
    const i = e[n];
    if (i.length) {
      const o = i[0], s = i[1], c = i[2], u = i[3], p = Number(i[4]), h = i.length === 6 ? i[5] : void 0;
      t[n] = {
        value: o,
        vkey: h,
        withShift: s,
        withAltGr: c,
        withShiftAltGr: u,
        valueIsDeadKey: (p & 1) > 0,
        withShiftIsDeadKey: (p & 2) > 0,
        withAltGrIsDeadKey: (p & 4) > 0,
        withShiftAltGrIsDeadKey: (p & 8) > 0
      };
    } else
      t[n] = {
        value: "",
        valueIsDeadKey: !1,
        withShift: "",
        withShiftIsDeadKey: !1,
        withAltGr: "",
        withAltGrIsDeadKey: !1,
        withShiftAltGr: "",
        withShiftAltGrIsDeadKey: !1
      };
  }
  return t;
}
class ee {
  constructor(e, t, n, i) {
    this.layout = e, this.secondaryLayouts = t, this.mapping = Ot(n), this.isUserKeyboardLayout = !!i, this.layout.isUserKeyboardLayout = !!i;
  }
  static createKeyboardLayoutFromDebugInfo(e, t, n) {
    const i = new ee(e, [], {}, !0);
    return i.mapping = t, i;
  }
  update(e) {
    this.layout = e.layout, this.secondaryLayouts = e.secondaryLayouts, this.mapping = e.mapping, this.isUserKeyboardLayout = e.isUserKeyboardLayout, this.layout.isUserKeyboardLayout = e.isUserKeyboardLayout;
  }
  getScore(e) {
    let t = 0;
    for (const n in e) {
      if (ae && (n === "Backslash" || n === "KeyQ") || mt && (n === "Backspace" || n === "Escape"))
        continue;
      const i = this.mapping[n];
      i === void 0 && (t -= 1);
      const o = e[n];
      i && o && i.value !== o.value && (t -= 1);
    }
    return t;
  }
  equal(e) {
    return this.isUserKeyboardLayout !== e.isUserKeyboardLayout || Q(this.layout) !== Q(e.layout) ? !1 : this.fuzzyEqual(e.mapping);
  }
  fuzzyEqual(e) {
    for (const t in e) {
      if (ae && (t === "Backslash" || t === "KeyQ"))
        continue;
      if (this.mapping[t] === void 0)
        return !1;
      const n = this.mapping[t], i = e[t];
      if (n.value !== i.value)
        return !1;
    }
    return !0;
  }
}
function qt(l) {
  const e = l.getValue("keyboard"), t = (e == null ? void 0 : e.dispatch) === "keyCode" ? 1 : 0, n = !!(e != null && e.mapAltGrToCtrlAlt);
  return { dispatch: t, mapAltGrToCtrlAlt: n };
}
const Ft = ge.as(Be.Configuration), Wt = {
  id: "keyboard",
  order: 15,
  type: "object",
  title: r("keyboardConfigurationTitle", "Keyboard"),
  properties: {
    "keyboard.dispatch": {
      scope: 1,
      type: "string",
      enum: ["code", "keyCode"],
      default: "code",
      markdownDescription: r(
        "dispatch",
        "Controls the dispatching logic for key presses to use either `code` (recommended) or `keyCode`."
      ),
      included: w === 2 || w === 3
    },
    "keyboard.mapAltGrToCtrlAlt": {
      scope: 1,
      type: "boolean",
      default: !1,
      markdownDescription: r(
        "mapAltGrToCtrlAlt",
        "Controls if the AltGraph+ modifier should be treated as Ctrl+Alt+."
      ),
      included: w === 1
    }
  }
};
Ft.registerConfiguration(Wt);
class jt {
  constructor(e) {
    this._actual = e, this._cache = /* @__PURE__ */ new Map();
  }
  dumpDebugInfo() {
    return this._actual.dumpDebugInfo();
  }
  resolveKeyboardEvent(e) {
    return this._actual.resolveKeyboardEvent(e);
  }
  resolveKeybinding(e) {
    const t = e.getHashCode(), n = this._cache.get(t);
    if (!n) {
      const i = this._actual.resolveKeybinding(e);
      return this._cache.set(t, i), i;
    }
    return n;
  }
}
class z extends Ne {
  constructor(e, t) {
    super(1, t), this._mapper = e;
  }
  _getLabel(e) {
    return e.isDuplicateModifierCase() ? "" : this._mapper.getUILabelForKeyCode(e.keyCode);
  }
  _getUSLabelForKeybinding(e) {
    return e.isDuplicateModifierCase() ? "" : _.toString(e.keyCode);
  }
  getUSLabel() {
    return pt.toLabel(this._os, this._chords, (e) => this._getUSLabelForKeybinding(e));
  }
  _getAriaLabel(e) {
    return e.isDuplicateModifierCase() ? "" : this._mapper.getAriaLabelForKeyCode(e.keyCode);
  }
  _getElectronAccelerator(e) {
    return this._mapper.getElectronAcceleratorForKeyBinding(e);
  }
  _getUserSettingsLabel(e) {
    if (e.isDuplicateModifierCase())
      return "";
    const t = this._mapper.getUserSettingsLabelForKeyCode(e.keyCode);
    return t && t.toLowerCase();
  }
  _isWYSIWYG(e) {
    return this.__isWYSIWYG(e.keyCode);
  }
  __isWYSIWYG(e) {
    if (e === 15 || e === 16 || e === 17 || e === 18)
      return !0;
    const t = this._mapper.getAriaLabelForKeyCode(e), n = this._mapper.getUserSettingsLabelForKeyCode(e);
    return t === n;
  }
  _getChordDispatch(e) {
    if (e.isModifierKey())
      return null;
    let t = "";
    return e.ctrlKey && (t += "ctrl+"), e.shiftKey && (t += "shift+"), e.altKey && (t += "alt+"), e.metaKey && (t += "meta+"), t += _.toString(e.keyCode), t;
  }
  _getSingleModifierChordDispatch(e) {
    return e.keyCode === 5 && !e.shiftKey && !e.altKey && !e.metaKey ? "ctrl" : e.keyCode === 4 && !e.ctrlKey && !e.altKey && !e.metaKey ? "shift" : e.keyCode === 6 && !e.ctrlKey && !e.shiftKey && !e.metaKey ? "alt" : e.keyCode === 57 && !e.ctrlKey && !e.shiftKey && !e.altKey ? "meta" : null;
  }
  static getProducedCharCode(e, t) {
    return t ? e.ctrlKey && e.shiftKey && e.altKey ? t.withShiftAltGr : e.ctrlKey && e.altKey ? t.withAltGr : e.shiftKey ? t.withShift : t.value : null;
  }
  static getProducedChar(e, t) {
    const n = this.getProducedCharCode(e, t);
    return n === null || n.length === 0 ? " --- " : "  " + n + "  ";
  }
}
class Bt {
  constructor(e, t, n) {
    this._isUSStandard = e, this._mapAltGrToCtrlAlt = n, this._keyCodeToLabel = [], this._scanCodeToKeyCode = [], this._keyCodeToLabel = [], this._keyCodeExists = [], this._keyCodeToLabel[0] = _.toString(0);
    for (let c = 0; c < 193; c++) {
      const u = v[c];
      u !== -1 && (this._scanCodeToKeyCode[c] = u, this._keyCodeToLabel[u] = _.toString(u), this._keyCodeExists[u] = !0);
    }
    const i = [];
    let o = !1;
    this._codeInfo = [];
    for (const c in t)
      if (t.hasOwnProperty(c)) {
        const u = S.toEnum(c);
        if (u === 0)
          continue;
        const p = t[c], h = v[u];
        if (h !== -1) {
          const C = xe[p.vkey] || 0;
          if (C === 0 || h === C || u !== 134)
            continue;
        }
        const a = p.value, y = p.withShift, d = p.withAltGr, m = p.withShiftAltGr, f = xe[p.vkey] || 0, b = {
          scanCode: u,
          keyCode: f,
          value: a,
          withShift: y,
          withAltGr: d,
          withShiftAltGr: m
        };
        if (this._codeInfo[u] = b, this._scanCodeToKeyCode[u] = f, f === 0)
          continue;
        if (this._keyCodeExists[f] = !0, a.length === 0)
          this._keyCodeToLabel[f] = null;
        else if (a.length > 1)
          this._keyCodeToLabel[f] = a;
        else {
          const C = a.charCodeAt(0);
          if (C >= 97 && C <= 122) {
            const L = 65 + (C - 97);
            i[L] = !0, o = !0, this._keyCodeToLabel[f] = String.fromCharCode(65 + (C - 97));
          } else
            C >= 65 && C <= 90 ? (i[C] = !0, o = !0, this._keyCodeToLabel[f] = a) : this._keyCodeToLabel[f] = a;
        }
      }
    const s = (c, u) => {
      i[c] || (this._keyCodeToLabel[u] = String.fromCharCode(c));
    };
    if (s(65, 31), s(66, 32), s(67, 33), s(68, 34), s(69, 35), s(70, 36), s(71, 37), s(72, 38), s(73, 39), s(74, 40), s(75, 41), s(76, 42), s(77, 43), s(78, 44), s(79, 45), s(80, 46), s(81, 47), s(82, 48), s(83, 49), s(84, 50), s(85, 51), s(86, 52), s(87, 53), s(88, 54), s(89, 55), s(90, 56), !o) {
      const c = (u, p) => {
        this._keyCodeToLabel[u] = String.fromCharCode(p);
      };
      c(85, 59), c(86, 61), c(87, 44), c(88, 45), c(89, 46), c(90, 47), c(91, 96), c(92, 91), c(93, 92), c(94, 93), c(95, 39);
    }
  }
  dumpDebugInfo() {
    const e = [], t = [
      88,
      104
    ];
    let n = 0;
    e.push("-----------------------------------------------------------------------------------------------------------------------------------------");
    for (let i = 0; i < 193; i++) {
      if (v[i] !== -1 && t.indexOf(i) === -1)
        continue;
      n % 6 === 0 && (e.push("|       HW Code combination      |  Key  |    KeyCode combination    |          UI label         |        User settings       | WYSIWYG |"), e.push("-----------------------------------------------------------------------------------------------------------------------------------------")), n++;
      const o = this._codeInfo[i], s = S.toString(i), c = [0, 2, 5, 7];
      for (const u of c) {
        const p = !!(u & 1), h = !!(u & 2), a = !!(u & 4), y = new T(p, h, a, !1, i), d = this._resolveChord(y), m = d ? _.toString(d.keyCode) : null, f = d ? new z(this, [d]) : null, b = `${p ? "Ctrl+" : ""}${h ? "Shift+" : ""}${a ? "Alt+" : ""}${s}`, C = f ? f.getAriaLabel() : null, L = C ? C.replace(/Control\+/, "Ctrl+") : null, be = f ? f.getUserSettingsLabel() : null, W = z.getProducedChar(y, o), R = m ? `${p ? "Ctrl+" : ""}${h ? "Shift+" : ""}${a ? "Alt+" : ""}${m}` : null, te = (f ? f.isWYSIWYG() : !1) ? "       " : "   NO  ";
        e.push(`| ${this._leftPad(b, 30)} | ${W} | ${this._leftPad(R, 25)} | ${this._leftPad(L, 25)} |  ${this._leftPad(be, 25)} | ${te} |`);
      }
      e.push("-----------------------------------------------------------------------------------------------------------------------------------------");
    }
    return e.join(`
`);
  }
  _leftPad(e, t) {
    for (e === null && (e = "null"); e.length < t; )
      e = " " + e;
    return e;
  }
  getUILabelForKeyCode(e) {
    return this._getLabelForKeyCode(e);
  }
  getAriaLabelForKeyCode(e) {
    return this._getLabelForKeyCode(e);
  }
  getUserSettingsLabelForKeyCode(e) {
    return this._isUSStandard ? _.toUserSettingsUS(e) : _.toUserSettingsGeneral(e);
  }
  getElectronAcceleratorForKeyBinding(e) {
    return _.toElectronAccelerator(e.keyCode);
  }
  _getLabelForKeyCode(e) {
    return this._keyCodeToLabel[e] || _.toString(0);
  }
  resolveKeyboardEvent(e) {
    const t = e.ctrlKey || this._mapAltGrToCtrlAlt && e.altGraphKey, n = e.altKey || this._mapAltGrToCtrlAlt && e.altGraphKey, i = new A(
      t,
      e.shiftKey,
      n,
      e.metaKey,
      e.keyCode
    );
    return new z(this, [i]);
  }
  _resolveChord(e) {
    if (!e)
      return null;
    if (e instanceof A)
      return this._keyCodeExists[e.keyCode] ? e : null;
    const t = this._scanCodeToKeyCode[e.scanCode] || 0;
    return t === 0 || !this._keyCodeExists[t] ? null : new A(e.ctrlKey, e.shiftKey, e.altKey, e.metaKey, t);
  }
  resolveKeybinding(e) {
    const t = ft(e.chords.map((n) => this._resolveChord(n)));
    return t.length > 0 ? [new z(this, t)] : [];
  }
}
const O = [];
class Pe extends Ne {
  constructor(e, t, n) {
    super(t, n), this._mapper = e;
  }
  _getLabel(e) {
    return this._mapper.getUILabelForScanCodeChord(e);
  }
  _getAriaLabel(e) {
    return this._mapper.getAriaLabelForScanCodeChord(e);
  }
  _getElectronAccelerator(e) {
    return this._mapper.getElectronAcceleratorLabelForScanCodeChord(e);
  }
  _getUserSettingsLabel(e) {
    return this._mapper.getUserSettingsLabelForScanCodeChord(e);
  }
  _isWYSIWYG(e) {
    if (!e || v[e.scanCode] !== -1)
      return !0;
    const t = this._mapper.getAriaLabelForScanCodeChord(e), n = this._mapper.getUserSettingsLabelForScanCodeChord(e);
    return !t && !n ? !0 : !t || !n ? !1 : t.toLowerCase() === n.toLowerCase();
  }
  _getChordDispatch(e) {
    return this._mapper.getDispatchStrForScanCodeChord(e);
  }
  _getSingleModifierChordDispatch(e) {
    return (e.scanCode === 157 || e.scanCode === 161) && !e.shiftKey && !e.altKey && !e.metaKey ? "ctrl" : (e.scanCode === 159 || e.scanCode === 163) && !e.ctrlKey && !e.shiftKey && !e.metaKey ? "alt" : (e.scanCode === 158 || e.scanCode === 162) && !e.ctrlKey && !e.altKey && !e.metaKey ? "shift" : (e.scanCode === 160 || e.scanCode === 164) && !e.ctrlKey && !e.shiftKey && !e.altKey ? "meta" : null;
  }
}
class q {
  constructor(e, t, n, i) {
    this.ctrlKey = e, this.shiftKey = t, this.altKey = n, this.scanCode = i;
  }
  toString() {
    return `${this.ctrlKey ? "Ctrl+" : ""}${this.shiftKey ? "Shift+" : ""}${this.altKey ? "Alt+" : ""}${S.toString(this.scanCode)}`;
  }
  equals(e) {
    return this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.scanCode === e.scanCode;
  }
  getProducedCharCode(e) {
    return e ? this.ctrlKey && this.shiftKey && this.altKey ? e.withShiftAltGr : this.ctrlKey && this.altKey ? e.withAltGr : this.shiftKey ? e.withShift : e.value : "";
  }
  getProducedChar(e) {
    const t = k.getCharCode(this.getProducedCharCode(e));
    return t === 0 ? " --- " : t >= 768 && t <= 879 ? "U+" + t.toString(16) : "  " + String.fromCharCode(t) + "  ";
  }
}
class le {
  constructor(e, t, n, i) {
    this.ctrlKey = e, this.shiftKey = t, this.altKey = n, this.keyCode = i;
  }
  toString() {
    return `${this.ctrlKey ? "Ctrl+" : ""}${this.shiftKey ? "Shift+" : ""}${this.altKey ? "Alt+" : ""}${_.toString(this.keyCode)}`;
  }
}
class Nt {
  constructor() {
    this._scanCodeToKeyCode = [], this._keyCodeToScanCode = [], this._scanCodeToKeyCode = [], this._keyCodeToScanCode = [];
  }
  registrationComplete() {
    this._moveToEnd(56), this._moveToEnd(106);
  }
  _moveToEnd(e) {
    for (let t = 0; t < 8; t++) {
      const n = this._scanCodeToKeyCode[(e << 3) + t];
      if (n)
        for (let i = 0, o = n.length; i < o; i++) {
          const s = this._keyCodeToScanCode[n[i]];
          if (s.length !== 1)
            for (let c = 0, u = s.length; c < u; c++) {
              const p = s[c];
              if (p >>> 3 === e) {
                for (let a = c + 1; a < u; a++)
                  s[a - 1] = s[a];
                s[u - 1] = p;
              }
            }
        }
    }
  }
  registerIfUnknown(e, t) {
    if (t.keyCode === 0)
      return;
    const n = this._encodeScanCodeCombo(e), i = this._encodeKeyCodeCombo(t), o = t.keyCode >= 21 && t.keyCode <= 30, s = t.keyCode >= 31 && t.keyCode <= 56, c = this._scanCodeToKeyCode[n];
    if (o || s) {
      if (c) {
        for (let u = 0, p = c.length; u < p; u++)
          if (c[u] === i)
            return;
      }
    } else if (c && c.length !== 0)
      return;
    this._scanCodeToKeyCode[n] = this._scanCodeToKeyCode[n] || [], this._scanCodeToKeyCode[n].unshift(i), this._keyCodeToScanCode[i] = this._keyCodeToScanCode[i] || [], this._keyCodeToScanCode[i].unshift(n);
  }
  lookupKeyCodeCombo(e) {
    const t = this._encodeKeyCodeCombo(e), n = this._keyCodeToScanCode[t];
    if (!n || n.length === 0)
      return [];
    const i = [];
    for (let o = 0, s = n.length; o < s; o++) {
      const c = n[o], u = !!(c & 1), p = !!(c & 2), h = !!(c & 4), a = c >>> 3;
      i[o] = new q(u, p, h, a);
    }
    return i;
  }
  lookupScanCodeCombo(e) {
    const t = this._encodeScanCodeCombo(e), n = this._scanCodeToKeyCode[t];
    if (!n || n.length === 0)
      return [];
    const i = [];
    for (let o = 0, s = n.length; o < s; o++) {
      const c = n[o], u = !!(c & 1), p = !!(c & 2), h = !!(c & 4), a = c >>> 3;
      i[o] = new le(u, p, h, a);
    }
    return i;
  }
  guessStableKeyCode(e) {
    if (e >= 36 && e <= 45)
      switch (e) {
        case 36:
          return 22;
        case 37:
          return 23;
        case 38:
          return 24;
        case 39:
          return 25;
        case 40:
          return 26;
        case 41:
          return 27;
        case 42:
          return 28;
        case 43:
          return 29;
        case 44:
          return 30;
        case 45:
          return 21;
      }
    const t = this.lookupScanCodeCombo(new q(!1, !1, !1, e)), n = this.lookupScanCodeCombo(new q(!1, !0, !1, e));
    if (t.length === 1 && n.length === 1) {
      const i = t[0].shiftKey, o = t[0].keyCode, s = n[0].shiftKey, c = n[0].keyCode;
      if (o === c && i !== s)
        return o;
    }
    return -1;
  }
  _encodeScanCodeCombo(e) {
    return this._encode(e.ctrlKey, e.shiftKey, e.altKey, e.scanCode);
  }
  _encodeKeyCodeCombo(e) {
    return this._encode(e.ctrlKey, e.shiftKey, e.altKey, e.keyCode);
  }
  _encode(e, t, n, i) {
    return ((e ? 1 : 0) << 0 | (t ? 1 : 0) << 1 | (n ? 1 : 0) << 2 | i << 3) >>> 0;
  }
}
class k {
  constructor(e, t, n, i) {
    this._isUSStandard = e, this._mapAltGrToCtrlAlt = n, this._OS = i, this._scanCodeToLabel = [], this._scanCodeToDispatch = [], this._codeInfo = [], this._scanCodeKeyCodeMapper = new Nt(), this._scanCodeToLabel = [], this._scanCodeToDispatch = [];
    const o = (h, a, y, d, m, f, b, C) => {
      this._scanCodeKeyCodeMapper.registerIfUnknown(new q(
        !!h,
        !!a,
        !!y,
        d
      ), new le(
        !!m,
        !!f,
        !!b,
        C
      ));
    }, s = (h, a, y, d, m) => {
      for (let f = h; f <= 1; f++)
        for (let b = a; b <= 1; b++)
          for (let C = y; C <= 1; C++)
            o(f, b, C, d, f, b, C, m);
    };
    for (let h = 0; h < 193; h++)
      this._scanCodeToLabel[h] = null;
    for (let h = 0; h < 193; h++)
      this._scanCodeToDispatch[h] = null;
    for (let h = 0; h < 193; h++) {
      const a = v[h];
      a !== -1 && (s(0, 0, 0, h, a), this._scanCodeToLabel[h] = _.toString(a), a === 0 || a === 5 || a === 57 || a === 6 || a === 4 ? this._scanCodeToDispatch[h] = null : this._scanCodeToDispatch[h] = `[${S.toString(h)}]`);
    }
    const c = {};
    {
      const h = [];
      for (const y in t)
        if (t.hasOwnProperty(y)) {
          const d = S.toEnum(y);
          if (d === 0 || v[d] !== -1)
            continue;
          const m = t[y], f = k.getCharCode(m.value);
          if (f >= 97 && f <= 122) {
            const b = 65 + (f - 97);
            h[b] = !0;
          }
        }
      const a = (y, d, m, f) => {
        h[y] || (c[S.toString(d)] = {
          value: m,
          withShift: f,
          withAltGr: "",
          withShiftAltGr: ""
        });
      };
      a(65, 10, "a", "A"), a(66, 11, "b", "B"), a(67, 12, "c", "C"), a(68, 13, "d", "D"), a(69, 14, "e", "E"), a(70, 15, "f", "F"), a(71, 16, "g", "G"), a(72, 17, "h", "H"), a(73, 18, "i", "I"), a(74, 19, "j", "J"), a(75, 20, "k", "K"), a(76, 21, "l", "L"), a(77, 22, "m", "M"), a(78, 23, "n", "N"), a(79, 24, "o", "O"), a(80, 25, "p", "P"), a(81, 26, "q", "Q"), a(82, 27, "r", "R"), a(83, 28, "s", "S"), a(84, 29, "t", "T"), a(85, 30, "u", "U"), a(86, 31, "v", "V"), a(87, 32, "w", "W"), a(88, 33, "x", "X"), a(89, 34, "y", "Y"), a(90, 35, "z", "Z");
    }
    const u = [];
    let p = 0;
    for (const h in t)
      if (t.hasOwnProperty(h)) {
        const a = S.toEnum(h);
        if (a === 0 || v[a] !== -1)
          continue;
        this._codeInfo[a] = t[h];
        const y = c[h] || t[h], d = k.getCharCode(y.value), m = k.getCharCode(y.withShift), f = k.getCharCode(y.withAltGr), b = k.getCharCode(y.withShiftAltGr), C = {
          scanCode: a,
          value: d,
          withShift: m,
          withAltGr: f,
          withShiftAltGr: b
        };
        if (u[p++] = C, this._scanCodeToDispatch[a] = `[${S.toString(a)}]`, d >= 97 && d <= 122) {
          const L = 65 + (d - 97);
          this._scanCodeToLabel[a] = String.fromCharCode(L);
        } else
          d >= 65 && d <= 90 ? this._scanCodeToLabel[a] = String.fromCharCode(d) : d ? this._scanCodeToLabel[a] = String.fromCharCode(d) : this._scanCodeToLabel[a] = null;
      }
    for (let h = u.length - 1; h >= 0; h--) {
      const a = u[h], y = a.scanCode, d = a.withShiftAltGr;
      if (d === a.withAltGr || d === a.withShift || d === a.value)
        continue;
      const m = k._charCodeToKb(d);
      if (!m)
        continue;
      const f = m.shiftKey, b = m.keyCode;
      f ? o(1, 1, 1, y, 0, 1, 0, b) : o(1, 1, 1, y, 0, 0, 0, b);
    }
    for (let h = u.length - 1; h >= 0; h--) {
      const a = u[h], y = a.scanCode, d = a.withAltGr;
      if (d === a.withShift || d === a.value)
        continue;
      const m = k._charCodeToKb(d);
      if (!m)
        continue;
      const f = m.shiftKey, b = m.keyCode;
      f ? o(1, 0, 1, y, 0, 1, 0, b) : o(1, 0, 1, y, 0, 0, 0, b);
    }
    for (let h = u.length - 1; h >= 0; h--) {
      const a = u[h], y = a.scanCode, d = a.withShift;
      if (d === a.value)
        continue;
      const m = k._charCodeToKb(d);
      if (!m)
        continue;
      const f = m.shiftKey, b = m.keyCode;
      f ? (o(0, 1, 0, y, 0, 1, 0, b), o(0, 1, 1, y, 0, 1, 1, b), o(1, 1, 0, y, 1, 1, 0, b), o(1, 1, 1, y, 1, 1, 1, b)) : (o(0, 1, 0, y, 0, 0, 0, b), o(0, 1, 0, y, 0, 1, 0, b), o(0, 1, 1, y, 0, 0, 1, b), o(0, 1, 1, y, 0, 1, 1, b), o(1, 1, 0, y, 1, 0, 0, b), o(1, 1, 0, y, 1, 1, 0, b), o(1, 1, 1, y, 1, 0, 1, b), o(1, 1, 1, y, 1, 1, 1, b));
    }
    for (let h = u.length - 1; h >= 0; h--) {
      const a = u[h], y = a.scanCode, d = k._charCodeToKb(a.value);
      if (!d)
        continue;
      const m = d.shiftKey, f = d.keyCode;
      m ? (o(0, 0, 0, y, 0, 1, 0, f), o(0, 0, 1, y, 0, 1, 1, f), o(1, 0, 0, y, 1, 1, 0, f), o(1, 0, 1, y, 1, 1, 1, f)) : (o(0, 0, 0, y, 0, 0, 0, f), o(0, 0, 1, y, 0, 0, 1, f), o(0, 1, 0, y, 0, 1, 0, f), o(0, 1, 1, y, 0, 1, 1, f), o(1, 0, 0, y, 1, 0, 0, f), o(1, 0, 1, y, 1, 0, 1, f), o(1, 1, 0, y, 1, 1, 0, f), o(1, 1, 1, y, 1, 1, 1, f));
    }
    s(0, 0, 0, 36, 22), s(0, 0, 0, 37, 23), s(0, 0, 0, 38, 24), s(0, 0, 0, 39, 25), s(0, 0, 0, 40, 26), s(0, 0, 0, 41, 27), s(0, 0, 0, 42, 28), s(0, 0, 0, 43, 29), s(0, 0, 0, 44, 30), s(0, 0, 0, 45, 21), this._scanCodeKeyCodeMapper.registrationComplete();
  }
  dumpDebugInfo() {
    const e = [], t = [
      88,
      104
    ];
    let n = 0;
    e.push(`isUSStandard: ${this._isUSStandard}`), e.push("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
    for (let i = 0; i < 193; i++) {
      if (v[i] !== -1 && t.indexOf(i) === -1)
        continue;
      n % 4 === 0 && (e.push("|       HW Code combination      |  Key  |    KeyCode combination    | Pri |          UI label         |         User settings          |    Electron accelerator   |       Dispatching string       | WYSIWYG |"), e.push("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")), n++;
      const o = this._codeInfo[i];
      for (let s = 0; s < 8; s++) {
        const c = !!(s & 1), u = !!(s & 2), p = !!(s & 4), h = new q(c, u, p, i), a = this.resolveKeyboardEvent({
          _standardKeyboardEventBrand: !0,
          ctrlKey: h.ctrlKey,
          shiftKey: h.shiftKey,
          altKey: h.altKey,
          metaKey: !1,
          altGraphKey: !1,
          keyCode: -1,
          code: S.toString(i)
        }), y = h.toString(), d = h.getProducedChar(o), m = a.getAriaLabel(), f = m ? m.replace(/Control\+/, "Ctrl+") : null, b = a.getUserSettingsLabel(), C = a.getElectronAccelerator(), L = a.getDispatchChords()[0], W = (a ? a.isWYSIWYG() : !1) ? "       " : "   NO  ", R = this._scanCodeKeyCodeMapper.lookupScanCodeCombo(h);
        if (R.length === 0)
          e.push(`| ${this._leftPad(y, 30)} | ${d} | ${this._leftPad("", 25)} | ${this._leftPad("", 3)} | ${this._leftPad(f, 25)} | ${this._leftPad(b, 30)} | ${this._leftPad(C, 25)} | ${this._leftPad(L, 30)} | ${W} |`);
        else
          for (let $ = 0, te = R.length; $ < te; $++) {
            const Ce = R[$];
            let j;
            const ne = this._scanCodeKeyCodeMapper.lookupKeyCodeCombo(Ce);
            if (ne.length === 1)
              j = "";
            else {
              let _e = -1;
              for (let B = 0; B < ne.length; B++)
                if (ne[B].equals(h)) {
                  _e = B + 1;
                  break;
                }
              j = String(_e);
            }
            const Ke = Ce.toString();
            $ === 0 ? e.push(`| ${this._leftPad(y, 30)} | ${d} | ${this._leftPad(Ke, 25)} | ${this._leftPad(j, 3)} | ${this._leftPad(f, 25)} | ${this._leftPad(b, 30)} | ${this._leftPad(C, 25)} | ${this._leftPad(L, 30)} | ${W} |`) : e.push(`| ${this._leftPad("", 30)} |       | ${this._leftPad(Ke, 25)} | ${this._leftPad(j, 3)} | ${this._leftPad("", 25)} | ${this._leftPad("", 30)} | ${this._leftPad("", 25)} | ${this._leftPad("", 30)} |         |`);
          }
      }
      e.push("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
    }
    return e.join(`
`);
  }
  _leftPad(e, t) {
    for (e === null && (e = "null"); e.length < t; )
      e = " " + e;
    return e;
  }
  keyCodeChordToScanCodeChord(e) {
    if (e.keyCode === 3)
      return [new T(
        e.ctrlKey,
        e.shiftKey,
        e.altKey,
        e.metaKey,
        46
      )];
    const t = this._scanCodeKeyCodeMapper.lookupKeyCodeCombo(new le(e.ctrlKey, e.shiftKey, e.altKey, e.keyCode)), n = [];
    for (let i = 0, o = t.length; i < o; i++) {
      const s = t[i];
      n[i] = new T(
        s.ctrlKey,
        s.shiftKey,
        s.altKey,
        e.metaKey,
        s.scanCode
      );
    }
    return n;
  }
  getUILabelForScanCodeChord(e) {
    if (!e)
      return null;
    if (e.isDuplicateModifierCase())
      return "";
    if (this._OS === 2)
      switch (e.scanCode) {
        case 86:
          return "←";
        case 88:
          return "↑";
        case 85:
          return "→";
        case 87:
          return "↓";
      }
    return this._scanCodeToLabel[e.scanCode];
  }
  getAriaLabelForScanCodeChord(e) {
    return e ? e.isDuplicateModifierCase() ? "" : this._scanCodeToLabel[e.scanCode] : null;
  }
  getDispatchStrForScanCodeChord(e) {
    const t = this._scanCodeToDispatch[e.scanCode];
    if (!t)
      return null;
    let n = "";
    return e.ctrlKey && (n += "ctrl+"), e.shiftKey && (n += "shift+"), e.altKey && (n += "alt+"), e.metaKey && (n += "meta+"), n += t, n;
  }
  getUserSettingsLabelForScanCodeChord(e) {
    if (!e)
      return null;
    if (e.isDuplicateModifierCase())
      return "";
    const t = v[e.scanCode];
    if (t !== -1)
      return _.toUserSettingsUS(t).toLowerCase();
    const n = this._scanCodeKeyCodeMapper.guessStableKeyCode(e.scanCode);
    if (n !== -1) {
      const i = this.keyCodeChordToScanCodeChord(new A(
        e.ctrlKey,
        e.shiftKey,
        e.altKey,
        e.metaKey,
        n
      ));
      for (let o = 0, s = i.length; o < s; o++)
        if (i[o].scanCode === e.scanCode)
          return _.toUserSettingsUS(n).toLowerCase();
    }
    return this._scanCodeToDispatch[e.scanCode];
  }
  getElectronAcceleratorLabelForScanCodeChord(e) {
    if (!e)
      return null;
    const t = v[e.scanCode];
    if (t !== -1)
      return _.toElectronAccelerator(t);
    const n = this._scanCodeKeyCodeMapper.guessStableKeyCode(e.scanCode);
    return this._OS === 3 && !this._isUSStandard && (n === 85 || n === 86 || n === 87 || n === 88 || n === 89 || n === 90 || n === 91 || n === 92 || n === 93 || n === 94) ? null : n !== -1 ? _.toElectronAccelerator(n) : null;
  }
  _toResolvedKeybinding(e) {
    if (e.length === 0)
      return [];
    const t = [];
    return this._generateResolvedKeybindings(e, 0, [], t), t;
  }
  _generateResolvedKeybindings(e, t, n, i) {
    const o = e[t], s = t === e.length - 1;
    for (let c = 0, u = o.length; c < u; c++) {
      const p = [...n, o[c]];
      s ? i.push(new Pe(this, this._OS, p)) : this._generateResolvedKeybindings(e, t + 1, p, i);
    }
  }
  resolveKeyboardEvent(e) {
    let t = S.toEnum(e.code);
    t === 94 && (t = 46);
    const n = e.keyCode;
    if (n === 15 || n === 16 || n === 17 || n === 18 || n === 20 || n === 19 || n === 14 || n === 13 || n === 12 || n === 11 || n === 1) {
      const c = Ie[n];
      c !== -1 && (t = c);
    } else if ((t === 95 || t === 96 || t === 97 || t === 98 || t === 99 || t === 100 || t === 101 || t === 102 || t === 103 || t === 104 || t === 105) && n >= 0) {
      const c = Ie[n];
      c !== -1 && (t = c);
    }
    const i = e.ctrlKey || this._mapAltGrToCtrlAlt && e.altGraphKey, o = e.altKey || this._mapAltGrToCtrlAlt && e.altGraphKey, s = new T(i, e.shiftKey, o, e.metaKey, t);
    return new Pe(this, this._OS, [s]);
  }
  _resolveChord(e) {
    return e ? e instanceof T ? [e] : this.keyCodeChordToScanCodeChord(e) : [];
  }
  resolveKeybinding(e) {
    const t = e.chords.map((n) => this._resolveChord(n));
    return this._toResolvedKeybinding(t);
  }
  static _redirectCharCode(e) {
    switch (e) {
      case 12290:
        return 46;
      case 12300:
        return 91;
      case 12301:
        return 93;
      case 12304:
        return 91;
      case 12305:
        return 93;
      case 65307:
        return 59;
      case 65292:
        return 44;
    }
    return e;
  }
  static _charCodeToKb(e) {
    return e = this._redirectCharCode(e), e < O.length ? O[e] : null;
  }
  static getCharCode(e) {
    if (e.length === 0)
      return 0;
    const t = e.charCodeAt(0);
    switch (t) {
      case 768:
        return 96;
      case 769:
        return 180;
      case 770:
        return 94;
      case 771:
        return 732;
      case 772:
        return 175;
      case 773:
        return 8254;
      case 774:
        return 728;
      case 775:
        return 729;
      case 776:
        return 168;
      case 778:
        return 730;
      case 779:
        return 733;
    }
    return t;
  }
}
(function() {
  function l(e, t, n) {
    for (let i = O.length; i < e; i++)
      O[i] = null;
    O[e] = { keyCode: t, shiftKey: n };
  }
  for (let e = 65; e <= 90; e++)
    l(e, 31 + (e - 65), !0);
  for (let e = 97; e <= 122; e++)
    l(e, 31 + (e - 97), !1);
  l(59, 85, !1), l(58, 85, !0), l(61, 86, !1), l(43, 86, !0), l(44, 87, !1), l(60, 87, !0), l(45, 88, !1), l(95, 88, !0), l(46, 89, !1), l(62, 89, !0), l(47, 90, !1), l(63, 90, !0), l(96, 91, !1), l(126, 91, !0), l(91, 92, !1), l(123, 92, !0), l(92, 93, !1), l(124, 93, !0), l(93, 94, !1), l(125, 94, !0), l(39, 95, !1), l(34, 95, !0);
})();
function Yt(l) {
  switch (l) {
    case "./keyboardLayouts/layout.contribution.darwin.js":
      return import("./layout.contribution.darwin-c1f62640.js").then((e) => e.default ?? e);
    case "./keyboardLayouts/layout.contribution.linux.js":
      return import("./layout.contribution.linux-dd897a0e.js").then((e) => e.default ?? e);
    case "./keyboardLayouts/layout.contribution.win.js":
      return import("./layout.contribution.win-d416c364.js").then((e) => e.default ?? e);
    default:
      return new Promise(function(e, t) {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
          t.bind(null, new Error("Unknown variable dynamic import: " + l))
        );
      });
  }
}
class zt extends F {
  get activeKeymap() {
    return this._activeKeymapInfo;
  }
  get keymapInfos() {
    return this._keymapInfos;
  }
  get activeKeyboardLayout() {
    var e;
    return this._initialized ? ((e = this._activeKeymapInfo) == null ? void 0 : e.layout) ?? null : null;
  }
  get activeKeyMapping() {
    var e;
    return this._initialized ? ((e = this._activeKeymapInfo) == null ? void 0 : e.mapping) ?? null : null;
  }
  get keyboardLayouts() {
    return this._keymapInfos.map((e) => e.layout);
  }
  constructor(e) {
    super(), this._configurationService = e, this._onDidChangeKeyboardMapper = new U(), this.onDidChangeKeyboardMapper = this._onDidChangeKeyboardMapper.event, this._keyboardMapper = null, this._initialized = !1, this._keymapInfos = [], this._mru = [], this._activeKeymapInfo = null, navigator.keyboard && navigator.keyboard.addEventListener && navigator.keyboard.addEventListener("layoutchange", () => {
      this._getBrowserKeyMapping().then((t) => {
        this.isKeyMappingActive(t) || this.setLayoutFromBrowserAPI();
      });
    }), this._register(this._configurationService.onDidChangeConfiguration((t) => {
      t.affectsConfiguration("keyboard") && (this._keyboardMapper = null, this._onDidChangeKeyboardMapper.fire());
    }));
  }
  registerKeyboardLayout(e) {
    this._keymapInfos.push(e), this._mru = this._keymapInfos;
  }
  removeKeyboardLayout(e) {
    let t = this._mru.indexOf(e);
    this._mru.splice(t, 1), t = this._keymapInfos.indexOf(e), this._keymapInfos.splice(t, 1);
  }
  getMatchedKeymapInfo(e) {
    if (!e)
      return null;
    const t = this.getUSStandardLayout();
    if (t) {
      let n = t.getScore(e);
      if (n === 0)
        return {
          result: t,
          score: 0
        };
      let i = t;
      for (let o = 0; o < this._mru.length; o++) {
        const s = this._mru[o].getScore(e);
        if (s > n) {
          if (s === 0)
            return {
              result: this._mru[o],
              score: 0
            };
          n = s, i = this._mru[o];
        }
      }
      return {
        result: i,
        score: n
      };
    }
    for (let n = 0; n < this._mru.length; n++)
      if (this._mru[n].fuzzyEqual(e))
        return {
          result: this._mru[n],
          score: 0
        };
    return null;
  }
  getUSStandardLayout() {
    const e = this._mru.filter((t) => t.layout.isUSStandard);
    return e.length ? e[0] : null;
  }
  isKeyMappingActive(e) {
    return this._activeKeymapInfo && e && this._activeKeymapInfo.fuzzyEqual(e);
  }
  setUSKeyboardLayout() {
    this._activeKeymapInfo = this.getUSStandardLayout();
  }
  setActiveKeyMapping(e) {
    let t = !1;
    const n = this.getMatchedKeymapInfo(e);
    if (n && (this._activeKeymapInfo ? e && n.result.getScore(e) > this._activeKeymapInfo.getScore(e) && (this._activeKeymapInfo = n.result, t = !0) : (this._activeKeymapInfo = n.result, t = !0)), this._activeKeymapInfo || (this._activeKeymapInfo = this.getUSStandardLayout(), t = !0), !this._activeKeymapInfo || !t)
      return;
    const i = this._mru.indexOf(this._activeKeymapInfo);
    this._mru.splice(i, 1), this._mru.unshift(this._activeKeymapInfo), this._setKeyboardData(this._activeKeymapInfo);
  }
  setActiveKeymapInfo(e) {
    this._activeKeymapInfo = e;
    const t = this._mru.indexOf(this._activeKeymapInfo);
    t !== 0 && (this._mru.splice(t, 1), this._mru.unshift(this._activeKeymapInfo), this._setKeyboardData(this._activeKeymapInfo));
  }
  setLayoutFromBrowserAPI() {
    this._updateKeyboardLayoutAsync(this._initialized);
  }
  _updateKeyboardLayoutAsync(e, t) {
    e && this._getBrowserKeyMapping(t).then((n) => {
      this.isKeyMappingActive(n) || this.setActiveKeyMapping(n);
    });
  }
  getKeyboardMapper() {
    const e = qt(this._configurationService);
    return e.dispatch === 1 || !this._initialized || !this._activeKeymapInfo ? new Le(e.mapAltGrToCtrlAlt, w) : (this._keyboardMapper || (this._keyboardMapper = new jt(
      Qe._createKeyboardMapper(this._activeKeymapInfo, e.mapAltGrToCtrlAlt)
    )), this._keyboardMapper);
  }
  validateCurrentKeyboardMapping(e) {
    !this._initialized || this._validateCurrentKeyboardMapping(e) || this._updateKeyboardLayoutAsync(!0, e);
  }
  setKeyboardLayout(e) {
    const t = this.keymapInfos.filter((n) => Q(n.layout) === e);
    t.length > 0 && this.setActiveKeymapInfo(t[0]);
  }
  _setKeyboardData(e) {
    this._initialized = !0, this._keyboardMapper = null, this._onDidChangeKeyboardMapper.fire();
  }
  static _createKeyboardMapper(e, t) {
    const n = e.mapping, i = !!e.layout.isUSStandard;
    return w === 1 ? new Bt(i, n, t) : Object.keys(n).length === 0 ? new Le(t, w) : new k(i, n, t, w);
  }
  _validateCurrentKeyboardMapping(e) {
    if (!this._initialized)
      return !0;
    const t = e, n = this._activeKeymapInfo;
    if (!n || t.browserEvent.key === "Dead" || t.browserEvent.isComposing)
      return !0;
    const i = n.mapping[t.code];
    if (!i)
      return !1;
    if (i.value === "")
      return (e.ctrlKey || e.metaKey) && setTimeout(() => {
        this._getBrowserKeyMapping().then((c) => {
          this.isKeyMappingActive(c) || this.setLayoutFromBrowserAPI();
        });
      }, 350), !0;
    const o = t.altKey && t.shiftKey ? i.withShiftAltGr : t.altKey ? i.withAltGr : t.shiftKey ? i.withShift : i.value, s = t.altKey && t.shiftKey && i.withShiftAltGrIsDeadKey || t.altKey && i.withAltGrIsDeadKey || t.shiftKey && i.withShiftIsDeadKey || i.valueIsDeadKey;
    return !(s && t.browserEvent.key !== "Dead" || !s && t.browserEvent.key !== o);
  }
  async _getBrowserKeyMapping(e) {
    if (navigator.keyboard)
      try {
        return navigator.keyboard.getLayoutMap().then((t) => {
          const n = {};
          for (const i of t)
            n[i[0]] = {
              value: i[1],
              withShift: "",
              withAltGr: "",
              withShiftAltGr: ""
            };
          return n;
        });
      } catch {
      }
    else if (e && !e.shiftKey && !e.altKey && !e.metaKey && !e.metaKey) {
      const t = {}, n = e;
      return t[n.browserEvent.code] = {
        value: n.browserEvent.key,
        withShift: "",
        withAltGr: "",
        withShiftAltGr: ""
      }, this.getMatchedKeymapInfo(t) ? t : null;
    }
    return null;
  }
}
class Qe extends zt {
  constructor(e, t, n, i) {
    super(e), Yt("./keyboardLayouts/layout.contribution." + (ae ? "win" : qe ? "darwin" : "linux") + ".js").then((s) => {
      const c = s.KeyboardLayoutContribution.INSTANCE.layoutInfos;
      this._keymapInfos.push(...c.map((u) => new ee(
        u.layout,
        u.secondaryLayouts,
        u.mapping,
        u.isUserKeyboardLayout
      ))), this._mru = this._keymapInfos, this._initialized = !0, this.setLayoutFromBrowserAPI();
    });
  }
}
class Vt extends F {
  get keyboardLayout() {
    return this._keyboardLayout;
  }
  constructor(e, t) {
    super(), this.keyboardLayoutResource = e, this.fileService = t, this._onDidChange = this._register(new U()), this.onDidChange = this._onDidChange.event, this._keyboardLayout = null, this.reloadConfigurationScheduler = this._register(new Fe(() => this.reload().then((n) => {
      n && this._onDidChange.fire();
    }), 50)), this._register(J.filter(this.fileService.onDidFilesChange, (n) => n.contains(this.keyboardLayoutResource))(() => this.reloadConfigurationScheduler.schedule()));
  }
  async initialize() {
    await this.reload();
  }
  async reload() {
    const e = this._keyboardLayout;
    try {
      const t = await this.fileService.readFile(this.keyboardLayoutResource), n = je(t.value.toString());
      if (Kt(n) === "object") {
        const i = n.layout, o = n.rawMapping;
        this._keyboardLayout = ee.createKeyboardLayoutFromDebugInfo(i, o, !0);
      } else
        this._keyboardLayout = null;
    } catch {
      this._keyboardLayout = null;
    }
    return e ? !We(e, this._keyboardLayout) : !0;
  }
}
let he = class extends F {
  constructor(e, t, n, i, o, s) {
    super(), this.configurationService = s, this._onDidChangeKeyboardLayout = new U(), this.onDidChangeKeyboardLayout = this._onDidChangeKeyboardLayout.event;
    const u = s.getValue("keyboard").layout;
    this._keyboardLayoutMode = u ?? "autodetect", this._factory = new Qe(s, n, i, o), this._register(this._factory.onDidChangeKeyboardMapper(() => {
      this._onDidChangeKeyboardLayout.fire();
    })), u && u !== "autodetect" && this._factory.setKeyboardLayout(u), this._register(s.onDidChangeConfiguration((p) => {
      if (p.affectsConfiguration("keyboard.layout")) {
        const a = s.getValue("keyboard").layout;
        this._keyboardLayoutMode = a, a === "autodetect" ? this._factory.setLayoutFromBrowserAPI() : this._factory.setKeyboardLayout(a);
      }
    })), this._userKeyboardLayout = new Vt(e.keyboardLayoutResource, t), this._userKeyboardLayout.initialize().then(() => {
      this._userKeyboardLayout.keyboardLayout && (this._factory.registerKeyboardLayout(this._userKeyboardLayout.keyboardLayout), this.setUserKeyboardLayoutIfMatched());
    }), this._register(this._userKeyboardLayout.onDidChange(() => {
      const p = this._factory.keymapInfos.filter((h) => h.isUserKeyboardLayout);
      p.length ? this._userKeyboardLayout.keyboardLayout ? p[0].update(this._userKeyboardLayout.keyboardLayout) : this._factory.removeKeyboardLayout(p[0]) : this._userKeyboardLayout.keyboardLayout && this._factory.registerKeyboardLayout(this._userKeyboardLayout.keyboardLayout), this.setUserKeyboardLayoutIfMatched();
    }));
  }
  setUserKeyboardLayoutIfMatched() {
    const t = this.configurationService.getValue("keyboard").layout;
    t && this._userKeyboardLayout.keyboardLayout && Q(this._userKeyboardLayout.keyboardLayout.layout) === t && this._factory.activeKeymap && (this._userKeyboardLayout.keyboardLayout.equal(this._factory.activeKeymap) || this._factory.setActiveKeymapInfo(this._userKeyboardLayout.keyboardLayout));
  }
  getKeyboardMapper() {
    return this._factory.getKeyboardMapper();
  }
  getCurrentKeyboardLayout() {
    return this._factory.activeKeyboardLayout;
  }
  getAllKeyboardLayouts() {
    return this._factory.keyboardLayouts;
  }
  getRawKeyboardMapping() {
    return this._factory.activeKeyMapping;
  }
  validateCurrentKeyboardMapping(e) {
    this._keyboardLayoutMode === "autodetect" && this._factory.validateCurrentKeyboardMapping(e);
  }
};
he = fe([
  K(0, gt),
  K(1, pe),
  K(2, Re),
  K(3, bt),
  K(4, X),
  K(5, Ct)
], he);
const Ht = ge.as(Be.Configuration), Jt = {
  id: "keyboard",
  order: 15,
  type: "object",
  title: r("keyboardConfigurationTitle", "Keyboard"),
  properties: {
    "keyboard.layout": {
      type: "string",
      default: "autodetect",
      description: r("keyboard.layout.config", "Control the keyboard layout used in web.")
    }
  }
};
Ht.registerConfiguration(Jt);
let ye = class extends F {
  constructor(e, t, n) {
    super(), this._instantiationService = e, this._extensionService = t, this._logService = n, this._extensionHostIsReady = !1, this._onWillExecuteCommand = this._register(new U()), this.onWillExecuteCommand = this._onWillExecuteCommand.event, this._onDidExecuteCommand = new U(), this.onDidExecuteCommand = this._onDidExecuteCommand.event, this._extensionService.whenInstalledExtensionsRegistered().then((i) => this._extensionHostIsReady = i), this._starActivation = null;
  }
  _activateStar() {
    return this._starActivation || (this._starActivation = Promise.race([
      this._extensionService.activateByEvent("*"),
      St(3e4)
    ])), this._starActivation;
  }
  async executeCommand(e, ...t) {
    this._logService.trace("CommandService#executeCommand", e);
    const n = `onCommand:${e}`;
    return V.getCommand(e) ? this._extensionService.activationEventIsDone(n) ? this._tryExecuteCommand(e, t) : this._extensionHostIsReady ? (await this._extensionService.activateByEvent(n), this._tryExecuteCommand(e, t)) : (this._extensionService.activateByEvent(n), this._tryExecuteCommand(e, t)) : (await Promise.all([
      this._extensionService.activateByEvent(n),
      Promise.race([
        this._activateStar(),
        J.toPromise(J.filter(V.onDidRegisterCommand, (o) => o === e))
      ])
    ]), this._tryExecuteCommand(e, t));
  }
  _tryExecuteCommand(e, t) {
    const n = V.getCommand(e);
    if (!n)
      return Promise.reject(new Error(`command '${e}' not found`));
    try {
      this._onWillExecuteCommand.fire({ commandId: e, args: t });
      const i = this._instantiationService.invokeFunction(n.handler, ...t);
      return this._onDidExecuteCommand.fire({ commandId: e, args: t }), Promise.resolve(i);
    } catch (i) {
      return Promise.reject(i);
    }
  }
};
ye = fe([
  K(0, _t),
  K(1, $e),
  K(2, Ge)
], ye);
class Qt extends vt {
  constructor() {
    super({
      id: "workbench.action.toggleKeybindingsLog",
      title: { value: r("toggleKeybindingsLog", "Toggle Keyboard Shortcuts Troubleshooting"), original: "Toggle Keyboard Shortcuts Troubleshooting" },
      category: wt.Developer,
      f1: !0
    });
  }
  run(e) {
    e.get(Ye).toggleLogging() && e.get(X).executeCommand(Dt);
  }
}
kt(Qt);
async function rn(l) {
  const e = Te.get(xt);
  await Te.get(pe).writeFile(e.defaultProfile.keybindingsResource, It.fromString(l));
}
class Zt extends ce {
  constructor() {
    super(...arguments), this.keybindingProviders = [];
  }
  registerKeybindingProvider(e) {
    return this.keybindingProviders.push(e), this.updateResolver(), Tt(() => {
      const t = this.keybindingProviders.indexOf(e);
      t >= 0 && (this.keybindingProviders.splice(t, 1), this.updateResolver());
    });
  }
  _getResolver() {
    return super._getResolver();
  }
  getUserKeybindingItems() {
    return [...super.getUserKeybindingItems(), ...this.keybindingProviders.flatMap((e) => e())];
  }
}
function an() {
  return {
    ...Lt(),
    [Ye.toString()]: new se(Zt, [], !1),
    [Oe.toString()]: new se(he, void 0, !0),
    [X.toString()]: new se(ye, [], !0)
  };
}
export {
  an as default,
  rn as updateUserKeybindings
};
