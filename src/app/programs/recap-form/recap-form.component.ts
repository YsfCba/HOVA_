import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '@angular/common'

@Component({
  selector: 'app-recap-form',
  templateUrl: './recap-form.component.html',
  styleUrls: ['./recap-form.component.scss']
})
export class RecapFormComponent implements OnInit {

  private history: string[] = [];



  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }



    // Button back
    back(): void {
      this.history.pop()
      if (this.history.length > 0) {
        this.location.back()
      } else {
        this.router.navigateByUrl('/programs/createSeance')
      }
    }
}
