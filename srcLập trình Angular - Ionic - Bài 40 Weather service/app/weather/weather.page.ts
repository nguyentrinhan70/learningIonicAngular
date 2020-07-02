import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  providers: [WeatherService]
})
export class WeatherPage implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getTemp('Tokyo')
    .then(temp => console.log(temp))
    .catch(err => console.log(err))
  }

}
