import { Component, Output, EventEmitter,  } from "@angular/core";
//import { EventEmitter } from 'protractor';

@Component({
    selector: 'app-child',
    template: `<h3> Child Page </h3>
        <ion-button (click)="addForParent();">Add</ion-button>
        <ion-button (click)="subForParent();">Sub</ion-button>

    `

})
export class ChildPage{
    @Output() myClick = new EventEmitter<boolean>();
    addForParent(){
        this.myClick.emit(true);
    }
    subForParent(){
        this.myClick.emit(false);
    }
}
    
