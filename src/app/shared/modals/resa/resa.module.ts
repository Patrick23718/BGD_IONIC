import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResaPageRoutingModule } from './resa-routing.module';

import { ResaPage } from './resa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResaPageRoutingModule
  ],
  declarations: [ResaPage]
})
export class ResaPageModule {}
