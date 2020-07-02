import { Component, Output, EventEmitter,  } from "@angular/core";
//import { EventEmitter } from 'protractor';

@Component({
    selector: 'app-child',
    template: `<h3> Child Page </h3>
        <ion-button (click)="addForParent();">Add</ion-button>
    `

})
export class ChildPage{
    @Output() myClick = new EventEmitter();
    addForParent(){
        this.myClick.emit();
    }
}
    
