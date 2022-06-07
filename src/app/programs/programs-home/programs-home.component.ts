import { Component, OnInit } from '@angular/core';
import { IProgram } from '../../shared/models/program.interface';
import SwiperCore, {SwiperOptions} from 'swiper';
import { mockProgramMasseExpress } from 'src/app/shared/mocks/program.mock';

@Component({
  selector: 'app-programs-home',
  templateUrl: './programs-home.component.html',
  styleUrls: ['./programs-home.component.scss'],
})
export class ProgramsHomeComponent implements OnInit {
  public programsList: IProgram[] = [];
  public inProgressPrograms: IProgram[] = [];
  public swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: true
  };

  currentDate: string;
  

  constructor() {
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    };
    const Travel = { dateOptions };
    const someDateObject = new Date();
    this.currentDate = someDateObject.toLocaleDateString('fr-FR', Travel.dateOptions);
  }
  

  ngOnInit() {
     this.getInProgressPrograms();
     this.getdate();
     
  }

  getInProgressPrograms() {
    this.programsList.push(mockProgramMasseExpress);
    console.log(mockProgramMasseExpress.name);
  }

  getdate() {
    let madate = mockProgramMasseExpress.date;
    console.log(madate);
  }

  
  
}

