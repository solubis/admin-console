import {Directive, Inject} from 'angular-components';

class MenuDirectiveController {

    currentPage: any;
    currentSection: any;
    openedSection: any;

    constructor() {
    }

    toggleSelectSection(section) {
        this.openedSection = (this.openedSection === section ? null : section);
    }

    isSectionSelected(section) {
        return this.openedSection === section;
    }

    selectPage(section, page) {
        this.currentSection = section;
        this.currentPage = page;
    }

    isPageSelected(page) {
        return this.currentPage === page;
    }

    isSelected(page) {
        return this.isPageSelected(page);
    }

    isOpen(section) {
        return this.isSectionSelected(section);
    }

    toggleOpen(section) {
        this.toggleSelectSection(section);
    }
}

class MenuDirectivesContainer {

    @Directive('menu')
    menuDirective(): ng.IDirective {

        return {
            scope: {
                sections: '=menu'
            },
            templateUrl: 'modules/menu/html/menu.html',
            controller: MenuDirectiveController
        };
    }

    @Directive('menuLink')
    menuLinkDirective(): ng.IDirective {
        return {
            require: '^menu',
            scope: {
                page: '=',
                section: '=?'
            },
            templateUrl: 'modules/menu/html/menu-link.html',
            link: (scope: any, element, attrs, controller) => {
                scope.isSelected = () => {
                    return controller.isSelected(scope.page);
                };
            }
        };
    }

    @Directive('menuToggle')
    menuToggleDirective( @Inject('$timeout') $timeout): ng.IDirective {
        return {
            require: '^menu',
            scope: {
                section: '='
            },
            templateUrl: 'modules/menu/html/menu-toggle.html',
            link: (scope: any, element, attrs, controller) => {
                scope.isOpen = () => controller.isOpen(scope.section);
                scope.toggle = () => controller.toggleOpen(scope.section);

                scope.$watch(
                    () => controller.isOpen(scope.section),
                    (open) => {
                        let $ul = element.find('ul');
                        let targetHeight = open ? getTargetHeight() : 0;

                        $timeout(() => {
                            $ul.css({ height: targetHeight + 'px' });
                        }, 0, false);

                        function getTargetHeight() {
                            let targetHeight;

                            $ul.addClass('no-transition');
                            $ul.css('height', '');
                            targetHeight = $ul.prop('clientHeight');
                            $ul.css('height', 0);
                            $ul.removeClass('no-transition');

                            return targetHeight;
                        }
                    }
                );
            }
        };
    }
}

export {MenuDirectivesContainer};
