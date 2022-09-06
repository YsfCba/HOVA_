import { Component, OnInit, ViewChild } from '@angular/core';
import { IProgram } from '../../shared/models/program.interface';
import { SwiperOptions } from 'swiper';
import { mockProgramAbdominalMuscles, mockProgramFullBody, mockProgramMasseExpress, mockProgramWeightloss1, mockProgramWeightloss2, } from 'src/app/shared/mocks/program.mock';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { API_PARAMS, ProgramService } from '../../services/Program.service';
import { ModalController } from '@ionic/angular';
import { UpdateProgramComponent } from '../update-Program/update-Program.component';



@Component({
  selector: 'app-programs-home',
  templateUrl: './programs-home.component.html',
  styleUrls: ['./programs-home.component.scss'],
})
export class ProgramsHomeComponent implements OnInit {
  
  public inProgressPrograms: IProgram[] = [];
  public swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: true,
  };
  private history: string[] = [];

  message: string;


  constructor(private router: Router, private location: Location, private service: ProgramService, private modalCtrl: ModalController) {

  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: UpdateProgramComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }

  id: any = "mission";
  


  ngOnInit() {
    this.getInProgressPrograms();
    this.getAllData();
  }


  deleteID(id: any) {
    console.log(id, 'deleteid');
    this.service.deleteData(id,API_PARAMS.PROGRAMS).subscribe((res) => {
      console.log(res, 'deleteres==>');
      this.getAllData();

    })

  }

  readData: any;
  
  getAllData() {
    this.service.getAllData(API_PARAMS.PROGRAMS).subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;

    });
  }

  public programsList: IProgram[] = [];
  
  getInProgressPrograms() {
    this.programsList.push(
      mockProgramMasseExpress, 
      mockProgramWeightloss1, 
      mockProgramWeightloss2, 
      mockProgramAbdominalMuscles, 
      mockProgramFullBody);
  }

  onClickDetails(program: IProgram) {
    console.log(program);
    this.router.navigate(['/programs/listSeances'],
    {state: {program} })
  }
  onClickDetail(readData: any) {
    this.router.navigate(['/programs/listSeancesCustom'],
    { state: { readData } })
  }


  tabChange(ids: any) {
    this.id = ids;
  }
  
  back(): void {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl('/')
    }
  }


}

