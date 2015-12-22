import {Service, Inject} from 'angular-components';
import {Utils} from '../../common/class/Utils';
import {CategoryActions} from './CategoryActions';

@Service()
export class CategoryDialog {

    private dialog: any;
    private options: any;

    constructor() {}

    show() {
        this.dialog.show(Object.assign({}, this.options));
    }
}

@Inject()
class CategoryDialogController {

    private item: any;
    private dialog: any;

    constructor(
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
