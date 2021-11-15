import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-renseigner-mon-compte',
  templateUrl: './renseigner-mon-compte.page.html',
  styleUrls: ['./renseigner-mon-compte.page.scss'],
})
export class RenseignerMonComptePage implements OnInit {

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

    this.navCtrl.navigateForward('mon-espace-client', {
      state: userData,
    });

  }
}
