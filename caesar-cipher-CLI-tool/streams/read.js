const fs = require('fs');

const createReadStream = input => {
  if (fs.existsSync(input)) {
    return fs.createReadStream(input, 'utf8');
  }

  process.stderr.write('Input file missing or unavailable\n');
  process.exit(1);
};

module.exports = createReadStream;
