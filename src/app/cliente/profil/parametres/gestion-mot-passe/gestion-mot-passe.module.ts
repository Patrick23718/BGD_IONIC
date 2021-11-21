import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionMotPassePageRoutingModule } from './gestion-mot-passe-routing.module';

import { GestionMotPassePage } from './gestion-mot-passe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionMotPassePageRoutingModule
  ],
  declarations: [GestionMotPassePage]
})
export class GestionMotPassePageModule {}
