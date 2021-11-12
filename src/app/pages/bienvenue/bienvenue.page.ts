import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})
export class BienvenuePage implements OnInit {
  prenom = '';
  constructor(
    private fbAuth: AngularFireAuth,
    private userService: UtilisateurService,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {}

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

  async ngOnInit() {
    const loading = await this.presentLoading();
    this.fbAuth.authState.subscribe(async (authState) => {
      this.prenom = authState.displayName.split('#$')[0];
      console.log(authState);
      loading.dismiss();
    });
  }
}
