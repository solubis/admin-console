import {Service, Inject} from 'angular-components';

@Service({
    name: 'Utils'
})
@Inject('$mdToast')
class Utils {

    constructor(private $mdToast: ng.material.IToastService) {
    }

    toast(message: string) {
        this.$mdToast.showSimple(message);
    }

    @Inject('$log', '$rootScope', 'Utils')
    run($log, $rootScope, utils) {
        $rootScope.$on('$rest:error:communication', (event, error) => utils.toast(error.message));
        $rootScope.$on('$rest:error:request', (ebent, error) => utils.toast(error.message));
        $rootScope.$on('$rest:error:authorization', (event, error) => utils.toast(error.message));
    }
}

export {Utils};
