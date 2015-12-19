import {Service, Inject} from 'angular-components';
import {Utils} from '../../common/class/Utils';
import {CategoryActions} from './CategoryActions';

@Service()
export class CategoryDialog {

    private options: ng.material.IDialogOptions = {
        controller: CategoryDialogController,
        bindToController: true,
        controllerAs: 'ctrl',
        templateUrl: 'modules/category/html/category-dialog.html',
        focusOnOpen: false
    };

    constructor(
        @Inject('$mdDialog') private dialog: ng.material.IDialogService) { }

    show(options: ng.material.IDialogOptions) {
        this.dialog.show(Object.assign({}, options, this.options));
    }
}

@Inject()
class CategoryDialogController {

    private item: any;

    constructor(
        @Inject('$log') private log: ng.ILogService,
        @Inject('$mdDialog') private dialog: ng.material.IDialogService,
        private actions: CategoryActions,
        private utils: Utils) {
    }

    close() {
        this.dialog.cancel();
    }

    save() {
        this.actions
            .save(this.item)
            .then(() => this.close());
    }
}
