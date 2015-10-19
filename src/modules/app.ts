import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-ui-router';
import 'angular-material';
import 'angular-datatable';

import 'modules.menu';
import 'modules.list';

angular.element(document).ready(() => {

    let name = 'admin-console';

    let config = ($urlRouterProvider, $stateProvider, $mdThemingProvider) => {
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
                        templateUrl: 'modules/list/html/list.html',
                        controller: 'ListController as menu'
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
    };

    let run = () => {
        console.log('Application started');
    };

    try {
        angular.module('templates');
    } catch (e) {
        angular.module('templates', []);
    }

    let dependencies = ['ngMaterial', 'ngAnimate', 'ngAria', 'ui.router', 'md.data.table',
        'modules.menu', 'modules.list', 'templates'];

    angular
        .module(name, dependencies)
        .config(config)
        .run(run);

    angular.bootstrap(document, [name], {});
});
