import { Component, OnInit } from '@angular/core';
import { IProgram, ISeance } from '../../shared/models/program.interface';
import { SwiperOptions } from 'swiper';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-seances',
  templateUrl: './list-seances.component.html',
  styleUrls: ['./list-seances.component.scss'],
  providers: [NavParams]
})
export class ListSeancesComponent implements OnInit {
  public program: IProgram;
  private history: string[] = [];



  public swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: true,

  };

  constructor(private router: Router, private location: Location, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.program = this.router.getCurrentNavigation().extras.state.program;
  }

  onClickDetailsExo(seance : ISeance){
    console.log(seance);
    this.router.navigate(['/programs/listExercices'], {state: {seance}})
    }

    back(): void {
      this.history.pop()
      if (this.history.length > 0) {
        this.location.back()
      } else {
        this.router.navigateByUrl('/programs')
      }
    }

}












