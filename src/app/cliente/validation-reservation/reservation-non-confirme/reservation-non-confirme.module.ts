import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationNonConfirmePageRoutingModule } from './reservation-non-confirme-routing.module';

import { ReservationNonConfirmePage } from './reservation-non-confirme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationNonConfirmePageRoutingModule
  ],
  declarations: [ReservationNonConfirmePage]
})
export class ReservationNonConfirmePageModule {}
