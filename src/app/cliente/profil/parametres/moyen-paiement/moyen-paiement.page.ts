import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-moyen-paiement',
  templateUrl: './moyen-paiement.page.html',
  styleUrls: ['./moyen-paiement.page.scss'],
})
export class MoyenPaiementPage implements OnInit {

  constructor(
    public location : Location,
    public alert : AlertController
    ) { }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back()
  }

  async ajouterCarte() {
    const alert = await this.alert.create({
      header : '',
      message:
       `
       <app-donnees-bancaires></app-donnees-bancaires>

      `,
    });

    await alert.present();
  }

}
