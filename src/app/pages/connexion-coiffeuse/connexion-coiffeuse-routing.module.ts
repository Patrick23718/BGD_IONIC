import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionCoiffeusePage } from './connexion-coiffeuse.page';

const routes: Routes = [
  {
    path: '',
    component: ConnexionCoiffeusePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnexionCoiffeusePageRoutingModule {}
