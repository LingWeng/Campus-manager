import {Type} from './type';
import {Reservation} from './reservation';

export class Room {
  id: number;
  name: String;
  type: Type;
  reservation: Reservation;
  capacity: number;
  beamer: boolean;
  occupied: boolean;
  activity: number;
  xPos: number;
  yPos: number;
  width: number;
  height: number;
  floor: number;
  selected: boolean;
  angle: number;

  constructor(id: number, name: String,
            type: Type, reservation: Reservation,
            capacity: number, beamer: boolean,
            occupied: boolean, activity: number,
            xPos: number, yPos: number,
            width: number, height: number, floor: number, angle: number) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.reservation = reservation;
    this.capacity = capacity;
    this.beamer = beamer;
    this.occupied = occupied;
    this.activity = activity;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.floor = floor;
    this.selected = false;
    this.angle = angle;
  }

}

