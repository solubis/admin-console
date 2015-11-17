import {Component, Inject} from 'angular-components';
import {Utils} from '../../common/index';
import {Category} from './DictionaryComponent';

@Component({
    selector: 'dictionary-list',
    templateUrl: 'modules/dictionary/html/dictionary-list.html'
})
@Inject('Category', 'Utils', '$log', '$mdDialog')
class DictionaryListComponent {

    data: Category[] = [];

    columns: any[] = [
        {
            name: 'Id',
            orderBy: 'id'
        }, {
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

    selected: any[] = [];

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
        let data = this.Category.find();

        this.data = data;

        return data.$promise;
    };

    constructor(private Category,
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
