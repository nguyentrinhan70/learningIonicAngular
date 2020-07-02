import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `<h3> Parent Page: {{value}} 
        <app-child> </app-child>    

    </h3>`
})
export class ParentPage{
    value =0;

}