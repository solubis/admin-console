import {Service, Inject} from 'angular-components';
import {EventEmitter} from 'events';
import {CategoryActionTypes} from './CategoryActions';
import {Dispatcher} from '../../common/class/Dispatcher';

@Service()
export class CategoryStore extends EventEmitter {

	static name: string = 'CategoryStore';

	private data: any = [];

	constructor(
		@Inject('$log') private log: ng.ILogService,
		private dispatcher: Dispatcher) {

		super();
	}

	init(data) {
		this.data = data;
	}

	getAll() {
		return this.data;
	}

	getOne(id) {
		return this.data.find(item => item.id === id);
	}
	
	count(){
		return this.data.length;
	}

	truncate() {
		this.data = [];
	}

	update(record:any = {}) {
		let index = this.data.findIndex(item => item.id === record.id);
		this.data[index] = record;
	}

	create(record) {
		this.data.push(record);
	}

	delete(id) {
		let index = this.data.findIndex(item => item.id === id);
		this.data.splice(index, 1);
	}

	emitChange(id?) {
		this.emit('CHANGE', id);
	}

	addChangeListener(callback: Function): EventEmitter {
		return this.addListener('CHANGE', callback);
	}

	dispatcherToken = this.dispatcher.register((payload) => {
		var action = payload.action;

		switch (action.actionType) {
			case CategoryActionTypes.Create:
				this.create(action.data);
				this.emitChange(action.data.id);
				break;
			case CategoryActionTypes.Delete:
				this.delete(action.id);
				this.emitChange(action.id);
				break;
			case CategoryActionTypes.Init:
				this.init(action.data);
				this.emitChange();
				break;
			case CategoryActionTypes.Update:
				this.update(action.data);
				this.emitChange(action.data.id);
				break;
			case CategoryActionTypes.Truncate:
				this.truncate();
				this.emitChange();
				break;
		}

		return true;
	})
}