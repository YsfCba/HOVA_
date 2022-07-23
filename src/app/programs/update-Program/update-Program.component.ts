import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-Program',
  templateUrl: './update-Program.component.html',
  styleUrls: ['./update-Program.component.scss']
})
export class UpdateProgramComponent implements OnInit {

  name: string;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(){}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
