import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilHomeComponent } from './profil-home/profil-home.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
