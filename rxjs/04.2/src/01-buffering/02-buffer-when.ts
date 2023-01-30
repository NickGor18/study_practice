// bufferWhen(closeSignal: function(): Observable): Observable<T[]>

import { interval } from 'rxjs';
import { bufferWhen, take, tap } from 'rxjs/operators';
import { run } from '../03-utils';

export function bufferWhenDemo() {
  let x = 0;
  const source$ = interval(500);

  const closeSignal$ = () => {
    return x < 5 ? interval(1000) : interval(500);
  };

  const o = source$.pipe(
    take(10), // <-- just to limit the life of the source Observable
    tap(i => (x = i)),
    bufferWhen(closeSignal$)
  );

  // run(o);
}
