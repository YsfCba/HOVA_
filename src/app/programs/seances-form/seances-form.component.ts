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

  compteur_Exercice: number = 0;
  compteur_Seance: number = 0;

  private history: string[] = [];
  // nameProgram: string;
  nameProgramme: FormGroup;


  groupeMusculaire = [
    { id: 1, value: 'Adducteurs' },
    { id: 2, value: 'Avant-Bras' },
    { id: 3, value: 'Biceps' },
    { id: 4, value: 'Deltoide' },
    { id: 5, value: 'Dorsaux' },
    { id: 6, value: 'Fessiers' },
    { id: 7, value: 'Grand-dorsaux' },
    { id: 8, value: 'Ischio-jambiers' },
    { id: 9, value: 'Lombaire' },
    { id: 10, value: 'Mollet' },
    { id: 11, value: 'Oblique' },
    { id: 12, value: 'Pectoraux' },
    { id: 13, value: 'Quadriceps' },
    { id: 14, value: 'Trapeze' },
    { id: 15, value: 'Triceps' }
  ];

  Materiels = [
    { id: 1, value: 'Avec' },
    { id: 2, value: 'Sans' },
  ]

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  constructor(private router: Router, private location: Location, private service: ProgramService, private route: ActivatedRoute) { }


  formSeance = new FormGroup({
    'id_Program': new FormControl(''),
    'nameSeance': new FormControl(''),
    'muscleGroup': new FormControl(''),
    'material': new FormControl(''),
    'nameExercise': new FormControl(''),
    'timeOff': new FormControl(''),
    'series': new FormControl(''),
    'repetitions': new FormControl(''),
  });


  ngOnInit() {
    // this.nameProgramme = this.router.getCurrentNavigation().extras.state.nameProgramme;
    // console.log(this.nameProgramme);
    this.getInProgressExercices();
  }

  



  CustomProgramSubmit() {
  
    if (this.formSeance.valid) {
      console.log(this.formSeance.value);
      this.service.createData(this.formSeance.value, API_PARAMS.SEANCE).subscribe((res) => {
        console.log(res, 'res==>');
        this.formSeance.reset();
      });
      this.service.createData(this.formSeance.value, API_PARAMS.EXECISE).subscribe((res) => {
        console.log(res, 'res==>');
        this.formSeance.reset();
      })
    }
    else {
      console.log("NON");
    }
  }


  add() {
    ++this.compteur_Exercice;
    console.log("ajout_Exercice");
  }

  addSeance(){
    ++this.compteur_Seance;
    console.log("ajout_Seance");

  }


  getInProgressSeance() {
    this.seancesList.push(mockSeancesProgram1.pecAndShoulders, mockSeancesProgram1.backAndBiceps, mockSeancesProgram1.legs, mockSeancesProgram1.pecAndArms, mockSeancesProgram1.backAndShoulders, mockSeancesProgram1.legsMachine, mockSeancesProgram1.abs);
  }

  getInProgressExercices() {
    this.exercicesList.push(mockExercises.benchPress, mockExercises.pectoralPress, mockExercises.shoulderPress, mockExercises.tricepsPulley, mockExercises.lowRow, mockExercises.pullDown, mockExercises.bicepsPulley, mockExercises.legPress, mockExercises.legExtension, mockExercises.legCurl, mockExercises.abdosCrunch);
  }
  back(): void {
    // this.history.pop();
    this.router.navigateByUrl('/programs/createProgramme');
  }

  // onSubmit(value: string) {
  //   this.ParametreSeance = this.formSeance.value;
  //   console.log(this.ParametreSeance);

  // }

  // handleChange(ev) {
  //   this.customProg = ev.target.value;
  //   console.log(this.customProg);
  // }


}
