import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then( m => m.BookPageModule)
  },
  {
    path: 'user-form',
    loadChildren: () => import('./user-form/user-form.module').then( m => m.UserFormPageModule)
  },
  {
    path: 'struct',
    loadChildren: () => import('./struct/struct.module').then( m => m.StructPageModule)
  },
  {
    path: 'words',
    loadChildren: () => import('./words/words.module').then( m => m.WordsPageModule)
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then( m => m.PersonPageModule)
  },
  {
    path: 'list-person',
    loadChildren: () => import('./list-person/list-person.module').then( m => m.ListPersonPageModule)
  },
  {
    path: 'learn-pipe',
    loadChildren: () => import('./learn-pipe/learn-pipe.module').then( m => m.LearnPipePageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
