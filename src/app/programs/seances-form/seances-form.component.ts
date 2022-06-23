import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { mockExercises } from 'src/app/shared/mocks/exercises.mock';
import { IExercise } from 'src/app/shared/models/program.interface';

@Component({
  selector: 'app-seances-form',
  templateUrl: './seances-form.component.html',
  styleUrls: ['./seances-form.component.scss'],
})

export class SeancesFormComponent implements OnInit {
  public exercicesList: IExercise[] = [];
  public inProgressExercices: IExercise[] = [];


  constructor() { }


  public customFormatter(value: number) {
    return `${value}%`;
  }

  ngOnInit() {
    this.getInProgressExercices();
  }

  getInProgressExercices() {
    this.exercicesList.push(mockExercises.benchPress, mockExercises.pectoralPress , mockExercises.shoulderPress, mockExercises.tricepsPulley, mockExercises.lowRow, mockExercises.pullDown, mockExercises.bicepsPulley,  mockExercises.legPress, mockExercises.legExtension, mockExercises.legCurl, mockExercises.abdosCrunch);
  }

  
}
