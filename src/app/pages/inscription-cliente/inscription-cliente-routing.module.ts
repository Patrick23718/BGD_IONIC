import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionClientePage } from './inscription-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionClientePageRoutingModule {}
