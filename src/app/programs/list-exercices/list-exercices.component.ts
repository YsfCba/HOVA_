import { Component, OnInit } from '@angular/core';
import { mockExercises } from 'src/app/shared/mocks/exercises.mock';
import { IExercise } from 'src/app/shared/models/program.interface';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-list-exercices',
  templateUrl: './list-exercices.component.html',
  styleUrls: ['./list-exercices.component.scss'],
})
export class ListExercicesComponent implements OnInit {
  public exercicesList: IExercise[] = [];
  public inProgressExercices: IExercise[] = [];
  public swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: true,

  };

  constructor() { }


  id: any = "mission";

  ngOnInit() {
    this.getInProgressExercices();

  }


  getInProgressExercices() {
    this.exercicesList.push(mockExercises.benchPress, 
      mockExercises.pectoralPress, mockExercises.shoulderPress, 
      mockExercises.tricepsPulley, mockExercises.tractionEasyChinDip, 
      mockExercises.lowRow, mockExercises.pullDown, mockExercises.bicepsPulley, 
      mockExercises.legPress, mockExercises.legExtension, mockExercises.legCurl, 
      mockExercises.abdosCrunch, mockExercises.walkingLunges, mockExercises.run, 
      mockExercises.bike, mockExercises.burpees, mockExercises.squat, 
      mockExercises.JumpingJack, mockExercises.PushUps, mockExercises.AbsScissors,
       mockExercises.AbsKickOut, mockExercises.plank, );
    //console.log(mockSeancesProgram1.pecAndShoulders.exercises[0].detail);
    
      console.log(mockExercises.tricepsPulley.category);

  }
  

}
