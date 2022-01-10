/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/dot-notation */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PrestationService } from 'src/app/services/prestation.service';
import { PlanningService } from 'src/app/services/planning.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-resultat-recherche',
  templateUrl: './resultat-recherche.page.html',
  styleUrls: ['./resultat-recherche.page.scss'],
})
export class ResultatRecherchePage implements OnInit {
  test = false;
  search = null;
  ville = {
    _id: '',
    nom: '',
  };
  villes: any[];
  plage = null;
  date = null;
  prestation = null;
  prestations = [];
  research = [];
  userSearch = null;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private searchService: PlanningService,
    private prestService: PrestationService, // private villeController: Ville
    private localstorage: LocalStorageService
  ) {
    this.userSearch = JSON.parse(this.localstorage.get('search'));
    console.log(this.userSearch);
  }

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
    console.log(JSON.parse(this.localstorage.get('search')));
    // eslint-disable-next-line prefer-const
    this.prestations = [];
    this.research = [];
    this.route.params.subscribe((params) => {
      this.ville = params.ville;
      this.plage = params.plage;
      this.date = params.date;
      this.prestation = params.prestation;
    });

    this.route.snapshot.data['villes'].subscribe((res: any[]) => {
      console.log(res);
      this.villes = res;
      for (let i = 0; i < res.length; i++) {
        if (res[i]._id === this.ville) {
          this.ville = res[i];
          console.log(res[i]);
        }
      }
    });

    this.search = this.route.snapshot.data['search'];

    this.search.subscribe((res: any) => {
      this.research = res;
      console.log(this.research);
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      // for (let i = 0; i < res.length; i++) {
      //   this.prestService
      //     .searchPrest(this.prestation, res[i].uid)
      //     .subscribe((ress: any) => {
      //       console.log(ress);
      //       this.research.push(ress[0]);
      //     });
      // }
    });
  }

  myBackButton() {
    this.location.back();
  }

  filterVille(e) {
    const date = new Date(Date.parse(this.date));
    this.userSearch.ville = e.detail.value;

    const finalDate =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    // console.error(finalDate);
    this.date = finalDate;

    // console.log(e.detail.value);
    this.ville = e.detail.value;
    this.searchService
      .research(this.ville._id, this.prestation, this.plage, this.date)
      .subscribe(
        (res: any) => {
          this.research = res;
          // console.log(res);
        },
        (err: any) => {
          if (err.status === 404) {
            this.research = [];
          }
        }
      );
  }

  filter(e) {
    const date = new Date(Date.parse(e.detail.value));

    const finalDate =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    // console.error(finalDate);
    this.date = finalDate;
    this.userSearch.date = finalDate;
    console.log(this.userSearch);
    this.searchService
      .research(this.ville._id, this.prestation, this.plage, this.date)
      .subscribe(
        (res: any) => {
          this.research = res;
          console.log(res);
        },
        (err: any) => {
          if (err.status === 404) {
            this.research = [];
          }
        }
      );
  }
}
