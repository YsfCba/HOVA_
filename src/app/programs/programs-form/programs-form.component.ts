import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { NavigationEnd } from '@angular/router'
import { API_PARAMS, ProgramService } from '../../services/Program.service';



@Component({
  selector: 'app-programs-form',
  templateUrl: './programs-form.component.html',
  styleUrls: ['./programs-form.component.scss'],
})
export class ProgramsFormComponent implements OnInit {

  public nameProg: string = "Lundi";
  
  // nameProgInputChoice = true;
  private history: string[] = [];


  constructor(private router: Router, private location: Location, private service: ProgramService) {
    

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }


  ngOnInit() {}



  next(){
    this.router.navigate(['/programs/createSeance'], {state: {name: this.nameProg}});

    // if(this.nameProg)
    // {
    // console.log(this.nameProg);
    // this.service.createData(this.nameProg, API_PARAMS.PROGRAMS).subscribe((res)=>{
    //   console.log(res, 'res==>');
    //   });
    // }
    // else
    // {
    //   console.log("NON");
    // }
  }


  
  // Button back
  back(): void {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl('/programs')
    }
  }

  // onSubmit(value: string) {
  //   this.namePrograme = this.nameProg.value;
  //   console.log(this.namePrograme);

  // }
  
  // getnameProg(nameP: string) {
  //   nameP = this.namePrograme;
  // }

  // checkBoxClick() {
  //   !this.nameProgInputChoice ? this.nameProgInputChoice = true : this.nameProgInputChoice = false;
  // }


}



