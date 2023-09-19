import { qk as k, qj as M } from "./index-7e82f14c.js";
function I(p, b) {
  for (var f = 0; f < b.length; f++) {
    const a = b[f];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const d in a)
        if (d !== "default" && !(d in p)) {
          const g = Object.getOwnPropertyDescriptor(a, d);
          g && Object.defineProperty(p, d, g.get ? g : {
            enumerable: !0,
            get: () => a[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(p, Symbol.toStringTag, { value: "Module" }));
}
var y = { exports: {} };
(function(p, b) {
  (function(f, a) {
    p.exports = a();
  })(M, () => (() => {
    var f = {};
    return (() => {
      var a = f;
      function d(i, t, e) {
        return Math.max(t, Math.min(i, e));
      }
      Object.defineProperty(a, "__esModule", { value: !0 }), a.HTMLSerializeHandler = a.SerializeAddon = void 0;
      class g {
        constructor(t) {
          this._buffer = t;
        }
        serialize(t) {
          const e = this._buffer.getNullCell(), s = this._buffer.getNullCell();
          let l = e;
          const o = t.start.x, n = t.end.x, r = t.start.y, h = t.end.y;
          this._beforeSerialize(n - o, o, n);
          for (let u = o; u <= n; u++) {
            const c = this._buffer.getLine(u);
            if (c) {
              const _ = u !== t.start.x ? 0 : r, z = u !== t.end.x ? c.length : h;
              for (let w = _; w < z; w++) {
                const v = c.getCell(w, l === e ? s : e);
                v ? (this._nextCell(v, l, u, w), l = v) : console.warn(`Can't get cell at row=${u}, col=${w}`);
              }
            }
            this._rowEnd(u, u === n);
          }
          return this._afterSerialize(), this._serializeString();
        }
        _nextCell(t, e, s, l) {
        }
        _rowEnd(t, e) {
        }
        _beforeSerialize(t, e, s) {
        }
        _afterSerialize() {
        }
        _serializeString() {
          return "";
        }
      }
      function m(i, t) {
        return i.getFgColorMode() === t.getFgColorMode() && i.getFgColor() === t.getFgColor();
      }
      function C(i, t) {
        return i.getBgColorMode() === t.getBgColorMode() && i.getBgColor() === t.getBgColor();
      }
      function S(i, t) {
        return i.isInverse() === t.isInverse() && i.isBold() === t.isBold() && i.isUnderline() === t.isUnderline() && i.isOverline() === t.isOverline() && i.isBlink() === t.isBlink() && i.isInvisible() === t.isInvisible() && i.isItalic() === t.isItalic() && i.isDim() === t.isDim() && i.isStrikethrough() === t.isStrikethrough();
      }
      class B extends g {
        constructor(t, e) {
          super(t), this._terminal = e, this._rowIndex = 0, this._allRows = new Array(), this._allRowSeparators = new Array(), this._currentRow = "", this._nullCellCount = 0, this._cursorStyle = this._buffer.getNullCell(), this._cursorStyleRow = 0, this._cursorStyleCol = 0, this._backgroundCell = this._buffer.getNullCell(), this._firstRow = 0, this._lastCursorRow = 0, this._lastCursorCol = 0, this._lastContentCursorRow = 0, this._lastContentCursorCol = 0, this._thisRowLastChar = this._buffer.getNullCell(), this._thisRowLastSecondChar = this._buffer.getNullCell(), this._nextRowFirstChar = this._buffer.getNullCell();
        }
        _beforeSerialize(t, e, s) {
          this._allRows = new Array(t), this._lastContentCursorRow = e, this._lastCursorRow = e, this._firstRow = e;
        }
        _rowEnd(t, e) {
          var s;
          this._nullCellCount > 0 && !C(this._cursorStyle, this._backgroundCell) && (this._currentRow += `\x1B[${this._nullCellCount}X`);
          let l = "";
          if (!e) {
            t - this._firstRow >= this._terminal.rows && ((s = this._buffer.getLine(this._cursorStyleRow)) === null || s === void 0 || s.getCell(this._cursorStyleCol, this._backgroundCell));
            const o = this._buffer.getLine(t), n = this._buffer.getLine(t + 1);
            if (n.isWrapped) {
              l = "";
              const r = o.getCell(o.length - 1, this._thisRowLastChar), h = o.getCell(o.length - 2, this._thisRowLastSecondChar), u = n.getCell(0, this._nextRowFirstChar), c = u.getWidth() > 1;
              let _ = !1;
              (u.getChars() && c ? this._nullCellCount <= 1 : this._nullCellCount <= 0) && ((r.getChars() || r.getWidth() === 0) && C(r, u) && (_ = !0), c && (h.getChars() || h.getWidth() === 0) && C(r, u) && C(h, u) && (_ = !0)), _ || (l = "-".repeat(this._nullCellCount + 1), l += "\x1B[1D\x1B[1X", this._nullCellCount > 0 && (l += "\x1B[A", l += `\x1B[${o.length - this._nullCellCount}C`, l += `\x1B[${this._nullCellCount}X`, l += `\x1B[${o.length - this._nullCellCount}D`, l += "\x1B[B"), this._lastContentCursorRow = t + 1, this._lastContentCursorCol = 0, this._lastCursorRow = t + 1, this._lastCursorCol = 0);
            } else
              l = `\r
`, this._lastCursorRow = t + 1, this._lastCursorCol = 0;
          }
          this._allRows[this._rowIndex] = this._currentRow, this._allRowSeparators[this._rowIndex++] = l, this._currentRow = "", this._nullCellCount = 0;
        }
        _diffStyle(t, e) {
          const s = [], l = !m(t, e), o = !C(t, e), n = !S(t, e);
          if (l || o || n)
            if (t.isAttributeDefault())
              e.isAttributeDefault() || s.push(0);
            else {
              if (l) {
                const r = t.getFgColor();
                t.isFgRGB() ? s.push(38, 2, r >>> 16 & 255, r >>> 8 & 255, 255 & r) : t.isFgPalette() ? r >= 16 ? s.push(38, 5, r) : s.push(8 & r ? 90 + (7 & r) : 30 + (7 & r)) : s.push(39);
              }
              if (o) {
                const r = t.getBgColor();
                t.isBgRGB() ? s.push(48, 2, r >>> 16 & 255, r >>> 8 & 255, 255 & r) : t.isBgPalette() ? r >= 16 ? s.push(48, 5, r) : s.push(8 & r ? 100 + (7 & r) : 40 + (7 & r)) : s.push(49);
              }
              n && (t.isInverse() !== e.isInverse() && s.push(t.isInverse() ? 7 : 27), t.isBold() !== e.isBold() && s.push(t.isBold() ? 1 : 22), t.isUnderline() !== e.isUnderline() && s.push(t.isUnderline() ? 4 : 24), t.isOverline() !== e.isOverline() && s.push(t.isOverline() ? 53 : 55), t.isBlink() !== e.isBlink() && s.push(t.isBlink() ? 5 : 25), t.isInvisible() !== e.isInvisible() && s.push(t.isInvisible() ? 8 : 28), t.isItalic() !== e.isItalic() && s.push(t.isItalic() ? 3 : 23), t.isDim() !== e.isDim() && s.push(t.isDim() ? 2 : 22), t.isStrikethrough() !== e.isStrikethrough() && s.push(t.isStrikethrough() ? 9 : 29));
            }
          return s;
        }
        _nextCell(t, e, s, l) {
          if (t.getWidth() === 0)
            return;
          const o = t.getChars() === "", n = this._diffStyle(t, this._cursorStyle);
          if (o ? !C(this._cursorStyle, t) : n.length > 0) {
            this._nullCellCount > 0 && (C(this._cursorStyle, this._backgroundCell) || (this._currentRow += `\x1B[${this._nullCellCount}X`), this._currentRow += `\x1B[${this._nullCellCount}C`, this._nullCellCount = 0), this._lastContentCursorRow = this._lastCursorRow = s, this._lastContentCursorCol = this._lastCursorCol = l, this._currentRow += `\x1B[${n.join(";")}m`;
            const r = this._buffer.getLine(s);
            r !== void 0 && (r.getCell(l, this._cursorStyle), this._cursorStyleRow = s, this._cursorStyleCol = l);
          }
          o ? this._nullCellCount += t.getWidth() : (this._nullCellCount > 0 && (C(this._cursorStyle, this._backgroundCell) || (this._currentRow += `\x1B[${this._nullCellCount}X`), this._currentRow += `\x1B[${this._nullCellCount}C`, this._nullCellCount = 0), this._currentRow += t.getChars(), this._lastContentCursorRow = this._lastCursorRow = s, this._lastContentCursorCol = this._lastCursorCol = l + t.getWidth());
        }
        _serializeString() {
          let t = this._allRows.length;
          this._buffer.length - this._firstRow <= this._terminal.rows && (t = this._lastContentCursorRow + 1 - this._firstRow, this._lastCursorCol = this._lastContentCursorCol, this._lastCursorRow = this._lastContentCursorRow);
          let e = "";
          for (let h = 0; h < t; h++)
            e += this._allRows[h], h + 1 < t && (e += this._allRowSeparators[h]);
          const s = this._buffer.baseY + this._buffer.cursorY, l = this._buffer.cursorX;
          var o;
          (s !== this._lastCursorRow || l !== this._lastCursorCol) && ((o = s - this._lastCursorRow) > 0 ? e += `\x1B[${o}B` : o < 0 && (e += `\x1B[${-o}A`), ((h) => {
            h > 0 ? e += `\x1B[${h}C` : h < 0 && (e += `\x1B[${-h}D`);
          })(l - this._lastCursorCol));
          const n = this._terminal._core._inputHandler._curAttrData, r = this._diffStyle(n, this._cursorStyle);
          return r.length > 0 && (e += `\x1B[${r.join(";")}m`), e;
        }
      }
      a.SerializeAddon = class {
        constructor() {
        }
        activate(i) {
          this._terminal = i;
        }
        _serializeBuffer(i, t, e) {
          const s = t.length, l = new B(t, i), o = e === void 0 ? s : d(e + i.rows, 0, s);
          return l.serialize({ start: { x: s - o, y: 0 }, end: { x: s - 1, y: i.cols } });
        }
        _serializeBufferAsHTML(i, t) {
          var e, s;
          const l = i.buffer.active, o = new R(l, i, t);
          if ((e = t.onlySelection) === null || e === void 0 || !e) {
            const r = l.length, h = t.scrollback, u = h === void 0 ? r : d(h + i.rows, 0, r);
            return o.serialize({ start: { x: r - u, y: 0 }, end: { x: r - 1, y: i.cols } });
          }
          const n = (s = this._terminal) === null || s === void 0 ? void 0 : s.getSelectionPosition();
          return n !== void 0 ? o.serialize({ start: { x: n.start.y, y: n.start.x }, end: { x: n.end.y, y: n.end.x } }) : "";
        }
        _serializeModes(i) {
          let t = "";
          const e = i.modes;
          if (e.applicationCursorKeysMode && (t += "\x1B[?1h"), e.applicationKeypadMode && (t += "\x1B[?66h"), e.bracketedPasteMode && (t += "\x1B[?2004h"), e.insertMode && (t += "\x1B[4h"), e.originMode && (t += "\x1B[?6h"), e.reverseWraparoundMode && (t += "\x1B[?45h"), e.sendFocusMode && (t += "\x1B[?1004h"), e.wraparoundMode === !1 && (t += "\x1B[?7l"), e.mouseTrackingMode !== "none")
            switch (e.mouseTrackingMode) {
              case "x10":
                t += "\x1B[?9h";
                break;
              case "vt200":
                t += "\x1B[?1000h";
                break;
              case "drag":
                t += "\x1B[?1002h";
                break;
              case "any":
                t += "\x1B[?1003h";
            }
          return t;
        }
        serialize(i) {
          if (!this._terminal)
            throw new Error("Cannot use addon until it has been loaded");
          let t = this._serializeBuffer(this._terminal, this._terminal.buffer.normal, i == null ? void 0 : i.scrollback);
          return i != null && i.excludeAltBuffer || this._terminal.buffer.active.type !== "alternate" || (t += `\x1B[?1049h\x1B[H${this._serializeBuffer(this._terminal, this._terminal.buffer.alternate, void 0)}`), i != null && i.excludeModes || (t += this._serializeModes(this._terminal)), t;
        }
        serializeAsHTML(i) {
          if (!this._terminal)
            throw new Error("Cannot use addon until it has been loaded");
          return this._serializeBufferAsHTML(this._terminal, i || {});
        }
        dispose() {
        }
      };
      class R extends g {
        constructor(t, e, s) {
          super(t), this._terminal = e, this._options = s, this._currentRow = "", this._htmlContent = "", this._colors = e._core._themeService.colors;
        }
        _padStart(t, e, s) {
          return e >>= 0, s = s ?? " ", t.length > e ? t : ((e -= t.length) > s.length && (s += s.repeat(e / s.length)), s.slice(0, e) + t);
        }
        _beforeSerialize(t, e, s) {
          var l, o, n, r, h;
          this._htmlContent += "<html><body><!--StartFragment--><pre>";
          let u = "#000000", c = "#ffffff";
          (l = this._options.includeGlobalBackground) !== null && l !== void 0 && l && (u = (n = (o = this._terminal.options.theme) === null || o === void 0 ? void 0 : o.foreground) !== null && n !== void 0 ? n : "#ffffff", c = (h = (r = this._terminal.options.theme) === null || r === void 0 ? void 0 : r.background) !== null && h !== void 0 ? h : "#000000");
          const _ = [];
          _.push("color: " + u + ";"), _.push("background-color: " + c + ";"), _.push("font-family: " + this._terminal.options.fontFamily + ";"), _.push("font-size: " + this._terminal.options.fontSize + "px;"), this._htmlContent += "<div style='" + _.join(" ") + "'>";
        }
        _afterSerialize() {
          this._htmlContent += "</div>", this._htmlContent += "</pre><!--EndFragment--></body></html>";
        }
        _rowEnd(t, e) {
          this._htmlContent += "<div><span>" + this._currentRow + "</span></div>", this._currentRow = "";
        }
        _getHexColor(t, e) {
          const s = e ? t.getFgColor() : t.getBgColor();
          return (e ? t.isFgRGB() : t.isBgRGB()) ? [s >> 16 & 255, s >> 8 & 255, 255 & s].map((l) => this._padStart(l.toString(16), 2, "0")).join("") : (e ? t.isFgPalette() : t.isBgPalette()) ? this._colors.ansi[s].css : void 0;
        }
        _diffStyle(t, e) {
          const s = [], l = !m(t, e), o = !C(t, e), n = !S(t, e);
          if (l || o || n) {
            const r = this._getHexColor(t, !0);
            r && s.push("color: " + r + ";");
            const h = this._getHexColor(t, !1);
            return h && s.push("background-color: " + h + ";"), t.isInverse() && s.push("color: #000000; background-color: #BFBFBF;"), t.isBold() && s.push("font-weight: bold;"), t.isUnderline() && t.isOverline() ? s.push("text-decoration: overline underline;") : t.isUnderline() ? s.push("text-decoration: underline;") : t.isOverline() && s.push("text-decoration: overline;"), t.isBlink() && s.push("text-decoration: blink;"), t.isInvisible() && s.push("visibility: hidden;"), t.isItalic() && s.push("font-style: italic;"), t.isDim() && s.push("opacity: 0.5;"), t.isStrikethrough() && s.push("text-decoration: line-through;"), s;
          }
        }
        _nextCell(t, e, s, l) {
          if (t.getWidth() === 0)
            return;
          const o = t.getChars() === "", n = this._diffStyle(t, e);
          n && (this._currentRow += n.length === 0 ? "</span><span>" : "</span><span style='" + n.join(" ") + "'>"), this._currentRow += o ? " " : t.getChars();
        }
        _serializeString() {
          return this._htmlContent;
        }
      }
      a.HTMLSerializeHandler = R;
    })(), f;
  })());
})(y);
var x = y.exports;
const A = /* @__PURE__ */ k(x), $ = /* @__PURE__ */ I({
  __proto__: null,
  default: A
}, [x]);
export {
  $ as x
};
