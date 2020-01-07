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