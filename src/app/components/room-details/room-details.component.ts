import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Room} from '../../model/room';
import {ActivatedRoute} from '@angular/router';
import {CampusService} from '../../services/in_memory/campus.service';
import {Location} from '@angular/common';
import {Type} from '../../model/type';
import {Reservation} from '../../model/reservation';


@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];
    for (const enumMember in value) {
      const isValueProperty = parseInt(enumMember, 10) >= 0;
      if (isValueProperty) {
        keys.push({key: enumMember, value: value[enumMember]});
      }
  }
    return keys;
  }
}


@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})

export class RoomDetailsComponent implements OnInit {
  room: Room = {
    name: '', type: Type.study, reservation: new Reservation(new Date().toISOString(), 1),
    id: 0, occupied: false, activity: 0, capacity: 0, floor: 0,
    beamer: false, height: 0, width: 0, xPos: 0, yPos: 0, selected: false, angle: 0
  };
  submitted = false;
  types = Type;

  constructor(private route: ActivatedRoute, private campusService: CampusService, private location: Location) {
  }

  ngOnInit() {
    this.getRoom();
  }

  private getRoom() {
    const roomId = +this.route.snapshot.paramMap.get('id');
    this.campusService.getRoom(roomId).subscribe(room => this.room = room);
  }

  onSubmit() {
    if (this.room.type === Type.cafeteria || this.room.type === Type.study) {
      this.room.occupied = false;
      this.room.reservation = null;
    } else {
      this.room.activity = 0;
    }
    this.campusService.updateRoom(this.room).subscribe(data => console.log(data));
    this.submitted = true;
  }

  private back() {
    console.log(this.room.type);
    this.location.back();
  }

  getEnum(n: number) {
    console.log(n)
    switch (n) {
      case 1: return Type.class;
      case 2: return Type.audi;
      case 3: return Type.conf;
      case 4: return Type.office;
      case 5: return Type.study;
      case 6: return Type.cafeteria;
    }
}
}

