import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPersonPage } from './list-person.page';

const routes: Routes = [
  {
    path: '',
    component: ListPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPersonPageRoutingModule {}
