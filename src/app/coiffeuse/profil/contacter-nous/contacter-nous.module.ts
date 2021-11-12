import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContacterNousPageRoutingModule } from './contacter-nous-routing.module';

import { ContacterNousPage } from './contacter-nous.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContacterNousPageRoutingModule,
    SharedModule,
  ],
  declarations: [ContacterNousPage],
})
export class ContacterNousPageModule {}
