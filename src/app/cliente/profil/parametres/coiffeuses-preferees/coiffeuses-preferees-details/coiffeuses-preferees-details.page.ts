/* eslint-disable @typescript-eslint/prefer-for-of */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
import { DisponibiliteService } from 'src/app/services/disponibilite.service';
import { PrestationService } from 'src/app/services/prestation.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-coiffeuses-preferees-details',
  templateUrl: './coiffeuses-preferees-details.page.html',
  styleUrls: ['./coiffeuses-preferees-details.page.scss'],
})
export class CoiffeusesPrefereesDetailsPage implements OnInit {
  segment = 'prestations';
  items: any[];
  user = {
    prenom: '',
    imageURL: '',
    ville: '',
  };
  uid;
  j = new Date(Date.now()).getDate();
  m = new Date(Date.now()).getMonth() + 1;
  y = new Date(Date.now()).getFullYear();
  days = [];
  slideOpts = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    // effect: slide,
    spaceBetween: 8,
    slidesPerView: 3,
    freeMode: true,
    loop: true,
  };

  slideOpts2 = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    // effect: slide,
    spaceBetween: 8,
    slidesPerView: 7,
    freeMode: true,
    loop: true,
  };
  date = '';
  dispo = [];
  months = [
    { month: 'Janvier', checked: false, days: 31, indexe: 1 },
    { month: 'Fevrier', checked: false, days: 28, indexe: 2 },
    { month: 'Mars', checked: false, days: 31, indexe: 3 },
    { month: 'Avril', checked: false, days: 30, indexe: 4 },
    { month: 'Mai', checked: false, days: 31, indexe: 5 },
    { month: 'Juin', checked: false, days: 30, indexe: 6 },
    { month: 'Juillet', checked: false, days: 31, indexe: 7 },
    { month: 'Août', checked: false, days: 31, indexe: 8 },
    { month: 'Septembre', checked: false, days: 30, indexe: 9 },
    { month: 'Octobre', checked: false, days: 31, indexe: 10 },
    { month: 'Novembre', checked: false, days: 30, indexe: 11 },
    { month: 'Décembre', checked: false, days: 31, indexe: 12 },
  ];
  constructor(
    public modalController: ModalController,
    public location: Location,
    private userService: UtilisateurService,
    private route: ActivatedRoute,
    private prestationService: PrestationService,
    private dispoService: DisponibiliteService
  ) {
    const i = new Date(Date.now()).getMonth();
    console.log(this.y + '-' + this.m + '-' + this.j);
    this.date = this.y + '-' + this.m + '-' + this.j;
    this.months[i].checked = true;
    if (i === 0) {
      this.slideOpts.initialSlide = 11;
    } else {
      this.slideOpts.initialSlide = i - 1;
    }
    for (let j = 1; j <= this.months[i].days; j++) {
      this.days.push(j);
    }
    console.log(this.days);

    this.route.params.subscribe((params) => {
      this.uid = params.uid;
      console.log(this.uid);

      this.userService.getCoiffeuse(this.uid).subscribe((res: any) => {
        this.user = res;

        console.log(this.user);
      });
      this.getPlage();
      this.prestationService
        .searchPrestProfile(this.uid)
        .subscribe((res: any) => {
          this.items = res;
          console.log(res);
        });
      this.dispoService.getDate(this.uid).subscribe((res: any) => {
        console.log(res);
      });
    });
  }
  onClickDay(day) {
    this.j = day;
    this.date = this.y + '-' + this.m + '-' + this.j;
    this.getPlage();
    console.log(this.j);
  }

  getPlage() {
    this.dispoService
      .getDatePlage(this.uid, this.date)
      .subscribe((res: any) => {
        console.log(res);
        this.dispo = res;
      });
  }
  onClick(item) {
    console.log(item.indexe);
    this.m = item.indexe;
    this.date = this.y + '-' + this.m + '-' + this.j;
    this.getPlage();
    for (let i = 0; i < this.months.length; i++) {
      this.months[i].checked = false;
    }
    this.days = [];
    for (let i = 1; i <= item.days; i++) {
      this.days.push(i);
    }
    console.log(this.days);
  }

  ngOnInit() {}
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss('');
  }

  segmentChanged(event: any) {
    this.segment = event.detail.value;
    console.log(this.segment);
  }

  check() {
    let i = 0;
    for (i = 0; i < 6; i++) {
      this.items[i].prestation.checked = false;
    }
  }

  checkC() {
    let i = 0;
    for (i = 0; i < 6; i++) {
      this.dispo[i].plage.checked = false;
    }
  }

  myBackButton() {
    this.location.back();
  }
}
