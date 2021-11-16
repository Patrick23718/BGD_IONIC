import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutPrestationPageRoutingModule } from './ajout-prestation-routing.module';

import { AjoutPrestationPage } from './ajout-prestation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutPrestationPageRoutingModule
  ],
  declarations: [AjoutPrestationPage]
})
export class AjoutPrestationPageModule {}
