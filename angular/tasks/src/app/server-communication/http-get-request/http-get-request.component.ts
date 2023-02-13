import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Component({
  selector: 'app-http-get-request',
  templateUrl: './http-get-request.component.html',
  styleUrls: ['./http-get-request.component.css']
})
export class HttpGetRequestComponent {
  movieList!: any;

  constructor(private http: HttpClient) {}

  makeRequest() {
    this.http.get<{results: Array<any>}>('http://swapi.dev/api/films/')
      .pipe(
        map(result => result["results"])
      )
      .subscribe(result => {
      this.movieList = result
    })
  }
}
