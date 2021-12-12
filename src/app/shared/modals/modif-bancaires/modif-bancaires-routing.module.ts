import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifBancairesPage } from './modif-bancaires.page';

const routes: Routes = [
  {
    path: '',
    component: ModifBancairesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifBancairesPageRoutingModule {}
