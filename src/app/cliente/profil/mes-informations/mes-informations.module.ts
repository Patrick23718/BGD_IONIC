import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesInformationsPageRoutingModule } from './mes-informations-routing.module';

import { MesInformationsPage } from './mes-informations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesInformationsPageRoutingModule
  ],
  declarations: [MesInformationsPage]
})
export class MesInformationsPageModule {}
