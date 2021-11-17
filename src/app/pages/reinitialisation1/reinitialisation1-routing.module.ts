import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reinitialisation1Page } from './reinitialisation1.page';

const routes: Routes = [
  {
    path: '',
    component: Reinitialisation1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reinitialisation1PageRoutingModule {}
