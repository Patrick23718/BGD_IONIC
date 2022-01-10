import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-connexion-cliente',
  templateUrl: './connexion-cliente.page.html',
  styleUrls: ['./connexion-cliente.page.scss'],
})
export class ConnexionClientePage implements OnInit {
  user = {
    email: '',
    password: '',
  };
  focused: boolean;
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private userServices: UtilisateurService,
    private navCtrl: NavController,
    private route: Router,
    private localStorage: LocalStorageService
  ) {}

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
  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  async signIn() {
    const loading = await this.presentLoading();
    await loading.present();
    this.userServices.userLogin(this.user.email, this.user.password).subscribe(
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
        console.log(data);
        this.localStorage.set('user', JSON.stringify(data));
        loading.dismiss();
        if (log.role === 'coiffeuse') {
          this.navCtrl.navigateForward('/coiffeuse/home');
        } else if (log.role === 'cliente') {
          this.route.navigateByUrl('/cliente/acceuil');
        }
      },
      (err: any) => {
        console.log(err);
        this.presentToast(err.error.message, 'danger');
        loading.dismiss();
      }
    );
  }
}
