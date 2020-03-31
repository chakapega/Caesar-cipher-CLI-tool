const fs = require('fs');

const createWriteStream = output => {
  if (fs.existsSync(output)) {
    return fs.createWriteStream(output);
  }
};

module.exports = createWriteStream;
