import {Service, ActionHandler} from 'angular-components';
import {Store, Dispatcher} from '../../common/class/Store';
import {ServerActionTypes} from './ServerActions';
import {List} from 'immutable';

@Service()
class ErrorStore extends Store {

    constructor(dispatcher: Dispatcher) {
        super(dispatcher);

        this.setState(List());
    }

    @ActionHandler(ServerActionTypes.Error)
    onError(data) {
        this.setState(this.getState().push(data.error));
    }

}

export {ErrorStore}
