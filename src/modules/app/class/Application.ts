import {Component, Inject, Value, bootstrap} from 'angular-components';
import {HttpInterceptor} from '../../server/class/HttpInterceptor';
import {ErrorStore} from '../../server/class/ErrorStore';
import {Utils} from '../../common/class/Utils';

import config from '../../../config';

@Component({
    selector: 'app',
    templateUrl: 'modules/app/html/app.html',
    dependencies: ['alerter.ui']
})
class Application {

    @Value() static configuration: any = config;

    @Inject()
    config(
        @Inject('$httpProvider') $httpProvider: ng.IHttpProvider) {

        $httpProvider.interceptors.push(HttpInterceptor.factory);
    }

    @Inject()
    run(
        @Inject('$log') log: ng.ILogService,
        errorStore: ErrorStore,
        utils: Utils) {

        log.debug(`Angular ${angular.version.full}`);

        errorStore.addChangeListener((store) => {
            let item = store.state.last();
            utils.toast(item && item.message);
        });
    };

}

bootstrap(Application);
