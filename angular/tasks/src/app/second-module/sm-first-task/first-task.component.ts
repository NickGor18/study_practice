import { Component } from '@angular/core';
import { TaskService } from "../task.service";

@Component({
  selector: 'app-sm-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTask2Component {
  constructor(private eventsTask: TaskService) {}
  events = this.eventsTask.getEvents()
}
