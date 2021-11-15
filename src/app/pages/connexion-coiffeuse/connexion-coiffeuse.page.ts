import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-connexion-coiffeuse',
  templateUrl: './connexion-coiffeuse.page.html',
  styleUrls: ['./connexion-coiffeuse.page.scss'],
})
export class ConnexionCoiffeusePage implements OnInit {
  user = {
    email: '',
    password: '',
  };
  focused: boolean;
  constructor(
    private location: Location,
    private router: Router,
    private userService: UtilisateurService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  async presentLoading(): Promise<any> {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: '',
      backdropDismiss: false,
      mode: 'ios',
    });
  }

  myBackButton() {
    this.location.back();
  }
  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  async signIn() {
    const loading = await this.presentLoading();
    await loading.present();
    this.userService
      .signIn(this.user.email, this.user.password)
      .then((res: any) => {
        console.log(res);
        this.user = {
          email: '',
          password: '',
        };
        loading.dismiss();
        // this.router.navigate(['/coiffeuse/home'], { replaceUrl: true });
        this.router.navigateByUrl('/coiffeuse/home', {
          replaceUrl: true,
        });
      })
      .catch((error) => {
        window.alert(JSON.stringify(error));
        console.log(error);
        loading.dismiss();
      });
  }
}
