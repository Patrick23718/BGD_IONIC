/* eslint-disable @typescript-eslint/quotes */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { VilleService } from 'src/app/services/ville.service';

@Component({
  selector: 'app-nous-contacter',
  templateUrl: './nous-contacter.page.html',
  styleUrls: ['./nous-contacter.page.scss'],
})
export class NousContacterPage implements OnInit {
  focused: boolean;
  objet = '';
  msg = '';
  user: any;
  constructor(
    public location: Location,
    private localstorage: LocalStorageService,
    private contactService: VilleService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.user = JSON.parse(this.localstorage.get('user'));
    console.log(this.user);
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  myBackButton() {
    this.location.back();
  }

  async sendComment() {
    const loading = await this.presentLoading();
    await loading.present();

    if (this.objet !== '' && this.msg !== '') {
      const data = {
        objet: this.objet,
        message: this.msg,
        prenom: this.user.prenom,
        email: this.user.email,
      };
      this.contactService.contact(data).subscribe(
        async (res: any) => {
          console.log(res);
          await this.presentToast(res.message, 'success');
          this.loadingController.dismiss();
          this.navCtrl.navigateForward('/cliente/acceuil');
        },
        async (err: any) => {
          await this.presentToast(
            "Erreur lors de l'envoi du message",
            'danger'
          );
          this.loadingController.dismiss();
          console.warn(err);
        }
      );
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
}
