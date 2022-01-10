/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InitGuard } from './guard/init.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  // },

  {
    path: '',
    redirectTo: '/onboard',
    pathMatch: 'full',
  },

  {
    path: 'coiffeuse',
    loadChildren: () =>
      import('./coiffeuse/coiffeuse.module').then((m) => m.CoiffeusePageModule),
  },
  {
    path: 'cliente',
    loadChildren: () =>
      import('./cliente/cliente.module').then((m) => m.ClientePageModule),
  },
  {
    path: 'reservation',
    loadChildren: () =>
      import('./components/reservation/reservation.module').then(
        (m) => m.ReservationPageModule
      ),
  },
  {
    path: 'delete-modale',
    loadChildren: () =>
      import('./components/delete-modale/delete-modale.module').then(
        (m) => m.DeleteModalePageModule
      ),
  },
  {
    path: 'onboard',
    // canActivate: [InitGuard],
    loadChildren: () =>
      import('./pages/onboard/onboard.module').then((m) => m.OnboardPageModule),
  },
  {
    path: 'creermoncompte',
    // canActivate: [InitGuard],
    loadChildren: () =>
      import('./pages/creermoncompte/creermoncompte.module').then(
        (m) => m.CreermoncomptePageModule
      ),
  },
  {
    path: 'etrecoiffeuse',
    // canActivate: [InitGuard],
    loadChildren: () =>
      import('./pages/etrecoiffeuse/etrecoiffeuse.module').then(
        (m) => m.EtrecoiffeusePageModule
      ),
  },
  {
    path: 'plussurvous',
    loadChildren: () =>
      import('./pages/plussurvous/plussurvous.module').then(
        (m) => m.PlussurvousPageModule
      ),
  },
  {
    path: 'biographie',
    loadChildren: () =>
      import('./pages/biographie/biographie.module').then(
        (m) => m.BiographiePageModule
      ),
  },
  {
    path: 'ajoutprestation',
    loadChildren: () =>
      import('./pages/ajoutprestation/ajoutprestation.module').then(
        (m) => m.AjoutprestationPageModule
      ),
  },
  {
    path: 'bienvenue',
    loadChildren: () =>
      import('./pages/bienvenue/bienvenue.module').then(
        (m) => m.BienvenuePageModule
      ),
  },
  {
    path: 'connexion-coiffeuse',
    loadChildren: () =>
      import('./pages/connexion-coiffeuse/connexion-coiffeuse.module').then(
        (m) => m.ConnexionCoiffeusePageModule
      ),
  },
  {
    path: 'prestation',
    loadChildren: () =>
      import('./components/prestation/prestation.module').then(
        (m) => m.PrestationPageModule
      ),
  },
  {
    path: 'connexion-cliente',
    loadChildren: () =>
      import('./pages/connexion-cliente/connexion-cliente.module').then(
        (m) => m.ConnexionClientePageModule
      ),
  },
  {
    path: 'etrecoiffee',
    loadChildren: () =>
      import('./pages/etrecoiffee/etrecoiffee.module').then(
        (m) => m.EtrecoiffeePageModule
      ),
  },
  {
    path: 'inscription-cliente',
    loadChildren: () =>
      import('./pages/inscription-cliente/inscription-cliente.module').then(
        (m) => m.InscriptionClientePageModule
      ),
  },
  {
    path: 'reinitialisation1',
    loadChildren: () =>
      import('./pages/reinitialisation1/reinitialisation1.module').then(
        (m) => m.Reinitialisation1PageModule
      ),
  },
  {
    path: 'reinitialisation2',
    loadChildren: () =>
      import('./pages/reinitialisation2/reinitialisation2.module').then(
        (m) => m.Reinitialisation2PageModule
      ),
  },
  {
    path: 'renseigner-mon-compte',
    loadChildren: () =>
      import('./pages/renseigner-mon-compte/renseigner-mon-compte.module').then(
        (m) => m.RenseignerMonComptePageModule
      ),
  },
  {
    path: 'mon-espace-client',
    loadChildren: () =>
      import('./pages/mon-espace-client/mon-espace-client-routing.module').then(
        (m) => m.MonEspaceClientPageRoutingModule
      ),
  },
  {
    path: 'inscription-coiffeuse',
    loadChildren: () =>
      import('./pages/inscription-coiffeuse/inscription-coiffeuse.module').then(
        (m) => m.InscriptionCoiffeusePageModule
      ),
  },
  {
    path: 'init-prestation',
    loadChildren: () =>
      import('./pages/init-prestation/init-prestation.module').then(
        (m) => m.InitPrestationPageModule
      ),
  },
  {
    path: 'splash',
    loadChildren: () =>
      import('./splash/splash.module').then((m) => m.SplashPageModule),
  },
  {
    path: 'ville',
    loadChildren: () =>
      import('./components/ville/ville.module').then((m) => m.VillePageModule),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./components/calendar/calendar.module').then(
        (m) => m.CalendarPageModule
      ),
  },
  {
    path: 'ville-add',
    loadChildren: () =>
      import('./components/ville-add/ville-add.module').then(
        (m) => m.VilleAddPageModule
      ),
  },
  {
    path: 'resa',
    loadChildren: () =>
      import('./shared/modals/resa/resa.module').then((m) => m.ResaPageModule),
  },
  {
    path: 'deconnection',
    loadChildren: () =>
      import('./shared/modals/deconnection/deconnection.module').then(
        (m) => m.DeconnectionPageModule
      ),
  },
  {
    path: 'suggestion-ville',
    loadChildren: () =>
      import('./shared/modals/suggestion-ville/suggestion-ville.module').then(
        (m) => m.SuggestionVillePageModule
      ),
  },
  {
    path: 'validation-prestation',
    loadChildren: () =>
      import(
        './components/validation-prestation/validation-prestation.module'
      ).then((m) => m.ValidationPrestationPageModule),
  },
  {
    path: 'disponibilite',
    loadChildren: () =>
      import('./components/disponibilite/disponibilite.module').then(
        (m) => m.DisponibilitePageModule
      ),
  },
  {
    path: 'disponibilities',
    loadChildren: () =>
      import('./shared/modals/disponibilities/disponibilities.module').then(
        (m) => m.DisponibilitiesPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
