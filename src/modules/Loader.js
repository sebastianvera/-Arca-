const Types = require('./Types');

class Loader {
  constructor() {
    this._loaderMap = new Map();
    this._loaderMap.set(Types.Image, this.loadImage);
  }

  load(type, path) {
    const loadFunc = this._loaderMap.get(type);
    return loadFunc(path);
  }

  loadImage(path) {
    const image = new Image();
    image.src = path;
    return image;
  }
}

module.exports = Loader;