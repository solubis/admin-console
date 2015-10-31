import {Component, Inject, bootstrap} from 'angular-components';

import 'angular-material';
import 'angular-datatable';
import 'angular-ui-router';

import 'modules/menu';
import 'modules/list';

import '../config';

@Component({
    selector: 'main',
    templateUrl: 'modules/main/html/main.html',
    dependencies: [
        'ngMaterial',
        'ui.router',
        'md.data.table',
        'core'
    ]
})
class Application {

    @Inject('$mdThemingProvider', '$configProvider', '$restProvider')
    config($mdThemingProvider: ng.material.IThemingProvider, $configProvider, $restProvider) {
        let config = $configProvider.$get();

        $restProvider.configure(config);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('blue-grey')
            .warnPalette('amber');
    }

    @Inject('$log', '$rest')
    run(log, server) {
        log.debug(`Angular ${angular.version.full}`);
        server.get('categories')
            .then((data) => {
                log.debug(data);
            });
    };

}

bootstrap(Application);
