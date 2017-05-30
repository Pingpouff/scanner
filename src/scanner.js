const scanner = {};
scanner.scanTree = (pathArgument, tree) => {
	var fs = require("fs");
	var path = require("path");
	// TODO use async call + promise
	tree.children = [];
	fs.readdirSync(pathArgument).forEach(function (file) {
		var currentPath = path.join(pathArgument, file);
		const isCharSupported = currentPath.indexOf('é') === -1
			&& currentPath.indexOf('ê') === -1
			&& currentPath.indexOf('ï') === -1
			&& currentPath.indexOf('à') === -1
			&& currentPath.indexOf('è') === -1
			&& currentPath.indexOf('æ') === -1
			&& currentPath.indexOf('ô') === -1
			&& currentPath.indexOf('É') === -1
			&& currentPath.indexOf('œ') === -1
			&& currentPath.indexOf('á') === -1;
		if (!isCharSupported) console.warn('unsupported path: ' + currentPath);
		var dir = { name: file };
		tree.children.push(dir);
		if (isCharSupported && fs.lstatSync(currentPath).isDirectory()) {
			scan(currentPath, dir);
		}
	});
}

var Scanner = module.exports = {
	scan
}