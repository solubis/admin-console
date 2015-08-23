import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-ui-router';
import 'angular-material';
import 'angular-datatable';

import 'daneden/animate.css';
import 'angular-datatable/dist/md-data-table.css!css';

import 'modules.menu'

angular.element(document).ready(() => {
    let name = 'etl-console';

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
                        templateUrl: 'modules/menu/html/content.html',
                        controller: 'MenuController as menu'
                    }
                }
            });

        $urlRouterProvider.otherwise(($injector) => {
            $injector.get('$state').go('main');
        });

        $mdThemingProvider.theme('default')
          .primaryPalette('blue')
          .accentPalette('blue');
    };

    let run = () => {
    };

    let dependencies = ['ngMaterial', 'ngAnimate', 'ngAria', 'ui.router', 'md.data.table', 'modules.menu'];

    angular
        .module(name, dependencies)
        .config(config)
        .run(run);

    angular.bootstrap(document, [name], {});
});
