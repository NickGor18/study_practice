import { Component } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-same-component-routing',
  templateUrl: './same-component-routing.component.html',
  styleUrls: ['./same-component-routing.component.css']
})
export class SameComponentRoutingComponent {
  movies = [
    {name: "Star Wars", rating: 'R', id: 1},
    {name: "Jaws", rating: 'PG', id: 2},
    {name: "E.T.", rating: 'R', id: 3},
    {name: "Teen Wolf", rating: 'G', id: 4},
    {name: "Ferris Bueller's Day Off", rating: 'G', id: 5},
  ]

  currentMovie!: {name: string, rating: string, id: number}

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.currentMovie = this.movies.filter(m => m.id === +params['id'])[0];
    })
  }
}
