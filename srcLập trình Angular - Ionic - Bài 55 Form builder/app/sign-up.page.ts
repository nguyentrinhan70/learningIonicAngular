import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, NgModel, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    template: `
        <form (ngSubmit)="onSubmit();" [formGroup]="formSignUp">
            <input placeholder="Email" formControlName="email">
            <br><br>
            <input type = "password" placeholder ="Password" formControlName="password" >
            <br><br>
            <div formGroupName="subject">
                <label><input type="checkbox" name ="NodeJS" formControlName="nodeJS">NodeJS</label>
                <label><input type = "checkbox" name="Angular"formControlName="angular">Angular</label>
                <label><input type = "checkbox" name = "Ionic"formControlName="ionic">Ionic</label>
                <label><input type = "checkbox" name ="ReactJS"formControlName="reactJS">ReactJS</label>
            </div>
            <br><br>
            <button>Submit</button>
        </form>
    `
})
export class SignUpPage implements OnInit{
    formSignUp: FormGroup;
    constructor(private formBuilder: FormBuilder){
        
    }
    ngOnInit(){

        this.formSignUp = this.formBuilder.group({
            email:'nguyentrinhan70@pdu.edu.vn',
            password: '',
            subject: this.formBuilder.group({
                nodeJS : true,
                angular: false,
                ionic: true,
                reactJS: false
            })
        });
    }
     onSubmit(){
         console.log(this.formSignUp.value);
     }
}