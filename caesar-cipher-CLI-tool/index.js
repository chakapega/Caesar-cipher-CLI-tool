const { program } = require('commander');
const { pipeline } = require('stream');
const createReadStream = require('./streams/read');
const createCaesarCipherTransformStream = require('./streams/transform');
const createWriteStream = require('./streams/write');

program
  .option('-a, --action <type>')
  .option('-s, --shift <type>')
  .option('-i, --input <type>')
  .option('-o, --output <type>')
  .parse(process.argv);

if (!program.action || !program.shift) {
  process.stderr.write('Required arguments not passed\n');
  process.exit(1);
}

const readStream = createReadStream(program.input);
const transformStream = createCaesarCipherTransformStream(program.action, program.shift);
const writeStream = createWriteStream(program.output);

pipeline(readStream, transformStream, writeStream, error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Operation completed');
  }
});
