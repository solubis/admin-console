import {Dispatcher} from '../../common/class/Dispatcher';
import {EventEmitter} from 'events';
import * as Immutable from 'immutable';

class Store extends EventEmitter {

    static state: Immutable.Map<string, any> = Immutable.Map({});
    static history: Immutable.Map<string, any>[] = [Store.state];
    static historyIndex = 0;

    dispatcherToken = this.dispatcher.register((action) => {

        let handler = this.handlers[action.actionType];

        if (handler) {
            handler.bind(this)(action);

            this.emitChange(Store.state);
        }

        return true;
    });

    private handlers: any = {};
    private handlersMap: any;

    constructor(private dispatcher: Dispatcher) {
        super();

        for (let a in this.handlersMap) {
            this.registerHandler(Number(a), this.handlersMap[a].bind(this));
        }
    }

    getState(): Immutable.Map<string, any> {
        return Store.state;
    }

    setState(name: string, object: any): Immutable.Map<string, any> {
        Store.state = Store.state.set(name, object);

        Store.history.push(Store.state);

        Store.historyIndex++;

        console.log(Store.history);

        return Store.state;
    }

    undo() {
        Store.historyIndex--;
        this.restoreHistoryState();
    }

    redo() {
        Store.historyIndex++;
        this.restoreHistoryState();
    }

    restoreHistoryState() {
        Store.state = Store.history[Store.historyIndex];
        this.emitChange();
    }

    emitChange(data?) {
        this.emit('CHANGE', data);
    }

    registerHandler(actionType: number, handler: Function) {
        this.handlers[actionType] = handler;
    }

    addChangeListener(callback: Function): Function {
        this.addListener('CHANGE', callback);

        return () => {
            this.removeListener('CHANGE', callback);
        };
    }

    removeChangeListener(callback: Function): void {
        this.removeListener('CHANGE', callback);
    }

}

export {Store, EventEmitter, Immutable}
