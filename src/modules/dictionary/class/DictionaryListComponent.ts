import {Component, Inject} from 'angular-components';
import {DictionaryService} from './DictionaryService';
import {Utils} from '../../../modules/ui/class/Utils';

interface Category {
    id: string;
    name: string;
    description: string;
}

@Component({
    selector: 'dictionaryList',
    templateUrl: 'modules/dictionary/html/dictionary.html'
})
@Inject('DictionaryService', 'Utils', '$log')
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
    private onOrderChange = () => {
        this.utils.toast('Yeaaah!');
    };
    /* tslint:enable */

    constructor(
        private service: DictionaryService,
        private utils: Utils,
        private log: ng.ILogService) {

        service.getAll()
            .then((data) => {
                this.data = data;
            });
    }

    edit(item) {
        this.utils.toast(item.description);
    }
}
