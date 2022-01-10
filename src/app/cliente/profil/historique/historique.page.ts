import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaiementService } from 'src/app/services/paiement.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
  items = [];
  constructor(
    public location: Location,
    private reservationService: PaiementService
  ) {
    this.getReservation();
  }

  ngOnInit() {}

  myBackButton() {
    this.location.back();
  }

  getReservation() {
    this.reservationService.getReservation().subscribe((res: any) => {
      this.items = res;
      console.log(res);
    });
  }
}
