import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { mainModule } from 'process';
import { of, Observable } from 'rxjs';
import {catchError, map,tap} from 'rxjs/operators';
@Injectable()

export class WeatherService{
    constructor(private http: HttpClient){
 
    }

//     getTemp11(cityName: string){
//         const url ='https://api.openweathermap.org/data/2.5/weather?appid=15c8f8eeb8c7deb1b4e933f3228b2f82&units=metric&q='+ cityName;
//             return this.http.get(url).pipe
//                 .toPromise()
//                 .then(resJson => {
//                    // return resJson.main.temp;
//                 });
//   } 
  getTemp(cityName: string): Observable<Object>{
    const url ='https://api.openweathermap.org/data/2.5/weather?appid=15c8f8eeb8c7deb1b4e933f3228b2f82&units=metric&q='+ cityName;

     return this.http.get<Object>(url).pipe(
       tap(receivedMovies => {
           return console.log(`receivedMovies=${JSON.stringify(receivedMovies)}`);
       }),
       catchError(error => of([]))
     );
   }
 
    getTemp1(cityName: string): Promise<any>{
        const url ='https://api.openweathermap.org/data/2.5/weather?&appid=15c8f8eeb8c7deb1b4e933f3228b2f82&units=metric&q='+cityName;
        return this.http.get(url)
        .toPromise()
        //.then(res => res.json())
        //.then(resJson => resJson.main.temp);
        
    }
}