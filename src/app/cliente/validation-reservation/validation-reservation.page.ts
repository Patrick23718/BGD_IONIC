import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CalendarPage } from 'src/app/components/calendar/calendar.page';

@Component({
  selector: 'app-validation-reservation',
  templateUrl: './validation-reservation.page.html',
  styleUrls: ['./validation-reservation.page.scss'],
})
export class ValidationReservationPage implements OnInit {
  focused: boolean;
  espece = false;
  plage: any;
  date = '';
  bancaire = false;
  constructor(
    private location: Location,
    private router: Router,
    private modalController: ModalController
  ) {}

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  myBackButton() {
    this.location.back();
  }

  async openCalendarModal() {
    const modal = await this.modalController.create({
      component: CalendarPage,
      cssClass: 'calendarModal',
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

  goTo() {
    if (this.bancaire === true) {
      this.router.navigateByUrl(
        'cliente/acceuil/profil-hotesse/validation-reservation/validation-bancaire'
      );
    } else if (this.espece === true) {
      this.router.navigateByUrl(
        'cliente/acceuil/profil-hotesse/validation-reservation/validation-espece'
      );
    }
  }

  ngOnInit() {}
}
