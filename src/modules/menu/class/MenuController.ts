import {Component, Inject} from 'angular-components';
import {sections} from './Menu';

class MenuController {

    /* tslint:disable */

    private openedSection: any;
    private sections = sections;

    /* tslint:enable */

    private toggleDisabled;

    constructor(private $mdSidenav: ng.material.ISidenavService) { }

    toggleLeftSidebar() {
        this.toggleDisabled = true;
        this.$mdSidenav('sidebar').toggle().then((result) => this.toggleDisabled = false);
    }
}

@Component({
    selector: 'sidebar',
    templateUrl: 'modules/menu/html/sidebar.html'
})
class Sidebar extends MenuController {
    constructor(
        @Inject('$mdSidenav') sidenav) {
        super(sidenav);
    }
}

@Component({
    selector: 'topbar',
    templateUrl: 'modules/menu/html/topbar.html'
})
class TopBar extends MenuController {
    constructor(
        @Inject('$mdSidenav') sidenav) {
        super(sidenav);
    }
}

export {MenuController, Sidebar, TopBar};
