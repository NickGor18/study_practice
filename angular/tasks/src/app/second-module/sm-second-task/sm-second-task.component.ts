import { Component } from '@angular/core';
import {TaskService} from "../task.service";

@Component({
  selector: 'app-sm-second-task',
  templateUrl: './sm-second-task.component.html',
  styleUrls: ['./sm-second-task.component.css']
})
export class SmSecondTaskComponent {
  events: any
  constructor(private taskService: TaskService) {

  }
  ngOnInit() {
    this.events = this.taskService.getEvents()
  }

}
