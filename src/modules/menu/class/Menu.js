export let sections = [{
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
