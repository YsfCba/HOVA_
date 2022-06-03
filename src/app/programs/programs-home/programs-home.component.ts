import { Component, OnInit } from '@angular/core';
import { IProgram } from '../../shared/models/program.interface';
import SwiperCore, {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-programs-home',
  templateUrl: './programs-home.component.html',
  styleUrls: ['./programs-home.component.scss'],
})
export class ProgramsHomeComponent implements OnInit {
  public programsList: IProgram[];
  public inProgressPrograms: IProgram[];
  public swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: true
  };
  constructor() { }

  async ngOnInit() {
    await this.getInProgressPrograms();
  }

  async getInProgressPrograms() {
    console.log('bonjour');
  }

}
