import {Component, Input} from '@angular/core';
import {Floor} from '../../model/floor';
import {Room} from '../../model/room';
import {DEFAULT_INTERRUPTSOURCES, Idle} from '@ng-idle/core';
import {Settings} from '../settings/settings';


@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent {
  @Input() public floor: Floor = {id: 0, width: 0, height: 0};
  @Input() public rooms: Room[] = [];
  settings = Settings;

  constructor(private idle: Idle) {
    idle.setIdle(5);
    idle.setTimeout(60);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    // idle.onIdleEnd.subscribe(() => console.log( 'No longer idle.'));
    idle.onTimeout.subscribe(() => this.clearSelected());
    // idle.onIdleStart.subscribe(() => console.log('You\'ve gone idle!'));
    // idle.onTimeoutWarning.subscribe((countdown) => console.log('You will time out in ' + countdown + ' seconds!'));

  }

  floorStyle() {
    let styles;
    if (this.settings.planView === false) {
      styles = {
        'height': this.floor.height + 'px',
        'width': this.floor.width  + 'px',
      };
    } else {
        styles = {
          'width': '95%',
          'display': 'flex',
          'flex-direction': 'column',
          'flex-wrap': 'nowrap',
          'padding': '10px 0px',
          'align-content': 'center'
        };
      }
    return styles;
  }
  setSelected(room: Room) {
    this.clearSelected();
    room.selected = true;
    this.idle.watch();
  }

  clearSelected() {
    for (const r of this.rooms) {
      r.selected = false;
    }
  }
}
