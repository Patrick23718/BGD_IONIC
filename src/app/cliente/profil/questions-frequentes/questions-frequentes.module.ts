import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionsFrequentesPageRoutingModule } from './questions-frequentes-routing.module';

import { QuestionsFrequentesPage } from './questions-frequentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionsFrequentesPageRoutingModule
  ],
  declarations: [QuestionsFrequentesPage]
})
export class QuestionsFrequentesPageModule {}
