import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profil-home',
  templateUrl: './profil-home.component.html',
  styleUrls: ['./profil-home.component.scss'],
})
export class ProfilHomeComponent implements OnInit {
  
  public options: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Evolution de la population'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
  }, 
  {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
  },
  ]}

  private history: string[] = [];

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    Highcharts.chart('container', this.options);
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
