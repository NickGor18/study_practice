// buffer(closeSignal: Observable<any>): Observable<T[]>

import { interval, fromEvent } from 'rxjs';
import { buffer, take, tap } from 'rxjs/operators';
import { run } from './../03-utils';

export function bufferDemo() {
  const source$ = interval(1000);
  const closeSignal$ = fromEvent(document, 'click');

  // emit the buffer after click
  const o = source$.pipe(
    tap(i => console.log(i)),
    buffer(closeSignal$), // <-- inner observable
    take(3) // <-- just to limit the life of the source Observable
  );

  //run(o);
}
