import { Component, Output, EventEmitter,  } from "@angular/core";
//import { EventEmitter } from 'protractor';

@Component({
    selector: 'app-child',
    template: `<h3> Child Page: {{value}} </h3>      
    `

})
export class ChildPage{
    
    value =0;
}
    
