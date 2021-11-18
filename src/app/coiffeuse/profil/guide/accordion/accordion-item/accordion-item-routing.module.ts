import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionItemPage } from './accordion-item.page';

const routes: Routes = [
  {
    path: '',
    component: AccordionItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionItemPageRoutingModule {}
