import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenseignerMonComptePageRoutingModule } from './renseigner-mon-compte-routing.module';

import { RenseignerMonComptePage } from './renseigner-mon-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenseignerMonComptePageRoutingModule
  ],
  declarations: [RenseignerMonComptePage]
})
export class RenseignerMonComptePageModule {}
