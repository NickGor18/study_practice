import { Component } from '@angular/core';
import {TaskService} from "../../task.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  event: any

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute,
              private router: Router) {

  }
  ngOnInit() {
    this.event = this.taskService.getEvent(this.activatedRoute.snapshot.params['eventId'])
  }

  returnToEvents() {
    this.router.navigate(['second'])
  }
}
