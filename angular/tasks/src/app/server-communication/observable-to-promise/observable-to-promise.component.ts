import { Component } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-observable-to-promise',
  templateUrl: './observable-to-promise.component.html',
  styleUrls: ['./observable-to-promise.component.css']
})
export class ObservableToPromiseComponent {
  obs;
  result!: number;
  promise!: Promise<number>;

  constructor() {
    this.obs = of(35);
  }

  ngOnInit() {
    this.promise = this.obs.toPromise() as Promise<number>
  }

  listen() {
    this.promise.then((val) => {
      this.result = val;
    })
  }
}
