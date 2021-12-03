import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisHotessePage } from './avis-hotesse.page';

const routes: Routes = [
  {
    path: '',
    component: AvisHotessePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisHotessePageRoutingModule {}
