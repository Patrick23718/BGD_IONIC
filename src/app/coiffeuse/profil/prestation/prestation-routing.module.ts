import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestationPage } from './prestation.page';

const routes: Routes = [
  {
    path: '',
    component: PrestationPage
  },
  {
    path: 'ajout-prestation',
    loadChildren: () => import('./ajout-prestation/ajout-prestation.module').then( m => m.AjoutPrestationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestationPageRoutingModule {}
