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
  date = new Date(Date.UTC(2021, 10, 17));
  value = new Intl.DateTimeFormat('en-FR').format(this.date);
  constructor(
    private location: Location,
    private reservationService: PaiementService
  ) {}

  ngOnInit() {
    this.getAwaitReservation();
  }

  myBackButton() {
    this.location.back();
  }

  getAwaitReservation() {
    this.reservationService
      .reservationByStatus('FINISH')
      .subscribe((res: any) => {
        this.items = res;
        console.log(res);
      });
  }
}
