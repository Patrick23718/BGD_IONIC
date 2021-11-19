/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-reinitialisation1',
  templateUrl: './reinitialisation1.page.html',
  styleUrls: ['./reinitialisation1.page.scss'],
})
export class Reinitialisation1Page implements OnInit {
  focused: boolean;
  email = '';
  constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Auth: AngularFireAuth,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
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

  async presentLoading(): Promise<any> {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Veuillez patienter...',
      backdropDismiss: false,
      mode: 'ios',
    });
  }

  async sendCode() {
    const loading = await this.presentLoading();
    await loading.present();
    console.log(this.email);
    this.Auth.sendPasswordResetEmail(this.email)
      .then(async () => {
        await this.presentToast('Email envoyé!!', 'success');
        this.navCtrl.navigateForward('/connexion-coiffeuse');
      })
      .catch(async () => {
        await this.presentToast(
          "Une erreur est survenue lors de l'envoie !!",
          'danger'
        );
      })
      .finally(() => {
        this.loadingController.dismiss();
      });
  }
}
