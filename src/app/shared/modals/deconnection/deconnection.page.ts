import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  LoadingController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-deconnection',
  templateUrl: './deconnection.page.html',
  styleUrls: ['./deconnection.page.scss'],
})
export class DeconnectionPage implements OnInit {
  constructor(
    // private userService: UtilisateurService,
    private router: Router,
    public loadingController: LoadingController,
    private localstorage: LocalStorageService,
    private modalController: ModalController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async presentLoading(): Promise<any> {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Déconnection...',
      backdropDismiss: false,
      mode: 'ios',
    });
  }

  cancel() {
    this.modalController.dismiss();
  }

  async signout() {
    this.localstorage.remove('x-access-token');
    this.localstorage.remove('user');
    this.navCtrl.navigateForward('/connexion-coiffeuse');
    this.modalController.dismiss();
  }
}
