import { Component, OnInit } from '@angular/core';
import { Settings } from './settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  mySettings = Settings;
  defaultLowColor = Settings.lowColor;
  defaultMediumColor = Settings.mediumColor;
  defaultMedHighColor = Settings.mediumHighColor;
  defaultHighColor = Settings.highColor;
  defaultOccupColor = Settings.occupiedColor;
  defaultShowBeamer = Settings.showBeamer;
  defaultShowCap = Settings.showCapacity;
  defaultView = Settings.planView;
  defaultShowName = Settings.showName;
  defaultShowType = Settings.showType;
  defaultFreeColor = Settings.freeColor;

  constructor() { }

  ngOnInit() {
  }

  resetSettings() {
    Settings.lowColor = this.defaultLowColor;
    Settings.mediumColor = this.defaultMediumColor;
    Settings.highColor = this.defaultHighColor;
    Settings.occupiedColor = this.defaultOccupColor;
    Settings.mediumHighColor = this.defaultMedHighColor;
    Settings.showCapacity = this.defaultShowCap;
    Settings.showBeamer = this.defaultShowBeamer;
    Settings.planView = this.defaultView;
    Settings.showName = this.defaultShowName;
    Settings.showType = this.defaultShowType;
    Settings.freeColor = this.defaultFreeColor;
  }
}
