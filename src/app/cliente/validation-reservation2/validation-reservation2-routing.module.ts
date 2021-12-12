import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationReservation2Page } from './validation-reservation2.page';

const routes: Routes = [
  {
    path: '',
    component: ValidationReservation2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationReservation2PageRoutingModule {}
