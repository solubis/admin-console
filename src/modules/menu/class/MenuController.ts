import {Component, Inject} from 'angular-components';
import {sections} from './Menu';

class MenuController {

    /* tslint:disable */

    private openedSection: any;
    private sections = sections;

    /* tslint:enable */

    private toggleDisabled;

    constructor() { }

    toggleLeftSidebar() {
        this.toggleDisabled = true;
    }
}

@Component({
    selector: 'sidebar',
    templateUrl: 'modules/menu/html/sidebar.html'
})
class Sidebar extends MenuController {
    constructor() {
        super();
    }
}

@Component({
    selector: 'topbar',
    templateUrl: 'modules/menu/html/topbar.html'
})
class TopBar extends MenuController {
    constructor() {
        super();
    }

    openSearch() {
        angular.element('#header').addClass('search-toggled');
        angular.element('#top-search-wrap').find('input').focus();
    }

    closeSearch() {
        angular.element('#header').removeClass('search-toggled');
    }

}

export {MenuController, Sidebar, TopBar};
