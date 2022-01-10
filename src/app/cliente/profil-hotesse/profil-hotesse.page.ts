/* eslint-disable @typescript-eslint/dot-notation */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PreferedService } from 'src/app/services/prefered.service';

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
    deplace: false,
    domicile: false,
  };
  shared = false;
  prestations = [];
  star = 3;
  loading = true;

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
    private loadingController: LoadingController,
    private like: PreferedService
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
    this.route.params.subscribe((params) => {
      this.uid = params.uid;
      console.log(this.uid);
    });

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

    const galerieOBX = this.route.snapshot.data['galeries'];
    galerieOBX.subscribe((res: any) => {
      this.galeries = res.data;
      console.log(res);
    });
    this.getPrefered();
  }

  myBackButton() {
    this.location.back();
  }

  managePrefered() {
    this.loading = true;
    if (this.shared) {
      this.like.removePrefered(this.uid).subscribe((res: any) => {
        console.log(res);
        this.shared = false;
        this.loading = false;
      });
    } else {
      this.like.addPrefered(this.uid).subscribe((res: any) => {
        console.log(res);
        this.shared = true;
        this.loading = false;
      });
    }
  }

  getPrefered() {
    this.like.getPrefered(this.uid).subscribe((res: any[]) => {
      if (res.length === 0) {
        this.shared = false;
        this.loading = false;
      } else {
        this.shared = true;
        this.loading = false;
      }
    });
  }
}
