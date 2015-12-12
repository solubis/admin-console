import {Service} from 'angular-components';
import {Dispatcher} from '../../common/class/Dispatcher';
import {CategoryService} from './CategoryService';

export enum CategoryActionTypes {
    Init = 1,
    Save,
    Delete,
    Truncate
}

@Service()
export class CategoryActions {

    constructor(
        private dispatcher: Dispatcher,
        private service: CategoryService) {

        this.init();
    }

    init(): Promise<void> {
        return this.service.find()
            .then((result) => {
                this.dispatcher.dispatch({
                    actionType: CategoryActionTypes.Init,
                    data: result
                });
            });
    }

    save(data): Promise<void> {
        if (data.id) {
            return this.service.upsert(data)
                .then(result => {
                    this.dispatcher.dispatch({
                        actionType: CategoryActionTypes.Save,
                        data: result
                    });
                });
        } else {
            return this.service.create(data)
                .then((result) => {
                    this.dispatcher.dispatch({
                        actionType: CategoryActionTypes.Save,
                        data: result
                    });
                });
        }
    }

    delete(id): Promise<void> {
        return this.service.remove(id)
            .then((result) => {
                this.dispatcher.dispatch({
                    actionType: CategoryActionTypes.Delete,
                    data: {
                        id: id
                    }
                });
            });
    }

    truncate(): Promise<void> {
        return this.service.truncate()
            .then((result) => {
                this.dispatcher.dispatch({
                    actionType: CategoryActionTypes.Truncate
                });
            });
    }
}
