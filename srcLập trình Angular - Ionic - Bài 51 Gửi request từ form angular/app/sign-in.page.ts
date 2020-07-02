import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-sign-in',
    template: `
    <form (ngSubmit)="onSubmit(formSignIn);" #formSignIn="ngForm">
        <input 
        placeholder="Email" 
        ngModel 
        #txtEmail ="ngModel"
        name="email" 
        required
        email
        >
        <p *ngIf="txtEmail.touched && txtEmail.errors?.required">
            Email is required
        </p>
        <p *ngIf="txtEmail.errors?.email">
            Email is not valid
        </p>
        <br>
        <br>
        <input 
            type ="password" 
            placeholder ="Password" 
            ngModel 
            #ngModel
            #txtPassword="ngModel"
            name = "password"
            minlength ="6"
            pattern="[a-z]*"
            >
        <br><br>
        <div ngModelGroup="subjects">
            <ion-label><input type ="checkbox" [ngModel]="false" name="NodeJs">NodeJs</ion-label>
            <ion-label><input type ="checkbox" [ngModel]="false" name="Angular">Angular</ion-label>
            <ion-label><input type ="checkbox" [ngModel]="false" name="Ionic">Ionic</ion-label>
            <ion-label><input type ="checkbox" [ngModel]="false" name="ReactJS">ReactJS</ion-label>
        </div>
        <br><br>

        <button [disabled]="formSignIn.invalid">Submit</button>
    </form>        
    <br>
    <ion-button (click)="postToExpress();">Post</ion-button>   
    <p>{{txtEmail.errors|json}}</p>
    <p>{{txtPassword.errors|json}}</p>
    <p>{{formSignIn.value|json}}</p>
    `
})

export class SignInPage{
    constructor(private http: HttpClient){

    }
onSubmit(formSignIn){
    const url = 'http://localhost:3000/signin';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = JSON.stringify(formSignIn.value);
    this.http.post(url, body, {headers})
    .toPromise()
   // .then(res => res.json())
    .then(resJson => console.log(resJson))
}
postToExpress(){
    const url = 'http://localhost:3000/signin';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = JSON.stringify({name: 'Trí Nhân Nguyễn Training'});
    this.http.post(url, body, {headers})
    .toPromise()
   // .then(res => res.text())
    .then(resText => console.log(resText))
}
}