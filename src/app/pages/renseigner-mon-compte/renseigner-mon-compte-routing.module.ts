import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenseignerMonComptePage } from './renseigner-mon-compte.page';

const routes: Routes = [
  {
    path: '',
    component: RenseignerMonComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenseignerMonComptePageRoutingModule {}
