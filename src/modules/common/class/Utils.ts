import {Service, Inject} from 'angular-components';
import * as bson from 'bson';

@Service()
class Utils {

    static name: string = 'Utils';

    constructor(
        @Inject('$mdToast') private $mdToast: ng.material.IToastService) {
    }

    toast(message: string, action?: string) {
        let config: ng.material.ISimpleToastPreset = this.$mdToast.simple();

        config
            .hideDelay(1000)
            .content(message)
            .capsule(false);

        if (action) {
            config.action(action);
        }

        this.$mdToast.show(config);
    }

    id() {
        return bson.ObjectID();
    }
}

export {Utils};
