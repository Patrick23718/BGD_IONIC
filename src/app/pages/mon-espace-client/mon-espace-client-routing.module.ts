import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonEspaceClientPage } from './mon-espace-client.page';

const routes: Routes = [
  {
    path: '',
    component: MonEspaceClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonEspaceClientPageRoutingModule {}
