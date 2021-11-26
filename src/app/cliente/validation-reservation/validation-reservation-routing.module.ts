import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationReservationPage } from './validation-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: ValidationReservationPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationReservationPageRoutingModule {}
