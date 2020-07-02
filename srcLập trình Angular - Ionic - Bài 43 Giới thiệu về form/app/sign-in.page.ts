import { Component } from '@angular/core';

@Component({
    selector: 'app-sign-in',
    template: `
    <input placeholder="Email"[(ngModel)]="email">
    <br>
    <br>
    <input type ="password" placeholder ="Password"[(ngModel)]="password">
    <br><br>
    <ion-button (click)="onSubmit();">Submit<ion-button>
    `
})

export class SignInPage{
email ='';
password ='';
onSubmit(){
    console.log('Email'+this.email,', Password '+ this.password);
}
}