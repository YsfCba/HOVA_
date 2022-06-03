import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsHomeComponent } from './programs-home/programs-home.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ProgramsHomeComponent],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    SwiperModule
  ]
})
export class ProgramsModule { }
