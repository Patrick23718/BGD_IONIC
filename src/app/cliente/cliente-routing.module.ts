/* eslint-disable max-len */
import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteGuard } from '../guard/cliente.guard';
import { PlageResolveService } from '../shared/resolvers/plage-resolve.service';
import { PrestationResolveService } from '../shared/resolvers/prestation-resolve.service';
import { SearchGalerieResolverService } from '../shared/resolvers/search-galerie-resolver.service';
import { SearchProfilResolverService } from '../shared/resolvers/search-profil-resolver.service';
import { SearchResolverService } from '../shared/resolvers/search-resolver.service';
import { SearchService } from '../shared/resolvers/search.service';
import { VilleResolveService } from '../shared/resolvers/ville-resolve.service';

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
        path: 'acceuil',
        children: [
          {
            path: '',
            resolve: {
              ville: VilleResolveService,
              prestation: PrestationResolveService,
              plages: PlageResolveService,
            },
            loadChildren: () =>
              import('./home/home.module').then((m) => m.HomePageModule),
          },
          {
            path: 'resultat-recherche/:ville/:prestation/:date/:plage',
            resolve: {
              search: SearchService,
              villes: VilleResolveService,
            },
            loadChildren: () =>
              import('./resultat-recherche/resultat-recherche.module').then(
                (m) => m.ResultatRecherchePageModule
              ),
          },
          {
            path: 'avis-cliente/:uid',
            loadChildren: () =>
              import('./avis-hotesse/avis-hotesse.module').then(
                (m) => m.AvisHotessePageModule
              ),
          },
          {
            path: 'profil-hotesse/:uid',
            resolve: {
              prest: SearchResolverService,
              coiffeuse: SearchProfilResolverService,
              galeries: SearchGalerieResolverService,
            },
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('./profil-hotesse/profil-hotesse.module').then(
                    (m) => m.ProfilHotessePageModule
                  ),
              },
              {
                path: 'validation-reservation/:uid',
                canActivate: [ClienteGuard],
                resolve: {
                  prest: SearchResolverService,
                  coiffeuse: SearchProfilResolverService,
                  galeries: SearchGalerieResolverService,
                },
                children: [
                  {
                    path: '',
                    loadChildren: () =>
                      import(
                        './validation-reservation/validation-reservation.module'
                      ).then((m) => m.ValidationReservationPageModule),
                  },
                  {
                    path: 'reservation-confirme/:plage/:prest/:coif/:date',
                    loadChildren: () =>
                      import(
                        './validation-reservation/reservation-confirme/reservation-confirme.module'
                      ).then((m) => m.ReservationConfirmePageModule),
                  },
                  {
                    path: 'reservation-non-confirme',
                    loadChildren: () =>
                      import(
                        './validation-reservation/reservation-non-confirme/reservation-non-confirme.module'
                      ).then((m) => m.ReservationNonConfirmePageModule),
                  },
                  {
                    path: 'validation-bancaire',
                    loadChildren: () =>
                      import(
                        './validation-bancaire/validation-bancaire.module'
                      ).then((m) => m.ValidationBancairePageModule),
                  },
                  {
                    path: 'validation-espece',
                    loadChildren: () =>
                      import(
                        './validation-espece/validation-espece.module'
                      ).then((m) => m.ValidationEspecePageModule),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: 'planning',
        canActivate: [ClienteGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./planning/planning.module').then(
                (m) => m.PlanningPageModule
              ),
          },
        ],
      },
      {
        path: 'profil',
        canActivate: [ClienteGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./profil/profil.module').then((m) => m.ProfilPageModule),
          },
          {
            path: 'historique',
            loadChildren: () =>
              import('./profil/historique/historique.module').then(
                (m) => m.HistoriquePageModule
              ),
          },
          {
            path: 'parametres',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('./profil/parametres/parametres.module').then(
                    (m) => m.ParametresPageModule
                  ),
              },
              {
                path: 'moyen-paiement',
                loadChildren: () =>
                  import(
                    './profil/parametres/moyen-paiement/moyen-paiement.module'
                  ).then((m) => m.MoyenPaiementPageModule),
              },
              {
                path: 'gestion-mot-passe',
                // eslint-disable-next-line max-len
                loadChildren: () =>
                  import(
                    './profil/parametres/gestion-mot-passe/gestion-mot-passe.module'
                  ).then((m) => m.GestionMotPassePageModule),
              },
              {
                path: 'coiffeuses-preferees',
                loadChildren: () =>
                  import(
                    './profil/parametres/coiffeuses-preferees/coiffeuses-preferees.module'
                  ).then((m) => m.CoiffeusesPrefereesPageModule),
              },
              {
                path: 'supprimer-compte',
                loadChildren: () =>
                  import(
                    './profil/parametres/supprimer-compte/supprimer-compte.module'
                  ).then((m) => m.SupprimerComptePageModule),
              },
              {
                path: 'cgu',
                loadChildren: () =>
                  import('./profil/parametres/cgu/cgu.module').then(
                    (m) => m.CGUPageModule
                  ),
              },
            ],
          },
          {
            path: 'inviter-amis',
            loadChildren: () =>
              import('./profil/inviter-amis/inviter-amis.module').then(
                (m) => m.InviterAmisPageModule
              ),
          },
          {
            path: 'nous-contacter',
            loadChildren: () =>
              import('./profil/nous-contacter/nous-contacter.module').then(
                (m) => m.NousContacterPageModule
              ),
          },
          {
            path: 'questions-frequentes',
            loadChildren: () =>
              import(
                './profil/questions-frequentes/questions-frequentes.module'
              ).then((m) => m.QuestionsFrequentesPageModule),
          },
        ],
      },
      {
        path: 'message',
        canActivate: [ClienteGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./message/message.module').then(
                (m) => m.MessagePageModule
              ),
          },
          {
            path: ':uid',
            loadChildren: () =>
              import('./message/message-details/message-details.module').then(
                (m) => m.MessageDetailsPageModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/cliente/acceuil',
    pathMatch: 'full',
  },
  {
    path: 'notification',
    loadChildren: () =>
      import('./notification/notification.module').then(
        (m) => m.NotificationPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePageRoutingModule {}
