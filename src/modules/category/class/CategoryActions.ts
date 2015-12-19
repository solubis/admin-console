import {Service, Inject} from 'angular-components';
import {Actions} from '../../common/class/Actions';
import {CategoryService} from './CategoryService';

export var CategoryActionCodes = {
    init: 'CategoryActions:init',
    save: 'CategoryActions:save',
    delete: 'CategoryActions:delete',
    truncate: 'CategoryActions:truncate'
};

@Service()
export class CategoryActions extends Actions {

    constructor(
        @Inject('$injector') injector,
        private service: CategoryService) {

        super(injector);

        this.init();
    }

    init(): Promise<any> {
        return this.service.find();
    }

    save(data): Promise<any> {
        if (data && data.id) {
            return this.service.upsert(data);
        } else {
            return this.service.create(data);
        }
    }

    delete(id): Promise<any> {
        return this.service.remove(id);
    }

    truncate(): Promise<any> {
        return this.service.truncate();
    }
};
