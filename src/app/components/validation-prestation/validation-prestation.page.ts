import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-validation-prestation',
  templateUrl: './validation-prestation.page.html',
  styleUrls: ['./validation-prestation.page.scss'],
})
export class ValidationPrestationPage implements OnInit {
  prestations;
  value = null;
  constructor(public modalController: ModalController) {}

  ngOnInit() {
    console.log(this.prestations);
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss('');
  }

  dismissValidate() {
    if (this.value !== null) {
      this.modalController.dismiss(this.value);
    }
  }

  arrayOption(item) {
    let i = 0;
    for (i = 0; i < this.prestations.length; i++) {
      this.prestations[i].prestation.checked = false;
    }
    item.prestation.checked = true;
    this.value = item;

    // } else {
    //   const test = item.checked;
    //   let i = 0;
    //   for (i = 0; i < this.prestations.length; i++) {
    //     this.prestations[i].checked = false;
    //   }
    //   item.checked = !test;
    //   this.value = '';
    // }
    console.log(this.value);
  }

  // arrayOption2(arraySub, test) {
  //   let i = 0;
  //   for (i = 0; i < arraySub.type.length; i++) {
  //     arraySub.type[i].checked = false;
  //   }

  //   test.checked = true;
  //   this.value = arraySub.prestation + ' ' + test.prestation;
  //   this.modalController.dismiss(test);
  // }
}
