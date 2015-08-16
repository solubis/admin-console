/// <reference path="../../../typings/tsd.d.ts" />

/*@ngInject*/
class MenuController {

    static $routeConfig = [{ path: '/test', components: { left: 'left', right: 'right' } }];

    private data;
    private show;
    private status;

    constructor($mdDialog: ngm.IDialogService, $mdToast) {

        this.data = 'Srala';

        this.show = (event) => {
            let confirm = $mdDialog.confirm()
                .title('Would you like to delete your debt?')
                .content('All of the banks have agreed to forgive you your debts.')
                .ariaLabel('Lucky day')
                .ok('Please do it!')
                .cancel('Sounds like a scam')
                .targetEvent(event);

            $mdDialog
                .show(confirm)
                .then(() => {
                    this.status = 'OK';
                })
                .catch(() => {
                    this.status = 'Cancel';
                })
                .finally(() => {
                    $mdToast.show(
                        $mdToast
                            .simple()
                            .content(this.status)
                            .hideDelay(3000)
                    );
                })

        };
    }
}

export default MenuController;
