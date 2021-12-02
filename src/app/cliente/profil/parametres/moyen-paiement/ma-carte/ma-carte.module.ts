import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaCartePageRoutingModule } from './ma-carte-routing.module';

import { MaCartePage } from './ma-carte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaCartePageRoutingModule
  ],
  declarations: [MaCartePage]
})
export class MaCartePageModule {}
