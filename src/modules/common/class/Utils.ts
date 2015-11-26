import {Service, Inject} from 'angular-components';
import ObjectId from 'objectid';

@Service({
    name: 'Utils'
})
@Inject('$mdToast')
class Utils {

    static name: string = 'Utils';

    constructor(private $mdToast: ng.material.IToastService) {
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
        return ObjectId();
    }

    getClone(object) {
        return Object.assign({ cid: this.id() }, object);
    }
}

export {Utils};
