import {Service, ActionHandler} from 'angular-components';
import {CategoryActionTypes as Category} from './CategoryActions';
import {Store, Dispatcher} from '../../common/class/Store';
import * as Immutable from 'immutable';

@Service()
class CategoryStore extends Store {

    constructor(dispatcher: Dispatcher) {
        super(dispatcher);

        this.setState(Immutable.List());
    }

    /**
     * Action handlers
     */

    @ActionHandler(Category.Init)
    init(data: any, state: Immutable.List<any>) {
        this.setState(Immutable.fromJS(data));
    }

    @ActionHandler(Category.Truncate)
    truncate() {
        return Immutable.List();
    }

    @ActionHandler(Category.Save)
    save(data: any, state: Immutable.List<any>) {
        let index: number = state.findIndex(item => item.get('id') === data.id);

        data = Immutable.fromJS(data);

        if (index >= 0) {
            return state.update(index, () => data);
        } else {
            return state.push(data);
        }
    }

    @ActionHandler(Category.Delete)
    delete(data: any, state: Immutable.List<any>) {
        let index: number = state.findIndex(item => item.get('id') === data.id);

        return state.delete(index);
    }
}


export {CategoryStore}
