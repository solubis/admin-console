import {Component, Inject} from 'angular-components';

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
        @Inject('$log') private log: ng.ILogService) {
    }

}
