import {Component, Inject, bootstrap} from 'angular-components';
import {RestServiceProvider, ConfigServiceProvider} from 'angular-components';
import {HttpInterceptor} from '../../server/class/HttpInterceptor';
import {ErrorStore} from '../../server/class/ErrorStore';
import {Utils} from '../../common/class/Utils';

@Component({
    selector: 'app',
    templateUrl: 'modules/app/html/app.html',
    providers: ['ngResource', 'ngMaterial', 'md.data.table', 'serverAPI']
})
class Application {

    @Inject('$httpProvider', '$mdThemingProvider', '$configProvider', '$restProvider')
    config(
        $httpProvider: ng.IHttpProvider,
        $mdThemingProvider: ng.material.IThemingProvider,
        $configProvider: ConfigServiceProvider,
        $restProvider: RestServiceProvider) {

        let config = $configProvider.$get();

        $restProvider.configure(config);

        $httpProvider.interceptors.push(HttpInterceptor.factory);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('blue-grey')
            .warnPalette('amber');
    }

    @Inject('$log', ErrorStore.name, Utils.name)
    run(log: ng.ILogService, errorStore: ErrorStore, Utils: Utils) {
        log.debug(`Angular ${angular.version.full}`);
        
        errorStore.addChangeListener((error) => {
            Utils.toast(error.message);  
        })
    };

}

bootstrap(Application);
