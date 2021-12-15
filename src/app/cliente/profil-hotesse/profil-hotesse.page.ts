/* eslint-disable @typescript-eslint/dot-notation */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profil-hotesse',
  templateUrl: './profil-hotesse.page.html',
  styleUrls: ['./profil-hotesse.page.scss'],
})
export class ProfilHotessePage implements OnInit {
  test = true;
  uid;
  galeries = [];
  users = {
    biographie: '',
    imageURL: '',
    prenom: '',
    ville: '',
  };
  prestations = [];

  // eslint-disable-next-line @typescript-eslint/member-ordering
  slideOpts = {
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };
  constructor(
    public location: Location,
    private route: ActivatedRoute,
    private loadingController: LoadingController
  ) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: '',
      spinner: 'bubbles',
    });
    await loading.present();
  }

  ngOnInit() {
    // this.presentLoading();

    const prestOBX = this.route.snapshot.data['prest'];
    prestOBX.subscribe((res: any) => {
      this.prestations = res;
      console.log(res);
    });
    const profilOBX = this.route.snapshot.data['coiffeuse'];
    profilOBX.subscribe((res: any) => {
      this.users = res;
      console.log(res);
    });
  }

  myBackButton() {
    this.location.back();
  }
}
