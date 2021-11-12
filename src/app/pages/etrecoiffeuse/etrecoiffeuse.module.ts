import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtrecoiffeusePageRoutingModule } from './etrecoiffeuse-routing.module';

import { EtrecoiffeusePage } from './etrecoiffeuse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtrecoiffeusePageRoutingModule
  ],
  declarations: [EtrecoiffeusePage]
})
export class EtrecoiffeusePageModule {}
