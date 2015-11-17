'use strict';

const __BASEDIR = process.cwd();

var path = require('path');
var fs = require('fs');
var pkg = require(path.join(__BASEDIR, './package.json'));
var colors = require('colors'); // eslint-disable-line no-unused-vars
var system = require('systemjs'); // eslint-disable-line no-unused-vars

const __JSPMDIR = pkg.jspm && pkg.jspm.directories && pkg.jspm.directories.packages || 'jspm_packages';

var jspmSass = function () {
    let config = pkg['jspm-sass'];
    let output = config.output;
    let prefix = '';

    for (let i = 0; i < output.split('/').length - 1; i++) {
        prefix += '../';
    }

    require(path.join(__BASEDIR, pkg.jspm.configFile || 'config.js'));

    fs.writeFileSync(output, '/** DO NOT EDIT MANUALLY **/\n');

    console.log('Generating: '.green, output);

    config.dependencies.forEach(function (value) {
        let importParts = value.split('/');
        let importPackage = importParts.splice(0, 1);
        let importFile = importParts.join('/');
        let jspmDependency = system.map[importPackage];
        let importPath = path.join(prefix, __JSPMDIR, jspmDependency.replace(':', '/'), importFile);
        let importStatement = '@import "' + importPath + '";\n';

        fs.appendFileSync(output, importStatement);

        console.log('adding: '.cyan + importPath.yellow);
    });
};

module.exports = jspmSass;
