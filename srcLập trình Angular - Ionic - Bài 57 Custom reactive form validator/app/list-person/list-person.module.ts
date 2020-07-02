import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPersonPageRoutingModule } from './list-person-routing.module';

import { ListPersonPage } from './list-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPersonPageRoutingModule
  ],
  declarations: [ListPersonPage]
})
export class ListPersonPageModule {}
