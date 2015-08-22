/// <reference path="../../../typings/tsd.d.ts" />

/*@ngInject*/
class MenuController {

    private notifications: { count: number; items: { date: string; title: string; text: string; icon: string; type: string; id: number; }[]; };
    private currentPage: any;
    private currentSection: any;
    private openedSection: any;
    private status;
    private toggleDisabled;
    private sections;

    constructor(
        private $mdDialog: ngm.IDialogService,
        private $mdToast: ngm.IToastService,
        private $mdSidenav: ngm.ISidenavService) {

        this.sections = [{
            name: 'Customization',
            type: 'heading',
            children: [
                {
                    name: 'CSS',
                    type: 'toggle',
                    icon: 'home',
                    pages: [{
                        name: 'Typography',
                        url: '/CSS/typography',
                        type: 'link'
                    },
                        {
                            name: 'Button',
                            url: '/CSS/button',
                            type: 'link'
                        },
                        {
                            name: 'Checkbox',
                            url: '/CSS/checkbox',
                            type: 'link'
                        }]
                },
                {
                    name: 'Theming',
                    type: 'toggle',
                    icon: 'favorite_border',
                    pages: [
                        {
                            name: 'Configuring a Theme',
                            url: '/Theming/03_configuring_a_theme',
                            type: 'link'
                        },
                        {
                            name: 'Multiple Themes',
                            url: '/Theming/04_multiple_themes',
                            type: 'link'
                        }
                    ]
                }
            ]
        }];

        this.notifications = {
            count: 13,
            items: [
                { date: '12.05.2015 13:43', title: 'Title for notifications quite long so should be ellipsed', text: 'Text for notifications quite long so should be ellipsed', icon: 'alarm', type: 'warning', id: 1 },
                { date: '12.05.2015 13:43', title: 'Title for notifications', text: 'Text for notifications', icon: 'notifications_none', type: 'info', id: 2 },
                { date: '12.05.2015 13:43', title: 'Title for notifications', text: 'Text for notifications', icon: 'error_outline', type: 'error', id: 3 },
                { date: '12.05.2015 13:43', title: 'Title for notifications quite long so should be ellipsed', text: 'Text for notifications quite long so should be ellipsed', icon: 'alarm', type: 'warning', id: 1 },
                { date: '12.05.2015 13:43', title: 'Title for notifications', text: 'Text for notifications', icon: 'notifications_none', type: 'info', id: 2 },
                { date: '12.05.2015 13:43', title: 'Title for notifications', text: 'Text for notifications', icon: 'error_outline', type: 'error', id: 3 },
                { date: '12.05.2015 13:43', title: 'Title for notifications quite long so should be ellipsed', text: 'Text for notifications quite long so should be ellipsed', icon: 'alarm', type: 'warning', id: 1 },
                { date: '12.05.2015 13:43', title: 'Title for notifications', text: 'Text for notifications', icon: 'notifications_none', type: 'info', id: 2 },
                { date: '12.05.2015 13:43', title: 'Title for notifications', text: 'Text for notifications', icon: 'error_outline', type: 'error', id: 3 },
                { date: '12.05.2015 13:43', title: 'Title for notifications quite long so should be ellipsed', text: 'Text for notifications quite long so should be ellipsed', icon: 'alarm', type: 'warning', id: 1 },
                { date: '12.05.2015 13:43', title: 'Title for notifications', text: 'Text for notifications', icon: 'notifications_none', type: 'info', id: 2 },
                { date: '12.05.2015 13:43', title: 'Title for notifications', text: 'Text for notifications', icon: 'error_outline', type: 'error', id: 3 },
            ]
        }
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
        this.toggleDisabled = true;
        this.$mdSidenav("sidebar").toggle().then((result) => this.toggleDisabled = false);
    }
}

export default MenuController;
