import {Service, Inject, Action} from 'angular-components';
import {CategoryActionTypes as Category} from './CategoryActions';
import {Dispatcher} from '../../common/class/Dispatcher';
import {Store, Immutable, EventEmitter} from '../../common/class/Store';

@Service()
class CategoryStore extends Store {

    constructor(
        @Inject('$log') private log: ng.ILogService,
        dispatcher: Dispatcher) {

        super(dispatcher);

        this.setState('categories', Immutable.List());
    }

    @Action(Category.Init)
    init(action) {
        this.setState('categories', Immutable.List(action.data));
    }

    getAll() {
        return this.getState().get('categories').toJS();
    }

    getOne(id) {
        return this.getState().get('categories').find(item => item.id === id);
    }

    getMine(cid) {
        return this.getState().get('categories').find(item => item.cid === cid);
    }

    getLast() {
        return this.getState().get('categories').last();
    }

    count() {
        return this.getState().get('categories').count();
    }

    @Action(Category.Truncate)
    truncate() {
        this.setState('categories', Immutable.List());
    }

    @Action(Category.Update)
    update(action) {
        let record = this.getState().get('categories').find(item => item.id === action.data.id);
        Object.assign(record, action.data);
    }

    @Action(Category.Create)
    create(action) {
        this.setState('categories', this.getState().get('categories').push(action.data));
    }

    @Action(Category.Delete)
    delete(action) {
    }
}


export {CategoryStore, EventEmitter, Immutable}