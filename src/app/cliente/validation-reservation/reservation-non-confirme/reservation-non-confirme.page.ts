import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-reservation-non-confirme',
  templateUrl: './reservation-non-confirme.page.html',
  styleUrls: ['./reservation-non-confirme.page.scss'],
})
export class ReservationNonConfirmePage implements OnInit {
  uid = '';
  user = {
    prenom: '',
  };

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private localstorage: LocalStorageService
  ) {}

  myBackButton() {
    this.location.back();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.uid = params.uid;
      console.log(this.uid);
    });
    this.user = JSON.parse(this.localstorage.get('user'));
  }
}
