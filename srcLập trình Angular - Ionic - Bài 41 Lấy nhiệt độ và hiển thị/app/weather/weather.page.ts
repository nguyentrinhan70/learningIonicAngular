import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  providers: [WeatherService]
})
export class WeatherPage implements OnInit {
  txtCityName ='';
  cityName ='';
  temp=null;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    
  }
  getWeather(){
    this.weatherService.getTemp1(this.txtCityName)
    .then(temp => {
      this.cityName = this.txtCityName;
      this.temp = temp;
    })
     .catch (err => console.log(err));
  }

}
