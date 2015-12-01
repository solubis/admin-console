import {Service, Inject} from 'angular-components';
import {Dispatcher} from '../../common/class/Dispatcher';
import {Utils} from '../../common/class/Utils';
import {EventEmitter} from 'events';
import {ServerActions, ServerErrorCodes, ServerActionTypes} from './ServerActions';

@Service()
class ErrorStore extends EventEmitter {

	private data: any[] = [];

    constructor( @Inject('$log') private $log, private dispatcher: Dispatcher, private utils: Utils) {
        super();
    }

	emitChange(error?) {
		this.emit('CHANGE', error);
	}

	addChangeListener(callback: Function): EventEmitter {
		return this.addListener('CHANGE', callback);
	}

    dispatcherToken = this.dispatcher.register((payload) => {
		var action = payload.action;

		switch (action.actionType) {
			case ServerActionTypes.Error:
				this.data.push(action.error);
				this.emitChange(action.error);
				break;
		}

		return true;
	})
}

export {ErrorStore}