import { Component } from '@angular/core';

@Component({
    selector: 'app-sign-in',
    template: `
    <form (submit)="onSubmit(formSignIn);" #formSignIn="ngForm">
        <input placeholder="Email"[(ngModel)]="email" name="email" required>
        <p *ngIf="formSignIn.controls.email?.errors?.required">
            Email is required
        </p>
        <br>
        <br>
        <input type ="password" placeholder ="Password"[(ngModel)]="password" name = "password">
        <br><br>
        <button [disabled]="formSignIn.invalid">Submit</button>
    </form>        
    `
})

export class SignInPage{
email ='';
password ='';
onSubmit(formSignIn){
    console.log(formSignIn.value);
}
}