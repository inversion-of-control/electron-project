#!/usr/bin/env node

/**
 * ============
 * electron-project CLI
 * ============
**/

var prc = require('yargs');
var cmd = require('./cmd');
var cwd = process.cwd();

prc.usage('$0 <cmd> [args]')
       .command('clean [target]', 
                'cleans the specified target', 
                { target: {default: 'all'}}, 
                function (argv) {cmd.clean(cwd, argv.target);})
       .command('compile [mode]', 
                'compile project and generate file cache', 
                { mode: {default: 'development'}}, 
                function (argv) {cmd.compile(cwd, argv.mode);})
       .command('link [module]', 
                'links dependencies to the electron_modules directory', 
                { module: {default: 'all'}}, 
                function (argv) {cmd.link(cwd, argv.module);})                
       .command('package [platform]', 
                'packages project for the specified platform [win32,darwin,linux]', 
                { platform: {default: 'win32'}}, 
                function (argv) {cmd.package(cwd, argv.platform);})
       .command('test [module]', 
                'tests the specified target', 
                { module: {default: 'all'}}, 
                function (argv) {cmd.test(cwd, argv.module);})
        .help()
        .argv;