import { Component } from '@angular/core';
import {TaskService} from "../../second-module/task.service";

@Component({
  selector: 'app-form-first-task',
  templateUrl: './form-first-task.component.html',
  styleUrls: ['./form-first-task.component.css']
})
export class FormFirstTaskComponent {
  events:any
  constructor(private eventService: TaskService) {

  }
  ngOnInit() {
    this.events = this.eventService.getEvents()
  }
}
