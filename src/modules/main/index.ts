import {Component, Inject, bootstrap} from 'angular-components';

import 'angular-material';
import 'angular-datatable';
import 'angular-ui-router';

import 'modules/menu';
import 'modules/list';

@Component({
    selector: 'main',
    templateUrl: 'modules/main/main.html',
    dependencies: [
        'ngMaterial',
        'ui.router',
        'md.data.table'
    ]
})
class Application {

    @Inject('$mdThemingProvider')
    config($mdThemingProvider) {
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
