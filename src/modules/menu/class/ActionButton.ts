import {Component} from 'angular-components';

@Component({
    template: `
    <md-fab-speed-dial md-open="ctrl.isOpen" md-direction="down" class="md-fling md-fab-top-right">
        <md-fab-trigger>
          <md-button class="md-fab md-warn">
            <md-icon md-font-icon="material-icons">menu</md-icon>
          </md-button>
        </md-fab-trigger>
        <md-fab-actions>
          <md-button class="md-fab md-raised md-mini">
            <md-icon md-font-icon="material-icons">camera</md-icon>
          </md-button>
          <md-button class="md-fab md-raised md-mini">
            <md-icon md-font-icon="material-icons">brush</md-icon>
          </md-button>
          <md-button class="md-fab md-raised md-mini">
            <md-icon md-font-icon="material-icons">sync</md-icon>
          </md-button>
        </md-fab-actions>
      </md-fab-speed-dial>`,

    selector: 'speed-dial'
})
class ActionButton {
    isOpen = false;
    constructor() {
        this.isOpen = false;
    }
}