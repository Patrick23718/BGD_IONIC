import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutprestationPage } from './ajoutprestation.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutprestationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutprestationPageRoutingModule {}
