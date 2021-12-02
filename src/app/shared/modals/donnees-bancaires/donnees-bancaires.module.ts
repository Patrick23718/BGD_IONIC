import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonneesBancairesPageRoutingModule } from './donnees-bancaires-routing.module';

import { DonneesBancairesPage } from './donnees-bancaires.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonneesBancairesPageRoutingModule
  ],
  declarations: [DonneesBancairesPage]
})
export class DonneesBancairesPageModule {}
