import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionClientePageRoutingModule } from './connexion-cliente-routing.module';

import { ConnexionClientePage } from './connexion-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionClientePageRoutingModule
  ],
  declarations: [ConnexionClientePage]
})
export class ConnexionClientePageModule {}
