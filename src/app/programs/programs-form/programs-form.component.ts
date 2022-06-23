import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-programs-form',
  templateUrl: './programs-form.component.html',
  styleUrls: ['./programs-form.component.scss'],
})
export class ProgramsFormComponent implements OnInit {
  
  myForm : FormGroup
  constructor(fb: FormBuilder){
    this.myForm= fb.group({
        'programName' : [''],
    });
 }
 onSubmit(value: string){
   console.log(this.myForm.value);
 }
  ngOnInit() {}

  


}


