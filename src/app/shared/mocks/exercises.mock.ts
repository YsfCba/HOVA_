import {ExerciseCategory, IExercise} from '../models/program.interface';

const exerciceCategories = ExerciseCategory;

export const mockExercises: {[key: string]: IExercise } = {
  benchPress: {
    name: 'Couché développé',
    category: exerciceCategories.machine,
    muscleGroup: ['pectoral', 'shoulders'],
    repetitions: 8,
    series: 4,
    breakTime: 90
  },
  pectoralPress: {
    name: 'Pectoral Press',
    category: ExerciseCategory.machine,
    muscleGroup: ['pectoral', 'shoulders'],
    repetitions: 10,
    series: 3,
    breakTime: 60
  },
  shoulderPress: {
    name: 'Shoulders Press',
    category: ExerciseCategory.machine,
    muscleGroup: ['shoulders', 'biceps'],
    repetitions: 10,
    series: 3,
    breakTime: 60
  },
  tricepsPulley: {
    name: 'Triceps Pulley',
    category: ExerciseCategory.pulley,
    muscleGroup: ['triceps', 'shoulders', 'biceps'],
    repetitions: 12,
    series: 3,
    breakTime: 60
  },

  tractionEasyChinDip: {
    name: 'Tractions assistées',
    category: exerciceCategories.machine,
    muscleGroup: ['back-up', 'shoulders', 'biceps'],
    repetitions: 8,
    series: 4,
    breakTime: 90
  },
  lowRow: {
    name: 'Low Row Pulley',
    category: ExerciseCategory.pulley,
    muscleGroup: ['back-middle', 'shoulders', 'triceps', 'biceps'],
    repetitions: 10,
    series: 3,
    breakTime: 60
  },
  pullDown: {
    name: 'Pull Down Machine',
    category: ExerciseCategory.machine,
    muscleGroup: ['back-up', 'shoulders', 'biceps'],
    repetitions: 10,
    series: 3,
    breakTime: 60
  },
  bicepsPulley: {
    name: 'Biceps Pulley',
    category: ExerciseCategory.pulley,
    muscleGroup: ['biceps', 'arm'],
    repetitions: 12,
    series: 3,
    breakTime: 60
  },

  legPress: {
    name: 'Leg Press',
    category: exerciceCategories.machine,
    muscleGroup: ['quadriceps', 'calves'],
    repetitions: 8,
    series: 4,
    breakTime: 90
  },
  legExtension: {
    name: 'Leg Extension Machine',
    category: ExerciseCategory.machine,
    muscleGroup: ['quadriceps-up'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
  },
  legCurl: {
    name: 'Leg Curl Machine',
    category: ExerciseCategory.machine,
    muscleGroup: ['quadriceps-down'],
    repetitions: 10,
    series: 3,
    breakTime: 60
  },
  abdosCrunch: {
    name: 'Abdos Crunch',
    category: ExerciseCategory.machine,
    muscleGroup: ['abs'],
    repetitions: 15,
    series: 3,
    breakTime: 45
  },
  walkingLunges: {
    name: 'Walking Lunges ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['quadriceps', 'buttocks', 'calves'],
    repetitions: 20,
    series: 3,
    breakTime: 60
  },
};
