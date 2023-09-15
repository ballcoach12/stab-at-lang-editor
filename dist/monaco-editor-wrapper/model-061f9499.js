import { _ as v, a as s, I as f, b as p, c as R, D as c, M as S, d as g, e as C, f as w, g as x, h as T, R as _, U as d, S as n, T as m, i as I, j as b, t as D, A as P, k as U } from "./index-4b7b8e94.js";
let a = class extends c {
  constructor(e, i, r) {
    super(), this._modelService = e, this._textModelService = i, this._undoRedoService = r, this._register(this._modelService.onModelRemoved((t) => {
      const o = this._undoRedoService.getElements(t.uri);
      if (!(o.past.length === 0 && o.future.length === 0)) {
        for (const l of o.past)
          l instanceof S && l.setDelegate(this);
        for (const l of o.future)
          l instanceof S && l.setDelegate(this);
      }
    }));
  }
  prepareUndoRedo(e) {
    const i = e.getMissingModels();
    if (i.length === 0)
      return c.None;
    const r = i.map(async (t) => {
      try {
        return await this._textModelService.createModelReference(t);
      } catch {
        return c.None;
      }
    });
    return Promise.all(r).then((t) => ({
      dispose: () => g(t)
    }));
  }
};
a = v([
  s(0, f),
  s(1, p),
  s(2, R)
], a);
let h = class extends _ {
  constructor(e, i, r, t) {
    super(), this.instantiationService = e, this.textFileService = i, this.fileService = r, this.modelService = t, this.providers = /* @__PURE__ */ new Map(), this.modelsToDispose = /* @__PURE__ */ new Set();
  }
  createReferencedObject(e) {
    return this.doCreateReferencedObject(e);
  }
  async doCreateReferencedObject(e, i) {
    this.modelsToDispose.delete(e);
    const r = d.parse(e);
    if (r.scheme === n.inMemory) {
      if (!this.modelService.getModel(r))
        throw new Error(`Unable to resolve inMemory resource ${e}`);
      const o = this.instantiationService.createInstance(m, r);
      if (this.ensureResolvedModel(o, e))
        return o;
    }
    if (r.scheme === n.untitled) {
      const t = await this.textFileService.untitled.resolve({ untitledResource: r });
      if (this.ensureResolvedModel(t, e))
        return t;
    }
    if (this.fileService.hasProvider(r)) {
      const t = await this.textFileService.files.resolve(r, { reason: 2 });
      if (this.ensureResolvedModel(t, e))
        return t;
    }
    if (this.providers.has(r.scheme)) {
      await this.resolveTextModelContent(e);
      const t = this.instantiationService.createInstance(m, r);
      if (this.ensureResolvedModel(t, e))
        return t;
    }
    if (!i)
      return await this.fileService.activateProvider(r.scheme), this.doCreateReferencedObject(e, !0);
    throw new Error(`Unable to resolve resource ${e}`);
  }
  ensureResolvedModel(e, i) {
    if (I(e))
      return !0;
    throw new Error(`Unable to resolve resource ${i}`);
  }
  destroyReferencedObject(e, i) {
    const r = d.parse(e);
    r.scheme === n.untitled || r.scheme === n.inMemory || (this.modelsToDispose.add(e), (async () => {
      try {
        const t = await i;
        if (!this.modelsToDispose.has(e) || (t instanceof b && await this.textFileService.files.canDispose(t), !this.modelsToDispose.has(e)))
          return;
        t.dispose();
      } catch {
      } finally {
        this.modelsToDispose.delete(e);
      }
    })());
  }
  registerTextModelContentProvider(e, i) {
    let r = this.providers.get(e);
    return r || (r = [], this.providers.set(e, r)), r.unshift(i), D(() => {
      const t = this.providers.get(e);
      if (!t)
        return;
      const o = t.indexOf(i);
      o !== -1 && (t.splice(o, 1), t.length === 0 && this.providers.delete(e));
    });
  }
  hasTextModelContentProvider(e) {
    return this.providers.get(e) !== void 0;
  }
  async resolveTextModelContent(e) {
    const i = d.parse(e), r = this.providers.get(i.scheme) || [];
    for (const t of r) {
      const o = await t.provideTextContent(i);
      if (o)
        return o;
    }
    throw new Error(`Unable to resolve text model content for resource ${e}`);
  }
};
h = v([
  s(0, C),
  s(1, w),
  s(2, x),
  s(3, f)
], h);
let u = class extends c {
  get resourceModelCollection() {
    return this._resourceModelCollection || (this._resourceModelCollection = this.instantiationService.createInstance(h)), this._resourceModelCollection;
  }
  get asyncModelCollection() {
    return this._asyncModelCollection || (this._asyncModelCollection = new P(this.resourceModelCollection)), this._asyncModelCollection;
  }
  constructor(e, i, r, t, o) {
    super(), this.instantiationService = e, this.fileService = i, this.undoRedoService = r, this.modelService = t, this.uriIdentityService = o, this._resourceModelCollection = void 0, this._asyncModelCollection = void 0, this._register(new a(this.modelService, this, this.undoRedoService));
  }
  async createModelReference(e) {
    return e = this.uriIdentityService.asCanonicalUri(e), await this.asyncModelCollection.acquire(e.toString());
  }
  registerTextModelContentProvider(e, i) {
    return this.resourceModelCollection.registerTextModelContentProvider(e, i);
  }
  canHandleResource(e) {
    return this.fileService.hasProvider(e) || e.scheme === n.untitled || e.scheme === n.inMemory ? !0 : this.resourceModelCollection.hasTextModelContentProvider(e.scheme);
  }
};
u = v([
  s(0, C),
  s(1, x),
  s(2, R),
  s(3, f),
  s(4, T)
], u);
function j() {
  return {
    [p.toString()]: new U(u, void 0, !0)
  };
}
export {
  j as default
};
