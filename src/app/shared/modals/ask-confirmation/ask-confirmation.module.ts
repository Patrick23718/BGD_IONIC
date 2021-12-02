import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskConfirmationPageRoutingModule } from './ask-confirmation-routing.module';

import { AskConfirmationPage } from './ask-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskConfirmationPageRoutingModule
  ],
  declarations: [AskConfirmationPage]
})
export class AskConfirmationPageModule {}
