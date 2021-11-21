import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupprimerComptePage } from './supprimer-compte.page';

const routes: Routes = [
  {
    path: '',
    component: SupprimerComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupprimerComptePageRoutingModule {}
