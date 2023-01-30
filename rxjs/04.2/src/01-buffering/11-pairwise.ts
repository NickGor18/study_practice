// pairwise(): Observable<Array<T>>

import { timer } from 'rxjs';
import {take, pairwise, tap} from 'rxjs/operators';
import { run } from './../03-utils';

export function pairwiseDemo() {
  const source$ = timer(0, 1000);

  // Emit the previous and current values as an array.
  const stream$ = source$.pipe(
      tap(val => console.log(val)),
    pairwise(), // <-- bufferCount(bufferSize=2, startBufferEvery=1)
    take(3)
  );

  // run(stream$);
}
