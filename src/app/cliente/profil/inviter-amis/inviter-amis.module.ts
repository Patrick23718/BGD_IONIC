import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InviterAmisPageRoutingModule } from './inviter-amis-routing.module';

import { InviterAmisPage } from './inviter-amis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InviterAmisPageRoutingModule
  ],
  declarations: [InviterAmisPage]
})
export class InviterAmisPageModule {}
