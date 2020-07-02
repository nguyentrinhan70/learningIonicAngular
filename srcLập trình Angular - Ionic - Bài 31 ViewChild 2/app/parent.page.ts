import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <ion-button (click)="child.value=child.value+1">Add for child </ion-button>
        <app-child #child></app-child>
    `
})
export class ParentPage{
    value = 0;
    

}