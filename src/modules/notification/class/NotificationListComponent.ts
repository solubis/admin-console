import {Component} from 'angular-components';
import {Utils} from '../../../modules/common/class/Utils';

@Component({
    selector: 'notificationList',
    templateUrl: 'modules/notification/html/notification-list.html'
})
class NotificationListComponent {

    /* tslint:disable:no-unused-variable */
    /* tslint:enable */

    constructor(
        private utils: Utils) {
    }

    edit(item) {
        this.utils.toast(`Edit item: ${item.name}`);
    }
}
