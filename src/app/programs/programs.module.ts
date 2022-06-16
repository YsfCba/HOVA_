import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsHomeComponent } from './programs-home/programs-home.component';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../shared/shared.module';
import { ProgramsFormComponent } from './programs-form/programs-form.component';
import { SeancesFormComponent } from './seances-form/seances-form.component';
import { ListSeancesComponent } from './list-seances/list-seances.component';
import { ListExercicesComponent } from './list-exercices/list-exercices.component';

@NgModule({
  declarations: [
    ProgramsHomeComponent,
    ProgramsFormComponent,
    SeancesFormComponent,
    ListSeancesComponent,
    ListExercicesComponent
  ],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    SwiperModule,
    SharedModule
  ]
})
export class ProgramsModule { }
