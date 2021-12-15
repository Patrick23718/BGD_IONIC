import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-biographie',
  templateUrl: './biographie.page.html',
  styleUrls: ['./biographie.page.scss'],
})
export class BiographiePage implements OnInit {
  user: Utilisateur = {
    nom: '',
    email: '',
    prenom: '',
    role: 'coiffeuse',
    numero: '',
    ville: '',
    biographie: '',
  };
  focused: boolean;
  test = '';
  teste = '';
  password: '';

  constructor(
    private location: Location,
    private router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private userServices: UtilisateurService,
    private localStorage: LocalStorageService,
    public navCtrl: NavController
  ) {
    if (router.getCurrentNavigation().extras.state) {
      const pageName = this.router.getCurrentNavigation().extras.state;
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      this.user = <Utilisateur>pageName.user;
      this.password = pageName.password;
      console.log(this.user);
      this.test = JSON.stringify(this.user);
      if (this.user.biographie !== '') {
        this.focused = true;
      }
    }
  }
  ngOnInit() {}
  myBackButton() {
    this.location.back();
  }

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
      message: '',
      backdropDismiss: true,
      mode: 'ios',
    });
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
            };
            this.localStorage.set('user', JSON.stringify(data));
            loading.dismiss();
            this.presentToast(res.message, 'success');
            this.navCtrl.navigateForward('/ajoutprestation');
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
        this.teste = JSON.stringify(err);
        this.presentToast(err.error.message, 'danger');
        this.presentToast(this.teste, 'danger');
        console.warn(err);
        loading.dismiss();
      }
    );
  }
}
