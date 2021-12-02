import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonneesBancairesPage } from './donnees-bancaires.page';

const routes: Routes = [
  {
    path: '',
    component: DonneesBancairesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonneesBancairesPageRoutingModule {}
