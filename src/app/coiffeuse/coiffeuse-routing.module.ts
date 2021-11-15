import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoiffeusePage } from './coiffeuse.page';

const routes: Routes = [
  {
    path: '',
    component: CoiffeusePage,
    children: [
      {
        path: '',
        redirectTo: '/coiffeuse/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'planning',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./planning/planning/planning.module').then(
                (m) => m.PlanningPageModule
              ),
          },
          {
            path: 'rendez-vous',
            loadChildren: () =>
              import('./rendez-vous/rendez-vous.module').then(
                (m) => m.RendezVousPageModule
              ),
          },
        ],
      },

      {
        path: 'message',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./message/message.module').then(
                (m) => m.MessagePageModule
              ),
          },
          {
            path: 'message-details',
            loadChildren: () =>
              import('./message/message-details/message-details.module').then(
                (m) => m.MessageDetailsPageModule
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
          {
            path: 'prestation',
            loadChildren: () =>
              import('./profil/prestation/prestation.module').then(
                (m) => m.PrestationPageModule
              ),
          },
          {
            path: 'galerie',
            loadChildren: () =>
              import('./profil/galerie/galerie.module').then(
                (m) => m.GaleriePageModule
              ),
          },
          {
            path: 'porte-monnaie',
            loadChildren: () =>
              import('./profil/porte-monnaie/porte-monnaie.module').then(
                (m) => m.PorteMonnaiePageModule
              ),
          },
          {
            path: 'contacter-nous',
            loadChildren: () =>
              import('./profil/contacter-nous/contacter-nous.module').then(
                (m) => m.ContacterNousPageModule
              ),
          },
          {
            path: 'guide',
            loadChildren: () =>
              import('./profil/guide/guide.module').then(
                (m) => m.GuidePageModule
              ),
          },
          {
            path: 'historique',
            loadChildren: () =>
              import('./profil/historique/historique.module').then(
                (m) => m.HistoriquePageModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/coiffeuse/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoiffeusePageRoutingModule {}
