import { Component } from '@angular/core';

@Component({
    templateUrl: './word.page.html',
    selector: 'app-word',
    styleUrls: [`./word.page.scss`]
})
export class WordPage{
    en = "Hello";
    vn = "Xin chào";
    imageUrl ="https://angular.io/assets/images/logos/angular/angular.svg";
    imageUrl1 ="https://images.prismic.io/ionicframeworkcom/01fce5d9-32c3-4bd0-92c1-2f4741663816_Screen+Shot+2020-06-10+at+11.59.03+AM.png?auto=compress,format&rect=147,0,1716,1226&w=280&h=200";
    forgot = false;
}