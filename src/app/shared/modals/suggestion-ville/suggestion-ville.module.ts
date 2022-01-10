import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuggestionVillePageRoutingModule } from './suggestion-ville-routing.module';

import { SuggestionVillePage } from './suggestion-ville.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuggestionVillePageRoutingModule
  ],
  declarations: [SuggestionVillePage]
})
export class SuggestionVillePageModule {}
