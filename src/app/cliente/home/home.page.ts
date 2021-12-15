/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/dot-notation */
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
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PlanningService } from 'src/app/services/planning.service';
import { PrestationService } from 'src/app/services/prestation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  segment = false;
  prestations = []; //environment.prestations;
  plages = [];
  villes = []; //environment.villes;
  prestation: any = null;
  ville: any = null;
  date = '';
  plage: any = null;
  type = environment.type;
  user: any = null;
  constructor(
    public alert: AlertController,
    private modalController: ModalController,
    private route: Router,
    private router: ActivatedRoute,
    private localstorage: LocalStorageService,
    private searchService: PlanningService,
    private prestService: PrestationService
  ) {}
  ionViewWillEnter() {
    this.user = JSON.parse(this.localstorage.get('user'));
    console.log(this.user);
  }
  ngOnInit(): void {
    this.user = JSON.parse(this.localstorage.get('user'));
    console.log(this.user);
    const villeOBX = this.router.snapshot.data['ville'];
    const prestationOBX = this.router.snapshot.data['prestation'];
    const plageOBX = this.router.snapshot.data['plages'];
    villeOBX.subscribe((res: any) => {
      this.villes = res;
      console.log(this.villes);
    });
    prestationOBX.subscribe((res: any) => {
      this.prestations = res;
      console.log(this.prestations);
    });
    plageOBX.subscribe((res: any) => {
      this.plages = res;
      console.log(this.plages);
    });
  }

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
      cssClass: 'calendarModal',
      componentProps: {
        plages: this.plages,
      },
      backdropDismiss: true,
      mode: 'ios',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      if (data.data !== '') {
        this.plage = data.data;
        this.date = this.plage.plage.plage;
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

  search() {
    const selectedDate = new Date(this.plage.date).toString();

    this.route.navigate([
      '/cliente/acceuil/resultat-recherche',
      this.ville._id,
      this.prestation._id,
      selectedDate,
      this.plage.plage._id,
    ]);
  }
}
