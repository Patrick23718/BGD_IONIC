import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-reservation',
  templateUrl: './validation-reservation.page.html',
  styleUrls: ['./validation-reservation.page.scss'],
})
export class ValidationReservationPage implements OnInit {

  focused : boolean;
  constructor(private location : Location) {}

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
