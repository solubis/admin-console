import {Component, Inject} from 'angular-components';

export interface Category {
    id: string;
    name: string;
    description: string;
}

@Component({
    selector: 'dictionary',
    templateUrl: 'modules/dictionary/html/dictionary.html'
})
@Inject('$log')
class DictionaryComponent {

    constructor(
        private log: ng.ILogService) {
    }

}
