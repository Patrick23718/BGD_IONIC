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
  test = false;
  uid = '';
  galeries = [];
  users = null;
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
    private afS: AngularFirestore,
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
    this.presentLoading();
    this.route.params.subscribe((params) => {
      this.uid = params.uid;
      // console.log(this.ville);
      // console.log(this.plage);
      console.log(this.uid);
      // console.log(this.prestation);
    });

    const user = this.afS.collection('utilisateur').doc(this.uid).get();
    user.subscribe(
      (res: any) => {
        console.log(res.data());
        this.users = res.data();
        const galerie = this.afS
          .collection('galerie', (ref) => ref.where('uid', '==', this.uid))
          .get();

        galerie.subscribe(
          (res1: any) => {
            res1.docs.forEach((element) => {
              console.log(element.data());
              this.galeries.push(element.data());
            });
            const prestation = this.afS
              .collection('prestation-coiffeuse', (ref) =>
                ref.where('uid', '==', this.uid)
              )
              .get();
            prestation.subscribe((res2: any) => {
              res2.docs.forEach((element) => {
                console.log(element.data());
                this.prestations.push(element.data());
                this.test = true;
                this.loadingController.dismiss();
              });
            });
          },
          (err: any) => {
            this.loadingController.dismiss();
          }
        );
      },
      (err: any) => {
        this.loadingController.dismiss();
      }
    );
  }

  myBackButton() {
    this.location.back();
  }
}
