import ListController from './class/ListController';

let name = 'modules.list';
let dependencies = []; 

angular
    .module(name, dependencies)

    .controller('ListController', ListController);
