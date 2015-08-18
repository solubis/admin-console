/// <reference path="../../typings/tsd.d.ts" />

import MenuController from 'modules/menu/class/MenuController';

let name = 'modules.menu';
let dependencies = [];

angular
    .module(name, dependencies)
    .controller('MenuController', MenuController);

module.exports = name;
