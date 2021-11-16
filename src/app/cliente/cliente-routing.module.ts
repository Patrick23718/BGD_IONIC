import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientePage } from './cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ClientePage,
    children: [
      {
        path: '',
        redirectTo: '/cliente/acceuil',
        pathMatch: 'full'
      },
      {
        path:'acceuil',
        children: [
          {
            path: '',
            loadChildren : () => import('./home/home.module').then(m => m.HomePageModule)
          },
          {
            path: 'resultat-recherche',
            loadChildren: () => import('./resultat-recherche/resultat-recherche.module').then( m => m.ResultatRecherchePageModule)
          },
          {
            path: 'profil-hotesse',
            loadChildren: () => import('./profil-hotesse/profil-hotesse.module').then( m => m.ProfilHotessePageModule)
          },
        ]
      },
      {
        path: 'planning',
        children: [
          {
            path: '',
            loadChildren : () => import('./planning/planning.module').then(m => m.PlanningPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/cliente/acceuil',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePageRoutingModule {}
