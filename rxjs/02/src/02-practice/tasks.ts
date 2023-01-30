import { addItem, run } from './../03-utils';
import {
    from,
    fromEvent,
    of,
    first,
    last,
    elementAt,
    min,
    max,
    find,
    findIndex,
    single,
    switchMap,
    map,
    ignoreElements
} from 'rxjs';
import {ajax} from "rxjs/internal/ajax/ajax";

// Task 1. first()
// Создайте поток объектов с двумя свойствами: action и priority
// Получите первый объект из потока с высоким приоритетом
(function task1(): void {
    // let objects = [
    //     {
    //         action: 'do',
    //         priority: 'low'
    //     },
    //     {
    //         action: 'stop',
    //         priority: 'low'
    //     },
    //     {
    //         action: 'work',
    //         priority: 'high'
    //     },
    //     {
    //         action: 'bill',
    //         priority: 'low'
    //     },
    //     {
    //         action: 'will',
    //         priority: 'high'
    //     },
    //
    // ]
    // const stream$ = from(objects)
    //     .pipe(
    //         first(obj => obj.priority === 'high')
    //     )
    //
    // run(stream$);
})();

// Task 2. last()
// Создайте поток слов из предложения 'Мягкое слово кости не ломит'. Получите последнюю слово, которое содержит 2 символа
(function task2(): void {
    // let str = ["Мягкое", "слово", "кости", "не", "ломит"]
    // const stream$ = from(str)
    //     .pipe(
    //         last(str => str.length === 2)
    //     )
    //
    // run(stream$);
})();


// Task 3. elementAt()
// Создайте поток событий клик по документу. Получите второй объект события клик.
(function task3(): void {
    // const stream$ = fromEvent(document, 'click').pipe(elementAt(1))
    //
    // run(stream$, { outputMethod: "console"});
})();

// Task 4. min() (Vitalii Puzakov)
// Создайте поток слов из предложения 'Мягкое слово кости не ломит'. Найдите минимальную длину слова в предложении.
(function task4() {
    const string = 'Мягкое слово кости не ломит';

    // const source$ = from(string.split(' ')).pipe(min((x, y) => {
    //     if (x.length > y.length)
    //         return 1
    //     if (x.length < y.length)
    //         return -1
    //     return 0
    // }))
    //
    // run(source$);
})();


// Task 5. max()
// Создайте поток объектов с двумя свойствами: title, quantity.
// Получите объект с максимальным значением quantity 
(function task5() {
    // let objects = [
    //     {
    //         title: "First",
    //         quantity: 20
    //     },
    //     {
    //         title: "Second",
    //         quantity: 10
    //     },
    //     {
    //         title: "Third",
    //         quantity: 50
    //     },
    //     {
    //         title: "Fourth",
    //         quantity: 1
    //     },
    //     {
    //         title: "Fifth",
    //         quantity: 17
    //     }
    // ]

    // const stream$ = from(objects).pipe(max((a, b) =>{
    //     if(a.quantity > b.quantity) return 1
    //     if(a.quantity < b.quantity) return -1
    //     return 0
    // }))
    //
    // run(stream$);
})();

// Task 6. find() (Andrii Olepir)
// Создайте поток, используя ajax(`https://jsonplaceholder.typicode.com/users`)
// Получите первого пользователя, email которого, заканчивается на 'biz'  
(function task6() {
    function indexOfEnd(mainString, string) {
        let io = mainString.lastIndexOf(string);
        return io == -1 ? -1 : io + string.length;
    }
    // const stream$ = ajax(`https://jsonplaceholder.typicode.com/users`)
    //     .pipe(
    //         switchMap(ajax => from(ajax.response as Array<any>)),
    //         find(ajaxResponse => {
    //             if (ajaxResponse['email'].length === indexOfEnd(ajaxResponse['email'], 'biz'))
    //                 return true
    //     }))
    //
    // run(stream$);
})();

// Task7. findIndex()
// Создайте поток объектов с двумя свойствами: id, name.
// Получите номер объекта в потоке, у которого длина name больше 10 символов  
(function task7() {
    let objects = [
        {
            id: 1,
            name: "Nick"
        },
        {
            id: 2,
            name: "Alex"
        },
        {
            id: 3,
            name: "Serovodorod"
        },
        {
            id: 4,
            name: "Jack"
        },
        {
            id: 5,
            name: "John"
        }
    ]

    // const stream$ = from(objects).pipe(
    //     findIndex(obj => {
    //         return obj.name.length > 10;
    //     }),
    //     map(el => el+1)
    // )
    //
    // run(stream$);
})();

// Task 8. single()
// Создайте поток объектов с двумя свойствами: title, priority так, чтобы некоторые объекты
// имели одинаковые значения title
// Получите объект у которого title = 'Learn RxJS', если он единственный в потоке
(function task8() {
    let object1 = [
        {
            title: "play",
            priority: 'low'
        },
        {
            title: "walk",
            priority: 'low'
        },
        {
            title: "work",
            priority: 'low'
        },
        {
            title: "play",
            priority: 'high'
        },
        {
            title: "Learn RxJS",
            priority: 'high'
        }
    ]
    const object2 = [
        {
            title: "play",
            priority: 'low'
        },
        {
            title: "walk",
            priority: 'low'
        },
        {
            title: "work",
            priority: 'low'
        },
        {
            title: "Learn RxJS",
            priority: 'high'
        },
        {
            title: "Learn RxJS",
            priority: 'high'
        }
    ]
    // const stream$ = from(object2).pipe(
    //     single(elem => elem.title === 'Learn RxJS')
    // )
    //
    // run(stream$);
})();

// Task 9. ignoreElements()
(function task9() {
    const object2 = [
        {
            title: "play",
            priority: 'low'
        },
        {
            title: "walk",
            priority: 'low'
        },
        {
            title: "work",
            priority: 'low'
        },
        {
            title: "Learn RxJS",
            priority: 'high'
        },
        {
            title: "Learn RxJS",
            priority: 'high'
        }
    ]
    // const stream$ = from(object2).pipe(
    //     single(elem => elem.title === 'Learn RxJS')
    // )
    //
    // const res$ = stream$.pipe(ignoreElements())
    // run(res$);
})()
// Придумать задачу и реализовать


export function runner() {}