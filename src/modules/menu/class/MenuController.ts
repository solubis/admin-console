import {Component, Inject} from 'angular-components';
import {sections} from './Menu';

@Inject('$element', '$attrs', '$scope', '$mdSidenav', '$http')
class MenuController {

    /* tslint:disable */

    private openedSection: any;
    private sections = sections;

    /* tslint:enable */

    private toggleDisabled;
    private notifications;

    constructor(
        private $element: ng.IAugmentedJQuery,
        private $attrs: ng.IAttributes,
        private $scope: ng.IScope,
        private $mdSidenav: ng.material.ISidenavService,
        private $http: ng.IHttpService) {

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

@Component({
    selector: 'sidebar',
    templateUrl: 'modules/menu/html/sidebar.html'
})
@Inject('$element', '$attrs', '$scope', '$mdSidenav', '$http')
class Sidebar extends MenuController {
}

@Component({
    selector: 'topbar',
    templateUrl: 'modules/menu/html/topbar.html'
})
class TopBar extends MenuController {
}

export {MenuController, Sidebar, TopBar};
