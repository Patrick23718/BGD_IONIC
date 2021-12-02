import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AskConfirmationPage } from 'src/app/shared/modals/ask-confirmation/ask-confirmation.page';

@Component({
  selector: 'app-ma-carte',
  templateUrl: './ma-carte.page.html',
  styleUrls: ['./ma-carte.page.scss'],
})
export class MaCartePage implements OnInit {

  constructor(
    private location : Location,
    private modalCtrl : ModalController

  ) { }

  async openConfirmation(){
    const modal = await this.modalCtrl.create({
      component : AskConfirmationPage,
      cssClass : 'ask-css',
      backdropDismiss : true,
      mode : 'ios'
    });
    await modal.present();
    modal.onDidDismiss();
  }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {}

}
