import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationConfirmePage } from './reservation-confirme.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationConfirmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationConfirmePageRoutingModule {}
