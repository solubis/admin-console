import {Component, Inject, bootstrap} from 'angular-components';
import {RestServiceProvider, ConfigServiceProvider} from 'angular-components';

@Component({
    selector: 'app',
    templateUrl: 'modules/app/html/app.html',
    providers: ['ngResource', 'ngMaterial',  'md.data.table', 'serverAPI']
})
class Application {

    @Inject('$mdThemingProvider', '$configProvider', '$restProvider')
    config(
        $mdThemingProvider: ng.material.IThemingProvider,
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
