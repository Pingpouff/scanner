var path = require("path");
var scanner = require("./src/scanner");
var pathArgument = path.resolve(process.argv[2]);
var tree = { name: 'root'};
scanner.scanTree(pathArgument, tree);
console.log(tree);
