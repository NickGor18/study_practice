import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-sm-third-task',
  templateUrl: './sm-third-task.component.html',
  styleUrls: ['./sm-third-task.component.css']
})
export class SmThirdTaskComponent {
  events: any
  constructor(private taskService: TaskService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['second']
  }
}
