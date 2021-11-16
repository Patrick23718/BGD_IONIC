import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestationModalPage } from './prestation-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PrestationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestationModalPageRoutingModule {}
