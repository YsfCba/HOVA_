import { IProgram } from '../models/program.interface';
import { mockSeancesProgram1 } from './seances.mock';

export const mockProgramMasseExpress: IProgram  = {

    name: 'Masse Express',
    seances: [
      mockSeancesProgram1.pecAndShoulders,
      mockSeancesProgram1.backAndBiceps,
      mockSeancesProgram1.legs
    ],
    date: new Date()

};
// export const mockProgramSeche: IProgram = 

// name: 'Masse Express',
// seances: [
//   mockSeancesProgram1.pecAndShoulders,
//   mockSeancesProgram1.backAndBiceps,
//   mockSeancesProgram1.legs
// ],
// date: new Date()


