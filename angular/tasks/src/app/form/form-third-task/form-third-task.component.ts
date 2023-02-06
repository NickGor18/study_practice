import { Component } from '@angular/core';
import {TaskService} from "../../second-module/task.service";

@Component({
  selector: 'app-form-third-task',
  templateUrl: './form-third-task.component.html',
  styleUrls: ['./form-third-task.component.css']
})
export class FormThirdTaskComponent {
  events:any
  constructor(private eventService: TaskService) {

  }
  ngOnInit() {
    this.events = this.eventService.getEvents()
  }
}
