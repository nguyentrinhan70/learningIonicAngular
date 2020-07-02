import { Component, ViewChild } from '@angular/core';
import { ChildPage } from './child.page';

@Component({
    selector: 'app-parent',
    template: `
        <ion-button (click)="onAddForChild();">Add for child </ion-button>
        <app-child #child></app-child>
    `
})
export class ParentPage{
    value = 0;
    @ViewChild(ChildPage)
    myChild: ChildPage;
    onAddForChild(){
        this.myChild.value++;
    }

}