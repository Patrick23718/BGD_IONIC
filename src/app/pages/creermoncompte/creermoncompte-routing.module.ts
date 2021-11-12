import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreermoncomptePage } from './creermoncompte.page';

const routes: Routes = [
  {
    path: '',
    component: CreermoncomptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreermoncomptePageRoutingModule {}
