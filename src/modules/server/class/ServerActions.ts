import {Service} from 'angular-components';
import {Dispatcher} from '../../common/class/Dispatcher';

export enum ServerErrorCodes {
    CriticalError = 500,
    ApplicationError,
    AuthorizationError
}

export enum ServerActionTypes {
    Success = 100,
    Error
}

@Service()
export class ServerActions {

    constructor(
        private dispatcher: Dispatcher) {
    }

    error(error: any, code: ServerErrorCodes): void {
        this.dispatcher.dispatch({
            actionType: ServerActionTypes.Error,
            code: code,
            error: error
        });
    }
}
