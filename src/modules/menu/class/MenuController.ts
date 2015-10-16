import {sections} from './Menu';

/*@ngInject*/
class MenuController {

    /* tslint:disable */

    private openedSection: any;
    private sections = sections;

    /* tslint:enable */

    private toggleDisabled;
    private notifications;


    constructor(
        private $mdSidenav: angular.material.ISidenavService,
        private $http: angular.IHttpService) {

        $http.get('data/notifications.json')
            .then((response) => {
                this.notifications = response.data;
            });
    }

    toggleLeftSidebar() {
        this.toggleDisabled = true;
        this.$mdSidenav('sidebar').toggle().then((result) => this.toggleDisabled = false);
    }
}

export default MenuController;
