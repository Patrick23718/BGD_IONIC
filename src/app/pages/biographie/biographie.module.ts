import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiographiePageRoutingModule } from './biographie-routing.module';

import { BiographiePage } from './biographie.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiographiePageRoutingModule,
    SharedModule,
  ],
  declarations: [BiographiePage],
})
export class BiographiePageModule {}
