const fs = require('fs');

const createWriteStream = output => {
  if (fs.existsSync(output)) {
    return fs.createWriteStream(output, { flags: 'a' });
  }

  process.stderr.write('Output file missing or unavailable\n');
  process.exit(1);
};

module.exports = createWriteStream;
