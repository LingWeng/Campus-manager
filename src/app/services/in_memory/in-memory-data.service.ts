import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const floors = [{id: 1, height: 650, width: 1000}, {id: 2, height: 600, width: 1000}];
    const rooms =
      [{id: 1, name: 'A-101', type: 1, reservation: {start: new Date().toISOString(), duration: 3},
      capacity: 40, beamer: true, occupied: true, activity: 0,
      xPos: 0, yPos: 0, width : 150, height: 100, floor: 1, angle: 0},
        {id: 2, name: 'A-102', type: 2, reservation: null, capacity: 150, beamer: true,
          occupied: false, activity: 0,
          xPos: 152, yPos: 0, width: 200, height: 100, floor: 1, angle: 0},
        {id: 3, name: 'A-103', type: 3, reservation: null,
          capacity: 20, beamer: false, occupied: false, activity: 0,
          xPos: 354, yPos: 0, width: 250, height: 100, floor: 1, angle: 0},
        {id: 4, name: 'A-104', type: 4, reservation: null,
        capacity: 30, beamer: false, occupied: false, activity: 12,
        xPos: 606, yPos: 0, width: 200, height: 100, floor: 1, angle: 0},
        {id: 5, name: 'A-105', type: 5, reservation: null,
          capacity: 25, beamer: false, occupied: false, activity: 13,
          xPos: 808, yPos: 0, width: 188, height: 300, floor: 1, angle: 0},
        {id: 6, name: 'A-106', type: 6, reservation: null,
        capacity: 200, beamer: false, occupied: false, activity: 180,
        xPos: 808, yPos: 302, width: 188, height: 345, floor: 1, angle: 0},
        {id: 8, name: 'A-107', type: 2, reservation: null,
          capacity: 300, beamer: true, occupied: false, activity: 0,
          xPos: 300, yPos: 200, width : 250, height: 250 , floor: 1, angle: 0},

        {id: 21, name: 'A-201', type: 1, reservation: {start: new Date().toISOString(), duration: 3},
          capacity: 40, beamer: true, occupied: true, activity: 0,
          xPos: 0, yPos: 0, width : 150, height: 100, floor: 2, angle: 0},
        {id: 22, name: 'A-202', type: 1, reservation: null, capacity: 150, beamer: true,
          occupied: false, activity: 0,
          xPos: 152, yPos: 0, width: 200, height: 100, floor: 2, angle: 0},
        {id: 23, name: 'A-203', type: 1, reservation: null,
          capacity: 20, beamer: false, occupied: false, activity: 0,
          xPos: 354, yPos: 0, width: 250, height: 100, floor: 2, angle: 0},
        {id: 24, name: 'A-204', type: 3, reservation: null,
          capacity: 30, beamer: false, occupied: false, activity: 12,
          xPos: 606, yPos: 0, width: 200, height: 100, floor: 2, angle: 0},
        {id: 25, name: 'A-205', type: 2, reservation: null,
          capacity: 25, beamer: false, occupied: false, activity: 13,
          xPos: 808, yPos: 0, width: 188, height: 300, floor: 2, angle: 0},
        {id: 26, name: 'A-206', type: 2, reservation: null,
          capacity: 200, beamer: false, occupied: false, activity: 180,
          xPos: 0, yPos: 252, width: 188, height: 345, floor: 2, angle: 0},
        {id: 28, name: 'A-207', type: 5, reservation: null,
          capacity: 300, beamer: true, occupied: false, activity: 0,
          xPos: 300, yPos: 200, width : 250, height: 250 , floor: 2, angle: 45}
          ];
    return {floors, rooms};
  }
}
