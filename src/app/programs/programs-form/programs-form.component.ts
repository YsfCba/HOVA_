import { Component, OnInit } from '@angular/core';
import { IProgram } from '../../shared/models/program.interface';
import SwiperCore, { SwiperOptions } from 'swiper';
import { mockProgramAbdominalMuscles, mockProgramFullBody, mockProgramMasseExpress, mockProgramWeightloss1, mockProgramWeightloss2, } from 'src/app/shared/mocks/program.mock';
import { Router } from '@angular/router';



@Component({
  selector: 'app-programs-form',
  templateUrl: './programs-form.component.html',
  styleUrls: ['./programs-form.component.scss'],
})
export class ProgramsFormComponent implements OnInit {
  
 
  constructor() { }

  ngOnInit() {
  }


}


