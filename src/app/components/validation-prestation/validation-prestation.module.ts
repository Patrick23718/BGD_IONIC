import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationPrestationPageRoutingModule } from './validation-prestation-routing.module';

import { ValidationPrestationPage } from './validation-prestation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationPrestationPageRoutingModule
  ],
  declarations: [ValidationPrestationPage]
})
export class ValidationPrestationPageModule {}
