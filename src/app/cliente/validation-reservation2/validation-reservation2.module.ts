import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationReservation2PageRoutingModule } from './validation-reservation2-routing.module';

import { ValidationReservation2Page } from './validation-reservation2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationReservation2PageRoutingModule
  ],
  declarations: [ValidationReservation2Page]
})
export class ValidationReservation2PageModule {}
