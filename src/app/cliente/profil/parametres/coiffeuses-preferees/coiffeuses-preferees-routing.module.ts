import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoiffeusesPrefereesPage } from './coiffeuses-preferees.page';

const routes: Routes = [
  {
    path: '',
    component: CoiffeusesPrefereesPage,
  },
  {
    path: 'coiffeuses-preferees-details/:uid',
    loadChildren: () =>
      import(
        './coiffeuses-preferees-details/coiffeuses-preferees-details.module'
      ).then((m) => m.CoiffeusesPrefereesDetailsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoiffeusesPrefereesPageRoutingModule {}
