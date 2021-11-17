import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reinitialisation2PageRoutingModule } from './reinitialisation2-routing.module';

import { Reinitialisation2Page } from './reinitialisation2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reinitialisation2PageRoutingModule
  ],
  declarations: [Reinitialisation2Page]
})
export class Reinitialisation2PageModule {}
