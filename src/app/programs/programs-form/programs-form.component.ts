import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-programs-form',
  templateUrl: './programs-form.component.html',
  styleUrls: ['./programs-form.component.scss'],
})
export class ProgramsFormComponent implements OnInit {
  programForm : FormGroup;
 
  constructor() { }

  ngOnInit() {
    this.programForm = new FormGroup({
      programName : new FormControl()
    })
  }

  saveNameProg(){
    console.log(this.programForm.value);
  }


}


