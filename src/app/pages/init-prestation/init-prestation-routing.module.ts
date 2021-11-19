import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitPrestationPage } from './init-prestation.page';

const routes: Routes = [
  {
    path: '',
    component: InitPrestationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitPrestationPageRoutingModule {}
