import {Inject, Service} from 'angular-components';
import {Dispatcher} from '../../common/class/Dispatcher';

export enum ServerErrorCodes {
	OtherError = 500,
	ApplicationError,
	AuthorizationError
}

export enum ServerActionTypes {
	Success = 100,
	Error
}

@Service({
	name: 'ServerActions'
})
@Inject(Dispatcher.name)
export class ServerActions {

	static name: string = 'ServerActions';

	constructor(
		private dispatcher: Dispatcher) {
	}

	error(error: any, code: ServerErrorCodes): void {
		this.dispatcher.handleServerAction({
			actionType: ServerActionTypes.Error,
			code: code,
			error: error
		});
	}
}