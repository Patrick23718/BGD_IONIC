import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeconnectionPage } from './deconnection.page';

const routes: Routes = [
  {
    path: '',
    component: DeconnectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeconnectionPageRoutingModule {}
