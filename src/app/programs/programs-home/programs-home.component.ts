import { Component, OnInit, ViewChild } from '@angular/core';
import { IProgram } from '../../shared/models/program.interface';
import { SwiperOptions } from 'swiper';
import { mockProgramAbdominalMuscles, mockProgramFullBody, mockProgramMasseExpress, mockProgramWeightloss1, mockProgramWeightloss2, } from 'src/app/shared/mocks/program.mock';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProgramService } from '../../services/Program.service';



@Component({
  selector: 'app-programs-home',
  templateUrl: './programs-home.component.html',
  styleUrls: ['./programs-home.component.scss'],
})
export class ProgramsHomeComponent implements OnInit {
  public programsList: IProgram[] = [];
  public inProgressPrograms: IProgram[] = [];
  public swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: true,
  };
  private history: string[] = [];


  constructor(private router: Router, private location: Location, private service: ProgramService) {
    
  }

  id: any = "mission";
  readData: any;
  

  ngOnInit() {
    this.getInProgressPrograms();
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
    });
  }

  back(): void {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl('/')
    }
  }


  getInProgressPrograms() {
    this.programsList.push(mockProgramMasseExpress, mockProgramWeightloss1, mockProgramWeightloss2, mockProgramAbdominalMuscles, mockProgramFullBody);
    console.log(mockProgramMasseExpress.name);
  }

  onClickDetails(program: IProgram) {
    console.log(program);
    this.router.navigate(['/programs/listSeances'], { state: { program } })
  }

  tabChange(ids: any) {
    this.id = ids;
  }

}

