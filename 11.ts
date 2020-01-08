// interface IPriceData {
//     /** 标识 */
//     cbf: string
//     /** id */
//     id: string
// }

// // 将IPriceData塞进数组里
// type IPriceDataArray = Array<IPriceData>

// function getPrice () {
//     // Promise的泛型参数使用了IPriceDataArray类型，then里面返回的数据就是IPriceDataArray类型
//     return new Promise<IPriceDataArray>((resolve, reject) => {
//         // $.get('https://xxxxxxx/prices/pgets?ids=P_100012&area=&source=', data => {
//         //     resolve(data)
//         // })

//         setTimeout(() => {
//             let data = [{
//                 cbf: '1',
//                 id: '1'
//             }]
//             resolve(data)
//         }, 1000)
//     })

// }

// getPrice().then(res => {
//     res[0].cbf
// })

function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));

function fun():string {
    console.log(1)
    return '1'
}

let a = 'qweqw' || 12
a = 1

// interface Person {
//     name: string;
//     age?: number;
//     [pr1oName: string]: any
// }

// let tom1: Person = {
//     name: 'Tom',
//     ads:123
// };

interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id:1,
    name: 'Tom',
    gender: 'male'
};

// tom.id = 89757;
let fibonacci: any[] = [1, '1', 2, 3, 5];

function sum() {
    // let args: IArguments = arguments;
}
function sum1() {
    let args: IArguments = arguments;
}

let mySum1 = function (x: number, y: number): number {
    return x + y;
};

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// function buildName(firstName?: string, lastName: string) {
//     if (firstName) {
//         return firstName + ' ' + lastName;
//     } else {
//         return lastName;
//     }
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName(undefined, 'Tom');


function buildName(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
// let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');

// index.ts(1,40): error TS1016: A required parameter cannot follow an optional parameter.


function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
reverse(1)

function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

// qqq('#foo');
// qq('wq')

type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
// handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'


// enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 3); // true
console.log(Days["Wed"] === 3); // true
console.log(Days[3] === "Sun"); // false



interface Alarm {
    alert();
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}