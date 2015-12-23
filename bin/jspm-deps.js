/* global System */

'use strict';

const __BASEDIR = process.cwd();

var path = require('path');
var fs = require('fs');
var packageFile = path.join(__BASEDIR, './package.json');
var pkg = require(packageFile);
var colors = require('colors'); // eslint-disable-line no-unused-vars
var system = require('systemjs'); // eslint-disable-line no-unused-vars

const __JSPMDIR = pkg.jspm && pkg.jspm.directories && pkg.jspm.directories.packages || 'jspm_packages';

module.exports = function generateDependencies(type) {

    console.log(`Processing ${type}`.green, `${packageFile}`.yellow);

    let section = type === 'typescript' ? 'typescriptDependencies' : 'styleDependencies';
    let config = pkg[section];

    if (!config) {
        return;
    }

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
        let importPackage = importParts.splice(0, 1)[0];
        let importFile = importParts.join('/');
        let jspmDependency = System.map[importPackage];

        if (!jspmDependency) {
            console.log(`Error: Style dependency not found (check dependencies and config.js) : ${importPackage}`.red);
            return;
        }

        let importPath = path.join(prefix, __JSPMDIR, jspmDependency.replace(':', '/'), importFile);
        let importStatement;

        if (type === 'style') {
            importStatement = '@import (less) "' + importPath + '";\n';
        } else {
            importStatement = '/// <reference path="' + importPath + '"/>\n';
        }

        fs.appendFileSync(output, importStatement);

        console.log('adding: '.cyan + importPath.yellow);
    });
};