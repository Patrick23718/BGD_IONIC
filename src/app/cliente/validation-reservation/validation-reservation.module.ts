import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationReservationPageRoutingModule } from './validation-reservation-routing.module';

import { ValidationReservationPage } from './validation-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationReservationPageRoutingModule
  ],
  declarations: [ValidationReservationPage]
})
export class ValidationReservationPageModule {}
