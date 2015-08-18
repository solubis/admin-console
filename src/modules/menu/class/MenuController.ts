/// <reference path="../../../typings/tsd.d.ts" />

/*@ngInject*/
class MenuController {

    private status;

    constructor(
        private $mdDialog: ngm.IDialogService,
        private $mdToast: ngm.IToastService,
        private $mdSidenav: ngm.ISidenavService) {
    }

    show(event) {
        let confirm = this.$mdDialog.confirm()
            .title('Would you like to delete your debt?')
            .content('All of the banks have agreed to forgive you your debts.')
            .ariaLabel('Lucky day')
            .ok('Please do it!')
            .cancel('Sounds like a scam')
            .targetEvent(event);

        this.$mdDialog
            .show(confirm)
            .then(() => {
                this.status = 'OK';
            })
            .catch(() => {
                this.status = 'Cancel';
            })
            .finally(() => {
                this.$mdToast.show(
                    this.$mdToast
                        .simple()
                        .content(this.status)
                        .hideDelay(3000)
                );
            })
    }

    toggleLeftSidebar() {
        this.$mdSidenav("sidebar").toggle();
    }
}

export default MenuController;
