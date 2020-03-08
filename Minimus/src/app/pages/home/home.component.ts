import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentForecastData: any;
  currentWeather$: Observable<any>;
  constructor(public weather: WeatherService) {}

  city = new FormControl('');

  ngOnInit() {}

  searchCity() {
    this.currentWeather$ = this.weather.getForecast(this.city.value);
    this.currentWeather$.subscribe(res => console.log(res));
  }
}
