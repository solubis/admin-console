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
        'md.data.table'
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
                        template: '<topbar></topbar>'
                    },
                    'sidebar': {
                        template: '<sidebar></sidebar>'
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
