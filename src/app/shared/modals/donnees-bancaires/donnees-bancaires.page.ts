import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-donnees-bancaires',
  templateUrl: './donnees-bancaires.page.html',
  styleUrls: ['./donnees-bancaires.page.scss'],
})
export class DonneesBancairesPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
