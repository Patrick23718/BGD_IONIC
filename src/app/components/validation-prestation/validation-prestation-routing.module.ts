import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationPrestationPage } from './validation-prestation.page';

const routes: Routes = [
  {
    path: '',
    component: ValidationPrestationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationPrestationPageRoutingModule {}
