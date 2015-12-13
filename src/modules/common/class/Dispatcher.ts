import {Service, Inject} from 'angular-components';
import {Dispatcher as FluxDispatcher} from 'flux';

@Service()
export class Dispatcher extends FluxDispatcher<any> {
    constructor(
        @Inject('$log') private $log: ng.ILogService) {

        super();
    }

    dispatch(action: any): void {
        super.dispatch(action);

        this.$log.debug(`Action ${action.actionType}`);
    }
}
