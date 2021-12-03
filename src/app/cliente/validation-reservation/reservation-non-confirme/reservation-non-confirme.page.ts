import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-non-confirme',
  templateUrl: './reservation-non-confirme.page.html',
  styleUrls: ['./reservation-non-confirme.page.scss'],
})
export class ReservationNonConfirmePage implements OnInit {

  constructor(private location : Location) {}

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
