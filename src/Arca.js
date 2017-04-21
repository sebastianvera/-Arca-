class Arca {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext("2d");
    this.canvas.setAttribute('id', 'canvas');
    document.body.appendChild(this.canvas);
  }
}

const arca = new Arca();