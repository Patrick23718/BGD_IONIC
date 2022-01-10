import { Component, OnInit } from '@angular/core';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-inscription-coiffeuse',
  templateUrl: './inscription-coiffeuse.page.html',
  styleUrls: ['./inscription-coiffeuse.page.scss'],
})
export class InscriptionCoiffeusePage implements OnInit {
  user: Utilisateur = {
    nom: '',
    email: '',
    prenom: '',
    role: 'coiffeuse',
    numero: '',
    ville: '',
    biographie: '',
  };
  password = '';
  teste = '';
  focused: boolean;
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private userServices: UtilisateurService,
    private navCtrl: NavController,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {}

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

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  async onSubmit() {
    const loading = await this.presentLoading();
    await loading.present();
    this.userServices.userRegister(this.user, this.password).subscribe(
      (res: any) => {
        this.userServices.userLogin(this.user.email, this.password).subscribe(
          (log: any) => {
            this.localStorage.set('x-access-token', log.accessToken);
            const data = {
              email: log.email,
              id: log.id,
              nom: log.nom,
              prenom: log.prenom,
              role: log.role,
              imageURL: log.imageURL,
            };
            this.localStorage.set('user', JSON.stringify(data));
            loading.dismiss();
            this.presentToast(res.message, 'success');
            this.navCtrl.navigateForward('/coiffeuse/home');
          },
          (err: any) => {
            console.log(err);
            this.presentToast('Veuillez-vous connecter', 'success');
            loading.dismiss();
            this.navCtrl.navigateForward('/connexion-coiffeuse');
          }
        );
      },
      (err: any) => {
        // this.presentToast(err.error.message, 'danger');
        this.teste = JSON.stringify(err);
        this.presentToast(err.error.message, 'danger');
        console.warn(err);
        loading.dismiss();
      }
    );
  }
}
