import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SuggestionVillePage } from 'src/app/shared/modals/suggestion-ville/suggestion-ville.page';

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
    // console.log(item);
    if (item.type.length === 0) {
      let i = 0;
      for (i = 0; i < this.prestations.length; i++) {
        this.prestations[i].checked = false;
      }
      item.checked = true;
      this.value = item.title;
      this.modalController.dismiss(item);
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

  arrayOption2(arraytype, test) {
    let i = 0;
    for (i = 0; i < arraytype.type.length; i++) {
      arraytype.type[i].checked = false;
    }

    test.checked = true;
    this.value = arraytype.title + ' ' + test.title;
    this.modalController.dismiss(test);
  }

  async openVilleModal() {
    const modal = await this.modalController.create({
      component: SuggestionVillePage,
      cssClass: 'prestationModal',
      backdropDismiss: true,
      mode: 'ios',
    });
    await modal.present();

    modal.onDidDismiss();
  }
}
