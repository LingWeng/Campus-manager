import { Component, OnInit } from '@angular/core';
import {CampusService} from '../../services/in_memory/campus.service';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {Floor} from '../../model/floor';
import {switchMap} from 'rxjs/operators';
import {Room} from '../../model/room';


@Component({
  selector: 'app-floor-container',
  templateUrl: './floor-container.component.html',
  styleUrls: ['./floor-container.component.css']
})
export class FloorContainerComponent implements OnInit {
  private floor: Floor = {id: 0, height: 300, width: 300};
  private rooms: Room[];

  constructor(private campusService: CampusService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.campusService.getFloor(+params.get('id'))))
      .subscribe(floor => this.floor = floor);

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.campusService.getRoomsByFloor(+params.get('id'))))
      .subscribe(rooms => this.rooms = rooms);
  }
}
