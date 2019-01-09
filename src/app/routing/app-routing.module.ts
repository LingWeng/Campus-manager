import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FloorContainerComponent} from '../components/floor-container/floor-container.component';
import {RoomDetailsComponent} from '../components/room-details/room-details.component';

const routes: Routes = [
  {path: 'floor/:id', component: FloorContainerComponent},
  {path: '', redirectTo: '/floor/1', pathMatch: 'full' },
  {path: 'room/:id', component: RoomDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
