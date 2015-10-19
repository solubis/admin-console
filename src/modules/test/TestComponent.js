import {Component, Inject, View, Service}from 'angular-components/src/decorators';

@Component({
    name: 'testComponent'
})
@View({
    template: `
    <md-card>
        <md-card-header layout="row">
            <h2 flex>{{ctrl.title}}
                <small>Curved edges made possible using curvedLines Flot plugin.</small>
            </h2>
        </md-card-header>

        <md-card-content>
            <h2 class="md-title">Paracosm</h2>
            <p>
                The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...
            </p>
        </md-card-content>
    </md-card>
    `
})
@Inject('myService')
export class TestComponent {
    constructor(service) {
        this.title = service.title;
    }
}

@Service({
    name: 'myService'
})
export class TestService {
    constructor() {
        this.title = 'WTF??!';
    }
}
