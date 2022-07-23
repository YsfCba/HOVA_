import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ProgramService } from './services/Program.service';
import { UpdateProgramComponent } from './programs/update-Program/update-Program.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, UpdateProgramComponent ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, ProgramService],
  bootstrap: [AppComponent],
})
export class AppModule {}
