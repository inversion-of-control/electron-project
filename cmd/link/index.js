var fs = require('fs');
var npmRun = require('npm-run');
var path = require('path');
var json = require('jsonfile')
var pwd, package, node_modules, electron_modules;

module.exports = function link(cwd, module) {
    // 1. get package.json path from cwd
    pwd = cwd;
    package = path.resolve( pwd, 'package.json');
    node_modules = path.resolve( pwd, 'node_modules');
    electron_modules = path.resolve( pwd, 'electron_modules');

    json.readFile(package, parsePackage);

    // 2. parse 'electron modules' entry from package.json
    // 3. map RELEASE ('node_modules') locations and SNAPSHOT (non 'node_modules' filesystem) locations to target keys/locations 
    // 3. if module==='all' (DEFAULT FOR NOW)
        // for each key  
        // query if key's symlink exists in electron_modules (with correct location)
        // if !module_exists, write symlink for key and target_location(+ console output)
        // else if module_exists && current_location!==target_location, write symlink for key and target_location(+ console output)
};

function parsePackage(err, obj){
    var electron_modules = JSON.parse(obj, function(key,value){
        
    });
    console.dir(obj);
}