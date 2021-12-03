import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-creermoncompte',
  templateUrl: './creermoncompte.page.html',
  styleUrls: ['./creermoncompte.page.scss'],
})
export class CreermoncomptePage implements OnInit {
  constructor(
    private localStorage: LocalStorageService,
    private navCtrl: NavController
  ) {
    // const init = this.localStorage.get('init');
    // if (init === '1') {
    //   this.navCtrl.navigateForward('coiffeuse/home');
    // }
  }

  ngOnInit() {}
}
