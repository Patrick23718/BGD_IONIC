import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  items = [
    { icon: 'guide.svg', title: 'Mon guide coiffeuse', to: 'guide' },
    {
      icon: 'prestation-icon.svg',
      title: 'Mes prestations',
      to: 'prestation',
    },
    { icon: 'galerie.svg', title: 'Ma galerie', to: 'galerie' },
    { icon: 'monnaie.svg', title: 'Mon porte monnaie', to: 'porte-monnaie' },
    { icon: 'historique.svg', title: 'Mon historique', to: 'historique' },
    {
      icon: 'nous-contacter.svg',
      title: 'Nous contacter',
      to: 'contacter-nous',
    },
  ];
  constructor(
    private userService: UtilisateurService,
    private router: Router,
    public loadingController: LoadingController
  ) {}

  async presentLoading(): Promise<any> {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Déconnection...',
      backdropDismiss: false,
      mode: 'ios',
    });
  }

  async signout() {
    const loading = await this.presentLoading();
    await loading.present();
    this.userService.signOut().then(() => {
      localStorage.removeItem('user');
      loading.dismiss();
      this.router.navigate(['/connexion-coiffeuse']);
    });
  }

  ngOnInit() {}
}
