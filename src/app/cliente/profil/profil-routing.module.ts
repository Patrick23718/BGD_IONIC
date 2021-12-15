import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileService } from 'src/app/shared/resolvers/profile.service';

import { ProfilPage } from './profil.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage,
  },
  {
    path: 'mes-informations',
    resolve: {
      profil: ProfileService,
    },
    loadChildren: () =>
      import('./mes-informations/mes-informations.module').then(
        (m) => m.MesInformationsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPageRoutingModule {}
