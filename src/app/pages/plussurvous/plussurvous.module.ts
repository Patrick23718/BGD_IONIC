import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlussurvousPageRoutingModule } from './plussurvous-routing.module';

import { PlussurvousPage } from './plussurvous.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlussurvousPageRoutingModule,
    SharedModule,
  ],
  declarations: [PlussurvousPage],
})
export class PlussurvousPageModule {}
