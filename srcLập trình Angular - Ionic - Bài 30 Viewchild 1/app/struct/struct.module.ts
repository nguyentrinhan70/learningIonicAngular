import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StructPageRoutingModule } from './struct-routing.module';

import { StructPage } from './struct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StructPageRoutingModule
  ],
  declarations: [StructPage]
})
export class StructPageModule {}
