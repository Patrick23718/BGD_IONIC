import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.page.html',
  styleUrls: ['./prestation.page.scss'],
})
export class PrestationPage implements OnInit {
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
    let i = 0;
    for (i = 0; i < this.prestations.length; i++) {
      this.prestations[i].checked = false;
    }
    item.checked = true;
    if (item.sub.length === 0) {
      this.value = item.title;
      this.modalController.dismiss(this.value);
    } else {
      this.value = '';
    }
    console.log(this.value);
  }

  arrayOption2(arraySub, test) {
    let i = 0;
    for (i = 0; i < arraySub.length; i++) {
      arraySub[i].checked = false;
    }

    test.checked = true;
    this.value = test.title;
    this.modalController.dismiss(this.value);
  }
}
