import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtrecoiffeePage } from './etrecoiffee.page';

const routes: Routes = [
  {
    path: '',
    component: EtrecoiffeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtrecoiffeePageRoutingModule {}
