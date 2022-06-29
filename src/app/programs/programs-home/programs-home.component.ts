import { Component, OnInit, ViewChild } from '@angular/core';
import { IProgram } from '../../shared/models/program.interface';
import { SwiperOptions } from 'swiper';
import { mockProgramAbdominalMuscles, mockProgramFullBody, mockProgramMasseExpress, mockProgramWeightloss1, mockProgramWeightloss2, } from 'src/app/shared/mocks/program.mock';
import { Router } from '@angular/router';


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
    pagination: true,

  };

  constructor(private router: Router) {
    
  }

  id: any = "mission";
  

  ngOnInit() {
    this.getInProgressPrograms();
  }


  getInProgressPrograms() {
    this.programsList.push(mockProgramMasseExpress, mockProgramWeightloss1, mockProgramWeightloss2, mockProgramAbdominalMuscles, mockProgramFullBody);
    console.log(mockProgramMasseExpress.name);
  }

  onClickDetails(program: IProgram) {
    console.log(program);
    this.router.navigate(['/programs/listSeances'], { state: { program } })
  }

  tabChange(ids: any) {
    this.id = ids;
  }

}

