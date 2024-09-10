// console.log('123');

// let i = 0;
// while (i < 10) {
//     console.log(i++)
// }

// for(let i = 1; i<=10; i++){
//     console.log(i)
// }

// подумать, что изменить чтобы при вводе 0 не выводился 0
// let p = 1;
// let i = 3;
// while ((p != 0) & (i-- > 0)) {
//     p = prompt('введи число')
//     console.log('квадрат числа = ', p*p)
// }

// for (let i = 1; i <10;i++){
//     if (i == 6){
//         // break;
//         continue;
//     } 
//     console.log(i)
// }


// выведите все числа до 100 которые делятся на 3
// выведите название месяца по его номеру
// компьютер загадывает число от 1 до 3, и дает пользователю возможность его отгадать

// let max = 3;
// let min = 1;
// let a =  Math.floor(Math.random() * (max - min + 1)) + min;


// //Function Declaration
// function f1(mx, mn){
//     let a = Math.floor(Math.random() * (mx - mn + 1)) + mn
//     return a
// }

// //Function Expression
// let f2 = function(mx, mn){
//     let a = Math.floor(Math.random() * (mx - mn + 1)) + mn
//     return a
// } 
// стрелочная функция 
let f = (mx, mn) => {
    let a = Math.floor(Math.random() * (mx - mn + 1)) + mn
    return a
}

// напишите программу которая определит бьет ли ферзь фигуру 
//если даны координаты ферзя и фигуры ( abcdefgh 12345678 )