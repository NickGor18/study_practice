import { Component } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})

export class SortComponent {
  movies = [
    { name:  "Star Wars Episode X", rating: "PG" },
    { name:  "Rocky XV", rating: "PG-13" },
    { name:  "Jaws the Revenge", rating: "R" },
    { name:  "Avengers 6 - The Marriage of the Hulk", rating: "PG-13" },
    { name:  "Finding Dory's Grandkids", rating: "G" },
  ]

  constructor() {
  }

  sortAsc() {
    this.movies.sort((a, b) => {
      if (a.rating > b.rating) return 1
      if (a.rating < b.rating) return -1
      return 0
    })
  }

  sortDesc() {
    this.movies.sort((a, b) => {
      if (a.rating > b.rating) return -1
      if (a.rating < b.rating) return 1
      return 0
    })
  }
}
