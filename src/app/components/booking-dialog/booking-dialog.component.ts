import {Component, OnInit, ViewChild} from '@angular/core';
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Room} from '../../model/room';
import {Reservation} from '../../model/reservation';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.css']
})
export class BookingDialogComponent implements OnInit {
  room: Room;
  date: Date;


  constructor(@Inject(MAT_DIALOG_DATA)public data: any ) { }

  ngOnInit() {
    this.room = this.data;
    this.date = new Date();
  }

  makeBooking() {
    // @ts-ignore
    const duration = document.getElementById('duration').value;
    this.room.reservation = new Reservation(new Date().toISOString(), duration);
    this.room.occupied = true;
  }

}
