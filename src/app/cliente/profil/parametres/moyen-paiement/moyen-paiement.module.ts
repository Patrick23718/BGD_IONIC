import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoyenPaiementPageRoutingModule } from './moyen-paiement-routing.module';

import { MoyenPaiementPage } from './moyen-paiement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoyenPaiementPageRoutingModule
  ],
  declarations: [MoyenPaiementPage]
})
export class MoyenPaiementPageModule {}
