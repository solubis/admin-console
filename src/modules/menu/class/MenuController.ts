import {sections} from './Menu';

/*@ngInject*/
class MenuController {

    private openedSection: any;
    private toggleDisabled;
    private notifications;
    private sections = sections;

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
