import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation-reservation',
  templateUrl: './validation-reservation.page.html',
  styleUrls: ['./validation-reservation.page.scss'],
})
export class ValidationReservationPage implements OnInit {

  focused : boolean;
  espece : boolean = false;
  bancaire : boolean = false;
  constructor(
    private location : Location,
    private router : Router
    ) {}

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  myBackButton(){
    this.location.back();
  }

  goTo(){
    if(this.bancaire == true){
      this.router.navigateByUrl('cliente/acceuil/profil-hotesse/validation-reservation/validation-bancaire')
    }
    else if (this.espece == true){
      this.router.navigateByUrl('cliente/acceuil/profil-hotesse/validation-reservation/validation-espece');
    }
  }

  ngOnInit() {
  }

}
