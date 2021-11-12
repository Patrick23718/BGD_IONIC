import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlussurvousPage } from './plussurvous.page';

const routes: Routes = [
  {
    path: '',
    component: PlussurvousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlussurvousPageRoutingModule {}
