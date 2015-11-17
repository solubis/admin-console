import {Service, Inject} from 'angular-components';

@Service({
    name: 'Utils'
})
@Inject('$mdToast')
class Utils {

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

    @Inject('$log', '$rootScope', 'Utils')
    run($log, $rootScope, utils) {
        $rootScope.$on('$rest:error:communication', (event, error) => utils.toast(error.message));
        $rootScope.$on('$rest:error:request', (ebent, error) => utils.toast(error.message));
        $rootScope.$on('$rest:error:authorization', (event, error) => utils.toast(error.message));
    }
}

export {Utils};
