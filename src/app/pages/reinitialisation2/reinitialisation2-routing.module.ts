import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reinitialisation2Page } from './reinitialisation2.page';

const routes: Routes = [
  {
    path: '',
    component: Reinitialisation2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reinitialisation2PageRoutingModule {}
