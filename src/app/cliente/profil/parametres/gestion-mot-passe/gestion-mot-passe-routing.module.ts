import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionMotPassePage } from './gestion-mot-passe.page';

const routes: Routes = [
  {
    path: '',
    component: GestionMotPassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionMotPassePageRoutingModule {}
