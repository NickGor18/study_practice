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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [ResolverService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
