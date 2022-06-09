import {ExerciseCategory, IExercise} from '../models/program.interface';

const exerciceCategories = ExerciseCategory;

export const mockExercises: {[key: string]: IExercise } = {
  benchPress: {
    name: 'Couché développé',
    category: exerciceCategories.machine,
    muscleGroup: ['pectoral', 'shoulders'],
    repetitions: 8,
    series: 4,
    breakTime: 90,
    time: null

  },
  pectoralPress: {
    name: 'Pectoral Press',
    category: ExerciseCategory.machine,
    muscleGroup: ['pectoral', 'shoulders'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null

  },
  shoulderPress: {
    name: 'Shoulders Press',
    category: ExerciseCategory.machine,
    muscleGroup: ['shoulders', 'biceps'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null

  },
  tricepsPulley: {
    name: 'Triceps Pulley',
    category: ExerciseCategory.pulley,
    muscleGroup: ['triceps', 'shoulders', 'biceps'],
    repetitions: 12,
    series: 3,
    breakTime: 60,
    time: null

  },

  tractionEasyChinDip: {
    name: 'Tractions assistées',
    category: exerciceCategories.machine,
    muscleGroup: ['back-up', 'shoulders', 'biceps'],
    repetitions: 8,
    series: 4,
    breakTime: 90,
    time: null

  },
  lowRow: {
    name: 'Low Row Pulley',
    category: ExerciseCategory.pulley,
    muscleGroup: ['back-middle', 'shoulders', 'triceps', 'biceps'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null

  },
  pullDown: {
    name: 'Pull Down Machine',
    category: ExerciseCategory.machine,
    muscleGroup: ['back-up', 'shoulders', 'biceps'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null

  },
  bicepsPulley: {
    name: 'Biceps Pulley',
    category: ExerciseCategory.pulley,
    muscleGroup: ['biceps', 'arm'],
    repetitions: 12,
    series: 3,
    breakTime: 60,
    time: null

  },

  legPress: {
    name: 'Leg Press',
    category: exerciceCategories.machine,
    muscleGroup: ['quadriceps', 'calves'],
    repetitions: 8,
    series: 4,
    breakTime: 90,
    time: null

  },
  legExtension: {
    name: 'Leg Extension Machine',
    category: ExerciseCategory.machine,
    muscleGroup: ['quadriceps-up'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null

  },
  legCurl: {
    name: 'Leg Curl Machine',
    category: ExerciseCategory.machine,
    muscleGroup: ['quadriceps-down'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null

  },
  abdosCrunch: {
    name: 'Abdos Crunch',
    category: ExerciseCategory.machine,
    muscleGroup: ['abs'],
    repetitions: 15,
    series: 3,
    breakTime: 45,
    time: null

  },
  
  walkingLunges: {
    name: 'Walking Lunges ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['quadriceps', 'buttocks', 'calves'],
    repetitions: 20,
    series: 3,
    breakTime: 60,
    time: null

  },
  run: {
    name: 'run ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['leg'],
    repetitions: null,
    series: null,
    breakTime: null,
    time: '15 min'
  },
  bike: {
    name: 'bike ',
    category: ExerciseCategory.machine,
    muscleGroup: ['leg'],
    repetitions: null,
    series: null,
    breakTime: null,
    time: '20 min',
  },
  burpees: {
    name: 'burpees ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['full body'],
    repetitions: 30,
    series: null,
    breakTime: null,
    time: null
  },
  squat: {
    name: 'squat ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['leg'],
    repetitions: 30,
    series: null,
    breakTime: null,
    time: null
  },
  JumpingJack: {
    name: 'jumping jack ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['leg', 'arms'],
    repetitions: 50,
    series: null,
    breakTime: null,
    time: null
  },
  PushUps: {
    name: 'Push-ups',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['abd', 'abs'],
    repetitions: 50,
    series: null,
    breakTime: null,
    time: null
  },
  AbsScissors: {
    name: 'Abs Scissors',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['abs'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null
  },
  AbsKickOut: {
    name: 'Abs Kick Out',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['abs'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null
  },
  plank: {
    name: 'Plank',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['abs'],
    repetitions: null,
    series: 3,
    breakTime: 60,
    time: '60s'
  },

  


};
