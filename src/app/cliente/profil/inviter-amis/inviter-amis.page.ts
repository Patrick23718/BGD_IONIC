import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InvitationPage } from 'src/app/shared/modals/invitation/invitation.page';

@Component({
  selector: 'app-inviter-amis',
  templateUrl: './inviter-amis.page.html',
  styleUrls: ['./inviter-amis.page.scss'],
})
export class InviterAmisPage implements OnInit {

  constructor(
    public location : Location,
    private modalCtrl : ModalController
    ) { }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back()
  }

  async openInvitation(){
    const modal = await this.modalCtrl.create({
      component : InvitationPage,
      cssClass : 'invitation-css',
      backdropDismiss : true,
      mode : 'ios'
    });

    await modal.present();
    modal.onDidDismiss();
  }

}
