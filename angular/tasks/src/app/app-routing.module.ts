import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommunicationComponent} from "./communication/communication.component";
import {SecondModuleComponent} from "./second-module/second-module.component";
import {EventDetailsComponent} from "./second-module/sm-second-task/event-details/event-details.component";
import {NonExistingEventIdGuard} from "./non-existing-event-id.guard";
import {ResolverService} from "./second-module/sm-third-task/resolver.service";
import {FormComponent} from "./form/form.component";
import {CreateComponent} from "./form/form-first-task/create/create.component";
import {CreateReactiveComponent} from "./form/form-third-task/create-reactive/create-reactive.component";
import {ContentProjectionComponent} from "./content-projection/content-projection.component";
import {PipesComponent} from "./pipes/pipes.component";
import {InjectionComponent} from "./injection/injection.component";
import {ServerCommunicationComponent} from "./server-communication/server-communication.component";
import {AdvancedComponentsComponent} from "./advanced-components/advanced-components.component";
import {
  SameComponentRoutingComponent
} from "./advanced-components/same-component-routing/same-component-routing.component";

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
  },
  {
    path: 'form', component: FormComponent
  },
  {
    path: 'form/new', component: CreateComponent
  },
  {
    path: 'forms/newReactive', component: CreateReactiveComponent
  },
  {
    path: 'projection', component: ContentProjectionComponent
  },
  {
    path: 'pipes', component: PipesComponent
  },
  {
    path: 'injection', component: InjectionComponent
  },
  {
    path: 'server', component: ServerCommunicationComponent
  },
  {
    path: 'advanced', component: AdvancedComponentsComponent
  },
  {
    path: 'advanced/:id', component: SameComponentRoutingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
