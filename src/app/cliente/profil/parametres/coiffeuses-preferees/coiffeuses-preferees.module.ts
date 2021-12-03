import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoiffeusesPrefereesPageRoutingModule } from './coiffeuses-preferees-routing.module';

import { CoiffeusesPrefereesPage } from './coiffeuses-preferees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoiffeusesPrefereesPageRoutingModule
  ],
  declarations: [CoiffeusesPrefereesPage]
})
export class CoiffeusesPrefereesPageModule {}
