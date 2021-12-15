/* eslint-disable @typescript-eslint/dot-notation */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PrestationService } from 'src/app/services/prestation.service';

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
    private loadingController: LoadingController,
    private prestService: PrestationService
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
    this.test = false;
    // eslint-disable-next-line prefer-const
    this.prestations = [];
    this.research = [];
    this.route.params.subscribe((params) => {
      this.ville = params.ville;
      this.plage = params.plage;
      this.date = params.date;
      this.prestation = params.prestation;
    });
    this.search = this.route.snapshot.data['search'];

    this.search.subscribe((res: any) => {
      console.log(res);
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < res.length; i++) {
        this.prestService
          .searchPrest(this.prestation, res[i].uid)
          .subscribe((ress: any) => {
            console.log(ress);
            this.research.push(ress[0]);
          });
      }
    });
  }

  myBackButton() {
    this.location.back();
  }

  filter() {}
}
