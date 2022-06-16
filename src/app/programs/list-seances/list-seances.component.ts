import { Component, OnInit } from '@angular/core';
import { IProgram, ISeance } from '../../shared/models/program.interface';
import { mockProgramAbdominalMuscles, mockProgramFullBody, mockProgramMasseExpress, mockProgramWeightloss1, mockProgramWeightloss2, } from 'src/app/shared/mocks/program.mock';
import { SwiperOptions } from 'swiper';
import { mockSeancesProgram1 } from 'src/app/shared/mocks/seances.mock';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-seances',
  templateUrl: './list-seances.component.html',
  styleUrls: ['./list-seances.component.scss'],
})
export class ListSeancesComponent implements OnInit {
  public seancesList: ISeance[] = [];
  public inProgressSeances: ISeance[] = [];
  public swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: true,

  };

  constructor(private router: Router) { }


  id: any = "mission";

  ngOnInit() {
    this.getInProgressSeances();

  }


  getInProgressSeances() {
    this.seancesList.push(mockSeancesProgram1.pecAndShoulders, mockSeancesProgram1.backAndBiceps, mockSeancesProgram1.legs, mockSeancesProgram1.CardioRun, mockSeancesProgram1.CardioBike, mockSeancesProgram1.pecAndArms, mockSeancesProgram1.backAndShoulders, mockSeancesProgram1.legsMachine, mockSeancesProgram1.abs  );
    
    console.log(mockSeancesProgram1.pecAndShoulders.name);
  }
}












