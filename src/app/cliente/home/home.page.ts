/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CalendarPage } from 'src/app/components/calendar/calendar.page';
import { PrestationPage } from 'src/app/components/prestation/prestation.page';
import { VillePage } from 'src/app/components/ville/ville.page';
import { ResaPage } from 'src/app/shared/modals/resa/resa.page';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  segment = false;
  prestations = environment.prestations;
  villes = environment.villes;
  prestation = '';
  ville = '';
  date = '';
  plage: any;
  type = environment.type;
  constructor(
    public alert: AlertController,
    private modalController: ModalController
  ) {}
  ngOnInit(): void {}

  async openPrestationModal() {
    const modal = await this.modalController.create({
      component: PrestationPage,
      componentProps: {
        prestations: this.prestations,
      },
      cssClass: 'prestationModal',
      backdropDismiss: true,
      mode: 'ios',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      if (data.data !== '') {
        this.prestation = data.data;
      }
      console.log(data); // Here's your selected user!
    });
  }
  async openVilleModal() {
    const modal = await this.modalController.create({
      component: VillePage,
      componentProps: {
        prestations: this.villes,
      },
      cssClass: 'prestationModal',
      backdropDismiss: true,
      mode: 'ios',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      if (data.data !== '') {
        this.ville = data.data;
      }
      console.log(data); // Here's your selected user!
    });
  }

  async openCalendarModal() {
    const modal = await this.modalController.create({
      component: CalendarPage,
      cssClass: 'prestationModal',
      backdropDismiss: true,
      mode: 'ios',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      if (data.data !== '') {
        this.plage = data.data;
        this.date = this.plage.plage.text;
      }
      console.log(data); // Here's your selected user!
    });
  }

  async openImageModal(resa: any[]) {
    console.log(resa);
    const modal = await this.modalController.create({
      component: ResaPage,
      componentProps: {
        resa: resa,
      },
      cssClass: 'imageModal',
      backdropDismiss: true,
      mode: 'ios',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.prestation = data.data;
        this.segment = false;
      }
      console.log(data); // Here's your selected user!
    });
  }

  search() {}
}
