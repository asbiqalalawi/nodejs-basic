const fs = require("fs");
const path = require("path");

const directory = path.resolve(__dirname, "input.txt");
const readableStream = fs.createReadStream(directory, {
  highWaterMark: 15,
});

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});

const writableStream = fs.createWriteStream("output.txt");
