import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommunicationComponent} from "./communication/communication.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: 'communication', component: CommunicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
