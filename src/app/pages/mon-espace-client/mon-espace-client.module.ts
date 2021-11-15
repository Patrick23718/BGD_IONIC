import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonEspaceClientPageRoutingModule } from './mon-espace-client-routing.module';

import { MonEspaceClientPage } from './mon-espace-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonEspaceClientPageRoutingModule
  ],
  declarations: [MonEspaceClientPage]
})
export class MonEspaceClientPageModule {}
