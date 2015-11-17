import {Service, Inject, RestService} from 'angular-components';

@Service({
    name: 'NotificationService'
})
@Inject('$rest')
class NotificationService {
    constructor(private $rest: RestService) {
    }

    getAll() {
        return this.$rest.get('notifications');
    }
}

export {NotificationService};
