import {Service, ActionHandler} from 'angular-components';
import {CategoryActionCodes} from './CategoryActions';
import {Store, Dispatcher} from '../../common/class/Store';
import * as Immutable from 'immutable';

@Service()
class CategoryStore extends Store {

    constructor(dispatcher: Dispatcher) {
        super(dispatcher);

        this.state = Immutable.List();
    }

    /**
     * Action handlers
     */

    @ActionHandler(CategoryActionCodes.init)
    init(data: any) {
        return Immutable.fromJS(data);
    }

    @ActionHandler(CategoryActionCodes.truncate)
    truncate() {
        return Immutable.List();
    }

    @ActionHandler(CategoryActionCodes.save)
    save(data: any) {
        let index: number = this.state.findIndex(item => item.get('id') === data.id);

        data = Immutable.fromJS(data);

        if (index >= 0) {
            return this.state.update(index, () => data);
        } else {
            return this.state.push(data);
        }
    }

    @ActionHandler(CategoryActionCodes.delete)
    delete(data: any) {
        let index: number = this.state.findIndex(item => item.get('id') === data.id);

        return this.state.delete(index);
    }
}

export {CategoryStore}
