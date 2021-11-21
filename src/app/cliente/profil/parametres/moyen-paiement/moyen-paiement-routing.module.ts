import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoyenPaiementPage } from './moyen-paiement.page';

const routes: Routes = [
  {
    path: '',
    component: MoyenPaiementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoyenPaiementPageRoutingModule {}
