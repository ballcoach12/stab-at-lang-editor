import { Q as l, h_ as d, hO as h, r1 as c, mn as u, G as e, bh as o, bT as t, bR as p, e2 as i, fk as n, r2 as w } from "./verifyPrepare-778b382e.js";
const r = l.as(d.Configuration);
(function() {
  l.as(h.Workbench).registerWorkbenchContribution(c, 2), r.registerConfiguration({
    ...u,
    properties: {
      "workbench.editor.titleScrollbarSizing": {
        type: "string",
        enum: ["default", "large"],
        enumDescriptions: [
          e("workbench.editor.titleScrollbarSizing.default", "The default size."),
          e(
            "workbench.editor.titleScrollbarSizing.large",
            "Increases the size, so it can be grabbed more easily with the mouse."
          )
        ],
        description: e(
          "tabScrollbarHeight",
          "Controls the height of the scrollbars used for tabs and breadcrumbs in the editor title area."
        ),
        default: "default"
      },
      "workbench.editor.showTabs": {
        type: "boolean",
        description: e(
          "showEditorTabs",
          "Controls whether opened editors should show in tabs or not."
        ),
        default: !0
      },
      "workbench.editor.wrapTabs": {
        type: "boolean",
        markdownDescription: e(
          "wrapTabs",
          "Controls whether tabs should be wrapped over multiple lines when exceeding available space or whether a scrollbar should appear instead. This value is ignored when `#workbench.editor.showTabs#` is disabled."
        ),
        default: !1
      },
      "workbench.editor.scrollToSwitchTabs": {
        type: "boolean",
        markdownDescription: e(
          { comment: ["This is the description for a setting. Values surrounded by single quotes are not to be translated."], key: "scrollToSwitchTabs" },
          "Controls whether scrolling over tabs will open them or not. By default tabs will only reveal upon scrolling, but not open. You can press and hold the Shift-key while scrolling to change this behavior for that duration. This value is ignored when `#workbench.editor.showTabs#` is disabled."
        ),
        default: !1
      },
      "workbench.editor.highlightModifiedTabs": {
        type: "boolean",
        markdownDescription: e(
          "highlightModifiedTabs",
          "Controls whether a top border is drawn on tabs for editors that have unsaved changes. This value is ignored when `#workbench.editor.showTabs#` is disabled."
        ),
        default: !1
      },
      "workbench.editor.decorations.badges": {
        type: "boolean",
        markdownDescription: e(
          "decorations.badges",
          "Controls whether editor file decorations should use badges."
        ),
        default: !0
      },
      "workbench.editor.decorations.colors": {
        type: "boolean",
        markdownDescription: e(
          "decorations.colors",
          "Controls whether editor file decorations should use colors."
        ),
        default: !0
      },
      "workbench.editor.labelFormat": {
        type: "string",
        enum: ["default", "short", "medium", "long"],
        enumDescriptions: [
          e(
            "workbench.editor.labelFormat.default",
            "Show the name of the file. When tabs are enabled and two files have the same name in one group the distinguishing sections of each file's path are added. When tabs are disabled, the path relative to the workspace folder is shown if the editor is active."
          ),
          e(
            "workbench.editor.labelFormat.short",
            "Show the name of the file followed by its directory name."
          ),
          e(
            "workbench.editor.labelFormat.medium",
            "Show the name of the file followed by its path relative to the workspace folder."
          ),
          e(
            "workbench.editor.labelFormat.long",
            "Show the name of the file followed by its absolute path."
          )
        ],
        default: "default",
        description: e({
          comment: ["This is the description for a setting. Values surrounded by parenthesis are not to be translated."],
          key: "tabDescription"
        }, "Controls the format of the label for an editor.")
      },
      "workbench.editor.untitled.labelFormat": {
        type: "string",
        enum: ["content", "name"],
        enumDescriptions: [
          e(
            "workbench.editor.untitled.labelFormat.content",
            "The name of the untitled file is derived from the contents of its first line unless it has an associated file path. It will fallback to the name in case the line is empty or contains no word characters."
          ),
          e(
            "workbench.editor.untitled.labelFormat.name",
            "The name of the untitled file is not derived from the contents of the file."
          )
        ],
        default: "content",
        description: e({
          comment: ["This is the description for a setting. Values surrounded by parenthesis are not to be translated."],
          key: "untitledLabelFormat"
        }, "Controls the format of the label for an untitled editor.")
      },
      "workbench.editor.untitled.hint": {
        type: "string",
        enum: ["text", "hidden"],
        default: "text",
        markdownDescription: e(
          { comment: ["This is the description for a setting. Values surrounded by single quotes are not to be translated."], key: "untitledHint" },
          "Controls if the untitled text hint should be visible in the editor."
        )
      },
      "workbench.editor.languageDetection": {
        type: "boolean",
        default: !0,
        description: e(
          "workbench.editor.languageDetection",
          "Controls whether the language in a text editor is automatically detected unless the language has been explicitly set by the language picker. This can also be scoped by language so you can specify which languages you do not want to be switched off of. This is useful for languages like Markdown that often contain other languages that might trick language detection into thinking it's the embedded language and not Markdown."
        ),
        scope: 5
      },
      "workbench.editor.historyBasedLanguageDetection": {
        type: "boolean",
        default: !0,
        tags: ["experimental"],
        description: e(
          "workbench.editor.historyBasedLanguageDetection",
          "Enables use of editor history in language detection. This causes automatic language detection to favor languages that have been recently opened and allows for automatic language detection to operate with smaller inputs."
        )
      },
      "workbench.editor.preferHistoryBasedLanguageDetection": {
        type: "boolean",
        default: !1,
        tags: ["experimental"],
        description: e(
          "workbench.editor.preferBasedLanguageDetection",
          "When enabled, a language detection model that takes into account editor history will be given higher precedence."
        )
      },
      "workbench.editor.languageDetectionHints": {
        type: "object",
        default: { untitledEditors: !0, notebookEditors: !0 },
        tags: ["experimental"],
        description: e(
          "workbench.editor.showLanguageDetectionHints",
          "When enabled, shows a Status bar Quick Fix when the editor language doesn't match detected content language."
        ),
        additionalProperties: !1,
        properties: {
          untitledEditors: {
            type: "boolean",
            description: e(
              "workbench.editor.showLanguageDetectionHints.editors",
              "Show in untitled text editors"
            )
          },
          notebookEditors: {
            type: "boolean",
            description: e(
              "workbench.editor.showLanguageDetectionHints.notebook",
              "Show in notebook editors"
            )
          }
        }
      },
      "workbench.editor.tabCloseButton": {
        type: "string",
        enum: ["left", "right", "off"],
        default: "right",
        markdownDescription: e(
          { comment: ["This is the description for a setting. Values surrounded by single quotes are not to be translated."], key: "editorTabCloseButton" },
          "Controls the position of the editor's tabs close buttons, or disables them when set to 'off'. This value is ignored when `#workbench.editor.showTabs#` is disabled."
        )
      },
      "workbench.editor.tabSizing": {
        type: "string",
        enum: ["fit", "shrink", "fixed"],
        default: "fit",
        enumDescriptions: [
          e(
            "workbench.editor.tabSizing.fit",
            "Always keep tabs large enough to show the full editor label."
          ),
          e(
            "workbench.editor.tabSizing.shrink",
            "Allow tabs to get smaller when the available space is not enough to show all tabs at once."
          ),
          e(
            "workbench.editor.tabSizing.fixed",
            "Make all tabs the same size, while allowing them to get smaller when the available space is not enough to show all tabs at once."
          )
        ],
        markdownDescription: e(
          { comment: ["This is the description for a setting. Values surrounded by single quotes are not to be translated."], key: "tabSizing" },
          "Controls the size of editor tabs. This value is ignored when `#workbench.editor.showTabs#` is disabled."
        )
      },
      "workbench.editor.tabSizingFixedMinWidth": {
        type: "number",
        default: 50,
        minimum: 38,
        markdownDescription: e(
          { comment: ["This is the description for a setting. Values surrounded by single quotes are not to be translated."], key: "workbench.editor.tabSizingFixedMinWidth" },
          "Controls the minimum width of tabs when `#workbench.editor.tabSizing#` size is set to `fixed`."
        )
      },
      "workbench.editor.tabSizingFixedMaxWidth": {
        type: "number",
        default: 160,
        minimum: 38,
        markdownDescription: e(
          { comment: ["This is the description for a setting. Values surrounded by single quotes are not to be translated."], key: "workbench.editor.tabSizingFixedMaxWidth" },
          "Controls the maximum width of tabs when `#workbench.editor.tabSizing#` size is set to `fixed`."
        )
      },
      "workbench.editor.pinnedTabSizing": {
        type: "string",
        enum: ["normal", "compact", "shrink"],
        default: "normal",
        enumDescriptions: [
          e(
            "workbench.editor.pinnedTabSizing.normal",
            "A pinned tab inherits the look of non pinned tabs."
          ),
          e(
            "workbench.editor.pinnedTabSizing.compact",
            "A pinned tab will show in a compact form with only icon or first letter of the editor name."
          ),
          e(
            "workbench.editor.pinnedTabSizing.shrink",
            "A pinned tab shrinks to a compact fixed size showing parts of the editor name."
          )
        ],
        markdownDescription: e(
          { comment: ["This is the description for a setting. Values surrounded by single quotes are not to be translated."], key: "pinnedTabSizing" },
          "Controls the size of pinned editor tabs. Pinned tabs are sorted to the beginning of all opened tabs and typically do not close until unpinned. This value is ignored when `#workbench.editor.showTabs#` is disabled."
        )
      },
      "workbench.editor.splitSizing": {
        type: "string",
        enum: ["auto", "distribute", "split"],
        default: "auto",
        enumDescriptions: [
          e(
            "workbench.editor.splitSizingAuto",
            "Splits the active editor group to equal parts, unless all editor groups are already in equal parts. In that case, splits all the editor groups to equal parts."
          ),
          e(
            "workbench.editor.splitSizingDistribute",
            "Splits all the editor groups to equal parts."
          ),
          e(
            "workbench.editor.splitSizingSplit",
            "Splits the active editor group to equal parts."
          )
        ],
        description: e(
          { comment: ["This is the description for a setting. Values surrounded by single quotes are not to be translated."], key: "splitSizing" },
          "Controls the size of editor groups when splitting them."
        )
      },
      "workbench.editor.splitOnDragAndDrop": {
        type: "boolean",
        default: !0,
        description: e(
          "splitOnDragAndDrop",
          "Controls if editor groups can be split from drag and drop operations by dropping an editor or file on the edges of the editor area."
        )
      },
      "workbench.editor.focusRecentEditorAfterClose": {
        type: "boolean",
        description: e(
          "focusRecentEditorAfterClose",
          "Controls whether tabs are closed in most recently used order or from left to right."
        ),
        default: !0
      },
      "workbench.editor.showIcons": {
        type: "boolean",
        description: e(
          "showIcons",
          "Controls whether opened editors should show with an icon or not. This requires a file icon theme to be enabled as well."
        ),
        default: !0
      },
      "workbench.editor.enablePreview": {
        type: "boolean",
        description: e(
          "enablePreview",
          "Controls whether opened editors show as preview editors. Preview editors do not stay open, are reused until explicitly set to be kept open (via double-click or editing), and show file names in italics."
        ),
        default: !0
      },
      "workbench.editor.enablePreviewFromQuickOpen": {
        type: "boolean",
        markdownDescription: e(
          "enablePreviewFromQuickOpen",
          "Controls whether editors opened from Quick Open show as preview editors. Preview editors do not stay open, and are reused until explicitly set to be kept open (via double-click or editing). When enabled, hold Ctrl before selection to open an editor as a non-preview. This value is ignored when `#workbench.editor.enablePreview#` is disabled."
        ),
        default: !1
      },
      "workbench.editor.enablePreviewFromCodeNavigation": {
        type: "boolean",
        markdownDescription: e(
          "enablePreviewFromCodeNavigation",
          "Controls whether editors remain in preview when a code navigation is started from them. Preview editors do not stay open, and are reused until explicitly set to be kept open (via double-click or editing). This value is ignored when `#workbench.editor.enablePreview#` is disabled."
        ),
        default: !1
      },
      "workbench.editor.closeOnFileDelete": {
        type: "boolean",
        description: e(
          "closeOnFileDelete",
          "Controls whether editors showing a file that was opened during the session should close automatically when getting deleted or renamed by some other process. Disabling this will keep the editor open  on such an event. Note that deleting from within the application will always close the editor and that editors with unsaved changes will never close to preserve your data."
        ),
        default: !1
      },
      "workbench.editor.openPositioning": {
        type: "string",
        enum: ["left", "right", "first", "last"],
        default: "right",
        markdownDescription: e(
          { comment: ["This is the description for a setting. Values surrounded by single quotes are not to be translated."], key: "editorOpenPositioning" },
          "Controls where editors open. Select `left` or `right` to open editors to the left or right of the currently active one. Select `first` or `last` to open editors independently from the currently active one."
        )
      },
      "workbench.editor.openSideBySideDirection": {
        type: "string",
        enum: ["right", "down"],
        default: "right",
        markdownDescription: e(
          "sideBySideDirection",
          "Controls the default direction of editors that are opened side by side (for example, from the Explorer). By default, editors will open on the right hand side of the currently active one. If changed to `down`, the editors will open below the currently active one."
        )
      },
      "workbench.editor.closeEmptyGroups": {
        type: "boolean",
        description: e(
          "closeEmptyGroups",
          "Controls the behavior of empty editor groups when the last tab in the group is closed. When enabled, empty groups will automatically close. When disabled, empty groups will remain part of the grid."
        ),
        default: !0
      },
      "workbench.editor.revealIfOpen": {
        type: "boolean",
        description: e(
          "revealIfOpen",
          "Controls whether an editor is revealed in any of the visible groups if opened. If disabled, an editor will prefer to open in the currently active editor group. If enabled, an already opened editor will be revealed instead of opened again in the currently active editor group. Note that there are some cases where this setting is ignored, such as when forcing an editor to open in a specific group or to the side of the currently active group."
        ),
        default: !1
      },
      "workbench.editor.mouseBackForwardToNavigate": {
        type: "boolean",
        description: e(
          "mouseBackForwardToNavigate",
          "Enables the use of mouse buttons four and five for commands 'Go Back' and 'Go Forward'."
        ),
        default: !0
      },
      "workbench.editor.navigationScope": {
        type: "string",
        enum: ["default", "editorGroup", "editor"],
        default: "default",
        markdownDescription: e(
          "navigationScope",
          "Controls the scope of history navigation in editors for commands such as 'Go Back' and 'Go Forward'."
        ),
        enumDescriptions: [
          e(
            "workbench.editor.navigationScopeDefault",
            "Navigate across all opened editors and editor groups."
          ),
          e(
            "workbench.editor.navigationScopeEditorGroup",
            "Navigate only in editors of the active editor group."
          ),
          e(
            "workbench.editor.navigationScopeEditor",
            "Navigate only in the active editor."
          )
        ]
      },
      "workbench.editor.restoreViewState": {
        type: "boolean",
        markdownDescription: e(
          "restoreViewState",
          "Restores the last editor view state (such as scroll position) when re-opening editors after they have been closed. Editor view state is stored per editor group and discarded when a group closes. Use the {0} setting to use the last known view state across all editor groups in case no previous view state was found for a editor group.",
          "`#workbench.editor.sharedViewState#`"
        ),
        default: !0,
        scope: 5
      },
      "workbench.editor.sharedViewState": {
        type: "boolean",
        description: e(
          "sharedViewState",
          "Preserves the most recent editor view state (such as scroll position) across all editor groups and restores that if no specific editor view state is found for the editor group."
        ),
        default: !1
      },
      "workbench.editor.splitInGroupLayout": {
        type: "string",
        enum: ["vertical", "horizontal"],
        default: "horizontal",
        markdownDescription: e(
          "splitInGroupLayout",
          "Controls the layout for when an editor is split in an editor group to be either vertical or horizontal."
        ),
        enumDescriptions: [
          e(
            "workbench.editor.splitInGroupLayoutVertical",
            "Editors are positioned from top to bottom."
          ),
          e(
            "workbench.editor.splitInGroupLayoutHorizontal",
            "Editors are positioned from left to right."
          )
        ]
      },
      "workbench.editor.centeredLayoutAutoResize": {
        type: "boolean",
        default: !0,
        description: e(
          "centeredLayoutAutoResize",
          "Controls if the centered layout should automatically resize to maximum width when more than one group is open. Once only one group is open it will resize back to the original centered width."
        )
      },
      "workbench.editor.centeredLayoutFixedWidth": {
        type: "boolean",
        default: !1,
        description: e(
          "centeredLayoutDynamicWidth",
          "Controls whether the centered layout tries to maintain constant width when the window is resized."
        )
      },
      "workbench.editor.doubleClickTabToToggleEditorGroupSizes": {
        type: "boolean",
        default: !0,
        markdownDescription: e(
          { comment: ["This is the description for a setting. Values surrounded by single quotes are not to be translated."], key: "doubleClickTabToToggleEditorGroupSizes" },
          "Controls whether to maximize/restore the editor group when double clicking on a tab. This value is ignored when `#workbench.editor.showTabs#` is disabled."
        )
      },
      "workbench.editor.limit.enabled": {
        type: "boolean",
        default: !1,
        description: e(
          "limitEditorsEnablement",
          "Controls if the number of opened editors should be limited or not. When enabled, less recently used editors will close to make space for newly opening editors."
        )
      },
      "workbench.editor.limit.value": {
        type: "number",
        default: 10,
        exclusiveMinimum: 0,
        markdownDescription: e(
          "limitEditorsMaximum",
          "Controls the maximum number of opened editors. Use the {0} setting to control this limit per editor group or across all groups.",
          "`#workbench.editor.limit.perEditorGroup#`"
        )
      },
      "workbench.editor.limit.excludeDirty": {
        type: "boolean",
        default: !1,
        description: e(
          "limitEditorsExcludeDirty",
          "Controls if the maximum number of opened editors should exclude dirty editors for counting towards the configured limit."
        )
      },
      "workbench.editor.limit.perEditorGroup": {
        type: "boolean",
        default: !1,
        description: e(
          "perEditorGroup",
          "Controls if the limit of maximum opened editors should apply per editor group or across all editor groups."
        )
      },
      "workbench.localHistory.enabled": {
        type: "boolean",
        default: !0,
        description: e(
          "localHistoryEnabled",
          "Controls whether local file history is enabled. When enabled, the file contents of an editor that is saved will be stored to a backup location to be able to restore or review the contents later. Changing this setting has no effect on existing local file history entries."
        ),
        scope: 4
      },
      "workbench.localHistory.maxFileSize": {
        type: "number",
        default: 256,
        minimum: 1,
        description: e(
          "localHistoryMaxFileSize",
          "Controls the maximum size of a file (in KB) to be considered for local file history. Files that are larger will not be added to the local file history. Changing this setting has no effect on existing local file history entries."
        ),
        scope: 4
      },
      "workbench.localHistory.maxFileEntries": {
        type: "number",
        default: 50,
        minimum: 0,
        description: e(
          "localHistoryMaxFileEntries",
          "Controls the maximum number of local file history entries per file. When the number of local file history entries exceeds this number for a file, the oldest entries will be discarded."
        ),
        scope: 4
      },
      "workbench.localHistory.exclude": {
        type: "object",
        patternProperties: {
          ".*": { type: "boolean" }
        },
        markdownDescription: e(
          "exclude",
          "Configure paths or [glob patterns](https://aka.ms/vscode-glob-patterns) for excluding files from the local file history. Glob patterns are always evaluated relative to the path of the workspace folder unless they are absolute paths. Changing this setting has no effect on existing local file history entries."
        ),
        scope: 4
      },
      "workbench.localHistory.mergeWindow": {
        type: "number",
        default: 10,
        minimum: 1,
        markdownDescription: e(
          "mergeWindow",
          "Configure an interval in seconds during which the last entry in local file history is replaced with the entry that is being added. This helps reduce the overall number of entries that are added, for example when auto save is enabled. This setting is only applied to entries that have the same source of origin. Changing this setting has no effect on existing local file history entries."
        ),
        scope: 4
      },
      "workbench.commandPalette.history": {
        type: "number",
        description: e(
          "commandHistory",
          "Controls the number of recently used commands to keep in history for the command palette. Set to 0 to disable command history."
        ),
        default: 50,
        minimum: 0
      },
      "workbench.commandPalette.preserveInput": {
        type: "boolean",
        description: e(
          "preserveInput",
          "Controls whether the last typed input to the command palette should be restored when opening it the next time."
        ),
        default: !1
      },
      "workbench.commandPalette.experimental.suggestCommands": {
        type: "boolean",
        tags: ["experimental"],
        description: e(
          "suggestCommands",
          "Controls whether the command palette should have a list of commonly used commands."
        ),
        default: !1
      },
      "workbench.commandPalette.experimental.useSemanticSimilarity": {
        type: "boolean",
        tags: ["experimental"],
        description: e(
          "useSemanticSimilarity",
          "Controls whether the command palette should include similar commands. You must have an extension installed that provides Semantic Similarity."
        ),
        default: !0
      },
      "workbench.quickOpen.closeOnFocusLost": {
        type: "boolean",
        description: e(
          "closeOnFocusLost",
          "Controls whether Quick Open should close automatically once it loses focus."
        ),
        default: !0
      },
      "workbench.quickOpen.preserveInput": {
        type: "boolean",
        description: e(
          "workbench.quickOpen.preserveInput",
          "Controls whether the last typed input to Quick Open should be restored when opening it the next time."
        ),
        default: !1
      },
      "workbench.settings.openDefaultSettings": {
        type: "boolean",
        description: e(
          "openDefaultSettings",
          "Controls whether opening settings also opens an editor showing all default settings."
        ),
        default: !1
      },
      "workbench.settings.useSplitJSON": {
        type: "boolean",
        markdownDescription: e(
          "useSplitJSON",
          "Controls whether to use the split JSON editor when editing settings as JSON."
        ),
        default: !1
      },
      "workbench.settings.openDefaultKeybindings": {
        type: "boolean",
        description: e(
          "openDefaultKeybindings",
          "Controls whether opening keybinding settings also opens an editor showing all default keybindings."
        ),
        default: !1
      },
      "workbench.sideBar.location": {
        type: "string",
        enum: ["left", "right"],
        default: "left",
        description: e(
          "sideBarLocation",
          "Controls the location of the primary side bar and activity bar. They can either show on the left or right of the workbench. The secondary side bar will show on the opposite side of the workbench."
        )
      },
      "workbench.panel.defaultLocation": {
        type: "string",
        enum: ["left", "bottom", "right"],
        default: "bottom",
        description: e(
          "panelDefaultLocation",
          "Controls the default location of the panel (Terminal, Debug Console, Output, Problems) in a new workspace. It can either show at the bottom, right, or left of the editor area."
        )
      },
      "workbench.panel.opensMaximized": {
        type: "string",
        enum: ["always", "never", "preserve"],
        default: "preserve",
        description: e(
          "panelOpensMaximized",
          "Controls whether the panel opens maximized. It can either always open maximized, never open maximized, or open to the last state it was in before being closed."
        ),
        enumDescriptions: [
          e(
            "workbench.panel.opensMaximized.always",
            "Always maximize the panel when opening it."
          ),
          e(
            "workbench.panel.opensMaximized.never",
            "Never maximize the panel when opening it. The panel will open un-maximized."
          ),
          e(
            "workbench.panel.opensMaximized.preserve",
            "Open the panel to the state that it was in, before it was closed."
          )
        ]
      },
      "workbench.statusBar.visible": {
        type: "boolean",
        default: !0,
        description: e(
          "statusBarVisibility",
          "Controls the visibility of the status bar at the bottom of the workbench."
        )
      },
      "workbench.activityBar.visible": {
        type: "boolean",
        default: !0,
        description: e(
          "activityBarVisibility",
          "Controls the visibility of the activity bar in the workbench."
        )
      },
      "workbench.activityBar.iconClickBehavior": {
        type: "string",
        enum: ["toggle", "focus"],
        default: "toggle",
        description: e(
          "activityBarIconClickBehavior",
          "Controls the behavior of clicking an activity bar icon in the workbench."
        ),
        enumDescriptions: [
          e(
            "workbench.activityBar.iconClickBehavior.toggle",
            "Hide the side bar if the clicked item is already visible."
          ),
          e(
            "workbench.activityBar.iconClickBehavior.focus",
            "Focus side bar if the clicked item is already visible."
          )
        ]
      },
      "workbench.view.alwaysShowHeaderActions": {
        type: "boolean",
        default: !1,
        description: e(
          "viewVisibility",
          "Controls the visibility of view header actions. View header actions may either be always visible, or only visible when that view is focused or hovered over."
        )
      },
      "workbench.fontAliasing": {
        type: "string",
        enum: ["default", "antialiased", "none", "auto"],
        default: "default",
        description: e("fontAliasing", "Controls font aliasing method in the workbench."),
        enumDescriptions: [
          e(
            "workbench.fontAliasing.default",
            "Sub-pixel font smoothing. On most non-retina displays this will give the sharpest text."
          ),
          e(
            "workbench.fontAliasing.antialiased",
            "Smooth the font on the level of the pixel, as opposed to the subpixel. Can make the font appear lighter overall."
          ),
          e(
            "workbench.fontAliasing.none",
            "Disables font smoothing. Text will show with jagged sharp edges."
          ),
          e(
            "workbench.fontAliasing.auto",
            "Applies `default` or `antialiased` automatically based on the DPI of displays."
          )
        ],
        included: o
      },
      "workbench.settings.editor": {
        type: "string",
        enum: ["ui", "json"],
        enumDescriptions: [
          e("settings.editor.ui", "Use the settings UI editor."),
          e("settings.editor.json", "Use the JSON file editor.")
        ],
        description: e(
          "settings.editor.desc",
          "Determines which settings editor to use by default."
        ),
        default: "ui",
        scope: 3
      },
      "workbench.hover.delay": {
        type: "number",
        description: e(
          "workbench.hover.delay",
          "Controls the delay in milliseconds after which the hover is shown for workbench items (ex. some extension provided tree view items). Already visible items may require a refresh before reflecting this setting change."
        ),
        default: o ? 1500 : 500,
        minimum: 0
      },
      "workbench.reduceMotion": {
        type: "string",
        description: e(
          "workbench.reduceMotion",
          "Controls whether the workbench should render with fewer animations."
        ),
        enumDescriptions: [
          e("workbench.reduceMotion.on", "Always render with reduced motion."),
          e("workbench.reduceMotion.off", "Do not render with reduced motion"),
          e(
            "workbench.reduceMotion.auto",
            "Render with reduced motion based on OS configuration."
          )
        ],
        default: "auto",
        tags: ["accessibility"],
        enum: ["on", "off", "auto"]
      },
      "workbench.layoutControl.enabled": {
        type: "boolean",
        default: !0,
        markdownDescription: t ? e(
          "layoutControlEnabledWeb",
          "Controls whether the layout control in the title bar is shown."
        ) : e(
          { key: "layoutControlEnabled", comment: ["{0} is a placeholder for a setting identifier."] },
          "Controls whether the layout control is shown in the custom title bar. This setting only has an effect when {0} is set to {1}.",
          "`#window.titleBarStyle#`",
          "`custom`"
        )
      },
      "workbench.layoutControl.type": {
        type: "string",
        enum: ["menu", "toggles", "both"],
        enumDescriptions: [
          e(
            "layoutcontrol.type.menu",
            "Shows a single button with a dropdown of layout options."
          ),
          e(
            "layoutcontrol.type.toggles",
            "Shows several buttons for toggling the visibility of the panels and side bar."
          ),
          e("layoutcontrol.type.both", "Shows both the dropdown and toggle buttons.")
        ],
        default: "both",
        description: e(
          "layoutControlType",
          "Controls whether the layout control in the custom title bar is displayed as a single menu button or with multiple UI toggles."
        )
      },
      "workbench.tips.enabled": {
        type: "boolean",
        default: !0,
        description: e(
          "tips.enabled",
          "When enabled, will show the watermark tips when no editor is open."
        )
      }
    }
  });
  let a = e(
    "windowTitle",
    "Controls the window title based on the active editor. Variables are substituted based on the context:"
  );
  a += `
- ` + [
    e(
      "activeEditorShort",
      "`${activeEditorShort}`: the file name (e.g. myFile.txt)."
    ),
    e(
      "activeEditorMedium",
      "`${activeEditorMedium}`: the path of the file relative to the workspace folder (e.g. myFolder/myFileFolder/myFile.txt)."
    ),
    e(
      "activeEditorLong",
      "`${activeEditorLong}`: the full path of the file (e.g. /Users/Development/myFolder/myFileFolder/myFile.txt)."
    ),
    e(
      "activeFolderShort",
      "`${activeFolderShort}`: the name of the folder the file is contained in (e.g. myFileFolder)."
    ),
    e(
      "activeFolderMedium",
      "`${activeFolderMedium}`: the path of the folder the file is contained in, relative to the workspace folder (e.g. myFolder/myFileFolder)."
    ),
    e(
      "activeFolderLong",
      "`${activeFolderLong}`: the full path of the folder the file is contained in (e.g. /Users/Development/myFolder/myFileFolder)."
    ),
    e(
      "folderName",
      "`${folderName}`: name of the workspace folder the file is contained in (e.g. myFolder)."
    ),
    e(
      "folderPath",
      "`${folderPath}`: file path of the workspace folder the file is contained in (e.g. /Users/Development/myFolder)."
    ),
    e(
      "rootName",
      "`${rootName}`: name of the workspace with optional remote name and workspace indicator if applicable (e.g. myFolder, myRemoteFolder [SSH] or myWorkspace (Workspace))."
    ),
    e(
      "rootNameShort",
      "`${rootNameShort}`: shortened name of the workspace without suffixes (e.g. myFolder, myRemoteFolder or myWorkspace)."
    ),
    e(
      "rootPath",
      "`${rootPath}`: file path of the opened workspace or folder (e.g. /Users/Development/myWorkspace)."
    ),
    e(
      "profileName",
      "`${profileName}`: name of the profile in which the workspace is opened (e.g. Data Science (Profile)). Ignored if default profile is used."
    ),
    e("appName", "`${appName}`: e.g. VS Code."),
    e("remoteName", "`${remoteName}`: e.g. SSH"),
    e(
      "dirty",
      "`${dirty}`: an indicator for when the active editor has unsaved changes."
    ),
    e(
      "separator",
      '`${separator}`: a conditional separator (" - ") that only shows when surrounded by variables with values or static text.'
    )
  ].join(`
- `), r.registerConfiguration({
    id: "window",
    order: 8,
    title: e("windowConfigurationTitle", "Window"),
    type: "object",
    properties: {
      "window.title": {
        type: "string",
        default: (() => {
          if (o && p)
            return "${activeEditorShort}${separator}${rootName}${separator}${profileName}";
          const s = "${dirty}${activeEditorShort}${separator}${rootName}${separator}${profileName}${separator}${appName}";
          return t ? s + "${separator}${remoteName}" : s;
        })(),
        markdownDescription: a
      },
      "window.titleSeparator": {
        type: "string",
        default: o ? " — " : " - ",
        markdownDescription: e("window.titleSeparator", "Separator used by {0}.", "`#window.title#`")
      },
      "window.commandCenter": {
        type: "boolean",
        default: !1,
        tags: ["experimental"],
        markdownDescription: t ? e(
          "window.commandCenterWeb",
          "Show command launcher together with the window title."
        ) : e(
          { key: "window.commandCenter", comment: ["{0} is a placeholder for a setting identifier."] },
          "Show command launcher together with the window title. This setting only has an effect when {0} is set to {1}.",
          "`#window.titleBarStyle#`",
          "`custom`"
        )
      },
      "window.menuBarVisibility": {
        type: "string",
        enum: ["classic", "visible", "toggle", "hidden", "compact"],
        markdownEnumDescriptions: [
          e(
            "window.menuBarVisibility.classic",
            "Menu is displayed at the top of the window and only hidden in full screen mode."
          ),
          e(
            "window.menuBarVisibility.visible",
            "Menu is always visible at the top of the window even in full screen mode."
          ),
          o ? e(
            "window.menuBarVisibility.toggle.mac",
            "Menu is hidden but can be displayed at the top of the window by executing the `Focus Application Menu` command."
          ) : e(
            "window.menuBarVisibility.toggle",
            "Menu is hidden but can be displayed at the top of the window via the Alt key."
          ),
          e("window.menuBarVisibility.hidden", "Menu is always hidden."),
          t ? e(
            "window.menuBarVisibility.compact.web",
            "Menu is displayed as a compact button in the side bar."
          ) : e(
            { key: "window.menuBarVisibility.compact", comment: ["{0} is a placeholder for a setting identifier."] },
            "Menu is displayed as a compact button in the side bar. This value is ignored when {0} is {1}.",
            "`#window.titleBarStyle#`",
            "`native`"
          )
        ],
        default: t ? "compact" : "classic",
        scope: 1,
        markdownDescription: o ? e(
          "menuBarVisibility.mac",
          "Control the visibility of the menu bar. A setting of 'toggle' means that the menu bar is hidden and executing `Focus Application Menu` will show it. A setting of 'compact' will move the menu into the side bar."
        ) : e(
          "menuBarVisibility",
          "Control the visibility of the menu bar. A setting of 'toggle' means that the menu bar is hidden and a single press of the Alt key will show it. A setting of 'compact' will move the menu into the side bar."
        ),
        included: i || n || t
      },
      "window.enableMenuBarMnemonics": {
        type: "boolean",
        default: !0,
        scope: 1,
        description: e(
          "enableMenuBarMnemonics",
          "Controls whether the main menus can be opened via Alt-key shortcuts. Disabling mnemonics allows to bind these Alt-key shortcuts to editor commands instead."
        ),
        included: i || n
      },
      "window.customMenuBarAltFocus": {
        type: "boolean",
        default: !0,
        scope: 1,
        markdownDescription: e(
          "customMenuBarAltFocus",
          "Controls whether the menu bar will be focused by pressing the Alt-key. This setting has no effect on toggling the menu bar with the Alt-key."
        ),
        included: i || n
      },
      "window.openFilesInNewWindow": {
        type: "string",
        enum: ["on", "off", "default"],
        enumDescriptions: [
          e("window.openFilesInNewWindow.on", "Files will open in a new window."),
          e(
            "window.openFilesInNewWindow.off",
            "Files will open in the window with the files' folder open or the last active window."
          ),
          o ? e(
            "window.openFilesInNewWindow.defaultMac",
            "Files will open in the window with the files' folder open or the last active window unless opened via the Dock or from Finder."
          ) : e(
            "window.openFilesInNewWindow.default",
            "Files will open in a new window unless picked from within the application (e.g. via the File menu)."
          )
        ],
        default: "off",
        scope: 1,
        markdownDescription: o ? e(
          "openFilesInNewWindowMac",
          "Controls whether files should open in a new window when using a command line or file dialog.\nNote that there can still be cases where this setting is ignored (e.g. when using the `--new-window` or `--reuse-window` command line option)."
        ) : e(
          "openFilesInNewWindow",
          "Controls whether files should open in a new window when using a command line or file dialog.\nNote that there can still be cases where this setting is ignored (e.g. when using the `--new-window` or `--reuse-window` command line option)."
        )
      },
      "window.openFoldersInNewWindow": {
        type: "string",
        enum: ["on", "off", "default"],
        enumDescriptions: [
          e("window.openFoldersInNewWindow.on", "Folders will open in a new window."),
          e(
            "window.openFoldersInNewWindow.off",
            "Folders will replace the last active window."
          ),
          e(
            "window.openFoldersInNewWindow.default",
            "Folders will open in a new window unless a folder is picked from within the application (e.g. via the File menu)."
          )
        ],
        default: "default",
        scope: 1,
        markdownDescription: e(
          "openFoldersInNewWindow",
          "Controls whether folders should open in a new window or replace the last active window.\nNote that there can still be cases where this setting is ignored (e.g. when using the `--new-window` or `--reuse-window` command line option)."
        )
      },
      "window.confirmBeforeClose": {
        type: "string",
        enum: ["always", "keyboardOnly", "never"],
        enumDescriptions: [
          t ? e(
            "window.confirmBeforeClose.always.web",
            "Always try to ask for confirmation. Note that browsers may still decide to close a tab or window without confirmation."
          ) : e("window.confirmBeforeClose.always", "Always ask for confirmation."),
          t ? e(
            "window.confirmBeforeClose.keyboardOnly.web",
            "Only ask for confirmation if a keybinding was used to close the window. Note that detection may not be possible in some cases."
          ) : e(
            "window.confirmBeforeClose.keyboardOnly",
            "Only ask for confirmation if a keybinding was used."
          ),
          t ? e(
            "window.confirmBeforeClose.never.web",
            "Never explicitly ask for confirmation unless data loss is imminent."
          ) : e(
            "window.confirmBeforeClose.never",
            "Never explicitly ask for confirmation."
          )
        ],
        default: t && !w() ? "keyboardOnly" : "never",
        markdownDescription: t ? e(
          "confirmBeforeCloseWeb",
          "Controls whether to show a confirmation dialog before closing the browser tab or window. Note that even if enabled, browsers may still decide to close a tab or window without confirmation and that this setting is only a hint that may not work in all cases."
        ) : e(
          "confirmBeforeClose",
          "Controls whether to show a confirmation dialog before closing the window or quitting the application."
        ),
        scope: 1
      }
    }
  }), r.registerConfiguration({
    id: "zenMode",
    order: 9,
    title: e("zenModeConfigurationTitle", "Zen Mode"),
    type: "object",
    properties: {
      "zenMode.fullScreen": {
        type: "boolean",
        default: !0,
        description: e(
          "zenMode.fullScreen",
          "Controls whether turning on Zen Mode also puts the workbench into full screen mode."
        )
      },
      "zenMode.centerLayout": {
        type: "boolean",
        default: !0,
        description: e(
          "zenMode.centerLayout",
          "Controls whether turning on Zen Mode also centers the layout."
        )
      },
      "zenMode.hideTabs": {
        type: "boolean",
        default: !0,
        description: e(
          "zenMode.hideTabs",
          "Controls whether turning on Zen Mode also hides workbench tabs."
        )
      },
      "zenMode.hideStatusBar": {
        type: "boolean",
        default: !0,
        description: e(
          "zenMode.hideStatusBar",
          "Controls whether turning on Zen Mode also hides the status bar at the bottom of the workbench."
        )
      },
      "zenMode.hideActivityBar": {
        type: "boolean",
        default: !0,
        description: e(
          "zenMode.hideActivityBar",
          "Controls whether turning on Zen Mode also hides the activity bar either at the left or right of the workbench."
        )
      },
      "zenMode.hideLineNumbers": {
        type: "boolean",
        default: !0,
        description: e(
          "zenMode.hideLineNumbers",
          "Controls whether turning on Zen Mode also hides the editor line numbers."
        )
      },
      "zenMode.restore": {
        type: "boolean",
        default: !0,
        description: e(
          "zenMode.restore",
          "Controls whether a window should restore to Zen Mode if it was exited in Zen Mode."
        )
      },
      "zenMode.silentNotifications": {
        type: "boolean",
        default: !0,
        description: e(
          "zenMode.silentNotifications",
          "Controls whether notifications do not disturb mode should be enabled while in Zen Mode. If true, only error notifications will pop out."
        )
      }
    }
  });
})();
