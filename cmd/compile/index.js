var fs = require('fs');
var npmRun = require('npm-run');
var path = require('path');
var pwd, cache, electron_modules;

module.exports = function compile(cwd, mode) {
    pwd = cwd;
    cache = path.resolve( pwd, '.cache');
    electron_modules = path.resolve( pwd, 'electron_modules');
    (mode == 'development') ? compileDevelopment() : compileProduction(); 
};

// DEVELOPMENT

function compileDevelopment() {
    fs.existsSync(cache) ? compileDevelopmentDeleteCache() : compileDevelopmentSetEnvironment()   
}

function compileDevelopmentDeleteCache() {
    npmRun.exec('rimraf '+ cache, {cwd: __dirname}, onCleanDevelopmentDeleteCache);
}

function onCleanDevelopmentDeleteCache(err, stdout, stderr) {
    err === null && compileDevelopmentSetEnvironment();  
    err !== null && console.log("error: " + err.toString());
}

function compileDevelopmentSetEnvironment() {
    npmRun.exec('cross-env NODE_ENV=development', {cwd: __dirname}, onCompileDevelopmentSetEnvironment);
}

function onCompileDevelopmentSetEnvironment(err, stdout, stderr) {
    err === null && compileDevelopmentRunCompiler();  
    err !== null && console.log("error: " + err.toString());
}

function compileDevelopmentRunCompiler() {
    npmRun.exec('electron ' + pwd, {cwd: __dirname}, onCompileDevelopmentRunCompiler);
}

function onCompileDevelopmentRunCompiler(err, stdout, stderr) {
    err !== null && console.log("error: " + err.toString());
}

// PRODUCTION

function compileProduction() {
    compileProductionSetEnvironment();
}

function compileProductionSetEnvironment() {
    npmRun.exec('cross-env NODE_ENV=production', {cwd: __dirname}, onCompileProductionSetEnvironment);
}

function onCompileProductionSetEnvironment(err, stdout, stderr) {
    err === null && compileProductionRunCompiler();  
    err !== null && console.log("error: " + err.toString());
}

function compileProductionRunCompiler() {
    npmRun.exec('electron-compile --appDir ' + pwd + " " + electron_modules, {cwd: __dirname}, onCompileProductionRunCompiler);
}

function onCompileProductionRunCompiler(err, stdout, stderr) {
    err !== null && console.log("error: " + err.toString());
}