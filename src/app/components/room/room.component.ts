import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../model/room';
import {Type} from '../../model/type';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {BookingDialogComponent} from '../booking-dialog/booking-dialog.component';
import {interval} from 'rxjs/internal/observable/interval';
import {Settings} from '../settings/settings';
import {element} from 'protractor';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() room: Room;
  settings = Settings;
  counter;
  timer = 0;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.runTimer();
  }


  private roomStyle() {
    let styles;
    if (this.settings.planView === false) {
      styles = {
        'height': this.room.height + 'px',
        'width': this.room.width + 'px',
        'left': this.room.xPos + 'px',
        'top':  this.room.yPos + 'px',
        'background': this.getBgColorRoom(),
        'position': 'absolute',
        'border': 'solid 2px black',
        'transform': 'rotate(' + this.room.angle + 'deg)'
      } ;
      this.rotateElements();
    } else {
      styles = {
        'margin': '5px auto',
        'width': '95%',
        'height': '100px',
        'border': 'solid 1px black',
        'border-radius': '5px',
        'position': 'relative',
        'background': this.getBgColorRoom(),
      };
    }

    return styles;
  }

 getTypeIcon() {
    const folder = 'assets/images/';
    switch (+this.room.type) {
      case Type.class: return folder + 'class.png';
      case Type.audi: return folder + 'auditorium.png';
      case Type.conf: return folder + 'conference.png';
      case Type.cafeteria: return folder + 'cafeteria.png';
      case Type.office: return folder + 'office.png';
      case Type.study: return folder + 'study.png';
    }
  }


  private getBgColorRoom() {
    if (+this.room.type === Type.class || +this.room.type === Type.conf ||
      +this.room.type === Type.audi || +this.room.type === Type.office) {
      if (this.room.occupied) {
        return this.settings.occupiedColor;
      }
      return this.settings.freeColor;
    } else {
      const activity = this.room.activity / this.room.capacity;
      if ( activity < 0.25) {
        return this.settings.lowColor;
      } else if ( activity < 0.5) {
        return this.settings.mediumColor;
      } else if ( activity < 0.75) {
        return this.settings.mediumHighColor;
      } else {
        return this.settings.highColor;
      }
    }
  }


  private checkNotBookable() {
    return +this.room.type === Type.cafeteria || +this.room.type === Type.study;
  }
  private updateActivity(activity: number) {
    this.room.activity = activity;
  }

  private openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = this.room;

    this.dialog.open(BookingDialogComponent, dialogConfig);
  }

  private runTimer() {
    const secondsCounter = interval(1000 * 60);
    this.counter = secondsCounter.subscribe(() => this.checkTimePast());
  }


  private checkTimePast() {
    if (this.room.occupied) {
      this.timer += 60;
      if (this.timer > +this.room.reservation.duration * 3600) {
        this.room.occupied = false;
        this.room.reservation = null;
        this.timer = 0;
      }
    }
  }

  private rotateElements() {
    if (this.room.angle !== 0) {
      const children = document.getElementById('room' + this.room.id).children;
      for (let i = 0; i < children.length; i++) {
        const tableChild = children[i];
        const el = document.getElementById(tableChild.id);
        if (this.room.angle > 0) {
          el.style.transform = 'rotate(-' + this.room.angle + 'deg)';
        } else {
          el.style.transform = 'rotate(' + Math.abs(this.room.angle) + 'deg)';
        }

      }
    }
  }
}
