import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnPipePageRoutingModule } from './learn-pipe-routing.module';

import { LearnPipePage } from './learn-pipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnPipePageRoutingModule
  ],
  declarations: [LearnPipePage]
})
export class LearnPipePageModule {}
