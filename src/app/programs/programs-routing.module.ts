import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListExercicesComponent } from './list-exercices/list-exercices.component';
import { ListSeancesComponent } from './list-seances/list-seances.component';
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
  },
  {
    path: 'listSeances',
    component: ListSeancesComponent

  },
  {
    path: 'listExercices',
    component: ListExercicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
