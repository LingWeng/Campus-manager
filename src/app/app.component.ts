import { Component } from '@angular/core';
import {Floor} from './model/floor';
import {CampusService} from './services/in_memory/campus.service';
import {Settings} from './components/settings/settings';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'campus-management';
  settingsOn = true;
  floors: Floor[];
  settings = Settings;

  constructor(private campusService: CampusService) {
    this.campusService.getFloors().subscribe(floors => this.floors = floors);
  }

  showSettings() {
    const element = document.getElementById('settings');
    if (!this.settingsOn) {
      element.style.display = 'block';
      element.style.zIndex = '300';
      element.style.position = 'relative';
      this.settingsOn = true;
  } else {
      element.style.display = 'none';
      element.style.zIndex = '0';
      element.style.position = 'static';
      this.settingsOn = false;
    }
  }

  onResize(event) {
    const width = event.target.innerWidth;
    const element = document.getElementById('settings');
    if (width > 1259 && !this.settingsOn) {
      element.style.display = 'block';
      this.settingsOn = true;
    } else if ( width < 1259 && this.settingsOn ) {
      element.style.display = 'none';
      element.style.zIndex = '0';
      element.style.position = 'static';
      this.settingsOn = false;
      this.settings.planView = true;
    }
  }
}
