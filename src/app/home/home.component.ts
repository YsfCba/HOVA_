import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public links = [
    {
      label: 'Profil',
      path: ['profil']
    },
    {
      label: 'Programmes',
      path: ['programs']
    },
    {
      label: 'Paramètres',
      path: ['settings']
    },
  ];
  constructor(private router: Router) { }

  ngOnInit() {}

  async goTo(path: string[]) {
    await this.router.navigate(path);
  }
}
