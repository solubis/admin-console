import {Service, ActionHandler} from 'angular-components';
import {Store, Dispatcher} from '../../common/class/Store';
import {ServerActionTypes} from './ServerActions';
import * as Immutable from 'immutable';

@Service()
class ErrorStore extends Store {

    constructor(dispatcher: Dispatcher) {
        super(dispatcher);

        this.state = Immutable.List();
    }

    @ActionHandler(ServerActionTypes.Error)
    onError(data) {
        return this.state.push(data.error);
    }

}

export {ErrorStore}
