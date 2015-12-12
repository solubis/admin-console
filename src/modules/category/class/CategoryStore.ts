import {Service, ActionHandler} from 'angular-components';
import {CategoryActionTypes as Category} from './CategoryActions';
import {Store, Dispatcher} from '../../common/class/Store';
import {List} from 'immutable';

@Service()
class CategoryStore extends Store {

    constructor(dispatcher: Dispatcher) {
        super(dispatcher);

        this.setState(List());
    }

    /**
     * Public getters
     */

    getAll() {
        return this.getState().toJS();
    }

    getOne(id: string) {
        return this.getState().find(item => item.id === id);
    }

    count() {
        return this.getState().count();
    }

    /**
     * Action handlers
     */

    @ActionHandler(Category.Init)
    init(data: any, state: List<any>) {
        this.setState(List(data));
    }

    @ActionHandler(Category.Truncate)
    truncate() {
        return List();
    }

    @ActionHandler(Category.Save)
    save(data: any, state: List<any>) {
        let record = this.getOne(data.id);

        if (record) {
            Object.assign(record, data); // todo: non-immutable
            return state;
        } else {
            return state.push(data);
        }
    }

    @ActionHandler(Category.Delete)
    delete(data: any, state: List<any>) {
        let index: number = state.findIndex(item => item.id === data.id);

        return state.delete(index);
    }
}


export {CategoryStore}
