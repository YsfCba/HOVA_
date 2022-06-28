import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormControl, FormGroup, NgForm } from '@angular/forms';
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



  customProg = undefined;


 groupeMusculaire = [
    { id:1, value: 'Pectoraux' },
    { id:2, value: 'Deltoide' }, 
    { id:3, value: 'Biceps' },
    { id:4, value: 'Avant-Bras' }, 
    { id:5, value: 'Grand-dorsaux' }, 
    { id:6, value: 'oblique' },
    { id:7, value: 'Quadriceps' }, 
    { id:8, value: 'Adducteurs' }, 
    { id:9, value: 'trapeze' },
    { id:10, value: 'dorsaux' }, 
    { id:11, value: 'Triceps' }, 
    { id:12, value: 'lombaire' },
    { id:13, value: 'fessiers' }, 
    {id:14, value: 'Ischio-jambiers' }, 
    { id:15, value: 'mollet' }
  ];

  Materiels = [
    { id: 1, value: 'Avec'},
    { id: 2, value: 'Sans'},
  ]


 

  handleChange(ev) {
    this.customProg = ev.target.value;
    console.log(this.customProg);
    
  }
  // customForm = this.fb.group({
  //   gm: new FormControl(),
  //   materiel: new FormControl('male'),
  // });


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.getInProgressExercices();
    this.increment();
    this.decrement();
  }

  getInProgressExercices() {
    this.exercicesList.push(mockExercises.benchPress, mockExercises.pectoralPress, mockExercises.shoulderPress, mockExercises.tricepsPulley, mockExercises.lowRow, mockExercises.pullDown, mockExercises.bicepsPulley, mockExercises.legPress, mockExercises.legExtension, mockExercises.legCurl, mockExercises.abdosCrunch);
  }


  // function compteur
  counterValue: number = 0;
  counterChange = new EventEmitter();

  increment() {
    this.counterValue++;
    this.counterChange.emit({
      value: this.counterValue
    });
  }
  decrement() {
    this.counterValue--;
    this.counterChange.emit({
      value: this.counterValue
    });
  // ---- ---- -- --- -- -- -


  }

}
