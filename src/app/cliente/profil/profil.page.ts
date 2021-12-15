import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AskDeletePage } from 'src/app/shared/modals/ask-delete/ask-delete.page';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  items = [
    { icon: 'mon_historique.svg', title: 'Mon historique', to: 'historique' },
    { icon: 'inviter.svg', title: 'inviter des amis', to: 'inviter-amis' },
    {
      icon: 'question.svg',
      title: 'questions fréquentes',
      to: 'questions-frequentes',
    },
    { icon: 'contact2.svg', title: 'Nous contacter', to: 'nous-contacter' },
    {
      icon: 'mon_historique.svg',
      title: 'Mes informations',
      to: 'mes-informations',
    },
    { icon: 'parametre.svg', title: 'paramètres', to: 'parametres' },
  ];
  user: any = {
    prenom: '',
    email: '',
  };
  constructor(
    private modalCtrl: ModalController,
    private localstorage: LocalStorageService
  ) {}

  async modalDeconnexion() {
    const modal = await this.modalCtrl.create({
      component: AskDeletePage,
      cssClass: 'ask-css',
      backdropDismiss: true,
      mode: 'ios',
    });

    await modal.present();
    modal.onDidDismiss();
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.user = JSON.parse(this.localstorage.get('user'));
    console.log(this.user);
  }
}
