import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorteMonnaiePageRoutingModule } from './porte-monnaie-routing.module';

import { PorteMonnaiePage } from './porte-monnaie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorteMonnaiePageRoutingModule
  ],
  declarations: [PorteMonnaiePage]
})
export class PorteMonnaiePageModule {}
