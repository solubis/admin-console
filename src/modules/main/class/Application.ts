import {Component, Inject, bootstrap} from 'angular-components';
import {RestServiceProvider, ConfigServiceProvider} from 'angular-components';

import 'angular-material';
import 'angular-datatable';
import 'angular-ui-router';

import 'modules/menu';
import 'modules/dictionary';

import '../config';

@Component({
    selector: 'main',
    templateUrl: 'modules/main/html/main.html',
    dependencies: [
        'ngMaterial',
        'md.data.table',
        'coreModule'
    ]
})
class Application {

    @Inject('$mdThemingProvider', '$configProvider', '$restProvider')
    config($mdThemingProvider: ng.material.IThemingProvider,
        $configProvider: ConfigServiceProvider,
        $restProvider: RestServiceProvider) {

        let config = $configProvider.$get();

        $restProvider.configure(config);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('blue-grey')
            .warnPalette('amber');

    }

    @Inject('$log')
    run(log) {
        log.debug(`Angular ${angular.version.full}`);
    };

}

bootstrap(Application);
