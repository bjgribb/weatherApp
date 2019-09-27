import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  city: string;
  state: string;
  temp: number;
  hum: number;
  wind: number;

  today: string;

  day1Name: string;
  day1State: string;
  day1Temp: number;

  day2Name: string;
  day2State: string;
  day2Temp: number;

  day3Name: string;
  day3State: string;
  day3Temp: number;

  day4Name: string;
  day4State: string;
  day4Temp: number;

  day5Name: string;
  day5State: string;
  day5Temp: number;

  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  sub4: Subscription;
  sub5: Subscription;

  constructor(
    public activeRouter: ActivatedRoute,
    public weather: WeatherService
  ) {}

  ngOnInit() {}
}
