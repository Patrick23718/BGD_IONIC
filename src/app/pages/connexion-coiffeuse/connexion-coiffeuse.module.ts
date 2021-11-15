import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionCoiffeusePageRoutingModule } from './connexion-coiffeuse-routing.module';

import { ConnexionCoiffeusePage } from './connexion-coiffeuse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionCoiffeusePageRoutingModule
  ],
  declarations: [ConnexionCoiffeusePage]
})
export class ConnexionCoiffeusePageModule {}
