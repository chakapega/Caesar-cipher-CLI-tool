const { Transform } = require('stream');
const caesarCipher = require('../shared/helpers');

const createCaesarCipherTransformStream = (action, shift) => {
  class CaesarCipherTransformStream extends Transform {
    constructor(options = {}) {
      options = Object.assign({}, options, {
        decodeStrings: false
      });
      super(options);
    }

    _transform(chunk, encoding, callback) {
      if (action === 'encode') {
        this.push(caesarCipher(chunk.toString('utf-8'), Number(shift)));
      } else if (action === 'decode') {
        this.push(caesarCipher(chunk.toString('utf-8'), -Number(shift)));
      }

      callback();
    }
  }

  return new CaesarCipherTransformStream();
};

module.exports = createCaesarCipherTransformStream;
