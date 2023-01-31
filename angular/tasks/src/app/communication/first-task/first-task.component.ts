import { Component } from '@angular/core';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent {
  data = {
    name: 'ngConf 2025',
    date: '3/1/2025',
    time: '8am',
    location: {
      address: '123 Main St',
      city: 'Salt Lake City, UT',
      country: 'USA',
    },
  };
}
