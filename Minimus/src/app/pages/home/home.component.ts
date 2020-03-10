import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentForecastData: any[];
  cityName: string;
  currentWeather$: Observable<any>;
  todayWeather: any;
  weatherByDay: any;
  city = new FormControl('');

  constructor(public weather: WeatherService) {}

  searchCity() {
    this.currentWeather$ = this.weather.getForecast(this.city.value);

    this.currentWeather$.subscribe(data => {
      this.cityName = data.city.name;
      this.createWeatherByDate(data.list);
    });
  }

  createWeatherByDate(currentWeatherData) {
    this.weatherByDay = [
      {
        date: moment(),
        data: currentWeatherData.filter(x => new Date(x.dt * 1000).getDate() === moment().date())
      },
      {
        date: moment().add(1, 'day'),
        data: currentWeatherData.filter(
          x =>
            new Date(x.dt * 1000).getDate() ===
            moment()
              .add(1, 'day')
              .date()
        )
      },
      {
        date: moment().add(2, 'day'),
        data: currentWeatherData.filter(
          x =>
            new Date(x.dt * 1000).getDate() ===
            moment()
              .add(2, 'day')
              .date()
        )
      },
      {
        date: moment().add(3, 'day'),
        data: currentWeatherData.filter(
          x =>
            new Date(x.dt * 1000).getDate() ===
            moment()
              .add(3, 'day')
              .date()
        )
      },
      {
        date: moment().add(4, 'day'),
        data: currentWeatherData.filter(
          x =>
            new Date(x.dt * 1000).getDate() ===
            moment()
              .add(4, 'day')
              .date()
        )
      }
    ];
  }
}
