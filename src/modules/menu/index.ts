import MenuController from './class/MenuController';
import { menuDirective, menuLinkDirective, menuToggleDirective } from './class/MenuDirective';

let name = 'modules.menu';
let dependencies = [];

angular
    .module(name, dependencies)

    .directive('menu', menuDirective)
    .directive('menuLink', menuLinkDirective)
    .directive('menuToggle', menuToggleDirective)

    .controller('MenuController', MenuController);
