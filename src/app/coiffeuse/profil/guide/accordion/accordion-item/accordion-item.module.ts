import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionItemPageRoutingModule } from './accordion-item-routing.module';

import { AccordionItemPage } from './accordion-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionItemPageRoutingModule
  ],
  declarations: [AccordionItemPage]
})
export class AccordionItemPageModule {}
