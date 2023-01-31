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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
