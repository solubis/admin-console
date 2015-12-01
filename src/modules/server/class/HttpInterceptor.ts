/**
 * HTTP Interceptor for global error handling
 */

import {Inject} from 'angular-components';
import {ServerActions, ServerErrorCodes} from './ServerActions';

function replacer(key, value) {
    if (typeof value === 'string' && value.length > 35) {
        return value.substring(0, 34) + '...';
    }
    return value;
}

class HttpInterceptor {

    request = (config) => {
        if (config.command) {
            this.$log.debug(config.method + ' ' + config.command +
                ': params ' + JSON.stringify(config.params, replacer) +
                ', headers ' + JSON.stringify(config.headers, replacer) +
                (config.data ? ', body: ' + JSON.stringify(config.data, replacer) : '')
            );
        }

        return config;
    };

    responseError = (rejection) => {
        let data = rejection.data;

        this.$log.error('HTTP Error, status: ' + rejection.status + ' message: ' + JSON.stringify(rejection.data, replacer));

        switch (rejection.status) {
            case 0:
            case 500:
            case 502:
            case 503:
                this.actions.error(data.error, ServerErrorCodes.CriticalError);
                break;
            case 400:
            case 404:
            case 405:
            case 422:
                this.actions.error(data.error, ServerErrorCodes.ApplicationError);
                break;
            case 401:
            case 403:
                this.actions.error(data.error, ServerErrorCodes.AuthorizationError);
                break;
        }

        return this.$q.reject(rejection);
    };

    @Inject()
    public static factory(
        actions: ServerActions,
        @Inject('$log') $log: ng.ILogService,
        @Inject('$q') $q: ng.IQService) {

        return new HttpInterceptor(actions, $log, $q);
    }

    constructor(
        private actions: ServerActions,
        private $log: ng.ILogService,
        private $q: ng.IQService) {
    }
}

export default HttpInterceptor;
export {HttpInterceptor};
