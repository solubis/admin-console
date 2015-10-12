/*@ngInject*/
class MenuController {

    private openedSection: any;
    private toggleDisabled;

    private sections = [{
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

    private notifications = {
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
    };

    constructor(
        private $mdSidenav: angular.material.ISidenavService) {

    }

    toggleLeftSidebar() {
        this.toggleDisabled = true;
        this.$mdSidenav('sidebar').toggle().then((result) => this.toggleDisabled = false);
    }
}

export default MenuController;
