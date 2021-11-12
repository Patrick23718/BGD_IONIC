import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  notification;
  constructor(private ctrlModal: ModalController) {}

  dismiss() {
    this.ctrlModal.dismiss();
  }
  ngOnInit() {}

  goToChat(clientId: string) {
    console.log('je go chater avec la cliente ' + clientId);
  }
}
