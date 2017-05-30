
var guess = require("./src/guess");

const fileName = process.argv[2];

console.log(guess.what(fileName));