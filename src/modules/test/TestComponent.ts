import {Component, View, Service, Inject } from 'angular-components/dist/decorators';

@Component({
    name: 'testComponent'
})
@View({
    templateUrl: 'modules/test/test.html'
})
@Inject('myService')
class TestComponent {
    title: string;

    constructor(service) {
        this.title = service.title;
    }
}

@Service({
    name: 'myService'
})
class TestService {
    title: string;
    constructor() {
        this.title = 'WTF??!';
    }
}
