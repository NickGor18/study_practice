import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Component({
  selector: 'app-http-get-request-with-params',
  templateUrl: './http-get-request-with-params.component.html',
  styleUrls: ['./http-get-request-with-params.component.css']
})
export class HttpGetRequestWithParamsComponent {
  appid = "69bc9bb1bbaa496601358677ea57a017";
  city!: any;
  forecast!: any;

  constructor(private http: HttpClient) {}

  makeRequest() {
    this.http
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&${this.appid}`)
      .pipe(
        map((response: any) => {
          return response.weather[0].description;
        })
      )
      .subscribe((forecast: any) => {
        this.forecast = forecast;
      });
  }
}
