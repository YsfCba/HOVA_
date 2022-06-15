import { Component, OnInit } from '@angular/core';
import { IProgram } from '../../shared/models/program.interface';
import { mockProgramAbdominalMuscles, mockProgramFullBody, mockProgramMasseExpress, mockProgramWeightloss1, mockProgramWeightloss2, } from 'src/app/shared/mocks/program.mock';


@Component({
  selector: 'app-list-seances',
  templateUrl: './list-seances.component.html',
  styleUrls: ['./list-seances.component.scss'],
})
export class ListSeancesComponent implements OnInit {
  public programsList: IProgram[] = [];

  constructor() { }

  ngOnInit() {}


  getInProgressPrograms() {
    this.programsList.push(mockProgramMasseExpress, mockProgramWeightloss1, mockProgramWeightloss2, mockProgramAbdominalMuscles, mockProgramFullBody);
    console.log(mockProgramMasseExpress.name);
  }
}
