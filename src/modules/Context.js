class Context {
  constructor() {
    this._canvas = document.createElement('canvas');
    this._canvas.setAttribute('id', 'canvas');
    document.body.appendChild(this._canvas);
    this._ctx = this._canvas.getContext('2d');
  }

  get with() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  setSize(width, height) {
    this._width = width;
    this._height = height;
    this._canvas.setAttribute('width', this._width);
    this._canvas.setAttribute('height', this._height);
  }
}

module.exports = Context;