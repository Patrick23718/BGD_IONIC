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
    redirectTo: '/creermoncompte',
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
    loadChildren: () =>
      import('./pages/onboard/onboard.module').then((m) => m.OnboardPageModule),
  },
  {
    path: 'creermoncompte',
    canActivate: [InitGuard],
    loadChildren: () =>
      import('./pages/creermoncompte/creermoncompte.module').then(
        (m) => m.CreermoncomptePageModule
      ),
  },
  {
    path: 'etrecoiffeuse',
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
    path: 'etrecoiffee',
    loadChildren: () => 
    import('./pages/etrecoiffee/etrecoiffee.module').then( m => m.EtrecoiffeePageModule)
  },
  {
    path: 'renseigner-mon-compte',
    loadChildren: () => import('./pages/renseigner-mon-compte/renseigner-mon-compte.module').then( m => m.RenseignerMonComptePageModule)
  },
  {
    path: 'mon-espace-client',
    loadChildren: () => import('./pages/mon-espace-client/mon-espace-client.module').then( m => m.MonEspaceClientPageModule)
  },
  {
    path: 'connexion-cliente',
    loadChildren: () => import('./pages/connexion-cliente/connexion-cliente.module').then( m => m.ConnexionClientePageModule)
  },
  {
    path: 'inscription-cliente',
    loadChildren: () => import('./pages/inscription-cliente/inscription-cliente.module').then( m => m.InscriptionClientePageModule)
  },
  {
    path: 'reinitialisation-mot-de-passe',
    loadChildren: () => import('./pages/reinitialisation1/reinitialisation1.module').then( m => m.Reinitialisation1PageModule)
  },
  {
    path: 'nouveau-mot-de-passe',
    loadChildren: () => import('./pages/reinitialisation2/reinitialisation2.module').then( m => m.Reinitialisation2PageModule)
  },
  {
    path: 'inscription-coiffeuse',
    loadChildren: () => import('./pages/inscription-coiffeuse/inscription-coiffeuse.module').then( m => m.InscriptionCoiffeusePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'donnees-bancaires',
    loadChildren: () => import('./components/donnees-bancaires/donnees-bancaires.module').then( m => m.DonneesBancairesPageModule)
  },  {
    path: 'ask-confirmation',
    loadChildren: () => import('./shared/modals/ask-confirmation/ask-confirmation.module').then( m => m.AskConfirmationPageModule)
  },
  {
    path: 'invitation',
    loadChildren: () => import('./shared/modals/invitation/invitation.module').then( m => m.InvitationPageModule)
  },
  {
    path: 'donnees-bancaires',
    loadChildren: () => import('./shared/modals/donnees-bancaires/donnees-bancaires.module').then( m => m.DonneesBancairesPageModule)
  },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
