import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { IpService } from './ip.service';

@Component({
    selector: 'app-ip',
    template: `<h3>{{ip}}</h3>
    providers: [IpService]
    `
})
export class IpPage{
    ip: String;
    constructor(private ipService: IpService){
        this.ipService.getIp()
        .then(ip => this.ip = ip)
        .catch(err =>console.log(err))
     }
}
