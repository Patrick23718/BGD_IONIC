import { Location } from '@angular/common';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { stringify } from 'querystring';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-plussurvous',
  templateUrl: './plussurvous.page.html',
  styleUrls: ['./plussurvous.page.scss'],
})
export class PlussurvousPage implements OnInit {
  user: Utilisateur = {
    nom: '',
    email: '',
    prenom: '',
    role: 'coiffeuse',
    telephone: '',
    ville: '',
    biographie: '',
  };
  password: '';
  focused: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private userServices: UtilisateurService,
    private localStorage: LocalStorageService,
    public navCtrl: NavController
  ) {}

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
      message: 'Veuillez patienter...',
      backdropDismiss: false,
      mode: 'ios',
    });
  }

  async onSubmit() {
    const loading = await this.presentLoading();
    // await loading.present();
    const userData = {
      user: this.user,
      password: this.password,
    };

    this.navCtrl.navigateForward('biographie', {
      state: userData,
    });
    // this.userServices.registerUser(this.user).subscribe(
    //   (res: any) => {
    //     this.localStorage.set('nom', this.user.nom);
    //     this.localStorage.set('prenom', this.user.prenom);
    //     this.localStorage.set('email', this.user.email);
    //     this.localStorage.set('ville', this.user.ville);
    //     this.localStorage.set('telephone', this.user.telephone);
    //     this.localStorage.set('password', this.user.password);
    //     console.log(res);

    //   },
    //   async (err: any) => {
    //     console.log(err);
    //     loading.dismiss();

    //     await this.presentToast(
    //       err.error.message.split('-')[1] || err.error.message.split('-')[0],
    //       'danger'
    //     );
    //   }
    // );
  }
}
