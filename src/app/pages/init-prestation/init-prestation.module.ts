import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitPrestationPageRoutingModule } from './init-prestation-routing.module';

import { InitPrestationPage } from './init-prestation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitPrestationPageRoutingModule
  ],
  declarations: [InitPrestationPage]
})
export class InitPrestationPageModule {}
