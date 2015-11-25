import {Service, Inject} from 'angular-components';
import {EventEmitter} from 'events';
import {CategoryActionTypes} from './CategoryActions';
import {Dispatcher} from '../../common/class/Dispatcher';

@Service({
	name: 'CategoryStore'
})
@Inject('$log', 'Category', Dispatcher.name)
export class CategoryStore extends EventEmitter {

	static name: string = 'CategoryStore';

	private data: any = [];

	constructor(
		private log: ng.ILogService,
		private Category,
		private dispatcher) {

		super();

		this.init();
	}

	init() {

		this.Category.find().$promise.then((result) => {
			this.data = result;
			this.emitChange();
		});
	}

	getAll() {
		return this.data;
	}

	truncate() {
		this.Category.truncate().$promise.then((result) => {
			this.data = [];
			this.emitChange();
		});
	}

	save(data) {
		let promise;

		promise = this.Category.upsert(data).$promise.then((result) => {
			if (!data.id) this.data.push(result);
			this.emitChange();
		});

		return promise;
	}

	emitChange() {
		this.emit('CHANGE');
	}

	addChangeListener(callback: Function): EventEmitter {
		return this.addListener('CHANGE', callback);
	}

	dispatcherToken = this.dispatcher.register((payload) => {
		var action = payload.action;

		switch (action.actionType) {
			case CategoryActionTypes.UPDATE_CATEGORY:
				this.save(action.data);
				break;
			case CategoryActionTypes.TRUNCATE_CATEGORY:
				this.truncate();
				break;
		}

		return true;
	})
}