import {Component, Inject, Value, bootstrap} from 'angular-components';
import {HttpInterceptor} from '../../modules/server/class/HttpInterceptor';
import {ErrorStore} from '../../modules/server/class/ErrorStore';
import {Utils} from '../../modules/common/class/Utils';

import config from '../../config';

import './demo.controllers';
import './demo.data';

@Component({
    selector: 'app',
    templateUrl: 'app/html/app.html',
    dependencies: ['angular-ui', 'demoControllers']
})
class Application {

    @Value() static configuration: any = config;

    sidebarToggle;
    layoutType;
    listviewSearchStat;
    lvMenuStat;
    currentSkin;
    skinList;

    @Inject()
    config(
        @Inject('$httpProvider') $httpProvider: ng.IHttpProvider,
        @Inject('$urlRouterProvider') $urlRouterProvider,
        @Inject('$stateProvider') $stateProvider) {

        let pages = [
            'alerts',
            'animations',
            'app',
            'box-shadow',
            'breadcrumb-demo',
            'buttons',
            'calendar',
            'chat',
            'colors',
            'common-2',
            'common',
            'contacts',
            'data-table',
            'flot-charts',
            'footer',
            'form-components',
            'form-elements',
            'form-examples',
            'form-validations',
            'generic-classes',
            'header',
            'home',
            'icons',
            'image-logo',
            'invoice',
            'list-view',
            'mainmenu-on-top',
            'media',
            'messages',
            'notification-dialog',
            'other-charts',
            'other-components',
            'pages.txt',
            'photo-timeline',
            'photos',
            'preloaders',
            'pricing-table',
            'profile-about',
            'profile-connections',
            'profile-photos',
            'profile-timeline',
            'profile',
            'sidebar-left',
            'tables',
            'textual-menu',
            'typography',
            'ui-bootstrap',
            'wall',
            'widget-templates',
            'widgets'
        ];

        $httpProvider.interceptors.push(HttpInterceptor.factory);
        $urlRouterProvider.otherwise('/');

        pages.forEach((page) => {
            $stateProvider
                .state(page, {
                    url: `/${page}`,
                    templateUrl: `app/html/${page}.html`
                });
        });
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

    constructor(
        @Inject('$timeout') private $timeout,
        @Inject('$state') private $state,
        @Inject('growlService') private growlService) {

        this.growlService.growl('Welcome back Mallinda!', 'inverse')

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

    openSearch() {
        angular.element('#header').addClass('search-toggled');
        angular.element('#top-search-wrap').find('input').focus();
    }

    closeSearch() {
        angular.element('#header').removeClass('search-toggled');
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
    }

    clearNotification($event) {
        $event.preventDefault();

        let x = angular.element($event.target).closest('.listview');
        let y = x.find('.lv-item');
        let z = y.size();

        angular.element($event.target).parent().fadeOut();

        x.find('.list-group').prepend('<i class="grid-loading hide-it"></i>');
        x.find('.grid-loading').fadeIn(1500);
        let w = 0;

        y.each(function() {
            let z = $(this);
            this.$timeout(function() {
                z.addClass('animated fadeOutRightBig').delay(1000).queue(function() {
                    z.remove();
                });
            }, w += 150);
        })

        this.$timeout(function() {
            angular.element('#notifications').addClass('empty');
        }, (z * 150) + 200);
    }

    fullScreen() {
        // Launch
        function launchIntoFullscreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }

        // Exit
        function exitFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if ((<any>document).mozCancelFullScreen) {
                (<any>document).mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }

        if (exitFullscreen()) {
            launchIntoFullscreen(document.documentElement);
        } else {
            launchIntoFullscreen(document.documentElement);
        }
    }
}

bootstrap(Application);
