import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StructPage } from './struct.page';

const routes: Routes = [
  {
    path: '',
    component: StructPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructPageRoutingModule {}
