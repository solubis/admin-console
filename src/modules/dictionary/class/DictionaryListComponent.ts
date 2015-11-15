import {Component, Inject} from 'angular-components';
import {Utils} from '../../common/index';
import {Category} from './DictionaryComponent';

@Component({
    selector: 'dictionary-list',
    templateUrl: 'modules/dictionary/html/dictionary-list.html'
})
@Inject('Category', 'Utils', '$log', '$mdDialog')
class DictionaryListComponent {

    private data: Category[] = [];

    /* tslint:disable:no-unused-variable */

    private filter: any = {
        options: {
            debounce: 500
        }
    };

    private selected: any[] = [];

    private query: any = {
        filter: '',
        order: 'name',
        limit: 5,
        page: 1
    };

    private columns: any[] = [
        {
            name: 'Id',
            orderBy: 'id'
        }, {
            name: 'Name',
            orderBy: 'name'
        }, {
            name: 'Description'
        }];

    private onOrderChange = (order) => {
        this.utils.toast('Yeaaah! ' + order);
    };

    private onPageChange = (page, limit) => {
        this.utils.toast('Page! ' + page);
    };

    private onChange = () => {
        let data = this.Category.find();

        this.data = data;

        return data.$promise;
    };

    /* tslint:enable */

    constructor(
        private Category,
        private utils: Utils,
        private log: ng.ILogService,
        private dialog: ng.material.IDialogService) {

        this.data = Category.find();
    }

    edit(item) {
        let options: ng.material.IDialogOptions = {
            clickOutsideToClose: true,
            focusOnOpen: false,
            templateUrl: 'modules/dictionary/html/dictionary-dialog.html'
        };

        this.dialog.show(options).then(this.onChange);
    }
}
