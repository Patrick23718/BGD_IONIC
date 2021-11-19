/* eslint-disable @typescript-eslint/quotes */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-contacter-nous',
  templateUrl: './contacter-nous.page.html',
  styleUrls: ['./contacter-nous.page.scss'],
})
export class ContacterNousPage implements OnInit {
  focused: boolean;
  objet = '';
  commentaires = '';
  uid: string;
  constructor(
    private location: Location,
    private firestore: AngularFirestore,
    private localstorage: LocalStorageService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) {
    this.uid = JSON.parse(this.localstorage.get('utilisateur')).uid;
    console.log(this.uid);
  }
  myBackButton() {
    this.location.back();
  }
  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }
  ngOnInit(): void {}
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
  async sendMessage() {
    const loading = await this.presentLoading();
    await loading.present();

    this.firestore
      .collection('contact')
      .add({
        uid: this.uid,
        objet: this.objet,
        commentaires: this.commentaires,
      })
      .then(async () => {
        await this.presentToast('Message envoyé!!', 'success');
        this.navCtrl.navigateForward('/coiffeuse/home');
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
