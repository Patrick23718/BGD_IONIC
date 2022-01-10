import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuggestionVillePage } from './suggestion-ville.page';

const routes: Routes = [
  {
    path: '',
    component: SuggestionVillePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestionVillePageRoutingModule {}
