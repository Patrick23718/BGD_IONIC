import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VilleAddPageRoutingModule } from './ville-add-routing.module';

import { VilleAddPage } from './ville-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VilleAddPageRoutingModule
  ],
  declarations: [VilleAddPage]
})
export class VilleAddPageModule {}
