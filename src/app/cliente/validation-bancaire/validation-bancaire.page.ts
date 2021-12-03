import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModifBancairesPage } from 'src/app/shared/modals/modif-bancaires/modif-bancaires.page';

@Component({
  selector: 'app-validation-bancaire',
  templateUrl: './validation-bancaire.page.html',
  styleUrls: ['./validation-bancaire.page.scss'],
})
export class ValidationBancairePage implements OnInit {

  constructor(
    private location : Location,
    private modalCtrl : ModalController
  ) { }

  myBackButton(){
    this.location.back();
  }

  async modificationBancaire(){
    const modal = await this.modalCtrl.create({
      component : ModifBancairesPage,
      cssClass : 'bancaires-css',
      backdropDismiss : true,
      mode : 'ios'
    });

    await modal.present();
    modal.onDidDismiss();
  }

  ngOnInit() {
  }

}
