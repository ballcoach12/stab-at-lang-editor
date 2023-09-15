import { qk as H } from "./index-4b7b8e94.js";
function S(M, G) {
  for (var p = 0; p < G.length; p++) {
    const m = G[p];
    if (typeof m != "string" && !Array.isArray(m)) {
      for (const D in m)
        if (D !== "default" && !(D in M)) {
          const k = Object.getOwnPropertyDescriptor(m, D);
          k && Object.defineProperty(M, D, k.get ? k : {
            enumerable: !0,
            get: () => m[D]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(M, Symbol.toStringTag, { value: "Module" }));
}
var y = { exports: {} };
/*! For license information please see xterm-addon-image.js.LICENSE.txt */
(function(M, G) {
  (function(p, m) {
    M.exports = m();
  })(self, function() {
    return (() => {
      var p = { 615: (w, h) => {
        function l(c) {
          if (typeof Buffer < "u")
            return Buffer.from(c, "base64");
          const B = atob(c), Q = new Uint8Array(B.length);
          for (let t = 0; t < Q.length; ++t)
            Q[t] = B.charCodeAt(t);
          return Q;
        }
        Object.defineProperty(h, "__esModule", { value: !0 }), h.InWasm = void 0, h.InWasm = function(c) {
          if (c.d) {
            const { t: B, s: Q, d: t } = c;
            let A, e;
            const i = WebAssembly;
            return B === 2 ? Q ? () => A || (A = l(t)) : () => Promise.resolve(A || (A = l(t))) : B === 1 ? Q ? () => e || (e = new i.Module(A || (A = l(t)))) : () => e ? Promise.resolve(e) : i.compile(A || (A = l(t))).then((s) => e = s) : Q ? (s) => new i.Instance(e || (e = new i.Module(A || (A = l(t)))), s) : (s) => e ? i.instantiate(e, s) : i.instantiate(A || (A = l(t)), s).then((r) => (e = r.module) && r.instance);
          }
          if (typeof _wasmCtx > "u")
            throw new Error('must run "inwasm"');
          _wasmCtx.add(c);
        };
      }, 477: (w, h) => {
        function l(i) {
          return 255 & i;
        }
        function c(i) {
          return i >>> 8 & 255;
        }
        function B(i) {
          return i >>> 16 & 255;
        }
        function Q(i, s, r, g = 255) {
          return ((255 & g) << 24 | (255 & r) << 16 | (255 & s) << 8 | 255 & i) >>> 0;
        }
        function t(i, s, r) {
          return Math.max(i, Math.min(r, s));
        }
        function A(i, s, r) {
          return r < 0 && (r += 1), r > 1 && (r -= 1), 6 * r < 1 ? s + 6 * (i - s) * r : 2 * r < 1 ? i : 3 * r < 2 ? s + (i - s) * (4 - 6 * r) : s;
        }
        function e(i, s, r) {
          return (4278190080 | Math.round(r / 100 * 255) << 16 | Math.round(s / 100 * 255) << 8 | Math.round(i / 100 * 255)) >>> 0;
        }
        Object.defineProperty(h, "__esModule", { value: !0 }), h.DEFAULT_FOREGROUND = h.DEFAULT_BACKGROUND = h.PALETTE_ANSI_256 = h.PALETTE_VT340_GREY = h.PALETTE_VT340_COLOR = h.normalizeHLS = h.normalizeRGB = h.nearestColorIndex = h.fromRGBA8888 = h.toRGBA8888 = h.alpha = h.blue = h.green = h.red = h.BIG_ENDIAN = void 0, h.BIG_ENDIAN = new Uint8Array(new Uint32Array([4278190080]).buffer)[0] === 255, h.BIG_ENDIAN && console.warn("BE platform detected. This version of node-sixel works only on LE properly."), h.red = l, h.green = c, h.blue = B, h.alpha = function(i) {
          return i >>> 24 & 255;
        }, h.toRGBA8888 = Q, h.fromRGBA8888 = function(i) {
          return [255 & i, i >> 8 & 255, i >> 16 & 255, i >>> 24];
        }, h.nearestColorIndex = function(i, s) {
          const r = l(i), g = c(i), a = B(i);
          let o = Number.MAX_SAFE_INTEGER, I = -1;
          for (let n = 0; n < s.length; ++n) {
            const C = r - s[n][0], E = g - s[n][1], d = a - s[n][2], _ = C * C + E * E + d * d;
            if (!_)
              return n;
            _ < o && (o = _, I = n);
          }
          return I;
        }, h.normalizeRGB = e, h.normalizeHLS = function(i, s, r) {
          return function(g, a, o) {
            if (!o) {
              const C = Math.round(255 * a);
              return Q(C, C, C);
            }
            const I = a < 0.5 ? a * (1 + o) : a + o - a * o, n = 2 * a - I;
            return Q(t(0, 255, Math.round(255 * A(I, n, g + 0.3333333333333333))), t(0, 255, Math.round(255 * A(I, n, g))), t(0, 255, Math.round(255 * A(I, n, g - 0.3333333333333333))));
          }((i + 240) / 360, s / 100, r / 100);
        }, h.PALETTE_VT340_COLOR = new Uint32Array([e(0, 0, 0), e(20, 20, 80), e(80, 13, 13), e(20, 80, 20), e(80, 20, 80), e(20, 80, 80), e(80, 80, 20), e(53, 53, 53), e(26, 26, 26), e(33, 33, 60), e(60, 26, 26), e(33, 60, 33), e(60, 33, 60), e(33, 60, 60), e(60, 60, 33), e(80, 80, 80)]), h.PALETTE_VT340_GREY = new Uint32Array([e(0, 0, 0), e(13, 13, 13), e(26, 26, 26), e(40, 40, 40), e(6, 6, 6), e(20, 20, 20), e(33, 33, 33), e(46, 46, 46), e(0, 0, 0), e(13, 13, 13), e(26, 26, 26), e(40, 40, 40), e(6, 6, 6), e(20, 20, 20), e(33, 33, 33), e(46, 46, 46)]), h.PALETTE_ANSI_256 = (() => {
          const i = [Q(0, 0, 0), Q(205, 0, 0), Q(0, 205, 0), Q(205, 205, 0), Q(0, 0, 238), Q(205, 0, 205), Q(0, 250, 205), Q(229, 229, 229), Q(127, 127, 127), Q(255, 0, 0), Q(0, 255, 0), Q(255, 255, 0), Q(92, 92, 255), Q(255, 0, 255), Q(0, 255, 255), Q(255, 255, 255)], s = [0, 95, 135, 175, 215, 255];
          for (let r = 0; r < 6; ++r)
            for (let g = 0; g < 6; ++g)
              for (let a = 0; a < 6; ++a)
                i.push(Q(s[r], s[g], s[a]));
          for (let r = 8; r <= 238; r += 10)
            i.push(Q(r, r, r));
          return new Uint32Array(i);
        })(), h.DEFAULT_BACKGROUND = Q(0, 0, 0, 255), h.DEFAULT_FOREGROUND = Q(255, 255, 255, 255);
      }, 710: (w, h, l) => {
        Object.defineProperty(h, "__esModule", { value: !0 }), h.decodeAsync = h.decode = h.Decoder = h.DecoderAsync = void 0;
        const c = l(477), B = l(343), Q = function(g) {
          if (typeof Buffer < "u")
            return Buffer.from(g, "base64");
          const a = atob(g), o = new Uint8Array(a.length);
          for (let I = 0; I < o.length; ++I)
            o[I] = a.charCodeAt(I);
          return o;
        }(B.LIMITS.BYTES);
        let t;
        const A = new Uint32Array();
        class e {
          constructor() {
            this.bandHandler = (a) => 1, this.modeHandler = (a) => 1;
          }
          handle_band(a) {
            return this.bandHandler(a);
          }
          mode_parsed(a) {
            return this.modeHandler(a);
          }
        }
        const i = { memoryLimit: 134217728, sixelColor: c.DEFAULT_FOREGROUND, fillColor: c.DEFAULT_BACKGROUND, palette: c.PALETTE_VT340_COLOR, paletteLimit: B.LIMITS.PALETTE_SIZE, truncate: !0 };
        function s(g) {
          const a = new e(), o = { env: { handle_band: a.handle_band.bind(a), mode_parsed: a.mode_parsed.bind(a) } };
          return WebAssembly.instantiate(t || Q, o).then((I) => (t = t || I.module, new r(g, I.instance || I, a)));
        }
        h.DecoderAsync = s;
        class r {
          constructor(a, o, I) {
            if (this._PIXEL_OFFSET = B.LIMITS.MAX_WIDTH + 4, this._canvas = A, this._bandWidths = [], this._maxWidth = 0, this._minWidth = B.LIMITS.MAX_WIDTH, this._lastOffset = 0, this._currentHeight = 0, this._opts = Object.assign({}, i, a), this._opts.paletteLimit > B.LIMITS.PALETTE_SIZE)
              throw new Error(`DecoderOptions.paletteLimit must not exceed ${B.LIMITS.PALETTE_SIZE}`);
            if (o)
              I.bandHandler = this._handle_band.bind(this), I.modeHandler = this._initCanvas.bind(this);
            else {
              const n = t || (t = new WebAssembly.Module(Q));
              o = new WebAssembly.Instance(n, { env: { handle_band: this._handle_band.bind(this), mode_parsed: this._initCanvas.bind(this) } });
            }
            this._instance = o, this._wasm = this._instance.exports, this._chunk = new Uint8Array(this._wasm.memory.buffer, this._wasm.get_chunk_address(), B.LIMITS.CHUNK_SIZE), this._states = new Uint32Array(this._wasm.memory.buffer, this._wasm.get_state_address(), 12), this._palette = new Uint32Array(this._wasm.memory.buffer, this._wasm.get_palette_address(), B.LIMITS.PALETTE_SIZE), this._palette.set(this._opts.palette), this._pSrc = new Uint32Array(this._wasm.memory.buffer, this._wasm.get_p0_address()), this._wasm.init(c.DEFAULT_FOREGROUND, 0, this._opts.paletteLimit, 0);
          }
          get _fillColor() {
            return this._states[0];
          }
          get _truncate() {
            return this._states[8];
          }
          get _rasterWidth() {
            return this._states[6];
          }
          get _rasterHeight() {
            return this._states[7];
          }
          get _width() {
            return this._states[2] ? this._states[2] - 4 : 0;
          }
          get _height() {
            return this._states[3];
          }
          get _level() {
            return this._states[9];
          }
          get _mode() {
            return this._states[10];
          }
          get _paletteLimit() {
            return this._states[11];
          }
          _initCanvas(a) {
            if (a === 2) {
              const o = this.width * this.height;
              if (o > this._canvas.length) {
                if (this._opts.memoryLimit && 4 * o > this._opts.memoryLimit)
                  throw this.release(), new Error("image exceeds memory limit");
                this._canvas = new Uint32Array(o);
              }
              this._maxWidth = this._width;
            } else if (a === 1)
              if (this._level === 2) {
                const o = Math.min(this._rasterWidth, B.LIMITS.MAX_WIDTH) * this._rasterHeight;
                if (o > this._canvas.length) {
                  if (this._opts.memoryLimit && 4 * o > this._opts.memoryLimit)
                    throw this.release(), new Error("image exceeds memory limit");
                  this._canvas = new Uint32Array(o);
                }
              } else
                this._canvas.length < 65536 && (this._canvas = new Uint32Array(65536));
            return 0;
          }
          _realloc(a, o) {
            const I = a + o;
            if (I > this._canvas.length) {
              if (this._opts.memoryLimit && 4 * I > this._opts.memoryLimit)
                throw this.release(), new Error("image exceeds memory limit");
              const n = new Uint32Array(65536 * Math.ceil(I / 65536));
              n.set(this._canvas), this._canvas = n;
            }
          }
          _handle_band(a) {
            const o = this._PIXEL_OFFSET;
            let I = this._lastOffset;
            if (this._mode === 2) {
              let n = this.height - this._currentHeight, C = 0;
              for (; C < 6 && n > 0; )
                this._canvas.set(this._pSrc.subarray(o * C, o * C + a), I + a * C), C++, n--;
              this._lastOffset += a * C, this._currentHeight += C;
            } else if (this._mode === 1) {
              this._realloc(I, 6 * a), this._maxWidth = Math.max(this._maxWidth, a), this._minWidth = Math.min(this._minWidth, a);
              for (let n = 0; n < 6; ++n)
                this._canvas.set(this._pSrc.subarray(o * n, o * n + a), I + a * n);
              this._bandWidths.push(a), this._lastOffset += 6 * a, this._currentHeight += 6;
            }
            return 0;
          }
          get width() {
            return this._mode !== 1 ? this._width : Math.max(this._maxWidth, this._wasm.current_width());
          }
          get height() {
            return this._mode !== 1 ? this._height : this._wasm.current_width() ? 6 * this._bandWidths.length + this._wasm.current_height() : 6 * this._bandWidths.length;
          }
          get palette() {
            return this._palette.subarray(0, this._paletteLimit);
          }
          get memoryUsage() {
            return this._canvas.byteLength + this._wasm.memory.buffer.byteLength + 8 * this._bandWidths.length;
          }
          get properties() {
            return { width: this.width, height: this.height, mode: this._mode, level: this._level, truncate: !!this._truncate, paletteLimit: this._paletteLimit, fillColor: this._fillColor, memUsage: this.memoryUsage, rasterAttributes: { numerator: this._states[4], denominator: this._states[5], width: this._rasterWidth, height: this._rasterHeight } };
          }
          init(a = this._opts.fillColor, o = this._opts.palette, I = this._opts.paletteLimit, n = this._opts.truncate) {
            this._wasm.init(this._opts.sixelColor, a, I, n ? 1 : 0), o && this._palette.set(o.subarray(0, B.LIMITS.PALETTE_SIZE)), this._bandWidths.length = 0, this._maxWidth = 0, this._minWidth = B.LIMITS.MAX_WIDTH, this._lastOffset = 0, this._currentHeight = 0;
          }
          decode(a, o = 0, I = a.length) {
            let n = o;
            for (; n < I; ) {
              const C = Math.min(I - n, B.LIMITS.CHUNK_SIZE);
              this._chunk.set(a.subarray(n, n += C)), this._wasm.decode(0, C);
            }
          }
          decodeString(a, o = 0, I = a.length) {
            let n = o;
            for (; n < I; ) {
              const C = Math.min(I - n, B.LIMITS.CHUNK_SIZE);
              for (let E = 0, d = n; E < C; ++E, ++d)
                this._chunk[E] = a.charCodeAt(d);
              n += C, this._wasm.decode(0, C);
            }
          }
          get data32() {
            if (this._mode === 0 || !this.width || !this.height)
              return A;
            const a = this._wasm.current_width();
            if (this._mode === 2) {
              let o = this.height - this._currentHeight;
              if (o > 0) {
                const I = this._PIXEL_OFFSET;
                let n = this._lastOffset, C = 0;
                for (; C < 6 && o > 0; )
                  this._canvas.set(this._pSrc.subarray(I * C, I * C + a), n + a * C), C++, o--;
                o && this._canvas.fill(this._fillColor, n + a * C);
              }
              return this._canvas.subarray(0, this.width * this.height);
            }
            if (this._mode === 1) {
              if (this._minWidth === this._maxWidth) {
                let C = !1;
                if (a)
                  if (a !== this._minWidth)
                    C = !0;
                  else {
                    const E = this._PIXEL_OFFSET;
                    let d = this._lastOffset;
                    this._realloc(d, 6 * a);
                    for (let _ = 0; _ < 6; ++_)
                      this._canvas.set(this._pSrc.subarray(E * _, E * _ + a), d + a * _);
                  }
                if (!C)
                  return this._canvas.subarray(0, this.width * this.height);
              }
              const o = new Uint32Array(this.width * this.height);
              o.fill(this._fillColor);
              let I = 0, n = 0;
              for (let C = 0; C < this._bandWidths.length; ++C) {
                const E = this._bandWidths[C];
                for (let d = 0; d < 6; ++d)
                  o.set(this._canvas.subarray(n, n += E), I), I += this.width;
              }
              if (a) {
                const C = this._PIXEL_OFFSET, E = this._wasm.current_height();
                for (let d = 0; d < E; ++d)
                  o.set(this._pSrc.subarray(C * d, C * d + a), I + this.width * d);
              }
              return o;
            }
            return A;
          }
          get data8() {
            return new Uint8ClampedArray(this.data32.buffer, 0, this.width * this.height * 4);
          }
          release() {
            this._canvas = A, this._bandWidths.length = 0, this._maxWidth = 0, this._minWidth = B.LIMITS.MAX_WIDTH, this._wasm.init(c.DEFAULT_FOREGROUND, 0, this._opts.paletteLimit, 0);
          }
        }
        h.Decoder = r, h.decode = function(g, a) {
          const o = new r(a);
          return o.init(), typeof g == "string" ? o.decodeString(g) : o.decode(g), { width: o.width, height: o.height, data32: o.data32, data8: o.data8 };
        }, h.decodeAsync = async function(g, a) {
          const o = await s(a);
          return o.init(), typeof g == "string" ? o.decodeString(g) : o.decode(g), { width: o.width, height: o.height, data32: o.data32, data8: o.data8 };
        };
      }, 343: (w, h) => {
        Object.defineProperty(h, "__esModule", { value: !0 }), h.LIMITS = void 0, h.LIMITS = { CHUNK_SIZE: 16384, PALETTE_SIZE: 4096, MAX_WIDTH: 16384, BYTES: "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AEHAiwIgADcDAEG4iwIgADcDAEGwiwIgADcDAEGoiwIgADcDAEGgiwIgADcDAEGYiwIgADcDAEGQiwIgADcDAEGIiwIgADcDAEGAiwIgADcDAEH4igIgADcDAEHwigIgADcDAEHoigIgADcDAEHgigIgADcDAEHYigIgADcDAEHQigIgADcDAEHIigIgADcDAEHAigIgADcDAEG4igIgADcDAEGwigIgADcDAEGoigIgADcDAEGgigIgADcDAEGYigIgADcDAEGQigIgADcDAEGIigIgADcDAEGAigIgADcDAEH4iQIgADcDAEHwiQIgADcDAEHoiQIgADcDAEHgiQIgADcDAEHYiQIgADcDAEHQiQIgADcDAEHIiQIgADcDAEHAiQIgADcDAEG4iQIgADcDAEGwiQIgADcDAEGoCCgCACIEQf8AakGAAW0hCAJAIARBgQFIDQBBASEBIAhBAiAIQQJKG0EBayICQQFxIQMgBEGBAk4EQCACQX5xIQIDQCABQQl0IgdBEHJBoIkCakGwiQJBgAT8CgAAIAdBsI0CakGwiQJBgAT8CgAAIAFBAmohASACQQJrIgINAAsLIANFDQAgAUEJdEEQckGgiQJqQbCJAkGABPwKAAALAkAgBEEBSA0AIAhBASAIQQFKGyIDQQFxIQUCQCADQQFrIgdFBEBBACEBDAELIANB/v///wdxIQJBACEBA0AgAUEJdCIGQRByQbCJBmpBsIkCQYAE/AoAACAGQZAEckGwiQZqQbCJAkGABPwKAAAgAUECaiEBIAJBAmsiAg0ACwsgBQRAIAFBCXRBEHJBsIkGakGwiQJBgAT8CgAACyAEQQFIDQAgA0EBcSEFIAcEfyADQf7///8HcSECQQAhAQNAIAFBCXQiBkEQckHAiQpqQbCJAkGABPwKAAAgBkGQBHJBwIkKakGwiQJBgAT8CgAAIAFBAmohASACQQJrIgINAAsgAUEHdEEEcgVBBAshASAFBEAgAUECdEHAiQpqQbCJAkGABPwKAAALIARBAUgNACADQQFxIQUgBwR/IANB/v///wdxIQJBACEBA0AgAUEJdCIGQRByQdCJDmpBsIkCQYAE/AoAACAGQZAEckHQiQ5qQbCJAkGABPwKAAAgAUECaiEBIAJBAmsiAg0ACyABQQd0QQRyBUEECyEBIAUEQCABQQJ0QdCJ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" };
      }, 125: (w, h, l) => {
        Object.defineProperty(h, "__esModule", { value: !0 }), h.IIPHandler = void 0;
        const c = l(782), B = l(216), Q = l(997), t = l(769), A = l(326), e = { name: "Unnamed file", size: 0, width: "auto", height: "auto", preserveAspectRatio: 1, inline: 0 };
        h.IIPHandler = class {
          constructor(i, s, r, g) {
            this._opts = i, this._renderer = s, this._storage = r, this._coreTerminal = g, this._aborted = !1, this._hp = new t.HeaderParser(), this._header = e, this._dec = new Q.Base64Decoder(4194304), this._metrics = A.UNSUPPORTED_TYPE;
          }
          reset() {
          }
          start() {
            this._aborted = !1, this._header = e, this._metrics = A.UNSUPPORTED_TYPE, this._hp.reset();
          }
          put(i, s, r) {
            if (!this._aborted)
              if (this._hp.state === 4)
                this._dec.put(i, s, r) && (this._dec.release(), this._aborted = !0);
              else {
                const g = this._hp.parse(i, s, r);
                if (g === -1)
                  return void (this._aborted = !0);
                if (g > 0) {
                  if (this._header = Object.assign({}, e, this._hp.fields), !this._header.inline || !this._header.size || this._header.size > this._opts.iipSizeLimit)
                    return void (this._aborted = !0);
                  this._dec.init(this._header.size), this._dec.put(i, g, r) && (this._dec.release(), this._aborted = !0);
                }
              }
          }
          end(i) {
            if (this._aborted)
              return !0;
            let s = 0, r = 0, g = !0;
            if ((g = i) && (g = !this._dec.end()) && (this._metrics = (0, A.imageType)(this._dec.data8), (g = this._metrics.mime !== "unsupported") && (s = this._metrics.width, r = this._metrics.height, (g = s && r && s * r < this._opts.pixelLimit) && ([s, r] = this._resize(s, r).map(Math.floor), g = s && r && s * r < this._opts.pixelLimit))), !g)
              return this._dec.release(), !0;
            const a = new Blob([this._dec.data8], { type: this._metrics.mime });
            this._dec.release();
            const o = this._coreTerminal._core._coreBrowserService.window;
            if (!o.createImageBitmap) {
              const I = URL.createObjectURL(a), n = new Image();
              return new Promise((C) => {
                n.addEventListener("load", () => {
                  var E;
                  URL.revokeObjectURL(I);
                  const d = c.ImageRenderer.createCanvas(o, s, r);
                  (E = d.getContext("2d")) === null || E === void 0 || E.drawImage(n, 0, 0, s, r), this._storage.addImage(d), C(!0);
                }), n.src = I, setTimeout(() => C(!0), 1e3);
              });
            }
            return o.createImageBitmap(a, { resizeWidth: s, resizeHeight: r }).then((I) => (this._storage.addImage(I), !0));
          }
          _resize(i, s) {
            var r, g, a, o;
            const I = ((r = this._renderer.dimensions) === null || r === void 0 ? void 0 : r.css.cell.width) || B.CELL_SIZE_DEFAULT.width, n = ((g = this._renderer.dimensions) === null || g === void 0 ? void 0 : g.css.cell.height) || B.CELL_SIZE_DEFAULT.height, C = ((a = this._renderer.dimensions) === null || a === void 0 ? void 0 : a.css.canvas.width) || I * this._coreTerminal.cols, E = ((o = this._renderer.dimensions) === null || o === void 0 ? void 0 : o.css.canvas.height) || n * this._coreTerminal.rows, d = this._dim(this._header.width, C, I), _ = this._dim(this._header.height, E, n);
            if (!d && !_) {
              const N = C / i, u = (E - n) / s, f = Math.min(N, u);
              return f < 1 ? [i * f, s * f] : [i, s];
            }
            return d ? !this._header.preserveAspectRatio && d && _ ? [d, _] : [d, s * d / i] : [i * _ / s, _];
          }
          _dim(i, s, r) {
            return i === "auto" ? 0 : i.endsWith("%") ? parseInt(i.slice(0, -1)) * s / 100 : i.endsWith("px") ? parseInt(i.slice(0, -2)) : parseInt(i) * r;
          }
        };
      }, 769: (w, h) => {
        function l(e) {
          let i = "";
          for (let s = 0; s < e.length; ++s)
            i += String.fromCharCode(e[s]);
          return i;
        }
        function c(e) {
          let i = 0;
          for (let s = 0; s < e.length; ++s) {
            if (e[s] < 48 || e[s] > 57)
              throw new Error("illegal char");
            i = 10 * i + e[s] - 48;
          }
          return i;
        }
        function B(e) {
          const i = l(e);
          if (!i.match(/^((auto)|(\d+?((px)|(%)){0,1}))$/))
            throw new Error("illegal size");
          return i;
        }
        Object.defineProperty(h, "__esModule", { value: !0 }), h.HeaderParser = void 0;
        const Q = { inline: c, size: c, name: function(e) {
          if (typeof Buffer < "u")
            return Buffer.from(l(e), "base64").toString();
          const i = atob(l(e)), s = new Uint8Array(i.length);
          for (let r = 0; r < s.length; ++r)
            s[r] = i.charCodeAt(r);
          return new TextDecoder().decode(s);
        }, width: B, height: B, preserveAspectRatio: c }, t = [70, 105, 108, 101], A = 1024;
        h.HeaderParser = class {
          constructor() {
            this.state = 0, this._buffer = new Uint32Array(A), this._position = 0, this._key = "", this.fields = {};
          }
          reset() {
            this._buffer.fill(0), this.state = 0, this._position = 0, this.fields = {}, this._key = "";
          }
          parse(e, i, s) {
            let r = this.state, g = this._position;
            const a = this._buffer;
            if (r === 1 || r === 4 || r === 0 && g > 6)
              return -1;
            for (let o = i; o < s; ++o) {
              const I = e[o];
              switch (I) {
                case 59:
                  if (!this._storeValue(g))
                    return this._a();
                  r = 2, g = 0;
                  break;
                case 61:
                  if (r === 0) {
                    for (let n = 0; n < t.length; ++n)
                      if (a[n] !== t[n])
                        return this._a();
                    r = 2, g = 0;
                  } else if (r === 2) {
                    if (!this._storeKey(g))
                      return this._a();
                    r = 3, g = 0;
                  } else if (r === 3) {
                    if (g >= A)
                      return this._a();
                    a[g++] = I;
                  }
                  break;
                case 58:
                  return r !== 3 || this._storeValue(g) ? (this.state = 4, o + 1) : this._a();
                default:
                  if (g >= A)
                    return this._a();
                  a[g++] = I;
              }
            }
            return this.state = r, this._position = g, -2;
          }
          _a() {
            return this.state = 1, -1;
          }
          _storeKey(e) {
            const i = l(this._buffer.subarray(0, e));
            return !!i && (this._key = i, this.fields[i] = null, !0);
          }
          _storeValue(e) {
            if (this._key) {
              try {
                const i = this._buffer.slice(0, e);
                this.fields[this._key] = Q[this._key] ? Q[this._key](i) : i;
              } catch {
                return !1;
              }
              return !0;
            }
            return !1;
          }
        };
      }, 326: (w, h) => {
        Object.defineProperty(h, "__esModule", { value: !0 }), h.imageType = h.UNSUPPORTED_TYPE = void 0, h.UNSUPPORTED_TYPE = { mime: "unsupported", width: 0, height: 0 }, h.imageType = function(l) {
          if (l.length < 24)
            return h.UNSUPPORTED_TYPE;
          const c = new Uint32Array(l.buffer, l.byteOffset, 6);
          if (c[0] === 1196314761 && c[1] === 169478669 && c[3] === 1380206665)
            return { mime: "image/png", width: l[16] << 24 | l[17] << 16 | l[18] << 8 | l[19], height: l[20] << 24 | l[21] << 16 | l[22] << 8 | l[23] };
          if ((c[0] === 3774863615 || c[0] === 3791640831) && (l[6] === 74 && l[7] === 70 && l[8] === 73 && l[9] === 70 || l[6] === 69 && l[7] === 120 && l[8] === 105 && l[9] === 102)) {
            const [B, Q] = function(t) {
              const A = t.length;
              let e = 4, i = t[e] << 8 | t[e + 1];
              for (; ; ) {
                if (e += i, e >= A)
                  return [0, 0];
                if (t[e] !== 255)
                  return [0, 0];
                if (t[e + 1] === 192 || t[e + 1] === 194)
                  return e + 8 < A ? [t[e + 7] << 8 | t[e + 8], t[e + 5] << 8 | t[e + 6]] : [0, 0];
                e += 2, i = t[e] << 8 | t[e + 1];
              }
            }(l);
            return { mime: "image/jpeg", width: B, height: Q };
          }
          return c[0] !== 944130375 || l[4] !== 55 && l[4] !== 57 || l[5] !== 97 ? h.UNSUPPORTED_TYPE : { mime: "image/gif", width: l[7] << 8 | l[6], height: l[9] << 8 | l[8] };
        };
      }, 782: (w, h, l) => {
        Object.defineProperty(h, "__esModule", { value: !0 }), h.ImageRenderer = void 0;
        const c = l(477);
        class B {
          constructor(t, A) {
            this._terminal = t, this._showPlaceholder = A, this._oldOpen = this._terminal._core.open, this._terminal._core.open = (e) => {
              var i;
              (i = this._oldOpen) === null || i === void 0 || i.call(this._terminal._core, e), this._open();
            }, this._terminal._core.screenElement && this._open(), this._optionsRefresh = this._terminal._core.optionsService.onOptionChange((e) => {
              var i;
              e === "fontSize" && (this.rescaleCanvas(), (i = this._renderService) === null || i === void 0 || i.refreshRows(0, this._terminal.rows));
            });
          }
          static createCanvas(t, A, e) {
            const i = t.document.createElement("canvas");
            return i.width = 0 | A, i.height = 0 | e, i;
          }
          static createImageData(t, A, e, i) {
            if (typeof ImageData != "function") {
              const s = t.createImageData(A, e);
              return i && s.data.set(new Uint8ClampedArray(i, 0, A * e * 4)), s;
            }
            return i ? new ImageData(new Uint8ClampedArray(i, 0, A * e * 4), A, e) : new ImageData(A, e);
          }
          static createImageBitmap(t) {
            return typeof createImageBitmap != "function" ? Promise.resolve(void 0) : createImageBitmap(t);
          }
          dispose() {
            var t, A;
            (t = this._optionsRefresh) === null || t === void 0 || t.dispose(), this._removeLayerFromDom(), this._terminal._core && this._oldOpen && (this._terminal._core.open = this._oldOpen, this._oldOpen = void 0), this._renderService && this._oldSetRenderer && (this._renderService.setRenderer = this._oldSetRenderer, this._oldSetRenderer = void 0), this._renderService = void 0, this.canvas = void 0, this._ctx = void 0, (A = this._placeholderBitmap) === null || A === void 0 || A.close(), this._placeholderBitmap = void 0, this._placeholder = void 0;
          }
          showPlaceholder(t) {
            var A, e;
            t ? this._placeholder || this.cellSize.height === -1 || this._createPlaceHolder(Math.max(this.cellSize.height + 1, 24)) : ((A = this._placeholderBitmap) === null || A === void 0 || A.close(), this._placeholderBitmap = void 0, this._placeholder = void 0), (e = this._renderService) === null || e === void 0 || e.refreshRows(0, this._terminal.rows);
          }
          get dimensions() {
            var t;
            return (t = this._renderService) === null || t === void 0 ? void 0 : t.dimensions;
          }
          get cellSize() {
            var t, A;
            return { width: ((t = this.dimensions) === null || t === void 0 ? void 0 : t.css.cell.width) || -1, height: ((A = this.dimensions) === null || A === void 0 ? void 0 : A.css.cell.height) || -1 };
          }
          clearLines(t, A) {
            var e, i, s, r;
            (e = this._ctx) === null || e === void 0 || e.clearRect(0, t * (((i = this.dimensions) === null || i === void 0 ? void 0 : i.css.cell.height) || 0), ((s = this.dimensions) === null || s === void 0 ? void 0 : s.css.canvas.width) || 0, (++A - t) * (((r = this.dimensions) === null || r === void 0 ? void 0 : r.css.cell.height) || 0));
          }
          clearAll() {
            var t, A, e;
            (t = this._ctx) === null || t === void 0 || t.clearRect(0, 0, ((A = this.canvas) === null || A === void 0 ? void 0 : A.width) || 0, ((e = this.canvas) === null || e === void 0 ? void 0 : e.height) || 0);
          }
          draw(t, A, e, i, s = 1) {
            if (!this._ctx)
              return;
            const { width: r, height: g } = this.cellSize;
            if (r === -1 || g === -1)
              return;
            this._rescaleImage(t, r, g);
            const a = t.actual, o = Math.ceil(a.width / r), I = A % o * r, n = Math.floor(A / o) * g, C = e * r, E = i * g, d = s * r + I > a.width ? a.width - I : s * r, _ = n + g > a.height ? a.height - n : g;
            this._ctx.drawImage(a, Math.floor(I), Math.floor(n), Math.ceil(d), Math.ceil(_), Math.floor(C), Math.floor(E), Math.ceil(d), Math.ceil(_));
          }
          extractTile(t, A) {
            const { width: e, height: i } = this.cellSize;
            if (e === -1 || i === -1)
              return;
            this._rescaleImage(t, e, i);
            const s = t.actual, r = Math.ceil(s.width / e), g = A % r * e, a = Math.floor(A / r) * i, o = e + g > s.width ? s.width - g : e, I = a + i > s.height ? s.height - a : i, n = B.createCanvas(this._terminal._core._coreBrowserService.window, o, I), C = n.getContext("2d");
            return C ? (C.drawImage(s, Math.floor(g), Math.floor(a), Math.floor(o), Math.floor(I), 0, 0, Math.floor(o), Math.floor(I)), n) : void 0;
          }
          drawPlaceholder(t, A, e = 1) {
            if ((this._placeholderBitmap || this._placeholder) && this._ctx) {
              const { width: i, height: s } = this.cellSize;
              if (i === -1 || s === -1)
                return;
              s >= this._placeholder.height && this._createPlaceHolder(s + 1), this._ctx.drawImage(this._placeholderBitmap || this._placeholder, t * i, A * s % 2 ? 0 : 1, i * e, s, t * i, A * s, i * e, s);
            }
          }
          rescaleCanvas() {
            this.canvas && (this.canvas.width === this.dimensions.css.canvas.width && this.canvas.height === this.dimensions.css.canvas.height || (this.canvas.width = this.dimensions.css.canvas.width || 0, this.canvas.height = this.dimensions.css.canvas.height || 0));
          }
          _rescaleImage(t, A, e) {
            if (A === t.actualCellSize.width && e === t.actualCellSize.height)
              return;
            const { width: i, height: s } = t.origCellSize;
            if (A === i && e === s)
              return t.actual = t.orig, t.actualCellSize.width = i, void (t.actualCellSize.height = s);
            const r = B.createCanvas(this._terminal._core._coreBrowserService.window, Math.ceil(t.orig.width * A / i), Math.ceil(t.orig.height * e / s)), g = r.getContext("2d");
            g && (g.drawImage(t.orig, 0, 0, r.width, r.height), t.actual = r, t.actualCellSize.width = A, t.actualCellSize.height = e);
          }
          _open() {
            this._renderService = this._terminal._core._renderService, this._oldSetRenderer = this._renderService.setRenderer.bind(this._renderService), this._renderService.setRenderer = (t) => {
              var A;
              this._removeLayerFromDom(), (A = this._oldSetRenderer) === null || A === void 0 || A.call(this._renderService, t), this._insertLayerToDom();
            }, this._insertLayerToDom(), this._showPlaceholder && this._createPlaceHolder();
          }
          _insertLayerToDom() {
            var t, A, e;
            this.canvas = B.createCanvas(this._terminal._core._coreBrowserService.window, ((t = this.dimensions) === null || t === void 0 ? void 0 : t.css.canvas.width) || 0, ((A = this.dimensions) === null || A === void 0 ? void 0 : A.css.canvas.height) || 0), this.canvas.classList.add("xterm-image-layer"), (e = this._terminal._core.screenElement) === null || e === void 0 || e.appendChild(this.canvas), this._ctx = this.canvas.getContext("2d", { alpha: !0, desynchronized: !0 });
          }
          _removeLayerFromDom() {
            var t, A;
            (A = (t = this.canvas) === null || t === void 0 ? void 0 : t.parentNode) === null || A === void 0 || A.removeChild(this.canvas);
          }
          _createPlaceHolder(t = 24) {
            var A;
            (A = this._placeholderBitmap) === null || A === void 0 || A.close(), this._placeholderBitmap = void 0;
            const e = 32, i = B.createCanvas(this._terminal._core._coreBrowserService.window, e, t), s = i.getContext("2d", { alpha: !1 });
            if (!s)
              return;
            const r = B.createImageData(s, e, t), g = new Uint32Array(r.data.buffer), a = (0, c.toRGBA8888)(0, 0, 0), o = (0, c.toRGBA8888)(255, 255, 255);
            g.fill(a);
            for (let C = 0; C < t; ++C) {
              const E = C % 2, d = C * e;
              for (let _ = 0; _ < e; _ += 2)
                g[d + _ + E] = o;
            }
            s.putImageData(r, 0, 0);
            const I = screen.width + e - 1 & -32 || 4096;
            this._placeholder = B.createCanvas(this._terminal._core._coreBrowserService.window, I, t);
            const n = this._placeholder.getContext("2d", { alpha: !1 });
            if (n) {
              for (let C = 0; C < I; C += e)
                n.drawImage(i, C, 0);
              B.createImageBitmap(this._placeholder).then((C) => this._placeholderBitmap = C);
            } else
              this._placeholder = void 0;
          }
        }
        h.ImageRenderer = B;
      }, 216: (w, h, l) => {
        Object.defineProperty(h, "__esModule", { value: !0 }), h.ImageStorage = h.CELL_SIZE_DEFAULT = void 0;
        const c = l(782);
        h.CELL_SIZE_DEFAULT = { width: 7, height: 14 };
        class B {
          constructor(A = 0, e = 0, i = -1, s = -1) {
            this.imageId = i, this.tileId = s, this._ext = 0, this._urlId = 0, this._ext = A, this._urlId = e;
          }
          get ext() {
            return this._urlId ? -469762049 & this._ext | this.underlineStyle << 26 : this._ext;
          }
          set ext(A) {
            this._ext = A;
          }
          get underlineStyle() {
            return this._urlId ? 5 : (469762048 & this._ext) >> 26;
          }
          set underlineStyle(A) {
            this._ext &= -469762049, this._ext |= A << 26 & 469762048;
          }
          get underlineColor() {
            return 67108863 & this._ext;
          }
          set underlineColor(A) {
            this._ext &= -67108864, this._ext |= 67108863 & A;
          }
          get urlId() {
            return this._urlId;
          }
          set urlId(A) {
            this._urlId = A;
          }
          clone() {
            return new B(this._ext, this._urlId, this.imageId, this.tileId);
          }
          isEmpty() {
            return this.underlineStyle === 0 && this._urlId === 0 && this.imageId === -1;
          }
        }
        const Q = new B();
        h.ImageStorage = class {
          constructor(t, A, e) {
            this._terminal = t, this._renderer = A, this._opts = e, this._images = /* @__PURE__ */ new Map(), this._lastId = 0, this._lowestId = 0, this._fullyCleared = !1, this._needsFullClear = !1, this._pixelLimit = 25e5;
            try {
              this.setLimit(this._opts.storageLimit);
            } catch (i) {
              console.error(i.message), console.warn(`storageLimit is set to ${this.getLimit()} MB`);
            }
            this._viewportMetrics = { cols: this._terminal.cols, rows: this._terminal.rows };
          }
          dispose() {
            this.reset();
          }
          reset() {
            var t;
            for (const A of this._images.values())
              (t = A.marker) === null || t === void 0 || t.dispose();
            this._images.clear(), this._renderer.clearAll();
          }
          getLimit() {
            return 4 * this._pixelLimit / 1e6;
          }
          setLimit(t) {
            if (t < 1 || t > 1e3)
              throw RangeError("invalid storageLimit, should be at least 1 MB and not exceed 1G");
            this._pixelLimit = t / 4 * 1e6 >>> 0, this._evictOldest(0);
          }
          getUsage() {
            return 4 * this._getStoredPixels() / 1e6;
          }
          _getStoredPixels() {
            let t = 0;
            for (const A of this._images.values())
              A.orig && (t += A.orig.width * A.orig.height, A.actual && A.actual !== A.orig && (t += A.actual.width * A.actual.height));
            return t;
          }
          _delImg(t) {
            const A = this._images.get(t);
            this._images.delete(t);
            const e = this._terminal._core._coreBrowserService.window;
            A && e.ImageBitmap && A.orig instanceof ImageBitmap && A.orig.close();
          }
          wipeAlternate() {
            var t;
            const A = [];
            for (const [e, i] of this._images.entries())
              i.bufferType === "alternate" && ((t = i.marker) === null || t === void 0 || t.dispose(), A.push(e));
            for (const e of A)
              this._delImg(e);
            this._needsFullClear = !0, this._fullyCleared = !1;
          }
          advanceCursor(t) {
            if (this._opts.sixelScrolling) {
              let A = this._renderer.cellSize;
              A.width !== -1 && A.height !== -1 || (A = h.CELL_SIZE_DEFAULT);
              const e = Math.ceil(t / A.height);
              for (let i = 1; i < e; ++i)
                this._terminal._core._inputHandler.lineFeed();
            }
          }
          addImage(t) {
            var A;
            this._evictOldest(t.width * t.height);
            let e = this._renderer.cellSize;
            e.width !== -1 && e.height !== -1 || (e = h.CELL_SIZE_DEFAULT);
            const i = Math.ceil(t.width / e.width), s = Math.ceil(t.height / e.height), r = ++this._lastId, g = this._terminal._core.buffer, a = this._terminal.cols, o = this._terminal.rows, I = g.x, n = g.y;
            let C = I, E = 0;
            this._opts.sixelScrolling || (g.x = 0, g.y = 0, C = 0), this._terminal._core._inputHandler._dirtyRowTracker.markDirty(g.y);
            for (let u = 0; u < s; ++u) {
              const f = g.lines.get(g.y + g.ybase);
              for (let v = 0; v < i && !(C + v >= a); ++v)
                this._writeToCell(f, C + v, r, u * i + v), E++;
              if (this._opts.sixelScrolling)
                u < s - 1 && this._terminal._core._inputHandler.lineFeed();
              else if (++g.y >= o)
                break;
              g.x = C;
            }
            this._terminal._core._inputHandler._dirtyRowTracker.markDirty(g.y), this._opts.sixelScrolling ? g.x = C : (g.x = I, g.y = n);
            const d = [];
            for (const [u, f] of this._images.entries())
              f.tileCount < 1 && ((A = f.marker) === null || A === void 0 || A.dispose(), d.push(u));
            for (const u of d)
              this._delImg(u);
            const _ = this._terminal.registerMarker(0);
            _ == null || _.onDispose(() => {
              this._images.get(r) && this._delImg(r);
            }), this._terminal.buffer.active.type === "alternate" && this._evictOnAlternate();
            const N = { orig: t, origCellSize: e, actual: t, actualCellSize: Object.assign({}, e), marker: _ || void 0, tileCount: E, bufferType: this._terminal.buffer.active.type };
            this._images.set(r, N);
          }
          render(t) {
            if (!this._renderer.canvas)
              return;
            if (!this._images.size)
              return void (this._fullyCleared || (this._renderer.clearAll(), this._fullyCleared = !0, this._needsFullClear = !1));
            this._needsFullClear && (this._renderer.clearAll(), this._fullyCleared = !0, this._needsFullClear = !1);
            const { start: A, end: e } = t, i = this._terminal._core.buffer, s = this._terminal._core.cols;
            this._renderer.clearLines(A, e), this._renderer.rescaleCanvas();
            for (let r = A; r <= e; ++r) {
              const g = i.lines.get(r + i.ydisp);
              if (!g)
                return;
              for (let a = 0; a < s; ++a)
                if (268435456 & g.getBg(a)) {
                  let o = g._extendedAttrs[a] || Q;
                  const I = o.imageId;
                  if (I === void 0 || I === -1)
                    continue;
                  const n = this._images.get(I);
                  if (o.tileId !== -1) {
                    const C = o.tileId, E = a;
                    let d = 1;
                    for (; ++a < s && 268435456 & g.getBg(a) && (o = g._extendedAttrs[a] || Q) && o.imageId === I && o.tileId === C + d; )
                      d++;
                    a--, n ? n.actual && this._renderer.draw(n, C, E, r, d) : this._opts.showPlaceholder && this._renderer.drawPlaceholder(E, r, d), this._fullyCleared = !1;
                  }
                }
            }
          }
          viewportResize(t) {
            var A;
            if (!this._images.size)
              return void (this._viewportMetrics = t);
            if (this._viewportMetrics.cols >= t.cols)
              return void (this._viewportMetrics = t);
            const e = this._terminal._core.buffer, i = e.lines.length, s = this._viewportMetrics.cols - 1;
            for (let r = 0; r < i; ++r) {
              const g = e.lines.get(r);
              if (268435456 & g.getBg(s)) {
                const a = g._extendedAttrs[s] || Q, o = a.imageId;
                if (o === void 0 || o === -1)
                  continue;
                const I = this._images.get(o);
                if (!I)
                  continue;
                const n = Math.ceil((((A = I.actual) === null || A === void 0 ? void 0 : A.width) || 0) / I.actualCellSize.width);
                if (a.tileId % n + 1 >= n)
                  continue;
                let C = !1;
                for (let _ = s + 1; _ > t.cols; ++_)
                  if (4194303 & g._data[3 * _ + 0]) {
                    C = !0;
                    break;
                  }
                if (C)
                  continue;
                const E = Math.min(t.cols, n - a.tileId % n + s);
                let d = a.tileId;
                for (let _ = s + 1; _ < E; ++_)
                  this._writeToCell(g, _, o, ++d), I.tileCount++;
              }
            }
            this._viewportMetrics = t;
          }
          getImageAtBufferCell(t, A) {
            var e, i;
            const s = this._terminal._core.buffer.lines.get(A);
            if (s && 268435456 & s.getBg(t)) {
              const r = s._extendedAttrs[t] || Q;
              if (r.imageId && r.imageId !== -1) {
                const g = (e = this._images.get(r.imageId)) === null || e === void 0 ? void 0 : e.orig, a = this._terminal._core._coreBrowserService.window;
                if (a.ImageBitmap && g instanceof ImageBitmap) {
                  const o = c.ImageRenderer.createCanvas(a, g.width, g.height);
                  return (i = o.getContext("2d")) === null || i === void 0 || i.drawImage(g, 0, 0, g.width, g.height), o;
                }
                return g;
              }
            }
          }
          extractTileAtBufferCell(t, A) {
            const e = this._terminal._core.buffer.lines.get(A);
            if (e && 268435456 & e.getBg(t)) {
              const i = e._extendedAttrs[t] || Q;
              if (i.imageId && i.imageId !== -1 && i.tileId !== -1) {
                const s = this._images.get(i.imageId);
                if (s)
                  return this._renderer.extractTile(s, i.tileId);
              }
            }
          }
          _evictOldest(t) {
            var A;
            const e = this._getStoredPixels();
            let i = e;
            for (; this._pixelLimit < i + t && this._images.size; ) {
              const s = this._images.get(++this._lowestId);
              s && s.orig && (i -= s.orig.width * s.orig.height, s.actual && s.orig !== s.actual && (i -= s.actual.width * s.actual.height), (A = s.marker) === null || A === void 0 || A.dispose(), this._delImg(this._lowestId));
            }
            return e - i;
          }
          _writeToCell(t, A, e, i) {
            if (268435456 & t._data[3 * A + 2]) {
              const s = t._extendedAttrs[A];
              if (s) {
                if (s.imageId !== void 0) {
                  const r = this._images.get(s.imageId);
                  return r && r.tileCount--, s.imageId = e, void (s.tileId = i);
                }
                return void (t._extendedAttrs[A] = new B(s.ext, s.urlId, e, i));
              }
            }
            t._data[3 * A + 2] |= 268435456, t._extendedAttrs[A] = new B(0, 0, e, i);
          }
          _evictOnAlternate() {
            var t, A;
            for (const s of this._images.values())
              s.bufferType === "alternate" && (s.tileCount = 0);
            const e = this._terminal._core.buffer;
            for (let s = 0; s < this._terminal.rows; ++s) {
              const r = e.lines.get(s);
              if (r) {
                for (let g = 0; g < this._terminal.cols; ++g)
                  if (268435456 & r._data[3 * g + 2]) {
                    const a = (t = r._extendedAttrs[g]) === null || t === void 0 ? void 0 : t.imageId;
                    if (a) {
                      const o = this._images.get(a);
                      o && o.tileCount++;
                    }
                  }
              }
            }
            const i = [];
            for (const [s, r] of this._images.entries())
              r.bufferType !== "alternate" || r.tileCount || ((A = r.marker) === null || A === void 0 || A.dispose(), i.push(s));
            for (const s of i)
              this._delImg(s);
          }
        };
      }, 973: (w, h, l) => {
        Object.defineProperty(h, "__esModule", { value: !0 }), h.SixelHandler = void 0;
        const c = l(477), B = l(782), Q = l(710), t = c.PALETTE_ANSI_256;
        function A(e) {
          return c.BIG_ENDIAN ? e : (255 & e) << 24 | (e >>> 8 & 255) << 16 | (e >>> 16 & 255) << 8 | e >>> 24 & 255;
        }
        t.set(c.PALETTE_VT340_COLOR), h.SixelHandler = class {
          constructor(e, i, s) {
            this._opts = e, this._storage = i, this._coreTerminal = s, this._size = 0, this._aborted = !1, (0, Q.DecoderAsync)({ memoryLimit: 4 * this._opts.pixelLimit, palette: t, paletteLimit: this._opts.sixelPaletteLimit }).then((r) => this._dec = r);
          }
          reset() {
            this._dec && (this._dec.release(), this._dec._palette.fill(0), this._dec.init(0, t, this._opts.sixelPaletteLimit));
          }
          hook(e) {
            if (this._size = 0, this._aborted = !1, this._dec) {
              const i = e.params[1] === 1 ? 0 : function(s, r) {
                let g = 0;
                if (s.isInverse())
                  if (s.isFgDefault())
                    g = A(r.foreground.rgba);
                  else if (s.isFgRGB()) {
                    const a = s.constructor.toColorRGB(s.getFgColor());
                    g = (0, c.toRGBA8888)(...a);
                  } else
                    g = A(r.ansi[s.getFgColor()].rgba);
                else if (s.isBgDefault())
                  g = A(r.background.rgba);
                else if (s.isBgRGB()) {
                  const a = s.constructor.toColorRGB(s.getBgColor());
                  g = (0, c.toRGBA8888)(...a);
                } else
                  g = A(r.ansi[s.getBgColor()].rgba);
                return g;
              }(this._coreTerminal._core._inputHandler._curAttrData, this._coreTerminal._core._themeService.colors);
              this._dec.init(i, null, this._opts.sixelPaletteLimit);
            }
          }
          put(e, i, s) {
            if (!this._aborted && this._dec) {
              if (this._size += s - i, this._size > this._opts.sixelSizeLimit)
                return console.warn("SIXEL: too much data, aborting"), this._aborted = !0, void this._dec.release();
              try {
                this._dec.decode(e, i, s);
              } catch (r) {
                console.warn(`SIXEL: error while decoding image - ${r}`), this._aborted = !0, this._dec.release();
              }
            }
          }
          unhook(e) {
            var i;
            if (this._aborted || !e || !this._dec)
              return !0;
            const s = this._dec.width, r = this._dec.height;
            if (!s || !r)
              return r && this._storage.advanceCursor(r), !0;
            const g = B.ImageRenderer.createCanvas(this._coreTerminal._core._coreBrowserService.window, s, r);
            return (i = g.getContext("2d")) === null || i === void 0 || i.putImageData(new ImageData(this._dec.data8, s, r), 0, 0), this._dec.memoryUsage > 4194304 && this._dec.release(), this._storage.addImage(g), !0;
          }
        };
      }, 997: (w, h, l) => {
        Object.defineProperty(h, "__esModule", { value: !0 }), h.Base64Decoder = void 0;
        const c = (0, l(615).InWasm)({ s: 1, t: 0, d: "AGFzbQEAAAABBQFgAAF/Ag8BA2VudgZtZW1vcnkCAAEDAwIAAAcNAgNkZWMAAANlbmQAAQqxAwKuAQEFf0GIKCgCAEGgKGohAUGEKCgCACIAQYAoKAIAQQFrQXxxIgJIBEAgAkGgKGohAyAAQaAoaiEAA0AgAC0AA0ECdCgCgCAgAC0AAkECdCgCgBggAC0AAUECdCgCgBAgAC0AAEECdCgCgAhycnIiBEH///8HSwRAQQEPCyABIAQ2AgAgAUEDaiEBIABBBGoiACADSQ0ACwtBhCggAjYCAEGIKCABQaAoazYCAEEAC/4BAQZ/AkBBgCgoAgAiAUGEKCgCACIAa0EFTgRAQQEhAxAADQFBgCgoAgAhAUGEKCgCACEAC0EBIQMgASAAayIEQQJIDQAgAEGhKGotAABBAnQoAoAQIABBoChqLQAAQQJ0KAKACHIhAQJAIARBAkYEQEEBIQIMAQtBASECIAAtAKIoIgVBPUcEQEECIQIgBUECdCgCgBggAXIhAQsgBEEERw0AIAAtAKMoIgBBPUYNACACQQFqIQIgAEECdCgCgCAgAXIhAQsgAUH///8HSw0AQYgoKAIAQaAoaiABNgIAQYgoQYgoKAIAIAJqIgA2AgAgAEGQKCgCAEchAwsgAwsAdglwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQEFY2xhbmdWMTcuMC4wIChodHRwczovL2dpdGh1Yi5jb20vbGx2bS9sbHZtLXByb2plY3QgODg0MjFlYTk3MzkxNmU2MGMzNGJlYjI2NTk3YTVmYzMzZjgzZGQ4ZikALA90YXJnZXRfZmVhdHVyZXMCKw9tdXRhYmxlLWdsb2JhbHMrCHNpZ24tZXh0" }), B = new Uint8Array("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("").map((A) => A.charCodeAt(0))), Q = new Uint32Array(1024);
        Q.fill(4278190080);
        for (let A = 0; A < B.length; ++A)
          Q[B[A]] = A << 2;
        for (let A = 0; A < B.length; ++A)
          Q[256 + B[A]] = A >> 4 | (A << 4 & 255) << 8;
        for (let A = 0; A < B.length; ++A)
          Q[512 + B[A]] = A >> 2 << 8 | (A << 6 & 255) << 16;
        for (let A = 0; A < B.length; ++A)
          Q[768 + B[A]] = A << 16;
        const t = new Uint8Array(0);
        h.Base64Decoder = class {
          constructor(A) {
            this.keepSize = A;
          }
          get data8() {
            return this._inst ? this._d.subarray(0, this._m32[1282]) : t;
          }
          release() {
            this._inst && (this._mem.buffer.byteLength > this.keepSize ? this._inst = this._m32 = this._d = this._mem = null : (this._m32[1280] = 0, this._m32[1281] = 0, this._m32[1282] = 0));
          }
          init(A) {
            let e = this._m32;
            const i = 4 * (Math.ceil(A / 3) + 1288);
            this._inst ? this._mem.buffer.byteLength < i && (this._mem.grow(Math.ceil((i - this._mem.buffer.byteLength) / 65536)), e = new Uint32Array(this._mem.buffer, 0), this._d = new Uint8Array(this._mem.buffer, 5152)) : (this._mem = new WebAssembly.Memory({ initial: Math.ceil(i / 65536) }), this._inst = c({ env: { memory: this._mem } }), e = new Uint32Array(this._mem.buffer, 0), e.set(Q, 256), this._d = new Uint8Array(this._mem.buffer, 5152)), e[1284] = A, e[1283] = 4 * Math.ceil(A / 3), e[1280] = 0, e[1281] = 0, e[1282] = 0, this._m32 = e;
          }
          put(A, e, i) {
            if (!this._inst)
              return 1;
            const s = this._m32;
            return i - e + s[1280] > s[1283] ? 1 : (this._d.set(A.subarray(e, i), s[1280]), s[1280] += i - e, s[1280] - s[1281] >= 131072 ? this._inst.exports.dec() : 0);
          }
          end() {
            return this._inst ? this._inst.exports.end() : 1;
          }
        };
      } }, m = {};
      function D(w) {
        var h = m[w];
        if (h !== void 0)
          return h.exports;
        var l = m[w] = { exports: {} };
        return p[w](l, l.exports, D), l.exports;
      }
      var k = {};
      return (() => {
        var w = k;
        Object.defineProperty(w, "__esModule", { value: !0 }), w.ImageAddon = void 0;
        const h = D(125), l = D(782), c = D(216), B = D(973), Q = { enableSizeReports: !0, pixelLimit: 16777216, sixelSupport: !0, sixelScrolling: !0, sixelPaletteLimit: 256, sixelSizeLimit: 25e6, storageLimit: 128, showPlaceholder: !0, iipSupport: !0, iipSizeLimit: 2e7 };
        w.ImageAddon = class {
          constructor(t) {
            this._disposables = [], this._handlers = /* @__PURE__ */ new Map(), this._opts = Object.assign({}, Q, t), this._defaultOpts = Object.assign({}, Q, t);
          }
          dispose() {
            for (const t of this._disposables)
              t.dispose();
            this._disposables.length = 0, this._handlers.clear();
          }
          _disposeLater(...t) {
            for (const A of t)
              this._disposables.push(A);
          }
          activate(t) {
            if (this._terminal = t, this._renderer = new l.ImageRenderer(t, this._opts.showPlaceholder), this._storage = new c.ImageStorage(t, this._renderer, this._opts), this._opts.enableSizeReports) {
              const A = t.options.windowOptions || {};
              A.getWinSizePixels = !0, A.getCellSizePixels = !0, A.getWinSizeChars = !0, t.options.windowOptions = A;
            }
            if (this._disposeLater(this._renderer, this._storage, t.parser.registerCsiHandler({ prefix: "?", final: "h" }, (A) => this._decset(A)), t.parser.registerCsiHandler({ prefix: "?", final: "l" }, (A) => this._decrst(A)), t.parser.registerCsiHandler({ final: "c" }, (A) => this._da1(A)), t.parser.registerCsiHandler({ prefix: "?", final: "S" }, (A) => this._xtermGraphicsAttributes(A)), t.onRender((A) => {
              var e;
              return (e = this._storage) === null || e === void 0 ? void 0 : e.render(A);
            }), t.parser.registerCsiHandler({ intermediates: "!", final: "p" }, () => this.reset()), t.parser.registerEscHandler({ final: "c" }, () => this.reset()), t._core._inputHandler.onRequestReset(() => this.reset()), t.buffer.onBufferChange(() => {
              var A;
              return (A = this._storage) === null || A === void 0 ? void 0 : A.wipeAlternate();
            }), t.onResize((A) => {
              var e;
              return (e = this._storage) === null || e === void 0 ? void 0 : e.viewportResize(A);
            })), this._opts.sixelSupport) {
              const A = new B.SixelHandler(this._opts, this._storage, t);
              this._handlers.set("sixel", A), this._disposeLater(t._core._inputHandler._parser.registerDcsHandler({ final: "q" }, A));
            }
            if (this._opts.iipSupport) {
              const A = new h.IIPHandler(this._opts, this._renderer, this._storage, t);
              this._handlers.set("iip", A), this._disposeLater(t._core._inputHandler._parser.registerOscHandler(1337, A));
            }
          }
          reset() {
            var t;
            this._opts.sixelScrolling = this._defaultOpts.sixelScrolling, this._opts.sixelPaletteLimit = this._defaultOpts.sixelPaletteLimit, (t = this._storage) === null || t === void 0 || t.reset();
            for (const A of this._handlers.values())
              A.reset();
            return !1;
          }
          get storageLimit() {
            var t;
            return ((t = this._storage) === null || t === void 0 ? void 0 : t.getLimit()) || -1;
          }
          set storageLimit(t) {
            var A;
            (A = this._storage) === null || A === void 0 || A.setLimit(t), this._opts.storageLimit = t;
          }
          get storageUsage() {
            return this._storage ? this._storage.getUsage() : -1;
          }
          get showPlaceholder() {
            return this._opts.showPlaceholder;
          }
          set showPlaceholder(t) {
            var A;
            this._opts.showPlaceholder = t, (A = this._renderer) === null || A === void 0 || A.showPlaceholder(t);
          }
          getImageAtBufferCell(t, A) {
            var e;
            return (e = this._storage) === null || e === void 0 ? void 0 : e.getImageAtBufferCell(t, A);
          }
          extractTileAtBufferCell(t, A) {
            var e;
            return (e = this._storage) === null || e === void 0 ? void 0 : e.extractTileAtBufferCell(t, A);
          }
          _report(t) {
            var A;
            (A = this._terminal) === null || A === void 0 || A._core.coreService.triggerDataEvent(t);
          }
          _decset(t) {
            for (let A = 0; A < t.length; ++A)
              t[A] === 80 && (this._opts.sixelScrolling = !1);
            return !1;
          }
          _decrst(t) {
            for (let A = 0; A < t.length; ++A)
              t[A] === 80 && (this._opts.sixelScrolling = !0);
            return !1;
          }
          _da1(t) {
            return !!t[0] || !!this._opts.sixelSupport && (this._report("\x1B[?62;4;9;22c"), !0);
          }
          _xtermGraphicsAttributes(t) {
            var A, e, i, s, r, g;
            if (t.length < 2)
              return !0;
            if (t[0] === 1)
              switch (t[1]) {
                case 1:
                  return this._report(`\x1B[?${t[0]};0;${this._opts.sixelPaletteLimit}S`), !0;
                case 2:
                  this._opts.sixelPaletteLimit = this._defaultOpts.sixelPaletteLimit, this._report(`\x1B[?${t[0]};0;${this._opts.sixelPaletteLimit}S`);
                  for (const a of this._handlers.values())
                    a.reset();
                  return !0;
                case 3:
                  return t.length > 2 && !(t[2] instanceof Array) && t[2] <= 4096 ? (this._opts.sixelPaletteLimit = t[2], this._report(`\x1B[?${t[0]};0;${this._opts.sixelPaletteLimit}S`)) : this._report(`\x1B[?${t[0]};2S`), !0;
                case 4:
                  return this._report(`\x1B[?${t[0]};0;4096S`), !0;
                default:
                  return this._report(`\x1B[?${t[0]};2S`), !0;
              }
            if (t[0] === 2)
              switch (t[1]) {
                case 1:
                  let a = (e = (A = this._renderer) === null || A === void 0 ? void 0 : A.dimensions) === null || e === void 0 ? void 0 : e.css.canvas.width, o = (s = (i = this._renderer) === null || i === void 0 ? void 0 : i.dimensions) === null || s === void 0 ? void 0 : s.css.canvas.height;
                  if (!a || !o) {
                    const n = c.CELL_SIZE_DEFAULT;
                    a = (((r = this._terminal) === null || r === void 0 ? void 0 : r.cols) || 80) * n.width, o = (((g = this._terminal) === null || g === void 0 ? void 0 : g.rows) || 24) * n.height;
                  }
                  if (a * o < this._opts.pixelLimit)
                    this._report(`\x1B[?${t[0]};0;${a.toFixed(0)};${o.toFixed(0)}S`);
                  else {
                    const n = Math.floor(Math.sqrt(this._opts.pixelLimit));
                    this._report(`\x1B[?${t[0]};0;${n};${n}S`);
                  }
                  return !0;
                case 4:
                  const I = Math.floor(Math.sqrt(this._opts.pixelLimit));
                  return this._report(`\x1B[?${t[0]};0;${I};${I}S`), !0;
                default:
                  return this._report(`\x1B[?${t[0]};2S`), !0;
              }
            return this._report(`\x1B[?${t[0]};1S`), !0;
          }
        };
      })(), k;
    })();
  });
})(y);
var J = y.exports;
const L = /* @__PURE__ */ H(J), R = /* @__PURE__ */ S({
  __proto__: null,
  default: L
}, [J]);
export {
  R as x
};
