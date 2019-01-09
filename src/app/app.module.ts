import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './components/room/room.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FloorComponent } from './components/floor/floor.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in_memory/in-memory-data.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FloorContainerComponent} from './components/floor-container/floor-container.component';
import {CampusService} from './services/in_memory/campus.service';
import {NgIdleModule} from '@ng-idle/core';
import {BookingDialogComponent} from './components/booking-dialog/booking-dialog.component';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {KeysPipe, RoomDetailsComponent} from './components/room-details/room-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    SettingsComponent,
    FloorComponent,
    FloorContainerComponent,
    BookingDialogComponent,
    RoomDetailsComponent,
    [KeysPipe]
  ],
  exports: [KeysPipe],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    FormsModule,
    NgIdleModule.forRoot(),
    AppRoutingModule,
    ColorPickerModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    HttpClientModule,
  ],

  providers: [CampusService],
  bootstrap: [AppComponent],
  entryComponents: [BookingDialogComponent]
})
export class AppModule { }
