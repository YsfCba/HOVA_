import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsHomeComponent } from './programs-home/programs-home.component';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProgramsHomeComponent],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    SwiperModule,
    SharedModule
  ]
})
export class ProgramsModule { }
