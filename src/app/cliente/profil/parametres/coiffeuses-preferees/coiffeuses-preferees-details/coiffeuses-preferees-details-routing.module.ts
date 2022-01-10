import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoiffeusesPrefereesDetailsPage } from './coiffeuses-preferees-details.page';

const routes: Routes = [
  {
    path: '',
    component: CoiffeusesPrefereesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoiffeusesPrefereesDetailsPageRoutingModule {}
