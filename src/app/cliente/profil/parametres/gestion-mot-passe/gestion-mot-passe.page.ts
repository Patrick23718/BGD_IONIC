/* eslint-disable @typescript-eslint/member-ordering */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-gestion-mot-passe',
  templateUrl: './gestion-mot-passe.page.html',
  styleUrls: ['./gestion-mot-passe.page.scss'],
})
export class GestionMotPassePage implements OnInit {
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    public location: Location,
    private userService: UtilisateurService
  ) {}
  newpassword = '';
  confirmpassword = '';
  password = '';
  focused: boolean;
  ngOnInit() {}

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  myBackButton() {
    this.location.back();
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

  async change() {
    if (
      this.newpassword !== '' &&
      this.confirmpassword !== '' &&
      this.password !== '' &&
      this.newpassword === this.confirmpassword
    ) {
      const loading = await this.presentLoading();
      await loading.present();
      this.userService
        .changePassword(this.password, this.newpassword)
        .subscribe(
          (res: any) => {
            console.log(res);
            loading.dismiss();
            this.presentToast(res.message, 'success');
          },
          (err: any) => {
            console.log(err);
            loading.dismiss();
            this.presentToast(err.error.message, 'danger');
          }
        );
    } else {
      this.presentToast('Veuillez bien remplir les champs', 'danger');
    }
  }
}
