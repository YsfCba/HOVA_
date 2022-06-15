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
    time: null,
    detail: 'Le développé couché est un exercice poly-articulaire de force et de musculation qui consiste à soulever et abaisser une barre d\'haltères, développant principalement les pectoraux et les triceps, mais qui sollicite également d\'autres muscles comme le grand dorsal, le grand rond, les trapèzes, les deltoïdes antérieurs et les biceps. C\'est un des trois mouvements de base de la force athlétique avec les flexions sur jambe et le soulevé de terre.'

  },
  pectoralPress: {
    name: 'Pectoral Press',
    category: ExerciseCategory.machine,
    muscleGroup: ['pectoral', 'shoulders'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: ''


  },
  shoulderPress: {
    name: 'Shoulders Press',
    category: ExerciseCategory.machine,
    muscleGroup: ['shoulders', 'biceps'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: ''


  },
  tricepsPulley: {
    name: 'Triceps Pulley',
    category: ExerciseCategory.pulley,
    muscleGroup: ['triceps', 'shoulders', 'biceps'],
    repetitions: 12,
    series: 3,
    breakTime: 60,
    time: null,
    detail: ''


  },

  tractionEasyChinDip: {
    name: 'Tractions assistées',
    category: exerciceCategories.machine,
    muscleGroup: ['back-up', 'shoulders', 'biceps'],
    repetitions: 8,
    series: 4,
    breakTime: 90,
    time: null,
    detail: ''


  },
  lowRow: {
    name: 'Low Row Pulley',
    category: ExerciseCategory.pulley,
    muscleGroup: ['back-middle', 'shoulders', 'triceps', 'biceps'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: ''


  },
  pullDown: {
    name: 'Pull Down Machine',
    category: ExerciseCategory.machine,
    muscleGroup: ['back-up', 'shoulders', 'biceps'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: ''


  },
  bicepsPulley: {
    name: 'Biceps Pulley',
    category: ExerciseCategory.pulley,
    muscleGroup: ['biceps', 'arm'],
    repetitions: 12,
    series: 3,
    breakTime: 60,
    time: null,
    detail: ''
    

  },

  legPress: {
    name: 'Leg Press',
    category: exerciceCategories.machine,
    muscleGroup: ['quadriceps', 'calves'],
    repetitions: 8,
    series: 4,
    breakTime: 90,
    time: null,
    detail: ''


  },
  legExtension: {
    name: 'Leg Extension Machine',
    category: ExerciseCategory.machine,
    muscleGroup: ['quadriceps-up'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: ''

  },
  legCurl: {
    name: 'Leg Curl Machine',
    category: ExerciseCategory.machine,
    muscleGroup: ['quadriceps-down'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: ''


  },
  abdosCrunch: {
    name: 'Abdos Crunch',
    category: ExerciseCategory.machine,
    muscleGroup: ['abs'],
    repetitions: 15,
    series: 3,
    breakTime: 45,
    time: null,
    detail: ''


  },
  
  walkingLunges: {
    name: 'Walking Lunges ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['quadriceps', 'buttocks', 'calves'],
    repetitions: 20,
    series: 3,
    breakTime: 60,
    time: null,
    detail: ''


  },
  run: {
    name: 'run ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['leg'],
    repetitions: null,
    series: null,
    breakTime: null,
    time: '15 min',
    detail: ''

  },
  bike: {
    name: 'bike ',
    category: ExerciseCategory.machine,
    muscleGroup: ['leg'],
    repetitions: null,
    series: null,
    breakTime: null,
    time: '20 min',
    detail: ''

  },
  burpees: {
    name: 'burpees ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['full body'],
    repetitions: 30,
    series: null,
    breakTime: null,
    time: null,
    detail: ''

  },
  squat: {
    name: 'squat ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['leg'],
    repetitions: 30,
    series: null,
    breakTime: null,
    time: null,
    detail: ''

  },
  JumpingJack: {
    name: 'jumping jack ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['leg', 'arms'],
    repetitions: 50,
    series: null,
    breakTime: null,
    time: null,
    detail: ''

  },
  PushUps: {
    name: 'Push-ups',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['abd', 'abs'],
    repetitions: 50,
    series: null,
    breakTime: null,
    time: null,
    detail: ''

  },
  AbsScissors: {
    name: 'Abs Scissors',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['abs'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: ''

  },
  AbsKickOut: {
    name: 'Abs Kick Out',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['abs'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: ''

  },
  plank: {
    name: 'Plank',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['abs'],
    repetitions: null,
    series: 3,
    breakTime: 60,
    time: '60s',
    detail: ''

  },

  


};
