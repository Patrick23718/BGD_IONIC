import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { PrestationModalPageRoutingModule } from './prestation-modal-routing.module';

import { PrestationModalPage } from './prestation-modal.page';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PrestationModalPageRoutingModule,
  ],
  declarations: [PrestationModalPage],
})
export class PrestationModalPageModule {}
