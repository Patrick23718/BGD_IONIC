import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupprimerComptePageRoutingModule } from './supprimer-compte-routing.module';

import { SupprimerComptePage } from './supprimer-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupprimerComptePageRoutingModule
  ],
  declarations: [SupprimerComptePage]
})
export class SupprimerComptePageModule {}
