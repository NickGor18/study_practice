import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-eighth-task',
  templateUrl: './eighth-task.component.html',
  styleUrls: ['./eighth-task.component.css']
})
export class EighthTaskComponent {
  @Output() btnClicked: EventEmitter<number> = new EventEmitter<number>()
  counter = 0

  ngOnInit() {
    setInterval(() => {this.counter++}, 1000)
  }

  buttonClicked() {
    this.btnClicked.emit(this.counter)
  }
}
