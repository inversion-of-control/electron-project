var fs = require('fs')
var npmRun = require('npm-run')
var path = require('path')
var json = require('jsonfile')
var progress = require('progress')
var pwd, 
    package,
    processing, 
    modules,
    modules_keys,    
    node_modules, 
    electron_modules,
    progress_indicator,
    module_indicator,
    symlink_results,
    symlink_faults,
    symlink

module.exports = link = (cwd, module) => {
    pwd = cwd
    package = path.resolve(pwd, 'package.json')
    node_modules = path.resolve(pwd, 'node_modules')
    electron_modules = path.resolve(pwd, 'electron_modules')
    json.readFile(package, parser)
}

parser = (error, object) => {
    modules = object.electron_modules
    modules_keys = Object.keys(modules)
    module_indicator = new progress('  linking: :module', { total: modules_keys.length, width: 20, clear: true })
    progress_indicator = new progress('  progress: [:bar] :percent :etas', { total: modules_keys.length, width: 20 })
    modules_keys.map(parse)
}

parse = (module, index) => {
    processing = module;  
    symlink = path.resolve(electron_modules, processing)
    isSymbolicLink ? tick(processing) : tick(processing)
}

create = () => {
    fs.symlink(srcpath, dstpath, callback)
}

destroy = () => {
    
}

tick = module => {
    module_indicator.tick({'module': modules[module]})
    progress_indicator.tick()
    progress_indicator.complete && onComplete();
}

onComplete = () => {
    
}

isSymbolicLink = path => {
	try {
		const stats = fs.lstatSync(path);
		return stats.isSymbolicLink();
	} 
    catch (error) {
		if (error.code === 'ENOENT') return false;
		throw error;
	}
}