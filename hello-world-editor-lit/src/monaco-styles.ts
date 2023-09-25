import { css } from 'lit';

export const monacocss = css`

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-aria-container {
	position: absolute;
	/* try to hide from window but not from screen readers */
	left: -999em;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-list {
	position: relative;
	height: 100%;
	width: 100%;
	white-space: nowrap;
}

.monaco-list.mouse-support {
	user-select: none;
	-webkit-user-select: none;
}

.monaco-list>.monaco-scrollable-element {
	height: 100%;
}

.monaco-list-rows {
	position: relative;
	width: 100%;
	height: 100%;
}

.monaco-list.horizontal-scrolling .monaco-list-rows {
	width: auto;
	min-width: 100%;
}

.monaco-list-row {
	position: absolute;
	box-sizing: border-box;
	overflow: hidden;
	width: 100%;
}

.monaco-list.mouse-support .monaco-list-row {
	cursor: pointer;
	touch-action: none;
}

/* for OS X ballistic scrolling */
.monaco-list-row.scrolling {
	display: none !important;
}

/* Focus */
.monaco-list.element-focused,
.monaco-list.selection-single,
.monaco-list.selection-multiple {
	outline: 0 !important;
}

/* Dnd */
.monaco-drag-image {
	display: inline-block;
	padding: 1px 7px;
	border-radius: 10px;
	font-size: 12px;
	position: absolute;
	z-index: 1000;
}

/* Filter */

.monaco-list-type-filter-message {
	position: absolute;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	padding: 40px 1em 1em 1em;
	text-align: center;
	white-space: normal;
	opacity: 0.7;
	pointer-events: none;
}

.monaco-list-type-filter-message:empty {
	display: none;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Arrows */
.monaco-scrollable-element>.scrollbar>.scra {
	cursor: pointer;
	font-size: 11px !important;
}

.monaco-scrollable-element>.visible {
	opacity: 1;

	/* Background rule added for IE9 - to allow clicks on dom node */
	background: rgba(0, 0, 0, 0);

	transition: opacity 100ms linear;
	/* In front of peek view */
	z-index: 11;
}

.monaco-scrollable-element>.invisible {
	opacity: 0;
	pointer-events: none;
}

.monaco-scrollable-element>.invisible.fade {
	transition: opacity 800ms linear;
}

/* Scrollable Content Inset Shadow */
.monaco-scrollable-element>.shadow {
	position: absolute;
	display: none;
}

.monaco-scrollable-element>.shadow.top {
	display: block;
	top: 0;
	left: 3px;
	height: 3px;
	width: 100%;
	box-shadow: var(--vscode-scrollbar-shadow) 0 6px 6px -6px inset;
}

.monaco-scrollable-element>.shadow.left {
	display: block;
	top: 3px;
	left: 0;
	height: 100%;
	width: 3px;
	box-shadow: var(--vscode-scrollbar-shadow) 6px 0 6px -6px inset;
}

.monaco-scrollable-element>.shadow.top-left-corner {
	display: block;
	top: 0;
	left: 0;
	height: 3px;
	width: 3px;
}

.monaco-scrollable-element>.shadow.top.left {
	box-shadow: var(--vscode-scrollbar-shadow) 6px 0 6px -6px inset;
}

.monaco-scrollable-element>.scrollbar>.slider {
	background: var(--vscode-scrollbarSlider-background);
}

.monaco-scrollable-element>.scrollbar>.slider:hover {
	background: var(--vscode-scrollbarSlider-hoverBackground);
}

.monaco-scrollable-element>.scrollbar>.slider.active {
	background: var(--vscode-scrollbarSlider-activeBackground);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Use custom CSS vars to expose padding into parent select for padding calculation */
.monaco-select-box-dropdown-padding {
	--dropdown-padding-top: 1px;
	--dropdown-padding-bottom: 1px;
}

.hc-black .monaco-select-box-dropdown-padding,
.hc-light .monaco-select-box-dropdown-padding {
	--dropdown-padding-top: 3px;
	--dropdown-padding-bottom: 4px;
}

.monaco-select-box-dropdown-container {
	display: none;
	box-sizing: border-box;
}

.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown * {
	margin: 0;
}

.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a:focus {
	outline: 1px solid -webkit-focus-ring-color;
	outline-offset: -1px;
}

.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown code {
	line-height: 15px;
	/** For some reason, this is needed, otherwise <code> will take up 20px height */
	font-family: var(--monaco-monospace-font);
}


.monaco-select-box-dropdown-container.visible {
	display: flex;
	flex-direction: column;
	text-align: left;
	width: 1px;
	overflow: hidden;
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.monaco-select-box-dropdown-container>.select-box-dropdown-list-container {
	flex: 0 0 auto;
	align-self: flex-start;
	padding-top: var(--dropdown-padding-top);
	padding-bottom: var(--dropdown-padding-bottom);
	padding-left: 1px;
	padding-right: 1px;
	width: 100%;
	overflow: hidden;
	box-sizing: border-box;
}

.monaco-select-box-dropdown-container>.select-box-details-pane {
	padding: 5px;
}

.hc-black .monaco-select-box-dropdown-container>.select-box-dropdown-list-container {
	padding-top: var(--dropdown-padding-top);
	padding-bottom: var(--dropdown-padding-bottom);
}

.monaco-select-box-dropdown-container>.select-box-dropdown-list-container .monaco-list .monaco-list-row {
	cursor: pointer;
}

.monaco-select-box-dropdown-container>.select-box-dropdown-list-container .monaco-list .monaco-list-row>.option-text {
	text-overflow: ellipsis;
	overflow: hidden;
	padding-left: 3.5px;
	white-space: nowrap;
	float: left;
}

.monaco-select-box-dropdown-container>.select-box-dropdown-list-container .monaco-list .monaco-list-row>.option-detail {
	text-overflow: ellipsis;
	overflow: hidden;
	padding-left: 3.5px;
	white-space: nowrap;
	float: left;
	opacity: 0.7;
}

.monaco-select-box-dropdown-container>.select-box-dropdown-list-container .monaco-list .monaco-list-row>.option-decorator-right {
	text-overflow: ellipsis;
	overflow: hidden;
	padding-right: 10px;
	white-space: nowrap;
	float: right;
}


/* Accepted CSS hiding technique for accessibility reader text  */
/* https://webaim.org/techniques/css/invisiblecontent/ */

.monaco-select-box-dropdown-container>.select-box-dropdown-list-container .monaco-list .monaco-list-row>.visually-hidden {
	position: absolute;
	left: -10000px;
	top: auto;
	width: 1px;
	height: 1px;
	overflow: hidden;
}

.monaco-select-box-dropdown-container>.select-box-dropdown-container-width-control {
	flex: 1 1 auto;
	align-self: flex-start;
	opacity: 0;
}

.monaco-select-box-dropdown-container>.select-box-dropdown-container-width-control>.width-control-div {
	overflow: hidden;
	max-height: 0px;
}

.monaco-select-box-dropdown-container>.select-box-dropdown-container-width-control>.width-control-div>.option-text-width-control {
	padding-left: 4px;
	padding-right: 8px;
	white-space: nowrap;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-select-box {
	width: 100%;
	cursor: pointer;
	border-radius: 2px;
}

.monaco-select-box-dropdown-container {
	font-size: 13px;
	font-weight: normal;
	text-transform: none;
}

/** Actions */

.monaco-action-bar .action-item.select-container {
	cursor: default;
}

.monaco-action-bar .action-item .monaco-select-box {
	cursor: pointer;
	min-width: 100px;
	min-height: 18px;
	padding: 2px 23px 2px 8px;
}

.mac .monaco-action-bar .action-item .monaco-select-box {
	font-size: 11px;
	border-radius: 5px;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-action-bar {
	white-space: nowrap;
	height: 100%;
}

.monaco-action-bar .actions-container {
	display: flex;
	margin: 0 auto;
	padding: 0;
	height: 100%;
	width: 100%;
	align-items: center;
}

.monaco-action-bar.vertical .actions-container {
	display: inline-block;
}

.monaco-action-bar .action-item {
	display: block;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	position: relative;
	/* DO NOT REMOVE - this is the key to preventing the ghosting icon bug in Chrome 42 */
}

.monaco-action-bar .action-item.disabled {
	cursor: default;
}

.monaco-action-bar .action-item .icon,
.monaco-action-bar .action-item .codicon {
	display: block;
}

.monaco-action-bar .action-item .codicon {
	display: flex;
	align-items: center;
	width: 16px;
	height: 16px;
}

.monaco-action-bar .action-label {
	display: flex;
	font-size: 11px;
	padding: 3px;
	border-radius: 5px;
}

.monaco-action-bar .action-item.disabled .action-label,
.monaco-action-bar .action-item.disabled .action-label::before,
.monaco-action-bar .action-item.disabled .action-label:hover {
	opacity: 0.6;
}

/* Vertical actions */

.monaco-action-bar.vertical {
	text-align: left;
}

.monaco-action-bar.vertical .action-item {
	display: block;
}

.monaco-action-bar.vertical .action-label.separator {
	display: block;
	border-bottom: 1px solid #bbb;
	padding-top: 1px;
	margin-left: .8em;
	margin-right: .8em;
}

.monaco-action-bar .action-item .action-label.separator {
	width: 1px;
	height: 16px;
	margin: 5px 4px !important;
	cursor: default;
	min-width: 1px;
	padding: 0;
	background-color: #bbb;
}

.secondary-actions .monaco-action-bar .action-label {
	margin-left: 6px;
}

/* Action Items */
.monaco-action-bar .action-item.select-container {
	overflow: hidden;
	/* somehow the dropdown overflows its container, we prevent it here to not push */
	flex: 1;
	max-width: 170px;
	min-width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
}

.monaco-action-bar .action-item.action-dropdown-item {
	display: flex;
}

.monaco-action-bar .action-item.action-dropdown-item>.action-dropdown-item-separator {
	display: flex;
	align-items: center;
	cursor: default;
}

.monaco-action-bar .action-item.action-dropdown-item>.action-dropdown-item-separator>div {
	width: 1px;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.context-view {
	position: absolute;
}

.context-view.fixed {
	all: initial;
	font-family: inherit;
	font-size: 13px;
	position: fixed;
	color: inherit;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-dropdown {
	height: 100%;
	padding: 0;
}

.monaco-dropdown>.dropdown-label {
	cursor: pointer;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.monaco-dropdown>.dropdown-label>.action-label.disabled {
	cursor: default;
}

.monaco-dropdown-with-primary {
	display: flex !important;
	flex-direction: row;
	border-radius: 5px;
}

.monaco-dropdown-with-primary>.action-container>.action-label {
	margin-right: 0;
}

.monaco-dropdown-with-primary>.dropdown-action-container>.monaco-dropdown>.dropdown-label .codicon[class*='codicon-'] {
	font-size: 12px;
	padding-left: 0px;
	padding-right: 0px;
	line-height: 16px;
	margin-left: -3px;
}

.monaco-dropdown-with-primary>.dropdown-action-container>.monaco-dropdown>.dropdown-label>.action-label {
	display: block;
	background-size: 16px;
	background-position: center center;
	background-repeat: no-repeat;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-action-bar .action-item.menu-entry .action-label.icon {
	width: 16px;
	height: 16px;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 16px;
}

.monaco-dropdown-with-default {
	display: flex !important;
	flex-direction: row;
	border-radius: 5px;
}

.monaco-dropdown-with-default>.action-container>.action-label {
	margin-right: 0;
}

.monaco-dropdown-with-default>.action-container.menu-entry>.action-label.icon {
	width: 16px;
	height: 16px;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 16px;
}

.monaco-dropdown-with-default>.dropdown-action-container>.monaco-dropdown>.dropdown-label .codicon[class*='codicon-'] {
	font-size: 12px;
	padding-left: 0px;
	padding-right: 0px;
	line-height: 16px;
	margin-left: -3px;
}

.monaco-dropdown-with-default>.dropdown-action-container>.monaco-dropdown>.dropdown-label>.action-label {
	display: block;
	background-size: 16px;
	background-position: center center;
	background-repeat: no-repeat;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.quick-input-widget {
	font-size: 13px;
}

.quick-input-widget .monaco-highlighted-label .highlight,
.quick-input-widget .monaco-highlighted-label .highlight {
	color: #0066BF;
}

.vs .quick-input-widget .monaco-list-row.focused .monaco-highlighted-label .highlight,
.vs .quick-input-widget .monaco-list-row.focused .monaco-highlighted-label .highlight {
	color: #9DDDFF;
}

.vs-dark .quick-input-widget .monaco-highlighted-label .highlight,
.vs-dark .quick-input-widget .monaco-highlighted-label .highlight {
	color: #0097fb;
}

.hc-black .quick-input-widget .monaco-highlighted-label .highlight,
.hc-black .quick-input-widget .monaco-highlighted-label .highlight {
	color: #F38518;
}

.hc-light .quick-input-widget .monaco-highlighted-label .highlight,
.hc-light .quick-input-widget .monaco-highlighted-label .highlight {
	color: #0F4A85;
}

.monaco-keybinding>.monaco-keybinding-key {
	background-color: rgba(221, 221, 221, 0.4);
	border: solid 1px rgba(204, 204, 204, 0.4);
	border-bottom-color: rgba(187, 187, 187, 0.4);
	box-shadow: inset 0 -1px 0 rgba(187, 187, 187, 0.4);
	color: #555;
}

.hc-black .monaco-keybinding>.monaco-keybinding-key {
	background-color: transparent;
	border: solid 1px rgb(111, 195, 223);
	box-shadow: none;
	color: #fff;
}

.hc-light .monaco-keybinding>.monaco-keybinding-key {
	background-color: transparent;
	border: solid 1px #0F4A85;
	box-shadow: none;
	color: #292929;
}

.vs-dark .monaco-keybinding>.monaco-keybinding-key {
	background-color: rgba(128, 128, 128, 0.17);
	border: solid 1px rgba(51, 51, 51, 0.6);
	border-bottom-color: rgba(68, 68, 68, 0.6);
	box-shadow: inset 0 -1px 0 rgba(68, 68, 68, 0.6);
	color: #ccc;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

:root {
	--vscode-sash-size: 4px;
}

.monaco-sash {
	position: absolute;
	z-index: 35;
	touch-action: none;
}

.monaco-sash.disabled {
	pointer-events: none;
}

.monaco-sash.mac.vertical {
	cursor: col-resize;
}

.monaco-sash.vertical.minimum {
	cursor: e-resize;
}

.monaco-sash.vertical.maximum {
	cursor: w-resize;
}

.monaco-sash.mac.horizontal {
	cursor: row-resize;
}

.monaco-sash.horizontal.minimum {
	cursor: s-resize;
}

.monaco-sash.horizontal.maximum {
	cursor: n-resize;
}

.monaco-sash.disabled {
	cursor: default !important;
	pointer-events: none !important;
}

.monaco-sash.vertical {
	cursor: ew-resize;
	top: 0;
	width: var(--vscode-sash-size);
	height: 100%;
}

.monaco-sash.horizontal {
	cursor: ns-resize;
	left: 0;
	width: 100%;
	height: var(--vscode-sash-size);
}

.monaco-sash:not(.disabled)>.orthogonal-drag-handle {
	content: " ";
	height: calc(var(--vscode-sash-size) * 2);
	width: calc(var(--vscode-sash-size) * 2);
	z-index: 100;
	display: block;
	cursor: all-scroll;
	position: absolute;
}

.monaco-sash.horizontal.orthogonal-edge-north:not(.disabled)>.orthogonal-drag-handle.start,
.monaco-sash.horizontal.orthogonal-edge-south:not(.disabled)>.orthogonal-drag-handle.end {
	cursor: nwse-resize;
}

.monaco-sash.horizontal.orthogonal-edge-north:not(.disabled)>.orthogonal-drag-handle.end,
.monaco-sash.horizontal.orthogonal-edge-south:not(.disabled)>.orthogonal-drag-handle.start {
	cursor: nesw-resize;
}

.monaco-sash.vertical>.orthogonal-drag-handle.start {
	left: calc(var(--vscode-sash-size) * -0.5);
	top: calc(var(--vscode-sash-size) * -1);
}

.monaco-sash.vertical>.orthogonal-drag-handle.end {
	left: calc(var(--vscode-sash-size) * -0.5);
	bottom: calc(var(--vscode-sash-size) * -1);
}

.monaco-sash.horizontal>.orthogonal-drag-handle.start {
	top: calc(var(--vscode-sash-size) * -0.5);
	left: calc(var(--vscode-sash-size) * -1);
}

.monaco-sash.horizontal>.orthogonal-drag-handle.end {
	top: calc(var(--vscode-sash-size) * -0.5);
	right: calc(var(--vscode-sash-size) * -1);
}

.monaco-sash:before {
	content: '';
	pointer-events: none;
	position: absolute;
	width: 100%;
	height: 100%;
	background: transparent;
}

.monaco-workbench:not(.reduce-motion) .monaco-sash:before {
	transition: background-color 0.1s ease-out;
}

.monaco-sash.hover:before,
.monaco-sash.active:before {
	background: var(--vscode-sash-hoverBorder);
}

.monaco-sash.vertical:before {
	width: var(--vscode-sash-hover-size);
	left: calc(50% - (var(--vscode-sash-hover-size) / 2));
}

.monaco-sash.horizontal:before {
	height: var(--vscode-sash-hover-size);
	top: calc(50% - (var(--vscode-sash-hover-size) / 2));
}

.pointer-events-disabled {
	pointer-events: none !important;
}

/** Debug **/

.monaco-sash.debug {
	background: cyan;
}

.monaco-sash.debug.disabled {
	background: rgba(0, 255, 255, 0.2);
}

.monaco-sash.debug:not(.disabled)>.orthogonal-drag-handle {
	background: red;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-split-view2 {
	position: relative;
	width: 100%;
	height: 100%;
}

.monaco-split-view2>.sash-container {
	position: absolute;
	width: 100%;
	height: 100%;
	pointer-events: none;
}

.monaco-split-view2>.sash-container>.monaco-sash {
	pointer-events: initial;
}

.monaco-split-view2>.monaco-scrollable-element {
	width: 100%;
	height: 100%;
}

.monaco-split-view2>.monaco-scrollable-element>.split-view-container {
	width: 100%;
	height: 100%;
	white-space: nowrap;
	position: relative;
}

.monaco-split-view2>.monaco-scrollable-element>.split-view-container>.split-view-view {
	white-space: initial;
	position: absolute;
}

.monaco-split-view2>.monaco-scrollable-element>.split-view-container>.split-view-view:not(.visible) {
	display: none;
}

.monaco-split-view2.vertical>.monaco-scrollable-element>.split-view-container>.split-view-view {
	width: 100%;
}

.monaco-split-view2.horizontal>.monaco-scrollable-element>.split-view-container>.split-view-view {
	height: 100%;
}

.monaco-split-view2.separator-border>.monaco-scrollable-element>.split-view-container>.split-view-view:not(:first-child)::before {
	content: ' ';
	position: absolute;
	top: 0;
	left: 0;
	z-index: 5;
	pointer-events: none;
	background-color: var(--separator-border);
}

.monaco-split-view2.separator-border.horizontal>.monaco-scrollable-element>.split-view-container>.split-view-view:not(:first-child)::before {
	height: 100%;
	width: 1px;
}

.monaco-split-view2.separator-border.vertical>.monaco-scrollable-element>.split-view-container>.split-view-view:not(:first-child)::before {
	height: 1px;
	width: 100%;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-table {
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
}

.monaco-table>.monaco-split-view2 {
	border-bottom: 1px solid transparent;
}

.monaco-table>.monaco-list {
	flex: 1;
}

.monaco-table-tr {
	display: flex;
	height: 100%;
}

.monaco-table-th {
	width: 100%;
	height: 100%;
	font-weight: bold;
	overflow: hidden;
	text-overflow: ellipsis;
}

.monaco-table-th,
.monaco-table-td {
	box-sizing: border-box;
	flex-shrink: 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.monaco-table>.monaco-split-view2 .monaco-sash.vertical::before {
	content: "";
	position: absolute;
	left: calc(var(--vscode-sash-size) / 2);
	width: 0;
	border-left: 1px solid transparent;
}

.monaco-workbench:not(.reduce-motion) .monaco-table>.monaco-split-view2,
.monaco-workbench:not(.reduce-motion) .monaco-table>.monaco-split-view2 .monaco-sash.vertical::before {
	transition: border-color 0.2s ease-out;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-custom-toggle {
	margin-left: 2px;
	float: left;
	cursor: pointer;
	overflow: hidden;
	width: 20px;
	height: 20px;
	border-radius: 3px;
	border: 1px solid transparent;
	padding: 1px;
	box-sizing: border-box;
	user-select: none;
	-webkit-user-select: none;
}

.monaco-custom-toggle:hover {
	background-color: var(--vscode-inputOption-hoverBackground);
}

.hc-black .monaco-custom-toggle:hover,
.hc-light .monaco-custom-toggle:hover {
	border: 1px dashed var(--vscode-focusBorder);
}

.hc-black .monaco-custom-toggle,
.hc-light .monaco-custom-toggle {
	background: none;
}

.hc-black .monaco-custom-toggle:hover,
.hc-light .monaco-custom-toggle:hover {
	background: none;
}

.monaco-custom-toggle.monaco-checkbox {
	height: 18px;
	width: 18px;
	border: 1px solid transparent;
	border-radius: 3px;
	margin-right: 9px;
	margin-left: 0px;
	padding: 0px;
	opacity: 1;
	background-size: 16px !important;
}

/* hide check when unchecked */
.monaco-custom-toggle.monaco-checkbox:not(.checked)::before {
	visibility: hidden;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-inputbox {
	position: relative;
	display: block;
	padding: 0;
	box-sizing: border-box;
	border-radius: 2px;

	/* Customizable */
	font-size: inherit;
}

.monaco-inputbox>.ibwrapper>.input,
.monaco-inputbox>.ibwrapper>.mirror {

	/* Customizable */
	padding: 4px 6px;
}

.monaco-inputbox>.ibwrapper {
	position: relative;
	width: 100%;
	height: 100%;
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
	color: inherit;
}

.monaco-inputbox>.ibwrapper>input {
	text-overflow: ellipsis;
}

.monaco-inputbox>.ibwrapper>textarea.input {
	display: block;
	scrollbar-width: none;
	/* Firefox: hide scrollbars */
	outline: none;
}

.monaco-inputbox>.ibwrapper>textarea.input::-webkit-scrollbar {
	display: none;
	/* Chrome + Safari: hide scrollbar */
}

.monaco-inputbox>.ibwrapper>textarea.input.empty {
	white-space: nowrap;
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
	word-wrap: break-word;
}

/* Context view */

.monaco-inputbox-container {
	text-align: right;
}

.monaco-inputbox-container .monaco-inputbox-message {
	display: inline-block;
	overflow: hidden;
	text-align: left;
	width: 100%;
	box-sizing: border-box;
	padding: 0.4em;
	font-size: 12px;
	line-height: 17px;
	margin-top: -1px;
	word-wrap: break-word;
}

/* Action bar support */
.monaco-inputbox .monaco-action-bar {
	position: absolute;
	right: 2px;
	top: 4px;
}

.monaco-inputbox .monaco-action-bar .action-item {
	margin-left: 2px;
}

.monaco-inputbox .monaco-action-bar .action-item .codicon {
	background-repeat: no-repeat;
	width: 16px;
	height: 16px;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/* ---------- Find input ---------- */

.monaco-findInput {
	position: relative;
}

.monaco-findInput .monaco-inputbox {
	font-size: 13px;
	width: 100%;
}

.monaco-findInput>.controls {
	position: absolute;
	top: 3px;
	right: 2px;
}

.vs .monaco-findInput.disabled {
	background-color: #E1E1E1;
}

/* Theming */
.vs-dark .monaco-findInput.disabled {
	background-color: #333;
}

/* Highlighting */
.monaco-findInput.highlight-0 .controls,
.hc-light .monaco-findInput.highlight-0 .controls {
	animation: monaco-findInput-highlight-0 100ms linear 0s;
}

.monaco-findInput.highlight-1 .controls,
.hc-light .monaco-findInput.highlight-1 .controls {
	animation: monaco-findInput-highlight-1 100ms linear 0s;
}

.hc-black .monaco-findInput.highlight-0 .controls,
.vs-dark .monaco-findInput.highlight-0 .controls {
	animation: monaco-findInput-highlight-dark-0 100ms linear 0s;
}

.hc-black .monaco-findInput.highlight-1 .controls,
.vs-dark .monaco-findInput.highlight-1 .controls {
	animation: monaco-findInput-highlight-dark-1 100ms linear 0s;
}

@keyframes monaco-findInput-highlight-0 {
	0% {
		background: rgba(253, 255, 0, 0.8);
	}

	100% {
		background: transparent;
	}
}

@keyframes monaco-findInput-highlight-1 {
	0% {
		background: rgba(253, 255, 0, 0.8);
	}

	/* Made intentionally different such that the CSS minifier does not collapse the two animations into a single one*/
	99% {
		background: transparent;
	}
}

@keyframes monaco-findInput-highlight-dark-0 {
	0% {
		background: rgba(255, 255, 255, 0.44);
	}

	100% {
		background: transparent;
	}
}

@keyframes monaco-findInput-highlight-dark-1 {
	0% {
		background: rgba(255, 255, 255, 0.44);
	}

	/* Made intentionally different such that the CSS minifier does not collapse the two animations into a single one*/
	99% {
		background: transparent;
	}
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-tl-row {
	display: flex;
	height: 100%;
	align-items: center;
	position: relative;
}

.monaco-tl-row.disabled {
	cursor: default;
}

.monaco-tl-indent {
	height: 100%;
	position: absolute;
	top: 0;
	left: 16px;
	pointer-events: none;
}

.hide-arrows .monaco-tl-indent {
	left: 12px;
}

.monaco-tl-indent>.indent-guide {
	display: inline-block;
	box-sizing: border-box;
	height: 100%;
	border-left: 1px solid transparent;
}

.monaco-workbench:not(.reduce-motion) .monaco-tl-indent>.indent-guide {
	transition: border-color 0.1s linear;
}

.monaco-tl-twistie,
.monaco-tl-contents {
	height: 100%;
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
	transform: translateX(3px);
}

.monaco-tl-contents {
	flex: 1;
	overflow: hidden;
}

.monaco-tl-twistie::before {
	border-radius: 20px;
}

.monaco-tl-twistie.collapsed::before {
	transform: rotate(-90deg);
}

.monaco-tl-twistie.codicon-tree-item-loading::before {
	/* Use steps to throttle FPS to reduce CPU usage */
	animation: codicon-spin 1.25s steps(30) infinite;
}

.monaco-tree-type-filter {
	position: absolute;
	top: 0;
	display: flex;
	padding: 3px;
	max-width: 200px;
	z-index: 100;
	margin: 0 6px;
	border: 1px solid var(--vscode-widget-border);
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
}

.monaco-workbench:not(.reduce-motion) .monaco-tree-type-filter {
	transition: top 0.3s;
}

.monaco-tree-type-filter.disabled {
	top: -40px !important;
}

.monaco-tree-type-filter-grab {
	display: flex !important;
	align-items: center;
	justify-content: center;
	cursor: grab;
	margin-right: 2px;
}

.monaco-tree-type-filter-grab.grabbing {
	cursor: grabbing;
}

.monaco-tree-type-filter-input {
	flex: 1;
}

.monaco-tree-type-filter-input .monaco-inputbox {
	height: 23px;
}

.monaco-tree-type-filter-input .monaco-inputbox>.ibwrapper>.input,
.monaco-tree-type-filter-input .monaco-inputbox>.ibwrapper>.mirror {
	padding: 2px 4px;
}

.monaco-tree-type-filter-input .monaco-findInput>.controls {
	top: 2px;
}

.monaco-tree-type-filter-actionbar {
	margin-left: 4px;
}

.monaco-tree-type-filter-actionbar .monaco-action-bar .action-label {
	padding: 2px;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-text-button {
	box-sizing: border-box;
	display: flex;
	width: 100%;
	padding: 4px;
	border-radius: 2px;
	text-align: center;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	border: 1px solid var(--vscode-button-border, transparent);
	line-height: 18px;
}

.monaco-text-button:focus {
	outline-offset: 2px !important;
}

.monaco-text-button:hover {
	text-decoration: none !important;
}

.monaco-button.disabled:focus,
.monaco-button.disabled {
	opacity: 0.4 !important;
	cursor: default;
}

.monaco-text-button .codicon {
	margin: 0 0.2em;
	color: inherit !important;
}

.monaco-text-button.monaco-text-button-with-short-label {
	flex-direction: row;
	flex-wrap: wrap;
	padding: 0 4px;
	overflow: hidden;
	height: 28px;
}

.monaco-text-button.monaco-text-button-with-short-label>.monaco-button-label {
	flex-basis: 100%;
}

.monaco-text-button.monaco-text-button-with-short-label>.monaco-button-label-short {
	flex-grow: 1;
	width: 0;
	overflow: hidden;
}

.monaco-text-button.monaco-text-button-with-short-label>.monaco-button-label,
.monaco-text-button.monaco-text-button-with-short-label>.monaco-button-label-short {
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: normal;
	font-style: inherit;
	padding: 4px 0;
}

.monaco-button-dropdown {
	display: flex;
	cursor: pointer;
}

.monaco-button-dropdown.disabled {
	cursor: default;
}

.monaco-button-dropdown>.monaco-button:focus {
	outline-offset: -1px !important;
}

.monaco-button-dropdown.disabled>.monaco-button.disabled,
.monaco-button-dropdown.disabled>.monaco-button.disabled:focus,
.monaco-button-dropdown.disabled>.monaco-button-dropdown-separator {
	opacity: 0.4 !important;
}

.monaco-button-dropdown>.monaco-button.monaco-text-button {
	border-right-width: 0 !important;
}

.monaco-button-dropdown .monaco-button-dropdown-separator {
	padding: 4px 0;
	cursor: default;
}

.monaco-button-dropdown .monaco-button-dropdown-separator>div {
	height: 100%;
	width: 1px;
}

.monaco-button-dropdown>.monaco-button.monaco-dropdown-button {
	border: 1px solid var(--vscode-button-border, transparent);
	border-left-width: 0 !important;
	border-radius: 0 2px 2px 0;
}

.monaco-button-dropdown>.monaco-button.monaco-text-button {
	border-radius: 2px 0 0 2px;
}

.monaco-description-button {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 4px 5px;
	/* allows button focus outline to be visible */
}

.monaco-description-button .monaco-button-description {
	font-style: italic;
	font-size: 11px;
	padding: 4px 20px;
}

.monaco-description-button .monaco-button-label,
.monaco-description-button .monaco-button-description {
	display: flex;
	justify-content: center;
	align-items: center;
}

.monaco-description-button .monaco-button-label>.codicon,
.monaco-description-button .monaco-button-description>.codicon {
	margin: 0 0.2em;
	color: inherit !important;
}

/* default color styles - based on CSS variables */

.monaco-button.default-colors,
.monaco-button-dropdown.default-colors>.monaco-button {
	color: var(--vscode-button-foreground);
	background-color: var(--vscode-button-background);
}

.monaco-button.default-colors:hover,
.monaco-button-dropdown.default-colors>.monaco-button:hover {
	background-color: var(--vscode-button-hoverBackground);
}

.monaco-button.default-colors.secondary,
.monaco-button-dropdown.default-colors>.monaco-button.secondary {
	color: var(--vscode-button-secondaryForeground);
	background-color: var(--vscode-button-secondaryBackground);
}

.monaco-button.default-colors.secondary:hover,
.monaco-button-dropdown.default-colors>.monaco-button.secondary:hover {
	background-color: var(--vscode-button-secondaryHoverBackground);
}

.monaco-button-dropdown.default-colors .monaco-button-dropdown-separator {
	background-color: var(--vscode-button-background);
	border-top: 1px solid var(--vscode-button-border);
	border-bottom: 1px solid var(--vscode-button-border);
}

.monaco-button-dropdown.default-colors .monaco-button.secondary+.monaco-button-dropdown-separator {
	background-color: var(--vscode-button-secondaryBackground);
}

.monaco-button-dropdown.default-colors .monaco-button-dropdown-separator>div {
	background-color: var(--vscode-button-separator);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-count-badge {
	padding: 3px 6px;
	border-radius: 11px;
	font-size: 11px;
	min-width: 18px;
	min-height: 18px;
	line-height: 11px;
	font-weight: normal;
	text-align: center;
	display: inline-block;
	box-sizing: border-box;
}

.monaco-count-badge.long {
	padding: 2px 3px;
	border-radius: 2px;
	min-height: auto;
	line-height: normal;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-progress-container {
	width: 100%;
	height: 5px;
	overflow: hidden;
	/* keep progress bit in bounds */
}

.monaco-progress-container .progress-bit {
	width: 2%;
	height: 5px;
	position: absolute;
	left: 0;
	display: none;
}

.monaco-progress-container.active .progress-bit {
	display: inherit;
}

.monaco-progress-container.discrete .progress-bit {
	left: 0;
	transition: width 100ms linear;
}

.monaco-progress-container.discrete.done .progress-bit {
	width: 100%;
}

.monaco-progress-container.infinite .progress-bit {
	animation-name: progress;
	animation-duration: 4s;
	animation-iteration-count: infinite;
	transform: translate3d(0px, 0px, 0px);
	animation-timing-function: linear;
}

.monaco-progress-container.infinite.infinite-long-running .progress-bit {
	/*
		The more smooth linear timing function can cause
		higher GPU consumption as indicated in
		https://github.com/microsoft/vscode/issues/97900 &
		https://github.com/microsoft/vscode/issues/138396
	*/
	animation-timing-function: steps(100);
}

/**
 * The progress bit has a width: 2% (1/50) of the parent container. The animation moves it from 0% to 100% of
 * that container. Since translateX is relative to the progress bit size, we have to multiple it with
 * its relative size to the parent container:
 * parent width: 5000%
 *    bit width: 100%
 * translateX should be as follow:
 *  50%: 5000% * 50% - 50% (set to center) = 2450%
 * 100%: 5000% * 100% - 100% (do not overflow) = 4900%
 */
@keyframes progress {
	from {
		transform: translateX(0%) scaleX(1)
	}

	50% {
		transform: translateX(2500%) scaleX(3)
	}

	to {
		transform: translateX(4900%) scaleX(1)
	}
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.quick-input-widget {
	position: absolute;
	width: 600px;
	z-index: 2550;
	left: 50%;
	margin-left: -300px;
	-webkit-app-region: no-drag;
	border-radius: 6px;
}

.quick-input-titlebar {
	display: flex;
	align-items: center;
	border-top-left-radius: 5px;
	/* match border radius of quick input widget */
	border-top-right-radius: 5px;
}

.quick-input-left-action-bar {
	display: flex;
	margin-left: 4px;
	flex: 1;
}

.quick-input-title {
	padding: 3px 0px;
	text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
}

.quick-input-right-action-bar {
	display: flex;
	margin-right: 4px;
	flex: 1;
}

.quick-input-right-action-bar>.actions-container {
	justify-content: flex-end;
}

.quick-input-titlebar .monaco-action-bar .action-label.codicon {
	background-position: center;
	background-repeat: no-repeat;
	padding: 2px;
}

.quick-input-description {
	margin: 6px 6px 6px 11px;
}

.quick-input-header .quick-input-description {
	margin: 4px 2px;
	flex: 1;
}

.quick-input-header {
	display: flex;
	padding: 8px 6px 6px 6px;
}

.quick-input-widget.hidden-input .quick-input-header {
	/* reduce margins and paddings when input box hidden */
	padding: 0;
	margin-bottom: 0;
}

.quick-input-and-message {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	min-width: 0;
	position: relative;
}

.quick-input-check-all {
	align-self: center;
	margin: 0;
}

.quick-input-filter {
	flex-grow: 1;
	display: flex;
	position: relative;
}

.quick-input-box {
	flex-grow: 1;
}

.quick-input-widget.show-checkboxes .quick-input-box,
.quick-input-widget.show-checkboxes .quick-input-message {
	margin-left: 5px;
}

.quick-input-visible-count {
	position: absolute;
	left: -10000px;
}

.quick-input-count {
	align-self: center;
	position: absolute;
	right: 4px;
	display: flex;
	align-items: center;
}

.quick-input-count .monaco-count-badge {
	vertical-align: middle;
	padding: 2px 4px;
	border-radius: 2px;
	min-height: auto;
	line-height: normal;
}

.quick-input-action {
	margin-left: 6px;
}

.quick-input-action .monaco-text-button {
	font-size: 11px;
	padding: 0 6px;
	display: flex;
	height: 25px;
	align-items: center;
}

.quick-input-message {
	margin-top: -1px;
	padding: 5px;
	overflow-wrap: break-word;
}

.quick-input-message>.codicon {
	margin: 0 0.2em;
	vertical-align: text-bottom;
}

/* Links in descriptions & validations */
.quick-input-message a {
	color: inherit;
}

.quick-input-progress.monaco-progress-container {
	position: relative;
}

.quick-input-progress.monaco-progress-container,
.quick-input-progress.monaco-progress-container .progress-bit {
	height: 2px;
}

.quick-input-list {
	line-height: 22px;
}

.quick-input-widget.hidden-input .quick-input-list {
	margin-top: 4px;
	/* reduce margins when input box hidden */
	padding-bottom: 4px;
}

.quick-input-list .monaco-list {
	overflow: hidden;
	max-height: calc(20 * 22px);
	padding-bottom: 5px;
}

.quick-input-list .monaco-scrollable-element {
	padding: 0px 5px;
}

.quick-input-list .quick-input-list-entry {
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	height: 100%;
	padding: 0 6px;
}

.quick-input-list .quick-input-list-entry.quick-input-list-separator-border {
	border-top-width: 1px;
	border-top-style: solid;
}

.quick-input-list .monaco-list-row {
	border-radius: 3px;
}

.quick-input-list .monaco-list-row[data-index="0"] .quick-input-list-entry.quick-input-list-separator-border {
	border-top-style: none;
}

.quick-input-list .quick-input-list-label {
	overflow: hidden;
	display: flex;
	height: 100%;
	flex: 1;
}

.quick-input-list .quick-input-list-checkbox {
	align-self: center;
	margin: 0;
}

.quick-input-list .quick-input-list-icon {
	background-size: 16px;
	background-position: left center;
	background-repeat: no-repeat;
	padding-right: 6px;
	width: 16px;
	height: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.quick-input-list .quick-input-list-rows {
	overflow: hidden;
	text-overflow: ellipsis;
	display: flex;
	flex-direction: column;
	height: 100%;
	flex: 1;
	margin-left: 5px;
}

.quick-input-widget.show-checkboxes .quick-input-list .quick-input-list-rows {
	margin-left: 10px;
}

.quick-input-widget .quick-input-list .quick-input-list-checkbox {
	display: none;
}

.quick-input-widget.show-checkboxes .quick-input-list .quick-input-list-checkbox {
	display: inline;
}

.quick-input-list .quick-input-list-rows>.quick-input-list-row {
	display: flex;
	align-items: center;
}

.quick-input-list .quick-input-list-rows>.quick-input-list-row .monaco-icon-label,
.quick-input-list .quick-input-list-rows>.quick-input-list-row .monaco-icon-label .monaco-icon-label-container>.monaco-icon-name-container {
	flex: 1;
	/* make sure the icon label grows within the row */
}

.quick-input-list .quick-input-list-rows>.quick-input-list-row .codicon[class*='codicon-'] {
	vertical-align: text-bottom;
}

.quick-input-list .quick-input-list-rows .monaco-highlighted-label>span {
	opacity: 1;
}

.quick-input-list .quick-input-list-entry .quick-input-list-entry-keybinding {
	margin-right: 8px;
	/* separate from the separator label or scrollbar if any */
}

.quick-input-list .quick-input-list-label-meta {
	opacity: 0.7;
	line-height: normal;
	text-overflow: ellipsis;
	overflow: hidden;
}

.quick-input-list .monaco-highlighted-label .highlight {
	font-weight: bold;
}

.quick-input-list .quick-input-list-entry .quick-input-list-separator {
	margin-right: 4px;
	/* separate from keybindings or actions */
}

.quick-input-list .quick-input-list-entry-action-bar {
	display: flex;
	flex: 0;
	overflow: visible;
}

.quick-input-list .quick-input-list-entry-action-bar .action-label {
	/*
	 * By default, actions in the quick input action bar are hidden
	 * until hovered over them or selected.
	 */
	display: none;
}

.quick-input-list .quick-input-list-entry-action-bar .action-label.codicon {
	margin-right: 4px;
	padding: 0px 2px 2px 2px;
}

.quick-input-list .quick-input-list-entry-action-bar {
	margin-top: 1px;
}

.quick-input-list .quick-input-list-entry-action-bar {
	margin-right: 4px;
	/* separate from scrollbar */
}

.quick-input-list .quick-input-list-entry .quick-input-list-entry-action-bar .action-label.always-visible,
.quick-input-list .quick-input-list-entry:hover .quick-input-list-entry-action-bar .action-label,
.quick-input-list .monaco-list-row.focused .quick-input-list-entry-action-bar .action-label {
	display: flex;
}

/* focused items in quick pick */
.quick-input-list .monaco-list-row.focused .monaco-keybinding-key,
.quick-input-list .monaco-list-row.focused .quick-input-list-entry .quick-input-list-separator {
	color: inherit
}

.quick-input-list .monaco-list-row.focused .monaco-keybinding-key {
	background: none;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* ---------- Icon label ---------- */

.monaco-icon-label {
	display: flex;
	/* required for icons support :before rule */
	overflow: hidden;
	text-overflow: ellipsis;
}

.monaco-icon-label::before {

	/* svg icons rendered as background image */
	background-size: 16px;
	background-position: left center;
	background-repeat: no-repeat;
	padding-right: 6px;
	width: 16px;
	height: 22px;
	line-height: inherit !important;
	display: inline-block;

	/* fonts icons */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	vertical-align: top;

	flex-shrink: 0;
	/* fix for https://github.com/microsoft/vscode/issues/13787 */
}

.monaco-icon-label-container.disabled {
	color: var(--vscode-disabledForeground);
}

.monaco-icon-label>.monaco-icon-label-container {
	min-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	flex: 1;
}

.monaco-icon-label>.monaco-icon-label-container>.monaco-icon-name-container>.label-name {
	color: inherit;
	white-space: pre;
	/* enable to show labels that include multiple whitespaces */
}

.monaco-icon-label>.monaco-icon-label-container>.monaco-icon-name-container>.label-name>.label-separator {
	margin: 0 2px;
	opacity: 0.5;
}

.monaco-icon-label>.monaco-icon-label-container>.monaco-icon-description-container>.label-description {
	opacity: .7;
	margin-left: 0.5em;
	font-size: 0.9em;
	white-space: pre;
	/* enable to show labels that include multiple whitespaces */
}

.monaco-icon-label.nowrap>.monaco-icon-label-container>.monaco-icon-description-container>.label-description {
	white-space: nowrap
}

.vs .monaco-icon-label>.monaco-icon-label-container>.monaco-icon-description-container>.label-description {
	opacity: .95;
}

.monaco-icon-label.italic>.monaco-icon-label-container>.monaco-icon-name-container>.label-name,
.monaco-icon-label.italic>.monaco-icon-label-container>.monaco-icon-description-container>.label-description {
	font-style: italic;
}

.monaco-icon-label.deprecated {
	text-decoration: line-through;
	opacity: 0.66;
}

/* make sure apply italic font style to decorations as well */
.monaco-icon-label.italic::after {
	font-style: italic;
}

.monaco-icon-label.strikethrough>.monaco-icon-label-container>.monaco-icon-name-container>.label-name,
.monaco-icon-label.strikethrough>.monaco-icon-label-container>.monaco-icon-description-container>.label-description {
	text-decoration: line-through;
}

.monaco-icon-label::after {
	opacity: 0.75;
	font-size: 90%;
	font-weight: 600;
	margin: auto 16px 0 5px;
	/* https://github.com/microsoft/vscode/issues/113223 */
	text-align: center;
}

/* make sure selection color wins when a label is being selected */
.monaco-list:focus .selected .monaco-icon-label,
/* list */
.monaco-list:focus .selected .monaco-icon-label::after {
	color: inherit !important;
}

.monaco-list-row.focused.selected .label-description,
.monaco-list-row.selected .label-description {
	opacity: .8;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-keybinding {
	display: flex;
	align-items: center;
	line-height: 10px;
}

.monaco-keybinding>.monaco-keybinding-key {
	display: inline-block;
	border-style: solid;
	border-width: 1px;
	border-radius: 3px;
	vertical-align: middle;
	font-size: 11px;
	padding: 3px 5px;
	margin: 0 2px;
}

.monaco-keybinding>.monaco-keybinding-key:first-child {
	margin-left: 0;
}

.monaco-keybinding>.monaco-keybinding-key:last-child {
	margin-right: 0;
}

.monaco-keybinding>.monaco-keybinding-key-separator {
	display: inline-block;
}

.monaco-keybinding>.monaco-keybinding-key-chord-separator {
	width: 6px;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* -------------------- IE10 remove auto clear button -------------------- */

::-ms-clear {
	display: none;
}

/* All widgets */
/* I am not a big fan of this rule */
.monaco-editor .editor-widget input {
	color: inherit;
}

/* -------------------- Editor -------------------- */

.monaco-editor {
	position: relative;
	overflow: visible;
	-webkit-text-size-adjust: 100%;
	color: var(--vscode-editor-foreground);
	background-color: var(--vscode-editor-background);
}

.monaco-editor-background {
	background-color: var(--vscode-editor-background);
}

.monaco-editor .rangeHighlight {
	background-color: var(--vscode-editor-rangeHighlightBackground);
	box-sizing: border-box;
	border: 1px solid var(--vscode-editor-rangeHighlightBorder);
}

.monaco-editor.hc-black .rangeHighlight,
.monaco-editor.hc-light .rangeHighlight {
	border-style: dotted;
}

.monaco-editor .symbolHighlight {
	background-color: var(--vscode-editor-symbolHighlightBackground);
	box-sizing: border-box;
	border: 1px solid var(--vscode-editor-symbolHighlightBorder);
}

.monaco-editor.hc-black .symbolHighlight,
.monaco-editor.hc-light .symbolHighlight {
	border-style: dotted;
}

/* -------------------- Misc -------------------- */

.monaco-editor .overflow-guard {
	position: relative;
	overflow: hidden;
}

.monaco-editor .view-overlays {
	position: absolute;
	top: 0;
}

/*
.monaco-editor .auto-closed-character {
	opacity: 0.3;
}
*/


.monaco-editor .squiggly-error {
	border-bottom: 4px double var(--vscode-editorError-border);
}

.monaco-editor .squiggly-error::before {
	display: block;
	content: '';
	width: 100%;
	height: 100%;
	background: var(--vscode-editorError-background);
}

.monaco-editor .squiggly-warning {
	border-bottom: 4px double var(--vscode-editorWarning-border);
}

.monaco-editor .squiggly-warning::before {
	display: block;
	content: '';
	width: 100%;
	height: 100%;
	background: var(--vscode-editorWarning-background);
}

.monaco-editor .squiggly-info {
	border-bottom: 4px double var(--vscode-editorInfo-border);
}

.monaco-editor .squiggly-info::before {
	display: block;
	content: '';
	width: 100%;
	height: 100%;
	background: var(--vscode-editorInfo-background);
}

.monaco-editor .squiggly-hint {
	border-bottom: 2px dotted var(--vscode-editorHint-border);
}

.monaco-editor.showUnused .squiggly-unnecessary {
	border-bottom: 2px dashed var(--vscode-editorUnnecessaryCode-border);
}

.monaco-editor.showDeprecated .squiggly-inline-deprecated {
	text-decoration: line-through;
	text-decoration-color: var(--vscode-editor-foreground, inherit);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

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
	background-color: transparent;
	z-index: -10;
}

/*.monaco-editor .inputarea {
	position: fixed !important;
	width: 800px !important;
	height: 500px !important;
	top: initial !important;
	left: initial !important;
	bottom: 0 !important;
	right: 0 !important;
	color: black !important;
	background: white !important;
	line-height: 15px !important;
	font-size: 14px !important;
	z-index: 10 !important;
}*/
.monaco-editor .inputarea.ime-input {
	z-index: 10;
	caret-color: var(--vscode-editorCursor-foreground);
	color: var(--vscode-editor-foreground);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .margin-view-overlays .line-numbers {
	font-variant-numeric: tabular-nums;
	position: absolute;
	text-align: right;
	display: inline-block;
	vertical-align: middle;
	box-sizing: border-box;
	cursor: default;
	height: 100%;
}

.monaco-editor .relative-current-line-number {
	text-align: left;
	display: inline-block;
	width: 100%;
}

.monaco-editor .margin-view-overlays .line-numbers.lh-odd {
	margin-top: 1px;
}

.monaco-editor .line-numbers {
	color: var(--vscode-editorLineNumber-foreground);
}

.monaco-editor .line-numbers.active-line-number {
	color: var(--vscode-editorLineNumber-activeForeground);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .margin {
	background-color: var(--vscode-editorGutter-background);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-mouse-cursor-text {
	cursor: text;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .view-overlays .current-line {
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	box-sizing: border-box;
}

.monaco-editor .margin-view-overlays .current-line {
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	box-sizing: border-box;
}

.monaco-editor .margin-view-overlays .current-line.current-line-margin.current-line-margin-both {
	border-right: 0;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/*
	Keeping name short for faster parsing.
	cdr = core decorations rendering (div)
*/
.monaco-editor .lines-content .cdr {
	position: absolute;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .lines-content .core-guide {
	position: absolute;
	box-sizing: border-box;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Uncomment to see lines flashing when they're painted */
/*.monaco-editor .view-lines > .view-line {
	background-color: none;
	animation-name: flash-background;
	animation-duration: 800ms;
}
@keyframes flash-background {
	0%   { background-color: lightgreen; }
	100% { background-color: none }
}*/

.mtkcontrol {
	color: rgb(255, 255, 255) !important;
	background: rgb(150, 0, 0) !important;
}

.mtkoverflow {
	background-color: var(--vscode-button-background, --vscode-editor-background);
	color: var(--vscode-button-foreground, --vscode-editor-foreground);
	border-width: 1px;
	border-style: solid;
	border-color: var(--vscode-contrastBorder);
	border-radius: 2px;
	padding: 4px;
	cursor: pointer;
}

.mtkoverflow:hover {
	background-color: var(--vscode-button-hoverBackground);
}

.monaco-editor.no-user-select .lines-content,
.monaco-editor.no-user-select .view-line,
.monaco-editor.no-user-select .view-lines {
	user-select: none;
	-webkit-user-select: none;
}

/* Use user-select: text for lookup feature on macOS */
/* https://github.com/microsoft/vscode/issues/85632 */
.monaco-editor.mac .lines-content:hover,
.monaco-editor.mac .view-line:hover,
.monaco-editor.mac .view-lines:hover {
	user-select: text;
	-webkit-user-select: text;
	-ms-user-select: text;
}

.monaco-editor.enable-user-select {
	user-select: initial;
	-webkit-user-select: initial;
}

.monaco-editor .view-lines {
	white-space: nowrap;
}

.monaco-editor .view-line {
	position: absolute;
	width: 100%;
}

.monaco-editor .mtkw {
	color: var(--vscode-editorWhitespace-foreground) !important;
}

.monaco-editor .mtkz {
	display: inline-block;
	color: var(--vscode-editorWhitespace-foreground) !important;
}

/* TODO@tokenization bootstrap fix */
/*.monaco-editor .view-line > span > span {
	float: none;
	min-height: inherit;
	margin-left: inherit;
}*/
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .lines-decorations {
	position: absolute;
	top: 0;
	background: white;
}

/*
	Keeping name short for faster parsing.
	cldr = core lines decorations rendering (div)
*/
.monaco-editor .margin-view-overlays .cldr {
	position: absolute;
	height: 100%;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .glyph-margin {
	position: absolute;
	top: 0;
}

/*
	Keeping name short for faster parsing.
	cgmr = core glyph margin rendering (div)
*/
.monaco-editor .glyph-margin-widgets .cgmr {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
}

/*
	Ensure spinning icons are pixel-perfectly centered and avoid wobble.
	This is only applied to icons that spin to avoid unnecessary
	GPU layers and blurry subpixel AA.
*/
.monaco-editor .glyph-margin-widgets .cgmr.codicon-modifier-spin::before {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/*
	Keeping name short for faster parsing.
	cmdr = core margin decorations rendering (div)
*/
.monaco-editor .margin-view-overlays .cmdr {
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* START cover the case that slider is visible on mouseover */
.monaco-editor .minimap.slider-mouseover .minimap-slider {
	opacity: 0;
	transition: opacity 100ms linear;
}

.monaco-editor .minimap.slider-mouseover:hover .minimap-slider {
	opacity: 1;
}

.monaco-editor .minimap.slider-mouseover .minimap-slider.active {
	opacity: 1;
}

/* END cover the case that slider is visible on mouseover */
.monaco-editor .minimap-slider .minimap-slider-horizontal {
	background: var(--vscode-minimapSlider-background);
}

.monaco-editor .minimap-slider:hover .minimap-slider-horizontal {
	background: var(--vscode-minimapSlider-hoverBackground);
}

.monaco-editor .minimap-slider.active .minimap-slider-horizontal {
	background: var(--vscode-minimapSlider-activeBackground);
}

.monaco-editor .minimap-shadow-visible {
	box-shadow: var(--vscode-scrollbar-shadow) -6px 0 6px -6px inset;
}

.monaco-editor .minimap-shadow-hidden {
	position: absolute;
	width: 0;
}

.monaco-editor .minimap-shadow-visible {
	position: absolute;
	left: -6px;
	width: 6px;
}

.monaco-editor.no-minimap-shadow .minimap-shadow-visible {
	position: absolute;
	left: -1px;
	width: 1px;
}

/* 0.5s fade in/out for the minimap */
.minimap.autohide {
	opacity: 0;
	transition: opacity 0.5s;
}

.minimap.autohide:hover {
	opacity: 1;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .overlayWidgets {
	position: absolute;
	top: 0;
	left: 0;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .view-ruler {
	position: absolute;
	top: 0;
	box-shadow: 1px 0 0 0 var(--vscode-editorRuler-foreground) inset;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .scroll-decoration {
	position: absolute;
	top: 0;
	left: 0;
	height: 6px;
	box-shadow: var(--vscode-scrollbar-shadow) 0 6px 6px -6px inset;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/*
	Keeping name short for faster parsing.
	cslr = core selections layer rendering (div)
*/
.monaco-editor .lines-content .cslr {
	position: absolute;
}

.monaco-editor .focused .selected-text {
	background-color: var(--vscode-editor-selectionBackground);
}

.monaco-editor .selected-text {
	background-color: var(--vscode-editor-inactiveSelectionBackground);
}

.monaco-editor .top-left-radius {
	border-top-left-radius: 3px;
}

.monaco-editor .bottom-left-radius {
	border-bottom-left-radius: 3px;
}

.monaco-editor .top-right-radius {
	border-top-right-radius: 3px;
}

.monaco-editor .bottom-right-radius {
	border-bottom-right-radius: 3px;
}

.monaco-editor.hc-black .top-left-radius {
	border-top-left-radius: 0;
}

.monaco-editor.hc-black .bottom-left-radius {
	border-bottom-left-radius: 0;
}

.monaco-editor.hc-black .top-right-radius {
	border-top-right-radius: 0;
}

.monaco-editor.hc-black .bottom-right-radius {
	border-bottom-right-radius: 0;
}

.monaco-editor.hc-light .top-left-radius {
	border-top-left-radius: 0;
}

.monaco-editor.hc-light .bottom-left-radius {
	border-bottom-left-radius: 0;
}

.monaco-editor.hc-light .top-right-radius {
	border-top-right-radius: 0;
}

.monaco-editor.hc-light .bottom-right-radius {
	border-bottom-right-radius: 0;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .cursors-layer {
	position: absolute;
	top: 0;
}

.monaco-editor .cursors-layer>.cursor {
	position: absolute;
	overflow: hidden;
	box-sizing: border-box;
}

/* -- smooth-caret-animation -- */
.monaco-editor .cursors-layer.cursor-smooth-caret-animation>.cursor {
	transition: all 80ms;
}

/* -- block-outline-style -- */
.monaco-editor .cursors-layer.cursor-block-outline-style>.cursor {
	background: transparent !important;
	border-style: solid;
	border-width: 1px;
}

/* -- underline-style -- */
.monaco-editor .cursors-layer.cursor-underline-style>.cursor {
	border-bottom-width: 2px;
	border-bottom-style: solid;
	background: transparent !important;
}

/* -- underline-thin-style -- */
.monaco-editor .cursors-layer.cursor-underline-thin-style>.cursor {
	border-bottom-width: 1px;
	border-bottom-style: solid;
	background: transparent !important;
}

@keyframes monaco-cursor-smooth {

	0%,
	20% {
		opacity: 1;
	}

	60%,
	100% {
		opacity: 0;
	}
}

@keyframes monaco-cursor-phase {

	0%,
	20% {
		opacity: 1;
	}

	90%,
	100% {
		opacity: 0;
	}
}

@keyframes monaco-cursor-expand {

	0%,
	20% {
		transform: scaleY(1);
	}

	80%,
	100% {
		transform: scaleY(0);
	}
}

.cursor-smooth {
	animation: monaco-cursor-smooth 0.5s ease-in-out 0s 20 alternate;
}

.cursor-phase {
	animation: monaco-cursor-phase 0.5s ease-in-out 0s 20 alternate;
}

.cursor-expand>.cursor {
	animation: monaco-cursor-expand 0.5s ease-in-out 0s 20 alternate;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .blockDecorations-container {
	position: absolute;
	top: 0;
	pointer-events: none;
}

.monaco-editor .blockDecorations-block {
	position: absolute;
	box-sizing: border-box;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .mwh {
	position: absolute;
	color: var(--vscode-editorWhitespace-foreground) !important;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .snippet-placeholder {
	min-width: 2px;
	outline-style: solid;
	outline-width: 1px;
	background-color: var(--vscode-editor-snippetTabstopHighlightBackground, transparent);
	outline-color: var(--vscode-editor-snippetTabstopHighlightBorder, transparent);
}

.monaco-editor .finish-snippet-placeholder {
	outline-style: solid;
	outline-width: 1px;
	background-color: var(--vscode-editor-snippetFinalTabstopHighlightBackground, transparent);
	outline-color: var(--vscode-editor-snippetFinalTabstopHighlightBorder, transparent);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

@font-face {
	font-family: "codicon";
	font-display: block;
	src: url(http://localhost:20001/node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codicon/codicon.ttf) format("truetype");
}

.codicon[class*='codicon-'] {
	font: normal normal normal 16px/1 codicon;
	display: inline-block;
	text-decoration: none;
	text-rendering: auto;
	text-align: center;
	text-transform: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	user-select: none;
	-webkit-user-select: none;
}

/* icon rules are dynamically created by the platform theme service (see iconsStyleSheet.ts) */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.codicon-wrench-subaction {
	opacity: 0.5;
}

@keyframes codicon-spin {
	100% {
		transform: rotate(360deg);
	}
}

.codicon-sync.codicon-modifier-spin,
.codicon-loading.codicon-modifier-spin,
.codicon-gear.codicon-modifier-spin,
.codicon-notebook-state-executing.codicon-modifier-spin {
	/* Use steps to throttle FPS to reduce CPU usage */
	animation: codicon-spin 1.5s steps(30) infinite;
}

.codicon-modifier-disabled {
	opacity: 0.4;
}

/* custom speed & easing for loading icon */
.codicon-loading,
.codicon-tree-item-loading::before {
	animation-duration: 1s !important;
	animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Suggest widget*/

.monaco-editor .suggest-widget {
	width: 430px;
	z-index: 40;
	display: flex;
	flex-direction: column;
	border-radius: 3px;
}

.monaco-editor .suggest-widget.message {
	flex-direction: row;
	align-items: center;
}

.monaco-editor .suggest-widget,
.monaco-editor .suggest-details {
	flex: 0 1 auto;
	width: 100%;
	border-style: solid;
	border-width: 1px;
	border-color: var(--vscode-editorSuggestWidget-border);
	background-color: var(--vscode-editorSuggestWidget-background);
}

.monaco-editor.hc-black .suggest-widget,
.monaco-editor.hc-black .suggest-details,
.monaco-editor.hc-light .suggest-widget,
.monaco-editor.hc-light .suggest-details {
	border-width: 2px;
}

/* Styles for status bar part */


.monaco-editor .suggest-widget .suggest-status-bar {
	box-sizing: border-box;
	display: none;
	flex-flow: row nowrap;
	justify-content: space-between;
	width: 100%;
	font-size: 80%;
	padding: 0 4px 0 4px;
	border-top: 1px solid var(--vscode-editorSuggestWidget-border);
	overflow: hidden;
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar {
	display: flex;
}

.monaco-editor .suggest-widget .suggest-status-bar .left {
	padding-right: 8px;
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-label {
	color: var(--vscode-editorSuggestWidgetStatus-foreground);
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-item:not(:last-of-type) .action-label {
	margin-right: 0;
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-item:not(:last-of-type) .action-label::after {
	content: ', ';
	margin-right: 0.3em;
}

.monaco-editor .suggest-widget.with-status-bar .monaco-list .monaco-list-row>.contents>.main>.right>.readMore,
.monaco-editor .suggest-widget.with-status-bar .monaco-list .monaco-list-row.focused.string-label>.contents>.main>.right>.readMore {
	display: none;
}

.monaco-editor .suggest-widget.with-status-bar:not(.docs-side) .monaco-list .monaco-list-row:hover>.contents>.main>.right.can-expand-details>.details-label {
	width: 100%;
}

/* Styles for Message element for when widget is loading or is empty */

.monaco-editor .suggest-widget>.message {
	padding-left: 22px;
}

/** Styles for the list element **/

.monaco-editor .suggest-widget>.tree {
	height: 100%;
	width: 100%;
}

.monaco-editor .suggest-widget .monaco-list {
	user-select: none;
	-webkit-user-select: none;
}

/** Styles for each row in the list element **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row {
	display: flex;
	-mox-box-sizing: border-box;
	box-sizing: border-box;
	padding-right: 10px;
	background-repeat: no-repeat;
	background-position: 2px 2px;
	white-space: nowrap;
	cursor: pointer;
	touch-action: none;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused {
	color: var(--vscode-editorSuggestWidget-selectedForeground);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused .codicon {
	color: var(--vscode-editorSuggestWidget-selectedIconForeground);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents {
	flex: 1;
	height: 100%;
	overflow: hidden;
	padding-left: 2px;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main {
	display: flex;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: pre;
	justify-content: space-between;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left,
.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right {
	display: flex;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.focused)>.contents>.main .monaco-icon-label {
	color: var(--vscode-editorSuggestWidget-foreground);
}

.monaco-editor .suggest-widget:not(.frozen) .monaco-highlighted-label .highlight {
	font-weight: bold;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main .monaco-highlighted-label .highlight {
	color: var(--vscode-editorSuggestWidget-highlightForeground);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused>.contents>.main .monaco-highlighted-label .highlight {
	color: var(--vscode-editorSuggestWidget-focusHighlightForeground);
}

/** ReadMore Icon styles **/

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close,
.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore::before {
	color: inherit;
	opacity: 1;
	font-size: 14px;
	cursor: pointer;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close {
	position: absolute;
	top: 6px;
	right: 2px;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close:hover,
.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore:hover {
	opacity: 1;
}

/** signature, qualifier, type/details opacity **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {
	opacity: 0.7;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.signature-label {
	overflow: hidden;
	text-overflow: ellipsis;
	opacity: 0.6;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.qualifier-label {
	margin-left: 12px;
	opacity: 0.4;
	font-size: 85%;
	line-height: initial;
	text-overflow: ellipsis;
	overflow: hidden;
	align-self: center;
}

/** Type Info and icon next to the label in the focused completion item **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {
	font-size: 85%;
	margin-left: 1.1em;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label>.monaco-tokenized-source {
	display: inline;
}

/** Details: if using CompletionItem#details, show on focus **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {
	display: none;
}

.monaco-editor .suggest-widget:not(.shows-details) .monaco-list .monaco-list-row.focused>.contents>.main>.right>.details-label {
	display: inline;
}

/** Details: if using CompletionItemLabel#details, always show **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.string-label)>.contents>.main>.right>.details-label,
.monaco-editor .suggest-widget.docs-side .monaco-list .monaco-list-row.focused:not(.string-label)>.contents>.main>.right>.details-label {
	display: inline;
}

/** Ellipsis on hover **/

.monaco-editor .suggest-widget:not(.docs-side) .monaco-list .monaco-list-row.focused:hover>.contents>.main>.right.can-expand-details>.details-label {
	width: calc(100% - 26px);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left {
	flex-shrink: 1;
	flex-grow: 1;
	overflow: hidden;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.monaco-icon-label {
	flex-shrink: 0;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.string-label)>.contents>.main>.left>.monaco-icon-label {
	max-width: 100%;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.string-label>.contents>.main>.left>.monaco-icon-label {
	flex-shrink: 1;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right {
	overflow: hidden;
	flex-shrink: 4;
	max-width: 70%;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore {
	display: inline-block;
	position: absolute;
	right: 10px;
	width: 18px;
	height: 18px;
	visibility: hidden;
}

/** Do NOT display ReadMore when docs is side/below **/

.monaco-editor .suggest-widget.docs-side .monaco-list .monaco-list-row>.contents>.main>.right>.readMore {
	display: none !important;
}

/** Do NOT display ReadMore when using plain CompletionItemLabel (details/documentation might not be resolved) **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.string-label>.contents>.main>.right>.readMore {
	display: none;
}

/** Focused item can show ReadMore, but can't when docs is side/below **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused.string-label>.contents>.main>.right>.readMore {
	display: inline-block;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused:hover>.contents>.main>.right>.readMore {
	visibility: visible;
}

/** Styles for each row in the list **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label.deprecated {
	opacity: 0.66;
	text-decoration: unset;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label.deprecated>.monaco-icon-label-container>.monaco-icon-name-container {
	text-decoration: line-through;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label::before {
	height: 100%;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon {
	display: block;
	height: 16px;
	width: 16px;
	margin-left: 2px;
	background-repeat: no-repeat;
	background-size: 80%;
	background-position: center;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon.hide {
	display: none;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .suggest-icon {
	display: flex;
	align-items: center;
	margin-right: 4px;
}

.monaco-editor .suggest-widget.no-icons .monaco-list .monaco-list-row .icon,
.monaco-editor .suggest-widget.no-icons .monaco-list .monaco-list-row .suggest-icon::before {
	display: none;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon.customcolor .colorspan {
	margin: 0 0 0 0.3em;
	border: 0.1em solid #000;
	width: 0.7em;
	height: 0.7em;
	display: inline-block;
}

/** Styles for the docs of the completion item in focus **/

.monaco-editor .suggest-details-container {
	z-index: 41;
}

.monaco-editor .suggest-details {
	display: flex;
	flex-direction: column;
	cursor: default;
	color: var(--vscode-editorSuggestWidget-foreground);
}

.monaco-editor .suggest-details.focused {
	border-color: var(--vscode-focusBorder);
}

.monaco-editor .suggest-details a {
	color: var(--vscode-textLink-foreground);
}

.monaco-editor .suggest-details a:hover {
	color: var(--vscode-textLink-activeForeground);
}

.monaco-editor .suggest-details code {
	background-color: var(--vscode-textCodeBlock-background);
}

.monaco-editor .suggest-details.no-docs {
	display: none;
}

.monaco-editor .suggest-details>.monaco-scrollable-element {
	flex: 1;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body {
	box-sizing: border-box;
	height: 100%;
	width: 100%;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.type {
	flex: 2;
	overflow: hidden;
	text-overflow: ellipsis;
	opacity: 0.7;
	white-space: pre;
	margin: 0 24px 0 0;
	padding: 4px 0 12px 5px;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.type.auto-wrap {
	white-space: normal;
	word-break: break-all;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs {
	margin: 0;
	padding: 4px 5px;
	white-space: pre-wrap;
}

.monaco-editor .suggest-details.no-type>.monaco-scrollable-element>.body>.docs {
	margin-right: 24px;
	overflow: hidden;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs {
	padding: 0;
	white-space: initial;
	min-height: calc(1rem + 8px);
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div,
.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>span:not(:empty) {
	padding: 4px 5px;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div>p:first-child {
	margin-top: 0;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div>p:last-child {
	margin-bottom: 0;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs .monaco-tokenized-source {
	white-space: pre;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs .code {
	white-space: pre-wrap;
	word-wrap: break-word;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs .codicon {
	vertical-align: sub;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>p:empty {
	display: none;
}

.monaco-editor .suggest-details code {
	border-radius: 3px;
	padding: 0 0.4em;
}

.monaco-editor .suggest-details ul {
	padding-left: 20px;
}

.monaco-editor .suggest-details ol {
	padding-left: 20px;
}

.monaco-editor .suggest-details p code {
	font-family: var(--monaco-monospace-font);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/* ---------- DiffEditor ---------- */

.monaco-diff-editor .diffOverview {
	z-index: 9;
}

.monaco-diff-editor .diffOverview .diffViewport {
	z-index: 10;
}

/* colors not externalized: using transparancy on background */
.monaco-diff-editor.vs .diffOverview {
	background: rgba(0, 0, 0, 0.03);
}

.monaco-diff-editor.vs-dark .diffOverview {
	background: rgba(255, 255, 255, 0.01);
}

.monaco-scrollable-element.modified-in-monaco-diff-editor.vs .scrollbar {
	background: rgba(0, 0, 0, 0);
}

.monaco-scrollable-element.modified-in-monaco-diff-editor.vs-dark .scrollbar {
	background: rgba(0, 0, 0, 0);
}

.monaco-scrollable-element.modified-in-monaco-diff-editor.hc-black .scrollbar {
	background: none;
}

.monaco-scrollable-element.modified-in-monaco-diff-editor.hc-light .scrollbar {
	background: none;
}

.monaco-scrollable-element.modified-in-monaco-diff-editor .slider {
	z-index: 10;
}

.modified-in-monaco-diff-editor .slider.active {
	background: rgba(171, 171, 171, .4);
}

.modified-in-monaco-diff-editor.hc-black .slider.active {
	background: none;
}

.modified-in-monaco-diff-editor.hc-light .slider.active {
	background: none;
}

/* ---------- Diff ---------- */

.monaco-editor .insert-sign,
.monaco-diff-editor .insert-sign,
.monaco-editor .delete-sign,
.monaco-diff-editor .delete-sign {
	font-size: 11px !important;
	opacity: 0.7 !important;
	display: flex !important;
	align-items: center;
}

.monaco-editor.hc-black .insert-sign,
.monaco-diff-editor.hc-black .insert-sign,
.monaco-editor.hc-black .delete-sign,
.monaco-diff-editor.hc-black .delete-sign,
.monaco-editor.hc-light .insert-sign,
.monaco-diff-editor.hc-light .insert-sign,
.monaco-editor.hc-light .delete-sign,
.monaco-diff-editor.hc-light .delete-sign {
	opacity: 1;
}

.monaco-editor .inline-deleted-margin-view-zone {
	text-align: right;
}

.monaco-editor .inline-added-margin-view-zone {
	text-align: right;
}

.monaco-editor .arrow-revert-change {
	z-index: 10;
	position: absolute;
}

.monaco-editor .arrow-revert-change:hover {
	cursor: pointer;
}

/* ---------- Inline Diff ---------- */

.monaco-editor .view-zones .view-lines .view-line span {
	display: inline-block;
}

.monaco-editor .margin-view-zones .lightbulb-glyph:hover {
	cursor: pointer;
}

.monaco-editor .char-insert,
.monaco-diff-editor .char-insert {
	background-color: var(--vscode-diffEditor-insertedTextBackground);
}

.monaco-editor .line-insert,
.monaco-diff-editor .line-insert {
	background-color: var(--vscode-diffEditor-insertedLineBackground, --vscode-diffEditor-insertedTextBackground);
}

.monaco-editor .line-insert,
.monaco-editor .char-insert {
	box-sizing: border-box;
	border: 1px solid var(--vscode-diffEditor-insertedTextBorder);
}

.monaco-editor.hc-black .line-insert,
.monaco-editor.hc-light .line-insert,
.monaco-editor.hc-black .char-insert,
.monaco-editor.hc-light .char-insert {
	border-style: dashed;
}

.monaco-editor .line-delete,
.monaco-editor .char-delete {
	box-sizing: border-box;
	border: 1px solid var(--vscode-diffEditor-removedTextBorder);
}

.monaco-editor.hc-black .line-delete,
.monaco-editor.hc-light .line-delete,
.monaco-editor.hc-black .char-delete,
.monaco-editor.hc-light .char-delete {
	border-style: dashed;
}

.monaco-editor .inline-added-margin-view-zone,
.monaco-editor .gutter-insert,
.monaco-diff-editor .gutter-insert {
	background-color: var(--vscode-diffEditorGutter-insertedLineBackground, --vscode-diffEditor-insertedLineBackground, --vscode-diffEditor-insertedTextBackground);
}

.monaco-editor .char-delete,
.monaco-diff-editor .char-delete {
	background-color: var(--vscode-diffEditor-removedTextBackground);
}

.monaco-editor .line-delete,
.monaco-diff-editor .line-delete {
	background-color: var(--vscode-diffEditor-removedLineBackground, --vscode-diffEditor-removedTextBackground);
}

.monaco-editor .inline-deleted-margin-view-zone,
.monaco-editor .gutter-delete,
.monaco-diff-editor .gutter-delete {
	background-color: var(--vscode-diffEditorGutter-removedLineBackground, --vscode-diffEditor-removedLineBackground, --vscode-diffEditor-removedTextBackground);
}

.monaco-diff-editor.side-by-side .editor.modified {
	box-shadow: -6px 0 5px -5px var(--vscode-scrollbar-shadow);
	border-left: 1px solid var(--vscode-diffEditor-border);
}

.monaco-diff-editor .diffViewport {
	background: var(--vscode-scrollbarSlider-background);
}

.monaco-diff-editor .diffViewport:hover {
	background: var(--vscode-scrollbarSlider-hoverBackground);
}

.monaco-diff-editor .diffViewport:active {
	background: var(--vscode-scrollbarSlider-activeBackground);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-diff-editor .diff-review-line-number {
	text-align: right;
	display: inline-block;
	color: var(--vscode-editorLineNumber-foreground);
}

.monaco-diff-editor .diff-review {
	position: absolute;
	user-select: none;
	-webkit-user-select: none;
	z-index: 99;
}

.monaco-diff-editor .diff-review-summary {
	padding-left: 10px;
}

.monaco-diff-editor .diff-review-shadow {
	position: absolute;
	box-shadow: var(--vscode-scrollbar-shadow) 0 -6px 6px -6px inset;
}

.monaco-diff-editor .diff-review-row {
	white-space: pre;
}

.monaco-diff-editor .diff-review-table {
	display: table;
	min-width: 100%;
}

.monaco-diff-editor .diff-review-row {
	display: table-row;
	width: 100%;
}

.monaco-diff-editor .diff-review-spacer {
	display: inline-block;
	width: 10px;
	vertical-align: middle;
}

.monaco-diff-editor .diff-review-spacer>.codicon {
	font-size: 9px !important;
}

.monaco-diff-editor .diff-review-actions {
	display: inline-block;
	position: absolute;
	right: 10px;
	top: 2px;
	z-index: 100;
}

.monaco-diff-editor .diff-review-actions .action-label {
	width: 16px;
	height: 16px;
	margin: 2px 0;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .diff-hidden-lines-widget {
	width: 100%;
}

.monaco-editor .diff-hidden-lines {
	height: 0px;
	/* The children each have a fixed height, the transform confuses the browser */
	transform: translate(0px, -10px);
	font-size: 13px;
	line-height: 14px;
}

.monaco-editor .diff-hidden-lines:not(.dragging) .top:hover,
.diff-hidden-lines:not(.dragging) .bottom:hover,
.diff-hidden-lines .top.dragging,
.diff-hidden-lines .bottom.dragging {
	background-color: var(--vscode-focusBorder);
}

.monaco-editor .diff-hidden-lines .top,
.diff-hidden-lines .bottom {
	transition: background-color 0.1s ease-out;
	height: 4px;
	background-color: transparent;
	background-clip: padding-box;
	border-bottom: 2px solid transparent;
	border-top: 4px solid transparent;
	cursor: ns-resize;
}

.monaco-editor .diff-hidden-lines .top {
	transform: translate(0px, 4px);
}

.monaco-editor .diff-hidden-lines .bottom {
	transform: translate(0px, -6px);
}

.monaco-editor .diff-unchanged-lines {
	background: var(--vscode-diffEditor-unchangedCodeBackground);
}

.monaco-editor .noModificationsOverlay {
	z-index: 1;
	background: var(--vscode-editor-background);

	display: flex;
	justify-content: center;
	align-items: center;
}


.monaco-editor .diff-hidden-lines .center {
	background: var(--vscode-diffEditor-unchangedRegionBackground);
	color: var(--vscode-diffEditor-unchangedRegionForeground);
	overflow: hidden;
	display: block;
	text-overflow: ellipsis;
	white-space: nowrap;

	height: 24px;
}

.monaco-editor .diff-hidden-lines .center span.codicon {
	vertical-align: middle;
}

.monaco-editor .diff-hidden-lines .center a:hover .codicon {
	cursor: pointer;
	color: var(--vscode-editorLink-activeForeground) !important;
}

.monaco-editor .movedOriginal {
	border: 2px solid var(--vscode-diffEditor-move-border);
}

.monaco-editor .movedModified {
	border: 2px solid var(--vscode-diffEditor-move-border);
}

.monaco-diff-editor .moved-blocks-lines {
	position: absolute;
	pointer-events: none;
}

.monaco-diff-editor .moved-blocks-lines path {
	fill: none;
	stroke: var(--vscode-diffEditor-move-border);
	stroke-width: 2;
}

.monaco-editor .char-delete.diff-range-empty {
	margin-left: -1px;
	border-left: solid var(--vscode-diffEditor-removedTextBackground) 3px;
}

.monaco-editor .char-insert.diff-range-empty {
	border-left: solid var(--vscode-diffEditor-insertedTextBackground) 3px;
}

.monaco-editor .fold-unchanged {
	cursor: pointer;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .codicon.codicon-symbol-array,
.monaco-workbench .codicon.codicon-symbol-array {
	color: var(--vscode-symbolIcon-arrayForeground);
}

.monaco-editor .codicon.codicon-symbol-boolean,
.monaco-workbench .codicon.codicon-symbol-boolean {
	color: var(--vscode-symbolIcon-booleanForeground);
}

.monaco-editor .codicon.codicon-symbol-class,
.monaco-workbench .codicon.codicon-symbol-class {
	color: var(--vscode-symbolIcon-classForeground);
}

.monaco-editor .codicon.codicon-symbol-method,
.monaco-workbench .codicon.codicon-symbol-method {
	color: var(--vscode-symbolIcon-methodForeground);
}

.monaco-editor .codicon.codicon-symbol-color,
.monaco-workbench .codicon.codicon-symbol-color {
	color: var(--vscode-symbolIcon-colorForeground);
}

.monaco-editor .codicon.codicon-symbol-constant,
.monaco-workbench .codicon.codicon-symbol-constant {
	color: var(--vscode-symbolIcon-constantForeground);
}

.monaco-editor .codicon.codicon-symbol-constructor,
.monaco-workbench .codicon.codicon-symbol-constructor {
	color: var(--vscode-symbolIcon-constructorForeground);
}

.monaco-editor .codicon.codicon-symbol-value,
.monaco-workbench .codicon.codicon-symbol-value,
.monaco-editor .codicon.codicon-symbol-enum,
.monaco-workbench .codicon.codicon-symbol-enum {
	color: var(--vscode-symbolIcon-enumeratorForeground);
}

.monaco-editor .codicon.codicon-symbol-enum-member,
.monaco-workbench .codicon.codicon-symbol-enum-member {
	color: var(--vscode-symbolIcon-enumeratorMemberForeground);
}

.monaco-editor .codicon.codicon-symbol-event,
.monaco-workbench .codicon.codicon-symbol-event {
	color: var(--vscode-symbolIcon-eventForeground);
}

.monaco-editor .codicon.codicon-symbol-field,
.monaco-workbench .codicon.codicon-symbol-field {
	color: var(--vscode-symbolIcon-fieldForeground);
}

.monaco-editor .codicon.codicon-symbol-file,
.monaco-workbench .codicon.codicon-symbol-file {
	color: var(--vscode-symbolIcon-fileForeground);
}

.monaco-editor .codicon.codicon-symbol-folder,
.monaco-workbench .codicon.codicon-symbol-folder {
	color: var(--vscode-symbolIcon-folderForeground);
}

.monaco-editor .codicon.codicon-symbol-function,
.monaco-workbench .codicon.codicon-symbol-function {
	color: var(--vscode-symbolIcon-functionForeground);
}

.monaco-editor .codicon.codicon-symbol-interface,
.monaco-workbench .codicon.codicon-symbol-interface {
	color: var(--vscode-symbolIcon-interfaceForeground);
}

.monaco-editor .codicon.codicon-symbol-key,
.monaco-workbench .codicon.codicon-symbol-key {
	color: var(--vscode-symbolIcon-keyForeground);
}

.monaco-editor .codicon.codicon-symbol-keyword,
.monaco-workbench .codicon.codicon-symbol-keyword {
	color: var(--vscode-symbolIcon-keywordForeground);
}

.monaco-editor .codicon.codicon-symbol-module,
.monaco-workbench .codicon.codicon-symbol-module {
	color: var(--vscode-symbolIcon-moduleForeground);
}

.monaco-editor .codicon.codicon-symbol-namespace,
.monaco-workbench .codicon.codicon-symbol-namespace {
	color: var(--vscode-symbolIcon-namespaceForeground);
}

.monaco-editor .codicon.codicon-symbol-null,
.monaco-workbench .codicon.codicon-symbol-null {
	color: var(--vscode-symbolIcon-nullForeground);
}

.monaco-editor .codicon.codicon-symbol-number,
.monaco-workbench .codicon.codicon-symbol-number {
	color: var(--vscode-symbolIcon-numberForeground);
}

.monaco-editor .codicon.codicon-symbol-object,
.monaco-workbench .codicon.codicon-symbol-object {
	color: var(--vscode-symbolIcon-objectForeground);
}

.monaco-editor .codicon.codicon-symbol-operator,
.monaco-workbench .codicon.codicon-symbol-operator {
	color: var(--vscode-symbolIcon-operatorForeground);
}

.monaco-editor .codicon.codicon-symbol-package,
.monaco-workbench .codicon.codicon-symbol-package {
	color: var(--vscode-symbolIcon-packageForeground);
}

.monaco-editor .codicon.codicon-symbol-property,
.monaco-workbench .codicon.codicon-symbol-property {
	color: var(--vscode-symbolIcon-propertyForeground);
}

.monaco-editor .codicon.codicon-symbol-reference,
.monaco-workbench .codicon.codicon-symbol-reference {
	color: var(--vscode-symbolIcon-referenceForeground);
}

.monaco-editor .codicon.codicon-symbol-snippet,
.monaco-workbench .codicon.codicon-symbol-snippet {
	color: var(--vscode-symbolIcon-snippetForeground);
}

.monaco-editor .codicon.codicon-symbol-string,
.monaco-workbench .codicon.codicon-symbol-string {
	color: var(--vscode-symbolIcon-stringForeground);
}

.monaco-editor .codicon.codicon-symbol-struct,
.monaco-workbench .codicon.codicon-symbol-struct {
	color: var(--vscode-symbolIcon-structForeground);
}

.monaco-editor .codicon.codicon-symbol-text,
.monaco-workbench .codicon.codicon-symbol-text {
	color: var(--vscode-symbolIcon-textForeground);
}

.monaco-editor .codicon.codicon-symbol-type-parameter,
.monaco-workbench .codicon.codicon-symbol-type-parameter {
	color: var(--vscode-symbolIcon-typeParameterForeground);
}

.monaco-editor .codicon.codicon-symbol-unit,
.monaco-workbench .codicon.codicon-symbol-unit {
	color: var(--vscode-symbolIcon-unitForeground);
}

.monaco-editor .codicon.codicon-symbol-variable,
.monaco-workbench .codicon.codicon-symbol-variable {
	color: var(--vscode-symbolIcon-variableForeground);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .rendered-markdown kbd {
	background-color: var(--vscode-keybindingLabel-background);
	color: var(--vscode-keybindingLabel-foreground);
	border-style: solid;
	border-width: 1px;
	border-radius: 3px;
	border-color: var(--vscode-keybindingLabel-border);
	border-bottom-color: var(--vscode-keybindingLabel-bottomBorder);
	box-shadow: inset 0 -1px 0 var(--vscode-widget-shadow);
	vertical-align: middle;
	padding: 1px 3px;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .lightBulbWidget {
	display: flex;
	align-items: center;
	justify-content: center;
}

.monaco-editor .lightBulbWidget:hover {
	cursor: pointer;
}

.monaco-editor .lightBulbWidget.codicon-light-bulb {
	color: var(--vscode-editorLightBulb-foreground);
}

.monaco-editor .lightBulbWidget.codicon-lightbulb-autofix {
	color: var(--vscode-editorLightBulbAutoFix-foreground, var(--vscode-editorLightBulb-foreground));
}

.monaco-editor .lightBulbWidget:before {
	position: relative;
	z-index: 2;
}

.monaco-editor .lightBulbWidget:after {
	position: absolute;
	top: 0;
	left: 0;
	content: '';
	display: block;
	width: 100%;
	height: 100%;
	opacity: 0.3;
	background-color: var(--vscode-editor-background);
	z-index: 1;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .monaco-editor-overlaymessage {
	padding-bottom: 8px;
	z-index: 10000;
}

.monaco-editor .monaco-editor-overlaymessage.below {
	padding-bottom: 0;
	padding-top: 8px;
	z-index: 10000;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

.monaco-editor .monaco-editor-overlaymessage.fadeIn {
	animation: fadeIn 150ms ease-out;
}

@keyframes fadeOut {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

.monaco-editor .monaco-editor-overlaymessage.fadeOut {
	animation: fadeOut 100ms ease-out;
}

.monaco-editor .monaco-editor-overlaymessage .message {
	padding: 2px 4px;
	color: var(--vscode-editorHoverWidget-foreground);
	background-color: var(--vscode-editorHoverWidget-background);
	border: 1px solid var(--vscode-inputValidation-infoBorder);
	border-radius: 3px;
}

.monaco-editor .monaco-editor-overlaymessage .message p {
	margin-block: 0px;
}

.monaco-editor .monaco-editor-overlaymessage .message a {
	color: var(--vscode-textLink-foreground);
}

.monaco-editor .monaco-editor-overlaymessage .message a:hover {
	color: var(--vscode-textLink-activeForeground);
}

.monaco-editor.hc-black .monaco-editor-overlaymessage .message,
.monaco-editor.hc-light .monaco-editor-overlaymessage .message {
	border-width: 2px;
}

.monaco-editor .monaco-editor-overlaymessage .anchor {
	width: 0 !important;
	height: 0 !important;
	border-color: transparent;
	border-style: solid;
	z-index: 1000;
	border-width: 8px;
	position: absolute;
	left: 2px;
}

.monaco-editor .monaco-editor-overlaymessage .anchor.top {
	border-bottom-color: var(--vscode-inputValidation-infoBorder);
}

.monaco-editor .monaco-editor-overlaymessage .anchor.below {
	border-top-color: var(--vscode-inputValidation-infoBorder);
}

.monaco-editor .monaco-editor-overlaymessage:not(.below) .anchor.top,
.monaco-editor .monaco-editor-overlaymessage.below .anchor.below {
	display: none;
}

.monaco-editor .monaco-editor-overlaymessage.below .anchor.top {
	display: inherit;
	top: -8px;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.action-widget {
	font-size: 13px;
	border-radius: 0;
	min-width: 160px;
	max-width: 80vw;
	z-index: 40;
	display: block;
	width: 100%;
	border: 1px solid var(--vscode-editorWidget-border) !important;
	background-color: var(--vscode-editorWidget-background);
	color: var(--vscode-editorWidget-foreground);
}

.context-view-block {
	position: fixed;
	cursor: initial;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
}

.context-view-pointerBlock {
	position: fixed;
	cursor: initial;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
}

.action-widget .monaco-list {
	user-select: none;
	-webkit-user-select: none;
	border: none !important;
	border-width: 0 !important;
}

.action-widget .monaco-list:focus:before {
	outline: 0 !important;
}

.action-widget .monaco-list .monaco-scrollable-element {
	overflow: visible;
}

/** Styles for each row in the list element **/
.action-widget .monaco-list .monaco-list-row {
	padding: 0 10px;
	white-space: nowrap;
	cursor: pointer;
	touch-action: none;
	width: 100%;
}

.action-widget .monaco-list .monaco-list-row.action.focused:not(.option-disabled) {
	background-color: var(--vscode-quickInputList-focusBackground) !important;
	color: var(--vscode-quickInputList-focusForeground);
	outline: 1px solid var(--vscode-menu-selectionBorder, transparent);
	outline-offset: -1px;
}

.action-widget .monaco-list-row.group-header {
	color: var(--vscode-pickerGroup-foreground) !important;
	font-weight: 600;
}

.action-widget .monaco-list .group-header,
.action-widget .monaco-list .option-disabled,
.action-widget .monaco-list .option-disabled:before,
.action-widget .monaco-list .option-disabled .focused,
.action-widget .monaco-list .option-disabled .focused:before {
	cursor: default !important;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	user-select: none;
	background-color: transparent !important;
	outline: 0 solid !important;
}

.action-widget .monaco-list-row.action {
	display: flex;
	gap: 6px;
	align-items: center;
}

.action-widget .monaco-list-row.action.option-disabled {
	color: var(--vscode-disabledForeground);
}

.action-widget .monaco-list-row.action.option-disabled .codicon {
	opacity: 0.4;
}

.action-widget .monaco-list-row.action:not(.option-disabled) .codicon {
	color: inherit;
}

.action-widget .monaco-list-row.action .title {
	flex: 1;
	overflow: hidden;
	text-overflow: ellipsis;
}

/* Action bar */

.action-widget .action-widget-action-bar {
	background-color: var(--vscode-editorHoverWidget-statusBarBackground);
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
}

.action-widget .action-widget-action-bar::before {
	display: block;
	content: "";
	width: 100%;
}

.action-widget .action-widget-action-bar .actions-container {
	padding: 0 8px;
}

.action-widget-action-bar .action-label {
	color: var(--vscode-textLink-activeForeground);
	font-size: 12px;
	line-height: 22px;
	padding: 0;
	pointer-events: all;
}

.action-widget-action-bar .action-item {
	margin-right: 16px;
	pointer-events: none;
}

.action-widget-action-bar .action-label:hover {
	background-color: transparent !important;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Find widget */
.monaco-editor .find-widget {
	position: absolute;
	z-index: 35;
	height: 33px;
	overflow: hidden;
	line-height: 19px;
	transition: transform 200ms linear;
	padding: 0 4px;
	box-sizing: border-box;
	transform: translateY(calc(-100% - 10px));
	/* shadow (10px) */
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
}

.monaco-workbench.reduce-motion .monaco-editor .find-widget {
	transition: transform 0ms linear;
}

.monaco-editor .find-widget textarea {
	margin: 0px;
}

.monaco-editor .find-widget.hiddenEditor {
	display: none;
}

/* Find widget when replace is toggled on */
.monaco-editor .find-widget.replaceToggled>.replace-part {
	display: flex;
}

.monaco-editor .find-widget.visible {
	transform: translateY(0);
}

.monaco-editor .find-widget .monaco-inputbox.synthetic-focus {
	outline: 1px solid -webkit-focus-ring-color;
	outline-offset: -1px;
}

.monaco-editor .find-widget .monaco-inputbox .input {
	background-color: transparent;
	min-height: 0;
}

.monaco-editor .find-widget .monaco-findInput .input {
	font-size: 13px;
}

.monaco-editor .find-widget>.find-part,
.monaco-editor .find-widget>.replace-part {
	margin: 3px 25px 0 17px;
	font-size: 12px;
	display: flex;
}

.monaco-editor .find-widget>.find-part .monaco-inputbox,
.monaco-editor .find-widget>.replace-part .monaco-inputbox {
	min-height: 25px;
}


.monaco-editor .find-widget>.replace-part .monaco-inputbox>.ibwrapper>.mirror {
	padding-right: 22px;
}

.monaco-editor .find-widget>.find-part .monaco-inputbox>.ibwrapper>.input,
.monaco-editor .find-widget>.find-part .monaco-inputbox>.ibwrapper>.mirror,
.monaco-editor .find-widget>.replace-part .monaco-inputbox>.ibwrapper>.input,
.monaco-editor .find-widget>.replace-part .monaco-inputbox>.ibwrapper>.mirror {
	padding-top: 2px;
	padding-bottom: 2px;
}

.monaco-editor .find-widget>.find-part .find-actions {
	height: 25px;
	display: flex;
	align-items: center;
}

.monaco-editor .find-widget>.replace-part .replace-actions {
	height: 25px;
	display: flex;
	align-items: center;
}

.monaco-editor .find-widget .monaco-findInput {
	vertical-align: middle;
	display: flex;
	flex: 1;
}

.monaco-editor .find-widget .monaco-findInput .monaco-scrollable-element {
	/* Make sure textarea inherits the width correctly */
	width: 100%;
}

.monaco-editor .find-widget .monaco-findInput .monaco-scrollable-element .scrollbar.vertical {
	/* Hide vertical scrollbar */
	opacity: 0;
}

.monaco-editor .find-widget .matchesCount {
	display: flex;
	flex: initial;
	margin: 0 0 0 3px;
	padding: 2px 0 0 2px;
	height: 25px;
	vertical-align: middle;
	box-sizing: border-box;
	text-align: center;
	line-height: 23px;
}

.monaco-editor .find-widget .button {
	width: 16px;
	height: 16px;
	padding: 3px;
	border-radius: 5px;
	display: flex;
	flex: initial;
	margin-left: 3px;
	background-position: center center;
	background-repeat: no-repeat;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* find in selection button */
.monaco-editor .find-widget .codicon-find-selection {
	width: 22px;
	height: 22px;
	padding: 3px;
	border-radius: 5px;
}

.monaco-editor .find-widget .button.left {
	margin-left: 0;
	margin-right: 3px;
}

.monaco-editor .find-widget .button.wide {
	width: auto;
	padding: 1px 6px;
	top: -1px;
}

.monaco-editor .find-widget .button.toggle {
	position: absolute;
	top: 0;
	left: 3px;
	width: 18px;
	height: 100%;
	border-radius: 0;
	box-sizing: border-box;
}

.monaco-editor .find-widget .button.toggle.disabled {
	display: none;
}

.monaco-editor .find-widget .disabled {
	color: var(--vscode-disabledForeground);
	cursor: default;
}

.monaco-editor .find-widget>.replace-part {
	display: none;
}

.monaco-editor .find-widget>.replace-part>.monaco-findInput {
	position: relative;
	display: flex;
	vertical-align: middle;
	flex: auto;
	flex-grow: 0;
	flex-shrink: 0;
}

.monaco-editor .find-widget>.replace-part>.monaco-findInput>.controls {
	position: absolute;
	top: 3px;
	right: 2px;
}

/* REDUCED */
.monaco-editor .find-widget.reduced-find-widget .matchesCount {
	display: none;
}

/* NARROW (SMALLER THAN REDUCED) */
.monaco-editor .find-widget.narrow-find-widget {
	max-width: 257px !important;
}

/* COLLAPSED (SMALLER THAN NARROW) */
.monaco-editor .find-widget.collapsed-find-widget {
	max-width: 170px !important;
}

.monaco-editor .find-widget.collapsed-find-widget .button.previous,
.monaco-editor .find-widget.collapsed-find-widget .button.next,
.monaco-editor .find-widget.collapsed-find-widget .button.replace,
.monaco-editor .find-widget.collapsed-find-widget .button.replace-all,
.monaco-editor .find-widget.collapsed-find-widget>.find-part .monaco-findInput .controls {
	display: none;
}

.monaco-editor .findMatch {
	animation-duration: 0;
	animation-name: inherit !important;
}

.monaco-editor .find-widget .monaco-sash {
	left: 0 !important;
}

.monaco-editor.hc-black .find-widget .button:before {
	position: relative;
	top: 1px;
	left: 2px;
}

/* Close button position. */
.monaco-editor .find-widget>.button.codicon-widget-close {
	position: absolute;
	top: 5px;
	right: 4px;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .findOptionsWidget {
	background-color: var(--vscode-editorWidget-background);
	color: var(--vscode-editorWidget-foreground);
	box-shadow: 0 0 8px 2px var(--vscode-widget-shadow);
	border: 2px solid var(--vscode-contrastBorder);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .focused .selectionHighlight {
	background-color: var(--vscode-editor-selectionHighlightBackground);
	box-sizing: border-box;
	border: 1px solid var(--vscode-editor-selectionHighlightBorder);
}

.monaco-editor.hc-black .focused .selectionHighlight,
.monaco-editor.hc-light .focused .selectionHighlight {
	border-style: dotted;
}

.monaco-editor .wordHighlight {
	background-color: var(--vscode-editor-wordHighlightBackground);
	box-sizing: border-box;
	border: 1px solid var(--vscode-editor-wordHighlightBorder);
}

.monaco-editor.hc-black .wordHighlight,
.monaco-editor.hc-light .wordHighlight {
	border-style: dotted;
}

.monaco-editor .wordHighlightStrong {
	background-color: var(--vscode-editor-wordHighlightStrongBackground);
	box-sizing: border-box;
	border: 1px solid var(--vscode-editor-wordHighlightStrongBorder);
}

.monaco-editor.hc-black .wordHighlightStrong,
.monaco-editor.hc-light .wordHighlightStrong {
	border-style: dotted;
}

.monaco-editor .wordHighlightText {
	background-color: var(--vscode-editor-wordHighlightTextBackground);
	box-sizing: border-box;
	border: 1px solid var(--vscode-editor-wordHighlightTextBorder);
}

.monaco-editor.hc-black .wordHighlightText,
.monaco-editor.hc-light .wordHighlightText {
	border-style: dotted;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .margin-view-overlays .codicon-folding-manual-collapsed,
.monaco-editor .margin-view-overlays .codicon-folding-manual-expanded,
.monaco-editor .margin-view-overlays .codicon-folding-expanded,
.monaco-editor .margin-view-overlays .codicon-folding-collapsed {
	cursor: pointer;
	opacity: 0;
	transition: opacity 0.5s;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 140%;
	margin-left: 2px;
}

.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-manual-collapsed,
.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-manual-expanded,
.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-expanded,
.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-collapsed {
	transition: initial;
}

.monaco-editor .margin-view-overlays:hover .codicon,
.monaco-editor .margin-view-overlays .codicon.codicon-folding-collapsed,
.monaco-editor .margin-view-overlays .codicon.codicon-folding-manual-collapsed,
.monaco-editor .margin-view-overlays .codicon.alwaysShowFoldIcons {
	opacity: 1;
}

.monaco-editor .inline-folded:after {
	color: grey;
	margin: 0.1em 0.2em 0 0.2em;
	content: "\22EF";
	/* ellipses unicode character */
	display: inline;
	line-height: 1em;
	cursor: pointer;
}

.monaco-editor .folded-background {
	background-color: var(--vscode-editor-foldBackground);
}

.monaco-editor .cldr.codicon.codicon-folding-expanded,
.monaco-editor .cldr.codicon.codicon-folding-collapsed,
.monaco-editor .cldr.codicon.codicon-folding-manual-expanded,
.monaco-editor .cldr.codicon.codicon-folding-manual-collapsed {
	color: var(--vscode-editorGutter-foldingControlForeground) !important;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .peekview-widget .head {
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
}

.monaco-editor .peekview-widget .head .peekview-title {
	display: flex;
	align-items: baseline;
	font-size: 13px;
	margin-left: 20px;
	min-width: 0;
	text-overflow: ellipsis;
	overflow: hidden;
}

.monaco-editor .peekview-widget .head .peekview-title.clickable {
	cursor: pointer;
}

.monaco-editor .peekview-widget .head .peekview-title .dirname:not(:empty) {
	font-size: 0.9em;
	margin-left: 0.5em;
}

.monaco-editor .peekview-widget .head .peekview-title .meta {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.monaco-editor .peekview-widget .head .peekview-title .dirname {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .peekview-widget .head .peekview-title .filename {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .peekview-widget .head .peekview-title .meta:not(:empty)::before {
	content: '-';
	padding: 0 0.3em;
}

.monaco-editor .peekview-widget .head .peekview-actions {
	flex: 1;
	text-align: right;
	padding-right: 2px;
}

.monaco-editor .peekview-widget .head .peekview-actions>.monaco-action-bar {
	display: inline-block;
}

.monaco-editor .peekview-widget .head .peekview-actions>.monaco-action-bar,
.monaco-editor .peekview-widget .head .peekview-actions>.monaco-action-bar>.actions-container {
	height: 100%;
}

.monaco-editor .peekview-widget>.body {
	border-top: 1px solid;
	position: relative;
}

.monaco-editor .peekview-widget .head .peekview-title .codicon {
	margin-right: 4px;
	align-self: center;
}

.monaco-editor .peekview-widget .monaco-list .monaco-list-row.focused .codicon {
	color: inherit !important;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .zone-widget {
	position: absolute;
	z-index: 10;
}


.monaco-editor .zone-widget .zone-widget-container {
	border-top-style: solid;
	border-bottom-style: solid;
	border-top-width: 0;
	border-bottom-width: 0;
	position: relative;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* -- zone widget */
.monaco-editor .zone-widget .zone-widget-container.reference-zone-widget {
	border-top-width: 1px;
	border-bottom-width: 1px;
}

.monaco-editor .reference-zone-widget .inline {
	display: inline-block;
	vertical-align: top;
}

.monaco-editor .reference-zone-widget .messages {
	height: 100%;
	width: 100%;
	text-align: center;
	padding: 3em 0;
}

.monaco-editor .reference-zone-widget .ref-tree {
	line-height: 23px;
	background-color: var(--vscode-peekViewResult-background);
	color: var(--vscode-peekViewResult-lineForeground);
}

.monaco-editor .reference-zone-widget .ref-tree .reference {
	text-overflow: ellipsis;
	overflow: hidden;
}

.monaco-editor .reference-zone-widget .ref-tree .reference-file {
	display: inline-flex;
	width: 100%;
	height: 100%;
	color: var(--vscode-peekViewResult-fileForeground);
}

.monaco-editor .reference-zone-widget .ref-tree .monaco-list:focus .selected .reference-file {
	color: inherit !important;
}

.monaco-editor .reference-zone-widget .ref-tree .monaco-list:focus .monaco-list-rows>.monaco-list-row.selected:not(.highlighted) {
	background-color: var(--vscode-peekViewResult-selectionBackground);
	color: var(--vscode-peekViewResult-selectionForeground) !important;
}

.monaco-editor .reference-zone-widget .ref-tree .reference-file .count {
	margin-right: 12px;
	margin-left: auto;
}

.monaco-editor .reference-zone-widget .ref-tree .referenceMatch .highlight {
	background-color: var(--vscode-peekViewResult-matchHighlightBackground);
}

.monaco-editor .reference-zone-widget .preview .reference-decoration {
	background-color: var(--vscode-peekViewEditor-matchHighlightBackground);
	border: 2px solid var(--vscode-peekViewEditor-matchHighlightBorder);
	box-sizing: border-box;
}

.monaco-editor .reference-zone-widget .preview .monaco-editor .monaco-editor-background,
.monaco-editor .reference-zone-widget .preview .monaco-editor .inputarea.ime-input {
	background-color: var(--vscode-peekViewEditor-background);
}

.monaco-editor .reference-zone-widget .preview .monaco-editor .margin {
	background-color: var(--vscode-peekViewEditorGutter-background);
}

/* High Contrast Theming */

.monaco-editor.hc-black .reference-zone-widget .ref-tree .reference-file,
.monaco-editor.hc-light .reference-zone-widget .ref-tree .reference-file {
	font-weight: bold;
}

.monaco-editor.hc-black .reference-zone-widget .ref-tree .referenceMatch .highlight,
.monaco-editor.hc-light .reference-zone-widget .ref-tree .referenceMatch .highlight {
	border: 1px dotted var(--vscode-contrastActiveBorder, transparent);
	box-sizing: border-box;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .zone-widget .codicon.codicon-error,
.markers-panel .marker-icon.error,
.markers-panel .marker-icon .codicon.codicon-error,
.text-search-provider-messages .providerMessage .codicon.codicon-error,
.extensions-viewlet>.extensions .codicon.codicon-error,
.extension-editor .codicon.codicon-error,
.preferences-editor .codicon.codicon-error {
	color: var(--vscode-problemsErrorIcon-foreground);
}

.monaco-editor .zone-widget .codicon.codicon-warning,
.markers-panel .marker-icon.warning,
.markers-panel .marker-icon .codicon.codicon-warning,
.text-search-provider-messages .providerMessage .codicon.codicon-warning,
.extensions-viewlet>.extensions .codicon.codicon-warning,
.extension-editor .codicon.codicon-warning,
.preferences-editor .codicon.codicon-warning {
	color: var(--vscode-problemsWarningIcon-foreground);
}

.monaco-editor .zone-widget .codicon.codicon-info,
.markers-panel .marker-icon.info,
.markers-panel .marker-icon .codicon.codicon-info,
.text-search-provider-messages .providerMessage .codicon.codicon-info,
.extensions-viewlet>.extensions .codicon.codicon-info,
.extension-editor .codicon.codicon-info,
.preferences-editor .codicon.codicon-info {
	color: var(--vscode-problemsInfoIcon-foreground);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-hover {
	cursor: default;
	position: absolute;
	overflow: hidden;
	user-select: text;
	-webkit-user-select: text;
	box-sizing: border-box;
	animation: fadein 100ms linear;
	line-height: 1.5em;
}

.monaco-hover.hidden {
	display: none;
}

.monaco-hover a:hover:not(.disabled) {
	cursor: pointer;
}

.monaco-hover .hover-contents:not(.html-hover-contents) {
	padding: 4px 8px;
}

.monaco-hover .markdown-hover>.hover-contents:not(.code-hover-contents) {
	max-width: var(--hover-maxWidth, 500px);
	word-wrap: break-word;
}

.monaco-hover .markdown-hover>.hover-contents:not(.code-hover-contents) hr {
	min-width: 100%;
}

.monaco-hover p,
.monaco-hover .code,
.monaco-hover ul,
.monaco-hover h1,
.monaco-hover h2,
.monaco-hover h3,
.monaco-hover h4,
.monaco-hover h5,
.monaco-hover h6 {
	margin: 8px 0;
}

.monaco-hover h1,
.monaco-hover h2,
.monaco-hover h3,
.monaco-hover h4,
.monaco-hover h5,
.monaco-hover h6 {
	line-height: 1.1;
}

.monaco-hover code {
	font-family: var(--monaco-monospace-font);
}

.monaco-hover hr {
	box-sizing: border-box;
	border-left: 0px;
	border-right: 0px;
	margin-top: 4px;
	margin-bottom: -4px;
	margin-left: -8px;
	margin-right: -8px;
	height: 1px;
}

.monaco-hover p:first-child,
.monaco-hover .code:first-child,
.monaco-hover ul:first-child {
	margin-top: 0;
}

.monaco-hover p:last-child,
.monaco-hover .code:last-child,
.monaco-hover ul:last-child {
	margin-bottom: 0;
}

/* MarkupContent Layout */
.monaco-hover ul {
	padding-left: 20px;
}

.monaco-hover ol {
	padding-left: 20px;
}

.monaco-hover li>p {
	margin-bottom: 0;
}

.monaco-hover li>ul {
	margin-top: 0;
}

.monaco-hover code {
	border-radius: 3px;
	padding: 0 0.4em;
}

.monaco-hover .monaco-tokenized-source {
	white-space: pre-wrap;
}

.monaco-hover .hover-row.status-bar {
	font-size: 12px;
	line-height: 22px;
}

.monaco-hover .hover-row.status-bar .info {
	font-style: italic;
	padding: 0px 8px;
}

.monaco-hover .hover-row.status-bar .actions {
	display: flex;
	padding: 0px 8px;
}

.monaco-hover .hover-row.status-bar .actions .action-container {
	margin-right: 16px;
	cursor: pointer;
}

.monaco-hover .hover-row.status-bar .actions .action-container .action .icon {
	padding-right: 4px;
}

.monaco-hover .markdown-hover .hover-contents .codicon {
	color: inherit;
	font-size: inherit;
	vertical-align: middle;
}

.monaco-hover .hover-contents a.code-link:hover,
.monaco-hover .hover-contents a.code-link {
	color: inherit;
}

.monaco-hover .hover-contents a.code-link:before {
	content: '(';
}

.monaco-hover .hover-contents a.code-link:after {
	content: ')';
}

.monaco-hover .hover-contents a.code-link>span {
	text-decoration: underline;
	/** Hack to force underline to show **/
	border-bottom: 1px solid transparent;
	text-underline-position: under;
	color: var(--vscode-textLink-foreground);
}

.monaco-hover .hover-contents a.code-link>span:hover {
	color: var(--vscode-textLink-activeForeground);
}

/** Spans in markdown hovers need a margin-bottom to avoid looking cramped: https://github.com/microsoft/vscode/issues/101496 **/
.monaco-hover .markdown-hover .hover-contents:not(.code-hover-contents):not(.html-hover-contents) span {
	margin-bottom: 4px;
	display: inline-block;
}

.monaco-hover-content .action-container a {
	-webkit-user-select: none;
	user-select: none;
}

.monaco-hover-content .action-container.disabled {
	pointer-events: none;
	opacity: 0.4;
	cursor: default;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-toolbar {
	height: 100%;
}

.monaco-toolbar .toolbar-toggle-more {
	display: inline-block;
	padding: 0;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .goto-definition-link {
	text-decoration: underline;
	cursor: pointer;
	color: var(--vscode-editorLink-activeForeground) !important;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* marker zone */

.monaco-editor .peekview-widget .head .peekview-title .severity-icon {
	display: inline-block;
	vertical-align: text-top;
	margin-right: 4px;
}

.monaco-editor .marker-widget {
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .marker-widget>.stale {
	opacity: 0.6;
	font-style: italic;
}

.monaco-editor .marker-widget .title {
	display: inline-block;
	padding-right: 5px;
}

.monaco-editor .marker-widget .descriptioncontainer {
	position: absolute;
	white-space: pre;
	user-select: text;
	-webkit-user-select: text;
	padding: 8px 12px 0 20px;
}

.monaco-editor .marker-widget .descriptioncontainer .message {
	display: flex;
	flex-direction: column;
}

.monaco-editor .marker-widget .descriptioncontainer .message .details {
	padding-left: 6px;
}

.monaco-editor .marker-widget .descriptioncontainer .message .source,
.monaco-editor .marker-widget .descriptioncontainer .message span.code {
	opacity: 0.6;
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link {
	opacity: 0.6;
	color: inherit;
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link:before {
	content: '(';
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link:after {
	content: ')';
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link>span {
	text-decoration: underline;
	/** Hack to force underline to show **/
	border-bottom: 1px solid transparent;
	text-underline-position: under;
	color: var(--vscode-textLink-foreground);
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link>span {
	color: var(--vscode-textLink-activeForeground);
}

.monaco-editor .marker-widget .descriptioncontainer .filename {
	cursor: pointer;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .inlineSuggestionsHints.withBorder {
	z-index: 39;
	color: var(--vscode-editorHoverWidget-foreground);
	background-color: var(--vscode-editorHoverWidget-background);
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.monaco-editor .inlineSuggestionsHints a {
	color: var(--vscode-foreground);
}

.monaco-editor .inlineSuggestionsHints a:hover {
	color: var(--vscode-foreground);
}

.monaco-editor .inlineSuggestionsHints .keybinding {
	display: flex;
	margin-left: 4px;
	opacity: 0.6;
}

.monaco-editor .inlineSuggestionsHints .keybinding .monaco-keybinding-key {
	font-size: 8px;
	padding: 2px 3px;
}

.monaco-editor .inlineSuggestionsHints .custom-actions .action-item:nth-child(2) a {
	display: flex;
	min-width: 19px;
	justify-content: center;
}

.monaco-editor .inlineSuggestionStatusBarItemLabel {
	margin-right: 2px;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .hoverHighlight {
	background-color: var(--vscode-editor-hoverHighlightBackground);
}

.monaco-editor .monaco-hover {
	color: var(--vscode-editorHoverWidget-foreground);
	background-color: var(--vscode-editorHoverWidget-background);
	border: 1px solid var(--vscode-editorHoverWidget-border);
	border-radius: 3px;
}

.monaco-editor .monaco-hover a {
	color: var(--vscode-textLink-foreground);
}

.monaco-editor .monaco-hover a:hover {
	color: var(--vscode-textLink-activeForeground);
}

.monaco-editor .monaco-hover .hover-row .actions {
	background-color: var(--vscode-editorHoverWidget-statusBarBackground);
}

.monaco-editor .monaco-hover code {
	background-color: var(--vscode-textCodeBlock-background);
}


/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-link {
	color: var(--vscode-textLink-foreground);
}

.monaco-link:hover {
	color: var(--vscode-textLink-activeForeground);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


.monaco-editor.vs .valueSetReplacement {
	outline: solid 2px var(--vscode-editorBracketMatch-border);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .selection-anchor {
	background-color: #007ACC;
	width: 2px !important;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .bracket-match {
	box-sizing: border-box;
	background-color: var(--vscode-editorBracketMatch-background);
	border: 1px solid var(--vscode-editorBracketMatch-border);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .codelens-decoration {
	overflow: hidden;
	display: inline-block;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: var(--vscode-editorCodeLens-foreground);
	line-height: var(--vscode-editorCodeLens-lineHeight);
	font-size: var(--vscode-editorCodeLens-fontSize);
	padding-right: calc(var(--vscode-editorCodeLens-fontSize)*0.5);
	font-feature-settings: var(--vscode-editorCodeLens-fontFeatureSettings);
	font-family: var(--vscode-editorCodeLens-fontFamily), var(--vscode-editorCodeLens-fontFamilyDefault);
}

.monaco-editor .codelens-decoration>span,
.monaco-editor .codelens-decoration>a {
	user-select: none;
	-webkit-user-select: none;
	white-space: nowrap;
	vertical-align: sub;
}

.monaco-editor .codelens-decoration>a {
	text-decoration: none;
}

.monaco-editor .codelens-decoration>a:hover {
	cursor: pointer;
	color: var(--vscode-editorLink-activeForeground) !important;
}

.monaco-editor .codelens-decoration>a:hover .codicon {
	color: var(--vscode-editorLink-activeForeground) !important;
}

.monaco-editor .codelens-decoration .codicon {
	vertical-align: middle;
	color: currentColor !important;
	color: var(--vscode-editorCodeLens-foreground);
	line-height: var(--vscode-editorCodeLens-lineHeight);
	font-size: var(--vscode-editorCodeLens-fontSize);
}

.monaco-editor .codelens-decoration>a:hover .codicon::before {
	cursor: pointer;
}

@keyframes fadein {
	0% {
		opacity: 0;
		visibility: visible;
	}

	100% {
		opacity: 1;
	}
}

.monaco-editor .codelens-decoration.fadein {
	animation: fadein 0.1s linear;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.colorpicker-widget {
	height: 190px;
	user-select: none;
	-webkit-user-select: none;
}

/* Decoration */

.colorpicker-color-decoration,
.hc-light .colorpicker-color-decoration {
	border: solid 0.1em #000;
	box-sizing: border-box;
	margin: 0.1em 0.2em 0 0.2em;
	width: 0.8em;
	height: 0.8em;
	line-height: 0.8em;
	display: inline-block;
	cursor: pointer;
}

.hc-black .colorpicker-color-decoration,
.vs-dark .colorpicker-color-decoration {
	border: solid 0.1em #eee;
}

/* Header */

.colorpicker-header {
	display: flex;
	height: 24px;
	position: relative;
	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAHUlEQVQYV2PYvXu3JAi7uLiAMaYAjAGTQBPYLQkAa/0Zef3qRswAAAAASUVORK5CYII=");
	background-size: 9px 9px;
	image-rendering: pixelated;
}

.colorpicker-header .picked-color {
	width: 240px;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 24px;
	cursor: pointer;
	color: white;
	flex: 1;
	white-space: nowrap;
	overflow: hidden;
}

.colorpicker-header .picked-color .picked-color-presentation {
	white-space: nowrap;
	margin-left: 5px;
	margin-right: 5px;
}

.colorpicker-header .picked-color .codicon {
	color: inherit;
	font-size: 14px;
}

.colorpicker-header .picked-color.light {
	color: black;
}

.colorpicker-header .original-color {
	width: 74px;
	z-index: inherit;
	cursor: pointer;
}

.standalone-colorpicker {
	color: var(--vscode-editorHoverWidget-foreground);
	background-color: var(--vscode-editorHoverWidget-background);
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.colorpicker-header.standalone-colorpicker {
	border-bottom: none;
}

.colorpicker-header .close-button {
	cursor: pointer;
	background-color: var(--vscode-editorHoverWidget-background);
	border-left: 1px solid var(--vscode-editorHoverWidget-border);
}

.colorpicker-header .close-button-inner-div {
	width: 100%;
	height: 100%;
	text-align: center;
}

.colorpicker-header .close-button-inner-div:hover {
	background-color: var(--vscode-toolbar-hoverBackground);
}

.colorpicker-header .close-icon {
	padding: 3px;
}

/* Body */

.colorpicker-body {
	display: flex;
	padding: 8px;
	position: relative;
}

.colorpicker-body .saturation-wrap {
	overflow: hidden;
	height: 150px;
	position: relative;
	min-width: 220px;
	flex: 1;
}

.colorpicker-body .saturation-box {
	height: 150px;
	position: absolute;
}

.colorpicker-body .saturation-selection {
	width: 9px;
	height: 9px;
	margin: -5px 0 0 -5px;
	border: 1px solid rgb(255, 255, 255);
	border-radius: 100%;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
	position: absolute;
}

.colorpicker-body .strip {
	width: 25px;
	height: 150px;
}

.colorpicker-body .standalone-strip {
	width: 25px;
	height: 122px;
}

.colorpicker-body .hue-strip {
	position: relative;
	margin-left: 8px;
	cursor: grab;
	background: linear-gradient(to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);
}

.colorpicker-body .opacity-strip {
	position: relative;
	margin-left: 8px;
	cursor: grab;
	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAHUlEQVQYV2PYvXu3JAi7uLiAMaYAjAGTQBPYLQkAa/0Zef3qRswAAAAASUVORK5CYII=");
	background-size: 9px 9px;
	image-rendering: pixelated;
}

.colorpicker-body .strip.grabbing {
	cursor: grabbing;
}

.colorpicker-body .slider {
	position: absolute;
	top: 0;
	left: -2px;
	width: calc(100% + 4px);
	height: 4px;
	box-sizing: border-box;
	border: 1px solid rgba(255, 255, 255, 0.71);
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.85);
}

.colorpicker-body .strip .overlay {
	height: 150px;
	pointer-events: none;
}

.colorpicker-body .standalone-strip .standalone-overlay {
	height: 122px;
	pointer-events: none;
}

.standalone-colorpicker-body {
	display: block;
	border: 1px solid transparent;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
	overflow: hidden;
}

.colorpicker-body .insert-button {
	position: absolute;
	height: 20px;
	width: 58px;
	padding: 0px;
	right: 8px;
	bottom: 8px;
	background: var(--vscode-button-background);
	color: var(--vscode-button-foreground);
	border-radius: 2px;
	border: none;
	cursor: pointer;
}

.colorpicker-body .insert-button:hover {
	background: var(--vscode-button-hoverBackground);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor.vs .dnd-target,
.monaco-editor.hc-light .dnd-target {
	border-right: 2px dotted black;
	color: white;
	/* opposite of black */
}

.monaco-editor.vs-dark .dnd-target {
	border-right: 2px dotted #AEAFAD;
	color: #51504f;
	/* opposite of #AEAFAD */
}

.monaco-editor.hc-black .dnd-target {
	border-right: 2px dotted #fff;
	color: #000;
	/* opposite of #fff */
}

.monaco-editor.mouse-default .view-lines,
.monaco-editor.vs-dark.mac.mouse-default .view-lines,
.monaco-editor.hc-black.mac.mouse-default .view-lines,
.monaco-editor.hc-light.mac.mouse-default .view-lines {
	cursor: default;
}

.monaco-editor.mouse-copy .view-lines,
.monaco-editor.vs-dark.mac.mouse-copy .view-lines,
.monaco-editor.hc-black.mac.mouse-copy .view-lines,
.monaco-editor.hc-light.mac.mouse-copy .view-lines {
	cursor: copy;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.inline-editor-progress-decoration {
	display: inline-block;
	width: 1em;
	height: 1em;
}

.inline-progress-widget {
	display: flex !important;
	justify-content: center;
	align-items: center;
}

.inline-progress-widget .icon {
	font-size: 80% !important;
}

.inline-progress-widget:hover .icon {
	font-size: 90% !important;
	animation: none;
}

.inline-progress-widget:hover .icon::before {
	content: "\ea76";
	/* codicon-x */
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.post-edit-widget {
	box-shadow: 0 0 8px 2px var(--vscode-widget-shadow);
	border: 1px solid var(--vscode-widget-border, transparent);
	border-radius: 4px;
	background-color: var(--vscode-editorWidget-background);
	overflow: hidden;
}

.post-edit-widget .monaco-button {
	padding: 2px;
	border: none;
	border-radius: 0;
}

.post-edit-widget .monaco-button:hover {
	background-color: var(--vscode-button-secondaryHoverBackground) !important;
}

.post-edit-widget .monaco-button .codicon {
	margin: 0;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .suggest-preview-additional-widget {
	white-space: nowrap;
}

.monaco-editor .suggest-preview-additional-widget .content-spacer {
	color: transparent;
	white-space: pre;
}

.monaco-editor .suggest-preview-additional-widget .button {
	display: inline-block;
	cursor: pointer;
	text-decoration: underline;
	text-underline-position: under;
}

.monaco-editor .ghost-text-hidden {
	opacity: 0;
	font-size: 0;
}

.monaco-editor .ghost-text-decoration,
.monaco-editor .suggest-preview-text .ghost-text {
	font-style: italic;
}

.monaco-editor .inline-completion-text-to-replace {
	text-decoration: underline;
	text-underline-position: under;
}

.monaco-editor .ghost-text-decoration,
.monaco-editor .ghost-text-decoration-preview,
.monaco-editor .suggest-preview-text .ghost-text {
	color: var(--vscode-editorGhostText-foreground) !important;
	background-color: var(--vscode-editorGhostText-background);
	border: 1px solid var(--vscode-editorGhostText-border);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .linked-editing-decoration {
	background-color: var(--vscode-editor-linkedEditingBackground);

	/* Ensure decoration is visible even if range is empty */
	min-width: 1px;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .detected-link,
.monaco-editor .detected-link-active {
	text-decoration: underline;
	text-underline-position: under;
}

.monaco-editor .detected-link-active {
	cursor: pointer;
	color: var(--vscode-editorLink-activeForeground) !important;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .parameter-hints-widget {
	/* Must be higher than the sash's z-index and terminal canvases but lower than the suggest widget */
	z-index: 39;
	display: flex;
	flex-direction: column;
	line-height: 1.5em;
	cursor: default;
	color: var(--vscode-editorHoverWidget-foreground);
	background-color: var(--vscode-editorHoverWidget-background);
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.hc-black .monaco-editor .parameter-hints-widget,
.hc-light .monaco-editor .parameter-hints-widget {
	border-width: 2px;
}

.monaco-editor .parameter-hints-widget>.phwrapper {
	max-width: 440px;
	display: flex;
	flex-direction: row;
}

.monaco-editor .parameter-hints-widget.multiple {
	min-height: 3.3em;
	padding: 0;
}

.monaco-editor .parameter-hints-widget.multiple .body::before {
	content: "";
	display: block;
	height: 100%;
	position: absolute;
	opacity: 0.5;
	border-left: 1px solid var(--vscode-editorHoverWidget-border);
}

.monaco-editor .parameter-hints-widget p,
.monaco-editor .parameter-hints-widget ul {
	margin: 8px 0;
}

.monaco-editor .parameter-hints-widget .monaco-scrollable-element,
.monaco-editor .parameter-hints-widget .body {
	display: flex;
	flex: 1;
	flex-direction: column;
	min-height: 100%;
}

.monaco-editor .parameter-hints-widget .signature {
	padding: 4px 5px;
	position: relative;
}

.monaco-editor .parameter-hints-widget .signature.has-docs::after {
	content: "";
	display: block;
	position: absolute;
	left: 0;
	width: 100%;
	padding-top: 4px;
	opacity: 0.5;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.monaco-editor .parameter-hints-widget .docs {
	padding: 0 10px 0 5px;
	white-space: pre-wrap;
}

.monaco-editor .parameter-hints-widget .docs.empty {
	display: none;
}

.monaco-editor .parameter-hints-widget .docs a {
	color: var(--vscode-textLink-foreground);
}

.monaco-editor .parameter-hints-widget .docs a:hover {
	color: var(--vscode-textLink-activeForeground);
	cursor: pointer;
}

.monaco-editor .parameter-hints-widget .docs .markdown-docs {
	white-space: initial;
}

.monaco-editor .parameter-hints-widget .docs code {
	font-family: var(--monaco-monospace-font);
	border-radius: 3px;
	padding: 0 0.4em;
	background-color: var(--vscode-textCodeBlock-background);
}

.monaco-editor .parameter-hints-widget .docs .monaco-tokenized-source,
.monaco-editor .parameter-hints-widget .docs .code {
	white-space: pre-wrap;
}

.monaco-editor .parameter-hints-widget .controls {
	display: none;
	flex-direction: column;
	align-items: center;
	min-width: 22px;
	justify-content: flex-end;
}

.monaco-editor .parameter-hints-widget.multiple .controls {
	display: flex;
	padding: 0 2px;
}

.monaco-editor .parameter-hints-widget.multiple .button {
	width: 16px;
	height: 16px;
	background-repeat: no-repeat;
	cursor: pointer;
}

.monaco-editor .parameter-hints-widget .button.previous {
	bottom: 24px;
}

.monaco-editor .parameter-hints-widget .overloads {
	text-align: center;
	height: 12px;
	line-height: 12px;
	font-family: var(--monaco-monospace-font);
}

.monaco-editor .parameter-hints-widget .signature .parameter.active {
	color: var(--vscode-editorHoverWidget-highlightForeground);
	font-weight: bold;
}

.monaco-editor .parameter-hints-widget .documentation-parameter>.parameter {
	font-weight: bold;
	margin-right: 0.5em;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .rename-box {
	z-index: 100;
	color: inherit;
	border-radius: 4px;
}

.monaco-editor .rename-box.preview {
	padding: 4px 4px 0 4px;
}

.monaco-editor .rename-box .rename-input {
	padding: 3px;
	border-radius: 2px;
}

.monaco-editor .rename-box .rename-label {
	display: none;
	opacity: .8;
}

.monaco-editor .rename-box.preview .rename-label {
	display: inherit;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .sticky-line {
	color: var(--vscode-editorLineNumber-foreground);
	overflow: hidden;
	white-space: nowrap;
	display: inline-block;
}

.monaco-editor .sticky-line-number {
	text-align: right;
	float: left;
}

.monaco-editor .sticky-line-root {
	background-color: inherit;
	overflow: hidden;
	white-space: nowrap;
	width: 100%;
}

.monaco-editor.hc-black .sticky-widget,
.monaco-editor.hc-light .sticky-widget {
	border-bottom: 1px solid var(--vscode-contrastBorder);
}

.monaco-editor .sticky-line-root:hover {
	background-color: var(--vscode-editorStickyScrollHover-background);
	cursor: pointer;
}

.monaco-editor .sticky-widget {
	width: 100%;
	box-shadow: var(--vscode-scrollbar-shadow) 0 3px 2px -2px;
	z-index: 4;
	background-color: var(--vscode-editorStickyScroll-background);
}

.monaco-editor .sticky-widget.peek {
	background-color: var(--vscode-peekViewEditorStickyScroll-background);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .unicode-highlight {
	border: 1px solid var(--vscode-editorUnicodeHighlight-border);
	background-color: var(--vscode-editorUnicodeHighlight-background);
	box-sizing: border-box;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.editor-banner {
	box-sizing: border-box;
	cursor: default;
	width: 100%;
	font-size: 12px;
	display: flex;
	overflow: visible;

	height: 26px;

	background: var(--vscode-banner-background);
}


.editor-banner .icon-container {
	display: flex;
	flex-shrink: 0;
	align-items: center;
	padding: 0 6px 0 10px;
}

.editor-banner .icon-container.custom-icon {
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 16px;
	width: 16px;
	padding: 0;
	margin: 0 6px 0 10px;
}

.editor-banner .message-container {
	display: flex;
	align-items: center;
	line-height: 26px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.editor-banner .message-container p {
	margin-block-start: 0;
	margin-block-end: 0;
}

.editor-banner .message-actions-container {
	flex-grow: 1;
	flex-shrink: 0;
	line-height: 26px;
	margin: 0 4px;
}

.editor-banner .message-actions-container a.monaco-button {
	width: inherit;
	margin: 2px 8px;
	padding: 0px 12px;
}

.editor-banner .message-actions-container a {
	padding: 3px;
	margin-left: 12px;
	text-decoration: underline;
}

.editor-banner .action-container {
	padding: 0 10px 0 6px;
}

.editor-banner {
	background-color: var(--vscode-banner-background);
}

.editor-banner,
.editor-banner .action-container .codicon,
.editor-banner .message-actions-container .monaco-link {
	color: var(--vscode-banner-foreground);
}

.editor-banner .icon-container .codicon {
	color: var(--vscode-banner-iconForeground);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .iPadShowKeyboard {
	width: 58px;
	min-width: 0;
	height: 36px;
	min-height: 0;
	margin: 0;
	padding: 0;
	position: absolute;
	resize: none;
	overflow: hidden;
	background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjNDI0MjQyIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==") center center no-repeat;
	border: 4px solid #F6F6F6;
	border-radius: 4px;
}

.monaco-editor.vs-dark .iPadShowKeyboard {
	background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjQzVDNUM1Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==") center center no-repeat;
	border: 4px solid #252526;
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/* Default standalone editor fonts */
.monaco-editor {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", "HelveticaNeue-Light", system-ui, "Ubuntu", "Droid Sans", sans-serif;
	--monaco-monospace-font: "SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace;
}

.monaco-menu .monaco-action-bar.vertical .action-item .action-menu-item:focus .action-label {
	stroke-width: 1.2px;
}

.monaco-editor.vs-dark .monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .action-label,
.monaco-editor.hc-black .monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .action-label,
.monaco-editor.hc-light .monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .action-label {
	stroke-width: 1.2px;
}

.monaco-hover p {
	margin: 0;
}

/* See https://github.com/microsoft/monaco-editor/issues/2168#issuecomment-780078600 */
.monaco-aria-container {
	position: absolute !important;
	top: 0;
	/* avoid being placed underneath a sibling element */
	height: 1px;
	width: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
}

/*.monaco-editor.vs [tabindex="0"]:focus {
	outline: 1px solid rgba(0, 122, 204, 0.4);
	outline-offset: -1px;
	opacity: 1 !important;
}

.monaco-editor.vs-dark [tabindex="0"]:focus {
	outline: 1px solid rgba(14, 99, 156, 0.6);
	outline-offset: -1px;
	opacity: 1 !important;
}*/
.monaco-pane-view .split-view-view:first-of-type>.pane>.pane-header {
	border-top: none !important
}

.monaco-pane-view .split-view-view:first-of-type>.pane {
	border-left: none !important
}

.monaco-pane-view .pane>.pane-header {
	position: relative
}

.monaco-pane-view .pane.expanded>.pane-header>.actions.show-expanded,
.monaco-pane-view .pane>.pane-header>.actions.show-always {
	display: initial
}

.monaco-pane-view .pane>.pane-header>.icon {
	display: none;
	height: 16px;
	width: 16px
}

.monaco-pane-view .pane.pane.horizontal:not(.expanded)>.pane-header>.icon {
	display: inline;
	margin-top: 4px
}

.monaco-pane-view .pane>.pane-header h3.title {
	-webkit-margin-before: 0;
	-webkit-margin-after: 0;
	font-size: 11px;
	min-width: 3ch;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap
}

.monaco-pane-view .pane>.pane-header .description {
	display: block;
	flex-shrink: 100000;
	font-weight: 400;
	margin-left: 10px;
	opacity: .6;
	overflow: hidden;
	text-overflow: ellipsis;
	text-transform: none;
	white-space: nowrap
}

.monaco-pane-view .pane>.pane-header .description .codicon {
	font-size: 9px;
	margin-left: 2px
}

.monaco-pane-view .pane.horizontal:not(.expanded)>.pane-header .description,
.monaco-pane-view .pane.horizontal:not(.expanded)>.pane-header h3.title,
.monaco-pane-view .pane>.pane-header:not(.expanded) .description {
	display: none
}

.monaco-pane-view .pane .monaco-progress-container {
	height: 2px;
	left: 0;
	position: absolute;
	top: -2px;
	z-index: 5
}

.monaco-pane-view .pane:not(.merged-header) .monaco-progress-container {
	top: 20px
}

.monaco-pane-view {
	height: 100%;
	width: 100%
}

.monaco-pane-view .pane {
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: hidden;
	width: 100%
}

.monaco-pane-view .pane.horizontal:not(.expanded) {
	flex-direction: row
}

.monaco-pane-view .pane>.pane-header {
	align-items: center;
	box-sizing: border-box;
	cursor: pointer;
	display: flex;
	font-size: 11px;
	font-weight: 700;
	height: 22px;
	overflow: hidden
}

.monaco-pane-view .pane>.pane-header>.title {
	text-transform: uppercase
}

.monaco-pane-view .pane.horizontal:not(.expanded)>.pane-header {
	flex-direction: column;
	height: 100%;
	width: 22px
}

.monaco-pane-view .pane>.pane-header>.codicon:first-of-type {
	margin: 0 2px
}

.monaco-pane-view .pane.horizontal:not(.expanded)>.pane-header>.codicon:first-of-type {
	margin: 2px
}

.monaco-pane-view .pane>.pane-header>.actions {
	display: none;
	margin-left: auto
}

.monaco-pane-view .pane>.pane-header>.actions .action-item {
	margin-right: 4px
}

.monaco-pane-view .pane>.pane-header>.actions .action-label {
	padding: 2px
}

.monaco-pane-view .pane:focus-within>.pane-header.expanded>.actions,
.monaco-pane-view .pane:hover>.pane-header.expanded>.actions,
.monaco-pane-view .pane>.pane-header.actions-always-visible.expanded>.actions,
.monaco-pane-view .pane>.pane-header.focused.expanded>.actions {
	display: initial
}

.monaco-pane-view .pane>.pane-header .monaco-action-bar .action-item.select-container {
	cursor: default
}

.monaco-pane-view .pane>.pane-header .action-item .monaco-select-box {
	cursor: pointer;
	min-height: 18px;
	min-width: 110px;
	padding: 2px 23px 2px 8px
}

.linux .monaco-pane-view .pane>.pane-header .action-item .monaco-select-box,
.windows .monaco-pane-view .pane>.pane-header .action-item .monaco-select-box {
	padding: 0 23px 0 8px
}

.monaco-pane-view:lang(ja) .pane>.pane-header,
.monaco-pane-view:lang(ko) .pane>.pane-header,
.monaco-pane-view:lang(zh-Hans) .pane>.pane-header,
.monaco-pane-view:lang(zh-Hant) .pane>.pane-header {
	font-weight: 400
}

.monaco-pane-view .pane>.pane-header.hidden {
	display: none
}

.monaco-pane-view .pane>.pane-body {
	flex: 1;
	overflow: hidden
}

.monaco-pane-view.animated .split-view-view {
	transition-duration: .15s;
	transition-timing-function: ease-out
}

.reduce-motion .monaco-pane-view .split-view-view {
	transition-duration: 0s !important
}

.monaco-pane-view.animated.vertical .split-view-view {
	transition-property: height
}

.monaco-pane-view.animated.horizontal .split-view-view {
	transition-property: width
}

#monaco-pane-drop-overlay {
	box-sizing: border-box;
	height: 100%;
	left: 0;
	position: absolute;
	width: 100%;
	z-index: 10000
}

#monaco-pane-drop-overlay>.pane-overlay-indicator {
	height: 100%;
	min-height: 22px;
	min-width: 19px;
	pointer-events: none;
	position: absolute;
	transition: opacity .15s ease-out;
	width: 100%
}

#monaco-pane-drop-overlay>.pane-overlay-indicator.overlay-move-transition {
	transition: top 70ms ease-out, left 70ms ease-out, width 70ms ease-out, height 70ms ease-out, opacity .15s ease-out
}

.ports-view .monaco-icon-label,
.ports-view .monaco-list .monaco-list-row.focused .monaco-icon-label,
.ports-view .monaco-list .monaco-list-row:hover:not(.highlighted) .monaco-icon-label {
	flex: 1
}

.ports-view .monaco-list .monaco-list-row .actionBarContainer {
	flex: 1 0 auto;
	flex: 0 0 auto;
	text-align: right
}

.ports-view .monaco-list .monaco-list-row .ports-view-actionbar-cell {
	display: flex;
	flex: 1;
	flex-wrap: nowrap;
	height: 22px;
	overflow: hidden;
	text-overflow: ellipsis
}

.ports-view .monaco-list .monaco-list-row .ports-view-actionbar-cell .monaco-inputbox {
	flex: 1;
	height: 22px;
	line-height: 19px
}

.ports-view .monaco-list .monaco-list-row .ports-view-actionbar-cell .monaco-inputbox input {
	margin-top: -40px
}

.ports-view .monaco-list .monaco-list-row .ports-view-actionbar-cell .ports-view-actionbar-cell-localaddress:hover {
	text-decoration: underline
}

.ports-view .monaco-table-td[data-col-index="0"],
.ports-view .monaco-table-th,
.ports-view .monaco-table-th[data-col-index="0"] {
	padding-left: 10px
}

.ports-view .monaco-list .monaco-list-row .ports-view-actionbar-cell .monaco-button {
	line-height: 1.4em;
	margin-bottom: 3px;
	margin-left: 3px;
	margin-top: 4px;
	padding: 2px 14px;
	width: auto
}

.ports-view .monaco-list .monaco-list-row .ports-view-actionbar-cell>.ports-view-actionbar-cell-icon.codicon {
	margin-top: 3px;
	padding-right: 3px
}

.ports-view .monaco-list .monaco-list-row.selected .ports-view-actionbar-cell>.ports-view-actionbar-cell-icon.codicon {
	color: currentColor !important
}

.ports-view .monaco-list .monaco-list-row .ports-view-actionbar-cell .ports-view-actionbar-cell-resourceLabel .monaco-icon-label-container>.monaco-icon-name-container {
	flex: 1
}

.ports-view .monaco-list .monaco-list-row .ports-view-actionbar-cell .ports-view-actionbar-cell-resourceLabel:after {
	padding-right: 0
}

.ports-view .monaco-list .monaco-list-row .ports-view-actionbar-cell .actions {
	display: none
}

.ports-view .monaco-list .monaco-list-row.focused .ports-view-actionbar-cell .actions,
.ports-view .monaco-list .monaco-list-row.selected .ports-view-actionbar-cell .actions,
.ports-view .monaco-list .monaco-list-row:hover .ports-view-actionbar-cell .actions {
	display: block
}

.ports-view .monaco-list .ports-view-actionbar-cell .actions .action-label {
	background-position: 50% 50%;
	background-repeat: no-repeat;
	background-size: 16px;
	height: 100%;
	padding: 2px;
	width: 16px
}

.monaco-workbench .codicon.codicon-ports-forwarded-with-process-icon {
	color: var(--vscode-ports-iconRunningProcessForeground)
}

.quick-input-list .quick-input-list-entry.has-actions:hover .quick-input-list-entry-action-bar .action-label.dirty-editor:before {
	content: "\ea76"
}

.side-by-side-editor-container {
	height: 100%;
	width: 100%
}

.explorer-folders-view {
	height: 100%
}

.explorer-item-hover {
	cursor: pointer !important;
	font-size: 13px !important;
	height: 22px;
	padding-left: 6px;
	user-select: none !important
}

.explorer-folders-view .monaco-list-row {
	padding-left: 4px
}

.explorer-folders-view .explorer-folders-view.highlight .monaco-list .explorer-item:not(.explorer-item-edited),
.explorer-folders-view .explorer-folders-view.highlight .monaco-list .monaco-tl-twistie {
	opacity: .3
}

.explorer-folders-view .editor-group,
.explorer-folders-view .explorer-item {
	height: 22px;
	line-height: 22px
}

.explorer-folders-view .explorer-item {
	display: flex;
	flex-wrap: nowrap
}

.explorer-folders-view .editor-group,
.explorer-folders-view .explorer-item>a {
	overflow: hidden;
	text-overflow: ellipsis
}

.explorer-folders-view .explorer-item,
.explorer-folders-view .explorer-item .monaco-inputbox {
	flex: 1
}

.explorer-folders-view .explorer-item.cut {
	opacity: .5
}

.explorer-folders-view .explorer-item.explorer-item-edited .label-name {
	flex: 0
}

.explorer-folders-view .explorer-item.nonexistent-root {
	opacity: .5
}

.explorer-folders-view .explorer-item .monaco-inputbox {
	line-height: normal;
	width: 100%
}

.explorer-folders-view .explorer-item .monaco-icon-name-container.multiple>.label-name>.monaco-highlighted-label {
	border-radius: 3px
}

.explorer-folders-view .explorer-item .monaco-icon-name-container.multiple>.label-name:hover>.monaco-highlighted-label,
.explorer-folders-view .monaco-list .monaco-list-row.focused .explorer-item .monaco-icon-name-container.multiple>.label-name.active>.monaco-highlighted-label {
	text-decoration: underline
}

.explorer-folders-view .explorer-item .monaco-icon-name-container.multiple>.label-name.drop-target>.monaco-highlighted-label {
	background-color: var(--vscode-list-dropBackground)
}

.explorer-folders-view .explorer-item.align-nest-icon-with-parent-icon {
	margin-left: var(--vscode-explorer-align-offset-margin-left)
}

.monaco-workbench.linux .explorer-folders-view .explorer-item .monaco-inputbox,
.monaco-workbench.mac .explorer-folders-view .explorer-item .monaco-inputbox {
	height: 22px
}

.monaco-workbench .explorer-folders-view .explorer-item .monaco-inputbox>.ibwrapper>.input {
	height: 20px;
	padding: 0
}

.monaco-workbench.hc-black .explorer-folders-view .explorer-item,
.monaco-workbench.hc-light .explorer-folders-view .explorer-item {
	line-height: 20px
}

.monaco-workbench .explorer-folders-view .explorer-item .monaco-inputbox input[type=text] {
	opacity: 1;
	outline-color: var(--vscode-focusBorder);
	outline-offset: -1px;
	outline-style: solid;
	outline-width: 1px
}

.monaco-workbench.context-menu-visible .explorer-folders-view.highlight .monaco-list-row {
	outline: none !important
}

.pane-header .open-editors-dirty-count-container {
	align-items: center;
	display: flex;
	min-width: fit-content
}

.pane-header .open-editors-dirty-count-container>.dirty-count.monaco-count-badge.hidden,
.pane.horizontal:not(.expanded) .pane-header .open-editors-dirty-count-container>.dirty-count.monaco-count-badge {
	display: none
}

.pane-header .open-editors-dirty-count-container>.dirty-count.monaco-count-badge {
	margin-left: 6px;
	min-height: auto;
	padding: 2px 4px
}

.open-editors .monaco-list .monaco-list-row.dirty>.monaco-action-bar,
.open-editors .monaco-list .monaco-list-row.focused>.monaco-action-bar,
.open-editors .monaco-list .monaco-list-row.sticky>.monaco-action-bar,
.open-editors .monaco-list .monaco-list-row:hover>.monaco-action-bar {
	visibility: visible
}

.open-editors .monaco-list .monaco-list-row>.monaco-action-bar .action-label {
	display: block;
	padding: 2px
}

.open-editors .monaco-list .monaco-list-row>.monaco-action-bar .codicon {
	color: inherit
}

.open-editors .monaco-list .monaco-list-row.dirty:not(:hover)>.monaco-action-bar .codicon-pinned:before {
	content: "\ebb2"
}

.open-editors .monaco-list .monaco-list-row.dirty:not(:hover)>.monaco-action-bar .codicon-close:before {
	content: "\ea71"
}

.open-editors .monaco-list .monaco-list-row>.monaco-action-bar .action-close-all-files,
.open-editors .monaco-list .monaco-list-row>.monaco-action-bar .save-all {
	height: 22px;
	width: 23px
}

.open-editors .monaco-list .monaco-list-row>.editor-group,
.open-editors .monaco-list .monaco-list-row>.open-editor {
	flex: 1
}

.open-editors .monaco-list .monaco-list-row {
	display: flex;
	padding-left: 22px
}

.open-editors .monaco-list .monaco-list-row>.monaco-action-bar {
	align-items: center;
	display: flex;
	visibility: hidden
}

.open-editors .monaco-list .monaco-list-row .editor-group {
	cursor: default;
	font-size: 11px;
	font-weight: 700;
	text-transform: uppercase
}

.composite:lang(ja) .open-editors .monaco-list .monaco-list-row .editor-group,
.composite:lang(ko) .open-editors .monaco-list .monaco-list-row .editor-group,
.composite:lang(zh-Hans) .open-editors .monaco-list .monaco-list-row .editor-group,
.composite:lang(zh-Hant) .open-editors .monaco-list .monaco-list-row .editor-group {
	font-weight: 400
}

.open-editors .editor-group,
.open-editors .open-editor {
	height: 22px;
	line-height: 22px
}

.open-editors .editor-group,
.open-editors .open-editor>a {
	overflow: hidden;
	text-overflow: ellipsis
}

.monaco-workbench.hc-black .open-editors .editor-group,
.monaco-workbench.hc-black .open-editors .open-editor,
.monaco-workbench.hc-light .open-editors .editor-group,
.monaco-workbench.hc-light .open-editors .open-editor {
	line-height: 20px
}

.token-inspect-widget {
	border: 1px solid var(--vscode-editorHoverWidget-border);
	padding: 10px;
	user-select: text;
	-webkit-user-select: text;
	z-index: 50
}

.hc-black .tokens-inspect-widget,
.hc-light .tokens-inspect-widget {
	border-width: 2px
}

.monaco-editor .token-inspect-widget {
	background-color: var(--vscode-editorHoverWidget-background)
}

.monaco-editor .token-inspect-widget .tiw-metadata-separator {
	background-color: var(--vscode-editorHoverWidget-border)
}

.tiw-token {
	font-family: var(--monaco-monospace-font)
}

.tiw-metadata-separator {
	border: 0;
	height: 1px
}

.tiw-token-length {
	float: right;
	font-size: 60%;
	font-weight: 400
}

.tiw-metadata-table {
	width: 100%
}

.tiw-metadata-value {
	font-family: var(--monaco-monospace-font);
	word-break: break-word
}

.tiw-metadata-values {
	list-style: none;
	margin-right: -10px;
	max-height: 300px;
	overflow-y: auto;
	padding-left: 0
}

.tiw-metadata-values>.tiw-metadata-value {
	margin-right: 10px
}

.tiw-metadata-key {
	min-width: 150px;
	padding-right: 10px;
	vertical-align: top;
	white-space: nowrap;
	width: 1px
}

.tiw-metadata-semantic {
	font-style: italic
}

.tiw-metadata-scopes {
	line-height: normal
}

.tiw-theme-selector {
	font-family: var(--monaco-monospace-font)
}

.monaco-editor .dirty-diff-glyph {
	margin-left: 5px;
	z-index: 5
}

.monaco-editor .dirty-diff-glyph:before {
	content: "";
	height: 100%;
	left: -2px;
	position: absolute;
	width: 0
}

.monaco-workbench:not(.reduce-motion) .monaco-editor .dirty-diff-glyph:before {
	transition: width 80ms linear, left 80ms linear, transform 80ms linear
}

.monaco-editor.modified-in-monaco-diff-editor .margin-view-overlays>div>.dirty-diff-glyph {
	display: none
}

.monaco-editor .dirty-diff-added {
	border-left-color: var(--vscode-editorGutter-addedBackground);
	border-left-style: solid
}

.monaco-editor .dirty-diff-added:before {
	background: var(--vscode-editorGutter-addedBackground)
}

.monaco-editor .dirty-diff-added-pattern {
	background-repeat: repeat-y
}

.monaco-editor .dirty-diff-added-pattern,
.monaco-editor .dirty-diff-added-pattern:before {
	background-image: linear-gradient(-45deg, var(--vscode-editorGutter-addedBackground) 25%, var(--vscode-editorGutter-background) 25%, var(--vscode-editorGutter-background) 50%, var(--vscode-editorGutter-addedBackground) 50%, var(--vscode-editorGutter-addedBackground) 75%, var(--vscode-editorGutter-background) 75%, var(--vscode-editorGutter-background))
}

.monaco-editor .dirty-diff-added-pattern:before {
	transform: translateX(3px)
}

.monaco-editor .dirty-diff-modified {
	border-left-color: var(--vscode-editorGutter-modifiedBackground);
	border-left-style: solid
}

.monaco-editor .dirty-diff-modified:before {
	background: var(--vscode-editorGutter-modifiedBackground)
}

.monaco-editor .dirty-diff-modified-pattern {
	background-image: linear-gradient(-45deg, var(--vscode-editorGutter-modifiedBackground) 25%, var(--vscode-editorGutter-background) 25%, var(--vscode-editorGutter-background) 50%, var(--vscode-editorGutter-modifiedBackground) 50%, var(--vscode-editorGutter-modifiedBackground) 75%, var(--vscode-editorGutter-background) 75%, var(--vscode-editorGutter-background));
	background-repeat: repeat-y
}

.monaco-workbench:not(.reduce-motion) .monaco-editor .dirty-diff-added,
.monaco-workbench:not(.reduce-motion) .monaco-editor .dirty-diff-added-pattern,
.monaco-workbench:not(.reduce-motion) .monaco-editor .dirty-diff-modified,
.monaco-workbench:not(.reduce-motion) .monaco-editor .dirty-diff-modified-pattern {
	transition: opacity .5s
}

.monaco-editor .dirty-diff-modified-pattern:before {
	background-image: linear-gradient(-45deg, var(--vscode-editorGutter-modifiedBackground) 25%, var(--vscode-editorGutter-background) 25%, var(--vscode-editorGutter-background) 50%, var(--vscode-editorGutter-modifiedBackground) 50%, var(--vscode-editorGutter-modifiedBackground) 75%, var(--vscode-editorGutter-background) 75%, var(--vscode-editorGutter-background));
	transform: translateX(3px)
}

.monaco-editor .margin:hover .dirty-diff-added,
.monaco-editor .margin:hover .dirty-diff-added-pattern,
.monaco-editor .margin:hover .dirty-diff-modified,
.monaco-editor .margin:hover .dirty-diff-modified-pattern {
	opacity: 1
}

.monaco-editor .dirty-diff-deleted:after {
	border-bottom: 4px solid transparent;
	border-left: 4px solid var(--vscode-editorGutter-deletedBackground);
	border-top: 4px solid transparent;
	bottom: -4px;
	box-sizing: border-box;
	content: "";
	height: 0;
	pointer-events: none;
	position: absolute;
	width: 4px;
	z-index: 9
}

.monaco-workbench:not(.reduce-motion) .monaco-editor .dirty-diff-deleted:after {
	transition: border-top-width 80ms linear, border-bottom-width 80ms linear, bottom 80ms linear, opacity .5s
}

.monaco-editor .dirty-diff-deleted:before {
	background: var(--vscode-editorGutter-deletedBackground);
	bottom: 0;
	height: 0;
	margin-left: 3px
}

.monaco-workbench:not(.reduce-motion) .monaco-editor .dirty-diff-deleted:before {
	transition: height 80ms linear
}

.dirty-diff .peekview-title .dropdown {
	margin-right: 10px
}

.dirty-diff .peekview-title .dropdown.select-container {
	cursor: default
}

.dirty-diff .peekview-title .dropdown .monaco-select-box {
	cursor: pointer;
	min-height: 18px;
	min-width: 100px;
	padding: 0 23px 0 8px
}

.comments-panel .comments-panel-container {
	height: 100%
}

.comments-panel .comments-panel-container .hidden {
	display: none
}

.comments-panel .comments-panel-container .tree-container {
	height: 100%
}

.comments-panel .comments-panel-container .tree-container.hidden {
	display: none;
	visibility: hidden
}

.comments-panel .comments-panel-container .tree-container .comment-thread-container {
	display: block
}

.comments-panel .comments-panel-container .tree-container .comment-thread-container div {
	overflow: hidden
}

.comments-panel .comments-panel-container .tree-container .comment-thread-container .comment-metadata-container,
.comments-panel .comments-panel-container .tree-container .comment-thread-container .comment-snippet-container,
.comments-panel .comments-panel-container .tree-container .resource-container {
	display: flex;
	overflow: hidden;
	text-overflow: ellipsis
}

.comments-panel .count,
.comments-panel .user {
	padding-right: 5px
}

.comments-panel .comments-panel-container .tree-container .comment-thread-container .icon {
	min-width: fit-content;
	padding-right: 5px;
	padding-top: 4px
}

.comments-panel .comments-panel-container .tree-container .comment-thread-container .comment-metadata-container .user,
.comments-panel .comments-panel-container .tree-container .comment-thread-container .comment-snippet-container .count {
	min-width: fit-content
}

.comments-panel .comments-panel-container .tree-container .comment-thread-container .comment-snippet-container .text {
	display: flex;
	flex: 1;
	min-width: 0
}

.comments-panel .comments-panel-container .tree-container .comment-thread-container .reply-detail,
.comments-panel .comments-panel-container .tree-container .comment-thread-container .timestamp {
	display: block;
	font-size: .9em;
	opacity: .8;
	overflow: hidden;
	padding-right: 5px;
	text-overflow: ellipsis
}

.comments-panel .comments-panel-container .tree-container .comment-thread-container .text * {
	margin: 0;
	max-width: 500px;
	overflow: hidden;
	padding-right: 5px;
	text-overflow: ellipsis
}

.comments-panel .comments-panel-container .tree-container .comment-thread-container .range {
	opacity: .8
}

.comments-panel .comments-panel-container .tree-container .comment-thread-container .comment-snippet-container .text code {
	font-family: var(--monaco-monospace-font)
}

.comments-panel .comments-panel-container .tree-container .comment-thread-container .separator {
	opacity: .8;
	padding-right: 5px
}

.comments-panel .comments-panel-container .message-box-container {
	height: inherit;
	line-height: 22px;
	padding-left: 20px
}

.comments-panel .comments-panel-container .tree-container .count-badge-wrapper {
	margin-left: 10px
}

.comments-panel .comments-panel-container .tree-container .comment-thread-container .comment-metadata-container,
.comments-panel .comments-panel-container .tree-container .comment-thread-container .comment-snippet-container {
	line-height: 22px;
	margin-right: 5px
}

.comments-panel .comments-panel-container .tree-container .comment-thread-container .comment-snippet-container {
	padding-left: 16px
}

.comments-panel .hide {
	display: none
}

.review-widget {
	position: absolute;
	width: 100%
}

.monaco-editor .review-widget {
	background-color: var(--vscode-peekViewResult-background)
}

.review-widget .hidden {
	display: none !important
}

.review-widget .body {
	overflow: hidden
}

.review-widget .body .review-comment {
	display: flex;
	padding: 8px 16px 8px 20px
}

@keyframes monaco-review-widget-focus {
	0% {
		background: var(--vscode-peekViewResult-selectionBackground)
	}

	to {
		background: transparent
	}
}

.review-widget .body .review-comment.focus {
	animation: monaco-review-widget-focus 3s ease 0s
}

.review-widget .body .review-comment .comment-actions {
	margin-left: auto
}

.review-widget .body .review-comment .comment-actions .monaco-toolbar {
	height: 22px
}

.review-widget .body .review-comment .comment-title .comment-header-info {
	overflow: hidden;
	text-overflow: ellipsis
}

.review-widget .body .review-comment .comment-title {
	display: flex;
	width: 100%
}

.review-widget .body .review-comment .comment-title .action-label.codicon {
	line-height: 18px
}

.review-widget .body .review-comment .comment-title .monaco-dropdown .toolbar-toggle-more {
	height: 18px;
	line-height: 18px;
	vertical-align: middle;
	width: 16px
}

.review-widget .body .comment-body blockquote {
	border-left-style: solid;
	border-left-width: 5px;
	margin: 0 7px 0 5px;
	padding: 0 16px 0 10px
}

.review-widget .body .review-comment .avatar-container {
	margin-top: 4px !important
}

.review-widget .body .review-comment .avatar-container img.avatar {
	border-radius: 3px;
	border-style: none;
	display: inline-block;
	height: 28px;
	line-height: 1;
	overflow: hidden;
	vertical-align: middle;
	width: 28px
}

.review-widget .body .comment-reactions .monaco-text-button {
	background-color: transparent;
	border: 1px solid grey;
	border-radius: 3px;
	margin: 0 7px 0 0;
	width: 30px
}

.review-widget .body .review-comment .review-comment-contents {
	overflow: hidden;
	padding-left: 20px;
	user-select: text;
	-webkit-user-select: text;
	width: 100%
}

.review-widget .body pre {
	word-wrap: normal;
	overflow: auto;
	white-space: pre
}

.review-widget .body .review-comment .review-comment-contents .author {
	line-height: 22px
}

.review-widget .body .review-comment .review-comment-contents .isPending {
	font-style: italic;
	line-height: 22px;
	margin: 0 5px;
	padding: 0 2px
}

.review-widget .body .review-comment .review-comment-contents .timestamp {
	line-height: 22px;
	margin: 0 5px;
	padding: 0 2px
}

.review-widget .body .review-comment .review-comment-contents .comment-body .comment-body-plainstring {
	white-space: pre-wrap
}

.review-widget .body .review-comment .review-comment-contents .comment-body {
	padding-top: 4px
}

.review-widget .body .review-comment .review-comment-contents .comment-body-max-height {
	max-height: 20em
}

.review-widget .body .review-comment .review-comment-contents .comment-reactions {
	margin-top: 8px;
	min-height: 25px
}

.review-widget .body .review-comment .review-comment-contents .comment-reactions .action-item .action-label {
	display: flex;
	font-size: 12px;
	padding: 1px 4px;
	text-align: center;
	white-space: pre
}

.review-widget .body .review-comment .review-comment-contents .comment-reactions .action-item .action-label .reaction-icon {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-position: 0;
	background-repeat: no-repeat;
	background-size: 14px;
	display: inline-block;
	margin-right: 4px;
	width: 14px
}

.review-widget .body .review-comment .review-comment-contents .comment-reactions .action-item .action-label .reaction-label {
	line-height: 20px;
	margin-right: 4px
}

.review-widget .body .review-comment .review-comment-contents .comment-reactions .action-item a.action-label.toolbar-toggle-pickReactions {
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: 16px;
	border: none;
	display: none;
	font-size: 16px;
	height: 16px;
	margin-top: 3px;
	width: 26px
}

.review-widget .body .review-comment .review-comment-contents .comment-reactions:hover .action-item a.action-label.toolbar-toggle-pickReactions {
	background-size: 16px;
	display: inline-block
}

.review-widget .body .review-comment .comment-title .action-label {
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: 16px;
	display: block;
	height: 16px;
	line-height: 16px
}

.review-widget .body .review-comment .review-comment-contents .comment-reactions .action-item a.action-label {
	border: 1px solid
}

.review-widget .body .review-comment .review-comment-contents .comment-reactions .action-item a.action-label.disabled {
	opacity: .6
}

.review-widget .body .review-comment .review-comment-contents .comment-reactions .action-item a.action-label.active:hover {
	background-color: var(--vscode-statusBarItem-hoverBackground)
}

.review-widget .body .review-comment .review-comment-contents .comment-reactions .action-item a.action-label:active {
	background-color: var(--vscode-statusBarItem-activeBackground);
	border: 1px solid transparent
}

.review-widget .body .review-comment .review-comment-contents a {
	cursor: pointer
}

.review-widget .body .comment-body p,
.review-widget .body .comment-body ul {
	margin: 8px 0
}

.review-widget .body .comment-body p:first-child,
.review-widget .body .comment-body ul:first-child {
	margin-top: 0
}

.review-widget .body .comment-body p:last-child,
.review-widget .body.comment-body ul:last-child {
	margin-bottom: 0
}

.review-widget .body .comment-body ul {
	padding-left: 20px
}

.review-widget .body .comment-body li>p {
	margin-bottom: 0
}

.review-widget .body .comment-body li>ul {
	margin-top: 0
}

.review-widget .body .comment-body code {
	border-radius: 3px;
	padding: 0 .4em
}

.review-widget .body .comment-body span {
	white-space: pre
}

.review-widget .body .comment-body img {
	max-width: 100%
}

.review-widget .body .comment-form {
	margin: 8px 20px
}

.review-widget .validation-error {
	word-wrap: break-word;
	box-sizing: border-box;
	display: inline-block;
	font-size: 12px;
	line-height: 17px;
	margin-left: -1px;
	margin-top: -1px;
	min-height: 34px;
	overflow: hidden;
	padding: .4em;
	text-align: left;
	width: 100%
}

.review-widget .body .comment-additional-actions {
	margin: 10px 20px
}

.review-widget .body .comment-additional-actions .section-separator {
	border-top: 1px solid var(--vscode-menu-separatorBackground);
	margin: 10px 0 14px
}

.review-widget .body .comment-additional-actions .button-bar {
	display: flex;
	white-space: nowrap
}

.review-widget .body .comment-additional-actions .monaco-button,
.review-widget .body .comment-additional-actions .monaco-button-dropdown,
.review-widget .body .comment-additional-actions .monaco-text-button {
	display: flex;
	width: auto
}

.review-widget .body .comment-additional-actions .button-bar>.monaco-button-dropdown,
.review-widget .body .comment-additional-actions .button-bar>.monaco-text-button {
	margin: 0 10px 0 0
}

.review-widget .body .comment-additional-actions .button-bar .monaco-text-button {
	padding: 4px 10px
}

.review-widget .body .comment-additional-actions .codicon-drop-down-button {
	align-items: center
}

.review-widget .body .monaco-editor {
	color: var(--vscode-editor-foreground)
}

.review-widget .body .comment-form.expand .review-thread-reply-button {
	display: none
}

.review-widget .body .comment-form.expand .form-actions,
.review-widget .body .comment-form.expand .monaco-editor {
	box-sizing: content-box;
	display: block
}

.review-widget .body .comment-form .review-thread-reply-button {
	background-color: var(--vscode-peekViewTitle-background);
	border: 0;
	border-radius: 0;
	box-sizing: border-box;
	color: var(--vscode-editor-foreground);
	display: block;
	font-family: var(--monaco-monospace-font);
	font-size: inherit;
	font-weight: 600;
	line-height: 20px;
	outline: 1px solid transparent;
	padding: 6px 12px;
	resize: vertical;
	text-align: left;
	white-space: nowrap;
	width: 100%
}

.review-widget .body .comment-form .review-thread-reply-button:focus {
	outline-style: solid;
	outline-width: 1px
}

.review-widget .body .comment-form .monaco-editor,
.review-widget .body .comment-form .monaco-editor .monaco-editor-background,
.review-widget .body .edit-container .monaco-editor .monaco-editor-background {
	background-color: var(--vscode-peekViewTitle-background)
}

.review-widget .body .comment-form .monaco-editor,
.review-widget .body .edit-container .monaco-editor {
	border: 0;
	border-radius: 3px;
	box-sizing: content-box;
	max-height: 500px;
	min-height: 90px;
	padding: 6px 0 6px 12px;
	width: 100%
}

.review-widget .body .comment-form .form-actions,
.review-widget .body .comment-form .monaco-editor {
	display: none
}

.review-widget .body .comment-form .form-actions,
.review-widget .body .edit-container .form-actions {
	margin: 10px 0;
	overflow: auto
}

.review-widget .body .edit-container .form-actions {
	padding-top: 10px
}

.review-widget .body .edit-textarea {
	height: 90px;
	margin: 5px 12px 10px 0
}

.review-widget .body .comment-form .monaco-text-button,
.review-widget .body .edit-container .monaco-text-button {
	margin-left: 5px;
	padding: 4px 10px;
	width: auto
}

.review-widget .body .form-actions .monaco-text-button {
	float: right
}

.review-widget .head {
	box-sizing: border-box;
	display: flex;
	height: 100%
}

.review-widget .head .review-title {
	cursor: default;
	display: inline-block;
	font-size: 13px;
	margin-left: 20px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap
}

.review-widget .head .review-title .dirname:not(:empty) {
	font-size: .9em;
	margin-left: .5em
}

.review-widget .head .review-actions {
	flex: 1;
	padding-right: 2px;
	text-align: right
}

.review-widget .head .review-actions>.monaco-action-bar {
	display: inline-block
}

.review-widget .head .review-actions>.monaco-action-bar,
.review-widget .head .review-actions>.monaco-action-bar>.actions-container {
	height: 100%
}

.review-widget .action-item {
	margin-left: 4px;
	min-height: 20px;
	min-width: 18px
}

.review-widget .head .review-actions>.monaco-action-bar .action-label {
	background-position: 50%;
	background-repeat: no-repeat;
	line-height: inherit;
	margin: 0
}

.review-widget .head .review-actions>.monaco-action-bar .action-label.codicon {
	margin: 0
}

.review-widget>.body {
	border-top: 1px solid;
	position: relative
}

.monaco-editor .comment-range-glyph {
	cursor: pointer;
	margin-left: 10px;
	width: 4px !important;
	z-index: 10
}

div.preview.inline .monaco-editor .comment-range-glyph {
	display: none !important
}

.monaco-editor .comment-diff-added {
	border-left-style: solid;
	border-left-width: 3px
}

.monaco-editor .comment-diff-added,
.monaco-editor .comment-range-glyph.multiline-add {
	border-left-color: var(--vscode-editorGutter-commentRangeForeground)
}

.monaco-editor .comment-diff-added:before,
.monaco-editor .comment-range-glyph.line-hover:before,
.monaco-editor .comment-thread-unresolved:before,
.monaco-editor .comment-thread:before {
	background: var(--vscode-editorGutter-commentRangeForeground)
}

.monaco-editor .comment-thread-range,
.monaco-editor .comment-thread-range-current {
	border-style: solid;
	border-width: 1px;
	box-sizing: border-box
}

.monaco-editor .comment-thread-range {
	background-color: var(--vscode-editorCommentsWidget-rangeBackground);
	border-color: var(--vscode-editorCommentsWidget-rangeBorder)
}

.monaco-editor .comment-thread-range-current {
	background-color: var(--vscode-editorCommentsWidget-rangeActiveBackground);
	border-color: var(--vscode-editorCommentsWidget-rangeActiveBorder)
}

.monaco-editor .margin-view-overlays .comment-range-glyph.comment-thread,
.monaco-editor .margin-view-overlays .comment-range-glyph.comment-thread-unresolved,
.monaco-editor .margin-view-overlays .comment-range-glyph.line-hover {
	margin-left: 13px
}

.monaco-editor .comment-range-glyph.comment-thread-unresolved:before,
.monaco-editor .comment-range-glyph.comment-thread:before,
.monaco-editor .margin-view-overlays .comment-range-glyph.line-hover:before,
.monaco-editor .margin-view-overlays>div:hover>.comment-range-glyph.comment-diff-added:before {
	align-items: center;
	color: var(--vscode-editorGutter-commentGlyphForeground);
	display: flex;
	flex-direction: row;
	height: 100%;
	justify-content: center;
	left: -6px;
	position: absolute;
	text-align: center;
	width: 9px;
	z-index: 10
}

.monaco-editor .comment-range-glyph.comment-thread-unresolved:before {
	color: var(--vscode-editorGutter-commentUnresolvedGlyphForeground)
}

.monaco-editor .margin-view-overlays .comment-range-glyph.multiline-add {
	border-left-style: dotted;
	border-left-width: 3px;
	height: 16px;
	margin-top: 2px
}

.monaco-editor .margin-view-overlays .comment-range-glyph.line-hover:before,
.monaco-editor .margin-view-overlays>div:hover>.comment-range-glyph.comment-diff-added:before {
	border-radius: 3px;
	content: "\ea60";
	font-family: codicon;
	margin-left: -5px;
	padding-left: 1px;
	width: 18px !important
}

.monaco-editor .comment-range-glyph.comment-thread,
.monaco-editor .comment-range-glyph.comment-thread-unresolved {
	z-index: 20
}

.monaco-editor .comment-range-glyph.comment-thread-unresolved:before,
.monaco-editor .comment-range-glyph.comment-thread:before {
	border-radius: 3px;
	font-family: codicon;
	font-size: 13px;
	line-height: 100%;
	margin-left: -5px;
	padding-left: 1px;
	padding-top: 1px;
	width: 18px !important;
	z-index: 20
}

.monaco-editor .comment-range-glyph.comment-thread:before {
	content: "\ea6b"
}

.monaco-editor .comment-range-glyph.comment-thread-unresolved:before {
	content: "\ec0a"
}

.monaco-editor.inline-comment .margin-view-overlays .codicon-folding-collapsed,
.monaco-editor.inline-comment .margin-view-overlays .codicon-folding-expanded {
	margin-left: 11px
}

.monaco-editor.inline-comment .margin-view-overlays .dirty-diff-glyph {
	margin-left: 25px
}

.monaco-editor-pane-placeholder {
	align-items: center;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
	padding: 0 16px
}

.monaco-editor-pane-placeholder:focus {
	outline: none !important
}

.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon {
	font-size: 48px
}

.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon.codicon-error {
	color: var(--vscode-editorError-foreground)
}

.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon.codicon-warning {
	color: var(--vscode-editorWarning-foreground)
}

.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon.codicon-info,
.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon.codicon-workspace-untrusted {
	color: var(--vscode-editorInfo-foreground)
}

.monaco-editor-pane-placeholder.max-height-200px .editor-placeholder-icon-container {
	display: none
}

.monaco-editor-pane-placeholder .editor-placeholder-label-container {
	font-size: 14px;
	max-width: 450px;
	text-align: center;
	word-break: break-word
}

.monaco-editor-pane-placeholder .editor-placeholder-buttons-container {
	display: flex
}

.monaco-editor-pane-placeholder .editor-placeholder-buttons-container>.monaco-button {
	font-size: 14px;
	margin: 4px 5px;
	outline-offset: 2px !important;
	padding: 6px 11px;
	width: fit-content
}

.monaco-workbench .screen-reader-detected-explanation {
	cursor: default;
	padding: 1em;
	right: 6px;
	top: 30px;
	width: 420px
}

.monaco-workbench .screen-reader-detected-explanation .cancel {
	border: none;
	cursor: pointer;
	height: 22px;
	padding: .5em;
	position: absolute;
	right: 0;
	top: 0;
	width: 22px
}

.monaco-workbench .screen-reader-detected-explanation h2 {
	font-size: 1.8em;
	font-weight: 400;
	margin: 0;
	padding: 0
}

.monaco-workbench .screen-reader-detected-explanation p {
	font-size: 1.2em
}

.monaco-workbench .screen-reader-detected-explanation hr {
	border: 0;
	height: 2px
}

.monaco-workbench .screen-reader-detected-explanation .buttons {
	display: flex
}

.monaco-workbench .screen-reader-detected-explanation .buttons a {
	font-size: 13px;
	margin-right: 5px;
	max-width: fit-content;
	padding-left: 12px;
	padding-right: 12px
}

.monaco-workbench.nopanel .part.panel {
	display: none !important;
	visibility: hidden !important
}

.monaco-workbench .part.panel.bottom .composite.title {
	border-top-style: solid;
	border-top-width: 1px
}

.monaco-workbench.noeditorarea .part.panel.bottom .composite.title {
	border-top-width: 0
}

.monaco-workbench .part.panel.right {
	border-left-style: solid;
	border-left-width: 1px
}

.monaco-workbench.noeditorarea .part.panel.right {
	border-left-width: 0
}

.monaco-workbench .part.panel.left {
	border-right-style: solid;
	border-right-width: 1px
}

.monaco-workbench.noeditorarea .part.panel.left {
	border-right-width: 0
}

.monaco-workbench .part.panel>.content .monaco-editor,
.monaco-workbench .part.panel>.content .monaco-editor .margin,
.monaco-workbench .part.panel>.content .monaco-editor .monaco-editor-background {
	background-color: var(--vscode-panel-background)
}

.monaco-workbench .part.panel>.title>.panel-switcher-container>.monaco-action-bar .action-item:focus .action-label,
.monaco-workbench .part.panel>.title>.panel-switcher-container>.monaco-action-bar .action-item:hover .action-label {
	color: var(--vscode-panelTitle-activeForeground) !important
}

.monaco-workbench .part.panel .monaco-inputbox {
	border-color: var(--vscode-panelInput-border, transparent) !important
}

.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item:focus .active-item-indicator:before {
	border-top-color: var(--vscode-focusBorder) !important
}

.monaco-workbench .part.panel>.title>.panel-switcher-container>.monaco-action-bar .action-item:focus {
	outline: none
}

.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item.checked.clicked:focus .active-item-indicator:before,
.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item.checked:not(:focus) .active-item-indicator:before {
	border-top-color: var(--vscode-panelTitle-activeBorder) !important
}

.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item.checked .action-label,
.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item:hover .action-label {
	outline: var(--vscode-contrastActiveBorder, unset) solid 1px !important
}

.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item:not(.checked):hover .action-label {
	outline: var(--vscode-contrastActiveBorder, unset) dashed 1px !important
}

`;