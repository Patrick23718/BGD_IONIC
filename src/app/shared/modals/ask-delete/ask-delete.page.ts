import { Component, OnInit } from '@angular/core';
import {
  LoadingController,
  ModalController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-ask-delete',
  templateUrl: './ask-delete.page.html',
  styleUrls: ['./ask-delete.page.scss'],
})
export class AskDeletePage implements OnInit {
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private localstorage: LocalStorageService,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async presentLoading(): Promise<any> {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: '',
      backdropDismiss: false,
      mode: 'ios',
    });
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000,
      position: 'top',
      mode: 'ios',
    });
    toast.present();
  }

  ngOnInit() {}

  logout() {
    this.localstorage.remove('x-access-token');
    this.localstorage.remove('user');
    this.dismiss();
    this.navCtrl.navigateForward('/connexion-cliente');
  }
}
