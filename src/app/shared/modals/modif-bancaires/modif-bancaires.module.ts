import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifBancairesPageRoutingModule } from './modif-bancaires-routing.module';

import { ModifBancairesPage } from './modif-bancaires.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifBancairesPageRoutingModule
  ],
  declarations: [ModifBancairesPage]
})
export class ModifBancairesPageModule {}
