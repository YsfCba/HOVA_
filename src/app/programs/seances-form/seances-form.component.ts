import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { mockExercises } from 'src/app/shared/mocks/exercises.mock';
import { IExercise } from 'src/app/shared/models/program.interface';
import { Location } from '@angular/common';



@Component({
  selector: 'app-seances-form',
  templateUrl: './seances-form.component.html',
  styleUrls: ['./seances-form.component.scss'],
})

export class SeancesFormComponent implements OnInit {
  public exercicesList: IExercise[] = [];
  public inProgressExercices: IExercise[] = [];


  formSeance: FormGroup;
  // muscleGroup: string;
  // Materiel: string;
  // Exercices: string;
  // recoveryTime : string;
  // series: string;
  // repetitions: string;

  customProg = undefined;  
  ParametreSeance: string;  

  private history: string[] = [];


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
  
constructor(private fb: FormBuilder, private router: Router, private location: Location) {
  this.formSeance = fb.group({
    'nameSeance': [''],
    'muscleGroup': [''],
    'materiel': [''],
    'exercices': [''],
    'recoveryTime' : [''],
    'series': [''],
    'repetitions': [''],
    'Times':['']
  });
}

  ngOnInit() {
    this.getInProgressExercices();
  }

  getInProgressExercices() {
    this.exercicesList.push(mockExercises.benchPress, mockExercises.pectoralPress, mockExercises.shoulderPress, mockExercises.tricepsPulley, mockExercises.lowRow, mockExercises.pullDown, mockExercises.bicepsPulley, mockExercises.legPress, mockExercises.legExtension, mockExercises.legCurl, mockExercises.abdosCrunch);
  }

  back(): void {
    this.history.pop()
    this.router.navigateByUrl('/programs/createProgramme')
   }

  onSubmit(value: string) {
    this.ParametreSeance = this.formSeance.value;
    console.log(this.ParametreSeance);

  }

  handleChange(ev) {
    this.customProg = ev.target.value;
    console.log(this.customProg);
  }
 

}
