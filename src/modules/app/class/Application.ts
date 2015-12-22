import {Component, Inject, Value, bootstrap} from 'angular-components';
import {HttpInterceptor} from '../../server/class/HttpInterceptor';
import {ErrorStore} from '../../server/class/ErrorStore';
import {Utils} from '../../common/class/Utils';

import config from '../../../config';

@Component({
    selector: 'app',
    templateUrl: 'modules/app/html/app.html',
    dependencies: ['angular-ui']
})
class Application {

    @Value() static configuration: any = config;

    growlService;
    sidebarToggle;
    layoutType;
    listviewSearchStat;
    lvMenuStat;
    currentSkin;
    skinList;

    @Inject()
    config(
        @Inject('$httpProvider') $httpProvider: ng.IHttpProvider) {

        $httpProvider.interceptors.push(HttpInterceptor.factory);
    }

    @Inject()
    run(
        @Inject('$log') log: ng.ILogService,
        errorStore: ErrorStore,
        utils: Utils) {

        log.debug(`Angular ${angular.version.full}`);

        errorStore.addChangeListener((store) => {
            let item = store.state.last();
            utils.toast(item && item.message);
        });
    };

    constructor( @Inject('$state') private $state) {
        // Welcome Message
        //this.growlService.growl('Welcome back Mallinda!', 'inverse')

        // Detect Mobile Browser
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            angular.element('html').addClass('ismobile');
        }

        // By default Sidbars are hidden in boxed layout and in wide layout only the right sidebar is hidden.
        this.sidebarToggle = {
            left: false,
            right: false
        };

        // By default template has a boxed layout
        this.layoutType = localStorage.getItem('ma-layout-status');

        // Listview Search (Check listview pages)
        this.listviewSearchStat = false;

        // Listview menu toggle in small screens
        this.lvMenuStat = false;

        // Skin Switch
        this.currentSkin = 'blue';

        this.skinList = [
            'lightblue',
            'bluegray',
            'cyan',
            'teal',
            'green',
            'orange',
            'blue',
            'purple'
        ];
    }

    sidebarStat(event) {
        if (!angular.element(event.target).parent().hasClass('active')) {
            this.sidebarToggle.left = false;
        }
    }

    lvSearch() {
        this.listviewSearchStat = true;
    }

    skinSwitch(color) {
        this.currentSkin = color;
    };
}

bootstrap(Application);
