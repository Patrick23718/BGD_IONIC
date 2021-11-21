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
          {
            path: 'avis-cliente',
            loadChildren: () => import('./avis-hotesse/avis-hotesse.module').then( m => m.AvisHotessePageModule)
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
      },
      {
        path: 'profil',
        children: [
          {
            path: '',
            loadChildren : () => import('./profil/profil.module').then(m => m.ProfilPageModule)
          },
          {
            path: 'historique',
            loadChildren: () => import('./profil/historique/historique.module').then( m => m.HistoriquePageModule)
          },
          {
            path: 'parametres',
            children:[
              {
                path: '',
                loadChildren: () => import('./profil/parametres/parametres.module').then( m => m.ParametresPageModule)
              },
              {
                path: 'moyen-paiement',
                loadChildren: () => import('./profil/parametres/moyen-paiement/moyen-paiement.module').then( m => m.MoyenPaiementPageModule)
              },
              {
                path: 'gestion-mot-passe',
                loadChildren: () => import('./profil/parametres/gestion-mot-passe/gestion-mot-passe.module').then( m => m.GestionMotPassePageModule)
              },
              {
                path: 'coiffeuses-preferees',
                loadChildren: () => import('./profil/parametres/coiffeuses-preferees/coiffeuses-preferees.module').then( m => m.CoiffeusesPrefereesPageModule)
              },
              {
                path: 'supprimer-compte',
                loadChildren: () => import('./profil/parametres/supprimer-compte/supprimer-compte.module').then( m => m.SupprimerComptePageModule)
              },
              {
                path: 'cgu',
                loadChildren: () => import('./profil/parametres/cgu/cgu.module').then( m => m.CGUPageModule)
              }
            ]
          },
          {
            path: 'inviter-amis',
            loadChildren: () => import('./profil/inviter-amis/inviter-amis.module').then( m => m.InviterAmisPageModule)
          },
          {
            path: 'nous-contacter',
            loadChildren: () => import('./profil/nous-contacter/nous-contacter.module').then( m => m.NousContacterPageModule)
          },
          {
            path: 'questions-frequentes',
            loadChildren: () => import('./profil/questions-frequentes/questions-frequentes.module').then( m => m.QuestionsFrequentesPageModule)
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
