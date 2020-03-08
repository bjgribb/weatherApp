import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { first, map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(public http: HttpClient) {}

  getCurrentWeather(loc: string) {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&units=imperial&appid=${environment.apiKey}`);
  }

  getForecast(loc: string) {
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&units=imperial&appid=${environment.apiKey}`);
  }
}
