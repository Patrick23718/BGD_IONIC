import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskDeletePage } from './ask-delete.page';

const routes: Routes = [
  {
    path: '',
    component: AskDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskDeletePageRoutingModule {}
