import { Observable, of, from, fromEvent, generate, pairs, EMPTY, concat, timer, zip, range, bindCallback, bindNodeCallback, fromEventPattern, interval, NEVER, throwError, defer } from "rxjs";
import {
    map,
    take,
    tap,
    switchMap,
    filter,
    reduce,
    catchError,
    delay,
    concatMap,
    withLatestFrom,
    pluck
} from "rxjs/operators";
import { fromFetch } from "rxjs/fetch";
import { ajax } from "rxjs/ajax";
import { addItem, run } from './../03-utils';

// Task 1. of() +
// RU:
// Реализуйте тело функции, которая принимает переменное количество параметров 
// и создает Observable, который выдает значения ее аргументов
// EN: 
// Implement the body of a function that takes a variable number of parameters
// and creates an Observable that emits the values of its arguments
(function task1(...rest: any[]): void {
    //const stream$ = of(...rest)

    //run(stream$);
})(1, 'string', true, {});

// Task 2.1 from() +
// RU: 
// Реализуйте тело функции, которая принимает на вход массив и создает Observable,
// который выдает значения этого массива
// EN: 
// Implement the body of a function that takes an array as input and creates an Observable,
// which emits the values of this array
(function task2_1(arr: any[]): void {
    //const stream$ = from(arr)
    
    // run(stream$);
})([1, 'string', true, {}]);


// Task 2.2. from() +
// RU: 
// Реализуйте тело функции, которая создает Observable, который выдает случайные числа в дианазоне от min до max
// используя генератор. Верните 10 чисел, используя take()
// EN:
// Implement the body of a function that creates an Observable that emits
// random numbers in range from min to max using a generator. 
// Return 10 numbers using take()
(function task2_2() {
    function* generator(min, max){
        while (true) {
          yield Math.floor( Math.random() * ( max - min ) ) + min;
        }
      }
      
    //const stream$ = from(generator(1, 10))
    
    // run(stream$.pipe(take(10)));
})();

// Task 3 fromEvent() +
// RU: 
// Реализуйте тело функции, которая принимает 
// id кнопки и создает Observable, который выдает значения времени клика по кнопке
// EN:
// Implement the body of a function that takes id of the button and 
// creates an Observable that emits the values of the click time on the button
(function task3(buttonId: string): void {
    // const stream$ = fromEvent(document.getElementById(buttonId), 'click')
    //     .pipe(pluck('timestamp'))
    
    // run(stream$);
})('runBtn');

// Task 4. fromEventPattern() ???????
// RU:
// Реализуйте функцию, которая создаст Observable, который выдает значения,
// передаваемые вызову методу emit();
// EN:
// Implement a function that will create an Observable that emits values
// passed to the call of the emit() method;
(function task4() {
    class С1 {
        private listeners: Function[] = [];

        registerListener(listener: Function) {
            this.listeners.push(listener);
        }

        emit(value: any) {
            this.listeners.forEach(listener => listener(value));
        }
    }

    const foo = new С1();

    function addHandler(handler) {
        foo.registerListener(handler)
    }

    //const stream$ = fromEventPattern(addHandler)
    //
    // run(stream$);

    foo.emit(1);
    foo.emit(2);
    foo.emit(3);
})();



// Task 5. fromFetch() +
// RU:
// Реализуйте функцию, которая создает Observable, который выдает имена пользователей. 
// Используйте операторы: fromFetch('http://jsonplaceholder.typicode.com/users'), filter(), switchMap(), map()
// EN:
// Implement a function that creates an Observable that emits usernames.
// Use operators: fromFetch('http://jsonplaceholder.typicode.com/users'), filter(), switchMap(), map()
(function task5() {
    // const stream$ = fromFetch('http://jsonplaceholder.typicode.com/users')
    //     .pipe(
    //         filter(users => users.ok),
    //         switchMap(users => users.json()),
    //         map(users => {
    //             return users.map(user => user['name']).toString()
    //         })
    //     )

    //run(stream$);
})();

// Task 6. ajax() // Author: Artem Onopriienko +?
// RU: 
// Получить пользователей, сформировать объекты { name: ..., email: ...} и отсортировать их по массиву из 2 полей
// const fields$ = from(['name', 'email']);
// Используйте операторы: ajax('http://jsonplaceholder.typicode.com/users'), switchMap(), map(), withLatestFrom()
// EN:
// Get the users and generate objects {name: ..., email: ...} and sort them by an array of 2 fields
// const fields$ = from(['name', 'email']);
// Use operators: ajax('http://jsonplaceholder.typicode.com/users'), switchMap(), map(), withLatestFrom()
(function task6() {
    const fields$ = from(['name', 'email']);
    const stream$ = ajax({url: 'http://jsonplaceholder.typicode.com/users', method: 'GET', responseType: "json"})

    // const combineStream$ = stream$
    //     .pipe(
    //         pluck('response'),
    //         map((users) => {
    //             let resp = users as Array<any>
    //             resp = resp.map(elem => {
    //                 return {
    //                     name: elem.name,
    //                     email: elem.email
    //                 }
    //             })
    //             return resp
    //         }),
    //         withLatestFrom(fields$.pipe(reduce((acc, elem) => {
    //             acc.push(elem)
    //             return acc
    //         }, []))),
    //         map(([users, fields]) => {
    //             fields.forEach((field, i) => {
    //                 users.sort((a, b) => {
    //                     if(i === 0) {
    //                         if (a[field] > b[field]) return 1
    //                         if (a[field] < b[field]) return -1
    //                         return 0
    //                     } else {
    //                         if (a[field[i-1]] === b[field[i-1]]) {
    //                             if (a[field] > b[field]) return 1
    //                             if (a[field] < b[field]) return -1
    //                             return 0
    //                         }
    //                     }
    //                 })
    //             })
    //             console.log(users)
    //             return users
    //         }),
    //         switchMap(arr => from(arr))
    // )
    //
    // run(combineStream$);
})();

// Task7. interval() +
// RU:
// Реализуйте функцию, которая создает Observable, который запрашивает и выдает имена пользователей каждые 5с 
// Используйте операторы: ajax('http://jsonplaceholder.typicode.com/users'), switchMap(), map()
// EN: 
// Implement a function that creates an Observable that requests and returns usernames every 5s
// Use operators: ajax ('http://jsonplaceholder.typicode.com/users'), switchMap(), map()
(function task7() {
    // const stream$ = interval(5000)
    //     .pipe(
    //         switchMap(() => ajax({url: 'http://jsonplaceholder.typicode.com/users', method: "GET",
    //             responseType: "json"})),
    //         pluck('response'),
    //         map((users: Array<any>) => {
    //             return users.map(user => user['name'])
    //         }),
    //         switchMap(users => from(users))
    //     )
    //
    // run(stream$);
})();

// Task 8. from(), timer(), zip() +
// RU:
// Реализуйте функцию, которая создает Observable, который выдает элементы массива каждые 2с 
// Создайте поток на основе массива items, используя from()
// Создайте поток, который будет выдавать значение каждые 2с, используя timer()
// Объедините эти потоки, используя zip
// EN:
// Implement a function that creates an Observable that emits array elements every 2s
// Create a stream based on the items array using from()
// Create a stream that will emit a value every 2s using timer()
// Combine these streams using zip
(function task8() {
    const items = [1, 2, 3, 4, 5];
    // const stream$ = zip(from(items), timer(0,2000))
    //     .pipe(
    //         map(interval => interval[0])
    //     )
    //
    // run(stream$);
})();

// Task 9. range() +
// RU:
// Реализуйте функцию, которая создает Observable, который выдает числа в диапазоне от 1 до 10 
// через случайное количество времени в диапазоне от 1с до 5с
// Используйте функции и операторы randomDelay(), of(), concatMap(), delay()
// EN: 
// Implement a function that creates an Observable that emits numbers from 1 to 10
// after a random amount of time in the range from 1s to 5s
// Use the function and operators: randomDelay(), of(), concatMap(), delay()
(function task9() {
    function randomDelay(min: number, max: number) {
        const pause = Math.floor( Math.random() * ( max - min ) ) + min;
        console.log(pause);
        return pause;
    }

    // const stream$ = range(1, 10)
    //     .pipe(
    //         concatMap(val => of(val).pipe(delay(randomDelay(1000, 5000))))
    //     )
    //
    // run(stream$);
})();

// Task 10. pairs() +
// RU:
// Реализуйте функцию, которая создает Observable.
// Пусть есть поток objAddressStream, который выдает объект и второй поток fieldsStream, который содержит перечень ключей объекта
// Необходимо модифицировать первый поток так, чтобы он выдавал объект только с данными ключей из 
// второго потока. 
// Используйте pairs(), switchMap(), reduce(), filter(), withLatestFrom()
// EN:
// Implement the function that creates the Observable.
// Let there be a stream objAddressStream that emits an object and a second stream fieldsStream that contains a list of object keys
// It is necessary to modify the first stream so that it emits an object only with the key data from
// second stream.
// Use operators: pairs(), switchMap(), reduce(), filter(), withLatestFrom()
(function task10() {
    const objAddressStream = of({
        country: 'Ukraine',
        city: 'Kyiv',
        index: '02130',
        street: 'Volodymyra Velikogo',
        build: 100,
        flat: 23
    });

    const fieldsStream = from(['country', 'street', 'flat']);

    // const stream$ = objAddressStream
    //     .pipe(
    //         switchMap(obj => pairs(obj)),
    //         withLatestFrom(fieldsStream.pipe(reduce((acc, elem) => {
    //             acc.push(elem)
    //             return acc
    //         }, []))),
    //         filter(arr => {
    //             const [data, fields] = arr
    //             const [key] = data
    //             return fields.includes(key)
    //         }),
    //         map(arr => arr[0]),
    //         reduce(((acc, elem) => {
    //             return {
    //                 ...acc,
    //                 [elem[0]]: elem[1]
    //             }
    //         }),{})
    //     )
    //
    // run(stream$);
})();

// Task 11. EMPTY +
// RU: 
// Реализуйте функцию, которая создает Observable.
// Оъявите пустой поток, который завершится через 2с, используйте оператор delay
// Создайте поток, который будет выдавать значения массива items, через каждые 2с.
// Используейте EMPTY, delay(), from(), concatMap(), concat()
// EN:
// Implement the function that creates the Observable.
// Declare an empty stream that will finish in 2s, use the delay operator
// Create a stream that will return the values of the items array every 2s.
// Use EMPTY, delay(), from(), concatMap(), concat()
(function task11() {
    const items = [1, 2, 3, 4, 5];

    // const stream$ = from(items)
    //     .pipe(
    //         concatMap(elem => concat(of(elem), EMPTY.pipe(delay(2000))))
    //     )
    //
    // run(stream$);
})();


// Task 12. NEVER +
// RU:
// Реализуйте функцию, которая создает бесконечный Observable из массива значений
// Используейте NEVER, concat, from
// EN: 
// Implement a function that creates an infinite Observable from an array of values
// Use NEVER, concat(), from()
(function task12() {
    const items = [1, 2, 3, 4, 5];

    // const stream$ = concat(from(items), NEVER)
    //
    // run(stream$);
})();

// Task 13. throwError() +
// RU:
// Реализуйте функцию, которая создаст Observable, который завершится с ошибкой, если в массиве встретится число 3.
// Используейте from, switchMap, of, throwError
// EN:
// Implement a function that will create an Observable that will emit error notification if the number 3 is encountered in the array.
// Use from(), switchMap(), of(), throwError()
(function task13() {
    const items = [1, 2, 3, 4, 5];

    // const stream$ = from(items)
    //     .pipe(
    //         switchMap(
    //             item => {
    //                 if (item === 3) {
    //                     return throwError(() => new Error(`This is an error!`))
    //                 }
    //                 else return of(item)
    //             }
    //         )
    //     )
    //
    // run(stream$);
})();

// Task 14. bindCallback() +
// RU: 
// Пусть есть некоторая функция doAsyncJob, которая выполняет асинхронную операцию и вызывает колбек, 
// когда эта операция завершается.
// Используя bindCallback, создайте функцию reactiveDoAsyncJob, вызовов которой создаст поток с передаваемым ей значением.
// EN:
// Let's have some doAsyncJob function that performs an asynchronous operation and calls a callback,
// when this operation completes.
// Using bindCallback, create a reactiveDoAsyncJob function that will be called and creates the stream 
// with the value passed to it.
(function task14() {
    function doAsyncJob(data: any, callback: (data: any) => void) {
        // imitation of some request 
        setTimeout(() => {
            callback(data)
        }, 3000);
    }

    // const reactiveDoAsyncJob = bindCallback(doAsyncJob)
    //
    // const stream$ = reactiveDoAsyncJob({ name: 'Anna' });
    //
    // run(stream$);
})();

// Task 15. bindNodeCallback() +
// RU:
// Пусть есть некоторая функция doAsyncJob, которая выполняет асинхронную операцию и вызывает колбек в "формате ноды", 
// когда эта операция завершается.
// Используя bindNodeCallback, создайте функцию reactiveDoAsyncJob, вызовов которой создаст поток,
// который завершится ошибкой.
// EN: 
// Let's have some function doAsyncJob that performs an asynchronous operation and calls a callback in the "node style",
// when this operation completes.
// Using bindNodeCallback, create a reactiveDoAsyncJob function that creates the stream which emits an error notification.
(function task15() {
    function doAsyncJob(data: any, callback: (error: any, data: any) => void) {
        // imitation of some request 
        setTimeout(() => {
            callback('Error', data)
        }, 3000);
    }

    // const reactiveDoAsyncJob = bindNodeCallback(doAsyncJob)
    //
    // const stream$ = reactiveDoAsyncJob({ name: 'Anna' });
    //
    // run(stream$);
})();

// Task 16. defer() +?
// RU: 
// Пусть есть некоторая функция getUsers(), которая возвращает коллекцию пользователей с помощью fetch()
// Создать Observable, в котром запуск функции getUsers() произойдет в момент подписки на поток
// Используйте defer, switchMap
// EN:
// Let's have some getUsers() function that returns a collection of users using fetch()
// Create an Observable, in which the getUsers() function will be called at the time of subscribing to the stream
// Use defer(), switchMap()
(function task16() {
    function getUsers(): Promise<any> {
        addItem("fetching data");
        return fetch(`http://jsonplaceholder.typicode.com/users`);
    }

    //getUsers().then(data => data.json()).then(addItem);


    // const stream$ = defer(() => {
    //     return getUsers().then(data => data.json()).then(addItem)
    // })
    //
    // addItem("I don't want that request now");
    // run(stream$);
})();



// Task 17. generate() +
// RU:
// Реализуйте функцию, которая создает Observable, который будет выдавать в поток значения, 
// хранящихся в свойстве sequence экземпляра класса С
// EN:
// Implement a function that creates an Observable that emits the values
// stored in the sequence property of instance of the C class
(function task17() {
    class C<T> {
        private sequence: T[] = [];

        get size(): number {
            return this.sequence.length;
        }

        add(elem: T) {
            this.sequence.push(elem);
            return this;
        }

        get(index: number): T {
            return this.sequence[index];
        }

        getAll(): Array<T> {
            return this.sequence
        }

        allStream(): Observable<T> {
            return from(this.getAll())
        }
    }

    const sequence = new C<number>().add(1).add(10).add(1000).add(10000);
    //
    // const stream$ = sequence.allStream()
    //
    // run(stream$);
})();







export function runner() {}