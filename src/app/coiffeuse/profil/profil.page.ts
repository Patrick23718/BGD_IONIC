import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}
}
