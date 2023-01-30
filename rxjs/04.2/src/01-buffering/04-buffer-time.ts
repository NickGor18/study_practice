// bufferTime(
//   bufferTimeSpan: number, 
//   bufferCreatonInterval: number, 
//   maxBufferSize: number, 
//   scheduler: Scheduler
// ): Observable<T[]>

import { timer, interval } from 'rxjs';
import { bufferTime, take, filter, scan, tap } from 'rxjs/operators';
import { run, addItem } from '../03-utils';

// Buffer for 2 seconds
// create a new buffer every 2 seconds
// and emit it after 2 seconds
export function bufferTimeDemo1() {
  const source$ = timer(0, 1000);
  const bufferTimeSpan = 2000; // <-- emit every 2s...

  const stream$ = source$.pipe(
    bufferTime(bufferTimeSpan),
    take(7) // <-- just to limit the life of the source Observable
  );

  // run(stream$);
}

// Multiple active buffers
// create a new buffer every 1 seconds
// and emit it after 2 seconds
export function bufferTimeDemo2() {
  const source$ = timer(0, 1000);
  const bufferTimeSpan = 2000; // <-- emit every ...
  const bufferCreationInterval = 1000; // <-- new buffer every...
  const maxBufferSize = 2; // <-- max buffer size

  const stream$ = source$.pipe(
    bufferTime(bufferTimeSpan, bufferCreationInterval, maxBufferSize),
    take(7) // <-- just to limit the life of the source Observable
  );

  // run(stream$);
}

export function bufferTimeDemo3() {
  const source$ = interval(500);
  const bufferTimeSpan = 2000; // <-- emit every 2s...

  const stream$ = source$.pipe(
    tap(val => addItem(val)), // <-- display each value
    bufferTime(bufferTimeSpan), // <-- collects values
    filter(items => items.length > 0),
    scan((acc, items) => {
      // <-- create new array
      return [...acc, ...items];
    }, []),
    take(7) // <-- just to limit the life of the source Observable
  );

  // run(stream$);
}
