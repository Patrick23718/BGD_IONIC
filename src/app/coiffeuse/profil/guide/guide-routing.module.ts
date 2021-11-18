import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidePage } from './guide.page';

const routes: Routes = [
  {
    path: '',
    component: GuidePage
  },  {
    path: 'accordion',
    loadChildren: () => import('./accordion/accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  {
    path: 'accordion-item',
    loadChildren: () => import('./accordion/accordion-item/accordion-item.module').then( m => m.AccordionItemPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidePageRoutingModule {}
