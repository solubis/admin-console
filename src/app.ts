require('assets/app.css!');
require('angular');

angular.element(document).ready(() => {
    let name = 'etl-console';

    let config = ($componentLoaderProvider) => {
        $componentLoaderProvider.setTemplateMapping((name) => `./modules/${name}/index.html`);
    };

    let run = ($router) => {
        $router.config([
            { path: '/', redirectTo: '/menu' },
            { path: '/menu', component: 'menu' }
        ]);
    };

    let dependencies = [
        require('angular-material'),
        require('angular-animate'),
        require('angular-router'),
        require('modules:menu')
    ];

    angular
        .module(name, dependencies)
        .config(config)
        .run(run);

    angular.bootstrap(document, [name], {});
});
