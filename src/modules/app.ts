import {Component, Inject, bootstrap} from 'angular-components';

import 'angular-material';
import 'angular-datatable';
import 'angular-ui-router';

import 'modules.menu';
import 'modules.list';

@Component({
    selector: 'body',
    dependencies: [
        'ngMaterial',
        'ui.router',
        'md.data.table',
        'modules.menu'
    ]
})
class Application {

    @Inject('$urlRouterProvider', '$stateProvider', '$mdThemingProvider')
    config($urlRouterProvider, $stateProvider, $mdThemingProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                views: {
                    'topbar': {
                        templateUrl: 'modules/menu/html/topbar.html',
                        controller: 'MenuController as menu'
                    },
                    'sidebar': {
                        templateUrl: 'modules/menu/html/sidebar.html',
                        controller: 'MenuController as menu'
                    },
                    'content': {
                        template: '<list-component></list-component>'
                    }
                }
            });

        $urlRouterProvider.otherwise(($injector) => {
            $injector.get('$state').go('main');
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('blue-grey')
            .warnPalette('amber');
    }

    @Inject('$log')
    run(log) {
        log.debug('Application started');
    };

}

bootstrap(Application);
