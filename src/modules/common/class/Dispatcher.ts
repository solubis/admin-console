import {Service} from 'angular-components';
import {Dispatcher as FluxDispatcher} from 'flux';

@Service({
	name: 'Dispatcher'
})
export class Dispatcher extends FluxDispatcher<any> {
	
	static name: string = 'Dispatcher';

	handleViewAction(action) {
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}

}