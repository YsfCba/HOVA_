import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormControl, FormGroup, NgForm } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { mockExercises } from 'src/app/shared/mocks/exercises.mock';
import { IExercise } from 'src/app/shared/models/program.interface';
import { Location } from '@angular/common';
import { ProgramService } from 'src/app/services/Program.service';



@Component({
  selector: 'app-exercises-form',
  templateUrl: './exercises-form.component.html',
  styleUrls: ['./exercises-form.component.scss']
})
export class ExercisesFormComponent implements OnInit {
//   public exercicesList: IExercise[] = [];
//   public inProgressExercices: IExercise[] = [];

//   customProg = undefined;  
//   ParametreSeance: string;  

//   private history: string[] = [];


//  groupeMusculaire = [
//     { id:1, value: 'Pectoraux' },
//     { id:2, value: 'Deltoide' }, 
//     { id:3, value: 'Biceps' },
//     { id:4, value: 'Avant-Bras' }, 
//     { id:5, value: 'Grand-dorsaux' }, 
//     { id:6, value: 'oblique' },
//     { id:7, value: 'Quadriceps' }, 
//     { id:8, value: 'Adducteurs' }, 
//     { id:9, value: 'trapeze' },
//     { id:10, value: 'dorsaux' }, 
//     { id:11, value: 'Triceps' }, 
//     { id:12, value: 'lombaire' },
//     { id:13, value: 'fessiers' }, 
//     { id:14, value: 'Ischio-jambiers' }, 
//     { id:15, value: 'mollet' }
//   ];

//   Materiels = [
//     { id: 1, value: 'Avec'},
//     { id: 2, value: 'Sans'},
//   ];
  
// constructor(private router: Router, private location: Location, private service: ProgramService) {
// }
// formSeance = new FormGroup({
//     'nameSeance': new FormControl(''),
//     'muscleGroup': new FormControl(''),
//     'material': new FormControl(''),
//     'nameExercise': new FormControl(''),
//     'timeOff' : new FormControl(''),
//     'series': new FormControl(''),
//     'repetitions': new FormControl('')
//   });

//     this.getInProgressExercices();
   ngOnInit() {
  }

//   CustomProgramSubmit()
//   {
//     if(this.formSeance.valid)
//     {
//     console.log(this.formSeance.value);
//     this.service.createData(this.formSeance.value).subscribe((res)=>{
//       console.log(res, 'res==>');
//       this.formSeance.reset();
//       });
//     }
//     else
//     {
//       console.log("NON");
      
//     }
//   }



//   getInProgressExercices() {
//     this.exercicesList.push(mockExercises.benchPress, mockExercises.pectoralPress, mockExercises.shoulderPress, mockExercises.tricepsPulley, mockExercises.lowRow, mockExercises.pullDown, mockExercises.bicepsPulley, mockExercises.legPress, mockExercises.legExtension, mockExercises.legCurl, mockExercises.abdosCrunch);
//   }

//   back(): void {
//     this.history.pop();
//     this.router.navigateByUrl('/programs/createProgramme');
//    }

//   onSubmit(value: string) {
//     this.ParametreSeance = this.formSeance.value;
//     console.log(this.ParametreSeance);

//   }

}
