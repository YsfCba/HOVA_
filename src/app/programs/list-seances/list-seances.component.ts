import { Component, OnInit } from '@angular/core';
import { IProgram, ISeance } from '../../shared/models/program.interface';
import { SwiperOptions } from 'swiper';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-list-seances',
  templateUrl: './list-seances.component.html',
  styleUrls: ['./list-seances.component.scss'],
  providers: [NavParams]
})
export class ListSeancesComponent implements OnInit {
  public program: IProgram;



  public swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: true,

  };

  constructor(private router: Router, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.program = this.router.getCurrentNavigation().extras.state.program;
  }

  onClickDetailsExo(seance : ISeance){
    console.log(seance);
    debugger
    
    this.router.navigate(['/programs/listExercices'], {state: {seance}})
    }

}












