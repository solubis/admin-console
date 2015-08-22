/// <reference path="../../typings/tsd.d.ts" />

import MenuController from 'modules/menu/class/MenuController';
import { menuDirective, menuLinkDirective, menuToggleDirective } from 'modules/menu/class/MenuDirective';

let name = 'modules.menu';
let dependencies = [];

angular
    .module(name, dependencies)

    .directive('menu', menuDirective)
    .directive('menuLink', menuLinkDirective)
    .directive('menuToggle', menuToggleDirective)

    .controller('MenuController', MenuController);

module.exports = name;
