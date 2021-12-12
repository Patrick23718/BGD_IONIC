import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-deconnection',
  templateUrl: './deconnection.page.html',
  styleUrls: ['./deconnection.page.scss'],
})
export class DeconnectionPage implements OnInit {
  constructor(
    private userService: UtilisateurService,
    private router: Router,
    public loadingController: LoadingController,
    private localstorage: LocalStorageService,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  async presentLoading(): Promise<any> {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Déconnection...',
      backdropDismiss: false,
      mode: 'ios',
    });
  }

  cancel() {
    this.modalController.dismiss();
  }

  async signout() {
    const loading = await this.presentLoading();
    await loading.present();
    this.userService.signOut().then(() => {
      this.localstorage.remove('utilisateur');
      loading.dismiss();
      this.cancel();
      this.router.navigate(['/connexion-coiffeuse']);
    });
  }
}
