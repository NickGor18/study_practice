import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommunicationComponent} from "./communication/communication.component";
import {SecondModuleComponent} from "./second-module/second-module.component";
import {EventDetailsComponent} from "./second-module/sm-second-task/event-details/event-details.component";
import {NonExistingEventIdGuard} from "./non-existing-event-id.guard";
import {ResolverService} from "./second-module/sm-third-task/resolver.service";

const routes: Routes = [
  {
    path: 'communication', component: CommunicationComponent
  },
  {
    path: 'second', resolve: {events: ResolverService}, component: SecondModuleComponent
  },
  {
    path: 'second/:eventId',
    canActivate: [NonExistingEventIdGuard],
    canDeactivate: [NonExistingEventIdGuard],
    component: EventDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
