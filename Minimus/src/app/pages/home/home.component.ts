import { Component, OnInit } from "@angular/core";
import { WeatherService } from "src/app/services/weather.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(public weather: WeatherService) {}

  // http://openweathermap.org/img/wn/10d@2x.png

  city = new FormControl("");

  ngOnInit() {}

  searchCity() {
    console.log(this.city.value);
    this.weather
      .getCurrentWeather(this.city.value)
      .subscribe(res => console.log(res));
  }
}
