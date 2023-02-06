import { Component } from '@angular/core';
import {TaskService} from "../../second-module/task.service";

@Component({
  selector: 'app-form-second-task',
  templateUrl: './form-second-task.component.html',
  styleUrls: ['./form-second-task.component.css']
})
export class FormSecondTaskComponent {
  events:any
  constructor(private eventService: TaskService) {

  }
  ngOnInit() {
    this.events = this.eventService.getEvents()
  }
}
