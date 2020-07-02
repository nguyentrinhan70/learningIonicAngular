import { NgModule, Pipe, Directive } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructPage } from './struct/struct.page';
import { WordsPage } from './words/words.page';
import { PersonPage } from './person/person.page';
import { ListPersonPage } from './list-person/list-person.page';
import { ParentPage } from './parent.page';
import { ChildPage } from './child.page';
import { CardPage } from './card.page';
import { LearnPipePage } from './learn-pipe/learn-pipe.page';
import { RoundPipe } from './round.pipe';
import { IpPage } from './ip.page';
import { HttpClientModule } from '@angular/common/http';
import { WeatherPage } from './weather/weather.page';
import { SignInPage } from './sign-in.page';
import { SignInService } from './sign-in.service';
import { SignUpPage } from './sign-up.page';


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
  IpPage,
  WeatherPage,
  SignInPage,
  SignUpPage,
  
  ],
  entryComponents: [],
  imports: [BrowserModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
