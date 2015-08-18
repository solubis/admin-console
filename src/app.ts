angular.element(document).ready(() => {
    let name = 'etl-console';

    let config = ($urlRouterProvider, $stateProvider) => {
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
                        templateUrl: 'modules/menu/html/content.html'
                    }
                }
            });

        $urlRouterProvider.otherwise(($injector) => {
            $injector.get('$state').go('main');
        });
    };

    let run = () => {
    };

    let dependencies = [
        'ngMaterial',
        'ngAnimate',
        'ui.router',

        require('modules.menu')
    ];

    angular
        .module(name, dependencies)
        .config(config)
        .run(run);

    angular.bootstrap(document, [name], {});
});
