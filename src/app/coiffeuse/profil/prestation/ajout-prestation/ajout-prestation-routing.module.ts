import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutPrestationPage } from './ajout-prestation.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutPrestationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutPrestationPageRoutingModule {}
