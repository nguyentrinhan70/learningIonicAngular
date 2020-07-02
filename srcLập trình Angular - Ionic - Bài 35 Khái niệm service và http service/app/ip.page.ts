import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Component({
    selector: 'app-ip',
    template: `<h3>{{ip}}</h3>`
})
export class IpPage{
    ip: String;
    constructor(private http: HttpClient){
        this.http.get('http://localhost:8100/')
        .toPromise()
        .then(res => res.json())
        .then(resJson => this.ip = resJson.ip)
        .catch(err => console.log(err));
    }
}
