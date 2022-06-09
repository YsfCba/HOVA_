import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsFormComponent } from './programs-form/programs-form.component';
import {ProgramsHomeComponent} from './programs-home/programs-home.component';
import { SeancesFormComponent } from './seances-form/seances-form.component';

const routes: Routes = [
  {
    path: 'createProgramme',
    component: ProgramsFormComponent
  },
  {
    path: 'createSeance',
    component: SeancesFormComponent
  },

  {
    path: '',
    component: ProgramsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
