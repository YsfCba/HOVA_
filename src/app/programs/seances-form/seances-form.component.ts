import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { mockExercises } from 'src/app/shared/mocks/exercises.mock';
import { IExercise, ISeance } from 'src/app/shared/models/program.interface';
import { Location } from '@angular/common';
import { API_PARAMS, ProgramService } from 'src/app/services/Program.service';
import { mockProgramAbdominalMuscles, mockProgramFullBody, mockProgramMasseExpress, mockProgramWeightloss1, mockProgramWeightloss2 } from 'src/app/shared/mocks/program.mock';
import { mockSeancesProgram1 } from 'src/app/shared/mocks/seances.mock';



@Component({
  selector: 'app-seances-form',
  templateUrl: './seances-form.component.html',
  styleUrls: ['./seances-form.component.scss'],
})

export class SeancesFormComponent implements OnInit {
  public exercicesList: IExercise[] = [];
  public inProgressExercices: IExercise[] = [];

  public seancesList: ISeance[] = [];
  public inProgressSeances: IExercise[] = [];


  // public seanceList: ISeance[];
  filteredArray: any;
  customProg = undefined;
  ParametreSeance: string;

  show_exercise_form: boolean = false;
  compteur: number = 0;

  private history: string[] = [];
  namProgram: string;


  groupeMusculaire = [
    { id: 1, value: 'Pectoraux' },
    { id: 2, value: 'Deltoide' },
    { id: 3, value: 'Biceps' },
    { id: 4, value: 'Avant-Bras' },
    { id: 5, value: 'Grand-dorsaux' },
    { id: 6, value: 'oblique' },
    { id: 7, value: 'Quadriceps' },
    { id: 8, value: 'Adducteurs' },
    { id: 9, value: 'trapeze' },
    { id: 10, value: 'dorsaux' },
    { id: 11, value: 'Triceps' },
    { id: 12, value: 'lombaire' },
    { id: 13, value: 'fessiers' },
    { id: 14, value: 'Ischio-jambiers' },
    { id: 15, value: 'mollet' }
  ];

  Materiels = [
    { id: 1, value: 'Avec' },
    { id: 2, value: 'Sans' },
  ]



  constructor(private router: Router, private location: Location, private service: ProgramService, private route: ActivatedRoute) { }


  formSeance = new FormGroup({
    'nameSeance': new FormControl(''),
    'muscleGroup': new FormControl(''),
    'material': new FormControl(''),
    'series': new FormControl(''),
    'repetitions': new FormControl(''),
    'timeOff': new FormControl('')
  });

  ngOnInit() {
    this.namProgram = this.router.getCurrentNavigation().extras.state.namProgram;
    console.log(this.namProgram);
    this.getInProgressExercices()
  }



  CustomProgramSubmit() {
    if (this.formSeance.valid) {
      console.log(this.formSeance.value);
      this.service.createData(this.formSeance.value, API_PARAMS.SEANCE).subscribe((res) => {
        console.log(res, 'res==>');
        this.formSeance.reset();
      });
    }
    else {
      console.log("NON");
    }
  }

  // filteredFormSeance() {
  //   const muscleGroupd = this.formSeance.get('muscleGroup').value;
  //   const material = this.formSeance.get('material').value;

  //   console.log(muscleGroupd);


  //   // this.filteredArray = this.seancesList.filter(
  //   //   seancesList[].muscleGroup == muscleGroupd && seancesList[].material == material );
  //   // console.log(this.filteredArray);

  // }

  add() {
    ++this.compteur;
  }


  getInProgressSeance() {
    this.seancesList.push(mockSeancesProgram1.pecAndShoulders, mockSeancesProgram1.backAndBiceps, mockSeancesProgram1.legs, mockSeancesProgram1.pecAndArms, mockSeancesProgram1.backAndShoulders, mockSeancesProgram1.legsMachine, mockSeancesProgram1.abs);
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
