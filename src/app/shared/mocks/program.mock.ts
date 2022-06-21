import { IProgram } from '../models/program.interface';
import { mockSeancesProgram1, } from './seances.mock';


export const mockProgramMasseExpress: IProgram  = {

    name: 'Masse Express',
    seances: [
      mockSeancesProgram1.pecAndShoulders,
      mockSeancesProgram1.backAndBiceps,
      mockSeancesProgram1.legs
    ],
    date: 'En cours'

};

export const mockProgramWeightloss1: IProgram = {
  name: 'weight loss1',
  seances: [
    mockSeancesProgram1.CardioRun,
  ],
  date: ''
};

export const mockProgramWeightloss2: IProgram = {
  name: 'weight loss2',
  seances: [
    mockSeancesProgram1.CardioBike,
  ],
  date: 'Il y a 2 jours '
};

export const mockProgramAbdominalMuscles: IProgram  = {

  name: 'Abdominal muscles',
  seances: [
    mockSeancesProgram1.abs
  ],
  date: 'En cours'

};

export const mockProgramFullBody: IProgram  = {

  name: 'Full body',
  seances: [
    mockSeancesProgram1.pecAndArms,
    mockSeancesProgram1.backAndShoulders,
    mockSeancesProgram1.legsMachine,

  ],
  date: ''

};


