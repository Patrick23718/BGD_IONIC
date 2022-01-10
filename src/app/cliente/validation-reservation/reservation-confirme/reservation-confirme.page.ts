import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-reservation-confirme',
  templateUrl: './reservation-confirme.page.html',
  styleUrls: ['./reservation-confirme.page.scss'],
})
export class ReservationConfirmePage implements OnInit {
  uid = '';
  plage = '';
  prest = '';
  date = '';
  user = {
    prenom: '',
  };

  constructor(
    private route: ActivatedRoute,
    private localstorage: LocalStorageService
  ) {}
  //:plage/:prest/:coif/:date
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.uid = params.coif;
      console.log(this.uid);
    });
    this.route.params.subscribe((params) => {
      this.plage = params.plage;
      this.plage = this.plage.split('h ')[0];
      console.log(this.plage);
    });
    this.route.params.subscribe((params) => {
      this.prest = params.prest;
      console.log(this.prest);
    });
    this.route.params.subscribe((params) => {
      this.date = params.date;
      console.log(this.date);
    });
    this.user = JSON.parse(this.localstorage.get('user'));
  }
}
