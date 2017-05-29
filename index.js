var path = require("path");
var scanner = require("./src/scanner");
var pathArgument = path.resolve(process.argv[2]);
// const jetpack = require('fs-jetpack');
// console.log(jetpack.inspectTree(pathArgument));
var tree = { name: 'root'};
scanner.scan(pathArgument, tree);
console.log(tree);
// jetpack.inspectTreeAsync(pathArgument, { relativePath: true })
// .then(tree => {
//     console.log(tree);
// })
// .catch(error => {
//     console.log(error);
// });
