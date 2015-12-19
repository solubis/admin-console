import {Dispatcher} from '../../common/class/Dispatcher';
import {EventEmitter} from 'events';
import {Map} from 'immutable';

const CHANGE_EVENT = 'CHANGE';

class Store extends EventEmitter {

    static state: Map<string, any> = Map({});
    static history: Map<string, any>[] = [Store.state];
    static historyIndex = 0;

    public name: string;

    private handlers: any = {};
    private handlersMap: any;

    constructor(private dispatcher: Dispatcher) {
        super();

        this.dispatcher.register((action) => {

            let handler = this.handlers[action.actionType];

            if (handler) {
                let changedState = handler.bind(this)(action.data, this.state);

                if (changedState) {
                    this.state = changedState;
                }

                this.emitChange();
            }

            return true;
        });

        for (let a in this.handlersMap) {
            this.registerHandler(a, this.handlersMap[a].bind(this));
        }
    }

    /**
    * Public getters
    */

    getAll() {
        return this.state.toJS();
    }

    getById(id: string) {
        let record = this.state.find(item => item.get('id') === id);

        return record ? record.toJS() : undefined;
    }

    count() {
        return this.state.count();
    }

    get state(): any {
        return Store.state.get(this.name);
    }

    set state(object: any) {
        Store.state = Store.state.set(this.name, object);

        Store.history.push(Store.state);

        Store.historyIndex++;
    }

    undo() {
        if (Store.historyIndex > 0) {
            Store.historyIndex--;
            this.restoreHistoryState();
        }
    }

    redo() {
        if (Store.historyIndex < Store.history.length - 1) {
            Store.historyIndex++;
            this.restoreHistoryState();
        }

    }

    restoreHistoryState() {
        Store.state = Store.history[Store.historyIndex];
        this.emitChange();
    }

    emitChange() {
        this.emit(CHANGE_EVENT, this);
    }

    registerHandler(actionType: string, handler: Function) {
        this.handlers[actionType] = handler;
    }

    addChangeListener(callback: Function): Function {
        this.addListener(CHANGE_EVENT, callback);

        return () => {
            this.removeListener(CHANGE_EVENT, callback);
        };
    }

    removeChangeListener(callback: Function): void {
        this.removeListener(CHANGE_EVENT, callback);
    }

}

export {Store, EventEmitter, Dispatcher}
