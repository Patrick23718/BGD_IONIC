import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtrecoiffeePageRoutingModule } from './etrecoiffee-routing.module';

import { EtrecoiffeePage } from './etrecoiffee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtrecoiffeePageRoutingModule
  ],
  declarations: [EtrecoiffeePage]
})
export class EtrecoiffeePageModule {}
