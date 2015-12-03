import {Component, Inject} from 'angular-components';
import {CategoryStore} from './CategoryStore';

export interface Category {
    id: string;
    name: string;
    description: string;
}

@Component({
    selector: 'category',
    templateUrl: 'modules/category/html/category.html'
})
class CategoryComponent {

    constructor(
        @Inject('$log') private log: ng.ILogService,
        private store: CategoryStore) {
    }

    undo() {
        this.store.undo();
    }

    redo() {
        this.store.redo();
    }

}
