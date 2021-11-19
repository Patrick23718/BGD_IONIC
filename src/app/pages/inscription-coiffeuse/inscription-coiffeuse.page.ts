import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
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
    role: '',
    telephone: '',
    ville: '',
    biographie: '',
    photoURL: '',
  };
  password = '';
  focused: boolean;
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private userServices: UtilisateurService,
    private navCtrl: NavController,
    private firestore: AngularFirestore
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

    this.userServices
      .registerUser(this.user.email, this.password)
      .then(async (res: any) => {
        res.user.updateProfile({
          displayName: this.user.prenom,
          phoneNumber: this.user.telephone,
        });
        console.log(res);
        try {
          await this.firestore
            .collection(`utilisateur`)
            .doc(res.user.uid)
            .set(this.user);
          loading.dismiss();
          await this.presentToast('Opération réussite!!', 'success');
          this.navCtrl.navigateForward('/coiffeuse/home');
        } catch (error) {
          loading.dismiss();
          await this.presentToast(
            'Veuillez mettre à jour vos informations !!',
            'danger'
          );
        }
        // Do something here
      })
      .catch(async (error) => {
        loading.dismiss();
        console.log(JSON.stringify(error));
        await this.presentToast(JSON.stringify(error), 'danger');
      });
  }
}
