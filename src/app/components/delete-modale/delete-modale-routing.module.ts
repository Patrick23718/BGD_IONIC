import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteModalePage } from './delete-modale.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteModalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteModalePageRoutingModule {}
