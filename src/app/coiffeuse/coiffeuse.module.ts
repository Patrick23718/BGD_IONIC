import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoiffeusePageRoutingModule } from './coiffeuse-routing.module';

import { CoiffeusePage } from './coiffeuse.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CoiffeusePageRoutingModule],
  declarations: [CoiffeusePage],
})
export class CoiffeusePageModule {}
