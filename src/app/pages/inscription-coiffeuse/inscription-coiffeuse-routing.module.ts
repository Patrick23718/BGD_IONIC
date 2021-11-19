import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionCoiffeusePage } from './inscription-coiffeuse.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionCoiffeusePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionCoiffeusePageRoutingModule {}
