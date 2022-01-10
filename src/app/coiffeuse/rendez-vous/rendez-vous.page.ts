import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaiementService } from 'src/app/services/paiement.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.page.html',
  styleUrls: ['./rendez-vous.page.scss'],
})
export class RendezVousPage implements OnInit {
  items = [];
  constructor(
    private location: Location,
    private reservationService: PaiementService
  ) {}

  ngOnInit() {}
  myBackButton() {
    this.location.back();
  }
  ionViewWillEnter() {
    this.getReservation();
  }

  getReservation() {
    this.reservationService.getCoiffeuseReservation().subscribe((res: any) => {
      this.items = res;
      console.log(res);
    });
  }

  acceptReservation(id) {
    this.reservationService
      .updateReservationStatus(id, 'VALIDATE')
      .subscribe((res: any) => {
        console.log(res);
        this.getReservation();
      });
  }

  refuseReservation(id) {
    this.reservationService
      .updateReservationStatus(id, 'REFUSE')
      .subscribe((res: any) => {
        console.log(res);
        this.getReservation();
      });
  }
}
