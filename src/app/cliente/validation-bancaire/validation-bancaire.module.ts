import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationBancairePageRoutingModule } from './validation-bancaire-routing.module';

import { ValidationBancairePage } from './validation-bancaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationBancairePageRoutingModule
  ],
  declarations: [ValidationBancairePage]
})
export class ValidationBancairePageModule {}
