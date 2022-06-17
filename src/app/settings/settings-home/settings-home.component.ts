import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.scss'],
})
export class SettingsHomeComponent implements OnInit {
  
  time: number = 5;

  constructor() { }

  ngOnInit() {
    setInterval(() => { 
      if (this.time > 0) 
        this.time--; 
      }, 
    1000);
  }
  
}



