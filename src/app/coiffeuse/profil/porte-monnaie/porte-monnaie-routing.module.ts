import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorteMonnaiePage } from './porte-monnaie.page';

const routes: Routes = [
  {
    path: '',
    component: PorteMonnaiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorteMonnaiePageRoutingModule {}
