import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoiffeusesPrefereesDetailsPageRoutingModule } from './coiffeuses-preferees-details-routing.module';

import { CoiffeusesPrefereesDetailsPage } from './coiffeuses-preferees-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoiffeusesPrefereesDetailsPageRoutingModule
  ],
  declarations: [CoiffeusesPrefereesDetailsPage]
})
export class CoiffeusesPrefereesDetailsPageModule {}
