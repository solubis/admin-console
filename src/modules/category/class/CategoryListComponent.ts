import {Component, Inject, StoreListener} from 'angular-components';
import {Utils, View} from '../../common/index';
import {Category} from './CategoryComponent';
import {CategoryDialog} from './CategoryDialog';
import {CategoryStore} from './CategoryStore';
import {ErrorStore} from '../../server/class/ErrorStore';
import {CategoryActions} from './CategoryActions';

@Component({
    selector: 'category-list',
    templateUrl: 'modules/category/html/category-list.html'
})
class CategoryListComponent extends View {

    data: any = [];
    count: number;
    columns: any[] = [{ name: 'Name', orderBy: 'name' }, { name: 'Description' }];
    filter: any = { options: { debounce: 500 } };
    selected: Category[] = [];
    query: any = { filter: '', order: 'name', limit: 5, page: 1 };

    onOrderChange = (order) => {
        this.utils.toast('Yeaaah! ' + order);
    };

    onPageChange = (page, limit) => {
        this.utils.toast('Page! ' + page);
    };

    constructor(
        @Inject('$element') element,

        private utils: Utils,
        private dialog: CategoryDialog,
        private actions: CategoryActions) {

        super(element);
    }

    @StoreListener()
    onError(store: ErrorStore) {
        console.log('Store Change', store.name);
        console.warn(store.state.last().message);
    };

    @StoreListener()
    onCategoryStoreChange(store: CategoryStore) {
        console.log('Store Change', store.name);

        this.data = store.getAll();
        this.count = store.count();
    }

    edit(item) {
        let options: ng.material.IDialogOptions = {
            locals: {
                item: item
            }
        };

        this.dialog.show(options);
    }

    delete() {
        if (this.count === this.selected.length) {
            this.actions.truncate();
        } else {
            this.selected.forEach(item => {
                this.actions.delete(item.id);
            });
        }
    }

}
