import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WordPage } from './word/word.page';
import { BookPage } from './book/book.page';
import { UserFormPage } from './user-form/user-form.page';
import { FormsModule } from '@angular/forms';
import { StructPage } from './struct/struct.page';
import { WordsPage } from './words/words.page';
import { PersonPage } from './person/person.page';
import { ListPersonPage } from './list-person/list-person.page';
import { ParentPage } from './parent.page';
import { ChildPage } from './child.page';
import { CardPage } from './card.page';
import { LearnPipePage } from './learn-pipe/learn-pipe.page';
import { RoundPipe } from './round.pipe';

@NgModule({
  declarations: [AppComponent,
  WordPage,
  BookPage,
  UserFormPage,
  StructPage,
  WordsPage,
  PersonPage,
  ListPersonPage,
  ParentPage,
  ChildPage,
  CardPage,
  LearnPipePage,
  RoundPipe,
  ],
  entryComponents: [],
  imports: [BrowserModule, 
    FormsModule,
    IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
