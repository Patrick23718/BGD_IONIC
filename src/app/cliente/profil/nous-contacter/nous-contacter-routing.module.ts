import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NousContacterPage } from './nous-contacter.page';

const routes: Routes = [
  {
    path: '',
    component: NousContacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NousContacterPageRoutingModule {}
