import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    template: `
        <form (ngSubmit)="onSubmit();" [formGroup]="formSignUp">
         <input placeholder="Email" formControlName="email">
         <p *ngIf="formSignUp.controls.email.invalid && formSignUp.controls.email.touched">Email is required</p>
         <br><br>
         <input type="password" placeholder="Password" formControlName="password">
         <br><br>   
         <div formGroupName="subject"> 
            <label> <input type = "checkbox" name="NodeJS" formControlName="nodeJS">NodeJs</label>
            <label><input type = "checkbox" name="Anglular" formControlName = "angular"> Angular </label>
            <label> <input type ="checkbox" name ="Ionic" formControlName="ionic"> Ionic </label>
            <label> <input type ="checkbox" name = "ReactJS" formControlName="reactJS"> ReactJS</label>
        </div>
         <br><br>

         <button [disabled]=formSignUp.invalid>Submit</button>
        </form>
        <code>{{formSignUp.controls.email.errors|json}}</code>
    `
})
export class SignUpPage implements OnInit{
    formSignUp: FormGroup;

    constructor(private fb: FormBuilder) {
        
    }
ngOnInit(){

    this.formSignUp = this.fb.group({
        email: ['', [Validators.email,gmailValidator]]  ,
        password: '',
        subject: this.fb.group({
            nodeJS: false,
            angular: true,
            ionic: true,
            reactJS: false
        })
    });
}
    onSubmit(){
        console.log(this.formSignUp.value);
    }

}    //Validators tự tạo
    function gmailValidator(formControl:FormControl) {
        if(formControl.value.includes('@gmail.com')){
            return null;
        }
        return {gmail: true};
    }

