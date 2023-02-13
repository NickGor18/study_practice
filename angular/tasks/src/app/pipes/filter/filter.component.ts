import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  movies = [
    { name:  "Star Wars Episode X", rating: "PG" },
    { name:  "Rocky XV", rating: "PG-13" },
    { name:  "Jaws the Revenge", rating: "R" },
    { name:  "Avengers 6 - The Marriage of the Hulk", rating: "PG-13" },
    { name:  "Finding Dory's Grandkids", rating: "G" },
  ]

  displayedMovies!: Array<{name: string, rating: string}>

  constructor() {
    this.displayedMovies = this.movies
  }

  filter(rating: string) {
    this.displayedMovies = this.movies.filter(movie => movie.rating === rating)
  }
}
