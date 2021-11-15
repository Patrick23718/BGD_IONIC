import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionClientePageRoutingModule } from './inscription-cliente-routing.module';

import { InscriptionClientePage } from './inscription-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionClientePageRoutingModule
  ],
  declarations: [InscriptionClientePage]
})
export class InscriptionClientePageModule {}
