import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';

import { IonicModule } from '@ionic/angular';
import { TextAreaComponent } from './text-area/text-area.component';

@NgModule({
  declarations: [InputComponent, TextAreaComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputComponent, TextAreaComponent],
})
export class SharedModule {}
