import {Component, Inject, Value, bootstrap} from 'angular-components';
import {HttpInterceptor} from '../../server/class/HttpInterceptor';
import {ErrorStore} from '../../server/class/ErrorStore';
import {Utils} from '../../common/class/Utils';

import config from '../../../config';

@Component({
    selector: 'app',
    templateUrl: 'modules/app/html/app.html',
    dependencies: ['ngMaterial', 'md.data.table']
})
class Application {

    @Value() static configuration: any = config;

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

        errorStore.addChangeListener((store) => {
            utils.toast(store.state.last().message);
        });
    };

}

bootstrap(Application);
