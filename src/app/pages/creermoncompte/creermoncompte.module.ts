import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreermoncomptePageRoutingModule } from './creermoncompte-routing.module';

import { CreermoncomptePage } from './creermoncompte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreermoncomptePageRoutingModule
  ],
  declarations: [CreermoncomptePage]
})
export class CreermoncomptePageModule {}
