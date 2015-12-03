import {Service, Inject, Action} from 'angular-components';
import {Store} from '../../common/class/Store';
import {Dispatcher} from '../../common/class/Dispatcher';
import {ServerActionTypes} from './ServerActions';
import * as Immutable from 'immutable';

@Service()
class ErrorStore extends Store {

    constructor( @Inject('$log') private $log, dispatcher: Dispatcher) {
        super(dispatcher);

        this.setState('errors', Immutable.List());
    }

    @Action(ServerActionTypes.Error)
    onError(action) {
        this.$log.warn(`Server Error from ErrorStore: ${action.error.message}`);
        this.setState('errors', this.getState().get('errors').push(action.error));
    }

}

export {ErrorStore}
