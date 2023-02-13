import { Component } from '@angular/core';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent {
  title = "Movies";
  movies = [
    { name: 'Rambo', rating: 'R' },
    { name: 'Star Wars', rating: 'PG-13' },
    { name: 'Avatar', rating: 'PG-13' },
  ];

  constructor() {
  }

}
