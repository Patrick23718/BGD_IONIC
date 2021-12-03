import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoyenPaiementPage } from './moyen-paiement.page';

const routes: Routes = [
  {
    path: '',
    component: MoyenPaiementPage
  },
  {
    path: 'ma-carte',
    loadChildren: () => import('./ma-carte/ma-carte.module').then( m => m.MaCartePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoyenPaiementPageRoutingModule {}
