import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProgramsHomeComponent} from './programs-home/programs-home.component';

const routes: Routes = [
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
