import { css } from 'lit';

export const common = css`
.monaco-editor {
  font-family: -apple-system, BlinkMacSystemFont, Segoe WPC, Segoe UI, HelveticaNeue-Light, system-ui, Ubuntu, Droid Sans, sans-serif;
  --monaco-monospace-font: "SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace
}

.monaco-menu .monaco-action-bar.vertical .action-item .action-menu-item:focus .action-label {
  stroke-width: 1.2px
}

.monaco-editor.vs-dark .monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .action-label,
.monaco-editor.hc-black .monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .action-label {
  stroke-width: 1.2px
}

.monaco-hover p {
  margin: 0
}

.monaco-aria-container {
  position: absolute !important;
  top: 0;
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%)
}

.monaco-editor.hc-black {
  -ms-high-contrast-adjust: none
}

@media screen and (-ms-high-contrast:active) {

  .monaco-editor.vs .view-overlays .current-line,
  .monaco-editor.vs-dark .view-overlays .current-line {
    border-color: windowtext !important;
    border-left: 0;
    border-right: 0
  }

  .monaco-editor.vs .cursor,
  .monaco-editor.vs-dark .cursor {
    background-color: windowtext !important
  }

  .monaco-editor.vs .dnd-target,
  .monaco-editor.vs-dark .dnd-target {
    border-color: windowtext !important
  }

  .monaco-editor.vs .selected-text,
  .monaco-editor.vs-dark .selected-text {
    background-color: highlight !important
  }

  .monaco-editor.vs .view-line,
  .monaco-editor.vs-dark .view-line {
    -ms-high-contrast-adjust: none
  }

  .monaco-editor.vs .view-line span,
  .monaco-editor.vs-dark .view-line span {
    color: windowtext !important
  }

  .monaco-editor.vs .view-line span.inline-selected-text,
  .monaco-editor.vs-dark .view-line span.inline-selected-text {
    color: highlighttext !important
  }

  .monaco-editor.vs .view-overlays,
  .monaco-editor.vs-dark .view-overlays {
    -ms-high-contrast-adjust: none
  }

  .monaco-editor.vs .selectionHighlight,
  .monaco-editor.vs-dark .selectionHighlight,
  .monaco-editor.vs .wordHighlight,
  .monaco-editor.vs-dark .wordHighlight,
  .monaco-editor.vs .wordHighlightStrong,
  .monaco-editor.vs-dark .wordHighlightStrong,
  .monaco-editor.vs .reference-decoration,
  .monaco-editor.vs-dark .reference-decoration {
    border: 2px dotted highlight !important;
    background: transparent !important;
    box-sizing: border-box
  }

  .monaco-editor.vs .rangeHighlight,
  .monaco-editor.vs-dark .rangeHighlight {
    background: transparent !important;
    border: 1px dotted activeborder !important;
    box-sizing: border-box
  }

  .monaco-editor.vs .bracket-match,
  .monaco-editor.vs-dark .bracket-match {
    border-color: windowtext !important;
    background: transparent !important
  }

  .monaco-editor.vs .findMatch,
  .monaco-editor.vs-dark .findMatch,
  .monaco-editor.vs .currentFindMatch,
  .monaco-editor.vs-dark .currentFindMatch {
    border: 2px dotted activeborder !important;
    background: transparent !important;
    box-sizing: border-box
  }

  .monaco-editor.vs .find-widget,
  .monaco-editor.vs-dark .find-widget {
    border: 1px solid windowtext
  }

  .monaco-editor.vs .monaco-list .monaco-list-row,
  .monaco-editor.vs-dark .monaco-list .monaco-list-row {
    -ms-high-contrast-adjust: none;
    color: windowtext !important
  }

  .monaco-editor.vs .monaco-list .monaco-list-row.focused,
  .monaco-editor.vs-dark .monaco-list .monaco-list-row.focused {
    color: highlighttext !important;
    background-color: highlight !important
  }

  .monaco-editor.vs .monaco-list .monaco-list-row:hover,
  .monaco-editor.vs-dark .monaco-list .monaco-list-row:hover {
    background: transparent !important;
    border: 1px solid highlight;
    box-sizing: border-box
  }

  .monaco-editor.vs .monaco-scrollable-element>.scrollbar,
  .monaco-editor.vs-dark .monaco-scrollable-element>.scrollbar {
    -ms-high-contrast-adjust: none;
    background: background !important;
    border: 1px solid windowtext;
    box-sizing: border-box
  }

  .monaco-editor.vs .monaco-scrollable-element>.scrollbar>.slider,
  .monaco-editor.vs-dark .monaco-scrollable-element>.scrollbar>.slider {
    background: windowtext !important
  }

  .monaco-editor.vs .monaco-scrollable-element>.scrollbar>.slider:hover,
  .monaco-editor.vs-dark .monaco-scrollable-element>.scrollbar>.slider:hover {
    background: highlight !important
  }

  .monaco-editor.vs .monaco-scrollable-element>.scrollbar>.slider.active,
  .monaco-editor.vs-dark .monaco-scrollable-element>.scrollbar>.slider.active {
    background: highlight !important
  }

  .monaco-editor.vs .decorationsOverviewRuler,
  .monaco-editor.vs-dark .decorationsOverviewRuler {
    opacity: 0
  }

  .monaco-editor.vs .minimap,
  .monaco-editor.vs-dark .minimap {
    display: none
  }

  .monaco-editor.vs .squiggly-d-error,
  .monaco-editor.vs-dark .squiggly-d-error {
    background: transparent !important;
    border-bottom: 4px double #E47777
  }

  .monaco-editor.vs .squiggly-c-warning,
  .monaco-editor.vs-dark .squiggly-c-warning,
  .monaco-editor.vs .squiggly-b-info,
  .monaco-editor.vs-dark .squiggly-b-info {
    border-bottom: 4px double #71B771
  }

  .monaco-editor.vs .squiggly-a-hint,
  .monaco-editor.vs-dark .squiggly-a-hint {
    border-bottom: 4px double #6c6c6c
  }

  .monaco-editor.vs .monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .action-label,
  .monaco-editor.vs-dark .monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .action-label {
    -ms-high-contrast-adjust: none;
    color: highlighttext !important;
    background-color: highlight !important
  }

  .monaco-editor.vs .monaco-menu .monaco-action-bar.vertical .action-menu-item:hover .action-label,
  .monaco-editor.vs-dark .monaco-menu .monaco-action-bar.vertical .action-menu-item:hover .action-label {
    -ms-high-contrast-adjust: none;
    background: transparent !important;
    border: 1px solid highlight;
    box-sizing: border-box
  }

  .monaco-diff-editor.vs .diffOverviewRuler,
  .monaco-diff-editor.vs-dark .diffOverviewRuler {
    display: none
  }

  .monaco-editor.vs .line-insert,
  .monaco-editor.vs-dark .line-insert,
  .monaco-editor.vs .line-delete,
  .monaco-editor.vs-dark .line-delete {
    background: transparent !important;
    border: 1px solid highlight !important;
    box-sizing: border-box
  }

  .monaco-editor.vs .char-insert,
  .monaco-editor.vs-dark .char-insert,
  .monaco-editor.vs .char-delete,
  .monaco-editor.vs-dark .char-delete {
    background: transparent !important
  }
}

.monaco-aria-container {
  position: absolute;
  left: -999em
}

::-ms-clear {
  display: none
}

.monaco-editor .editor-widget input {
  color: inherit
}

.monaco-editor {
  position: relative;
  overflow: visible;
  -webkit-text-size-adjust: 100%
}

.monaco-editor .overflow-guard {
  position: relative;
  overflow: hidden
}

.monaco-editor .view-overlays {
  position: absolute;
  top: 0
}

.monaco-editor .inputarea {
  min-width: 0;
  min-height: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  outline: none !important;
  resize: none;
  border: none;
  overflow: hidden;
  color: transparent;
  background-color: transparent
}

.monaco-editor .inputarea.ime-input {
  z-index: 10
}

.monaco-editor .margin-view-overlays .line-numbers {
  font-variant-numeric: tabular-nums;
  position: absolute;
  text-align: right;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  cursor: default;
  height: 100%
}

.monaco-editor .relative-current-line-number {
  text-align: left;
  display: inline-block;
  width: 100%
}

.monaco-editor .margin-view-overlays .line-numbers.lh-odd {
  margin-top: 1px
}

.monaco-mouse-cursor-text {
  cursor: text
}

.vs-dark .mac .monaco-mouse-cursor-text,
.hc-black .mac .monaco-mouse-cursor-text,
.vs-dark.mac .monaco-mouse-cursor-text,
.hc-black.mac .monaco-mouse-cursor-text {
  cursor: -webkit-image-set(url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAL0lEQVQoz2NgCD3x//9/BhBYBWdhgFVAiVW4JBFKGIa4AqD0//9D3pt4I4tAdAMAHTQ/j5Zom30AAAAASUVORK5CYII=) 1x, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAz0lEQVRIx2NgYGBY/R8I/vx5eelX3n82IJ9FxGf6tksvf/8FiTMQAcAGQMDvSwu09abffY8QYSAScNk45G198eX//yev73/4///701eh//kZSARckrNBRvz//+8+6ZohwCzjGNjdgQxkAg7B9WADeBjIBqtJCbhRA0YNoIkBSNmaPEMoNmA0FkYNoFKhapJ6FGyAH3nauaSmPfwI0v/3OukVi0CIZ+F25KrtYcx/CTIy0e+rC7R1Z4KMICVTQQ14feVXIbR695u14+Ir4gwAAD49E54wc1kWAAAAAElFTkSuQmCC) 2x) 5 8, text
}

.monaco-editor .view-overlays .current-line,
.monaco-editor .margin-view-overlays .current-line {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box
}

.monaco-editor .margin-view-overlays .current-line.current-line-margin.current-line-margin-both {
  border-right: 0
}

.monaco-editor .lines-content .cdr {
  position: absolute
}

.monaco-scrollable-element>.scrollbar>.scra {
  cursor: pointer;
  font-size: 11px !important
}

.monaco-scrollable-element>.visible {
  opacity: 1;
  background: rgba(0, 0, 0, 0);
  transition: opacity .1s linear
}

.monaco-scrollable-element>.invisible {
  opacity: 0;
  pointer-events: none
}

.monaco-scrollable-element>.invisible.fade {
  transition: opacity .8s linear
}

.monaco-scrollable-element>.shadow {
  position: absolute;
  display: none
}

.monaco-scrollable-element>.shadow.top {
  display: block;
  top: 0;
  left: 3px;
  height: 3px;
  width: 100%
}

.monaco-scrollable-element>.shadow.left {
  display: block;
  top: 3px;
  left: 0;
  height: 100%;
  width: 3px
}

.monaco-scrollable-element>.shadow.top-left-corner {
  display: block;
  top: 0;
  left: 0;
  height: 3px;
  width: 3px
}

.monaco-editor .glyph-margin {
  position: absolute;
  top: 0
}

.monaco-editor .margin-view-overlays .cgmr {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center
}

.monaco-editor .lines-content .core-guide {
  position: absolute;
  box-sizing: border-box
}

.mtkcontrol {
  color: #fff !important;
  background: rgb(150, 0, 0) !important
}

.monaco-editor.no-user-select .lines-content,
.monaco-editor.no-user-select .view-line,
.monaco-editor.no-user-select .view-lines {
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none
}

.monaco-editor .view-lines {
  white-space: nowrap
}

.monaco-editor .view-line {
  position: absolute;
  width: 100%
}

.monaco-editor .mtkz {
  display: inline-block
}

.monaco-editor .lines-decorations {
  position: absolute;
  top: 0;
  background: white
}

.monaco-editor .margin-view-overlays .cldr {
  position: absolute;
  height: 100%
}

.monaco-editor .margin-view-overlays .cmdr {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%
}

.monaco-editor .minimap.slider-mouseover .minimap-slider {
  opacity: 0;
  transition: opacity .1s linear
}

.monaco-editor .minimap.slider-mouseover:hover .minimap-slider,
.monaco-editor .minimap.slider-mouseover .minimap-slider.active {
  opacity: 1
}

.monaco-editor .minimap-shadow-hidden {
  position: absolute;
  width: 0
}

.monaco-editor .minimap-shadow-visible {
  position: absolute;
  left: -6px;
  width: 6px
}

.monaco-editor.no-minimap-shadow .minimap-shadow-visible {
  position: absolute;
  left: -1px;
  width: 1px
}

.monaco-editor .overlayWidgets {
  position: absolute;
  top: 0;
  left: 0
}

.monaco-editor .view-ruler {
  position: absolute;
  top: 0
}

.monaco-editor .scroll-decoration {
  position: absolute;
  top: 0;
  left: 0;
  height: 6px
}

.monaco-editor .lines-content .cslr {
  position: absolute
}

.monaco-editor .top-left-radius {
  border-top-left-radius: 3px
}

.monaco-editor .bottom-left-radius {
  border-bottom-left-radius: 3px
}

.monaco-editor .top-right-radius {
  border-top-right-radius: 3px
}

.monaco-editor .bottom-right-radius {
  border-bottom-right-radius: 3px
}

.monaco-editor.hc-black .top-left-radius {
  border-top-left-radius: 0
}

.monaco-editor.hc-black .bottom-left-radius {
  border-bottom-left-radius: 0
}

.monaco-editor.hc-black .top-right-radius {
  border-top-right-radius: 0
}

.monaco-editor.hc-black .bottom-right-radius {
  border-bottom-right-radius: 0
}

.monaco-editor .cursors-layer {
  position: absolute;
  top: 0
}

.monaco-editor .cursors-layer>.cursor {
  position: absolute;
  overflow: hidden
}

.monaco-editor .cursors-layer.cursor-smooth-caret-animation>.cursor {
  transition: all 80ms
}

.monaco-editor .cursors-layer.cursor-block-outline-style>.cursor {
  box-sizing: border-box;
  background: transparent !important;
  border-style: solid;
  border-width: 1px
}

.monaco-editor .cursors-layer.cursor-underline-style>.cursor {
  border-bottom-width: 2px;
  border-bottom-style: solid;
  background: transparent !important;
  box-sizing: border-box
}

.monaco-editor .cursors-layer.cursor-underline-thin-style>.cursor {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  background: transparent !important;
  box-sizing: border-box
}

@keyframes monaco-cursor-smooth {

  0%,
  20% {
    opacity: 1
  }

  60%,
  to {
    opacity: 0
  }
}

@keyframes monaco-cursor-phase {

  0%,
  20% {
    opacity: 1
  }

  90%,
  to {
    opacity: 0
  }
}

@keyframes monaco-cursor-expand {

  0%,
  20% {
    transform: scaleY(1)
  }

  80%,
  to {
    transform: scaleY(0)
  }
}

.cursor-smooth {
  animation: monaco-cursor-smooth .5s ease-in-out 0s 20 alternate
}

.cursor-phase {
  animation: monaco-cursor-phase .5s ease-in-out 0s 20 alternate
}

.cursor-expand>.cursor {
  animation: monaco-cursor-expand .5s ease-in-out 0s 20 alternate
}

.monaco-diff-editor .diffOverview {
  z-index: 9
}

.monaco-diff-editor .diffOverview .diffViewport {
  z-index: 10
}

.monaco-diff-editor.vs .diffOverview {
  background: rgba(0, 0, 0, .03)
}

.monaco-diff-editor.vs-dark .diffOverview {
  background: rgba(255, 255, 255, .01)
}

.monaco-scrollable-element.modified-in-monaco-diff-editor.vs .scrollbar,
.monaco-scrollable-element.modified-in-monaco-diff-editor.vs-dark .scrollbar {
  background: rgba(0, 0, 0, 0)
}

.monaco-scrollable-element.modified-in-monaco-diff-editor.hc-black .scrollbar {
  background: none
}

.monaco-scrollable-element.modified-in-monaco-diff-editor .slider {
  z-index: 10
}

.modified-in-monaco-diff-editor .slider.active {
  background: rgba(171, 171, 171, .4)
}

.modified-in-monaco-diff-editor.hc-black .slider.active {
  background: none
}

.monaco-editor .insert-sign,
.monaco-diff-editor .insert-sign,
.monaco-editor .delete-sign,
.monaco-diff-editor .delete-sign {
  font-size: 11px !important;
  opacity: .7 !important;
  display: flex !important;
  align-items: center
}

.monaco-editor.hc-black .insert-sign,
.monaco-diff-editor.hc-black .insert-sign,
.monaco-editor.hc-black .delete-sign,
.monaco-diff-editor.hc-black .delete-sign {
  opacity: 1
}

.monaco-editor .inline-deleted-margin-view-zone,
.monaco-editor .inline-added-margin-view-zone {
  text-align: right
}

.monaco-editor .view-zones .view-lines .view-line span {
  display: inline-block
}

.monaco-editor .margin-view-zones .lightbulb-glyph:hover {
  cursor: pointer
}

:root {
  --sash-size: 4px
}

.monaco-sash {
  position: absolute;
  z-index: 35;
  touch-action: none
}

.monaco-sash.disabled {
  pointer-events: none
}

.monaco-sash.mac.vertical {
  cursor: col-resize
}

.monaco-sash.vertical.minimum {
  cursor: e-resize
}

.monaco-sash.vertical.maximum {
  cursor: w-resize
}

.monaco-sash.mac.horizontal {
  cursor: row-resize
}

.monaco-sash.horizontal.minimum {
  cursor: s-resize
}

.monaco-sash.horizontal.maximum {
  cursor: n-resize
}

.monaco-sash.disabled {
  cursor: default !important;
  pointer-events: none !important
}

.monaco-sash.vertical {
  cursor: ew-resize;
  top: 0;
  width: var(--sash-size);
  height: 100%
}

.monaco-sash.horizontal {
  cursor: ns-resize;
  left: 0;
  width: 100%;
  height: var(--sash-size)
}

.monaco-sash:not(.disabled)>.orthogonal-drag-handle {
  content: " ";
  height: calc(var(--sash-size) * 2);
  width: calc(var(--sash-size) * 2);
  z-index: 100;
  display: block;
  cursor: all-scroll;
  position: absolute
}

.monaco-sash.horizontal.orthogonal-edge-north:not(.disabled)>.orthogonal-drag-handle.start,
.monaco-sash.horizontal.orthogonal-edge-south:not(.disabled)>.orthogonal-drag-handle.end {
  cursor: nwse-resize
}

.monaco-sash.horizontal.orthogonal-edge-north:not(.disabled)>.orthogonal-drag-handle.end,
.monaco-sash.horizontal.orthogonal-edge-south:not(.disabled)>.orthogonal-drag-handle.start {
  cursor: nesw-resize
}

.monaco-sash.vertical>.orthogonal-drag-handle.start {
  left: calc(var(--sash-size) * -.5);
  top: calc(var(--sash-size) * -1)
}

.monaco-sash.vertical>.orthogonal-drag-handle.end {
  left: calc(var(--sash-size) * -.5);
  bottom: calc(var(--sash-size) * -1)
}

.monaco-sash.horizontal>.orthogonal-drag-handle.start {
  top: calc(var(--sash-size) * -.5);
  left: calc(var(--sash-size) * -1)
}

.monaco-sash.horizontal>.orthogonal-drag-handle.end {
  top: calc(var(--sash-size) * -.5);
  right: calc(var(--sash-size) * -1)
}

.monaco-sash:before {
  content: "";
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: background-color .1s ease-out;
  background: transparent
}

.monaco-sash.vertical:before {
  width: var(--sash-hover-size);
  left: calc(50% - (var(--sash-hover-size) / 2))
}

.monaco-sash.horizontal:before {
  height: var(--sash-hover-size);
  top: calc(50% - (var(--sash-hover-size) / 2))
}

.monaco-sash.debug {
  background: cyan
}

.monaco-sash.debug.disabled {
  background: rgba(0, 255, 255, .2)
}

.monaco-sash.debug:not(.disabled)>.orthogonal-drag-handle {
  background: red
}

.monaco-diff-editor .diff-review-line-number {
  text-align: right;
  display: inline-block
}

.monaco-diff-editor .diff-review {
  position: absolute;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none
}

.monaco-diff-editor .diff-review-summary {
  padding-left: 10px
}

.monaco-diff-editor .diff-review-shadow {
  position: absolute
}

.monaco-diff-editor .diff-review-row {
  white-space: pre
}

.monaco-diff-editor .diff-review-table {
  display: table;
  min-width: 100%
}

.monaco-diff-editor .diff-review-row {
  display: table-row;
  width: 100%
}

.monaco-diff-editor .diff-review-spacer {
  display: inline-block;
  width: 10px;
  vertical-align: middle
}

.monaco-diff-editor .diff-review-spacer>.codicon {
  font-size: 9px !important
}

.monaco-diff-editor .diff-review-actions {
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 2px
}

.monaco-diff-editor .diff-review-actions .action-label {
  width: 16px;
  height: 16px;
  margin: 2px 0
}

.monaco-action-bar {
  white-space: nowrap;
  height: 100%
}

.monaco-action-bar .actions-container {
  display: flex;
  margin: 0 auto;
  padding: 0;
  height: 100%;
  width: 100%;
  align-items: center
}

.monaco-action-bar.vertical .actions-container {
  display: inline-block
}

.monaco-action-bar .action-item {
  display: block;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative
}

.monaco-action-bar .action-item.disabled {
  cursor: default
}

.monaco-action-bar .action-item .icon,
.monaco-action-bar .action-item .codicon {
  display: block
}

.monaco-action-bar .action-item .codicon {
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px
}

.monaco-action-bar .action-label {
  font-size: 11px;
  padding: 3px;
  border-radius: 5px
}

.monaco-action-bar .action-item.disabled .action-label,
.monaco-action-bar .action-item.disabled .action-label:before,
.monaco-action-bar .action-item.disabled .action-label:hover {
  opacity: .4
}

.monaco-action-bar.vertical {
  text-align: left
}

.monaco-action-bar.vertical .action-item {
  display: block
}

.monaco-action-bar.vertical .action-label.separator {
  display: block;
  border-bottom: 1px solid #bbb;
  padding-top: 1px;
  margin-left: .8em;
  margin-right: .8em
}

.monaco-action-bar .action-item .action-label.separator {
  width: 1px;
  height: 16px;
  margin: 5px 4px !important;
  cursor: default;
  min-width: 1px;
  padding: 0;
  background-color: #bbb
}

.secondary-actions .monaco-action-bar .action-label {
  margin-left: 6px
}

.monaco-action-bar .action-item.select-container {
  overflow: hidden;
  flex: 1;
  max-width: 170px;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px
}

.monaco-action-bar .action-item.action-dropdown-item {
  display: flex
}

.monaco-action-bar .action-item.action-dropdown-item>.action-label {
  margin-right: 1px
}

@font-face {
  font-family: codicon;
  font-display: block;
  src: url(./codicon-YBEUB3WJ.ttf) format("truetype")
}

.codicon[class*=codicon-] {
  font: 16px/1 codicon;
  display: inline-block;
  text-decoration: none;
  text-rendering: auto;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none
}

.codicon-wrench-subaction {
  opacity: .5
}

@keyframes codicon-spin {
  to {
    transform: rotate(360deg)
  }
}

.codicon-sync.codicon-modifier-spin,
.codicon-loading.codicon-modifier-spin,
.codicon-gear.codicon-modifier-spin,
.codicon-notebook-state-executing.codicon-modifier-spin {
  animation: codicon-spin 1.5s steps(30) infinite
}

.codicon-modifier-disabled {
  opacity: .4
}

.codicon-loading,
.codicon-tree-item-loading:before {
  animation-duration: 1s !important;
  animation-timing-function: cubic-bezier(.53, .21, .29, .67) !important
}

.context-view {
  position: absolute;
  z-index: 2500
}

.context-view.fixed {
  all: initial;
  font-family: inherit;
  font-size: 13px;
  position: fixed;
  z-index: 2500;
  color: inherit
}

.context-view .monaco-menu {
  min-width: 130px
}

.monaco-list {
  position: relative;
  height: 100%;
  width: 100%;
  white-space: nowrap
}

.monaco-list.mouse-support {
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none
}

.monaco-list>.monaco-scrollable-element {
  height: 100%
}

.monaco-list-rows {
  position: relative;
  width: 100%;
  height: 100%
}

.monaco-list.horizontal-scrolling .monaco-list-rows {
  width: auto;
  min-width: 100%
}

.monaco-list-row {
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%
}

.monaco-list.mouse-support .monaco-list-row {
  cursor: pointer;
  touch-action: none
}

.monaco-list-row.scrolling {
  display: none !important
}

.monaco-list.element-focused,
.monaco-list.selection-single,
.monaco-list.selection-multiple {
  outline: 0 !important
}

.monaco-drag-image {
  display: inline-block;
  padding: 1px 7px;
  border-radius: 10px;
  font-size: 12px;
  position: absolute;
  z-index: 1000
}

.monaco-list-type-filter {
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 2px;
  padding: 0 3px;
  max-width: calc(100% - 10px);
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: right;
  box-sizing: border-box;
  cursor: all-scroll;
  font-size: 13px;
  line-height: 18px;
  height: 20px;
  z-index: 1;
  top: 4px
}

.monaco-list-type-filter.dragging {
  transition: top .2s, left .2s
}

.monaco-list-type-filter.ne {
  right: 4px
}

.monaco-list-type-filter.nw {
  left: 4px
}

.monaco-list-type-filter>.controls {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  transition: width .2s;
  width: 0
}

.monaco-list-type-filter.dragging>.controls,
.monaco-list-type-filter:hover>.controls {
  width: 36px
}

.monaco-list-type-filter>.controls>* {
  border: none;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: none;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer
}

.monaco-list-type-filter>.controls>.filter {
  margin-left: 4px
}

.monaco-list-type-filter-message {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 40px 1em 1em;
  text-align: center;
  white-space: normal;
  opacity: .7;
  pointer-events: none
}

.monaco-list-type-filter-message:empty {
  display: none
}

.monaco-list-type-filter {
  cursor: grab
}

.monaco-list-type-filter.dragging {
  cursor: grabbing
}

.monaco-split-view2 {
  position: relative;
  width: 100%;
  height: 100%
}

.monaco-split-view2>.sash-container {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none
}

.monaco-split-view2>.sash-container>.monaco-sash {
  pointer-events: initial
}

.monaco-split-view2>.monaco-scrollable-element {
  width: 100%;
  height: 100%
}

.monaco-split-view2>.monaco-scrollable-element>.split-view-container {
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: relative
}

.monaco-split-view2>.monaco-scrollable-element>.split-view-container>.split-view-view {
  white-space: initial;
  position: absolute
}

.monaco-split-view2>.monaco-scrollable-element>.split-view-container>.split-view-view:not(.visible) {
  display: none
}

.monaco-split-view2.vertical>.monaco-scrollable-element>.split-view-container>.split-view-view {
  width: 100%
}

.monaco-split-view2.horizontal>.monaco-scrollable-element>.split-view-container>.split-view-view {
  height: 100%
}

.monaco-split-view2.separator-border>.monaco-scrollable-element>.split-view-container>.split-view-view:not(:first-child):before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
  background-color: var(--separator-border)
}

.monaco-split-view2.separator-border.horizontal>.monaco-scrollable-element>.split-view-container>.split-view-view:not(:first-child):before {
  height: 100%;
  width: 1px
}

.monaco-split-view2.separator-border.vertical>.monaco-scrollable-element>.split-view-container>.split-view-view:not(:first-child):before {
  height: 1px;
  width: 100%
}

.monaco-table {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  white-space: nowrap
}

.monaco-table>.monaco-split-view2 {
  border-bottom: 1px solid transparent
}

.monaco-table>.monaco-list {
  flex: 1
}

.monaco-table-tr {
  display: flex;
  height: 100%
}

.monaco-table-th {
  width: 100%;
  height: 100%;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis
}

.monaco-table-th,
.monaco-table-td {
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}

.monaco-table>.monaco-split-view2 .monaco-sash.vertical:before {
  content: "";
  position: absolute;
  left: calc(var(--sash-size) / 2);
  width: 0;
  border-left: 1px solid transparent
}

.monaco-table>.monaco-split-view2,
.monaco-table>.monaco-split-view2 .monaco-sash.vertical:before {
  transition: border-color .2s ease-out
}

.monaco-tl-row {
  display: flex;
  height: 100%;
  align-items: center;
  position: relative
}

.monaco-tl-indent {
  height: 100%;
  position: absolute;
  top: 0;
  left: 16px;
  pointer-events: none
}

.hide-arrows .monaco-tl-indent {
  left: 12px
}

.monaco-tl-indent>.indent-guide {
  display: inline-block;
  box-sizing: border-box;
  height: 100%;
  border-left: 1px solid transparent
}

.monaco-tl-indent>.indent-guide {
  transition: border-color .1s linear
}

.monaco-tl-twistie,
.monaco-tl-contents {
  height: 100%
}

.monaco-tl-twistie {
  font-size: 10px;
  text-align: right;
  padding-right: 6px;
  flex-shrink: 0;
  width: 16px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  transform: translate(3px)
}

.monaco-tl-contents {
  flex: 1;
  overflow: hidden
}

.monaco-tl-twistie:before {
  border-radius: 20px
}

.monaco-tl-twistie.collapsed:before {
  transform: rotate(-90deg)
}

.monaco-tl-twistie.codicon-tree-item-loading:before {
  animation: codicon-spin 1.25s steps(30) infinite
}

.quick-input-widget {
  font-size: 13px
}

.quick-input-widget .monaco-highlighted-label .highlight,
.quick-input-widget .monaco-highlighted-label .highlight {
  color: #0066bf
}

.vs .quick-input-widget .monaco-list-row.focused .monaco-highlighted-label .highlight,
.vs .quick-input-widget .monaco-list-row.focused .monaco-highlighted-label .highlight {
  color: #9dddff
}

.vs-dark .quick-input-widget .monaco-highlighted-label .highlight,
.vs-dark .quick-input-widget .monaco-highlighted-label .highlight {
  color: #0097fb
}

.hc-black .quick-input-widget .monaco-highlighted-label .highlight,
.hc-black .quick-input-widget .monaco-highlighted-label .highlight {
  color: #f38518
}

.monaco-keybinding>.monaco-keybinding-key {
  background-color: #ddd6;
  border: solid 1px rgba(204, 204, 204, .4);
  border-bottom-color: #bbb6;
  box-shadow: inset 0 -1px #bbb6;
  color: #555
}

.hc-black .monaco-keybinding>.monaco-keybinding-key {
  background-color: transparent;
  border: solid 1px rgb(111, 195, 223);
  box-shadow: none;
  color: #fff
}

.vs-dark .monaco-keybinding>.monaco-keybinding-key {
  background-color: #8080802b;
  border: solid 1px rgba(51, 51, 51, .6);
  border-bottom-color: #4449;
  box-shadow: inset 0 -1px #4449;
  color: #ccc
}

.monaco-text-button {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 4px;
  text-align: center;
  cursor: pointer;
  justify-content: center;
  align-items: center
}

.monaco-text-button:focus {
  outline-offset: 2px !important
}

.monaco-text-button:hover {
  text-decoration: none !important
}

.monaco-button.disabled:focus,
.monaco-button.disabled {
  opacity: .4 !important;
  cursor: default
}

.monaco-text-button>.codicon {
  margin: 0 .2em;
  color: inherit !important
}

.monaco-button-dropdown {
  display: flex;
  cursor: pointer
}

.monaco-button-dropdown>.monaco-dropdown-button {
  margin-left: 1px
}

.monaco-description-button {
  flex-direction: column
}

.monaco-description-button .monaco-button-label {
  font-weight: 500
}

.monaco-description-button .monaco-button-description {
  font-style: italic
}

.monaco-count-badge {
  padding: 3px 6px;
  border-radius: 11px;
  font-size: 11px;
  min-width: 18px;
  min-height: 18px;
  line-height: 11px;
  font-weight: 400;
  text-align: center;
  display: inline-block;
  box-sizing: border-box
}

.monaco-count-badge.long {
  padding: 2px 3px;
  border-radius: 2px;
  min-height: auto;
  line-height: normal
}

.monaco-progress-container {
  width: 100%;
  height: 5px;
  overflow: hidden
}

.monaco-progress-container .progress-bit {
  width: 2%;
  height: 5px;
  position: absolute;
  left: 0;
  display: none
}

.monaco-progress-container.active .progress-bit {
  display: inherit
}

.monaco-progress-container.discrete .progress-bit {
  left: 0;
  transition: width .1s linear
}

.monaco-progress-container.discrete.done .progress-bit {
  width: 100%
}

.monaco-progress-container.infinite .progress-bit {
  animation-name: progress;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform: translate(0)
}

@keyframes progress {
  0% {
    transform: translate(0) scaleX(1)
  }

  50% {
    transform: translate(2500%) scaleX(3)
  }

  to {
    transform: translate(4900%) scaleX(1)
  }
}

.quick-input-widget {
  position: absolute;
  width: 600px;
  z-index: 2000;
  padding: 0 1px 1px;
  left: 50%;
  margin-left: -300px
}

.quick-input-titlebar {
  display: flex;
  align-items: center
}

.quick-input-left-action-bar {
  display: flex;
  margin-left: 4px;
  flex: 1
}

.quick-input-title {
  padding: 3px 0;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden
}

.quick-input-right-action-bar {
  display: flex;
  margin-right: 4px;
  flex: 1
}

.quick-input-right-action-bar>.actions-container {
  justify-content: flex-end
}

.quick-input-titlebar .monaco-action-bar .action-label.codicon {
  background-position: center;
  background-repeat: no-repeat;
  padding: 2px
}

.quick-input-description {
  margin: 6px
}

.quick-input-header .quick-input-description {
  margin: 4px 2px
}

.quick-input-header {
  display: flex;
  padding: 6px 6px 0;
  margin-bottom: -2px
}

.quick-input-widget.hidden-input .quick-input-header {
  padding: 0;
  margin-bottom: 0
}

.quick-input-and-message {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
  position: relative
}

.quick-input-check-all {
  align-self: center;
  margin: 0
}

.quick-input-filter {
  flex-grow: 1;
  display: flex;
  position: relative
}

.quick-input-box {
  flex-grow: 1
}

.quick-input-widget.show-checkboxes .quick-input-box,
.quick-input-widget.show-checkboxes .quick-input-message {
  margin-left: 5px
}

.quick-input-visible-count {
  position: absolute;
  left: -10000px
}

.quick-input-count {
  align-self: center;
  position: absolute;
  right: 4px;
  display: flex;
  align-items: center
}

.quick-input-count .monaco-count-badge {
  vertical-align: middle;
  padding: 2px 4px;
  border-radius: 2px;
  min-height: auto;
  line-height: normal
}

.quick-input-action {
  margin-left: 6px
}

.quick-input-action .monaco-text-button {
  font-size: 11px;
  padding: 0 6px;
  display: flex;
  height: 27.5px;
  align-items: center
}

.quick-input-message {
  margin-top: -1px;
  padding: 5px 5px 2px;
  overflow-wrap: break-word
}

.quick-input-message>.codicon {
  margin: 0 .2em;
  vertical-align: text-bottom
}

.quick-input-progress.monaco-progress-container {
  position: relative
}

.quick-input-progress.monaco-progress-container,
.quick-input-progress.monaco-progress-container .progress-bit {
  height: 2px
}

.quick-input-list {
  line-height: 22px;
  margin-top: 6px
}

.quick-input-widget.hidden-input .quick-input-list {
  margin-top: 0
}

.quick-input-list .monaco-list {
  overflow: hidden;
  max-height: 440px
}

.quick-input-list .quick-input-list-entry {
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  height: 100%;
  padding: 0 6px
}

.quick-input-list .quick-input-list-entry.quick-input-list-separator-border {
  border-top-width: 1px;
  border-top-style: solid
}

.quick-input-list .monaco-list-row[data-index="0"] .quick-input-list-entry.quick-input-list-separator-border {
  border-top-style: none
}

.quick-input-list .quick-input-list-label {
  overflow: hidden;
  display: flex;
  height: 100%;
  flex: 1
}

.quick-input-list .quick-input-list-checkbox {
  align-self: center;
  margin: 0
}

.quick-input-list .quick-input-list-rows {
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  margin-left: 5px
}

.quick-input-widget.show-checkboxes .quick-input-list .quick-input-list-rows {
  margin-left: 10px
}

.quick-input-widget .quick-input-list .quick-input-list-checkbox {
  display: none
}

.quick-input-widget.show-checkboxes .quick-input-list .quick-input-list-checkbox {
  display: inline
}

.quick-input-list .quick-input-list-rows>.quick-input-list-row {
  display: flex;
  align-items: center
}

.quick-input-list .quick-input-list-rows>.quick-input-list-row .monaco-icon-label,
.quick-input-list .quick-input-list-rows>.quick-input-list-row .monaco-icon-label .monaco-icon-label-container>.monaco-icon-name-container {
  flex: 1
}

.quick-input-list .quick-input-list-rows>.quick-input-list-row .codicon[class*=codicon-] {
  vertical-align: text-bottom
}

.quick-input-list .quick-input-list-rows .monaco-highlighted-label span {
  opacity: 1
}

.quick-input-list .quick-input-list-entry .quick-input-list-entry-keybinding {
  margin-right: 8px
}

.quick-input-list .quick-input-list-label-meta {
  opacity: .7;
  line-height: normal;
  text-overflow: ellipsis;
  overflow: hidden
}

.quick-input-list .monaco-highlighted-label .highlight {
  font-weight: 700
}

.quick-input-list .quick-input-list-entry .quick-input-list-separator {
  margin-right: 8px
}

.quick-input-list .quick-input-list-entry-action-bar {
  display: flex;
  flex: 0;
  overflow: visible
}

.quick-input-list .quick-input-list-entry-action-bar .action-label {
  display: none
}

.quick-input-list .quick-input-list-entry-action-bar .action-label.codicon {
  margin-right: 4px;
  padding: 0 2px 2px
}

.quick-input-list .quick-input-list-entry-action-bar {
  margin-top: 1px
}

.quick-input-list .quick-input-list-entry-action-bar {
  margin-right: 4px
}

.quick-input-list .quick-input-list-entry .quick-input-list-entry-action-bar .action-label.always-visible,
.quick-input-list .quick-input-list-entry:hover .quick-input-list-entry-action-bar .action-label,
.quick-input-list .monaco-list-row.focused .quick-input-list-entry-action-bar .action-label {
  display: flex
}

.quick-input-list .monaco-list-row.focused .monaco-keybinding-key,
.quick-input-list .monaco-list-row.focused .quick-input-list-entry .quick-input-list-separator {
  color: inherit
}

.quick-input-list .monaco-list-row.focused .monaco-keybinding-key {
  background: none
}

.monaco-inputbox {
  position: relative;
  display: block;
  padding: 0;
  box-sizing: border-box;
  font-size: inherit
}

.monaco-inputbox.idle {
  border: 1px solid transparent
}

.monaco-inputbox>.ibwrapper>.input,
.monaco-inputbox>.ibwrapper>.mirror {
  padding: 4px
}

.monaco-inputbox>.ibwrapper {
  position: relative;
  width: 100%;
  height: 100%
}

.monaco-inputbox>.ibwrapper>.input {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  line-height: inherit;
  border: none;
  font-family: inherit;
  font-size: inherit;
  resize: none;
  color: inherit
}

.monaco-inputbox>.ibwrapper>input {
  text-overflow: ellipsis
}

.monaco-inputbox>.ibwrapper>textarea.input {
  display: block;
  -ms-overflow-style: none;
  scrollbar-width: none;
  outline: none
}

.monaco-inputbox>.ibwrapper>textarea.input::-webkit-scrollbar {
  display: none
}

.monaco-inputbox>.ibwrapper>textarea.input.empty {
  white-space: nowrap
}

.monaco-inputbox>.ibwrapper>.mirror {
  position: absolute;
  display: inline-block;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  white-space: pre-wrap;
  visibility: hidden;
  word-wrap: break-word
}

.monaco-inputbox-container {
  text-align: right
}

.monaco-inputbox-container .monaco-inputbox-message {
  display: inline-block;
  overflow: hidden;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  padding: .4em;
  font-size: 12px;
  line-height: 17px;
  margin-top: -1px;
  word-wrap: break-word
}

.monaco-inputbox .monaco-action-bar {
  position: absolute;
  right: 2px;
  top: 4px
}

.monaco-inputbox .monaco-action-bar .action-item {
  margin-left: 2px
}

.monaco-inputbox .monaco-action-bar .action-item .codicon {
  background-repeat: no-repeat;
  width: 16px;
  height: 16px
}

.monaco-icon-label {
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis
}

.monaco-icon-label:before {
  background-size: 16px;
  background-position: left center;
  background-repeat: no-repeat;
  padding-right: 6px;
  width: 16px;
  height: 22px;
  line-height: inherit !important;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: top;
  flex-shrink: 0
}

.monaco-icon-label>.monaco-icon-label-container {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1
}

.monaco-icon-label>.monaco-icon-label-container>.monaco-icon-name-container>.label-name {
  color: inherit;
  white-space: pre
}

.monaco-icon-label>.monaco-icon-label-container>.monaco-icon-name-container>.label-name>.label-separator {
  margin: 0 2px;
  opacity: .5
}

.monaco-icon-label>.monaco-icon-label-container>.monaco-icon-description-container>.label-description {
  opacity: .7;
  margin-left: .5em;
  font-size: .9em;
  white-space: pre
}

.monaco-icon-label.nowrap>.monaco-icon-label-container>.monaco-icon-description-container>.label-description {
  white-space: nowrap
}

.vs .monaco-icon-label>.monaco-icon-label-container>.monaco-icon-description-container>.label-description {
  opacity: .95
}

.monaco-icon-label.italic>.monaco-icon-label-container>.monaco-icon-name-container>.label-name,
.monaco-icon-label.italic>.monaco-icon-label-container>.monaco-icon-description-container>.label-description {
  font-style: italic
}

.monaco-icon-label.deprecated {
  text-decoration: line-through;
  opacity: .66
}

.monaco-icon-label.italic:after {
  font-style: italic
}

.monaco-icon-label.strikethrough>.monaco-icon-label-container>.monaco-icon-name-container>.label-name,
.monaco-icon-label.strikethrough>.monaco-icon-label-container>.monaco-icon-description-container>.label-description {
  text-decoration: line-through
}

.monaco-icon-label:after {
  opacity: .75;
  font-size: 90%;
  font-weight: 600;
  margin: auto 16px 0 5px;
  text-align: center
}

.monaco-list:focus .selected .monaco-icon-label,
.monaco-list:focus .selected .monaco-icon-label:after {
  color: inherit !important
}

.monaco-list-row.focused.selected .label-description,
.monaco-list-row.selected .label-description {
  opacity: .8
}

.monaco-keybinding {
  display: flex;
  align-items: center;
  line-height: 10px
}

.monaco-keybinding>.monaco-keybinding-key {
  display: inline-block;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  vertical-align: middle;
  font-size: 11px;
  padding: 3px 5px;
  margin: 0 2px
}

.monaco-keybinding>.monaco-keybinding-key:first-child {
  margin-left: 0
}

.monaco-keybinding>.monaco-keybinding-key:last-child {
  margin-right: 0
}

.monaco-keybinding>.monaco-keybinding-key-separator {
  display: inline-block
}

.monaco-keybinding>.monaco-keybinding-key-chord-separator {
  width: 6px
}
`;