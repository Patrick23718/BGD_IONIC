import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsFrequentesPage } from './questions-frequentes.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionsFrequentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsFrequentesPageRoutingModule {}
