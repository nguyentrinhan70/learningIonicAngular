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
  isLoading = false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    
  }
  getWeather(){
    this.isLoading =true;
    this.weatherService.getTemp1(this.txtCityName)
    .then(temp => {
      this.cityName = this.txtCityName;
      this.temp = temp;
      this.isLoading =false;
      this.txtCityName ='';
    })
     .catch (err => {
      alert('Cannot find your city!');
      this.cityName = '';
      this.isLoading =false;
      this.txtCityName ='';
    });
  }
  getMessage(){
    if(this.isLoading){
      return 'Loading....';
    }
    return this.cityName ===''? 'Enter your city name': (this.cityName + ' is Weather now: '+ this.temp)
  }

}
