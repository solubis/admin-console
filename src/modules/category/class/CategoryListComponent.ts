import {Component, Inject} from 'angular-components';
import {Utils} from '../../common/index';
import {Category} from './CategoryComponent';
import {CategoryDialog} from './CategoryDialog';
import {CategoryStore} from './CategoryStore';
import {CategoryActions} from './CategoryActions';

@Component({
    selector: 'category-list',
    templateUrl: 'modules/category/html/category-list.html'
})
@Inject('$log', Utils.name, CategoryStore.name, CategoryDialog.name, CategoryActions.name)
class CategoryListComponent {

    data: any = [];

    columns: any[] = [
        {
            name: 'Name',
            orderBy: 'name'
        }, {
            name: 'Description'
        }];

    filter: any = {
        options: {
            debounce: 500
        }
    };

    selected: Category[] = [];

    query: any = {
        filter: '',
        order: 'name',
        limit: 5,
        page: 1
    };

    onOrderChange = (order) => {
        this.utils.toast('Yeaaah! ' + order);
    };

    onPageChange = (page, limit) => {
        this.utils.toast('Page! ' + page);
    };

    onChange = () => {
        this.data = this.store.getAll();
    };

    constructor(
        private log: ng.ILogService,
        private utils: Utils,
        private store: CategoryStore,
        private dialog: CategoryDialog,
        private actions: CategoryActions) {

        this.store.addChangeListener(this.onChange);
    }

    edit(item) {
        let options: ng.material.IDialogOptions = {
            locals: {
                item: this.utils.getClone(item)
            }
        };

        this.dialog.show(options);
    }

    delete() {
        if (this.store.count() === this.selected.length) {
            this.actions.truncate();
        } else {
            this.selected.forEach(item => {
                this.actions.delete(item.id);
            })
        }
    }

}
