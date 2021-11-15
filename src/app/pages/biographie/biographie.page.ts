import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
    role: '',
    telephone: '',
    ville: '',
    biographie: '',
    photoURL: '',
  };
  focused: boolean;
  test = '';
  teste = '';
  password: '';

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
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

  // async registerUser() {
  //   const loading = await this.presentLoading();
  //   await loading.present();
  //   this.auth
  //     .createUserWithEmailAndPassword(this.user.email, this.password)
  //     .then((res) => {
  //       console.log('then' + res);
  //     })
  //     .catch((error) => {
  //       console.log('catch' + error);
  //     })
  //     .finally(() => console.log('fin'));
  // }
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
      backdropDismiss: false,
      mode: 'ios',
    });
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
          this.localStorage.set('init', '1');
          await this.firestore
            .collection(`utilisateur`)
            .doc(res.user.uid)
            .set(this.user);
          loading.dismiss();
          await this.presentToast('Opération réussite!!', 'success');
          this.navCtrl.navigateForward('/ajoutprestation');
        } catch (error) {
          loading.dismiss();
          await this.presentToast('Opération réussite!!', 'danger');
        }
        // Do something here
      })
      .catch(async (error) => {
        loading.dismiss();
        window.alert(JSON.stringify(error));
        console.log(JSON.stringify(error));
        await this.presentToast(JSON.stringify(error), 'danger');
      });

    // this.userServices.registerUser(this.user).subscribe(
    //   async (res: any) => {
    //     // this.localStorage.set('nom', this.user.nom);
    //     // this.localStorage.set('prenom', this.user.prenom);
    //     // this.localStorage.set('email', this.user.email);
    //     // this.localStorage.set('ville', this.user.ville);
    //     // this.localStorage.set('telephone', this.user.telephone);
    //     // this.localStorage.set('password', this.user.password);
    //     this.teste = 'ok1';
    //     console.log(res);
    //     await this.auth.signInWithEmailAndPassword(
    //       this.user.email,
    //       this.user.password
    //     );
    //     this.teste = 'ok2';
    //     loading.dismiss();
    //     this.localStorage.set('init', '1');
    //     this.teste = 'ok3';
    //     await this.presentToast('Opération réussite!!', 'success');
    //     this.teste = 'ok4';
    //     this.navCtrl.navigateForward('/ajoutprestation');
    //   },
    //   async (err: any) => {
    //     this.teste = 'err1';
    //     console.log(err);
    //     this.teste = 'err2';
    //     loading.dismiss();

    //     const dom = {
    //       headers: {
    //         normalizedNames: {},
    //         lazyUpdate: null,
    //         headers: {},
    //       },
    //       status: 0,
    //       statusText: 'Unknown Error',
    //       url: 'http://93.90.207.75:8082/api/Users',
    //       ok: false,
    //       name: 'HttpErrorResponse',
    //       message:
    //         'Http failure response for http://93.90.207.75:8082/api/Users:0 Unknown Error',
    //       error: { isTrusted: true },
    //     };
    //     this.teste = JSON.stringify(err);
    //     await this.presentToast(
    //       err.error.message.split(' - ')[1] ||
    //         err.error.message.split(' - ')[0],
    //       'danger'
    //     );
    //   }
    // );
  }
}
