// bufferCount(
//   bufferSize: number, 
//   startBufferEvery: number
// ): Observable<T[]>

import { interval, fromEvent } from 'rxjs';
import { bufferCount, map, take, tap } from 'rxjs/operators';
import { run } from '../03-utils';

// emit the buffer of 2 values or when complete
export function bufferCountDemo1() {
  const source$ = interval(1000);
  const bufferSize = 2; // <-- size of buffer

  const o = source$.pipe(
    tap(i => console.log(i)),
    bufferCount(bufferSize),
    take(3) // <-- just to limit the life of the source Observable
  );

  // run(o);
}

// Overlapping buffers
// emit the buffer of 2 values
// start a new buffer when a new value emitted
// multiple buffers can coexist
export function bufferCountDemo2() {
  const source$ = interval(1000);
  const bufferSize = 2; // <-- size of buffer
  const startBufferEvery = 3; // <-- start new buffer on each element

  const o = source$.pipe(
    tap(i => console.log(i)),
    bufferCount(bufferSize, startBufferEvery),
    take(5) // <-- just to limit the life of the source Observable
  );

  // run(o);
}

// Keyboard presses
export function bufferCountDemo3() {
  const o = fromEvent(document, 'keydown').pipe(
    map((e: KeyboardEvent) => e.key),
    bufferCount(5)
  );

  // run(o);
}
