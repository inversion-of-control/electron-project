#!/usr/bin/env node

/**
 * ============
 * elctron-project CLI
 * ============
**/

var process = require('yargs');
var cwd = process.cwd();
var cmd = require('./cmd');

process.usage('$0 <cmd> [args]')
       .command('assemble [module]', 
                'links dependencies to the electron_modules directory', 
                { module: {default: 'all'}}, 
                function (argv) {cmd.assemble(cwd, argv.module);})
       .command('clean [target]', 
                'cleans the specified target', 
                { target: {default: 'all'}}, 
                function (argv) {cmd.clean(cwd, argv.target);})
       .command('compile [mode]', 
                'compile project and generate file cache', 
                { mode: {default: 'development'}}, 
                function (argv) {cmd.compile(cwd, argv.mode);})
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