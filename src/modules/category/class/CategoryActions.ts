import {Inject, Service} from 'angular-components';
import {Dispatcher} from '../../common/class/Dispatcher';

export enum CategoryActionTypes {
    Init = 1,
    Create,
    Update,
    Delete,
    Truncate
}

@Service()
export class CategoryActions {

    constructor(
        private dispatcher: Dispatcher,
        @Inject('Category') private Category) {

        this.init();
    }

    init() {
        this.Category.find().$promise.then((result) => {
            this.dispatcher.dispatch({
                actionType: CategoryActionTypes.Init,
                data: result
            });
        });
    }

    update(data): void {
        this.Category.upsert(data).$promise
            .then(result => {
                this.dispatcher.dispatch({
                    actionType: CategoryActionTypes.Update,
                    data: result
                });
            });
    }

    create(data): void {
        this.Category.create(data).$promise
            .then((result) => {
                this.dispatcher.dispatch({
                    actionType: CategoryActionTypes.Create,
                    data: result
                });
            });
    }

    delete(id): void {
        this.Category.deleteById(id).$promise.then((result) => {
            this.dispatcher.dispatch({
                actionType: CategoryActionTypes.Delete,
                id: id
            });
        });
    }

    truncate(): void {
        this.Category.truncate().$promise.then((result) => {
            this.dispatcher.dispatch({
                actionType: CategoryActionTypes.Truncate
            });
        });
    }
}
