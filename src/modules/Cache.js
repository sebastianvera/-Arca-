const Loader = require('./Loader');
const Types = require('./Types');

class Cache {
  constructor() {
    this._data = new Map();
    this._loader = new Loader();
  }

  get size() {
    return this._data.size;
  }

  store(key, path, type) {
    if(!Types.TypeExist(type)) {
      throw Error(`Given type '${type}' for file '${path}' is not valid!`);
    }
    if(this._data.has(key)) {
      throw Error(`Given key '${key}' is already stored, try to remove it first!`);
    }
    const resource = this._loader.load(type, path);
    this._data.set(key, resource);
  }

  remove(key) {
    return this._data.delete(key);
  }

  reset() {
    this._data.clear();
  }
}

module.exports = Cache;