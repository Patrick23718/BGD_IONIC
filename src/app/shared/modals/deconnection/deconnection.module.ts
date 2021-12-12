import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeconnectionPageRoutingModule } from './deconnection-routing.module';

import { DeconnectionPage } from './deconnection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeconnectionPageRoutingModule
  ],
  declarations: [DeconnectionPage]
})
export class DeconnectionPageModule {}
