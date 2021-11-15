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
        pathMatch: 'full',
      },
      {
        path: 'accueil',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'planning',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cliente/planning/planning.module').then(
                (m) => m.PlanningPageModule
              ),
          }
        ],
      },
      {
        path: 'message',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cliente/message/message.module').then(
                (m) => m.MessagePageModule
              ),
          },
        ],
      },
      {
        path: 'profil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./profil/profil.module').then((m) => m.ProfilPageModule),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/cliente/acceuil',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePageRoutingModule {}
