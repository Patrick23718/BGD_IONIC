import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.scss'],
})
export class ReservationModalComponent implements OnInit {
  constructor(private ctrlModal: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.ctrlModal.dismiss();
  }
}
