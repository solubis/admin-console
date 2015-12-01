import {Service} from 'angular-components';
import {Dispatcher as FluxDispatcher} from 'flux';

@Service()
export class Dispatcher extends FluxDispatcher<any> {

    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW',
            action: action
        });
    }

    handleServerAction(action) {
        this.dispatch({
            source: 'SERVER',
            action: action
        });
    }

}
