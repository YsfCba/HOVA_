import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsFormComponent } from './programs-form/programs-form.component';
import {ProgramsHomeComponent} from './programs-home/programs-home.component';
import { SeanceFormComponent } from './seance-form/seance-form.component';

const routes: Routes = [
  {
    path: 'createProgramme',
    component: ProgramsFormComponent
  },
  {
    path: 'createSeance',
    component: SeanceFormComponent
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
