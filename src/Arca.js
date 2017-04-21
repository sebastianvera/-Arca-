const Context = require('./modules/Context');
const Cache = require('./modules/Cache');
const Sprite = require('./modules/Sprite');

class Arca {
  constructor() {
    this._context = new Context();
    this._cache = new Cache();
  }

  resize(width, height) {
    this._context.setSize(width, height);
  }

  store(key, path, type) {
    this._cache.store(key, path, type);
  }
}

module.exports = {
  Arca,
  Sprite
};