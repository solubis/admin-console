import {Inject, Service} from 'angular-components';
import {Dispatcher} from '../../common/class/Dispatcher';
import {ServerActionTypes} from '../../server/class/ServerActions';

export enum CategoryActionTypes {
	Init = 0,
	Create,
	Update,
	Delete,
	Truncate
}

@Service({
	name: 'CategoryActions'
})
@Inject(Dispatcher.name, 'Category')
export class CategoryActions {

	static name: string = 'CategoryActions';

	constructor(
		private dispatcher: Dispatcher,
		private Category) {

		this.init();
	}

	init() {
		this.Category.find().$promise.then((result) => {
			this.dispatcher.handleServerAction({
				actionType: CategoryActionTypes.Init,
				data: result
			});
		});
	}

	update(data): void {
		this.Category.upsert(data).$promise
			.then(result => {
				this.dispatcher.handleServerAction({
					actionType: CategoryActionTypes.Update,
					data: result
				});
			})
	}

	create(data): void {
		this.Category.create(data).$promise
			.then((result) => {
				this.dispatcher.handleServerAction({
					actionType: CategoryActionTypes.Create,
					data: result
				});
			})
	}

	delete(id): void {
		this.Category.deleteById(id).$promise.then((result) => {
			this.dispatcher.handleServerAction({
				actionType: CategoryActionTypes.Delete,
				id: id
			});
		});
	}

	truncate(): void {
		this.Category.truncate().$promise.then((result) => {
			this.dispatcher.handleServerAction({
				actionType: CategoryActionTypes.Truncate
			});
		});
	}
}