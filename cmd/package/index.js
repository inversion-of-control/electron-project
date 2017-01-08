var fs = require('fs');
var npmRun = require('npm-run');
var path = require('path');

module.exports = function package(cwd, platform) {
    //"package": "run-s clean-cache compile package-linux package-win clean-source",
    //"package-win": "cross-env NODE_ENV=production electron-packager . app --out=target --platform=win32 --arch=all --overwrite --ignore=\".compilerc|.gitignore\"",
    //"package-linux": "cross-env NODE_ENV=production electron-packager . app --out=target --platform=linux --arch=all --overwrite --ignore=\".compilerc|.gitignore\"",
    //"package-for-this": "cross-env NODE_ENV=production electron-packager . app --out=target --overwrite --ignore=\".compilerc|.gitignore\""
    //"quick-package": "run-s clean-cache compile package-for-this clean-source",
};