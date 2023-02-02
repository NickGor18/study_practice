import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {TaskService} from "./second-module/task.service";
import {EventDetailsComponent} from "./second-module/sm-second-task/event-details/event-details.component";

type ParamsOfEvent = {
  eventId: number
}

@Injectable({
  providedIn: 'root'
})
export class NonExistingEventIdGuard implements CanActivate, CanDeactivate<EventDetailsComponent> {
  constructor(private taskService: TaskService,) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const params = route.params as ParamsOfEvent
    return !!this.taskService.getEvents().find(event => event.id == params.eventId)
  }

  canDeactivate(component: EventDetailsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.event.reviewed
  }

}
