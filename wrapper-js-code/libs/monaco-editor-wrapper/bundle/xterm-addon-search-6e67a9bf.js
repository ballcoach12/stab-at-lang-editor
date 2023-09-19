import { qk as k } from "./index-7e82f14c.js";
function E(R, A) {
  for (var C = 0; C < A.length; C++) {
    const v = A[C];
    if (typeof v != "string" && !Array.isArray(v)) {
      for (const m in v)
        if (m !== "default" && !(m in R)) {
          const S = Object.getOwnPropertyDescriptor(v, m);
          S && Object.defineProperty(R, m, S.get ? S : {
            enumerable: !0,
            get: () => v[m]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(R, Symbol.toStringTag, { value: "Module" }));
}
var O = { exports: {} };
(function(R, A) {
  (function(C, v) {
    R.exports = v();
  })(self, () => (() => {
    var C = { 345: (w, c) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.forwardEvent = c.EventEmitter = void 0, c.EventEmitter = class {
        constructor() {
          this._listeners = [], this._disposed = !1;
        }
        get event() {
          return this._event || (this._event = (d) => (this._listeners.push(d), { dispose: () => {
            if (!this._disposed) {
              for (let a = 0; a < this._listeners.length; a++)
                if (this._listeners[a] === d)
                  return void this._listeners.splice(a, 1);
            }
          } })), this._event;
        }
        fire(d, a) {
          const g = [];
          for (let b = 0; b < this._listeners.length; b++)
            g.push(this._listeners[b]);
          for (let b = 0; b < g.length; b++)
            g[b].call(void 0, d, a);
        }
        dispose() {
          this._listeners && (this._listeners.length = 0), this._disposed = !0;
        }
      }, c.forwardEvent = function(d, a) {
        return d((g) => a.fire(g));
      };
    }, 859: (w, c) => {
      function d(a) {
        for (const g of a)
          g.dispose();
        a.length = 0;
      }
      Object.defineProperty(c, "__esModule", { value: !0 }), c.getDisposeArrayDisposable = c.disposeArray = c.toDisposable = c.Disposable = void 0, c.Disposable = class {
        constructor() {
          this._disposables = [], this._isDisposed = !1;
        }
        dispose() {
          this._isDisposed = !0;
          for (const a of this._disposables)
            a.dispose();
          this._disposables.length = 0;
        }
        register(a) {
          return this._disposables.push(a), a;
        }
        unregister(a) {
          const g = this._disposables.indexOf(a);
          g !== -1 && this._disposables.splice(g, 1);
        }
      }, c.toDisposable = function(a) {
        return { dispose: a };
      }, c.disposeArray = d, c.getDisposeArrayDisposable = function(a) {
        return { dispose: () => d(a) };
      };
    } }, v = {};
    function m(w) {
      var c = v[w];
      if (c !== void 0)
        return c.exports;
      var d = v[w] = { exports: {} };
      return C[w](d, d.exports, m), d.exports;
    }
    var S = {};
    return (() => {
      var w = S;
      Object.defineProperty(w, "__esModule", { value: !0 }), w.SearchAddon = void 0;
      const c = m(345), d = m(859), a = " ~!@#$%^&*()+`-=[]{}|\\;:\"',./<>?";
      class g extends d.Disposable {
        constructor(e) {
          var t;
          super(), this._highlightedLines = /* @__PURE__ */ new Set(), this._highlightDecorations = [], this._linesCacheTimeoutId = 0, this._onDidChangeResults = this.register(new c.EventEmitter()), this.onDidChangeResults = this._onDidChangeResults.event, this._highlightLimit = (t = e == null ? void 0 : e.highlightLimit) !== null && t !== void 0 ? t : 1e3;
        }
        activate(e) {
          this._terminal = e, this._onDataDisposable = this.register(this._terminal.onWriteParsed(() => this._updateMatches())), this._onResizeDisposable = this.register(this._terminal.onResize(() => this._updateMatches())), this.register((0, d.toDisposable)(() => {
            var t, s;
            this.clearDecorations(), (t = this._onDataDisposable) === null || t === void 0 || t.dispose(), (s = this._onResizeDisposable) === null || s === void 0 || s.dispose();
          }));
        }
        _updateMatches() {
          var e;
          this._highlightTimeout && window.clearTimeout(this._highlightTimeout), this._cachedSearchTerm && (!((e = this._lastSearchOptions) === null || e === void 0) && e.decorations) && (this._highlightTimeout = setTimeout(() => {
            const t = this._cachedSearchTerm;
            this._cachedSearchTerm = void 0, this.findPrevious(t, Object.assign(Object.assign({}, this._lastSearchOptions), { incremental: !0, noScroll: !0 }));
          }, 200));
        }
        clearDecorations(e) {
          this.clearActiveDecoration(), (0, d.disposeArray)(this._highlightDecorations), this._highlightDecorations = [], this._highlightedLines.clear(), e || (this._cachedSearchTerm = void 0);
        }
        clearActiveDecoration() {
          var e;
          (e = this._selectedDecoration) === null || e === void 0 || e.dispose(), this._selectedDecoration = void 0;
        }
        findNext(e, t) {
          if (!this._terminal)
            throw new Error("Cannot use addon until it has been loaded");
          this._lastSearchOptions = t, t != null && t.decorations && (this._cachedSearchTerm !== void 0 && e === this._cachedSearchTerm || this._highlightAllMatches(e, t));
          const s = this._findNextAndSelect(e, t);
          return this._fireResults(t), this._cachedSearchTerm = e, s;
        }
        _highlightAllMatches(e, t) {
          if (!this._terminal)
            throw new Error("Cannot use addon until it has been loaded");
          if (!e || e.length === 0)
            return void this.clearDecorations();
          t = t || {}, this.clearDecorations(!0);
          const s = [];
          let i, o = this._find(e, 0, 0, t);
          for (; o && ((i == null ? void 0 : i.row) !== o.row || (i == null ? void 0 : i.col) !== o.col) && !(s.length >= this._highlightLimit); )
            i = o, s.push(i), o = this._find(e, i.col + i.term.length >= this._terminal.cols ? i.row + 1 : i.row, i.col + i.term.length >= this._terminal.cols ? 0 : i.col + 1, t);
          for (const n of s) {
            const r = this._createResultDecoration(n, t.decorations);
            r && (this._highlightedLines.add(r.marker.line), this._highlightDecorations.push({ decoration: r, match: n, dispose() {
              r.dispose();
            } }));
          }
        }
        _find(e, t, s, i) {
          var o;
          if (!this._terminal || !e || e.length === 0)
            return (o = this._terminal) === null || o === void 0 || o.clearSelection(), void this.clearDecorations();
          if (s > this._terminal.cols)
            throw new Error(`Invalid col: ${s} to search in terminal of ${this._terminal.cols} cols`);
          let n;
          this._initLinesCache();
          const r = { startRow: t, startCol: s };
          if (n = this._findInLine(e, r, i), !n)
            for (let l = t + 1; l < this._terminal.buffer.active.baseY + this._terminal.rows && (r.startRow = l, r.startCol = 0, n = this._findInLine(e, r, i), !n); l++)
              ;
          return n;
        }
        _findNextAndSelect(e, t) {
          var s;
          if (!this._terminal || !e || e.length === 0)
            return (s = this._terminal) === null || s === void 0 || s.clearSelection(), this.clearDecorations(), !1;
          const i = this._terminal.getSelectionPosition();
          this._terminal.clearSelection();
          let o = 0, n = 0;
          i && (this._cachedSearchTerm === e ? (o = i.end.x, n = i.end.y) : (o = i.start.x, n = i.start.y)), this._initLinesCache();
          const r = { startRow: n, startCol: o };
          let l = this._findInLine(e, r, t);
          if (!l)
            for (let h = n + 1; h < this._terminal.buffer.active.baseY + this._terminal.rows && (r.startRow = h, r.startCol = 0, l = this._findInLine(e, r, t), !l); h++)
              ;
          if (!l && n !== 0)
            for (let h = 0; h < n && (r.startRow = h, r.startCol = 0, l = this._findInLine(e, r, t), !l); h++)
              ;
          return !l && i && (r.startRow = i.start.y, r.startCol = 0, l = this._findInLine(e, r, t)), this._selectResult(l, t == null ? void 0 : t.decorations, t == null ? void 0 : t.noScroll);
        }
        findPrevious(e, t) {
          if (!this._terminal)
            throw new Error("Cannot use addon until it has been loaded");
          this._lastSearchOptions = t, t != null && t.decorations && (this._cachedSearchTerm !== void 0 && e === this._cachedSearchTerm || this._highlightAllMatches(e, t));
          const s = this._findPreviousAndSelect(e, t);
          return this._fireResults(t), this._cachedSearchTerm = e, s;
        }
        _fireResults(e) {
          if (e != null && e.decorations) {
            let t = -1;
            if (this._selectedDecoration) {
              const s = this._selectedDecoration.match;
              for (let i = 0; i < this._highlightDecorations.length; i++) {
                const o = this._highlightDecorations[i].match;
                if (o.row === s.row && o.col === s.col && o.size === s.size) {
                  t = i;
                  break;
                }
              }
            }
            this._onDidChangeResults.fire({ resultIndex: t, resultCount: this._highlightDecorations.length });
          }
        }
        _findPreviousAndSelect(e, t) {
          var s;
          if (!this._terminal)
            throw new Error("Cannot use addon until it has been loaded");
          if (!this._terminal || !e || e.length === 0)
            return (s = this._terminal) === null || s === void 0 || s.clearSelection(), this.clearDecorations(), !1;
          const i = this._terminal.getSelectionPosition();
          this._terminal.clearSelection();
          let o = this._terminal.buffer.active.baseY + this._terminal.rows - 1, n = this._terminal.cols;
          const r = !0;
          this._initLinesCache();
          const l = { startRow: o, startCol: n };
          let h;
          if (i && (l.startRow = o = i.start.y, l.startCol = n = i.start.x, this._cachedSearchTerm !== e && (h = this._findInLine(e, l, t, !1), h || (l.startRow = o = i.end.y, l.startCol = n = i.end.x))), h || (h = this._findInLine(e, l, t, r)), !h) {
            l.startCol = Math.max(l.startCol, this._terminal.cols);
            for (let _ = o - 1; _ >= 0 && (l.startRow = _, h = this._findInLine(e, l, t, r), !h); _--)
              ;
          }
          if (!h && o !== this._terminal.buffer.active.baseY + this._terminal.rows - 1)
            for (let _ = this._terminal.buffer.active.baseY + this._terminal.rows - 1; _ >= o && (l.startRow = _, h = this._findInLine(e, l, t, r), !h); _--)
              ;
          return this._selectResult(h, t == null ? void 0 : t.decorations, t == null ? void 0 : t.noScroll);
        }
        _initLinesCache() {
          const e = this._terminal;
          this._linesCache || (this._linesCache = new Array(e.buffer.active.length), this._cursorMoveListener = e.onCursorMove(() => this._destroyLinesCache()), this._resizeListener = e.onResize(() => this._destroyLinesCache())), window.clearTimeout(this._linesCacheTimeoutId), this._linesCacheTimeoutId = window.setTimeout(() => this._destroyLinesCache(), 15e3);
        }
        _destroyLinesCache() {
          this._linesCache = void 0, this._cursorMoveListener && (this._cursorMoveListener.dispose(), this._cursorMoveListener = void 0), this._resizeListener && (this._resizeListener.dispose(), this._resizeListener = void 0), this._linesCacheTimeoutId && (window.clearTimeout(this._linesCacheTimeoutId), this._linesCacheTimeoutId = 0);
        }
        _isWholeWord(e, t, s) {
          return (e === 0 || a.includes(t[e - 1])) && (e + s.length === t.length || a.includes(t[e + s.length]));
        }
        _findInLine(e, t, s = {}, i = !1) {
          var o;
          const n = this._terminal, r = t.startRow, l = t.startCol, h = n.buffer.active.getLine(r);
          if (h != null && h.isWrapped)
            return i ? void (t.startCol += n.cols) : (t.startRow--, t.startCol += n.cols, this._findInLine(e, t, s));
          let _ = (o = this._linesCache) === null || o === void 0 ? void 0 : o[r];
          _ || (_ = this._translateBufferLineToStringWithWrap(r, !0), this._linesCache && (this._linesCache[r] = _));
          const [D, L] = _, x = this._bufferColsToStringOffset(r, l), y = s.caseSensitive ? e : e.toLowerCase(), T = s.caseSensitive ? D : D.toLowerCase();
          let p = -1;
          if (s.regex) {
            const f = RegExp(y, "g");
            let u;
            if (i)
              for (; u = f.exec(T.slice(0, x)); )
                p = f.lastIndex - u[0].length, e = u[0], f.lastIndex -= e.length - 1;
            else
              u = f.exec(T.slice(x)), u && u[0].length > 0 && (p = x + (f.lastIndex - u[0].length), e = u[0]);
          } else
            i ? x - y.length >= 0 && (p = T.lastIndexOf(y, x - y.length)) : p = T.indexOf(y, x);
          if (p >= 0) {
            if (s.wholeWord && !this._isWholeWord(p, T, e))
              return;
            let f = 0;
            for (; f < L.length - 1 && p >= L[f + 1]; )
              f++;
            let u = f;
            for (; u < L.length - 1 && p + e.length >= L[u + 1]; )
              u++;
            const z = p - L[f], W = p + e.length - L[u], I = this._stringLengthToBufferSize(r + f, z);
            return { term: e, col: I, row: r + f, size: this._stringLengthToBufferSize(r + u, W) - I + n.cols * (u - f) };
          }
        }
        _stringLengthToBufferSize(e, t) {
          const s = this._terminal.buffer.active.getLine(e);
          if (!s)
            return 0;
          for (let i = 0; i < t; i++) {
            const o = s.getCell(i);
            if (!o)
              break;
            const n = o.getChars();
            n.length > 1 && (t -= n.length - 1);
            const r = s.getCell(i + 1);
            r && r.getWidth() === 0 && t++;
          }
          return t;
        }
        _bufferColsToStringOffset(e, t) {
          const s = this._terminal;
          let i = e, o = 0, n = s.buffer.active.getLine(i);
          for (; t > 0 && n; ) {
            for (let r = 0; r < t && r < s.cols; r++) {
              const l = n.getCell(r);
              if (!l)
                break;
              l.getWidth() && (o += l.getCode() === 0 ? 1 : l.getChars().length);
            }
            if (i++, n = s.buffer.active.getLine(i), n && !n.isWrapped)
              break;
            t -= s.cols;
          }
          return o;
        }
        _translateBufferLineToStringWithWrap(e, t) {
          var s;
          const i = this._terminal, o = [], n = [0];
          let r = i.buffer.active.getLine(e);
          for (; r; ) {
            const l = i.buffer.active.getLine(e + 1), h = !!l && l.isWrapped;
            let _ = r.translateToString(!h && t);
            if (h && l) {
              const D = r.getCell(r.length - 1);
              D && D.getCode() === 0 && D.getWidth() === 1 && ((s = l.getCell(0)) === null || s === void 0 ? void 0 : s.getWidth()) === 2 && (_ = _.slice(0, -1));
            }
            if (o.push(_), !h)
              break;
            n.push(n[n.length - 1] + _.length), e++, r = l;
          }
          return [o.join(""), n];
        }
        _selectResult(e, t, s) {
          const i = this._terminal;
          if (this.clearActiveDecoration(), !e)
            return i.clearSelection(), !1;
          if (i.select(e.col, e.row, e.size), t) {
            const o = i.registerMarker(-i.buffer.active.baseY - i.buffer.active.cursorY + e.row);
            if (o) {
              const n = i.registerDecoration({ marker: o, x: e.col, width: e.size, backgroundColor: t.activeMatchBackground, layer: "top", overviewRulerOptions: { color: t.activeMatchColorOverviewRuler } });
              if (n) {
                const r = [];
                r.push(o), r.push(n.onRender((l) => this._applyStyles(l, t.activeMatchBorder, !0))), r.push(n.onDispose(() => (0, d.disposeArray)(r))), this._selectedDecoration = { decoration: n, match: e, dispose() {
                  n.dispose();
                } };
              }
            }
          }
          if (!s && (e.row >= i.buffer.active.viewportY + i.rows || e.row < i.buffer.active.viewportY)) {
            let o = e.row - i.buffer.active.viewportY;
            o -= Math.floor(i.rows / 2), i.scrollLines(o);
          }
          return !0;
        }
        _applyStyles(e, t, s) {
          e.classList.contains("xterm-find-result-decoration") || (e.classList.add("xterm-find-result-decoration"), t && (e.style.outline = `1px solid ${t}`)), s && e.classList.add("xterm-find-active-result-decoration");
        }
        _createResultDecoration(e, t) {
          const s = this._terminal, i = s.registerMarker(-s.buffer.active.baseY - s.buffer.active.cursorY + e.row);
          if (!i)
            return;
          const o = s.registerDecoration({ marker: i, x: e.col, width: e.size, backgroundColor: t.matchBackground, overviewRulerOptions: this._highlightedLines.has(i.line) ? void 0 : { color: t.matchOverviewRuler, position: "center" } });
          if (o) {
            const n = [];
            n.push(i), n.push(o.onRender((r) => this._applyStyles(r, t.matchBorder, !1))), n.push(o.onDispose(() => (0, d.disposeArray)(n)));
          }
          return o;
        }
      }
      w.SearchAddon = g;
    })(), S;
  })());
})(O);
var M = O.exports;
const P = /* @__PURE__ */ k(M), j = /* @__PURE__ */ E({
  __proto__: null,
  default: P
}, [M]);
export {
  j as x
};
