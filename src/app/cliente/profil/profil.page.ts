import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {


  items = [
    { icon: 'mon_historique.svg', title: 'Mon historique', to: 'historique' },
    { icon: 'inviter.svg', title: 'inviter des amis', to: 'inviter-amis',},
    { icon: 'question.svg', title: 'questions fréquentes', to: 'questions-frequentes' },
    { icon: 'contact2.svg', title: 'Nous contacter', to: 'nous-contacter',},
    { icon: 'parametre.svg', title: 'paramètres', to: 'parametres' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
