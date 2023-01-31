import {Component} from '@angular/core';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent {
  event = {
    name: 'ngConf 2025',
    date: '3/1/2025',
    time: '8am',
    location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}
  }
}
