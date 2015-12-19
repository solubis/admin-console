import {Dispatcher} from '../../common/class/Dispatcher';

class Actions {

    className;
    dispatcher: Dispatcher;

    constructor(private injector) {
        let methodNames = this.getActionMethodNames();

        this.dispatcher = injector.get('Dispatcher');
        this.className = this['name'];

        for (let i = 0; i < methodNames.length; i++) {
            const methodName = methodNames[i];
            this.wrapAction(methodName);
        }
    }

    isPromise(value) {
        return value && typeof value.then === 'function';
    }

    getActionMethodNames() {
        return Object.getOwnPropertyNames(this.constructor.prototype)
            .filter(name =>
                name !== 'constructor' &&
                typeof this[name] === 'function'
            );
    }

    createActionId(methodName) {
        return `${this.className}:${methodName}`;
    }


    wrapAction(methodName) {
        const originalMethod = this[methodName];
        const actionId = this.createActionId(methodName);

        const action = (...args) => {
            let result = originalMethod.apply(this, args);

            if (this.isPromise(result)) {
                result.then((result) => {
                    console.log(`Promise for ${actionId} with result: ${JSON.stringify(result)}`);

                    this.dispatcher.dispatch({
                        actionType: actionId,
                        data: result
                    });
                });
            } else {
                console.log(`${actionId} with result: ${result}`);

                this.dispatcher.dispatch({
                    actionType: actionId,
                    data: result
                });
            }

            return result;
        };

        (<any>action).$id = actionId;

        this[methodName] = action;
    }
}

export {Actions}
