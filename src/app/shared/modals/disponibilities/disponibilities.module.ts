import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisponibilitiesPageRoutingModule } from './disponibilities-routing.module';

import { DisponibilitiesPage } from './disponibilities.page';

import { DaysComponent } from './days/days.component';
import { MonthsComponent } from './months/months.component';
import { PlagesComponent } from './plages/plages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisponibilitiesPageRoutingModule,
  ],
  declarations: [
    DisponibilitiesPage,
    DaysComponent,
    MonthsComponent,
    PlagesComponent,
  ],
})
export class DisponibilitiesPageModule {}
