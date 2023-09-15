import { wl as e, jf as s } from "./verifyPrepare-778b382e.js";
class n {
  constructor(t) {
    this._container = t;
  }
  set text(t) {
    e(this._container, ...s(t ?? ""));
  }
  set title(t) {
    this._container.title = t;
  }
}
export {
  n as S
};
