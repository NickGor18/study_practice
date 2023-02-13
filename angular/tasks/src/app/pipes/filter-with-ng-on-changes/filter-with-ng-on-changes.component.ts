import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-with-ng-on-changes',
  templateUrl: './filter-with-ng-on-changes.component.html',
  styleUrls: ['./filter-with-ng-on-changes.component.css']
})
export class FilterWithNgOnChangesComponent {
  myQuantity = 1;

  constructor() {

  }

  updateQuantity() {
    this.myQuantity++;
  }
}
