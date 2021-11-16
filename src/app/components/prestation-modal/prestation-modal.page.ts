import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-prestation-modal',
  templateUrl: './prestation-modal.page.html',
  styleUrls: ['./prestation-modal.page.scss'],
})
export class PrestationModalPage implements OnInit {
  prestations;
  constructor(public modalController: ModalController) {}

  ngOnInit() {
    console.log(this.prestations);
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
