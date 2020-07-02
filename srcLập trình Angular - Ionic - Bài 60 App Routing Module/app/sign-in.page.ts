import { Component } from '@angular/core';
import { SignInService } from './sign-in.service';

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
    <!-- <ion-button (click)="postToExpress();">Post</ion-button>    -->
    <p>{{txtEmail.errors|json}}</p>
    <p>{{txtPassword.errors|json}}</p>
    <p>{{formSignIn.value|json}}</p>
    `,
    providers:[SignInService] 
})

export class SignInPage{
    constructor(private signInService: SignInService){

    }
onSubmit(formSignIn){
    this.signInService.sendPost(formSignIn.value)
    .then(result => console.log(result))
    .catch(err => console.log(err));
}
}