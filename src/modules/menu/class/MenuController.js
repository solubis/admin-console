import {
    sections
}
from './Menu';

/*@ngInject*/
class MenuController {

    constructor(
        $mdSidenav,
        $http) {

        this.$mdSidenav = $mdSidenav;
        this.$http = $http;
        this.sections = sections;

        $http.get('data/notifications.json')
            .then((response) => {
                this.notifications = response.data;

            });
    }

    toggleLeftSidebar() {
        this.toggleDisabled = true;
        this.$mdSidenav('sidebar').toggle().then(() => this.toggleDisabled = false);
    }
}

export default MenuController;
