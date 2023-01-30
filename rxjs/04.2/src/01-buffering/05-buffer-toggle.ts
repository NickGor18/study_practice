// bufferToggle(
//   openSignal: ObservableOrPromise<o>, 
//   closeSignal: function(value: o): ObservableOrPromise
// ): Observable<T[]>

import { interval, fromEvent } from 'rxjs';
import { bufferToggle, take, tap } from 'rxjs/operators';
import { run } from '../03-utils';


export function bufferToggleDemo1() {
  const source$ = interval(100);

  //  each buffer closes 300 ms after opening
  const openSignal$ = interval(400).pipe(tap(() => console.log('open')));
  const closeSignal$ = () =>
    interval(300).pipe(tap(() => console.log('close')));

  const o = source$.pipe(
    tap(x => console.log(x)),
    bufferToggle(openSignal$, closeSignal$),
    take(3) // <-- just to limit the life of the source Observable
  );

  // run(o);
}

// Toggle buffer on and off on mouse down/up
export function bufferToggleDemo2() {
  const source$ = fromEvent(document, 'mousemove');

  const o = source$.pipe(
    bufferToggle(
      fromEvent(document, 'mousedown'), // <-- open buffer
      _ => fromEvent(document, 'mouseup') // <-- close buffer
    )
  );

  // run(o);
}
