import { Component } from '@angular/core';

@Component({
  selector: 'app-nineght-task',
  templateUrl: './nineght-task.component.html',
  styleUrls: ['./nineght-task.component.css']
})
export class NineghtTaskComponent {
  stopped = false
  counter = 0
  private intervalId: any

  ngOnInit() {
    this.intervalId = setInterval(() => {this.counter++}, 1000)
  }

  stopTimer() {
    clearInterval(this.intervalId)
    this.stopped = true
  }
}
