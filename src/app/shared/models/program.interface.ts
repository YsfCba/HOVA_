export enum ExerciseCategory {
  machine = 'machine',
  bodyWeight = 'bodyWeight',
  pulley = 'pulley'
}

export interface IProgram {
  name: string;
  seances: ISeance[];
  date?: string;
}

export interface ISeance {
  name: string;
  exercises: IExercise[];
  done?: boolean;
}

export interface IExercise {
  name: string;
  category: ExerciseCategory;
  muscleGroup: string[];
  repetitions: number;
  series: number;
  breakTime: number;
  time: string;
  weight?: number;
  done?: boolean;
}
