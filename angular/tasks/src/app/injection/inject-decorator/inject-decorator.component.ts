import {Component, Inject} from '@angular/core';
import {PRIME_CALC_TOKEN} from "./calcPrime.service";

@Component({
  selector: 'app-inject-decorator',
  templateUrl: './inject-decorator.component.html',
  styleUrls: ['./inject-decorator.component.css']
})
export class InjectDecoratorComponent {
  // prime!;
  //
  // constructor(@Inject(PRIME_CALC_TOKEN) private primeCalc) {
  //
  // }
  //
  // getPrime() {
  //   this.prime = primeCalc.calculatePrime();
  // }
}
