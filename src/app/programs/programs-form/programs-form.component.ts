import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs-form',
  templateUrl: './programs-form.component.html',
  styleUrls: ['./programs-form.component.scss'],
})
export class ProgramsFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {}


  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
}
