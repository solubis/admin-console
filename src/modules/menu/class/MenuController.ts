/// <reference path="../../../typings/tsd.d.ts" />

/*@ngInject*/
class MenuController {
    private data;

    constructor($http, $log) {
        $log.debug('MenuController');
        this.data = 'Srala';
    }
}

export default MenuController;
