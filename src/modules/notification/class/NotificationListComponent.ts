import {Component, Inject} from 'angular-components';
import {Utils} from '../../../modules/common/class/Utils';

@Component({
    selector: 'notificationList',
    templateUrl: 'modules/notification/html/notification-list.html'
})
class NotificationListComponent {
    private data: any;

    /* tslint:disable:no-unused-variable */
    /* tslint:enable */

    constructor(
        @Inject('Notification') private Notification,
        private utils: Utils) {

        this.data = Notification.find();
    }

    edit(item) {
        this.utils.toast(`Edit item: ${item.name}`);
    }
}
