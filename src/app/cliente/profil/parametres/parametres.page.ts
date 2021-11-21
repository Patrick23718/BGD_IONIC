import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {

  items = [
    { title: 'Moyen de paiement', to: 'moyen-paiement' },
    { title: 'gestion du mot de passe', to: 'gestion-mot-passe',},
    { title: 'mes coiffeuses préférées', to: 'coiffeuses-preferees' },
    { title: 'supprimer un compte', to: 'supprimer-compte',},
    { title: 'CGU', to: 'cgu' },
  ];
  constructor(public location : Location) { }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back()
  }

}
