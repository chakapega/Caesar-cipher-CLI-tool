const fs = require('fs');

const createReadStream = input => {
  if (fs.existsSync(input)) {
    return fs.createReadStream(input, 'utf8');
  }
};

module.exports = createReadStream;
