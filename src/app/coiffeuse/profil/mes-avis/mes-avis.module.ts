import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesAvisPageRoutingModule } from './mes-avis-routing.module';

import { MesAvisPage } from './mes-avis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesAvisPageRoutingModule
  ],
  declarations: [MesAvisPage]
})
export class MesAvisPageModule {}
