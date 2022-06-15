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
    ],
    time : '45 min'

  },
  backAndBiceps: {
    name: 'Back et biceps',
    exercises: [
      mockExercises.tractionEasyChinDip,
      mockExercises.lowRow,
      mockExercises.pullDown,
      mockExercises.bicepsPulley
    ],
    time : '50 min'
  },

  legs: {
    name: 'Legs',
    exercises: [
      mockExercises.legPress,
      mockExercises.legExtension,
      mockExercises.legCurl,
      mockExercises.abdosCrunch,
      mockExercises.walkingLunges
    ],
    time : '55 min'
  },

  CardioRun: {
    name: 'Cardio Run',
    exercises: [
      mockExercises.run,
      mockExercises.burpees,
      mockExercises.squat,
      mockExercises.JumpingJack,
      mockExercises.PushUps
    ],
    time : '45 min'
  },

  CardioBike: {
    name: 'Cardio Bike',
    exercises: [
      mockExercises.bike,
      mockExercises.burpees,
      mockExercises.squat,
      mockExercises.JumpingJack,
      mockExercises.PushUps
    ],
    time : '45 min'
  },

  pecAndArms: {
    name: 'Pec et Arms',
    exercises: [
      mockExercises.bicepsPulley,
      mockExercises.pullDown,
      mockExercises.lowRow,
      mockExercises.tractionEasyChinDip,
      mockExercises.PushUps
    ],
    time : '45 min'
  },

  backAndShoulders: {
    name: 'Back and Shoulders ',
    exercises: [
      mockExercises.bicepsPulley,
      mockExercises.pullDown,
      mockExercises.lowRow,
      mockExercises.tractionEasyChinDip,
      mockExercises.PushUps
    ],
    time : '45 min'
  },

  legsMachine: {
    name: 'Legs',
    exercises: [
      mockExercises.legPress,
      mockExercises.legExtension,
      mockExercises.legCurl,
      mockExercises.abdosCrunch,
      mockExercises.walkingLunges
    ],
    time : '45 min'

  },
  abs:{
    name: 'abs',
    exercises: [
      mockExercises.AbsScissors,
      mockExercises.AbsKickOut,
      mockExercises.plank,
    ],
    time : '45 min'
  }
  

};


