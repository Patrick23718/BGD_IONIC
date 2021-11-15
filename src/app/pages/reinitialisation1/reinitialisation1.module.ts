import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reinitialisation1PageRoutingModule } from './reinitialisation1-routing.module';

import { Reinitialisation1Page } from './reinitialisation1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reinitialisation1PageRoutingModule
  ],
  declarations: [Reinitialisation1Page]
})
export class Reinitialisation1PageModule {}
