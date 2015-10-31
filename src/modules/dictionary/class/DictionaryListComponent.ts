import {Component, Inject} from 'angular-components';
import {DictionaryService} from './DictionaryService';

interface Category {
    id: string;
    name: string;
    description: string;
}

@Component({
    selector: 'dictionaryList',
    templateUrl: 'modules/dictionary/html/dictionary.html'
})
@Inject('dictionaryService')
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
            orderBy: 'id',
            unit: '(identity)'
        }, {
            descendFirst: true,
            name: 'Name',
            orderBy: 'name'
        }, {
            name: 'Description'
        }];
    /* tslint:enable */

    constructor(private service: DictionaryService) {
        service.getAll()
            .then((data) => {
                this.data = data;
            });

    }

    onOrderChange() {

    }
}
