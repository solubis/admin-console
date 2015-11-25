import {Inject, Service} from 'angular-components';
import {Dispatcher} from '../../common/class/Dispatcher';

export let CategoryActionTypes = {
	'UPDATE_CATEGORY': 'UPDATE_CATEGORY',
	'DELETE_CATEGORY': 'DELETE_CATEGORY',
	'TRUNCATE_CATEGORY': 'TRUNCATE_CATEGORY'
}

@Service({
	name: 'CategoryActions'
})
@Inject(Dispatcher.name)
export class CategoryActions {

	static name: string = 'CategoryActions';

	constructor(private dispatcher: Dispatcher) {

	}

	update(data): void {
		this.dispatcher.handleViewAction({
			actionType: CategoryActionTypes.UPDATE_CATEGORY,
			data: data
		});
	}

	delete(id): void {
		this.dispatcher.handleViewAction({
			actionType: CategoryActionTypes.DELETE_CATEGORY,
			id: id
		});
	}

	truncate(): void {
		this.dispatcher.handleViewAction({
			actionType: CategoryActionTypes.TRUNCATE_CATEGORY
		});
	}
}