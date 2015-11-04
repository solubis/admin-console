import {Component, Inject} from 'angular-components';
import * as common from '../../common/index';
import {Category} from './DictionaryComponent';

@Component({
    selector: 'dictionaryList',
    templateUrl: 'modules/dictionary/html/dictionary-list.html'
})
@Inject('Category', 'Utils', '$log')
class DictionaryListComponent {

    private data: Category[] = [];

    /* tslint:disable:no-unused-variable */

    private selected: any[] = [];

    private query: any = {
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

    /* tslint:enable */

    constructor(
        private Category,
        private utils: common.Utils,
        private log: ng.ILogService) {

        this.data = Category.find();
    }

    edit(item) {
        this.utils.toast(`Edit item: ${item.name}`);
    }
}
