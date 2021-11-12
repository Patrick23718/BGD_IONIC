import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtrecoiffeusePage } from './etrecoiffeuse.page';

const routes: Routes = [
  {
    path: '',
    component: EtrecoiffeusePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtrecoiffeusePageRoutingModule {}
