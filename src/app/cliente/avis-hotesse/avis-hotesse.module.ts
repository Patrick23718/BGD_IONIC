import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisHotessePageRoutingModule } from './avis-hotesse-routing.module';

import { AvisHotessePage } from './avis-hotesse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisHotessePageRoutingModule
  ],
  declarations: [AvisHotessePage]
})
export class AvisHotessePageModule {}
