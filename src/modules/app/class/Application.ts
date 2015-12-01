import {Component, Inject, bootstrap} from 'angular-components';
import {HttpInterceptor} from '../../server/class/HttpInterceptor';
import {ErrorStore} from '../../server/class/ErrorStore';
import {Utils} from '../../common/class/Utils';

@Component({
    selector: 'app',
    templateUrl: 'modules/app/html/app.html',
    dependencies: ['ngResource', 'ngMaterial', 'md.data.table', 'serverAPI']
})
class Application {

    @Inject()
    config(
        @Inject('$httpProvider') $httpProvider: ng.IHttpProvider,
        @Inject('$mdThemingProvider') $mdThemingProvider: ng.material.IThemingProvider) {

        $httpProvider.interceptors.push(HttpInterceptor.factory);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('blue-grey')
            .warnPalette('amber');
    }

    @Inject()
    run(
        @Inject('$log') log: ng.ILogService,
        errorStore: ErrorStore,
        utils: Utils) {

        log.debug(`Angular ${angular.version.full}`);

        errorStore.addChangeListener((error) => {
            utils.toast(error.message);
        });
    };

}

bootstrap(Application);
