const fs = require('fs');
const path = require('path');

const directory = path.resolve(__dirname, 'notes.txt');
const data = fs.readFileSync(directory, 'UTF-8');
console.log(data)