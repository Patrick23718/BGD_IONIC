import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(public loadingController: LoadingController) {}

  async presentLoading(): Promise<any> {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Veuillez patienter...',
      backdropDismiss: false,
      mode: 'ios',
    });
  }

  // async presentToast(message: string, color: string) {
  //   const toast = await this.toastController.create({
  //     message,
  //     color,
  //     duration: 3000,
  //     position: 'top',
  //     mode: 'ios',
  //   });
  //   toast.present();
  // }
}
