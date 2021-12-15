import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Utilisateur } from 'src/app/interfaces/utilisateur';

@Component({
  selector: 'app-plussurvous',
  templateUrl: './plussurvous.page.html',
  styleUrls: ['./plussurvous.page.scss'],
})
export class PlussurvousPage implements OnInit {
  user: Utilisateur = {
    nom: '',
    email: '',
    prenom: '',
    role: 'coiffeuse',
    numero: '',
    ville: '',
    biographie: '',
  };
  password: '';
  focused: boolean;
  constructor(private location: Location, public navCtrl: NavController) {}

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

  async onSubmit() {
    const userData = {
      user: this.user,
      password: this.password,
    };

    this.navCtrl.navigateForward('biographie', {
      state: userData,
    });
  }
}
