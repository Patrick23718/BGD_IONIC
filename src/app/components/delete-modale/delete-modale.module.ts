import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteModalePageRoutingModule } from './delete-modale-routing.module';

import { DeleteModalePage } from './delete-modale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteModalePageRoutingModule
  ],
  declarations: [DeleteModalePage]
})
export class DeleteModalePageModule {}
