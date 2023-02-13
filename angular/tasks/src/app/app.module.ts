import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button'
import { CommunicationComponent } from './communication/communication.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { FirstTaskComponent } from './communication/first-task/first-task.component';
import { SecondTaskComponent } from './communication/second-task/second-task.component';
import {AddressComponent} from "./communication/second-task/address/address.component";
import { ThirdTaskComponent } from './communication/third-task/third-task.component';
import { FourthTaskComponent } from './communication/fourth-task/fourth-task.component';
import { FifthTaskComponent } from './communication/fifth-task/fifth-task.component';
import { SixthTaskComponent } from './communication/sixth-task/sixth-task.component';
import { SeventhTaskComponent } from './communication/seventh-task/seventh-task.component';
import { EighthTaskComponent } from './communication/eighth-task/eighth-task.component';
import { NineghtTaskComponent } from './communication/nineght-task/nineght-task.component';
import { TenthTaskComponent } from './communication/tenth-task/tenth-task.component';
import { EleventhTaskComponent } from './communication/eleventh-task/eleventh-task.component';
import { TwelweTaskComponent } from './communication/twelwe-task/twelwe-task.component';
import { SecondModuleComponent } from './second-module/second-module.component';
import { FirstTask2Component } from "./second-module/sm-first-task/first-task.component";
import { SmSecondTaskComponent } from './second-module/sm-second-task/sm-second-task.component';
import { EventDetailsComponent } from './second-module/sm-second-task/event-details/event-details.component';
import { SmThirdTaskComponent } from './second-module/sm-third-task/sm-third-task.component';
import {ResolverService} from "./second-module/sm-third-task/resolver.service";
import { FormComponent } from './form/form.component';
import { FormFirstTaskComponent } from './form/form-first-task/form-first-task.component';
import { CreateComponent } from './form/form-first-task/create/create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormSecondTaskComponent } from './form/form-second-task/form-second-task.component';
import { FormThirdTaskComponent } from './form/form-third-task/form-third-task.component';
import { CreateReactiveComponent } from './form/form-third-task/create-reactive/create-reactive.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ClosableComponent } from './content-projection/closable/closable.component';
import { MultiClosableComponent } from './content-projection/multi-closable/multi-closable.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipeLowerCaseComponent } from './pipes/pipe-lower-case/pipe-lower-case.component';
import { PipeWithParametersComponent } from './pipes/pipe-with-parameters/pipe-with-parameters.component';
import { CustomPipeComponent } from './pipes/custom-pipe/custom-pipe.component';
import { TransformPipePipe } from './pipes/custom-pipe/transform-pipe.pipe';
import { FilterWithNgOnChangesComponent } from './pipes/filter-with-ng-on-changes/filter-with-ng-on-changes.component';
import { FilteredComponent } from "./pipes/filter-with-ng-on-changes/filtered/filtered.component";
import { FilterComponent } from './pipes/filter/filter.component';
import { SortComponent } from './pipes/sort/sort.component';
import { InjectionComponent } from './injection/injection.component';
import { InjectDecoratorComponent } from './injection/inject-decorator/inject-decorator.component';
import { UseExistingComponent } from './injection/use-existing/use-existing.component';
import {LoggerService} from "./injection/use-existing/logger.service";
import {SimpleLoggerService} from "./injection/use-existing/simple-logger.service";
import { ServerCommunicationComponent } from './server-communication/server-communication.component';
import { AdvancedComponentsComponent } from './advanced-components/advanced-components.component';
import { CreateDirectiveComponent } from './advanced-components/create-directive/create-directive.component';
import { HideDirective } from './advanced-components/create-directive/hide.directive';
import { SameComponentRoutingComponent } from './advanced-components/same-component-routing/same-component-routing.component';
import { ViewChildComponent } from './advanced-components/view-child/view-child.component';
import { ObservableToPromiseComponent } from './server-communication/observable-to-promise/observable-to-promise.component';
import { HttpGetRequestComponent } from './server-communication/http-get-request/http-get-request.component';
import {HttpClientModule} from "@angular/common/http";
import { HttpGetRequestWithParamsComponent } from './server-communication/http-get-request-with-params/http-get-request-with-params.component';
import { TestDataComponent } from './test-data/test-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    FirstTaskComponent,
    SecondTaskComponent,
    AddressComponent,
    ThirdTaskComponent,
    FourthTaskComponent,
    FifthTaskComponent,
    SixthTaskComponent,
    SeventhTaskComponent,
    EighthTaskComponent,
    NineghtTaskComponent,
    TenthTaskComponent,
    EleventhTaskComponent,
    TwelweTaskComponent,
    SecondModuleComponent,
    FirstTask2Component,
    SmSecondTaskComponent,
    EventDetailsComponent,
    SmThirdTaskComponent,
    FormComponent,
    FormFirstTaskComponent,
    CreateComponent,
    FormSecondTaskComponent,
    FormThirdTaskComponent,
    CreateReactiveComponent,
    ContentProjectionComponent,
    ClosableComponent,
    MultiClosableComponent,
    PipesComponent,
    PipeLowerCaseComponent,
    PipeWithParametersComponent,
    CustomPipeComponent,
    TransformPipePipe,
    FilterWithNgOnChangesComponent,
    FilteredComponent,
    FilterComponent,
    SortComponent,
    InjectionComponent,
    InjectDecoratorComponent,
    UseExistingComponent,
    ServerCommunicationComponent,
    AdvancedComponentsComponent,
    CreateDirectiveComponent,
    HideDirective,
    SameComponentRoutingComponent,
    ViewChildComponent,
    ObservableToPromiseComponent,
    HttpGetRequestComponent,
    HttpGetRequestWithParamsComponent,
    TestDataComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatButtonToggleModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [ResolverService, LoggerService, {provide: SimpleLoggerService, useExisting: LoggerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
