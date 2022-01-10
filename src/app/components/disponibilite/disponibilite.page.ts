/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-disponibilite',
  templateUrl: './disponibilite.page.html',
  styleUrls: ['./disponibilite.page.scss'],
})
export class DisponibilitePage implements OnInit {
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
  months = [
    { month: 'Janvier', checked: false, days: 31 },
    { month: 'Fevrier', checked: false, days: 28 },
    { month: 'Mars', checked: false, days: 31 },
    { month: 'Avril', checked: false, days: 30 },
    { month: 'Mai', checked: false, days: 31 },
    { month: 'Juin', checked: false, days: 30 },
    { month: 'Juillet', checked: false, days: 31 },
    { month: 'Août', checked: false, days: 31 },
    { month: 'Septembre', checked: false, days: 30 },
    { month: 'Octobre', checked: false, days: 31 },
    { month: 'Novembre', checked: false, days: 30 },
    { month: 'Décembre', checked: false, days: 31 },
  ];
  constructor(public modalController: ModalController) {
    const i = new Date(Date.now()).getMonth();
    console.log(i);
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
  }

  onClick(item) {
    console.log(item.month);
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
}
