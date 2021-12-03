import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InviterAmisPage } from './inviter-amis.page';

const routes: Routes = [
  {
    path: '',
    component: InviterAmisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InviterAmisPageRoutingModule {}
