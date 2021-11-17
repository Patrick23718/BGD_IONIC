import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionClientePage } from './connexion-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ConnexionClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnexionClientePageRoutingModule {}
