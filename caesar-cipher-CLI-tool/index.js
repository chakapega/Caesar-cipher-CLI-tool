const { program } = require('commander');
const { pipeline } = require('stream');
const createReadStream = require('./streams/read');
const createCaesarCipherTransformStream = require('./streams/transform');
const createWriteStream = require('./streams/write');

program
  .option('-s, --shift <type>')
  .option('-i, --input <type>')
  .option('-o, --output <type>')
  .option('-a, --action <type>')
  .parse(process.argv);

console.log(program.shift);
console.log(program.input);
console.log(program.output);
console.log(program.action);

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
