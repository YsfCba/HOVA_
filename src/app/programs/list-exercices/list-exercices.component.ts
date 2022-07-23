import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { IExercise, ISeance } from 'src/app/shared/models/program.interface';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-list-exercices',
  templateUrl: './list-exercices.component.html',
  styleUrls: ['./list-exercices.component.scss'],
  providers: [NavParams]

})
export class ListExercicesComponent implements OnInit {
public seance: ISeance; 

  public swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: true,

  };
  id: any = "mission";

  constructor(private router: Router, public navCtrl: NavController, public navParams: NavParams) { }


  ngOnInit() {
    // recoit les informations 
    this.seance = this.router.getCurrentNavigation().extras.state.seance;
  }

  tabChange(ids: any) {
    this.id = ids;

  }
 
}
