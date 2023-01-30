import { EMPTY, from, fromEvent, interval, NEVER, of, range, timer } from "rxjs";
import {
    buffer,
    bufferCount,
    bufferTime,
    bufferToggle,
    bufferWhen,
    window,
    concatMap,
    delay,
    filter,
    map,
    pluck,
    scan,
    take,
    tap,
    windowWhen,
    switchMap,
    toArray,
    windowCount,
    mergeMap,
    windowTime,
    windowToggle,
    pairwise,
    reduce
} from "rxjs/operators";
import { addItem, run } from "../03-utils";

// Task 1. buffer()
// Реализовать поток, который будет выдавать целые значения каждую секунду.
// Буферизировать значения потока, используя второй поток interval(3000). 
// Выдавать значения с накоплением.
// Результат:
// [0, 1, 2]
// [0, 1, 2, 3, 4, 5]
// [0, 1, 2, 3, 4, 5, 6 ,7, 8]
// ...
// Используйте операторы: timer, interval, scan 
export function Task1() {
    // const stream$ = timer(0, 1000)
    //     .pipe(
    //         buffer(interval(3000)),
    //         scan(((acc, arr) => {
    //             return [...acc, ...arr]
    //         }), [])
    //     )
    //
    // run(stream$);
}


// Task 2. bufferWhen
// Создайте поток из 100 случайных чисел от 1 до 10. Добавьте задержку после каждого числа 500мс.
// Группируйте числа в массив по клику на кнопку Run
export function Task2() {
    function *getRandom(min: number, max: number) {
        while (true) {
            yield Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    const closeSignal$ = () =>{
        return fromEvent(document.getElementById('runBtn'), 'click')
    }
    // const stream$ = interval(500)
    //     .pipe(
    //         map(elem => getRandom(1, 10).next().value),
    //         take(100),
    //         bufferWhen(closeSignal$),
    //     )
    //
    // run(stream$);
}

// Task 3. bufferCount()
// Создайте поток чисел от 1 до 1000. Буферизируйте по 10 значений и выдавайте каждую группу
// через 5с.
// Используйте операторы: delay, concatMap
export function Task3() {
    const source$ = range(1, 1000)

    // const stream$ = source$.pipe(
    //     bufferCount(10),
    //     concatMap((buf) => {
    //         return of(buf).pipe(delay(5000))
    //     })
    // )
    //
    // run(stream$);
}


// Task 4. bufferTime
// Создайте поток событий клик по документу. Группируйте клики по временному диапазону в 2с
// Для каждой группы верните максимальное значение координаты Х
export function Task4() {
    function sortClicks(sortArray: PointerEvent[]) {
        return sortArray.sort((a, b) => {
            if (a.clientX > b.clientX) return 1
            if (a.clientX < b.clientX) return -1
            return 0
        })
    }
    // const clicks$ = fromEvent(document, 'click')
    //     .pipe(
    //         bufferTime(2000),
    //         map(clicks => {
    //             let clicksSorted = sortClicks(clicks as PointerEvent[])
    //             console.log(clicksSorted)
    //             return clicksSorted.length !== 0 ? clicksSorted[clicksSorted.length - 1].clientX : []
    //         })
    //     )
    //
    // run(clicks$);
}

// Task 5. bufferToggle
// Создайте поток из букв вводимых в поле ввода с идентификатором text-field.
// Буферизируйте значения, используя timer(0, 5000) и timer(5000, 5000)
export function Task5() {
    // const openSignal$ = timer(0, 5000)
    // const closeSignal$ = () =>
    //     timer(5000, 5000)
    // const source$ = fromEvent(document.getElementById('text-field'), 'keyup')
    //     .pipe(
    //         map((event) => (event as KeyboardEvent).key),
    //         bufferToggle(openSignal$, closeSignal$)
    //     )
    //
    // run(source$);
}

// Перепишите первое задание с использованием опереатора window
// Используйте операторы: concatMap
export function Task6() {
    // const stream$ = timer(0, 1000)
    //     .pipe(
    //         window(interval(3000)),
    //         concatMap(arr => arr.pipe(toArray())),
    //         scan(((acc, arr) => {
    //             return [...acc, ...arr]
    //         }), [])
    //     )
    //
    // run(stream$);
}

// Перепишите второе задание с использованием опереатора windowWhen
// Используйте операторы: concatMap, toArray
export function Task7() {
    function *getRandom(min: number, max: number) {
        while (true) {
            yield Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    const closeSignal$ = () =>{
        return fromEvent(document.getElementById('runBtn'), 'click')
    }
    // const stream$ = interval(500)
    //     .pipe(
    //         map(() => getRandom(1, 10).next().value),
    //         take(100),
    //         windowWhen(closeSignal$),
    //         concatMap(arr => arr.pipe(toArray()))
    //     )
    //
    // run(stream$);
}

// Перепишите третье задание с использованием опереатора windowCount
// Используйте операторы: concatMap, toArray
export function Task8() {
    // const source$ = range(1, 1000)
    //
    // const stream$ = source$.pipe(
    //     windowCount(10),
    //     concatMap((buf) => buf.pipe(
    //             toArray()
    //         )),
    //     concatMap(buf => of(buf).pipe(delay(5000)))
    // )
    //
    // run(stream$);
}

// Перепишите четвертое задание с использованием опереатора windowTime
// Используйте операторы: concatMap, toArray
export function Task9() {
    function sortClicks(sortArray: PointerEvent[]) {
        return sortArray.sort((a, b) => {
            if (a.clientX > b.clientX) return 1
            if (a.clientX < b.clientX) return -1
            return 0
        })
    }
    // const clicks$ = fromEvent(document, 'click')
    //     .pipe(
    //         windowTime(2000),
    //         concatMap(buf => buf.pipe(toArray())),
    //         map(clicks => {
    //             let clicksSorted = sortClicks(clicks as PointerEvent[])
    //             console.log(clicksSorted)
    //             return clicksSorted.length !== 0 ? clicksSorted[clicksSorted.length - 1].clientX : []
    //         })
    //     )
    //
    // run(clicks$);
}

// Перепишите пятое задание с использованием опереатора windowTime
// Используйте операторы: concatMap, toArray
export function Task10() {
    // const openSignal$ = timer(0, 5000)
    // const closeSignal$ = () =>
    //     timer(5000, 5000)
    // const source$ = fromEvent(document.getElementById('text-field'), 'keyup')
    //     .pipe(
    //         map((event) => (event as KeyboardEvent).key),
    //         windowToggle(openSignal$, closeSignal$),
    //         concatMap(buf => buf.pipe(toArray()))
    //     )
    //
    // run(source$);
}

// Task 11. pairwise
// Создайте поток кликов по документу. Буферизируйте по 2 элемента
// Подсчитайте расстояние между координатами кликов 
export function Task11() {
    const clicks$ = fromEvent(document, 'click')

    // const stream$ = clicks$
    //     .pipe(
    //         tap(click => console.log(click)),
    //         pairwise(),
    //         map(pair => {
    //             let diff = pair as [PointerEvent, PointerEvent]
    //             return [Math.abs(diff[0].clientX - diff[1].clientX), Math.abs(diff[0].clientY - diff[1].clientY)]
    //         })
    //     )
    //
    // run(stream$);
}


export function runner() {}