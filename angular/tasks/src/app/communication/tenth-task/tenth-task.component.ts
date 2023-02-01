import {Component} from '@angular/core';

@Component({
  selector: 'app-tenth-task',
  templateUrl: './tenth-task.component.html',
  styleUrls: ['./tenth-task.component.css']
})
export class TenthTaskComponent {
  event = {
    name: 'ngConf 2025',
    date: '3/1/2025',
    time: '8am',
    location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}
  }
}
