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
  public programsList: IProgram[] = [];
  public inProgressPrograms: IProgram[] = [];


  public seancesListMasseExpress: ISeance[] = [];
  public seancesListWeightloss1: ISeance[] = [];
  public seancesListWeightloss2: ISeance[] = [];
  public seancesListAbdominalMuscles: ISeance[] = [];
  public seancesListFullBody: ISeance[] = [];



  public inProgressSeances: ISeance[] = [];
  public swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: true,

  };

  constructor(private router: Router) { }


  // id: any = "mission";
  // nameMasseExpress: any = mockProgramMasseExpress.name;
  // nameWeightloss1: any = mockProgramWeightloss1.name;
  // nameWeightloss2: any = mockProgramWeightloss2.name;

  ngOnInit() {
    this.getInProgressSeances();
    this.getInProgressPrograms();

  }

  getInProgressPrograms() {
    this.programsList.push(mockProgramMasseExpress, mockProgramWeightloss1, mockProgramWeightloss2, mockProgramAbdominalMuscles, mockProgramFullBody);
    console.log();
  }


  getInProgressSeances() {
    this.seancesListMasseExpress.push(mockSeancesProgram1.pecAndShoulders, mockSeancesProgram1.backAndBiceps, mockSeancesProgram1.legs);
    this.seancesListWeightloss1.push(mockSeancesProgram1.CardioRun);
    this.seancesListWeightloss2.push(mockSeancesProgram1.CardioBike);
    this.seancesListAbdominalMuscles.push(mockSeancesProgram1.abs);
    this.seancesListFullBody.push(mockSeancesProgram1.pecAndArms, mockSeancesProgram1.backAndShoulders, mockSeancesProgram1.legsMachine);

    console.log(mockSeancesProgram1.pecAndShoulders.name);
  }
}












