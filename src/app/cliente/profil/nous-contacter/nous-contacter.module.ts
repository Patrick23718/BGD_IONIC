import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NousContacterPageRoutingModule } from './nous-contacter-routing.module';

import { NousContacterPage } from './nous-contacter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NousContacterPageRoutingModule
  ],
  declarations: [NousContacterPage]
})
export class NousContacterPageModule {}
