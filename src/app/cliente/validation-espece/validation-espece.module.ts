import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationEspecePageRoutingModule } from './validation-espece-routing.module';

import { ValidationEspecePage } from './validation-espece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationEspecePageRoutingModule
  ],
  declarations: [ValidationEspecePage]
})
export class ValidationEspecePageModule {}
