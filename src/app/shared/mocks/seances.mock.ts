import { ISeance } from '../models/program.interface';
import { mockExercises } from './exercises.mock';

export const mockSeancesProgram1: {[key: string]: ISeance } = {
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
    name: 'Dos et biceps',
    exercises: [
      mockExercises.tractionEasyChinDip,
      mockExercises.lowRow,
      mockExercises.pullDown,
      mockExercises.bicepsPulley
    ]
  },
  legs: {
    name: 'Jambes',
    exercises: [
      mockExercises.legPress,
      mockExercises.legExtension,
      mockExercises.legCurl,
      mockExercises.abdosCrunch,
      mockExercises.walkingLunges
    ]
  }
};
