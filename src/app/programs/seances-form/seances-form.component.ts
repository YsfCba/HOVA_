import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { mockExercises } from 'src/app/shared/mocks/exercises.mock';
import { IExercise } from 'src/app/shared/models/program.interface';
import { Location } from '@angular/common';
import { API_PARAMS, ProgramService } from 'src/app/services/Program.service';



@Component({
  selector: 'app-seances-form',
  templateUrl: './seances-form.component.html',
  styleUrls: ['./seances-form.component.scss'],
})

export class SeancesFormComponent implements OnInit {
  public exercicesList: IExercise[] = [];
  public inProgressExercices: IExercise[] = [];

  customProg = undefined;  
  ParametreSeance: string;  

  private history: string[] = [];
  namProgram : string;


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
    { id:14, value: 'Ischio-jambiers' }, 
    { id:15, value: 'mollet' }
  ];

  Materiels = [
    { id: 1, value: 'Avec'},
    { id: 2, value: 'Sans'},
  ]
  
constructor(private router: Router, private location: Location, private service: ProgramService, private route: ActivatedRoute) {
}
formSeance = new FormGroup({
    'nameSeance': new FormControl(''),
    'muscleGroup': new FormControl(''),
    'material': new FormControl('')
  });

  ngOnInit() {
    this.namProgram = this.router.getCurrentNavigation().extras.state.name;
    console.log(this.namProgram);
    
  }

  CustomProgramSubmit()
  {
    if(this.formSeance.valid)
    {
    console.log(this.formSeance.value);
    this.service.createData(this.formSeance.value, API_PARAMS.SEANCE).subscribe((res)=>{
      console.log(res, 'res==>');
      //this.formSeance.reset();
      });
    }
    else
    {
      console.log("NON");
      
    }
  }



  getInProgressExercices() {
    this.exercicesList.push(mockExercises.benchPress, mockExercises.pectoralPress, mockExercises.shoulderPress, mockExercises.tricepsPulley, mockExercises.lowRow, mockExercises.pullDown, mockExercises.bicepsPulley, mockExercises.legPress, mockExercises.legExtension, mockExercises.legCurl, mockExercises.abdosCrunch);
  }

  back(): void {
    this.history.pop();
    this.router.navigateByUrl('/programs/createProgramme');
   }

  onSubmit(value: string) {
    this.ParametreSeance = this.formSeance.value;
    console.log(this.ParametreSeance);

  }

  // handleChange(ev) {
  //   this.customProg = ev.target.value;
  //   console.log(this.customProg);
  // }
 

}
