import { qk as me } from "./index-4b7b8e94.js";
function xe(ie, _e) {
  for (var ee = 0; ee < _e.length; ee++) {
    const K = _e[ee];
    if (typeof K != "string" && !Array.isArray(K)) {
      for (const j in K)
        if (j !== "default" && !(j in ie)) {
          const te = Object.getOwnPropertyDescriptor(K, j);
          te && Object.defineProperty(ie, j, te.get ? te : {
            enumerable: !0,
            get: () => K[j]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(ie, Symbol.toStringTag, { value: "Module" }));
}
var Ce = { exports: {} };
(function(ie, _e) {
  (function(ee, K) {
    ie.exports = K();
  })(self, () => (() => {
    var ee = { 965: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.GlyphRenderer = void 0;
      const g = d(381), a = d(855), r = d(859), u = d(374), v = d(509), n = 11, t = n * Float32Array.BYTES_PER_ELEMENT;
      let e, o = 0, y = 0, x = 0;
      class R extends r.Disposable {
        constructor(h, l, p) {
          super(), this._terminal = h, this._gl = l, this._dimensions = p, this._activeBuffer = 0, this._vertices = { count: 0, attributes: new Float32Array(0), attributesBuffers: [new Float32Array(0), new Float32Array(0)] };
          const s = this._gl;
          v.TextureAtlas.maxAtlasPages === void 0 && (v.TextureAtlas.maxAtlasPages = Math.min(32, (0, u.throwIfFalsy)(s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS))), v.TextureAtlas.maxTextureSize = (0, u.throwIfFalsy)(s.getParameter(s.MAX_TEXTURE_SIZE))), this._program = (0, u.throwIfFalsy)((0, g.createProgram)(s, `#version 300 es
layout (location = 0) in vec2 a_unitquad;
layout (location = 1) in vec2 a_cellpos;
layout (location = 2) in vec2 a_offset;
layout (location = 3) in vec2 a_size;
layout (location = 4) in float a_texpage;
layout (location = 5) in vec2 a_texcoord;
layout (location = 6) in vec2 a_texsize;

uniform mat4 u_projection;
uniform vec2 u_resolution;

out vec2 v_texcoord;
flat out int v_texpage;

void main() {
  vec2 zeroToOne = (a_offset / u_resolution) + a_cellpos + (a_unitquad * a_size);
  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);
  v_texpage = int(a_texpage);
  v_texcoord = a_texcoord + a_unitquad * a_texsize;
}`, function(M) {
            let A = "";
            for (let b = 1; b < M; b++)
              A += ` else if (v_texpage == ${b}) { outColor = texture(u_texture[${b}], v_texcoord); }`;
            return `#version 300 es
precision lowp float;

in vec2 v_texcoord;
flat in int v_texpage;

uniform sampler2D u_texture[${M}];

out vec4 outColor;

void main() {
  if (v_texpage == 0) {
    outColor = texture(u_texture[0], v_texcoord);
  } ${A}
}`;
          }(v.TextureAtlas.maxAtlasPages))), this.register((0, r.toDisposable)(() => s.deleteProgram(this._program))), this._projectionLocation = (0, u.throwIfFalsy)(s.getUniformLocation(this._program, "u_projection")), this._resolutionLocation = (0, u.throwIfFalsy)(s.getUniformLocation(this._program, "u_resolution")), this._textureLocation = (0, u.throwIfFalsy)(s.getUniformLocation(this._program, "u_texture")), this._vertexArrayObject = s.createVertexArray(), s.bindVertexArray(this._vertexArrayObject);
          const f = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), c = s.createBuffer();
          this.register((0, r.toDisposable)(() => s.deleteBuffer(c))), s.bindBuffer(s.ARRAY_BUFFER, c), s.bufferData(s.ARRAY_BUFFER, f, s.STATIC_DRAW), s.enableVertexAttribArray(0), s.vertexAttribPointer(0, 2, this._gl.FLOAT, !1, 0, 0);
          const _ = new Uint8Array([0, 1, 2, 3]), C = s.createBuffer();
          this.register((0, r.toDisposable)(() => s.deleteBuffer(C))), s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, C), s.bufferData(s.ELEMENT_ARRAY_BUFFER, _, s.STATIC_DRAW), this._attributesBuffer = (0, u.throwIfFalsy)(s.createBuffer()), this.register((0, r.toDisposable)(() => s.deleteBuffer(this._attributesBuffer))), s.bindBuffer(s.ARRAY_BUFFER, this._attributesBuffer), s.enableVertexAttribArray(2), s.vertexAttribPointer(2, 2, s.FLOAT, !1, t, 0), s.vertexAttribDivisor(2, 1), s.enableVertexAttribArray(3), s.vertexAttribPointer(3, 2, s.FLOAT, !1, t, 2 * Float32Array.BYTES_PER_ELEMENT), s.vertexAttribDivisor(3, 1), s.enableVertexAttribArray(4), s.vertexAttribPointer(4, 1, s.FLOAT, !1, t, 4 * Float32Array.BYTES_PER_ELEMENT), s.vertexAttribDivisor(4, 1), s.enableVertexAttribArray(5), s.vertexAttribPointer(5, 2, s.FLOAT, !1, t, 5 * Float32Array.BYTES_PER_ELEMENT), s.vertexAttribDivisor(5, 1), s.enableVertexAttribArray(6), s.vertexAttribPointer(6, 2, s.FLOAT, !1, t, 7 * Float32Array.BYTES_PER_ELEMENT), s.vertexAttribDivisor(6, 1), s.enableVertexAttribArray(1), s.vertexAttribPointer(1, 2, s.FLOAT, !1, t, 9 * Float32Array.BYTES_PER_ELEMENT), s.vertexAttribDivisor(1, 1), s.useProgram(this._program);
          const m = new Int32Array(v.TextureAtlas.maxAtlasPages);
          for (let M = 0; M < v.TextureAtlas.maxAtlasPages; M++)
            m[M] = M;
          s.uniform1iv(this._textureLocation, m), s.uniformMatrix4fv(this._projectionLocation, !1, g.PROJECTION_MATRIX), this._atlasTextures = [];
          for (let M = 0; M < v.TextureAtlas.maxAtlasPages; M++) {
            const A = new g.GLTexture((0, u.throwIfFalsy)(s.createTexture()));
            this.register((0, r.toDisposable)(() => s.deleteTexture(A.texture))), s.activeTexture(s.TEXTURE0 + M), s.bindTexture(s.TEXTURE_2D, A.texture), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, new Uint8Array([255, 0, 0, 255])), this._atlasTextures[M] = A;
          }
          s.enable(s.BLEND), s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA), this.handleResize();
        }
        beginFrame() {
          return !this._atlas || this._atlas.beginFrame();
        }
        updateCell(h, l, p, s, f, c, _, C) {
          this._updateCell(this._vertices.attributes, h, l, p, s, f, c, _, C);
        }
        _updateCell(h, l, p, s, f, c, _, C, m) {
          o = (p * this._terminal.cols + l) * n, s !== a.NULL_CELL_CODE && s !== void 0 ? this._atlas && (e = C && C.length > 1 ? this._atlas.getRasterizedGlyphCombinedChar(C, f, c, _) : this._atlas.getRasterizedGlyph(s, f, c, _), y = Math.floor((this._dimensions.device.cell.width - this._dimensions.device.char.width) / 2), f !== m && e.offset.x > y ? (x = e.offset.x - y, h[o] = -(e.offset.x - x) + this._dimensions.device.char.left, h[o + 1] = -e.offset.y + this._dimensions.device.char.top, h[o + 2] = (e.size.x - x) / this._dimensions.device.canvas.width, h[o + 3] = e.size.y / this._dimensions.device.canvas.height, h[o + 4] = e.texturePage, h[o + 5] = e.texturePositionClipSpace.x + x / this._atlas.pages[e.texturePage].canvas.width, h[o + 6] = e.texturePositionClipSpace.y, h[o + 7] = e.sizeClipSpace.x - x / this._atlas.pages[e.texturePage].canvas.width, h[o + 8] = e.sizeClipSpace.y) : (h[o] = -e.offset.x + this._dimensions.device.char.left, h[o + 1] = -e.offset.y + this._dimensions.device.char.top, h[o + 2] = e.size.x / this._dimensions.device.canvas.width, h[o + 3] = e.size.y / this._dimensions.device.canvas.height, h[o + 4] = e.texturePage, h[o + 5] = e.texturePositionClipSpace.x, h[o + 6] = e.texturePositionClipSpace.y, h[o + 7] = e.sizeClipSpace.x, h[o + 8] = e.sizeClipSpace.y)) : h.fill(0, o, o + n - 1 - 2);
        }
        clear() {
          const h = this._terminal, l = h.cols * h.rows * n;
          this._vertices.count !== l ? this._vertices.attributes = new Float32Array(l) : this._vertices.attributes.fill(0);
          let p = 0;
          for (; p < this._vertices.attributesBuffers.length; p++)
            this._vertices.count !== l ? this._vertices.attributesBuffers[p] = new Float32Array(l) : this._vertices.attributesBuffers[p].fill(0);
          this._vertices.count = l, p = 0;
          for (let s = 0; s < h.rows; s++)
            for (let f = 0; f < h.cols; f++)
              this._vertices.attributes[p + 9] = f / h.cols, this._vertices.attributes[p + 10] = s / h.rows, p += n;
        }
        handleResize() {
          const h = this._gl;
          h.viewport(0, 0, h.canvas.width, h.canvas.height), h.uniform2f(this._resolutionLocation, h.canvas.width, h.canvas.height), this.clear();
        }
        render(h) {
          if (!this._atlas)
            return;
          const l = this._gl;
          l.useProgram(this._program), l.bindVertexArray(this._vertexArrayObject), this._activeBuffer = (this._activeBuffer + 1) % 2;
          const p = this._vertices.attributesBuffers[this._activeBuffer];
          let s = 0;
          for (let f = 0; f < h.lineLengths.length; f++) {
            const c = f * this._terminal.cols * n, _ = this._vertices.attributes.subarray(c, c + h.lineLengths[f] * n);
            p.set(_, s), s += _.length;
          }
          l.bindBuffer(l.ARRAY_BUFFER, this._attributesBuffer), l.bufferData(l.ARRAY_BUFFER, p.subarray(0, s), l.STREAM_DRAW);
          for (let f = 0; f < this._atlas.pages.length; f++)
            this._atlas.pages[f].version !== this._atlasTextures[f].version && this._bindAtlasPageTexture(l, this._atlas, f);
          l.drawElementsInstanced(l.TRIANGLE_STRIP, 4, l.UNSIGNED_BYTE, 0, s / n);
        }
        setAtlas(h) {
          this._atlas = h;
          for (const l of this._atlasTextures)
            l.version = -1;
        }
        _bindAtlasPageTexture(h, l, p) {
          h.activeTexture(h.TEXTURE0 + p), h.bindTexture(h.TEXTURE_2D, this._atlasTextures[p].texture), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE), h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, l.pages[p].canvas), h.generateMipmap(h.TEXTURE_2D), this._atlasTextures[p].version = l.pages[p].version;
        }
        setDimensions(h) {
          this._dimensions = h;
        }
      }
      i.GlyphRenderer = R;
    }, 742: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.RectangleRenderer = void 0;
      const g = d(381), a = d(310), r = d(859), u = d(374), v = 8 * Float32Array.BYTES_PER_ELEMENT;
      let n = 0, t = 0, e = 0, o = 0, y = 0, x = 0, R = 0;
      class w extends r.Disposable {
        constructor(l, p, s, f) {
          super(), this._terminal = l, this._gl = p, this._dimensions = s, this._themeService = f, this._vertices = { count: 0, attributes: new Float32Array(160) };
          const c = this._gl;
          this._program = (0, u.throwIfFalsy)((0, g.createProgram)(c, `#version 300 es
layout (location = 0) in vec2 a_position;
layout (location = 1) in vec2 a_size;
layout (location = 2) in vec4 a_color;
layout (location = 3) in vec2 a_unitquad;

uniform mat4 u_projection;

out vec4 v_color;

void main() {
  vec2 zeroToOne = a_position + (a_unitquad * a_size);
  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);
  v_color = a_color;
}`, `#version 300 es
precision lowp float;

in vec4 v_color;

out vec4 outColor;

void main() {
  outColor = v_color;
}`)), this.register((0, r.toDisposable)(() => c.deleteProgram(this._program))), this._projectionLocation = (0, u.throwIfFalsy)(c.getUniformLocation(this._program, "u_projection")), this._vertexArrayObject = c.createVertexArray(), c.bindVertexArray(this._vertexArrayObject);
          const _ = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), C = c.createBuffer();
          this.register((0, r.toDisposable)(() => c.deleteBuffer(C))), c.bindBuffer(c.ARRAY_BUFFER, C), c.bufferData(c.ARRAY_BUFFER, _, c.STATIC_DRAW), c.enableVertexAttribArray(3), c.vertexAttribPointer(3, 2, this._gl.FLOAT, !1, 0, 0);
          const m = new Uint8Array([0, 1, 2, 3]), M = c.createBuffer();
          this.register((0, r.toDisposable)(() => c.deleteBuffer(M))), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, M), c.bufferData(c.ELEMENT_ARRAY_BUFFER, m, c.STATIC_DRAW), this._attributesBuffer = (0, u.throwIfFalsy)(c.createBuffer()), this.register((0, r.toDisposable)(() => c.deleteBuffer(this._attributesBuffer))), c.bindBuffer(c.ARRAY_BUFFER, this._attributesBuffer), c.enableVertexAttribArray(0), c.vertexAttribPointer(0, 2, c.FLOAT, !1, v, 0), c.vertexAttribDivisor(0, 1), c.enableVertexAttribArray(1), c.vertexAttribPointer(1, 2, c.FLOAT, !1, v, 2 * Float32Array.BYTES_PER_ELEMENT), c.vertexAttribDivisor(1, 1), c.enableVertexAttribArray(2), c.vertexAttribPointer(2, 4, c.FLOAT, !1, v, 4 * Float32Array.BYTES_PER_ELEMENT), c.vertexAttribDivisor(2, 1), this._updateCachedColors(f.colors), this.register(this._themeService.onChangeColors((A) => {
            this._updateCachedColors(A), this._updateViewportRectangle();
          }));
        }
        render() {
          const l = this._gl;
          l.useProgram(this._program), l.bindVertexArray(this._vertexArrayObject), l.uniformMatrix4fv(this._projectionLocation, !1, g.PROJECTION_MATRIX), l.bindBuffer(l.ARRAY_BUFFER, this._attributesBuffer), l.bufferData(l.ARRAY_BUFFER, this._vertices.attributes, l.DYNAMIC_DRAW), l.drawElementsInstanced(this._gl.TRIANGLE_STRIP, 4, l.UNSIGNED_BYTE, 0, this._vertices.count);
        }
        handleResize() {
          this._updateViewportRectangle();
        }
        setDimensions(l) {
          this._dimensions = l;
        }
        _updateCachedColors(l) {
          this._bgFloat = this._colorToFloat32Array(l.background);
        }
        _updateViewportRectangle() {
          this._addRectangleFloat(this._vertices.attributes, 0, 0, 0, this._terminal.cols * this._dimensions.device.cell.width, this._terminal.rows * this._dimensions.device.cell.height, this._bgFloat);
        }
        updateBackgrounds(l) {
          const p = this._terminal, s = this._vertices;
          let f, c, _, C, m, M, A, b, L, T, E, P = 1;
          for (f = 0; f < p.rows; f++) {
            for (_ = -1, C = 0, m = 0, M = !1, c = 0; c < p.cols; c++)
              A = (f * p.cols + c) * a.RENDER_MODEL_INDICIES_PER_CELL, b = l.cells[A + a.RENDER_MODEL_BG_OFFSET], L = l.cells[A + a.RENDER_MODEL_FG_OFFSET], T = !!(67108864 & L), (b !== C || L !== m && (M || T)) && ((C !== 0 || M && m !== 0) && (E = 8 * P++, this._updateRectangle(s, E, m, C, _, c, f)), _ = c, C = b, m = L, M = T);
            (C !== 0 || M && m !== 0) && (E = 8 * P++, this._updateRectangle(s, E, m, C, _, p.cols, f));
          }
          s.count = P;
        }
        _updateRectangle(l, p, s, f, c, _, C) {
          if (67108864 & s)
            switch (50331648 & s) {
              case 16777216:
              case 33554432:
                n = this._themeService.colors.ansi[255 & s].rgba;
                break;
              case 50331648:
                n = (16777215 & s) << 8;
                break;
              default:
                n = this._themeService.colors.foreground.rgba;
            }
          else
            switch (50331648 & f) {
              case 16777216:
              case 33554432:
                n = this._themeService.colors.ansi[255 & f].rgba;
                break;
              case 50331648:
                n = (16777215 & f) << 8;
                break;
              default:
                n = this._themeService.colors.background.rgba;
            }
          l.attributes.length < p + 4 && (l.attributes = (0, g.expandFloat32Array)(l.attributes, this._terminal.rows * this._terminal.cols * 8)), t = c * this._dimensions.device.cell.width, e = C * this._dimensions.device.cell.height, o = (n >> 24 & 255) / 255, y = (n >> 16 & 255) / 255, x = (n >> 8 & 255) / 255, R = 1, this._addRectangle(l.attributes, p, t, e, (_ - c) * this._dimensions.device.cell.width, this._dimensions.device.cell.height, o, y, x, R);
        }
        _addRectangle(l, p, s, f, c, _, C, m, M, A) {
          l[p] = s / this._dimensions.device.canvas.width, l[p + 1] = f / this._dimensions.device.canvas.height, l[p + 2] = c / this._dimensions.device.canvas.width, l[p + 3] = _ / this._dimensions.device.canvas.height, l[p + 4] = C, l[p + 5] = m, l[p + 6] = M, l[p + 7] = A;
        }
        _addRectangleFloat(l, p, s, f, c, _, C) {
          l[p] = s / this._dimensions.device.canvas.width, l[p + 1] = f / this._dimensions.device.canvas.height, l[p + 2] = c / this._dimensions.device.canvas.width, l[p + 3] = _ / this._dimensions.device.canvas.height, l[p + 4] = C[0], l[p + 5] = C[1], l[p + 6] = C[2], l[p + 7] = C[3];
        }
        _colorToFloat32Array(l) {
          return new Float32Array([(l.rgba >> 24 & 255) / 255, (l.rgba >> 16 & 255) / 255, (l.rgba >> 8 & 255) / 255, (255 & l.rgba) / 255]);
        }
      }
      i.RectangleRenderer = w;
    }, 310: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.RenderModel = i.COMBINED_CHAR_BIT_MASK = i.RENDER_MODEL_EXT_OFFSET = i.RENDER_MODEL_FG_OFFSET = i.RENDER_MODEL_BG_OFFSET = i.RENDER_MODEL_INDICIES_PER_CELL = void 0;
      const g = d(296);
      i.RENDER_MODEL_INDICIES_PER_CELL = 4, i.RENDER_MODEL_BG_OFFSET = 1, i.RENDER_MODEL_FG_OFFSET = 2, i.RENDER_MODEL_EXT_OFFSET = 3, i.COMBINED_CHAR_BIT_MASK = 2147483648, i.RenderModel = class {
        constructor() {
          this.cells = new Uint32Array(0), this.lineLengths = new Uint32Array(0), this.selection = (0, g.createSelectionRenderModel)();
        }
        resize(a, r) {
          const u = a * r * i.RENDER_MODEL_INDICIES_PER_CELL;
          u !== this.cells.length && (this.cells = new Uint32Array(u), this.lineLengths = new Uint32Array(r));
        }
        clear() {
          this.cells.fill(0, 0), this.lineLengths.fill(0, 0);
        }
      };
    }, 666: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.JoinedCellData = i.WebglRenderer = void 0;
      const g = d(820), a = d(274), r = d(627), u = d(56), v = d(374), n = d(147), t = d(782), e = d(855), o = d(345), y = d(859), x = d(965), R = d(742), w = d(461), h = d(733), l = d(310);
      class p extends y.Disposable {
        constructor(_, C, m, M, A, b, L, T, E) {
          super(), this._terminal = _, this._characterJoinerService = C, this._charSizeService = m, this._coreBrowserService = M, this._decorationService = b, this._optionsService = L, this._themeService = T, this._model = new l.RenderModel(), this._workCell = new t.CellData(), this._onChangeTextureAtlas = this.register(new o.EventEmitter()), this.onChangeTextureAtlas = this._onChangeTextureAtlas.event, this._onAddTextureAtlasCanvas = this.register(new o.EventEmitter()), this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event, this._onRemoveTextureAtlasCanvas = this.register(new o.EventEmitter()), this.onRemoveTextureAtlasCanvas = this._onRemoveTextureAtlasCanvas.event, this._onRequestRedraw = this.register(new o.EventEmitter()), this.onRequestRedraw = this._onRequestRedraw.event, this._onContextLoss = this.register(new o.EventEmitter()), this.onContextLoss = this._onContextLoss.event, this.register(this._themeService.onChangeColors(() => this._handleColorChange())), this._cellColorResolver = new a.CellColorResolver(this._terminal, this._model.selection, this._decorationService, this._coreBrowserService, this._themeService), this._core = this._terminal._core, this._renderLayers = [new h.LinkRenderLayer(this._core.screenElement, 2, this._terminal, this._core.linkifier2, this._coreBrowserService, L, this._themeService), new w.CursorRenderLayer(_, this._core.screenElement, 3, this._onRequestRedraw, this._coreBrowserService, A, L, this._themeService)], this.dimensions = (0, v.createRenderDimensions)(), this._devicePixelRatio = this._coreBrowserService.dpr, this._updateDimensions(), this.register(L.onOptionChange(() => this._handleOptionsChanged())), this._canvas = document.createElement("canvas");
          const P = { antialias: !1, depth: !1, preserveDrawingBuffer: E };
          if (this._gl = this._canvas.getContext("webgl2", P), !this._gl)
            throw new Error("WebGL2 not supported " + this._gl);
          this.register((0, g.addDisposableDomListener)(this._canvas, "webglcontextlost", (B) => {
            console.log("webglcontextlost event received"), B.preventDefault(), this._contextRestorationTimeout = setTimeout(() => {
              this._contextRestorationTimeout = void 0, console.warn("webgl context not restored; firing onContextLoss"), this._onContextLoss.fire(B);
            }, 3e3);
          })), this.register((0, g.addDisposableDomListener)(this._canvas, "webglcontextrestored", (B) => {
            console.warn("webglcontextrestored event received"), clearTimeout(this._contextRestorationTimeout), this._contextRestorationTimeout = void 0, (0, r.removeTerminalFromCache)(this._terminal), this._initializeWebGLState(), this._requestRedrawViewport();
          })), this.register((0, u.observeDevicePixelDimensions)(this._canvas, this._coreBrowserService.window, (B, H) => this._setCanvasDevicePixelDimensions(B, H))), this._core.screenElement.appendChild(this._canvas), [this._rectangleRenderer, this._glyphRenderer] = this._initializeWebGLState(), this._isAttached = this._coreBrowserService.window.document.body.contains(this._core.screenElement), this.register((0, y.toDisposable)(() => {
            var B;
            for (const H of this._renderLayers)
              H.dispose();
            (B = this._canvas.parentElement) === null || B === void 0 || B.removeChild(this._canvas), (0, r.removeTerminalFromCache)(this._terminal);
          }));
        }
        get textureAtlas() {
          var _;
          return (_ = this._charAtlas) === null || _ === void 0 ? void 0 : _.pages[0].canvas;
        }
        _handleColorChange() {
          this._refreshCharAtlas(), this._clearModel(!0);
        }
        handleDevicePixelRatioChange() {
          this._devicePixelRatio !== this._coreBrowserService.dpr && (this._devicePixelRatio = this._coreBrowserService.dpr, this.handleResize(this._terminal.cols, this._terminal.rows));
        }
        handleResize(_, C) {
          var m, M, A, b;
          this._updateDimensions(), this._model.resize(this._terminal.cols, this._terminal.rows);
          for (const L of this._renderLayers)
            L.resize(this._terminal, this.dimensions);
          this._canvas.width = this.dimensions.device.canvas.width, this._canvas.height = this.dimensions.device.canvas.height, this._canvas.style.width = `${this.dimensions.css.canvas.width}px`, this._canvas.style.height = `${this.dimensions.css.canvas.height}px`, this._core.screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._core.screenElement.style.height = `${this.dimensions.css.canvas.height}px`, (m = this._rectangleRenderer) === null || m === void 0 || m.setDimensions(this.dimensions), (M = this._rectangleRenderer) === null || M === void 0 || M.handleResize(), (A = this._glyphRenderer) === null || A === void 0 || A.setDimensions(this.dimensions), (b = this._glyphRenderer) === null || b === void 0 || b.handleResize(), this._refreshCharAtlas(), this._clearModel(!1);
        }
        handleCharSizeChanged() {
          this.handleResize(this._terminal.cols, this._terminal.rows);
        }
        handleBlur() {
          for (const _ of this._renderLayers)
            _.handleBlur(this._terminal);
          this._requestRedrawViewport();
        }
        handleFocus() {
          for (const _ of this._renderLayers)
            _.handleFocus(this._terminal);
          this._requestRedrawViewport();
        }
        handleSelectionChanged(_, C, m) {
          for (const M of this._renderLayers)
            M.handleSelectionChanged(this._terminal, _, C, m);
          this._model.selection.update(this._terminal, _, C, m), this._requestRedrawViewport();
        }
        handleCursorMove() {
          for (const _ of this._renderLayers)
            _.handleCursorMove(this._terminal);
        }
        _handleOptionsChanged() {
          this._updateDimensions(), this._refreshCharAtlas();
        }
        _initializeWebGLState() {
          var _, C;
          return (_ = this._rectangleRenderer) === null || _ === void 0 || _.dispose(), (C = this._glyphRenderer) === null || C === void 0 || C.dispose(), this._rectangleRenderer = this.register(new R.RectangleRenderer(this._terminal, this._gl, this.dimensions, this._themeService)), this._glyphRenderer = this.register(new x.GlyphRenderer(this._terminal, this._gl, this.dimensions)), this.handleCharSizeChanged(), [this._rectangleRenderer, this._glyphRenderer];
        }
        _refreshCharAtlas() {
          var _, C;
          if (this.dimensions.device.char.width <= 0 && this.dimensions.device.char.height <= 0)
            return void (this._isAttached = !1);
          const m = (0, r.acquireTextureAtlas)(this._terminal, this._optionsService.rawOptions, this._themeService.colors, this.dimensions.device.cell.width, this.dimensions.device.cell.height, this.dimensions.device.char.width, this.dimensions.device.char.height, this._coreBrowserService.dpr);
          this._charAtlas !== m && ((_ = this._charAtlasDisposable) === null || _ === void 0 || _.dispose(), this._onChangeTextureAtlas.fire(m.pages[0].canvas), this._charAtlasDisposable = (0, y.getDisposeArrayDisposable)([(0, o.forwardEvent)(m.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas), (0, o.forwardEvent)(m.onRemoveTextureAtlasCanvas, this._onRemoveTextureAtlasCanvas)])), this._charAtlas = m, this._charAtlas.warmUp(), (C = this._glyphRenderer) === null || C === void 0 || C.setAtlas(this._charAtlas);
        }
        _clearModel(_) {
          var C;
          this._model.clear(), _ && ((C = this._glyphRenderer) === null || C === void 0 || C.clear());
        }
        clearTextureAtlas() {
          var _;
          (_ = this._charAtlas) === null || _ === void 0 || _.clearTexture(), this._clearModel(!0), this._requestRedrawViewport();
        }
        clear() {
          this._clearModel(!0);
          for (const _ of this._renderLayers)
            _.reset(this._terminal);
        }
        registerCharacterJoiner(_) {
          return -1;
        }
        deregisterCharacterJoiner(_) {
          return !1;
        }
        renderRows(_, C) {
          var m, M;
          if (!this._isAttached) {
            if (!(this._coreBrowserService.window.document.body.contains(this._core.screenElement) && this._charSizeService.width && this._charSizeService.height))
              return;
            this._updateDimensions(), this._refreshCharAtlas(), this._isAttached = !0;
          }
          for (const A of this._renderLayers)
            A.handleGridChanged(this._terminal, _, C);
          this._glyphRenderer && this._rectangleRenderer && (this._glyphRenderer.beginFrame() ? (this._clearModel(!0), this._updateModel(0, this._terminal.rows - 1)) : this._updateModel(_, C), (m = this._rectangleRenderer) === null || m === void 0 || m.render(), (M = this._glyphRenderer) === null || M === void 0 || M.render(this._model));
        }
        _updateModel(_, C) {
          const m = this._core;
          let M, A, b, L, T, E, P, B, H, W, N, I, z, q = this._workCell;
          for (_ = f(_, m.rows - 1, 0), C = f(C, m.rows - 1, 0), A = _; A <= C; A++)
            for (b = A + m.buffer.ydisp, L = m.buffer.lines.get(b), this._model.lineLengths[A] = 0, T = this._characterJoinerService.getJoinedCharacters(b), I = 0; I < m.cols; I++)
              if (M = this._cellColorResolver.result.bg, L.loadCell(I, q), I === 0 && (M = this._cellColorResolver.result.bg), E = !1, P = I, T.length > 0 && I === T[0][0] && (E = !0, B = T.shift(), q = new s(q, L.translateToString(!0, B[0], B[1]), B[1] - B[0]), P = B[1] - 1), H = q.getChars(), W = q.getCode(), N = (A * m.cols + I) * l.RENDER_MODEL_INDICIES_PER_CELL, this._cellColorResolver.resolve(q, I, b), W !== e.NULL_CELL_CODE && (this._model.lineLengths[A] = I + 1), (this._model.cells[N] !== W || this._model.cells[N + l.RENDER_MODEL_BG_OFFSET] !== this._cellColorResolver.result.bg || this._model.cells[N + l.RENDER_MODEL_FG_OFFSET] !== this._cellColorResolver.result.fg || this._model.cells[N + l.RENDER_MODEL_EXT_OFFSET] !== this._cellColorResolver.result.ext) && (H.length > 1 && (W |= l.COMBINED_CHAR_BIT_MASK), this._model.cells[N] = W, this._model.cells[N + l.RENDER_MODEL_BG_OFFSET] = this._cellColorResolver.result.bg, this._model.cells[N + l.RENDER_MODEL_FG_OFFSET] = this._cellColorResolver.result.fg, this._model.cells[N + l.RENDER_MODEL_EXT_OFFSET] = this._cellColorResolver.result.ext, this._glyphRenderer.updateCell(I, A, W, this._cellColorResolver.result.bg, this._cellColorResolver.result.fg, this._cellColorResolver.result.ext, H, M), E))
                for (q = this._workCell, I++; I < P; I++)
                  z = (A * m.cols + I) * l.RENDER_MODEL_INDICIES_PER_CELL, this._glyphRenderer.updateCell(I, A, e.NULL_CELL_CODE, 0, 0, 0, e.NULL_CELL_CHAR, 0), this._model.cells[z] = e.NULL_CELL_CODE, this._model.cells[z + l.RENDER_MODEL_BG_OFFSET] = this._cellColorResolver.result.bg, this._model.cells[z + l.RENDER_MODEL_FG_OFFSET] = this._cellColorResolver.result.fg, this._model.cells[z + l.RENDER_MODEL_EXT_OFFSET] = this._cellColorResolver.result.ext;
          this._rectangleRenderer.updateBackgrounds(this._model);
        }
        _updateDimensions() {
          this._charSizeService.width && this._charSizeService.height && (this.dimensions.device.char.width = Math.floor(this._charSizeService.width * this._devicePixelRatio), this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * this._devicePixelRatio), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.top = this._optionsService.rawOptions.lineHeight === 1 ? 0 : Math.round((this.dimensions.device.cell.height - this.dimensions.device.char.height) / 2), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.char.left = Math.floor(this._optionsService.rawOptions.letterSpacing / 2), this.dimensions.device.canvas.height = this._terminal.rows * this.dimensions.device.cell.height, this.dimensions.device.canvas.width = this._terminal.cols * this.dimensions.device.cell.width, this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / this._devicePixelRatio), this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / this._devicePixelRatio), this.dimensions.css.cell.height = this.dimensions.device.cell.height / this._devicePixelRatio, this.dimensions.css.cell.width = this.dimensions.device.cell.width / this._devicePixelRatio);
        }
        _setCanvasDevicePixelDimensions(_, C) {
          this._canvas.width === _ && this._canvas.height === C || (this._canvas.width = _, this._canvas.height = C, this._requestRedrawViewport());
        }
        _requestRedrawViewport() {
          this._onRequestRedraw.fire({ start: 0, end: this._terminal.rows - 1 });
        }
      }
      i.WebglRenderer = p;
      class s extends n.AttributeData {
        constructor(_, C, m) {
          super(), this.content = 0, this.combinedData = "", this.fg = _.fg, this.bg = _.bg, this.combinedData = C, this._width = m;
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
        setFromCharData(_) {
          throw new Error("not implemented");
        }
        getAsCharData() {
          return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
        }
      }
      function f(c, _, C = 0) {
        return Math.max(Math.min(c, _), C);
      }
      i.JoinedCellData = s;
    }, 381: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.GLTexture = i.expandFloat32Array = i.createShader = i.createProgram = i.PROJECTION_MATRIX = void 0;
      const g = d(374);
      function a(r, u, v) {
        const n = (0, g.throwIfFalsy)(r.createShader(u));
        if (r.shaderSource(n, v), r.compileShader(n), r.getShaderParameter(n, r.COMPILE_STATUS))
          return n;
        console.error(r.getShaderInfoLog(n)), r.deleteShader(n);
      }
      i.PROJECTION_MATRIX = new Float32Array([2, 0, 0, 0, 0, -2, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1]), i.createProgram = function(r, u, v) {
        const n = (0, g.throwIfFalsy)(r.createProgram());
        if (r.attachShader(n, (0, g.throwIfFalsy)(a(r, r.VERTEX_SHADER, u))), r.attachShader(n, (0, g.throwIfFalsy)(a(r, r.FRAGMENT_SHADER, v))), r.linkProgram(n), r.getProgramParameter(n, r.LINK_STATUS))
          return n;
        console.error(r.getProgramInfoLog(n)), r.deleteProgram(n);
      }, i.createShader = a, i.expandFloat32Array = function(r, u) {
        const v = Math.min(2 * r.length, u), n = new Float32Array(v);
        for (let t = 0; t < r.length; t++)
          n[t] = r[t];
        return n;
      }, i.GLTexture = class {
        constructor(r) {
          this.texture = r, this.version = -1;
        }
      };
    }, 592: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.BaseRenderLayer = void 0;
      const g = d(627), a = d(237), r = d(374), u = d(859);
      class v extends u.Disposable {
        constructor(t, e, o, y, x, R, w, h) {
          super(), this._container = e, this._alpha = x, this._coreBrowserService = R, this._optionsService = w, this._themeService = h, this._deviceCharWidth = 0, this._deviceCharHeight = 0, this._deviceCellWidth = 0, this._deviceCellHeight = 0, this._deviceCharLeft = 0, this._deviceCharTop = 0, this._canvas = document.createElement("canvas"), this._canvas.classList.add(`xterm-${o}-layer`), this._canvas.style.zIndex = y.toString(), this._initCanvas(), this._container.appendChild(this._canvas), this.register(this._themeService.onChangeColors((l) => {
            this._refreshCharAtlas(t, l), this.reset(t);
          })), this.register((0, u.toDisposable)(() => {
            var l;
            this._canvas.remove(), (l = this._charAtlas) === null || l === void 0 || l.dispose();
          }));
        }
        _initCanvas() {
          this._ctx = (0, r.throwIfFalsy)(this._canvas.getContext("2d", { alpha: this._alpha })), this._alpha || this._clearAll();
        }
        handleBlur(t) {
        }
        handleFocus(t) {
        }
        handleCursorMove(t) {
        }
        handleGridChanged(t, e, o) {
        }
        handleSelectionChanged(t, e, o, y = !1) {
        }
        _setTransparency(t, e) {
          if (e === this._alpha)
            return;
          const o = this._canvas;
          this._alpha = e, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, o), this._refreshCharAtlas(t, this._themeService.colors), this.handleGridChanged(t, 0, t.rows - 1);
        }
        _refreshCharAtlas(t, e) {
          this._deviceCharWidth <= 0 && this._deviceCharHeight <= 0 || (this._charAtlas = (0, g.acquireTextureAtlas)(t, this._optionsService.rawOptions, e, this._deviceCellWidth, this._deviceCellHeight, this._deviceCharWidth, this._deviceCharHeight, this._coreBrowserService.dpr), this._charAtlas.warmUp());
        }
        resize(t, e) {
          this._deviceCellWidth = e.device.cell.width, this._deviceCellHeight = e.device.cell.height, this._deviceCharWidth = e.device.char.width, this._deviceCharHeight = e.device.char.height, this._deviceCharLeft = e.device.char.left, this._deviceCharTop = e.device.char.top, this._canvas.width = e.device.canvas.width, this._canvas.height = e.device.canvas.height, this._canvas.style.width = `${e.css.canvas.width}px`, this._canvas.style.height = `${e.css.canvas.height}px`, this._alpha || this._clearAll(), this._refreshCharAtlas(t, this._themeService.colors);
        }
        _fillCells(t, e, o, y) {
          this._ctx.fillRect(t * this._deviceCellWidth, e * this._deviceCellHeight, o * this._deviceCellWidth, y * this._deviceCellHeight);
        }
        _fillBottomLineAtCells(t, e, o = 1) {
          this._ctx.fillRect(t * this._deviceCellWidth, (e + 1) * this._deviceCellHeight - this._coreBrowserService.dpr - 1, o * this._deviceCellWidth, this._coreBrowserService.dpr);
        }
        _fillLeftLineAtCell(t, e, o) {
          this._ctx.fillRect(t * this._deviceCellWidth, e * this._deviceCellHeight, this._coreBrowserService.dpr * o, this._deviceCellHeight);
        }
        _strokeRectAtCell(t, e, o, y) {
          this._ctx.lineWidth = this._coreBrowserService.dpr, this._ctx.strokeRect(t * this._deviceCellWidth + this._coreBrowserService.dpr / 2, e * this._deviceCellHeight + this._coreBrowserService.dpr / 2, o * this._deviceCellWidth - this._coreBrowserService.dpr, y * this._deviceCellHeight - this._coreBrowserService.dpr);
        }
        _clearAll() {
          this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._themeService.colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height));
        }
        _clearCells(t, e, o, y) {
          this._alpha ? this._ctx.clearRect(t * this._deviceCellWidth, e * this._deviceCellHeight, o * this._deviceCellWidth, y * this._deviceCellHeight) : (this._ctx.fillStyle = this._themeService.colors.background.css, this._ctx.fillRect(t * this._deviceCellWidth, e * this._deviceCellHeight, o * this._deviceCellWidth, y * this._deviceCellHeight));
        }
        _fillCharTrueColor(t, e, o, y) {
          this._ctx.font = this._getFont(t, !1, !1), this._ctx.textBaseline = a.TEXT_BASELINE, this._clipCell(o, y, e.getWidth()), this._ctx.fillText(e.getChars(), o * this._deviceCellWidth + this._deviceCharLeft, y * this._deviceCellHeight + this._deviceCharTop + this._deviceCharHeight);
        }
        _clipCell(t, e, o) {
          this._ctx.beginPath(), this._ctx.rect(t * this._deviceCellWidth, e * this._deviceCellHeight, o * this._deviceCellWidth, this._deviceCellHeight), this._ctx.clip();
        }
        _getFont(t, e, o) {
          return `${o ? "italic" : ""} ${e ? t.options.fontWeightBold : t.options.fontWeight} ${t.options.fontSize * this._coreBrowserService.dpr}px ${t.options.fontFamily}`;
        }
      }
      i.BaseRenderLayer = v;
    }, 461: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.CursorRenderLayer = void 0;
      const g = d(592), a = d(782), r = d(859), u = d(399);
      class v extends g.BaseRenderLayer {
        constructor(e, o, y, x, R, w, h, l) {
          super(e, o, "cursor", y, !0, R, h, l), this._onRequestRefreshRowsEvent = x, this._coreService = w, this._cell = new a.CellData(), this._state = { x: 0, y: 0, isFocused: !1, style: "", width: 0 }, this._cursorRenderers = { bar: this._renderBarCursor.bind(this), block: this._renderBlockCursor.bind(this), underline: this._renderUnderlineCursor.bind(this) }, this._handleOptionsChanged(e), this.register(h.onOptionChange(() => this._handleOptionsChanged(e))), this.register((0, r.toDisposable)(() => {
            var p;
            (p = this._cursorBlinkStateManager) === null || p === void 0 || p.dispose(), this._cursorBlinkStateManager = void 0;
          }));
        }
        resize(e, o) {
          super.resize(e, o), this._state = { x: 0, y: 0, isFocused: !1, style: "", width: 0 };
        }
        reset(e) {
          var o;
          this._clearCursor(), (o = this._cursorBlinkStateManager) === null || o === void 0 || o.restartBlinkAnimation(e), this._handleOptionsChanged(e);
        }
        handleBlur(e) {
          var o;
          (o = this._cursorBlinkStateManager) === null || o === void 0 || o.pause(), this._onRequestRefreshRowsEvent.fire({ start: e.buffer.active.cursorY, end: e.buffer.active.cursorY });
        }
        handleFocus(e) {
          var o;
          (o = this._cursorBlinkStateManager) === null || o === void 0 || o.resume(e), this._onRequestRefreshRowsEvent.fire({ start: e.buffer.active.cursorY, end: e.buffer.active.cursorY });
        }
        _handleOptionsChanged(e) {
          var o;
          e.options.cursorBlink ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new n(() => {
            this._render(e, !0);
          }, this._coreBrowserService)) : ((o = this._cursorBlinkStateManager) === null || o === void 0 || o.dispose(), this._cursorBlinkStateManager = void 0), this._onRequestRefreshRowsEvent.fire({ start: e.buffer.active.cursorY, end: e.buffer.active.cursorY });
        }
        handleCursorMove(e) {
          var o;
          (o = this._cursorBlinkStateManager) === null || o === void 0 || o.restartBlinkAnimation(e);
        }
        handleGridChanged(e, o, y) {
          !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(e, !1) : this._cursorBlinkStateManager.restartBlinkAnimation(e);
        }
        _render(e, o) {
          if (!this._coreService.isCursorInitialized || this._coreService.isCursorHidden)
            return void this._clearCursor();
          const y = e.buffer.active.baseY + e.buffer.active.cursorY, x = y - e.buffer.active.viewportY, R = Math.min(e.buffer.active.cursorX, e.cols - 1);
          if (x < 0 || x >= e.rows)
            this._clearCursor();
          else if (e._core.buffer.lines.get(y).loadCell(R, this._cell), this._cell.content !== void 0) {
            if (!this._coreBrowserService.isFocused) {
              this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css;
              const w = e.options.cursorStyle;
              return this._renderBlurCursor(e, R, x, this._cell), this._ctx.restore(), this._state.x = R, this._state.y = x, this._state.isFocused = !1, this._state.style = w, void (this._state.width = this._cell.getWidth());
            }
            if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
              if (this._state) {
                if (this._state.x === R && this._state.y === x && this._state.isFocused === this._coreBrowserService.isFocused && this._state.style === e.options.cursorStyle && this._state.width === this._cell.getWidth())
                  return;
                this._clearCursor();
              }
              this._ctx.save(), this._cursorRenderers[e.options.cursorStyle || "block"](e, R, x, this._cell), this._ctx.restore(), this._state.x = R, this._state.y = x, this._state.isFocused = !1, this._state.style = e.options.cursorStyle, this._state.width = this._cell.getWidth();
            } else
              this._clearCursor();
          }
        }
        _clearCursor() {
          this._state && (u.isFirefox || this._coreBrowserService.dpr < 1 ? this._clearAll() : this._clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = { x: 0, y: 0, isFocused: !1, style: "", width: 0 });
        }
        _renderBarCursor(e, o, y, x) {
          this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css, this._fillLeftLineAtCell(o, y, this._optionsService.rawOptions.cursorWidth), this._ctx.restore();
        }
        _renderBlockCursor(e, o, y, x) {
          this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css, this._fillCells(o, y, x.getWidth(), 1), this._ctx.fillStyle = this._themeService.colors.cursorAccent.css, this._fillCharTrueColor(e, x, o, y), this._ctx.restore();
        }
        _renderUnderlineCursor(e, o, y, x) {
          this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css, this._fillBottomLineAtCells(o, y), this._ctx.restore();
        }
        _renderBlurCursor(e, o, y, x) {
          this._ctx.save(), this._ctx.strokeStyle = this._themeService.colors.cursor.css, this._strokeRectAtCell(o, y, x.getWidth(), 1), this._ctx.restore();
        }
      }
      i.CursorRenderLayer = v;
      class n {
        constructor(e, o) {
          this._renderCallback = e, this._coreBrowserService = o, this.isCursorVisible = !0, this._coreBrowserService.isFocused && this._restartInterval();
        }
        get isPaused() {
          return !(this._blinkStartTimeout || this._blinkInterval);
        }
        dispose() {
          this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (this._coreBrowserService.window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
        }
        restartBlinkAnimation(e) {
          this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = !0, this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
            this._renderCallback(), this._animationFrame = void 0;
          })));
        }
        _restartInterval(e = 600) {
          this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout = this._coreBrowserService.window.setTimeout(() => {
            if (this._animationTimeRestarted) {
              const o = 600 - (Date.now() - this._animationTimeRestarted);
              if (this._animationTimeRestarted = void 0, o > 0)
                return void this._restartInterval(o);
            }
            this.isCursorVisible = !1, this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
              this._renderCallback(), this._animationFrame = void 0;
            }), this._blinkInterval = this._coreBrowserService.window.setInterval(() => {
              if (this._animationTimeRestarted) {
                const o = 600 - (Date.now() - this._animationTimeRestarted);
                return this._animationTimeRestarted = void 0, void this._restartInterval(o);
              }
              this.isCursorVisible = !this.isCursorVisible, this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
                this._renderCallback(), this._animationFrame = void 0;
              });
            }, 600);
          }, e);
        }
        pause() {
          this.isCursorVisible = !0, this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (this._coreBrowserService.window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
        }
        resume(e) {
          this.pause(), this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation(e);
        }
      }
    }, 733: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.LinkRenderLayer = void 0;
      const g = d(197), a = d(237), r = d(592);
      class u extends r.BaseRenderLayer {
        constructor(n, t, e, o, y, x, R) {
          super(e, n, "link", t, !0, y, x, R), this.register(o.onShowLinkUnderline((w) => this._handleShowLinkUnderline(w))), this.register(o.onHideLinkUnderline((w) => this._handleHideLinkUnderline(w)));
        }
        resize(n, t) {
          super.resize(n, t), this._state = void 0;
        }
        reset(n) {
          this._clearCurrentLink();
        }
        _clearCurrentLink() {
          if (this._state) {
            this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
            const n = this._state.y2 - this._state.y1 - 1;
            n > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, n), this._clearCells(0, this._state.y2, this._state.x2, 1), this._state = void 0;
          }
        }
        _handleShowLinkUnderline(n) {
          if (n.fg === a.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._themeService.colors.background.css : n.fg !== void 0 && (0, g.is256Color)(n.fg) ? this._ctx.fillStyle = this._themeService.colors.ansi[n.fg].css : this._ctx.fillStyle = this._themeService.colors.foreground.css, n.y1 === n.y2)
            this._fillBottomLineAtCells(n.x1, n.y1, n.x2 - n.x1);
          else {
            this._fillBottomLineAtCells(n.x1, n.y1, n.cols - n.x1);
            for (let t = n.y1 + 1; t < n.y2; t++)
              this._fillBottomLineAtCells(0, t, n.cols);
            this._fillBottomLineAtCells(0, n.y2, n.x2);
          }
          this._state = n;
        }
        _handleHideLinkUnderline(n) {
          this._clearCurrentLink();
        }
      }
      i.LinkRenderLayer = u;
    }, 820: (D, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.addDisposableDomListener = void 0, i.addDisposableDomListener = function(d, g, a, r) {
        d.addEventListener(g, a, r);
        let u = !1;
        return { dispose: () => {
          u || (u = !0, d.removeEventListener(g, a, r));
        } };
      };
    }, 274: (D, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.CellColorResolver = void 0;
      let d, g = 0, a = 0, r = !1, u = !1, v = !1;
      i.CellColorResolver = class {
        constructor(n, t, e, o, y) {
          this._terminal = n, this._selectionRenderModel = t, this._decorationService = e, this._coreBrowserService = o, this._themeService = y, this.result = { fg: 0, bg: 0, ext: 0 };
        }
        resolve(n, t, e) {
          this.result.bg = n.bg, this.result.fg = n.fg, this.result.ext = 268435456 & n.bg ? n.extended.ext : 0, a = 0, g = 0, u = !1, r = !1, v = !1, d = this._themeService.colors, this._decorationService.forEachDecorationAtCell(t, e, "bottom", (o) => {
            o.backgroundColorRGB && (a = o.backgroundColorRGB.rgba >> 8 & 16777215, u = !0), o.foregroundColorRGB && (g = o.foregroundColorRGB.rgba >> 8 & 16777215, r = !0);
          }), v = this._selectionRenderModel.isCellSelected(this._terminal, t, e), v && (a = (this._coreBrowserService.isFocused ? d.selectionBackgroundOpaque : d.selectionInactiveBackgroundOpaque).rgba >> 8 & 16777215, u = !0, d.selectionForeground && (g = d.selectionForeground.rgba >> 8 & 16777215, r = !0)), this._decorationService.forEachDecorationAtCell(t, e, "top", (o) => {
            o.backgroundColorRGB && (a = o.backgroundColorRGB.rgba >> 8 & 16777215, u = !0), o.foregroundColorRGB && (g = o.foregroundColorRGB.rgba >> 8 & 16777215, r = !0);
          }), u && (a = v ? -16777216 & n.bg & -134217729 | a | 50331648 : -16777216 & n.bg | a | 50331648), r && (g = -16777216 & n.fg & -67108865 | g | 50331648), 67108864 & this.result.fg && (u && !r && (g = 50331648 & this.result.bg ? -134217728 & this.result.fg | 67108863 & this.result.bg : -134217728 & this.result.fg | 16777215 & d.background.rgba >> 8 | 50331648, r = !0), !u && r && (a = 50331648 & this.result.fg ? -67108864 & this.result.bg | 67108863 & this.result.fg : -67108864 & this.result.bg | 16777215 & d.foreground.rgba >> 8 | 50331648, u = !0)), d = void 0, this.result.bg = u ? a : this.result.bg, this.result.fg = r ? g : this.result.fg;
        }
      };
    }, 627: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.removeTerminalFromCache = i.acquireTextureAtlas = void 0;
      const g = d(509), a = d(197), r = [];
      i.acquireTextureAtlas = function(u, v, n, t, e, o, y, x) {
        const R = (0, a.generateConfig)(t, e, o, y, v, n, x);
        for (let l = 0; l < r.length; l++) {
          const p = r[l], s = p.ownedBy.indexOf(u);
          if (s >= 0) {
            if ((0, a.configEquals)(p.config, R))
              return p.atlas;
            p.ownedBy.length === 1 ? (p.atlas.dispose(), r.splice(l, 1)) : p.ownedBy.splice(s, 1);
            break;
          }
        }
        for (let l = 0; l < r.length; l++) {
          const p = r[l];
          if ((0, a.configEquals)(p.config, R))
            return p.ownedBy.push(u), p.atlas;
        }
        const w = u._core, h = { atlas: new g.TextureAtlas(document, R, w.unicodeService), config: R, ownedBy: [u] };
        return r.push(h), h.atlas;
      }, i.removeTerminalFromCache = function(u) {
        for (let v = 0; v < r.length; v++) {
          const n = r[v].ownedBy.indexOf(u);
          if (n !== -1) {
            r[v].ownedBy.length === 1 ? (r[v].atlas.dispose(), r.splice(v, 1)) : r[v].ownedBy.splice(n, 1);
            break;
          }
        }
      };
    }, 197: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.is256Color = i.configEquals = i.generateConfig = void 0;
      const g = d(160);
      i.generateConfig = function(a, r, u, v, n, t, e) {
        const o = { foreground: t.foreground, background: t.background, cursor: g.NULL_COLOR, cursorAccent: g.NULL_COLOR, selectionForeground: g.NULL_COLOR, selectionBackgroundTransparent: g.NULL_COLOR, selectionBackgroundOpaque: g.NULL_COLOR, selectionInactiveBackgroundTransparent: g.NULL_COLOR, selectionInactiveBackgroundOpaque: g.NULL_COLOR, ansi: t.ansi.slice(), contrastCache: t.contrastCache };
        return { customGlyphs: n.customGlyphs, devicePixelRatio: e, letterSpacing: n.letterSpacing, lineHeight: n.lineHeight, deviceCellWidth: a, deviceCellHeight: r, deviceCharWidth: u, deviceCharHeight: v, fontFamily: n.fontFamily, fontSize: n.fontSize, fontWeight: n.fontWeight, fontWeightBold: n.fontWeightBold, allowTransparency: n.allowTransparency, drawBoldTextInBrightColors: n.drawBoldTextInBrightColors, minimumContrastRatio: n.minimumContrastRatio, colors: o };
      }, i.configEquals = function(a, r) {
        for (let u = 0; u < a.colors.ansi.length; u++)
          if (a.colors.ansi[u].rgba !== r.colors.ansi[u].rgba)
            return !1;
        return a.devicePixelRatio === r.devicePixelRatio && a.customGlyphs === r.customGlyphs && a.lineHeight === r.lineHeight && a.letterSpacing === r.letterSpacing && a.fontFamily === r.fontFamily && a.fontSize === r.fontSize && a.fontWeight === r.fontWeight && a.fontWeightBold === r.fontWeightBold && a.allowTransparency === r.allowTransparency && a.deviceCharWidth === r.deviceCharWidth && a.deviceCharHeight === r.deviceCharHeight && a.drawBoldTextInBrightColors === r.drawBoldTextInBrightColors && a.minimumContrastRatio === r.minimumContrastRatio && a.colors.foreground.rgba === r.colors.foreground.rgba && a.colors.background.rgba === r.colors.background.rgba;
      }, i.is256Color = function(a) {
        return (50331648 & a) == 16777216 || (50331648 & a) == 33554432;
      };
    }, 237: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.TEXT_BASELINE = i.DIM_OPACITY = i.INVERTED_DEFAULT_COLOR = void 0;
      const g = d(399);
      i.INVERTED_DEFAULT_COLOR = 257, i.DIM_OPACITY = 0.5, i.TEXT_BASELINE = g.isFirefox || g.isLegacyEdge ? "bottom" : "ideographic";
    }, 860: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.tryDrawCustomChar = i.powerlineDefinitions = i.boxDrawingDefinitions = i.blockElementDefinitions = void 0;
      const g = d(374);
      i.blockElementDefinitions = { "▀": [{ x: 0, y: 0, w: 8, h: 4 }], "▁": [{ x: 0, y: 7, w: 8, h: 1 }], "▂": [{ x: 0, y: 6, w: 8, h: 2 }], "▃": [{ x: 0, y: 5, w: 8, h: 3 }], "▄": [{ x: 0, y: 4, w: 8, h: 4 }], "▅": [{ x: 0, y: 3, w: 8, h: 5 }], "▆": [{ x: 0, y: 2, w: 8, h: 6 }], "▇": [{ x: 0, y: 1, w: 8, h: 7 }], "█": [{ x: 0, y: 0, w: 8, h: 8 }], "▉": [{ x: 0, y: 0, w: 7, h: 8 }], "▊": [{ x: 0, y: 0, w: 6, h: 8 }], "▋": [{ x: 0, y: 0, w: 5, h: 8 }], "▌": [{ x: 0, y: 0, w: 4, h: 8 }], "▍": [{ x: 0, y: 0, w: 3, h: 8 }], "▎": [{ x: 0, y: 0, w: 2, h: 8 }], "▏": [{ x: 0, y: 0, w: 1, h: 8 }], "▐": [{ x: 4, y: 0, w: 4, h: 8 }], "▔": [{ x: 0, y: 0, w: 8, h: 1 }], "▕": [{ x: 7, y: 0, w: 1, h: 8 }], "▖": [{ x: 0, y: 4, w: 4, h: 4 }], "▗": [{ x: 4, y: 4, w: 4, h: 4 }], "▘": [{ x: 0, y: 0, w: 4, h: 4 }], "▙": [{ x: 0, y: 0, w: 4, h: 8 }, { x: 0, y: 4, w: 8, h: 4 }], "▚": [{ x: 0, y: 0, w: 4, h: 4 }, { x: 4, y: 4, w: 4, h: 4 }], "▛": [{ x: 0, y: 0, w: 4, h: 8 }, { x: 4, y: 0, w: 4, h: 4 }], "▜": [{ x: 0, y: 0, w: 8, h: 4 }, { x: 4, y: 0, w: 4, h: 8 }], "▝": [{ x: 4, y: 0, w: 4, h: 4 }], "▞": [{ x: 4, y: 0, w: 4, h: 4 }, { x: 0, y: 4, w: 4, h: 4 }], "▟": [{ x: 4, y: 0, w: 4, h: 8 }, { x: 0, y: 4, w: 8, h: 4 }], "🭰": [{ x: 1, y: 0, w: 1, h: 8 }], "🭱": [{ x: 2, y: 0, w: 1, h: 8 }], "🭲": [{ x: 3, y: 0, w: 1, h: 8 }], "🭳": [{ x: 4, y: 0, w: 1, h: 8 }], "🭴": [{ x: 5, y: 0, w: 1, h: 8 }], "🭵": [{ x: 6, y: 0, w: 1, h: 8 }], "🭶": [{ x: 0, y: 1, w: 8, h: 1 }], "🭷": [{ x: 0, y: 2, w: 8, h: 1 }], "🭸": [{ x: 0, y: 3, w: 8, h: 1 }], "🭹": [{ x: 0, y: 4, w: 8, h: 1 }], "🭺": [{ x: 0, y: 5, w: 8, h: 1 }], "🭻": [{ x: 0, y: 6, w: 8, h: 1 }], "🭼": [{ x: 0, y: 0, w: 1, h: 8 }, { x: 0, y: 7, w: 8, h: 1 }], "🭽": [{ x: 0, y: 0, w: 1, h: 8 }, { x: 0, y: 0, w: 8, h: 1 }], "🭾": [{ x: 7, y: 0, w: 1, h: 8 }, { x: 0, y: 0, w: 8, h: 1 }], "🭿": [{ x: 7, y: 0, w: 1, h: 8 }, { x: 0, y: 7, w: 8, h: 1 }], "🮀": [{ x: 0, y: 0, w: 8, h: 1 }, { x: 0, y: 7, w: 8, h: 1 }], "🮁": [{ x: 0, y: 0, w: 8, h: 1 }, { x: 0, y: 2, w: 8, h: 1 }, { x: 0, y: 4, w: 8, h: 1 }, { x: 0, y: 7, w: 8, h: 1 }], "🮂": [{ x: 0, y: 0, w: 8, h: 2 }], "🮃": [{ x: 0, y: 0, w: 8, h: 3 }], "🮄": [{ x: 0, y: 0, w: 8, h: 5 }], "🮅": [{ x: 0, y: 0, w: 8, h: 6 }], "🮆": [{ x: 0, y: 0, w: 8, h: 7 }], "🮇": [{ x: 6, y: 0, w: 2, h: 8 }], "🮈": [{ x: 5, y: 0, w: 3, h: 8 }], "🮉": [{ x: 3, y: 0, w: 5, h: 8 }], "🮊": [{ x: 2, y: 0, w: 6, h: 8 }], "🮋": [{ x: 1, y: 0, w: 7, h: 8 }], "🮕": [{ x: 0, y: 0, w: 2, h: 2 }, { x: 4, y: 0, w: 2, h: 2 }, { x: 2, y: 2, w: 2, h: 2 }, { x: 6, y: 2, w: 2, h: 2 }, { x: 0, y: 4, w: 2, h: 2 }, { x: 4, y: 4, w: 2, h: 2 }, { x: 2, y: 6, w: 2, h: 2 }, { x: 6, y: 6, w: 2, h: 2 }], "🮖": [{ x: 2, y: 0, w: 2, h: 2 }, { x: 6, y: 0, w: 2, h: 2 }, { x: 0, y: 2, w: 2, h: 2 }, { x: 4, y: 2, w: 2, h: 2 }, { x: 2, y: 4, w: 2, h: 2 }, { x: 6, y: 4, w: 2, h: 2 }, { x: 0, y: 6, w: 2, h: 2 }, { x: 4, y: 6, w: 2, h: 2 }], "🮗": [{ x: 0, y: 2, w: 8, h: 2 }, { x: 0, y: 6, w: 8, h: 2 }] };
      const a = { "░": [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]], "▒": [[1, 0], [0, 0], [0, 1], [0, 0]], "▓": [[0, 1], [1, 1], [1, 0], [1, 1]] };
      i.boxDrawingDefinitions = { "─": { 1: "M0,.5 L1,.5" }, "━": { 3: "M0,.5 L1,.5" }, "│": { 1: "M.5,0 L.5,1" }, "┃": { 3: "M.5,0 L.5,1" }, "┌": { 1: "M0.5,1 L.5,.5 L1,.5" }, "┏": { 3: "M0.5,1 L.5,.5 L1,.5" }, "┐": { 1: "M0,.5 L.5,.5 L.5,1" }, "┓": { 3: "M0,.5 L.5,.5 L.5,1" }, "└": { 1: "M.5,0 L.5,.5 L1,.5" }, "┗": { 3: "M.5,0 L.5,.5 L1,.5" }, "┘": { 1: "M.5,0 L.5,.5 L0,.5" }, "┛": { 3: "M.5,0 L.5,.5 L0,.5" }, "├": { 1: "M.5,0 L.5,1 M.5,.5 L1,.5" }, "┣": { 3: "M.5,0 L.5,1 M.5,.5 L1,.5" }, "┤": { 1: "M.5,0 L.5,1 M.5,.5 L0,.5" }, "┫": { 3: "M.5,0 L.5,1 M.5,.5 L0,.5" }, "┬": { 1: "M0,.5 L1,.5 M.5,.5 L.5,1" }, "┳": { 3: "M0,.5 L1,.5 M.5,.5 L.5,1" }, "┴": { 1: "M0,.5 L1,.5 M.5,.5 L.5,0" }, "┻": { 3: "M0,.5 L1,.5 M.5,.5 L.5,0" }, "┼": { 1: "M0,.5 L1,.5 M.5,0 L.5,1" }, "╋": { 3: "M0,.5 L1,.5 M.5,0 L.5,1" }, "╴": { 1: "M.5,.5 L0,.5" }, "╸": { 3: "M.5,.5 L0,.5" }, "╵": { 1: "M.5,.5 L.5,0" }, "╹": { 3: "M.5,.5 L.5,0" }, "╶": { 1: "M.5,.5 L1,.5" }, "╺": { 3: "M.5,.5 L1,.5" }, "╷": { 1: "M.5,.5 L.5,1" }, "╻": { 3: "M.5,.5 L.5,1" }, "═": { 1: (t, e) => `M0,${0.5 - e} L1,${0.5 - e} M0,${0.5 + e} L1,${0.5 + e}` }, "║": { 1: (t, e) => `M${0.5 - t},0 L${0.5 - t},1 M${0.5 + t},0 L${0.5 + t},1` }, "╒": { 1: (t, e) => `M.5,1 L.5,${0.5 - e} L1,${0.5 - e} M.5,${0.5 + e} L1,${0.5 + e}` }, "╓": { 1: (t, e) => `M${0.5 - t},1 L${0.5 - t},.5 L1,.5 M${0.5 + t},.5 L${0.5 + t},1` }, "╔": { 1: (t, e) => `M1,${0.5 - e} L${0.5 - t},${0.5 - e} L${0.5 - t},1 M1,${0.5 + e} L${0.5 + t},${0.5 + e} L${0.5 + t},1` }, "╕": { 1: (t, e) => `M0,${0.5 - e} L.5,${0.5 - e} L.5,1 M0,${0.5 + e} L.5,${0.5 + e}` }, "╖": { 1: (t, e) => `M${0.5 + t},1 L${0.5 + t},.5 L0,.5 M${0.5 - t},.5 L${0.5 - t},1` }, "╗": { 1: (t, e) => `M0,${0.5 + e} L${0.5 - t},${0.5 + e} L${0.5 - t},1 M0,${0.5 - e} L${0.5 + t},${0.5 - e} L${0.5 + t},1` }, "╘": { 1: (t, e) => `M.5,0 L.5,${0.5 + e} L1,${0.5 + e} M.5,${0.5 - e} L1,${0.5 - e}` }, "╙": { 1: (t, e) => `M1,.5 L${0.5 - t},.5 L${0.5 - t},0 M${0.5 + t},.5 L${0.5 + t},0` }, "╚": { 1: (t, e) => `M1,${0.5 - e} L${0.5 + t},${0.5 - e} L${0.5 + t},0 M1,${0.5 + e} L${0.5 - t},${0.5 + e} L${0.5 - t},0` }, "╛": { 1: (t, e) => `M0,${0.5 + e} L.5,${0.5 + e} L.5,0 M0,${0.5 - e} L.5,${0.5 - e}` }, "╜": { 1: (t, e) => `M0,.5 L${0.5 + t},.5 L${0.5 + t},0 M${0.5 - t},.5 L${0.5 - t},0` }, "╝": { 1: (t, e) => `M0,${0.5 - e} L${0.5 - t},${0.5 - e} L${0.5 - t},0 M0,${0.5 + e} L${0.5 + t},${0.5 + e} L${0.5 + t},0` }, "╞": { 1: (t, e) => `M.5,0 L.5,1 M.5,${0.5 - e} L1,${0.5 - e} M.5,${0.5 + e} L1,${0.5 + e}` }, "╟": { 1: (t, e) => `M${0.5 - t},0 L${0.5 - t},1 M${0.5 + t},0 L${0.5 + t},1 M${0.5 + t},.5 L1,.5` }, "╠": { 1: (t, e) => `M${0.5 - t},0 L${0.5 - t},1 M1,${0.5 + e} L${0.5 + t},${0.5 + e} L${0.5 + t},1 M1,${0.5 - e} L${0.5 + t},${0.5 - e} L${0.5 + t},0` }, "╡": { 1: (t, e) => `M.5,0 L.5,1 M0,${0.5 - e} L.5,${0.5 - e} M0,${0.5 + e} L.5,${0.5 + e}` }, "╢": { 1: (t, e) => `M0,.5 L${0.5 - t},.5 M${0.5 - t},0 L${0.5 - t},1 M${0.5 + t},0 L${0.5 + t},1` }, "╣": { 1: (t, e) => `M${0.5 + t},0 L${0.5 + t},1 M0,${0.5 + e} L${0.5 - t},${0.5 + e} L${0.5 - t},1 M0,${0.5 - e} L${0.5 - t},${0.5 - e} L${0.5 - t},0` }, "╤": { 1: (t, e) => `M0,${0.5 - e} L1,${0.5 - e} M0,${0.5 + e} L1,${0.5 + e} M.5,${0.5 + e} L.5,1` }, "╥": { 1: (t, e) => `M0,.5 L1,.5 M${0.5 - t},.5 L${0.5 - t},1 M${0.5 + t},.5 L${0.5 + t},1` }, "╦": { 1: (t, e) => `M0,${0.5 - e} L1,${0.5 - e} M0,${0.5 + e} L${0.5 - t},${0.5 + e} L${0.5 - t},1 M1,${0.5 + e} L${0.5 + t},${0.5 + e} L${0.5 + t},1` }, "╧": { 1: (t, e) => `M.5,0 L.5,${0.5 - e} M0,${0.5 - e} L1,${0.5 - e} M0,${0.5 + e} L1,${0.5 + e}` }, "╨": { 1: (t, e) => `M0,.5 L1,.5 M${0.5 - t},.5 L${0.5 - t},0 M${0.5 + t},.5 L${0.5 + t},0` }, "╩": { 1: (t, e) => `M0,${0.5 + e} L1,${0.5 + e} M0,${0.5 - e} L${0.5 - t},${0.5 - e} L${0.5 - t},0 M1,${0.5 - e} L${0.5 + t},${0.5 - e} L${0.5 + t},0` }, "╪": { 1: (t, e) => `M.5,0 L.5,1 M0,${0.5 - e} L1,${0.5 - e} M0,${0.5 + e} L1,${0.5 + e}` }, "╫": { 1: (t, e) => `M0,.5 L1,.5 M${0.5 - t},0 L${0.5 - t},1 M${0.5 + t},0 L${0.5 + t},1` }, "╬": { 1: (t, e) => `M0,${0.5 + e} L${0.5 - t},${0.5 + e} L${0.5 - t},1 M1,${0.5 + e} L${0.5 + t},${0.5 + e} L${0.5 + t},1 M0,${0.5 - e} L${0.5 - t},${0.5 - e} L${0.5 - t},0 M1,${0.5 - e} L${0.5 + t},${0.5 - e} L${0.5 + t},0` }, "╱": { 1: "M1,0 L0,1" }, "╲": { 1: "M0,0 L1,1" }, "╳": { 1: "M1,0 L0,1 M0,0 L1,1" }, "╼": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L1,.5" }, "╽": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L.5,1" }, "╾": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "╿": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L.5,0" }, "┍": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L1,.5" }, "┎": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "┑": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L0,.5" }, "┒": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L.5,1" }, "┕": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L1,.5" }, "┖": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L.5,0" }, "┙": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L0,.5" }, "┚": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L.5,0" }, "┝": { 1: "M.5,0 L.5,1", 3: "M.5,.5 L1,.5" }, "┞": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,.5 L.5,0" }, "┟": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "┠": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,1" }, "┡": { 1: "M.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L1,.5" }, "┢": { 1: "M.5,.5 L.5,0", 3: "M0.5,1 L.5,.5 L1,.5" }, "┥": { 1: "M.5,0 L.5,1", 3: "M.5,.5 L0,.5" }, "┦": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,.5 L.5,0" }, "┧": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M.5,.5 L.5,1" }, "┨": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,1" }, "┩": { 1: "M.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L0,.5" }, "┪": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L.5,.5 L.5,1" }, "┭": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "┮": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,.5 L1,.5" }, "┯": { 1: "M.5,.5 L.5,1", 3: "M0,.5 L1,.5" }, "┰": { 1: "M0,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "┱": { 1: "M.5,.5 L1,.5", 3: "M0,.5 L.5,.5 L.5,1" }, "┲": { 1: "M.5,.5 L0,.5", 3: "M0.5,1 L.5,.5 L1,.5" }, "┵": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "┶": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M.5,.5 L1,.5" }, "┷": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L1,.5" }, "┸": { 1: "M0,.5 L1,.5", 3: "M.5,.5 L.5,0" }, "┹": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,.5 L0,.5" }, "┺": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,.5 L1,.5" }, "┽": { 1: "M.5,0 L.5,1 M.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "┾": { 1: "M.5,0 L.5,1 M.5,.5 L0,.5", 3: "M.5,.5 L1,.5" }, "┿": { 1: "M.5,0 L.5,1", 3: "M0,.5 L1,.5" }, "╀": { 1: "M0,.5 L1,.5 M.5,.5 L.5,1", 3: "M.5,.5 L.5,0" }, "╁": { 1: "M.5,.5 L.5,0 M0,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "╂": { 1: "M0,.5 L1,.5", 3: "M.5,0 L.5,1" }, "╃": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,0 L.5,.5 L0,.5" }, "╄": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L1,.5" }, "╅": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M0,.5 L.5,.5 L.5,1" }, "╆": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M0.5,1 L.5,.5 L1,.5" }, "╇": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L.5,0 M0,.5 L1,.5" }, "╈": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L1,.5 M.5,.5 L.5,1" }, "╉": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,1 M.5,.5 L0,.5" }, "╊": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,1 M.5,.5 L1,.5" }, "╌": { 1: "M.1,.5 L.4,.5 M.6,.5 L.9,.5" }, "╍": { 3: "M.1,.5 L.4,.5 M.6,.5 L.9,.5" }, "┄": { 1: "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5" }, "┅": { 3: "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5" }, "┈": { 1: "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5" }, "┉": { 3: "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5" }, "╎": { 1: "M.5,.1 L.5,.4 M.5,.6 L.5,.9" }, "╏": { 3: "M.5,.1 L.5,.4 M.5,.6 L.5,.9" }, "┆": { 1: "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333" }, "┇": { 3: "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333" }, "┊": { 1: "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95" }, "┋": { 3: "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95" }, "╭": { 1: (t, e) => `M.5,1 L.5,${0.5 + e / 0.15 * 0.5} C.5,${0.5 + e / 0.15 * 0.5},.5,.5,1,.5` }, "╮": { 1: (t, e) => `M.5,1 L.5,${0.5 + e / 0.15 * 0.5} C.5,${0.5 + e / 0.15 * 0.5},.5,.5,0,.5` }, "╯": { 1: (t, e) => `M.5,0 L.5,${0.5 - e / 0.15 * 0.5} C.5,${0.5 - e / 0.15 * 0.5},.5,.5,0,.5` }, "╰": { 1: (t, e) => `M.5,0 L.5,${0.5 - e / 0.15 * 0.5} C.5,${0.5 - e / 0.15 * 0.5},.5,.5,1,.5` } }, i.powerlineDefinitions = { "": { d: "M0,0 L1,.5 L0,1", type: 0, rightPadding: 2 }, "": { d: "M-1,-.5 L1,.5 L-1,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "": { d: "M1,0 L0,.5 L1,1", type: 0, leftPadding: 2 }, "": { d: "M2,-.5 L0,.5 L2,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "": { d: "M0,0 L0,1 C0.552,1,1,0.776,1,.5 C1,0.224,0.552,0,0,0", type: 0, rightPadding: 1 }, "": { d: "M0,1 C0.552,1,1,0.776,1,.5 C1,0.224,0.552,0,0,0", type: 1, rightPadding: 1 }, "": { d: "M1,0 L1,1 C0.448,1,0,0.776,0,.5 C0,0.224,0.448,0,1,0", type: 0, leftPadding: 1 }, "": { d: "M1,1 C0.448,1,0,0.776,0,.5 C0,0.224,0.448,0,1,0", type: 1, leftPadding: 1 }, "": { d: "M-.5,-.5 L1.5,1.5 L-.5,1.5", type: 0 }, "": { d: "M-.5,-.5 L1.5,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "": { d: "M1.5,-.5 L-.5,1.5 L1.5,1.5", type: 0 }, "": { d: "M1.5,-.5 L-.5,1.5 L-.5,-.5", type: 0 }, "": { d: "M1.5,-.5 L-.5,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "": { d: "M-.5,-.5 L1.5,1.5 L1.5,-.5", type: 0 } }, i.powerlineDefinitions[""] = i.powerlineDefinitions[""], i.powerlineDefinitions[""] = i.powerlineDefinitions[""], i.tryDrawCustomChar = function(t, e, o, y, x, R, w, h) {
        const l = i.blockElementDefinitions[e];
        if (l)
          return function(c, _, C, m, M, A) {
            for (let b = 0; b < _.length; b++) {
              const L = _[b], T = M / 8, E = A / 8;
              c.fillRect(C + L.x * T, m + L.y * E, L.w * T, L.h * E);
            }
          }(t, l, o, y, x, R), !0;
        const p = a[e];
        if (p)
          return function(c, _, C, m, M, A) {
            let b = r.get(_);
            b || (b = /* @__PURE__ */ new Map(), r.set(_, b));
            const L = c.fillStyle;
            if (typeof L != "string")
              throw new Error(`Unexpected fillStyle type "${L}"`);
            let T = b.get(L);
            if (!T) {
              const E = _[0].length, P = _.length, B = document.createElement("canvas");
              B.width = E, B.height = P;
              const H = (0, g.throwIfFalsy)(B.getContext("2d")), W = new ImageData(E, P);
              let N, I, z, q;
              if (L.startsWith("#"))
                N = parseInt(L.slice(1, 3), 16), I = parseInt(L.slice(3, 5), 16), z = parseInt(L.slice(5, 7), 16), q = L.length > 7 && parseInt(L.slice(7, 9), 16) || 1;
              else {
                if (!L.startsWith("rgba"))
                  throw new Error(`Unexpected fillStyle color format "${L}" when drawing pattern glyph`);
                [N, I, z, q] = L.substring(5, L.length - 1).split(",").map((Y) => parseFloat(Y));
              }
              for (let Y = 0; Y < P; Y++)
                for (let Z = 0; Z < E; Z++)
                  W.data[4 * (Y * E + Z)] = N, W.data[4 * (Y * E + Z) + 1] = I, W.data[4 * (Y * E + Z) + 2] = z, W.data[4 * (Y * E + Z) + 3] = _[Y][Z] * (255 * q);
              H.putImageData(W, 0, 0), T = (0, g.throwIfFalsy)(c.createPattern(B, null)), b.set(L, T);
            }
            c.fillStyle = T, c.fillRect(C, m, M, A);
          }(t, p, o, y, x, R), !0;
        const s = i.boxDrawingDefinitions[e];
        if (s)
          return function(c, _, C, m, M, A, b) {
            c.strokeStyle = c.fillStyle;
            for (const [L, T] of Object.entries(_)) {
              let E;
              c.beginPath(), c.lineWidth = b * Number.parseInt(L), E = typeof T == "function" ? T(0.15, 0.15 / A * M) : T;
              for (const P of E.split(" ")) {
                const B = P[0], H = v[B];
                if (!H) {
                  console.error(`Could not find drawing instructions for "${B}"`);
                  continue;
                }
                const W = P.substring(1).split(",");
                W[0] && W[1] && H(c, n(W, M, A, C, m, !0, b));
              }
              c.stroke(), c.closePath();
            }
          }(t, s, o, y, x, R, h), !0;
        const f = i.powerlineDefinitions[e];
        return !!f && (function(c, _, C, m, M, A, b, L) {
          var T, E;
          const P = new Path2D();
          P.rect(C, m, M, A), c.clip(P), c.beginPath();
          const B = b / 12;
          c.lineWidth = L * B;
          for (const H of _.d.split(" ")) {
            const W = H[0], N = v[W];
            if (!N) {
              console.error(`Could not find drawing instructions for "${W}"`);
              continue;
            }
            const I = H.substring(1).split(",");
            I[0] && I[1] && N(c, n(I, M, A, C, m, !1, L, ((T = _.leftPadding) !== null && T !== void 0 ? T : 0) * (B / 2), ((E = _.rightPadding) !== null && E !== void 0 ? E : 0) * (B / 2)));
          }
          _.type === 1 ? (c.strokeStyle = c.fillStyle, c.stroke()) : c.fill(), c.closePath();
        }(t, f, o, y, x, R, w, h), !0);
      };
      const r = /* @__PURE__ */ new Map();
      function u(t, e, o = 0) {
        return Math.max(Math.min(t, e), o);
      }
      const v = { C: (t, e) => t.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5]), L: (t, e) => t.lineTo(e[0], e[1]), M: (t, e) => t.moveTo(e[0], e[1]) };
      function n(t, e, o, y, x, R, w, h = 0, l = 0) {
        const p = t.map((s) => parseFloat(s) || parseInt(s));
        if (p.length < 2)
          throw new Error("Too few arguments for instruction");
        for (let s = 0; s < p.length; s += 2)
          p[s] *= e - h * w - l * w, R && p[s] !== 0 && (p[s] = u(Math.round(p[s] + 0.5) - 0.5, e, 0)), p[s] += y + h * w;
        for (let s = 1; s < p.length; s += 2)
          p[s] *= o, R && p[s] !== 0 && (p[s] = u(Math.round(p[s] + 0.5) - 0.5, o, 0)), p[s] += x;
        return p;
      }
    }, 56: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.observeDevicePixelDimensions = void 0;
      const g = d(859);
      i.observeDevicePixelDimensions = function(a, r, u) {
        let v = new r.ResizeObserver((n) => {
          const t = n.find((y) => y.target === a);
          if (!t)
            return;
          if (!("devicePixelContentBoxSize" in t))
            return v == null || v.disconnect(), void (v = void 0);
          const e = t.devicePixelContentBoxSize[0].inlineSize, o = t.devicePixelContentBoxSize[0].blockSize;
          e > 0 && o > 0 && u(e, o);
        });
        try {
          v.observe(a, { box: ["device-pixel-content-box"] });
        } catch {
          v.disconnect(), v = void 0;
        }
        return (0, g.toDisposable)(() => v == null ? void 0 : v.disconnect());
      };
    }, 374: (D, i) => {
      function d(g) {
        return 57508 <= g && g <= 57558;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.createRenderDimensions = i.excludeFromContrastRatioDemands = i.isRestrictedPowerlineGlyph = i.isPowerlineGlyph = i.throwIfFalsy = void 0, i.throwIfFalsy = function(g) {
        if (!g)
          throw new Error("value must not be falsy");
        return g;
      }, i.isPowerlineGlyph = d, i.isRestrictedPowerlineGlyph = function(g) {
        return 57520 <= g && g <= 57527;
      }, i.excludeFromContrastRatioDemands = function(g) {
        return d(g) || function(a) {
          return 9472 <= a && a <= 9631;
        }(g);
      }, i.createRenderDimensions = function() {
        return { css: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 } }, device: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 }, char: { width: 0, height: 0, left: 0, top: 0 } } };
      };
    }, 296: (D, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.createSelectionRenderModel = void 0;
      class d {
        constructor() {
          this.clear();
        }
        clear() {
          this.hasSelection = !1, this.columnSelectMode = !1, this.viewportStartRow = 0, this.viewportEndRow = 0, this.viewportCappedStartRow = 0, this.viewportCappedEndRow = 0, this.startCol = 0, this.endCol = 0, this.selectionStart = void 0, this.selectionEnd = void 0;
        }
        update(a, r, u, v = !1) {
          if (this.selectionStart = r, this.selectionEnd = u, !r || !u || r[0] === u[0] && r[1] === u[1])
            return void this.clear();
          const n = r[1] - a.buffer.active.viewportY, t = u[1] - a.buffer.active.viewportY, e = Math.max(n, 0), o = Math.min(t, a.rows - 1);
          e >= a.rows || o < 0 ? this.clear() : (this.hasSelection = !0, this.columnSelectMode = v, this.viewportStartRow = n, this.viewportEndRow = t, this.viewportCappedStartRow = e, this.viewportCappedEndRow = o, this.startCol = r[0], this.endCol = u[0]);
        }
        isCellSelected(a, r, u) {
          return !!this.hasSelection && (u -= a.buffer.active.viewportY, this.columnSelectMode ? this.startCol <= this.endCol ? r >= this.startCol && u >= this.viewportCappedStartRow && r < this.endCol && u <= this.viewportCappedEndRow : r < this.startCol && u >= this.viewportCappedStartRow && r >= this.endCol && u <= this.viewportCappedEndRow : u > this.viewportStartRow && u < this.viewportEndRow || this.viewportStartRow === this.viewportEndRow && u === this.viewportStartRow && r >= this.startCol && r < this.endCol || this.viewportStartRow < this.viewportEndRow && u === this.viewportEndRow && r < this.endCol || this.viewportStartRow < this.viewportEndRow && u === this.viewportStartRow && r >= this.startCol);
        }
      }
      i.createSelectionRenderModel = function() {
        return new d();
      };
    }, 509: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.TextureAtlas = void 0;
      const g = d(237), a = d(855), r = d(147), u = d(160), v = d(860), n = d(374), t = d(485), e = d(385), o = d(345), y = { texturePage: 0, texturePosition: { x: 0, y: 0 }, texturePositionClipSpace: { x: 0, y: 0 }, offset: { x: 0, y: 0 }, size: { x: 0, y: 0 }, sizeClipSpace: { x: 0, y: 0 } };
      let x;
      class R {
        constructor(s, f, c) {
          this._document = s, this._config = f, this._unicodeService = c, this._didWarmUp = !1, this._cacheMap = new t.FourKeyMap(), this._cacheMapCombined = new t.FourKeyMap(), this._pages = [], this._activePages = [], this._workBoundingBox = { top: 0, left: 0, bottom: 0, right: 0 }, this._workAttributeData = new r.AttributeData(), this._textureSize = 512, this._onAddTextureAtlasCanvas = new o.EventEmitter(), this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event, this._onRemoveTextureAtlasCanvas = new o.EventEmitter(), this.onRemoveTextureAtlasCanvas = this._onRemoveTextureAtlasCanvas.event, this._requestClearModel = !1, this._createNewPage(), this._tmpCanvas = l(s, 4 * this._config.deviceCellWidth + 4, this._config.deviceCellHeight + 4), this._tmpCtx = (0, n.throwIfFalsy)(this._tmpCanvas.getContext("2d", { alpha: this._config.allowTransparency, willReadFrequently: !0 }));
        }
        get pages() {
          return this._pages;
        }
        dispose() {
          for (const s of this.pages)
            s.canvas.remove();
          this._onAddTextureAtlasCanvas.dispose();
        }
        warmUp() {
          this._didWarmUp || (this._doWarmUp(), this._didWarmUp = !0);
        }
        _doWarmUp() {
          const s = new e.IdleTaskQueue();
          for (let f = 33; f < 126; f++)
            s.enqueue(() => {
              if (!this._cacheMap.get(f, a.DEFAULT_COLOR, a.DEFAULT_COLOR, a.DEFAULT_EXT)) {
                const c = this._drawToCache(f, a.DEFAULT_COLOR, a.DEFAULT_COLOR, a.DEFAULT_EXT);
                this._cacheMap.set(f, a.DEFAULT_COLOR, a.DEFAULT_COLOR, a.DEFAULT_EXT, c);
              }
            });
        }
        beginFrame() {
          return this._requestClearModel;
        }
        clearTexture() {
          if (this._pages[0].currentRow.x !== 0 || this._pages[0].currentRow.y !== 0) {
            for (const s of this._pages)
              s.clear();
            this._cacheMap.clear(), this._cacheMapCombined.clear(), this._didWarmUp = !1;
          }
        }
        _createNewPage() {
          R.maxAtlasPages && this._pages.length >= Math.max(4, R.maxAtlasPages / 2) && queueMicrotask(() => {
            const f = this._pages.filter((b) => 2 * b.canvas.width <= (R.maxTextureSize || 4096)).sort((b, L) => L.canvas.width !== b.canvas.width ? L.canvas.width - b.canvas.width : L.percentageUsed - b.percentageUsed);
            let c = -1, _ = 0;
            for (let b = 0; b < f.length; b++)
              if (f[b].canvas.width !== _)
                c = b, _ = f[b].canvas.width;
              else if (b - c == 3)
                break;
            const C = f.slice(c, c + 4), m = C.map((b) => b.glyphs[0].texturePage).sort((b, L) => b > L ? 1 : -1), M = m[0], A = this._mergePages(C, M);
            A.version++, this._pages[M] = A;
            for (let b = m.length - 1; b >= 1; b--)
              this._deletePage(m[b]);
            this._requestClearModel = !0, this._onAddTextureAtlasCanvas.fire(A.canvas);
          });
          const s = new w(this._document, this._textureSize);
          return this._pages.push(s), this._activePages.push(s), this._onAddTextureAtlasCanvas.fire(s.canvas), s;
        }
        _mergePages(s, f) {
          const c = 2 * s[0].canvas.width, _ = new w(this._document, c, s);
          for (const [C, m] of s.entries()) {
            const M = C * m.canvas.width % c, A = Math.floor(C / 2) * m.canvas.height;
            _.ctx.drawImage(m.canvas, M, A);
            for (const L of m.glyphs)
              L.texturePage = f, L.sizeClipSpace.x = L.size.x / c, L.sizeClipSpace.y = L.size.y / c, L.texturePosition.x += M, L.texturePosition.y += A, L.texturePositionClipSpace.x = L.texturePosition.x / c, L.texturePositionClipSpace.y = L.texturePosition.y / c;
            this._onRemoveTextureAtlasCanvas.fire(m.canvas);
            const b = this._activePages.indexOf(m);
            b !== -1 && this._activePages.splice(b, 1);
          }
          return _;
        }
        _deletePage(s) {
          this._pages.splice(s, 1);
          for (let f = s; f < this._pages.length; f++) {
            const c = this._pages[f];
            for (const _ of c.glyphs)
              _.texturePage--;
            c.version++;
          }
        }
        getRasterizedGlyphCombinedChar(s, f, c, _) {
          return this._getFromCacheMap(this._cacheMapCombined, s, f, c, _);
        }
        getRasterizedGlyph(s, f, c, _) {
          return this._getFromCacheMap(this._cacheMap, s, f, c, _);
        }
        _getFromCacheMap(s, f, c, _, C) {
          return x = s.get(f, c, _, C), x || (x = this._drawToCache(f, c, _, C), s.set(f, c, _, C, x)), x;
        }
        _getColorFromAnsiIndex(s) {
          if (s >= this._config.colors.ansi.length)
            throw new Error("No color found for idx " + s);
          return this._config.colors.ansi[s];
        }
        _getBackgroundColor(s, f, c, _) {
          if (this._config.allowTransparency)
            return u.NULL_COLOR;
          let C;
          switch (s) {
            case 16777216:
            case 33554432:
              C = this._getColorFromAnsiIndex(f);
              break;
            case 50331648:
              const m = r.AttributeData.toColorRGB(f);
              C = u.rgba.toColor(m[0], m[1], m[2]);
              break;
            default:
              C = c ? this._config.colors.foreground : this._config.colors.background;
          }
          return C;
        }
        _getForegroundColor(s, f, c, _, C, m, M, A, b, L) {
          const T = this._getMinimumContrastColor(s, f, c, _, C, m, !1, b, L);
          if (T)
            return T;
          let E;
          switch (C) {
            case 16777216:
            case 33554432:
              this._config.drawBoldTextInBrightColors && b && m < 8 && (m += 8), E = this._getColorFromAnsiIndex(m);
              break;
            case 50331648:
              const P = r.AttributeData.toColorRGB(m);
              E = u.rgba.toColor(P[0], P[1], P[2]);
              break;
            default:
              E = M ? this._config.colors.background : this._config.colors.foreground;
          }
          return this._config.allowTransparency && (E = u.color.opaque(E)), A && (E = u.color.multiplyOpacity(E, g.DIM_OPACITY)), E;
        }
        _resolveBackgroundRgba(s, f, c) {
          switch (s) {
            case 16777216:
            case 33554432:
              return this._getColorFromAnsiIndex(f).rgba;
            case 50331648:
              return f << 8;
            default:
              return c ? this._config.colors.foreground.rgba : this._config.colors.background.rgba;
          }
        }
        _resolveForegroundRgba(s, f, c, _) {
          switch (s) {
            case 16777216:
            case 33554432:
              return this._config.drawBoldTextInBrightColors && _ && f < 8 && (f += 8), this._getColorFromAnsiIndex(f).rgba;
            case 50331648:
              return f << 8;
            default:
              return c ? this._config.colors.background.rgba : this._config.colors.foreground.rgba;
          }
        }
        _getMinimumContrastColor(s, f, c, _, C, m, M, A, b) {
          if (this._config.minimumContrastRatio === 1 || b)
            return;
          const L = this._config.colors.contrastCache.getColor(s, _);
          if (L !== void 0)
            return L || void 0;
          const T = this._resolveBackgroundRgba(f, c, M), E = this._resolveForegroundRgba(C, m, M, A), P = u.rgba.ensureContrastRatio(T, E, this._config.minimumContrastRatio);
          if (!P)
            return void this._config.colors.contrastCache.setColor(s, _, null);
          const B = u.rgba.toColor(P >> 24 & 255, P >> 16 & 255, P >> 8 & 255);
          return this._config.colors.contrastCache.setColor(s, _, B), B;
        }
        _drawToCache(s, f, c, _) {
          const C = typeof s == "number" ? String.fromCharCode(s) : s, m = Math.min(this._config.deviceCellWidth * Math.max(C.length, 2) + 4, this._textureSize);
          this._tmpCanvas.width < m && (this._tmpCanvas.width = m);
          const M = Math.min(this._config.deviceCellHeight + 8, this._textureSize);
          if (this._tmpCanvas.height < M && (this._tmpCanvas.height = M), this._tmpCtx.save(), this._workAttributeData.fg = c, this._workAttributeData.bg = f, this._workAttributeData.extended.ext = _, this._workAttributeData.isInvisible())
            return y;
          const A = !!this._workAttributeData.isBold(), b = !!this._workAttributeData.isInverse(), L = !!this._workAttributeData.isDim(), T = !!this._workAttributeData.isItalic(), E = !!this._workAttributeData.isUnderline(), P = !!this._workAttributeData.isStrikethrough(), B = !!this._workAttributeData.isOverline();
          let H = this._workAttributeData.getFgColor(), W = this._workAttributeData.getFgColorMode(), N = this._workAttributeData.getBgColor(), I = this._workAttributeData.getBgColorMode();
          if (b) {
            const S = H;
            H = N, N = S;
            const $ = W;
            W = I, I = $;
          }
          const z = this._getBackgroundColor(I, N, b, L);
          this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = z.css, this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), this._tmpCtx.globalCompositeOperation = "source-over";
          const q = A ? this._config.fontWeightBold : this._config.fontWeight, Y = T ? "italic" : "";
          this._tmpCtx.font = `${Y} ${q} ${this._config.fontSize * this._config.devicePixelRatio}px ${this._config.fontFamily}`, this._tmpCtx.textBaseline = g.TEXT_BASELINE;
          const Z = C.length === 1 && (0, n.isPowerlineGlyph)(C.charCodeAt(0)), ge = C.length === 1 && (0, n.isRestrictedPowerlineGlyph)(C.charCodeAt(0)), ae = this._getForegroundColor(f, I, N, c, W, H, b, L, A, (0, n.excludeFromContrastRatioDemands)(C.charCodeAt(0)));
          this._tmpCtx.fillStyle = ae.css;
          const O = ge ? 0 : 4;
          let he = !1;
          this._config.customGlyphs !== !1 && (he = (0, v.tryDrawCustomChar)(this._tmpCtx, C, O, O, this._config.deviceCellWidth, this._config.deviceCellHeight, this._config.fontSize, this._config.devicePixelRatio));
          let se, re = !Z;
          if (se = typeof s == "number" ? this._unicodeService.wcwidth(s) : this._unicodeService.getStringCellWidth(s), E) {
            this._tmpCtx.save();
            const S = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 15)), $ = S % 2 == 1 ? 0.5 : 0;
            if (this._tmpCtx.lineWidth = S, this._workAttributeData.isUnderlineColorDefault())
              this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle;
            else if (this._workAttributeData.isUnderlineColorRGB())
              re = !1, this._tmpCtx.strokeStyle = `rgb(${r.AttributeData.toColorRGB(this._workAttributeData.getUnderlineColor()).join(",")})`;
            else {
              re = !1;
              let J = this._workAttributeData.getUnderlineColor();
              this._config.drawBoldTextInBrightColors && this._workAttributeData.isBold() && J < 8 && (J += 8), this._tmpCtx.strokeStyle = this._getColorFromAnsiIndex(J).css;
            }
            this._tmpCtx.beginPath();
            const V = O, X = Math.ceil(O + this._config.deviceCharHeight) - $, oe = O + this._config.deviceCharHeight + S - $, ne = Math.ceil(O + this._config.deviceCharHeight + 2 * S) - $;
            for (let J = 0; J < se; J++) {
              this._tmpCtx.save();
              const G = V + J * this._config.deviceCellWidth, Q = V + (J + 1) * this._config.deviceCellWidth, ue = G + this._config.deviceCellWidth / 2;
              switch (this._workAttributeData.extended.underlineStyle) {
                case 2:
                  this._tmpCtx.moveTo(G, X), this._tmpCtx.lineTo(Q, X), this._tmpCtx.moveTo(G, ne), this._tmpCtx.lineTo(Q, ne);
                  break;
                case 3:
                  const ce = S <= 1 ? ne : Math.ceil(O + this._config.deviceCharHeight - S / 2) - $, de = S <= 1 ? X : Math.ceil(O + this._config.deviceCharHeight + S / 2) - $, fe = new Path2D();
                  fe.rect(G, X, this._config.deviceCellWidth, ne - X), this._tmpCtx.clip(fe), this._tmpCtx.moveTo(G - this._config.deviceCellWidth / 2, oe), this._tmpCtx.bezierCurveTo(G - this._config.deviceCellWidth / 2, de, G, de, G, oe), this._tmpCtx.bezierCurveTo(G, ce, ue, ce, ue, oe), this._tmpCtx.bezierCurveTo(ue, de, Q, de, Q, oe), this._tmpCtx.bezierCurveTo(Q, ce, Q + this._config.deviceCellWidth / 2, ce, Q + this._config.deviceCellWidth / 2, oe);
                  break;
                case 4:
                  this._tmpCtx.setLineDash([Math.round(S), Math.round(S)]), this._tmpCtx.moveTo(G, X), this._tmpCtx.lineTo(Q, X);
                  break;
                case 5:
                  this._tmpCtx.setLineDash([4 * this._config.devicePixelRatio, 3 * this._config.devicePixelRatio]), this._tmpCtx.moveTo(G, X), this._tmpCtx.lineTo(Q, X);
                  break;
                default:
                  this._tmpCtx.moveTo(G, X), this._tmpCtx.lineTo(Q, X);
              }
              this._tmpCtx.stroke(), this._tmpCtx.restore();
            }
            if (this._tmpCtx.restore(), !he && this._config.fontSize >= 12 && !this._config.allowTransparency && C !== " ") {
              this._tmpCtx.save(), this._tmpCtx.textBaseline = "alphabetic";
              const J = this._tmpCtx.measureText(C);
              if (this._tmpCtx.restore(), "actualBoundingBoxDescent" in J && J.actualBoundingBoxDescent > 0) {
                this._tmpCtx.save();
                const G = new Path2D();
                G.rect(V, X - Math.ceil(S / 2), this._config.deviceCellWidth * se, ne - X + Math.ceil(S / 2)), this._tmpCtx.clip(G), this._tmpCtx.lineWidth = 3 * this._config.devicePixelRatio, this._tmpCtx.strokeStyle = z.css, this._tmpCtx.strokeText(C, O, O + this._config.deviceCharHeight), this._tmpCtx.restore();
              }
            }
          }
          if (B) {
            const S = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 15)), $ = S % 2 == 1 ? 0.5 : 0;
            this._tmpCtx.lineWidth = S, this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle, this._tmpCtx.beginPath(), this._tmpCtx.moveTo(O, O + $), this._tmpCtx.lineTo(O + this._config.deviceCharWidth * se, O + $), this._tmpCtx.stroke();
          }
          if (he || this._tmpCtx.fillText(C, O, O + this._config.deviceCharHeight), C === "_" && !this._config.allowTransparency) {
            let S = h(this._tmpCtx.getImageData(O, O, this._config.deviceCellWidth, this._config.deviceCellHeight), z, ae, re);
            if (S)
              for (let $ = 1; $ <= 5 && (this._tmpCtx.save(), this._tmpCtx.fillStyle = z.css, this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), this._tmpCtx.restore(), this._tmpCtx.fillText(C, O, O + this._config.deviceCharHeight - $), S = h(this._tmpCtx.getImageData(O, O, this._config.deviceCellWidth, this._config.deviceCellHeight), z, ae, re), S); $++)
                ;
          }
          if (P) {
            const S = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 10)), $ = this._tmpCtx.lineWidth % 2 == 1 ? 0.5 : 0;
            this._tmpCtx.lineWidth = S, this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle, this._tmpCtx.beginPath(), this._tmpCtx.moveTo(O, O + Math.floor(this._config.deviceCharHeight / 2) - $), this._tmpCtx.lineTo(O + this._config.deviceCharWidth * se, O + Math.floor(this._config.deviceCharHeight / 2) - $), this._tmpCtx.stroke();
          }
          this._tmpCtx.restore();
          const le = this._tmpCtx.getImageData(0, 0, this._tmpCanvas.width, this._tmpCanvas.height);
          let ve;
          if (ve = this._config.allowTransparency ? function(S) {
            for (let $ = 0; $ < S.data.length; $ += 4)
              if (S.data[$ + 3] > 0)
                return !1;
            return !0;
          }(le) : h(le, z, ae, re), ve)
            return y;
          const U = this._findGlyphBoundingBox(le, this._workBoundingBox, m, ge, he, O);
          let F, k;
          for (; ; ) {
            if (this._activePages.length === 0) {
              const S = this._createNewPage();
              F = S, k = S.currentRow, k.height = U.size.y;
              break;
            }
            F = this._activePages[this._activePages.length - 1], k = F.currentRow;
            for (const S of this._activePages)
              U.size.y <= S.currentRow.height && (F = S, k = S.currentRow);
            for (let S = this._activePages.length - 1; S >= 0; S--)
              for (const $ of this._activePages[S].fixedRows)
                $.height <= k.height && U.size.y <= $.height && (F = this._activePages[S], k = $);
            if (k.y + U.size.y >= F.canvas.height || k.height > U.size.y + 2) {
              let S = !1;
              if (F.currentRow.y + F.currentRow.height + U.size.y >= F.canvas.height) {
                let $;
                for (const V of this._activePages)
                  if (V.currentRow.y + V.currentRow.height + U.size.y < V.canvas.height) {
                    $ = V;
                    break;
                  }
                if ($)
                  F = $;
                else {
                  const V = this._createNewPage();
                  F = V, k = V.currentRow, k.height = U.size.y, S = !0;
                }
              }
              S || (F.currentRow.height > 0 && F.fixedRows.push(F.currentRow), k = { x: 0, y: F.currentRow.y + F.currentRow.height, height: U.size.y }, F.fixedRows.push(k), F.currentRow = { x: 0, y: k.y + k.height, height: 0 });
            }
            if (k.x + U.size.x <= F.canvas.width)
              break;
            k === F.currentRow ? (k.x = 0, k.y += k.height, k.height = 0) : F.fixedRows.splice(F.fixedRows.indexOf(k), 1);
          }
          return U.texturePage = this._pages.indexOf(F), U.texturePosition.x = k.x, U.texturePosition.y = k.y, U.texturePositionClipSpace.x = k.x / F.canvas.width, U.texturePositionClipSpace.y = k.y / F.canvas.height, U.sizeClipSpace.x /= F.canvas.width, U.sizeClipSpace.y /= F.canvas.height, k.height = Math.max(k.height, U.size.y), k.x += U.size.x, F.ctx.putImageData(le, U.texturePosition.x - this._workBoundingBox.left, U.texturePosition.y - this._workBoundingBox.top, this._workBoundingBox.left, this._workBoundingBox.top, U.size.x, U.size.y), F.addGlyph(U), F.version++, U;
        }
        _findGlyphBoundingBox(s, f, c, _, C, m) {
          f.top = 0;
          const M = _ ? this._config.deviceCellHeight : this._tmpCanvas.height, A = _ ? this._config.deviceCellWidth : c;
          let b = !1;
          for (let L = 0; L < M; L++) {
            for (let T = 0; T < A; T++) {
              const E = L * this._tmpCanvas.width * 4 + 4 * T + 3;
              if (s.data[E] !== 0) {
                f.top = L, b = !0;
                break;
              }
            }
            if (b)
              break;
          }
          f.left = 0, b = !1;
          for (let L = 0; L < m + A; L++) {
            for (let T = 0; T < M; T++) {
              const E = T * this._tmpCanvas.width * 4 + 4 * L + 3;
              if (s.data[E] !== 0) {
                f.left = L, b = !0;
                break;
              }
            }
            if (b)
              break;
          }
          f.right = A, b = !1;
          for (let L = m + A - 1; L >= m; L--) {
            for (let T = 0; T < M; T++) {
              const E = T * this._tmpCanvas.width * 4 + 4 * L + 3;
              if (s.data[E] !== 0) {
                f.right = L, b = !0;
                break;
              }
            }
            if (b)
              break;
          }
          f.bottom = M, b = !1;
          for (let L = M - 1; L >= 0; L--) {
            for (let T = 0; T < A; T++) {
              const E = L * this._tmpCanvas.width * 4 + 4 * T + 3;
              if (s.data[E] !== 0) {
                f.bottom = L, b = !0;
                break;
              }
            }
            if (b)
              break;
          }
          return { texturePage: 0, texturePosition: { x: 0, y: 0 }, texturePositionClipSpace: { x: 0, y: 0 }, size: { x: f.right - f.left + 1, y: f.bottom - f.top + 1 }, sizeClipSpace: { x: f.right - f.left + 1, y: f.bottom - f.top + 1 }, offset: { x: -f.left + m + (_ || C ? Math.floor((this._config.deviceCellWidth - this._config.deviceCharWidth) / 2) : 0), y: -f.top + m + (_ || C ? this._config.lineHeight === 1 ? 0 : Math.round((this._config.deviceCellHeight - this._config.deviceCharHeight) / 2) : 0) } };
        }
      }
      i.TextureAtlas = R;
      class w {
        constructor(s, f, c) {
          if (this._usedPixels = 0, this._glyphs = [], this.version = 0, this.currentRow = { x: 0, y: 0, height: 0 }, this.fixedRows = [], c)
            for (const _ of c)
              this._glyphs.push(..._.glyphs), this._usedPixels += _._usedPixels;
          this.canvas = l(s, f, f), this.ctx = (0, n.throwIfFalsy)(this.canvas.getContext("2d", { alpha: !0 }));
        }
        get percentageUsed() {
          return this._usedPixels / (this.canvas.width * this.canvas.height);
        }
        get glyphs() {
          return this._glyphs;
        }
        addGlyph(s) {
          this._glyphs.push(s), this._usedPixels += s.size.x * s.size.y;
        }
        clear() {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.currentRow.x = 0, this.currentRow.y = 0, this.currentRow.height = 0, this.fixedRows.length = 0, this.version++;
        }
      }
      function h(p, s, f, c) {
        const _ = s.rgba >>> 24, C = s.rgba >>> 16 & 255, m = s.rgba >>> 8 & 255, M = f.rgba >>> 24, A = f.rgba >>> 16 & 255, b = f.rgba >>> 8 & 255, L = Math.floor((Math.abs(_ - M) + Math.abs(C - A) + Math.abs(m - b)) / 12);
        let T = !0;
        for (let E = 0; E < p.data.length; E += 4)
          p.data[E] === _ && p.data[E + 1] === C && p.data[E + 2] === m || c && Math.abs(p.data[E] - _) + Math.abs(p.data[E + 1] - C) + Math.abs(p.data[E + 2] - m) < L ? p.data[E + 3] = 0 : T = !1;
        return T;
      }
      function l(p, s, f) {
        const c = p.createElement("canvas");
        return c.width = s, c.height = f, c;
      }
    }, 160: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.contrastRatio = i.toPaddedHex = i.rgba = i.rgb = i.css = i.color = i.channels = i.NULL_COLOR = void 0;
      const g = d(399);
      let a = 0, r = 0, u = 0, v = 0;
      var n, t, e;
      function o(x) {
        const R = x.toString(16);
        return R.length < 2 ? "0" + R : R;
      }
      function y(x, R) {
        return x < R ? (R + 0.05) / (x + 0.05) : (x + 0.05) / (R + 0.05);
      }
      i.NULL_COLOR = { css: "#00000000", rgba: 0 }, function(x) {
        x.toCss = function(R, w, h, l) {
          return l !== void 0 ? `#${o(R)}${o(w)}${o(h)}${o(l)}` : `#${o(R)}${o(w)}${o(h)}`;
        }, x.toRgba = function(R, w, h, l = 255) {
          return (R << 24 | w << 16 | h << 8 | l) >>> 0;
        };
      }(n = i.channels || (i.channels = {})), function(x) {
        function R(w, h) {
          return v = Math.round(255 * h), [a, r, u] = e.toChannels(w.rgba), { css: n.toCss(a, r, u, v), rgba: n.toRgba(a, r, u, v) };
        }
        x.blend = function(w, h) {
          if (v = (255 & h.rgba) / 255, v === 1)
            return { css: h.css, rgba: h.rgba };
          const l = h.rgba >> 24 & 255, p = h.rgba >> 16 & 255, s = h.rgba >> 8 & 255, f = w.rgba >> 24 & 255, c = w.rgba >> 16 & 255, _ = w.rgba >> 8 & 255;
          return a = f + Math.round((l - f) * v), r = c + Math.round((p - c) * v), u = _ + Math.round((s - _) * v), { css: n.toCss(a, r, u), rgba: n.toRgba(a, r, u) };
        }, x.isOpaque = function(w) {
          return (255 & w.rgba) == 255;
        }, x.ensureContrastRatio = function(w, h, l) {
          const p = e.ensureContrastRatio(w.rgba, h.rgba, l);
          if (p)
            return e.toColor(p >> 24 & 255, p >> 16 & 255, p >> 8 & 255);
        }, x.opaque = function(w) {
          const h = (255 | w.rgba) >>> 0;
          return [a, r, u] = e.toChannels(h), { css: n.toCss(a, r, u), rgba: h };
        }, x.opacity = R, x.multiplyOpacity = function(w, h) {
          return v = 255 & w.rgba, R(w, v * h / 255);
        }, x.toColorRGB = function(w) {
          return [w.rgba >> 24 & 255, w.rgba >> 16 & 255, w.rgba >> 8 & 255];
        };
      }(i.color || (i.color = {})), function(x) {
        let R, w;
        if (!g.isNode) {
          const h = document.createElement("canvas");
          h.width = 1, h.height = 1;
          const l = h.getContext("2d", { willReadFrequently: !0 });
          l && (R = l, R.globalCompositeOperation = "copy", w = R.createLinearGradient(0, 0, 1, 1));
        }
        x.toColor = function(h) {
          if (h.match(/#[\da-f]{3,8}/i))
            switch (h.length) {
              case 4:
                return a = parseInt(h.slice(1, 2).repeat(2), 16), r = parseInt(h.slice(2, 3).repeat(2), 16), u = parseInt(h.slice(3, 4).repeat(2), 16), e.toColor(a, r, u);
              case 5:
                return a = parseInt(h.slice(1, 2).repeat(2), 16), r = parseInt(h.slice(2, 3).repeat(2), 16), u = parseInt(h.slice(3, 4).repeat(2), 16), v = parseInt(h.slice(4, 5).repeat(2), 16), e.toColor(a, r, u, v);
              case 7:
                return { css: h, rgba: (parseInt(h.slice(1), 16) << 8 | 255) >>> 0 };
              case 9:
                return { css: h, rgba: parseInt(h.slice(1), 16) >>> 0 };
            }
          const l = h.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
          if (l)
            return a = parseInt(l[1]), r = parseInt(l[2]), u = parseInt(l[3]), v = Math.round(255 * (l[5] === void 0 ? 1 : parseFloat(l[5]))), e.toColor(a, r, u, v);
          if (!R || !w)
            throw new Error("css.toColor: Unsupported css format");
          if (R.fillStyle = w, R.fillStyle = h, typeof R.fillStyle != "string")
            throw new Error("css.toColor: Unsupported css format");
          if (R.fillRect(0, 0, 1, 1), [a, r, u, v] = R.getImageData(0, 0, 1, 1).data, v !== 255)
            throw new Error("css.toColor: Unsupported css format");
          return { rgba: n.toRgba(a, r, u, v), css: h };
        };
      }(i.css || (i.css = {})), function(x) {
        function R(w, h, l) {
          const p = w / 255, s = h / 255, f = l / 255;
          return 0.2126 * (p <= 0.03928 ? p / 12.92 : Math.pow((p + 0.055) / 1.055, 2.4)) + 0.7152 * (s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)) + 0.0722 * (f <= 0.03928 ? f / 12.92 : Math.pow((f + 0.055) / 1.055, 2.4));
        }
        x.relativeLuminance = function(w) {
          return R(w >> 16 & 255, w >> 8 & 255, 255 & w);
        }, x.relativeLuminance2 = R;
      }(t = i.rgb || (i.rgb = {})), function(x) {
        function R(h, l, p) {
          const s = h >> 24 & 255, f = h >> 16 & 255, c = h >> 8 & 255;
          let _ = l >> 24 & 255, C = l >> 16 & 255, m = l >> 8 & 255, M = y(t.relativeLuminance2(_, C, m), t.relativeLuminance2(s, f, c));
          for (; M < p && (_ > 0 || C > 0 || m > 0); )
            _ -= Math.max(0, Math.ceil(0.1 * _)), C -= Math.max(0, Math.ceil(0.1 * C)), m -= Math.max(0, Math.ceil(0.1 * m)), M = y(t.relativeLuminance2(_, C, m), t.relativeLuminance2(s, f, c));
          return (_ << 24 | C << 16 | m << 8 | 255) >>> 0;
        }
        function w(h, l, p) {
          const s = h >> 24 & 255, f = h >> 16 & 255, c = h >> 8 & 255;
          let _ = l >> 24 & 255, C = l >> 16 & 255, m = l >> 8 & 255, M = y(t.relativeLuminance2(_, C, m), t.relativeLuminance2(s, f, c));
          for (; M < p && (_ < 255 || C < 255 || m < 255); )
            _ = Math.min(255, _ + Math.ceil(0.1 * (255 - _))), C = Math.min(255, C + Math.ceil(0.1 * (255 - C))), m = Math.min(255, m + Math.ceil(0.1 * (255 - m))), M = y(t.relativeLuminance2(_, C, m), t.relativeLuminance2(s, f, c));
          return (_ << 24 | C << 16 | m << 8 | 255) >>> 0;
        }
        x.ensureContrastRatio = function(h, l, p) {
          const s = t.relativeLuminance(h >> 8), f = t.relativeLuminance(l >> 8);
          if (y(s, f) < p) {
            if (f < s) {
              const C = R(h, l, p), m = y(s, t.relativeLuminance(C >> 8));
              if (m < p) {
                const M = w(h, l, p);
                return m > y(s, t.relativeLuminance(M >> 8)) ? C : M;
              }
              return C;
            }
            const c = w(h, l, p), _ = y(s, t.relativeLuminance(c >> 8));
            if (_ < p) {
              const C = R(h, l, p);
              return _ > y(s, t.relativeLuminance(C >> 8)) ? c : C;
            }
            return c;
          }
        }, x.reduceLuminance = R, x.increaseLuminance = w, x.toChannels = function(h) {
          return [h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, 255 & h];
        }, x.toColor = function(h, l, p, s) {
          return { css: n.toCss(h, l, p, s), rgba: n.toRgba(h, l, p, s) };
        };
      }(e = i.rgba || (i.rgba = {})), i.toPaddedHex = o, i.contrastRatio = y;
    }, 345: (D, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.forwardEvent = i.EventEmitter = void 0, i.EventEmitter = class {
        constructor() {
          this._listeners = [], this._disposed = !1;
        }
        get event() {
          return this._event || (this._event = (d) => (this._listeners.push(d), { dispose: () => {
            if (!this._disposed) {
              for (let g = 0; g < this._listeners.length; g++)
                if (this._listeners[g] === d)
                  return void this._listeners.splice(g, 1);
            }
          } })), this._event;
        }
        fire(d, g) {
          const a = [];
          for (let r = 0; r < this._listeners.length; r++)
            a.push(this._listeners[r]);
          for (let r = 0; r < a.length; r++)
            a[r].call(void 0, d, g);
        }
        dispose() {
          this._listeners && (this._listeners.length = 0), this._disposed = !0;
        }
      }, i.forwardEvent = function(d, g) {
        return d((a) => g.fire(a));
      };
    }, 859: (D, i) => {
      function d(g) {
        for (const a of g)
          a.dispose();
        g.length = 0;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.getDisposeArrayDisposable = i.disposeArray = i.toDisposable = i.Disposable = void 0, i.Disposable = class {
        constructor() {
          this._disposables = [], this._isDisposed = !1;
        }
        dispose() {
          this._isDisposed = !0;
          for (const g of this._disposables)
            g.dispose();
          this._disposables.length = 0;
        }
        register(g) {
          return this._disposables.push(g), g;
        }
        unregister(g) {
          const a = this._disposables.indexOf(g);
          a !== -1 && this._disposables.splice(a, 1);
        }
      }, i.toDisposable = function(g) {
        return { dispose: g };
      }, i.disposeArray = d, i.getDisposeArrayDisposable = function(g) {
        return { dispose: () => d(g) };
      };
    }, 485: (D, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.FourKeyMap = i.TwoKeyMap = void 0;
      class d {
        constructor() {
          this._data = {};
        }
        set(a, r, u) {
          this._data[a] || (this._data[a] = {}), this._data[a][r] = u;
        }
        get(a, r) {
          return this._data[a] ? this._data[a][r] : void 0;
        }
        clear() {
          this._data = {};
        }
      }
      i.TwoKeyMap = d, i.FourKeyMap = class {
        constructor() {
          this._data = new d();
        }
        set(g, a, r, u, v) {
          this._data.get(g, a) || this._data.set(g, a, new d()), this._data.get(g, a).set(r, u, v);
        }
        get(g, a, r, u) {
          var v;
          return (v = this._data.get(g, a)) === null || v === void 0 ? void 0 : v.get(r, u);
        }
        clear() {
          this._data.clear();
        }
      };
    }, 399: (D, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.isChromeOS = i.isLinux = i.isWindows = i.isIphone = i.isIpad = i.isMac = i.getSafariVersion = i.isSafari = i.isLegacyEdge = i.isFirefox = i.isNode = void 0, i.isNode = typeof navigator > "u";
      const d = i.isNode ? "node" : navigator.userAgent, g = i.isNode ? "node" : navigator.platform;
      i.isFirefox = d.includes("Firefox"), i.isLegacyEdge = d.includes("Edge"), i.isSafari = /^((?!chrome|android).)*safari/i.test(d), i.getSafariVersion = function() {
        if (!i.isSafari)
          return 0;
        const a = d.match(/Version\/(\d+)/);
        return a === null || a.length < 2 ? 0 : parseInt(a[1]);
      }, i.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(g), i.isIpad = g === "iPad", i.isIphone = g === "iPhone", i.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(g), i.isLinux = g.indexOf("Linux") >= 0, i.isChromeOS = /\bCrOS\b/.test(d);
    }, 385: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.DebouncedIdleTask = i.IdleTaskQueue = i.PriorityTaskQueue = void 0;
      const g = d(399);
      class a {
        constructor() {
          this._tasks = [], this._i = 0;
        }
        enqueue(v) {
          this._tasks.push(v), this._start();
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
        _process(v) {
          this._idleCallback = void 0;
          let n = 0, t = 0, e = v.timeRemaining(), o = 0;
          for (; this._i < this._tasks.length; ) {
            if (n = Date.now(), this._tasks[this._i]() || this._i++, n = Math.max(1, Date.now() - n), t = Math.max(n, t), o = v.timeRemaining(), 1.5 * t > o)
              return e - n < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(e - n))}ms`), void this._start();
            e = o;
          }
          this.clear();
        }
      }
      class r extends a {
        _requestCallback(v) {
          return setTimeout(() => v(this._createDeadline(16)));
        }
        _cancelCallback(v) {
          clearTimeout(v);
        }
        _createDeadline(v) {
          const n = Date.now() + v;
          return { timeRemaining: () => Math.max(0, n - Date.now()) };
        }
      }
      i.PriorityTaskQueue = r, i.IdleTaskQueue = !g.isNode && "requestIdleCallback" in window ? class extends a {
        _requestCallback(u) {
          return requestIdleCallback(u);
        }
        _cancelCallback(u) {
          cancelIdleCallback(u);
        }
      } : r, i.DebouncedIdleTask = class {
        constructor() {
          this._queue = new i.IdleTaskQueue();
        }
        set(u) {
          this._queue.clear(), this._queue.enqueue(u);
        }
        flush() {
          this._queue.flush();
        }
      };
    }, 147: (D, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.ExtendedAttrs = i.AttributeData = void 0;
      class d {
        constructor() {
          this.fg = 0, this.bg = 0, this.extended = new g();
        }
        static toColorRGB(r) {
          return [r >>> 16 & 255, r >>> 8 & 255, 255 & r];
        }
        static fromColorRGB(r) {
          return (255 & r[0]) << 16 | (255 & r[1]) << 8 | 255 & r[2];
        }
        clone() {
          const r = new d();
          return r.fg = this.fg, r.bg = this.bg, r.extended = this.extended.clone(), r;
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
      i.AttributeData = d;
      class g {
        constructor(r = 0, u = 0) {
          this._ext = 0, this._urlId = 0, this._ext = r, this._urlId = u;
        }
        get ext() {
          return this._urlId ? -469762049 & this._ext | this.underlineStyle << 26 : this._ext;
        }
        set ext(r) {
          this._ext = r;
        }
        get underlineStyle() {
          return this._urlId ? 5 : (469762048 & this._ext) >> 26;
        }
        set underlineStyle(r) {
          this._ext &= -469762049, this._ext |= r << 26 & 469762048;
        }
        get underlineColor() {
          return 67108863 & this._ext;
        }
        set underlineColor(r) {
          this._ext &= -67108864, this._ext |= 67108863 & r;
        }
        get urlId() {
          return this._urlId;
        }
        set urlId(r) {
          this._urlId = r;
        }
        clone() {
          return new g(this._ext, this._urlId);
        }
        isEmpty() {
          return this.underlineStyle === 0 && this._urlId === 0;
        }
      }
      i.ExtendedAttrs = g;
    }, 782: (D, i, d) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.CellData = void 0;
      const g = d(133), a = d(855), r = d(147);
      class u extends r.AttributeData {
        constructor() {
          super(...arguments), this.content = 0, this.fg = 0, this.bg = 0, this.extended = new r.ExtendedAttrs(), this.combinedData = "";
        }
        static fromCharData(n) {
          const t = new u();
          return t.setFromCharData(n), t;
        }
        isCombined() {
          return 2097152 & this.content;
        }
        getWidth() {
          return this.content >> 22;
        }
        getChars() {
          return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, g.stringFromCodePoint)(2097151 & this.content) : "";
        }
        getCode() {
          return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
        }
        setFromCharData(n) {
          this.fg = n[a.CHAR_DATA_ATTR_INDEX], this.bg = 0;
          let t = !1;
          if (n[a.CHAR_DATA_CHAR_INDEX].length > 2)
            t = !0;
          else if (n[a.CHAR_DATA_CHAR_INDEX].length === 2) {
            const e = n[a.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
            if (55296 <= e && e <= 56319) {
              const o = n[a.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
              56320 <= o && o <= 57343 ? this.content = 1024 * (e - 55296) + o - 56320 + 65536 | n[a.CHAR_DATA_WIDTH_INDEX] << 22 : t = !0;
            } else
              t = !0;
          } else
            this.content = n[a.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | n[a.CHAR_DATA_WIDTH_INDEX] << 22;
          t && (this.combinedData = n[a.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | n[a.CHAR_DATA_WIDTH_INDEX] << 22);
        }
        getAsCharData() {
          return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
        }
      }
      i.CellData = u;
    }, 855: (D, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.WHITESPACE_CELL_CODE = i.WHITESPACE_CELL_WIDTH = i.WHITESPACE_CELL_CHAR = i.NULL_CELL_CODE = i.NULL_CELL_WIDTH = i.NULL_CELL_CHAR = i.CHAR_DATA_CODE_INDEX = i.CHAR_DATA_WIDTH_INDEX = i.CHAR_DATA_CHAR_INDEX = i.CHAR_DATA_ATTR_INDEX = i.DEFAULT_EXT = i.DEFAULT_ATTR = i.DEFAULT_COLOR = void 0, i.DEFAULT_COLOR = 0, i.DEFAULT_ATTR = 256 | i.DEFAULT_COLOR << 9, i.DEFAULT_EXT = 0, i.CHAR_DATA_ATTR_INDEX = 0, i.CHAR_DATA_CHAR_INDEX = 1, i.CHAR_DATA_WIDTH_INDEX = 2, i.CHAR_DATA_CODE_INDEX = 3, i.NULL_CELL_CHAR = "", i.NULL_CELL_WIDTH = 1, i.NULL_CELL_CODE = 0, i.WHITESPACE_CELL_CHAR = " ", i.WHITESPACE_CELL_WIDTH = 1, i.WHITESPACE_CELL_CODE = 32;
    }, 133: (D, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.Utf8ToUtf32 = i.StringToUtf32 = i.utf32ToString = i.stringFromCodePoint = void 0, i.stringFromCodePoint = function(d) {
        return d > 65535 ? (d -= 65536, String.fromCharCode(55296 + (d >> 10)) + String.fromCharCode(d % 1024 + 56320)) : String.fromCharCode(d);
      }, i.utf32ToString = function(d, g = 0, a = d.length) {
        let r = "";
        for (let u = g; u < a; ++u) {
          let v = d[u];
          v > 65535 ? (v -= 65536, r += String.fromCharCode(55296 + (v >> 10)) + String.fromCharCode(v % 1024 + 56320)) : r += String.fromCharCode(v);
        }
        return r;
      }, i.StringToUtf32 = class {
        constructor() {
          this._interim = 0;
        }
        clear() {
          this._interim = 0;
        }
        decode(d, g) {
          const a = d.length;
          if (!a)
            return 0;
          let r = 0, u = 0;
          if (this._interim) {
            const v = d.charCodeAt(u++);
            56320 <= v && v <= 57343 ? g[r++] = 1024 * (this._interim - 55296) + v - 56320 + 65536 : (g[r++] = this._interim, g[r++] = v), this._interim = 0;
          }
          for (let v = u; v < a; ++v) {
            const n = d.charCodeAt(v);
            if (55296 <= n && n <= 56319) {
              if (++v >= a)
                return this._interim = n, r;
              const t = d.charCodeAt(v);
              56320 <= t && t <= 57343 ? g[r++] = 1024 * (n - 55296) + t - 56320 + 65536 : (g[r++] = n, g[r++] = t);
            } else
              n !== 65279 && (g[r++] = n);
          }
          return r;
        }
      }, i.Utf8ToUtf32 = class {
        constructor() {
          this.interim = new Uint8Array(3);
        }
        clear() {
          this.interim.fill(0);
        }
        decode(d, g) {
          const a = d.length;
          if (!a)
            return 0;
          let r, u, v, n, t = 0, e = 0, o = 0;
          if (this.interim[0]) {
            let R = !1, w = this.interim[0];
            w &= (224 & w) == 192 ? 31 : (240 & w) == 224 ? 15 : 7;
            let h, l = 0;
            for (; (h = 63 & this.interim[++l]) && l < 4; )
              w <<= 6, w |= h;
            const p = (224 & this.interim[0]) == 192 ? 2 : (240 & this.interim[0]) == 224 ? 3 : 4, s = p - l;
            for (; o < s; ) {
              if (o >= a)
                return 0;
              if (h = d[o++], (192 & h) != 128) {
                o--, R = !0;
                break;
              }
              this.interim[l++] = h, w <<= 6, w |= 63 & h;
            }
            R || (p === 2 ? w < 128 ? o-- : g[t++] = w : p === 3 ? w < 2048 || w >= 55296 && w <= 57343 || w === 65279 || (g[t++] = w) : w < 65536 || w > 1114111 || (g[t++] = w)), this.interim.fill(0);
          }
          const y = a - 4;
          let x = o;
          for (; x < a; ) {
            for (; !(!(x < y) || 128 & (r = d[x]) || 128 & (u = d[x + 1]) || 128 & (v = d[x + 2]) || 128 & (n = d[x + 3])); )
              g[t++] = r, g[t++] = u, g[t++] = v, g[t++] = n, x += 4;
            if (r = d[x++], r < 128)
              g[t++] = r;
            else if ((224 & r) == 192) {
              if (x >= a)
                return this.interim[0] = r, t;
              if (u = d[x++], (192 & u) != 128) {
                x--;
                continue;
              }
              if (e = (31 & r) << 6 | 63 & u, e < 128) {
                x--;
                continue;
              }
              g[t++] = e;
            } else if ((240 & r) == 224) {
              if (x >= a)
                return this.interim[0] = r, t;
              if (u = d[x++], (192 & u) != 128) {
                x--;
                continue;
              }
              if (x >= a)
                return this.interim[0] = r, this.interim[1] = u, t;
              if (v = d[x++], (192 & v) != 128) {
                x--;
                continue;
              }
              if (e = (15 & r) << 12 | (63 & u) << 6 | 63 & v, e < 2048 || e >= 55296 && e <= 57343 || e === 65279)
                continue;
              g[t++] = e;
            } else if ((248 & r) == 240) {
              if (x >= a)
                return this.interim[0] = r, t;
              if (u = d[x++], (192 & u) != 128) {
                x--;
                continue;
              }
              if (x >= a)
                return this.interim[0] = r, this.interim[1] = u, t;
              if (v = d[x++], (192 & v) != 128) {
                x--;
                continue;
              }
              if (x >= a)
                return this.interim[0] = r, this.interim[1] = u, this.interim[2] = v, t;
              if (n = d[x++], (192 & n) != 128) {
                x--;
                continue;
              }
              if (e = (7 & r) << 18 | (63 & u) << 12 | (63 & v) << 6 | 63 & n, e < 65536 || e > 1114111)
                continue;
              g[t++] = e;
            }
          }
          return t;
        }
      };
    } }, K = {};
    function j(D) {
      var i = K[D];
      if (i !== void 0)
        return i.exports;
      var d = K[D] = { exports: {} };
      return ee[D](d, d.exports, j), d.exports;
    }
    var te = {};
    return (() => {
      var D = te;
      Object.defineProperty(D, "__esModule", { value: !0 }), D.WebglAddon = void 0;
      const i = j(345), d = j(859), g = j(399), a = j(666);
      class r extends d.Disposable {
        constructor(v) {
          if (g.isSafari && (0, g.getSafariVersion)() < 16)
            throw new Error("Webgl2 is only supported on Safari 16 and above");
          super(), this._preserveDrawingBuffer = v, this._onChangeTextureAtlas = this.register(new i.EventEmitter()), this.onChangeTextureAtlas = this._onChangeTextureAtlas.event, this._onAddTextureAtlasCanvas = this.register(new i.EventEmitter()), this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event, this._onRemoveTextureAtlasCanvas = this.register(new i.EventEmitter()), this.onRemoveTextureAtlasCanvas = this._onRemoveTextureAtlasCanvas.event, this._onContextLoss = this.register(new i.EventEmitter()), this.onContextLoss = this._onContextLoss.event;
        }
        activate(v) {
          const n = v._core;
          if (!v.element)
            return void this.register(n.onWillOpen(() => this.activate(v)));
          this._terminal = v;
          const t = n.coreService, e = n.optionsService, o = n, y = o._renderService, x = o._characterJoinerService, R = o._charSizeService, w = o._coreBrowserService, h = o._decorationService, l = o._themeService;
          this._renderer = this.register(new a.WebglRenderer(v, x, R, w, t, h, e, l, this._preserveDrawingBuffer)), this.register((0, i.forwardEvent)(this._renderer.onContextLoss, this._onContextLoss)), this.register((0, i.forwardEvent)(this._renderer.onChangeTextureAtlas, this._onChangeTextureAtlas)), this.register((0, i.forwardEvent)(this._renderer.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas)), this.register((0, i.forwardEvent)(this._renderer.onRemoveTextureAtlasCanvas, this._onRemoveTextureAtlasCanvas)), y.setRenderer(this._renderer), this.register((0, d.toDisposable)(() => {
            const p = this._terminal._core._renderService;
            p.setRenderer(this._terminal._core._createRenderer()), p.handleResize(v.cols, v.rows);
          }));
        }
        get textureAtlas() {
          var v;
          return (v = this._renderer) === null || v === void 0 ? void 0 : v.textureAtlas;
        }
        clearTextureAtlas() {
          var v;
          (v = this._renderer) === null || v === void 0 || v.clearTextureAtlas();
        }
      }
      D.WebglAddon = r;
    })(), te;
  })());
})(Ce);
var pe = Ce.exports;
const Le = /* @__PURE__ */ me(pe), be = /* @__PURE__ */ xe({
  __proto__: null,
  default: Le
}, [pe]);
export {
  be as x
};
