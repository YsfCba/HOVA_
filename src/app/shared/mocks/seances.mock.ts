import { ISeance } from '../models/program.interface';
import { mockExercises } from './exercises.mock';

export const mockSeancesProgram1: { [key: string]: ISeance } = {
  pecAndShoulders: {
    name: 'Pecs et épaules',
    exercises: [
      mockExercises.benchPress,
      mockExercises.pectoralPress,
      mockExercises.shoulderPress,
      mockExercises.tricepsPulley,
    ]
  },
  backAndBiceps: {
    name: 'Back et biceps',
    exercises: [
      mockExercises.tractionEasyChinDip,
      mockExercises.lowRow,
      mockExercises.pullDown,
      mockExercises.bicepsPulley
    ]
  },
  legs: {
    name: 'Legs',
    exercises: [
      mockExercises.legPress,
      mockExercises.legExtension,
      mockExercises.legCurl,
      mockExercises.abdosCrunch,
      mockExercises.walkingLunges
    ]
  },
  CardioRun: {
    name: 'Cardio Run',
    exercises: [
      mockExercises.run,
      mockExercises.burpees,
      mockExercises.squat,
      mockExercises.JumpingJack,
      mockExercises.PushUps
    ]
  },
  CardioBike: {
    name: 'Cardio Bike',
    exercises: [
      mockExercises.bike,
      mockExercises.burpees,
      mockExercises.squat,
      mockExercises.JumpingJack,
      mockExercises.PushUps
    ]
  },
  pecAndArms: {
    name: 'Pec et Arms',
    exercises: [
      mockExercises.bicepsPulley,
      mockExercises.pullDown,
      mockExercises.lowRow,
      mockExercises.tractionEasyChinDip,
      mockExercises.PushUps
    ]
  },
  backAndShoulders: {
    name: 'Back and Shoulders ',
    exercises: [
      mockExercises.bicepsPulley,
      mockExercises.pullDown,
      mockExercises.lowRow,
      mockExercises.tractionEasyChinDip,
      mockExercises.PushUps
    ]
  },
  legsMachine: {
    name: 'Legs',
    exercises: [
      mockExercises.legPress,
      mockExercises.legExtension,
      mockExercises.legCurl,
      mockExercises.abdosCrunch,
      mockExercises.walkingLunges
    ]
  },
  abs:{
    name: 'abs',
    exercises: [
      mockExercises.AbsScissors,
      mockExercises.AbsKickOut,
      mockExercises.plank,
    ]
  }
  

};


