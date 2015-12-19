import {Service} from 'angular-components';
import {Dispatcher} from '../../common/class/Dispatcher';

export var ServerErrorCodes = {
    CriticalError: 'criticalError',
    ApplicationError: 'criticalError',
    AuthorizationError: 'authorizationError'
};

export var ServerActionTypes = {
    Success: 'ServerAction:success',
    Error: 'ServerAction:error'
};

@Service()
export class ServerActions {

    constructor(
        private dispatcher: Dispatcher) {
    }

    error(error: any, code: any): void {
        this.dispatcher.dispatch({
            actionType: ServerActionTypes.Error,
            data: {
                code,
                error
            }
        });
    }
}
