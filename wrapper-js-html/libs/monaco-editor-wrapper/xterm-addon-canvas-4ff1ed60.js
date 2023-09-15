import { qm as we } from "./verifyPrepare-778b382e.js";
function Le(te, _e) {
  for (var Z = 0; Z < _e.length; Z++) {
    const J = _e[Z];
    if (typeof J != "string" && !Array.isArray(J)) {
      for (const V in J)
        if (V !== "default" && !(V in te)) {
          const ee = Object.getOwnPropertyDescriptor(J, V);
          ee && Object.defineProperty(te, V, ee.get ? ee : {
            enumerable: !0,
            get: () => J[V]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(te, Symbol.toStringTag, { value: "Module" }));
}
var ge = { exports: {} }, pe;
function be() {
  return pe || (pe = 1, function(te, _e) {
    (function(Z, J) {
      te.exports = J();
    })(self, () => (() => {
      var Z = { 903: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.BaseRenderLayer = void 0;
        const d = h(627), n = h(237), o = h(860), a = h(374), f = h(296), g = h(855), i = h(274), t = h(859), x = h(399), v = h(345);
        class c extends t.Disposable {
          constructor(s, _, l, r, u, C, w, b, L, R) {
            super(), this._terminal = s, this._container = _, this._alpha = u, this._themeService = C, this._bufferService = w, this._optionsService = b, this._decorationService = L, this._coreBrowserService = R, this._deviceCharWidth = 0, this._deviceCharHeight = 0, this._deviceCellWidth = 0, this._deviceCellHeight = 0, this._deviceCharLeft = 0, this._deviceCharTop = 0, this._selectionModel = (0, f.createSelectionRenderModel)(), this._bitmapGenerator = [], this._onAddTextureAtlasCanvas = this.register(new v.EventEmitter()), this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event, this._cellColorResolver = new i.CellColorResolver(this._terminal, this._selectionModel, this._decorationService, this._coreBrowserService, this._themeService), this._canvas = document.createElement("canvas"), this._canvas.classList.add(`xterm-${l}-layer`), this._canvas.style.zIndex = r.toString(), this._initCanvas(), this._container.appendChild(this._canvas), this._refreshCharAtlas(this._themeService.colors), this.register(this._themeService.onChangeColors((A) => {
              this._refreshCharAtlas(A), this.reset(), this.handleSelectionChanged(this._selectionModel.selectionStart, this._selectionModel.selectionEnd, this._selectionModel.columnSelectMode);
            })), this.register((0, t.toDisposable)(() => {
              var A;
              this._canvas.remove(), (A = this._charAtlas) === null || A === void 0 || A.dispose();
            }));
          }
          get canvas() {
            return this._canvas;
          }
          get cacheCanvas() {
            var s;
            return (s = this._charAtlas) === null || s === void 0 ? void 0 : s.pages[0].canvas;
          }
          _initCanvas() {
            this._ctx = (0, a.throwIfFalsy)(this._canvas.getContext("2d", { alpha: this._alpha })), this._alpha || this._clearAll();
          }
          handleBlur() {
          }
          handleFocus() {
          }
          handleCursorMove() {
          }
          handleGridChanged(s, _) {
          }
          handleSelectionChanged(s, _, l = !1) {
            this._selectionModel.update(this._terminal, s, _, l);
          }
          _setTransparency(s) {
            if (s === this._alpha)
              return;
            const _ = this._canvas;
            this._alpha = s, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, _), this._refreshCharAtlas(this._themeService.colors), this.handleGridChanged(0, this._bufferService.rows - 1);
          }
          _refreshCharAtlas(s) {
            var _;
            if (!(this._deviceCharWidth <= 0 && this._deviceCharHeight <= 0)) {
              (_ = this._charAtlasDisposable) === null || _ === void 0 || _.dispose(), this._charAtlas = (0, d.acquireTextureAtlas)(this._terminal, this._optionsService.rawOptions, s, this._deviceCellWidth, this._deviceCellHeight, this._deviceCharWidth, this._deviceCharHeight, this._coreBrowserService.dpr), this._charAtlasDisposable = (0, v.forwardEvent)(this._charAtlas.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas), this._charAtlas.warmUp();
              for (let l = 0; l < this._charAtlas.pages.length; l++)
                this._bitmapGenerator[l] = new p(this._charAtlas.pages[l].canvas);
            }
          }
          resize(s) {
            this._deviceCellWidth = s.device.cell.width, this._deviceCellHeight = s.device.cell.height, this._deviceCharWidth = s.device.char.width, this._deviceCharHeight = s.device.char.height, this._deviceCharLeft = s.device.char.left, this._deviceCharTop = s.device.char.top, this._canvas.width = s.device.canvas.width, this._canvas.height = s.device.canvas.height, this._canvas.style.width = `${s.css.canvas.width}px`, this._canvas.style.height = `${s.css.canvas.height}px`, this._alpha || this._clearAll(), this._refreshCharAtlas(this._themeService.colors);
          }
          clearTextureAtlas() {
            var s;
            (s = this._charAtlas) === null || s === void 0 || s.clearTexture();
          }
          _fillCells(s, _, l, r) {
            this._ctx.fillRect(s * this._deviceCellWidth, _ * this._deviceCellHeight, l * this._deviceCellWidth, r * this._deviceCellHeight);
          }
          _fillMiddleLineAtCells(s, _, l = 1) {
            const r = Math.ceil(0.5 * this._deviceCellHeight);
            this._ctx.fillRect(s * this._deviceCellWidth, (_ + 1) * this._deviceCellHeight - r - this._coreBrowserService.dpr, l * this._deviceCellWidth, this._coreBrowserService.dpr);
          }
          _fillBottomLineAtCells(s, _, l = 1, r = 0) {
            this._ctx.fillRect(s * this._deviceCellWidth, (_ + 1) * this._deviceCellHeight + r - this._coreBrowserService.dpr - 1, l * this._deviceCellWidth, this._coreBrowserService.dpr);
          }
          _curlyUnderlineAtCell(s, _, l = 1) {
            this._ctx.save(), this._ctx.beginPath(), this._ctx.strokeStyle = this._ctx.fillStyle;
            const r = this._coreBrowserService.dpr;
            this._ctx.lineWidth = r;
            for (let u = 0; u < l; u++) {
              const C = (s + u) * this._deviceCellWidth, w = (s + u + 0.5) * this._deviceCellWidth, b = (s + u + 1) * this._deviceCellWidth, L = (_ + 1) * this._deviceCellHeight - r - 1, R = L - r, A = L + r;
              this._ctx.moveTo(C, L), this._ctx.bezierCurveTo(C, R, w, R, w, L), this._ctx.bezierCurveTo(w, A, b, A, b, L);
            }
            this._ctx.stroke(), this._ctx.restore();
          }
          _dottedUnderlineAtCell(s, _, l = 1) {
            this._ctx.save(), this._ctx.beginPath(), this._ctx.strokeStyle = this._ctx.fillStyle;
            const r = this._coreBrowserService.dpr;
            this._ctx.lineWidth = r, this._ctx.setLineDash([2 * r, r]);
            const u = s * this._deviceCellWidth, C = (_ + 1) * this._deviceCellHeight - r - 1;
            this._ctx.moveTo(u, C);
            for (let w = 0; w < l; w++) {
              const b = (s + l + w) * this._deviceCellWidth;
              this._ctx.lineTo(b, C);
            }
            this._ctx.stroke(), this._ctx.closePath(), this._ctx.restore();
          }
          _dashedUnderlineAtCell(s, _, l = 1) {
            this._ctx.save(), this._ctx.beginPath(), this._ctx.strokeStyle = this._ctx.fillStyle;
            const r = this._coreBrowserService.dpr;
            this._ctx.lineWidth = r, this._ctx.setLineDash([4 * r, 3 * r]);
            const u = s * this._deviceCellWidth, C = (s + l) * this._deviceCellWidth, w = (_ + 1) * this._deviceCellHeight - r - 1;
            this._ctx.moveTo(u, w), this._ctx.lineTo(C, w), this._ctx.stroke(), this._ctx.closePath(), this._ctx.restore();
          }
          _fillLeftLineAtCell(s, _, l) {
            this._ctx.fillRect(s * this._deviceCellWidth, _ * this._deviceCellHeight, this._coreBrowserService.dpr * l, this._deviceCellHeight);
          }
          _strokeRectAtCell(s, _, l, r) {
            const u = this._coreBrowserService.dpr;
            this._ctx.lineWidth = u, this._ctx.strokeRect(s * this._deviceCellWidth + u / 2, _ * this._deviceCellHeight + u / 2, l * this._deviceCellWidth - u, r * this._deviceCellHeight - u);
          }
          _clearAll() {
            this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._themeService.colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height));
          }
          _clearCells(s, _, l, r) {
            this._alpha ? this._ctx.clearRect(s * this._deviceCellWidth, _ * this._deviceCellHeight, l * this._deviceCellWidth, r * this._deviceCellHeight) : (this._ctx.fillStyle = this._themeService.colors.background.css, this._ctx.fillRect(s * this._deviceCellWidth, _ * this._deviceCellHeight, l * this._deviceCellWidth, r * this._deviceCellHeight));
          }
          _fillCharTrueColor(s, _, l) {
            this._ctx.font = this._getFont(!1, !1), this._ctx.textBaseline = n.TEXT_BASELINE, this._clipRow(l);
            let r = !1;
            this._optionsService.rawOptions.customGlyphs !== !1 && (r = (0, o.tryDrawCustomChar)(this._ctx, s.getChars(), _ * this._deviceCellWidth, l * this._deviceCellHeight, this._deviceCellWidth, this._deviceCellHeight, this._optionsService.rawOptions.fontSize, this._coreBrowserService.dpr)), r || this._ctx.fillText(s.getChars(), _ * this._deviceCellWidth + this._deviceCharLeft, l * this._deviceCellHeight + this._deviceCharTop + this._deviceCharHeight);
          }
          _drawChars(s, _, l) {
            var r, u, C, w;
            const b = s.getChars();
            let L;
            this._cellColorResolver.resolve(s, _, this._bufferService.buffer.ydisp + l), L = b && b.length > 1 ? this._charAtlas.getRasterizedGlyphCombinedChar(b, this._cellColorResolver.result.bg, this._cellColorResolver.result.fg, this._cellColorResolver.result.ext) : this._charAtlas.getRasterizedGlyph(s.getCode() || g.WHITESPACE_CELL_CODE, this._cellColorResolver.result.bg, this._cellColorResolver.result.fg, this._cellColorResolver.result.ext), L.size.x && L.size.y && (this._ctx.save(), this._clipRow(l), this._bitmapGenerator[L.texturePage] && this._charAtlas.pages[L.texturePage].canvas !== this._bitmapGenerator[L.texturePage].canvas && ((u = (r = this._bitmapGenerator[L.texturePage]) === null || r === void 0 ? void 0 : r.bitmap) === null || u === void 0 || u.close(), delete this._bitmapGenerator[L.texturePage]), this._charAtlas.pages[L.texturePage].version !== ((C = this._bitmapGenerator[L.texturePage]) === null || C === void 0 ? void 0 : C.version) && (this._bitmapGenerator[L.texturePage] || (this._bitmapGenerator[L.texturePage] = new p(this._charAtlas.pages[L.texturePage].canvas)), this._bitmapGenerator[L.texturePage].refresh(), this._bitmapGenerator[L.texturePage].version = this._charAtlas.pages[L.texturePage].version), this._ctx.drawImage(((w = this._bitmapGenerator[L.texturePage]) === null || w === void 0 ? void 0 : w.bitmap) || this._charAtlas.pages[L.texturePage].canvas, L.texturePosition.x, L.texturePosition.y, L.size.x, L.size.y, _ * this._deviceCellWidth + this._deviceCharLeft - L.offset.x, l * this._deviceCellHeight + this._deviceCharTop - L.offset.y, L.size.x, L.size.y), this._ctx.restore());
          }
          _clipRow(s) {
            this._ctx.beginPath(), this._ctx.rect(0, s * this._deviceCellHeight, this._bufferService.cols * this._deviceCellWidth, this._deviceCellHeight), this._ctx.clip();
          }
          _getFont(s, _) {
            return `${_ ? "italic" : ""} ${s ? this._optionsService.rawOptions.fontWeightBold : this._optionsService.rawOptions.fontWeight} ${this._optionsService.rawOptions.fontSize * this._coreBrowserService.dpr}px ${this._optionsService.rawOptions.fontFamily}`;
          }
        }
        e.BaseRenderLayer = c;
        class p {
          constructor(s) {
            this.canvas = s, this._state = 0, this._commitTimeout = void 0, this._bitmap = void 0, this.version = -1;
          }
          get bitmap() {
            return this._bitmap;
          }
          refresh() {
            var s;
            (s = this._bitmap) === null || s === void 0 || s.close(), this._bitmap = void 0, x.isSafari || (this._commitTimeout === void 0 && (this._commitTimeout = window.setTimeout(() => this._generate(), 100)), this._state === 1 && (this._state = 2));
          }
          _generate() {
            var s;
            this._state === 0 && ((s = this._bitmap) === null || s === void 0 || s.close(), this._bitmap = void 0, this._state = 1, window.createImageBitmap(this.canvas).then((_) => {
              this._state === 2 ? this.refresh() : this._bitmap = _, this._state = 0;
            }), this._commitTimeout && (this._commitTimeout = void 0));
          }
        }
      }, 949: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.CanvasRenderer = void 0;
        const d = h(627), n = h(56), o = h(374), a = h(345), f = h(859), g = h(873), i = h(43), t = h(630), x = h(744);
        class v extends f.Disposable {
          constructor(p, m, s, _, l, r, u, C, w, b, L) {
            super(), this._terminal = p, this._screenElement = m, this._bufferService = _, this._charSizeService = l, this._optionsService = r, this._coreBrowserService = w, this._themeService = L, this._onRequestRedraw = this.register(new a.EventEmitter()), this.onRequestRedraw = this._onRequestRedraw.event, this._onChangeTextureAtlas = this.register(new a.EventEmitter()), this.onChangeTextureAtlas = this._onChangeTextureAtlas.event, this._onAddTextureAtlasCanvas = this.register(new a.EventEmitter()), this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event;
            const R = this._optionsService.rawOptions.allowTransparency;
            this._renderLayers = [new x.TextRenderLayer(this._terminal, this._screenElement, 0, R, this._bufferService, this._optionsService, u, b, this._coreBrowserService, L), new t.SelectionRenderLayer(this._terminal, this._screenElement, 1, this._bufferService, this._coreBrowserService, b, this._optionsService, L), new i.LinkRenderLayer(this._terminal, this._screenElement, 2, s, this._bufferService, this._optionsService, b, this._coreBrowserService, L), new g.CursorRenderLayer(this._terminal, this._screenElement, 3, this._onRequestRedraw, this._bufferService, this._optionsService, C, this._coreBrowserService, b, L)];
            for (const A of this._renderLayers)
              (0, a.forwardEvent)(A.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas);
            this.dimensions = (0, o.createRenderDimensions)(), this._devicePixelRatio = this._coreBrowserService.dpr, this._updateDimensions(), this.register((0, n.observeDevicePixelDimensions)(this._renderLayers[0].canvas, this._coreBrowserService.window, (A, y) => this._setCanvasDevicePixelDimensions(A, y))), this.register((0, f.toDisposable)(() => {
              for (const A of this._renderLayers)
                A.dispose();
              (0, d.removeTerminalFromCache)(this._terminal);
            }));
          }
          get textureAtlas() {
            return this._renderLayers[0].cacheCanvas;
          }
          handleDevicePixelRatioChange() {
            this._devicePixelRatio !== this._coreBrowserService.dpr && (this._devicePixelRatio = this._coreBrowserService.dpr, this.handleResize(this._bufferService.cols, this._bufferService.rows));
          }
          handleResize(p, m) {
            this._updateDimensions();
            for (const s of this._renderLayers)
              s.resize(this.dimensions);
            this._screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._screenElement.style.height = `${this.dimensions.css.canvas.height}px`;
          }
          handleCharSizeChanged() {
            this.handleResize(this._bufferService.cols, this._bufferService.rows);
          }
          handleBlur() {
            this._runOperation((p) => p.handleBlur());
          }
          handleFocus() {
            this._runOperation((p) => p.handleFocus());
          }
          handleSelectionChanged(p, m, s = !1) {
            this._runOperation((_) => _.handleSelectionChanged(p, m, s)), this._themeService.colors.selectionForeground && this._onRequestRedraw.fire({ start: 0, end: this._bufferService.rows - 1 });
          }
          handleCursorMove() {
            this._runOperation((p) => p.handleCursorMove());
          }
          clear() {
            this._runOperation((p) => p.reset());
          }
          _runOperation(p) {
            for (const m of this._renderLayers)
              p(m);
          }
          renderRows(p, m) {
            for (const s of this._renderLayers)
              s.handleGridChanged(p, m);
          }
          clearTextureAtlas() {
            for (const p of this._renderLayers)
              p.clearTextureAtlas();
          }
          _updateDimensions() {
            if (!this._charSizeService.hasValidSize)
              return;
            const p = this._coreBrowserService.dpr;
            this.dimensions.device.char.width = Math.floor(this._charSizeService.width * p), this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * p), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.top = this._optionsService.rawOptions.lineHeight === 1 ? 0 : Math.round((this.dimensions.device.cell.height - this.dimensions.device.char.height) / 2), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.char.left = Math.floor(this._optionsService.rawOptions.letterSpacing / 2), this.dimensions.device.canvas.height = this._bufferService.rows * this.dimensions.device.cell.height, this.dimensions.device.canvas.width = this._bufferService.cols * this.dimensions.device.cell.width, this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / p), this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / p), this.dimensions.css.cell.height = this.dimensions.css.canvas.height / this._bufferService.rows, this.dimensions.css.cell.width = this.dimensions.css.canvas.width / this._bufferService.cols;
          }
          _setCanvasDevicePixelDimensions(p, m) {
            this.dimensions.device.canvas.height = m, this.dimensions.device.canvas.width = p;
            for (const s of this._renderLayers)
              s.resize(this.dimensions);
            this._requestRedrawViewport();
          }
          _requestRedrawViewport() {
            this._onRequestRedraw.fire({ start: 0, end: this._bufferService.rows - 1 });
          }
        }
        e.CanvasRenderer = v;
      }, 873: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.CursorRenderLayer = void 0;
        const d = h(903), n = h(782), o = h(859), a = h(399);
        class f extends d.BaseRenderLayer {
          constructor(t, x, v, c, p, m, s, _, l, r) {
            super(t, x, "cursor", v, !0, r, p, m, l, _), this._onRequestRedraw = c, this._coreService = s, this._cell = new n.CellData(), this._state = { x: 0, y: 0, isFocused: !1, style: "", width: 0 }, this._cursorRenderers = { bar: this._renderBarCursor.bind(this), block: this._renderBlockCursor.bind(this), underline: this._renderUnderlineCursor.bind(this) }, this.register(m.onOptionChange(() => this._handleOptionsChanged())), this.register((0, o.toDisposable)(() => {
              var u;
              (u = this._cursorBlinkStateManager) === null || u === void 0 || u.dispose(), this._cursorBlinkStateManager = void 0;
            }));
          }
          resize(t) {
            super.resize(t), this._state = { x: 0, y: 0, isFocused: !1, style: "", width: 0 };
          }
          reset() {
            var t;
            this._clearCursor(), (t = this._cursorBlinkStateManager) === null || t === void 0 || t.restartBlinkAnimation(), this._handleOptionsChanged();
          }
          handleBlur() {
            var t;
            (t = this._cursorBlinkStateManager) === null || t === void 0 || t.pause(), this._onRequestRedraw.fire({ start: this._bufferService.buffer.y, end: this._bufferService.buffer.y });
          }
          handleFocus() {
            var t;
            (t = this._cursorBlinkStateManager) === null || t === void 0 || t.resume(), this._onRequestRedraw.fire({ start: this._bufferService.buffer.y, end: this._bufferService.buffer.y });
          }
          _handleOptionsChanged() {
            var t;
            this._optionsService.rawOptions.cursorBlink ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new g(this._coreBrowserService.isFocused, () => {
              this._render(!0);
            }, this._coreBrowserService)) : ((t = this._cursorBlinkStateManager) === null || t === void 0 || t.dispose(), this._cursorBlinkStateManager = void 0), this._onRequestRedraw.fire({ start: this._bufferService.buffer.y, end: this._bufferService.buffer.y });
          }
          handleCursorMove() {
            var t;
            (t = this._cursorBlinkStateManager) === null || t === void 0 || t.restartBlinkAnimation();
          }
          handleGridChanged(t, x) {
            !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(!1) : this._cursorBlinkStateManager.restartBlinkAnimation();
          }
          _render(t) {
            if (!this._coreService.isCursorInitialized || this._coreService.isCursorHidden)
              return void this._clearCursor();
            const x = this._bufferService.buffer.ybase + this._bufferService.buffer.y, v = x - this._bufferService.buffer.ydisp;
            if (v < 0 || v >= this._bufferService.rows)
              return void this._clearCursor();
            const c = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1);
            if (this._bufferService.buffer.lines.get(x).loadCell(c, this._cell), this._cell.content !== void 0) {
              if (!this._coreBrowserService.isFocused) {
                this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css;
                const p = this._optionsService.rawOptions.cursorStyle;
                return this._renderBlurCursor(c, v, this._cell), this._ctx.restore(), this._state.x = c, this._state.y = v, this._state.isFocused = !1, this._state.style = p, void (this._state.width = this._cell.getWidth());
              }
              if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                if (this._state) {
                  if (this._state.x === c && this._state.y === v && this._state.isFocused === this._coreBrowserService.isFocused && this._state.style === this._optionsService.rawOptions.cursorStyle && this._state.width === this._cell.getWidth())
                    return;
                  this._clearCursor();
                }
                this._ctx.save(), this._cursorRenderers[this._optionsService.rawOptions.cursorStyle || "block"](c, v, this._cell), this._ctx.restore(), this._state.x = c, this._state.y = v, this._state.isFocused = !1, this._state.style = this._optionsService.rawOptions.cursorStyle, this._state.width = this._cell.getWidth();
              } else
                this._clearCursor();
            }
          }
          _clearCursor() {
            this._state && (a.isFirefox || this._coreBrowserService.dpr < 1 ? this._clearAll() : this._clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = { x: 0, y: 0, isFocused: !1, style: "", width: 0 });
          }
          _renderBarCursor(t, x, v) {
            this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css, this._fillLeftLineAtCell(t, x, this._optionsService.rawOptions.cursorWidth), this._ctx.restore();
          }
          _renderBlockCursor(t, x, v) {
            this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css, this._fillCells(t, x, v.getWidth(), 1), this._ctx.fillStyle = this._themeService.colors.cursorAccent.css, this._fillCharTrueColor(v, t, x), this._ctx.restore();
          }
          _renderUnderlineCursor(t, x, v) {
            this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css, this._fillBottomLineAtCells(t, x), this._ctx.restore();
          }
          _renderBlurCursor(t, x, v) {
            this._ctx.save(), this._ctx.strokeStyle = this._themeService.colors.cursor.css, this._strokeRectAtCell(t, x, v.getWidth(), 1), this._ctx.restore();
          }
        }
        e.CursorRenderLayer = f;
        class g {
          constructor(t, x, v) {
            this._renderCallback = x, this._coreBrowserService = v, this.isCursorVisible = !0, t && this._restartInterval();
          }
          get isPaused() {
            return !(this._blinkStartTimeout || this._blinkInterval);
          }
          dispose() {
            this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (this._coreBrowserService.window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
          }
          restartBlinkAnimation() {
            this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = !0, this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
              this._renderCallback(), this._animationFrame = void 0;
            })));
          }
          _restartInterval(t = 600) {
            this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout = this._coreBrowserService.window.setTimeout(() => {
              if (this._animationTimeRestarted) {
                const x = 600 - (Date.now() - this._animationTimeRestarted);
                if (this._animationTimeRestarted = void 0, x > 0)
                  return void this._restartInterval(x);
              }
              this.isCursorVisible = !1, this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
                this._renderCallback(), this._animationFrame = void 0;
              }), this._blinkInterval = this._coreBrowserService.window.setInterval(() => {
                if (this._animationTimeRestarted) {
                  const x = 600 - (Date.now() - this._animationTimeRestarted);
                  return this._animationTimeRestarted = void 0, void this._restartInterval(x);
                }
                this.isCursorVisible = !this.isCursorVisible, this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
                  this._renderCallback(), this._animationFrame = void 0;
                });
              }, 600);
            }, t);
          }
          pause() {
            this.isCursorVisible = !0, this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (this._coreBrowserService.window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
          }
          resume() {
            this.pause(), this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation();
          }
        }
      }, 574: (k, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.GridCache = void 0, e.GridCache = class {
          constructor() {
            this.cache = [];
          }
          resize(h, d) {
            for (let n = 0; n < h; n++) {
              this.cache.length <= n && this.cache.push([]);
              for (let o = this.cache[n].length; o < d; o++)
                this.cache[n].push(void 0);
              this.cache[n].length = d;
            }
            this.cache.length = h;
          }
          clear() {
            for (let h = 0; h < this.cache.length; h++)
              for (let d = 0; d < this.cache[h].length; d++)
                this.cache[h][d] = void 0;
          }
        };
      }, 43: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.LinkRenderLayer = void 0;
        const d = h(903), n = h(237), o = h(197);
        class a extends d.BaseRenderLayer {
          constructor(g, i, t, x, v, c, p, m, s) {
            super(g, i, "link", t, !0, s, v, c, p, m), this.register(x.onShowLinkUnderline((_) => this._handleShowLinkUnderline(_))), this.register(x.onHideLinkUnderline((_) => this._handleHideLinkUnderline(_)));
          }
          resize(g) {
            super.resize(g), this._state = void 0;
          }
          reset() {
            this._clearCurrentLink();
          }
          _clearCurrentLink() {
            if (this._state) {
              this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
              const g = this._state.y2 - this._state.y1 - 1;
              g > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, g), this._clearCells(0, this._state.y2, this._state.x2, 1), this._state = void 0;
            }
          }
          _handleShowLinkUnderline(g) {
            if (g.fg === n.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._themeService.colors.background.css : g.fg && (0, o.is256Color)(g.fg) ? this._ctx.fillStyle = this._themeService.colors.ansi[g.fg].css : this._ctx.fillStyle = this._themeService.colors.foreground.css, g.y1 === g.y2)
              this._fillBottomLineAtCells(g.x1, g.y1, g.x2 - g.x1);
            else {
              this._fillBottomLineAtCells(g.x1, g.y1, g.cols - g.x1);
              for (let i = g.y1 + 1; i < g.y2; i++)
                this._fillBottomLineAtCells(0, i, g.cols);
              this._fillBottomLineAtCells(0, g.y2, g.x2);
            }
            this._state = g;
          }
          _handleHideLinkUnderline(g) {
            this._clearCurrentLink();
          }
        }
        e.LinkRenderLayer = a;
      }, 630: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.SelectionRenderLayer = void 0;
        const d = h(903);
        class n extends d.BaseRenderLayer {
          constructor(a, f, g, i, t, x, v, c) {
            super(a, f, "selection", g, !0, c, i, v, x, t), this._clearState();
          }
          _clearState() {
            this._state = { start: void 0, end: void 0, columnSelectMode: void 0, ydisp: void 0 };
          }
          resize(a) {
            super.resize(a), this._selectionModel.selectionStart && this._selectionModel.selectionEnd && (this._clearState(), this._redrawSelection(this._selectionModel.selectionStart, this._selectionModel.selectionEnd, this._selectionModel.columnSelectMode));
          }
          reset() {
            this._state.start && this._state.end && (this._clearState(), this._clearAll());
          }
          handleBlur() {
            this.reset(), this._redrawSelection(this._selectionModel.selectionStart, this._selectionModel.selectionEnd, this._selectionModel.columnSelectMode);
          }
          handleFocus() {
            this.reset(), this._redrawSelection(this._selectionModel.selectionStart, this._selectionModel.selectionEnd, this._selectionModel.columnSelectMode);
          }
          handleSelectionChanged(a, f, g) {
            super.handleSelectionChanged(a, f, g), this._redrawSelection(a, f, g);
          }
          _redrawSelection(a, f, g) {
            if (!this._didStateChange(a, f, g, this._bufferService.buffer.ydisp))
              return;
            if (this._clearAll(), !a || !f)
              return void this._clearState();
            const i = a[1] - this._bufferService.buffer.ydisp, t = f[1] - this._bufferService.buffer.ydisp, x = Math.max(i, 0), v = Math.min(t, this._bufferService.rows - 1);
            if (x >= this._bufferService.rows || v < 0)
              this._state.ydisp = this._bufferService.buffer.ydisp;
            else {
              if (this._ctx.fillStyle = (this._coreBrowserService.isFocused ? this._themeService.colors.selectionBackgroundTransparent : this._themeService.colors.selectionInactiveBackgroundTransparent).css, g) {
                const c = a[0], p = f[0] - c, m = v - x + 1;
                this._fillCells(c, x, p, m);
              } else {
                const c = i === x ? a[0] : 0, p = x === t ? f[0] : this._bufferService.cols;
                this._fillCells(c, x, p - c, 1);
                const m = Math.max(v - x - 1, 0);
                if (this._fillCells(0, x + 1, this._bufferService.cols, m), x !== v) {
                  const s = t === v ? f[0] : this._bufferService.cols;
                  this._fillCells(0, v, s, 1);
                }
              }
              this._state.start = [a[0], a[1]], this._state.end = [f[0], f[1]], this._state.columnSelectMode = g, this._state.ydisp = this._bufferService.buffer.ydisp;
            }
          }
          _didStateChange(a, f, g, i) {
            return !this._areCoordinatesEqual(a, this._state.start) || !this._areCoordinatesEqual(f, this._state.end) || g !== this._state.columnSelectMode || i !== this._state.ydisp;
          }
          _areCoordinatesEqual(a, f) {
            return !(!a || !f) && a[0] === f[0] && a[1] === f[1];
          }
        }
        e.SelectionRenderLayer = n;
      }, 744: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.TextRenderLayer = void 0;
        const d = h(574), n = h(903), o = h(147), a = h(855), f = h(782), g = h(577);
        class i extends n.BaseRenderLayer {
          constructor(x, v, c, p, m, s, _, l, r, u) {
            super(x, v, "text", c, p, u, m, s, l, r), this._characterJoinerService = _, this._characterWidth = 0, this._characterFont = "", this._characterOverlapCache = {}, this._workCell = new f.CellData(), this._state = new d.GridCache(), this.register(s.onSpecificOptionChange("allowTransparency", (C) => this._setTransparency(C)));
          }
          resize(x) {
            super.resize(x);
            const v = this._getFont(!1, !1);
            this._characterWidth === x.device.char.width && this._characterFont === v || (this._characterWidth = x.device.char.width, this._characterFont = v, this._characterOverlapCache = {}), this._state.clear(), this._state.resize(this._bufferService.cols, this._bufferService.rows);
          }
          reset() {
            this._state.clear(), this._clearAll();
          }
          _forEachCell(x, v, c) {
            for (let p = x; p <= v; p++) {
              const m = p + this._bufferService.buffer.ydisp, s = this._bufferService.buffer.lines.get(m), _ = this._characterJoinerService.getJoinedCharacters(m);
              for (let l = 0; l < this._bufferService.cols; l++) {
                s.loadCell(l, this._workCell);
                let r = this._workCell, u = !1, C = l;
                if (r.getWidth() !== 0) {
                  if (_.length > 0 && l === _[0][0]) {
                    u = !0;
                    const w = _.shift();
                    r = new g.JoinedCellData(this._workCell, s.translateToString(!0, w[0], w[1]), w[1] - w[0]), C = w[1] - 1;
                  }
                  !u && this._isOverlapping(r) && C < s.length - 1 && s.getCodePoint(C + 1) === a.NULL_CELL_CODE && (r.content &= -12582913, r.content |= 8388608), c(r, l, p), l = C;
                }
              }
            }
          }
          _drawBackground(x, v) {
            const c = this._ctx, p = this._bufferService.cols;
            let m = 0, s = 0, _ = null;
            c.save(), this._forEachCell(x, v, (l, r, u) => {
              let C = null;
              l.isInverse() ? C = l.isFgDefault() ? this._themeService.colors.foreground.css : l.isFgRGB() ? `rgb(${o.AttributeData.toColorRGB(l.getFgColor()).join(",")})` : this._themeService.colors.ansi[l.getFgColor()].css : l.isBgRGB() ? C = `rgb(${o.AttributeData.toColorRGB(l.getBgColor()).join(",")})` : l.isBgPalette() && (C = this._themeService.colors.ansi[l.getBgColor()].css);
              let w = !1;
              this._decorationService.forEachDecorationAtCell(r, this._bufferService.buffer.ydisp + u, void 0, (b) => {
                b.options.layer !== "top" && w || (b.backgroundColorRGB && (C = b.backgroundColorRGB.css), w = b.options.layer === "top");
              }), _ === null && (m = r, s = u), u !== s ? (c.fillStyle = _ || "", this._fillCells(m, s, p - m, 1), m = r, s = u) : _ !== C && (c.fillStyle = _ || "", this._fillCells(m, s, r - m, 1), m = r, s = u), _ = C;
            }), _ !== null && (c.fillStyle = _, this._fillCells(m, s, p - m, 1)), c.restore();
          }
          _drawForeground(x, v) {
            this._forEachCell(x, v, (c, p, m) => this._drawChars(c, p, m));
          }
          handleGridChanged(x, v) {
            this._state.cache.length !== 0 && (this._charAtlas && this._charAtlas.beginFrame(), this._clearCells(0, x, this._bufferService.cols, v - x + 1), this._drawBackground(x, v), this._drawForeground(x, v));
          }
          _isOverlapping(x) {
            if (x.getWidth() !== 1 || x.getCode() < 256)
              return !1;
            const v = x.getChars();
            if (this._characterOverlapCache.hasOwnProperty(v))
              return this._characterOverlapCache[v];
            this._ctx.save(), this._ctx.font = this._characterFont;
            const c = Math.floor(this._ctx.measureText(v).width) > this._characterWidth;
            return this._ctx.restore(), this._characterOverlapCache[v] = c, c;
          }
        }
        e.TextRenderLayer = i;
      }, 274: (k, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.CellColorResolver = void 0;
        let h, d = 0, n = 0, o = !1, a = !1, f = !1;
        e.CellColorResolver = class {
          constructor(g, i, t, x, v) {
            this._terminal = g, this._selectionRenderModel = i, this._decorationService = t, this._coreBrowserService = x, this._themeService = v, this.result = { fg: 0, bg: 0, ext: 0 };
          }
          resolve(g, i, t) {
            this.result.bg = g.bg, this.result.fg = g.fg, this.result.ext = 268435456 & g.bg ? g.extended.ext : 0, n = 0, d = 0, a = !1, o = !1, f = !1, h = this._themeService.colors, this._decorationService.forEachDecorationAtCell(i, t, "bottom", (x) => {
              x.backgroundColorRGB && (n = x.backgroundColorRGB.rgba >> 8 & 16777215, a = !0), x.foregroundColorRGB && (d = x.foregroundColorRGB.rgba >> 8 & 16777215, o = !0);
            }), f = this._selectionRenderModel.isCellSelected(this._terminal, i, t), f && (n = (this._coreBrowserService.isFocused ? h.selectionBackgroundOpaque : h.selectionInactiveBackgroundOpaque).rgba >> 8 & 16777215, a = !0, h.selectionForeground && (d = h.selectionForeground.rgba >> 8 & 16777215, o = !0)), this._decorationService.forEachDecorationAtCell(i, t, "top", (x) => {
              x.backgroundColorRGB && (n = x.backgroundColorRGB.rgba >> 8 & 16777215, a = !0), x.foregroundColorRGB && (d = x.foregroundColorRGB.rgba >> 8 & 16777215, o = !0);
            }), a && (n = f ? -16777216 & g.bg & -134217729 | n | 50331648 : -16777216 & g.bg | n | 50331648), o && (d = -16777216 & g.fg & -67108865 | d | 50331648), 67108864 & this.result.fg && (a && !o && (d = 50331648 & this.result.bg ? -134217728 & this.result.fg | 67108863 & this.result.bg : -134217728 & this.result.fg | 16777215 & h.background.rgba >> 8 | 50331648, o = !0), !a && o && (n = 50331648 & this.result.fg ? -67108864 & this.result.bg | 67108863 & this.result.fg : -67108864 & this.result.bg | 16777215 & h.foreground.rgba >> 8 | 50331648, a = !0)), h = void 0, this.result.bg = a ? n : this.result.bg, this.result.fg = o ? d : this.result.fg;
          }
        };
      }, 627: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.removeTerminalFromCache = e.acquireTextureAtlas = void 0;
        const d = h(509), n = h(197), o = [];
        e.acquireTextureAtlas = function(a, f, g, i, t, x, v, c) {
          const p = (0, n.generateConfig)(i, t, x, v, f, g, c);
          for (let _ = 0; _ < o.length; _++) {
            const l = o[_], r = l.ownedBy.indexOf(a);
            if (r >= 0) {
              if ((0, n.configEquals)(l.config, p))
                return l.atlas;
              l.ownedBy.length === 1 ? (l.atlas.dispose(), o.splice(_, 1)) : l.ownedBy.splice(r, 1);
              break;
            }
          }
          for (let _ = 0; _ < o.length; _++) {
            const l = o[_];
            if ((0, n.configEquals)(l.config, p))
              return l.ownedBy.push(a), l.atlas;
          }
          const m = a._core, s = { atlas: new d.TextureAtlas(document, p, m.unicodeService), config: p, ownedBy: [a] };
          return o.push(s), s.atlas;
        }, e.removeTerminalFromCache = function(a) {
          for (let f = 0; f < o.length; f++) {
            const g = o[f].ownedBy.indexOf(a);
            if (g !== -1) {
              o[f].ownedBy.length === 1 ? (o[f].atlas.dispose(), o.splice(f, 1)) : o[f].ownedBy.splice(g, 1);
              break;
            }
          }
        };
      }, 197: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.is256Color = e.configEquals = e.generateConfig = void 0;
        const d = h(160);
        e.generateConfig = function(n, o, a, f, g, i, t) {
          const x = { foreground: i.foreground, background: i.background, cursor: d.NULL_COLOR, cursorAccent: d.NULL_COLOR, selectionForeground: d.NULL_COLOR, selectionBackgroundTransparent: d.NULL_COLOR, selectionBackgroundOpaque: d.NULL_COLOR, selectionInactiveBackgroundTransparent: d.NULL_COLOR, selectionInactiveBackgroundOpaque: d.NULL_COLOR, ansi: i.ansi.slice(), contrastCache: i.contrastCache };
          return { customGlyphs: g.customGlyphs, devicePixelRatio: t, letterSpacing: g.letterSpacing, lineHeight: g.lineHeight, deviceCellWidth: n, deviceCellHeight: o, deviceCharWidth: a, deviceCharHeight: f, fontFamily: g.fontFamily, fontSize: g.fontSize, fontWeight: g.fontWeight, fontWeightBold: g.fontWeightBold, allowTransparency: g.allowTransparency, drawBoldTextInBrightColors: g.drawBoldTextInBrightColors, minimumContrastRatio: g.minimumContrastRatio, colors: x };
        }, e.configEquals = function(n, o) {
          for (let a = 0; a < n.colors.ansi.length; a++)
            if (n.colors.ansi[a].rgba !== o.colors.ansi[a].rgba)
              return !1;
          return n.devicePixelRatio === o.devicePixelRatio && n.customGlyphs === o.customGlyphs && n.lineHeight === o.lineHeight && n.letterSpacing === o.letterSpacing && n.fontFamily === o.fontFamily && n.fontSize === o.fontSize && n.fontWeight === o.fontWeight && n.fontWeightBold === o.fontWeightBold && n.allowTransparency === o.allowTransparency && n.deviceCharWidth === o.deviceCharWidth && n.deviceCharHeight === o.deviceCharHeight && n.drawBoldTextInBrightColors === o.drawBoldTextInBrightColors && n.minimumContrastRatio === o.minimumContrastRatio && n.colors.foreground.rgba === o.colors.foreground.rgba && n.colors.background.rgba === o.colors.background.rgba;
        }, e.is256Color = function(n) {
          return (50331648 & n) == 16777216 || (50331648 & n) == 33554432;
        };
      }, 237: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.TEXT_BASELINE = e.DIM_OPACITY = e.INVERTED_DEFAULT_COLOR = void 0;
        const d = h(399);
        e.INVERTED_DEFAULT_COLOR = 257, e.DIM_OPACITY = 0.5, e.TEXT_BASELINE = d.isFirefox || d.isLegacyEdge ? "bottom" : "ideographic";
      }, 860: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.tryDrawCustomChar = e.powerlineDefinitions = e.boxDrawingDefinitions = e.blockElementDefinitions = void 0;
        const d = h(374);
        e.blockElementDefinitions = { "▀": [{ x: 0, y: 0, w: 8, h: 4 }], "▁": [{ x: 0, y: 7, w: 8, h: 1 }], "▂": [{ x: 0, y: 6, w: 8, h: 2 }], "▃": [{ x: 0, y: 5, w: 8, h: 3 }], "▄": [{ x: 0, y: 4, w: 8, h: 4 }], "▅": [{ x: 0, y: 3, w: 8, h: 5 }], "▆": [{ x: 0, y: 2, w: 8, h: 6 }], "▇": [{ x: 0, y: 1, w: 8, h: 7 }], "█": [{ x: 0, y: 0, w: 8, h: 8 }], "▉": [{ x: 0, y: 0, w: 7, h: 8 }], "▊": [{ x: 0, y: 0, w: 6, h: 8 }], "▋": [{ x: 0, y: 0, w: 5, h: 8 }], "▌": [{ x: 0, y: 0, w: 4, h: 8 }], "▍": [{ x: 0, y: 0, w: 3, h: 8 }], "▎": [{ x: 0, y: 0, w: 2, h: 8 }], "▏": [{ x: 0, y: 0, w: 1, h: 8 }], "▐": [{ x: 4, y: 0, w: 4, h: 8 }], "▔": [{ x: 0, y: 0, w: 8, h: 1 }], "▕": [{ x: 7, y: 0, w: 1, h: 8 }], "▖": [{ x: 0, y: 4, w: 4, h: 4 }], "▗": [{ x: 4, y: 4, w: 4, h: 4 }], "▘": [{ x: 0, y: 0, w: 4, h: 4 }], "▙": [{ x: 0, y: 0, w: 4, h: 8 }, { x: 0, y: 4, w: 8, h: 4 }], "▚": [{ x: 0, y: 0, w: 4, h: 4 }, { x: 4, y: 4, w: 4, h: 4 }], "▛": [{ x: 0, y: 0, w: 4, h: 8 }, { x: 4, y: 0, w: 4, h: 4 }], "▜": [{ x: 0, y: 0, w: 8, h: 4 }, { x: 4, y: 0, w: 4, h: 8 }], "▝": [{ x: 4, y: 0, w: 4, h: 4 }], "▞": [{ x: 4, y: 0, w: 4, h: 4 }, { x: 0, y: 4, w: 4, h: 4 }], "▟": [{ x: 4, y: 0, w: 4, h: 8 }, { x: 0, y: 4, w: 8, h: 4 }], "🭰": [{ x: 1, y: 0, w: 1, h: 8 }], "🭱": [{ x: 2, y: 0, w: 1, h: 8 }], "🭲": [{ x: 3, y: 0, w: 1, h: 8 }], "🭳": [{ x: 4, y: 0, w: 1, h: 8 }], "🭴": [{ x: 5, y: 0, w: 1, h: 8 }], "🭵": [{ x: 6, y: 0, w: 1, h: 8 }], "🭶": [{ x: 0, y: 1, w: 8, h: 1 }], "🭷": [{ x: 0, y: 2, w: 8, h: 1 }], "🭸": [{ x: 0, y: 3, w: 8, h: 1 }], "🭹": [{ x: 0, y: 4, w: 8, h: 1 }], "🭺": [{ x: 0, y: 5, w: 8, h: 1 }], "🭻": [{ x: 0, y: 6, w: 8, h: 1 }], "🭼": [{ x: 0, y: 0, w: 1, h: 8 }, { x: 0, y: 7, w: 8, h: 1 }], "🭽": [{ x: 0, y: 0, w: 1, h: 8 }, { x: 0, y: 0, w: 8, h: 1 }], "🭾": [{ x: 7, y: 0, w: 1, h: 8 }, { x: 0, y: 0, w: 8, h: 1 }], "🭿": [{ x: 7, y: 0, w: 1, h: 8 }, { x: 0, y: 7, w: 8, h: 1 }], "🮀": [{ x: 0, y: 0, w: 8, h: 1 }, { x: 0, y: 7, w: 8, h: 1 }], "🮁": [{ x: 0, y: 0, w: 8, h: 1 }, { x: 0, y: 2, w: 8, h: 1 }, { x: 0, y: 4, w: 8, h: 1 }, { x: 0, y: 7, w: 8, h: 1 }], "🮂": [{ x: 0, y: 0, w: 8, h: 2 }], "🮃": [{ x: 0, y: 0, w: 8, h: 3 }], "🮄": [{ x: 0, y: 0, w: 8, h: 5 }], "🮅": [{ x: 0, y: 0, w: 8, h: 6 }], "🮆": [{ x: 0, y: 0, w: 8, h: 7 }], "🮇": [{ x: 6, y: 0, w: 2, h: 8 }], "🮈": [{ x: 5, y: 0, w: 3, h: 8 }], "🮉": [{ x: 3, y: 0, w: 5, h: 8 }], "🮊": [{ x: 2, y: 0, w: 6, h: 8 }], "🮋": [{ x: 1, y: 0, w: 7, h: 8 }], "🮕": [{ x: 0, y: 0, w: 2, h: 2 }, { x: 4, y: 0, w: 2, h: 2 }, { x: 2, y: 2, w: 2, h: 2 }, { x: 6, y: 2, w: 2, h: 2 }, { x: 0, y: 4, w: 2, h: 2 }, { x: 4, y: 4, w: 2, h: 2 }, { x: 2, y: 6, w: 2, h: 2 }, { x: 6, y: 6, w: 2, h: 2 }], "🮖": [{ x: 2, y: 0, w: 2, h: 2 }, { x: 6, y: 0, w: 2, h: 2 }, { x: 0, y: 2, w: 2, h: 2 }, { x: 4, y: 2, w: 2, h: 2 }, { x: 2, y: 4, w: 2, h: 2 }, { x: 6, y: 4, w: 2, h: 2 }, { x: 0, y: 6, w: 2, h: 2 }, { x: 4, y: 6, w: 2, h: 2 }], "🮗": [{ x: 0, y: 2, w: 8, h: 2 }, { x: 0, y: 6, w: 8, h: 2 }] };
        const n = { "░": [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]], "▒": [[1, 0], [0, 0], [0, 1], [0, 0]], "▓": [[0, 1], [1, 1], [1, 0], [1, 1]] };
        e.boxDrawingDefinitions = { "─": { 1: "M0,.5 L1,.5" }, "━": { 3: "M0,.5 L1,.5" }, "│": { 1: "M.5,0 L.5,1" }, "┃": { 3: "M.5,0 L.5,1" }, "┌": { 1: "M0.5,1 L.5,.5 L1,.5" }, "┏": { 3: "M0.5,1 L.5,.5 L1,.5" }, "┐": { 1: "M0,.5 L.5,.5 L.5,1" }, "┓": { 3: "M0,.5 L.5,.5 L.5,1" }, "└": { 1: "M.5,0 L.5,.5 L1,.5" }, "┗": { 3: "M.5,0 L.5,.5 L1,.5" }, "┘": { 1: "M.5,0 L.5,.5 L0,.5" }, "┛": { 3: "M.5,0 L.5,.5 L0,.5" }, "├": { 1: "M.5,0 L.5,1 M.5,.5 L1,.5" }, "┣": { 3: "M.5,0 L.5,1 M.5,.5 L1,.5" }, "┤": { 1: "M.5,0 L.5,1 M.5,.5 L0,.5" }, "┫": { 3: "M.5,0 L.5,1 M.5,.5 L0,.5" }, "┬": { 1: "M0,.5 L1,.5 M.5,.5 L.5,1" }, "┳": { 3: "M0,.5 L1,.5 M.5,.5 L.5,1" }, "┴": { 1: "M0,.5 L1,.5 M.5,.5 L.5,0" }, "┻": { 3: "M0,.5 L1,.5 M.5,.5 L.5,0" }, "┼": { 1: "M0,.5 L1,.5 M.5,0 L.5,1" }, "╋": { 3: "M0,.5 L1,.5 M.5,0 L.5,1" }, "╴": { 1: "M.5,.5 L0,.5" }, "╸": { 3: "M.5,.5 L0,.5" }, "╵": { 1: "M.5,.5 L.5,0" }, "╹": { 3: "M.5,.5 L.5,0" }, "╶": { 1: "M.5,.5 L1,.5" }, "╺": { 3: "M.5,.5 L1,.5" }, "╷": { 1: "M.5,.5 L.5,1" }, "╻": { 3: "M.5,.5 L.5,1" }, "═": { 1: (i, t) => `M0,${0.5 - t} L1,${0.5 - t} M0,${0.5 + t} L1,${0.5 + t}` }, "║": { 1: (i, t) => `M${0.5 - i},0 L${0.5 - i},1 M${0.5 + i},0 L${0.5 + i},1` }, "╒": { 1: (i, t) => `M.5,1 L.5,${0.5 - t} L1,${0.5 - t} M.5,${0.5 + t} L1,${0.5 + t}` }, "╓": { 1: (i, t) => `M${0.5 - i},1 L${0.5 - i},.5 L1,.5 M${0.5 + i},.5 L${0.5 + i},1` }, "╔": { 1: (i, t) => `M1,${0.5 - t} L${0.5 - i},${0.5 - t} L${0.5 - i},1 M1,${0.5 + t} L${0.5 + i},${0.5 + t} L${0.5 + i},1` }, "╕": { 1: (i, t) => `M0,${0.5 - t} L.5,${0.5 - t} L.5,1 M0,${0.5 + t} L.5,${0.5 + t}` }, "╖": { 1: (i, t) => `M${0.5 + i},1 L${0.5 + i},.5 L0,.5 M${0.5 - i},.5 L${0.5 - i},1` }, "╗": { 1: (i, t) => `M0,${0.5 + t} L${0.5 - i},${0.5 + t} L${0.5 - i},1 M0,${0.5 - t} L${0.5 + i},${0.5 - t} L${0.5 + i},1` }, "╘": { 1: (i, t) => `M.5,0 L.5,${0.5 + t} L1,${0.5 + t} M.5,${0.5 - t} L1,${0.5 - t}` }, "╙": { 1: (i, t) => `M1,.5 L${0.5 - i},.5 L${0.5 - i},0 M${0.5 + i},.5 L${0.5 + i},0` }, "╚": { 1: (i, t) => `M1,${0.5 - t} L${0.5 + i},${0.5 - t} L${0.5 + i},0 M1,${0.5 + t} L${0.5 - i},${0.5 + t} L${0.5 - i},0` }, "╛": { 1: (i, t) => `M0,${0.5 + t} L.5,${0.5 + t} L.5,0 M0,${0.5 - t} L.5,${0.5 - t}` }, "╜": { 1: (i, t) => `M0,.5 L${0.5 + i},.5 L${0.5 + i},0 M${0.5 - i},.5 L${0.5 - i},0` }, "╝": { 1: (i, t) => `M0,${0.5 - t} L${0.5 - i},${0.5 - t} L${0.5 - i},0 M0,${0.5 + t} L${0.5 + i},${0.5 + t} L${0.5 + i},0` }, "╞": { 1: (i, t) => `M.5,0 L.5,1 M.5,${0.5 - t} L1,${0.5 - t} M.5,${0.5 + t} L1,${0.5 + t}` }, "╟": { 1: (i, t) => `M${0.5 - i},0 L${0.5 - i},1 M${0.5 + i},0 L${0.5 + i},1 M${0.5 + i},.5 L1,.5` }, "╠": { 1: (i, t) => `M${0.5 - i},0 L${0.5 - i},1 M1,${0.5 + t} L${0.5 + i},${0.5 + t} L${0.5 + i},1 M1,${0.5 - t} L${0.5 + i},${0.5 - t} L${0.5 + i},0` }, "╡": { 1: (i, t) => `M.5,0 L.5,1 M0,${0.5 - t} L.5,${0.5 - t} M0,${0.5 + t} L.5,${0.5 + t}` }, "╢": { 1: (i, t) => `M0,.5 L${0.5 - i},.5 M${0.5 - i},0 L${0.5 - i},1 M${0.5 + i},0 L${0.5 + i},1` }, "╣": { 1: (i, t) => `M${0.5 + i},0 L${0.5 + i},1 M0,${0.5 + t} L${0.5 - i},${0.5 + t} L${0.5 - i},1 M0,${0.5 - t} L${0.5 - i},${0.5 - t} L${0.5 - i},0` }, "╤": { 1: (i, t) => `M0,${0.5 - t} L1,${0.5 - t} M0,${0.5 + t} L1,${0.5 + t} M.5,${0.5 + t} L.5,1` }, "╥": { 1: (i, t) => `M0,.5 L1,.5 M${0.5 - i},.5 L${0.5 - i},1 M${0.5 + i},.5 L${0.5 + i},1` }, "╦": { 1: (i, t) => `M0,${0.5 - t} L1,${0.5 - t} M0,${0.5 + t} L${0.5 - i},${0.5 + t} L${0.5 - i},1 M1,${0.5 + t} L${0.5 + i},${0.5 + t} L${0.5 + i},1` }, "╧": { 1: (i, t) => `M.5,0 L.5,${0.5 - t} M0,${0.5 - t} L1,${0.5 - t} M0,${0.5 + t} L1,${0.5 + t}` }, "╨": { 1: (i, t) => `M0,.5 L1,.5 M${0.5 - i},.5 L${0.5 - i},0 M${0.5 + i},.5 L${0.5 + i},0` }, "╩": { 1: (i, t) => `M0,${0.5 + t} L1,${0.5 + t} M0,${0.5 - t} L${0.5 - i},${0.5 - t} L${0.5 - i},0 M1,${0.5 - t} L${0.5 + i},${0.5 - t} L${0.5 + i},0` }, "╪": { 1: (i, t) => `M.5,0 L.5,1 M0,${0.5 - t} L1,${0.5 - t} M0,${0.5 + t} L1,${0.5 + t}` }, "╫": { 1: (i, t) => `M0,.5 L1,.5 M${0.5 - i},0 L${0.5 - i},1 M${0.5 + i},0 L${0.5 + i},1` }, "╬": { 1: (i, t) => `M0,${0.5 + t} L${0.5 - i},${0.5 + t} L${0.5 - i},1 M1,${0.5 + t} L${0.5 + i},${0.5 + t} L${0.5 + i},1 M0,${0.5 - t} L${0.5 - i},${0.5 - t} L${0.5 - i},0 M1,${0.5 - t} L${0.5 + i},${0.5 - t} L${0.5 + i},0` }, "╱": { 1: "M1,0 L0,1" }, "╲": { 1: "M0,0 L1,1" }, "╳": { 1: "M1,0 L0,1 M0,0 L1,1" }, "╼": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L1,.5" }, "╽": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L.5,1" }, "╾": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "╿": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L.5,0" }, "┍": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L1,.5" }, "┎": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "┑": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L0,.5" }, "┒": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L.5,1" }, "┕": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L1,.5" }, "┖": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L.5,0" }, "┙": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L0,.5" }, "┚": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L.5,0" }, "┝": { 1: "M.5,0 L.5,1", 3: "M.5,.5 L1,.5" }, "┞": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,.5 L.5,0" }, "┟": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "┠": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,1" }, "┡": { 1: "M.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L1,.5" }, "┢": { 1: "M.5,.5 L.5,0", 3: "M0.5,1 L.5,.5 L1,.5" }, "┥": { 1: "M.5,0 L.5,1", 3: "M.5,.5 L0,.5" }, "┦": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,.5 L.5,0" }, "┧": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M.5,.5 L.5,1" }, "┨": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,1" }, "┩": { 1: "M.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L0,.5" }, "┪": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L.5,.5 L.5,1" }, "┭": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "┮": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,.5 L1,.5" }, "┯": { 1: "M.5,.5 L.5,1", 3: "M0,.5 L1,.5" }, "┰": { 1: "M0,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "┱": { 1: "M.5,.5 L1,.5", 3: "M0,.5 L.5,.5 L.5,1" }, "┲": { 1: "M.5,.5 L0,.5", 3: "M0.5,1 L.5,.5 L1,.5" }, "┵": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "┶": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M.5,.5 L1,.5" }, "┷": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L1,.5" }, "┸": { 1: "M0,.5 L1,.5", 3: "M.5,.5 L.5,0" }, "┹": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,.5 L0,.5" }, "┺": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,.5 L1,.5" }, "┽": { 1: "M.5,0 L.5,1 M.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "┾": { 1: "M.5,0 L.5,1 M.5,.5 L0,.5", 3: "M.5,.5 L1,.5" }, "┿": { 1: "M.5,0 L.5,1", 3: "M0,.5 L1,.5" }, "╀": { 1: "M0,.5 L1,.5 M.5,.5 L.5,1", 3: "M.5,.5 L.5,0" }, "╁": { 1: "M.5,.5 L.5,0 M0,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "╂": { 1: "M0,.5 L1,.5", 3: "M.5,0 L.5,1" }, "╃": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,0 L.5,.5 L0,.5" }, "╄": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L1,.5" }, "╅": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M0,.5 L.5,.5 L.5,1" }, "╆": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M0.5,1 L.5,.5 L1,.5" }, "╇": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L.5,0 M0,.5 L1,.5" }, "╈": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L1,.5 M.5,.5 L.5,1" }, "╉": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,1 M.5,.5 L0,.5" }, "╊": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,1 M.5,.5 L1,.5" }, "╌": { 1: "M.1,.5 L.4,.5 M.6,.5 L.9,.5" }, "╍": { 3: "M.1,.5 L.4,.5 M.6,.5 L.9,.5" }, "┄": { 1: "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5" }, "┅": { 3: "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5" }, "┈": { 1: "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5" }, "┉": { 3: "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5" }, "╎": { 1: "M.5,.1 L.5,.4 M.5,.6 L.5,.9" }, "╏": { 3: "M.5,.1 L.5,.4 M.5,.6 L.5,.9" }, "┆": { 1: "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333" }, "┇": { 3: "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333" }, "┊": { 1: "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95" }, "┋": { 3: "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95" }, "╭": { 1: (i, t) => `M.5,1 L.5,${0.5 + t / 0.15 * 0.5} C.5,${0.5 + t / 0.15 * 0.5},.5,.5,1,.5` }, "╮": { 1: (i, t) => `M.5,1 L.5,${0.5 + t / 0.15 * 0.5} C.5,${0.5 + t / 0.15 * 0.5},.5,.5,0,.5` }, "╯": { 1: (i, t) => `M.5,0 L.5,${0.5 - t / 0.15 * 0.5} C.5,${0.5 - t / 0.15 * 0.5},.5,.5,0,.5` }, "╰": { 1: (i, t) => `M.5,0 L.5,${0.5 - t / 0.15 * 0.5} C.5,${0.5 - t / 0.15 * 0.5},.5,.5,1,.5` } }, e.powerlineDefinitions = { "": { d: "M0,0 L1,.5 L0,1", type: 0, rightPadding: 2 }, "": { d: "M-1,-.5 L1,.5 L-1,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "": { d: "M1,0 L0,.5 L1,1", type: 0, leftPadding: 2 }, "": { d: "M2,-.5 L0,.5 L2,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "": { d: "M0,0 L0,1 C0.552,1,1,0.776,1,.5 C1,0.224,0.552,0,0,0", type: 0, rightPadding: 1 }, "": { d: "M0,1 C0.552,1,1,0.776,1,.5 C1,0.224,0.552,0,0,0", type: 1, rightPadding: 1 }, "": { d: "M1,0 L1,1 C0.448,1,0,0.776,0,.5 C0,0.224,0.448,0,1,0", type: 0, leftPadding: 1 }, "": { d: "M1,1 C0.448,1,0,0.776,0,.5 C0,0.224,0.448,0,1,0", type: 1, leftPadding: 1 }, "": { d: "M-.5,-.5 L1.5,1.5 L-.5,1.5", type: 0 }, "": { d: "M-.5,-.5 L1.5,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "": { d: "M1.5,-.5 L-.5,1.5 L1.5,1.5", type: 0 }, "": { d: "M1.5,-.5 L-.5,1.5 L-.5,-.5", type: 0 }, "": { d: "M1.5,-.5 L-.5,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "": { d: "M-.5,-.5 L1.5,1.5 L1.5,-.5", type: 0 } }, e.powerlineDefinitions[""] = e.powerlineDefinitions[""], e.powerlineDefinitions[""] = e.powerlineDefinitions[""], e.tryDrawCustomChar = function(i, t, x, v, c, p, m, s) {
          const _ = e.blockElementDefinitions[t];
          if (_)
            return function(C, w, b, L, R, A) {
              for (let y = 0; y < w.length; y++) {
                const M = w[y], T = R / 8, S = A / 8;
                C.fillRect(b + M.x * T, L + M.y * S, M.w * T, M.h * S);
              }
            }(i, _, x, v, c, p), !0;
          const l = n[t];
          if (l)
            return function(C, w, b, L, R, A) {
              let y = o.get(w);
              y || (y = /* @__PURE__ */ new Map(), o.set(w, y));
              const M = C.fillStyle;
              if (typeof M != "string")
                throw new Error(`Unexpected fillStyle type "${M}"`);
              let T = y.get(M);
              if (!T) {
                const S = w[0].length, O = w.length, F = document.createElement("canvas");
                F.width = S, F.height = O;
                const G = (0, d.throwIfFalsy)(F.getContext("2d")), W = new ImageData(S, O);
                let N, U, K, ie;
                if (M.startsWith("#"))
                  N = parseInt(M.slice(1, 3), 16), U = parseInt(M.slice(3, 5), 16), K = parseInt(M.slice(5, 7), 16), ie = M.length > 7 && parseInt(M.slice(7, 9), 16) || 1;
                else {
                  if (!M.startsWith("rgba"))
                    throw new Error(`Unexpected fillStyle color format "${M}" when drawing pattern glyph`);
                  [N, U, K, ie] = M.substring(5, M.length - 1).split(",").map((q) => parseFloat(q));
                }
                for (let q = 0; q < O; q++)
                  for (let Y = 0; Y < S; Y++)
                    W.data[4 * (q * S + Y)] = N, W.data[4 * (q * S + Y) + 1] = U, W.data[4 * (q * S + Y) + 2] = K, W.data[4 * (q * S + Y) + 3] = w[q][Y] * (255 * ie);
                G.putImageData(W, 0, 0), T = (0, d.throwIfFalsy)(C.createPattern(F, null)), y.set(M, T);
              }
              C.fillStyle = T, C.fillRect(b, L, R, A);
            }(i, l, x, v, c, p), !0;
          const r = e.boxDrawingDefinitions[t];
          if (r)
            return function(C, w, b, L, R, A, y) {
              C.strokeStyle = C.fillStyle;
              for (const [M, T] of Object.entries(w)) {
                let S;
                C.beginPath(), C.lineWidth = y * Number.parseInt(M), S = typeof T == "function" ? T(0.15, 0.15 / A * R) : T;
                for (const O of S.split(" ")) {
                  const F = O[0], G = f[F];
                  if (!G) {
                    console.error(`Could not find drawing instructions for "${F}"`);
                    continue;
                  }
                  const W = O.substring(1).split(",");
                  W[0] && W[1] && G(C, g(W, R, A, b, L, !0, y));
                }
                C.stroke(), C.closePath();
              }
            }(i, r, x, v, c, p, s), !0;
          const u = e.powerlineDefinitions[t];
          return !!u && (function(C, w, b, L, R, A, y, M) {
            var T, S;
            const O = new Path2D();
            O.rect(b, L, R, A), C.clip(O), C.beginPath();
            const F = y / 12;
            C.lineWidth = M * F;
            for (const G of w.d.split(" ")) {
              const W = G[0], N = f[W];
              if (!N) {
                console.error(`Could not find drawing instructions for "${W}"`);
                continue;
              }
              const U = G.substring(1).split(",");
              U[0] && U[1] && N(C, g(U, R, A, b, L, !1, M, ((T = w.leftPadding) !== null && T !== void 0 ? T : 0) * (F / 2), ((S = w.rightPadding) !== null && S !== void 0 ? S : 0) * (F / 2)));
            }
            w.type === 1 ? (C.strokeStyle = C.fillStyle, C.stroke()) : C.fill(), C.closePath();
          }(i, u, x, v, c, p, m, s), !0);
        };
        const o = /* @__PURE__ */ new Map();
        function a(i, t, x = 0) {
          return Math.max(Math.min(i, t), x);
        }
        const f = { C: (i, t) => i.bezierCurveTo(t[0], t[1], t[2], t[3], t[4], t[5]), L: (i, t) => i.lineTo(t[0], t[1]), M: (i, t) => i.moveTo(t[0], t[1]) };
        function g(i, t, x, v, c, p, m, s = 0, _ = 0) {
          const l = i.map((r) => parseFloat(r) || parseInt(r));
          if (l.length < 2)
            throw new Error("Too few arguments for instruction");
          for (let r = 0; r < l.length; r += 2)
            l[r] *= t - s * m - _ * m, p && l[r] !== 0 && (l[r] = a(Math.round(l[r] + 0.5) - 0.5, t, 0)), l[r] += v + s * m;
          for (let r = 1; r < l.length; r += 2)
            l[r] *= x, p && l[r] !== 0 && (l[r] = a(Math.round(l[r] + 0.5) - 0.5, x, 0)), l[r] += c;
          return l;
        }
      }, 56: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.observeDevicePixelDimensions = void 0;
        const d = h(859);
        e.observeDevicePixelDimensions = function(n, o, a) {
          let f = new o.ResizeObserver((g) => {
            const i = g.find((v) => v.target === n);
            if (!i)
              return;
            if (!("devicePixelContentBoxSize" in i))
              return f == null || f.disconnect(), void (f = void 0);
            const t = i.devicePixelContentBoxSize[0].inlineSize, x = i.devicePixelContentBoxSize[0].blockSize;
            t > 0 && x > 0 && a(t, x);
          });
          try {
            f.observe(n, { box: ["device-pixel-content-box"] });
          } catch {
            f.disconnect(), f = void 0;
          }
          return (0, d.toDisposable)(() => f == null ? void 0 : f.disconnect());
        };
      }, 374: (k, e) => {
        function h(d) {
          return 57508 <= d && d <= 57558;
        }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.createRenderDimensions = e.excludeFromContrastRatioDemands = e.isRestrictedPowerlineGlyph = e.isPowerlineGlyph = e.throwIfFalsy = void 0, e.throwIfFalsy = function(d) {
          if (!d)
            throw new Error("value must not be falsy");
          return d;
        }, e.isPowerlineGlyph = h, e.isRestrictedPowerlineGlyph = function(d) {
          return 57520 <= d && d <= 57527;
        }, e.excludeFromContrastRatioDemands = function(d) {
          return h(d) || function(n) {
            return 9472 <= n && n <= 9631;
          }(d);
        }, e.createRenderDimensions = function() {
          return { css: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 } }, device: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 }, char: { width: 0, height: 0, left: 0, top: 0 } } };
        };
      }, 296: (k, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.createSelectionRenderModel = void 0;
        class h {
          constructor() {
            this.clear();
          }
          clear() {
            this.hasSelection = !1, this.columnSelectMode = !1, this.viewportStartRow = 0, this.viewportEndRow = 0, this.viewportCappedStartRow = 0, this.viewportCappedEndRow = 0, this.startCol = 0, this.endCol = 0, this.selectionStart = void 0, this.selectionEnd = void 0;
          }
          update(n, o, a, f = !1) {
            if (this.selectionStart = o, this.selectionEnd = a, !o || !a || o[0] === a[0] && o[1] === a[1])
              return void this.clear();
            const g = o[1] - n.buffer.active.viewportY, i = a[1] - n.buffer.active.viewportY, t = Math.max(g, 0), x = Math.min(i, n.rows - 1);
            t >= n.rows || x < 0 ? this.clear() : (this.hasSelection = !0, this.columnSelectMode = f, this.viewportStartRow = g, this.viewportEndRow = i, this.viewportCappedStartRow = t, this.viewportCappedEndRow = x, this.startCol = o[0], this.endCol = a[0]);
          }
          isCellSelected(n, o, a) {
            return !!this.hasSelection && (a -= n.buffer.active.viewportY, this.columnSelectMode ? this.startCol <= this.endCol ? o >= this.startCol && a >= this.viewportCappedStartRow && o < this.endCol && a <= this.viewportCappedEndRow : o < this.startCol && a >= this.viewportCappedStartRow && o >= this.endCol && a <= this.viewportCappedEndRow : a > this.viewportStartRow && a < this.viewportEndRow || this.viewportStartRow === this.viewportEndRow && a === this.viewportStartRow && o >= this.startCol && o < this.endCol || this.viewportStartRow < this.viewportEndRow && a === this.viewportEndRow && o < this.endCol || this.viewportStartRow < this.viewportEndRow && a === this.viewportStartRow && o >= this.startCol);
          }
        }
        e.createSelectionRenderModel = function() {
          return new h();
        };
      }, 509: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.TextureAtlas = void 0;
        const d = h(237), n = h(855), o = h(147), a = h(160), f = h(860), g = h(374), i = h(485), t = h(385), x = h(345), v = { texturePage: 0, texturePosition: { x: 0, y: 0 }, texturePositionClipSpace: { x: 0, y: 0 }, offset: { x: 0, y: 0 }, size: { x: 0, y: 0 }, sizeClipSpace: { x: 0, y: 0 } };
        let c;
        class p {
          constructor(r, u, C) {
            this._document = r, this._config = u, this._unicodeService = C, this._didWarmUp = !1, this._cacheMap = new i.FourKeyMap(), this._cacheMapCombined = new i.FourKeyMap(), this._pages = [], this._activePages = [], this._workBoundingBox = { top: 0, left: 0, bottom: 0, right: 0 }, this._workAttributeData = new o.AttributeData(), this._textureSize = 512, this._onAddTextureAtlasCanvas = new x.EventEmitter(), this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event, this._onRemoveTextureAtlasCanvas = new x.EventEmitter(), this.onRemoveTextureAtlasCanvas = this._onRemoveTextureAtlasCanvas.event, this._requestClearModel = !1, this._createNewPage(), this._tmpCanvas = _(r, 4 * this._config.deviceCellWidth + 4, this._config.deviceCellHeight + 4), this._tmpCtx = (0, g.throwIfFalsy)(this._tmpCanvas.getContext("2d", { alpha: this._config.allowTransparency, willReadFrequently: !0 }));
          }
          get pages() {
            return this._pages;
          }
          dispose() {
            for (const r of this.pages)
              r.canvas.remove();
            this._onAddTextureAtlasCanvas.dispose();
          }
          warmUp() {
            this._didWarmUp || (this._doWarmUp(), this._didWarmUp = !0);
          }
          _doWarmUp() {
            const r = new t.IdleTaskQueue();
            for (let u = 33; u < 126; u++)
              r.enqueue(() => {
                if (!this._cacheMap.get(u, n.DEFAULT_COLOR, n.DEFAULT_COLOR, n.DEFAULT_EXT)) {
                  const C = this._drawToCache(u, n.DEFAULT_COLOR, n.DEFAULT_COLOR, n.DEFAULT_EXT);
                  this._cacheMap.set(u, n.DEFAULT_COLOR, n.DEFAULT_COLOR, n.DEFAULT_EXT, C);
                }
              });
          }
          beginFrame() {
            return this._requestClearModel;
          }
          clearTexture() {
            if (this._pages[0].currentRow.x !== 0 || this._pages[0].currentRow.y !== 0) {
              for (const r of this._pages)
                r.clear();
              this._cacheMap.clear(), this._cacheMapCombined.clear(), this._didWarmUp = !1;
            }
          }
          _createNewPage() {
            p.maxAtlasPages && this._pages.length >= Math.max(4, p.maxAtlasPages / 2) && queueMicrotask(() => {
              const u = this._pages.filter((y) => 2 * y.canvas.width <= (p.maxTextureSize || 4096)).sort((y, M) => M.canvas.width !== y.canvas.width ? M.canvas.width - y.canvas.width : M.percentageUsed - y.percentageUsed);
              let C = -1, w = 0;
              for (let y = 0; y < u.length; y++)
                if (u[y].canvas.width !== w)
                  C = y, w = u[y].canvas.width;
                else if (y - C == 3)
                  break;
              const b = u.slice(C, C + 4), L = b.map((y) => y.glyphs[0].texturePage).sort((y, M) => y > M ? 1 : -1), R = L[0], A = this._mergePages(b, R);
              A.version++, this._pages[R] = A;
              for (let y = L.length - 1; y >= 1; y--)
                this._deletePage(L[y]);
              this._requestClearModel = !0, this._onAddTextureAtlasCanvas.fire(A.canvas);
            });
            const r = new m(this._document, this._textureSize);
            return this._pages.push(r), this._activePages.push(r), this._onAddTextureAtlasCanvas.fire(r.canvas), r;
          }
          _mergePages(r, u) {
            const C = 2 * r[0].canvas.width, w = new m(this._document, C, r);
            for (const [b, L] of r.entries()) {
              const R = b * L.canvas.width % C, A = Math.floor(b / 2) * L.canvas.height;
              w.ctx.drawImage(L.canvas, R, A);
              for (const M of L.glyphs)
                M.texturePage = u, M.sizeClipSpace.x = M.size.x / C, M.sizeClipSpace.y = M.size.y / C, M.texturePosition.x += R, M.texturePosition.y += A, M.texturePositionClipSpace.x = M.texturePosition.x / C, M.texturePositionClipSpace.y = M.texturePosition.y / C;
              this._onRemoveTextureAtlasCanvas.fire(L.canvas);
              const y = this._activePages.indexOf(L);
              y !== -1 && this._activePages.splice(y, 1);
            }
            return w;
          }
          _deletePage(r) {
            this._pages.splice(r, 1);
            for (let u = r; u < this._pages.length; u++) {
              const C = this._pages[u];
              for (const w of C.glyphs)
                w.texturePage--;
              C.version++;
            }
          }
          getRasterizedGlyphCombinedChar(r, u, C, w) {
            return this._getFromCacheMap(this._cacheMapCombined, r, u, C, w);
          }
          getRasterizedGlyph(r, u, C, w) {
            return this._getFromCacheMap(this._cacheMap, r, u, C, w);
          }
          _getFromCacheMap(r, u, C, w, b) {
            return c = r.get(u, C, w, b), c || (c = this._drawToCache(u, C, w, b), r.set(u, C, w, b, c)), c;
          }
          _getColorFromAnsiIndex(r) {
            if (r >= this._config.colors.ansi.length)
              throw new Error("No color found for idx " + r);
            return this._config.colors.ansi[r];
          }
          _getBackgroundColor(r, u, C, w) {
            if (this._config.allowTransparency)
              return a.NULL_COLOR;
            let b;
            switch (r) {
              case 16777216:
              case 33554432:
                b = this._getColorFromAnsiIndex(u);
                break;
              case 50331648:
                const L = o.AttributeData.toColorRGB(u);
                b = a.rgba.toColor(L[0], L[1], L[2]);
                break;
              default:
                b = C ? this._config.colors.foreground : this._config.colors.background;
            }
            return b;
          }
          _getForegroundColor(r, u, C, w, b, L, R, A, y, M) {
            const T = this._getMinimumContrastColor(r, u, C, w, b, L, !1, y, M);
            if (T)
              return T;
            let S;
            switch (b) {
              case 16777216:
              case 33554432:
                this._config.drawBoldTextInBrightColors && y && L < 8 && (L += 8), S = this._getColorFromAnsiIndex(L);
                break;
              case 50331648:
                const O = o.AttributeData.toColorRGB(L);
                S = a.rgba.toColor(O[0], O[1], O[2]);
                break;
              default:
                S = R ? this._config.colors.background : this._config.colors.foreground;
            }
            return this._config.allowTransparency && (S = a.color.opaque(S)), A && (S = a.color.multiplyOpacity(S, d.DIM_OPACITY)), S;
          }
          _resolveBackgroundRgba(r, u, C) {
            switch (r) {
              case 16777216:
              case 33554432:
                return this._getColorFromAnsiIndex(u).rgba;
              case 50331648:
                return u << 8;
              default:
                return C ? this._config.colors.foreground.rgba : this._config.colors.background.rgba;
            }
          }
          _resolveForegroundRgba(r, u, C, w) {
            switch (r) {
              case 16777216:
              case 33554432:
                return this._config.drawBoldTextInBrightColors && w && u < 8 && (u += 8), this._getColorFromAnsiIndex(u).rgba;
              case 50331648:
                return u << 8;
              default:
                return C ? this._config.colors.background.rgba : this._config.colors.foreground.rgba;
            }
          }
          _getMinimumContrastColor(r, u, C, w, b, L, R, A, y) {
            if (this._config.minimumContrastRatio === 1 || y)
              return;
            const M = this._config.colors.contrastCache.getColor(r, w);
            if (M !== void 0)
              return M || void 0;
            const T = this._resolveBackgroundRgba(u, C, R), S = this._resolveForegroundRgba(b, L, R, A), O = a.rgba.ensureContrastRatio(T, S, this._config.minimumContrastRatio);
            if (!O)
              return void this._config.colors.contrastCache.setColor(r, w, null);
            const F = a.rgba.toColor(O >> 24 & 255, O >> 16 & 255, O >> 8 & 255);
            return this._config.colors.contrastCache.setColor(r, w, F), F;
          }
          _drawToCache(r, u, C, w) {
            const b = typeof r == "number" ? String.fromCharCode(r) : r, L = Math.min(this._config.deviceCellWidth * Math.max(b.length, 2) + 4, this._textureSize);
            this._tmpCanvas.width < L && (this._tmpCanvas.width = L);
            const R = Math.min(this._config.deviceCellHeight + 8, this._textureSize);
            if (this._tmpCanvas.height < R && (this._tmpCanvas.height = R), this._tmpCtx.save(), this._workAttributeData.fg = C, this._workAttributeData.bg = u, this._workAttributeData.extended.ext = w, this._workAttributeData.isInvisible())
              return v;
            const A = !!this._workAttributeData.isBold(), y = !!this._workAttributeData.isInverse(), M = !!this._workAttributeData.isDim(), T = !!this._workAttributeData.isItalic(), S = !!this._workAttributeData.isUnderline(), O = !!this._workAttributeData.isStrikethrough(), F = !!this._workAttributeData.isOverline();
            let G = this._workAttributeData.getFgColor(), W = this._workAttributeData.getFgColorMode(), N = this._workAttributeData.getBgColor(), U = this._workAttributeData.getBgColorMode();
            if (y) {
              const D = G;
              G = N, N = D;
              const B = W;
              W = U, U = B;
            }
            const K = this._getBackgroundColor(U, N, y, M);
            this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = K.css, this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), this._tmpCtx.globalCompositeOperation = "source-over";
            const ie = A ? this._config.fontWeightBold : this._config.fontWeight, q = T ? "italic" : "";
            this._tmpCtx.font = `${q} ${ie} ${this._config.fontSize * this._config.devicePixelRatio}px ${this._config.fontFamily}`, this._tmpCtx.textBaseline = d.TEXT_BASELINE;
            const Y = b.length === 1 && (0, g.isPowerlineGlyph)(b.charCodeAt(0)), fe = b.length === 1 && (0, g.isRestrictedPowerlineGlyph)(b.charCodeAt(0)), ae = this._getForegroundColor(u, U, N, C, W, G, y, M, A, (0, g.excludeFromContrastRatioDemands)(b.charCodeAt(0)));
            this._tmpCtx.fillStyle = ae.css;
            const P = fe ? 0 : 4;
            let he = !1;
            this._config.customGlyphs !== !1 && (he = (0, f.tryDrawCustomChar)(this._tmpCtx, b, P, P, this._config.deviceCellWidth, this._config.deviceCellHeight, this._config.fontSize, this._config.devicePixelRatio));
            let se, re = !Y;
            if (se = typeof r == "number" ? this._unicodeService.wcwidth(r) : this._unicodeService.getStringCellWidth(r), S) {
              this._tmpCtx.save();
              const D = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 15)), B = D % 2 == 1 ? 0.5 : 0;
              if (this._tmpCtx.lineWidth = D, this._workAttributeData.isUnderlineColorDefault())
                this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle;
              else if (this._workAttributeData.isUnderlineColorRGB())
                re = !1, this._tmpCtx.strokeStyle = `rgb(${o.AttributeData.toColorRGB(this._workAttributeData.getUnderlineColor()).join(",")})`;
              else {
                re = !1;
                let X = this._workAttributeData.getUnderlineColor();
                this._config.drawBoldTextInBrightColors && this._workAttributeData.isBold() && X < 8 && (X += 8), this._tmpCtx.strokeStyle = this._getColorFromAnsiIndex(X).css;
              }
              this._tmpCtx.beginPath();
              const j = P, z = Math.ceil(P + this._config.deviceCharHeight) - B, oe = P + this._config.deviceCharHeight + D - B, ne = Math.ceil(P + this._config.deviceCharHeight + 2 * D) - B;
              for (let X = 0; X < se; X++) {
                this._tmpCtx.save();
                const H = j + X * this._config.deviceCellWidth, Q = j + (X + 1) * this._config.deviceCellWidth, ue = H + this._config.deviceCellWidth / 2;
                switch (this._workAttributeData.extended.underlineStyle) {
                  case 2:
                    this._tmpCtx.moveTo(H, z), this._tmpCtx.lineTo(Q, z), this._tmpCtx.moveTo(H, ne), this._tmpCtx.lineTo(Q, ne);
                    break;
                  case 3:
                    const ce = D <= 1 ? ne : Math.ceil(P + this._config.deviceCharHeight - D / 2) - B, de = D <= 1 ? z : Math.ceil(P + this._config.deviceCharHeight + D / 2) - B, Ce = new Path2D();
                    Ce.rect(H, z, this._config.deviceCellWidth, ne - z), this._tmpCtx.clip(Ce), this._tmpCtx.moveTo(H - this._config.deviceCellWidth / 2, oe), this._tmpCtx.bezierCurveTo(H - this._config.deviceCellWidth / 2, de, H, de, H, oe), this._tmpCtx.bezierCurveTo(H, ce, ue, ce, ue, oe), this._tmpCtx.bezierCurveTo(ue, de, Q, de, Q, oe), this._tmpCtx.bezierCurveTo(Q, ce, Q + this._config.deviceCellWidth / 2, ce, Q + this._config.deviceCellWidth / 2, oe);
                    break;
                  case 4:
                    this._tmpCtx.setLineDash([Math.round(D), Math.round(D)]), this._tmpCtx.moveTo(H, z), this._tmpCtx.lineTo(Q, z);
                    break;
                  case 5:
                    this._tmpCtx.setLineDash([4 * this._config.devicePixelRatio, 3 * this._config.devicePixelRatio]), this._tmpCtx.moveTo(H, z), this._tmpCtx.lineTo(Q, z);
                    break;
                  default:
                    this._tmpCtx.moveTo(H, z), this._tmpCtx.lineTo(Q, z);
                }
                this._tmpCtx.stroke(), this._tmpCtx.restore();
              }
              if (this._tmpCtx.restore(), !he && this._config.fontSize >= 12 && !this._config.allowTransparency && b !== " ") {
                this._tmpCtx.save(), this._tmpCtx.textBaseline = "alphabetic";
                const X = this._tmpCtx.measureText(b);
                if (this._tmpCtx.restore(), "actualBoundingBoxDescent" in X && X.actualBoundingBoxDescent > 0) {
                  this._tmpCtx.save();
                  const H = new Path2D();
                  H.rect(j, z - Math.ceil(D / 2), this._config.deviceCellWidth * se, ne - z + Math.ceil(D / 2)), this._tmpCtx.clip(H), this._tmpCtx.lineWidth = 3 * this._config.devicePixelRatio, this._tmpCtx.strokeStyle = K.css, this._tmpCtx.strokeText(b, P, P + this._config.deviceCharHeight), this._tmpCtx.restore();
                }
              }
            }
            if (F) {
              const D = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 15)), B = D % 2 == 1 ? 0.5 : 0;
              this._tmpCtx.lineWidth = D, this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle, this._tmpCtx.beginPath(), this._tmpCtx.moveTo(P, P + B), this._tmpCtx.lineTo(P + this._config.deviceCharWidth * se, P + B), this._tmpCtx.stroke();
            }
            if (he || this._tmpCtx.fillText(b, P, P + this._config.deviceCharHeight), b === "_" && !this._config.allowTransparency) {
              let D = s(this._tmpCtx.getImageData(P, P, this._config.deviceCellWidth, this._config.deviceCellHeight), K, ae, re);
              if (D)
                for (let B = 1; B <= 5 && (this._tmpCtx.save(), this._tmpCtx.fillStyle = K.css, this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), this._tmpCtx.restore(), this._tmpCtx.fillText(b, P, P + this._config.deviceCharHeight - B), D = s(this._tmpCtx.getImageData(P, P, this._config.deviceCellWidth, this._config.deviceCellHeight), K, ae, re), D); B++)
                  ;
            }
            if (O) {
              const D = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 10)), B = this._tmpCtx.lineWidth % 2 == 1 ? 0.5 : 0;
              this._tmpCtx.lineWidth = D, this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle, this._tmpCtx.beginPath(), this._tmpCtx.moveTo(P, P + Math.floor(this._config.deviceCharHeight / 2) - B), this._tmpCtx.lineTo(P + this._config.deviceCharWidth * se, P + Math.floor(this._config.deviceCharHeight / 2) - B), this._tmpCtx.stroke();
            }
            this._tmpCtx.restore();
            const le = this._tmpCtx.getImageData(0, 0, this._tmpCanvas.width, this._tmpCanvas.height);
            let ve;
            if (ve = this._config.allowTransparency ? function(D) {
              for (let B = 0; B < D.data.length; B += 4)
                if (D.data[B + 3] > 0)
                  return !1;
              return !0;
            }(le) : s(le, K, ae, re), ve)
              return v;
            const I = this._findGlyphBoundingBox(le, this._workBoundingBox, L, fe, he, P);
            let $, E;
            for (; ; ) {
              if (this._activePages.length === 0) {
                const D = this._createNewPage();
                $ = D, E = D.currentRow, E.height = I.size.y;
                break;
              }
              $ = this._activePages[this._activePages.length - 1], E = $.currentRow;
              for (const D of this._activePages)
                I.size.y <= D.currentRow.height && ($ = D, E = D.currentRow);
              for (let D = this._activePages.length - 1; D >= 0; D--)
                for (const B of this._activePages[D].fixedRows)
                  B.height <= E.height && I.size.y <= B.height && ($ = this._activePages[D], E = B);
              if (E.y + I.size.y >= $.canvas.height || E.height > I.size.y + 2) {
                let D = !1;
                if ($.currentRow.y + $.currentRow.height + I.size.y >= $.canvas.height) {
                  let B;
                  for (const j of this._activePages)
                    if (j.currentRow.y + j.currentRow.height + I.size.y < j.canvas.height) {
                      B = j;
                      break;
                    }
                  if (B)
                    $ = B;
                  else {
                    const j = this._createNewPage();
                    $ = j, E = j.currentRow, E.height = I.size.y, D = !0;
                  }
                }
                D || ($.currentRow.height > 0 && $.fixedRows.push($.currentRow), E = { x: 0, y: $.currentRow.y + $.currentRow.height, height: I.size.y }, $.fixedRows.push(E), $.currentRow = { x: 0, y: E.y + E.height, height: 0 });
              }
              if (E.x + I.size.x <= $.canvas.width)
                break;
              E === $.currentRow ? (E.x = 0, E.y += E.height, E.height = 0) : $.fixedRows.splice($.fixedRows.indexOf(E), 1);
            }
            return I.texturePage = this._pages.indexOf($), I.texturePosition.x = E.x, I.texturePosition.y = E.y, I.texturePositionClipSpace.x = E.x / $.canvas.width, I.texturePositionClipSpace.y = E.y / $.canvas.height, I.sizeClipSpace.x /= $.canvas.width, I.sizeClipSpace.y /= $.canvas.height, E.height = Math.max(E.height, I.size.y), E.x += I.size.x, $.ctx.putImageData(le, I.texturePosition.x - this._workBoundingBox.left, I.texturePosition.y - this._workBoundingBox.top, this._workBoundingBox.left, this._workBoundingBox.top, I.size.x, I.size.y), $.addGlyph(I), $.version++, I;
          }
          _findGlyphBoundingBox(r, u, C, w, b, L) {
            u.top = 0;
            const R = w ? this._config.deviceCellHeight : this._tmpCanvas.height, A = w ? this._config.deviceCellWidth : C;
            let y = !1;
            for (let M = 0; M < R; M++) {
              for (let T = 0; T < A; T++) {
                const S = M * this._tmpCanvas.width * 4 + 4 * T + 3;
                if (r.data[S] !== 0) {
                  u.top = M, y = !0;
                  break;
                }
              }
              if (y)
                break;
            }
            u.left = 0, y = !1;
            for (let M = 0; M < L + A; M++) {
              for (let T = 0; T < R; T++) {
                const S = T * this._tmpCanvas.width * 4 + 4 * M + 3;
                if (r.data[S] !== 0) {
                  u.left = M, y = !0;
                  break;
                }
              }
              if (y)
                break;
            }
            u.right = A, y = !1;
            for (let M = L + A - 1; M >= L; M--) {
              for (let T = 0; T < R; T++) {
                const S = T * this._tmpCanvas.width * 4 + 4 * M + 3;
                if (r.data[S] !== 0) {
                  u.right = M, y = !0;
                  break;
                }
              }
              if (y)
                break;
            }
            u.bottom = R, y = !1;
            for (let M = R - 1; M >= 0; M--) {
              for (let T = 0; T < A; T++) {
                const S = M * this._tmpCanvas.width * 4 + 4 * T + 3;
                if (r.data[S] !== 0) {
                  u.bottom = M, y = !0;
                  break;
                }
              }
              if (y)
                break;
            }
            return { texturePage: 0, texturePosition: { x: 0, y: 0 }, texturePositionClipSpace: { x: 0, y: 0 }, size: { x: u.right - u.left + 1, y: u.bottom - u.top + 1 }, sizeClipSpace: { x: u.right - u.left + 1, y: u.bottom - u.top + 1 }, offset: { x: -u.left + L + (w || b ? Math.floor((this._config.deviceCellWidth - this._config.deviceCharWidth) / 2) : 0), y: -u.top + L + (w || b ? this._config.lineHeight === 1 ? 0 : Math.round((this._config.deviceCellHeight - this._config.deviceCharHeight) / 2) : 0) } };
          }
        }
        e.TextureAtlas = p;
        class m {
          constructor(r, u, C) {
            if (this._usedPixels = 0, this._glyphs = [], this.version = 0, this.currentRow = { x: 0, y: 0, height: 0 }, this.fixedRows = [], C)
              for (const w of C)
                this._glyphs.push(...w.glyphs), this._usedPixels += w._usedPixels;
            this.canvas = _(r, u, u), this.ctx = (0, g.throwIfFalsy)(this.canvas.getContext("2d", { alpha: !0 }));
          }
          get percentageUsed() {
            return this._usedPixels / (this.canvas.width * this.canvas.height);
          }
          get glyphs() {
            return this._glyphs;
          }
          addGlyph(r) {
            this._glyphs.push(r), this._usedPixels += r.size.x * r.size.y;
          }
          clear() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.currentRow.x = 0, this.currentRow.y = 0, this.currentRow.height = 0, this.fixedRows.length = 0, this.version++;
          }
        }
        function s(l, r, u, C) {
          const w = r.rgba >>> 24, b = r.rgba >>> 16 & 255, L = r.rgba >>> 8 & 255, R = u.rgba >>> 24, A = u.rgba >>> 16 & 255, y = u.rgba >>> 8 & 255, M = Math.floor((Math.abs(w - R) + Math.abs(b - A) + Math.abs(L - y)) / 12);
          let T = !0;
          for (let S = 0; S < l.data.length; S += 4)
            l.data[S] === w && l.data[S + 1] === b && l.data[S + 2] === L || C && Math.abs(l.data[S] - w) + Math.abs(l.data[S + 1] - b) + Math.abs(l.data[S + 2] - L) < M ? l.data[S + 3] = 0 : T = !1;
          return T;
        }
        function _(l, r, u) {
          const C = l.createElement("canvas");
          return C.width = r, C.height = u, C;
        }
      }, 577: function(k, e, h) {
        var d = this && this.__decorate || function(x, v, c, p) {
          var m, s = arguments.length, _ = s < 3 ? v : p === null ? p = Object.getOwnPropertyDescriptor(v, c) : p;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
            _ = Reflect.decorate(x, v, c, p);
          else
            for (var l = x.length - 1; l >= 0; l--)
              (m = x[l]) && (_ = (s < 3 ? m(_) : s > 3 ? m(v, c, _) : m(v, c)) || _);
          return s > 3 && _ && Object.defineProperty(v, c, _), _;
        }, n = this && this.__param || function(x, v) {
          return function(c, p) {
            v(c, p, x);
          };
        };
        Object.defineProperty(e, "__esModule", { value: !0 }), e.CharacterJoinerService = e.JoinedCellData = void 0;
        const o = h(147), a = h(855), f = h(782), g = h(97);
        class i extends o.AttributeData {
          constructor(v, c, p) {
            super(), this.content = 0, this.combinedData = "", this.fg = v.fg, this.bg = v.bg, this.combinedData = c, this._width = p;
          }
          isCombined() {
            return 2097152;
          }
          getWidth() {
            return this._width;
          }
          getChars() {
            return this.combinedData;
          }
          getCode() {
            return 2097151;
          }
          setFromCharData(v) {
            throw new Error("not implemented");
          }
          getAsCharData() {
            return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
          }
        }
        e.JoinedCellData = i;
        let t = class me {
          constructor(v) {
            this._bufferService = v, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new f.CellData();
          }
          register(v) {
            const c = { id: this._nextCharacterJoinerId++, handler: v };
            return this._characterJoiners.push(c), c.id;
          }
          deregister(v) {
            for (let c = 0; c < this._characterJoiners.length; c++)
              if (this._characterJoiners[c].id === v)
                return this._characterJoiners.splice(c, 1), !0;
            return !1;
          }
          getJoinedCharacters(v) {
            if (this._characterJoiners.length === 0)
              return [];
            const c = this._bufferService.buffer.lines.get(v);
            if (!c || c.length === 0)
              return [];
            const p = [], m = c.translateToString(!0);
            let s = 0, _ = 0, l = 0, r = c.getFg(0), u = c.getBg(0);
            for (let C = 0; C < c.getTrimmedLength(); C++)
              if (c.loadCell(C, this._workCell), this._workCell.getWidth() !== 0) {
                if (this._workCell.fg !== r || this._workCell.bg !== u) {
                  if (C - s > 1) {
                    const w = this._getJoinedRanges(m, l, _, c, s);
                    for (let b = 0; b < w.length; b++)
                      p.push(w[b]);
                  }
                  s = C, l = _, r = this._workCell.fg, u = this._workCell.bg;
                }
                _ += this._workCell.getChars().length || a.WHITESPACE_CELL_CHAR.length;
              }
            if (this._bufferService.cols - s > 1) {
              const C = this._getJoinedRanges(m, l, _, c, s);
              for (let w = 0; w < C.length; w++)
                p.push(C[w]);
            }
            return p;
          }
          _getJoinedRanges(v, c, p, m, s) {
            const _ = v.substring(c, p);
            let l = [];
            try {
              l = this._characterJoiners[0].handler(_);
            } catch (r) {
              console.error(r);
            }
            for (let r = 1; r < this._characterJoiners.length; r++)
              try {
                const u = this._characterJoiners[r].handler(_);
                for (let C = 0; C < u.length; C++)
                  me._mergeRanges(l, u[C]);
              } catch (u) {
                console.error(u);
              }
            return this._stringRangesToCellRanges(l, m, s), l;
          }
          _stringRangesToCellRanges(v, c, p) {
            let m = 0, s = !1, _ = 0, l = v[m];
            if (l) {
              for (let r = p; r < this._bufferService.cols; r++) {
                const u = c.getWidth(r), C = c.getString(r).length || a.WHITESPACE_CELL_CHAR.length;
                if (u !== 0) {
                  if (!s && l[0] <= _ && (l[0] = r, s = !0), l[1] <= _) {
                    if (l[1] = r, l = v[++m], !l)
                      break;
                    l[0] <= _ ? (l[0] = r, s = !0) : s = !1;
                  }
                  _ += C;
                }
              }
              l && (l[1] = this._bufferService.cols);
            }
          }
          static _mergeRanges(v, c) {
            let p = !1;
            for (let m = 0; m < v.length; m++) {
              const s = v[m];
              if (p) {
                if (c[1] <= s[0])
                  return v[m - 1][1] = c[1], v;
                if (c[1] <= s[1])
                  return v[m - 1][1] = Math.max(c[1], s[1]), v.splice(m, 1), v;
                v.splice(m, 1), m--;
              } else {
                if (c[1] <= s[0])
                  return v.splice(m, 0, c), v;
                if (c[1] <= s[1])
                  return s[0] = Math.min(c[0], s[0]), v;
                c[0] < s[1] && (s[0] = Math.min(c[0], s[0]), p = !0);
              }
            }
            return p ? v[v.length - 1][1] = c[1] : v.push(c), v;
          }
        };
        t = d([n(0, g.IBufferService)], t), e.CharacterJoinerService = t;
      }, 160: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.contrastRatio = e.toPaddedHex = e.rgba = e.rgb = e.css = e.color = e.channels = e.NULL_COLOR = void 0;
        const d = h(399);
        let n = 0, o = 0, a = 0, f = 0;
        var g, i, t;
        function x(c) {
          const p = c.toString(16);
          return p.length < 2 ? "0" + p : p;
        }
        function v(c, p) {
          return c < p ? (p + 0.05) / (c + 0.05) : (c + 0.05) / (p + 0.05);
        }
        e.NULL_COLOR = { css: "#00000000", rgba: 0 }, function(c) {
          c.toCss = function(p, m, s, _) {
            return _ !== void 0 ? `#${x(p)}${x(m)}${x(s)}${x(_)}` : `#${x(p)}${x(m)}${x(s)}`;
          }, c.toRgba = function(p, m, s, _ = 255) {
            return (p << 24 | m << 16 | s << 8 | _) >>> 0;
          };
        }(g = e.channels || (e.channels = {})), function(c) {
          function p(m, s) {
            return f = Math.round(255 * s), [n, o, a] = t.toChannels(m.rgba), { css: g.toCss(n, o, a, f), rgba: g.toRgba(n, o, a, f) };
          }
          c.blend = function(m, s) {
            if (f = (255 & s.rgba) / 255, f === 1)
              return { css: s.css, rgba: s.rgba };
            const _ = s.rgba >> 24 & 255, l = s.rgba >> 16 & 255, r = s.rgba >> 8 & 255, u = m.rgba >> 24 & 255, C = m.rgba >> 16 & 255, w = m.rgba >> 8 & 255;
            return n = u + Math.round((_ - u) * f), o = C + Math.round((l - C) * f), a = w + Math.round((r - w) * f), { css: g.toCss(n, o, a), rgba: g.toRgba(n, o, a) };
          }, c.isOpaque = function(m) {
            return (255 & m.rgba) == 255;
          }, c.ensureContrastRatio = function(m, s, _) {
            const l = t.ensureContrastRatio(m.rgba, s.rgba, _);
            if (l)
              return t.toColor(l >> 24 & 255, l >> 16 & 255, l >> 8 & 255);
          }, c.opaque = function(m) {
            const s = (255 | m.rgba) >>> 0;
            return [n, o, a] = t.toChannels(s), { css: g.toCss(n, o, a), rgba: s };
          }, c.opacity = p, c.multiplyOpacity = function(m, s) {
            return f = 255 & m.rgba, p(m, f * s / 255);
          }, c.toColorRGB = function(m) {
            return [m.rgba >> 24 & 255, m.rgba >> 16 & 255, m.rgba >> 8 & 255];
          };
        }(e.color || (e.color = {})), function(c) {
          let p, m;
          if (!d.isNode) {
            const s = document.createElement("canvas");
            s.width = 1, s.height = 1;
            const _ = s.getContext("2d", { willReadFrequently: !0 });
            _ && (p = _, p.globalCompositeOperation = "copy", m = p.createLinearGradient(0, 0, 1, 1));
          }
          c.toColor = function(s) {
            if (s.match(/#[\da-f]{3,8}/i))
              switch (s.length) {
                case 4:
                  return n = parseInt(s.slice(1, 2).repeat(2), 16), o = parseInt(s.slice(2, 3).repeat(2), 16), a = parseInt(s.slice(3, 4).repeat(2), 16), t.toColor(n, o, a);
                case 5:
                  return n = parseInt(s.slice(1, 2).repeat(2), 16), o = parseInt(s.slice(2, 3).repeat(2), 16), a = parseInt(s.slice(3, 4).repeat(2), 16), f = parseInt(s.slice(4, 5).repeat(2), 16), t.toColor(n, o, a, f);
                case 7:
                  return { css: s, rgba: (parseInt(s.slice(1), 16) << 8 | 255) >>> 0 };
                case 9:
                  return { css: s, rgba: parseInt(s.slice(1), 16) >>> 0 };
              }
            const _ = s.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
            if (_)
              return n = parseInt(_[1]), o = parseInt(_[2]), a = parseInt(_[3]), f = Math.round(255 * (_[5] === void 0 ? 1 : parseFloat(_[5]))), t.toColor(n, o, a, f);
            if (!p || !m)
              throw new Error("css.toColor: Unsupported css format");
            if (p.fillStyle = m, p.fillStyle = s, typeof p.fillStyle != "string")
              throw new Error("css.toColor: Unsupported css format");
            if (p.fillRect(0, 0, 1, 1), [n, o, a, f] = p.getImageData(0, 0, 1, 1).data, f !== 255)
              throw new Error("css.toColor: Unsupported css format");
            return { rgba: g.toRgba(n, o, a, f), css: s };
          };
        }(e.css || (e.css = {})), function(c) {
          function p(m, s, _) {
            const l = m / 255, r = s / 255, u = _ / 255;
            return 0.2126 * (l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)) + 0.7152 * (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)) + 0.0722 * (u <= 0.03928 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4));
          }
          c.relativeLuminance = function(m) {
            return p(m >> 16 & 255, m >> 8 & 255, 255 & m);
          }, c.relativeLuminance2 = p;
        }(i = e.rgb || (e.rgb = {})), function(c) {
          function p(s, _, l) {
            const r = s >> 24 & 255, u = s >> 16 & 255, C = s >> 8 & 255;
            let w = _ >> 24 & 255, b = _ >> 16 & 255, L = _ >> 8 & 255, R = v(i.relativeLuminance2(w, b, L), i.relativeLuminance2(r, u, C));
            for (; R < l && (w > 0 || b > 0 || L > 0); )
              w -= Math.max(0, Math.ceil(0.1 * w)), b -= Math.max(0, Math.ceil(0.1 * b)), L -= Math.max(0, Math.ceil(0.1 * L)), R = v(i.relativeLuminance2(w, b, L), i.relativeLuminance2(r, u, C));
            return (w << 24 | b << 16 | L << 8 | 255) >>> 0;
          }
          function m(s, _, l) {
            const r = s >> 24 & 255, u = s >> 16 & 255, C = s >> 8 & 255;
            let w = _ >> 24 & 255, b = _ >> 16 & 255, L = _ >> 8 & 255, R = v(i.relativeLuminance2(w, b, L), i.relativeLuminance2(r, u, C));
            for (; R < l && (w < 255 || b < 255 || L < 255); )
              w = Math.min(255, w + Math.ceil(0.1 * (255 - w))), b = Math.min(255, b + Math.ceil(0.1 * (255 - b))), L = Math.min(255, L + Math.ceil(0.1 * (255 - L))), R = v(i.relativeLuminance2(w, b, L), i.relativeLuminance2(r, u, C));
            return (w << 24 | b << 16 | L << 8 | 255) >>> 0;
          }
          c.ensureContrastRatio = function(s, _, l) {
            const r = i.relativeLuminance(s >> 8), u = i.relativeLuminance(_ >> 8);
            if (v(r, u) < l) {
              if (u < r) {
                const b = p(s, _, l), L = v(r, i.relativeLuminance(b >> 8));
                if (L < l) {
                  const R = m(s, _, l);
                  return L > v(r, i.relativeLuminance(R >> 8)) ? b : R;
                }
                return b;
              }
              const C = m(s, _, l), w = v(r, i.relativeLuminance(C >> 8));
              if (w < l) {
                const b = p(s, _, l);
                return w > v(r, i.relativeLuminance(b >> 8)) ? C : b;
              }
              return C;
            }
          }, c.reduceLuminance = p, c.increaseLuminance = m, c.toChannels = function(s) {
            return [s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s];
          }, c.toColor = function(s, _, l, r) {
            return { css: g.toCss(s, _, l, r), rgba: g.toRgba(s, _, l, r) };
          };
        }(t = e.rgba || (e.rgba = {})), e.toPaddedHex = x, e.contrastRatio = v;
      }, 345: (k, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.forwardEvent = e.EventEmitter = void 0, e.EventEmitter = class {
          constructor() {
            this._listeners = [], this._disposed = !1;
          }
          get event() {
            return this._event || (this._event = (h) => (this._listeners.push(h), { dispose: () => {
              if (!this._disposed) {
                for (let d = 0; d < this._listeners.length; d++)
                  if (this._listeners[d] === h)
                    return void this._listeners.splice(d, 1);
              }
            } })), this._event;
          }
          fire(h, d) {
            const n = [];
            for (let o = 0; o < this._listeners.length; o++)
              n.push(this._listeners[o]);
            for (let o = 0; o < n.length; o++)
              n[o].call(void 0, h, d);
          }
          dispose() {
            this._listeners && (this._listeners.length = 0), this._disposed = !0;
          }
        }, e.forwardEvent = function(h, d) {
          return h((n) => d.fire(n));
        };
      }, 859: (k, e) => {
        function h(d) {
          for (const n of d)
            n.dispose();
          d.length = 0;
        }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.getDisposeArrayDisposable = e.disposeArray = e.toDisposable = e.Disposable = void 0, e.Disposable = class {
          constructor() {
            this._disposables = [], this._isDisposed = !1;
          }
          dispose() {
            this._isDisposed = !0;
            for (const d of this._disposables)
              d.dispose();
            this._disposables.length = 0;
          }
          register(d) {
            return this._disposables.push(d), d;
          }
          unregister(d) {
            const n = this._disposables.indexOf(d);
            n !== -1 && this._disposables.splice(n, 1);
          }
        }, e.toDisposable = function(d) {
          return { dispose: d };
        }, e.disposeArray = h, e.getDisposeArrayDisposable = function(d) {
          return { dispose: () => h(d) };
        };
      }, 485: (k, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.FourKeyMap = e.TwoKeyMap = void 0;
        class h {
          constructor() {
            this._data = {};
          }
          set(n, o, a) {
            this._data[n] || (this._data[n] = {}), this._data[n][o] = a;
          }
          get(n, o) {
            return this._data[n] ? this._data[n][o] : void 0;
          }
          clear() {
            this._data = {};
          }
        }
        e.TwoKeyMap = h, e.FourKeyMap = class {
          constructor() {
            this._data = new h();
          }
          set(d, n, o, a, f) {
            this._data.get(d, n) || this._data.set(d, n, new h()), this._data.get(d, n).set(o, a, f);
          }
          get(d, n, o, a) {
            var f;
            return (f = this._data.get(d, n)) === null || f === void 0 ? void 0 : f.get(o, a);
          }
          clear() {
            this._data.clear();
          }
        };
      }, 399: (k, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.isChromeOS = e.isLinux = e.isWindows = e.isIphone = e.isIpad = e.isMac = e.getSafariVersion = e.isSafari = e.isLegacyEdge = e.isFirefox = e.isNode = void 0, e.isNode = typeof navigator > "u";
        const h = e.isNode ? "node" : navigator.userAgent, d = e.isNode ? "node" : navigator.platform;
        e.isFirefox = h.includes("Firefox"), e.isLegacyEdge = h.includes("Edge"), e.isSafari = /^((?!chrome|android).)*safari/i.test(h), e.getSafariVersion = function() {
          if (!e.isSafari)
            return 0;
          const n = h.match(/Version\/(\d+)/);
          return n === null || n.length < 2 ? 0 : parseInt(n[1]);
        }, e.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(d), e.isIpad = d === "iPad", e.isIphone = d === "iPhone", e.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(d), e.isLinux = d.indexOf("Linux") >= 0, e.isChromeOS = /\bCrOS\b/.test(h);
      }, 385: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.DebouncedIdleTask = e.IdleTaskQueue = e.PriorityTaskQueue = void 0;
        const d = h(399);
        class n {
          constructor() {
            this._tasks = [], this._i = 0;
          }
          enqueue(f) {
            this._tasks.push(f), this._start();
          }
          flush() {
            for (; this._i < this._tasks.length; )
              this._tasks[this._i]() || this._i++;
            this.clear();
          }
          clear() {
            this._idleCallback && (this._cancelCallback(this._idleCallback), this._idleCallback = void 0), this._i = 0, this._tasks.length = 0;
          }
          _start() {
            this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
          }
          _process(f) {
            this._idleCallback = void 0;
            let g = 0, i = 0, t = f.timeRemaining(), x = 0;
            for (; this._i < this._tasks.length; ) {
              if (g = Date.now(), this._tasks[this._i]() || this._i++, g = Math.max(1, Date.now() - g), i = Math.max(g, i), x = f.timeRemaining(), 1.5 * i > x)
                return t - g < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(t - g))}ms`), void this._start();
              t = x;
            }
            this.clear();
          }
        }
        class o extends n {
          _requestCallback(f) {
            return setTimeout(() => f(this._createDeadline(16)));
          }
          _cancelCallback(f) {
            clearTimeout(f);
          }
          _createDeadline(f) {
            const g = Date.now() + f;
            return { timeRemaining: () => Math.max(0, g - Date.now()) };
          }
        }
        e.PriorityTaskQueue = o, e.IdleTaskQueue = !d.isNode && "requestIdleCallback" in window ? class extends n {
          _requestCallback(a) {
            return requestIdleCallback(a);
          }
          _cancelCallback(a) {
            cancelIdleCallback(a);
          }
        } : o, e.DebouncedIdleTask = class {
          constructor() {
            this._queue = new e.IdleTaskQueue();
          }
          set(a) {
            this._queue.clear(), this._queue.enqueue(a);
          }
          flush() {
            this._queue.flush();
          }
        };
      }, 147: (k, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.ExtendedAttrs = e.AttributeData = void 0;
        class h {
          constructor() {
            this.fg = 0, this.bg = 0, this.extended = new d();
          }
          static toColorRGB(o) {
            return [o >>> 16 & 255, o >>> 8 & 255, 255 & o];
          }
          static fromColorRGB(o) {
            return (255 & o[0]) << 16 | (255 & o[1]) << 8 | 255 & o[2];
          }
          clone() {
            const o = new h();
            return o.fg = this.fg, o.bg = this.bg, o.extended = this.extended.clone(), o;
          }
          isInverse() {
            return 67108864 & this.fg;
          }
          isBold() {
            return 134217728 & this.fg;
          }
          isUnderline() {
            return this.hasExtendedAttrs() && this.extended.underlineStyle !== 0 ? 1 : 268435456 & this.fg;
          }
          isBlink() {
            return 536870912 & this.fg;
          }
          isInvisible() {
            return 1073741824 & this.fg;
          }
          isItalic() {
            return 67108864 & this.bg;
          }
          isDim() {
            return 134217728 & this.bg;
          }
          isStrikethrough() {
            return 2147483648 & this.fg;
          }
          isProtected() {
            return 536870912 & this.bg;
          }
          isOverline() {
            return 1073741824 & this.bg;
          }
          getFgColorMode() {
            return 50331648 & this.fg;
          }
          getBgColorMode() {
            return 50331648 & this.bg;
          }
          isFgRGB() {
            return (50331648 & this.fg) == 50331648;
          }
          isBgRGB() {
            return (50331648 & this.bg) == 50331648;
          }
          isFgPalette() {
            return (50331648 & this.fg) == 16777216 || (50331648 & this.fg) == 33554432;
          }
          isBgPalette() {
            return (50331648 & this.bg) == 16777216 || (50331648 & this.bg) == 33554432;
          }
          isFgDefault() {
            return (50331648 & this.fg) == 0;
          }
          isBgDefault() {
            return (50331648 & this.bg) == 0;
          }
          isAttributeDefault() {
            return this.fg === 0 && this.bg === 0;
          }
          getFgColor() {
            switch (50331648 & this.fg) {
              case 16777216:
              case 33554432:
                return 255 & this.fg;
              case 50331648:
                return 16777215 & this.fg;
              default:
                return -1;
            }
          }
          getBgColor() {
            switch (50331648 & this.bg) {
              case 16777216:
              case 33554432:
                return 255 & this.bg;
              case 50331648:
                return 16777215 & this.bg;
              default:
                return -1;
            }
          }
          hasExtendedAttrs() {
            return 268435456 & this.bg;
          }
          updateExtended() {
            this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
          }
          getUnderlineColor() {
            if (268435456 & this.bg && ~this.extended.underlineColor)
              switch (50331648 & this.extended.underlineColor) {
                case 16777216:
                case 33554432:
                  return 255 & this.extended.underlineColor;
                case 50331648:
                  return 16777215 & this.extended.underlineColor;
                default:
                  return this.getFgColor();
              }
            return this.getFgColor();
          }
          getUnderlineColorMode() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
          }
          isUnderlineColorRGB() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? (50331648 & this.extended.underlineColor) == 50331648 : this.isFgRGB();
          }
          isUnderlineColorPalette() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? (50331648 & this.extended.underlineColor) == 16777216 || (50331648 & this.extended.underlineColor) == 33554432 : this.isFgPalette();
          }
          isUnderlineColorDefault() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? (50331648 & this.extended.underlineColor) == 0 : this.isFgDefault();
          }
          getUnderlineStyle() {
            return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0;
          }
        }
        e.AttributeData = h;
        class d {
          constructor(o = 0, a = 0) {
            this._ext = 0, this._urlId = 0, this._ext = o, this._urlId = a;
          }
          get ext() {
            return this._urlId ? -469762049 & this._ext | this.underlineStyle << 26 : this._ext;
          }
          set ext(o) {
            this._ext = o;
          }
          get underlineStyle() {
            return this._urlId ? 5 : (469762048 & this._ext) >> 26;
          }
          set underlineStyle(o) {
            this._ext &= -469762049, this._ext |= o << 26 & 469762048;
          }
          get underlineColor() {
            return 67108863 & this._ext;
          }
          set underlineColor(o) {
            this._ext &= -67108864, this._ext |= 67108863 & o;
          }
          get urlId() {
            return this._urlId;
          }
          set urlId(o) {
            this._urlId = o;
          }
          clone() {
            return new d(this._ext, this._urlId);
          }
          isEmpty() {
            return this.underlineStyle === 0 && this._urlId === 0;
          }
        }
        e.ExtendedAttrs = d;
      }, 782: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.CellData = void 0;
        const d = h(133), n = h(855), o = h(147);
        class a extends o.AttributeData {
          constructor() {
            super(...arguments), this.content = 0, this.fg = 0, this.bg = 0, this.extended = new o.ExtendedAttrs(), this.combinedData = "";
          }
          static fromCharData(g) {
            const i = new a();
            return i.setFromCharData(g), i;
          }
          isCombined() {
            return 2097152 & this.content;
          }
          getWidth() {
            return this.content >> 22;
          }
          getChars() {
            return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, d.stringFromCodePoint)(2097151 & this.content) : "";
          }
          getCode() {
            return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
          }
          setFromCharData(g) {
            this.fg = g[n.CHAR_DATA_ATTR_INDEX], this.bg = 0;
            let i = !1;
            if (g[n.CHAR_DATA_CHAR_INDEX].length > 2)
              i = !0;
            else if (g[n.CHAR_DATA_CHAR_INDEX].length === 2) {
              const t = g[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
              if (55296 <= t && t <= 56319) {
                const x = g[n.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                56320 <= x && x <= 57343 ? this.content = 1024 * (t - 55296) + x - 56320 + 65536 | g[n.CHAR_DATA_WIDTH_INDEX] << 22 : i = !0;
              } else
                i = !0;
            } else
              this.content = g[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | g[n.CHAR_DATA_WIDTH_INDEX] << 22;
            i && (this.combinedData = g[n.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | g[n.CHAR_DATA_WIDTH_INDEX] << 22);
          }
          getAsCharData() {
            return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
          }
        }
        e.CellData = a;
      }, 855: (k, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.WHITESPACE_CELL_CODE = e.WHITESPACE_CELL_WIDTH = e.WHITESPACE_CELL_CHAR = e.NULL_CELL_CODE = e.NULL_CELL_WIDTH = e.NULL_CELL_CHAR = e.CHAR_DATA_CODE_INDEX = e.CHAR_DATA_WIDTH_INDEX = e.CHAR_DATA_CHAR_INDEX = e.CHAR_DATA_ATTR_INDEX = e.DEFAULT_EXT = e.DEFAULT_ATTR = e.DEFAULT_COLOR = void 0, e.DEFAULT_COLOR = 0, e.DEFAULT_ATTR = 256 | e.DEFAULT_COLOR << 9, e.DEFAULT_EXT = 0, e.CHAR_DATA_ATTR_INDEX = 0, e.CHAR_DATA_CHAR_INDEX = 1, e.CHAR_DATA_WIDTH_INDEX = 2, e.CHAR_DATA_CODE_INDEX = 3, e.NULL_CELL_CHAR = "", e.NULL_CELL_WIDTH = 1, e.NULL_CELL_CODE = 0, e.WHITESPACE_CELL_CHAR = " ", e.WHITESPACE_CELL_WIDTH = 1, e.WHITESPACE_CELL_CODE = 32;
      }, 133: (k, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.Utf8ToUtf32 = e.StringToUtf32 = e.utf32ToString = e.stringFromCodePoint = void 0, e.stringFromCodePoint = function(h) {
          return h > 65535 ? (h -= 65536, String.fromCharCode(55296 + (h >> 10)) + String.fromCharCode(h % 1024 + 56320)) : String.fromCharCode(h);
        }, e.utf32ToString = function(h, d = 0, n = h.length) {
          let o = "";
          for (let a = d; a < n; ++a) {
            let f = h[a];
            f > 65535 ? (f -= 65536, o += String.fromCharCode(55296 + (f >> 10)) + String.fromCharCode(f % 1024 + 56320)) : o += String.fromCharCode(f);
          }
          return o;
        }, e.StringToUtf32 = class {
          constructor() {
            this._interim = 0;
          }
          clear() {
            this._interim = 0;
          }
          decode(h, d) {
            const n = h.length;
            if (!n)
              return 0;
            let o = 0, a = 0;
            if (this._interim) {
              const f = h.charCodeAt(a++);
              56320 <= f && f <= 57343 ? d[o++] = 1024 * (this._interim - 55296) + f - 56320 + 65536 : (d[o++] = this._interim, d[o++] = f), this._interim = 0;
            }
            for (let f = a; f < n; ++f) {
              const g = h.charCodeAt(f);
              if (55296 <= g && g <= 56319) {
                if (++f >= n)
                  return this._interim = g, o;
                const i = h.charCodeAt(f);
                56320 <= i && i <= 57343 ? d[o++] = 1024 * (g - 55296) + i - 56320 + 65536 : (d[o++] = g, d[o++] = i);
              } else
                g !== 65279 && (d[o++] = g);
            }
            return o;
          }
        }, e.Utf8ToUtf32 = class {
          constructor() {
            this.interim = new Uint8Array(3);
          }
          clear() {
            this.interim.fill(0);
          }
          decode(h, d) {
            const n = h.length;
            if (!n)
              return 0;
            let o, a, f, g, i = 0, t = 0, x = 0;
            if (this.interim[0]) {
              let p = !1, m = this.interim[0];
              m &= (224 & m) == 192 ? 31 : (240 & m) == 224 ? 15 : 7;
              let s, _ = 0;
              for (; (s = 63 & this.interim[++_]) && _ < 4; )
                m <<= 6, m |= s;
              const l = (224 & this.interim[0]) == 192 ? 2 : (240 & this.interim[0]) == 224 ? 3 : 4, r = l - _;
              for (; x < r; ) {
                if (x >= n)
                  return 0;
                if (s = h[x++], (192 & s) != 128) {
                  x--, p = !0;
                  break;
                }
                this.interim[_++] = s, m <<= 6, m |= 63 & s;
              }
              p || (l === 2 ? m < 128 ? x-- : d[i++] = m : l === 3 ? m < 2048 || m >= 55296 && m <= 57343 || m === 65279 || (d[i++] = m) : m < 65536 || m > 1114111 || (d[i++] = m)), this.interim.fill(0);
            }
            const v = n - 4;
            let c = x;
            for (; c < n; ) {
              for (; !(!(c < v) || 128 & (o = h[c]) || 128 & (a = h[c + 1]) || 128 & (f = h[c + 2]) || 128 & (g = h[c + 3])); )
                d[i++] = o, d[i++] = a, d[i++] = f, d[i++] = g, c += 4;
              if (o = h[c++], o < 128)
                d[i++] = o;
              else if ((224 & o) == 192) {
                if (c >= n)
                  return this.interim[0] = o, i;
                if (a = h[c++], (192 & a) != 128) {
                  c--;
                  continue;
                }
                if (t = (31 & o) << 6 | 63 & a, t < 128) {
                  c--;
                  continue;
                }
                d[i++] = t;
              } else if ((240 & o) == 224) {
                if (c >= n)
                  return this.interim[0] = o, i;
                if (a = h[c++], (192 & a) != 128) {
                  c--;
                  continue;
                }
                if (c >= n)
                  return this.interim[0] = o, this.interim[1] = a, i;
                if (f = h[c++], (192 & f) != 128) {
                  c--;
                  continue;
                }
                if (t = (15 & o) << 12 | (63 & a) << 6 | 63 & f, t < 2048 || t >= 55296 && t <= 57343 || t === 65279)
                  continue;
                d[i++] = t;
              } else if ((248 & o) == 240) {
                if (c >= n)
                  return this.interim[0] = o, i;
                if (a = h[c++], (192 & a) != 128) {
                  c--;
                  continue;
                }
                if (c >= n)
                  return this.interim[0] = o, this.interim[1] = a, i;
                if (f = h[c++], (192 & f) != 128) {
                  c--;
                  continue;
                }
                if (c >= n)
                  return this.interim[0] = o, this.interim[1] = a, this.interim[2] = f, i;
                if (g = h[c++], (192 & g) != 128) {
                  c--;
                  continue;
                }
                if (t = (7 & o) << 18 | (63 & a) << 12 | (63 & f) << 6 | 63 & g, t < 65536 || t > 1114111)
                  continue;
                d[i++] = t;
              }
            }
            return i;
          }
        };
      }, 726: (k, e) => {
        function h(d, n, o) {
          n.di$target === n ? n.di$dependencies.push({ id: d, index: o }) : (n.di$dependencies = [{ id: d, index: o }], n.di$target = n);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.createDecorator = e.getServiceDependencies = e.serviceRegistry = void 0, e.serviceRegistry = /* @__PURE__ */ new Map(), e.getServiceDependencies = function(d) {
          return d.di$dependencies || [];
        }, e.createDecorator = function(d) {
          if (e.serviceRegistry.has(d))
            return e.serviceRegistry.get(d);
          const n = function(o, a, f) {
            if (arguments.length !== 3)
              throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
            h(n, o, f);
          };
          return n.toString = () => d, e.serviceRegistry.set(d, n), n;
        };
      }, 97: (k, e, h) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.IDecorationService = e.IUnicodeService = e.IOscLinkService = e.IOptionsService = e.ILogService = e.LogLevelEnum = e.IInstantiationService = e.ICharsetService = e.ICoreService = e.ICoreMouseService = e.IBufferService = void 0;
        const d = h(726);
        var n;
        e.IBufferService = (0, d.createDecorator)("BufferService"), e.ICoreMouseService = (0, d.createDecorator)("CoreMouseService"), e.ICoreService = (0, d.createDecorator)("CoreService"), e.ICharsetService = (0, d.createDecorator)("CharsetService"), e.IInstantiationService = (0, d.createDecorator)("InstantiationService"), (n = e.LogLevelEnum || (e.LogLevelEnum = {}))[n.DEBUG = 0] = "DEBUG", n[n.INFO = 1] = "INFO", n[n.WARN = 2] = "WARN", n[n.ERROR = 3] = "ERROR", n[n.OFF = 4] = "OFF", e.ILogService = (0, d.createDecorator)("LogService"), e.IOptionsService = (0, d.createDecorator)("OptionsService"), e.IOscLinkService = (0, d.createDecorator)("OscLinkService"), e.IUnicodeService = (0, d.createDecorator)("UnicodeService"), e.IDecorationService = (0, d.createDecorator)("DecorationService");
      } }, J = {};
      function V(k) {
        var e = J[k];
        if (e !== void 0)
          return e.exports;
        var h = J[k] = { exports: {} };
        return Z[k].call(h.exports, h, h.exports, V), h.exports;
      }
      var ee = {};
      return (() => {
        var k = ee;
        Object.defineProperty(k, "__esModule", { value: !0 }), k.CanvasAddon = void 0;
        const e = V(949), h = V(345), d = V(859);
        class n extends d.Disposable {
          constructor() {
            super(...arguments), this._onChangeTextureAtlas = this.register(new h.EventEmitter()), this.onChangeTextureAtlas = this._onChangeTextureAtlas.event, this._onAddTextureAtlasCanvas = this.register(new h.EventEmitter()), this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event;
          }
          get textureAtlas() {
            var a;
            return (a = this._renderer) === null || a === void 0 ? void 0 : a.textureAtlas;
          }
          activate(a) {
            const f = a._core;
            if (!a.element)
              return void this.register(f.onWillOpen(() => this.activate(a)));
            this._terminal = a;
            const g = f.coreService, i = f.optionsService, t = f.screenElement, x = f.linkifier2, v = f, c = v._bufferService, p = v._renderService, m = v._characterJoinerService, s = v._charSizeService, _ = v._coreBrowserService, l = v._decorationService, r = v._themeService;
            this._renderer = new e.CanvasRenderer(a, t, x, c, s, i, m, g, _, l, r), this.register((0, h.forwardEvent)(this._renderer.onChangeTextureAtlas, this._onChangeTextureAtlas)), this.register((0, h.forwardEvent)(this._renderer.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas)), p.setRenderer(this._renderer), p.handleResize(c.cols, c.rows), this.register((0, d.toDisposable)(() => {
              var u;
              p.setRenderer(this._terminal._core._createRenderer()), p.handleResize(a.cols, a.rows), (u = this._renderer) === null || u === void 0 || u.dispose(), this._renderer = void 0;
            }));
          }
        }
        k.CanvasAddon = n;
      })(), ee;
    })());
  }(ge)), ge.exports;
}
var xe = be();
const Me = /* @__PURE__ */ we(xe), Se = /* @__PURE__ */ Le({
  __proto__: null,
  default: Me
}, [xe]);
export {
  Se as x
};
