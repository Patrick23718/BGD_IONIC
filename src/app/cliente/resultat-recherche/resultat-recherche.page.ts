/* eslint-disable @typescript-eslint/dot-notation */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-resultat-recherche',
  templateUrl: './resultat-recherche.page.html',
  styleUrls: ['./resultat-recherche.page.scss'],
})
export class ResultatRecherchePage implements OnInit {
  test = false;
  search = null;
  ville = '';
  plage = null;
  date = null;
  prestation = null;
  prestations = [];
  research = [];
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private afS: AngularFirestore, // private router: ActivatedRouteSnapshot
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
    this.test = false;
    // eslint-disable-next-line prefer-const
    this.prestations = [];
    this.research = [];
    let uids = [];
    this.route.params.subscribe((params) => {
      this.ville = params.ville;
      this.plage = params.plage;
      this.date = params.date;
      this.prestation = params.prestation;
      // console.log(this.ville);
      // console.log(this.plage);
      // console.log(this.date);
      // console.log(this.prestation);
    });
    // const prestation = this.router.paramMap.get('prestation');
    // const date = new Date(Date.parse(this.router.paramMap.get('date')));
    // // eslint-disable-next-line radix
    // const plage = parseInt(this.router.paramMap.get('plage'));
    this.search = this.route.snapshot.data['search'];
    // this.search.docs.forEach((element) => {
    //   console.log(element.data());
    // });
    this.search.forEach((elt) => {
      elt.docs.forEach((res: any) => {
        const data = res.data();
        // console.log(data);
        if (data.plage[this.plage - 1].checked) {
          uids.push(data.uid);
        }
      });
      console.log(uids);
      if (uids.length !== 0) {
        uids.forEach((uid: string) => {
          const pres = this.afS
            .collection('prestation-coiffeuse', (ref) =>
              ref
                .where('prestation', '==', this.prestation)
                .where('uid', '==', uid)
            )
            .get();
          // console.log(pres);
          let i = 0;
          pres.forEach((elt1) => {
            elt1.docs.forEach((res1: any) => {
              i += 1;
              // console.log(res1.data());
              this.prestations.push(res1.data());
            });
            // console.log(this.prestations.length);
            this.prestations.forEach((element: any) => {
              const ok = this.afS
                .collection('utilisateur')
                .doc(element.uid)
                .get();
              // console.log(ok);
              ok.subscribe((elt2: any) => {
                // console.log(elt2.data());
                this.research.push({
                  uid: elt2.id,
                  user: elt2.data(),
                  prestation: element,
                  date: this.date,
                  plage: this.plage,
                });
                this.test = true;
              });
              console.log(this.research);
              this.loadingController.dismiss();
              // ok.forEach((elt2: any) => {
              // console.log(elt2.data());
              // console.log(elt2.id);
              // console.log({
              //   uid:
              //   user:
              //   prestation:
              //   date:
              //   plage:
              // })
              // elt2.docs.forEach((res2: any) => {
              //   console.log(res2.data());
              // });
              // });
            });
          });
          this.loadingController.dismiss();
          // console.log(i);
        });
      } else {
        this.loadingController.dismiss();
      }
    });
  }

  myBackButton() {
    this.location.back();
  }

  filter() {
    this.ngOnInit();
  }
}
