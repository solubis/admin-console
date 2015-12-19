class View {
    storeMap;
    constructor(element: ng.IAugmentedJQuery) {
        let scope = element.scope(), injector = element.injector();
        let store, handler;

        for (let a in this.storeMap) {
            store = injector.get(a);
            handler = this.storeMap[a].bind(this);
            store.addChangeListener(handler);
            scope.$on('destroy', () => store.removeChangeListener(handler));
        }
    }
}

export {View}

