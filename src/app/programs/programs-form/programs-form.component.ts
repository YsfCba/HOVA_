import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-programs-form',
  templateUrl: './programs-form.component.html',
  styleUrls: ['./programs-form.component.scss'],
})
export class ProgramsFormComponent implements OnInit {
  
  nameProg : FormGroup;
  namePrograme: string;
  nameProgInputChoice = true;

  constructor(fb: FormBuilder){
    this.nameProg= fb.group({
        'programName' : [''],
    });
    
 }
 onSubmit(value: string){
   this.namePrograme = this.nameProg.value;
   console.log(this.namePrograme);
   
 }
  ngOnInit() {}


  getnameProg(nameP: string){
    nameP= this.namePrograme; 
  }

  checkBoxClick(){
  !this.nameProgInputChoice ? this.nameProgInputChoice = true : this.nameProgInputChoice = false;
  }
  
  
}



