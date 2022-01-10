import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaiementService } from 'src/app/services/paiement.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  notification;
  loading1 = false;
  loading = false;
  constructor(
    private ctrlModal: ModalController,
    private reservationService: PaiementService
  ) {}

  dismiss() {
    this.ctrlModal.dismiss();
  }
  ngOnInit() {}

  goToChat(clientId: string) {
    console.log('je go chater avec la cliente ' + clientId);
  }

  accepteMethode(id) {
    this.loading = true;
    this.reservationService.updateReservationStatus(id, 'VALIDATE').subscribe(
      (res: any) => {
        console.log(res);
        this.loading = false;
        this.dismiss();
      },
      (err: any) => {
        console.warn(err);
        this.loading1 = false;
      }
    );
  }

  refuseMethode(id) {
    this.loading1 = true;
    this.reservationService.updateReservationStatus(id, 'REFUSE').subscribe(
      (res: any) => {
        console.log(res);
        this.loading1 = false;
        this.dismiss();
      },
      (err: any) => {
        console.warn(err);
        this.loading1 = false;
      }
    );
  }
}
