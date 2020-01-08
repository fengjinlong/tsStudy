var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
function fun() {
    console.log(1);
    return '1';
}
var a = 'qweqw' || 12;
a = 1;
var tom = {
    id: 1,
    name: 'Tom',
    gender: 'male'
};
// tom.id = 89757;
var fibonacci = [1, '1', 2, 3, 5];
function sum() {
    // let args: IArguments = arguments;
}
function sum1() {
    var args = arguments;
}
var mySum1 = function (x, y) {
    return x + y;
};
var mySum = function (x, y) {
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
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + ' ' + lastName;
}
// let tomcat = buildName('Tom', 'Cat');
var cat = buildName(undefined, 'Cat');
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
reverse(1);
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
function handleEvent(ele, event) {
    // do something
}
handleEvent(document.getElementById('hello'), 'scroll'); // 没问题
// handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'
// enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
var Days;
(function (Days) {
    Days[Days["Sun"] = 3] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
console.log(Days["Sun"] === 3); // true
console.log(Days["Wed"] === 3); // true
console.log(Days[3] === "Sun"); // false
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () {
        console.log('SecurityDoor alert');
    };
    return SecurityDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('Car alert');
    };
    return Car;
}());
