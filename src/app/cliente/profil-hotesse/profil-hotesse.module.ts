import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilHotessePageRoutingModule } from './profil-hotesse-routing.module';

import { ProfilHotessePage } from './profil-hotesse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilHotessePageRoutingModule
  ],
  declarations: [ProfilHotessePage]
})
export class ProfilHotessePageModule {}
