import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { DonneesBancairesPage } from 'src/app/shared/modals/donnees-bancaires/donnees-bancaires.page';

@Component({
  selector: 'app-moyen-paiement',
  templateUrl: './moyen-paiement.page.html',
  styleUrls: ['./moyen-paiement.page.scss'],
})
export class MoyenPaiementPage implements OnInit {
  carte;
  constructor(
    public location: Location,
    private modalCtrl: ModalController,
    private localstorage: LocalStorageService
  ) {}

  ngOnInit() {
    this.getCart();
  }

  myBackButton() {
    this.location.back();
  }

  async infosBancaires() {
    const modal = await this.modalCtrl.create({
      component: DonneesBancairesPage,
      cssClass: 'bancaire-css',
      backdropDismiss: true,
      mode: 'ios',
    });

    await modal.present();
    modal.onDidDismiss();
  }

  getCart() {
    this.carte = JSON.stringify(this.localstorage.get('carte'));
    console.log(this.carte);
  }
}
