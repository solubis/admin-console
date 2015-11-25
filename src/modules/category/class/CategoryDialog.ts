import {Service, Inject} from 'angular-components';
import {Utils} from '../../common/index';
import {CategoryActions} from './CategoryActions';
import {CategoryStore} from './CategoryStore';

@Service({
    name: 'CategoryDialog'
})
@Inject('$log', '$mdDialog', CategoryStore.name, CategoryActions.name, Utils.name)
export class CategoryDialog {

    static name: string;
    private item: any;

    private options: ng.material.IDialogOptions = {
        controller: CategoryDialog,
        bindToController: true,
        controllerAs: 'ctrl',
        templateUrl: 'modules/category/html/category-dialog.html',
        focusOnOpen: false
    };

    constructor(
        private log: ng.ILogService,
        private dialog: ng.material.IDialogService,
        private store: CategoryStore,
        private actions: CategoryActions,
        private utils: Utils) {

        store.addChangeListener(this.onChange)
    }

    onChange = () => {
        this.close();
    };

    show(options: ng.material.IDialogOptions) {
        this.dialog.show(Object.assign({}, options, this.options));
    }

    close() {
        this.dialog.cancel();
    }

    save() {
        if (this.item) {
             this.actions.update(this.item);
        }
    }
}