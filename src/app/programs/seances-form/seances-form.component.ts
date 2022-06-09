import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-seances-form',
  templateUrl: './seances-form.component.html',
  styleUrls: ['./seances-form.component.scss'],
})

export class SeancesFormComponent implements OnInit {

  constructor() { }


  public customFormatter(value: number) {
    return `${value}%`;
  }

  ngOnInit() {}

  
}
