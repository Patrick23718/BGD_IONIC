import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionCoiffeusePageRoutingModule } from './inscription-coiffeuse-routing.module';

import { InscriptionCoiffeusePage } from './inscription-coiffeuse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionCoiffeusePageRoutingModule
  ],
  declarations: [InscriptionCoiffeusePage]
})
export class InscriptionCoiffeusePageModule {}
