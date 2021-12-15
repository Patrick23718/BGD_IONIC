/* eslint-disable no-underscore-dangle */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-mes-informations',
  templateUrl: './mes-informations.page.html',
  styleUrls: ['./mes-informations.page.scss'],
})
export class MesInformationsPage implements OnInit {
  profile = {
    _id: '',
    imageURL: '',
    nom: '',
    numero: '',
    prenom: '',
    ville: '',
  };
  focused: boolean = true;
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private location: Location,
    private userService: UtilisateurService,
    private router: ActivatedRoute,
    private localStorage: LocalStorageService
  ) {}

  myBackButton() {
    this.location.back();
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  ngOnInit() {
    const profileOBX = this.router.snapshot.data['profil'];
    profileOBX.subscribe((res: any) => {
      this.profile.nom = res.nom;
      this.profile.prenom = res.prenom;
      this.profile.numero = res.numero;
      this.profile.ville = res.ville;
      this.profile.imageURL = res.imageURL;
      this.profile._id = res._id;
      console.log(this.profile);
    });
  }

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

  async onUpdate() {
    const loading = await this.presentLoading();
    await loading.present();
    this.userService.updateUser(this.profile).subscribe((res: any) => {
      console.log(res);
      this.userService.getUser().subscribe((ress: any) => {
        console.log(ress);
        const data = {
          email: ress.email,
          id: ress._id,
          nom: ress.nom,
          prenom: ress.prenom,
          role: ress.role,
        };
        this.localStorage.set('user', JSON.stringify(data));
        loading.dismiss();
      });
    });
  }
}
