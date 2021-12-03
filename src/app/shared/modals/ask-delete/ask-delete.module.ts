import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskDeletePageRoutingModule } from './ask-delete-routing.module';

import { AskDeletePage } from './ask-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskDeletePageRoutingModule
  ],
  declarations: [AskDeletePage]
})
export class AskDeletePageModule {}
