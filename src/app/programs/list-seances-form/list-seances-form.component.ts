import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_PARAMS, ProgramService } from 'src/app/services/Program.service';

@Component({
  selector: 'app-list-seances-form',
  templateUrl: './list-seances-form.component.html',
  styleUrls: ['./list-seances-form.component.scss']
})
export class ListSeancesFormComponent implements OnInit {

  readDatas: any;


  constructor(private router: Router, private location: Location, private service: ProgramService) { }

  ngOnInit() {
    this.readDatas = this.router.getCurrentNavigation().extras.state.readData;

  }

  getAllData() {
    this.service.getAllData(API_PARAMS.SEANCE).subscribe((res) => {
      console.log(res, "res==>");
      this.readDatas = res.data;

    });
  }

}
