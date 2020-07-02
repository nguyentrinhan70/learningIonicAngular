import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()

export class IpService{
    constructor(private http: HttpClient)
   {}   
   
   getIp(){
       return this.http.get('htt://localhost:8100')
        .toPromise()
        // .then(res => res.json())
       // .then(resJson => resJson.ip);
    }
}