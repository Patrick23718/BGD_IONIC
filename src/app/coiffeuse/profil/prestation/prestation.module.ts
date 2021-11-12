import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestationPageRoutingModule } from './prestation-routing.module';

import { PrestationPage } from './prestation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestationPageRoutingModule
  ],
  declarations: [PrestationPage]
})
export class PrestationPageModule {}
