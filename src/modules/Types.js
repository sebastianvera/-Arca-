class Types {
  static get Image() {
    return 'image';
  }
  
  static get Audio() {
    return 'audio';
  }

  static TypeExist(type) {
    return this.GetType(type) !== undefined;
  }

  static GetType(type) {
    switch(type) {
      case Types.Image:
      case Types.Audio:
        return type;
      default:
        return undefined;
    }
  }
}

module.exports = Types;
