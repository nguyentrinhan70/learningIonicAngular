import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <ion-button>Add for child </ion-button>
        <app-child></app-child>
    `
})
export class ParentPage{
    value = 0;
    changeValue(isAdd: boolean){
        if(isAdd){
            this.value++;
        }
        else{
            this.value--;
        }
    }

}