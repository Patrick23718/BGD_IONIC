import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutprestationPageRoutingModule } from './ajoutprestation-routing.module';

import { AjoutprestationPage } from './ajoutprestation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutprestationPageRoutingModule
  ],
  declarations: [AjoutprestationPage]
})
export class AjoutprestationPageModule {}
