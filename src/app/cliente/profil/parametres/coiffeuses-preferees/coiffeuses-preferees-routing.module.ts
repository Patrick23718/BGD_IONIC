import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoiffeusesPrefereesPage } from './coiffeuses-preferees.page';

const routes: Routes = [
  {
    path: '',
    component: CoiffeusesPrefereesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoiffeusesPrefereesPageRoutingModule {}
