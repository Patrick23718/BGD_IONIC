import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationConfirmePageRoutingModule } from './reservation-confirme-routing.module';

import { ReservationConfirmePage } from './reservation-confirme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationConfirmePageRoutingModule
  ],
  declarations: [ReservationConfirmePage]
})
export class ReservationConfirmePageModule {}
