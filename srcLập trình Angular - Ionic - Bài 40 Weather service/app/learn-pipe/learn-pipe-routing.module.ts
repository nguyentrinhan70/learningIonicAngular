import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnPipePage } from './learn-pipe.page';

const routes: Routes = [
  {
    path: '',
    component: LearnPipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnPipePageRoutingModule {}
