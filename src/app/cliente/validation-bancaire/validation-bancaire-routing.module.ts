import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationBancairePage } from './validation-bancaire.page';

const routes: Routes = [
  {
    path: '',
    component: ValidationBancairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationBancairePageRoutingModule {}
