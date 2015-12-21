import {Service, Inject} from 'angular-components';
import * as bson from 'bson';

@Service()
class Utils {

    static name: string = 'Utils';

    constructor() {
    }

    toast(message: string, action?: string) {
        console.log('Toast!!! ' + message);
    }

    id() {
        return bson.ObjectID();
    }
}

export {Utils};
