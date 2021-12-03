import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.page.html',
  styleUrls: ['./ville.page.scss'],
})
export class VillePage implements OnInit {
  prestations;
  value = '';
  constructor(public modalController: ModalController) {}

  ngOnInit() {
    console.log(this.prestations);
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss('');
  }

  arrayOption(item) {
    if (item.sub.length === 0) {
      let i = 0;
      for (i = 0; i < this.prestations.length; i++) {
        this.prestations[i].checked = false;
      }
      item.checked = true;
      this.value = item.title;
      this.modalController.dismiss(this.value);
    } else {
      const test = item.checked;
      let i = 0;
      for (i = 0; i < this.prestations.length; i++) {
        this.prestations[i].checked = false;
      }
      item.checked = !test;
      this.value = '';
    }
    console.log(this.value);
  }

  arrayOption2(arraySub, test) {
    let i = 0;
    for (i = 0; i < arraySub.sub.length; i++) {
      arraySub.sub[i].checked = false;
    }

    test.checked = true;
    this.value = arraySub.title + ' ' + test.title;
    this.modalController.dismiss(this.value);
  }
}
