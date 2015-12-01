import {Service, Inject} from 'angular-components';
import {Utils} from '../../common/index';
import {CategoryActions} from './CategoryActions';
import {CategoryStore} from './CategoryStore';
import {ErrorStore} from '../../server/class/ErrorStore';

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
        private store: CategoryStore,
        private actions: CategoryActions,
        private errors: ErrorStore,
        private utils: Utils) {

        store.addChangeListener(this.onChange);
        errors.addChangeListener(this.onError);
    }

    onChange = (id) => {
        let cid: string;
        let record;

        if (id) {
            record = this.store.getOne(id);
            if (record.cid === this.item.cid) {
                this.close();
            }
        }
    };

    onError = (error) => {
        this.log.warn('Error From Dialog ========', error.message);
    }

    close() {
        this.dialog.cancel();
    }

    save() {
        if (this.item.id) {
            this.actions.update(this.item);
        } else {
            this.actions.create(this.item);
        }
    }

}