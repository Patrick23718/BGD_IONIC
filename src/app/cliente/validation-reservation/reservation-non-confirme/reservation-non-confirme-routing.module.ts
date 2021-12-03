import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationNonConfirmePage } from './reservation-non-confirme.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationNonConfirmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationNonConfirmePageRoutingModule {}
