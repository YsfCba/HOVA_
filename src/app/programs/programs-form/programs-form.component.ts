import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { NavigationEnd } from '@angular/router'


@Component({
  selector: 'app-programs-form',
  templateUrl: './programs-form.component.html',
  styleUrls: ['./programs-form.component.scss'],
})
export class ProgramsFormComponent implements OnInit {

  nameProg: FormGroup;
  namePrograme: string;
  nameProgInputChoice = true;
  private history: string[] = [];


  constructor(fb: FormBuilder, private router: Router, private location: Location) {
    this.nameProg = fb.group({
      'programName': [''],
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })

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

  onSubmit(value: string) {
    this.namePrograme = this.nameProg.value;
    console.log(this.namePrograme);

  }
  ngOnInit() { }


  getnameProg(nameP: string) {
    nameP = this.namePrograme;
  }

  checkBoxClick() {
    !this.nameProgInputChoice ? this.nameProgInputChoice = true : this.nameProgInputChoice = false;
  }


}



