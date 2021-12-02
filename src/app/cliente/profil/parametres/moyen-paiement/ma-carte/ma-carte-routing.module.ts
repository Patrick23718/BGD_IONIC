import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaCartePage } from './ma-carte.page';

const routes: Routes = [
  {
    path: '',
    component: MaCartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaCartePageRoutingModule {}
